import React from "react";
import Company1 from "./CompanyStory/Company1";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader3.js";
import SectionDark from "views/MainPage/SectionDark";
import { Link } from "react-router-dom";

function LandingPage3() {
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
                <h2 className="title" id="brand">
                  <b>
                    "우리가 만드는 모든 것이
                    <br />
                    지구에 영향을 미칩니다."
                  </b>
                </h2>
                <h5 className="description">
                  <b>
                    환경 문제는 분명 해답이 있고 무조건 적으로 불가능한 일이
                    아닙니다. <br />
                    저희 GAIA와 같은 길을 걸어가는 많은 기업들을 만나보세요.
                  </b>
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody style={{ width: "650px" }}>
                    <p>
                      <b>
                        안녕하세요 GAIA의 서은유입니다!
                        <br />
                        제가 생각하는 가장 이상적인 업사이클링은 환경에 악영향을
                        주는 요소를
                        <br />
                        새로운 가치를 가진 작품으로 만들어 내는 것이고
                        <br />
                        그 과정 중 환경에 어떠한 부정적인 영향을 주어서도
                        안되며,
                        <br />
                        후에 처리를 할 때도 또 다시 새로운 원료로써 사용 될수
                        있는 것이라고 생각합니다.
                        <br />
                        저희 GAIA가 아직 그 정점에 도달하지는 못했지만 지금
                        소개해드리는 기업들과 함께
                        <br />
                        이상적인 업사이클링을 향해 점점 더 가까워질 수 있도록
                        끊임없이 도전하겠습니다.
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="3">
                <Card className="card-profile card-plain">
                  <div>
                    <img
                      src={require("assets/img/icons/free-icon-girl-21185123.png")}
                    />
                  </div>
                  <CardBody></CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Company1></Company1>

            <Pagination style={{ justifyContent: "center" }}>
              <PaginationItem>
                <PaginationLink to="/company1" tag={Link}>
                  First
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink to="/company1" tag={Link}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink to="/company2" tag={Link}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink to="/company3" tag={Link}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink to="/company4" tag={Link}>
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink to="/company4" tag={Link}>
                  Last
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container>
        </div>
      </div>
      <SectionDark />
    </>
  );
}
export default LandingPage3;
