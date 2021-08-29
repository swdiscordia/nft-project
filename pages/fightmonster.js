import Head from "next/head";
import styled from "styled-components";
import {SpacedRow} from "../components/Row";
import Fighter from "../components/Fighter";
import { useState } from 'react';

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
  const [fighters, setFighters] = useState([
      {
        name: "Big Monster",
        stats: {
          level: 1,
          winningChance: "70%",
          health: 112,
          minWin: 2,
          maxWin: 6
        },
        price: 0.0006
      },
      {
        name: "Big Monster",
        stats: {
          level: 1,
          winningChance: "70%",
          health: 112,
          minWin: 2,
          maxWin: 6
        },
        price: 0.0006
      },
      {
        name: "Big Monster",
        stats: {
          level: 1,
          winningChance: "70%",
          health: 112,
          minWin: 2,
          maxWin: 6
        },
        price: 0.0006
      },
      {
        name: "Big Monster",
        stats: {
          level: 1,
          winningChance: "70%",
          health: 112,
          minWin: 2,
          maxWin: 6
        },
        price: 0.0006
      },
      {
        name: "Big Monster",
        stats: {
          level: 1,
          winningChance: "70%",
          health: 112,
          minWin: 2,
          maxWin: 6
        },
        price: 0.0006
      },
    ])

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
        <SpacedRow>
          {fighters.map(fighter => 
            <Fighter key={fighter.name} name={fighter.name} stats={fighter.stats} price={fighter.price} />
          )}
        </SpacedRow>
      </Hero>
    </>
  );
}
