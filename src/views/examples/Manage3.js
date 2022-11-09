import React from "react";

import { Container, Row, Col, Button } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";

function Manage3() {
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
                <h2 className="title">주문 관리</h2>
                <h4 style={{ marginBottom: "30px" }}>
                  <b>GAIA 주문 현황</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <table
                  border="1"
                  width={"600px"}
                  height={"100px"}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <tr bgcolor={"whitesmoke"}>
                    <th></th>
                    <th>아이디</th>
                    <th>상품 정보</th>
                    <th>
                      상품 금액{"("}수량{")"}
                    </th>
                    <th>결제 상태</th>
                    <th>배송 상태</th>
                    <th>특이사항</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>chanik1119</b>
                    </td>
                    <td>
                      <b>프라이탁 가방</b>
                    </td>
                    <td>
                      <b>120,000(1개)</b>
                    </td>
                    <td>
                      <b>결제 완료</b>
                    </td>
                    <td>
                      <b>배송 중</b>
                    </td>
                    <td>
                      <b></b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b>suminpark</b>
                    </td>
                    <td>
                      <b>파타고니아 집업</b>
                    </td>
                    <td>
                      <b>150,000(1개)</b>
                    </td>
                    <td>
                      <b>결제 완료</b>
                    </td>
                    <td>
                      <b>배송 완료</b>
                    </td>
                    <td>
                      <b></b>
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
                  완료
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

export default Manage3;
