<template>
  <div class="feature" v-if="stocker">
   
      <div class="feature__imgs"><img src="../assets/img/image-610.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{stocker.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Model:{{stocker.model}}</li>
            <li class="feature-info__list">Manufacturer:{{stocker.manufacturer}}</li>
            <li class="feature-info__list">Length: {{stocker.length}}</li>
            <li class="feature-info__list">Crew: {{stocker.crew}}</li>
            <li class="feature-info__list">Passengers: {{stocker.passengers}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'Stockers',
   data() {
         return {
            stocker: []
         }
   },
   watch: {
         '$route'(to) {
            axios.get(`https://swapi.dev/api/starships/${to.params.id}`)
            .then(responce => {
            this.stocker = responce.data
            console.log(this.stocker)
            })
         }
   }
}
</script>

