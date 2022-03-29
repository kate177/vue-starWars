<template>
  <div
    class="feature"
    @click="$router.push({ name: 'planetsInfo', params: { id: id } })"
  >
    <div class="feature__img"><img :src="dataUrl" /></div>
    <div class="feature__info">
      <h2 class="feature__title">{{ planet.name }}</h2>
      <ul class="feature__list">
        <li class="feature-info__list">Diametr: {{ planet.diameter }}</li>
        <li class="feature-info__list">Population: {{ planet.population }}</li>
        <li class="feature-info__list">
          Rotation Period: {{ planet.rotation_period }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { planetsService } from "@/services/planets.js";
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
export default {
  data() {
    return { planet: [], imagePlanet: null };
  },
  props: {
    planet: { type: Object, required: true },
    id: { tupe: Number, required: true },
  },
  async created() {
    try {
      this.imagePlanet = await getImgService().getPlanetImgById("1");
    } catch (error) {
      this.imagePlanet = await getImgService().getPlanetImgByError();
    }
  },
  watch: {
    id: async function (newVal) {
      try {
        this.imagePlanet = await getImgService().getPlanetImgById(newVal + 1);
      } catch (error) {
        this.imagePlanet = await getImgService().getPlanetImgByError();
      }
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePlanet);
    },
  },
};
</script>
