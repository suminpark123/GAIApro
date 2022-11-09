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
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";

function Manages1() {
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
      .post("http://localhost:3007/alll")
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
                  <th>아이디</th>
                  <th>이름</th>
                  <th>닉네임</th>
                  <th>생년월일</th>
                  <th>성별</th>
                </tr>
                {users.map((c) => {
                  return (
                    <Customer
                      // key={c.id}
                      id={c.id}
                      name={c.name}
                      nick={c.nick}
                      birth={c.birth}
                      gender={c.gender}
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

export default Manages1;
