(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["character"],{"49c2":function(t,e,s){"use strict";var a=s("e258"),l=s.n(a);l.a},"8b37":function(t,e,s){},e258:function(t,e,s){},e5a5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Skill")]),s("th",{staticClass:"text-left"},[t._v("Type")]),s("th",{staticClass:"text-left"},[t._v("Level")])])]),s("tbody",t._l(t.skills,(function(e){return s("tr",{key:e.name},[s("td",[s("img",{staticClass:"small",attrs:{src:e.img}}),t._v(" "+t._s(e.name)+" ")]),s("td",[t._v(t._s(e.type))]),s("td",[s("v-text-field",{staticStyle:{height:"45px",width:"40px"},attrs:{dense:"",type:"number","full-width":"",va:""},model:{value:t.levels[e.id],callback:function(s){t.$set(t.levels,e.id,s)},expression:"levels[item.id]"}})],1)])})),0)]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Currency")]),s("th",{staticClass:"text-left"},[t._v("Amount")])])]),s("tbody",t._l(t.currencies,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name)+" ("+t._s(e.symbol)+")")]),s("td",[s("v-text-field",{staticStyle:{height:"45px"},attrs:{dense:"",type:"number","full-width":"",va:""},model:{value:t.money[e.id],callback:function(s){t.$set(t.money,e.id,s)},expression:"money[currency.id]"}})],1)])})),0)]},proxy:!0}])}),s("br"),s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Trader")]),s("th",{staticClass:"text-left"},[t._v("Loyalty")])])]),s("tbody",t._l(t.traders,(function(e){return s("tr",{key:e.id},[s("td",[s("img",{staticClass:"small",attrs:{src:e.img}}),t._v(" "+t._s(e.name)+" ")]),s("td",[s("v-text-field",{staticStyle:{height:"45px"},attrs:{dense:"",type:"number","full-width":"",va:""},model:{value:t.loyalties[e.id],callback:function(s){t.$set(t.loyalties,e.id,s)},expression:"loyalties[trader.id]"}})],1)])})),0)]},proxy:!0}])})],1)],1)],1)},l=[],i=(s("4160"),s("b64b"),s("159b"),{name:"Character",data:function(){return{skills:[],levels:{},currencies:[],money:{},traders:[],loyalties:{}}},methods:{increase:function(t){console.log("id"),this.$set(this.levels,t,parseInt(this.levels[t])+1),console.log(this.levels)}},watch:{levels:{handler:function(t){this.$store.commit("setLevels",t)},deep:!0},money:{handler:function(t){console.log("watcher"),this.$store.commit("setMoney",t),console.log(this.$store.state.money)},deep:!0},loyalties:{handler:function(t){console.log("watcher"),this.$store.commit("setLoyalties",t),console.log(this.$store.state.loyalties)},deep:!0}},created:function(){var t=this;this.skills=this.staticData.skills;var e=Object.keys(this.$store.state.levels).length>0?this.$store.state.levels:{level:0,attention:0,charisma:0,endurance:0,health:0,immunity:0,intellect:0,memory:0,metabolism:0,perception:0,strength:0,stress_resistance:0,vitality:0};Object.keys(e).length>=0&&this.skills.forEach((function(s){return t.$set(t.levels,s.id,e[s.id])})),this.currencies=this.staticData.currencies,this.traders=this.staticData.traders;var s=Object.keys(this.$store.state.money).length>0?this.$store.state.money:{rouble:0,euro:0,dollar:0,bitcoin:0,gp_coin:0};Object.keys(s).length>=0&&this.currencies.forEach((function(e){return t.$set(t.money,e.id,s[e.id])}));var a=Object.keys(this.$store.state.loyalties).length>0?this.$store.state.loyalties:{prapor:0,therapist:0,fence:0,skier:0,peacemaker:0,mechanic:0,ragman:0,jaeger:0};Object.keys(a).length>=0&&this.traders.forEach((function(e){return t.$set(t.loyalties,e.id,a[e.id])}))}}),n=i,r=(s("49c2"),s("2877")),o=s("6544"),c=s.n(o),d=s("62ad"),h=s("a523"),u=s("0fd9"),m=(s("a9e3"),s("5530")),f=(s("8b37"),s("80d2")),v=s("7560"),y=s("58df"),p=Object(y["a"])(v["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(m["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(f["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),b=s("8654"),g=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=g.exports;c()(g,{VCol:d["a"],VContainer:h["a"],VRow:u["a"],VSimpleTable:p,VTextField:b["a"]})}}]);
//# sourceMappingURL=character.79419cb6.js.map