"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("classnames");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=s(e),o=s(t),u=s(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".svg-icon-wrapper{align-items:center;display:flex;justify-content:center;transition:background-color .5s ease-out;transition:transform .5s ease-out}.svg-icon-wrapper:active{transform:scale(.9)}.svg-icon-wrapper:hover{background-color:#b4aeae;transform:scale(1.1)}");const a={name:o.default.oneOf(["profile","menufold","menuunfold","partner","customer","project","administration","map","link","mail","phone","list","cards","edit","plus","delete","graph","tabledata","maximize","minimize","medal","shoppingcart","home","buildings","configuration","down","up"]).isRequired,size:o.default.number,color:o.default.string,className:o.default.oneOfType([o.default.string,o.default.arrayOf(o.default.string)]),cursor:o.default.string,style:o.default.object},c=({name:t,size:r,color:s,className:o,cursor:a,style:c,...l})=>{const[h,d]=e.useState(null),g=1.6*r,f={width:`${g}px`,height:`${g}px`,borderRadius:`${g}px`,color:s,cursor:a,...c},p={width:`${r}px`,height:`${r}px`,fontSize:`${r}px`,lineHeight:`${r}px`,stroke:"currentColor",fill:"currentColor"};return e.useEffect((()=>{let e=!0;const r=`${t[0].toUpperCase()}${t.substring(1)}`;return function(e){switch(e){case"./svg/Administration.jsx":return Promise.resolve().then((function(){return require("./Administration-20e6aa78.js")}));case"./svg/Buildings.jsx":return Promise.resolve().then((function(){return require("./Buildings-bad67bb5.js")}));case"./svg/Cards.jsx":return Promise.resolve().then((function(){return require("./Cards-0b9d5846.js")}));case"./svg/Configuration.jsx":return Promise.resolve().then((function(){return require("./Configuration-7fe3483e.js")}));case"./svg/Customer.jsx":return Promise.resolve().then((function(){return require("./Customer-434d65ca.js")}));case"./svg/Delete.jsx":return Promise.resolve().then((function(){return require("./Delete-2bb50725.js")}));case"./svg/Down.jsx":return Promise.resolve().then((function(){return require("./Down-6733964d.js")}));case"./svg/Edit.jsx":return Promise.resolve().then((function(){return require("./Edit-45bc790e.js")}));case"./svg/Graph.jsx":return Promise.resolve().then((function(){return require("./Graph-872a4098.js")}));case"./svg/Home.jsx":return Promise.resolve().then((function(){return require("./Home-304ab924.js")}));case"./svg/Link.jsx":return Promise.resolve().then((function(){return require("./Link-e2f6b304.js")}));case"./svg/List.jsx":return Promise.resolve().then((function(){return require("./List-16a2ef0f.js")}));case"./svg/Mail.jsx":return Promise.resolve().then((function(){return require("./Mail-4bc3e667.js")}));case"./svg/Map.jsx":return Promise.resolve().then((function(){return require("./Map-5d2878a8.js")}));case"./svg/Maximize.jsx":return Promise.resolve().then((function(){return require("./Maximize-068b59ea.js")}));case"./svg/Medal.jsx":return Promise.resolve().then((function(){return require("./Medal-98821ab8.js")}));case"./svg/Menufold.jsx":return Promise.resolve().then((function(){return require("./Menufold-1971be08.js")}));case"./svg/Menuunfold.jsx":return Promise.resolve().then((function(){return require("./Menuunfold-7e86d8fb.js")}));case"./svg/Minimize.jsx":return Promise.resolve().then((function(){return require("./Minimize-46aa7f85.js")}));case"./svg/Partner.jsx":return Promise.resolve().then((function(){return require("./Partner-8fb6806b.js")}));case"./svg/Phone.jsx":return Promise.resolve().then((function(){return require("./Phone-41c12f80.js")}));case"./svg/Plus.jsx":return Promise.resolve().then((function(){return require("./Plus-c3c76280.js")}));case"./svg/Profile.jsx":return Promise.resolve().then((function(){return require("./Profile-62d00a06.js")}));case"./svg/Project.jsx":return Promise.resolve().then((function(){return require("./Project-4916c146.js")}));case"./svg/Shoppingcart.jsx":return Promise.resolve().then((function(){return require("./Shoppingcart-3902a809.js")}));case"./svg/Tabledata.jsx":return Promise.resolve().then((function(){return require("./Tabledata-b39e7c1d.js")}));case"./svg/Up.jsx":return Promise.resolve().then((function(){return require("./Up-a3c5ae1e.js")}));default:return new Promise((function(t,r){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./svg/${r}.jsx`).then((t=>{if(e){const e=t[r];d(n.default.createElement(e,null))}})).catch((e=>console.error(e))),()=>()=>{e=!1,d(null)}}),[t]),n.default.createElement("span",i({className:u.default("svg-icon-wrapper",o),style:f},l),n.default.createElement("span",{style:p},h))};c.defaultProps={className:"",size:24,cursor:"pointer",color:"#569ac4",style:{}},c.propTypes=a;const l=e=>"string"==typeof e,h=e=>"object"==typeof e&&"current"in e,d=e=>{let t=e;return l(e)?t=document.getElementById(e)||document.querySelector(e):h(e)&&(t=e.current),t instanceof Element?t:void 0},g=e=>e?.addEventListener,f=e=>{const t=d(e);return g(t)?t:void 0};class p{#e;#t;#r;constructor(e,t=[],r=!0){if(!e)throw new Error("LocalStorage: no key provided");this.#e=r?localStorage:sessionStorage,this.#t=e;const s=this.#e.getItem(e);null===s?this.value=t:this.#r=JSON.parse(s)}get key(){return this.#t}get value(){return this.#r}set value(e){this.#r=e,this.#e.setItem(this.#t,JSON.stringify(this.#r))}remove(){this.#e.removeItem(this.#t),this.#r=void 0}get[Symbol.toStringTag](){return"StorageItem"}}class m extends Worker{constructor(e){const t=`onmessage = ${e.toString()}`;var r;super((r=t,URL.createObjectURL(new Blob([r],{type:"application/javascript"})))),this.onmessage=e=>console.log("Message received from Worker",e),this.onerror=e=>{console.log("Error occured in Worker",e),e.preventDefault()}}get[Symbol.toStringTag](){return"WebWorker"}}class v{#s;constructor(e){this.#s=e.startsWith("--")?e:`--${this.#s}`}get value(){return getComputedStyle(document.documentElement).getPropertyValue(this.#s)}set value(e){document.documentElement.style.setProperty(this.#s,e)}get[Symbol.toStringTag](){return"CSSVariable"}}class b extends Map{getOrSet(e,t){return this.has(e)?t=this.get(e):this.set(e,t),t}upsert(e,t,r){return this.has(e)?this.set(e,r(this.get(e))):this.set(e,t()),this}get array(){return[...this.entries()]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}sorted(e){return new b(this.sortedArray(e))}objectsArray(e="key",t="value",r=(([e],[t])=>e.localeCompare(t))){return(r?this.array.sort(r):this.array).map((([r,s])=>({[e]:r,[t]:s})))}get[Symbol.toStringTag](){return"ExtMap"}}const x=e=>Array.isArray(e),y=e=>"function"==typeof e,k=e=>y(e?.[Symbol.iterator]);class S{static XYdistance(e,t,r="x",s="y"){let n,o,u,i;return x(e)||x(t)?([n,o]=t,[u,i]=e):(n=t[r],o=t[s],u=e[r],i=e[s]),Math.sqrt(Math.pow(n-u,2)+Math.pow(o-i,2))}static distance(e,t="x",r="y"){return x(e)?XYdistance([0,0],e):XYdistance({[t]:0,[r]:0},e,t,r)}static growth(e,t){return(t-e)/e*100}get[Symbol.toStringTag](){return"ExtMath"}}class w{static extend(e,t,r="; ",s=""){return e.concat(e.length?r:s,t)}get[Symbol.toStringTag](){return"ExtString"}}class j{static#n=/\s*(?<!\\)\|(?!\s)/;static isCompound=e=>l(e)&&this.#n.test(e);static structure=(...e)=>{let t="",r=e;if(1===e.length){const t=e[0];if(l(t)||!k(t))return t.toString().trim();r=t}for(const e of r)t=w.extend(t,e.toString().trim(),"|");return t};static destructure=e=>j.isCompound(e)?e.split(this.#n):[e];get[Symbol.toStringTag](){return"Compound"}}const C=e=>k(e)?e:[e],E="Others: ";class P extends Map{constructor(e=[],t){super(),this.addCounts(e,t)}addCounts(e=[],t=void 0){for(const r of C(e))y(t)?this.addCounts(t(r)):this.addCount(r);return this}addCount(e,t=1){return Array.isArray(e)&&2===e.length?this.addCount(e[0],e[1]):this.set(e,(this.get(e)??0)+t),this}toArray(){return[...this.entries()]}get totalCount(){let e=0;for(const t of this.values())e+=t;return e}*percentages(e=2){const t=this.totalCount;for(const[r,s]of this.entries())yield[r,s,parseFloat((s/t*100).toFixed(e))]}*objects(e="key",t="count",r=!1,s="percentage",n=2){if(r)for(const[r,o,u]of this.percentages(n))yield{[e]:r,[t]:o,[s]:u};else for(const[r,s]of this.entries())yield{[e]:r,[t]:s}}toObjectsArray(e="key",t="count",r=!1,s="percentage",n=2){return[...this.objects(e,t,r,s,n)]}sort(e){const t=this.toArray().sort(e);this.clear();for(const[e,r]of t)this.addCount(e,r);return this}sortByCount(e=!1){return this.sort((([t,r],[s,n])=>e?r-n:n-r))}groupLowerThan(e=5,t="; ",r=E){const s=[];for(const[t,r,n]of this.percentages())n<=e&&s.push([t,r]);if(s.length>1){let e="",n=0;for(const[o,u]of s)e=w.extend(e,`${o}: ${u}`,t,r),n+=u,this.delete(o);this.addCount(e,n)}return this}#o(e,t=E){return l(e)&&e.startsWith(t)}groupedLabel(e=E){for(const t of this.keys())if(this.#o(t,e))return t}hasGroupedLabel(e=E){return void 0!==this.groupedLabel(e)}unstructuredGroup(e=E){const t=[],r=this.groupedLabel(e);if(r)for(const{groups:{label:e,value:s}}of r.matchAll(/(Others: )?((?<label>.+?):\s(?<value>\d+);?\s?)+?/g))t.push([e,parseInt(s)]);return t}get[Symbol.toStringTag](){return"ItemsCounter"}}class R extends Set{addValues(e,t,r){for(const s of C(e))super.add(r?j.structure(r,s[t]):s[t]);return this}addChildren(e,t,r,s){for(const n of C(e))this.add(n[t],r,s&&`${n[s]}`);return this}sortedArray(e){return[...this].sort(e)}toMap(){const e=new b;for(const[t,r]of this)e.getOrSet(t,new Set).add(r);return e}iterator(){return this[Symbol.iterator]}*[Symbol.iterator](){for(const e of this.values())yield j.isCompound(e)?j.destructure(e):e}get[Symbol.toStringTag](){return"PropertyValues"}}class q{#u=[];#i=0;static rankBy(e,t,r){return e.sort(((e,r)=>r[t]-e[t])).forEach(((e,t)=>e[r]=t+1)),e}constructor(e=[],t){this.add(e,t)}#a(e){return this.#u.push(e),this.#i+=e,this}add(e=[],t){if(k(e))if(t)for(const r of e)this.add(t(r));else for(const t of e)this.#a(t);else this.#a(e);return this}reset(){return this.#u=[],this.#i=0,this}get mean(){return this.size?this.sum/this.size:NaN}get stddev(){if(!this.size)return NaN;const e=this.mean;return Math.sqrt(this.#u.map((t=>Math.pow(t-e,2))).reduce(((e,t)=>e+t))/this.size)}get variation(){return this.size?this.stddev/this.mean:NaN}get sum(){return this.#i}get size(){return this.#u.length}get[Symbol.toStringTag](){return"Stats"}}class M extends b{constructor(e){const t=[];if(!l(e)&&k(e)){for(const r of e){const[e,s]=[...r];t.push([j.structure(e),s])}super(t)}else super(e)}has(...e){return super.has(j.structure(e))}get(...e){return super.get(j.structure(e))}delete(...e){return super.delete(j.structure(e))}static splitArgs(e){return l(e)||!k(e)?[e]:e.length>1?2===e.length?e:[e.slice(0,-1),e.slice(-1)[0]]:1===e.length?[e[0],void 0]:void 0}getOrSet(...e){const[t,r]=M.splitArgs(e);return super.getOrSet(t,r)}set(...e){const[t,r]=M.splitArgs(e);return super.set(j.structure(t),r)}tupleForEach(e){this.forEach(((t,r,s)=>e(t,j.destructure(r),s)))}*tupleKeys(){for(const e of this.keys())yield j.destructure(e)}*tupleEntries(){for(const[e,t]of this.entries())yield[j.destructure(e),t]}get[Symbol.toStringTag](){return"TupleMap"}}const N=(t=!1)=>{const[r,s]=e.useState(!!t);return[r,e.useCallback((()=>s((e=>!e))),[])]};class T{hookName;resultDesc={};resultRefs=new b;paramsRefs=[];initialized=!1;constructor(e,t){this.hookName=e,this.resultDesc=t}get nbResults(){return this.resultDesc?.values?.length??0}resultName(e){return this.resultDesc.values[e].name}resultType(e){return this.resultDesc.values[e].type}resultInfos(e){return[this.resultType(e),this.resultName(e)]}getResultsValue(e,t){switch(this.resultDesc.type){case"simple":return t;case"object":return t[this.resultName(e)];case"array":return t[e];default:console.warn(`HookDescription ${this.hookName}, result could not be interpreted`)}}saveParams(e){e&&(this.paramsRefs=[...e])}saveResults(e){for(let t=0;t<this.nbResults;++t){const r=this.getResultsValue(t,e);this.resultRefs.set(this.resultName(t),r)}}compareResultValues(e,t,r){const[s,n]=e,o=this.resultRefs.get(n);s!==typeof t&&r.getOrSet(n,[]).push({type:"New value type mismatch",found:typeof t,expected:s}),o!==t&&r.getOrSet(n,[]).push({type:"Value change",from:o,to:t})}checkParams(e){const t=[];if(e&&this.paramsRefs){if(this.paramsRefs.length!=e.length)t.push(`Alert: number of params is not consistent: old ${this.paramsRefs.length}, new ${e}`);else for(let r=0;r<e.length;++r)this.paramsRefs[r]!==e[r]&&t.push(`Param ${r+1} has changed from '${this.paramsRefs[r]}' to '${e[r]}'`);t.length&&(console.log(`${this.hookName} params have changed, a render is likely to happen`),console.log("Parameters changes",t))}}checkResults(e){const t=new b;for(let r=0;r<this.nbResults;++r){const s=this.resultInfos(r),n=this.getResultsValue(r,e);this.compareResultValues(s,n,t)}t.size?console.log("A render has generated change(s) on ${this.hookName} result",t.objectsArray("field","comments",null)):console.log(`A render has generated no change(s) on ${this.hookName} result`)}checkAll(e,t){this.initialized?(this.checkParams(e),this.checkResults(t),console.log("+--------------------------")):console.log(`Ready to track ${this.hookName} result`),this.saveParams(e),this.saveResults(t),this.initialized=!0}}const O=()=>{const t=e.useRef(!0);return e.useEffect((()=>{t.current=!1}),[]),t.current},L=t=>{const r=e.useRef(t);e.useEffect((()=>()=>y(r.current)&&r.current()),[])},$=t=>{const r=e.useRef(t);e.useEffect((()=>{y(r.current)&&r.current()}),[])},A=(t,r,s=window,n=!0,o={})=>{const[u,i]=e.useState(!!n),{capture:a,once:c,passive:l}=o,h=e.useRef(),d=e.useCallback((e=>{r(e),c&&i(!1)}),[r,c]),g=e.useCallback((()=>{h.current=new AbortController,s.addEventListener(t,d,{capture:a,once:c,passive:l,signal:h.current.signal})}),[a,c,l,s,d,t]),f=()=>h.current?.abort();$((()=>n&&g())),L((()=>u&&f()));const p=e.useCallback((()=>i((e=>(e?f():g(),!e)))),[g]);return{working:u,toggle:p}},I=(t=30,r=!0)=>{const s=()=>({width:window.innerWidth,height:window.innerHeight}),[n,o]=e.useState(s()),{height:u,width:i}=n,a=e.useCallback((()=>o((e=>{const{height:r,width:n}=e;return Math.abs(window.innerWidth-n)>=t||Math.abs(window.innerHeight-r)>=t?s():e}))),[t]),{working:c,toggle:l}=A("resize",a,window,r);return{height:u,width:i,working:c,toggle:e.useCallback((()=>{o(s),l()}),[l])}},z=()=>"visible"===document?.visibilityState,D=(t,r=1e3,s=!0)=>{const n=e.useRef(),[o,u]=e.useState(s),i=e.useCallback((()=>{n.current&&(clearInterval(n.current),n.current=void 0,u(!1))}),[n]),a=e.useCallback((()=>{n.current||(n.current=setInterval(t,r),u(!0))}),[n,t,r]);$((()=>s&&a())),L((()=>clearInterval(n.current)));const c=e.useCallback((()=>o?i():a()),[o,a,i]);return{working:o,toggle:c,stop:i,start:a}},G=(t,r=!0)=>{const[s,n]=e.useState(t),o=e.useCallback((()=>{n((e=>Math.max(e-1,0)))}),[]),{working:u,toggle:i,stop:a,start:c}=D(o,1e3,r);u&&0===s&&a();const l=e.useCallback((()=>s>0&&i()),[s,i]),h=e.useCallback((()=>{n(t),!u&&r&&c()}),[t,u,r,c]);return{working:u,remainingTime:s,toggle:l,reset:h}};class W extends m{constructor(e){super(`msg => {\n      const action = ${e.toString()};\n      const { data } = msg;\n      const result = action(data);\n      postMessage(result);\n    }`)}}exports.CSSVariable=v,exports.Compound=j,exports.Enum=function(e,t){const r={[Symbol.iterator]:function*(){for(const e of Object.entries(r))yield e}};Object.defineProperties(r,{reserved:{value:["get","has","keys","name","protected","toString","values"]},keys:{get:()=>Object.keys(r)},values:{get:()=>Object.values(r)},has:{value:e=>r.values.includes(e)},get:{value:e=>{for(const[t,s]of Object.entries(r))if(t===e)return s}},name:{value:e},toString:{value:()=>`${r.name} - ${JSON.stringify(r.keys)}`}});for(const e of t){let t,s;if(Array.isArray(e)&&2===e.length?(t=e[0],s=e[1]):"object"==typeof e&&e.key&&e.value?(t=e.key,s=e.value):t=s=e,r.reserved.includes(t))throw new Error(`'${t}' is a reserved keyword`);r[t]=s}return Object.freeze(r)},exports.ExtMap=b,exports.ExtMath=S,exports.ExtString=w,exports.ItemCounters=P,exports.PropertyValues=R,exports.SVGIcon=c,exports.Stats=q,exports.StorageItem=p,exports.TupleMap=M,exports.WebWorker=m,exports.getEventTarget=f,exports.getHTMLElement=d,exports.getJSClassname=e=>Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1],exports.isArray=x,exports.isBoolean=e=>!1===e||!0===e,exports.isEventTarget=g,exports.isFunction=y,exports.isIterable=k,exports.isNumber=e=>"number"==typeof e,exports.isNumeric=e=>l(e)&&/^\d+$/.test(e),exports.isProperty=(e,t)=>Object.hasOwn(e,t),exports.isReactRef=h,exports.isString=l,exports.toIterable=C,exports.useCalculation=t=>{const r=O(),[s,n]=e.useState(t);return e.useEffect((()=>{r||n(t())}),[t]),s},exports.useCheckHook=(t,r,s,...n)=>{const[,o]=N(),u=e.useRef(new T(t,s)),{current:i}=u,a=r(...n);return i.checkAll(n,a),e.useEffect((()=>{setTimeout((()=>{console.log("+--------------------------"),console.log(`-> Checking ${t} with a render that should not change result`),o()}),1e3)}),[o,t]),a},exports.useComponentSize=(t,r)=>{const s=e.useRef(),[n,o]=e.useState({}),{height:u,width:i,working:a,toggle:c}=I(t,r);return e.useEffect((()=>{const e=s?.current;o({height:e?.offsetHeight,width:e?.offsetWidth})}),[u,i]),{...n,ref:s,working:a,toggle:c}},exports.useCountdown=(t,r,s=!0)=>{const{working:n,remainingTime:o,toggle:u,reset:i}=G(r,s),a=e.useRef(!1),c=e.useCallback((()=>!1===a.current&&u()),[u]),l=e.useCallback((()=>{i(),a.current=!1}),[i]);return 0!==o||a.current||(y(t)&&t(),a.current=!0),{working:n,remainingTime:o,toggle:c,reset:l}},exports.useDocumentVisibility=(t=!0,r={})=>{const[s,n]=e.useState(z);return{visible:s,...A("visibilitychange",e.useCallback((()=>n(z())),[]),document,t,r)}},exports.useEventListener=A,exports.useFetch=(t,r="",s)=>{const n=e.useRef({loading:!0}),[o,u]=e.useState(n.current);return e.useEffect((()=>{let e,o,i;u(n.current),fetch(encodeURI(new URL(t,r).toString()),s).then((t=>(({status:e,ok:i,statusText:o}=t),t.json()))).then((t=>u({status:e,ok:i,statusText:o,loading:!1,result:t}))).catch((e=>u({status:400,ok:!1,statusText:e.message,loading:!1})))}),[t,r,s]),o},exports.useFocus=()=>{const[t,r]=e.useState(!1),s=e.useRef(),n=()=>document.activeElement===s.current,o=()=>r(!0),u=()=>r(!1);return e.useEffect((()=>{s?.current&&s?.current.addEventListener&&n()&&r(!0)}),[]),e.useEffect((()=>{const e=s?.current;if(e&&e.addEventListener)return e.addEventListener("focus",o),e.addEventListener("blur",u),()=>{e.removeEventListener("focus",o),e.removeEventListener("blur",u)};console.warn("useFocus: no target element; did you forget to use the ref?")}),[s?.current]),[t,e=>e?!n()&&s.current.focus():n()&&s.current.blur(),s]},exports.useForceRender=()=>{const[,e]=N();return e},exports.useFunctionResult=(t,r)=>{const s=O(),[n,o]=e.useState(t),u=e.useCallback(t,[...r]);return e.useEffect((()=>{s||o(u())}),[u,s]),n},exports.useGeolocation=(t=2e3,r=!0,s)=>{const[n,o]=e.useState(),u=e=>o((t=>{let r=!1;if(t instanceof GeolocationPosition&&e instanceof GeolocationPosition||t instanceof GeolocationPositionError&&e instanceof GeolocationPositionError){const s=t instanceof GeolocationPosition?t.coords:t,n=t instanceof GeolocationPosition?e.coords:e;for(const e in s)if(!(e in n)||s[e]!==n[e]){r=!0;break}}else r=!0;return r?e:t})),i=e.useCallback((()=>navigator.geolocation.getCurrentPosition(u,u,s)),[s]),{working:a,toggle:c}=D(i,t,r);return{success:n instanceof GeolocationPosition||(GeolocationPositionError,!1),result:n,working:a,toggle:c}},exports.useHover=t=>{const[r,s]=e.useState(!1);return e.useEffect((()=>{const e=f(t);if(!e)return;const r=()=>s(!0),n=()=>s(!1);return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",n),()=>()=>{e.removeEventListener("onMouseEnter",r),e.removeEventListener("onMouseLeave",n)}}),[t]),r},exports.useInterval=D,exports.useIsFirstRender=O,exports.useObject=(t={})=>{const[r,s]=e.useState(t),n=e.useCallback((()=>s(t)),[t]),o=e.useCallback((()=>s({})),[]),u=e.useCallback((e=>s(e)),[]),i=e.useCallback(((e,t=!0)=>{if(t)s((t=>({...t,...e})));else for(const t in e)r[t]=e[t]}),[r]),a=e.useCallback(((e,t=!0)=>s((r=>{const s="string"==typeof e?[e]:e;for(const e of s)delete r[e];return t?{...r}:r}))),[]),c=e.useCallback((()=>s((e=>({...e})))),[]);return{object:r,set:u,assign:i,remove:a,reset:n,clear:o,render:c}},exports.useOndismount=L,exports.useOnmount=$,exports.useResizeObserver=(t,r=30,s="content-box")=>{const n=e=>({width:e?.offsetWidth,heigth:e?.offsetHeight}),[o,u]=e.useState(n);return e.useEffect((()=>{const e=f(t);if(e){const t=new ResizeObserver((()=>u((t=>{const{width:s,heigth:o}=t,{width:u,heigth:i}=n(e);return void 0===s||Math.abs(s-u)>=r||Math.abs(o-i)>=r?{width:u,heigth:i}:t}))));return t.observe(e,{box:s}),()=>t.disconnect(e)}}),[t,r,s]),o},exports.useStorageItem=(t,r="",s=!0)=>{const n=e.useRef();n.current||(n.current=new p(t,r,s));const[o,u]=e.useState(n.current.value);return[o,e=>u(n.current.value=e)]},exports.useTimer=G,exports.useToggle=N,exports.useWebWorker=t=>{const r=()=>{const e=new W(t);return e.onmessage=e=>{const{data:t}=e;o((e=>{const{queueCount:r,data:s}=e;return s.push(t),{...e,execStatus:r>1?"RUNNING":"IDLE",success:!0,queueCount:r-1,comment:"execution succeeded",evt:void 0}}))},e.onerror=e=>{o((t=>{const{queueCount:r}=t;return{...t,execStatus:r>1?"RUNNING":"IDLE",success:!1,queueCount:r-1,comment:"last execution failed",evt:e}}))},e},s=e.useRef(r()),[n,o]=e.useState({execStatus:"IDLE",success:void 0,queueCount:0,comment:"",evt:void 0,data:[],run:e=>{o((t=>{const{execStatus:n,queueCount:o}=t;switch(n){case"IDLE":return s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"message sent for execution",data:[],evt:void 0};case"RUNNING":return s.current.postMessage(e),{...t,queueCount:o+1,comment:"warning, multiple executions queued",evt:void 0};case"DEAD":return s.current=r(),s.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"revived a dead worker",data:[],evt:void 0};default:return{...t,execStatus:"undefined state",data:[],evt:void 0}}}))},kill:()=>{s.current.terminate(),o({...n,execStatus:"DEAD",success:void 0,queueCount:0,comment:"worker terminated",data:[],evt:void 0})}});return n},exports.useWindowHeight=(e=30,t=!0)=>{const{height:r,working:s,toggle:n}=I(e,t);return{height:r,working:s,toggle:n}},exports.useWindowSize=I,exports.useWindowWidth=(e=30,t=!0)=>{const{width:r,working:s,toggle:n}=I(e,t);return{width:r,working:s,toggle:n}};
