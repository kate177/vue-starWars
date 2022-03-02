<template>
   <div class="feature" v-for="value in stock" :key="value.stock">
   
      <div class="feature__img"><img src="../assets/img/Luke-rotjpromo.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{value.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Gender: {{value.gender}}</li>
            <li class="feature-info__list">Birth year: {{value.birth_year}}</li>
            <li class="feature-info__list">Eye color: {{value.eye_color}}</li>
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
      axios.get('https://swapi.dev/api/people')
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
