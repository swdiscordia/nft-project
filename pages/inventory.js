import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
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
