import styled from "styled-components";
import ChatBotTimeStamp from "./ChatBotTimeStamp";

function ChatbotAnswer({answer, timeStamp }) {

    return (
        <>
            <Wrapper>
                <ContentsBox>

                    <ChatBotTimeStamp time={timeStamp}/>
                    <AnswerBox>
                        {answer}
                    </AnswerBox>
                </ContentsBox>
            </Wrapper>
        </>

    );
}

export default ChatbotAnswer;

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 80%;
    margin: auto;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 70%;
    }
`

const ContentsBox = styled.div`
`



const AnswerBox = styled.div`
    background: ${({theme})=>theme.backgroundColor.chatbotAnswer};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    @media (max-width:${({theme}) => theme.mobile} ) {
        margin: 0 10px ;
    }
`