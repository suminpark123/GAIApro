import React from "react";

import { Button, Container } from "reactstrap";
import $ from "jquery";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  // $(".btn-round mr-1").magnificPopup({
  //   type: "iframe",
  // });

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Example page</h1>
            <h3>Start designing your landing page here.</h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline

              // 수정버튼
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            {/* <Link
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="ttee"
            >
              여기클릭테스트
            </Link> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
