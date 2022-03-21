<template>
   <div class="wrapper-mistake">
   <h1 class="wrapper-mistak__title">
      StarDB
   </h1>
   <div class="wrapper-mistak__inner">
   <h2 class="mistak-inner__subtitle">Not Found</h2>
   <img src="../assets/img/404-error.png">
   <router-link to="/" class="people_list">Main Page</router-link>
   </div>
   </div>
</template>

<style lang="scss">
.wrapper-mistake{
   width: 1110px;
   height: 100%;
   margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.wrapper-mistak__title {
      font-size: 42px;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: #FFFFFF;
}
.wrapper-mistak__inner{
   margin-left: 40%;
   margin-top: 100px;
   display: flex;
  flex-direction: column;
}
.mistak-inner__subtitle{
   font-size: 46px;
   font-weight: 500;
   letter-spacing: 0.05em;
   color: #FFFFFF;
   margin-bottom: 40px;
}
img{
   width: 200px;
   height: 210px;
   margin-bottom: 40px;
}
.people_list{
   background-color: #4B9B5C;
   color: #fff;
   border-radius: 20px;
   margin-left: 20px;
   padding: 15px 0px 0px 25px;
   width: 150px;
   height: 50px;
   font-size: 21px;
   font-weight: 700;
   
}
</style>