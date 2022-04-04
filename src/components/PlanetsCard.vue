<template>
  <div
    class="feature"
    @click="$router.push({ name: 'planetsInfo', params: { id: id } })"
  >
    <div class="feature__img"><img :src="dataUrl" /></div>
    <div class="feature__info">
      <h2 class="feature__title">{{ sphere.name }}</h2>
      <ul class="feature__list">
        <li class="feature-info__list">Diametr: {{ sphere.diameter }}</li>
        <li class="feature-info__list">Population: {{ sphere.population }}</li>
        <li class="feature-info__list">
          Rotation Period: {{ sphere.rotation_period }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
import img from "../assets/img/big-placeholder.jpg";

export default {
  data() {
    return { imagePlanet: null };
  },
  props: {
    sphere: { type: Object, required: true },
    id: { tupe: Number, required: true },
  },
  async created() {
    try {
      this.imagePlanet = await getImgService().getPlanetImgById(1);
    } catch (error) {
      this.imagePlanet = img;
    }
  },
  watch: {
    id: {
      handler(newVal) {
        getImgService()
          .getPlanetImgById(newVal + 1)
          .then((response) => {
            this.imagePlanet = response;
          })
          .catch(() => {
            this.imagePlanet = img;
          });
      },
      immediate: true,
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePlanet);
    },
  },
};
</script>
