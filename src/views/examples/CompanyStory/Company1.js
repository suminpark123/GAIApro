import { Row, Col } from "reactstrap";
import ScrollToTop from "../Scroll/스크롤이벤트";
import useScrollFadeIn from "../Scroll/useScrollFadeIn";

function Company1() {
  const uu = [
    <Row>
      <Col lg="4">
        <a href="https://graenn.net/">
          <img
            style={{ margin: "30px", alignItems: "center", width: "300px" }}
            alt="..."
            src={require("assets/img/faces/그라인.png")}
          />
        </a>
      </Col>
      <Col md="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title">
            <b>그라인</b>
          </h3>
          <div>
            <p style={{ fontSize: "16px" }}>
              그라인이라 아이슬란드어로 '녹색Green'을 뜻하는 단어로,
              온갖오염으로부터 자유롭던 태곳적 자연이 그대로 남아있는 아름다운
              나라 아이슬란드처럼 우리의 미래또한 푸르기를 꿈꾸는 브랜드입니다.
              전세계적으로 해마다 버려지는 의류폐기물은 플라스틱 쓰레기보다 많은
              9200만톤, 성인여성 평균 평생동안 옷을 고르는데 보내는 시간 6개월
              지구도, 인간도 옷입는 스트레스로부터 해방된 삶을 원합니다.
            </p>
          </div>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0),
  };
  const uu2 = [
    <Row>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title">
            <b>NAU</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            WE LIVE NAU 포틀랜드에서 시작된 친환경 라이프웨어 나우(nau)는 지속
            가능한 방식으로 살아가는데 기본이 되는 옷을 만들자는 아이디어로
            시작된 브랜드입니다. 현대인의 지속 가능한 라이프스타일을 위한 옷을
            만듭니다.국내 최초 대한민국 폐페트병 재생 폴리에스터를 사용한
            플라스틱과 옷을 모두 만든 후 필요한 원단만 염색하는 친환경 염색 기법
            가먼트다잉을 사용하고 있습니다.
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://www.byn.kr/content/content.php?cont=nau_brand">
          <img alt="..." src={require("assets/img/faces/나우.png")} />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem2 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  const uu3 = [
    <Row>
      <Col lg="4">
        <a href="http://nukak.kr/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/누깍.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title">
              <b>누깍</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            우리 생활 속에는 다양한 물건들이 사용되고 버려집니다 누깍은 그러한
            물건들이 사용되고 버려집니다. 누깍은 그러한 물건들이 그저 버려지는게
            아닌 새로운 역할로 우리의 필요를 채우도록 만듭니다. 당신의 선택으로
            버려진 것에 두 번째 기회가 생기듯, 우리의 삶도 이전과 다르게 스스로
            선택하고 책임지는 두 번재 기회를 만나길 바랍니다. 누깍의 주요 소재는
            버려지는 광고현수막과 카이트 서프돛, 타이어 이너튜브입니다. 누깍은
            필요한 소재를 직접 만들지 않고, 우리 주변에서 사용 후 버려지는
            소재들을 수거하여 재활용하고 있습니다.
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem3 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  const uu4 = [
    <Row>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title">
            <b>DROPOFF</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            드랍오프는 2021년 런칭하여 지속 가능한 친환경 의류를 제작하는
            브랜드로서 국내 어족자원보호 및 해양환경보존 문화정착을 위해
            노력하며 성장중에 있습니다. 사람이 살아가는데 필수적인 3가지 요소인
            의식주 중 의류산업이 환경오염에 10%를 차지하고있습니다. 빠르게
            발전하는 의류산업과 Fast Fashion에 있어 지속가능한 친환경 의류를
            제작하여 판매 수익금의 15%를 우리나라 어족자원보호 및
            환경보존프로젝트에 사용합니다.
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="http://dropoff.co.kr/_idio/inc/sub1.html">
          <img alt="..." src={require("assets/img/faces/드랍오프.png")} />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem4 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  const uu5 = [
    <Row>
      <Col lg="4">
        <a href="https://www.radio-b.co.kr">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/라디오비.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title">
              <b>라디오비</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            환경오염에 대한 문제가 더욱 더 심각해져 가지만 우리는 이를 막을 수
            있는 방법을 찾지 못하고 있습니다.특히나 폐플라스틱으로 인한
            환경오염은 우리의 삶을 위협하는 가장 큰 쓰레기입니다.라디오비는
            앞으로의 우리를 위해 이 폐플라스틱을 활용하여 업사이클 디자인을
            만듭니다.폐플라스틱이 이제는 우리의 환경을 위협하는 쓰레기가 아니라
            다시 사용하여 우리를 이롭게 할 수 있는 물건이 되도록 만들고자
            합니다.아름다운 디자인과 높은 품질을 지닌 업사이클 물건은 다른
            소재로 만든 것과는 다른 특별한 장점을 지닐 수 있습니다.라디오비는 이
            업사이클에 대한 새로운 가치와 의미를 전달하여 환경에 대한 우리들의
            인식을 조금씩 바꿔 나가고자 합니다.
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem5 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  const uu6 = [
    <Row>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title">
            <b>래코드</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            래코드는 패션 재고의 업사이클링 기법과 친환경 소재를 사용한 의식있는
            패션을 다룹니다. 재고를 해체, 조합하는 과정에서 만들어지는 유니크한
            디자인입니다. 싱글맘, 새터민, 난민 등 사회적 약자에 대한 교육등의
            다양한 지원 활동을 진행합니다. 리나노는 기존 래코드 컬랙션을
            제작하고 남은 옷의 자투리와 부자재를 활용한 라인입니다. 래코드만의
            독특한 디테일 요소를 부분적으로 살려 위트와 감각있는 룩을 제안하고
            합리적인 가격대와 함께 Zero-Waste 패션의 가치를 추구하는 라인입니다.
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://www.kolonmall.com/RECODE">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/래코드.png")}
          />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem6 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  const uu7 = [
    <Row>
      <Col lg="4">
        <a href="http://www.renuers.com">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/리뉴어스.png")}
          />
        </a>
      </Col>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <div>
            <h3 className="info-title">
              <b>리뉴어스</b>
            </h3>
          </div>
          <p style={{ fontSize: "16px" }}>
            "남겨지고 버려지는 것들을 새롭게 하는 사람들 (Renew+ers)" 이라는
            의미를 가진 "리뉴어스"는 주변의 버려지는 자원들의 새로운 쓰임새를
            발견하고 지속가능한 디자인을 더하여 새·활·용 될 수 있도록
            재탄생시키는 업사이클링 브랜드 입니다.
          </p>
        </div>
      </Col>
    </Row>,
  ];
  const animatedItem7 = {
    0: useScrollFadeIn("right", 1, 0),
  };
  const uu8 = [
    <Row>
      <Col lg="8">
        <div
          className="description"
          style={{ width: "100%", height: "350px", display: "block" }}
        >
          <h3 className="info-title">
            <b>리버드</b>
          </h3>
          <p style={{ fontSize: "16px" }}>
            RE + Birth + Upcycle + Dream의 합성어이자 ‘다시 싹을 틔우다’는
            의미를 지닌 RE:BUD[리버드]는 자연환경과 사회적 가치를 중요시하고
            ‘어떻게 하면 친환경과 사회적 가치창출에 앞장설 수 있을까?’ 하는
            의문을 가지고 있습니다. 그러한 의문을 시작으로 버려지는 교복을
            활용하여 새로운 제품으로 탄생 시키는 업사이클링 브랜드가
            탄생하였습니다. 제품이 만들어지는 과정은 다양한 연령대의
            어르신분들과 함께 진행되어, 노인 일자리 창출과 지역사회 발전에
            이바지 합니다. 판매 수익금 일부는 노인 일자리 창출 및 지원과 사회
            취약계층 아동의 교복 구매 및 신학기 지원금 등으로 사용됩니다.
          </p>
        </div>
      </Col>
      <Col lg="4">
        <a href="https://www.rebud.co.kr/">
          <img
            style={{ margin: "75px", width: "263px", height: "115px" }}
            alt="..."
            src={require("assets/img/faces/리버드.png")}
          />
        </a>
      </Col>
    </Row>,
  ];
  const animatedItem8 = {
    0: useScrollFadeIn("left", 1, 0),
  };
  return (
    <>
      <ScrollToTop />
      {uu.map((item, index) => (
        <div key={item} {...animatedItem[index]}>
          {item}
        </div>
      ))}
      {/* 2번째  */}
      {uu2.map((item, index) => (
        <div key={item} {...animatedItem2[index]}>
          {item}
        </div>
      ))}
      {/* 3번째 */}
      {uu3.map((item, index) => (
        <div key={item} {...animatedItem3[index]}>
          {item}
        </div>
      ))}
      {/* 4번째 */}
      {uu4.map((item, index) => (
        <div key={item} {...animatedItem4[index]}>
          {item}
        </div>
      ))}
      {/* 5번째 */}
      {uu5.map((item, index) => (
        <div key={item} {...animatedItem5[index]}>
          {item}
        </div>
      ))}
      {/* 6번째 */}
      {uu6.map((item, index) => (
        <div key={item} {...animatedItem6[index]}>
          {item}
        </div>
      ))}
      {/* 7번째 */}
      {uu7.map((item, index) => (
        <div key={item} {...animatedItem7[index]}>
          {item}
        </div>
      ))}
      {/* 8번째 */}
      {uu8.map((item, index) => (
        <div key={item} {...animatedItem8[index]}>
          {item}
        </div>
      ))}
    </>
  );
}
export default Company1;
