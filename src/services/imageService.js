import { initHttpImage } from '@/http';


export function peopleImgService() {
   const imageAPI = initHttpImage();

   function getPersonImgById(id) {
      return imageAPI.get('characters', { params: { id } }, '.jpg');
   }

   return { getPersonImgById };
}

export function planetsImgService() {
   const imageAPI = initHttpImage();

   function getPlanetImgById(id) {
      return imageAPI.get('planets', { params: { id } }, '.jpg');
   }

   return { getPlanetImgById };
}

export function starshipsImgService() {
   const imageAPI = initHttpImage();

   function getStarshipImgById(id) {
      return imageAPI.get('starships', { params: { id } }, '.jpg');
   }

   return { getStarshipImgById };
}