<template>
  <div class="feature"  @click="$router.push({name: 'StarshipsInfo', params: {id: id}})">
   
      <div class="feature__imgs"><img src="../assets/img/image-610.jpg"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{starshipInf.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Model:{{starshipInf.model}}</li>
            <li class="feature-info__list">Manufacturer:{{starshipInf.manufacturer}}</li>
            <li class="feature-info__list">Length: {{starshipInf.length}}</li>
            <li class="feature-info__list">Crew: {{starshipInf.crew}}</li>
            <li class="feature-info__list">Passengers: {{starshipInf.passengers}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import { starshipsService } from '@/services/starships.js';
export default {
   data() {
         return {starshipInf: []}
   },
   props: {
      starshipInf: {type: Object, required: true},
      id: {tupe: Number, required: true}
   }
}       
</script>