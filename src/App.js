import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import styled from "styled-components";
import Chat from "./pages/chat";

function App() {
  return (
    <Wrapper>
        <Container>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/chat'} element={<Chat/>}/>
            </Routes>
        </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.backgroundColor.background};
`

const Container = styled.div`
    width: ${({theme}) => theme.tablet};;
    background: white;
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 100vw;
        height: 100vh;
    }

`