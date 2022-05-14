import axios from "axios";

export const api = axios.create({
    baseURL: "https://fake-api-buy-an-idea.herokuapp.com/"
})