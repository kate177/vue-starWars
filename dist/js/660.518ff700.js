"use strict";(self["webpackChunkvue_star_war"]=self["webpackChunkvue_star_war"]||[]).push([[660],{8545:function(t,n,a){a.d(n,{O:function(){return i}});var l=a(9028);function i(){const t=(0,l._)();function n(n=1){return t.get("planets",{query:{page:n}})}function a(n){return t.get("planets",{params:{id:n}})}return{getPlanets:n,getPlanetsnById:a}}},660:function(t,n,a){a.r(n),a.d(n,{default:function(){return O}});var l=a(3396),i=a(7139);const e={key:0,class:"fullInformation-planet"},r={class:"fullInformation-planet__img"},o=["src"],s={class:"fullInformation-planet__info"},f={class:"fullInformation-planet__title"},u={class:"fullInformation-planet__list"},_={class:"fullInformation-info__list"},c={class:"fullInformation-info__list"},p={class:"fullInformation-info__list"},I={class:"fullInformation-info__list"},m={class:"fullInformation-info__list"},d={class:"fullInformation-info__list"},w={class:"fullInformation-info__list"},g={class:"fullInformation-info__list"};function h(t,n,a,h,v,P){return v.planetInfo?((0,l.wg)(),(0,l.iD)("div",e,[(0,l._)("div",r,[(0,l._)("img",{src:P.dataUrl},null,8,o)]),(0,l._)("div",s,[(0,l._)("h2",f,(0,i.zw)(v.planetInfo.name),1),(0,l._)("ul",u,[(0,l._)("li",_," Diametr: "+(0,i.zw)(v.planetInfo.diameter),1),(0,l._)("li",c," Population: "+(0,i.zw)(v.planetInfo.population),1),(0,l._)("li",p," Rotation Period: "+(0,i.zw)(v.planetInfo.rotation_period),1),(0,l._)("li",I," Оrbital period: "+(0,i.zw)(v.planetInfo.orbital_period),1),(0,l._)("li",m," Сlimate: "+(0,i.zw)(v.planetInfo.climate),1),(0,l._)("li",d," Gravity: "+(0,i.zw)(v.planetInfo.gravity),1),(0,l._)("li",w," Terrain: "+(0,i.zw)(v.planetInfo.terrain),1),(0,l._)("li",g," Surface water: "+(0,i.zw)(v.planetInfo.surface_water),1)])])])):(0,l.kq)("",!0)}var v=a(8545),P=a(4454),z=a(323),y=a(6963),k={data(){return{planetInfo:[],userID:this.$route.params.id,imagePlanet:null}},async created(){try{const t=await(0,v.O)().getPlanets();this.imagePlanet=await(0,P.N)().getPlanetImgById(Number(this.userID)+1),this.planetInfo=t.results[this.userID]}catch(t){this.imagePlanet=y;const n=await(0,v.O)().getPlanets();this.planetInfo=n.results[this.userID]}},computed:{dataUrl(){return z.M.dataUrl(this.imagePlanet)}}},D=a(89);const b=(0,D.Z)(k,[["render",h]]);var O=b}}]);
//# sourceMappingURL=660.518ff700.js.map