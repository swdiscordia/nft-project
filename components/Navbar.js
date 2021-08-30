import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import ButtonNav from "./ButtonNav";

//################## STYLED #########################
const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: #1e061d;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.4);
`;

const Navbar = () => {
  return (
    <Nav>
      <ButtonNav />
    </Nav>
  );
};

export default Navbar;
