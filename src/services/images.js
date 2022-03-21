import { initHttpImage } from '@/http/';


export function peopleImgService() {
   const imageAPI = initHttpImage();

   function getPersonImgId(id) {
      return imageAPI.get('characters', { params: { id } }, '.jpg');
   }

   return { getPersonImgId };
}