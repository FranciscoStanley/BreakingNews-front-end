import axios from "axios";

const baseUrl = "http://localhost:8080";

export function getAllNews() {
  const response = axios.get(`${baseUrl}/news/posts`);
  return response;
}

export function getTopNews() {
  const response = axios.get(`${baseUrl}/news/top`);
  return response;
}
