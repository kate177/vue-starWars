<template>
  <div
    class="feature"
    @click="$router.push({ name: 'starshipsInfo', params: { id: id } })"
  >
    <div class="feature__img">
      <img :src="dataUrl" />
    </div>
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
import img from "../assets/img/big-placeholder.jpg";

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
    } catch {
      this.imageStarship = img;
    }
  },
  watch: {
    id: {
      handler(newVal) {
        getImgService()
          .getStarshipImgById(newVal + 1)
          .then((response) => {
            this.imageStarship = response;
          })
          .catch(() => {
            this.imageStarship = img;
          });
      },
      immediate: true,
    },
  },
  computed: {
    dataUrl() {
      return Formatter.dataUrl(this.imageStarship);
    },
  },
};
</script>

<style lang="scss">
.feature {
  cursor: pointer;
  display: flex;
  width: 45%;
  height: 35%;
  padding: 16px;
  border-radius: 5px;
  background-color: var(--dynamic-background-color);
  &__img {
    width: 220px;
    height: 200px;
    border-radius: 10px;
    margin-right: 30px;
  }
  &__img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  &__info {
    margin-top: 20px;
    width: 46%;
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
    color: var(--dynamic-text-color);
  }
  &__list li {
    padding: 12px 10px;
    border: 1px solid var(--dynamic-border-color);
    border-width: 1px 0 0px;
    font-size: 16px;
    color: var(--dynamic-text-color);
  }
}
@media screen and (max-width: 1200px) {
  .feature {
    width: 50%;
  }
}
@media screen and (max-width: 990px) {
  .feature {
    flex-direction: column;
    &__img {
      margin: 0 auto;
    }
    &__info {
      width: 100%;
    }
  }
}
@media screen and (max-width: 576px) {
  .feature__img {
    width: 160px;
    height: 220px;
  }
  .feature__info {
    width: 160px;
  }
  .feature__title {
    font-size: 22px;
  }
  .feature__list li {
    width: 160px;
  }
}
@media screen and (max-width: 413px) {
  .feature {
    width: 100%;
    &__img {
      width: 140px;
      height: 200px;
    }
    &__info {
      margin: 0 auto;
      margin-top: 20px;
    }
    .feature__info {
      width: 100%;
    }
    &__title {
      font-size: 18px;
    }
    &__list li {
      width: 100%;
      padding: 12px 5px;
      font-size: 14px;
    }
  }
}
</style>
