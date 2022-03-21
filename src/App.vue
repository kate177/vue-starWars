<template>
<div id="app" class="wrapper">
   <Navigation/>
   <PlanetShow :planet="planet" />
   <router-view @planetInf="planet=$event"></router-view>
</div>
</template>


<script>
import PlanetShow from "./components/PlanetShow.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    PlanetShow,
    Navigation
  },
     data(){
      return {
         planet: null,
      }
   },
}
</script>

<style lang="scss">
.wrapper{
   width: 1110px;
   height: 100%;
   margin: 0 auto;
   padding-bottom: 60px;
}
</style>
