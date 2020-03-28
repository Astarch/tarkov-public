(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["info"],{"0393":function(e,n,t){"use strict";t("0481"),t("4069");var a=t("5530"),i=(t("210b"),t("604c")),s=t("d9bd");n["a"]=i["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])({},i["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),a=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(a)}}})},"07fc":function(e,n,t){"use strict";var a=t("3d14"),i=t.n(a);i.a},"210b":function(e,n,t){},"3d14":function(e,n,t){},"49e2":function(e,n,t){"use strict";var a=t("0789"),i=t("9d65"),s=t("a9ad"),o=t("3206"),l=t("80d2"),r=t("58df"),c=Object(r["a"])(i["a"],s["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(a["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(l["o"])(n))])]})))}})},"8f33":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-expansion-panels",{model:{value:e.panel,callback:function(n){e.panel=n},expression:"panel"}},[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("How to use")]),t("v-expansion-panel-content",[t("ol",[t("li",[e._v(" Go to "),t("kbd",[e._v("Setup Assistent")]),e._v(" and fill in all information. ")]),t("li",[e._v(" Go to "),t("kbd",[e._v("Checklist")]),e._v(" and adjust the item filters. ")]),t("li",[e._v(" Go to "),t("kbd",[e._v("Checklist")]),e._v(" and mark all items you already have. ")]),t("li",[e._v(" Click on "),t("kbd",[e._v("Save to cookie!")]),e._v(" to save your changes in a cookie. Next time you visit the page (with the same browser and cookie) your progress will be restored. ")]),t("li",[e._v("Mark quests and upgrades as done while you progress.")])])])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("FAQ")]),t("v-expansion-panel-content",[t("ol",[e._v(" How can i reset the progress? "),t("ul",[e._v(" Delete you cookies. Eg like this "),t("a",{attrs:{href:"https://support.google.com/chrome/answer/95647",target:"_blank"}},[e._v("https://support.google.com/chrome/answer/95647")]),e._v(". ")])]),t("ol",[e._v(" My progress is gone. How can i restore it? "),t("ul",[e._v("You are f*cked. Start all over.")])]),t("ol",[e._v(" How to report an error/bug? "),t("ul",[e._v("Send a handwritten letter to Santa Clause.")])])])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Disclaimer")]),t("v-expansion-panel-content",[t("p",[e._v("This is a private non-profit project.")]),t("p",[e._v("Do what you do on your own risk.")]),t("p",[e._v(" All of the images are sourced from "),t("a",{attrs:{href:"https://escapefromtarkov.gamepedia.com/"}},[e._v("https://escapefromtarkov.gamepedia.com/")]),e._v(". ")])])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Known Issues")]),t("v-expansion-panel-content",[t("ul",[t("li",[e._v("Quests with multiple parents are a bit buggy to check in the quest tab")])])])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("TODOs")]),t("v-expansion-panel-content",[t("ul",[t("li",{staticClass:"done"},[e._v("Persist options dropdown")]),t("li",{staticClass:"done"},[e._v("Complete quest list")]),t("ul",[t("li",{staticClass:"done"},[e._v("Prapor")]),t("li",{staticClass:"done"},[e._v("Therpist")]),t("li",{staticClass:"done"},[e._v("Skier")]),t("li",{staticClass:"done"},[e._v("Peacekeeper")]),t("li",{staticClass:"done"},[e._v("Ragman")]),t("li",{staticClass:"done"},[e._v("Mechanic")]),t("li",{staticClass:"done"},[e._v("Jaeger")]),t("li",{staticClass:"done"},[e._v("Fence")])]),t("li",{staticClass:"done"},[e._v("Update info page: character sheet")]),t("li",{staticClass:"done"},[e._v("Make prompt and use up items when checking additional quests and upgrades.")]),t("li",{staticClass:"done"},[e._v("Complete hideout list")]),t("li",[e._v("Make selection of items in stock more intuitive")]),t("li",{staticClass:"done"},[e._v("Remove blue borders from clicked items in stock")]),t("li",{staticClass:"done"},[e._v("Make stock less laggy")]),t("li",[e._v(" Make checklist evaluate "),t("span",{staticClass:"done"},[e._v("characters levels and")]),e._v(" money ")]),t("li",[e._v("Make checklist show required characters levels and money")]),t("li",{staticClass:"done"},[e._v("Add Quest compare function (to compare with other players)")]),t("li",{staticClass:"done"},[e._v("Add import/export")])])])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Changelog")]),t("v-expansion-panel-content",[t("ul",[t("li",[e._v("v0.1.6")]),t("ul",[e._v("Rework: Quest management reworked")])]),t("ul",[t("li",[e._v("v0.1.5")]),t("ul",[t("li",[e._v("Content: Jaeger quests added")]),t("li",[e._v("Content: Added money progressbar to checklist")]),t("li",[e._v("Bugfix: Fixed a bug where items where hidden from checklist if required for both a quest and a hideout upgrad.")]),t("li",[e._v("Bugfix: Fixed bug that prevented import from saving changes.")]),t("li",[e._v("Bugfix: Fixed bug that ignored some quests on checklist")])])]),t("ul",[t("li",[e._v("v0.1.4")]),t("ul",[t("li",[e._v("Feature: Setup assistent added")]),t("li",[e._v("Bugfix: Reactivity between tabs fixed")])])]),t("ul",[t("li",[e._v("v0.1.3")]),t("ul",[t("li",[e._v("Content: Ragman Quests added.")]),t("li",[e._v("Content: Added four missing quests (Mechanic)")]),t("li",[e._v("Bugfix: Fixed a bug that sometimes prompt showed up when switching to hideout/quest tab.")]),t("li",[e._v("Bugfix: Fixed a bug that followup quests were determined correclty.")]),t("li",[e._v("Bugfix: Improved performance when switching tabs.")]),t("li",[e._v("Feature: Import/Export added.")]),t("li",[e._v("Feature: Comparing quests with friends now possible.")])])]),t("ul",[t("li",[e._v("v0.1.2")]),t("ul",[t("li",[e._v("Feature: Filter now include look ahead for character levels and skills")]),t("li",[e._v("Content: Fixed minor mistakes in quest chain")]),t("li",[e._v("Bugfix: Checklist reworked, better performance")]),t("li",[e._v("Content: Mechanic Quests added")]),t("li",[e._v("Content: Peacekeeper Quests added")])]),t("li",[e._v("v0.1.1")]),t("ul",[t("li",[e._v("Bugfix: Quests are not shown, if their parent has a different quest giver. (eg. Kind of sabotage)")]),t("li",[e._v("Bugfix: Lookahead in quests and levels are not stored in store/cookie")]),t("li",[e._v("Content: Fence Quest added.")])]),t("li",[e._v("v0.1.0")]),t("ul",[t("li",[e._v("First alpha release")])])])])],1)],1)],1)},i=[],s={name:"Info",data:function(){return{panel:0}},created:function(){}},o=s,l=(t("07fc"),t("2877")),r=t("6544"),c=t.n(r),d=t("a523"),p=t("cd55"),u=t("49e2"),v=t("c865"),h=t("0393"),f=Object(l["a"])(o,a,i,!1,null,null,null);n["default"]=f.exports;c()(f,{VContainer:d["a"],VExpansionPanel:p["a"],VExpansionPanelContent:u["a"],VExpansionPanelHeader:v["a"],VExpansionPanels:h["a"]})},c865:function(e,n,t){"use strict";var a=t("5530"),i=t("0789"),s=t("9d26"),o=t("a9ad"),l=t("3206"),r=t("5607"),c=t("80d2"),d=t("58df"),p=Object(d["a"])(o["a"],Object(l["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n["a"]=p.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(c["o"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])({},this.$listeners,{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(c["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,n,t){"use strict";var a=t("5530"),i=t("4e82"),s=t("3206"),o=t("80d2"),l=t("58df");n["a"]=Object(l["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["o"])(this))}})}}]);
//# sourceMappingURL=info.0fa752b7.js.map