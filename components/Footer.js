import styled from "styled-components";
import React from "react";

const FooterSection = styled.div`
  background-color: #000;
  color: #fff;
  height: 60ppx;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <div>
      <FooterSection>Disco 2021 all right reserved Kappa</FooterSection>
    </div>
  );
}

export default Footer;
