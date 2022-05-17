import axios from "axios";

export const buyAnIdeaApi = axios.create({
  baseURL: "https://fake-api-buy-an-idea.herokuapp.com",
});
