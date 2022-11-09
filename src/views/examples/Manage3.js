import React from "react";

import { Container, Row, Col, Button } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";
import { useState, useEffect } from "react";

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
                    <th>수령인</th>
                    <th>연락처</th>
                    <th>상품 정보</th>

                    <th>총 금액</th>
                    <th>주소</th>
                    <th>상세주소</th>
                    <th>결제 상태</th>
                    <th>배송 상태</th>
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
