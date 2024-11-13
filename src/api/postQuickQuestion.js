import { axiosInstance } from "./instance";

export default async function postQuickQuestion({ category}) {
    try {
        const response = await axiosInstance.post("/api/question/quick", {
            category: category,
        });
        return response;
    } catch (e) {
        console.log(e);
    }
}
