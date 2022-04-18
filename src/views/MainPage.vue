<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Navigation @displayPlanetShow="displayPlanet = $event" />
      <div class="wrapper__right">
        <SwitchTheme />
        <SwitchLang />
      </div>
    </div>
    <PlanetShow v-if="this.displayPlanet" :planet="planet" />
    <img v-else class="main-img" src="../assets/img/Frame1.png" />
    <router-view @planetInf="planet = $event" />
  </div>
</template>

<script>
import PlanetShow from "../components/PlanetShow.vue";
import Navigation from "../components/Navigation.vue";
import SwitchTheme from "../components/SwitchTheme.vue";
import SwitchLang from "../components/SwitchLang.vue";

export default {
  components: {
    PlanetShow,
    Navigation,
    SwitchTheme,
    SwitchLang,
  },
  data() {
    return {
      planet: null,
      displayPlanet: false,
    };
  },
  mounted() {
    localStorage.setItem("switch", this.displayPlanet);
    this.displayPlanet = localStorage.getItem("switch");
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 1110px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__right {
    display: flex;
    align-items: center;
  }
}
.main-img {
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;
}

@media screen and (max-width: 1200px) {
  .wrapper {
    width: 930px;
  }
}
@media screen and (max-width: 990px) {
  .wrapper {
    width: 100%;
    padding: 0px 30px 0px 30px;
  }
}
@media screen and (max-width: 768px) {
  .wrapper__header {
    flex-direction: column;
  }
  .wrapper__right {
    order: -1;
    margin-left: 70%;
    margin-top: 10px;
  }
  .main-img {
    margin-top: 20px;
  }
}
@media screen and (max-width: 576px) {
  .wrapper {
    width: 100%;
    padding: 0px 10px 10px;
    &__right {
      margin-left: 60%;
    }
  }
}
</style>
