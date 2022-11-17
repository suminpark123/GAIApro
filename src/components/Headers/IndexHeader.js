import React from "react";
import { Container } from "reactstrap";
function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/사진2.jpg") + ")",
        }}
      >
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h4 className="presentation-title">GAIA</h4>
            </div>
            <h2 className="presentation-subtitle text-center"></h2>
          </Container>
        </div>
      </div>
    </>
  );
}
export default IndexHeader;
