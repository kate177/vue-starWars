"use strict";(self["webpackChunkvue_star_war"]=self["webpackChunkvue_star_war"]||[]).push([[892],{8545:function(e,t,a){a.d(t,{O:function(){return r}});var n=a(9028);function r(){const e=(0,n._)();function t(t=1){return e.get("planets",{query:{page:t}})}function a(t){return e.get("planets",{params:{id:t}})}return{getPlanets:t,getPlanetsnById:a}}},3754:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7139),r=a(3396);const i={class:(0,n.C_)(["small","loader"])};function s(e,t,a,n,s,l){return(0,r.wg)(),(0,r.iD)("div",i)}var l={name:"Loader"},c=a(89);const o=(0,c.Z)(l,[["render",s]]);var u=o},6892:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(3396),r=a(7139);const i={class:"information-card"},s={class:"information-card__list"},l={class:"information-card__name"},c=["onClick"];function o(e,t,a,o,u,d){const p=(0,n.up)("Loader"),_=(0,n.up)("PlanetsCard");return(0,n.wg)(),(0,n.iD)("section",i,[e.loading?((0,n.wg)(),(0,n.j4)(p,{key:0})):(0,n.kq)("",!0),(0,n._)("div",s,[(0,n._)("ul",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.planets,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"information-card__info",key:e.name,onClick:e=>d.onclickPlanet(t)},(0,r.zw)(e.name),9,c)))),128))])]),u.sphere?((0,n.wg)(),(0,n.j4)(_,{key:1,sphere:u.sphere,id:u.id},null,8,["sphere","id"])):(0,n.kq)("",!0)])}var u=a(8545);const d={class:"feature-planet__img"},p=["src"],_={class:"feature-planet__info"},h={class:"feature-planet__title"},f={class:"feature-planet__list"},m={class:"feature-info__list"},g={class:"feature-info__list"},w={class:"feature-info__list"};function P(e,t,a,i,s,l){return(0,n.wg)(),(0,n.iD)("div",{class:"feature-planet",onClick:t[0]||(t[0]=t=>e.$router.push({name:"planetsInfo",params:{id:a.id}}))},[(0,n._)("div",d,[(0,n._)("img",{src:l.dataUrl},null,8,p)]),(0,n._)("div",_,[(0,n._)("h2",h,(0,r.zw)(a.sphere.name),1),(0,n._)("ul",f,[(0,n._)("li",m,"Diametr: "+(0,r.zw)(a.sphere.diameter),1),(0,n._)("li",g,"Population: "+(0,r.zw)(a.sphere.population),1),(0,n._)("li",w," Rotation Period: "+(0,r.zw)(a.sphere.rotation_period),1)])])])}var v=a(4454),k=a(323),y=a(6963),C={data(){return{imagePlanet:null}},props:{sphere:{type:Object,required:!0},id:{tupe:Number,required:!0,default:0}},async created(){try{this.imagePlanet=await(0,v.N)().getPlanetImgById(1)}catch(e){this.imagePlanet=y}},watch:{id:{handler(e){(0,v.N)().getPlanetImgById(e+1).then((e=>{this.imagePlanet=e})).catch((()=>{this.imagePlanet=y}))},immediate:!0}},computed:{dataUrl(){return k.M.dataUrl(this.imagePlanet)}}},D=a(89);const I=(0,D.Z)(C,[["render",P]]);var q=I,z=a(3754),Z={data(){return{planets:[],sphere:null,id:0}},components:{Loader:z.Z,PlanetsCard:q},methods:{onclickPlanet(e){this.sphere=this.planets[e],this.id=e}},async created(){try{this.loading=!0;const e=await(0,u.O)().getPlanets();this.loading=!1,this.planets=e.results,this.sphere=e.results[0]}catch(e){}}};const b=(0,D.Z)(Z,[["render",o]]);var j=b}}]);
//# sourceMappingURL=892.28ab1015.js.map