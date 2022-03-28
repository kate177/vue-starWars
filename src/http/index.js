import axios from "axios";

export function initHttpModule() {
   const http = axios.create({
      baseURL: window.settings.apiUrl
   });

   http.interceptors.response.use((conf) => {
      return conf.data;
   });

   return http;
}

