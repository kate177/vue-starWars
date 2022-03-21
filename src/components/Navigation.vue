<template>
   <header class="header">
      <h1 class="header__title">
      StarDB
      </h1>
      <ul class="header__list">
         <li><router-link to="/people" class="header__people">People</router-link></li>
         <li><router-link to="/planets" class="header__planets">Planets</router-link></li>
         <li><router-link to="/starships" class="header__starships">Starships</router-link></li>
      </ul>
   </header>
</template>


<style lang="scss">
.header{
   display: flex;
   margin: 0px 0px 24px;
   padding-top: 15px;
   &__title{
      font-size: 42px;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      margin: 0px 65px 0px 10px;
   }
   &__list{
      display: flex;
      margin-top: 18px;
   }
   &__people{
      color: #1e705f;
      font-size: 17px;
      font-weight: 700;
      margin-right: 32px;
   }
   &__planets{
      color: #1e705f;
      font-size: 17px;
      font-weight: 700;
      margin-right: 32px;
   }
   &__starships{
      color: #1e705f;
      font-size: 17px;
      font-weight: 700;
   }
}
.active-link{
   text-decoration: underline;
}
@media screen and (max-width: 1200px) {
   .wrapper{
   width: 930px
   }
}
@media screen and (max-width: 990px) {
   .wrapper{
   width: 690px
   }
}
@media screen and (max-width: 768px) {
   .wrapper{
   width: 510px;
   }
   .header{
   flex-direction: column;
   &__title{
   margin: 0 auto;
   }
   &__list{
   margin: 0 auto;
   margin-top: 15px;
   }
   }
}
@media screen and (max-width: 576px) {
   .wrapper{
   width: 100%;
   padding: 0px 15px 15px;
   }
}
@media screen and (max-width: 413px) {
   .header{
      &__people{
      font-size: 16px;
      margin-right: 23px;
   }
      &__planets{
      font-size: 16px;
      margin-right: 23px;
   }
      &__starships{
      font-size: 16px;
   }
   }
}
</style>
