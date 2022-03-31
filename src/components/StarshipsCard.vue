<template>
  <div
    class="feature"
    @click="$router.push({ name: 'starshipsInfo', params: { id: id } })"
  >
    <div class="feature__imgs"><img :src="dataUrl" /></div>
    <div class="feature__info">
      <h2 class="feature__title">{{ starship.name }}</h2>
      <ul class="feature__list">
        <li class="feature-info__list">Model:{{ starship.model }}</li>
        <li class="feature-info__list">
          Manufacturer:{{ starship.manufacturer }}
        </li>
        <li class="feature-info__list">Length: {{ starship.length }}</li>
        <li class="feature-info__list">Crew: {{ starship.crew }}</li>
        <li class="feature-info__list">
          Passengers: {{ starship.passengers }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";

export default {
  data() {
    return { imageStarship: null };
  },
  props: {
    starship: { type: Object, required: true },
    id: { tupe: Number, required: true, default: 0 },
  },
  async created() {
    try {
      this.imageStarship = await getImgService().getStarshipImgById(1);
    } catch (error) {
      this.imageStarship = await getImgService().getImgByError();
    }
  },
  watch: {
    id: async function (newVal) {
      try {
        this.imageStarship = await getImgService().getStarshipImgById(
          newVal + 1
        );
      } catch (error) {
        this.imageStarship = await getImgService().getImgByError();
      }
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imageStarship);
    },
  },
};
</script>
