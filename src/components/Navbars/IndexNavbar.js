/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button
} from "reactstrap";

const AdminNavbar = () => {

  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
        console.log(userInfo);
      });
    }
  }, [authState, oktaAuth, userInfo]); // Update if authState changes

  const login = async () => {
    oktaAuth.signInWithRedirect();
  };
  const logout = async () => {
    oktaAuth.signOut();
  }

  if (authState.isPending) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-dark bg-info"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("assets/img/brand/default-monochrome-white.svg")}
            />
          </NavbarBrand>
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/admin/dashboard">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="mr-auto" navbar>

              {authState.isAuthenticated
                && (

                  <NavItem>
                    <NavLink to="/mygc/dashboard" tag={Link}>
                      <span className="nav-link-inner--text">My GopherCon</span>
                    </NavLink>
                  </NavItem>
                )}

              < NavItem >
                < NavLink to="/speakers" tag={Link}>
                  <span className="nav-link-inner--text">Speakers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sponsors" tag={Link}>
                  <span className="nav-link-inner--text">Sponsors</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/agenda" tag={Link}>
                  <span className="nav-link-inner--text">Agenda</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/lock" tag={Link}>
                  <span className="nav-link-inner--text">Lock</span>
                </NavLink>
              </NavItem>
            </Nav>
            <hr className="d-lg-none" />
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/creativetim?ref=creative-tim"
                  id="tooltip601201423"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                    </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip601201423">
                  Like us on Facebook
                  </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/creativetimofficial?ref=creative-tim"
                  id="tooltip871243015"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                    </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip871243015">
                  Follow us on Instagram
                  </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://twitter.com/creativetim?ref=creative-tim"
                  id="tooltip366258619"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Twitter
                    </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip366258619">
                  Follow us on Twitter
                  </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://github.com/creativetimofficial?ref=creative-tim"
                  id="tooltip931502898"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                  <span className="nav-link-inner--text d-lg-none">
                    Github
                    </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip931502898">
                  Star us on Github
                  </UncontrolledTooltip>
              </NavItem>
              <NavItem className="d-none d-lg-block ml-lg-4">
                {!authState.isAuthenticated
                  && (
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={login}
                    >
                      <span className="nav-link-inner--text">Login</span>
                    </Button>)}

                {authState.isAuthenticated
                  && (
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={logout}
                    >
                      <span className="nav-link-inner--text">Logout</span>
                    </Button>)}
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar >
    </>
  );
}


export default AdminNavbar;
