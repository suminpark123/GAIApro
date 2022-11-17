import React from "react";
import Customer from "./회원정보랜딩";
import axios from "axios";
import { useEffect, useState } from "react";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
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
