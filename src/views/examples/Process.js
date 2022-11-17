import React, { useState } from "react";
import "./랜딩페이지1.css";

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

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader1.js";

import SectionDark from "views/MainPage/SectionDark";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import jQuery from "jquery";
import $ from "jquery";
import doucment from "jquery";
import { readBuilderProgram } from "typescript";
import { Link } from "react-router-dom";
import SuminModal from "./Modal/영상모달";
import Examplesu1 from "./Modal/그래프모달1";
import Examplesu2 from "./Modal/그래프모달2";
import Examplesu3 from "./Modal/그래프모달3";
import Examplesu4 from "./Modal/그래프모달4";
import Examplesu5 from "./Modal/그래프모달5";
import Examplesu6 from "./Modal/그래프모달6";
import Examplesu0 from "./Modal/그래프모달0";
import ScrollToTop from "./Scroll/스크롤이벤트";

import useScrollCount from "./Scroll/useScrollCount";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const FIGURE_ITEMS = [
    {
      title: "예시",
      number: 322,
      unit: "+",
      description: "테스트",
    },
  ];

  const countItem = {
    0: useScrollCount(322),
  };

  const [state2, setState2] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 50],
      },
    ],
    options: {
      colors: ["#009000"],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "재활용 통계",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <>
      <ScrollToTop />
      <ExamplesNavbar />
      <LandingPageHeader />

      <div className="main" style={{ backgroundColor: "whitesmoke" }}>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title catetop">
                  <div className="abc">
                    <b>
                      <span>"Great&nbsp;</span>
                      <span>Assist&nbsp;</span>
                      <span>In&nbsp;</span>
                      <span>Anything"&nbsp;</span>
                    </b>
                  </div>
                </h2>
                <br></br>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="3">
                <Card className="card-profile card-plain">
                  <div>
                    <img
                      src={require("assets/img/icons/free-icon-man-2118553.png")}
                    />
                  </div>
                  <CardBody></CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <br />
                    <p>
                      <b
                        style={{
                          fontSize: "20px",
                          margin: "auto",
                          letterSpacing: "1px",
                        }}
                      >
                        안녕하세요 GAIA의 팀장 박수민입니다. 지구 온난화로 인한
                        광범위한 변화와 생태계 파괴, 그리고 대다수 기업들의
                        비즈니스가 환경 문제의 일부임을 알게 된 후부터 저희
                        GAIA는 고객들과 다른 기업들에 영향을 미칠 수 있는 사업을
                        운영하기로 결심했습니다. 지금 현재도 우리의 지구는 많은
                        고통에 시달리고 있습니다. 많은 사람들이 제대로 알지
                        못하는 지구의 고통, 지금 바로 알려드릴게요.
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <div
              className="SuminMain"
              style={{ marginRight: "150px", marginLeft: "150px" }}
            >
              <Row>
                <Col
                  className="ml-auto mr-auto"
                  lg="12"
                  style={{ marginTop: "100px" }}
                >
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "50%",
                        backgroundColor: "white",
                      }}
                    >
                      <h3 className="title mx-auto">
                        <b>우리의 옷은 환경에 어떤 영향을 미치고 있을까요?</b>
                      </h3>
                      <div className="social-line text-center">
                        <p style={{ color: "black" }}>
                          <b>
                            우리가 화석연료를 사용하면서 공기중으로 내보낸 탄소.
                            지난 역사를 통틀어 봤을 때 전체 탄소 중 절반이 최근
                            30년 동안 배출되었습니다. 이렇게 배출된 탄소는 열을
                            대기에 가두어 기후 변화를 일으킵니다.
                          </b>
                        </p>
                      </div>
                      <div className="forgot">
                        <Examplesu0 />
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="ml-auto mr-auto" lg="6">
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "550px",
                        backgroundColor: "white",
                      }}
                    >
                      <h4 className="title mx-auto">
                        <b>플라스틱, 기적인가? 재앙인가?</b>
                      </h4>
                      <h6 style={{ color: "black", fontSize: "25px" }}>
                        2015년 플라스틱 총 생산량
                      </h6>
                      {FIGURE_ITEMS.map((item, index) => (
                        <div
                          className="social-line text-center"
                          style={{ color: "green", fontSize: "60px" }}
                          {...countItem[index]}
                        ></div>
                      ))}
                      <p
                        style={{
                          color: "black",
                          fontSize: "28px",
                          marginBottom: "10px",
                        }}
                      >
                        <b>백만</b>
                      </p>
                      <div>
                        <p style={{ color: "black", fontSize: "16px" }}>
                          <b>
                            이 양은 무려 미국 뉴욕시의 모든 마천루를 채울 수
                            있는 양입니다. 현재 플라스틱은 우리가 하는 모든 일에
                            영향을 미치고 있습니다. 삶의 질을 높여주는데
                            플라스틱의 역할이 매우 크죠.
                          </b>
                        </p>
                      </div>
                      <div className="forgot">
                        <Examplesu1 />
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="6">
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "230px",
                        backgroundColor: "white",
                      }}
                    >
                      <h6
                        style={{
                          color: "black",
                          fontSize: "18px",
                          marginBottom: "10px",
                        }}
                      >
                        특히 현재의 패션산업은 환경 오염을 일으킵니다. 심지어 더
                        악화되고 있습니다. 지금 우리는 15년 전보다 60% 더 많은
                        옷을 사고, 그 옷을 입는 기간은 절반으로 줄었습니다.
                      </h6>
                      <p style={{ color: "black", fontSize: "12px" }}>
                        *2000년부터 2014년까지 소비자들의 소비와 의류 생산을
                        분석한 파타고니아의 맥킨지의 2016년 보고서에서 제시된
                        수치입니다.
                      </p>
                    </Card>
                  </div>
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "230px",
                        backgroundColor: "white",
                      }}
                    >
                      <div>
                        <img
                          src={require("assets/img/icons/2x__beevgevykb0i_large.png")}
                          style={{
                            marginBottom: "15px",
                            width: "150px",
                            height: "80px",
                          }}
                        />
                      </div>

                      <h6
                        style={{
                          color: "black",
                          fontSize: "20px",
                          marginTop: "10px",
                        }}
                      >
                        <b>
                          팬데믹 이후 환경오염 사망자가
                          <br />
                          코로나 사망자의{" "}
                          <span style={{ fontSize: "23px" }}>'2배'</span>
                        </b>
                      </h6>
                      <p style={{ color: "black", fontSize: "12px" }}>
                        * 출처 : 유엔인권이사회 보고서
                      </p>
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  className="ml-auto mr-auto"
                  lg="6"
                  style={{ marginBottom: "100px" }}
                >
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundColor: "black",
                      }}
                    >
                      <h4 className="title mx-auto" style={{ color: "white" }}>
                        <b>
                          함께 노력한다면
                          <br />
                          삶의 방식을 바꿀 수 있어요!
                          <br />
                          그래서 소개합니다. 바로...
                        </b>
                      </h4>
                      <h2 style={{ color: "white" }}>
                        <b>업사이클링!</b>
                      </h2>
                      <div className="forgot">
                        <Examplesu3 />
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="6">
                  <div>
                    <Card
                      className="card-register1 ml-auto mr-auto"
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundColor: "white",
                      }}
                    >
                      <div>
                        <img
                          src={require("assets/img/icons/seventy_five_percent__fpicvfzs2key_large.png")}
                          style={{
                            marginTop: "15px",
                            marginBottom: "15px",
                            width: "200px",
                            height: "80px",
                          }}
                        />
                        <img
                          src={require("assets/img/icons/down-arrow.gif")}
                          style={{
                            marginTop: "15px",
                            marginBottom: "15px",
                            width: "80px",
                            height: "120px",
                          }}
                        />
                      </div>
                      <p
                        className="title mx-auto"
                        style={{ color: "black", fontSize: "28px" }}
                      >
                        <b>
                          2050년까지 대한민국이 온실가스를 감축해야 하는 목표율
                        </b>
                      </p>
                      <p style={{ color: "black", fontSize: "12px" }}>
                        * 출처 : 대한민국 탄소중립 보고서
                      </p>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
            <Row style={{ marginTop: "100px" }}>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <p>
                      <b>
                        안녕하세요 저는 GAIA의 노강민입니다.
                        <br />
                        앞서 여러분들이 보신 것처럼 지구는 급속도로 병들어가고
                        있습니다.
                        <br />
                        그러나 더욱 더 큰 문제는 지구의 고통은
                        <br />
                        결국 우리에게 더 큰 고통의 부메랑으로 다가오게 됩니다.
                        <br />
                        제가 여러분들에게 보여드릴 것은 지금 우리가 생활하고
                        있는 방식이
                        <br />
                        어떤 식의 고통으로 되돌아오는지 알게 해드릴려고 합니다.
                        <br />
                        그럼 시작할게요!
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="3">
                <Card className="card-profile card-plain">
                  <div>
                    <img src={require("assets/img/icons/boy.png")} />
                  </div>
                  <CardBody></CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <div
              className="SuminMain"
              style={{ marginRight: "150px", marginLeft: "150px" }}
            >
              <Row>
                <Col className="ml-auto mr-auto" lg="6">
                  <Card
                    className="card-register1 ml-auto mr-auto"
                    style={{
                      width: "100%",
                      height: "550px",
                      backgroundColor: "white",
                    }}
                  >
                    <div>
                      <img
                        src={require("assets/img/icons/free-icon-credit-card-payment-8162455.png")}
                        style={{
                          marginBottom: "15px",
                          width: "230px",
                          height: "230px",
                        }}
                      />
                    </div>
                    <h4 className="title mx-auto" style={{ fontSize: "25px" }}>
                      <b>
                        인간이 1주일에 먹는
                        <br />
                        플라스틱 분량 ={" "}
                        <span style={{ color: "green" }}>신용카드 1개</span>
                      </b>
                    </h4>

                    <div className="forgot">
                      <Examplesu5 />
                    </div>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="6">
                  <Card
                    className="card-register1 ml-auto mr-auto"
                    style={{
                      width: "100%",
                      height: "550px",
                      backgroundColor: "white",
                    }}
                  >
                    <div>
                      <img
                        src={require("assets/img/icons/free-icon-marine-debris-4726228.png")}
                        style={{
                          marginTop: "15px",
                          marginBottom: "15px",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </div>
                    <h4 className="title mx-auto" style={{ fontSize: "24px" }}>
                      <b>
                        플라스틱으로 죽는 해양 생물 매년{" "}
                        <span style={{ fontSize: "32px" }}>
                          <strong>10만 마리 이상</strong>
                        </span>
                      </b>
                    </h4>

                    <div className="forgot">
                      <Examplesu6 />
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" lg="12">
                  <Card
                    className="card-register1 ml-auto mr-auto"
                    style={{
                      width: "100%",
                      height: "550px",
                      backgroundColor: "white",
                    }}
                  >
                    <h3 className="title mx-auto">
                      <b>Views</b>
                    </h3>
                    <div className="social-line text-center"></div>

                    <div className="forgot">
                      <SuminModal />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <SectionDark />
    </>
  );
}

export default LandingPage;
