import React from "react";

import { Container, Row, Col, Button } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";

function Manage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">회원 관리</h2>
                <h4 style={{ marginBottom: "30px" }}>
                  <b>GAIA 회원 명단</b>
                </h4>
                <table
                  border="1"
                  width={"600px"}
                  height={"500px"}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <tr bgcolor={"whitesmoke"}>
                    <th></th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>닉네임</th>
                    <th>생년월일</th>
                    <th>성별</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>suminpark</b>
                    </td>
                    <td>
                      <b>박수민</b>
                    </td>
                    <td>
                      <b>팀장님</b>
                    </td>
                    <td>
                      <b>1995.</b>
                    </td>
                    <td>
                      <b>남성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>chanik1119</b>
                    </td>
                    <td>
                      <b>조찬익</b>
                    </td>
                    <td>
                      <b>PAKA</b>
                    </td>
                    <td>
                      <b>1996.11.19</b>
                    </td>
                    <td>
                      <b>남성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>meta4po</b>
                    </td>
                    <td>
                      <b>서은유</b>
                    </td>
                    <td>
                      <b>애기야</b>
                    </td>
                    <td>
                      <b>1998.</b>
                    </td>
                    <td>
                      <b>여성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>nogangmin</b>
                    </td>
                    <td>
                      <b>노강민</b>
                    </td>
                    <td>
                      <b>막내는신이다</b>
                    </td>
                    <td>
                      <b>2001.</b>
                    </td>
                    <td>
                      <b>남성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>nike</b>
                    </td>
                    <td>
                      <b>나이키</b>
                    </td>
                    <td>
                      <b>아디다스신으세요</b>
                    </td>
                    <td>
                      <b>1996.01.01</b>
                    </td>
                    <td>
                      <b>여성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>hansohee</b>
                    </td>
                    <td>
                      <b>한소희</b>
                    </td>
                    <td>
                      <b>여신</b>
                    </td>
                    <td>
                      <b>1994.11.18</b>
                    </td>
                    <td>
                      <b>여성</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>namjoohyuk</b>
                    </td>
                    <td>
                      <b>남주혁</b>
                    </td>
                    <td>
                      <b>존잘</b>
                    </td>
                    <td>
                      <b>1994.02.22</b>
                    </td>
                    <td>
                      <b>남성</b>
                    </td>
                  </tr>
                </table>
                <Button
                  variant="primary"
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    marginRight: "20px",
                  }}
                >
                  삭제
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <SectionDark />
    </>
  );
}

export default Manage;
