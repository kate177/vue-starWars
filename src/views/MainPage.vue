<template>
  <Navigation />
  <PlanetShow :planet="planet" />
  <router-view
    @planetInf="planet = $event"
    @pageNotFound="isNotFound = $event"
  />
</template>

<script>
import PlanetShow from "../components/PlanetShow.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    PlanetShow,
    Navigation,
  },
  data() {
    return {
      planet: null,
    };
  },
};
</script>

<style>
.wrapper-main {
  margin: 0 auto;
  width: 300px;
  margin-top: 100px;
}
.main-title {
  font-size: 64px;
  margin-bottom: 30px;
  color: #1e705f;
}
.main-subtitle {
  font-size: 52px;
  color: #fff;
  margin-left: 20px;
}
</style>
