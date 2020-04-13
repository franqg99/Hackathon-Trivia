import axios from "axios";

const API = axios.create({
    baseURL: "https://opentdb.com/",
    headers: {
     Accept: "application/json",
     "Content-Type": "application/json"
   }
 });

 export default {
    //Auth
    async getToken() {
      const response = await API.get("api_token.php?command=request");
      return response.data;
    },
    async getQuestion(idtoken, idcategory = 0, iddifficulty = 0) {
        const response = await API.get(`api.php?amount=10&token=${idtoken}&category=${idcategory}&difficulty=${iddifficulty}&type=boolean`);
        return response.data;
      },
      async resetToken(idtoken) {
        const response = await API.get(`api_token.php?command=reset&token=${idtoken}`);
        return response.data;
      },
      async getAllCategory() {
        const response = await API.get(`api_category.php`);
        return response.data;
      },
}
