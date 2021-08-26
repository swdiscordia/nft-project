import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";

const Nav = styled.nav`
  height: 80px;
  background: #181818;

  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <StyledLink href="/" passHref>
          <a>NXT</a>
        </StyledLink>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Starter Pack</StyledLink>
        </Link>
        <Link href="/inventory" passHref>
          <StyledLink>Inventory</StyledLink>
        </Link>
        <Link href="/fightmonster" passHref>
          <StyledLink>Fight monster</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
