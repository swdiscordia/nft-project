import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import Image from "next/image";
import {Card} from "./Card"

const List = styled.ul`
  
`;

const Item = styled.li`
  list-style-type: none; 
`;

const Fighter = ({name, stats, price}) => {
  return (
    <Card className="fighter">
      <div className="fighter-top">
        <p className="fighter-name">{name}</p>
      </div>  

      <div className="fighter-body">
        <ul className="fighter-list">
          <Item className="fighter-item">Health: {stats.health}</Item>
          <Item className="fighter-item">% of winning chance: {stats.winningChance}</Item>
          <Item className="fighter-item">Cost: {price}</Item>
        </ul>
      </div>
    </Card>
  );
};

export default Fighter;
