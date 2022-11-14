function Payment() {
  function onClickPayment() {
    const { IMP } = window;
    IMP.init("imp87575644");

    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 52000, // 결제금액
      name: "누깍 스탠리사코백", // 주문명
      buyer_name: "서은유", // 구매자 이름
      buyer_tel: "01033337777", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "광주광역시 북구 매곡동 대성베르힐 101동 204호", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "https://www.yourdomain.com/payments/complete",
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }
  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
}

export default Payment;
