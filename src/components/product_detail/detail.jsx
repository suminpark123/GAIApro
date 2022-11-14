import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/fetcher";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useCallback } from "react";
import axios from "axios";
import Reviewsu from "./리뷰";

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  // 추가
  // const textRef = useRef();
  // const handleResizeHeight = useCallback(() => {
  //   textRef.current.style.height = textRef.current.scrollHeight + "px";
  // }, []);

  const history = useHistory();
  // 상세페이지에서 물건 수량 조절
  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  // 장바구니에 중복된 물건을 담을 때 사용
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: quantity,
      price: product.price,
      provider: product.provider,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: count,
      price: product.price,
      provider: product.provider,
    };
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
      );
    });
  }, [id, product.price]);

  function back() {
    history.push("/Product");
  }
  const [te, sette] = useState("");
  const [resu, setResu] = useState([]);
  const [users, setUsers] = useState([]);
  const [reuser, setreuser] = useState("");
  const [ck, setCk] = useState([]);
  // 추가
  const handleReview = (e) => {
    e.preventDefault();
    console.log("handleLogin!");

    getProducts().then((data) => {
      console.log(data);
      // console.log("상품의 id값:" + parseInt(id));
      setResu(data.data.products);
    });

    axios
      .post("http://localhost:3007/review", {
        review: document.getElementById("userReview").value,
        id: localStorage.getItem("id"),
        suproduct: parseInt(id),
      })
      .then((result) => {
        //console.log("데이터셩공", result.data.result);
        console.log("액시오스성공", result.data.result);
        localStorage.setItem("id", result.data.result);
        // setName(result.data.id + "님 환영");
      })
      .catch(() => {
        console.log("데이터실패");
      });
  };

  useEffect(function () {
    setreuser(localStorage.getItem("id"));
    axios
      .post("http://localhost:3007/review2", {
        id: localStorage.getItem("id"),
      })
      .then((result) => {
        //console.log("데이터셩공", result.data.result);
        console.log("액시오스성공2", result.data.result);
        // setCk(result.data.result[0].p.id);
        // localStorage.setItem("id", result.data.result);
        // setName(result.data.id + "님 환영");
        // 여긴지우기 금지
      })
      .catch(() => {
        console.log("데이터실패");
      });
  }, []);

  useEffect(function () {
    // console.log("객체상품:" + parseInt(id));
    // console.log("id값:" + ck);
    axios
      .post("http://localhost:3007/review3", {})
      .then((result) => {
        console.log("액시오스성공3", result.data.result);
        // if (parseInt(id) == 1) {
        setUsers(result.data.result);
        // }
      })
      .catch(() => {
        console.log("데이터실패");
      });
  }, []);

  function Protest(e) {
    e.preventDefault();
    if (localStorage.getItem("id") == undefined) {
      alert("로그인 해주세요");
    }
    // else {
    //   const nu = parseInt(id);
    //   window.location.replace(`/Product/${nu}`);
    // }
  }

  return (
    product && (
      <>
        <main className={styles.main}>
          <section className={styles.product}>
            <img
              style={{ width: "40px", height: "40px" }}
              src={process.env.PUBLIC_URL + "/images/icons8-undo-64.png"}
              onClick={back}
            />
            <div className={styles.product_img}>
              <img src={process.env.PUBLIC_URL + product.image} alt="product" />
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <br />
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}</p>
              <span className={styles.price}>
                {convertPrice(product.price + "")}
                <span className={styles.unit}>원</span>
              </span>
            </div>

            <div className={styles.delivery}>
              <p>택배배송 / 무료배송</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.amount}>
              <img
                className={styles.minus}
                src={process.env.PUBLIC_URL + "/images/icon-minus-line.svg"}
                alt="minus"
                onClick={() => handleQuantity("minus")}
              />

              <div className={styles.count}>
                <span>{count}</span>
              </div>

              <img
                className={styles.plus}
                src={process.env.PUBLIC_URL + "/images/icon-plus-line.svg"}
                alt="plus"
                onClick={() => handleQuantity("plus")}
              />
            </div>

            <div className={styles.line}></div>

            <div className={styles.sum}>
              <div>
                <span className={styles.sum_price}>총 상품 금액</span>
              </div>

              <div className={styles.total_info}>
                <span className={styles.total}>
                  총 수량 <span className={styles.total_count}>{count}개</span>
                </span>
                <span className={styles.total_price}>
                  {convertPrice(product.price * count)}
                  <span className={styles.total_unit}>원</span>
                </span>
              </div>
            </div>

            <div className={styles.btn}>
              <button
                className={styles.btn_buy}
                onClick={() => {
                  handleCart();
                  history.push("/cart");
                }}
              >
                바로 구매
              </button>
              <button
                className={styles.btn_cart}
                onClick={() => {
                  handleCart();
                  history.push("/Product");
                }}
              >
                장바구니
              </button>
            </div>
          </section>
        </main>
        <div style={{ height: "200px" }}></div>
        {/* 추가 */}
        <div className="section text-center">
          <form className="register-form" onSubmit={handleReview}>
            <div
              style={{
                display: "flex",

                marginLeft: "450px",
              }}
            >
              <div style={{ color: "red" }}>{reuser}</div>
              <textarea
                cols="70"
                rows="5"
                placeholder="입력하세요"
                id="userReview"
              ></textarea>
              <button type="submit" onClick={Protest}>
                제출
              </button>
            </div>
          </form>
          <div style={{ height: "1400px" }}>
            {users.map((c) => {
              return (
                <Reviewsu
                  // key={c.p_seq}
                  p_id={c.p_id}
                  m_id={c.m_id}
                  text={c.text}
                />
              );
            })}
          </div>
        </div>
      </>
    )
  );
};
