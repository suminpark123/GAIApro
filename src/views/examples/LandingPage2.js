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
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
// reactstrap components
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

function LandingPage2() {
  const [state, setState] = useState({
    series: [
      {
        data: [
          {
            x: "미세먼지",
            y: 360,
          },
          {
            x: "친환경에너지",
            y: 160,
          },
          {
            x: "전기차",
            y: 110,
          },
          {
            x: "탈원전",
            y: 55,
          },
          {
            x: "도시재생",
            y: 50,
          },
          {
            x: "탄소중립",
            y: 31,
          },
          {
            x: "에코",
            y: 70,
          },
          {
            x: "분리수거",
            y: 30,
          },
          {
            x: "비핵화",
            y: 44,
          },
          {
            x: "환경단체 후원",
            y: 68,
          },
          {
            x: "학교",
            y: 28,
          },
          {
            x: "환경공학",
            y: 19,
          },
          {
            x: "한강",
            y: 29,
          },
        ],
      },
    ],
    options: {
      colors: ["#009000"],
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "대한민국 환경키워드",
      },
    },
  });

  const [state1, setState1] = useState({
    series: [
      {
        name: "생활폐기물 총 발생량",
        data: [
          8712.3, 3150.6, 2575.3, 2000, 1150.6, 1369.8, 1150.6, 328.7, 10684.9,
          1835.6, 1808.2, 2109.6, 1671.2, 1780.8, 2465.8, 3479.5, 1150.7,
        ],
      },
    ],
    options: {
      colors: ["#009000"],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "톤";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#009000"],
        },
      },

      xaxis: {
        categories: [
          "서울",
          "부산",
          "대구",
          "인천",
          "광주",
          "대전",
          "울산",
          "세종",
          "경기",
          "강원",
          "충북",
          "충남",
          "전북",
          "전남",
          "경북",
          "경남",
          "제주",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "톤";
          },
        },
      },
      title: {
        text: "시도별 생활폐기물 총 발생량(톤/일)",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });
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
                <h2 className="title">
                  "당신은 분리수거 방법을
                  <br />
                  '제대로' 알고 있나요?"
                </h2>
                <h5 className="description">
                  GAIA에서 알려주는 올바른 분리수거방법으로 오늘의 지구를
                  지켜주세요!
                  <br />
                  우리는 아직 배울 것이 많고, 다음 세대에 가르쳐야 할 것도
                  많으니까요.
                </h5>
              </Col>
            </Row>

            <Row>
              <Col className="ml-auto mr-auto" md="3">
                <Card className="card-profile card-plain">
                  <div>
                    <img
                      src={require("assets/img/icons/free-icon-boy-2118482.png")}
                    />
                  </div>
                  <CardBody></CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <p>
                      <b>
                        안녕하세요 GAIA의 조찬익입니다! 저는 오늘{" "}
                        <u>
                          <b>'올바른 분리수거'</b>
                        </u>{" "}
                        방법을 알려드리려고 이 자리에 나왔는데요! 우리나라가
                        분리수거를 잘한다는 사실은 여러분들도 잘 아실거라고
                        생각합니다. 무려 세계에서 두 번째로 분리수거를 잘 지키는
                        나라라고 하는데요. 하지만 우리가 잘 알지 못한 사실, 바로
                        우리가 열심히 분리수거를 한 들 재활용률은 낮으며, 재활용
                        자체가 불가능한 플라스틱 또한 있다, 알고 계셨나요?
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="treemap"
                  height={350}
                />
                <br />
                <p>
                  <b>
                    보시다시피 환경키워드로는 다양한 단어들이 있습니다. 우리는
                    항상 고민해왔죠.
                    <br />
                    어떻게 하면 사람들에게 환경문제의 심각성을 알릴 수 있을까?
                    <br />
                    단편적인 움직임으로만 끝내서는 안된다고 생각했습니다.
                    <br />
                    그 결과 우리는 다음과 같은 결과에 도달했습니다.
                    <br />
                    소개합니다. GAIA만의 특별한 분리배출법을.
                  </b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card className="card-profile card-plain">
                  <div>
                    <ReactApexChart
                      options={state1.options}
                      series={state1.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                  <CardBody>
                    <p className="card-description text-center">
                      <b>
                        과연 우리는 매일 얼마만큼의 쓰레기를 배출하고 있을까요?
                        <br />
                        <br />
                        올해 2월, 환경부가 발표한 전국폐기물 발생현황에 따르면
                        2020년에 전국의 생활폐기물 발생량은 하루 약
                        47,397톤입니다. 주변에서 흔히 볼 수 있는 1톤 용달 트럭
                        4만 7천대 분량의 쓰레기가 매일 생산된다고 볼 수
                        있는데요. 경기도에서만 하루 전국 생활폐기물의 22.5%를
                        차지하는 10,684.9톤의 쓰레기가 발생합니다. 물론
                        경기도에는 전국 인구의 26%가 살고 있기 때문에 경기도의
                        절대적인 쓰레기 발생량이 많다고 볼 수 있죠.
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/종량제봉투.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">
                        <b>환경부</b>
                      </CardTitle>
                      <h6 className="card-category">재활용법</h6>
                    </div>
                    <p className="card-description text-center">
                      <b>
                        재활용을 한번 해보자. 우리는 지구를 지켜야할 의무가
                        있으니까 조금만 더 노력해봅시다.
                      </b>
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      자세히 알아보기
                    </Button>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/올바른방법.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">가보자가보자</p>
                    <Button className="btn-link" color="info" href="#pablo">
                      자세히 알아보기
                    </Button>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <div>
                  <h3 style={{ color: "black", marginBottom: "30px" }}>
                    재활용품 분리배출 방법
                  </h3>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-plastic-bottle-3300605.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}폐페트병{">"}
                    </h5>
                    <p className="description" style={{ marginBottom: "30px" }}>
                      내용물을 비워준 다음,
                      <br />
                      겉에 있는 라벨을 꼭 제거해주세요!
                      <br />
                      최대한 찌그러준 다음{" "}
                      <u>
                        <strong>'투명'</strong>
                      </u>
                      과{" "}
                      <u>
                        <strong>'유색'</strong>
                      </u>
                      을
                      <br />
                      분리해 지정된 배출함에 넣어주세요.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-delivery-box-5790463.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}종이 상자{">"}
                    </h5>
                    <p>
                      테이프 등 다른 재질은 제거해주세요.
                      <br />
                      또한 이물질이 혼합되지 않도록
                      <br />
                      <u>
                        <strong>'접어서'</strong>
                      </u>{" "}
                      배출해주세요!
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-plastic-bag-6588425.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}비닐류{">"}
                    </h5>
                    <p>
                      음식물과 이물질이 묻었다면
                      <br />
                      물로{" "}
                      <u>
                        <strong>'3번'</strong>
                      </u>{" "}
                      헹궈 잔여물을 없애주세요!
                      <br />
                      이물질 제거가 어렵다면
                      <br />
                      종량제봉투에 버려주세요.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-food-container-3765881.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}스티로폼류{">"}
                    </h5>
                    <p>
                      비닐, 종이와 마찬가지로
                      <br />
                      이물질, 테이프 등을 없애주세요!
                      <br />
                      만약, 많이 묻었다면
                      <br />
                      <u>
                        <strong>'쪼개서'</strong>
                      </u>{" "}
                      종량제봉투에 버려주세요.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-glass-bottle-1012833.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}유리병{">"}
                    </h5>
                    <p>
                      병 안에 이물질을 넣지 말아주세요!
                      <br />
                      거울, 도자기류, 유리 식기류는
                      <br />
                      유리병류가 절대 아닙니다!
                      <br />
                      <u>
                        <strong>종량제봉투</strong>
                      </u>
                      나{" "}
                      <u>
                        <strong>전용 마대</strong>
                      </u>
                      에 버려주세요.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-notebook-2338675.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}수첩 및 책자류{">"}
                    </h5>
                    <p>
                      스프링 등 종이류와 다른 재질은
                      <br />
                      반드시 제거 후 버려주세요!
                      <br />
                      <u>
                        <strong>스프링은 '따로' 배출하셔야 합니다.</strong>
                      </u>
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-electric-appliance-7290460.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}폐가전제품{">"}
                    </h5>
                    <p>
                      전화와 인터넷 신청만으로 가능합니다.
                      <br />
                      전화는{" "}
                      <u>
                        <strong>'1599-0903',</strong>
                      </u>
                      <br />
                      인터넷 신청은{" "}
                      <u>
                        <strong>'www.15990903.or.kr.'</strong>
                      </u>
                      <br />
                      수수료없이{" "}
                      <u>
                        <strong>무료</strong>
                      </u>
                      로 수거해간다는 점!
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                      src={require("assets/img/icons/free-icon-bags-5765600.png")}
                    />
                  </div>
                  <div className="description">
                    <h5 className="info-title" style={{ marginTop: "10px" }}>
                      {"<"}일반 쓰레기{">"}
                    </h5>
                    <p>
                      씻어도 이물질이{" "}
                      <u>
                        <strong>제거되지 않는다면</strong>
                      </u>
                      ,
                      <br />
                      쓰레기가{" "}
                      <u>
                        <strong>다른 재질과 혼합</strong>
                      </u>
                      되어 있다면,
                      <br />
                      모두{" "}
                      <u>
                        <strong>종량제 봉투</strong>
                      </u>
                      에 넣어주세요!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <SectionDark />
    </>
  );
}

export default LandingPage2;
