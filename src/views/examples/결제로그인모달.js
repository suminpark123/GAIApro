// import React from "react";
// // reactstrap components
// import { Button, Form, FormGroup, Input, Modal } from "reactstrap";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// function PassModal2() {
//   function onClickPayment() {
//     const { IMP } = window;
//     IMP.init("imp87575644");

//     const data = {
//       pg: "html5_inicis",
//       pay_method: "card",
//       merchant_uid: `mid_${new Date().getTime()}`,
//       amount: 1000,
//       name: "아임포트 결제 데이터 분석",
//       buyer_name: "홍길동",
//       buyer_tel: "01012341234",
//       buyer_email: "example@example",
//       buyer_addr: "신사동 661-16",
//       buyer_postcode: "06018",
//       m_redirect_url: "https://www.yourdomain.com/payments/complete",
//     };
//     IMP.request_pay(data, callback);
//   }

//   function callback(response) {
//     const { success, merchant_uid, error_msg } = response;
//     if (success) {
//       alert("결제 성공");
//     } else {
//       alert(`결제 실패: ${error_msg}`);
//     }
//   }

//   const [loginModal, setLoginModal] = React.useState(false);
//   const history = useHistory();
//   function last() {
//     if (localStorage.getItem("id") == undefined) {
//       <PassModal2 />;
//     } else {
//       onClickPayment();
//     }
//   }

//   axios
//     .post("http://localhost:3007/login-page", {
//       id: document.getElementById("userId").value,
//       // like: likeRef.current.value,
//       pw: document.getElementById("userPw").value,
//       // add: addRef.current.value,
//     })
//     .then((result) => {
//       //console.log("데이터셩공", result.data.result);
//       console.log("아이디", result.data.result);
//       localStorage.setItem("id", result.data.result);
//       // setName(result.data.id + "님 환영");
//       history.push("/index");
//     })
//     .catch(() => {
//       console.log("데이터실패");
//     });

//   return (
//     <>
//       {/* <Button
//         className="btn-round"
//         color="info"
//         type="button"
//         style={{ borderRadius: 5, width: "150px" }}
//         onClick={() => setLoginModal(true)}
//       >
//         아이디/비번찾기
//       </Button> */}
//       <Button className="cart__bigorderbtn right" onClick={last}>
//         결제하기
//       </Button>
//       <Modal
//         isOpen={loginModal}
//         toggle={() => setLoginModal(false)}
//         modalClassName="modal-register"
//       >
//         <div className="modal-header no-border-header text-center">
//           <button
//             aria-label="Close"
//             className="close"
//             data-dismiss="modal"
//             type="button"
//             onClick={() => setLoginModal(false)}
//           >
//             <span aria-hidden={true}>×</span>
//           </button>

//           <h3 className="modal-title text-center">GAIA</h3>
//           <p>로그인</p>
//         </div>
//         <div className="modal-body">
//           <Form onSubmit={}>
//             <FormGroup>
//               <label>아이디</label>
//               <Input
//                 defaultValue=""
//                 placeholder="Email"
//                 type="text"
//                 id="userId"
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>비밀번호</label>
//               <Input
//                 defaultValue=""
//                 placeholder="Password"
//                 type="password"
//                 id="userPw"
//               />
//             </FormGroup>
//             <Button
//               block
//               className="btn-round"
//               color="default"
//               style={{ width: "200px", borderRadius: 0 }}
//               type='submit'
//             >
//               로그인
//             </Button>
//           </Form>
//         </div>
//         <div className="modal-footer no-border-footer">
//           <span className="text-muted text-center">
//             Looking{" "}
//             <a href="#pablo" onClick={(e) => e.preventDefault()}>
//               해보자
//             </a>
//             ?
//           </span>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default PassModal2;
