import { initHttpModule } from '@/http';


export function peopleService() {
   const http = initHttpModule();

   function getPeople(page = 1) {
      return http.get('people', {
         query: { page }
      });
   }

   function getPersonById(id) {
      return http.get('people', {
         params: { id }
      });
   }

   return { getPeople, getPersonById };
}

