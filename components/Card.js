import styled from "styled-components";

export const Card = styled.div`
  min-width: 300px;
  height: 370px;
  background-color: grey;
  margin-right: 1rem;
  border-radius: 30px;
  border: solid 1px #fff;
  box-shadow: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (max-width: 955px) {
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 0;
    /* to change media query completly on this go Index */
  }
`;
