<template>
   <div class="feature" @click="$router.push({name: 'peopleInfo', params: {id: id}})">
   
      <div class="feature__img"><img src='https://starwars-visualguide.com/assets/img/characters/1.jpg'></div>
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
export default {
   data() {
         return {person: [], imagUser: null}
   },
   props: {
      person: {type: Object, required: true},
      id: {tupe: Number, required: true}
   },
   // created() {
   //    const imgId = this.id + 1;
   //    const tyty= axios.get('https://starwars-visualguide.com/assets/img/characters/'+ '1' + '.jpg');
   //    console.log(tyty);
   // }

}
     
</script>
