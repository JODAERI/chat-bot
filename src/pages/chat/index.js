import styled from "styled-components";
import Recommendation from "../../components/chat/Recommendation";
import {ChatLogo} from "../../components/chat/ChatLogo";
import ChatBotTimeStamp from "../../components/chat/ChatBotTimeStamp";

const test = [
    '인증서 설치는 어떻게 하나요?',
    '인증서 발급은 어디서 받나요?',
    '인증서 설치가 안돼요.',
    '잘못된 인증서를 수정할 수 있나요?\n' +
    '기존 인증서를 삭제하고 새로 등록할 수 있나요?\n' +
    '인증서 폐기 후 신규등록시 이전 입찰관련내용이 연계되나요',
]


function Chat() {
    return (
        <>
            <ProfileBox>
                <ChatBotTimeStamp time={'2.03 PM, 28 Sep'}/>
            </ProfileBox>
            {test.map((item)=>(
                <Recommendation question={item}/>
            ))}


        </>

    );
}

export default Chat;

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`
