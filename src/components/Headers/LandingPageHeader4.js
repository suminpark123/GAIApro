import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function LandingPageHeader() {
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
            "url(" +
            "https://www.10wallpaper.com/wallpaper/1366x768/2208/Cute_Girl_Black_Clothing_Beauty_Model_HD_Photo_1366x768.jpg" +
            ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      ></div>
    </>
  );
}

export default LandingPageHeader;
