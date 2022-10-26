/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/index-sections/SectionDark";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import jQuery from "jquery";
import $ from "jquery";
import doucment from "jquery";
import { readBuilderProgram } from "typescript";
import { Link } from "react-router-dom";
import SuminModal from "./영상모달";

// import { MagnificPopup } from "react-magnific-popup";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  // 수정-막대그래프

  const [state, setState] = useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
          borderRadius: 0,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
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
          "Oct",
          "Nov",
          "Dec",
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
            return val + "%";
          },
        },
      },
      title: {
        text: "재활용 쓰레기",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  const [state1, setState1] = useState({
    series: [
      {
        name: "Inflation",
        data: [5.6, 3.1, 4.0, 5.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
          borderRadius: 0,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
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
          "Oct",
          "Nov",
          "Dec",
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
            return val + "%";
          },
        },
      },
      title: {
        text: "예)소각 쓰레기",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  //bottom
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

  //top
  const [state3, setState3] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 140, 90, 80, 70, 88],
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
        text: "처리과정",
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

  //수정완료

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />

      <div className="main">
        <div className="section text-center">
          <h1>chart</h1>
          <br />
          <Container>
            <div
              className="SuminMain"
              style={{ marginRight: "150px", marginLeft: "150px" }}
            >
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-album-2" />
                    </div>
                    <div
                      className="description"
                      style={{
                        backgroundColor: "yellow",
                        width: 200,
                        height: 150,
                      }}
                    >
                      <h4 className="info-title">Beautiful Gallery</h4>
                      <p className="description">
                        Spend your time generating new ideas. You don't have to
                        think of implementing.
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div
                      className="description"
                      style={{
                        backgroundColor: "yellow",
                        width: 200,
                        height: 150,
                      }}
                    >
                      <h4 className="info-title">New Ideas</h4>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient.
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chart-bar-32" />
                    </div>
                    <div
                      className="description"
                      style={{
                        backgroundColor: "yellow",
                        width: 200,
                        height: 150,
                      }}
                    >
                      <h4 className="info-title">Statistics</h4>
                      <p>
                        Choose from a veriety of many colors resembling sugar
                        paper pastels.
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-sun-fog-29" />
                    </div>
                    <div
                      className="description"
                      style={{
                        backgroundColor: "yellow",
                        width: 200,
                        height: 150,
                      }}
                    >
                      <h4 className="info-title">Delightful design</h4>
                      <p>
                        Find unique and handmade delightful designs related
                        items directly from our
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <div
                    className="Graph_top"
                    style={{
                      display: "inline-block",
                      height: 400,
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 750,
                        display: "inline-block",
                        // backgroundColor: "#CCF99C",
                        opacity: 0.7,
                      }}
                    >
                      <ReactApexChart
                        options={state3.options}
                        series={state3.series}
                        type="line"
                        height={350}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <div
                className="Graph_mid"
                style={{
                  display: "inline-block",
                  height: 600,
                  backgroundColor: "white",
                  position: "relative",
                }}
                > */}
                <Col md="6">
                  <div
                    style={{
                      width: 375,
                      display: "inline-block",
                      // backgroundColor: "#CCF99C",
                      opacity: 0.7,
                    }}
                  >
                    <ReactApexChart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      height={300}
                    />
                  </div>
                </Col>

                {/* 그래프 나뉘는지점 */}
                <Col md="6">
                  <div
                    style={{
                      width: 375,
                      display: "inline-block",
                      // backgroundColor: "#CCF99C",
                      opacity: 0.7,
                    }}
                  >
                    <ReactApexChart
                      options={state1.options}
                      series={state1.series}
                      type="bar"
                      height={300}
                    />
                  </div>
                </Col>
                {/* </div> */}
              </Row>
              <Row>
                <Col md="12">
                  <div
                    className="suminModal"
                    style={{
                      width: 750,
                      backgroundColor: "black",
                      opacity: 1,
                      height: 400,
                      display: "inline-block",
                    }}
                  >
                    <SuminModal />
                  </div>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <div
                    className="Graph_bottom"
                    style={{
                      display: "inline-block",
                      height: 400,
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 750,
                        display: "inline-block",
                        // backgroundColor: "#CCF99C",
                        opacity: 0.7,
                      }}
                    >
                      <ReactApexChart
                        options={state2.options}
                        series={state2.series}
                        type="line"
                        height={350}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="section section-dark text-center">
                  <Col md="12">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <div className="author">
                            <CardTitle tag="h4">Henry Ford</CardTitle>
                            <h6 className="card-category">Product Manager</h6>
                          </div>
                        </a>
                        <p className="card-description text-center">
                          Teamwork is so important that it is virtually
                          impossible for you to reach the heights of your
                          capabilities or make the money that you want without
                          becoming very good at it.
                        </p>
                      </CardBody>
                      <CardFooter className="text-center"></CardFooter>
                    </Card>
                  </Col>
                </div>
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
