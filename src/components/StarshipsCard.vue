<template>
  <div class="feature" v-for="value in stock" :key="value.stock">
   
      <div class="feature__imgs"><img src="../assets/img/image-610.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{value.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Model:{{value.model}}</li>
            <li class="feature-info__list">Manufacturer:{{value.manufacturer}}</li>
            <li class="feature-info__list">Length: {{value.length}}</li>
            <li class="feature-info__list">Crew: {{value.crew}}</li>
            <li class="feature-info__list">Passengers: {{value.passengers}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'Stocks',
   data() {
      return {
         stock: [],
         errors: [],
      }
   },
   created() {
      axios.get('https://swapi.dev/api/starships')
      .then(responce => {
         this.stock = responce.data.results
         console.log(this.stock)
      })
      .catch(e => {
         this.errors.push(e)
      })
   },
}
</script>
