import React from "react";
import ScrollToTop from "../Scroll/스크롤이벤트";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import useScrollFadeIn from "../Scroll/useScrollFadeIn";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader3.js";
import SectionDark from "views/MainPage/SectionDark";
import { Link } from "react-router-dom";

function Company2() {
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
        <a href="http://reblank.cafe24.com/">
          <img
            style={{
              margin: "30px",
              alignItems: "center",
              width: "300px",
            }}
            alt="..."
            src={require("assets/img/faces/리블랭크.png")}
          />
        </a>
      </Col>
      <Col md="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>리블랭크</b>
          </h3>
          <div>
            <p style={{ fontSize: "16px" }}>
              <b>
                버려진 물건이 다시 살 수 있는 'LONG-LIFE'를 디자인하려고 합니다.
                지속가능한 사회와 환경에 대해서도 고민하고 있습니다. 우리가
                수집하는 주요 재료는 가죽, 타포린 및 버려진 천을 잘라냅니다.
                수명을 다한 모든 것은 자연으로 돌아가야 합니다(선순환). 그래서
                디자이너는 인간과 환경을 책임지는 지속 가능한 디자인을 해야
                합니다. 자연에 무해한 디자인을 위해 노력하고 있습니다. 그래서
                접착제나 코팅과 같은 화학 물질을 최소한으로 사용합니다.
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
            <b>모어댄</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              프리미엄 업사이클링 패션 컴퍼니 모어댄은 자동차 생산과정 및
              폐자동차에서 수거되는 천연가죽, 에어백, 안전벨트를 재사용하여 가방
              및 액세서리 제품을 제작합니다.환경과 디자인을 동시에 생각하며
              자원의 선순환을 돕는 브랜드를 추구합니다. 모어댄은 폐자동차에서
              재활용되지 않고 매립되어지는 절대폐기물이 제로가 될때까지 제품을
              만들어 환경에 이바지 하고 소비자에게 제품 그 이상의 가치를 담은
              제품을 제공하고자 합니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="http://wemorethan.com/">
          <img alt="..." src={require("assets/img/faces/모어댄.png")} />
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
        <a href="https://montsenu.com">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/몽세누.png")}
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
              <b>몽세누</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              지속가능한 패션의 새로운 기준을 제안하다. 패션비지니스를 통한
              플라스틱 등의 폐기물 재활용, 지구환경을 개선하는 지속가능한
              소비확산, 지속가능한 패션제품을 제작하여 소비자, 산업생태계 그리고
              지구환경에 긍정적인 영감과 영향을 주는 것이 우리의 미션입니다.
              몽세누가 꿈꾸는 세상은 디자인과 기술로 지구환경이 이상적으로
              보호되며 지속가능한 창작이 이루어지는 세상입니다. 환경문제를
              해결하기 위한 소셜미션 아래 세워진 패션브랜드이자 회사이며,
              목표하는 환경문제를 해결하기 위해 기술, 디자인, 컨텐츠 등의 다양한
              방법과 해결책을 패션비지니스라는 도구로 접근합니다. 몽세누만의
              재활용 폴리에스터는 버려지는 플라스틱 페트병을 재활용하여 개발되어
              집니다.
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
            <b>블루오브</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              버려지는 자원들로 다양한 원단을 생산하고 업사이클링 제품을
              제작하는 브랜드입니다. 페트병을 아주 얇은 실로 만들어 폴리에스터
              원단을 제작하고, 버려지는 가죽을 재활용한 리사이클 레더로
              지속가능한 소재를 제작하고 있습니다. 또한 업사이클링 제품이라고
              믿기 힘들 만큼, 감각적인 디자인이 한 몫을 하고있습니다. 다양한
              디자이너 브랜드와도 협업하고 있으니 패션과 업사이클링 모두 놓치기
              싫은 분에게 추천드립니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://smartstore.naver.com/blueorb">
          <img alt="..." src={require("assets/img/faces/블루오브.png")} />
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
        <a href="https://ulkin.co.kr">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/얼킨.png")}
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
              <b>얼킨</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              아트, 업사이클링, 해체와 재구성, 하이브리드 구성을 통해 매 시즌
              전달하고자 메시지를 은유적으로 패션에 녹여 도전적이고 혁신적으로
              표현하고자 합니다. 얼킨의 시그니쳐 아이템은 신진 아티스트들의
              버려지는 회화 작품을 소재로 제작하는 업사이클링 가방입니다. 예술
              문화의 가치를 대중과 공유하고 신진 아티스트들과의 협업을 통해
              ‘재능 순환’ 을 실현합니다.
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
            <b>오버랩</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              오버랩은 수명이 다한 레저스포트 소재를 업사이클링하는
              패션브랜드입니다. 패러글라이더, 글램핑텐트, 요트 돛 등을 수거,
              해체, 세탁 후 재단, 봉제 등 일련의 과정을 거쳐 새로운 제품으로
              탄생시킵니다. 소비자, 공급자 제작자가 함께 선순환 구조를 만들고,
              자연과 함께하는 레저스포츠가 환경을 파괴하는 아이러니를 해결하고자
              방안을 제시합니다. 액티비티의 동적이고 즐거운 경험이 오버랩의
              제품을 사용하면서도 이어지길 바라며, 친환경과 업사이클링도 어려운
              것이 아니라 즐거운 것이라는 인식을 소비자에게 심어주고자 합니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://www.overlab.kr/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/오버랩.png")}
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
        <a href="https://ownu.co.kr/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/오운유.png")}
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
              <b>오운유</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              오운유(OWNU)의 업사이클링 라인은 가방, 소파 공장에서 생산 후
              버려지는 자투리 가죽 및 잉여원단, 패션 브랜드에서 시즌이 지나
              버려지는 원부자재와 같이 산업현장에서 나오는 폐기물을 기증받아
              활용하여 DESIGN, 소재 분류, 피할, 재단 단계를 거쳐 오운유만의
              유니크한 새 제품으로 재탄생시킵니다. 리오더 시의 어려움, 작은 소재
              크기 등으로 한계성이 많지만 현장에서 버려지는 폐기물들을 활용하는
              것에 큰 의미를 두고 활동하고 있습니다.
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
            <b>우시산</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              우시산은 무분별하게 버려지는 플라스틱으로 아파하는 지구 생명체들의
              비명에 귀 기울이는 과정에서, 플라스틱의 저마다 쓰임을 찾아 착하게
              소비되는 자원 선순환의 가치를 지향하게 됐습니다 지구생명체들의
              삶의 터전을 척박하게 만들고 있는 플라스틱을 걷어내고, 이를 친환경
              원단과 솜으로 재가공한 뒤 친환경 제품으로 새활용하는 업사이클링
              사업은 어제보다 나은 오늘과 내일을 만드는 밑거름이 됩니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://xn--zf4bt3b85e.com/shop/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/우시산.png")}
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
            {/* 쪽수넣기 */}
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
export default Company2;
