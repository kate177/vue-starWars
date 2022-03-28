import axios from "axios";

export function initHttpModuleImg() {
   const imageAPI = axios.create({
      baseURL: window.settings.imgUrl
   });

   imageAPI.interceptors.response.use((conf) => {
      return conf.data;
   });

   return imageAPI;
}