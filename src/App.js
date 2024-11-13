import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import styled from "styled-components";
import Chat from "./pages/chat";
import Header from "./components/common/Header";
import Input from "./components/common/Input";
import {useCookie} from "./components/store/useCookie";
import Question from "./pages/question";
import NotFoundPage from "./pages/notFound";
import {useState} from "react";


function App() {
    const { isCookieAccepted,
        onChangeCookies,
        quickQuestion,
        setQuickQuestion ,
        isLoading,
        onChangeLoading,
        formatDate} = useCookie();
    const [chatRefreshTrigger, setChatRefreshTrigger] = useState(false);

    const refreshChat = () => setChatRefreshTrigger(prev => !prev);
  return (
    <Wrapper>
        <Container>
            <Header/>
            <Pages>
                <Routes>
                    <Route path={'/'} element={
                        <MainPage
                        isCookieAccepted={isCookieAccepted}
                        onChangeCookies={onChangeCookies}
                        setQuickQuestion={setQuickQuestion}/>}/>
                    <Route path={'/chat'} element={
                        <Chat
                            formatDate={formatDate}
                            chatRefreshTrigger={chatRefreshTrigger}
                    />}/>
                    <Route path={'/question'} element={
                        <Question
                            isLoading={isLoading}
                            onChangeLoading={onChangeLoading}
                        quickQuestion={quickQuestion}
                            formatDate={formatDate}
                        />}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Routes>
            </Pages>
            <Input
                isCookieAccepted={isCookieAccepted}
                refreshChat={refreshChat}
            />
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