import axios from "axios";

export const chuckNorrisApi = axios.create({
  baseURL: 'https://api.chucknorris.io'
})
