<template>

   <div class="feature" v-if="planet">
   
      <div class="feature__img"><img src="../assets/img/Tatoooinefull.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{planet.name}} </h2>
         <ul class="feature__list">
            <li class="feature-info__list">Diametr: {{planet.diameter}}</li>
            <li class="feature-info__list">Population: {{planet.population}}</li>
            <li class="feature-info__list">Rotation Period: {{planet.rotation_period}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
         return {planet: []}
   },
   watch: {
         '$route'(to) {
            axios.get(`https://swapi.dev/api/planets/${to.params.id}`)
            .then(responce => {
            this.planet = responce.data
            console.log(this.planet)
            })
         }
}
}
</script>



