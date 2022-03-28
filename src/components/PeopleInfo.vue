<template>
   <div class="feature" @click="$router.push({name: 'peopleInfo', params: {id: id}})">
   
      <div class="feature__img"><img :src="dataUrl"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{person.name}} </h2>
         <ul class="feature__list">
            <li class="feature-info__list">Gender: {{person.gender}}</li>
            <li class="feature-info__list">Birth year: {{person.birth_year}}</li>
            <li class="feature-info__list">Eye color: {{person.eye_color}}</li>
         </ul>
      </div>
   </div>

</template>

<script>
import { peopleService } from '@/services/people.js';
import { getImgService } from '@/services/imageService.js';
export default {
   data() {
   return {person: [], imagePeople: null}
   },
   props: {
      person: {type: Object, required: true},
      id: {tupe: Number, required: true},
   },
   async created () {
      try{
         this.imagePeople = await getImgService().getPersonImgById('1');
         } catch (error) {
         this.imagePeople = await getImgService().getPlanetImgByError();
         }
   },
   watch: { 
   id: async function(newVal) {
      try{
            this.imagePeople = await getImgService().getPersonImgById(newVal + 1);
            } catch (error) {
            this.imagePeople = await getImgService().getPlanetImgByError();
            }
      }
   },
   computed : {
      dataUrl(){
         return 'data:image/jpeg;base64,' + btoa(
            new Uint8Array(this.imagePeople)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
         );
      }  
   }
}
</script>
