<template>
   <section class="people-card">
   <div class="people-card__list">
            <ul class="people-card__name">
          <li class="people-card__info" v-for="(value, idx) in starship" :key="value.name" @click="onclickPerson(idx)"> {{value.name}}</li>        
         </ul>
   </div>
   <StarshipsCard :starshipInf="starshipInf" :id="id" v-if="starshipInf"/>
   </section>
</template>

<script>
import { starshipsService } from '@/services/starships.js';
import StarshipsCard from "../components/StarshipsCard.vue";

export default {
   
   data() {
      return { starship: [], starshipInf: null, id:0 }
   },
   components: {
    StarshipsCard,
  },
  methods:{
     onclickPerson(idx) {
        this.starshipInf = this.starship[idx];
        this.id = idx;
     }
  },
   async created() {
      const response = await starshipsService().getStarships();
      console.log(response);
      this.starship = response.results;
      this.starshipInf = response.results[0];
   }
}
</script>

<style lang="scss">
.people-card {
   display: flex;
   justify-content: space-between;
  margin-top: 40px;
  &__list{
     background-color: #303030;
     width:50%;
     height:30%;
  }
  &__name li{
   padding: 17px 15px;
   border: 1px solid #444;
   border-radius: 5px;
   font-size: 16px;
   color: #fff;
   }
         &__name li:hover{
      cursor: pointer;
      background-color: #3F3F3F;
   }
      &__info {
      color: #fff;
   }
}
.feature{
   display: flex;
   width:45%;
   height: 35%;
   padding: 16px;
   border-radius: 5px;
   background-color: #303030;
   &__imgs{
      width: 220px;
      height: 200px;
      border-radius: 10px;
      margin-right: 30px;
   }
   &__imgs img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
   }
   &__info{
      margin-top: 20px;
      width:230px;
   }
   &__title{
      font-size: 28px;
      font-weight: 500;
      letter-spacing: 0.05em;
      margin-bottom: 15px; 
      color: #fff;
   }
   &__list li{
   padding: 12px 10px;
   border: 1px solid #444;
   border-width: 1px 0 0px;
   font-size: 16px;
   color: #fff;
   }
}
@media screen and (max-width: 1200px) {
   .people-card__list {
      width:45%;
   }
   .feature{
   width:50%;
   }
}
@media screen and (max-width: 990px) {
   .feature{
   flex-direction: column;
   &__imgs{
      margin: 0 auto;
   }
   }
}
@media screen and (max-width: 576px) {
   .feature__imgs {
      width: 160px;
      height: 140px;
   }
   .feature__info{
      width: 160px;
   }
   .feature__title{
      font-size: 22px;
   }
   .feature__list li{
   width: 160px;
   }
}
@media screen and (max-width: 413px) {
   .people-card {
   flex-direction: column;
   &__list{
   width:100%;
   margin-bottom: 20px;
  }
}
.feature{
   width:100%;
   &__imgs{
      width: 100%;
      height: 190px;
   }
   &__info{
      margin: 0 auto;
      margin-top: 20px;
   }
   .feature__info{
      width: 100%;
   }
   &__title{
      font-size: 18px;
   }
      &__list li{
   width: 100%;
   padding: 12px 5px;
   font-size: 14px;
   }
}
}
</style>