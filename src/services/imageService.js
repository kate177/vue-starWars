import { initHttpModuleImg } from '@/http/image.js';


export function getImgService() {
   const imageAPI = initHttpModuleImg();

   function getPersonImgById(imageId) {
      return imageAPI.get(`characters/${imageId}.jpg`, { responseType: 'arraybuffer' });
   }


   function getPlanetImgById(imageId) {
      return imageAPI.get(`planets/${imageId}.jpg`, { responseType: 'arraybuffer' });
   }

   function getStarshipImgById(imageId) {
      return imageAPI.get(`starships/${imageId}.jpg`, { responseType: 'arraybuffer' });
   }

   function getPlanetImgByError() {
      return imageAPI.get('big-placeholder.jpg', { responseType: 'arraybuffer' });
   }

   return { getPersonImgById, getPlanetImgById, getStarshipImgById, getPlanetImgByError };
}