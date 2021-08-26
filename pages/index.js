import Head from "next/head";
import styled from "styled-components";

//################## STYLED #########################

const Hero = styled.div`
  height: 100vh;
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
  height: 400px;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  width: 300px;
  height: 100%;
  background-color: grey;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 30px;
  border: solid 1px #fff;
  box-shadow: rgba(255, 255, 255, 0.1);
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
          <Cards />
          <Cards />
          <Cards />
        </ContainerCard>
      </Hero>
    </>
  );
}
