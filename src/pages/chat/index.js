import UserQuestion from "../../components/chat/UserQuestion";
import ChatbotAnswer from "../../components/chat/ChatbotAnswer";
import { useEffect, useState } from "react";
import getQnA from "../../api/getQnA";
import Cookies from "js-cookie";
import LoadingSpinner from "../../components/modal/LoadingSpinner";

function Chat({ isLoading, chatRefreshTrigger, formatDate }) {
  const [chatData, setChatData] = useState([]);
  const fetchData = async () => {
    const userId = Cookies.get("user_id");
    try {
      const response = await getQnA(userId);
      setChatData(response);
    } catch (e) {
      console.error("Failed to fetch chat data:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [chatRefreshTrigger]);

  return (
    <>
      {chatData && chatData.qnas && !isLoading ? (
        chatData.qnas.map((item, index) => (
          <div key={index}>
            <UserQuestion
              question={item.question}
              timeStamp={item.question_created_at}
              formatDate={formatDate}
            />
            <ChatbotAnswer
              answer={item.answer}
              timeStamp={item.answer_created_at}
              formatDate={formatDate}
            />
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default Chat;
