<template>
   <div class="feature" v-if="personInfo">
      <div class="feature__img"><img :src="dataUrl"></div>
      <div class="feature__info">
         <h2 class="feature__title">{{personInfo.name}}</h2>
         <ul class="feature__list">
            <li class="feature-info__list">Height: {{personInfo.height}}</li>
            <li class="feature-info__list">Mass: {{personInfo.mass}}</li>
            <li class="feature-info__list">Hair color: {{personInfo.hair_color}}</li>
            <li class="feature-info__list">Skin color: {{personInfo.skin_color}}</li>
            <li class="feature-info__list">Eye color: {{personInfo.eye_color}}</li>
            <li class="feature-info__list">Birth year: {{personInfo.birth_year}}</li>
            <li class="feature-info__list">Gender: {{personInfo.gender}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import { peopleService } from '@/services/people.js';
import { getImgService } from '@/services/imageService.js';
export default {
   data() {
      return {
         personInfo: [],
         userID: this.$route.params.id,
         imagePeople: null,
      }
   },
   async created() {
      const response = await peopleService().getPeople();
      this.imagePeople = await getImgService().getPersonImgById(this.userID);
      this.personInfo = response.results[this.userID];
      this.planetShow = response.results[this.userID].homeworld;
      this.$emit('planetInf', this.planetShow);
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

<style lang="scss">
.feature{
   margin-top: 40px;
   display: flex;
   width:100%;
   height: 350px;
   padding: 20px;
   border-radius: 5px;
   background-color: #303030;
   &__img{
      width: 240px;
      height: 310px;
      border-radius: 10px;
      margin-right: 50px;
   }
   &__img img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
   }

   &__title{
      font-size: 28px;
      font-weight: 500;
      letter-spacing: 0.05em;
      margin-bottom: 15px; 
      color: #fff;
   }
   &__list{
      height: 280px;
      width: 70%;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
   }
   &__list li{
   width: 200px;
   margin-right: 60px;
   padding: 12px 10px;
   border: 1px solid #444;
   border-width: 1px 0 0px;
   font-size: 16px;
   color: #fff;
   }
}
@media screen and (max-width: 990px) {
   .feature{
   max-height: 100%;
   padding: 15px;
   &__list{
      flex-wrap: nowrap;
   }
   &__list li{
   width: 250px;
   margin-right: 0px;
   }
   }
}
@media screen and (max-width: 768px) {
   .feature__list li{
   width: 240px;
   }
   .feature__img{
      width: 240px;
      height: 290px;
      margin-right: 30px;
   }
}
@media screen and (max-width: 576px) {
   .feature{
      flex-direction: column;
      height: 100%;
   &__img{
      margin: 0 auto;
      width: 230px;
   }
   &__info{
      margin-top: 15px;
   }
   &__list{
      width:100%;
   }
   &__list li{
   width: 100%;
   }
   }
}
</style>