import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import ButtonNav from "./ButtonNav";

//################## STYLED #########################
const Nav = styled.nav`
  height: 80px;
  background: #350048;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  font-weight: 600;
`;

const ContainerLogo = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <ContainerLogo>
        <Image src={Logo} width={65} height={60} />
        <Link href="/" passHref>
          <StyledLink>NXT</StyledLink>
        </Link>
      </ContainerLogo>
      <div>
        <ButtonNav />
      </div>
    </Nav>
  );
};

export default Navbar;
