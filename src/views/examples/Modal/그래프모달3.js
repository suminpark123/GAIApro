import React from "react";
import { Button, FormGroup, Input, Modal } from "reactstrap";

function Examplesu3() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => setLiveDemo(true)}
        style={{ borderRadius: "20px", color: "white" }}
      >
        자세히 알아보기
      </Button>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
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
          <p style={{ color: "black" }}>
            <b>
              업그레이드(upgrade)와 리사이클링(recycling)의 합성어로
              <br />
              버려진 물건을 재활용해 더 가치 있는 제품으로 만드는
              <br />
              "새활용"을 말합니다.
              <br />
              상품에 디자인과 가치를 더해 새로운 쓸모를 갖게 한다는 점에서
              유의미할 뿐 아니라, 기존의 새 물건을 생산하고
              <br />
              구매하는 소비 시장을 대신할 수 있다는 점에서
              <br />
              친환경적이죠.
              <br />
              아주 잠깐 사용되고 쓰임이 다하거나 유행이 지나 버려지는 물건 중
              재활용이 어려운 소재일 때,
              <br />
              업사이클링을 통해 다시 인간의 공간 어딘가에 머물게
              <br />
              된다면 환경적인 측면에서 긍정적이고 지구상에 더 이상 둘 곳 없는
              쓰레기들의 안식처가 될 수 있습니다!
              <br />
              쉽게 사고 버리지 않는, 물건을 아까워할 줄 아는,
              <br />
              할 수 있는 것들은 포장 없이 구매하는 제로 웨이스트
              <br />
              (zero waste)를 지향하는 기본적인 소비 패턴 안에서
              <br />
              업사이클링은 정말 좋은 옵션이 될 수 있음을 모두 기억해요!
              <br />
              <br />
              <p style={{ fontSize: "12px" }}>
                * 새활용의 정의는 '그건 쓰레기가 아니라고요' 도서 내용을
                참고하였습니다.
              </p>
            </b>
          </p>
        </div>
        <div className="modal-footer"></div>
      </Modal>
    </>
  );
}

export default Examplesu3;
