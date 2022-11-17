// import React from "react";

// // reactstrap components
// import { Container, Row, Col, Button } from "reactstrap";

// // core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader6.js";
// import SectionDark from "views/MainPage/SectionDark";

// function Manage2() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("profile-page");
//     return function cleanup() {
//       document.body.classList.remove("profile-page");
//     };
//   });
//   return (
//     <>
//       <ExamplesNavbar />
//       <LandingPageHeader />
//       <div className="main">
//         <div className="section text-center">
//           <Container>
//             <Row>
//               <Col className="ml-auto mr-auto" md="8">
//                 <h2 className="title">상품 관리</h2>
//                 <h4 style={{ marginBottom: "30px" }}>
//                   <b>GAIA 상품 명단</b>
//                 </h4>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <table
//                   border="1"
//                   width={"600px"}
//                   height={"100px"}
//                   style={{ marginLeft: "auto", marginRight: "auto" }}
//                 >
//                   <tr bgcolor={"whitesmoke"}>
//                     <th></th>
//                     <th>상품 번호</th>
//                     <th>상품 이름</th>
//                     <th>상품 가격</th>
//                     <th>상품 포인트</th>
//                     <th>상품 브랜드</th>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>1</b>
//                     </td>
//                     <td>
//                       <b>프라이탁 가방</b>
//                     </td>
//                     <td>
//                       <b>250,000</b>
//                     </td>
//                     <td>
//                       <b>250</b>
//                     </td>
//                     <td>
//                       <b>프라이탁</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>2</b>
//                     </td>
//                     <td>
//                       <b>파타고니아 집업</b>
//                     </td>
//                     <td>
//                       <b>120,000</b>
//                     </td>
//                     <td>
//                       <b>120</b>
//                     </td>
//                     <td>
//                       <b>파타고니아</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>3</b>
//                     </td>
//                     <td>
//                       <b>마르지엘라 독일군</b>
//                     </td>
//                     <td>
//                       <b>340,000</b>
//                     </td>
//                     <td>
//                       <b>340</b>
//                     </td>
//                     <td>
//                       <b>마르지엘라</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>4</b>
//                     </td>
//                     <td>
//                       <b>나이키 후드티</b>
//                     </td>
//                     <td>
//                       <b>70,000</b>
//                     </td>
//                     <td>
//                       <b>70</b>
//                     </td>
//                     <td>
//                       <b>나이키</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>5</b>
//                     </td>
//                     <td>
//                       <b>아디다스 맨투맨</b>
//                     </td>
//                     <td>
//                       <b>55,000</b>
//                     </td>
//                     <td>
//                       <b>55</b>
//                     </td>
//                     <td>
//                       <b>아디다스</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>6</b>
//                     </td>
//                     <td>
//                       <b>애플워치</b>
//                     </td>
//                     <td>
//                       <b>320,000</b>
//                     </td>
//                     <td>
//                       <b>320</b>
//                     </td>
//                     <td>
//                       <b>애플</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td>
//                       <b>7</b>
//                     </td>
//                     <td>
//                       <b>맥북</b>
//                     </td>
//                     <td>
//                       <b>1,200,000</b>
//                     </td>
//                     <td>
//                       <b>1200</b>
//                     </td>
//                     <td>
//                       <b>애플</b>
//                     </td>
//                   </tr>
//                 </table>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <Button
//                   variant="primary"
//                   style={{
//                     marginLeft: "20px",
//                     marginTop: "10px",
//                     marginRight: "20px",
//                   }}
//                 >
//                   수정
//                 </Button>
//                 <Button
//                   variant="primary"
//                   style={{
//                     marginLeft: "20px",
//                     marginTop: "10px",
//                     marginRight: "20px",
//                   }}
//                 >
//                   삭제
//                 </Button>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//       <SectionDark />
//     </>
//   );
// }

// export default Manage2;
