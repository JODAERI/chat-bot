import styled from "styled-components";
import {ChatLogo} from "./ChatLogo";

function ChatBotTimeStamp({time}) {
    return (
        <Wrapper>
            <LogoBox>
                <ChatLogo/>
            </LogoBox>
            <TimeStamp>{time}</TimeStamp>
        </Wrapper>

    );
}

export default ChatBotTimeStamp;

const Wrapper = styled.div`
    width: 80%;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 390px;
    }
    display: flex;
    padding: 10px;
`



const LogoBox = styled.div`
`

const TimeStamp = styled.div`
    padding: 10px;
    color:${({theme})=>theme.colors.timeStamp}

`