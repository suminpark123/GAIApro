import { useEffect, useState } from "react";
import React from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ProductCards() {
  const [count, setCount] = useState(1);
  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  return (
    <section className="h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="10">
          <MDBCard className="rounded-3 mb-4">
            <MDBCardBody className="p-4">
              <MDBRow className="justify-content-between align-items-center">
                <MDBCol md="2" lg="2" xl="2">
                  <MDBCardImage
                    className="rounded-3"
                    fluid
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    alt="Cotton T-shirt"
                  />
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3">
                  <p className="lead fw-normal mb-2">Brand</p>
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p>
                    <span className="text-muted">Size: </span>M{" "}
                    <span className="text-muted">Color: </span>Grey
                  </p>
                </MDBCol>
                <MDBCol
                  md="3"
                  lg="3"
                  xl="2"
                  className="d-flex align-items-center justify-content-around"
                >
                  <button onClick={() => handleQuantity("minus")}>
                    <MDBIcon icon="minus" />
                  </button>
                  <div className={count}>
                    <span>{count}</span>
                  </div>

                  <button
                    color="link"
                    className="px-2"
                    alt="plus"
                    onClick={() => handleQuantity("plus")}
                  >
                    <MDBIcon icon="plus" />
                  </button>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                  <MDBTypography tag="h5" className="mb-0">
                    $499.00
                  </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                  <a href="#!" className="text-danger">
                    <MDBIcon icon="trash text-danger" size="lg" />
                    <i class="bi bi-plus-circle"></i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="rounded-3 mb-4">
            <MDBCardBody className="p-4">
              <MDBRow className="justify-content-between align-items-center">
                <MDBCol md="2" lg="2" xl="2">
                  <MDBCardImage
                    className="rounded-3"
                    fluid
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    alt="Cotton T-shirt"
                  />
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3">
                  <p className="lead fw-normal mb-2">Brand</p>
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p>
                    <span className="text-muted">Size: </span>M{" "}
                    <span className="text-muted">Color: </span>Grey
                  </p>
                </MDBCol>
                <MDBCol
                  md="3"
                  lg="3"
                  xl="2"
                  className="d-flex align-items-center justify-content-around"
                >
                  <MDBBtn color="link" className="px-2">
                    <MDBIcon icon="minus" />
                  </MDBBtn>

                  <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                  <MDBBtn color="link" className="px-2">
                    <MDBIcon icon="plus" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                  <MDBTypography tag="h5" className="mb-0">
                    $499.00
                  </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                  <a href="#!" className="text-danger">
                    <MDBIcon icon="trash text-danger" size="lg" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
