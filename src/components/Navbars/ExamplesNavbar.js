/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
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

function ExamplesNavbar() {
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
            target="blank"
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
            {/* 추가3완료 */}

            {/* 추가상품카테고리 */}
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
                GOODS
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Link to="/landing-page4">PRODUCT</Link>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Link to="/register-page2">SINGLE PRODUCT</Link>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Link to="/register-page2">CHECKOUT</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* 추가상품완료 */}
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
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                <i className="nc-icon nc-layout-11" />
                LOGIN
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Link to="/register-page">LOGIN</Link>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Link to="/register-page2">REGISTER</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* 추가6완료 */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
