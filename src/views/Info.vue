<template>
  <div class="fullInformation-people" v-if="personInfo">
    <div class="fullInformation-people__img"><img :src="dataUrl" /></div>
    <div class="fullInformation-people__info">
      <h2 class="fullInformation-people__title">{{ personInfo.name }}</h2>
      <ul class="fullInformation-people__list">
        <li class="fullInformation__list">Height: {{ personInfo.height }}</li>
        <li class="fullInformation__list">Mass: {{ personInfo.mass }}</li>
        <li class="fullInformation__list">
          Hair color: {{ personInfo.hair_color }}
        </li>
        <li class="fullInformation-info__list">
          Skin color: {{ personInfo.skin_color }}
        </li>
        <li class="fullInformation-info__list">
          Eye color: {{ personInfo.eye_color }}
        </li>
        <li class="fullInformation-info__list">
          Birth year: {{ personInfo.birth_year }}
        </li>
        <li class="fullInformation-info__list">
          Gender: {{ personInfo.gender }}
        </li>
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
    return {
      personInfo: [],
      userID: this.$route.params.id,
      imagePeople: null,
    };
  },
  async created() {
    try {
      const response = await peopleService().getPeople();
      this.imagePeople = await getImgService().getPersonImgById(
        Number(this.userID) + 1
      );
      this.personInfo = response.results[this.userID];
      this.planetShow = response.results[this.userID].homeworld;
      this.$emit("planetInf", this.planetShow);
    } catch (error) {
      this.imagePeople = img;
    }
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imagePeople);
    },
  },
};
</script>

<style lang="scss">
.fullInformation-people {
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 350px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--dynamic-background-color);
  &__img {
    width: 230px;
    height: 290px;
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
