import axios from "axios";

export function initHttpModule(extraBaseUrl = "") {
  const http = axios.create({
    baseURL: extraBaseUrl || window.settings.apiUrl,
  });

  http.interceptors.response.use((conf) => {
    return conf.data;
  });

  return http;
}
