import React from "react";
import Slider from "nouislider";
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";
function Main1() {
  React.useEffect(() => {});
  return (
    <>
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
              <Card className="card-profile card-plain">
                <CardBody>
                  <span></span>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <h3 class="Sub">
                    GAIA는 환경문제 해결을 위해 노력하는 브랜드들과 협업하여
                    가치있는 소비 방식을 제안하며 각 브랜드의 업사이클링 소재와
                    제품에 대해 소개하는 공간을 만들어나갑니다. 온라인 편집샵을
                    통해 50여개의 브랜드들과 200여개의 제품 을 소개하며
                    재활용쓰레기가 환경에 미치는 영향을 한 눈에 보기 쉽게 그래프
                    형식으로 보여주고, 재활용을 올바르게 하는 방법을 사진과
                    그래프를 통해 소개합니다
                  </h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <h3>- HISTORY</h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            {/* history */}
            <Col md="1">
              <Card className="card-profile card-plain">
                <CardBody>
                  <h4></h4>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            {/* 연도 */}
            <Col md="3">
              <Card className="card-profile card-plain">
                <CardBody>
                  <span class="fsize13">
                    <strong>2022.10 &nbsp;</strong>
                  </span>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <hr
        class="harf-rule"
        style={{
          marginLeft: "350px",
          marginRight: "350px",
          marginTop: "100px",
          marginBottom: "0px",
        }}
      ></hr>
      <div>
        <div style={{ textAlign: "center", margin: "100px" }}>
          <h2>ESG Management</h2>
        </div>
        <Container>
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
                  <span class="title">
                    협력업체와 친환경 동반성장하는 가이아
                  </span>
                  <br />
                  <h3 class="Sub">
                    GAIA는 환경문제 해결을 위해 노력하는 브랜드들과 협업하여
                    가치있는 소비 방식을 제안하며 각 브랜드의 업사이클링 소재와
                    제품에 대해 소개하는 공간을 만들어나갑니다. 온라인 편집샵을
                    통해 50여개의 브랜드들과 200여개의 제품 을 소개하며
                    재활용쓰레기가 환경에 미치는 영향을 한 눈에 보기 쉽게 그래프
                    형식으로 보여주고, 재활용을 올바르게 하는 방법을 사진과
                    그래프를 통해 소개합니다
                  </h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <span class="title">
                    협력업체와 친환경 동반성장하는 가이아
                  </span>
                  <br />
                  <br />
                  <h3 class="Sub">
                    GAIA는 환경문제 해결을 위해 노력하는 브랜드들과 협업하여
                    가치있는 소비 방식을 제안하며 각 브랜드의 업사이클링 소재와
                    제품에 대해 소개하는 공간을 만들어나갑니다. 온라인 편집샵을
                    통해 50여개의 브랜드들과 200여개의 제품 을 소개하며
                    재활용쓰레기가 환경에 미치는 영향을 한 눈에 보기 쉽게 그래프
                    형식으로 보여주고, 재활용을 올바르게 하는 방법을 사진과
                    그래프를 통해 소개합니다
                  </h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <img src={require("assets/img/S.png")} />
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
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
                  <span class="title">
                    협력업체와 친환경 동반성장하는 가이아
                  </span>
                  <br />
                  <h3 class="Sub">
                    GAIA는 환경문제 해결을 위해 노력하는 브랜드들과 협업하여
                    가치있는 소비 방식을 제안하며 각 브랜드의 업사이클링 소재와
                    제품에 대해 소개하는 공간을 만들어나갑니다. 온라인 편집샵을
                    통해 50여개의 브랜드들과 200여개의 제품 을 소개하며
                    재활용쓰레기가 환경에 미치는 영향을 한 눈에 보기 쉽게 그래프
                    형식으로 보여주고, 재활용을 올바르게 하는 방법을 사진과
                    그래프를 통해 소개합니다
                  </h3>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Main1;
