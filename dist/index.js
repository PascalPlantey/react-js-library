"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("antd"),r=require("prop-types"),s=require("classnames"),n=require("@ant-design/icons");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),i=o(r),u=o(s);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},l.apply(this,arguments)}function c(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}c(".pp-spin-container-centered{align-items:center;display:flex;justify-content:center;padding:5px}.pp-spin-page{left:0;position:fixed;top:0;z-index:10}");const d={containerClassName:i.default.string,containerStyle:i.default.object,tip:i.default.string,size:i.default.oneOf(["default","large","small"]),hidden:i.default.bool},f=e.forwardRef((({containerClassName:e,containerStyle:r,tip:s,hidden:n,...o},i)=>n?null:a.default.createElement("div",{className:e,style:r,ref:i},a.default.createElement(t.Spin,l({className:"pp-spin-container-centered",size:""},o)),a.default.createElement("span",{className:"pp-spin-container-centered"},a.default.createElement(t.Typography,null,s)))));f.propTypes=d,f.defaultProps={containerClassName:"",containerStyle:{},hidden:!1,tip:""};const h=e=>"string"==typeof e,p=e=>"object"==typeof e&&"current"in e,g=e=>{let t=e;return h(e)?t=document.getElementById(e)||document.querySelector(e):p(e)&&(t=e.current),t instanceof Element?t:void 0},m=e=>e?.addEventListener,v=e=>{const t=g(e);return m(t)?t:void 0};class x{#e;#t;#r;constructor(e,t=[],r=!0){if(!e)throw new Error("LocalStorage: no key provided");this.#e=r?localStorage:sessionStorage,this.#t=e;const s=this.#e.getItem(e);null===s?this.value=t:this.#r=JSON.parse(s)}get key(){return this.#t}get value(){return this.#r}set value(e){this.#r=e,this.#e.setItem(this.#t,JSON.stringify(this.#r))}remove(){this.#e.removeItem(this.#t),this.#r=void 0}get[Symbol.toStringTag](){return"StorageItem"}}class b extends Worker{constructor(e){const t=`onmessage = ${e.toString()}`;var r;super((r=t,URL.createObjectURL(new Blob([r],{type:"application/javascript"})))),this.onmessage=e=>console.log("Message received from Worker",e),this.onerror=e=>{console.log("Error occured in Worker",e),e.preventDefault()}}get[Symbol.toStringTag](){return"WebWorker"}}class y{#s;constructor(e){this.#s=e.startsWith("--")?e:`--${this.#s}`}get value(){return getComputedStyle(document.documentElement).getPropertyValue(this.#s)}set value(e){document.documentElement.style.setProperty(this.#s,e)}get[Symbol.toStringTag](){return"CSSVariable"}}const S=e=>Array.isArray(e),k=e=>"function"==typeof e,C=e=>k(e?.[Symbol.iterator]),w=e=>e!==Object(e),j=e=>null===e||a.default.isValidElement(e);class E extends Map{getOrSet(e,t){let r;return this.has(e)?r=this.get(e):(r=k(t)?t():t,this.set(e,r)),r}upsert(e,t,r){return this.has(e)?this.set(e,r(this.get(e))):this.set(e,t()),this}get array(){return[...this.entries()]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}sorted(e){return new E(this.sortedArray(e))}objectsArray(e="key",t="value",r=(([e],[t])=>e.localeCompare(t))){return(r?this.array.sort(r):this.array).map((([r,s])=>({[e]:r,[t]:s})))}get[Symbol.toStringTag](){return"ExtMap"}}class P{static XYdistance(e,t,r="x",s="y"){let n,o,a,i;return S(e)||S(t)?([n,o]=t,[a,i]=e):(n=t[r],o=t[s],a=e[r],i=e[s]),Math.sqrt(Math.pow(n-a,2)+Math.pow(o-i,2))}static distance(e,t="x",r="y"){return S(e)?XYdistance([0,0],e):XYdistance({[t]:0,[r]:0},e,t,r)}static growth(e,t){return(t-e)/e*100}get[Symbol.toStringTag](){return"ExtMath"}}class R extends Set{addIterable(e){for(const t of e)super.add(t);return this}get array(){return[...this]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}}class N{static extend(e,t,r="; ",s=""){let n=e.length?e:s;const o=t?w(t)?[t]:t:[];for(const e of o)n+=(n.length?r:"")+e;return n}static split(e,t="; "){return e.split(t)}static sortedSplit(e,t="; "){return N.split(e,t).map((e=>e)).sort()}get[Symbol.toStringTag](){return"ExtString"}}const q=(e,t)=>e===t||(S(e)&&S(t)?((e,t)=>{let r=!1;if(e.length!==t.length)r=!0;else for(let s=0;!r&&s<e.length;++s)r=e[s]!==t[s];return!r})(e,t):((e,t)=>{const r=([e],[t])=>e.localeCompare(t),s=Object.entries(e),n=Object.entries(t);let o=!1;if(s.length!==n.length)o=!0;else{const e=s.sort(r),t=n.sort(r);for(let r=0;!o&&r<e.length;++r)o=e[r][0]!==t[r][0]||e[r][1]!==t[r][1]}return o})(e,t));class T{static#n=/\s*(?<!\\)\|(?!\s)/;static isCompound=e=>h(e)&&this.#n.test(e);static structure=(...e)=>{let t="",r=e;if(1===e.length){const t=e[0];if(h(t)||!C(t))return t.toString().trim();r=t}for(const e of r)t=N.extend(t,e.toString().trim(),"|");return t};static destructure=e=>T.isCompound(e)?e.split(this.#n):[e];get[Symbol.toStringTag](){return"Compound"}}const M=e=>C(e)?e:[e],O="Others: ";class I extends Map{constructor(e=[],t){super(),this.addCounts(e,t)}addCounts(e=[],t=void 0){for(const r of M(e))k(t)?this.addCounts(t(r)):this.addCount(r);return this}addCount(e,t=1){return Array.isArray(e)&&2===e.length?this.addCount(e[0],e[1]):this.set(e,(this.get(e)??0)+t),this}toArray(){return[...this.entries()]}get totalCount(){let e=0;for(const t of this.values())e+=t;return e}*percentages(e=2){const t=this.totalCount;for(const[r,s]of this.entries())yield[r,s,parseFloat((s/t*100).toFixed(e))]}*objects(e="key",t="count",r=!1,s="percentage",n=2){if(r)for(const[r,o,a]of this.percentages(n))yield{[e]:r,[t]:o,[s]:a};else for(const[r,s]of this.entries())yield{[e]:r,[t]:s}}toObjectsArray(e="key",t="count",r=!1,s="percentage",n=2){return[...this.objects(e,t,r,s,n)]}sort(e){const t=this.toArray().sort(e);this.clear();for(const[e,r]of t)this.addCount(e,r);return this}sortByCount(e=!1){return this.sort((([t,r],[s,n])=>e?r-n:n-r))}groupLowerThan(e=5,t="; ",r=O){const s=[];for(const[t,r,n]of this.percentages())n<=e&&s.push([t,r]);if(s.length>1){let e="",n=0;for(const[o,a]of s)e=N.extend(e,`${o}: ${a}`,t,r),n+=a,this.delete(o);this.addCount(e,n)}return this}#o(e,t=O){return h(e)&&e.startsWith(t)}groupedLabel(e=O){for(const t of this.keys())if(this.#o(t,e))return t}hasGroupedLabel(e=O){return void 0!==this.groupedLabel(e)}unstructuredGroup(e=O){const t=[],r=this.groupedLabel(e);if(r)for(const{groups:{label:e,value:s}}of r.matchAll(/(Others: )?((?<label>.+?):\s(?<value>\d+);?\s?)+?/g))t.push([e,parseInt(s)]);return t}get[Symbol.toStringTag](){return"ItemsCounter"}}class z extends Set{addValues(e,t,r){for(const s of M(e))super.add(r?T.structure(r,s[t]):s[t]);return this}addChildren(e,t,r,s){for(const n of M(e))this.add(n[t],r,s&&`${n[s]}`);return this}sortedArray(e){return[...this].sort(e)}toMap(){const e=new E;for(const[t,r]of this)e.getOrSet(t,new Set).add(r);return e}iterator(){return this[Symbol.iterator]}*[Symbol.iterator](){for(const e of this.values())yield T.isCompound(e)?T.destructure(e):e}get[Symbol.toStringTag](){return"PropertyValues"}}class A{#a=[];#i=0;static rankBy(e,t,r){return e.sort(((e,r)=>r[t]-e[t])).forEach(((e,t)=>e[r]=t+1)),e}constructor(e=[],t){this.add(e,t)}#u(e){return this.#a.push(e),this.#i+=e,this}add(e=[],t){if(C(e))if(t)for(const r of e)this.add(t(r));else for(const t of e)this.#u(t);else this.#u(e);return this}reset(){return this.#a=[],this.#i=0,this}get mean(){return this.size?this.sum/this.size:NaN}get stddev(){if(!this.size)return NaN;const e=this.mean;return Math.sqrt(this.#a.map((t=>Math.pow(t-e,2))).reduce(((e,t)=>e+t))/this.size)}get variation(){return this.size?this.stddev/this.mean:NaN}get sum(){return this.#i}get size(){return this.#a.length}get[Symbol.toStringTag](){return"Stats"}}class L extends E{constructor(e){const t=[];if(!h(e)&&C(e)){for(const r of e){const[e,s]=[...r];t.push([T.structure(e),s])}super(t)}else super(e)}has(...e){return super.has(T.structure(e))}get(...e){return super.get(T.structure(e))}delete(...e){return super.delete(T.structure(e))}static splitArgs(e){return h(e)||!C(e)?[e]:e.length>1?2===e.length?e:[e.slice(0,-1),e.slice(-1)[0]]:1===e.length?[e[0],void 0]:void 0}getOrSet(...e){const[t,r]=L.splitArgs(e);return super.getOrSet(t,r)}set(...e){const[t,r]=L.splitArgs(e);return super.set(T.structure(t),r)}tupleForEach(e){this.forEach(((t,r,s)=>e(t,T.destructure(r),s)))}*tupleKeys(){for(const e of this.keys())yield T.destructure(e)}*tupleEntries(){for(const[e,t]of this.entries())yield[T.destructure(e),t]}get[Symbol.toStringTag](){return"TupleMap"}}const $=(t=!1)=>{const[r,s]=e.useState(!!t);return[r,e.useCallback((()=>s((e=>!e))),[])]};class F{hookName;resultDesc={};resultRefs=new E;paramsRefs=[];initialized=!1;constructor(e,t){this.hookName=e,this.resultDesc=t}get nbResults(){return this.resultDesc?.values?.length??0}resultName(e){return this.resultDesc.values[e].name}resultType(e){return this.resultDesc.values[e].type}resultInfos(e){return[this.resultType(e),this.resultName(e)]}getResultsValue(e,t){switch(this.resultDesc.type){case"simple":return t;case"object":return t[this.resultName(e)];case"array":return t[e];default:console.warn(`HookDescription ${this.hookName}, result could not be interpreted`)}}saveParams(e){e&&(this.paramsRefs=[...e])}saveResults(e){for(let t=0;t<this.nbResults;++t){const r=this.getResultsValue(t,e);this.resultRefs.set(this.resultName(t),r)}}compareResultValues(e,t,r){const[s,n]=e,o=this.resultRefs.get(n);s!==typeof t&&r.getOrSet(n,[]).push({type:"New value type mismatch",found:typeof t,expected:s}),o!==t&&r.getOrSet(n,[]).push({type:"Value change",from:o,to:t})}checkParams(e){const t=[];if(e&&this.paramsRefs){if(this.paramsRefs.length!=e.length)t.push(`Alert: number of params is not consistent: old ${this.paramsRefs.length}, new ${e}`);else for(let r=0;r<e.length;++r)this.paramsRefs[r]!==e[r]&&t.push(`Param ${r+1} has changed from '${this.paramsRefs[r]}' to '${e[r]}'`);t.length&&(console.log(`${this.hookName} params have changed, a render is likely to happen`),console.log("Parameters changes",t))}}checkResults(e){const t=new E;for(let r=0;r<this.nbResults;++r){const s=this.resultInfos(r),n=this.getResultsValue(r,e);this.compareResultValues(s,n,t)}t.size?console.log(`A render has generated change(s) on ${this.hookName} result`,t.objectsArray("field","comments",null)):console.log(`A render has generated no change(s) on ${this.hookName} result`)}checkAll(e,t){this.initialized?(this.checkParams(e),this.checkResults(t),console.log("+--------------------------")):console.log(`Ready to track ${this.hookName} result`),this.saveParams(e),this.saveResults(t),this.initialized=!0}}const D=(t,r)=>{const s=e.useRef(),n=e.useRef([]);return(()=>{const e=!q(n.current,r);return n.current=r,e})()&&(s.current=t()),s.current},V=()=>{const t=e.useRef(!0);return e.useEffect((()=>{t.current=!1}),[]),t.current},W=t=>{const r=e.useRef(t);e.useEffect((()=>()=>k(r.current)&&r.current()),[])},G=t=>{const r=e.useRef(t);e.useEffect((()=>{k(r.current)&&r.current()}),[])},U=(t,r,s=window,n=!0,o={})=>{const[a,i]=e.useState(!!n),{capture:u,once:l,passive:c}=o,d=e.useRef(),f=e.useCallback((e=>{r(e),l&&i(!1)}),[r,l]),h=e.useCallback((()=>{d.current=new AbortController,s.addEventListener(t,f,{capture:u,once:l,passive:c,signal:d.current.signal})}),[u,l,c,s,f,t]),p=()=>d.current?.abort();G((()=>n&&h())),W((()=>a&&p()));const g=e.useCallback((()=>i((e=>(e?p():h(),!e)))),[h]);return{working:a,toggle:g}},H=(t=30,r=!0)=>{const s=()=>({width:window.innerWidth,height:window.innerHeight}),[n,o]=e.useState(s()),{height:a,width:i}=n,u=e.useCallback((()=>o((e=>{const{height:r,width:n}=e;return Math.abs(window.innerWidth-n)>=t||Math.abs(window.innerHeight-r)>=t?s():e}))),[t]),{working:l,toggle:c}=U("resize",u,window,r);return{height:a,width:i,working:l,toggle:e.useCallback((()=>{o(s),c()}),[c])}},B=()=>"visible"===document?.visibilityState,J=(t,r=1e3,s=!0)=>{const n=e.useRef(),[o,a]=e.useState(s),i=e.useCallback((()=>{n.current&&(clearInterval(n.current),n.current=void 0,a(!1))}),[n]),u=e.useCallback((()=>{n.current||(n.current=setInterval(t,r),a(!0))}),[n,t,r]);G((()=>s&&u())),W((()=>clearInterval(n.current)));const l=e.useCallback((()=>o?i():u()),[o,u,i]);return{working:o,toggle:l,stop:i,start:u}},X=t=>{const r=V(),[s,n]=e.useState(t);return e.useEffect((()=>{r||n(t())}),[t]),s},Y=t=>{const r=e.useRef();return r.current||(r.current=t()),r},_=(t={})=>{const[r,s]=e.useState(t),n=e.useCallback((()=>s(t)),[t]),o=e.useCallback((()=>s({})),[]);return{object:r,set:e.useCallback((e=>s(e)),[]),assign:e.useCallback((e=>s((t=>({...t,...e})))),[]),remove:e.useCallback((e=>s((t=>{for(const r of M(e))delete t[r];return{...t}}))),[]),reset:n,clear:o}},K={loading:!0,ok:void 0,status:void 0,statusText:void 0,data:{},error:void 0},Q=(t,r=!0)=>{const[s,n]=e.useState(t),o=e.useCallback((()=>{n((e=>Math.max(e-1,0)))}),[]),{working:a,toggle:i,stop:u,start:l}=J(o,1e3,r);a&&0===s&&u();const c=e.useCallback((()=>s>0&&i()),[s,i]),d=e.useCallback((()=>{n(t),!a&&r&&l()}),[t,a,r,l]);return{working:a,remainingTime:s,toggle:c,reset:d}};class Z extends b{constructor(e){super(`msg => {\n      const action = ${e.toString()};\n      const { data } = msg;\n      const result = action(data);\n      postMessage(result);\n    }`)}get[Symbol.toStringTag](){return"_Worker"}}const ee=e=>e.map((e=>S(e)?{label:e[0],value:e[1]}:{label:e,value:e})),te=(e,t)=>(e=>{for(const{onFilter:t,filteredValue:r}of e)if(t&&r)return!0;return!1})(e)&&t.length?t.filter((t=>{for(const{onFilter:r,filteredValue:s}of e)if(r&&s){let e=!1;for(const n of s)if(r(n,t)){e=!0;break}if(!e)return!1}return!0})):t,re=(e,t)=>e.forEach((r=>{const{dataIndex:s,onFilter:n,filterInitializer:o}=r;if(n&&"none"!==o){const e=new Map;t.forEach((t=>{const r=o?o(t):t[s].trim();let n=[];if(w(r))n=[r];else{if(!C(r))throw new Error("useInitializeTable: incorrect filter values type: "+typeof r);n=r}for(const t of n)e.set(t,{text:t,value:t})})),r.filters=[...e.values()].sort(((e,t)=>e.text.localeCompare(t.text)))}return e})),se=(e,t)=>D((()=>re(e,t)),[e,t]),ne=(e,t,r)=>{const s=w(r)?[r]:r;let n,o=e?.[t];for(const r of s){o=o?o.includes(r)?o.filter((e=>e!==r)):[r,...o]:[r];const s={[t]:o.length?o:null};n=e?{...e,...s}:{...s}}return n},oe=(t={pagination:null,filters:null,sort:null})=>{const[r,s]=e.useState(t),n=e.useCallback(((e,t,r)=>s({pagination:e,filters:t,sort:r})),[]),o=e.useCallback((e=>s((t=>({...t,pagination:e})))),[]),a=e.useCallback((e=>s((t=>({...t,filters:e})))),[]),i=e.useCallback((()=>s((e=>({...e,filters:null})))),[]),u=e.useCallback(((e,t)=>s((r=>{const{filters:s}=r;return{...r,filters:ne(s,e,t)}}))),[]),l=e.useCallback((()=>{let e=!1;const t=r.filters;for(const r in t)if(t[r]){e=!0;break}return e}),[r.filters]),c=e.useCallback((e=>s((t=>({...t,sort:e})))),[]);return{tableParams:r,onChange:n,onChangePagination:o,onChangeFilters:a,onToggleFilterValue:u,onClearFilters:i,onChangeSort:c,isFilterActive:l}},ae=(t,r,s)=>{const[n,o]=e.useState(t);return e.useEffect((()=>{o((e=>e.map((e=>{const{onFilter:t,sorter:n,dataIndex:o}=e,a=(t&&r?.[o])??null,i=n&&s?.field===o&&s.order||null;return{...e,filteredValue:a,sortOrder:i}}))))}),[t,r,s]),n};c(".svg-icon-wrapper{align-items:center;display:flex;justify-content:center;transition:background-color .5s ease-out;transition:transform .5s ease-out}.svg-icon-wrapper:active{transform:scale(.9)}.svg-icon-wrapper:hover{background-color:#b4aeae;transform:scale(1.1)}");const ie={name:i.default.oneOf(["profile","menufold","menuunfold","partner","customer","project","administration","map","link","mail","phone","list","cards","edit","plus","delete","graph","tabledata","maximize","minimize","medal","shoppingcart","home","buildings","configuration","down","up"]).isRequired,size:i.default.number,color:i.default.string,className:i.default.oneOfType([i.default.string,i.default.arrayOf(i.default.string)]),cursor:i.default.string,style:i.default.object},ue=({name:t,size:r,color:s,className:n,cursor:o,style:i,...c})=>{const[d,f]=e.useState(null),h=1.6*r,p={width:`${h}px`,height:`${h}px`,borderRadius:`${h}px`,color:s,cursor:o,...i},g={width:`${r}px`,height:`${r}px`,fontSize:`${r}px`,lineHeight:`${r}px`,stroke:"currentColor",fill:"currentColor"};return e.useEffect((()=>{let e=!0;const r=`${t[0].toUpperCase()}${t.substring(1)}`;return function(e){switch(e){case"./svg/Administration.jsx":return Promise.resolve().then((function(){return require("./Administration-20e6aa78.js")}));case"./svg/Buildings.jsx":return Promise.resolve().then((function(){return require("./Buildings-bad67bb5.js")}));case"./svg/Cards.jsx":return Promise.resolve().then((function(){return require("./Cards-0b9d5846.js")}));case"./svg/Configuration.jsx":return Promise.resolve().then((function(){return require("./Configuration-7fe3483e.js")}));case"./svg/Customer.jsx":return Promise.resolve().then((function(){return require("./Customer-434d65ca.js")}));case"./svg/Delete.jsx":return Promise.resolve().then((function(){return require("./Delete-2bb50725.js")}));case"./svg/Down.jsx":return Promise.resolve().then((function(){return require("./Down-6733964d.js")}));case"./svg/Edit.jsx":return Promise.resolve().then((function(){return require("./Edit-45bc790e.js")}));case"./svg/Graph.jsx":return Promise.resolve().then((function(){return require("./Graph-872a4098.js")}));case"./svg/Home.jsx":return Promise.resolve().then((function(){return require("./Home-304ab924.js")}));case"./svg/Link.jsx":return Promise.resolve().then((function(){return require("./Link-e2f6b304.js")}));case"./svg/List.jsx":return Promise.resolve().then((function(){return require("./List-16a2ef0f.js")}));case"./svg/Mail.jsx":return Promise.resolve().then((function(){return require("./Mail-4bc3e667.js")}));case"./svg/Map.jsx":return Promise.resolve().then((function(){return require("./Map-5d2878a8.js")}));case"./svg/Maximize.jsx":return Promise.resolve().then((function(){return require("./Maximize-068b59ea.js")}));case"./svg/Medal.jsx":return Promise.resolve().then((function(){return require("./Medal-98821ab8.js")}));case"./svg/Menufold.jsx":return Promise.resolve().then((function(){return require("./Menufold-1971be08.js")}));case"./svg/Menuunfold.jsx":return Promise.resolve().then((function(){return require("./Menuunfold-7e86d8fb.js")}));case"./svg/Minimize.jsx":return Promise.resolve().then((function(){return require("./Minimize-46aa7f85.js")}));case"./svg/Partner.jsx":return Promise.resolve().then((function(){return require("./Partner-8fb6806b.js")}));case"./svg/Phone.jsx":return Promise.resolve().then((function(){return require("./Phone-41c12f80.js")}));case"./svg/Plus.jsx":return Promise.resolve().then((function(){return require("./Plus-c3c76280.js")}));case"./svg/Profile.jsx":return Promise.resolve().then((function(){return require("./Profile-62d00a06.js")}));case"./svg/Project.jsx":return Promise.resolve().then((function(){return require("./Project-4916c146.js")}));case"./svg/Shoppingcart.jsx":return Promise.resolve().then((function(){return require("./Shoppingcart-3902a809.js")}));case"./svg/Tabledata.jsx":return Promise.resolve().then((function(){return require("./Tabledata-b39e7c1d.js")}));case"./svg/Up.jsx":return Promise.resolve().then((function(){return require("./Up-a3c5ae1e.js")}));default:return new Promise((function(t,r){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./svg/${r}.jsx`).then((t=>{if(e){const e=t[r];f(a.default.createElement(e,null))}})).catch((e=>console.error(e))),()=>()=>{e=!1,f(null)}}),[t]),a.default.createElement("span",l({className:u.default("svg-icon-wrapper",n),style:p},c),a.default.createElement("span",{style:g},d))};ue.defaultProps={className:"",size:24,cursor:"pointer",color:"#569ac4",style:{}},ue.propTypes=ie;exports.CSSVariable=y,exports.ClearTableFilters=({isFilterActive:e,onClearFilters:r,...s})=>a.default.createElement(t.Tooltip,{title:e()?"Clear all filters":"No filter"},a.default.createElement(t.Button,l({icon:a.default.createElement(n.FilterOutlined,null),type:"primary",size:"small",disabled:!e(),onClick:r},s),"Clear")),exports.Compound=T,exports.Enum=function(e,t){const r={[Symbol.iterator]:function*(){for(const e of Object.entries(r))yield e}};Object.defineProperties(r,{reserved:{value:["get","has","keys","name","protected","toString","values"]},keys:{get:()=>Object.keys(r)},values:{get:()=>Object.values(r)},has:{value:e=>r.values.includes(e)},get:{value:e=>{for(const[t,s]of Object.entries(r))if(t===e)return s}},name:{value:e},toString:{value:()=>`${r.name} - ${JSON.stringify(r.keys)}`}});for(const e of t){let t,s;if(Array.isArray(e)&&2===e.length?(t=e[0],s=e[1]):"object"==typeof e&&e.key&&e.value?(t=e.key,s=e.value):t=s=e,r.reserved.includes(t))throw new Error(`'${t}' is a reserved keyword`);r[t]=s}return Object.freeze(r)},exports.ExtMap=E,exports.ExtMath=P,exports.ExtSet=R,exports.ExtString=N,exports.ItemCounters=I,exports.PageSpin=({containerClassName:t,containerStyle:r,...s})=>{const n=e.useRef(),[o,i]=e.useState({...r,top:0,left:0,opacity:"0%"}),{height:c,width:d}=H(0);return e.useLayoutEffect((()=>{i({...r,top:(c-n.current.offsetWidth)/2,left:(d-n.current.offsetHeight)/2,opacity:"100%"})}),[]),a.default.createElement(f,l({containerClassName:u.default("pp-spin-page",t),containerStyle:o,ref:n},s))},exports.PropertyValues=z,exports.SVGIcon=ue,exports.SpinWithTip=f,exports.Stats=A,exports.StorageItem=x,exports.Switch=({cases:e})=>{const t=e=>{const t=k(e)?e():e;return console.assert(j(e),"Switch: returned value does not seem to be a JSX element",e),t};for(const{condition:r,action:s}of e){if(!0===r)return t(s);if(void 0===r)return t(s)}return null},exports.TupleMap=L,exports.WebWorker=b,exports.buildSelectOptions=ee,exports.buildTreeSelectOptions=(e,t=!0)=>e.map((([e,r])=>({text:e,value:e,children:r.map((r=>({text:r,value:t?T.structure(e,r):r})))}))),exports.getEventTarget=v,exports.getFilteredSource=te,exports.getHTMLElement=g,exports.getJSClassname=e=>Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1],exports.initializeColumnsFilters=re,exports.isArray=S,exports.isBoolean=e=>!1===e||!0===e,exports.isEventTarget=m,exports.isFunction=k,exports.isInteger=e=>Number.isInteger(e),exports.isIterable=C,exports.isNumber=e=>"number"==typeof e,exports.isNumeric=e=>h(e)&&/^\d+$/.test(e),exports.isPrimitive=w,exports.isProperty=(e,t)=>Object.hasOwn(e,t),exports.isReactElement=j,exports.isReactRef=p,exports.isString=h,exports.noop=()=>{},exports.setColumnFilters=(e,t,r)=>e.find((({dataIndex:e})=>e===t)).filters=k(r)?r():r,exports.sortAlpha=(e,t,r)=>e[r].localeCompare(t[r]),exports.sortDates=(e,t,r)=>e[r]-t[r],exports.sortNumbers=(e,t,r)=>e[r]-t[r],exports.surfaceEquals=q,exports.toIterable=M,exports.useCalculation=X,exports.useCheckHook=(t,r,s,...n)=>{const[,o]=$(),a=e.useRef(new F(t,s)),{current:i}=a,u=r(...n);return i.checkAll(n,u),e.useEffect((()=>{setTimeout((()=>{console.log("+--------------------------"),console.log(`-> Checking ${t} with a render that should not change result`),o()}),1e3)}),[o,t]),u},exports.useComponentSize=(t,r)=>{const s=e.useRef(),[n,o]=e.useState({}),{height:a,width:i,working:u,toggle:l}=H(t,r);return e.useEffect((()=>{const e=s?.current;o({height:e?.offsetHeight,width:e?.offsetWidth})}),[a,i]),{...n,ref:s,working:u,toggle:l}},exports.useCountdown=(t,r,s=!0)=>{const{working:n,remainingTime:o,toggle:a,reset:i}=Q(r,s),u=e.useRef(!1),l=e.useCallback((()=>!1===u.current&&a()),[a]),c=e.useCallback((()=>{i(),u.current=!1}),[i]);return 0!==o||u.current||(k(t)&&t(),u.current=!0),{working:n,remainingTime:o,toggle:l,reset:c}},exports.useDocumentVisibility=(t=!0,r={})=>{const[s,n]=e.useState(B);return{visible:s,...U("visibilitychange",e.useCallback((()=>n(B())),[]),document,t,r)}},exports.useEventListener=U,exports.useFetch=(t="",r,s)=>{const n=e.useRef(),[o,a]=$(),{object:i,assign:u,reset:l}=_(K);return n.current||(n.current=new AbortController),e.useEffect((()=>(l(),fetch(encodeURI(new URL(t,r)),{...s,signal:n.current?.signal}).then((e=>{const{ok:t,status:r,statusText:s}=e;t?e.json().then((e=>u({loading:!1,ok:t,status:r,statusText:s,data:e}))):u({loading:!1,ok:t,status:r,statusText:s})})).catch((e=>u({loading:!1,ok:!1,error:e}))),()=>{n.current?.abort(),n.current=null})),[t,r,s,u,l,o]),[i,a,n.current?.abort||noop]},exports.useFilteredSource=(t,r)=>X(e.useCallback((()=>te(t,r)),[t,r])),exports.useFocus=()=>{const[t,r]=e.useState(!1),s=e.useRef(),n=()=>document.activeElement===s.current,o=()=>r(!0),a=()=>r(!1);return e.useEffect((()=>{s?.current&&s?.current.addEventListener&&n()&&r(!0)}),[]),e.useEffect((()=>{const e=s?.current;if(e&&e.addEventListener)return e.addEventListener("focus",o),e.addEventListener("blur",a),()=>{e.removeEventListener("focus",o),e.removeEventListener("blur",a)};console.warn("useFocus: no target element; did you forget to use the ref?")}),[s?.current]),[t,e=>e?!n()&&s.current.focus():n()&&s.current.blur(),s]},exports.useForceRender=()=>{const[,e]=$();return e},exports.useFunctionResult=(t,r)=>{const s=V(),[n,o]=e.useState(t),a=e.useCallback(t,[...r]);return e.useEffect((()=>{s||o(a())}),[a,s]),n},exports.useGeolocation=(t=2e3,r=!0,s)=>{const[n,o]=e.useState(),a=e=>o((t=>{let r=!1;if(t instanceof GeolocationPosition&&e instanceof GeolocationPosition||t instanceof GeolocationPositionError&&e instanceof GeolocationPositionError){const s=t instanceof GeolocationPosition?t.coords:t,n=t instanceof GeolocationPosition?e.coords:e;for(const e in s)if(!(e in n)||s[e]!==n[e]){r=!0;break}}else r=!0;return r?e:t})),i=e.useCallback((()=>navigator.geolocation.getCurrentPosition(a,a,s)),[s]),{working:u,toggle:l}=J(i,t,r);return{success:n instanceof GeolocationPosition||(GeolocationPositionError,!1),result:n,working:u,toggle:l}},exports.useHover=t=>{const[r,s]=e.useState(!1);return e.useEffect((()=>{const e=v(t);if(!e)return;const r=()=>s(!0),n=()=>s(!1);return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",n),()=>()=>{e.removeEventListener("onMouseEnter",r),e.removeEventListener("onMouseLeave",n)}}),[t]),r},exports.useImmediateRunOnDepsChange=D,exports.useInitializeColumnsFilters=se,exports.useInitializedSource=(e,t)=>D((()=>e.forEach((({dataIndex:e,valueInitializer:r})=>t.forEach((t=>t[e]=r(t)))))),[e,t]),exports.useInterval=J,exports.useIsFirstRender=V,exports.useIsMounted=()=>{const t=e.useRef(!1),r=e.useCallback((()=>t.current),[]);return e.useEffect((()=>(t.current=!0,()=>t.current=!1)),[]),r},exports.useNewClassRef=Y,exports.useObject=_,exports.useOnce=t=>{const[r]=e.useState(t);return r},exports.useOndismount=W,exports.useOnmount=G,exports.useResizeObserver=(t,r=30,s="content-box")=>{const n=e=>({width:e?.offsetWidth,heigth:e?.offsetHeight}),[o,a]=e.useState(n);return e.useEffect((()=>{const e=v(t);if(e){const t=new ResizeObserver((()=>a((t=>{const{width:s,heigth:o}=t,{width:a,heigth:i}=n(e);return void 0===s||Math.abs(s-a)>=r||Math.abs(o-i)>=r?{width:a,heigth:i}:t}))));return t.observe(e,{box:s}),()=>t.disconnect(e)}}),[t,r,s]),o},exports.useSelectOptions=t=>e.useMemo((()=>ee(t)),[t]),exports.useStorageItem=(t,r="",s=!0)=>{const n=e.useRef();n.current||(n.current=new x(t,r,s));const[o,a]=e.useState(r);return[o,e=>a(n.current.value=e),()=>{n.current.remove(),a()}]},exports.useStoredTableParams=t=>{const r=Y((()=>new x(t,{pagination:null,filters:null,sort:null}))),{tableParams:s,...n}=oe(r.current.value);return e.useEffect((()=>{r.current.value!==s&&(r.current.value=s)}),[s,r]),{tableParams:s,...n}},exports.useTableConfig=(e,t,r,s)=>ae(se(e,t),r,s),exports.useTableParams=oe,exports.useTimer=Q,exports.useToggle=$,exports.useUpdateTableColumns=ae,exports.useWebWorker=t=>{const r=()=>{const e=new Z(t);return e.onmessage=e=>{const{data:t}=e;o((e=>{const{queueCount:r,data:s}=e;return s.push(t),{...e,execStatus:r>1?"RUNNING":"IDLE",success:!0,queueCount:r-1,comment:"execution succeeded",evt:void 0}}))},e.onerror=e=>{o((t=>{const{queueCount:r}=t;return{...t,execStatus:r>1?"RUNNING":"IDLE",success:!1,queueCount:r-1,comment:"last execution failed",evt:e}}))},e},s=e.useRef(r()),[n,o]=e.useState({execStatus:"IDLE",success:void 0,queueCount:0,comment:"",evt:void 0,data:[],run:e=>{o((t=>{const{execStatus:n,queueCount:o}=t;switch(n){case"IDLE":return s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"message sent for execution",data:[],evt:void 0};case"RUNNING":return s.current.postMessage(e),{...t,queueCount:o+1,comment:"warning, multiple executions queued",evt:void 0};case"DEAD":return s.current=r(),s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"revived a dead worker",data:[],evt:void 0};default:return{...t,execStatus:"undefined state",data:[],evt:void 0}}}))},kill:()=>{s.current.terminate(),o({...n,execStatus:"DEAD",success:void 0,queueCount:0,comment:"worker terminated",data:[],evt:void 0})}});return n},exports.useWindowHeight=(e=30,t=!0)=>{const{height:r,working:s,toggle:n}=H(e,t);return{height:r,working:s,toggle:n}},exports.useWindowSize=H,exports.useWindowWidth=(e=30,t=!0)=>{const{width:r,working:s,toggle:n}=H(e,t);return{width:r,working:s,toggle:n}};
