import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import Image from "next/image";
import {Card} from "./Card"

const Item = styled.li`
  list-style-type: none; 
  margin: .25rem 0;
  font-size: 0.8rem;
`;

const CustomButton = styled.button`
  background-color: orange;
  padding: .5rem 1rem;
  border-radius: 1000rem;
  border: none;
  cursor: pointer;
  transition: .25s ease-out;

  &:hover {
    opacity: .6;
    color: white;
  }
`;

const List = styled.ul`
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 1rem 0;
  font-size: 1.4rem;
`;

const Bottom = styled.div`
  text-align: center;
`;

const Top = styled.div`
  text-align: center;
`;

const Fighter = ({name, stats, price}) => {
  return (
    <Card className="fighter">
      <Top className="fighter-top">
        <Image
          src="/monster_1.gif"
          alt="Monster 1"
          width={150}
          height={150}
        />
        <Name className="fighter-name">{name}</Name>
      </Top>  

      <div className="fighter-body">
        <List className="fighter-list">
          <Item className="fighter-item">Level: {stats.level}</Item>
          <Item className="fighter-item">Health: {stats.health}</Item>
          <Item className="fighter-item">% of winning chance: {stats.winningChance}</Item>
          <Item className="fighter-item">Estimated win: Min {stats.minWin}, Max {stats.maxWin}</Item>
          <Item className="fighter-item">Cost: {price}</Item>
        </List>
      </div>
      <Bottom>
        <CustomButton>Fight</CustomButton>
      </Bottom>
    </Card>
  );
};

export default Fighter;
