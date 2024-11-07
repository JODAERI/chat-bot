import styled from "styled-components";
import Recommendation from "../../components/chat/Recommendation";
import ChatBotTimeStamp from "../../components/chat/ChatBotTimeStamp";
import UserQuestion from "../../components/chat/UserQuestion";
import ChatbotAnswer from "../../components/chat/ChatbotAnswer";

const test = [
    '인증서 설치는 어떻게 하나요?',
    '인증서 발급은 어디서 받나요?',
    '인증서 설치가 안돼요.',
    '잘못된 인증서를 수정할 수 있나요?\n' +
    '기존 인증서를 삭제하고 새로 등록할 수 있나요?\n' +
    '인증서 폐기 후 신규등록시 이전 입찰관련내용이 연계되나요',
]

const chatbotAnswer = '조달 등록에 필요한 서류는 국가나 기관에 따라 다를 수 있지만, 일반적으로 아래와 같은 서류가 요구됩니다:\n' +
    '\n' +
    '1. 사업자 등록증\n' +
    '기업의 법적 지위를 증명하는 서류로, 모든 공급업체가 필수적으로 제출해야 합니다.\n'

function Chat() {
    return (
        <>
            <UserQuestion question={'인증서 설치는 어떻게 하나요?'} timeStamp={'2.03 PM, 28 Sep'}/>
            <ChatbotAnswer answer={chatbotAnswer} timeStamp={'2.03 PM, 28 Sep'}/>
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
