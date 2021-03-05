import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function MainBoard(props) {
  let { pins } = props;
  return (
    <Wrapper>
      <Container>
        {pins.map((pin, index) => {
          let { urls } = pin;

          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;
const Container = styled.div`
  background-color: white;
  column-count: 5;
  column-gap: 10px;
  max-width: 1360px;
  height: 100%;
  margin: 0 auto;
  width: 80%;
`;
