import { initHttpModule } from "@/http/index.js";

export function getImgService() {
  const imageAPI = initHttpModule(window.settings.imgUrl);

  function getPersonImgById(imageId) {
    return imageAPI.get(`characters/${imageId}.jpg`, {
      responseType: "arraybuffer",
    });
  }

  function getPlanetImgById(imageId) {
    return imageAPI.get(`planets/${imageId}.jpg`, {
      responseType: "arraybuffer",
    });
  }

  function getStarshipImgById(imageId) {
    return imageAPI.get(`starships/${imageId}.jpg`, {
      responseType: "arraybuffer",
    });
  }

  function getImgByError() {
    return imageAPI.get("big-placeholder.jpg", {
      responseType: "arraybuffer",
    });
  }

  return {
    getPersonImgById,
    getPlanetImgById,
    getStarshipImgById,
    getImgByError,
  };
}
