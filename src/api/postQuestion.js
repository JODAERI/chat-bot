import { axiosInstance } from "./instance";
import Cookies from "js-cookie";

export default async function postQuestion(question, isFirst) {
  try {
    if (isFirst === true) {
      const response = await axiosInstance.post("/api/question", {
        user_id: null,
        question: question,
        is_first: isFirst,
        is_short: false,
      });
      Cookies.set("user_id", response.data.userId);
      return response.data;
    }

    if (isFirst === false) {
      const userId = Cookies.get("user_id");
      const response = await axiosInstance.post("/api/question", {
        user_id: userId,
        question: question,
        is_first: isFirst,
        is_short: false,
      });
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
}
