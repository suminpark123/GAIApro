import { React, useRef } from "react";
import PassModal from "./아이디비번찾기모달";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
function LoginP() {
  const idRef = useRef();
  const pwRef = useRef();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin!");
    axios
      .post("http://localhost:3007/login-page", {
        id: document.getElementById("userId").value,
        pw: document.getElementById("userPw").value,
      })
      .then((result) => {
        console.log("아이디", result.data.result);
        localStorage.setItem("id", result.data.result);
        history.push("/index");
      })
      .catch(() => {
        console.log("데이터실패");
      });
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        className="left"
        style={{
          width: "50%",
          height: "100%",
          float: "left",
          backgroundColor: "white",
          boxSizing: "border-box",
        }}
      >
        <div className="filter" />
        <Container style={{ width: "100%", height: "100vh" }}>
          <Row>
            <Col className="ml-auto mr-auto" lg="12">
              <Card
                className="card-registermin ml-auto mr-auto"
                style={{
                  backgroundColor: "#EAEAEA",
                  width: "480px",
                  position: "sticky",
                  objectFit: "content",
                  marginTop: "50px",
                  borderRadius: "120px",
                  height: "860px",
                }}
              >
                <h3 className="title mx-auto" style={{ fontSize: "40px" }}>
                  <Link to="/index">GAIA</Link>
                </h3>
                <h3
                  className="title mx-auto"
                  style={{ fontSize: "30px", marginTop: "5px" }}
                >
                  Sign in
                </h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <br></br>
                <Form onSubmit={handleLogin} className="register-form">
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                      }}
                    >
                      아이디
                    </label>
                    <Input
                      placeholder="Email"
                      type="text"
                      name="id"
                      style={{
                        marginLeft: "15px",
                        background: "white",
                        width: "280px",
                      }}
                      id="userId"
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginLeft: "-12px",
                      }}
                    >
                      비밀번호
                    </label>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="pw"
                      ref={pwRef}
                      style={{
                        marginLeft: "15px",
                        background: "white",
                        width: "280px",
                      }}
                      id="userPw"
                    />
                  </div>
                  <br />
                  <br></br>

                  <Row>
                    <Col>
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        style={{ borderRadius: 5, width: "150px" }}
                        to="/register-page"
                        tag={Link}
                      >
                        회원가입
                      </Button>
                    </Col>
                    <Col>
                      <PassModal />
                    </Col>
                  </Row>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    style={{ borderRadius: 5 }}
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="right"
        style={{
          width: "50%",
          height: "1000px",
          float: "right",
          backgroundColor: "whitesmoke",
          boxSizing: "border-box",
        }}
      ></div>
    </div>
  );
}
export default LoginP;
