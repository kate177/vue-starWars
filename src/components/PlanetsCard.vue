<template>

   <div class="feature" v-if="stocker">
   
      <div class="feature__img"><img src="../assets/img/Tatoooinefull.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{stoker.name}} </h2>
         <ul class="feature__list">
            <li class="feature-info__list">Diametr: {{stoker.diameter}}</li>
            <li class="feature-info__list">Population: {{stocker.population}}</li>
            <li class="feature-info__list">Rotation Period: {{stocker.rotation_period}}</li>
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
            axios.get(`https://swapi.dev/api/planets/${to.params.id}`)
            .then(responce => {
            this.stocker = responce.data
            console.log(this.stocker)
            })
         }
   }
}
</script>



