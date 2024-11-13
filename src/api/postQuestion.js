import { axiosInstance } from "./instance";

export default async function postQuestion({ userId, question, isFirst }) {
  try {
    const response = await axiosInstance.post("/api/question", {
      user_id: userId,
      question: question,
      is_first: isFirst,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
