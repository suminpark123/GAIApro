import React from "react";
import Slider from "nouislider";
import useScrollFadeIn from "views/examples/커스텀훅/useScrollFadeIn";
import ScrollToTop from "views/examples/content/스크롤이벤트";
import { Container, Row, Col, Card, CardBody, CardFooter } from "reactstrap";

function Main1() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {});

  const E = [
    <Row>
      <Col md="4">
        <Card className="card-profile card-plain">
          <CardBody>
            <img src={require("assets/img/E.png")} />
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
      <Col md="6">
        <Card className="card-profile card-plain">
          <CardBody>
            <div>
              <span className="title">업사이클링 소재를 활용하는 GAIA</span>
              <br />
              <div style={{ textAlign: "left" }}>
                <h3 className="Sub">
                  <p>
                    가이아에서 판매되는 모든 제품은 버려지는 재활용 제품들을 쓸
                    수 있는
                  </p>
                  <p>
                    제품으로 탈바꿈시키는 업사이클링 이라는 기술을 통해서 생산이
                    됩니다
                  </p>
                  <p>
                    현재 판매중인 제품들의 소재는 매립 및 소각으로 인해 환경에
                    심각한
                  </p>
                  <p>
                    오염을 일으키는 플라스틱 폐비닐등이 이용됩니다. 이러한
                    소재들을{" "}
                  </p>
                  <p>
                    활용함으로써 환경오염을 획기적으로 줄이고 제품을 구매하는
                    고객들로
                  </p>
                  <p>하여금 환경 보호에 관심을 가지게 만드는게 가이아의</p>
                  <p>ENVIROMENTAL 경영철학입니다.</p>
                </h3>
              </div>
            </div>
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
    </Row>,
  ];

  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0),
  };

  const S = [
    <Row>
      <Col md="6">
        <Card className="card-profile card-plain">
          <CardBody>
            <span className="title" style={{ marginLeft: "150px" }}>
              협력업체와 친환경 동반성장하는 GAIA
            </span>
            <br />
            <br />
            <div style={{ textAlign: "left" }}>
              <h3 className="Sub">
                <p>
                  GAIA는 환경문제 해결을 위해 노력하는 브랜드들과 협업하여
                  가치있는 소비
                </p>
                <p>
                  방식을 제안하며 각 브랜드의 업사이클링 소재와 제품에 대해
                  소개하는 공간을
                </p>
                <p>
                  만들어나갑니다. 온라인 편집샵을 통해 50여개의 브랜드들과
                  200여개의 제품을
                </p>
                <p>
                  소개하며 재활용쓰레기가 환경에 미치는 영향을 한 눈에 보기 쉽게
                  그래프
                </p>
                <p>
                  형식으로 보여주고, 재활용을 올바르게 하는 방법을 사진과
                  그래프를 통해
                </p>
                <p>
                  소개합니다 친환경으로 가는 사회에 발판을 마련하는 것이
                  SOCIAL경영 철학입니다.
                </p>
              </h3>
            </div>
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
      <Col md="4">
        <Card className="card-profile card-plain">
          <CardBody>
            <img
              src={require("assets/img/S.png")}
              style={{ marginLeft: "100px", marginTop: "50px" }}
            />
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
    </Row>,
  ];
  const animatedItem2 = {
    0: useScrollFadeIn("left", 1, 0),
  };

  const G = [
    <Row>
      <Col md="4">
        <Card className="card-profile card-plain">
          <CardBody>
            <img src={require("assets/img/G.png")} />
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
      <Col md="6">
        <Card className="card-profile card-plain">
          <CardBody>
            <span className="title">윤리적 지배구조를 위한 GAIA의 실천</span>
            <br />
            <div style={{ textAlign: "left" }}>
              <h3 className="Sub">
                <p>
                  분기별 1회, 연 4회 모든 직원은 공식적인 사내 공모를 통하여
                  회사의 발전
                </p>
                <p>
                  방향을 제시할 수 있고 소비자의 제안을 적극적으로 수용합니다
                  이를
                </p>
                <p>
                  구체화하고 실천하고자 근로자 대표를 사내 이사로 선임하고
                  소비자 입장을
                </p>
                <p>
                  대변하는 외부 인사를 사외이사로 선임하고 있습니다 이를 통하여
                  환경적
                </p>
                <p>
                  사회적 경제적 가치 Sustainable triple bottom line의 건강한
                  지속
                </p>
                <p>
                  순환과 성장을 창출합니다 GAIA의 투명한 GOVERNANCE
                  경영철학입니다.
                </p>
              </h3>
            </div>
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Col>
    </Row>,
  ];

  const animatedItem3 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  return (
    <>
      <ScrollToTop />
      <div style={{ textAlign: "center", margin: "100px" }}>
        <h1 className="Main">Company overview</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <h3>- ABOUT US </h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            <Col md="1">
              {/* 공백 */}
              <Card className="card-profile card-plain"></Card>
            </Col>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <h3 className="Sub">
                    <p>
                      GAIA는 사회문제 해결을 위해 노력하는 브랜드들과 협업하여
                      가치 있는 삶의
                    </p>
                    <p>
                      방식을 제안하며 각 브랜드의 특별한 스토리가 담긴 공간을
                      만들어 나갑니다.
                    </p>
                    <p>
                      온라인 편집매장 운영을 통해 50여개의 브랜드들을 유통하며
                      함께하는 브랜드가
                    </p>
                    <p>
                      다양한 경험을 통해 끊임없이 도전 할 수 있도록 돕고 판로를
                      확대해 나가는 것이
                    </p>
                    <p>
                      GAIA의 역할입니다 또한 DASH BOARD를 이용한 재활용
                      폐기물들이 버려지는
                    </p>
                    <p>
                      소각, 매립, 투기 등의 문제를 다루고 이러한 폐기물을
                      이용해서 제품을 생산하는
                    </p>
                    <p>기업들의 소개 및 올바른 재활용 방법등을 소개합니다.</p>
                  </h3>
                </CardBody>

                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <hr
        className="harf-rule"
        style={{
          marginLeft: "350px",
          marginRight: "350px",
          marginTop: "100px",
          marginBottom: "0px",
        }}
      ></hr>
      <div style={{ textAlign: "center", margin: "100px" }}>
        <h1 className="Main">ESG Management</h1>
      </div>
      <div>
        <Container>
          {E.map((item, index) => (
            <div key={item} {...animatedItem[index]}>
              {item}
            </div>
          ))}
        </Container>
      </div>
      <div>
        <Container>
          {S.map((item, index) => (
            <div key={item} {...animatedItem2[index]}>
              {item}
            </div>
          ))}
        </Container>
      </div>
      <div>
        <Container>
          {G.map((item, index) => (
            <div key={item} {...animatedItem3[index]}>
              {item}
            </div>
          ))}
        </Container>
      </div>
      <hr
        className="harf-rule"
        style={{
          marginLeft: "350px",
          marginRight: "350px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      ></hr>
    </>
  );
}
export default Main1;
