import { initHttpModule } from "@/http/index.js";

export function starshipsService() {
  const http = initHttpModule();

  function getStarships(page = 1) {
    return http.get("starships", {
      query: { page },
    });
  }

  function getStarshipsById(id) {
    return http.get("starships", {
      params: { id },
    });
  }

  return { getStarships, getStarshipsById };
}
