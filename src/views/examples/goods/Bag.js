// import React from "react";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import GoodsImg from "./굿즈배너2";
// import $ from "jquery";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// // core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";
// import SectionDark from "views/index-sections/SectionDark";
// import ExamplesNavbarGoods from "components/Navbars/ExamplesNavbarGoods";
// function Bag() {
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
//             {/* 추가 */}
//             {/* <nav aria-label="...">
//         <Pagination style={{display: 'inline-block'}}>
//           <PaginationItem className="active" style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               ALL
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               가방 <span className="sr-only">(current)</span>
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               아우터
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               상의
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               하의
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem style={{display: 'inline-block'}}>
//             <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
//               악세서리
//             </PaginationLink>
//           </PaginationItem>
//         </Pagination>
//           </nav> */}
//             {/* 추가완료 */}
//             {/* 추가html */}
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
//               {/* <ul
//               class="works-grid works-grid-gut works-grid-3 works-hover-w"
//               id="works-grid"
//             >
//               <li class="work-item illustration webdesign">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">노강민</div>
//                 </a>
//               </li>
//               <li class="work-item marketing photography">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">사자</div>
//                 </a>
//               </li>
//               <li class="work-item illustration photography">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">가나다라</div>
//                 </a>
//               </li>
//               <li class="work-item marketing photography">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">마바사</div>
//                 </a>
//               </li>
//               <li class="work-item illustration webdesign">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">담요</div>
//                 </a>
//               </li>
//               <li class="work-item marketing webdesign">
//                 <a href="portfolio-single-1.html">
//                   <div class="work-image">물병</div>
//                 </a>
//               </li>
//             </ul> */}
//             </section>
//             {/* 추가html완료 */}
//             <br></br>
//             <br></br>
//             <div className="container">
//               <div className="row" style={{ display: "flex" }}>
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/프라이탁가방.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>가방/ULKIN</h4>
//                   <p style={{ marginBottom: "100px" }}>상품설명|44,000</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/프라이탁가방.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>상품명</h4>
//                   <p>상품설명|가격</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img
//                     src={require("assets/img/프라이탁가방.png")}
//                     style={{ width: "400px" }}
//                   />
//                   <h4>상품명</h4>
//                   <p>상품설명|가격</p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-4">
//                   <img src={require("assets/img/프라이탁가방.png")} />
//                   <h4>프라이탁가방</h4>
//                   <p>상품설명|158,000</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img src={require("assets/img/프라이탁가방.png")} />
//                   <h4>상품명</h4>
//                   <p>상품설명|가격</p>
//                 </div>
//                 <div className="col-md-4">
//                   <img src={require("assets/img/프라이탁가방.png")} />
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
// export default Bag;
