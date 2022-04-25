<template>
  <div class="fullInformation-planet" v-if="planetInfo">
    <div class="fullInformation-planet__img"><img :src="dataUrl" /></div>
    <div class="fullInformation-planet__info">
      <h2 class="fullInformation-planet__title">{{ planetInfo.name }}</h2>
      <ul class="fullInformation-planet__list">
        <li class="fullInformation-info__list">
          Diametr: {{ planetInfo.diameter }}
        </li>
        <li class="fullInformation-info__list">
          Population: {{ planetInfo.population }}
        </li>
        <li class="fullInformation-info__list">
          Rotation Period: {{ planetInfo.rotation_period }}
        </li>
        <li class="fullInformation-info__list">
          Оrbital period: {{ planetInfo.orbital_period }}
        </li>
        <li class="fullInformation-info__list">
          Сlimate: {{ planetInfo.climate }}
        </li>
        <li class="fullInformation-info__list">
          Gravity: {{ planetInfo.gravity }}
        </li>
        <li class="fullInformation-info__list">
          Terrain: {{ planetInfo.terrain }}
        </li>
        <li class="fullInformation-info__list">
          Surface water: {{ planetInfo.surface_water }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { planetsService } from "@/services/planets.js";
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
import img from "../assets/img/big-placeholder.jpg";

export default {
  data() {
    return {
      planetInfo: [],
      userID: this.$route.params.id,
      imagePlanet: null,
    };
  },
  async created() {
    try {
      const response = await planetsService().getPlanets();
      this.imagePlanet = await getImgService().getPlanetImgById(
        Number(this.userID) + 1
      );
      this.planetInfo = response.results[this.userID];
    } catch (e) {
      this.imagePlanet = img;
      const response = await planetsService().getPlanets();
      this.planetInfo = response.results[this.userID];
    }
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePlanet);
    },
  },
};
</script>

<style lang="scss">
.fullInformation-planet {
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 350px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--dynamic-background-color);
  &__img {
    width: 240px;
    height: 250px;
    border-radius: 10px;
    margin-right: 50px;
  }
  &__img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  &__info {
    width: 63%;
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
    color: var(--dynamic-text-color);
  }
  &__list {
    height: 280px;
    width: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  &__list li {
    width: 205px;
    height: auto;
    margin-right: 60px;
    padding: 12px 10px;
    border: 1px solid var(--dynamic-border-color);
    border-width: 1px 0 0px;
    font-size: 16px;
    color: var(--dynamic-text-color);
  }
}
@media screen and (max-width: 990px) {
  .fullInformation {
    max-height: 100%;
    padding: 15px;
    &__list li {
      margin-right: 20px;
    }
  }
}
@media screen and (max-width: 768px) {
  .fullInformation {
    flex-direction: column;
    height: 100%;
    &__img {
      margin: 0 auto;
      width: 220px;
      height: 240px;
    }
    &__info {
      width: 100%;
      margin-top: 20px;
    }
    &__list {
      width: 100%;
    }
  }
}
@media screen and (max-width: 576px) {
  .fullInformation {
    &__img {
      width: 200px;
      height: 230px;
    }
    &__list {
      height: auto;
    }
    &__list li {
      width: 100%;
    }
  }
}
</style>
