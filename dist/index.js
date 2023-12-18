"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("antd"),r=require("prop-types"),s=require("classnames"),n=require("@ant-design/icons");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e),a=o(r),u=o(s);const l=e=>"string"==typeof e,c=e=>"object"==typeof e&&"current"in e,d=e=>{let t=e;return l(e)?t=document.getElementById(e)||document.querySelector(e):c(e)&&(t=e.current),t instanceof Element?t:void 0},f=e=>e?.addEventListener,p=e=>{const t=d(e);return f(t)?t:void 0},h=e=>Array.isArray(e),g=e=>"function"==typeof e,m=e=>g(e?.[Symbol.iterator]),v=e=>e!==Object(e),x=e=>null===e||i.default.isValidElement(e),b=e=>{let t,r,s=e?.clientHeight,n=e?.clientWidth;for(t=r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);e=e.offsetParent)t+=e.offsetLeft-e.scrollLeft,r+=e.offsetTop-e.scrollTop;return{top:r,left:t,height:s,width:n,bottom:r?r+s:void 0,right:t?t+n:void 0}};class y{#e;#t;#r;constructor(e,t=[],r=!0){if(this.#r=t,e){this.#e=r?localStorage:sessionStorage,this.#t=e;const t=this.#e.getItem(e);t&&(this.#r=JSON.parse(t))}}get key(){return this.#t}get value(){return this.#r}set value(e){this.#r=e,this.#t&&this.#e.setItem(this.#t,JSON.stringify(this.#r))}remove(){this.#t&&this.#e.removeItem(this.#t),this.#r=void 0}get[Symbol.toStringTag](){return"StorageItem"}}class S extends Worker{constructor(e){const t=`onmessage = ${e.toString()}`;var r;super((r=t,URL.createObjectURL(new Blob([r],{type:"application/javascript"})))),this.onmessage=e=>console.log("Message received from Worker",e),this.onerror=e=>{console.log("Error occured in Worker",e),e.preventDefault()}}get[Symbol.toStringTag](){return"WebWorker"}}class C{#s;constructor(e){this.#s=e.startsWith("--")?e:`--${e}`}get value(){return getComputedStyle(document.documentElement).getPropertyValue(this.#s)}set value(e){document.documentElement.style.setProperty(this.#s,e)}get[Symbol.toStringTag](){return"CSSVariable"}}class w extends Array{constructor(e){if(super(),l(e))super.push(e);else if(m(e))for(const t of e)t&&super.push(t);else e&&super.push(e)}get first(){return super.at(0)}get last(){return super.at(super.length-1)}}const k=(e,...t)=>g(e)?e(...t):e||(t&&t.length>0?t[0]:void 0);class E extends Map{constructor(e,t){t?(super(),this.add(e,t)):super(e)}add(e,t){for(const r of e??[])t?this.set(...t(r)):this.set(r)}getOrSet(e,t){let r;return this.has(e)?r=this.get(e):this.set(e,r=k(t)),r}setByFn(e,t){return this.set(e,t(this.get(e)))}upsertByFn(e,t,r){return this.has(e)?this.setByFn(e,r):this.setByFn(e,t)}updateValues(e){return this.forEach(((t,r)=>this.set(r,e(t,r,this)))),this}get array(){return[...super.entries()]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}sorted(e){return new E(this.sortedArray(e))}objectsArray(e="key",t="value",r=(([e],[t])=>e.localeCompare(t))){return(r?this.array.sort(r):this.array).map((([r,s])=>({[e]:r,[t]:s})))}get[Symbol.toStringTag](){return"ExtMap"}}class j{static XYdistance(e,t,r="x",s="y"){let n,o,i,a;return h(e)||h(t)?([n,o]=t,[i,a]=e):(n=t[r],o=t[s],i=e[r],a=e[s]),Math.sqrt(Math.pow(n-i,2)+Math.pow(o-a,2))}static distance(e,t="x",r="y"){return h(e)?j.XYdistance([0,0],e):j.XYdistance({[t]:0,[r]:0},e,t,r)}static growth(e,t){return(t-e)/e*100}static percentageIncrease(e,t,r=!1){const s=(t-e)/e*100;return r?Math.floor(s):s}static applyPercentageIncrease(e,t,r=!1){const s=e+e*t/100;return r?Math.floor(s):s}static intervalFromPercentageDelta(e,t,r=!1){return[this.applyPercentageIncrease(e,-t,r),this.applyPercentageIncrease(e,+t,r)].sort(((e,t)=>e-t))}get[Symbol.toStringTag](){return"ExtMath"}}class P extends Set{addIterable(e,t){for(const r of e)super.add(k(t,r));return this}get array(){return[...this]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}get[Symbol.toStringTag](){return"ExtSet"}}class R{static extend(e,t,r="; ",s=""){let n=e.length?e:s;const o=t?v(t)?[t]:t:[];for(const t of o)n+=(e.length?r:"")+t;return n}get[Symbol.toStringTag](){return"ExtString"}}const T=(e,t)=>{let r=!1;if(e.length!==t.length)r=!0;else for(let s=0;!r&&s<e.length;++s)r=h(e[s])&&h(t[s])?!T(e[s],t[s]):e[s]!==t[s];return!r},N=(e,t)=>e===t||(h(e)&&h(t)?T(e,t):((e,t)=>{const r=([e],[t])=>e.localeCompare(t),s=Object.entries(e),n=Object.entries(t);let o=!1;if(s.length!==n.length)o=!0;else{const e=s.sort(r),t=n.sort(r);for(let r=0;!o&&r<e.length;++r)o=e[r][0]!==t[r][0]||e[r][1]!==t[r][1]}return o})(e,t));class O{static#n=/\s*(?<!\\)\|(?!\s)/;static isCompound=e=>l(e)&&this.#n.test(e);static structure=(...e)=>{let t="",r=e;if(1===e.length){const t=e[0];if((l(t)||!m(t))&&void 0!==t)return t.toString().trim();r=t}for(const e of r)t=R.extend(t,void 0===e?"":e.toString().trim(),"|");return t};static destructure=e=>O.isCompound(e)?e.split(this.#n):[e];get[Symbol.toStringTag](){return"Compound"}}class M extends E{constructor(e,t){t?(super(),this.add(e,t)):super(e)}add(e,t){for(const r of e||[]){const[e,s]=k(t,r);this.set(e,s)}}has(...e){return super.has(O.structure(...e))}get(...e){return super.get(O.structure(...e))}set(e,t){return super.set(O.structure(e),t)}delete(...e){return super.delete(O.structure(...e))}forEach(e){super.forEach(((t,r)=>e(t,O.destructure(r),this)))}get array(){return[...this.entries()]}*entries(){for(const[e,t]of super.entries())yield[O.destructure(e),t]}*keys(){for(const e of super.keys())yield O.destructure(e)}*[Symbol.iterator](){for(const[e,t]of super.entries())yield[O.destructure(e),t]}get[Symbol.toStringTag](){return"CompoundMap"}}const I=(e,t=500)=>{let r;return(...s)=>{clearTimeout(r),r=setTimeout((()=>e(s)),t)}},q=e=>m(e)?e:[e],A="Others: ";class L extends Map{constructor(e=[],t){super(),this.addCounts(e,t)}addCounts(e=[],t=void 0){for(const r of q(e))g(t)?this.addCount(t(r)):this.addCount(r);return this}addCount(e,t=1){if(h(e)&&2===e.length)this.addCount(e[0],e[1]);else if(h(e)){console.log("adding array",e);for(const t of e)this.addCount(t)}else this.set(e,(this.get(e)??0)+t);return this}toArray(){return[...this.entries()]}get totalCount(){let e=0;for(const t of this.values())e+=t;return e}*percentages(e=2){const t=this.totalCount;for(const[r,s]of this.entries())yield[r,s,parseFloat((s/t*100).toFixed(e))]}*objects(e="key",t="count",r=!1,s="percentage",n=2){if(r)for(const[r,o,i]of this.percentages(n))yield{[e]:r,[t]:o,[s]:i};else for(const[r,s]of this.entries())yield{[e]:r,[t]:s}}toObjectsArray(e="key",t="count",r=!1,s="percentage",n=2){return[...this.objects(e,t,r,s,n)]}sort(e){const t=this.toArray().sort(e);this.clear();for(const[e,r]of t)this.addCount(e,r);return this}sortByCount(e=!1){return this.sort((([t,r],[s,n])=>e?r-n:n-r))}groupLowerThan(e=5,t="; ",r=A){const s=[];for(const[t,r,n]of this.percentages())n<=e&&s.push([t,r]);if(s.length>1){let e="",n=0;for(const[o,i]of s)e=R.extend(e,`${o}: ${i}`,t,r),n+=i,this.delete(o);this.addCount(e,n)}return this}#o(e,t=A){return l(e)&&e.startsWith(t)}groupedLabel(e=A){for(const t of this.keys())if(this.#o(t,e))return t}hasGroupedLabel(e=A){return void 0!==this.groupedLabel(e)}unstructuredGroup(e=A){const t=[],r=this.groupedLabel(e);if(r)for(const{groups:{label:e,value:s}}of r.matchAll(/(Others: )?((?<label>.+?):\s(?<value>\d+);?\s?)+?/g))t.push([e,parseInt(s)]);return t}get[Symbol.toStringTag](){return"ItemsCounters"}}class z extends E{constructor(e,t){t?(super(),this.add(e,t)):super(e)}getOrSet(e){return super.getOrSet(e,new P)}add(e,t){for(const r of e??[]){const[e,s]=k(t,r);this.getOrSet(e).add(s)}return this}addWithChildren(e,t,r){for(const s of e){const[e,n]=k(t,s);if(r)for(const t of n)this.getOrSet(e).add(k(r,t));else this.getOrSet(e).addIterable(n)}return this}get array(){return super.array.map((([e,t])=>[e,[...t]]))}getSortedArray(e=(([e],[t])=>e.localeCompare(t)),t=(([e],[t])=>e.localeCompare(t))){const r=this.array.sort(e);return r.forEach((([e,r])=>r.sort(t))),r}get sortedArray(){return this.getSortedArray()}get[Symbol.toStringTag](){return"MapOfSet"}}class F extends Set{addValues(e,t,r){for(const s of q(e))super.add(r?O.structure(r,s[t]):s[t]);return this}addChildren(e,t,r,s){for(const n of q(e))this.add(n[t],r,s&&`${n[s]}`);return this}sortedArray(e){return[...this].sort(e)}toMap(){const e=new E;for(const[t,r]of this)e.getOrSet(t,new Set).add(r);return e}iterator(){return this[Symbol.iterator]}*[Symbol.iterator](){for(const e of this.values())yield O.isCompound(e)?O.destructure(e):e}get[Symbol.toStringTag](){return"PropertyValues"}}class ${#i=new w;#a=0;static rankBy(e,t,r="rank"){return e.sort(((e,r)=>r[t]-e[t])).forEach(((e,t)=>e[r]=t+1)),e}constructor(e=[],t){this.add(e,t)}#u(e){return this.#i.push(e),this.#a+=e,this}add(e=[],t){if(m(e))if(t)for(const r of e)this.add(t(r));else for(const t of e)this.#u(t);else this.#u(e);return this}reset(){return this.#i=new w,this.#a=0,this}get mean(){return this.size?this.sum/this.size:0}get stddev(){if(!this.size)return 0;const e=this.mean;return Math.sqrt(this.#i.map((t=>Math.pow(t-e,2))).reduce(((e,t)=>e+t))/this.size)}get variation(){return this.size?this.stddev/this.mean:0}get sum(){return this.#a}get size(){return this.#i.length}get growth(){return j.growth(this.#i.first,this.#i.last)}get#l(){const e=new $;let t;for(let r=0;r<this.#i.length;++r)r>0&&e.add(j.growth(t,this.#i[r])),t=this.#i[r];return e}get growthMean(){return this.#l.mean}get growthStddev(){return this.#l.stddev}get[Symbol.toStringTag](){return"Stats"}}class D extends E{constructor(e,t=!1){if(l(e)||!m(e)||t)super(e);else{const t=[];for(const r of e){const[e,s]=[...r];t.push([O.structure(e),s])}super(t)}}has(...e){return super.has(O.structure(e))}get(...e){return super.get(O.structure(e))}delete(...e){return super.delete(O.structure(e))}static splitArgs(e){return l(e)||!m(e)?[e]:e.length>1?2===e.length?e:[e.slice(0,-1),e.slice(-1)[0]]:1===e.length?[e[0],void 0]:void 0}getOrSet(...e){const[t,r]=D.splitArgs(e);return super.getOrSet(t,r)}set(...e){const[t,r]=D.splitArgs(e);return super.set(O.structure(t),r)}tupleForEach(e){this.forEach(((t,r,s)=>e(t,O.destructure(r),s)))}*tupleKeys(){for(const e of this.keys())yield O.destructure(e)}*tupleEntries(){for(const[e,t]of this.entries())yield[O.destructure(e),t]}get[Symbol.toStringTag](){return"Tuple_Any"}}class V extends D{constructor(e){if(!l(e)&&m(e)){const t=new D;for(const r of e){const[e,s]=[...r];t.getOrSet(e,new P).set(O.structure(s))}const r=[];t.forEach(((e,t)=>r.push(t,e))),super(r,!0)}else super(e)}getOrSet(...e){const[t,r]=D.splitArgs(e);return super.getOrSet(t,new P).add(r)}from(e,t){for(const r of e)this.getOrSet(...t(r));return this}get array(){return super.array.map((([e,t])=>[O.destructure(e),t]))}sortedArray(){return this.array.map((([e,t])=>[e,[...t].sort()]))}get[Symbol.toStringTag](){return"Tuple_Set"}}const W=e=>e.map((e=>h(e)?{label:e[0],value:e[1]}:{label:e,value:e})),G=(e,t,r=!0)=>e.map((([e,s])=>({[t]:e,value:e,children:s.map((s=>({[t]:s,value:r?O.structure(e,s):s})))})));function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},U.apply(this,arguments)}function B(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}B(".pivot-slider{width:300px}");B(".pp-spin-container-centered{align-items:center;display:flex;justify-content:center;padding:5px}.pp-spin-page{left:0;position:fixed;top:0;z-index:10}");const H={containerClassName:a.default.string,containerStyle:a.default.object,tip:a.default.string,size:a.default.oneOf(["default","large","small"]),hidden:a.default.bool},_=e.forwardRef((({containerClassName:e,containerStyle:r,tip:s,hidden:n,...o},a)=>n?null:i.default.createElement("div",{className:e,style:r,ref:a},i.default.createElement(t.Spin,U({className:"pp-spin-container-centered",size:""},o)),i.default.createElement("span",{className:"pp-spin-container-centered"},i.default.createElement(t.Typography,null,s)))));_.propTypes=H,_.defaultProps={containerClassName:"",containerStyle:{},hidden:!1,tip:""};const J=(t=!1)=>{const[r,s]=e.useState(!!t);return[r,e.useCallback((()=>s((e=>!e))),[])]};class X{hookName;resultDesc={};resultRefs=new E;paramsRefs=[];initialized=!1;constructor(e,t){this.hookName=e,this.resultDesc=t}get nbResults(){return this.resultDesc?.values?.length??0}resultName(e){return this.resultDesc.values[e].name}resultType(e){return this.resultDesc.values[e].type}resultInfos(e){return[this.resultType(e),this.resultName(e)]}getResultsValue(e,t){switch(this.resultDesc.type){case"simple":return t;case"object":return t[this.resultName(e)];case"array":return t[e];default:console.warn(`HookDescription ${this.hookName}, result could not be interpreted`)}}saveParams(e){e&&(this.paramsRefs=[...e])}saveResults(e){for(let t=0;t<this.nbResults;++t){const r=this.getResultsValue(t,e);this.resultRefs.set(this.resultName(t),r)}}compareResultValues(e,t,r){const[s,n]=e,o=this.resultRefs.get(n);s!==typeof t&&r.getOrSet(n,[]).push({type:"New value type mismatch",found:typeof t,expected:s}),o!==t&&r.getOrSet(n,[]).push({type:"Value change",from:o,to:t})}checkParams(e){const t=[];if(e&&this.paramsRefs){if(this.paramsRefs.length!=e.length)t.push(`Alert: number of params is not consistent: old ${this.paramsRefs.length}, new ${e}`);else for(let r=0;r<e.length;++r)this.paramsRefs[r]!==e[r]&&t.push(`Param ${r+1} has changed from '${this.paramsRefs[r]}' to '${e[r]}'`);t.length&&(console.log(`${this.hookName} params have changed, a render is likely to happen`),console.log("Parameters changes",t))}}checkResults(e){const t=new E;for(let r=0;r<this.nbResults;++r){const s=this.resultInfos(r),n=this.getResultsValue(r,e);this.compareResultValues(s,n,t)}t.size?console.log(`A render has generated change(s) on ${this.hookName} result`,t.objectsArray("field","comments",null)):console.log(`A render has generated no change(s) on ${this.hookName} result`)}checkAll(e,t){this.initialized?(this.checkParams(e),this.checkResults(t),console.log("+--------------------------")):console.log(`Ready to track ${this.hookName} result`),this.saveParams(e),this.saveResults(t),this.initialized=!0}}const Y=(t=!1)=>{const[r,s]=e.useState(!!t);return[r,e.useCallback(s,[]),e.useCallback((()=>s((e=>!e))),[])]},K=()=>{const t=e.useRef(!0);return e.useEffect((()=>{t.current=!1}),[]),t.current},Q=t=>{const r=e.useRef(t);return[r.current,e=>{const t=!r.current||!N(r.current,e);return r.current=e,t}]},Z=(e,t,r)=>e+1>r?t:e+1,ee=(e,t,r)=>e-1<t?r:e-1,te=t=>{const r=e.useRef();return r.current||(r.current=t()),r.current},re=(t={})=>{const[r,s]=e.useState(t),n=e.useCallback((()=>s(t)),[t]),o=e.useCallback((()=>s({})),[]);return{object:r,set:e.useCallback((e=>s(e)),[]),assign:e.useCallback((e=>s((t=>({...t,...e})))),[]),remove:e.useCallback((e=>s((t=>{for(const r of q(e))delete t[r];return{...t}}))),[]),reset:n,clear:o}},se=(t,r)=>{const[,s]=Q(),n=e.useRef();return s(r)&&(n.current=t()),n.current},ne=t=>{const r=e.useRef(t);e.useEffect((()=>()=>g(r.current)&&r.current()),[])},oe=t=>{const r=e.useRef(t);e.useEffect((()=>{g(r.current)&&r.current()}),[])},ie=(t,r,s=window,n=!0,o={})=>{const[i,a]=e.useState(!!n),{capture:u,once:l,passive:c}=o,d=e.useRef(),f=e.useCallback((e=>{r(e),l&&a(!1)}),[r,l]),p=e.useCallback((()=>{d.current=new AbortController,s.addEventListener(t,f,{capture:u,once:l,passive:c,signal:d.current.signal})}),[u,l,c,s,f,t]),h=()=>d.current?.abort();oe((()=>n&&p())),ne((()=>i&&h()));const g=e.useCallback((()=>a((e=>(e?h():p(),!e)))),[p]);return{working:i,toggle:g}},ae=(t=30,r=!0)=>{const s=()=>({width:window.innerWidth,height:window.innerHeight}),[n,o]=e.useState(s),{height:i,width:a}=n,u=e.useCallback((()=>o((e=>{const{height:r,width:n}=e;return Math.abs(window.innerWidth-n)>=t||Math.abs(window.innerHeight-r)>=t?s():e}))),[t]),{working:l,toggle:c}=ie("resize",u,window,r);return{height:i,width:a,working:l,toggle:e.useCallback((()=>{o(s),c()}),[c])}},ue=(t,r)=>{const s=e.useRef(),[n,o]=e.useState({}),{height:i,width:a,working:u,toggle:l}=ae(t,r);return e.useEffect((()=>{const e=s?.current;o({height:e?.offsetHeight,width:e?.offsetWidth})}),[i,a]),{...n,ref:s,working:u,toggle:l}},le=()=>"visible"===document?.visibilityState,ce=(t,r=1e3,s=!0)=>{const n=e.useRef(),[o,i]=e.useState(s),a=e.useCallback((()=>{n.current&&(clearInterval(n.current),n.current=void 0,i(!1))}),[n]),u=e.useCallback((()=>{n.current||(n.current=setInterval(t,r),i(!0))}),[n,t,r]);oe((()=>s&&u())),ne((()=>clearInterval(n.current)));const l=e.useCallback((()=>o?a():u()),[o,u,a]);return{working:o,toggle:l,stop:a,start:u}},de=(e=30,t=!0)=>{const{width:r,working:s,toggle:n}=ae(e,t);return{width:r,working:s,toggle:n}},fe={loading:!0,ok:void 0,status:void 0,statusText:void 0,data:{},error:void 0},pe=(t,r=!0)=>{const[s,n]=e.useState(t),o=e.useCallback((()=>{n((e=>Math.max(e-1,0)))}),[]),{working:i,toggle:a,stop:u,start:l}=ce(o,1e3,r);i&&0===s&&u();const c=e.useCallback((()=>s>0&&a()),[s,a]),d=e.useCallback((()=>{n(t),!i&&r&&l()}),[t,i,r,l]);return{working:i,remainingTime:s,toggle:c,reset:d}},he=(t,r="",s=!0)=>{const n=te((()=>new y(t,r,s))),[o,i]=e.useState(n.value);return e.useEffect((()=>{n.value=o}),[o]),[o,e.useCallback((e=>i(e)),[]),()=>{n.remove(),i()}]};class ge extends S{constructor(e){super(`msg => {\n      const action = ${e.toString()};\n      const { data } = msg;\n      const result = action(data);\n      postMessage(result);\n    }`)}get[Symbol.toStringTag](){return"_Worker"}}B(".svg-icon-wrapper{align-items:center;display:flex;justify-content:center;transition:background-color .5s ease-out;transition:transform .5s ease-out}.svg-icon-wrapper:active{transform:scale(.9)}.svg-icon-wrapper:hover{background-color:#b4aeae;transform:scale(1.1)}");const me={name:a.default.oneOf(["profile","menufold","menuunfold","partner","customer","project","administration","map","link","mail","phone","list","cards","edit","plus","delete","graph","tabledata","maximize","minimize","medal","shoppingcart","home","buildings","configuration","down","up"]).isRequired,size:a.default.number,color:a.default.string,className:a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.string)]),cursor:a.default.string,style:a.default.object},ve=({name:t,size:r,color:s,className:n,cursor:o,style:a,...l})=>{const[c,d]=e.useState(null),f=1.6*r,p={width:`${f}px`,height:`${f}px`,borderRadius:`${f}px`,color:s,cursor:o,...a},h={width:`${r}px`,height:`${r}px`,fontSize:`${r}px`,lineHeight:`${r}px`,stroke:"currentColor",fill:"currentColor"};return e.useEffect((()=>{let e=!0;const r=`${t[0].toUpperCase()}${t.substring(1)}`;return function(e){switch(e){case"./svg/Administration.jsx":return Promise.resolve().then((function(){return require("./Administration-20e6aa78.js")}));case"./svg/Buildings.jsx":return Promise.resolve().then((function(){return require("./Buildings-bad67bb5.js")}));case"./svg/Cards.jsx":return Promise.resolve().then((function(){return require("./Cards-0b9d5846.js")}));case"./svg/Configuration.jsx":return Promise.resolve().then((function(){return require("./Configuration-7fe3483e.js")}));case"./svg/Customer.jsx":return Promise.resolve().then((function(){return require("./Customer-434d65ca.js")}));case"./svg/Delete.jsx":return Promise.resolve().then((function(){return require("./Delete-2bb50725.js")}));case"./svg/Down.jsx":return Promise.resolve().then((function(){return require("./Down-6733964d.js")}));case"./svg/Edit.jsx":return Promise.resolve().then((function(){return require("./Edit-45bc790e.js")}));case"./svg/Graph.jsx":return Promise.resolve().then((function(){return require("./Graph-872a4098.js")}));case"./svg/Home.jsx":return Promise.resolve().then((function(){return require("./Home-304ab924.js")}));case"./svg/Link.jsx":return Promise.resolve().then((function(){return require("./Link-e2f6b304.js")}));case"./svg/List.jsx":return Promise.resolve().then((function(){return require("./List-16a2ef0f.js")}));case"./svg/Mail.jsx":return Promise.resolve().then((function(){return require("./Mail-4bc3e667.js")}));case"./svg/Map.jsx":return Promise.resolve().then((function(){return require("./Map-5d2878a8.js")}));case"./svg/Maximize.jsx":return Promise.resolve().then((function(){return require("./Maximize-068b59ea.js")}));case"./svg/Medal.jsx":return Promise.resolve().then((function(){return require("./Medal-98821ab8.js")}));case"./svg/Menufold.jsx":return Promise.resolve().then((function(){return require("./Menufold-1971be08.js")}));case"./svg/Menuunfold.jsx":return Promise.resolve().then((function(){return require("./Menuunfold-7e86d8fb.js")}));case"./svg/Minimize.jsx":return Promise.resolve().then((function(){return require("./Minimize-46aa7f85.js")}));case"./svg/Partner.jsx":return Promise.resolve().then((function(){return require("./Partner-8fb6806b.js")}));case"./svg/Phone.jsx":return Promise.resolve().then((function(){return require("./Phone-41c12f80.js")}));case"./svg/Plus.jsx":return Promise.resolve().then((function(){return require("./Plus-c3c76280.js")}));case"./svg/Profile.jsx":return Promise.resolve().then((function(){return require("./Profile-62d00a06.js")}));case"./svg/Project.jsx":return Promise.resolve().then((function(){return require("./Project-4916c146.js")}));case"./svg/Shoppingcart.jsx":return Promise.resolve().then((function(){return require("./Shoppingcart-3902a809.js")}));case"./svg/Tabledata.jsx":return Promise.resolve().then((function(){return require("./Tabledata-b39e7c1d.js")}));case"./svg/Up.jsx":return Promise.resolve().then((function(){return require("./Up-a3c5ae1e.js")}));default:return new Promise((function(t,r){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./svg/${r}.jsx`).then((t=>{if(e){const e=t[r];d(i.default.createElement(e,null))}})).catch((e=>console.error(e))),()=>()=>{e=!1,d(null)}}),[t]),i.default.createElement("span",U({className:u.default("svg-icon-wrapper",n),style:p},l),i.default.createElement("span",{style:h},c))};ve.defaultProps={className:"",size:24,cursor:"pointer",color:"#569ac4",style:{}},ve.propTypes=me;const xe=e.createContext(),be=({children:e,...t})=>i.default.createElement(xe.Provider,{value:{...t}},e),ye=be.Consumer;B(".splitter-container{display:inline-flex;height:100%;width:100%}.splitter-divider-container{align-items:center;display:flex;justify-content:center}.splitter-divider-column{background:linear-gradient(180deg,hsla(0,0%,75%,.82) 5%,#e1e0e0 48%,hsla(0,0%,75%,.82) 99%);height:6px;margin:8px 0;width:98%}.splitter-divider,.splitter-divider-column{border:1px outset #929292;border-radius:4px}.splitter-divider{align-items:center;background-color:#b5b5b5;background:linear-gradient(180deg,hsla(0,0%,75%,.82) 5%,#e1e0e0 48%,hsla(0,0%,75%,.82) 99%);cursor:col-resize;display:flex;height:98%;justify-content:center;touch-action:pan-x pan-y;width:6px}.splitter-divider:hover{background-color:#a1a1a1}.splitter-divider-grabber{border:1px solid #a19898;height:20px;writing-mode:vertical-lr}.splitter-divider-grabber:hover,.splitter-divider:hover .splitter-divider-grabber{border:1px solid #645e5e}.splitter-leftpanel-container,.splitter-rightpanel-container{height:100%;overflow:hidden}");const Se=(e,t)=>(e=>{for(const{onFilter:t,filteredValue:r}of e)if(t&&r)return!0;return!1})(e)&&t.length?t.filter((t=>{for(const{onFilter:r,filteredValue:s}of e)if(r&&s){let e=!1;for(const n of s)if(r(n,t)){e=!0;break}if(!e)return!1}return!0})):t,Ce=e=>{const t=[];for(const{onFilter:r,filteredValue:s}of e)r&&t.push(s||null);return t},we=(e,t)=>e.forEach((r=>{const{dataIndex:s,onFilter:n,filterInitializer:o}=r;if(n&&"none"!==o){const e=new Map;t.forEach((t=>{const r=o?o(t):t[s].trim();let n=[];if(v(r))n=[r];else{if(!m(r))throw new Error("useInitializeTable: incorrect filter values type: "+typeof r);n=r}for(const t of n)e.set(t.toLowerCase(),{text:t,value:t})})),r.filters=[...e.values()].sort(((e,t)=>e.text.localeCompare(t.text)))}return e})),ke=(e,t)=>e.forEach((({dataIndex:e,valueInitializer:r})=>t.forEach((t=>t[e]=r(t))))),Ee=(e,t)=>se((()=>we(e,t)),[e,t]),je=(t,r,s)=>{const[n,o]=e.useState(t);return e.useEffect((()=>{o((()=>(((e,t,r)=>{e.forEach((e=>{const{onFilter:s,sorter:n,dataIndex:o}=e;e.filteredValue=(s&&t?.[o])??null,e.sortOrder=n&&r?.field===o&&r.order||null}))})(t,r,s),[...t])))}),[t,r,s]),n},Pe=(e,t,r)=>{const s=v(r)?[r]:r;let n,o=e?.[t];for(const r of s){o=o?o.includes(r)?o.filter((e=>e!==r)):[r,...o]:[r];const s={[t]:o.length?o:null};n=e?{...e,...s}:{...s}}return n},Re=(t={pagination:null,filters:null,sort:null})=>{const[r,s]=e.useState(t),n=e.useCallback(((e,t,r)=>s({pagination:e,filters:t,sort:r})),[]),o=e.useCallback((e=>s((t=>({...t,pagination:e})))),[]),i=e.useCallback((e=>s((t=>({...t,filters:e})))),[]),a=e.useCallback((()=>s((e=>({...e,filters:null})))),[]),u=e.useCallback(((e,t)=>s((r=>{const{filters:s}=r;return{...r,filters:Pe(s,e,t)}}))),[]),l=e.useCallback((()=>{let e=!1;const t=r.filters;for(const r in t)if(t[r]){e=!0;break}return e}),[r.filters]),c=e.useCallback((e=>s((t=>({...t,sort:e})))),[]);return{tableParams:r,onChange:n,onChangePagination:o,onChangeFilters:i,onToggleFilterValue:u,onClearFilters:a,onChangeSort:c,isFilterActive:l}};B(".tooltip-ul{min-width:150px}");const Te=({liValues:e,children:r,...s})=>{const[n,o]=Y(!1);return i.default.createElement(t.Tooltip,U({open:n,onOpenChange:t=>o(0!==e.length&&t),title:i.default.createElement("ul",{className:"tooltip-ul"},v(e)?i.default.createElement("li",null,e):e.sort().map(((e,t)=>i.default.createElement("li",{key:t},Array.isArray(e)&&2===e.length?`${e[0]} - ${e[1]}`:e))))},s),r)};Te.defaultProps={liValues:""},exports.CSSVariable=C,exports.ClearTableFilters=({isFilterActive:e,onClearFilters:r,...s})=>i.default.createElement(t.Tooltip,{title:e()?"Clear all filters":"No filter"},i.default.createElement(t.Button,U({icon:i.default.createElement(n.FilterOutlined,null),type:"primary",size:"small",disabled:!e(),onClick:r},s),"Clear")),exports.Compound=O,exports.CompoundMap=M,exports.Enum=function(e,t){const r={[Symbol.iterator]:function*(){for(const e of Object.entries(r))yield e}};Object.defineProperties(r,{reserved:{value:["get","has","keys","name","protected","toString","values"]},keys:{get:()=>Object.keys(r)},values:{get:()=>Object.values(r)},has:{value:e=>r.values.includes(e)},get:{value:e=>{for(const[t,s]of Object.entries(r))if(t===e)return s}},name:{value:e},toString:{value:()=>`${r.name} - ${JSON.stringify(r.keys)}`}});for(const e of t){let t,s;if(Array.isArray(e)&&2===e.length?(t=e[0],s=e[1]):"object"==typeof e&&e.key&&e.value?(t=e.key,s=e.value):t=s=e,r.reserved.includes(t))throw new Error(`'${t}' is a reserved keyword`);r[t]=s}return Object.freeze(r)},exports.ExtArray=w,exports.ExtMap=E,exports.ExtMath=j,exports.ExtSet=P,exports.ExtString=R,exports.HSplitter=({name:t,widthToColumn:r,columnReverse:s,children:n})=>{const{width:o,ref:a}=ue(0),u=e.useRef(),l=te((()=>new y(t,[]))),[c,d]=e.useState((()=>t&&l.value.length?l.value:[50,50])),f=()=>r&&o<=r,{toggle:p}=ie("pointermove",(function(e){e.preventDefault();const{clientX:t}=e,{offsetLeft:r}=a.current,s=(t-r)/o*100;s>=0&&s<=100&&d([s,100-s])}),document,!1,{capture:!0}),{toggle:h}=ie("pointerup",(function(){t&&d((e=>l.value=e)),document.body.style.cursor="default",p(),h()}),document,!1);const[g,m]=c;return i.default.createElement("div",{className:"splitter-container",style:{flexDirection:f()?s?"column-reverse":"column":"row"},ref:a},i.default.createElement("div",{className:"splitter-leftpanel-container",style:{width:f()?"100%":`${g}%`}},n?.length>0&&n[0]||"no content"),f()?i.default.createElement("div",{className:"splitter-divider-container"},i.default.createElement("div",{className:"splitter-divider-column"})):i.default.createElement("div",{className:"splitter-divider-container"},i.default.createElement("div",{className:"splitter-divider",onPointerDown:()=>{document.body.style.cursor="col-resize",p(),h()},ref:u},i.default.createElement("div",{className:"splitter-divider-grabber"}))),i.default.createElement("div",{className:"splitter-rightpanel-container",style:{width:f()?"100%":`${m}%`}},n?.length>1&&n[1]||"no content"))},exports.ItemsCounters=L,exports.MapOfSet=z,exports.PageSpin=({containerClassName:t,containerStyle:r,...s})=>{const n=e.useRef(),[o,a]=e.useState({...r,top:0,left:0,opacity:"0%"}),{height:l,width:c}=ae(0);return e.useLayoutEffect((()=>{a({...r,top:(l-n.current.offsetWidth)/2,left:(c-n.current.offsetHeight)/2,opacity:"100%"})}),[]),i.default.createElement(_,U({containerClassName:u.default("pp-spin-page",t),containerStyle:o,ref:n},s))},exports.ParamsConsumer=ye,exports.ParamsContext=xe,exports.ParamsProvider=be,exports.PivotSlider=({className:e,pivot:r,disabled:s,value:n,onChange:o,...a})=>{const[u,l]=j.intervalFromPercentageDelta(r,n,!0);return i.default.createElement(t.Space,{className:e,direction:"horizontal",align:"center"},i.default.createElement(t.Slider,U({className:"pivot-slider",disabled:s,min:0,max:100,step:5,value:n,tooltip:{formatter:e=>`${e}% - [${u}, ${l}]`},marks:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},onChange:e=>o(Math.max(5,e))},a)))},exports.PropertyValues=F,exports.SVGIcon=ve,exports.SpinWithTip=_,exports.Stats=$,exports.StorageItem=y,exports.Switch=({cases:e})=>{const t=e=>{const t=k(e);return console.assert(x(e),"Switch: returned value does not seem to be a JSX element",e),t};for(const{condition:r,action:s}of e){if(!0===r)return t(s);if(void 0===r)return t(s)}return null},exports.TableContext=xe,exports.TableProvider=be,exports.Tuple_Any=D,exports.Tuple_Set=V,exports.UlTooltip=Te,exports.WebWorker=S,exports.buildSelectOptions=W,exports.buildTreeSelectOptions=G,exports.dateRender=e=>e.toLocaleDateString("en-US",{month:"short",year:"numeric"}),exports.debounce=I,exports.debounce_leading=(e,t=500)=>{let r;return(...s)=>{r||e(s),clearTimeout(r),r=setTimeout((()=>r=void 0),t)}},exports.getElementPosition=b,exports.getEventTarget=p,exports.getFilteredSource=Se,exports.getFilteredValues=Ce,exports.getHTMLElement=d,exports.getJSClassname=e=>Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1],exports.getRefPosition=e=>b(c(e)?e.current:e),exports.initializeColumnsFilters=we,exports.initializeSource=ke,exports.integerRender=(e,t)=>Intl.NumberFormat(void 0,t).format(e),exports.isArray=h,exports.isBoolean=e=>!1===e||!0===e,exports.isEventTarget=f,exports.isFunction=g,exports.isInteger=e=>Number.isInteger(e),exports.isIterable=m,exports.isNumber=e=>"number"==typeof e,exports.isNumeric=e=>l(e)&&/^\d+$/.test(e),exports.isPrimitive=v,exports.isProperty=(e,t)=>Object.hasOwn(e,t),exports.isReactElement=x,exports.isReactRef=c,exports.isString=l,exports.noop=()=>{},exports.onArrayFilter=(e,t,r)=>{if(0===e.length)return 0===t[r].length;for(const s of t[r])if(s.toLowerCase()===e.toLowerCase())return!0;return!1},exports.onStringFilter=(e,t,r)=>e.length?t[r].toLowerCase().includes(e.toLowerCase()):0===t[r].length,exports.resolve=k,exports.setColumnFilters=(e,t,r)=>{const s=e.find((({dataIndex:e})=>e===t));s.filters=k(r),s.filterInitializer="none"},exports.sortAlpha=(e,t,r)=>e[r].localeCompare(t[r]),exports.sortDates=(e,t,r)=>e[r]-t[r],exports.sortNumbers=(e,t,r)=>e[r]-t[r],exports.surfaceEquals=N,exports.toIterable=q,exports.useBoolean=Y,exports.useCalculation=t=>{const r=K(),[s,n]=e.useState(t);return e.useEffect((()=>{r||n(t())}),[t]),s},exports.useCheckHook=(t,r,s,...n)=>{const[,o]=J(),i=e.useRef(new X(t,s)),{current:a}=i,u=r(...n);return a.checkAll(n,u),e.useEffect((()=>{setTimeout((()=>{console.log("+--------------------------"),console.log(`-> Checking ${t} with a render that should not change result`),o()}),1e3)}),[o,t]),u},exports.useCheckValuesChanges=Q,exports.useCirclingNumber=(t,r=0)=>{const[s,n]=t,[o,i]=e.useState(r),a=e.useCallback((()=>i((e=>Z(e,s,n)))),[s,n]),u=e.useCallback((()=>i((e=>ee(e,s,n)))),[s,n]);return{current:o,next:Z(o,s,n),prev:ee(o,s,n),gotoNext:a,gotoPrev:u}},exports.useComponentSize=ue,exports.useControlledColumns=(e,t,r,s)=>(Ee(e,t),je(e,r,s)),exports.useCountdown=(t,r,s=!0)=>{const{working:n,remainingTime:o,toggle:i,reset:a}=pe(r,s),u=e.useRef(!1),l=e.useCallback((()=>!1===u.current&&i()),[i]),c=e.useCallback((()=>{a(),u.current=!1}),[a]);return 0!==o||u.current||(g(t)&&t(),u.current=!0),{working:n,remainingTime:o,toggle:l,reset:c}},exports.useDebounce=(t,r)=>e.useRef(I(t,r)).current,exports.useDebounceResult=(t,r,s=500,n)=>{const[o,i]=e.useState(r),a=e.useRef();a.current=t;const u=e.useRef();return e.useEffect((()=>(clearTimeout(u.current),u.current=setTimeout((()=>i(a.current)),s),()=>clearTimeout(u.current))),[s,...n]),o},exports.useDebounceValue=(t,r=500)=>{const[s,n]=e.useState(t);return e.useEffect((()=>{const e=setTimeout((()=>n(t,r)));return()=>clearTimeout(e)}),[t,r]),s},exports.useDocumentVisibility=(t=!0,r={})=>{const[s,n]=e.useState(le);return{visible:s,...ie("visibilitychange",e.useCallback((()=>n(le())),[]),document,t,r)}},exports.useDontMemo=se,exports.useElementPosition=t=>{const r=e.useRef(),{current:s}=t||r,[n,o]=e.useState((()=>b(s)));return e.useEffect((()=>{const{current:e}=t||r,s=new ResizeObserver((()=>o(b(e))));return e&&s.observe(e),()=>e&&s.unobserve(e)}),[t,t?.current]),[t||r,n]},exports.useEventListener=ie,exports.useFetch=(t="",r,s)=>{const n=e.useRef(),[o,i]=J(),{object:a,assign:u,reset:l}=re(fe);return n.current||(n.current=new AbortController),e.useEffect((()=>(l(),fetch(encodeURI(new URL(t,r)),{...s,signal:n.current?.signal}).then((e=>{const{ok:t,status:r,statusText:s}=e;t?e.json().then((e=>u({loading:!1,ok:t,status:r,statusText:s,data:e}))):u({loading:!1,ok:t,status:r,statusText:s})})).catch((e=>u({loading:!1,ok:!1,error:e}))),()=>{n.current?.abort(),n.current=null})),[t,r,s,u,l,o]),[a,i,n.current?.abort||noop]},exports.useFilteredSource=(t,r)=>{const[s,n]=e.useState((()=>Se(t,r))),o=Ce(t),[,i]=Q(o);return e.useEffect((()=>{i(o)&&n(Se(t,r))}),[t,o,i]),e.useEffect((()=>{n(Se(t,r))}),[r]),s},exports.useFocus=()=>{const[t,r]=e.useState(!1),s=e.useRef(),n=()=>document.activeElement===s.current,o=()=>r(!0),i=()=>r(!1);return e.useEffect((()=>{s?.current&&s?.current.addEventListener&&n()&&r(!0)}),[]),e.useEffect((()=>{const e=s?.current;if(e&&e.addEventListener)return e.addEventListener("focus",o),e.addEventListener("blur",i),()=>{e.removeEventListener("focus",o),e.removeEventListener("blur",i)};console.warn("useFocus: no target element; did you forget to use the ref?")}),[s?.current]),[t,e=>e?!n()&&s.current.focus():n()&&s.current.blur(),s]},exports.useForceRender=()=>{const[,e]=J();return e},exports.useFunctionResult=(t,r)=>{const s=K(),[n,o]=e.useState(t),i=e.useCallback(t,[...r]);return e.useEffect((()=>{s||o(i())}),[i,s]),n},exports.useGeolocation=(t=2e3,r=!0,s)=>{const[n,o]=e.useState(),i=e=>o((t=>{let r=!1;if(t instanceof GeolocationPosition&&e instanceof GeolocationPosition||t instanceof GeolocationPositionError&&e instanceof GeolocationPositionError){const s=t instanceof GeolocationPosition?t.coords:t,n=t instanceof GeolocationPosition?e.coords:e;for(const e in s)if(!(e in n)||s[e]!==n[e]){r=!0;break}}else r=!0;return r?e:t})),a=e.useCallback((()=>navigator.geolocation.getCurrentPosition(i,i,s)),[s]),{working:u,toggle:l}=ce(a,t,r);return{success:n instanceof GeolocationPosition||(GeolocationPositionError,!1),result:n,working:u,toggle:l}},exports.useHover=t=>{const[r,s]=e.useState(!1);return e.useEffect((()=>{const e=p(t);if(!e)return;const r=()=>s(!0),n=()=>s(!1);return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",n),()=>()=>{e.removeEventListener("onMouseEnter",r),e.removeEventListener("onMouseLeave",n)}}),[t]),r},exports.useInitializeColumnsFilters=Ee,exports.useInitializedSource=(e,t)=>se((()=>ke(e,t)),[e,t]),exports.useInterval=ce,exports.useIsFirstRender=K,exports.useIsMobileView=(t=500)=>{const[r,s]=Y(window.innerWidth<=t),{width:n}=de();return e.useEffect((()=>{s(n<=t)}),[n]),r},exports.useIsMounted=()=>{const t=e.useRef(!1),r=e.useCallback((()=>t.current),[]);return e.useEffect((()=>(t.current=!0,()=>t.current=!1)),[]),r},exports.useNewClassRef=te,exports.useObject=re,exports.useOnce=t=>{const[r]=e.useState(t);return r},exports.useOndismount=ne,exports.useOnmount=oe,exports.useResizeObserver=(t,r=30,s="content-box")=>{const n=e=>({width:e?.offsetWidth,heigth:e?.offsetHeight}),[o,i]=e.useState(n);return e.useEffect((()=>{const e=p(t);if(e){const t=new ResizeObserver((()=>i((t=>{const{width:s,heigth:o}=t,{width:i,heigth:a}=n(e);return void 0===s||Math.abs(s-i)>=r||Math.abs(o-a)>=r?{width:i,heigth:a}:t}))));return t.observe(e,{box:s}),()=>t.disconnect(e)}}),[t,r,s]),o},exports.useRunOnce=t=>{const[r,s]=e.useState(!1),[n,o]=J();return e.useEffect((()=>{r||(t()?s(!0):o())}),[t,r,o,n]),r},exports.useSelectOptions=t=>e.useMemo((()=>W(t)),[t]),exports.useStorageItem=he,exports.useStorageObject=(t,r={},s=!0)=>{const[n,o]=he(t,r,s),i=re(n),{object:a}=i;return e.useEffect((()=>{o(a)}),[a,o]),i},exports.useStoredTableParams=t=>{const r=te((()=>new y(t,{pagination:null,filters:null,sort:null}))),{tableParams:s,...n}=Re(r.value);return e.useEffect((()=>{r.value!==s&&(r.value=s)}),[s,r]),{tableParams:s,...n}},exports.useTableParams=Re,exports.useTimer=pe,exports.useToggle=J,exports.useTreeSelectOptions=(t,r=!0)=>e.useMemo((()=>G(t,r)),[t,r]),exports.useUpdateColumnsFromParams=je,exports.useWebWorker=t=>{const r=()=>{const e=new ge(t);return e.onmessage=e=>{const{data:t}=e;o((e=>{const{queueCount:r,data:s}=e;return s.push(t),{...e,execStatus:r>1?"RUNNING":"IDLE",success:!0,queueCount:r-1,comment:"execution succeeded",evt:void 0}}))},e.onerror=e=>{o((t=>{const{queueCount:r}=t;return{...t,execStatus:r>1?"RUNNING":"IDLE",success:!1,queueCount:r-1,comment:"last execution failed",evt:e}}))},e},s=e.useRef(r()),[n,o]=e.useState({execStatus:"IDLE",success:void 0,queueCount:0,comment:"",evt:void 0,data:[],run:e=>{o((t=>{const{execStatus:n,queueCount:o}=t;switch(n){case"IDLE":return s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"message sent for execution",data:[],evt:void 0};case"RUNNING":return s.current.postMessage(e),{...t,queueCount:o+1,comment:"warning, multiple executions queued",evt:void 0};case"DEAD":return s.current=r(),s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"revived a dead worker",data:[],evt:void 0};default:return{...t,execStatus:"undefined state",data:[],evt:void 0}}}))},kill:()=>{s.current.terminate(),o({...n,execStatus:"DEAD",success:void 0,queueCount:0,comment:"worker terminated",data:[],evt:void 0})}});return n},exports.useWindowHeight=(e=30,t=!0)=>{const{height:r,working:s,toggle:n}=ae(e,t);return{height:r,working:s,toggle:n}},exports.useWindowSize=ae,exports.useWindowWidth=de;
