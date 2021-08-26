import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 3rem;
  font-weight: 900;
`;
export default function Inventory() {
  return (
    <>
      <Head>
        <title>NFT | Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Inventory</Heading>
      </Hero>
    </>
  );
}
