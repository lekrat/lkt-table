(function(m,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("vuedraggable"),require("lkt-http-client"),require("lkt-events"),require("lkt-string-tools"),require("lkt-field-check"),require("lkt-field-text"),require("lkt-field-switch"),require("lkt-field-select"),require("lkt-loader")):typeof define=="function"&&define.amd?define(["exports","vue","vuedraggable","lkt-http-client","lkt-events","lkt-string-tools","lkt-field-check","lkt-field-text","lkt-field-switch","lkt-field-select","lkt-loader"],e):(m=typeof globalThis<"u"?globalThis:m||self,e(m.LktTable={},m.Vue,m.draggable,m.lktHttpClient,m.LktEvents,m.LktStringTools,m.LktFieldCheck,m.LktFieldText,m.LktFieldSwitch,m.LktFieldSelect,m.LktLoader))})(this,function(m,e,V,K,N,z,J,P,G,Q,W){"use strict";var je=Object.defineProperty;var Ke=(m,e,V)=>e in m?je(m,e,{enumerable:!0,configurable:!0,writable:!0,value:V}):m[e]=V;var h=(m,e,V)=>(Ke(m,typeof e!="symbol"?e+"":e,V),V);const E=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},X=E(V),Y=E(J),Z=E(P),v=E(G),_=E(Q),ee=E(W);class S{constructor(l="",n=""){h(this,"key");h(this,"label");h(this,"sortable");h(this,"hidden");h(this,"editable");h(this,"formatter");h(this,"checkEmpty");h(this,"colspan");h(this,"type");h(this,"link");h(this,"action");h(this,"options");h(this,"resource");h(this,"resourceData");h(this,"isMultiple");h(this,"isLoading");h(this,"resourceLoaded");h(this,"valueSlot");h(this,"editSlot");h(this,"multipleDisplay");this.key=l,this.label=n,this.sortable=!0,this.hidden=!1,this.formatter=void 0,this.checkEmpty=void 0,this.colspan=void 0,this.resource="",this.resourceData={},this.isMultiple=!1,this.isLoading=!1,this.resourceLoaded=!1,this.valueSlot="",this.editSlot="",this.multipleDisplay=""}setIsSortable(l=!0){return this.sortable=l,this}setIsEditable(l=!0){return this.editable=l,this}setIsHidden(l=!0){return this.hidden=l,this}setIsLoading(l=!0){return this.isLoading=l,this}setFormatter(l=void 0){return this.formatter=l,this}setEmptyChecker(l=void 0){return this.checkEmpty=l,this}setColSpan(l=void 0){return this.colspan=void 0,this}getHref(l){return typeof this.link=="function"?this.link(l):this.link}doAction(l){if(typeof this.action=="function")return this.action(l);console.warn("No action defined")}defineAsLink(l){return this.type="link",this.link=l,this}defineAsText(){return this.type="text",this}defineAsEmail(){return this.type="email",this}defineAsTel(){return this.type="tel",this}defineAsInt(){return this.type="int",this}defineAsFloat(){return this.type="float",this}defineAsCheck(){return this.type="check",this}defineAsSwitch(){return this.type="switch",this}defineAsAction(l){return this.type="action",this.action=l,this}defineAsSelect(l){return this.type="select",this.options=l,this}showLoading(){return this.resource!==""&&!this.resourceLoaded}hasToLoadResource(){return this.resource!==""&&!this.resourceLoaded&&!this.isLoading}setIsMultiple(l=!0){return this.isMultiple=l,this}setResource(l){return this.resource=l,this}setResourceData(l){return this.resourceData=l,this}async loadResource(){if(this.resourceLoaded)return this;if(!this.resource)return this;try{this.isLoading=!0;const l=await K.httpCall(this.resource,this.resourceData);this.options=l.data,this.isLoading=!1,this.resourceLoaded=!0}catch{this.isLoading=!1}return this}setEditSlot(l){return this.editSlot=l,this}setValueSlot(l){return this.valueSlot=l,this}setMultipleDisplay(l){return this.multipleDisplay=l,this}}const te=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n)),le=(t,l,n,a=!0)=>e.reactive(new S(t,l).setIsSortable(a).defineAsLink(n)),ne=(t,l,n,a=!0)=>e.reactive(new S(t,l).setIsSortable(a).defineAsAction(n)),oe=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).defineAsText()),ae=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).defineAsEmail()),ie=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).defineAsTel()),re=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).defineAsCheck()),se=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).defineAsSwitch()),de=(t,l,n,a=!0)=>e.reactive(new S(t,l).setIsSortable(a).defineAsSelect(n)),ce=(t,l,n=!0)=>e.reactive(new S(t,l).setIsSortable(n).setIsHidden(!0)),R=(t,l,n,a)=>{if(!n)return 0;let r=t[n.key],o=l[n.key];if(a==="asc"){if(r>o)return 1;if(o>r)return-1}else{if(r>o)return-1;if(o>r)return 1}return 0},w=(t,l,n)=>t.formatter&&typeof t.formatter=="function"?t.formatter(l[t.key],l,t,n):l[t.key],ue=(t,l,n)=>{if(!t.colspan)return-1;let a=l;return n.forEach(r=>{let o=D(t,r);o>0&&o<a&&(a=o)}),a},D=(t,l)=>t.colspan===!1?!1:typeof t.colspan=="function"?t.colspan(l):t.colspan,me=(t,l,n)=>{if(typeof t!="object"||!t.key||l.indexOf(t.key)>-1)return!1;let a=D(t,n);return typeof t.colspan>"u"?!0:(typeof t.colspan<"u"&&(typeof t.colspan=="function"?a=parseInt(t.colspan()):a=parseInt(t.colspan)),a>0)},fe=(t=[])=>{if(t.length>0){for(let l=0;l<t.length;++l)if(t[l].sortable)return t[l].key}return""},ke=(t,l)=>{if(t.length>0){for(let n=0;n<t.length;++n)if(t[n].key===l)return t[n]}return null},he={name:"LktTableCell",inheritAttrs:!1},M=e.defineComponent({...he,props:{modelValue:{type:Object,default:()=>({})},column:{type:Object,default:()=>({})},i:{type:[Number],default:0}},emits:["edited"],setup(t,{emit:l}){const n=l,a=t,r=e.ref(a.modelValue),o=e.ref(r.value[a.column.key]),y=e.ref(null),p=e.ref(a.column.showLoading());return e.watch(o,()=>{const s=JSON.parse(JSON.stringify(r.value));s[a.column.key]=o.value,n("edited",s,a.i)}),e.watch(()=>a.modelValue,s=>{r.value=s,o.value=r.value[a.column.key]}),e.watch(()=>a.column,()=>{a.column.resourceLoaded&&e.nextTick(()=>p.value=!1)},{deep:!0}),a.column.hasToLoadResource()&&a.column.loadResource(),(s,d)=>{const c=e.resolveComponent("router-link"),g=e.resolveComponent("lkt-field-text"),I=e.resolveComponent("lkt-field-check"),A=e.resolveComponent("lkt-field-switch"),T=e.resolveComponent("lkt-loader"),L=e.resolveComponent("lkt-field-select");return t.column.type==="link"?(e.openBlock(),e.createBlock(c,{key:0,to:t.column.getHref(r.value)},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(w)(t.column,r.value,t.i)),1)]),_:1},8,["to"])):t.column.type==="action"?(e.openBlock(),e.createElementBlock("a",{key:1,href:"#",onClick:d[0]||(d[0]=k=>t.column.doAction(r.value))},e.toDisplayString(e.unref(w)(t.column,r.value,t.i)),1)):t.column.type==="text"?(e.openBlock(),e.createBlock(g,{key:2,"read-mode":!t.column.editable,ref:k=>y.value=k,"edit-slot":t.column.editSlot,"value-slot":t.column.valueSlot,modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=k=>o.value=k)},null,8,["read-mode","edit-slot","value-slot","modelValue"])):t.column.type==="email"?(e.openBlock(),e.createBlock(g,{key:3,"read-mode":!t.column.editable,ref:k=>y.value=k,"edit-slot":t.column.editSlot,"value-slot":t.column.valueSlot,"is-email":"",modelValue:o.value,"onUpdate:modelValue":d[2]||(d[2]=k=>o.value=k)},null,8,["read-mode","edit-slot","value-slot","modelValue"])):t.column.type==="tel"?(e.openBlock(),e.createBlock(g,{key:4,"read-mode":!t.column.editable,ref:k=>y.value=k,"edit-slot":t.column.editSlot,"value-slot":t.column.valueSlot,"is-tel":"",modelValue:o.value,"onUpdate:modelValue":d[3]||(d[3]=k=>o.value=k)},null,8,["read-mode","edit-slot","value-slot","modelValue"])):t.column.type==="check"?(e.openBlock(),e.createBlock(I,{key:5,"read-mode":!t.column.editable,ref:k=>y.value=k,modelValue:o.value,"onUpdate:modelValue":d[4]||(d[4]=k=>o.value=k)},null,8,["read-mode","modelValue"])):t.column.type==="switch"?(e.openBlock(),e.createBlock(A,{key:6,"read-mode":!t.column.editable,ref:k=>y.value=k,modelValue:o.value,"onUpdate:modelValue":d[5]||(d[5]=k=>o.value=k)},null,8,["read-mode","modelValue"])):t.column.type==="select"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:7},[p.value?(e.openBlock(),e.createBlock(T,{key:0})):(e.openBlock(),e.createBlock(L,{key:1,"read-mode":!t.column.editable,ref:k=>y.value=k,modelValue:o.value,"onUpdate:modelValue":d[6]||(d[6]=k=>o.value=k),resource:t.column.resource,"resource-data":t.column.resourceData,options:t.column.options,multiple:t.column.isMultiple,"multiple-display":t.column.multipleDisplay},null,8,["read-mode","modelValue","resource","resource-data","options","multiple","multiple-display"]))],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:8},[e.createTextVNode(e.toDisplayString(e.unref(w)(t.column,r.value,t.i)),1)],64))}}}),ye=["data-i","data-handle-drag"],be={key:0,"data-role":"drag-indicator"},Ce={key:1,"data-role":"invalid-drag-indicator"},ge=["data-column","colspan","title","onClick"],pe={name:"LktTableRow",inheritAttrs:!1},U=e.defineComponent({...pe,props:{isDraggable:{type:Boolean,default:!0},sortable:{type:Boolean,default:!0},i:{type:[Number],default:0},displayHiddenColumnsIndicator:{type:Boolean,default:!1},visibleColumns:{type:Array,default:()=>[]},emptyColumns:{type:Array,default:()=>[]},hiddenIsVisible:{type:Boolean,default:!1},item:{type:Object,default:()=>({})}},emits:["edited","click","show"],setup(t,{emit:l}){const n=l,a=t,r=e.ref(a.item),o=(s,d,c)=>{n("click",s,N.createLktEvent("",{item:d,column:c}))},y=(s,d)=>{n("show",s,N.createLktEvent("",{i:d}))},p=(s,d)=>{r.value=s};return e.watch(()=>a.item,s=>r.value=s),e.watch(r,()=>n("edited",r.value,a.i)),(s,d)=>(e.openBlock(),e.createElementBlock("tr",{"data-i":t.i,"data-handle-drag":t.isDraggable},[t.sortable&&t.isDraggable?(e.openBlock(),e.createElementBlock("td",be)):t.sortable?(e.openBlock(),e.createElementBlock("td",Ce)):e.createCommentVNode("",!0),t.displayHiddenColumnsIndicator?(e.openBlock(),e.createElementBlock("td",{key:2,onClick:d[0]||(d[0]=c=>y(c,t.i)),"data-role":"show-more",class:e.normalizeClass(t.hiddenIsVisible?"state-open":"")},null,2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.visibleColumns,c=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(me)(c,t.emptyColumns,t.item)?(e.openBlock(),e.createElementBlock("td",{key:0,"data-column":c.key,colspan:e.unref(D)(c,t.item),title:e.unref(w)(c,t.item,t.i),onClick:g=>o(g,t.item,c)},[s.$slots[c.key]?e.renderSlot(s.$slots,c.key,{key:0,value:t.item[c.key],item:t.item,column:c,i:t.i}):t.item?(e.openBlock(),e.createBlock(M,{key:1,column:c,modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=g=>r.value=g),i:t.i,onEdited:p},null,8,["column","modelValue","i"])):e.createCommentVNode("",!0)],8,ge)):e.createCommentVNode("",!0)],64))),256))],8,ye))}}),Be={"data-role":"hidden-row"},Se=["colspan"],Ve=["data-column"],Ee=["data-i"],Le=["data-column","title","onClick"],we={name:"LktHiddenRow",inheritAttrs:!1},Ae=e.defineComponent({...we,props:{isDraggable:{type:Boolean,default:!0},sortable:{type:Boolean,default:!0},i:{type:[Number],default:0},hiddenColumnsColSpan:{type:Number,default:0},visibleColumns:{type:Array,default:()=>[]},hiddenColumns:{type:Array,default:()=>[]},emptyColumns:{type:Array,default:()=>[]},hiddenIsVisible:{type:Boolean,default:!1},modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue","click"],setup(t,{emit:l}){const n=l,a=t,r=e.ref(a.modelValue),o=(y,p,s)=>{n("click",y,N.createLktEvent("",{item:p,column:s}))};return e.watch(()=>a.modelValue,y=>r.value=y),e.watch(r,()=>n("update:modelValue",r.value)),(y,p)=>e.withDirectives((e.openBlock(),e.createElementBlock("tr",Be,[e.createElementVNode("td",{colspan:t.hiddenColumnsColSpan},[e.createElementVNode("table",null,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.hiddenColumns,s=>(e.openBlock(),e.createElementBlock("th",{"data-column":s.key},[e.createElementVNode("div",null,e.toDisplayString(s.label),1)],8,Ve))),256))]),e.createElementVNode("tr",{"data-i":t.i},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.hiddenColumns,(s,d)=>(e.openBlock(),e.createElementBlock("td",{"data-column":s.key,title:e.unref(w)(s,r.value,d),onClick:c=>o(c,r.value,s)},[y.$slots[s.key]?e.renderSlot(y.$slots,s.key,{key:0,value:r.value[s.key],item:r.value,column:s,i:d}):(e.openBlock(),e.createBlock(M,{key:1,column:s,modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=c=>r.value=c),i:d},null,8,["column","modelValue","i"]))],8,Le))),256))],8,Ee)])],8,Se)],512)),[[e.vShow,t.hiddenIsVisible]])}}),Ie=["data-sortable"],Ne={key:0,"data-role":"drag-indicator"},De={key:1},Te=["data-column","data-sortable","data-sort","colspan","title","onClick"],$e={key:1},Fe={key:1,class:"lkt-empty-table"},He={name:"LktTable",inheritAttrs:!1},qe=e.defineComponent({...He,props:{modelValue:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},sorter:{type:Function,default:R},sortable:{type:Boolean,default:!1},hideEmptyColumns:{type:Boolean,default:!1},draggableChecker:{type:Function,default:t=>!0},checkValidDrag:{type:Function,default:t=>!0},draggableItemKey:{type:String,default:"name"}},emits:["update:modelValue","sort","click"],setup(t,{expose:l,emit:n}){const a=n,r=e.useSlots(),o=t,y={},p=e.ref(typeof o.sorter=="function"?o.sorter:R),s=e.ref(fe(o.columns)),d=e.ref("asc"),c=e.ref(o.modelValue),g=e.ref(y),I=e.ref(!1),A=z.generateRandomString(12),T=e.computed(()=>c.value.length>0),L=e.computed(()=>{if(!o.hideEmptyColumns)return[];let i=[];return o.columns.forEach(u=>{let f=u.key,b=!1;c.value.forEach(C=>{if(typeof C.checkEmpty=="function")return C.checkEmpty(C);C[f]&&(b=!0)}),b||i.push(f)}),i}),k=e.computed(()=>o.columns.filter(i=>!i.hidden)),$=e.computed(()=>o.columns.filter(i=>i.hidden)),Oe=e.computed(()=>{let i=k.value.length+1;return o.sortable&&++i,i}),F=e.computed(()=>$.value.length>0&&!o.sortable),Re=e.computed(()=>o.columns.map(i=>i.key)),H=e.computed(()=>{let i=[];for(let u in r)Re.value.indexOf(u)!==-1&&i.push(u);return i}),Me=i=>{let u=i.target;if(typeof u.dataset.column>"u")do u=u.parentNode;while(typeof u.dataset.column>"u"&&u.tagName!=="TABLE"&&u.tagName!=="body");if(u.tagName==="TD"&&(u=u.parentNode,u=u.dataset.i,typeof u<"u"))return c.value[u]},q=i=>g.value["tr_"+i]===!0,j=i=>{!i||i.sortable&&(c.value=c.value.sort((u,f)=>p.value(u,f,i,d.value)),d.value=d.value==="asc"?"desc":"asc",s.value=i.key,a("sort",[s.value,d.value]))},x=(i,u)=>{a("click",i,u)},O=(i,u)=>{let f="tr_"+u.value.i;g.value[f]=typeof g.value[f]>"u"?!0:!g.value[f]},Ue=(i,u)=>{c.value[u]=i};return e.onMounted(()=>{j(ke(o.columns,s.value))}),e.watch(()=>o.modelValue,i=>c.value=i),e.watch(c,i=>{a("update:modelValue",i)}),l({getItemByEvent:Me}),(i,u)=>T.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:"lkt-table","data-sortable":t.sortable},[e.createElementVNode("table",null,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[t.sortable?(e.openBlock(),e.createElementBlock("th",Ne)):e.createCommentVNode("",!0),F.value?(e.openBlock(),e.createElementBlock("th",De)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(k.value,f=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[L.value.indexOf(f.key)===-1?(e.openBlock(),e.createElementBlock("th",{key:0,"data-column":f.key,"data-sortable":f.sortable===!0,"data-sort":f.sortable===!0&&s.value===f.key?d.value:"",colspan:e.unref(ue)(f,t.columns.length,c.value),title:f.label,onClick:b=>j(f)},[e.createElementVNode("div",null,e.toDisplayString(f.label),1)],8,Te)):e.createCommentVNode("",!0)],64))),256))])]),t.sortable?(e.openBlock(),e.createBlock(e.unref(X.default),{key:0,modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=f=>c.value=f),move:t.checkValidDrag,itemKey:t.draggableItemKey,onStart:u[1]||(u[1]=f=>I.value=!0),onEnd:u[2]||(u[2]=f=>I.value=!1),tag:"tbody",class:"lkt-sortable-table",handle:"[data-handle-drag]"},{item:e.withCtx(({element:f,index:b})=>[(e.openBlock(),e.createBlock(U,{key:e.unref(A)+"-"+b,i:b,item:f,"display-hidden-columns-indicator":F.value,"is-draggable":t.draggableChecker?t.draggableChecker(f):!0,sortable:t.sortable,"visible-columns":k.value,"empty-columns":L.value,"hidden-is-visible":q(b),onClick:x,onShow:O},e.createSlots({_:2},[e.renderList(H.value,C=>({name:C,fn:e.withCtx(B=>[e.renderSlot(i.$slots,C,{item:B.item,value:B.value,column:B.column})])}))]),1032,["i","item","display-hidden-columns-indicator","is-draggable","sortable","visible-columns","empty-columns","hidden-is-visible"]))]),_:3},8,["modelValue","move","itemKey"])):(e.openBlock(),e.createElementBlock("tbody",$e,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,(f,b)=>(e.openBlock(),e.createBlock(U,{key:e.unref(A)+"-"+b,i:b,item:f,"display-hidden-columns-indicator":F.value,"is-draggable":t.draggableChecker?t.draggableChecker(f):!0,sortable:t.sortable,"visible-columns":k.value,"empty-columns":L.value,"hidden-is-visible":q(b),onClick:x,onShow:O,onEdited:Ue},e.createSlots({_:2},[e.renderList(H.value,C=>({name:C,fn:e.withCtx(B=>[e.renderSlot(i.$slots,C,{item:B.item,value:B.value,column:B.column})])}))]),1032,["i","item","display-hidden-columns-indicator","is-draggable","sortable","visible-columns","empty-columns","hidden-is-visible"]))),128)),$.value.length>0?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(c.value,(f,b)=>(e.openBlock(),e.createBlock(Ae,{key:e.unref(A)+"-"+b,i:b,item:f,"hidden-columns":$.value,"hidden-columns-col-span":Oe.value,"is-draggable":t.draggableChecker?t.draggableChecker(f):!0,sortable:t.sortable,"visible-columns":k.value,"empty-columns":L.value,"hidden-is-visible":q(b),onClick:x,onShow:O},e.createSlots({_:2},[e.renderList(H.value,C=>({name:C,fn:e.withCtx(B=>[e.renderSlot(i.$slots,C,{item:B.item,value:B.value,column:B.column})])}))]),1032,["i","item","hidden-columns","hidden-columns-col-span","is-draggable","sortable","visible-columns","empty-columns","hidden-is-visible"]))),128)):e.createCommentVNode("",!0)]))])],8,Ie)):i.$slots["no-items"]?(e.openBlock(),e.createElementBlock("div",Fe,[e.renderSlot(i.$slots,"no-items")])):e.createCommentVNode("",!0)}}),ze="",xe={install:t=>{t.component("lkt-table")===void 0&&t.component("lkt-table",qe),t.component("lkt-loader")===void 0&&t.use(ee.default),t.component("lkt-field-select")===void 0&&t.use(_.default),t.component("lkt-field-text")===void 0&&t.use(Z.default),t.component("lkt-field-check")===void 0&&t.use(Y.default),t.component("lkt-field-switch")===void 0&&t.use(v.default)}};m.createActionColumn=ne,m.createCheckColumn=re,m.createColumn=te,m.createEmailColumn=ae,m.createHiddenColumn=ce,m.createLinkColumn=le,m.createSelectColumn=de,m.createSwitchColumn=se,m.createTelColumn=ie,m.createTextColumn=oe,m.default=xe,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
