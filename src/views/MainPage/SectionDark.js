import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

import { Container, Row, Col } from "reactstrap";

function SectionDark() {
  return (
    <>
      {/* <div style={{ backgroundColor: "#E8F5FF", height: "220px" }}> */}
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Linkㄴㅇㅁㅎㄹs</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  광주광역시 동구 예술길 31-15 4층
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  smhrd@smhrd.or.kr
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  062-655-3506, 9
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" />
                  062-655-3510
                </p>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://ko-kr.facebook.com/"
            role="button"
          >
            <MDBIcon icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://twitter.com/"
            role="button"
          >
            <MDBIcon icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.google.co.kr/"
            role="button"
          >
            <MDBIcon icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/"
            role="button"
          >
            <MDBIcon icon="instagram" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/"
            role="button"
          >
            <MDBIcon icon="github" />
          </MDBBtn>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright :
          <a className="text-white" href="https://smhrd.or.kr/">
            SMHRD
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default SectionDark;
