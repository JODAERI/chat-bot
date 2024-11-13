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
        isFirst,
        onChangeIsFirst ,
        quickQuestion,
        setQuickQuestion ,
        onChangeIsSecond,
        isLoading,
        onChangeLoading,
        formatDate} = useCookie();
    const [chatRefreshTrigger, setChatRefreshTrigger] = useState(false);

    // `refreshChat` 함수를 통해 `chatRefreshTrigger` 상태를 변경
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
                        onChangeIsFirst={onChangeIsFirst}
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
                        isFirst={isFirst}
                        onChangeIsFirst={onChangeIsFirst}
                        onChangeIsSecond={onChangeIsSecond}
                            formatDate={formatDate}
                        />}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Routes>
            </Pages>
            <Input
                isCookieAccepted={isCookieAccepted}
                isFirst={isFirst}
                onChangeIsFirst={onChangeIsFirst}
                onChangeIsSecond={onChangeIsSecond}
                refreshChat={refreshChat} // `refreshChat`을 `Input`에 전달
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