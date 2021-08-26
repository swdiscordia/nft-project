import Head from "next/head";
import styled from "styled-components";

//################## STYLED #########################

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: orange;
  font-size: 4rem;
  font-weight: 600;
  margin-top: 5rem;
  margin-bottom: 0%;
`;

export default function FightMonster() {
  return (
    <>
      <Head>
        <title>NFT | Fight Monster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <HeaderContent>
          <Heading>Fight Monster</Heading>
        </HeaderContent>
      </Hero>
      <Hero>
        <Heading>Fight Monster</Heading>
      </Hero>
    </>
  );
}
