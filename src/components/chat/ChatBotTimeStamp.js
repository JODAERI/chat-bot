import styled from "styled-components";
import {ChatLogo} from "../../assets/ChatLogo";

function ChatBotTimeStamp({time, formatDate}) {
    return (
        <Wrapper>
            <LogoBox>
                <ChatLogo/>
            </LogoBox>
            <TimeStamp>{formatDate(time)}</TimeStamp>
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