import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionCarousel from "views/MainPage/SectionCarousel.js";
import SectionDark from "views/MainPage/SectionDark.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import Main1 from "./MainPage/SectionMain";
import SectionNews from "./MainPage/SectionNews";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <IndexHeader />
      <div className="main">
        <Main1 />
        <SectionCarousel />
        <SectionNews />
      </div>
      <SectionDark />
    </>
  );
}

export default Index;
