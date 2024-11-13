import styled from "styled-components";
import Recommendation from "../../components/chat/Recommendation";
import ChatBotTimeStamp from "../../components/chat/ChatBotTimeStamp";
import LoadingSpinner from "../../components/modal/LoadingSpinner";

function Question({isLoading,onChangeLoading,quickQuestion, isFirst, onChangeIsFirst,onChangeIsSecond, formatDate}) {
    return (
        <>
            {quickQuestion && !isLoading ? (
                <>
                    <ProfileBox>
                        <ChatBotTimeStamp time={quickQuestion.time} formatDate={formatDate} />
                    </ProfileBox>
                    {quickQuestion.questions && quickQuestion.questions.map((item, index) => (
                        <Recommendation key={index} onChangeLoading={onChangeLoading} question={item} isFirst={isFirst} onChangeIsFirst={onChangeIsFirst} onChangeIsSecond={onChangeIsSecond}/>
                    ))}
                </>
            ) : (
                <LoadingSpinner />
            )}


        </>

    );
}

export default Question;

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`
