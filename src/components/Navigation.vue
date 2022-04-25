<template>
  <header class="header">
    <router-link
      to="/"
      class="header__title"
      @click="$emit('displayPlanetShow', !this.displayPlanet)"
      >StarDB</router-link
    >
    <ul class="header__list">
      <li>
        <router-link
          to="/people"
          class="header__people"
          @click="$emit('displayPlanetShow', this.displayPlanet)"
          >{{ $t("people") }}</router-link
        >
      </li>
      <li>
        <router-link
          to="/planets"
          class="header__planets"
          @click="$emit('displayPlanetShow', this.displayPlanet)"
          >{{ $t("planets") }}</router-link
        >
      </li>
      <li>
        <router-link
          to="/starships"
          class="header__starships"
          @click="$emit('displayPlanetShow', this.displayPlanet)"
          >{{ $t("starships") }}</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      displayPlanet: 1,
    };
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  margin: 0px 0px 24px;
  padding-top: 15px;
  &__title {
    font-size: 42px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--dynamic-text-color);
    margin: 0px 65px 0px 10px;
  }
  &__list {
    display: flex;
    margin-top: 18px;
  }
  &__people {
    color: #1e705f;
    font-size: 17px;
    font-weight: 700;
    margin-right: 32px;
  }
  &__planets {
    color: #1e705f;
    font-size: 17px;
    font-weight: 700;
    margin-right: 32px;
  }
  &__starships {
    color: #1e705f;
    font-size: 17px;
    font-weight: 700;
  }
}
.active-link {
  text-decoration: underline;
}
.header__title {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    &__title {
      margin: 0 auto;
    }
    &__list {
      margin: 0 auto;
      margin-top: 15px;
    }
  }
}
@media screen and (max-width: 413px) {
  .header {
    &__people {
      font-size: 16px;
      margin-right: 23px;
    }
    &__planets {
      font-size: 16px;
      margin-right: 23px;
    }
    &__starships {
      font-size: 16px;
    }
  }
}
</style>
