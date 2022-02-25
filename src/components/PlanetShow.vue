<template>
<section class="planet">
<div class="planet__img"><img src="../assets/img/UtapauRotS.png"></div>
<div class="planet__info">
<h2 class="planet__title">Utapau</h2>
<ul class="planet-list">
<li class="planet-info__list">Population: 95000000</li>
<li class="planet-info__list">Rotation period: 27</li>
<li class="planet-info__list">Diameter 12900</li>
</ul>
</div>
</section>
</template>

<style lang="scss">
.planet{
   display: flex;
   padding: 16px;
   background-color: #303030;
   border-radius: 5px;
   &__img{
      width:200px;
      height: 200px;
      border-radius: 15px;
      margin-right: 30px;
   }
   &__img img{
      width: 100%;
      height: 100%;
      border-radius: 15px;
   }
   &__title{
      font-size: 40px;
      font-weight: 500;
      letter-spacing: 0.05em;
      margin-bottom: 15px; 
      color: #fff;
   }
}
.planet-list{
margin-left:20px;
   &.planet-list li {
   padding: 12px 10px;
   border: 1px solid #444;
   border-width: 1px 0 0px;
   font-size: 16px;
   color: #fff;
   }
}
@media screen and (max-width: 576px) {
   .planet__img{
      width: 160px;
      height: 160px;
   }
   .planet__title{
      font-size: 36px;
   }
   .planet-list{
   margin-left:17px;
   &.planet-list li {
   padding: 10px 10px;
   font-size: 14px;
   }
   }
}
@media screen and (max-width: 413px) {
   .planet{
      flex-direction: column;
   &__img{
      margin: 0 auto;
   }
   &__info{
      margin: 0 auto;
   }
   &__title{
      margin: 15px 0px;
   }
   }
   .planet-list{
margin-left:0px;
   }
}
</style>