import axios from "axios";
import { onResponse, onResponseError } from "./responseInterceptor";
import { onRequest, onRequestError } from "./requestInterceptor";

export const BASE_URL = "https://shafeeras.github.io";

export const API = axios.create({
  baseURL: BASE_URL
});

API.interceptors.request.use(config => onRequest(config), onRequestError);
API.interceptors.response.use(onResponse, onResponseError);
