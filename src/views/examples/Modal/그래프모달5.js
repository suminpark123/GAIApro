import React from "react";
import { Button, Modal } from "reactstrap";

function Examplesu5() {
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
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            <b>미세 플라스틱의 위험성</b>
          </h5>
        </div>
        <div className="modal-body">
          <p style={{ color: "black" }}>
            <b>
              생산된 플라스틱에서 천만 톤 가량의 플라스틱은
              <br />
              매년 바다로 흘러들어가고, 이 중 <u>'5조개'</u> 이상의 플라스틱
              <br />
              조각이 전 세계 바다를 순환하는 것으로 추정됩니다.
              <br />
              문제는 이러한 플라스틱이 먹이사슬을 통해서 다시
              <br />
              우리의 식탁으로 들어와 인체의 건강을 위협하고 있죠.
              <br />
              미세플라스틱은 5mm 이하의 작은 고체 플라스틱으로
              <br />
              정의하는데, 1mm 이하의 나노물질도 포함하고 있습니다.
              <br />
              생산 당시부터 작게 만들어져 치약, 화장품 등에 넣는
              <br />
              1차 미세플라스틱과 플라스틱제품이 잘게 부서져서
              <br />
              만들어진 2차 플라스틱으로 구분하기도 하는데
              <br />
              이들은 우리 몸에 계속 축적해나가고 있습니다.
            </b>
          </p>
        </div>
        <div className="modal-footer">
          <div className="divider" />
        </div>
      </Modal>
    </>
  );
}

export default Examplesu5;
