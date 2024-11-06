import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import styled from "styled-components";
import Chat from "./pages/chat";
import Header from "./components/common/Header";
import Input from "./components/common/Input";

function App() {
  return (
    <Wrapper>
        <Container>
            <Header/>
            <Pages>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/chat'} element={<Chat/>}/>
                </Routes>
            </Pages>
            <Input/>
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
    //background: white;
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 100vw;
        height: 100vh;
    }
`

const Pages = styled.div`
    
`