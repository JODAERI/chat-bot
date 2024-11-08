import styled from "styled-components";
import ChatBotTimeStamp from "./ChatBotTimeStamp";
import ReactMarkdown from "react-markdown";
function ChatbotAnswer({answer, timeStamp }) {

    return (
        <>
            <Wrapper>
                <ContentsBox>
                    <ChatBotTimeStamp time={timeStamp}/>
                    <AnswerBox>
                        <ReactMarkdown>
                            {answer}
                        </ReactMarkdown>
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
    padding-bottom: 100px;
`

const ContentsBox = styled.div`
`



const AnswerBox = styled.div`
    background: ${({theme})=>theme.backgroundColor.chatbotAnswer};
    border-radius: 10px;
    text-align: left;
    white-space: pre-line;
    padding: 20px 10px;
    @media (max-width:${({theme}) => theme.mobile} ) {
        margin: 0 10px ;
    }
    
`