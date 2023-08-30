import axios from "axios";

const baseUrl = "https://api-news-8gw4.onrender.com";

export function getAllNews() {
  const response = axios.get(`${baseUrl}/news/posts`);
  return response;
}

export function getTopNews() {
  const response = axios.get(`${baseUrl}/news/top`);
  return response;
}
