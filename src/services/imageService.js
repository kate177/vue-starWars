import { initHttpModule } from "@/http/index.js";
const config = { responseType: "arraybuffer" };

export function getImgService() {
  const imageAPI = initHttpModule(window.settings.imgUrl);

  function getPersonImgById(imageId) {
    return imageAPI.get(`characters/${imageId}.jpg`, config);
  }

  function getPlanetImgById(imageId) {
    return imageAPI.get(`planets/${imageId}.jpg`, config);
  }

  function getStarshipImgById(imageId) {
    return imageAPI.get(`starships/${imageId}.jpg`, config);
  }

  function getImgByError() {
    return imageAPI.get("big-placeholder.jpg", config);
  }

  return {
    getPersonImgById,
    getPlanetImgById,
    getStarshipImgById,
    getImgByError,
  };
}
