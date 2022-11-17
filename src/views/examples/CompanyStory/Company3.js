import React from "react";
import ScrollToTop from "../Scroll/스크롤이벤트";
import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader3.js";
import SectionDark from "views/MainPage/SectionDark";
import { Link } from "react-router-dom";
import useScrollFadeIn from "../Scroll/useScrollFadeIn";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
function Company3() {
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
        <a href="http://zennycloset.com/">
          <img
            style={{ margin: "75px" }}
            alt="..."
            src={require("assets/img/faces/젠니클로젯.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>젠니클로젯</b>
          </h3>
          <div>
            <p style={{ fontSize: "16px" }}>
              <b>
                빨리,빨리보다 천천히 걸어가며 지금 여기의 가치와 개성을
                생각해보기를 제안하는 에코디자이너 브랜드입니다. 자연과 소통하고
                균형을 찾고 회복 할 수 있는 지속가능한 제품을 만듭니다.
                지속가능한 소재를 선택한 것은 단순히 제품의 수명에 종속되었던
                소재의 활용을, 제품의 라이프 사이클을 지속시킬 수 있는 새로운
                소재로 개발하여 폐기물 배출량과 기후 변화에 미치는 영향을
                최소화하기 위함입니다. 소재 제작시 배출되는 탄소배출량은 제품의
                70%를 차지하기 때문에 제로탄소,제로폐기물을 향한 여정은
                소재선택이 가장 먼저입니다.
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
            <b>카네이테이</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              모든 물질은 끊임없이 돌고 도는 우주의 질료입니다. 이러한 순환적
              질서는 물질뿐 아니라 우리의 의도와 행동에 동일하게 적용된다고
              믿습니다. 카네이테이는 버려지는 폐군용텐트를 재활용하여 순환의
              시작점을 만듭니다. 이는 개인과 사회를 넘어 범우주적으로 건강한
              영향력을 만들어내고 언젠가 다시 나에게로 회귀할 것입니다. 나와
              나를 둘러싼 세계와의 지속적인 공생, 카네이테이의 목표입니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://www.kaneitei.com/">
          <img alt="..." src={require("assets/img/faces/카네이테이.png")} />
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
            src={require("assets/img/faces/컨벡소컨케이브.png")}
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
              <b>컨벡소컨케이브</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              급변하는 패션, 지속가능한 업사이클링 등 남성과 여성, 중세 시대와
              패션을 통한 현대 위에서 언급한 세 가지 주요 주제를 일관되게
              재해석합니다. 친환경 원단을 개발하고 업사이클이 가능한 원부자재를
              다양한 요소에 사용하며, 아틀리에 방식의 시간과 공을 들여 정성을
              담은 제품을 지속 가능한 패션으로 디자인합니다.
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
            <b>컨티뉴</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              자동차 생산과정과 폐자동차에서 수거한 천연가죽시트, 안전벨트 및
              에어백 그리고 해양쓰레기와 버려진 소재들을 업사이클링하여 가방 및
              신발, 악세사리 등 다양한 제품을 디자인하고 제작합니다. 환경과
              디자인을 동시에 생각하며 자원의 선순환을 돕는 지속가능한 환경
              가치를 창출합니다. 새것의 ‘새로움’이 아니라 익숙하거나 잊혀진것에
              ‘새로움’을 부여하는 것 이것이 컨티뉴 철학입니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://wecontinew.co.kr/">
          <img alt="..." src={require("assets/img/faces/컨티뉴.png")} />
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
        <a href="https://cohamcie.com">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/코헴체.png")}
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
              <b>코헴체</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              대부분 그저 유행이 지났다는 이유만으로 가치를 잃는 드레스를, 저희
              코햄체는 하나의 패션 아이템으로 탄생시킵니다. 제주도에서 해마다
              1000벌 이상의 해녀복이 버려지고 있습니다. 해녀는 대한민국
              무형문화제임과 동시에 유네스코에 지정된 세계적인
              인류문화유산임에도 불구하고 대중들의 관심은 적은 편입니다.
              잠수복의 주 소재인 네오프렌 소재를 업사이클링합니다. 내구성이
              강하고 충격 완화의 기능을 가진 기능성 소재입니다.
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
            <b>큐클리프</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              UPCYCLE의 스펠링을 재배열하여 CUECLYP라는 새로운 단어를
              만들었습니다. 단어 ‘upcycle’을 업사이클하여 만들어진 CUECLYP는
              업사이클에 국한되지 않고 필환경 시대를 반영하여 계기와 이유가 있는
              의미있는 디자인을 전개하겠다는 뜻이 담겨있습니다. 로고의 우산
              픽토그램은 버려지는 우산의 소생을 표현하는 동시에 구름 위로 해가
              뜨는 형상으로 버려지는 다양한 자원들이 다시 부활한다는 두 가지
              의미 를 가지고 있습니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://cueclyp.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/큐클리프.png")}
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
        <a href="https://www.treadngroove.com/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/트레드앤그루브.png")}
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
              <b>트레드앤그루브</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            <b>
              트레드앤그루브는 소셜 이노베이터들이 전개하는 타이어 업사이클링
              슈즈 브랜드로서, 실제로 도로를 달리던 타이어를 신발 밑창에
              적용하여 다양한 타이어 패턴들의 이야기를 소개합니다 아무도
              알아보지 못하지만 매일매일 엄청난 무게를 견뎌내는 타이어들이
              달려온 스토리를 전하고 이를 통해 우리가 매일 마주하지만 인지하지
              못하는, 그러나 그렇기 때문에 특별하고 유일할 수 밖에 없는, 그런
              가치를 전하고자 합니다.
            </b>
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem7 = {
    0: useScrollFadeIn("right", 1, 0),
  };

  const uu8 = [
    <Row style={{ marginTop: "100px" }}>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title" style={{ marginBottom: "30px" }}>
            <b>팩커블코</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            <b>
              '디자인, 기능 뿐만 아니라 환경까지 생각하는 팩커블코' 여러 가지
              색감으로 이루어진 특수한 소재로 된 폐기된 포장지와 튜브로 자신의
              아파트에서 메신저백과 토트백을 개발했습니다. 여러 가지 색감이
              혼합되어 있는 디자인과 Upcycle bag의 특성상 제품의 같은 디자인이
              없다는 것이 큰 특징으로,자신만의 것과 찾는 이들과 창의적인
              아이템을 찾는 이들에게 사랑받고 있습니다.
            </b>
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://etcseoul.com/category/packableco/757/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/팩커블코.png")}
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
export default Company3;
