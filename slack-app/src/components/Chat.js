import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

function Chat() {
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
      </Main>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: purple;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 220px auto;
`;
