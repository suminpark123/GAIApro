// import React from "react";
// import { Row } from "reactstrap";
// import GoodsImg from "./goods/굿즈배너2";
// import $ from "jquery";
// import { Link } from "react-router-dom";
// // import NavLink from "reactstrap";
// // core components
// // import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// // import DemoFooter from "components/Footers/DemoFooter.js";
// import SectionDark from "views/MainPage/SectionDark";
// import ExamplesNavbarGoods from "components/Navbars/ExamplesNavbarGoods";

// function LandingPage4() {
//   // 제이쿼리추가
//   var worksgrid = $("#works-grid");
//   $("#filters a").click(function () {
//     $("#filters .current").removeClass("current");
//     $(this).addClass("current");
//     var selector = $(this).attr("data-filter");
//     worksgrid.isotope({
//       filter: selector,
//       animationOptions: {
//         duration: 750,
//         easing: "linear",
//         queue: false,
//       },
//     });
//     return false;
//   });
//   // 추가완
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("profile-page");
//     return function cleanup() {
//       document.body.classList.remove("profile-page");
//     };
//   });
//   return (
//     <>
//       <ExamplesNavbarGoods />
//       <LandingPageHeader />
//       <div className="main">
//         <div className="section text-center">
//           <GoodsImg />
//           <div>
//             <h2>상품</h2>
//             <br></br>
//             <section class="module pb-0" id="works">
//               <div class="container">
//                 <div class="row">
//                   <div class="col-sm-6 col-sm-offset-3">
//                     {/* <div id="our">
//                     <h2 class="module-title font-alt">Our Works</h2>
//                   </div> */}
//                     <div class="module-subtitle font-serif"></div>
//                   </div>
//                 </div>
//               </div>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-sm-12" style={{ marginLeft: "300px" }}>
//                     <ul
//                       class="filter font-alt"
//                       id="filters"
//                       style={{ listStyle: "none" }}
//                     >
//                       <li style={{ float: "left" }}>
//                         <Link to="/all">All</Link>
//                       </li>
//                       <li style={{ float: "left", marginLeft: "25px" }}>
//                         <Link to="/bag">BAG</Link>
//                       </li>
//                       <li style={{ float: "left", marginLeft: "25px" }}>
//                         <Link to="/outwear">OUTWEAR</Link>
//                       </li>
//                       <li style={{ float: "left", marginLeft: "25px" }}>
//                         <a
//                           class="wow fadeInUp"
//                           href="top"
//                           data-filter=".photography"
//                           data-wow-delay="0.6s"
//                         >
//                           <Link to="/top">TOP</Link>
//                         </a>
//                       </li>
//                       <li style={{ float: "left", marginLeft: "25px" }}>
//                         <a
//                           class="wow fadeInUp"
//                           href="bottom"
//                           data-filter=".webdesign"
//                           data-wow-delay="0.6s"
//                         >
//                           <Link to="/bottom">BOTTOM</Link>
//                         </a>
//                       </li>
//                       <li style={{ float: "left", marginLeft: "25px" }}>
//                         <a
//                           class="wow fadeInUp"
//                           href="acc"
//                           data-filter=".webdesign"
//                           data-wow-delay="0.6s"
//                         >
//                           <Link to="/acc">ACC</Link>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* 추가html완료 */}
//             <br></br>
//             <br></br>
//             <div className="container">
//               <Row style={{ float: "left" }}>
//                 <div className="row" style={{ display: "flex" }}>
//                   <div className="col-md-4">
//                     <Link to="/landing-page4_1">
//                       <img
//                         src={require("assets/img/얼킨의류.png")}
//                         style={{ width: "400px" }}
//                       />
//                     </Link>
//                     <h4>얼킨반팔/ULKIN</h4>
//                     <p style={{ marginBottom: "100px" }}>상품설명|44,000</p>
//                   </div>
//                   <div className="col-md-4">
//                     <img
//                       src={require("assets/img/얼킨의류.png")}
//                       style={{ width: "400px" }}
//                     />
//                     <h4>상품명</h4>
//                     <p>상품설명|가격</p>
//                   </div>
//                   <div className="col-md-4">
//                     <img
//                       src={require("assets/img/얼킨의류.png")}
//                       style={{ width: "400px" }}
//                     />
//                     <h4>상품명</h4>
//                     <p>상품설명|가격</p>
//                   </div>
//                 </div>
//               </Row>
//               <div className="row">
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/얼킨의류.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>얼킨반팔</h4>
//                   <p>상품설명|158,000</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/얼킨의류.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>상품명</h4>
//                   <p>상품설명|가격</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/얼킨의류.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>상품명</h4>
//                   <p>상품설명|가격</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <SectionDark />
//     </>
//   );
// }
// export default LandingPage4;
