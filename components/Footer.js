import styled from "styled-components";
import React from "react";

const FooterSection = styled.div`
  background-color: #1e061d;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return (
    <div>
      <FooterSection>Disco 2021 all right reserved Kappa</FooterSection>
    </div>
  );
}

export default Footer;
