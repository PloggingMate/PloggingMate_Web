import React from "react";
import { Route, Link } from "react-router-dom";

import styled from "styled-components";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <>
      <NormalNav>
        <NavbarItems>
          <Link to="/" className="logo">
            PloggingMate
          </Link>
          <Tab>
            <Link to="/postlist" className="tab-item">
              Challenge
            </Link>
            <Link to="/signup" className="tab-item">
              Sign Up
            </Link>
            <Link to="/login" className="tab-item">
              Login
            </Link>
          </Tab>
        </NavbarItems>
      </NormalNav>
    </>
  );
}

const NormalNav = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0;
  font-family: inherit;
  font-weight: 700;
  padding: 20px 0;
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
`;

const NavbarItems = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  margin-left: 20px;
  text-decoration: none;
  color: #00bfff;
  font-size: 1.5rem;
  &:visited {
    color: #00bfff;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TabItems = styled.a`
  margin-right: 20px;
  position: relative;
  transition: 0.3s;
  text-decoration: none;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 50%;
    content: "";
    width: 0;
    height: 2px;
    background-color: #00bfff;

    transition: 0.3s;
    --webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }

  &:visited {
    color: #000;
  }
`;

export default Navbar;