import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// reactstrap components
import { Button, FormGroup, Input, Modal, Row, Col } from "reactstrap";

function Examplesu2() {
  const [liveDemo, setLiveDemo] = React.useState(false);

  const [state1, setState1] = useState({});

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

export default Examplesu2;
