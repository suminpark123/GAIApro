import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/index-sections/SectionDark";
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
                <h2 className="title">기업 소개</h2>
                <h5 className="description1">
                  업사이클링 기업은 여러분이 생각하는 것보다 훨씬 많답니다! 한번
                  살펴보러 갈까요?
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <p>
                      안녕하세요 GAIA의 서은유입니다! 저는 오늘 업사이클링
                      기업에 대해 설명해드릴려고 합니다! 우리나라가 분리수거를
                      잘한다는 사실은 여러분들도 잘 아실거라고 생각합니다. 무려
                      세계에서 두 번째로 분리수거를 잘 지키는 나라라고 하는데요.
                      하지만 우리가 잘 알지 못한 사실, 바로 우리가 열심히
                      분리수거를 한 들 재활용률은 낮으며, 재활용 자체가 불가능한
                      플라스틱 또한 있다, 알고 계셨나요? 이 페이지에서는
                      폐플라스틱, 폐
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
          {/* 첫번째 기업소개 */}
          <Container>
            <Row>
              <Col md="5" style={{ marginBottom: "60px" }}>
                <a href="http://dropoff.co.kr/_idio/inc/sub1.html">
                  <img
                    alt="..."
                    src={require("assets/img/faces/dropoff.png")}
                  />
                </a>
              </Col>
              <Col md="7">
                <div className="description1" style={{ width: "750px" }}>
                  <div>
                    <h3 className="info-title">
                      <b>DROPOFF</b>
                    </h3>
                  </div>
                  <p className="description1">
                    드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를
                    제작하는 브랜드로서 국내 어족자원보호 및 해양환경보존
                    문화정착을 위해 노력하며 성장중에 있습니다. 사람이
                    살아가는데 필수적인 3가지 요소인 의식주 중 의류산업이
                    환경오염에 10%를 차지하고있습니다. 빠르게 발전하는
                    의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
                    제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
                    환경보존프로젝트에 사용합니다.
                  </p>
                </div>
              </Col>
              {/* 2번째 */}
              <Col md="5">
                <div>
                  <h3 className="info-title">
                    <b>콤마나인</b>
                  </h3>
                  <p className="description1">
                    WE LIVE NAU 포틀랜드에서 시작된 친환경 라이프웨어
                    나우(nau)는 지속 가능한 방식으로 살아가는데 기본이 되는 옷을
                    만들자는 아이디어로 시작된 브랜드입니다. 현대인의 지속
                    가능한 라이프스타일을 위한 옷을 만듭니다.국내 최초 대한민국
                    폐페트병 재생 폴리에스터를 사용한 플라스틱과 옷을 모두 만든
                    후 필요한 원단만 염색하는 친환경 염색 기법 가먼트다잉을
                    사용하고 있습니다.
                  </p>
                </div>
              </Col>
              <Col md="5" style={{ marginLeft: "100px", marginTop: "35px" }}>
                <a href="#pablo" style={{ marginLeft: "352px " }}>
                  <img
                    alt="..."
                    src={require("assets/img/faces/콤마나인.png")}
                  />
                </a>
              </Col>
              {/* 3번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <a href="http://www.renuers.com">
                  <img
                    alt="..."
                    src={require("assets/img/faces/리뉴어스.png")}
                  />
                </a>
              </Col>
              <Col md="5" style={{ marginTop: "60px" }}>
                <div className="description1">
                  <div>
                    <h3 className="info-title">
                      <b>리뉴어스</b>
                    </h3>
                  </div>
                  <p className="description1">
                    드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를
                    제작하는 브랜드로서 국내 어족자원보호 및 해양환경보존
                    문화정착을 위해 노력하며 성장중에 있습니다. 사람이
                    살아가는데 필수적인 3가지 요소인 의식주 중 의류산업이
                    환경오염에 10%를 차지하고있습니다. 빠르게 발전하는
                    의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
                    제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
                    환경보존프로젝트에 사용합니다.
                  </p>
                </div>
              </Col>
              {/* 4번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <h3 className="info-title">
                  <b>DROPOFF</b>
                </h3>
                <p className="description1">
                  드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를 제작하는
                  브랜드로서 국내 어족자원보호 및 해양환경보존 문화정착을 위해
                  노력하며 성장중에 있습니다. 사람이 살아가는데 필수적인 3가지
                  요소인 의식주 중 의류산업이 환경오염에 10%를 차지하고있습니다.
                  빠르게 발전하는 의류산업과 Fast Fashion에 있어 지속가능한
                  친환경 의류를 제작하여 판매 수익금의 15%를 우리나라
                  어족자원보호 및 환경보존프로젝트에 사용합니다.
                </p>
              </Col>
              <Col md="5" style={{ marginLeft: "100px", marginTop: "35px" }}>
                <a href="#pablo" style={{ marginLeft: "352px" }}>
                  <img
                    alt="..."
                    src={require("assets/img/faces/dropoff.png")}
                  />
                </a>
              </Col>
              {/* 5번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <a href="#pablo">
                  <img
                    alt="..."
                    src={require("assets/img/faces/dropoff.png")}
                  />
                </a>
              </Col>
              <Col md="5" style={{ marginTop: "60px" }}>
                <div className="description1">
                  <div>
                    <h3 className="info-title">
                      <b>DROPOFF</b>
                    </h3>
                  </div>
                  <p className="description1">
                    드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를
                    제작하는 브랜드로서 국내 어족자원보호 및 해양환경보존
                    문화정착을 위해 노력하며 성장중에 있습니다. 사람이
                    살아가는데 필수적인 3가지 요소인 의식주 중 의류산업이
                    환경오염에 10%를 차지하고있습니다. 빠르게 발전하는
                    의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
                    제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
                    환경보존프로젝트에 사용합니다.
                  </p>
                </div>
              </Col>
              {/* 6번째 */}
              {/* 2번째 */}
              <Col md="5">
                <div>
                  <h3 className="info-title">
                    <b>콤마나인</b>
                  </h3>
                  <p className="description1">
                    드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를
                    제작하는 브랜드로서 국내 어족자원보호 및 해양환경보존
                    문화정착을 위해 노력하며 성장중에 있습니다. 사람이
                    살아가는데 필수적인 3가지 요소인 의식주 중 의류산업이
                    환경오염에 10%를 차지하고있습니다. 빠르게 발전하는
                    의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
                    제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
                    환경보존프로젝트에 사용합니다.
                  </p>
                </div>
              </Col>
              <Col md="5" style={{ marginLeft: "100px", marginTop: "35px" }}>
                <a href="#pablo" style={{ marginLeft: "352px " }}>
                  <img
                    alt="..."
                    src={require("assets/img/faces/콤마나인.png")}
                  />
                </a>
              </Col>
              {/* 3번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <a href="#pablo">
                  <img
                    alt="..."
                    src={require("assets/img/faces/리뉴어스.png")}
                  />
                </a>
              </Col>
              <Col md="5" style={{ marginTop: "60px" }}>
                <div className="description1">
                  <div>
                    <h3 className="info-title">
                      <b>리뉴어스</b>
                    </h3>
                  </div>
                  <p className="description1">
                    드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를
                    제작하는 브랜드로서 국내 어족자원보호 및 해양환경보존
                    문화정착을 위해 노력하며 성장중에 있습니다. 사람이
                    살아가는데 필수적인 3가지 요소인 의식주 중 의류산업이
                    환경오염에 10%를 차지하고있습니다. 빠르게 발전하는
                    의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
                    제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
                    환경보존프로젝트에 사용합니다.
                  </p>
                </div>
              </Col>
              {/* 4번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <h3 className="info-title">
                  <b>DROPOFF</b>
                </h3>
                <p className="description1">내용</p>
              </Col>
              <Col md="5" style={{ marginLeft: "100px", marginTop: "35px" }}>
                <a href="#pablo" style={{ marginLeft: "352px" }}>
                  <img
                    alt="..."
                    src={require("assets/img/faces/dropoff.png")}
                  />
                </a>
              </Col>
              {/* 5번째 */}
              <Col md="5" style={{ marginTop: "60px" }}>
                <a href="#pablo">
                  <img
                    alt="..."
                    src={require("assets/img/faces/dropoff.png")}
                  />
                </a>
              </Col>
              <Col md="5" style={{ marginTop: "60px" }}>
                <div className="description1">
                  <div>
                    <h3 className="info-title">
                      <b>DROPOFF</b>
                    </h3>
                  </div>
                  <p className="description1">내용</p>
                </div>
              </Col>
              {/* 2번째 */}
              <Col md="5">
                <div>
                  <h3 className="info-title">
                    <b>콤마나인</b>
                  </h3>
                  <p className="description1">내용</p>
                </div>
              </Col>
              <Col md="5" style={{ marginLeft: "100px", marginTop: "35px" }}>
                <a href="#pablo" style={{ marginLeft: "352px " }}>
                  <img
                    alt="..."
                    src={require("assets/img/faces/콤마나인.png")}
                  />
                </a>
              </Col>
            </Row>
            {/* 버튼 */}
          </Container>
        </div>
      </div>
      <SectionDark />
    </>
  );
}
export default LandingPage3;
