import { axiosInstance } from "./instance";

export default async function getQnA(userId) {
  try {
    const response = await axiosInstance.get(`/api/qna/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
