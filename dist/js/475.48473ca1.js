"use strict";(self["webpackChunkvue_star_war"]=self["webpackChunkvue_star_war"]||[]).push([[475],{8545:function(t,e,a){a.d(e,{O:function(){return i}});var n=a(9028);function i(){const t=(0,n._)();function e(e=1){return t.get("planets",{query:{page:e}})}function a(e){return t.get("planets",{params:{id:e}})}return{getPlanets:e,getPlanetsnById:a}}},1475:function(t,e,a){a.r(e),a.d(e,{default:function(){return et}});var n=a(3396),i=a(4128);const l={class:"wrapper"},s={class:"wrapper__header"},o={class:"wrapper__right"},r={key:1,class:"main-img",src:i};function c(t,e,a,i,c,h){const d=(0,n.up)("Navigation"),p=(0,n.up)("SwitchTheme"),u=(0,n.up)("SwitchLang"),A=(0,n.up)("PlanetShow"),g=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",s,[(0,n.Wm)(d,{onDisplayPlanetShow:e[0]||(e[0]=t=>c.displayPlanet=t)}),(0,n._)("div",o,[(0,n.Wm)(p),(0,n.Wm)(u)])]),this.displayPlanet?((0,n.wg)(),(0,n.j4)(A,{key:0,planet:c.planet},null,8,["planet"])):((0,n.wg)(),(0,n.iD)("img",r)),(0,n.Wm)(g,{onPlanetInf:e[1]||(e[1]=t=>c.planet=t)})])}var h=a(7139);const d={class:"planet"},p={class:"planet__img"},u=["src"],A={class:"planet__info"},g={class:"planet__title"},m={class:"planet-list"},w={class:"planet-info__list"},_={class:"planet-info__list"},S={class:"planet-info__list"};function P(t,e,a,i,l,s){return(0,n.wg)(),(0,n.iD)("section",d,[(0,n._)("div",p,[(0,n._)("img",{src:s.dataUrl},null,8,u)]),(0,n._)("div",A,[(0,n._)("h2",g,(0,h.zw)(l.planetShow.name),1),(0,n._)("ul",m,[(0,n._)("li",w," Population: "+(0,h.zw)(l.planetShow.population),1),(0,n._)("li",_," Rotation period: "+(0,h.zw)(l.planetShow.rotation_period),1),(0,n._)("li",S,"Diameter: "+(0,h.zw)(l.planetShow.diameter),1)])])])}var f=a(8545),k=a(4454),U=a(323),v=a(6963),B={data(){return{planetShow:[],homeplanet:[],imagePlanets:null,id:null}},props:{planet:String},async created(){try{this.imagePlanets=await(0,k.N)().getPlanetImgById(1)}catch{this.imagePlanets=v}try{const t=await(0,f.O)().getPlanets();this.planetShow=t.results[0]}catch{this.planetShow={name:"Planet not found",population:"-",rotation_period:"-",diameter:"-"}}this.interval=setInterval((()=>{this.rondomPlanet()}),9e3)},methods:{async rondomPlanet(){const t=await(0,f.O)().getPlanets();this.id=this.id<=9?this.id+=1:10==this.id?this.id=1:"Error";try{this.id<11&&(this.imagePlanets=await(0,k.N)().getPlanetImgById(this.id),this.planetShow=t.results[this.id-1])}catch{this.imagePlanets=v,this.planetShow=t.results[this.id-1]}}},watch:{planet:async function(){clearTimeout(this.interval),this.id=parseInt(this.planet.match(/\d+/));const t=await(0,f.O)().getPlanets();try{this.imagePlanets=await(0,k.N)().getPlanetImgById(this.id),this.planetShow=t.results[this.id-1]}catch{this.imagePlanets=v,this.planetShow=idxImg<10?t.results[this.id-1]:{name:"Planet not found",population:"-",rotation_period:"-",diameter:"-"}}}},computed:{dataUrl(){return U.M.dataUrl(this.imagePlanets)}}},y=a(89);const C=(0,y.Z)(B,[["render",P]]);var I=C;const R={class:"header"},M=(0,n.Uk)("StarDB"),V={class:"header__list"};function j(t,e,a,i,l,s){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",R,[(0,n.Wm)(o,{to:"/",class:"header__title",onClick:e[0]||(e[0]=e=>t.$emit("displayPlanetShow",!this.displayPlanet))},{default:(0,n.w5)((()=>[M])),_:1}),(0,n._)("ul",V,[(0,n._)("li",null,[(0,n.Wm)(o,{to:"/people",class:"header__people",onClick:e[1]||(e[1]=e=>t.$emit("displayPlanetShow",this.displayPlanet))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,h.zw)(t.$t("people")),1)])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(o,{to:"/planets",class:"header__planets",onClick:e[2]||(e[2]=e=>t.$emit("displayPlanetShow",this.displayPlanet))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,h.zw)(t.$t("planets")),1)])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(o,{to:"/starships",class:"header__starships",onClick:e[3]||(e[3]=e=>t.$emit("displayPlanetShow",this.displayPlanet))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,h.zw)(t.$t("starships")),1)])),_:1})])])])}var D={data(){return{displayPlanet:1}}};const N=(0,y.Z)(D,[["render",j]]);var Q=N,W=a(158),E=a(1554);const X=(0,n._)("img",{class:"header-switch__moon",src:W},null,-1),z=(0,n._)("img",{class:"header-switch__sun",src:E},null,-1);function q(t,e,a,i,l,s){return(0,n.wg)(),(0,n.iD)("div",{class:"header-switch",onClick:e[0]||(e[0]=t=>s.onclickSwitch())},[X,z,(0,n._)("div",{class:(0,h.C_)(["header-switch__circle",{"active-switch":l.darkMode}])},null,2)])}var H={data(){return{darkMode:!1}},methods:{onclickSwitch(){this.darkMode=!this.darkMode}},mounted(){let t=document.documentElement,e=localStorage.getItem("theme");"dark"===e?(t.setAttribute("theme","dark"),this.darkMode=!0):(t.setAttribute("theme","light"),this.darkMode=!1)},watch:{darkMode:function(){let t=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),t.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),t.setAttribute("theme","light"))}}};const O=(0,y.Z)(H,[["render",q]]);var b=O,x=a(9242);const T=(0,n._)("option",{value:"en"},"English",-1),K=(0,n._)("option",{value:"ru"},"Русский",-1),Y=(0,n._)("option",{value:"zh"},"中国人",-1),Z=[T,K,Y];function L(t,e,a,i,l,s){return(0,n.wg)(),(0,n.iD)("nav",null,[(0,n._)("div",null,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.lang=e),onChange:e[1]||(e[1]=t=>s.handleChange(t))},Z,544),[[x.bM,t.lang]])])])}var F={data:function(){const t=localStorage.getItem("lang")||"en";return{lang:t}},methods:{handleChange(t){localStorage.setItem("lang",t.target.value),this.$i18n.locale=this.lang}},mounted(){this.$i18n.locale=this.lang}};const G=(0,y.Z)(F,[["render",L]]);var J=G,$={components:{PlanetShow:I,Navigation:Q,SwitchTheme:b,SwitchLang:J},data(){return{planet:null,displayPlanet:0}},watch:{displayPlanet:function(){sessionStorage.setItem("switch",this.displayPlanet)}},mounted(){this.displayPlanet=Boolean(Number(sessionStorage.getItem("switch")))}};const tt=(0,y.Z)($,[["render",c]]);var et=tt},4128:function(t,e,a){t.exports=a.p+"img/Frame1.d6bddf0c.png"},158:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgBlVM9aFNRFP7OfYkg/hB0CWKSZvBnUkHwhw7tIjgWcbRJJkEU8kIXwaERujj5giJYpcTUxcUfBAcRqiBCQQcdBF3axEp10UeHqNjc43dficRQat6Bx3n3/Hz3nO+cK+iTbPnMCTXmkijCVtAYw4Bi/gHxCwHEeyoqI4B8Rwz5C5Tzx28wuQzVJ+6sVh8ihkRA2UqhrDDnCHRZYW86m2dMMxZQ2i8NqcoEQWZbQb2qmtjqHBayEgsoic6oABlZ7Uw6gxq8jzy6ejgWkIEpUr9pXp9diCppb/pIFVqR4VhAChxgWy+7huXp6TbVMwMppvxSamAgfjtYR9hr9DqdKarUNuhkHKDQMqnXuHDt7luoXCF3PndrIDAj0K8COdjvaNXqFxV6h21XM+XCjJvuRkASbTP5WIHkw6Ae9gdk/VIVrkXRJtdkDug84rZ+M5L4rdZm1HjHWfkeY2HcBqe2w/rr3eR2i8TnoXjOhDGB90Ak+UIhr2C8e659DmyvuOBcuXBfRU5a1WNLtca7jVrYXSkcEStpiNnC6k6TllO8pBgB7T9f2NlOymsezC/IyJegvoj/yNoQhC9Bgk+1ekW6jiGSaaFz7pecVK3g9tLVxud+gF1+cdgDppg4ysne4lDORmT3Bq2B2aojn2A/yMM8S5/nnv1URVpEjjLsEL/QPXDyF3RzZb2ycxfG80iYCZLIZ6L7GLaZepnAH7gwjz2LmcW+Cf8BjejFkaOqJxUAAAAASUVORK5CYII="},1554:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJWSURBVHgBjVTNaxNREJ95m0qNYPWmtIk9eSwNeohU7U0QUfBSVMju1kv1IHn1Ui+a7c2D0I0gqGDdVA9qQaiC/0AUghcXjx6kZi14DEUMCrvjPNOVZD/SHRb2vZn5/ebjzXsAGaRQNe4VpfEoi28uixMiHAUizOIr+jecxUyKXzdFD+PyynQi4bg0leF9Ueq1eFRcEihuR/XKV4ORT0du6qVQh4MOpgVANSDfaNefr8EQKciKiSCeMsVy23asUD/QQ2UoSHMT9mgf/oEWK5eAxAISzXIjVfAmQbDq2c8c9HMfSaN5z3acfo7URnM5FptrBPSaz+OdJmgvERxnnRHNalfCsBwK8Lp333k4GMiU3JYVtl1m24soViRGQXGVf06UTAlnZvPvLQhaSMLminKeB5YOq40PcGfLdlwgOMW6dUiRgGBDIDxW60PSnBwBuMul5gnpC2cYdACJTdRlQ2cH4/NB/EojFEj5sLpRgAOo9szBn5Zr242lKADVaaK4yMsnSYQMPcleTbXeVBUBXPgfLAkQoFB9Oles6rE+FRf1Kgec4+VqEnbI2PSGnG/wKwHU9APsooA5LuvMsLHRogo1MvmZY3+2Vpz1/eXSN454mgmuMfl5/n/nR+KWV288mKjqU2Mnps5utz67qRn27jFa3KPYDYgHNnlWia8eWW17bTmW4cSNyiwK4SgHz27U+8Hq4dhXnh792XLDKYDtluuOlUsqIetgubTRabk/YlEney9OTPhZe1OQxsskWxQzcMo7I5AoPJf5JH0Uk+nFZrqv3O3fWTz/AuCP20CPlfltAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=475.48473ca1.js.map