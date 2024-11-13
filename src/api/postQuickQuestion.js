import { axiosInstance } from "./instance";

export default async function postQuickQuestion({ question }) {
  try {
    const response = await axiosInstance.post("/api/question/quick", {
      category: question,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
