import React from "react";
import { Button, Modal } from "reactstrap";

function Examplesu6() {
  const [liveDemo, setLiveDemo] = React.useState(false);
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
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header"></div>
        <div className="modal-body">
          <p style={{ color: "black", fontSize: "18px" }}>
            <b>
              많은 해양동물들은 플라스틱을 먹이로 생각하고 실제로 먹기도 합니다.
              <br />
              그렇게 함으로써 플라스틱의 독소가 몸에 쌓이면서 서서히 죽음을
              맞이하죠.
              <br />
              이미 바다에는 플라스틱이 너무나 많아서 벗어날 수도 없습니다.
              <br />
              지금 같은 속도라면 2050년에는 바다에
              <br />
              물고기보다 플라스틱이 더 많은거라는 연구결과가 나오기도 했습니다.
              <br />
              이런 현상은 자연스럽게 우리 인간마저 플라스틱에 잠식당하게 될
              것입니다.
            </b>
          </p>
        </div>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
}

export default Examplesu6;
