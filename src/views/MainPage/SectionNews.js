import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col, CardBody, CardFooter } from "reactstrap";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                        <Card.Img
                          class="card-img-top"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541558?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          class="card-img-top"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/025/2022/10/30/0003234580_001_20221030155601093.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541516?sid=102"
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
                        <Card.Img
                          class="card-img-top"
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/AKR20221030053600063_01_i_P4_20221030163308949.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한2</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541312?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한5</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한3</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한6</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541558?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541516?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한2</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541312?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한5</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한3</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한6</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541558?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>[날씨] 전국에 구름…서울 낮 최고 19도</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541516?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한2</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/001/0013541312?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한5</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한3</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
                          >
                            본문 내용으로 이동
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://imgnews.pstatic.net/image/001/2022/10/30/PYH2022090622980034000_P4_20221030213008587.jpg?type=w647"
                        />
                        <Card.Body>
                          {/* <Card.Title>북한6</Card.Title> */}
                          <Card.Text>
                            존슨 전 英 총리 COP27 참석할 듯…불참하는 수낵에
                            견제구?
                          </Card.Text>
                          <Button
                            variant="primary"
                            href="https://n.news.naver.com/mnews/article/003/0011503107?sid=102"
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
                      <h3>OUR MISSION & VISION</h3>
                      <br />
                      <h3 class="Sub">
                        <p>
                          지속가능 개발 목표 또는 지속가능 발전 목표 Sustainable
                          Development Goals SDGs는
                        </p>
                        <p>
                          인류문제 사회문제 지구환경 및 기후변화 문제 경제 문제
                          등 우리가 직 간접적으로 직면한
                        </p>
                        <p>
                          문제들을 2030년까지 해결하기 위해 유엔과 국제사회가
                          함께 제정한 17가지 주요 공동목표입니다
                        </p>
                        <p>
                          GAIA는지속가능한 생산과 소비가 가능하도록 플랫폼
                          역할을 수행하며 지구환경 개선에 기여하고자
                        </p>
                        <p>
                          합니다 GAIA의 이러한 노력이 지구의 지속가능 성장을
                          위해 보탬이 되면 좋겠습니다.
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
