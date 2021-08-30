import Head from "next/head";
import styled from "styled-components";
import { Card } from "../components/Card";

//################## STYLED #########################

const Hero = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
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
  @media screen and (max-width: 1152px) {
    margin-top: 1.5rem;
  }
`;

const TextStarter = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin: 0.4rem;
  font-weight: 600;
`;

const SubText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`;

const ContainerCard = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 955px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
    height: 100%;
    /* to change media query completly on this go Index */
  }
`;

//#################### Function page ##########################

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT | Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <HeaderContent>
          <Heading>Starter Pack</Heading>
          <TextStarter>Open the box and start to earn</TextStarter>
          <SubText>
            Everything you need is here. Let's build your own squad!
          </SubText>
        </HeaderContent>
        <ContainerCard>
          <Card />
          <Card />
          <Card />
        </ContainerCard>
      </Hero>
    </>
  );
}
