<template>

   <div class="feature" v-for="value in stock" :key="value.stock">
   
      <div class="feature__img"><img src="../assets/img/Tatoooinefull.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{value.name}} </h2>
         <ul class="feature__list">
            <li class="feature-info__list">Diametr: {{value.diameter}}</li>
            <li class="feature-info__list">Population: {{value.population}}</li>
            <li class="feature-info__list">Rotation Period: {{value.rotation_period}}</li>
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
      axios.get('https://swapi.dev/api/planets')
      .then(responce => {
         this.stock = responce.data.results
         console.log(this.stock)
      })
      .catch(e => {
         this.errors.push(e)
      })
   },
      computed: {
   destinationId () {
      return parseInt(this.$route.params.id)
   },
   }
}
</script>



