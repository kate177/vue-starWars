<template>
  <div class="feature" v-if="planetInfo">
    <div class="feature__img"><img :src="dataUrl" /></div>
    <div class="feature__info">
      <h2 class="feature__title">{{ planetInfo.name }}</h2>
      <ul class="feature__list">
        <li class="feature-info__list">Diametr: {{ planetInfo.diameter }}</li>
        <li class="feature-info__list">
          Population: {{ planetInfo.population }}
        </li>
        <li class="feature-info__list">
          Rotation Period: {{ planetInfo.rotation_period }}
        </li>
        <li class="feature-info__list">
          Оrbital period: {{ planetInfo.orbital_period }}
        </li>
        <li class="feature-info__list">Сlimate: {{ planetInfo.climate }}</li>
        <li class="feature-info__list">Gravity: {{ planetInfo.gravity }}</li>
        <li class="feature-info__list">Terrain: {{ planetInfo.terrain }}</li>
        <li class="feature-info__list">
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
      this.imagePlanet = await getImgService().getImgByError();
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
.feature {
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 350px;
  padding: 20px;
  border-radius: 5px;
  background-color: #303030;
  &__img {
    width: 240px;
    height: 280px;
    border-radius: 10px;
    margin-right: 50px;
  }
  &__img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  &__title {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
    color: #fff;
  }
  &__list {
    height: 280px;
    width: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  &__list li {
    width: 200px;
    margin-right: 60px;
    padding: 12px 10px;
    border: 1px solid #444;
    border-width: 1px 0 0px;
    font-size: 16px;
    color: #fff;
  }
}
@media screen and (max-width: 990px) {
  .feature {
    max-height: 100%;
    padding: 15px;
    &__list {
      flex-wrap: nowrap;
    }
    &__list li {
      width: 250px;
      margin-right: 0px;
    }
  }
}
@media screen and (max-width: 768px) {
  .feature__list li {
    width: 240px;
  }
  .feature__img {
    width: 240px;
    height: 290px;
    margin-right: 30px;
  }
}
@media screen and (max-width: 576px) {
  .feature {
    flex-direction: column;
    height: 100%;
    &__img {
      margin: 0 auto;
      width: 230px;
    }
    &__info {
      margin-top: 15px;
    }
    &__list {
      width: 100%;
    }
    &__list li {
      width: 100%;
    }
  }
}
</style>
