import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
import SectionDark from "views/MainPage/SectionDark";
import Customer2 from "./관리자상품";
function Manages2() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const [users, setUsers] = useState([]);
  useEffect(function () {
    axios
      .post("http://localhost:3007/alll2")
      .then((result) => {
        console.log("데이터셩공", result.data.result);
        setUsers(result.data.result);
      })
      .catch(() => {
        console.log("데이터실패");
      });
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <div>
            <br></br>
            <br></br>
            <div
              style={{
                width: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <table border="1" width={"100%"} height={"100%"}>
                <tr bgcolor={"whitesmoke"}>
                  <th>번호</th>
                  <th>상품</th>
                  <th>가격</th>
                  <th>포인트</th>
                  <th>브랜드</th>
                </tr>
                {users.map((c) => {
                  return (
                    <Customer2
                      key={c.p_id}
                      p_id={c.p_id}
                      p_name={c.p_name}
                      p_price={c.p_price}
                      p_point={c.p_point}
                      p_brand={c.p_brand}
                    />
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <SectionDark />
    </>
  );
}
export default Manages2;
