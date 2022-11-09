import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function StaticExample1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-link" color="info" onClick={handleShow}>
        자세히 알아보기
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <img
            alt="..."
            src={require("assets/img/faces/종량제봉투.png")}
            width="100%"
            height="900px"
          />
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default StaticExample1;
