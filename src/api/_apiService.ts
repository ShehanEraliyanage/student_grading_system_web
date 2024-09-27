import axios from "axios";
import { BASE_URL } from "../config";
import { getStoredAuthToken } from "../utils/storageUtil";
import { getApiError } from "./_apiUtils";
import { isTokenExpired } from "./isTokenExpired";

const getBearToken = (token?: string | null) =>
  token ? `Bearer ${token}` : null;

const http = axios.create({
  baseURL: BASE_URL,
});
// In here, we handle the api error
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status || 500;
    if (status === 403) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject({
      msg: getApiError(error),
      status,
    });
  }
);

http.interceptors.request.use((config: any) => {
  const token = getStoredAuthToken();
  console.log("🚀 ~ http.interceptors.request.use ~ token:", token);

  if (token && isTokenExpired(token)) {
    localStorage.clear();
    window.location.href = "/login";
    return Promise.reject(new axios.Cancel("Token is expired"));
  }

  if (token) {
    config.withCredentials = true;
    config.headers.authorization = getBearToken(token);
  }

  return config;
});

export { http, getApiError };
