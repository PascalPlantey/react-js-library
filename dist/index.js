"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),s=require("classnames");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t),u=r(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},i.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var s=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===s&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".svg-icon-wrapper{align-items:center;display:flex;justify-content:center;transition:background-color .5s ease-out;transition:transform .5s ease-out}.svg-icon-wrapper:active{transform:scale(.9)}.svg-icon-wrapper:hover{background-color:#b4aeae;transform:scale(1.1)}");const a={name:o.default.oneOf(["profile","menufold","menuunfold","partner","customer","project","administration","map","link","mail","phone","list","cards","edit","plus","delete","graph","tabledata","maximize","minimize","medal","shoppingcart","home","buildings","configuration","down","up"]).isRequired,size:o.default.number,color:o.default.string,className:o.default.oneOfType([o.default.string,o.default.arrayOf(o.default.string)]),cursor:o.default.string,style:o.default.object},c=({name:t,size:s,color:r,className:o,cursor:a,style:c,...l})=>{const[h,d]=e.useState(null),f=1.6*s,g={width:`${f}px`,height:`${f}px`,borderRadius:`${f}px`,color:r,cursor:a,...c},p={width:`${s}px`,height:`${s}px`,fontSize:`${s}px`,lineHeight:`${s}px`,stroke:"currentColor",fill:"currentColor"};return e.useEffect((()=>{let e=!0;const s=`${t[0].toUpperCase()}${t.substring(1)}`;return function(e){switch(e){case"./svg/Administration.jsx":return Promise.resolve().then((function(){return require("./Administration-20e6aa78.js")}));case"./svg/Buildings.jsx":return Promise.resolve().then((function(){return require("./Buildings-bad67bb5.js")}));case"./svg/Cards.jsx":return Promise.resolve().then((function(){return require("./Cards-0b9d5846.js")}));case"./svg/Configuration.jsx":return Promise.resolve().then((function(){return require("./Configuration-7fe3483e.js")}));case"./svg/Customer.jsx":return Promise.resolve().then((function(){return require("./Customer-434d65ca.js")}));case"./svg/Delete.jsx":return Promise.resolve().then((function(){return require("./Delete-2bb50725.js")}));case"./svg/Down.jsx":return Promise.resolve().then((function(){return require("./Down-6733964d.js")}));case"./svg/Edit.jsx":return Promise.resolve().then((function(){return require("./Edit-45bc790e.js")}));case"./svg/Graph.jsx":return Promise.resolve().then((function(){return require("./Graph-872a4098.js")}));case"./svg/Home.jsx":return Promise.resolve().then((function(){return require("./Home-304ab924.js")}));case"./svg/Link.jsx":return Promise.resolve().then((function(){return require("./Link-e2f6b304.js")}));case"./svg/List.jsx":return Promise.resolve().then((function(){return require("./List-16a2ef0f.js")}));case"./svg/Mail.jsx":return Promise.resolve().then((function(){return require("./Mail-4bc3e667.js")}));case"./svg/Map.jsx":return Promise.resolve().then((function(){return require("./Map-5d2878a8.js")}));case"./svg/Maximize.jsx":return Promise.resolve().then((function(){return require("./Maximize-068b59ea.js")}));case"./svg/Medal.jsx":return Promise.resolve().then((function(){return require("./Medal-98821ab8.js")}));case"./svg/Menufold.jsx":return Promise.resolve().then((function(){return require("./Menufold-1971be08.js")}));case"./svg/Menuunfold.jsx":return Promise.resolve().then((function(){return require("./Menuunfold-7e86d8fb.js")}));case"./svg/Minimize.jsx":return Promise.resolve().then((function(){return require("./Minimize-46aa7f85.js")}));case"./svg/Partner.jsx":return Promise.resolve().then((function(){return require("./Partner-8fb6806b.js")}));case"./svg/Phone.jsx":return Promise.resolve().then((function(){return require("./Phone-41c12f80.js")}));case"./svg/Plus.jsx":return Promise.resolve().then((function(){return require("./Plus-c3c76280.js")}));case"./svg/Profile.jsx":return Promise.resolve().then((function(){return require("./Profile-62d00a06.js")}));case"./svg/Project.jsx":return Promise.resolve().then((function(){return require("./Project-4916c146.js")}));case"./svg/Shoppingcart.jsx":return Promise.resolve().then((function(){return require("./Shoppingcart-3902a809.js")}));case"./svg/Tabledata.jsx":return Promise.resolve().then((function(){return require("./Tabledata-b39e7c1d.js")}));case"./svg/Up.jsx":return Promise.resolve().then((function(){return require("./Up-a3c5ae1e.js")}));default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./svg/${s}.jsx`).then((t=>{if(e){const e=t[s];d(n.default.createElement(e,null))}})).catch((e=>console.error(e))),()=>()=>{e=!1,d(null)}}),[t]),n.default.createElement("span",i({className:u.default("svg-icon-wrapper",o),style:g},l),n.default.createElement("span",{style:p},h))};c.defaultProps={className:"",size:24,cursor:"pointer",color:"#569ac4",style:{}},c.propTypes=a;const l=e=>"string"==typeof e,h=e=>{let t=e;return l(e)?t=document.getElementById(e)||document.querySelector(e):e?.current&&(t=e.current),t instanceof Element?t:void 0},d=e=>e?.addEventListener,f=e=>{const t=h(e);return d(t)?t:void 0};class g{#e;#t;#s;constructor(e,t=[],s=!0){if(!e)throw new Error("LocalStorage: no key provided");this.#e=s?localStorage:sessionStorage,this.#t=e;const r=this.#e.getItem(e);null===r?this.value=t:this.#s=JSON.parse(r)}get key(){return this.#t}get value(){return this.#s}set value(e){this.#s=e,this.#e.setItem(this.#t,JSON.stringify(this.#s))}remove(){this.#e.removeItem(this.#t),this.#s=void 0}}class p extends Worker{constructor(e){const t=`onmessage = ${e.toString()}`;var s;super((s=t,URL.createObjectURL(new Blob([s],{type:"application/javascript"})))),this.onmessage=e=>console.log("Message received from Worker",e),this.onerror=e=>{console.log("Error occured in Worker",e),e.preventDefault()}}}class m extends Map{getOrSet(e,t){return this.has(e)?t=this.get(e):this.set(e,t),t}upsert(e,t,s){return this.has(e)?this.set(e,s(this.get(e))):this.set(e,t()),this}get array(){return[...this.entries()]}sortedArray(e=(([e],[t])=>e.localeCompare(t))){return this.array.sort(e)}sorted(e){return new m(this.sortedArray(e))}objectsArray(e="key",t="value",s=(([e],[t])=>e.localeCompare(t))){return(s?this.array.sort(s):this.array).map((([s,r])=>({[e]:s,[t]:r})))}get[Symbol.toStringTag](){return"ExtMap"}}const v=e=>Array.isArray(e),x=e=>"function"==typeof e,b=e=>x(e?.[Symbol.iterator]);class y{static extend(e,t,s="; ",r=""){return e.concat(e.length?s:r,t)}}class k{static#r=/\s*(?<!\\)\|(?!\s)/;static isCompound=e=>l(e)&&this.#r.test(e);static structure=(...e)=>{let t="",s=e;if(1===e.length){const t=e[0];if(l(t)||!b(t))return t.toString().trim();s=t}for(const e of s)t=y.extend(t,e.toString().trim(),"|");return t};static destructure=e=>k.isCompound(e)?e.split(this.#r):[e]}const w=e=>b(e)?e:[e],j="Others: ";class C extends Map{constructor(e=[],t){super(),this.addCounts(e,t)}addCounts(e=[],t=void 0){for(const s of w(e))x(t)?this.addCounts(t(s)):this.addCount(s);return this}addCount(e,t=1){return Array.isArray(e)&&2===e.length?this.addCount(e[0],e[1]):this.set(e,(this.get(e)??0)+t),this}toArray(){return[...this.entries()]}get totalCount(){let e=0;for(const t of this.values())e+=t;return e}*percentages(e=2){const t=this.totalCount;for(const[s,r]of this.entries())yield[s,r,parseFloat((r/t*100).toFixed(e))]}*objects(e="key",t="count",s=!1,r="percentage",n=2){if(s)for(const[s,o,u]of this.percentages(n))yield{[e]:s,[t]:o,[r]:u};else for(const[s,r]of this.entries())yield{[e]:s,[t]:r}}toObjectsArray(e="key",t="count",s=!1,r="percentage",n=2){return[...this.objects(e,t,s,r,n)]}sort(e){const t=this.toArray().sort(e);this.clear();for(const[e,s]of t)this.addCount(e,s);return this}sortByCount(e=!1){return this.sort((([t,s],[r,n])=>e?s-n:n-s))}groupLowerThan(e=5,t="; ",s=j){const r=[];for(const[t,s,n]of this.percentages())n<=e&&r.push([t,s]);if(r.length>1){let e="",n=0;for(const[o,u]of r)e=y.extend(e,`${o}: ${u}`,t,s),n+=u,this.delete(o);this.addCount(e,n)}return this}#n(e,t=j){return l(e)&&e.startsWith(t)}groupedLabel(e=j){for(const t of this.keys())if(this.#n(t,e))return t}hasGroupedLabel(e=j){return void 0!==this.groupedLabel(e)}unstructuredGroup(e=j){const t=[],s=this.groupedLabel(e);if(s)for(const{groups:{label:e,value:r}}of s.matchAll(/(Others: )?((?<label>.+?):\s(?<value>\d+);?\s?)+?/g))t.push([e,parseInt(r)]);return t}}class S extends Set{addValues(e,t,s){for(const r of w(e))super.add(s?k.structure(s,r[t]):r[t]);return this}addChildren(e,t,s,r){for(const n of w(e))this.add(n[t],s,r&&`${n[r]}`);return this}sortedArray(e){return[...this].sort(e)}toMap(){const e=new m;for(const[t,s]of this)e.getOrSet(t,new Set).add(s);return e}iterator(){return this[Symbol.iterator]}*[Symbol.iterator](){for(const e of this.values())yield k.isCompound(e)?k.destructure(e):e}}class E extends m{constructor(e){const t=[];if(!l(e)&&b(e)){for(const s of e){const[e,r]=[...s];t.push([k.structure(e),r])}super(t)}else super(e)}has(...e){return super.has(k.structure(e))}get(...e){return super.get(k.structure(e))}delete(...e){return super.delete(k.structure(e))}static splitArgs(e){return l(e)||!b(e)?[e]:e.length>1?2===e.length?e:[e.slice(0,-1),e.slice(-1)[0]]:1===e.length?[e[0],void 0]:void 0}getOrSet(...e){const[t,s]=E.splitArgs(e);return super.getOrSet(t,s)}set(...e){const[t,s]=E.splitArgs(e);return super.set(k.structure(t),s)}tupleForEach(e){this.forEach(((t,s,r)=>e(t,k.destructure(s),r)))}*tupleKeys(){for(const e of this.keys())yield k.destructure(e)}*tupleEntries(){for(const[e,t]of this.entries())yield[k.destructure(e),t]}}const P=(t=!1)=>{const[s,r]=e.useState(!!t);return[s,e.useCallback((()=>r((e=>!e))),[])]};class R{hookName;resultDesc={};resultRefs=new m;paramsRefs=[];initialized=!1;constructor(e,t){this.hookName=e,this.resultDesc=t}get nbResults(){return this.resultDesc?.values?.length??0}resultName(e){return this.resultDesc.values[e].name}resultType(e){return this.resultDesc.values[e].type}resultInfos(e){return[this.resultType(e),this.resultName(e)]}getResultsValue(e,t){switch(this.resultDesc.type){case"simple":return t;case"object":return t[this.resultName(e)];case"array":return t[e];default:console.warn(`HookDescription ${this.hookName}, result could not be interpreted`)}}saveParams(e){e&&(this.paramsRefs=[...e])}saveResults(e){for(let t=0;t<this.nbResults;++t){const s=this.getResultsValue(t,e);this.resultRefs.set(this.resultName(t),s)}}compareResultValues(e,t,s){const[r,n]=e,o=this.resultRefs.get(n);r!==typeof t&&s.getOrSet(n,[]).push({type:"New value type mismatch",found:typeof t,expected:r}),o!==t&&s.getOrSet(n,[]).push({type:"Value change",from:o,to:t})}checkParams(e){const t=[];if(e&&this.paramsRefs){if(this.paramsRefs.length!=e.length)t.push(`Alert: number of params is not consistent: old ${this.paramsRefs.length}, new ${e}`);else for(let s=0;s<e.length;++s)this.paramsRefs[s]!==e[s]&&t.push(`Param ${s+1} has changed from '${this.paramsRefs[s]}' to '${e[s]}'`);t.length&&(console.log(`${this.hookName} params have changed, a render is likely to happen`),console.log("Parameters changes",t))}}checkResults(e){const t=new m;for(let s=0;s<this.nbResults;++s){const r=this.resultInfos(s),n=this.getResultsValue(s,e);this.compareResultValues(r,n,t)}t.size?console.log("A render has generated change(s) on ${this.hookName} result",t.objectsArray("field","comments",null)):console.log(`A render has generated no change(s) on ${this.hookName} result`)}checkAll(e,t){this.initialized?(this.checkParams(e),this.checkResults(t),console.log("+--------------------------")):console.log(`Ready to track ${this.hookName} result`),this.saveParams(e),this.saveResults(t),this.initialized=!0}}const q=()=>{const t=e.useRef(!0);return e.useEffect((()=>{t.current=!1}),[]),t.current},N=t=>{const s=e.useRef(t);e.useEffect((()=>()=>x(s.current)&&s.current()),[])},M=t=>{const s=e.useRef(t);e.useEffect((()=>{x(s.current)&&s.current()}),[])},O=(t,s,r=window,n=!0,o={})=>{const[u,i]=e.useState(!!n),{capture:a,once:c,passive:l}=o,h=e.useRef(),d=e.useCallback((e=>{s(e),c&&i(!1)}),[s,c]),f=e.useCallback((()=>{h.current=new AbortController,r.addEventListener(t,d,{capture:a,once:c,passive:l,signal:h.current.signal})}),[a,c,l,r,d,t]),g=()=>h.current?.abort();M((()=>n&&f())),N((()=>u&&g()));const p=e.useCallback((()=>i((e=>(e?g():f(),!e)))),[f]);return{working:u,toggle:p}},L=(t=30,s=!0)=>{const r=()=>({width:window.innerWidth,height:window.innerHeight}),[n,o]=e.useState(r()),{height:u,width:i}=n,a=e.useCallback((()=>o((e=>{const{height:s,width:n}=e;return Math.abs(window.innerWidth-n)>=t||Math.abs(window.innerHeight-s)>=t?r():e}))),[t]),{working:c,toggle:l}=O("resize",a,window,s);return{height:u,width:i,working:c,toggle:e.useCallback((()=>{o(r),l()}),[l])}},$=()=>"visible"===document?.visibilityState,A=(t,s=1e3,r=!0)=>{const n=e.useRef(),[o,u]=e.useState(r),i=e.useCallback((()=>{n.current&&(clearInterval(n.current),n.current=void 0,u(!1))}),[n]),a=e.useCallback((()=>{n.current||(n.current=setInterval(t,s),u(!0))}),[n,t,s]);M((()=>r&&a())),N((()=>clearInterval(n.current)));const c=e.useCallback((()=>o?i():a()),[o,a,i]);return{working:o,toggle:c,stop:i,start:a}},I=(t,s=!0)=>{const[r,n]=e.useState(t),o=e.useCallback((()=>{n((e=>Math.max(e-1,0)))}),[]),{working:u,toggle:i,stop:a,start:c}=A(o,1e3,s);u&&0===r&&a();const l=e.useCallback((()=>r>0&&i()),[r,i]),h=e.useCallback((()=>{n(t),!u&&s&&c()}),[t,u,s,c]);return{working:u,remainingTime:r,toggle:l,reset:h}};class z extends p{constructor(e){super(`msg => {\n      const action = ${e.toString()};\n      const { data } = msg;\n      const result = action(data);\n      postMessage(result);\n    }`)}}exports.CSSVariable=class{#o;constructor(e){this.#o=e.startsWith("--")?e:`--${this.#o}`}get value(){return getComputedStyle(document.documentElement).getPropertyValue(this.#o)}set value(e){document.documentElement.style.setProperty(this.#o,e)}},exports.Compound=k,exports.Enum=function(e,t){const s={[Symbol.iterator]:function*(){for(const e of Object.entries(s))yield e}};Object.defineProperties(s,{reserved:{value:["get","has","keys","name","protected","toString","values"]},keys:{get:()=>Object.keys(s)},values:{get:()=>Object.values(s)},has:{value:e=>s.values.includes(e)},get:{value:e=>{for(const[t,r]of Object.entries(s))if(t===e)return r}},name:{value:e},toString:{value:()=>`${s.name} - ${JSON.stringify(s.keys)}`}});for(const e of t){let t,r;if(Array.isArray(e)&&2===e.length?(t=e[0],r=e[1]):"object"==typeof e&&e.key&&e.value?(t=e.key,r=e.value):t=r=e,s.reserved.includes(t))throw new Error(`'${t}' is a reserved keyword`);s[t]=r}return Object.freeze(s)},exports.ExtMap=m,exports.ExtMath=class{static XYdistance(e,t,s="x",r="y"){let n,o,u,i;return v(e)||v(t)?([n,o]=t,[u,i]=e):(n=t[s],o=t[r],u=e[s],i=e[r]),Math.sqrt(Math.pow(n-u,2)+Math.pow(o-i,2))}static distance(e,t="x",s="y"){return v(e)?XYdistance([0,0],e):XYdistance({[t]:0,[s]:0},e,t,s)}static growth(e,t){return(t-e)/e*100}},exports.ExtString=y,exports.ItemCounters=C,exports.PropertyValues=S,exports.SVGIcon=c,exports.Stats=class{#u=[];#i=0;static rankBy(e,t,s){return e.sort(((e,s)=>s[t]-e[t])).forEach(((e,t)=>e[s]=t+1)),e}constructor(e=[],t){this.add(e,t)}#a(e){return this.#u.push(e),this.#i+=e,this}add(e=[],t){if(b(e))if(t)for(const s of e)this.add(t(s));else for(const t of e)this.#a(t);else this.#a(e);return this}reset(){return this.#u=[],this.#i=0,this}get mean(){return this.size?this.sum/this.size:NaN}get stddev(){if(!this.size)return NaN;const e=this.mean;return Math.sqrt(this.#u.map((t=>Math.pow(t-e,2))).reduce(((e,t)=>e+t))/this.size)}get variation(){return this.size?this.stddev/this.mean:NaN}get sum(){return this.#i}get size(){return this.#u.length}},exports.StorageItem=g,exports.TupleMap=E,exports.WebWorker=p,exports.getElement=h,exports.getEventTarget=f,exports.isArray=v,exports.isBoolean=e=>!1===e||!0===e,exports.isEventTarget=d,exports.isFunction=x,exports.isIterable=b,exports.isNumber=e=>"number"==typeof e,exports.isNumeric=e=>l(e)&&/^\d+$/.test(e),exports.isProperty=(e,t)=>Object.hasOwn(e,t),exports.isRef=e=>"object"==typeof e&&"current"in e,exports.isString=l,exports.toIterable=w,exports.useCalculation=t=>{const s=q(),[r,n]=e.useState(t);return e.useEffect((()=>{s||n(t())}),[t]),r},exports.useCheckHook=(t,s,r,...n)=>{const[,o]=P(),u=e.useRef(new R(t,r)),{current:i}=u,a=s(...n);return i.checkAll(n,a),e.useEffect((()=>{setTimeout((()=>{console.log("+--------------------------"),console.log(`-> Checking ${t} with a render that should not change result`),o()}),1e3)}),[o,t]),a},exports.useComponentSize=(t,s)=>{const r=e.useRef(),[n,o]=e.useState({}),{height:u,width:i,working:a,toggle:c}=L(t,s);return e.useEffect((()=>{const e=r?.current;o({height:e?.offsetHeight,width:e?.offsetWidth})}),[u,i]),{...n,ref:r,working:a,toggle:c}},exports.useCountdown=(t,s,r=!0)=>{const{working:n,remainingTime:o,toggle:u,reset:i}=I(s,r),a=e.useRef(!1),c=e.useCallback((()=>!1===a.current&&u()),[u]),l=e.useCallback((()=>{i(),a.current=!1}),[i]);return 0!==o||a.current||(x(t)&&t(),a.current=!0),{working:n,remainingTime:o,toggle:c,reset:l}},exports.useDocumentVisibility=(t=!0,s={})=>{const[r,n]=e.useState($);return{visible:r,...O("visibilitychange",e.useCallback((()=>n($())),[]),document,t,s)}},exports.useEventListener=O,exports.useFetch=(t,s="",r)=>{const n=e.useRef({loading:!0}),[o,u]=e.useState(n.current);return e.useEffect((()=>{let e,o,i;u(n.current),fetch(encodeURI(new URL(t,s).toString()),r).then((t=>(({status:e,ok:i,statusText:o}=t),t.json()))).then((t=>u({status:e,ok:i,statusText:o,loading:!1,result:t}))).catch((e=>u({status:400,ok:!1,statusText:e.message,loading:!1})))}),[t,s,r]),o},exports.useFocus=()=>{const[t,s]=e.useState(!1),r=e.useRef(),n=()=>document.activeElement===r.current,o=()=>s(!0),u=()=>s(!1);return e.useEffect((()=>{r?.current&&r?.current.addEventListener&&n()&&s(!0)}),[]),e.useEffect((()=>{const e=r?.current;if(e&&e.addEventListener)return e.addEventListener("focus",o),e.addEventListener("blur",u),()=>{e.removeEventListener("focus",o),e.removeEventListener("blur",u)};console.warn("useFocus: no target element; did you forget to use the ref?")}),[r?.current]),[t,e=>e?!n()&&r.current.focus():n()&&r.current.blur(),r]},exports.useForceRender=()=>{const[,e]=P();return e},exports.useFunctionResult=(t,s)=>{const r=q(),[n,o]=e.useState(t),u=e.useCallback(t,[...s]);return e.useEffect((()=>{r||o(u())}),[u,r]),n},exports.useGeolocation=(t=2e3,s=!0,r)=>{const[n,o]=e.useState(),u=e=>o((t=>{let s=!1;if(t instanceof GeolocationPosition&&e instanceof GeolocationPosition||t instanceof GeolocationPositionError&&e instanceof GeolocationPositionError){const r=t instanceof GeolocationPosition?t.coords:t,n=t instanceof GeolocationPosition?e.coords:e;for(const e in r)if(!(e in n)||r[e]!==n[e]){s=!0;break}}else s=!0;return s?e:t})),i=e.useCallback((()=>navigator.geolocation.getCurrentPosition(u,u,r)),[r]),{working:a,toggle:c}=A(i,t,s);return{success:n instanceof GeolocationPosition||(GeolocationPositionError,!1),result:n,working:a,toggle:c}},exports.useHover=t=>{const[s,r]=e.useState(!1);return e.useEffect((()=>{const e=f(t);if(!e)return;const s=()=>r(!0),n=()=>r(!1);return e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",n),()=>()=>{e.removeEventListener("onMouseEnter",s),e.removeEventListener("onMouseLeave",n)}}),[t]),s},exports.useInterval=A,exports.useIsFirstRender=q,exports.useObject=(t={})=>{const[s,r]=e.useState(t),n=e.useCallback((()=>r(t)),[t]),o=e.useCallback((()=>r({})),[]),u=e.useCallback((e=>r(e)),[]),i=e.useCallback(((e,t=!0)=>{if(t)r((t=>({...t,...e})));else for(const t in e)s[t]=e[t]}),[s]),a=e.useCallback(((e,t=!0)=>r((s=>{const r="string"==typeof e?[e]:e;for(const e of r)delete s[e];return t?{...s}:s}))),[]),c=e.useCallback((()=>r((e=>({...e})))),[]);return{object:s,set:u,assign:i,remove:a,reset:n,clear:o,render:c}},exports.useOndismount=N,exports.useOnmount=M,exports.useResizeObserver=(t,s=30,r="content-box")=>{const n=e=>({width:e?.offsetWidth,heigth:e?.offsetHeight}),[o,u]=e.useState(n);return e.useEffect((()=>{const e=f(t);if(e){const t=new ResizeObserver((()=>u((t=>{const{width:r,heigth:o}=t,{width:u,heigth:i}=n(e);return void 0===r||Math.abs(r-u)>=s||Math.abs(o-i)>=s?{width:u,heigth:i}:t}))));return t.observe(e,{box:r}),()=>t.disconnect(e)}}),[t,s,r]),o},exports.useStorageItem=(t,s="",r=!0)=>{const n=e.useRef();n.current||(n.current=new g(t,s,r));const[o,u]=e.useState(n.current.value);return[o,e=>u(n.current.value=e)]},exports.useTimer=I,exports.useToggle=P,exports.useWebWorker=t=>{const s=()=>{const e=new z(t);return e.onmessage=e=>{const{data:t}=e;o((e=>{const{queueCount:s,data:r}=e;return r.push(t),{...e,execStatus:s>1?"RUNNING":"IDLE",success:!0,queueCount:s-1,comment:"execution succeeded",evt:void 0}}))},e.onerror=e=>{o((t=>{const{queueCount:s}=t;return{...t,execStatus:s>1?"RUNNING":"IDLE",success:!1,queueCount:s-1,comment:"last execution failed",evt:e}}))},e},r=e.useRef(s()),[n,o]=e.useState({execStatus:"IDLE",success:void 0,queueCount:0,comment:"",evt:void 0,data:[],run:e=>{o((t=>{const{execStatus:n,queueCount:o}=t;switch(n){case"IDLE":return r.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"message sent for execution",data:[],evt:void 0};case"RUNNING":return r.current.postMessage(e),{...t,queueCount:o+1,comment:"warning, multiple executions queued",evt:void 0};case"DEAD":return r.current=s(),r.current.postMessage(e),{...t,execStatus:"RUNNING",success:void 0,queueCount:1,comment:"revived a dead worker",data:[],evt:void 0};default:return{...t,execStatus:"undefined state",data:[],evt:void 0}}}))},kill:()=>{r.current.terminate(),o({...n,execStatus:"DEAD",success:void 0,queueCount:0,comment:"worker terminated",data:[],evt:void 0})}});return n},exports.useWindowHeight=(e=30,t=!0)=>{const{height:s,working:r,toggle:n}=L(e,t);return{height:s,working:r,toggle:n}},exports.useWindowSize=L,exports.useWindowWidth=(e=30,t=!0)=>{const{width:s,working:r,toggle:n}=L(e,t);return{width:s,working:r,toggle:n}};
