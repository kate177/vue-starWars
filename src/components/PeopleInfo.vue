<template>
<h3>{{$route.params.id}} </h3>
   <div class="feature" v-if="stocker">
   
      <div class="feature__img"><img src="../assets/img/Luke-rotjpromo.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{stocker.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Gender: {{stocker.gender}}</li>
            <li class="feature-info__list">Birth year: {{stocker.birth_year}}</li>
            <li class="feature-info__list">Eye color: {{stocker.eye_color}}</li>
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
            axios.get(`https://swapi.dev/api/people/${to.params.id}`)
            .then(responce => {
            this.stocker = responce.data
            console.log(this.stocker)
            })
         }
   }
}
</script>
