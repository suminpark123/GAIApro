/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Customer from "./회원관리 copy";
import axios from "axios";
import { useEffect, useState } from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";
import Customer2 from "./상품관리 copy 2";

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
                  {/* <th></th> */}
                  <th>번호</th>
                  <th>상품</th>
                  <th>가격</th>
                  <th>포인트</th>
                  <th>브랜드</th>
                </tr>
                {users.map((c) => {
                  return (
                    <Customer2
                      key={c.p_seq}
                      p_seq={c.p_seq}
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
