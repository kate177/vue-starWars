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

export function initHttpImage() {
   const imageAPI = axios.create({
      basURL: window.settings.imgUrl
   });

   imageAPI.interceptors.response.use((conf) => {
      return conf.data;
   });

   return imageAPI;
}


