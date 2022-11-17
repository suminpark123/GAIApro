import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button, Modal } from "reactstrap";

function Examplesu1() {
  const [liveDemo, setLiveDemo] = React.useState(false);

  const [state1, setState1] = useState({
    series: [
      {
        name: "해양에 투기되는 플라스틱양(단위: 만 톤)",
        data: [
          870, 850, 790, 860, 910, 920, 906, 930, 940, 963, 982, 994, 1003,
          1020, 1100, 1200,
        ],
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
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "만";
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["#009000"],
        },
      },

      xaxis: {
        categories: [
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
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
            return val + "만";
          },
        },
      },
      title: {
        text: "해양에 투기되는 플라스틱양(단위: 만 톤)",
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
        style={{
          borderRadius: "20px",
          backgroundColor: "green",
          border: "green",
        }}
      >
        그런데...
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
          <ReactApexChart
            options={state1.options}
            series={state1.series}
            type="bar"
            height={350}
          />
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            <b>
              {" "}
              플라스틱 폐기물 처리에 실패하면서 우리는 지구를 죽이고 있습니다.
              매년 800만에서 1,200만 톤의 플라스틱이 해양에 투기되고 있는데요,
              이는 매 분마다 쓰레기 트럭 한대를 바다에 버리고 있는 것과
              마찬가지입니다. 태평양에는 거대한 플라스틱 쓰레기 지대가 있는데
              이는 미국 텍사스 주의 2배 크기입니다. 정말 심각한 문제죠.
            </b>
          </p>
        </div>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
}

export default Examplesu1;
