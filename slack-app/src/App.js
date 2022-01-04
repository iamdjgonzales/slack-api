import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </Container>
    </div>
  );
}

export default App;

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
  grid-template-columns: 200px auto;
`;
