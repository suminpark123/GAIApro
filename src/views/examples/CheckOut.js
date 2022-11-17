import React, { useState } from "react";
import "assets/css/CheckOut.css";
import { Button, Row, Card, Col } from "reactstrap";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { useHistory } from "react-router-dom";

function CheckOut() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const history = useHistory();
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addr, setAddr] = useState("");

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  function onClickPayment() {
    const { IMP } = window;
    IMP.init("imp87575644");

    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 52000, // 결제금액
      name: "누깍 스탠리사코백", // 주문명
      buyer_name: "서은유", // 구매자 이름
      buyer_tel: "01033337777", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "광주광역시 북구 매곡동 대성베르힐 101동 204호", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "https://www.yourdomain.com/payments/complete",
    };
    IMP.request_pay(data, callback);
  }

  function callback(response) {
    const { success, merchant_uid, error_msg } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  function shoping() {
    history.push("/Product");
  }

  function last() {
    if (localStorage.getItem("id") == undefined) {
      alert("로그인이 필요합니다.");
    } else {
      onClickPayment();
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="info">
        <div style={{ textAlign: "center" }}>
          <h1 className="Title" style={{ margin: "0px" }}>
            Information
          </h1>
          <br />
          <br />
          <br />
          <br />
        </div>

        <form
          className="register-form"
          action="http://localhost:3007/CheckOut"
          method="post"
        >
          <Row>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-profile card-plain">
                <div>
                  <img src={require("assets/img/택배1.jpg")} />
                </div>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-profile card-plain">
                {/* <span className="글자크기">수령인</span> */}

                <input
                  type="text"
                  placeholder={"수령인을 입력해주세요"}
                  name="o_mem"
                  style={{
                    width: "600px",
                    height: "70px",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                  id="name"
                />
                <br />
                {/* <span className="글자크기">전화번호</span> */}
                <input
                  type="text"
                  placeholder={"전화번호를 입력해주세요"}
                  name="o_tel"
                  style={{
                    width: "600px",
                    height: "70px",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                  id="phonenumber"
                />
                <br />
                {/* <span className="글자크기">배송지</span> */}
                <input
                  type="text"
                  placeholder={"배송지를 입력해주세요"}
                  onClick={openPostCode}
                  value={addr}
                  name="o_adr"
                  style={{
                    width: "600px",
                    height: "70px",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                  id="addr1"
                />
                <br />
                <input
                  type="text"
                  placeholder={"상세주소를 입력해주세요"}
                  name="o_adr2"
                  style={{
                    width: "600px",
                    height: "70px",
                    fontSize: "30px",
                    // marginLeft: "600px",
                    textAlign: "center",
                  }}
                  id="addr2"
                />
                <br />
                <Button className="CBtn" type="submit">
                  입력완료
                </Button>
                <div id="popupDom">
                  {isPopupOpen && (
                    <PopupDom>
                      <PopupPostCode onClose={closePostCode} end={setAddr} />
                    </PopupDom>
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </form>
      </div>

      <body>
        <section className="cart">
          <div className="cart__mainbtns">
            <Button className="cart__bigorderbtn left" onClick={shoping}>
              쇼핑 계속하기
            </Button>
            <Button className="cart__bigorderbtn right" onClick={last}>
              결제하기
            </Button>
          </div>
          <div className="cart__information">
            <ul>
              <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
              <li>
                가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
              </li>
              <li>
                오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될
                수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.
              </li>
            </ul>
          </div>
        </section>
      </body>
    </>
  );
}

export default CheckOut;
