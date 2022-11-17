import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader2.js";
import SectionDark from "views/MainPage/SectionDark";
import StaticExample from "./StaticExample";
import StaticExample1 from "./StaticExample1";
import useScrollFadeIn from "./Scroll/useScrollFadeIn";
import ScrollToTop from "./Scroll/스크롤이벤트";

function LandingPage2() {
  const [state, setState] = useState({
    series: [
      {
        data: [
          {
            x: "코로나19",
            y: 360,
          },
          {
            x: "분리수거",
            y: 160,
          },
          {
            x: "탄소중립",
            y: 110,
          },
          {
            x: "탈원전",
            y: 55,
          },
          {
            x: "ESG 경영",
            y: 50,
          },
          {
            x: "패스트패션",
            y: 31,
          },
          {
            x: "플라스틱",
            y: 70,
          },
          {
            x: "기후변화",
            y: 30,
          },
          {
            x: "종이빨대",
            y: 44,
          },
          {
            x: "업사이클링",
            y: 68,
          },
          {
            x: "대기오염",
            y: 28,
          },
          {
            x: "환경",
            y: 19,
          },
          {
            x: "지구온난화",
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
        text: "2021년 대한민국 환경키워드",
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
            position: "top",
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

  const chanchan = [
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
          겉에 있는 라벨을 꼭 제거해 주세요!
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
    </div>,
  ];

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan2 = [
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
          테이프 등 다른 재질은 제거해 주세요.
          <br />
          또한 이물질이 혼합되지 않도록
          <br />
          <u>
            <strong>'접어서'</strong>
          </u>{" "}
          배출해 주세요!
        </p>
      </div>
    </div>,
  ];

  const animatedItem2 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan3 = [
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
    </div>,
  ];

  const animatedItem3 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan4 = [
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
    </div>,
  ];
  const animatedItem4 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan5 = [
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
          병 안에 이물질을 넣지 말아 주세요!
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
    </div>,
  ];
  const animatedItem5 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan6 = [
    <div className="info">
      <div className="icon icon-info">
        <img src={require("assets/img/icons/free-icon-notebook-2338675.png")} />
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
    </div>,
  ];

  const animatedItem6 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan7 = [
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
    </div>,
  ];

  const animatedItem7 = {
    0: useScrollFadeIn("up", 1, 0),
  };

  const chanchan8 = [
    <div className="info">
      <div className="icon icon-info">
        <img src={require("assets/img/icons/free-icon-bags-5765600.png")} />
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
          됐다면,
          <br />
          모두{" "}
          <u>
            <strong>종량제 봉투</strong>
          </u>
          에 넣어주세요!
        </p>
      </div>
    </div>,
  ];

  const animatedItem8 = {
    0: useScrollFadeIn("up", 1, 0),
  };
  return (
    <>
      <ScrollToTop />
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title catetop">
                  <div className="abc">
                    <span>"당신은&nbsp;</span>
                    <span>분리수거&nbsp;</span>
                    <span>방법을&nbsp;</span>
                    <br />
                    <span>'제대로'&nbsp;</span>
                    <span>알고&nbsp;</span>
                    <span>있나요?"</span>
                  </div>
                </h2>
                <h5 className="description" style={{ marginTop: "80px" }}>
                  <b>
                    {" "}
                    GAIA에서 알려주는 올바른 분리수거방법으로 오늘의 지구를
                    지켜주세요!
                    <br />
                    우리는 아직 배울 것이 많고, 다음 세대에 가르쳐야 할 것도
                    많으니까요.
                  </b>
                </h5>
              </Col>
            </Row>

            <Row style={{ marginTop: "100px" }}>
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
                        안녕하세요 GAIA의 조찬익입니다.
                        <br />
                        저는 오늘{" "}
                        <u>
                          <b>'올바른 분리수거'</b>
                        </u>{" "}
                        방법을 알려드리려고 이 자리에 나왔습니다.
                        <br />
                        우리는 여태껏 분리수거된 자원들이 재활용되어
                        <br />
                        환경에 도움이 된다고 생각하고 있어요.
                        <br />
                        하지만 다양한 이유로 상당한 양의 분리수거된 자원이
                        <br />
                        재활용되지 않는다고 합니다.
                        <br />
                        어떻게 된 일인지 직접 알아보러 갈까요?
                      </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginTop: "100px" }}>
                <p style={{ fontSize: "25px" }}>
                  <b>
                    여러분! 과연 우리는 매일 얼마만큼의 쓰레기를 배출하고
                    있을까요?
                  </b>
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12" style={{ marginTop: "150px" }} fixed>
                <ReactApexChart
                  options={state1.options}
                  series={state1.series}
                  type="bar"
                  height={350}
                  className="test1"
                />

                <p
                  className="card-description text-center"
                  style={{ marginBottom: "150px" }}
                >
                  <b>
                    올해 2월, 환경부가 발표한 전국 폐기물 발생 현황에 따르면
                    2020년에 전국의 생활폐기물 발생량은 하루 약 47,397톤입니다.
                    <br />
                    주변에서 흔히 볼 수 있는 1톤 용달 트럭 4만 7천 대 분량의
                    쓰레기가 매일 생산된다고 볼 수 있는데요.
                    <br />
                    경기도에서만 하루 전국 생활폐기물의 22.5%를 차지하는
                    10,684.9톤의 쓰레기가 발생합니다.
                    <br />
                    물론 경기도에는 전국 인구의 26%가 살고 있기 때문에 경기도의
                    절대적인 쓰레기 발생량이 많다고 볼 수 있죠.
                  </b>
                </p>
              </Col>
            </Row>

            <Row style={{ marginTop: "100px" }}>
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
                    위 트리맵은 2021년 대한민국 환경키워드를 나타낸 차트입니다.
                    <br />
                    분리수거는 코로나 다음으로 사람들에게 많이 검색된
                    키워드인데요,
                    <br />
                    알다시피 우리나라는 전 세계를 견주어봐도 최고 수준의
                    분리수거를 하고 있는 나라입니다.
                    <br />
                    하지만 전문가들은 분리수거도 좋지만 중요한 것은 플라스틱의
                    '질'이라고 말합니다.
                    <br />
                    그래서 분리수거를 하기 전에 재활용률이 높은 소재를 사용하는
                    것도 중요하다고 합니다!
                  </b>
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <Col>
                <h3 style={{ marginBottom: "50px", marginTop: "80px" }}>
                  <strong>
                    "그래서 분리수거를 해야 하는 거야, 말아야 하는 거야?"
                  </strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ marginBottom: "200px" }}>
                  <b>
                    결론부터 말하자면 지금보다 더 열심히 해야 합니다.
                    <br />
                    분리수거 후 자원의 재활용을 통해 폐기물 처리 방법인 소각과
                    매립으로 처리되는 자원들을 줄여 환경보호를 할 수 있거든요.
                    <br />한 사람이 시작하는 분리배출은 힘이 없지만 뭉치면 힘이
                    생기는 법입니다.
                    <br />
                    GAIA를 방문해 주신 여러분들이 꼭 노력하셔서 오늘의 지구를
                    지켜주세요!
                    <br />
                    그럼 지금부터 여러분들에게 올바른 분리배출 방법을
                    알려드릴게요.
                  </b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div>
                  <h3
                    style={{
                      color: "black",
                      marginTop: "100px",
                      marginBottom: "50px",
                    }}
                  >
                    <b>재활용품 분리배출 방법</b>
                  </h3>
                </div>
              </Col>
              <Col md="3">
                {chanchan.map((item, index) => (
                  <div key={item} {...animatedItem[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan2.map((item, index) => (
                  <div key={item} {...animatedItem2[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan3.map((item, index) => (
                  <div key={item} {...animatedItem3[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan4.map((item, index) => (
                  <div key={item} {...animatedItem4[index]}>
                    {item}
                  </div>
                ))}
              </Col>

              <Col md="3">
                {chanchan5.map((item, index) => (
                  <div key={item} {...animatedItem5[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan6.map((item, index) => (
                  <div key={item} {...animatedItem6[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan7.map((item, index) => (
                  <div key={item} {...animatedItem7[index]}>
                    {item}
                  </div>
                ))}
              </Col>
              <Col md="3">
                {chanchan8.map((item, index) => (
                  <div key={item} {...animatedItem8[index]}>
                    {item}
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <p className="card-description text-center">
                      <b>이 쓰레기가 재활용품인지 헷갈린다면!</b>
                    </p>
                    <StaticExample1 />
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <p className="card-description text-center">
                      <b>여러분에게 한번 더 자세히 알려드릴게요!</b>
                    </p>
                    <StaticExample />
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
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
