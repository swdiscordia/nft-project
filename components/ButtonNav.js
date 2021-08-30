import styles from "../styles/Buton.module.css";
import Link from "next/dist/client/link";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/logo.png";

const WrapperNav = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StyledLink = styled.a`
  padding: 0rem 2rem;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ContainerLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 995px) {
    display: flex;
    flex-direction: flex-end;
  }
`;

const ContainerButtonMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;

  @media screen and (max-width: 1152px) {
    justify-content: center;
  }
`;

const ButtonMiddle = styled.a`
  padding: 0rem 2rem;
  font-weight: 600;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonNav = () => {
  return (
    <WrapperNav>
      <ContainerLogo>
        <Image src={Logo} alt="Site logo" width={65} height={60} />
        <Link href="/" passHref>
          <StyledLink>CryptoMonsters</StyledLink>
        </Link>
      </ContainerLogo>
      <ContainerButtonMiddle>
        <Link href="/" passHref>
          <ButtonMiddle>Starter Pack</ButtonMiddle>
        </Link>
        <Link href="/inventory" passHref>
          <ButtonMiddle>Inventory</ButtonMiddle>
        </Link>
        <Link href="/fightmonster" passHref>
          <ButtonMiddle>Fight Monster</ButtonMiddle>
        </Link>
      </ContainerButtonMiddle>

      <Link href="/#" passHref>
        <div className={styles.container}>
          <div className={styles.btn}>
            <a href="#">Connect MetaMask</a>
          </div>
        </div>
      </Link>
    </WrapperNav>
  );
};

export default ButtonNav;
