import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// reactstrap components
import { Button, FormGroup, Input, Modal, Row, Col } from "reactstrap";

function Examplesu1() {
  const [liveDemo, setLiveDemo] = React.useState(false);

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
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setLiveDemo(true)}
        style={{ borderRadius: "20px" }}
      >
        자세히 알아보기
      </Button>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)} size="lg">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLiveDemo(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            <Row>
              <Col>
                {/* <div
                  style={{
                    width: 375,
                    display: "inline-block",
                    // backgroundColor: "#CCF99C",
                    opacity: 0.7,
                  }}
                > */}
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  height={300}
                />
                {/* </div> */}
              </Col>
            </Row>
          </p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Examplesu1;
