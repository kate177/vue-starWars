<template>
  <div
    class="feature"
    @click="$router.push({ name: 'peopleInfo', params: { id: id } })"
  >
    <div class="feature__img"><img :src="dataUrl" />/></div>
    <div class="feature__info">
      <h2 class="feature__title">{{ person.name }}</h2>
      <ul class="feature__list">
        <li class="feature-info__list">Gender: {{ person.gender }}</li>
        <li class="feature-info__list">Birth year: {{ person.birth_year }}</li>
        <li class="feature-info__list">Eye color: {{ person.eye_color }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { peopleService } from "@/services/people.js";
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
import img from "../assets/img/big-placeholder.jpg";

export default {
  data() {
    return { imagePeople: null };
  },
  props: {
    person: { type: Object, required: true },
    id: { tupe: Number, required: true },
  },
  async created() {
    try {
      this.imagePeople = await getImgService().getPersonImgById("1");
    } catch (error) {
      this.imagePeople = img;
    }
  },
  watch: {
    id: async function (newVal) {
      try {
        this.imagePeople = await getImgService().getPersonImgById(newVal + 1);
      } catch (error) {
        this.imagePeople = img;
      }
    },
  },
  watch: {
    id: {
      handler(newVal) {
        getImgService()
          .getPersonImgById(newVal + 1)
          .then((response) => {
            this.imagePeople = response;
          })
          .catch(() => {
            this.imagePeople = img;
          });
      },
      immediate: true,
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePeople);
    },
  },
};
</script>
