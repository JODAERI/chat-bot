import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import styled from "styled-components";
import Chat from "./pages/chat";
import Header from "./components/common/Header";
import Input from "./components/common/Input";
import {useCookie} from "./components/store/useCookie";
import Question from "./pages/question";


function App() {
    const { isCookieAccepted, onChangeCookies, setCookie, isFirst,onChangeIsFirst } = useCookie();
  return (
    <Wrapper>
        <Container>
            <Header/>
            <Pages>
                <Routes>
                    <Route path={'/'} element={<MainPage isCookieAccepted={isCookieAccepted} onChangeCookies={onChangeCookies} setCookie={setCookie}/>}/>
                    <Route path={'/chat'} element={<Chat/>}/>
                    <Route path={'/question'} element={<Question/>}/>
                </Routes>
            </Pages>
            <Input isCookieAccepted={isCookieAccepted}/>
        </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    padding-top: 120px;
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