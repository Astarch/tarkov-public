(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hideout~quests"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"169a":function(e,t,i){"use strict";i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),s=i("ade3"),a=(i("368e"),i("7db0"),i("7560")),o=a["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:a["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(e){return!e.isComment&&" "!==e.text}))}}),r=i("4ad4"),c=i("b848"),d=i("75eb"),l=i("e707"),h=i("2b0e"),u=h["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(e){e?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(e){var t=this;this.originalValue=e,setTimeout((function(){t.isActive=!1}))}}}),v=i("21be"),p=i("f2e7"),f=i("a293"),m=i("58df"),g=i("d9bd"),b=i("80d2"),O=Object(m["a"])(r["a"],c["a"],d["a"],l["a"],u,v["a"],p["a"]);t["a"]=O.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===b["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');i.length&&i[0].focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(o,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(e.style={maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,i){},6062:function(e,t,i){"use strict";var n=i("6d61"),s=i("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},"615b":function(e,t,i){},"841c":function(e,t,i){"use strict";var n=i("d784"),s=i("825a"),a=i("1d80"),o=i("129f"),r=i("14c3");n("search",1,(function(e,t,i){return[function(t){var i=a(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,i):new RegExp(t)[e](String(i))},function(e){var n=i(t,e,this);if(n.done)return n.value;var a=s(e),c=String(this),d=a.lastIndex;o(d,0)||(a.lastIndex=0);var l=r(a,c);return o(a.lastIndex,d)||(a.lastIndex=d),null===l?-1:l.index}]}))},"8ce9":function(e,t,i){},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return c}));var n=i("b0af"),s=i("80d2"),a=Object(s["i"])("v-card__actions"),o=Object(s["i"])("v-card__subtitle"),r=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");n["a"]},b0af:function(e,t,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),s=(i("615b"),i("10d2")),a=i("297c"),o=i("1c87"),r=i("58df");t["a"]=Object(r["a"])(a["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(n["a"])({"v-card":!0},o["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var e=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},ce7e:function(e,t,i){"use strict";var n=i("5530"),s=(i("8ce9"),i("7560"));t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},eb2a:function(e,t,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("4de4"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("6062"),i("3ca3"),i("841c"),i("159b"),i("ddb0");var n=i("3835"),s=i("2909"),a=i("5530"),o=(i("fa9e"),i("a9e3"),i("ade3")),r=i("0789"),c=i("132d"),d=i("3206"),l=i("a9ad"),h=i("58df"),u=i("80d2"),v=Object(h["a"])(l["a"],Object(d["a"])("treeview")),p={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean},f=v.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:Object(a["a"])({level:Number,item:{type:Object,default:function(){return null}}},p),data:function(){return{hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}},computed:{disabled:function(){return Object(u["l"])(this.item,this.itemDisabled)},key:function(){return Object(u["l"])(this.item,this.itemKey)},children:function(){return Object(u["l"])(this.item,this.itemChildren)},text:function(){return Object(u["l"])(this.item,this.itemText)},scopedProps:function(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon:function(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren:function(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created:function(){this.treeview.register(this)},beforeDestroy:function(){this.treeview.unregister(this)},methods:{checkChildren:function(){var e=this;return new Promise((function(t){if(!e.children||e.children.length||!e.loadChildren||e.hasLoaded)return t();e.isLoading=!0,t(e.loadChildren(e.item))})).then((function(){e.isLoading=!1,e.hasLoaded=!0}))},open:function(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel:function(){var e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot:function(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot:function(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent:function(){var e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle:function(){var e=this;return this.$createElement(c["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:function(t){e.disabled||(t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){return e.open()})))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox:function(){var e=this;return this.$createElement(c["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected?this.selectedColor:void 0},on:{click:function(t){e.disabled||(t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){e.$nextTick((function(){e.isSelected=!e.isSelected,e.isIndeterminate=!1,e.treeview.updateSelected(e.key,e.isSelected),e.treeview.emitSelected()}))})))}}},[this.computedIcon])},genLevel:function(e){var t=this;return Object(u["h"])(e).map((function(){return t.$createElement("div",{staticClass:"v-treeview-node__level"})}))},genNode:function(){var e=this,t=[this.genContent()];return this.selectable&&t.unshift(this.genCheckbox()),this.hasChildren?t.unshift(this.genToggle()):t.unshift.apply(t,Object(s["a"])(this.genLevel(1))),t.unshift.apply(t,Object(s["a"])(this.genLevel(this.level))),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:Object(o["a"])({},this.activeClass,this.isActive),on:{click:function(){e.disabled||(e.openOnClick&&e.hasChildren?e.open():e.activatable&&(e.isActive=!e.isActive,e.treeview.updateActive(e.key,e.isActive),e.treeview.emitActive()))}}}),t)},genChild:function(e){return this.$createElement(f,{key:Object(u["l"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1},scopedSlots:this.$scopedSlots})},genChildrenWrapper:function(){if(!this.isOpen||!this.children)return null;var e=[this.children.map(this.genChild)];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition:function(){return this.$createElement(r["a"],[this.genChildrenWrapper()])}},render:function(e){var t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected,"v-treeview-node--excluded":this.treeview.isExcluded(this.key)},attrs:{"aria-expanded":String(this.isOpen)}},t)}}),m=f,g=i("7560"),b=i("d9bd");i("c975");function O(e,t,i){var n=Object(u["l"])(e,i);return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function C(e,t,i,n,s,a,o){if(e(t,i,s))return!0;var r=Object(u["l"])(t,a);if(r){for(var c=!1,d=0;d<r.length;d++)C(e,r[d],i,n,s,a,o)&&(c=!0);if(c)return!0}return o.add(Object(u["l"])(t,n)),!1}t["a"]=Object(h["a"])(Object(d["b"])("treeview"),g["a"]).extend({name:"v-treeview",provide:function(){return{treeview:this}},props:Object(a["a"])({active:{type:Array,default:function(){return[]}},dense:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:function(){return[]}},multipleActive:Boolean,open:{type:Array,default:function(){return[]}},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,selectionType:{type:String,default:"leaf",validator:function(e){return["leaf","independent"].includes(e)}},value:{type:Array,default:function(){return[]}}},p),data:function(){return{level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}},computed:{excludedItems:function(){var e=new Set;if(!this.search)return e;for(var t=0;t<this.items.length;t++)C(this.filter||O,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler:function(){var e=this,t=Object.keys(this.nodes).map((function(t){return Object(u["l"])(e.nodes[t].item,e.itemKey)})),i=this.getKeys(this.items),n=Object(u["c"])(i,t);if(n.length||!(i.length<t.length)){n.forEach((function(t){return delete e.nodes[t]}));var a=Object(s["a"])(this.selectedCache);this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(u["j"])(a,Object(s["a"])(this.selectedCache))||this.emitSelected()}},deep:!0},active:function(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value:function(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open:function(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created:function(){var e=this;this.buildTree(this.items),this.value.forEach((function(t){return e.updateSelected(e.returnObject?Object(u["l"])(t,e.itemKey):t,!0)})),this.active.forEach((function(t){return e.updateActive(e.returnObject?Object(u["l"])(t,e.itemKey):t,!0)}))},mounted:function(){var e=this;(this.$slots.prepend||this.$slots.append)&&Object(b["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((function(t){return e.updateOpen(e.returnObject?Object(u["l"])(t,e.itemKey):t,!0)})),this.emitOpen())},methods:{updateAll:function(e){var t=this;Object.keys(this.nodes).forEach((function(i){return t.updateOpen(Object(u["l"])(t.nodes[i].item,t.itemKey),e)})),this.emitOpen()},getKeys:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=0;i<e.length;i++){var n=Object(u["l"])(e[i],this.itemKey);t.push(n);var a=Object(u["l"])(e[i],this.itemChildren);a&&t.push.apply(t,Object(s["a"])(this.getKeys(a)))}return t},buildTree:function(e){for(var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<e.length;n++){var s=e[n],a=Object(u["l"])(s,this.itemKey),o=Object(u["l"])(s,this.itemChildren,[]),r=this.nodes.hasOwnProperty(a)?this.nodes[a]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},c={vnode:r.vnode,parent:i,children:o.map((function(e){return Object(u["l"])(e,t.itemKey)})),item:s};this.buildTree(o,a),!this.nodes.hasOwnProperty(a)&&null!==i&&this.nodes.hasOwnProperty(i)?c.isSelected=this.nodes[i].isSelected:(c.isSelected=r.isSelected,c.isIndeterminate=r.isIndeterminate),c.isActive=r.isActive,c.isOpen=r.isOpen,this.nodes[a]=o.length?this.calculateState(c,this.nodes):c,this.nodes[a].isSelected&&this.selectedCache.add(a),this.nodes[a].isActive&&this.activeCache.add(a),this.nodes[a].isOpen&&this.openCache.add(a),this.updateVnodeState(a)}},calculateState:function(e,t){var i=e.children.reduce((function(e,i){return e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e}),[0,0]);return e.isSelected=!!e.children.length&&i[0]===e.children.length,e.isIndeterminate=!e.isSelected&&(i[0]>0||i[1]>0),e},emitOpen:function(){this.emitNodeCache("update:open",this.openCache)},emitSelected:function(){this.emitNodeCache("input",this.selectedCache)},emitActive:function(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache:function(e,t){var i=this;this.$emit(e,this.returnObject?Object(s["a"])(t).map((function(e){return i.nodes[e].item})):Object(s["a"])(t))},handleNodeCacheWatcher:function(e,t,i,n){var a=this;e=this.returnObject?e.map((function(e){return Object(u["l"])(e,a.itemKey)})):e;var o=Object(s["a"])(t);Object(u["j"])(o,e)||(o.forEach((function(e){return i(e,!1)})),e.forEach((function(e){return i(e,!0)})),n())},getDescendants:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.nodes[e].children;(t=i).push.apply(t,Object(s["a"])(n));for(var a=0;a<n.length;a++)i=this.getDescendants(n[a],i);return i},getParents:function(e){var t=this.nodes[e].parent,i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register:function(e){var t=Object(u["l"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister:function(e){var t=Object(u["l"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent:function(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){this.multipleActive||this.activeCache.forEach((function(e){i.nodes[e].isActive=!1,i.updateVnodeState(e),i.activeCache.delete(e)}));var n=this.nodes[e];n&&(t?this.activeCache.add(e):this.activeCache.delete(e),n.isActive=t,this.updateVnodeState(e))}},updateSelected:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){var a=new Map;if("independent"!==this.selectionType){var o=[e].concat(Object(s["a"])(this.getDescendants(e)));o.forEach((function(e){i.nodes[e].isSelected=t,i.nodes[e].isIndeterminate=!1,a.set(e,t)}));var r=this.getParents(e);r.forEach((function(e){i.nodes[e]=i.calculateState(i.nodes[e],i.nodes),a.set(e,i.nodes[e].isSelected)}))}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,a.set(e,t);var c=!0,d=!1,l=void 0;try{for(var h,u=a.entries()[Symbol.iterator]();!(c=(h=u.next()).done);c=!0){var v=Object(n["a"])(h.value,2),p=v[0],f=v[1];this.updateVnodeState(p),"leaf"===this.selectionType&&this.isParent(p)||(!0===f?this.selectedCache.add(p):this.selectedCache.delete(p))}}catch(m){d=!0,l=m}finally{try{c||null==u.return||u.return()}finally{if(d)throw l}}}},updateOpen:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){var n=this.nodes[e],s=Object(u["l"])(n.item,this.itemChildren);s&&!s.length&&n.vnode&&!n.vnode.hasLoaded?n.vnode.checkChildren().then((function(){return i.updateOpen(e,t)})):s&&s.length&&(n.isOpen=t,n.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))}},updateVnodeState:function(e){var t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded:function(e){return!!this.search&&this.excludedItems.has(e)}},render:function(e){var t=this.items.length?this.items.map(m.options.methods.genChild.bind(this)):this.$slots.default;return e("div",{staticClass:"v-treeview",class:Object(a["a"])({"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense},this.themeClasses)},t)}})},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=hideout~quests.35c0953e.js.map