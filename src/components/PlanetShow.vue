<template>
  <section class="planet">
    <div class="planet__img"><img :src="dataUrl" /></div>
    <div class="planet__info">
      <h2 class="planet__title">{{ planetShow.name }}</h2>
      <ul class="planet-list">
        <li class="planet-info__list">
          Population: {{ planetShow.population }}
        </li>
        <li class="planet-info__list">
          Rotation period: {{ planetShow.rotation_period }}
        </li>
        <li class="planet-info__list">Diameter: {{ planetShow.diameter }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { planetsService } from "@/services/planets.js";
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
import axios from "axios";
export default {
  data() {
    return {
      planetShow: [],
      homeplanet: [],
      imagePlanets: null,
      id: null,
    };
  },
  props: {
    planet: "",
  },
  created() {
    this.fetchData();
    this.truncate();
    this.interval = setInterval(() => {
      this.rondomPlanet();
    }, 10000);
  },
  methods: {
    async fetchData() {
      const response = await planetsService().getPlanets();
      this.planetShow = response.results[0];
    },
    async truncate() {
      try {
        this.imagePlanets = await getImgService().getPlanetImgById(1);
      } catch (error) {
        this.imagePlanets = await getImgService().getPlanetImgByError();
      }
    },
    async rondomPlanet() {
      try {
        this.id += 1;
        if (this.id < 11) {
          const response = await planetsService().getPlanets();
          this.imagePlanets = await getImgService().getPlanetImgById(this.id);
          this.planetShow = response.results[this.id - 1];
        }
      } catch (e) {}
    },
  },
  watch: {
    planet: async function () {
      clearTimeout(this.interval);
      let idxImg = parseInt(this.planet.match(/\d+/));
      this.imagePlanets = await getImgService().getPlanetImgById(idxImg);
      axios.get(this.planet).then((response) => {
        this.planetShow = response.data;
      });
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePlanets);
    },
  },
};
</script>

<style lang="scss">
.planet {
  display: flex;
  padding: 16px;
  background-color: #303030;
  border-radius: 5px;
  &__img {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin-right: 30px;
  }
  &__img img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  &__title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
    color: #fff;
  }
}
.planet-list {
  margin-left: 20px;
  &.planet-list li {
    padding: 12px 10px;
    border: 1px solid #444;
    border-width: 1px 0 0px;
    font-size: 16px;
    color: #fff;
  }
}
@media screen and (max-width: 576px) {
  .planet__img {
    width: 160px;
    height: 160px;
  }
  .planet__title {
    font-size: 36px;
  }
  .planet-list {
    margin-left: 17px;
    &.planet-list li {
      padding: 10px 10px;
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 413px) {
  .planet {
    flex-direction: column;
    &__img {
      margin: 0 auto;
    }
    &__info {
      margin: 0 auto;
    }
    &__title {
      margin: 15px 0px;
    }
  }
  .planet-list {
    margin-left: 0px;
  }
}
</style>
