import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col, CardBody, CardFooter } from "reactstrap";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "./News.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "10px",
          }}
        >
          <h1 className="Main">Environmental News</h1>
        </div>
        <Slider {...settings}>
          <div>
            <Container>
              <Row>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/11/09/AKR20221109116400054_01_i_P4_20221109152620381.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>
                            "갯벌, 세계에 알린다"…신안군-더나은세상, 국제협력
                            협약
                          </Card.Title> */}
                          <Card.Text>
                            "갯벌, 세계에 알린다"…신안군-더나은세상, 국제협력
                            협약
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013564615?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/421/2022/11/09/0006447355_001_20221109152605106.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            '기후랑 무슨 관계라고'…환경 활동가들 세계 곳곳서
                            명화 훼손
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/421/0006447355?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/657/2022/11/09/0000008506_002_20221109151401892.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한2</Card.Title> */}
                          <Card.Text>
                            환경단체, 조선일보·국립환경과학원 비판 성명
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/657/0000008506?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/003/2022/11/09/NISI20221109_0001125454_web_20221109150850_20221109151417676.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한5</Card.Title> */}
                          <Card.Text>
                            화장품 용기→재활용…씨티케이, '에코 팩트' 특허 취득
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011527272?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/11/09/PYH2016080103260006100_P4_20221109150126723.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한3</Card.Title> */}
                          <Card.Text>
                            시흥 배곧~인천 송도 잇는 배곧대교 건설사업 3년째
                            표류
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013564515?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/421/2022/11/09/0006447208_001_20221109145104235.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한6</Card.Title> */}
                          <Card.Text>
                            전남도, 초미세먼지 재난상황 대응 모의훈련 실시
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/421/0006447208?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
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
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/028/2022/11/09/0002614053_001_20221109151701135.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>
                            "갯벌, 세계에 알린다"…신안군-더나은세상, 국제협력
                            협약
                          </Card.Title> */}
                          <Card.Text>
                            험난한 여정 끝 ‘새기후체제’ 확정에 감격의 환호
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/028/0002614053?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/421/2022/11/09/0006446648_001_20221109120112869.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            국립환경과학원, 시·도 보건환경연구원과 대기오염물질
                            특성 연구
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/421/0006446648?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/421/2022/11/09/0006446646_001_20221109120110249.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한2</Card.Title> */}
                          <Card.Text>
                            환경인증 벌써 30년…"소비자에게 더 많이 선택받게 할
                            것"
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/421/0006446646?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/119/2022/11/09/0002656186_001_20221109120201336.jpeg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한5</Card.Title> */}
                          <Card.Text>
                            환경부, 환경표지 인증제도 30주년 기념식 개최
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/119/0002656186?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/119/2022/11/09/0002656187_001_20221109120202397.jpeg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한3</Card.Title> */}
                          <Card.Text>
                            국립환경과학원, 시도 보건환경연구원 공동연구 연찬회
                            개최
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/119/0002656187?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <img
                          class="img.sliderImg"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/028/2022/11/09/0002614039_001_20221109133901144.jpg?type=w647"
                          style={{ width: "400px", height: "200px" }}
                        />
                        <Card.Body>
                          {/* <Card.Title>북한6</Card.Title> */}
                          <Card.Text>
                            기후변화 피해 개도국 지원한다면서 ‘지갑 열 계획’
                            없는 한국
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/028/0002614039?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Slider>
        <div>
          <hr
            class="harf-rule"
            style={{
              marginLeft: "350px",
              marginRight: "350px",
              marginTop: "150px",
              marginBottom: "-50px",
            }}
          ></hr>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Container>
              <Row>
                <Col md="1">
                  <Card className="card-profile card-plain"></Card>
                </Col>
                <Col md="10">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <h3>
                        <b>OUR MISSION & VISION</b>
                      </h3>
                      <br />
                      <h3 class="Sub">
                        <p>
                          <b>
                            지속가능 개발 목표 또는 지속가능 발전 목표
                            Sustainable Development Goals SDGs는
                          </b>
                        </p>
                        <p>
                          <b>
                            인류문제 사회문제 지구환경 및 기후변화 문제 경제
                            문제 등 우리가 직 간접적으로 직면한
                          </b>
                        </p>
                        <p>
                          <b>
                            문제들을 2030년까지 해결하기 위해 유엔과 국제사회가
                            함께 제정한 17가지 주요 공동목표입니다
                          </b>
                        </p>
                        <p>
                          <b>
                            GAIA는지속가능한 생산과 소비가 가능하도록 플랫폼
                            역할을 수행하며 지구환경 개선에 기여하고자
                          </b>
                        </p>
                        <p>
                          <b>
                            합니다 GAIA의 이러한 노력이 지구의 지속가능 성장을
                            위해 보탬이 되면 좋겠습니다.
                          </b>
                        </p>
                      </h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  {/* 공백 */}
                  <Card className="card-profile card-plain"></Card>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  {/* 공백 */}
                  <Card className="card-profile card-plain"></Card>
                </Col>
                <Col md="12">
                  <Card className="card-profile card-plain">
                    <CardBody>
                      <img src={require("assets/img/가이아.png")} />
                    </CardBody>
                    <CardFooter className="text-center"></CardFooter>
                  </Card>
                </Col>
                <Col md="1">
                  {/* 공백 */}
                  <Card className="card-profile card-plain"></Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
