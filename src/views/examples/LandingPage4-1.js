import React from "react";

// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDark from "views/MainPage/SectionDark";
import ExamplesNavbarGoods from "components/Navbars/ExamplesNavbarGoods";
import "./구매창.css";

function LandingPage4_1() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbarGoods />
      <LandingPageHeader />
      <SectionDark />
    </>
  );
}

export default LandingPage4_1;
