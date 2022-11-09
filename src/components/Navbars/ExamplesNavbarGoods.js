import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
function ExamplesNavbarGoods(cart) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const [admin, setAdmin] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("로그인");
  const [down, setDowm] = useState(
    <DropdownMenu
      aria-labelledby="dropdownMenuButton"
      className="dropdown-info"
    >
      <DropdownItem to="/login-page" tag={Link}>
        LOGIN
      </DropdownItem>
      <DropdownItem to="/register-page" tag={Link}>
        REGISTER
      </DropdownItem>
    </DropdownMenu>
  );
  useEffect(function () {
    setName(localStorage.getItem("id"));
    if (localStorage.getItem("id") != undefined) {
      setLogin("로그아웃");
      setDowm("");

      if (localStorage.getItem("id") == "관리자") {
        setAdmin(
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              id="dropdownMenuButton"
              nav
              onClick={(e) => e.preventDefault()}
              role="button"
            >
              <i className="nc-icon nc-layout-11" />
              Manage
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="dropdownMenuButton"
              className="dropdown-info"
            >
              <DropdownItem to="/Manages1" tag={Link}>
                회원명단
              </DropdownItem>
              <DropdownItem to="/Manages2" tag={Link}>
                상품관리
              </DropdownItem>
              <DropdownItem to="/Manage3" tag={Link}>
                주문현황
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      }
    }
  }, []);
  // 추가
  function Protest() {
    if (localStorage.getItem("id") == undefined) {
      alert("로그인 해주세요");
    }
    console.log("프로테스트");
  }

  function deltest() {
    localStorage.clear();
    if (localStorage.getItem("id") == undefined) {
      setName(localStorage.getItem("id"));
      setLogin("로그인");
      setDowm(
        <DropdownMenu
          aria-labelledby="dropdownMenuButton"
          className="dropdown-info"
        >
          <DropdownItem to="/login-page" tag={Link}>
            LOGIN
          </DropdownItem>
          <DropdownItem to="/register-page" tag={Link}>
            REGISTER
          </DropdownItem>
        </DropdownMenu>
      );
      setAdmin("");
    }
  }
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="Coded by Creative Tim"
            tag={Link}
          >
            GAIA
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {admin}
            <NavItem>
              <NavLink to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/landing-page" tag={Link}>
                <i className="nc-icon nc-layout-11" /> ECO & PROCESS
              </NavLink>
            </NavItem>
            {/* 추가2 */}
            <NavItem>
              <NavLink to="/landing-page2" tag={Link}>
                <i className="nc-icon nc-layout-11" /> RECYCLING
              </NavLink>
            </NavItem>
            {/* 추가2끝 */}
            {/* 추가3 */}
            <NavItem>
              <NavLink to="/landing-page3" tag={Link}>
                <i className="nc-icon nc-layout-11" /> PARTNER
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Product" tag={Link}>
                <i className="nc-icon nc-layout-11"  /> Product
              </NavLink>
            </NavItem>
            {/* 추가3완료 */}

            {/* 수정 */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={deltest}
                role="button"
              >
                <i className="nc-icon nc-layout-11" />
                <span>{name}</span> {login}
              </DropdownToggle>
              {down}
            </UncontrolledDropdown>
            {/* 추가6완료 */}
            <div
              style={{
                marginTop: "-5px",
                // backgroundColor: "white",
              }}
            >
              <NavItem>
                <NavLink to="/cart" tag={Link}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icon-shopping-cart.svg"
                      }
                      alt="cart"
                    />
                    <span>장바구니</span>
                    {cart.length >= 1 ? (
                      <div>
                        <p>{cart.length}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default ExamplesNavbarGoods;
