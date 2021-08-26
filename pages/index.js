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

const Heading = styled.h1`
  color: orange;
  font-size: 4rem;
  font-weight: 600;
  margin-top: 5rem;
  margin-bottom: 0%;
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

//#################### Function page ##########################

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT | Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Starter Pack</Heading>
        <TextStarter>Open the box and start to earn</TextStarter>
        <SubText className="test">
          Everything you need is here. Let's build your own squad!
        </SubText>
      </Hero>
    </>
  );
}
