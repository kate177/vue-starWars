import { initHttpModule } from "@/http/index.js";

export function peopleService() {
  const http = initHttpModule();

  function getPeople(page = 1) {
    return http.get("people", {
      query: { page },
    });
  }

  function getPersonById(id) {
    return http.get("people", {
      params: { id },
    });
  }

  return { getPeople, getPersonById };
}
