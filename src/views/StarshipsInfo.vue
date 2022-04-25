<template>
  <div class="fullInformation-starship" v-if="starshipsInfo">
    <div class="fullInformation-starship__img"><img :src="dataUrl" /></div>
    <div class="fullInformation-starship__info">
      <h2 class="fullInformation-starship__title">{{ starshipsInfo.name }}</h2>
      <ul class="fullInformation-starship__list">
        <li class="fullInformation-info__list">
          Model:{{ starshipsInfo.model }}
        </li>
        <li class="fullInformation-info__list">
          Manufacturer:{{ starshipsInfo.manufacturer }}
        </li>
        <li class="fullInformation-info__list">
          Length: {{ starshipsInfo.length }}
        </li>
        <li class="fullInformation-info__list">
          Crew: {{ starshipsInfo.crew }}
        </li>
        <li class="fullInformation-info__list">
          Passengers: {{ starshipsInfo.passengers }}
        </li>
        <li class="fullInformation-info__list">
          Cost in credits: {{ starshipsInfo.cost_in_credits }}
        </li>
        <li class="fullInformation-info__list">
          Max atmosphering speed: {{ starshipsInfo.max_atmosphering_speed }}
        </li>
        <li class="fullInformation-info__list">
          Cargo capacity: {{ starshipsInfo.cargo_capacity }}
        </li>
        <li class="fullInformation-info__list">
          Consumables: {{ starshipsInfo.consumables }}
        </li>
        <li class="fullInformation-info__list">
          Hyperdrive rating: {{ starshipsInfo.hyperdrive_rating }}
        </li>
        <li class="fullInformation-info__list">
          MGLT: {{ starshipsInfo.MGLT }}
        </li>
        <li class="fullInformation-info__list">
          Starship class: {{ starshipsInfo.starship_class }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { starshipsService } from "@/services/starships.js";
import { getImgService } from "@/services/imageService.js";
import { Formatter } from "@/helpers/formatter";
import img from "../assets/img/big-placeholder.jpg";

export default {
  data() {
    return {
      starshipsInfo: [],
      userID: this.$route.params.id,
      imageStarship: null,
    };
  },
  async created() {
    try {
      const response = await starshipsService().getStarships();
      this.imageStarship = await getImgService().getStarshipImgById(
        Number(this.userID) + 1
      );
      this.starshipsInfo = response.results[this.userID];
    } catch {
      this.imageStarship = img;
      const response = await starshipsService().getStarships();
      this.starshipsInfo = response.results[this.userID];
    }
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imageStarship);
    },
  },
};
</script>

<style lang="scss">
.fullInformation-starship {
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
    width: 100%;
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
