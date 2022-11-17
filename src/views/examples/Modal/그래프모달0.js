import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button, Modal, Row, Col } from "reactstrap";

function Examplesu0() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  const [state, setState] = useState({
    series: [
      {
        name: "이산화탄소 배출 상승세",
        data: [0, 10, 25, 51, 97, 85, 110, 118, 135, 160],
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
        text: "이산화탄소 배출량 상승그래프",
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
          "1820",
          "1850",
          "1940",
          "1988",
          "1990",
          "1994",
          "2002",
          "2013",
          "2015",
          "현재",
        ],
      },
    },
  });

  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setLiveDemo(true)}
        style={{
          borderRadius: "20px",
          backgroundColor: "green",
          border: "green",
        }}
      >
        자세히 알아보기
      </Button>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)} size="lg">
        <div className="modal-header">
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
            {/* 추가 */}
            <Row>
              <Col>
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="area"
                  height={350}
                />
              </Col>
            </Row>
            {/* 추가완료 */}
          </p>
        </div>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
}

export default Examplesu0;
