import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function PassModal() {
  const [loginModal, setLoginModal] = React.useState(false);
  return (
    <>
      <Button
        className="btn-round"
        color="info"
        type="button"
        style={{ borderRadius: 5, width: "150px" }}
        onClick={() => setLoginModal(true)}
      >
        아이디/비번찾기
      </Button>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>

          <h3 className="modal-title text-center">GAIA</h3>
          <p>아이디/비번찾기</p>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>아이디찾기</label>
            <Input defaultValue="" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <label>비밀번호찾기</label>
            <Input defaultValue="" placeholder="Password" type="password" />
          </FormGroup>
          <Button
            block
            className="btn-round"
            color="default"
            style={{ width: "200px", borderRadius: 0 }}
          >
            완료
          </Button>
        </div>
        <div className="modal-footer no-border-footer">
          <span className="text-muted text-center">
            Looking{" "}
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              미구현페이지
            </a>
            ?
          </span>
        </div>
      </Modal>
    </>
  );
}

export default PassModal;
