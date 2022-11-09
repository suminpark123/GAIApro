import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Iframe from "react-iframe";

function SuminModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "350px",

          backgroundColor: "black",
          //   justifyContent: "center",
          // display: "inline-block",
          marginTop: "19px",
          borderRadius: 10,
        }}
      >
        <img
          src={require("assets/img/youtube.png")}
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "150px" }}
        />
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        {/* <Modal.Header style={{ opacity: 0.5 }}>
          <Modal.Title>영상</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Iframe
            url="https://www.youtube.com/embed/wq-Memch86M"
            width="100%"
            height="350px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuminModal;
