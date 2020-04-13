import axios from "axios";

const API = axios.create({
    baseURL: "https://opentdb.com/api.php?",
    headers: {
     Accept: "application/json",
     "Content-Type": "application/json"
   }
 });

 export default {
    //Auth
    async getToken() {
      const response = await API.get("/command=request");
      return response.data;
    },
    async getQuestion() {
        const response = await API.get(`amount=10&token=${YOURTOKENHERE}&category=12&difficulty=medium&type=boolean`);
        return response.data;
      },
}

https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=boolean