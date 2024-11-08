import styled from "styled-components";
import Recommendation from "../../components/chat/Recommendation";
import ChatBotTimeStamp from "../../components/chat/ChatBotTimeStamp";
import UserQuestion from "../../components/chat/UserQuestion";
import ChatbotAnswer from "../../components/chat/ChatbotAnswer";
import {useState} from "react";

const test = [
    '인증서 설치는 어떻게 하나요?',
    '인증서 발급은 어디서 받나요?',
    '인증서 설치가 안돼요.',
    '잘못된 인증서를 수정할 수 있나요?\n' +
    '기존 인증서를 삭제하고 새로 등록할 수 있나요?\n' +
    '인증서 폐기 후 신규등록시 이전 입찰관련내용이 연계되나요',
]

const chatbotAnswer ="### 조달 등록에 필요한 서류는 국가나 기관에 따라 다를 수 있지만, 일반적으로 아래와 같은 서류가 요구됩니다:\n" +
    "\n" +
    "**1. 사업자 등록증**  \n" +
    "   기업의 법적 지위를 증명하는 서류로, 모든 공급업체가 필수적으로 제출해야 합니다.\n" +
    "\n" +
    "**2. 재무제표**  \n" +
    "   기업의 재정 상태를 보여주는 서류로, 최근 1~3년간의 재무제표를 제출하는 경우가 많습니다. 이를 통해 공급업체의 신뢰성과 재정 건전성을 평가합니다.\n" +
    "\n" +
    "**3. 세금 납부 증명서**  \n" +
    "   기업이 정상적으로 세금을 납부하고 있다는 증명서로, 국세 및 지방세 납부 증명서를 포함할 수 있습니다.\n" +
    "\n" +
    "**4. 회사 소개서 및 사업 실적서**  \n" +
    "   회사의 주요 사업 내용, 연혁, 조직도 등을 설명하는 소개서와 함께 과거 수행한 사업의 실적을 정리한 실적서를 요구할 수 있습니다. 이는 기업의 경험과 능력을 평가하는 데 사용됩니다.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "이 서류들은 조달 등록 시 공급업체의 자격을 심사하고 공정한 계약 체결을 위해 필요한 자료입니다.\n" +
    "\n" +
    "기본 정보를 입력하면 집중적인 도움을 받을 수 있습니다. **(기본 정보 수정)**\n"
function Chat() {

    return (
        <>
            <UserQuestion question={'인증서 설치는 어떻게 하나요?'} timeStamp={'2.03 PM, 28 Sep'}/>
            <ChatbotAnswer answer={chatbotAnswer} timeStamp={'2.03 PM, 28 Sep'}/>
            {/*<ProfileBox>*/}
            {/*    <ChatBotTimeStamp time={'2.03 PM, 28 Sep'}/>*/}
            {/*</ProfileBox>*/}
            {/*{test.map((item)=>(*/}
            {/*    <Recommendation question={item}/>*/}
            {/*))}*/}

        </>

    );
}

export default Chat;

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`
