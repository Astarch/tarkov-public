(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checklist"],{"0bc6":function(t,e,i){},"13a9":function(t,e,i){"use strict";var s=i("ff3e"),a=i.n(s);a.a},"9e29":function(t,e,i){},b087:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-expansion-panels",{attrs:{accordion:"",hover:"",tile:""},model:{value:t.showOptions,callback:function(e){t.showOptions=e},expression:"showOptions"}},[i("v-expansion-panel",[i("v-expansion-panel-header",[t._v("Options "+t._s(t.$store.state.dirty))]),i("v-expansion-panel-content",[i("v-row",{attrs:{dense:""}},[i("v-col",{attrs:{cols:"4"}},[i("div",{staticClass:"header"},[t._v("Show items for:")]),i("v-checkbox",{attrs:{dense:"",label:"Quests"},model:{value:t.showQuestPickups,callback:function(e){t.showQuestPickups=e},expression:"showQuestPickups"}}),i("v-checkbox",{attrs:{dense:"",label:"Hideout upgrades"},model:{value:t.showHideoutPickups,callback:function(e){t.showHideoutPickups=e},expression:"showHideoutPickups"}}),i("v-checkbox",{attrs:{dense:"",label:"Cramp items"},model:{value:t.cramped,callback:function(e){t.cramped=e},expression:"cramped"}}),i("v-subheader",[t._v("Look ahead in quest chain")]),i("v-slider",{attrs:{"tick-labels":t.ticksLabels,max:10,min:0,step:"1",ticks:"always","tick-size":"4"},model:{value:t.lookAheadQuest,callback:function(e){t.lookAheadQuest=e},expression:"lookAheadQuest"}}),i("v-subheader",[t._v("Look ahead in hideout chain")]),i("v-slider",{attrs:{"tick-labels":t.ticksLabels,max:3,min:0,step:"1",ticks:"always","tick-size":"4"},model:{value:t.lookAheadHideout,callback:function(e){t.lookAheadHideout=e},expression:"lookAheadHideout"}}),i("v-subheader",[t._v("Look ahead in skill/character level")]),i("v-slider",{attrs:{"tick-labels":t.ticksLabels,max:10,min:0,step:"1",ticks:"always","tick-size":"4"},model:{value:t.lookAheadLevel,callback:function(e){t.lookAheadLevel=e},expression:"lookAheadLevel"}}),i("br"),i("div",{staticClass:"header"},[t._v("Filter items:")]),i("v-checkbox",{attrs:{dense:"",disabled:!t.showQuestPickups,label:"Show Quest items"},model:{value:t.showQuestItems,callback:function(e){t.showQuestItems=e},expression:"showQuestItems"}}),i("v-checkbox",{attrs:{dense:"",label:"Show only 'Found in raid'"},model:{value:t.hideNonFoundInRaid,callback:function(e){t.hideNonFoundInRaid=e},expression:"hideNonFoundInRaid"}}),i("v-text-field",{attrs:{clearable:!0,label:"Quest"},model:{value:t.searchQuest,callback:function(e){t.searchQuest=e},expression:"searchQuest"}}),i("v-text-field",{attrs:{clearable:!0,label:"Hideout"},model:{value:t.searchHideout,callback:function(e){t.searchHideout=e},expression:"searchHideout"}}),i("v-text-field",{attrs:{clearable:"",label:"Item"},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1),i("v-col",{attrs:{cols:"4"}},[i("div",{staticClass:"header"},[t._v("Show suggestions:")]),i("v-checkbox",{attrs:{dense:"",label:"Hideout upgrade"},model:{value:t.showHideout,callback:function(e){t.showHideout=e},expression:"showHideout"}}),i("v-checkbox",{attrs:{dense:"",label:"Quests"},model:{value:t.showQuests,callback:function(e){t.showQuests=e},expression:"showQuests"}}),i("v-checkbox",{staticClass:"indent",attrs:{disabled:!t.showQuests,dense:"",label:"Non-pickup quests"},model:{value:t.showNonPickupQuests,callback:function(e){t.showNonPickupQuests=e},expression:"showNonPickupQuests"}})],1),t.fulfilledQuests.length>0||t.fulfilledHideout.length>0?i("v-col",{attrs:{cols:"4"}},[i("div",{staticClass:"header"},[t._v("You might have all requirements for:")]),t._l(t.fulfilledQuests,(function(e){return i("div",{key:e.id},[t._v(t._s(e.name))])})),t._l(t.fulfilledHideout,(function(e){return i("div",{key:e.id},[t._v(t._s(e.name))])}))],2):t._e()],1)],1)],1)],1),t._l(t.requirements.money,(function(e,s){return i("v-progress-linear",{key:"money_"+s,staticClass:"v-spaced",attrs:{color:"#9a8866",height:"30",value:t.$store.state.money[s]/t.requirements.money[s].amount*100,striped:""}},[t._v(t._s(s)+": "+t._s(t.$store.state.money[s]?t.$store.state.money[s]:0)+"/"+t._s(t.requirements.money[s].amount))])})),t.cramped?i("div",t._l(t.requirements.items,(function(e,s){return i("span",{key:s.id},[t._l(e.raid&&e.raid.amount?e.raid.amount:0,(function(a){return i("ItemBox",{key:s.id+"r"+a,attrs:{item:s,value:e,raid:!0,cramped:t.cramped,checked:!!t.stocked[e.item.id]&&a<=t.stocked[e.item.id].raid,quests:e.raid.quests,hideout:e.raid.hideout},on:{itemToggled:t.itemToggled}})})),t._l(e.nonraid&&e.nonraid.amount?e.nonraid.amount:0,(function(a){return i("ItemBox",{key:s.id+"n"+a,attrs:{item:s,value:e,raid:!1,cramped:t.cramped,checked:!!t.stocked[e.item.id]&&a<=t.stocked[e.item.id].nonraid,quests:e.nonraid.quests,hideout:e.nonraid.hideout},on:{itemToggled:t.itemToggled}})}))],2)})),0):t._l(t.requirements.items,(function(e,s){return i("v-row",{key:s.id,attrs:{dense:""}},[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"header"},[t._v(" "+t._s(e.item.name)+" "),i("span",{staticClass:"italic"},[t._v("("+t._s(t.stocked[e.item.id]&&t.stocked[e.item.id].raid?t.stocked[e.item.id].raid:0+t.stocked[e.item.id]&&t.stocked[e.item.id].nonraid?t.stocked[e.item.id].nonraid:0)+"/"+t._s(e.raid&&e.raid.amount?e.raid.amount:0+e.nonraid&&e.nonraid.amount?e.nonraid.amount:0)+")")]),e.item.url?i("a",{attrs:{href:e.item.url,target:"_blank"}},[i("v-icon",[t._v("link")])],1):t._e()]),t._l(e.raid&&e.raid.amount?e.raid.amount:0,(function(a){return i("ItemBox",{key:s.id+"r"+a,attrs:{item:s,value:e,raid:!0,checked:!!t.stocked[e.item.id]&&a<=t.stocked[e.item.id].raid,quests:e.raid.quests,hideout:e.raid.hideout},on:{itemToggled:t.itemToggled}})})),t._l(e.nonraid&&e.nonraid.amount?e.nonraid.amount:0,(function(a){return i("ItemBox",{key:s.id+"n"+a,attrs:{item:s,value:e,raid:!1,checked:!!t.stocked[e.item.id]&&a<=t.stocked[e.item.id].nonraid,quests:e.nonraid.quests,hideout:e.nonraid.hideout},on:{itemToggled:t.itemToggled}})}))],2)],1)}))],2)},a=[],n=(i("99af"),i("a623"),i("4de4"),i("4160"),i("caad"),i("c975"),i("d81d"),i("13d5"),i("45fc"),i("b0c0"),i("b64b"),i("d3b7"),i("6062"),i("2532"),i("3ca3"),i("159b"),i("ddb0"),i("2909")),o=i("5530"),r=i("3eaa"),u={name:"Stocked",components:{ItemBox:r["a"]},data:function(){return{showOptions:0,stocked:{},fulfilledQuests:[],fulfilledHideout:[],showNonPickupQuests:!1,showQuestItems:!1,showQuestPickups:!0,showHideoutPickups:!0,hideNonFoundInRaid:!1,showQuests:!0,showHideout:!0,searchQuest:"",searchHideout:"",searchItem:"",cramped:!1,ticksLabels:["0","+1","+2","+3","+4","+5","+6","+7","+8","+9","all"],lookAheadQuest:3,lookAheadHideout:1,lookAheadLevel:3}},computed:{money:function(){return this.sta},requirements:function(){var t=this,e=this.showQuestPickups?this.staticData.getQuestsFiltered(this.$store.state.doneQuests,this.lookAheadQuest,this.lookAheadLevel,Object(o["a"])({},this.$store.state.levels,{},this.$store.state.money,{},this.$store.state.loyalties)):[];this.searchQuest&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.searchQuest.toLowerCase())})));var i=this.showHideoutPickups?this.staticData.getHideoutFiltered(this.$store.state.doneHideout,this.lookAheadHideout,this.lookAheadLevel,Object(o["a"])({},this.$store.state.levels,{},this.$store.state.money,{},this.$store.state.loyalties)):[];this.searchHideout&&(i=i.filter((function(e){return e.name.toLowerCase().includes(t.searchHideout.toLowerCase())})));var s=this.staticData.getRequirementsForQuests(e.map((function(t){return t.id}))),a=s.items,n=this.staticData.getRequiredItemsForHideout(i.map((function(t){return t.id}))),r=Object(o["a"])({},a,{},n),u=Object.keys(a),c=Object.keys(n);if(u.filter((function(t){return-1!==c.indexOf(t)})).forEach((function(e){r[e]=t.merge(a[e],n[e])})),this.showQuestItems||Object.keys(r).forEach((function(t){r[t].item.quest&&delete r[t]})),this.hideNonFoundInRaid&&Object.keys(r).forEach((function(t){r[t].raid?r[t].nonraid&&delete r[t].nonraid:delete r[t]})),this.searchItem){var l=this;Object.keys(r).forEach((function(t){t.toLowerCase().includes(l.searchItem.toLowerCase())||delete r[t]}))}return{items:r,money:s.money,loyalties:s.loyalties}},requiredItems2:function(){var t=this,e=this,i=this.showQuestPickups?this.$store.state.doneQuests.map((function(t){return Object(o["a"])({},t)})):this.staticData.quests.filter((function(t){return!t.items.every((function(t){return t.quest}))})).map((function(t){return t.id}));if(this.lookAheadQuest<9){for(var s=this.staticData.getQuestTree(),a=Object.keys(s).map((function(t){return s[t].children})),n=[].concat.apply([],a),r=0;r<=this.lookAheadQuest;r++)n.forEach((function(e){e.next&&e.next.forEach((function(e){var i=t.staticData.getQuest(e);i&&-1===n.indexOf(i)&&n.push(i)}))}));this.staticData.quests.filter((function(t){return-1===n.indexOf(t)})).map((function(t){return t.id})).forEach((function(t){-1===i.indexOf(t)&&i.push(t)}))}if(this.lookAheadLevel<9){var u=this.staticData.quests.filter((function(t){return-1===i.indexOf(t.id)})),c=u.filter((function(e){return!e.req||Object.keys(e.req).every((function(i){if(t.$store.state.levels[i]){var s=t.$store.state.levels[i]+t.lookAheadLevel>=e.req[i];return s}return t.lookAheadLevel>=e.req[i]}))})),l=c.map((function(t){return t.id}));u.filter((function(t){return-1===l.indexOf(t.id)})).forEach((function(t){-1===i.indexOf(t.id)&&i.push(t.id)}))}var h=this.showHideoutPickups?this.$store.state.doneHideout:this.staticData.hideout.map((function(t){return t.id})),d=this.staticData.getAllRequiredItems(i,h);return this.showQuestItems||Object.keys(d).forEach((function(t){d[t].item.quest&&delete d[t]})),this.hideNonFoundInRaid&&Object.keys(d).forEach((function(t){d[t].raid?d[t].nonraid&&delete d[t].nonraid:delete d[t]})),this.searchHideout&&Object.keys(d).forEach((function(t){(d[t].nonraid&&!d[t].nonraid.hideout.some((function(t){return e.$options.filters.resolveHideout(t).name.toLowerCase().includes(e.searchHideout.toLowerCase())}))||d[t].raid&&!d[t].raid.hideout.some((function(t){return e.$options.filters.resolveHideout(t).name.toLowerCase().includes(e.searchHideout.toLowerCase())})))&&delete d[t]})),this.searchQuest&&Object.keys(d).forEach((function(t){(d[t].nonraid&&!d[t].nonraid.quests.some((function(t){return e.$options.filters.resolveQuest(t).name.toLowerCase().includes(e.searchQuest.toLowerCase())}))||d[t].raid&&!d[t].raid.quests.some((function(t){return e.$options.filters.resolveQuest(t).name.toLowerCase().includes(e.searchQuest.toLowerCase())})))&&delete d[t]})),this.searchItem&&Object.keys(d).forEach((function(t){t.toLowerCase().includes(e.searchItem.toLowerCase())||delete d[t]})),d}},methods:{merge:function(t,e){var i={};return i.item=t.item,t.raid&&e.raid?(i.raid={},i.raid.amount=t.raid.amount+e.raid.amount,i.quests=Object(n["a"])(new Set([].concat(t.raid.quests).concat(t.raid.quests))),i.hideout=Object(n["a"])(new Set([].concat(t.raid.hideout).concat(t.raid.hideout)))):i.raid=t.raid?t.raid:e.raid,t.nonraid&&e.nonraid?(i.nonraid={},i.nonraid.amount=t.nonraid.amount+e.nonraid.amount,i.quests=Object(n["a"])(new Set([].concat(t.nonraid.quests).concat(t.nonraid.quests))),i.hideout=Object(n["a"])(new Set([].concat(t.nonraid.hideout).concat(t.nonraid.hideout)))):i.nonraid=t.nonraid?t.nonraid:e.nonraid,i},itemToggled:function(t){t.item&&(this.stocked[t.item]||this.$set(this.stocked,t.item,{raid:0,nonraid:0}),t.raid?this.$set(this.stocked[t.item],"raid",this.stocked[t.item].raid+(t.checked?-1:1)):this.$set(this.stocked[t.item],"nonraid",this.stocked[t.item].nonraid+(t.checked?-1:1)))},checkObjectives:function(t){var e=this,i=this.$store.state.doneQuests,s=this.$store.state.doneHideout;if(this.showQuests){var a=this.staticData.quests.filter((function(t){return-1===i.indexOf(t.id)})),n=a.filter((function(i){if(!e.showNonPickupQuests&&(!i.items||0==i.items.length))return!1;var s=i.items.map((function(e){var i=!!t[e.id]&&(!!t[e.id][e.raid?"raid":"nonraid"]&&t[e.id][e.raid?"raid":"nonraid"]>=e.amount);return i})).reduce((function(t,e){return t&&e}),!0);return s})),o=n;this.fulfilledQuests=o}else this.fulfilledQuests=[];this.showHideout?this.fulfilledHideout=this.staticData.hideout.filter((function(t){return-1===s.indexOf(t.id)})).filter((function(e){return e.items.map((function(e){var i=!!t[e.id]&&(!!t[e.id][e.raid?"raid":"nonraid"]&&t[e.id][e.raid?"raid":"nonraid"]>=e.amount);return i})).reduce((function(t,e){return t&&e}),!0)})):this.fulfilledHideout=[]}},watch:{stocked:{handler:function(t){this.checkObjectives(t),this.$store.commit("setStocked",t)},deep:!0},showHideout:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowHideout",t)},showQuests:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowQuests",t)},showNonPickupQuests:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowNonPickupQuests",t)},showQuestItems:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowQuestItems",t)},showQuestPickups:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowQuestPickups",t)},showHideoutPickups:function(t){this.checkObjectives(this.stocked),this.$store.commit("setShowHideoutPickups",t)},hideNonFoundInRaid:function(t){this.checkObjectives(this.stocked),this.$store.commit("setHideNonFoundInRaid",t)},lookAheadQuest:function(t){this.checkObjectives(this.stocked),this.$store.commit("setLookAheadQuest",t)},lookAheadHideout:function(t){this.checkObjectives(this.stocked),this.$store.commit("setLookAheadHideout",t)},lookAheadLevel:function(t){this.checkObjectives(this.stocked),this.$store.commit("setLookAheadLevel",t)},showOptions:function(t){this.$store.commit("setShowOptionsChecklist",t)}},created:function(){this.stocked=this.$store.state.stocked;var t=this.$store.state.config,e=this;Object.keys(t).forEach((function(i){e.$set(e,i,t[i])})),this.showOptions=this.$store.state.showOptionsChecklist}},c=u,l=(i("13a9"),i("2877")),h=i("6544"),d=i.n(h),m=i("ac7c"),v=i("62ad"),f=i("a523"),k=i("cd55"),p=i("49e2"),b=i("c865"),w=i("0393"),y=i("132d"),g=i("8e36"),x=i("0fd9"),C=(i("a9e3"),i("b680"),i("25f0"),i("498a"),i("ade3")),$=(i("9e29"),i("c37a")),O=i("0789"),_=i("58df"),Q=i("297c"),S=i("a293"),L=i("80d2"),V=i("d9bd"),j=Object(_["a"])($["a"],Q["a"]).extend({name:"v-slider",directives:{ClickOutside:S["a"]},mixins:[Q["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:function(t){return"boolean"===typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"===typeof t||"always"===t}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,noClick:!1}},computed:{classes:function(){return Object(o["a"])({},$["a"].options.computed.classes.call(this),{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(t){t=isNaN(t)?this.minValue:t;var e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition:function(){return this.keyPressed>=2?"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},inputWidth:function(){var t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return t},trackFillStyles:function(){var t,e=this.vertical?"bottom":"left",i=this.vertical?"top":"right",s=this.vertical?"height":"width",a=this.$vuetify.rtl?"auto":"0",n=this.$vuetify.rtl?"0":"auto",o=this.disabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return t={transition:this.trackTransition},Object(C["a"])(t,e,a),Object(C["a"])(t,i,n),Object(C["a"])(t,s,o),t},trackStyles:function(){var t,e=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",i=this.vertical?"height":"width",s="0px",a=this.disabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return t={transition:this.trackTransition},Object(C["a"])(t,e,s),Object(C["a"])(t,i,a),t},showTicks:function(){return this.tickLabels.length>0||!(this.disabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!this.disabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.disabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.disabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(t){var e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max:function(t){var e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler:function(t){this.internalValue=t}}},beforeMount:function(){this.internalValue=this.value},mounted:function(){this.app=document.querySelector("[data-app]")||Object(V["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider:function(){return this.$createElement("div",{class:Object(o["a"])({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.disabled,"v-slider--readonly":this.readonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:Object(o["a"])({value:this.internalValue,id:this.computedId,disabled:this.disabled,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=parseFloat(this.tickSize),i=Object(L["h"])(this.numTicks+1),s=this.vertical?"bottom":"left",a=this.vertical?"right":"top";this.vertical&&i.reverse();var n=i.map((function(i){var n,o=t.$vuetify.rtl?t.maxValue-i:i,r=[];t.tickLabels[o]&&r.push(t.$createElement("div",{staticClass:"v-slider__tick-label"},t.tickLabels[o]));var u=i*(100/t.numTicks),c=t.$vuetify.rtl?100-t.inputWidth<u:u<t.inputWidth;return t.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":c},style:(n={width:"".concat(e,"px"),height:"".concat(e,"px")},Object(C["a"])(n,s,"calc(".concat(u,"% - ").concat(e/2,"px)")),Object(C["a"])(n,a,"calc(50% - ".concat(e/2,"px)")),n)},r)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},n)},genThumbContainer:function(t,e,i,s,a,n,r){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"thumb",c=[this.genThumb()],l=this.genThumbLabelContent(t);return this.showThumbLabel&&c.push(this.genThumbLabel(l)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:u,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:Object(o["a"])({role:"slider",tabindex:this.disabled||this.readonly?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.readonly),"aria-orientation":this.vertical?"vertical":"horizontal"},this.$attrs),on:{focus:n,blur:r,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:a,mousedown:a}}),c)},genThumbLabelContent:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel:function(t){var e=Object(L["g"])(this.thumbSize),i=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(O["d"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(t){var e=this.vertical?"top":"left",i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,Object(C["a"])({transition:this.trackTransition},e,"".concat(i,"%"))},onThumbMouseDown:function(t){t.preventDefault(),this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;var e=!L["w"]||{passive:!0,capture:!0},i=!!L["w"]&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,i),Object(L["a"])(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,i),Object(L["a"])(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(t){t.stopPropagation(),this.keyPressed=0;var e=!!L["w"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("end",this.internalValue),Object(L["j"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(t){var e=this.parseMouseMove(t),i=e.value;this.internalValue=i},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t,this.internalValue);null!=e&&(this.internalValue=e,this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){if(this.noClick)this.noClick=!1;else{var e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)}},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove:function(t){var e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",a=this.$refs.track.getBoundingClientRect(),n=a[e],o=a[i],r="touches"in t?t.touches[0][s]:t[s],u=Math.min(Math.max((r-n)/o,0),1)||0;this.vertical&&(u=1-u),this.$vuetify.rtl&&(u=1-u);var c=r>=n&&r<=n+o,l=parseFloat(this.min)+u*(this.maxValue-this.minValue);return{value:l,isInsideTrack:c}},parseKeyDown:function(t,e){if(!this.disabled){var i=L["s"].pageup,s=L["s"].pagedown,a=L["s"].end,n=L["s"].home,o=L["s"].left,r=L["s"].right,u=L["s"].down,c=L["s"].up;if([i,s,a,n,o,r,u,c].includes(t.keyCode)){t.preventDefault();var l=this.stepNumeric||1,h=(this.maxValue-this.minValue)/l;if([o,r,u,c].includes(t.keyCode)){this.keyPressed+=1;var d=this.$vuetify.rtl?[o,c]:[r,c],m=d.includes(t.keyCode)?1:-1,v=t.shiftKey?3:t.ctrlKey?2:1;e+=m*l*v}else if(t.keyCode===n)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{var f=t.keyCode===s?1:-1;e-=f*l*(h>100?h/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(i))}}}),H=i("e0c7"),T=i("8654"),q=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=q.exports;d()(q,{VCheckbox:m["a"],VCol:v["a"],VContainer:f["a"],VExpansionPanel:k["a"],VExpansionPanelContent:p["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:w["a"],VIcon:y["a"],VProgressLinear:g["a"],VRow:x["a"],VSlider:j,VSubheader:H["a"],VTextField:T["a"]})},e0c7:function(t,e,i){"use strict";var s=i("5530"),a=(i("0bc6"),i("7560")),n=i("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(s["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ff3e:function(t,e,i){}}]);
//# sourceMappingURL=checklist.952ebcb1.js.map