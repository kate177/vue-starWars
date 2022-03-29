import { initHttpModule } from "@/http/index.js";

export function planetsService() {
  const http = initHttpModule();

  function getPlanets(page = 1) {
    return http.get("planets", {
      query: { page },
    });
  }

  function getPlanetsnById(id) {
    return http.get("planets", {
      params: { id },
    });
  }

  return { getPlanets, getPlanetsnById };
}
