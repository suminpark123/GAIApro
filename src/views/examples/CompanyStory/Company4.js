import React from "react";
import ScrollToTop from "../Scroll/스크롤이벤트";
import useScrollFadeIn from "../Scroll/useScrollFadeIn";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader3.js";
import SectionDark from "views/MainPage/SectionDark";
import { Link } from "react-router-dom";

function Company4() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const uu = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="4">
        <a href="https://www.freitag.ch">
          <img
            style={{
              margin: "30px",
              alignItems: "center",
              width: "300px",
            }}
            alt="..."
            src={require("assets/img/faces/프라이탁.png")}
          />
        </a>
      </Col>
      <Col md="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>프라이탁</b>
          </h3>
          <div>
            <p style={{ fontSize: "16px" }}>
              <b>
                교통 체증에서 영감을 받아 중고 트럭 방수포, 버려진 자전거 내부
                튜브 및 자동차 안전 벨트에서 메신저 백을 개발했습니다. 각각의
                고유한 재활용품인 최초의 FREITAG 백이 거실에서 이렇게
                탄생했습니다. 2014년에 F-ABRIC과 함께 작업할 새로운 원료를
                제공했습니다. 본사에서 2500km 이내의 최소 자원으로 생산된 인피
                섬유를 사용하여 처음부터 사내에서 개발한 이 섬유는 견고하고
                완전히 생분해됩니다.
              </b>
            </p>
          </div>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0),
  };
  {
    /* 2번째 */
  }
  const uu2 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>프레자일드</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              우리는 다양한 친환경 기술력을 바탕으로 의류 생산과정에서 발생하는
              환경 오염을 최소화하는데 목적을 두고 있습니다. 해초를 활용한
              해초섬유, 의류 폐기물을 재활용하는 리사이클 코튼과 같이 다양한
              소재, 그리고 염색 방법 등 많은 기술력을 통해 우리의 가치를
              실현하고 있습니다. 프레자일드의 제품을 구매함과 동시에 나무
              한그루가 이 세상에 심어집니다. 이는 자연 생태계뿐만 아니라 이상
              기후와도 밀접한 관련이 있습니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://fragiled-earth.com">
          <img alt="..." src={require("assets/img/faces/프레자일드.png")} />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem2 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  {
    /* 3번째 */
  }
  const uu3 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="4">
        <a href="https://www.convexoconcave.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/플리츠마마.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title" style={{ marginBottom: "30px" }}>
              <b>플리츠마마</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              플리츠마마는 친환경 소재를 사용하여 현대적인 니트기법으로 가방과
              액세서리를 만들며 아름답고 지속 가능한 삶을 위한 실천적
              방법으로써의 패션을 모색합니다.6개의 페트병이 가방이 되다!
              페트병과 같은 플라스틱은 분해되기까지 100년이 넘게 걸립니다.
              가급적 플라스틱을 만들지 않는 것이 좋지만 지구에 탄생한 플라스틱을
              재활용하여 가급적 오랫동안 사용하는 것도 우리의 몫입니다.
              플리츠마마는 페트병 재활용 원사를 활용하여 이산화탄소 배출 및
              쓰레기 매립량을 획기적으로 줄이고 석유 자원을 절약하는 데
              동참합니다.
            </b>
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem3 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  {
    /* 4번째 */
  }
  const uu4 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>할리케이</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              할리케이는 지속 가능한 라이프 스타일을 디자인합니다. 공정 과정에서
              발생하는 섬유 소비와 환경 오염을 최소화하여 지속 가능한 라이프
              스타일을 실천하고 있습니다. 리사이클링 데님을 비롯해 커피 자루,
              비건 한지가죽 등 다양한 친환경 소재를 지속적으로 활용하고 발굴하며
              자원의 가치를 높이고 사람과 자연이 상생할 수 있는 친환경 소비를
              지향합니다. 할리케이는 자연 환경과 소외된 지역 경제를 생각하는
              소셜 벤처 기업으로 윤리적인 소비, 지속 가능한 라이프 스타일을
              추구합니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://wecontinew.co.kr/">
          <img
            style={{ height: "205px" }}
            alt="..."
            src={require("assets/img/faces/할리케이.png")}
          />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem4 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  {
    /* 5번째 */
  }
  const uu5 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="4">
        <a href="https://www.h22studio.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/h22.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title" style={{ marginBottom: "30px" }}>
              <b>H22</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              비닐(Plastic Bag)은 뛰어난 경량성, 내수성과 함께 다양한 색상과
              질감의 표현이 가능하다는 장점을 가지고 있습니다. 하지만 몇백 년
              동안이나 썩지 않고, 연소 시 유해물질을 발생시켜 환경오염의
              주범으로 지목되고 있습니다. 희(H22)는 다양한 소재적 장점을 가지고
              있음에도 부각되지 못했던 비닐의 지속가능한 활용과 긍정적 인식
              전환을 위해 공예적 기법을 결합한 새로운 소재(Surface)를 개발하고,
              이를 제품으로 만들어냅니다.
            </b>
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem5 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  {
    /* 6번째 */
  }
  const uu6 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>MATT&NAT</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              MATT & NAT는 디자인에 가죽이나 기타 동물 기반 재료를 사용하지
              않기로 약속했으며 앞으로도 그럴 것입니다. 매 시즌, 우리는 지속
              가능하고 친환경적인 방식을 개선하기 위해 혁신적인 방법을 계속
              탐색하고 활용하는 동시에 고품질의 시대를 초월한 제품을 생산합니다.
              수년에 걸쳐 우리는 나일론, 판지, 고무, 코르크 및 이제는 앞유리
              수지와 같은 다양한 재활용 재료를 실험해 왔습니다. 2007년부터
              우리는 100% 재활용 플라스틱 병으로만 만들어진 안감을 사용하기 위해
              최선을 다하고 있습니다. 오늘 우리는 가방 제조 시 연간 900만 개
              이상의 플라스틱 병을 재활용한다고 발표하게 된 것을 자랑스럽게
              생각합니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://mattandnat.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/MATT&NAT.png")}
          />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem6 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  {
    /* 7번째 */
  }
  const uu7 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="4">
        <a href="https://project1907.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/project1907.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title" style={{ marginBottom: "30px" }}>
              <b>Project1907</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              project1907은 우리건강과 지속가능한 지구를 위해 플라스틱을 포함한
              폐자원을 재활용한 업사이클링 비즈니스를 시작합니다. 쓸모있는
              업사이클링 라이프스타일 제품 생산 및 판매를 통해 폐자원의
              재활용도를 높입니다. 폐자원이 가급적 많이 재활용 될 수 잇도록
              폐자원의 선순환 생태계를 조성합니다. 궁극적으로는 플라스틱
              대체제를 연구 개발해서 플라스틱 없는 사회를 만듭니다.
            </b>
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem7 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  {
    /* 8번째 */
  }
  const uu8 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>zero waste daniel</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              우리의 업사이클링 제품은 100% 소비자가 사용하기 전의 커팅 룸
              스크랩, 디자인 룸 폐기물 및 남은 재료로 만들어집니다.ZWD의 모든
              것은 일반적으로 매립지로 보내지거나 의류로 바뀌기 전에 소각되는
              사용하지 않은 직물로 만들어집니다.브랜드 주문 후 남은 것, 주문한
              것과 다른 색으로 염색한 것, 디자인 변경 후 그냥 버린 것!ZWD에서는
              이전에 사용하거나 착용한 적이 없는 NEW CONDITION 패브릭을 항상
              사용합니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://etcseoul.com/category/packableco/757/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/zero_waste_daniel.png")}
          />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem8 = {
    0: useScrollFadeIn("left", 1, 0),
  };

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <ScrollToTop />
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
                <h5 className="description" style={{ marginTop: "80px" }}>
                  <b>
                    환경 문제는 분명 해답이 있고 무조건 적으로 불가능한 일이
                    아닙니다. <br />
                    저희 GAIA와 같은 길을 걸어가는 많은 기업들을 만나보세요.
                  </b>
                </h5>
              </Col>
            </Row>
            <Row style={{ marginTop: "100px" }}>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
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
            {uu.map((item, index) => (
              <div key={item} {...animatedItem[index]}>
                {item}
              </div>
            ))}
            {/* 2번째  */}
            {uu2.map((item, index) => (
              <div key={item} {...animatedItem2[index]}>
                {item}
              </div>
            ))}
            {/* 3번째 */}
            {uu3.map((item, index) => (
              <div key={item} {...animatedItem3[index]}>
                {item}
              </div>
            ))}
            {/* 4번째 */}
            {uu4.map((item, index) => (
              <div key={item} {...animatedItem4[index]}>
                {item}
              </div>
            ))}
            {/* 5번째 */}
            {uu5.map((item, index) => (
              <div key={item} {...animatedItem5[index]}>
                {item}
              </div>
            ))}
            {/* 6번째 */}
            {uu6.map((item, index) => (
              <div key={item} {...animatedItem6[index]}>
                {item}
              </div>
            ))}
            {/* 7번째 */}
            {uu7.map((item, index) => (
              <div key={item} {...animatedItem7[index]}>
                {item}
              </div>
            ))}
            {/* 8번째 */}
            {uu8.map((item, index) => (
              <div key={item} {...animatedItem8[index]}>
                {item}
              </div>
            ))}
          </Container>

          <Container>
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
export default Company4;
