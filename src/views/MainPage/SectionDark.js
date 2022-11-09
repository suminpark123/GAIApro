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
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  대표이사 : 박수민
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="" className="me-3" />
                  사업자번호 : 178-82-00065
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  010-1234-5678
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  suminpark123@naver.com
                </p>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <p>
                  <MDBIcon color="secondary" icon="" className="me-2" />
                  이용약관
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="" className="me-3" />
                  환불규정
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="" className="me-3" />
                  개인정보처리 방침
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  고객센터
                </p>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <p>
                  <MDBIcon color="secondary" icon="" className="me-2" />
                  고객 담당 : 서은유
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="" className="me-3" />
                  기업 담당 : 조찬익
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="" className="me-3" />
                  환불 담당 : 노강민
                </p>
                <br />
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  상담 번호 : 010-1981-5189
                </p>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
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
