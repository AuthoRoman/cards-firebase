(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Se={},wr=[],wt=()=>{},Cg=()=>!1,ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ol=t=>t.startsWith("onUpdate:"),He=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Og=Object.prototype.hasOwnProperty,me=(t,e)=>Og.call(t,e),oe=Array.isArray,Tr=t=>fo(t)==="[object Map]",Hh=t=>fo(t)==="[object Set]",ae=t=>typeof t=="function",qe=t=>typeof t=="string",xn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",qh=t=>(Ne(t)||ae(t))&&ae(t.then)&&ae(t.catch),Kh=Object.prototype.toString,fo=t=>Kh.call(t),kg=t=>fo(t).slice(8,-1),zh=t=>fo(t)==="[object Object]",ll=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hi=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ng=/-(\w)/g,qt=po(t=>t.replace(Ng,(e,n)=>n?n.toUpperCase():"")),Dg=/\B([A-Z])/g,Fr=po(t=>t.replace(Dg,"-$1").toLowerCase()),go=po(t=>t.charAt(0).toUpperCase()+t.slice(1)),ra=po(t=>t?`on${go(t)}`:""),Nn=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wh=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qc;const Gh=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=qe(r)?Lg(r):cl(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(qe(t)||Ne(t))return t}const Vg=/;(?![^(]*\))/g,Mg=/:([^]+)/,xg=/\/\*[^]*?\*\//g;function Lg(t){const e={};return t.replace(xg,"").split(Vg).forEach(n=>{if(n){const r=n.split(Mg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ul(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=ul(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=sl(Fg);function Qh(t){return!!t||t===""}const Jh=t=>!!(t&&t.__v_isRef===!0),mo=t=>qe(t)?t:t==null?"":oe(t)||Ne(t)&&(t.toString===Kh||!ae(t.toString))?Jh(t)?mo(t.value):JSON.stringify(t,Xh,2):String(t),Xh=(t,e)=>Jh(e)?Xh(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[ia(r,s)+" =>"]=i,n),{})}:Hh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ia(n))}:xn(e)?ia(e):Ne(e)&&!oe(e)&&!zh(e)?String(e):e,ia=(t,e="")=>{var n;return xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class $g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bg(t,e=St){e&&e.active&&e.effects.push(t)}function jg(){return St}let Jn;class hl{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bg(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ln();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Hg(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Sn,n=Jn;try{return Sn=!0,Jn=this,this._runnings++,Kc(this),this.fn()}finally{zc(this),this._runnings--,Jn=n,Sn=e}}stop(){this.active&&(Kc(this),zc(this),this.onStop&&this.onStop(),this.active=!1)}}function Hg(t){return t.value}function Kc(t){t._trackId++,t._depsLength=0}function zc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yh(t.deps[e],t);t.deps.length=t._depsLength}}function Yh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Sn=!0,ba=0;const Zh=[];function Ln(){Zh.push(Sn),Sn=!1}function Fn(){const t=Zh.pop();Sn=t===void 0?!0:t}function fl(){ba++}function dl(){for(ba--;!ba&&Sa.length;)Sa.shift()()}function ef(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Yh(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Sa=[];function tf(t,e,n){fl();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i??(i=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Sa.push(r.scheduler)))}dl()}const nf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Pa=new WeakMap,Xn=Symbol(""),Ca=Symbol("");function ut(t,e,n){if(Sn&&Jn){let r=Pa.get(t);r||Pa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=nf(()=>r.delete(n))),ef(Jn,i)}}function nn(t,e,n,r,i,s){const a=Pa.get(t);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(n==="length"&&oe(t)){const c=Number(r);a.forEach((f,d)=>{(d==="length"||!xn(d)&&d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(a.get(n)),e){case"add":oe(t)?ll(n)&&l.push(a.get("length")):(l.push(a.get(Xn)),Tr(t)&&l.push(a.get(Ca)));break;case"delete":oe(t)||(l.push(a.get(Xn)),Tr(t)&&l.push(a.get(Ca)));break;case"set":Tr(t)&&l.push(a.get(Xn));break}fl();for(const c of l)c&&tf(c,4);dl()}const qg=sl("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xn)),Wc=Kg();function Kg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ee(this);for(let s=0,a=this.length;s<a;s++)ut(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ln(),fl();const r=Ee(this)[e].apply(this,n);return dl(),Fn(),r}}),t}function zg(t){xn(t)||(t=String(t));const e=Ee(this);return ut(e,"has",t),e.hasOwnProperty(t)}class sf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?sm:cf:s?lf:af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!i){if(a&&me(Wc,n))return Reflect.get(Wc,n,r);if(n==="hasOwnProperty")return zg}const l=Reflect.get(e,n,r);return(xn(n)?rf.has(n):qg(n))||(i||ut(e,"get",n),s)?l:ht(l)?a&&ll(n)?l:l.value:Ne(l)?i?hf(l):yo(l):l}}class of extends sf{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Ri(s);if(!Hs(r)&&!Ri(r)&&(s=Ee(s),r=Ee(r)),!oe(e)&&ht(s)&&!ht(r))return c?!1:(s.value=r,!0)}const a=oe(e)&&ll(n)?Number(n)<e.length:me(e,n),l=Reflect.set(e,n,r,i);return e===Ee(i)&&(a?Nn(r,s)&&nn(e,"set",n,r):nn(e,"add",n,r)),l}deleteProperty(e,n){const r=me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&nn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!xn(n)||!rf.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",oe(e)?"length":Xn),Reflect.ownKeys(e)}}class Wg extends sf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gg=new of,Qg=new Wg,Jg=new of(!0);const pl=t=>t,_o=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ee(t),s=Ee(e);n||(Nn(e,s)&&ut(i,"get",e),ut(i,"get",s));const{has:a}=_o(i),l=r?pl:n?_l:bi;if(a.call(i,e))return l(t.get(e));if(a.call(i,s))return l(t.get(s));t!==i&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,r=Ee(n),i=Ee(t);return e||(Nn(t,i)&&ut(r,"has",t),ut(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ms(t,e=!1){return t=t.__v_raw,!e&&ut(Ee(t),"iterate",Xn),Reflect.get(t,"size",t)}function Gc(t){t=Ee(t);const e=Ee(this);return _o(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function Qc(t,e){e=Ee(e);const n=Ee(this),{has:r,get:i}=_o(n);let s=r.call(n,t);s||(t=Ee(t),s=r.call(n,t));const a=i.call(n,t);return n.set(t,e),s?Nn(e,a)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function Jc(t){const e=Ee(this),{has:n,get:r}=_o(e);let i=n.call(e,t);i||(t=Ee(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&nn(e,"delete",t,void 0),s}function Xc(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function _s(t,e){return function(r,i){const s=this,a=s.__v_raw,l=Ee(a),c=e?pl:t?_l:bi;return!t&&ut(l,"iterate",Xn),a.forEach((f,d)=>r.call(i,c(f),c(d),s))}}function ys(t,e,n){return function(...r){const i=this.__v_raw,s=Ee(i),a=Tr(s),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=i[t](...r),d=n?pl:e?_l:bi;return!e&&ut(s,"iterate",c?Ca:Xn),{next(){const{value:g,done:y}=f.next();return y?{value:g,done:y}:{value:l?[d(g[0]),d(g[1])]:d(g),done:y}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xg(){const t={get(s){return ps(this,s)},get size(){return ms(this)},has:gs,add:Gc,set:Qc,delete:Jc,clear:Xc,forEach:_s(!1,!1)},e={get(s){return ps(this,s,!1,!0)},get size(){return ms(this)},has:gs,add:Gc,set:Qc,delete:Jc,clear:Xc,forEach:_s(!1,!0)},n={get(s){return ps(this,s,!0)},get size(){return ms(this,!0)},has(s){return gs.call(this,s,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:_s(!0,!1)},r={get(s){return ps(this,s,!0,!0)},get size(){return ms(this,!0)},has(s){return gs.call(this,s,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ys(s,!1,!1),n[s]=ys(s,!0,!1),e[s]=ys(s,!1,!0),r[s]=ys(s,!0,!0)}),[t,n,e,r]}const[Yg,Zg,em,tm]=Xg();function gl(t,e){const n=e?t?tm:em:t?Zg:Yg;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(me(n,i)&&i in r?n:r,i,s)}const nm={get:gl(!1,!1)},rm={get:gl(!1,!0)},im={get:gl(!0,!1)};const af=new WeakMap,lf=new WeakMap,cf=new WeakMap,sm=new WeakMap;function om(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function am(t){return t.__v_skip||!Object.isExtensible(t)?0:om(kg(t))}function yo(t){return Ri(t)?t:ml(t,!1,Gg,nm,af)}function uf(t){return ml(t,!1,Jg,rm,lf)}function hf(t){return ml(t,!0,Qg,im,cf)}function ml(t,e,n,r,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const a=am(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return i.set(t,l),l}function fi(t){return Ri(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ri(t){return!!(t&&t.__v_isReadonly)}function Hs(t){return!!(t&&t.__v_isShallow)}function ff(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function lm(t){return Object.isExtensible(t)&&Wh(t,"__v_skip",!0),t}const bi=t=>Ne(t)?yo(t):t,_l=t=>Ne(t)?hf(t):t;class df{constructor(e,n,r,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new hl(()=>e(this._value),()=>Ps(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ee(this);return(!e._cacheable||e.effect.dirty)&&Nn(e._value,e._value=e.effect.run())&&Ps(e,4),pf(e),e.effect._dirtyLevel>=2&&Ps(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cm(t,e,n=!1){let r,i;const s=ae(t);return s?(r=t,i=wt):(r=t.get,i=t.set),new df(r,i,s||!i,n)}function pf(t){var e;Sn&&Jn&&(t=Ee(t),ef(Jn,(e=t.dep)!=null?e:t.dep=nf(()=>t.dep=void 0,t instanceof df?t:void 0)))}function Ps(t,e=4,n,r){t=Ee(t);const i=t.dep;i&&tf(i,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Yt(t){return gf(t,!1)}function um(t){return gf(t,!0)}function gf(t,e){return ht(t)?t:new hm(t,e)}class hm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:bi(e)}get value(){return pf(this),this._value}set value(e){const n=this.__v_isShallow||Hs(e)||Ri(e);e=n?e:Ee(e),Nn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:bi(e),Ps(this,4))}}function Yn(t){return ht(t)?t.value:t}const fm={get:(t,e,n)=>Yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ht(i)&&!ht(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function mf(t){return fi(t)?t:new Proxy(t,fm)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pn(t,e,n,r){try{return r?t(...r):t()}catch(i){vo(i,e,n)}}function Dt(t,e,n,r){if(ae(t)){const i=Pn(t,e,n,r);return i&&qh(i)&&i.catch(s=>{vo(s,e,n)}),i}if(oe(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Dt(t[s],e,n,r));return i}}function vo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const f=s.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,a,l)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ln(),Pn(c,null,10,[t,a,l]),Fn();return}}dm(t,n,i,r)}function dm(t,e,n,r=!0){console.error(t)}let Si=!1,Oa=!1;const nt=[];let $t=0;const Ar=[];let vn=null,Gn=0;const _f=Promise.resolve();let yl=null;function yf(t){const e=yl||_f;return t?e.then(this?t.bind(this):t):e}function pm(t){let e=$t+1,n=nt.length;for(;e<n;){const r=e+n>>>1,i=nt[r],s=Pi(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function vl(t){(!nt.length||!nt.includes(t,Si&&t.allowRecurse?$t+1:$t))&&(t.id==null?nt.push(t):nt.splice(pm(t.id),0,t),vf())}function vf(){!Si&&!Oa&&(Oa=!0,yl=_f.then(If))}function gm(t){const e=nt.indexOf(t);e>$t&&nt.splice(e,1)}function mm(t){oe(t)?Ar.push(...t):(!vn||!vn.includes(t,t.allowRecurse?Gn+1:Gn))&&Ar.push(t),vf()}function Yc(t,e,n=Si?$t+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function Ef(t){if(Ar.length){const e=[...new Set(Ar)].sort((n,r)=>Pi(n)-Pi(r));if(Ar.length=0,vn){vn.push(...e);return}for(vn=e,Gn=0;Gn<vn.length;Gn++){const n=vn[Gn];n.active!==!1&&n()}vn=null,Gn=0}}const Pi=t=>t.id==null?1/0:t.id,_m=(t,e)=>{const n=Pi(t)-Pi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function If(t){Oa=!1,Si=!0,nt.sort(_m);try{for($t=0;$t<nt.length;$t++){const e=nt[$t];e&&e.active!==!1&&Pn(e,null,14)}}finally{$t=0,nt.length=0,Ef(),Si=!1,yl=null,(nt.length||Ar.length)&&If()}}function ym(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let i=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:g,trim:y}=r[d]||Se;y&&(i=n.map(A=>qe(A)?A.trim():A)),g&&(i=n.map(Ra))}let l,c=r[l=ra(e)]||r[l=ra(qt(e))];!c&&s&&(c=r[l=ra(Fr(e))]),c&&Dt(c,t,6,i);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Dt(f,t,6,i)}}function wf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let a={},l=!1;if(!ae(t)){const c=f=>{const d=wf(f,e,!0);d&&(l=!0,He(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(Ne(t)&&r.set(t,null),null):(oe(s)?s.forEach(c=>a[c]=null):He(a,s),Ne(t)&&r.set(t,a),a)}function Eo(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Fr(e))||me(t,e))}let mt=null,Io=null;function qs(t){const e=mt;return mt=t,Io=t&&t.type.__scopeId||null,e}function Tf(t){Io=t}function Af(){Io=null}function Cs(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&uu(-1);const s=qs(e);let a;try{a=t(...i)}finally{qs(s),r._d&&uu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function sa(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:g,data:y,setupState:A,ctx:N,inheritAttrs:V}=t,L=qs(t);let Q,K;try{if(n.shapeFlag&4){const re=i||r,ye=re;Q=Ut(f.call(ye,re,d,g,A,y,N)),K=l}else{const re=e;Q=Ut(re.length>1?re(g,{attrs:l,slots:a,emit:c}):re(g,null)),K=e.props?l:vm(l)}}catch(re){mi.length=0,vo(re,t,1),Q=Me(tr)}let H=Q;if(K&&V!==!1){const re=Object.keys(K),{shapeFlag:ye}=H;re.length&&ye&7&&(s&&re.some(ol)&&(K=Em(K,s)),H=Cr(H,K,!1,!0))}return n.dirs&&(H=Cr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),Q=H,qs(L),Q}const vm=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},Em=(t,e)=>{const n={};for(const r in t)(!ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Im(t,e,n){const{props:r,children:i,component:s}=t,{props:a,children:l,patchFlag:c}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zc(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(a[y]!==r[y]&&!Eo(f,y))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Zc(r,a,f):!0:!!a;return!1}function Zc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Eo(n,s))return!0}return!1}function wm({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tm="components";function wo(t,e){return Rm(Tm,t,!0,e)||t}const Am=Symbol.for("v-ndc");function Rm(t,e,n=!0,r=!1){const i=mt||rt;if(i){const s=i.type;{const l=y_(s,!1);if(l&&(l===e||l===qt(e)||l===go(qt(e))))return s}const a=eu(i[t]||s[t],e)||eu(i.appContext[t],e);return!a&&r?s:a}}function eu(t,e){return t&&(t[e]||t[qt(e)]||t[go(qt(e))])}const bm=t=>t.__isSuspense;function Sm(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):mm(t)}function To(t,e,n=rt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Ln();const l=ji(n),c=Dt(e,n,t,a);return l(),Fn(),c});return r?i.unshift(s):i.push(s),s}}const cn=t=>(e,n=rt)=>{(!bo||t==="sp")&&To(t,(...r)=>e(...r),n)},Pm=cn("bm"),Cm=cn("m"),Om=cn("bu"),km=cn("u"),Nm=cn("bum"),Rf=cn("um"),Dm=cn("sp"),Vm=cn("rtg"),Mm=cn("rtc");function xm(t,e=rt){To("ec",t,e)}function di(t,e){if(mt===null)return t;const n=So(mt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,a,l,c=Se]=e[i];s&&(ae(s)&&(s={mounted:s,updated:s}),s.deep&&wn(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const l=i[a];s&&(l.oldValue=s[a].value);let c=l.dir[r];c&&(Ln(),Dt(c,n,8,[t.el,l,t,e]),Fn())}}/*! #__NO_SIDE_EFFECTS__ */function zt(t,e){return ae(t)?He({name:t.name},e,{setup:t}):t}const Os=t=>!!t.type.__asyncLoader,ka=t=>t?zf(t)?So(t):ka(t.parent):null,pi=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ka(t.parent),$root:t=>ka(t.root),$emit:t=>t.emit,$options:t=>El(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,vl(t.update)}),$nextTick:t=>t.n||(t.n=yf.bind(t.proxy)),$watch:t=>n_.bind(t)}),oa=(t,e)=>t!==Se&&!t.__isScriptSetup&&me(t,e),Lm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(oa(r,e))return a[e]=1,r[e];if(i!==Se&&me(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&me(f,e))return a[e]=3,s[e];if(n!==Se&&me(n,e))return a[e]=4,n[e];Na&&(a[e]=0)}}const d=pi[e];let g,y;if(d)return e==="$attrs"&&ut(t.attrs,"get",""),d(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Se&&me(n,e))return a[e]=4,n[e];if(y=c.config.globalProperties,me(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return oa(i,e)?(i[e]=n,!0):r!==Se&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let l;return!!n[a]||t!==Se&&me(t,a)||oa(e,a)||(l=s[0])&&me(l,a)||me(r,a)||me(pi,a)||me(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tu(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Na=!0;function Fm(t){const e=El(t),n=t.proxy,r=t.ctx;Na=!1,e.beforeCreate&&nu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:g,mounted:y,beforeUpdate:A,updated:N,activated:V,deactivated:L,beforeDestroy:Q,beforeUnmount:K,destroyed:H,unmounted:re,render:ye,renderTracked:Y,renderTriggered:T,errorCaptured:_,serverPrefetch:I,expose:w,inheritAttrs:R,components:b,directives:v,filters:st}=e;if(f&&Um(f,r,null),a)for(const fe in a){const ce=a[fe];ae(ce)&&(r[fe]=ce.bind(n))}if(i){const fe=i.call(n,n);Ne(fe)&&(t.data=yo(fe))}if(Na=!0,s)for(const fe in s){const ce=s[fe],dt=ae(ce)?ce.bind(n,n):ae(ce.get)?ce.get.bind(n,n):wt,Rt=!ae(ce)&&ae(ce.set)?ce.set.bind(n):wt,vt=Ct({get:dt,set:Rt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Ce=>vt.value=Ce})}if(l)for(const fe in l)bf(l[fe],r,n,fe);if(c){const fe=ae(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ce=>{ks(ce,fe[ce])})}d&&nu(d,t,"c");function xe(fe,ce){oe(ce)?ce.forEach(dt=>fe(dt.bind(n))):ce&&fe(ce.bind(n))}if(xe(Pm,g),xe(Cm,y),xe(Om,A),xe(km,N),xe(r_,V),xe(i_,L),xe(xm,_),xe(Mm,Y),xe(Vm,T),xe(Nm,K),xe(Rf,re),xe(Dm,I),oe(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(ce=>{Object.defineProperty(fe,ce,{get:()=>n[ce],set:dt=>n[ce]=dt})})}else t.exposed||(t.exposed={});ye&&t.render===wt&&(t.render=ye),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),v&&(t.directives=v)}function Um(t,e,n=wt){oe(t)&&(t=Da(t));for(const r in t){const i=t[r];let s;Ne(i)?"default"in i?s=Tt(i.from||r,i.default,!0):s=Tt(i.from||r):s=Tt(i),ht(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[r]=s}}function nu(t,e,n){Dt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bf(t,e,n,r){const i=r.includes(".")?Uf(n,r):()=>n[r];if(qe(t)){const s=e[t];ae(s)&&Ns(i,s)}else if(ae(t))Ns(i,t.bind(n));else if(Ne(t))if(oe(t))t.forEach(s=>bf(s,e,n,r));else{const s=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(s)&&Ns(i,s,t)}}function El(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(f=>Ks(c,f,a,!0)),Ks(c,e,a)),Ne(e)&&s.set(e,c),c}function Ks(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ks(t,s,n,!0),i&&i.forEach(a=>Ks(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=$m[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const $m={data:ru,props:iu,emits:iu,methods:ai,computed:ai,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:ai,directives:ai,watch:jm,provide:ru,inject:Bm};function ru(t,e){return e?t?function(){return He(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Bm(t,e){return ai(Da(t),Da(e))}function Da(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?He(Object.create(null),t,e):e}function iu(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:He(Object.create(null),tu(t),tu(e??{})):e}function jm(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Sf(){return{app:null,config:{isNativeTag:Cg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hm=0;function qm(t,e){return function(r,i=null){ae(r)||(r=He({},r)),i!=null&&!Ne(i)&&(i=null);const s=Sf(),a=new WeakSet;let l=!1;const c=s.app={_uid:Hm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:E_,get config(){return s.config},set config(f){},use(f,...d){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(c,...d)):ae(f)&&(a.add(f),f(c,...d))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,d){return d?(s.components[f]=d,c):s.components[f]},directive(f,d){return d?(s.directives[f]=d,c):s.directives[f]},mount(f,d,g){if(!l){const y=Me(r,i);return y.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(y,f):t(y,f,g),l=!0,c._container=f,f.__vue_app__=c,So(y.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(f,d){return s.provides[f]=d,c},runWithContext(f){const d=gi;gi=c;try{return f()}finally{gi=d}}};return c}}let gi=null;function ks(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=rt||mt;if(r||gi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:gi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}const Pf={},Cf=()=>Object.create(Pf),Of=t=>Object.getPrototypeOf(t)===Pf;function Km(t,e,n,r=!1){const i={},s=Cf();t.propsDefaults=Object.create(null),kf(t,e,i,s);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:uf(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function zm(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=t,l=Ee(i),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(Eo(t.emitsOptions,y))continue;const A=e[y];if(c)if(me(s,y))A!==s[y]&&(s[y]=A,f=!0);else{const N=qt(y);i[N]=Va(c,l,N,A,t,!1)}else A!==s[y]&&(s[y]=A,f=!0)}}}else{kf(t,e,i,s)&&(f=!0);let d;for(const g in l)(!e||!me(e,g)&&((d=Fr(g))===g||!me(e,d)))&&(c?n&&(n[g]!==void 0||n[d]!==void 0)&&(i[g]=Va(c,l,g,void 0,t,!0)):delete i[g]);if(s!==l)for(const g in s)(!e||!me(e,g))&&(delete s[g],f=!0)}f&&nn(t.attrs,"set","")}function kf(t,e,n,r){const[i,s]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(hi(c))continue;const f=e[c];let d;i&&me(i,d=qt(c))?!s||!s.includes(d)?n[d]=f:(l||(l={}))[d]=f:Eo(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(s){const c=Ee(n),f=l||Se;for(let d=0;d<s.length;d++){const g=s[d];n[g]=Va(i,c,g,f[g],t,!me(f,g))}}return a}function Va(t,e,n,r,i,s){const a=t[n];if(a!=null){const l=me(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const d=ji(i);r=f[n]=c.call(null,e),d()}}else r=c}a[0]&&(s&&!l?r=!1:a[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}function Nf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},l=[];let c=!1;if(!ae(t)){const d=g=>{c=!0;const[y,A]=Nf(g,e,!0);He(a,y),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!c)return Ne(t)&&r.set(t,wr),wr;if(oe(s))for(let d=0;d<s.length;d++){const g=qt(s[d]);su(g)&&(a[g]=Se)}else if(s)for(const d in s){const g=qt(d);if(su(g)){const y=s[d],A=a[g]=oe(y)||ae(y)?{type:y}:He({},y);if(A){const N=lu(Boolean,A.type),V=lu(String,A.type);A[0]=N>-1,A[1]=V<0||N<V,(N>-1||me(A,"default"))&&l.push(g)}}}const f=[a,l];return Ne(t)&&r.set(t,f),f}function su(t){return t[0]!=="$"&&!hi(t)}function ou(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function au(t,e){return ou(t)===ou(e)}function lu(t,e){return oe(e)?e.findIndex(n=>au(n,t)):ae(e)&&au(e,t)?0:-1}const Df=t=>t[0]==="_"||t==="$stable",Il=t=>oe(t)?t.map(Ut):[Ut(t)],Wm=(t,e,n)=>{if(e._n)return e;const r=Cs((...i)=>Il(e(...i)),n);return r._c=!1,r},Vf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Df(i))continue;const s=t[i];if(ae(s))e[i]=Wm(i,s,r);else if(s!=null){const a=Il(s);e[i]=()=>a}}},Mf=(t,e)=>{const n=Il(e);t.slots.default=()=>n},Gm=(t,e)=>{const n=t.slots=Cf();if(t.vnode.shapeFlag&32){const r=e._;r?(He(n,e),Wh(n,"_",r,!0)):Vf(e,n)}else e&&Mf(t,e)},Qm=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=Se;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:(He(i,e),!n&&l===1&&delete i._):(s=!e.$stable,Vf(e,i)),a=e}else e&&(Mf(t,e),a={default:1});if(s)for(const l in i)!Df(l)&&a[l]==null&&delete i[l]};function Ma(t,e,n,r,i=!1){if(oe(t)){t.forEach((y,A)=>Ma(y,e&&(oe(e)?e[A]:e),n,r,i));return}if(Os(r)&&!i)return;const s=r.shapeFlag&4?So(r.component):r.el,a=i?null:s,{i:l,r:c}=t,f=e&&e.r,d=l.refs===Se?l.refs={}:l.refs,g=l.setupState;if(f!=null&&f!==c&&(qe(f)?(d[f]=null,me(g,f)&&(g[f]=null)):ht(f)&&(f.value=null)),ae(c))Pn(c,l,12,[a,d]);else{const y=qe(c),A=ht(c);if(y||A){const N=()=>{if(t.f){const V=y?me(g,c)?g[c]:d[c]:c.value;i?oe(V)&&al(V,s):oe(V)?V.includes(s)||V.push(s):y?(d[c]=[s],me(g,c)&&(g[c]=d[c])):(c.value=[s],t.k&&(d[t.k]=c.value))}else y?(d[c]=a,me(g,c)&&(g[c]=a)):A&&(c.value=a,t.k&&(d[t.k]=a))};a?(N.id=-1,ct(N,n)):N()}}}const ct=Sm;function Jm(t){return Xm(t)}function Xm(t,e){const n=Gh();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:g,nextSibling:y,setScopeId:A=wt,insertStaticContent:N}=t,V=(m,E,P,D=null,O=null,$=null,q=void 0,F=null,B=!!E.dynamicChildren)=>{if(m===E)return;m&&!ri(m,E)&&(D=k(m),Ce(m,O,$,!0),m=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:M,ref:W,shapeFlag:ee}=E;switch(M){case Ao:L(m,E,P,D);break;case tr:Q(m,E,P,D);break;case la:m==null&&K(E,P,D,q);break;case Xt:b(m,E,P,D,O,$,q,F,B);break;default:ee&1?ye(m,E,P,D,O,$,q,F,B):ee&6?v(m,E,P,D,O,$,q,F,B):(ee&64||ee&128)&&M.process(m,E,P,D,O,$,q,F,B,J)}W!=null&&O&&Ma(W,m&&m.ref,$,E||m,!E)},L=(m,E,P,D)=>{if(m==null)r(E.el=l(E.children),P,D);else{const O=E.el=m.el;E.children!==m.children&&f(O,E.children)}},Q=(m,E,P,D)=>{m==null?r(E.el=c(E.children||""),P,D):E.el=m.el},K=(m,E,P,D)=>{[m.el,m.anchor]=N(m.children,E,P,D,m.el,m.anchor)},H=({el:m,anchor:E},P,D)=>{let O;for(;m&&m!==E;)O=y(m),r(m,P,D),m=O;r(E,P,D)},re=({el:m,anchor:E})=>{let P;for(;m&&m!==E;)P=y(m),i(m),m=P;i(E)},ye=(m,E,P,D,O,$,q,F,B)=>{E.type==="svg"?q="svg":E.type==="math"&&(q="mathml"),m==null?Y(E,P,D,O,$,q,F,B):I(m,E,O,$,q,F,B)},Y=(m,E,P,D,O,$,q,F)=>{let B,M;const{props:W,shapeFlag:ee,transition:Z,dirs:X}=m;if(B=m.el=a(m.type,$,W&&W.is,W),ee&8?d(B,m.children):ee&16&&_(m.children,B,null,D,O,aa(m,$),q,F),X&&Kn(m,null,D,"created"),T(B,m,m.scopeId,q,D),W){for(const ve in W)ve!=="value"&&!hi(ve)&&s(B,ve,null,W[ve],$,m.children,D,O,Ue);"value"in W&&s(B,"value",null,W.value,$),(M=W.onVnodeBeforeMount)&&Ft(M,D,m)}X&&Kn(m,null,D,"beforeMount");const ne=Ym(O,Z);ne&&Z.beforeEnter(B),r(B,E,P),((M=W&&W.onVnodeMounted)||ne||X)&&ct(()=>{M&&Ft(M,D,m),ne&&Z.enter(B),X&&Kn(m,null,D,"mounted")},O)},T=(m,E,P,D,O)=>{if(P&&A(m,P),D)for(let $=0;$<D.length;$++)A(m,D[$]);if(O){let $=O.subTree;if(E===$){const q=O.vnode;T(m,q,q.scopeId,q.slotScopeIds,O.parent)}}},_=(m,E,P,D,O,$,q,F,B=0)=>{for(let M=B;M<m.length;M++){const W=m[M]=F?En(m[M]):Ut(m[M]);V(null,W,E,P,D,O,$,q,F)}},I=(m,E,P,D,O,$,q)=>{const F=E.el=m.el;let{patchFlag:B,dynamicChildren:M,dirs:W}=E;B|=m.patchFlag&16;const ee=m.props||Se,Z=E.props||Se;let X;if(P&&zn(P,!1),(X=Z.onVnodeBeforeUpdate)&&Ft(X,P,E,m),W&&Kn(E,m,P,"beforeUpdate"),P&&zn(P,!0),M?w(m.dynamicChildren,M,F,P,D,aa(E,O),$):q||ce(m,E,F,null,P,D,aa(E,O),$,!1),B>0){if(B&16)R(F,E,ee,Z,P,D,O);else if(B&2&&ee.class!==Z.class&&s(F,"class",null,Z.class,O),B&4&&s(F,"style",ee.style,Z.style,O),B&8){const ne=E.dynamicProps;for(let ve=0;ve<ne.length;ve++){const ge=ne[ve],Ve=ee[ge],pt=Z[ge];(pt!==Ve||ge==="value")&&s(F,ge,Ve,pt,O,m.children,P,D,Ue)}}B&1&&m.children!==E.children&&d(F,E.children)}else!q&&M==null&&R(F,E,ee,Z,P,D,O);((X=Z.onVnodeUpdated)||W)&&ct(()=>{X&&Ft(X,P,E,m),W&&Kn(E,m,P,"updated")},D)},w=(m,E,P,D,O,$,q)=>{for(let F=0;F<E.length;F++){const B=m[F],M=E[F],W=B.el&&(B.type===Xt||!ri(B,M)||B.shapeFlag&70)?g(B.el):P;V(B,M,W,null,D,O,$,q,!0)}},R=(m,E,P,D,O,$,q)=>{if(P!==D){if(P!==Se)for(const F in P)!hi(F)&&!(F in D)&&s(m,F,P[F],null,q,E.children,O,$,Ue);for(const F in D){if(hi(F))continue;const B=D[F],M=P[F];B!==M&&F!=="value"&&s(m,F,M,B,q,E.children,O,$,Ue)}"value"in D&&s(m,"value",P.value,D.value,q)}},b=(m,E,P,D,O,$,q,F,B)=>{const M=E.el=m?m.el:l(""),W=E.anchor=m?m.anchor:l("");let{patchFlag:ee,dynamicChildren:Z,slotScopeIds:X}=E;X&&(F=F?F.concat(X):X),m==null?(r(M,P,D),r(W,P,D),_(E.children||[],P,W,O,$,q,F,B)):ee>0&&ee&64&&Z&&m.dynamicChildren?(w(m.dynamicChildren,Z,P,O,$,q,F),(E.key!=null||O&&E===O.subTree)&&xf(m,E,!0)):ce(m,E,P,W,O,$,q,F,B)},v=(m,E,P,D,O,$,q,F,B)=>{E.slotScopeIds=F,m==null?E.shapeFlag&512?O.ctx.activate(E,P,D,q,B):st(E,P,D,O,$,q,B):yt(m,E,B)},st=(m,E,P,D,O,$,q)=>{const F=m.component=d_(m,D,O);if($f(m)&&(F.ctx.renderer=J),p_(F),F.asyncDep){if(O&&O.registerDep(F,xe,q),!m.el){const B=F.subTree=Me(tr);Q(null,B,E,P)}}else xe(F,m,E,P,O,$,q)},yt=(m,E,P)=>{const D=E.component=m.component;if(Im(m,E,P))if(D.asyncDep&&!D.asyncResolved){fe(D,E,P);return}else D.next=E,gm(D.update),D.effect.dirty=!0,D.update();else E.el=m.el,D.vnode=E},xe=(m,E,P,D,O,$,q)=>{const F=()=>{if(m.isMounted){let{next:W,bu:ee,u:Z,parent:X,vnode:ne}=m;{const Et=Lf(m);if(Et){W&&(W.el=ne.el,fe(m,W,q)),Et.asyncDep.then(()=>{m.isUnmounted||F()});return}}let ve=W,ge;zn(m,!1),W?(W.el=ne.el,fe(m,W,q)):W=ne,ee&&Ss(ee),(ge=W.props&&W.props.onVnodeBeforeUpdate)&&Ft(ge,X,W,ne),zn(m,!0);const Ve=sa(m),pt=m.subTree;m.subTree=Ve,V(pt,Ve,g(pt.el),k(pt),m,O,$),W.el=Ve.el,ve===null&&wm(m,Ve.el),Z&&ct(Z,O),(ge=W.props&&W.props.onVnodeUpdated)&&ct(()=>Ft(ge,X,W,ne),O)}else{let W;const{el:ee,props:Z}=E,{bm:X,m:ne,parent:ve}=m,ge=Os(E);if(zn(m,!1),X&&Ss(X),!ge&&(W=Z&&Z.onVnodeBeforeMount)&&Ft(W,ve,E),zn(m,!0),ee&&we){const Ve=()=>{m.subTree=sa(m),we(ee,m.subTree,m,O,null)};ge?E.type.__asyncLoader().then(()=>!m.isUnmounted&&Ve()):Ve()}else{const Ve=m.subTree=sa(m);V(null,Ve,P,D,m,O,$),E.el=Ve.el}if(ne&&ct(ne,O),!ge&&(W=Z&&Z.onVnodeMounted)){const Ve=E;ct(()=>Ft(W,ve,Ve),O)}(E.shapeFlag&256||ve&&Os(ve.vnode)&&ve.vnode.shapeFlag&256)&&m.a&&ct(m.a,O),m.isMounted=!0,E=P=D=null}},B=m.effect=new hl(F,wt,()=>vl(M),m.scope),M=m.update=()=>{B.dirty&&B.run()};M.id=m.uid,zn(m,!0),M()},fe=(m,E,P)=>{E.component=m;const D=m.vnode.props;m.vnode=E,m.next=null,zm(m,E.props,D,P),Qm(m,E.children,P),Ln(),Yc(m),Fn()},ce=(m,E,P,D,O,$,q,F,B=!1)=>{const M=m&&m.children,W=m?m.shapeFlag:0,ee=E.children,{patchFlag:Z,shapeFlag:X}=E;if(Z>0){if(Z&128){Rt(M,ee,P,D,O,$,q,F,B);return}else if(Z&256){dt(M,ee,P,D,O,$,q,F,B);return}}X&8?(W&16&&Ue(M,O,$),ee!==M&&d(P,ee)):W&16?X&16?Rt(M,ee,P,D,O,$,q,F,B):Ue(M,O,$,!0):(W&8&&d(P,""),X&16&&_(ee,P,D,O,$,q,F,B))},dt=(m,E,P,D,O,$,q,F,B)=>{m=m||wr,E=E||wr;const M=m.length,W=E.length,ee=Math.min(M,W);let Z;for(Z=0;Z<ee;Z++){const X=E[Z]=B?En(E[Z]):Ut(E[Z]);V(m[Z],X,P,null,O,$,q,F,B)}M>W?Ue(m,O,$,!0,!1,ee):_(E,P,D,O,$,q,F,B,ee)},Rt=(m,E,P,D,O,$,q,F,B)=>{let M=0;const W=E.length;let ee=m.length-1,Z=W-1;for(;M<=ee&&M<=Z;){const X=m[M],ne=E[M]=B?En(E[M]):Ut(E[M]);if(ri(X,ne))V(X,ne,P,null,O,$,q,F,B);else break;M++}for(;M<=ee&&M<=Z;){const X=m[ee],ne=E[Z]=B?En(E[Z]):Ut(E[Z]);if(ri(X,ne))V(X,ne,P,null,O,$,q,F,B);else break;ee--,Z--}if(M>ee){if(M<=Z){const X=Z+1,ne=X<W?E[X].el:D;for(;M<=Z;)V(null,E[M]=B?En(E[M]):Ut(E[M]),P,ne,O,$,q,F,B),M++}}else if(M>Z)for(;M<=ee;)Ce(m[M],O,$,!0),M++;else{const X=M,ne=M,ve=new Map;for(M=ne;M<=Z;M++){const ot=E[M]=B?En(E[M]):Ut(E[M]);ot.key!=null&&ve.set(ot.key,M)}let ge,Ve=0;const pt=Z-ne+1;let Et=!1,Hr=0;const fn=new Array(pt);for(M=0;M<pt;M++)fn[M]=0;for(M=X;M<=ee;M++){const ot=m[M];if(Ve>=pt){Ce(ot,O,$,!0);continue}let It;if(ot.key!=null)It=ve.get(ot.key);else for(ge=ne;ge<=Z;ge++)if(fn[ge-ne]===0&&ri(ot,E[ge])){It=ge;break}It===void 0?Ce(ot,O,$,!0):(fn[It-ne]=M+1,It>=Hr?Hr=It:Et=!0,V(ot,E[It],P,null,O,$,q,F,B),Ve++)}const fr=Et?Zm(fn):wr;for(ge=fr.length-1,M=pt-1;M>=0;M--){const ot=ne+M,It=E[ot],dr=ot+1<W?E[ot+1].el:D;fn[M]===0?V(null,It,P,dr,O,$,q,F,B):Et&&(ge<0||M!==fr[ge]?vt(It,P,dr,2):ge--)}}},vt=(m,E,P,D,O=null)=>{const{el:$,type:q,transition:F,children:B,shapeFlag:M}=m;if(M&6){vt(m.component.subTree,E,P,D);return}if(M&128){m.suspense.move(E,P,D);return}if(M&64){q.move(m,E,P,J);return}if(q===Xt){r($,E,P);for(let ee=0;ee<B.length;ee++)vt(B[ee],E,P,D);r(m.anchor,E,P);return}if(q===la){H(m,E,P);return}if(D!==2&&M&1&&F)if(D===0)F.beforeEnter($),r($,E,P),ct(()=>F.enter($),O);else{const{leave:ee,delayLeave:Z,afterLeave:X}=F,ne=()=>r($,E,P),ve=()=>{ee($,()=>{ne(),X&&X()})};Z?Z($,ne,ve):ve()}else r($,E,P)},Ce=(m,E,P,D=!1,O=!1)=>{const{type:$,props:q,ref:F,children:B,dynamicChildren:M,shapeFlag:W,patchFlag:ee,dirs:Z,memoIndex:X}=m;if(ee===-2&&(O=!1),F!=null&&Ma(F,null,P,m,!0),X!=null&&(E.renderCache[X]=void 0),W&256){E.ctx.deactivate(m);return}const ne=W&1&&Z,ve=!Os(m);let ge;if(ve&&(ge=q&&q.onVnodeBeforeUnmount)&&Ft(ge,E,m),W&6)Lt(m.component,P,D);else{if(W&128){m.suspense.unmount(P,D);return}ne&&Kn(m,null,E,"beforeUnmount"),W&64?m.type.remove(m,E,P,J,D):M&&($!==Xt||ee>0&&ee&64)?Ue(M,E,P,!1,!0):($===Xt&&ee&384||!O&&W&16)&&Ue(B,E,P),D&&Oe(m)}(ve&&(ge=q&&q.onVnodeUnmounted)||ne)&&ct(()=>{ge&&Ft(ge,E,m),ne&&Kn(m,null,E,"unmounted")},P)},Oe=m=>{const{type:E,el:P,anchor:D,transition:O}=m;if(E===Xt){hn(P,D);return}if(E===la){re(m);return}const $=()=>{i(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(m.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:F}=O,B=()=>q(P,$);F?F(m.el,$,B):B()}else $()},hn=(m,E)=>{let P;for(;m!==E;)P=y(m),i(m),m=P;i(E)},Lt=(m,E,P)=>{const{bum:D,scope:O,update:$,subTree:q,um:F,m:B,a:M}=m;cu(B),cu(M),D&&Ss(D),O.stop(),$&&($.active=!1,Ce(q,m,E,P)),F&&ct(F,E),ct(()=>{m.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ue=(m,E,P,D=!1,O=!1,$=0)=>{for(let q=$;q<m.length;q++)Ce(m[q],E,P,D,O)},k=m=>m.shapeFlag&6?k(m.component.subTree):m.shapeFlag&128?m.suspense.next():y(m.anchor||m.el);let G=!1;const z=(m,E,P)=>{m==null?E._vnode&&Ce(E._vnode,null,null,!0):V(E._vnode||null,m,E,null,null,null,P),G||(G=!0,Yc(),Ef(),G=!1),E._vnode=m},J={p:V,um:Ce,m:vt,r:Oe,mt:st,mc:_,pc:ce,pbc:w,n:k,o:t};let de,we;return{render:z,hydrate:de,createApp:qm(z,de)}}function aa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ym(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xf(t,e,n=!1){const r=t.children,i=e.children;if(oe(r)&&oe(i))for(let s=0;s<r.length;s++){const a=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=En(i[s]),l.el=a.el),!n&&l.patchFlag!==-2&&xf(a,l)),l.type===Ao&&(l.el=a.el)}}function Zm(t){const e=t.slice(),n=[0];let r,i,s,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(i=n[n.length-1],t[i]<f){e[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)l=s+a>>1,t[n[l]]<f?s=l+1:a=l;f<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Lf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lf(e)}function cu(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const e_=Symbol.for("v-scx"),t_=()=>Tt(e_),vs={};function Ns(t,e,n){return Ff(t,e,n)}function Ff(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:a,onTrigger:l}=Se){if(e&&s){const Y=e;e=(...T)=>{Y(...T),ye()}}const c=rt,f=Y=>r===!0?Y:wn(Y,r===!1?1:void 0);let d,g=!1,y=!1;if(ht(t)?(d=()=>t.value,g=Hs(t)):fi(t)?(d=()=>f(t),g=!0):oe(t)?(y=!0,g=t.some(Y=>fi(Y)||Hs(Y)),d=()=>t.map(Y=>{if(ht(Y))return Y.value;if(fi(Y))return f(Y);if(ae(Y))return Pn(Y,c,2)})):ae(t)?e?d=()=>Pn(t,c,2):d=()=>(A&&A(),Dt(t,c,3,[N])):d=wt,e&&r){const Y=d;d=()=>wn(Y())}let A,N=Y=>{A=H.onStop=()=>{Pn(Y,c,4),A=H.onStop=void 0}},V;if(bo)if(N=wt,e?n&&Dt(e,c,3,[d(),y?[]:void 0,N]):d(),i==="sync"){const Y=t_();V=Y.__watcherHandles||(Y.__watcherHandles=[])}else return wt;let L=y?new Array(t.length).fill(vs):vs;const Q=()=>{if(!(!H.active||!H.dirty))if(e){const Y=H.run();(r||g||(y?Y.some((T,_)=>Nn(T,L[_])):Nn(Y,L)))&&(A&&A(),Dt(e,c,3,[Y,L===vs?void 0:y&&L[0]===vs?[]:L,N]),L=Y)}else H.run()};Q.allowRecurse=!!e;let K;i==="sync"?K=Q:i==="post"?K=()=>ct(Q,c&&c.suspense):(Q.pre=!0,c&&(Q.id=c.uid),K=()=>vl(Q));const H=new hl(d,wt,K),re=jg(),ye=()=>{H.stop(),re&&al(re.effects,H)};return e?n?Q():L=H.run():i==="post"?ct(H.run.bind(H),c&&c.suspense):H.run(),V&&V.push(ye),ye}function n_(t,e,n){const r=this.proxy,i=qe(t)?t.includes(".")?Uf(r,t):()=>r[t]:t.bind(r,r);let s;ae(e)?s=e:(s=e.handler,n=e);const a=ji(this),l=Ff(i,s.bind(r),n);return a(),l}function Uf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function wn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))wn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(Hh(t)||Tr(t))t.forEach(r=>{wn(r,e,n)});else if(zh(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}const $f=t=>t.type.__isKeepAlive;function r_(t,e){Bf(t,"a",e)}function i_(t,e){Bf(t,"da",e)}function Bf(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(To(e,r,n),n){let i=n.parent;for(;i&&i.parent;)$f(i.parent.vnode)&&s_(r,e,n,i),i=i.parent}}function s_(t,e,n,r){const i=To(e,t,r,!0);Rf(()=>{al(r[e],i)},n)}function jf(t,e){t.shapeFlag&6&&t.component?jf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const o_=t=>t.__isTeleport,Xt=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),mi=[];let kt=null;function _t(t=!1){mi.push(kt=t?null:[])}function a_(){mi.pop(),kt=mi[mi.length-1]||null}let Ci=1;function uu(t){Ci+=t}function Hf(t){return t.dynamicChildren=Ci>0?kt||wr:null,a_(),Ci>0&&kt&&kt.push(t),t}function Vt(t,e,n,r,i,s){return Hf(Re(t,e,n,r,i,s,!0))}function qf(t,e,n,r,i){return Hf(Me(t,e,n,r,i,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function ri(t,e){return t.type===e.type&&t.key===e.key}const Kf=({key:t})=>t??null,Ds=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ht(t)||ae(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function Re(t,e=null,n=null,r=0,i=null,s=t===Xt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kf(e),ref:e&&Ds(e),scopeId:Io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mt};return l?(wl(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Ci>0&&!a&&kt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&kt.push(c),c}const Me=l_;function l_(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Am)&&(t=tr),xa(t)){const l=Cr(t,e,!0);return n&&wl(l,n),Ci>0&&!s&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag=-2,l}if(v_(t)&&(t=t.__vccOpts),e){e=c_(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=ul(l)),Ne(c)&&(ff(c)&&!oe(c)&&(c=He({},c)),e.style=cl(c))}const a=qe(t)?1:bm(t)?128:o_(t)?64:Ne(t)?4:ae(t)?2:0;return Re(t,e,n,r,i,a,s,!0)}function c_(t){return t?ff(t)||Of(t)?He({},t):t:null}function Cr(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:l,transition:c}=t,f=e?u_(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Kf(f),ref:e&&e.ref?n&&s?oe(s)?s.concat(Ds(e)):[s,Ds(e)]:Ds(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&jf(d,c.clone(d)),d}function Vs(t=" ",e=0){return Me(Ao,null,t,e)}function Ro(t="",e=!1){return e?(_t(),qf(tr,null,t)):Me(tr,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Me(tr):oe(t)?Me(Xt,null,t.slice()):typeof t=="object"?En(t):Me(Ao,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function wl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),wl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Of(e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Vs(e)]):n=8);t.children=e,t.shapeFlag|=n}function u_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ul([e.class,r.class]));else if(i==="style")e.style=cl([e.style,r.style]);else if(ho(i)){const s=e[i],a=r[i];a&&s!==a&&!(oe(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=r[i])}return e}function Ft(t,e,n,r=null){Dt(t,e,7,[n,r])}const h_=Sf();let f_=0;function d_(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||h_,s={uid:f_++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(r,i),emitsOptions:wf(r,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ym.bind(null,s),t.ce&&t.ce(s),s}let rt=null,zs,La;{const t=Gh(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};zs=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),La=e("__VUE_SSR_SETTERS__",n=>bo=n)}const ji=t=>{const e=rt;return zs(t),t.scope.on(),()=>{t.scope.off(),zs(e)}},hu=()=>{rt&&rt.scope.off(),zs(null)};function zf(t){return t.vnode.shapeFlag&4}let bo=!1;function p_(t,e=!1){e&&La(e);const{props:n,children:r}=t.vnode,i=zf(t);Km(t,n,i,e),Gm(t,r);const s=i?g_(t,e):void 0;return e&&La(!1),s}function g_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lm);const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?__(t):null,s=ji(t);Ln();const a=Pn(r,t,0,[t.props,i]);if(Fn(),s(),qh(a)){if(a.then(hu,hu),e)return a.then(l=>{fu(t,l,e)}).catch(l=>{vo(l,t,0)});t.asyncDep=a}else fu(t,a,e)}else Wf(t,e)}function fu(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=mf(e)),Wf(t,n)}let du;function Wf(t,e,n){const r=t.type;if(!t.render){if(!e&&du&&!r.render){const i=r.template||El(t).template;if(i){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,f=He(He({isCustomElement:s,delimiters:l},a),c);r.render=du(i,f)}}t.render=r.render||wt}{const i=ji(t);Ln();try{Fm(t)}finally{Fn(),i()}}}const m_={get(t,e){return ut(t,"get",""),t[e]}};function __(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,m_),slots:t.slots,emit:t.emit,expose:e}}function So(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(mf(lm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}})):t.proxy}function y_(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function v_(t){return ae(t)&&"__vccOpts"in t}const Ct=(t,e)=>cm(t,e,bo);function Gf(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!oe(e)?xa(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),Me(t,e,n))}const E_="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const I_="http://www.w3.org/2000/svg",w_="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,pu=Jt&&Jt.createElement("template"),T_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Jt.createElementNS(I_,t):e==="mathml"?Jt.createElementNS(w_,t):n?Jt.createElement(t,{is:n}):Jt.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const a=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{pu.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=pu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},A_=Symbol("_vtc");function R_(t,e,n){const r=t[A_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gu=Symbol("_vod"),b_=Symbol("_vsh"),S_=Symbol(""),P_=/(^|;)\s*display\s*:/;function C_(t,e,n){const r=t.style,i=qe(n);let s=!1;if(n&&!i){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ms(r,l,"")}else for(const a in e)n[a]==null&&Ms(r,a,"");for(const a in n)a==="display"&&(s=!0),Ms(r,a,n[a])}else if(i){if(e!==n){const a=r[S_];a&&(n+=";"+a),r.cssText=n,s=P_.test(n)}}else e&&t.removeAttribute("style");gu in t&&(t[gu]=s?r.display:"",t[b_]&&(r.display="none"))}const mu=/\s*!important$/;function Ms(t,e,n){if(oe(n))n.forEach(r=>Ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=O_(t,e);mu.test(n)?t.setProperty(Fr(r),n.replace(mu,""),"important"):t[r]=n}}const _u=["Webkit","Moz","ms"],ca={};function O_(t,e){const n=ca[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return ca[e]=r;r=go(r);for(let i=0;i<_u.length;i++){const s=_u[i]+r;if(s in t)return ca[e]=s}return e}const yu="http://www.w3.org/1999/xlink";function vu(t,e,n,r,i,s=Ug(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yu,e.slice(6,e.length)):t.setAttributeNS(yu,e,n):n==null||s&&!Qh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":xn(n)?String(n):n)}function k_(t,e,n,r,i,s,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,i,s),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(f!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Qh(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function yr(t,e,n,r){t.addEventListener(e,n,r)}function N_(t,e,n,r){t.removeEventListener(e,n,r)}const Eu=Symbol("_vei");function D_(t,e,n,r,i=null){const s=t[Eu]||(t[Eu]={}),a=s[e];if(r&&a)a.value=r;else{const[l,c]=V_(e);if(r){const f=s[e]=L_(r,i);yr(t,l,f,c)}else a&&(N_(t,l,a,c),s[e]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function V_(t){let e;if(Iu.test(t)){e={};let r;for(;r=t.match(Iu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ua=0;const M_=Promise.resolve(),x_=()=>ua||(M_.then(()=>ua=0),ua=Date.now());function L_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(F_(r,n.value),e,5,[r])};return n.value=t,n.attached=x_(),n}function F_(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const wu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,U_=(t,e,n,r,i,s,a,l,c)=>{const f=i==="svg";e==="class"?R_(t,r,f):e==="style"?C_(t,n,r):ho(e)?ol(e)||D_(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(t,e,r,f))?(k_(t,e,r,s,a,l,c),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vu(t,e,r,f,a,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vu(t,e,r,f))};function $_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wu(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wu(e)&&qe(n)?!1:e in t}const Tu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Ss(e,n):e};function B_(t){t.target.composing=!0}function Au(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ha=Symbol("_assign"),_i={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ha]=Tu(i);const s=r||i.props&&i.props.type==="number";yr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),s&&(l=Ra(l)),t[ha](l)}),n&&yr(t,"change",()=>{t.value=t.value.trim()}),e||(yr(t,"compositionstart",B_),yr(t,"compositionend",Au),yr(t,"change",Au))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},a){if(t[ha]=Tu(a),t.composing)return;const l=(s||t.type==="number")&&!/^0\d/.test(t.value)?Ra(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===c)||(t.value=c))}},j_=["ctrl","shift","alt","meta"],H_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>j_.some(n=>t[`${n}Key`]&&!e.includes(n))},Qf=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<e.length;a++){const l=H_[e[a]];if(l&&l(i,e))return}return t(i,...s)})},q_=He({patchProp:U_},T_);let Ru;function K_(){return Ru||(Ru=Jm(q_))}const z_=(...t)=>{const e=K_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=G_(r);if(!i)return;const s=e._component;!ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,W_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function W_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function G_(t){return qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof document<"u";function Q_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function fa(t,e){const n={};for(const r in e){const i=e[r];n[r]=Mt(i)?i.map(t):t(i)}return n}const yi=()=>{},Mt=Array.isArray,Jf=/#/g,J_=/&/g,X_=/\//g,Y_=/=/g,Z_=/\?/g,Xf=/\+/g,ey=/%5B/g,ty=/%5D/g,Yf=/%5E/g,ny=/%60/g,Zf=/%7B/g,ry=/%7C/g,ed=/%7D/g,iy=/%20/g;function Tl(t){return encodeURI(""+t).replace(ry,"|").replace(ey,"[").replace(ty,"]")}function sy(t){return Tl(t).replace(Zf,"{").replace(ed,"}").replace(Yf,"^")}function Fa(t){return Tl(t).replace(Xf,"%2B").replace(iy,"+").replace(Jf,"%23").replace(J_,"%26").replace(ny,"`").replace(Zf,"{").replace(ed,"}").replace(Yf,"^")}function oy(t){return Fa(t).replace(Y_,"%3D")}function ay(t){return Tl(t).replace(Jf,"%23").replace(Z_,"%3F")}function ly(t){return t==null?"":ay(t).replace(X_,"%2F")}function Oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cy=/\/$/,uy=t=>t.replace(cy,"");function da(t,e,n="/"){let r,i={},s="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=py(r??e,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:Oi(a)}}function hy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fy(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Or(e.matched[r],n.matched[i])&&td(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function td(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dy(t[n],e[n]))return!1;return!0}function dy(t,e){return Mt(t)?Su(t,e):Mt(e)?Su(e,t):t===e}function Su(t,e){return Mt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function py(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function gy(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uy(t)}const my=/^[^#]+#/;function _y(t,e){return t.replace(my,"#")+e}function yy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Po=()=>({left:window.scrollX,top:window.scrollY});function vy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=yy(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pu(t,e){return(history.state?history.state.position-e:-1)+t}const Ua=new Map;function Ey(t,e){Ua.set(t,e)}function Iy(t){const e=Ua.get(t);return Ua.delete(t),e}let wy=()=>location.protocol+"//"+location.host;function nd(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),bu(c,"")}return bu(n,t)+r+i}function Ty(t,e,n,r){let i=[],s=[],a=null;const l=({state:y})=>{const A=nd(t,location),N=n.value,V=e.value;let L=0;if(y){if(n.value=A,e.value=y,a&&a===N){a=null;return}L=V?y.position-V.position:0}else r(A);i.forEach(Q=>{Q(n.value,N,{delta:L,type:ki.pop,direction:L?L>0?vi.forward:vi.back:vi.unknown})})};function c(){a=n.value}function f(y){i.push(y);const A=()=>{const N=i.indexOf(y);N>-1&&i.splice(N,1)};return s.push(A),A}function d(){const{history:y}=window;y.state&&y.replaceState(Ie({},y.state,{scroll:Po()}),"")}function g(){for(const y of s)y();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:g}}function Cu(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Po():null}}function Ay(t){const{history:e,location:n}=window,r={value:nd(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,f,d){const g=t.indexOf("#"),y=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+c:wy()+t+c;try{e[d?"replaceState":"pushState"](f,"",y),i.value=f}catch(A){console.error(A),n[d?"replace":"assign"](y)}}function a(c,f){const d=Ie({},e.state,Cu(i.value.back,c,i.value.forward,!0),f,{position:i.value.position});s(c,d,!0),r.value=c}function l(c,f){const d=Ie({},i.value,e.state,{forward:c,scroll:Po()});s(d.current,d,!0);const g=Ie({},Cu(r.value,c,null),{position:d.position+1},f);s(c,g,!1),r.value=c}return{location:r,state:i,push:l,replace:a}}function Ry(t){t=gy(t);const e=Ay(t),n=Ty(t,e.state,e.location,e.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=Ie({location:"",base:t,go:r,createHref:_y.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function by(t){return typeof t=="string"||t&&typeof t=="object"}function rd(t){return typeof t=="string"||typeof t=="symbol"}const id=Symbol("");var Ou;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ou||(Ou={}));function kr(t,e){return Ie(new Error,{type:t,[id]:!0},e)}function Qt(t,e){return t instanceof Error&&id in t&&(e==null||!!(t.type&e))}const ku="[^/]+?",Sy={sensitive:!1,strict:!1,start:!0,end:!0},Py=/[.+*?^${}()[\]/\\]/g;function Cy(t,e){const n=Ie({},Sy,e),r=[];let i=n.start?"^":"";const s=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let g=0;g<f.length;g++){const y=f[g];let A=40+(n.sensitive?.25:0);if(y.type===0)g||(i+="/"),i+=y.value.replace(Py,"\\$&"),A+=40;else if(y.type===1){const{value:N,repeatable:V,optional:L,regexp:Q}=y;s.push({name:N,repeatable:V,optional:L});const K=Q||ku;if(K!==ku){A+=10;try{new RegExp(`(${K})`)}catch(re){throw new Error(`Invalid custom RegExp for param "${N}" (${K}): `+re.message)}}let H=V?`((?:${K})(?:/(?:${K}))*)`:`(${K})`;g||(H=L&&f.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),i+=H,A+=20,L&&(A+=-8),V&&(A+=-20),K===".*"&&(A+=-50)}d.push(A)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(f){const d=f.match(a),g={};if(!d)return null;for(let y=1;y<d.length;y++){const A=d[y]||"",N=s[y-1];g[N.name]=A&&N.repeatable?A.split("/"):A}return g}function c(f){let d="",g=!1;for(const y of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of y)if(A.type===0)d+=A.value;else if(A.type===1){const{value:N,repeatable:V,optional:L}=A,Q=N in f?f[N]:"";if(Mt(Q)&&!V)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const K=Mt(Q)?Q.join("/"):Q;if(!K)if(L)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${N}"`);d+=K}}return d||"/"}return{re:a,score:r,keys:s,parse:l,stringify:c}}function Oy(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sd(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Oy(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Nu(r))return 1;if(Nu(i))return-1}return i.length-r.length}function Nu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ky={type:0,value:""},Ny=/[a-zA-Z0-9_]/;function Dy(t){if(!t)return[[]];if(t==="/")return[[ky]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let l=0,c,f="",d="";function g(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&g(),a()):c===":"?(g(),n=1):y();break;case 4:y(),n=r;break;case 1:c==="("?n=2:Ny.test(c)?y():(g(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:g(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),i}function Vy(t,e,n){const r=Cy(Dy(t.path),n),i=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function My(t,e){const n=[],r=new Map;e=Mu({strict:!1,end:!0,sensitive:!1},e);function i(g){return r.get(g)}function s(g,y,A){const N=!A,V=xy(g);V.aliasOf=A&&A.record;const L=Mu(e,g),Q=[V];if("alias"in g){const re=typeof g.alias=="string"?[g.alias]:g.alias;for(const ye of re)Q.push(Ie({},V,{components:A?A.record.components:V.components,path:ye,aliasOf:A?A.record:V}))}let K,H;for(const re of Q){const{path:ye}=re;if(y&&ye[0]!=="/"){const Y=y.record.path,T=Y[Y.length-1]==="/"?"":"/";re.path=y.record.path+(ye&&T+ye)}if(K=Vy(re,y,L),A?A.alias.push(K):(H=H||K,H!==K&&H.alias.push(K),N&&g.name&&!Vu(K)&&a(g.name)),od(K)&&c(K),V.children){const Y=V.children;for(let T=0;T<Y.length;T++)s(Y[T],K,A&&A.children[T])}A=A||K}return H?()=>{a(H)}:yi}function a(g){if(rd(g)){const y=r.get(g);y&&(r.delete(g),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(g);y>-1&&(n.splice(y,1),g.record.name&&r.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function l(){return n}function c(g){const y=Uy(g,n);n.splice(y,0,g),g.record.name&&!Vu(g)&&r.set(g.record.name,g)}function f(g,y){let A,N={},V,L;if("name"in g&&g.name){if(A=r.get(g.name),!A)throw kr(1,{location:g});L=A.record.name,N=Ie(Du(y.params,A.keys.filter(H=>!H.optional).concat(A.parent?A.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),g.params&&Du(g.params,A.keys.map(H=>H.name))),V=A.stringify(N)}else if(g.path!=null)V=g.path,A=n.find(H=>H.re.test(V)),A&&(N=A.parse(V),L=A.record.name);else{if(A=y.name?r.get(y.name):n.find(H=>H.re.test(y.path)),!A)throw kr(1,{location:g,currentLocation:y});L=A.record.name,N=Ie({},y.params,g.params),V=A.stringify(N)}const Q=[];let K=A;for(;K;)Q.unshift(K.record),K=K.parent;return{name:L,path:V,params:N,matched:Q,meta:Fy(Q)}}t.forEach(g=>s(g));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function Du(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ly(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ly(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fy(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Mu(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Uy(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;sd(t,e[s])<0?r=s:n=s+1}const i=$y(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function $y(t){let e=t;for(;e=e.parent;)if(od(e)&&sd(t,e)===0)return e}function od({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function By(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Xf," "),a=s.indexOf("="),l=Oi(a<0?s:s.slice(0,a)),c=a<0?null:Oi(s.slice(a+1));if(l in e){let f=e[l];Mt(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function xu(t){let e="";for(let n in t){const r=t[n];if(n=oy(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(r)?r.map(s=>s&&Fa(s)):[r&&Fa(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jy(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Mt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Hy=Symbol(""),Lu=Symbol(""),Co=Symbol(""),ad=Symbol(""),$a=Symbol("");function ii(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function In(t,e,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const f=y=>{y===!1?c(kr(4,{from:n,to:e})):y instanceof Error?c(y):by(y)?c(kr(2,{from:e,to:y})):(a&&r.enterCallbacks[i]===a&&typeof y=="function"&&a.push(y),l())},d=s(()=>t.call(r&&r.instances[i],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(y=>c(y))})}function pa(t,e,n,r,i=s=>s()){const s=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(qy(c)){const d=(c.__vccOpts||c)[e];d&&s.push(In(d,n,r,a,l,i))}else{let f=c();s.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const g=Q_(d)?d.default:d;a.components[l]=g;const A=(g.__vccOpts||g)[e];return A&&In(A,n,r,a,l,i)()}))}}return s}function qy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fu(t){const e=Tt(Co),n=Tt(ad),r=Ct(()=>{const c=Yn(t.to);return e.resolve(c)}),i=Ct(()=>{const{matched:c}=r.value,{length:f}=c,d=c[f-1],g=n.matched;if(!d||!g.length)return-1;const y=g.findIndex(Or.bind(null,d));if(y>-1)return y;const A=Uu(c[f-2]);return f>1&&Uu(d)===A&&g[g.length-1].path!==A?g.findIndex(Or.bind(null,c[f-2])):y}),s=Ct(()=>i.value>-1&&Gy(n.params,r.value.params)),a=Ct(()=>i.value>-1&&i.value===n.matched.length-1&&td(n.params,r.value.params));function l(c={}){return Wy(c)?e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(yi):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:s,isExactActive:a,navigate:l}}const Ky=zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fu,setup(t,{slots:e}){const n=yo(Fu(t)),{options:r}=Tt(Co),i=Ct(()=>({[$u(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$u(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Gf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),zy=Ky;function Wy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gy(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Mt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Uu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $u=(t,e,n)=>t??e??n,Qy=zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Tt($a),i=Ct(()=>t.route||r.value),s=Tt(Lu,0),a=Ct(()=>{let f=Yn(s);const{matched:d}=i.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),l=Ct(()=>i.value.matched[a.value]);ks(Lu,Ct(()=>a.value+1)),ks(Hy,l),ks($a,i);const c=Yt();return Ns(()=>[c.value,l.value,t.name],([f,d,g],[y,A,N])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!Or(d,A)||!y)&&(d.enterCallbacks[g]||[]).forEach(V=>V(f))},{flush:"post"}),()=>{const f=i.value,d=t.name,g=l.value,y=g&&g.components[d];if(!y)return Bu(n.default,{Component:y,route:f});const A=g.props[d],N=A?A===!0?f.params:typeof A=="function"?A(f):A:null,L=Gf(y,Ie({},N,e,{onVnodeUnmounted:Q=>{Q.component.isUnmounted&&(g.instances[d]=null)},ref:c}));return Bu(n.default,{Component:L,route:f})||L}}});function Bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jy=Qy;function Xy(t){const e=My(t.routes,t),n=t.parseQuery||By,r=t.stringifyQuery||xu,i=t.history,s=ii(),a=ii(),l=ii(),c=um(_n);let f=_n;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=fa.bind(null,k=>""+k),g=fa.bind(null,ly),y=fa.bind(null,Oi);function A(k,G){let z,J;return rd(k)?(z=e.getRecordMatcher(k),J=G):J=k,e.addRoute(J,z)}function N(k){const G=e.getRecordMatcher(k);G&&e.removeRoute(G)}function V(){return e.getRoutes().map(k=>k.record)}function L(k){return!!e.getRecordMatcher(k)}function Q(k,G){if(G=Ie({},G||c.value),typeof k=="string"){const E=da(n,k,G.path),P=e.resolve({path:E.path},G),D=i.createHref(E.fullPath);return Ie(E,P,{params:y(P.params),hash:Oi(E.hash),redirectedFrom:void 0,href:D})}let z;if(k.path!=null)z=Ie({},k,{path:da(n,k.path,G.path).path});else{const E=Ie({},k.params);for(const P in E)E[P]==null&&delete E[P];z=Ie({},k,{params:g(E)}),G.params=g(G.params)}const J=e.resolve(z,G),de=k.hash||"";J.params=d(y(J.params));const we=hy(r,Ie({},k,{hash:sy(de),path:J.path})),m=i.createHref(we);return Ie({fullPath:we,hash:de,query:r===xu?jy(k.query):k.query||{}},J,{redirectedFrom:void 0,href:m})}function K(k){return typeof k=="string"?da(n,k,c.value.path):Ie({},k)}function H(k,G){if(f!==k)return kr(8,{from:G,to:k})}function re(k){return T(k)}function ye(k){return re(Ie(K(k),{replace:!0}))}function Y(k){const G=k.matched[k.matched.length-1];if(G&&G.redirect){const{redirect:z}=G;let J=typeof z=="function"?z(k):z;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=K(J):{path:J},J.params={}),Ie({query:k.query,hash:k.hash,params:J.path!=null?{}:k.params},J)}}function T(k,G){const z=f=Q(k),J=c.value,de=k.state,we=k.force,m=k.replace===!0,E=Y(z);if(E)return T(Ie(K(E),{state:typeof E=="object"?Ie({},de,E.state):de,force:we,replace:m}),G||z);const P=z;P.redirectedFrom=G;let D;return!we&&fy(r,J,z)&&(D=kr(16,{to:P,from:J}),vt(J,J,!0,!1)),(D?Promise.resolve(D):w(P,J)).catch(O=>Qt(O)?Qt(O,2)?O:Rt(O):ce(O,P,J)).then(O=>{if(O){if(Qt(O,2))return T(Ie({replace:m},K(O.to),{state:typeof O.to=="object"?Ie({},de,O.to.state):de,force:we}),G||P)}else O=b(P,J,!0,m,de);return R(P,J,O),O})}function _(k,G){const z=H(k,G);return z?Promise.reject(z):Promise.resolve()}function I(k){const G=hn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(k):k()}function w(k,G){let z;const[J,de,we]=Yy(k,G);z=pa(J.reverse(),"beforeRouteLeave",k,G);for(const E of J)E.leaveGuards.forEach(P=>{z.push(In(P,k,G))});const m=_.bind(null,k,G);return z.push(m),Ue(z).then(()=>{z=[];for(const E of s.list())z.push(In(E,k,G));return z.push(m),Ue(z)}).then(()=>{z=pa(de,"beforeRouteUpdate",k,G);for(const E of de)E.updateGuards.forEach(P=>{z.push(In(P,k,G))});return z.push(m),Ue(z)}).then(()=>{z=[];for(const E of we)if(E.beforeEnter)if(Mt(E.beforeEnter))for(const P of E.beforeEnter)z.push(In(P,k,G));else z.push(In(E.beforeEnter,k,G));return z.push(m),Ue(z)}).then(()=>(k.matched.forEach(E=>E.enterCallbacks={}),z=pa(we,"beforeRouteEnter",k,G,I),z.push(m),Ue(z))).then(()=>{z=[];for(const E of a.list())z.push(In(E,k,G));return z.push(m),Ue(z)}).catch(E=>Qt(E,8)?E:Promise.reject(E))}function R(k,G,z){l.list().forEach(J=>I(()=>J(k,G,z)))}function b(k,G,z,J,de){const we=H(k,G);if(we)return we;const m=G===_n,E=vr?history.state:{};z&&(J||m?i.replace(k.fullPath,Ie({scroll:m&&E&&E.scroll},de)):i.push(k.fullPath,de)),c.value=k,vt(k,G,z,m),Rt()}let v;function st(){v||(v=i.listen((k,G,z)=>{if(!Lt.listening)return;const J=Q(k),de=Y(J);if(de){T(Ie(de,{replace:!0}),J).catch(yi);return}f=J;const we=c.value;vr&&Ey(Pu(we.fullPath,z.delta),Po()),w(J,we).catch(m=>Qt(m,12)?m:Qt(m,2)?(T(m.to,J).then(E=>{Qt(E,20)&&!z.delta&&z.type===ki.pop&&i.go(-1,!1)}).catch(yi),Promise.reject()):(z.delta&&i.go(-z.delta,!1),ce(m,J,we))).then(m=>{m=m||b(J,we,!1),m&&(z.delta&&!Qt(m,8)?i.go(-z.delta,!1):z.type===ki.pop&&Qt(m,20)&&i.go(-1,!1)),R(J,we,m)}).catch(yi)}))}let yt=ii(),xe=ii(),fe;function ce(k,G,z){Rt(k);const J=xe.list();return J.length?J.forEach(de=>de(k,G,z)):console.error(k),Promise.reject(k)}function dt(){return fe&&c.value!==_n?Promise.resolve():new Promise((k,G)=>{yt.add([k,G])})}function Rt(k){return fe||(fe=!k,st(),yt.list().forEach(([G,z])=>k?z(k):G()),yt.reset()),k}function vt(k,G,z,J){const{scrollBehavior:de}=t;if(!vr||!de)return Promise.resolve();const we=!z&&Iy(Pu(k.fullPath,0))||(J||!z)&&history.state&&history.state.scroll||null;return yf().then(()=>de(k,G,we)).then(m=>m&&vy(m)).catch(m=>ce(m,k,G))}const Ce=k=>i.go(k);let Oe;const hn=new Set,Lt={currentRoute:c,listening:!0,addRoute:A,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:Q,options:t,push:re,replace:ye,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:a.add,afterEach:l.add,onError:xe.add,isReady:dt,install(k){const G=this;k.component("RouterLink",zy),k.component("RouterView",Jy),k.config.globalProperties.$router=G,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(c)}),vr&&!Oe&&c.value===_n&&(Oe=!0,re(i.location).catch(de=>{}));const z={};for(const de in _n)Object.defineProperty(z,de,{get:()=>c.value[de],enumerable:!0});k.provide(Co,G),k.provide(ad,uf(z)),k.provide($a,c);const J=k.unmount;hn.add(k),k.unmount=function(){hn.delete(k),hn.size<1&&(f=_n,v&&v(),v=null,c.value=_n,Oe=!1,fe=!1),J()}}};function Ue(k){return k.reduce((G,z)=>G.then(()=>I(z)),Promise.resolve())}return Lt}function Yy(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const l=e.matched[a];l&&(t.matched.find(f=>Or(f,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(f=>Or(f,c))||i.push(c))}return[n,r,i]}function Al(){return Tt(Co)}var ju={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,f=c?t[i+2]:0,d=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|f>>6,A=f&63;c||(A=64,a||(y=64)),r.push(n[d],n[g],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ld(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||f==null||g==null)throw new ev;const y=s<<2|l>>4;if(r.push(y),f!==64){const A=l<<4&240|f>>2;if(r.push(A),g!==64){const N=f<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tv=function(t){const e=ld(t);return cd.encodeByteArray(e,!0)},Ws=function(t){return tv(t).replace(/\./g,"")},ud=function(t){try{return cd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=()=>nv().__FIREBASE_DEFAULTS__,iv=()=>{if(typeof process>"u"||typeof ju>"u")return;const t=ju.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ud(t[1]);return e&&JSON.parse(e)},Oo=()=>{try{return rv()||iv()||sv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hd=t=>{var e,n;return(n=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ov=t=>{const e=hd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fd=()=>{var t;return(t=Oo())===null||t===void 0?void 0:t.config},dd=t=>{var e;return(e=Oo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ws(JSON.stringify(n)),Ws(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function uv(){var t;const e=(t=Oo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dv(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pv(){return!uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gv(){try{return typeof indexedDB=="object"}catch{return!1}}function mv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_v,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?yv(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new un(i,l,r)}}function yv(t,e){return t.replace(vv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vv=/\{\$([^}]+)}/g;function Ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Hu(s)&&Hu(a)){if(!Gs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Iv(t,e){const n=new wv(t,e);return n.subscribe.bind(n)}class wv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new av;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bv(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rv(t){return t===Wn?void 0:t}function bv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Av(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Pv={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Cv=ue.INFO,Ov={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},kv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ov[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=Cv,this._logHandler=kv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Nv=(t,e)=>e.some(n=>t instanceof n);let qu,Ku;function Dv(){return qu||(qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vv(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,Ba=new WeakMap,gd=new WeakMap,ma=new WeakMap,bl=new WeakMap;function Mv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Cn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&pd.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function xv(t){if(Ba.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ba.set(t,e)}let ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lv(t){ja=t(ja)}function Fv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_a(this),e,...n);return gd.set(r,e.sort?e.sort():[e]),Cn(r)}:Vv().includes(t)?function(...e){return t.apply(_a(this),e),Cn(pd.get(this))}:function(...e){return Cn(t.apply(_a(this),e))}}function Uv(t){return typeof t=="function"?Fv(t):(t instanceof IDBTransaction&&xv(t),Nv(t,Dv())?new Proxy(t,ja):t)}function Cn(t){if(t instanceof IDBRequest)return Mv(t);if(ma.has(t))return ma.get(t);const e=Uv(t);return e!==t&&(ma.set(t,e),bl.set(e,t)),e}const _a=t=>bl.get(t);function $v(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Cn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Cn(a.result),c.oldVersion,c.newVersion,Cn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Bv=["get","getKey","getAll","getAllKeys","count"],jv=["put","add","delete","clear"],ya=new Map;function zu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bv.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&c.done]))[0]};return ya.set(e,s),s}Lv(t=>({...t,get:(e,n,r)=>zu(e,n)||t.get(e,n,r),has:(e,n)=>!!zu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Wu="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Rl("@firebase/app"),Kv="@firebase/app-compat",zv="@firebase/analytics-compat",Wv="@firebase/analytics",Gv="@firebase/app-check-compat",Qv="@firebase/app-check",Jv="@firebase/auth",Xv="@firebase/auth-compat",Yv="@firebase/database",Zv="@firebase/database-compat",eE="@firebase/functions",tE="@firebase/functions-compat",nE="@firebase/installations",rE="@firebase/installations-compat",iE="@firebase/messaging",sE="@firebase/messaging-compat",oE="@firebase/performance",aE="@firebase/performance-compat",lE="@firebase/remote-config",cE="@firebase/remote-config-compat",uE="@firebase/storage",hE="@firebase/storage-compat",fE="@firebase/firestore",dE="@firebase/vertexai-preview",pE="@firebase/firestore-compat",gE="firebase",mE="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="[DEFAULT]",_E={[Ha]:"fire-core",[Kv]:"fire-core-compat",[Wv]:"fire-analytics",[zv]:"fire-analytics-compat",[Qv]:"fire-app-check",[Gv]:"fire-app-check-compat",[Jv]:"fire-auth",[Xv]:"fire-auth-compat",[Yv]:"fire-rtdb",[Zv]:"fire-rtdb-compat",[eE]:"fire-fn",[tE]:"fire-fn-compat",[nE]:"fire-iid",[rE]:"fire-iid-compat",[iE]:"fire-fcm",[sE]:"fire-fcm-compat",[oE]:"fire-perf",[aE]:"fire-perf-compat",[lE]:"fire-rc",[cE]:"fire-rc-compat",[uE]:"fire-gcs",[hE]:"fire-gcs-compat",[fE]:"fire-fst",[pE]:"fire-fst-compat",[dE]:"fire-vertex","fire-js":"fire-js",[gE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,yE=new Map,Ka=new Map;function Gu(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(Ka.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of Qs.values())Gu(n,t);for(const n of yE.values())Gu(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new Hi("app","Firebase",vE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=mE;function md(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=fd()),!n)throw On.create("no-options");const s=Qs.get(i);if(s){if(Gs(n,s.options)&&Gs(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const a=new Sv(i);for(const c of Ka.values())a.addComponent(c);const l=new EE(n,r,a);return Qs.set(i,l),l}function _d(t=qa){const e=Qs.get(t);if(!e&&t===qa&&fd())return md();if(!e)throw On.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let i=(r=_E[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(l.join(" "));return}Nr(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebase-heartbeat-database",wE=1,Ni="firebase-heartbeat-store";let va=null;function yd(){return va||(va=$v(IE,wE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),va}async function TE(t){try{const n=(await yd()).transaction(Ni),r=await n.objectStore(Ni).get(vd(t));return await n.done,r}catch(e){if(e instanceof un)rr.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Qu(t,e){try{const r=(await yd()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,vd(t)),await r.done}catch(n){if(n instanceof un)rr.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function vd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=1024,RE=30*24*60*60*1e3;class bE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ju();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=RE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ju(),{heartbeatsToSend:r,unsentEntries:i}=SE(this._heartbeatsCache.heartbeats),s=Ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ju(){return new Date().toISOString().substring(0,10)}function SE(t,e=AE){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Xu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gv()?mv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xu(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){Nr(new nr("platform-logger",e=>new Hv(e),"PRIVATE")),Nr(new nr("heartbeat",e=>new bE(e),"PRIVATE")),kn(Ha,Wu,t),kn(Ha,Wu,"esm2017"),kn("fire-js","")}CE("");var OE="firebase",kE="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(OE,kE,"app");function Pl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NE=Ed,Id=new Hi("auth","Firebase",Ed());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Rl("@firebase/auth");function DE(t,...e){Js.logLevel<=ue.WARN&&Js.warn(`Auth (${Ur}): ${t}`,...e)}function xs(t,...e){Js.logLevel<=ue.ERROR&&Js.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw Cl(t,...e)}function jt(t,...e){return Cl(t,...e)}function wd(t,e,n){const r=Object.assign(Object.assign({},NE()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function rn(t){return wd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Id.create(t,...e)}function ie(t,e,...n){if(!t)throw Cl(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xs(e),new Error(e)}function an(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VE(){return Yu()==="http:"||Yu()==="https:"}function Yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VE()||hv()||"connection"in navigator)?navigator.onLine:!0}function xE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=cv()||fv()}get(){return ME()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Ki(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,i={}){return Ad(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=qi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Td.fetch()(Rd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ad(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LE),e);try{const i=new $E(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Es(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Es(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Es(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw wd(t,d,f);xt(t,d)}}catch(i){if(i instanceof un)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function zi(t,e,n,r,i={}){const s=await $n(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Rd(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ol(t.config,i):`${t.config.apiScheme}://${i}`}function UE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $E{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),FE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jt(t,e,r);return i.customData._tokenResponse=n,i}function Zu(t){return t!==void 0&&t.enterprise!==void 0}class BE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jE(t,e){return $n(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function bd(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qE(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=kl(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ei(Ea(i.auth_time)),issuedAtTime:Ei(Ea(i.iat)),expirationTime:Ei(Ea(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ud(n);return i?JSON.parse(i):(xs("Failed to decode base64 JWT payload"),null)}catch(i){return xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eh(t){const e=kl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&KE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Di(t,bd(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sd(s.providerUserInfo):[],l=GE(t.providerData,a),c=t.isAnonymous,f=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?f:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Wa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function WE(t){const e=At(t);await Xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sd(t){return t.map(e=>{var{providerId:n}=e,r=Pl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e){const n=await Ad(t,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Rd(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Td.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JE(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=eh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Rr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qE(this,e)}reload(){return WE(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await Di(this,HE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,c,f,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Q=(f=n.createdAt)!==null&&f!==void 0?f:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:re,isAnonymous:ye,providerData:Y,stsTokenManager:T}=n;ie(H&&T,e,"internal-error");const _=Rr.fromJSON(this.name,T);ie(typeof H=="string",e,"internal-error"),yn(g,e.name),yn(y,e.name),ie(typeof re=="boolean",e,"internal-error"),ie(typeof ye=="boolean",e,"internal-error"),yn(A,e.name),yn(N,e.name),yn(V,e.name),yn(L,e.name),yn(Q,e.name),yn(K,e.name);const I=new en({uid:H,auth:e,email:y,emailVerified:re,displayName:g,isAnonymous:ye,photoURL:N,phoneNumber:A,tenantId:V,stsTokenManager:_,createdAt:Q,lastLoginAt:K});return Y&&Array.isArray(Y)&&(I.providerData=Y.map(w=>Object.assign({},w))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rr;i.updateFromServerResponse(n);const s=new en({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Rr;l.updateFromIdToken(r);const c=new en({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function tn(t){an(t instanceof Function,"Expected a class definition");let e=th.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,th.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pd.type="NONE";const nh=Pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ls(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ls("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(tn(nh),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||tn(nh);const a=Ls(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){const g=en._fromJSON(e,d);f!==s&&(l=g),s=f;break}}catch{}const c=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new br(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new br(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dd(e))return"Blackberry";if(Vd(e))return"Webos";if(Nl(e))return"Safari";if((e.includes("chrome/")||Od(e))&&!e.includes("edge/"))return"Chrome";if(Nd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cd(t=Je()){return/firefox\//i.test(t)}function Nl(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Od(t=Je()){return/crios\//i.test(t)}function kd(t=Je()){return/iemobile/i.test(t)}function Nd(t=Je()){return/android/i.test(t)}function Dd(t=Je()){return/blackberry/i.test(t)}function Vd(t=Je()){return/webos/i.test(t)}function ko(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XE(t=Je()){var e;return ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YE(){return dv()&&document.documentMode===10}function Md(t=Je()){return ko(t)||Nd(t)||Vd(t)||Dd(t)||/windows phone/i.test(t)||kd(t)}function ZE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e=[]){let n;switch(t){case"Browser":n=rh(Je());break;case"Worker":n=`${rh(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=6;class rI{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:nI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new eI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bd(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(rn(this));const n=e?At(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tI(this),n=new rI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return At(t)}class ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iv(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sI(t){No=t}function Ld(t){return No.loadJS(t)}function oI(){return No.recaptchaEnterpriseScript}function aI(){return No.gapiScript}function lI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cI="recaptcha-enterprise",uI="NO_RECAPTCHA";class hI{constructor(e){this.type=cI,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{jE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new BE(c);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,a(f.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Zu(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(f=>{a(f)}).catch(()=>{a(uI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&Zu(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=oI();c.length!==0&&(c+=l),Ld(c).then(()=>{i(l,s,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function sh(t,e,n,r=!1){const i=new hI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ga(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sh(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await sh(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gs(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function dI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pI(t,e,n){const r=cr(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fd(e),{host:a,port:l}=gI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mI()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gI(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oh(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:oh(a)}}}function oh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function _I(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function EI(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Dl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ga(e,n,"signInWithPassword",yI);case"emailLink":return vI(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ga(e,r,"signUpPassword",_I);case"emailLink":return EI(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="http://localhost";class ir extends Dl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pl(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ir(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:II,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TI(t){const e=li(ci(t)).link,n=e?li(ci(e)).deep_link_id:null,r=li(ci(t)).deep_link_id;return(r?li(ci(r)).link:null)||r||n||e||t}class Vl{constructor(e){var n,r,i,s,a,l;const c=li(ci(e)),f=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,g=wI((i=c.mode)!==null&&i!==void 0?i:null);ie(f&&d&&g,"argument-error"),this.apiKey=f,this.operation=g,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TI(e);try{return new Vl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vl.parseLink(n);return ie(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Wi{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Wi{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(t,e){return zi(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await en._fromIdTokenResponse(e,r,i),a=ah(r);return new sr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ah(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ys(e,n,r,i)}}function $d(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ys._fromErrorAndOperation(t,s,e,r):s})}async function RI(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(rn(r));const i="reauthenticate";try{const s=await Di(t,$d(r,i,e,t),n);ie(s.idToken,r,"internal-error");const a=kl(s.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(t.uid===l,r,"user-mismatch"),sr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t,e,n=!1){if(Bt(t.app))return Promise.reject(rn(t));const r="signIn",i=await $d(t,r,e),s=await sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SI(t,e){return Bd(cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PI(t,e,n){if(Bt(t.app))return Promise.reject(rn(t));const r=cr(t),a=await Ga(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jd(t),c}),l=await sr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function CI(t,e,n){return Bt(t.app)?Promise.reject(rn(t)):SI(At(t),$r.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jd(t),r})}function OI(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function kI(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function NI(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}const Zs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){const t=Je();return Nl(t)||ko(t)}const VI=1e3,MI=10;class qd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DI()&&ZE(),this.fallbackToPolling=Md(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);YE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const xI=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kd.type="SESSION";const zd=Kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Do(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(n.origin,s)),c=await LI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Do.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const f=Ml("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function UI(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jI(){return Wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebaseLocalStorageDb",HI=1,eo="firebaseLocalStorage",Qd="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function qI(){const t=indexedDB.deleteDatabase(Gd);return new Gi(t).toPromise()}function Qa(){const t=indexedDB.open(Gd,HI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eo,{keyPath:Qd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eo)?e(r):(r.close(),await qI(),e(await Qa()))})})}async function lh(t,e,n){const r=Vo(t,!0).put({[Qd]:e,value:n});return new Gi(r).toPromise()}async function KI(t,e){const n=Vo(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function ch(t,e){const n=Vo(t,!0).delete(e);return new Gi(n).toPromise()}const zI=800,WI=3;class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Do._getInstance(jI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new FI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qa();return await lh(e,Zs,"1"),await ch(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vo(i,!1).getAll();return new Gi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jd.type="LOCAL";const GI=Jd;new Ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){return e?tn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Dl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JI(t){return Bd(t.auth,new xl(t),t.bypassAuthState)}function XI(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),bI(n,new xl(t),t.bypassAuthState)}async function YI(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),RI(n,new xl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return XI;default:xt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Ki(2e3,1e4);class Ir extends Xd{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="pendingRedirect",Fs=new Map;class tw extends Xd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fs.get(this.auth._key());if(!e){try{const r=await nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fs.set(this.auth._key(),e)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nw(t,e){const n=sw(e),r=iw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rw(t,e){Fs.set(t._key(),e)}function iw(t){return tn(t._redirectPersistence)}function sw(t){return Ls(ew,t.config.apiKey,t.name)}async function ow(t,e,n=!1){if(Bt(t.app))return Promise.reject(rn(t));const r=cr(t),i=QI(r,e),a=await new tw(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=10*60*1e3;class lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aw&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fw=/^https?/;async function dw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uw(t);for(const n of e)try{if(pw(n))return}catch{}xt(t,"unauthorized-domain")}function pw(t){const e=za(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!fw.test(n))return!1;if(hw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Ki(3e4,6e4);function hh(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mw(t){return new Promise((e,n)=>{var r,i,s;function a(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),n(jt(t,"network-request-failed"))},timeout:gw.get()})}if(!((i=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ht().gapi)===null||s===void 0)&&s.load)a();else{const l=lI("iframefcb");return Ht()[l]=()=>{gapi.load?a():n(jt(t,"network-request-failed"))},Ld(`${aI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Us=null,e})}let Us=null;function _w(t){return Us=Us||mw(t),Us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new Ki(5e3,15e3),vw="__/auth/iframe",Ew="emulator/auth/iframe",Iw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ww=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tw(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ol(e,Ew):`https://${t.config.authDomain}/${vw}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},i=ww.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qi(r).slice(1)}`}async function Aw(t){const e=await _w(t),n=Ht().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:Tw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=jt(t,"network-request-failed"),l=Ht().setTimeout(()=>{s(a)},yw.get());function c(){Ht().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bw=500,Sw=600,Pw="_blank",Cw="http://localhost";class fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ow(t,e,n,r=bw,i=Sw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Rw),{width:r.toString(),height:i.toString(),top:s,left:a}),f=Je().toLowerCase();n&&(l=Od(f)?Pw:n),Cd(f)&&(e=e||Cw,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[A,N])=>`${y}${A}=${N},`,"");if(XE(f)&&l!=="_self")return kw(e||"",l),new fh(null);const g=window.open(e||"",l,d);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new fh(g)}function kw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="__/auth/handler",Dw="emulator/auth/handler",Vw=encodeURIComponent("fac");async function dh(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ev(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Wi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),f=c?`#${Vw}=${encodeURIComponent(c)}`:"";return`${Mw(t)}?${qi(l).slice(1)}${f}`}function Mw({config:t}){return t.emulator?Ol(t,Dw):`https://${t.authDomain}/${Nw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=ow,this._overrideRedirectResult=rw}async _openPopup(e,n,r,i){var s;an((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await dh(e,n,r,za(),i);return Ow(e,a,Ml())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dh(e,n,r,za(),i);return UI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(an(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Aw(e),r=new lw(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ia,{type:Ia},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ia];a!==void 0&&n(!!a),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Md()||Nl()||ko()}}const Lw=xw;var ph="@firebase/auth",gh="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $w(t){Nr(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(t)},f=new iI(r,i,s,c);return dI(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new nr("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new Fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(ph,gh,Uw(t)),kn(ph,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=5*60,jw=dd("authIdTokenMaxAge")||Bw;let mh=null;const Hw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jw)return;const i=n==null?void 0:n.token;mh!==i&&(mh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qw(t=_d()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fI(t,{popupRedirectResolver:Lw,persistence:[GI,xI,zd]}),r=dd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Hw(s.toString());kI(n,a,()=>a(n.currentUser)),OI(n,l=>a(l))}}const i=hd("auth");return i&&pI(n,`http://${i}`),n}function Kw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$w("Browser");var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.D=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(w,R,b){for(var v=Array(arguments.length-2),st=2;st<arguments.length;st++)v[st-2]=arguments[st];return _.prototype[R].apply(w,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);var w=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)w[R]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(R=0;16>R;++R)w[R]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],R=T.g[2];var b=T.g[3],v=_+(b^I&(R^b))+w[0]+3614090360&4294967295;_=I+(v<<7&4294967295|v>>>25),v=b+(R^_&(I^R))+w[1]+3905402710&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(I^b&(_^I))+w[2]+606105819&4294967295,R=b+(v<<17&4294967295|v>>>15),v=I+(_^R&(b^_))+w[3]+3250441966&4294967295,I=R+(v<<22&4294967295|v>>>10),v=_+(b^I&(R^b))+w[4]+4118548399&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(R^_&(I^R))+w[5]+1200080426&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(I^b&(_^I))+w[6]+2821735955&4294967295,R=b+(v<<17&4294967295|v>>>15),v=I+(_^R&(b^_))+w[7]+4249261313&4294967295,I=R+(v<<22&4294967295|v>>>10),v=_+(b^I&(R^b))+w[8]+1770035416&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(R^_&(I^R))+w[9]+2336552879&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(I^b&(_^I))+w[10]+4294925233&4294967295,R=b+(v<<17&4294967295|v>>>15),v=I+(_^R&(b^_))+w[11]+2304563134&4294967295,I=R+(v<<22&4294967295|v>>>10),v=_+(b^I&(R^b))+w[12]+1804603682&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(R^_&(I^R))+w[13]+4254626195&4294967295,b=_+(v<<12&4294967295|v>>>20),v=R+(I^b&(_^I))+w[14]+2792965006&4294967295,R=b+(v<<17&4294967295|v>>>15),v=I+(_^R&(b^_))+w[15]+1236535329&4294967295,I=R+(v<<22&4294967295|v>>>10),v=_+(R^b&(I^R))+w[1]+4129170786&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^R&(_^I))+w[6]+3225465664&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^I&(b^_))+w[11]+643717713&4294967295,R=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(R^b))+w[0]+3921069994&4294967295,I=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(I^R))+w[5]+3593408605&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^R&(_^I))+w[10]+38016083&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^I&(b^_))+w[15]+3634488961&4294967295,R=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(R^b))+w[4]+3889429448&4294967295,I=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(I^R))+w[9]+568446438&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^R&(_^I))+w[14]+3275163606&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^I&(b^_))+w[3]+4107603335&4294967295,R=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(R^b))+w[8]+1163531501&4294967295,I=R+(v<<20&4294967295|v>>>12),v=_+(R^b&(I^R))+w[13]+2850285829&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^R&(_^I))+w[2]+4243563512&4294967295,b=_+(v<<9&4294967295|v>>>23),v=R+(_^I&(b^_))+w[7]+1735328473&4294967295,R=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(R^b))+w[12]+2368359562&4294967295,I=R+(v<<20&4294967295|v>>>12),v=_+(I^R^b)+w[5]+4294588738&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^R)+w[8]+2272392833&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^I)+w[11]+1839030562&4294967295,R=b+(v<<16&4294967295|v>>>16),v=I+(R^b^_)+w[14]+4259657740&4294967295,I=R+(v<<23&4294967295|v>>>9),v=_+(I^R^b)+w[1]+2763975236&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^R)+w[4]+1272893353&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^I)+w[7]+4139469664&4294967295,R=b+(v<<16&4294967295|v>>>16),v=I+(R^b^_)+w[10]+3200236656&4294967295,I=R+(v<<23&4294967295|v>>>9),v=_+(I^R^b)+w[13]+681279174&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^R)+w[0]+3936430074&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^I)+w[3]+3572445317&4294967295,R=b+(v<<16&4294967295|v>>>16),v=I+(R^b^_)+w[6]+76029189&4294967295,I=R+(v<<23&4294967295|v>>>9),v=_+(I^R^b)+w[9]+3654602809&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^R)+w[12]+3873151461&4294967295,b=_+(v<<11&4294967295|v>>>21),v=R+(b^_^I)+w[15]+530742520&4294967295,R=b+(v<<16&4294967295|v>>>16),v=I+(R^b^_)+w[2]+3299628645&4294967295,I=R+(v<<23&4294967295|v>>>9),v=_+(R^(I|~b))+w[0]+4096336452&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~R))+w[7]+1126891415&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~I))+w[14]+2878612391&4294967295,R=b+(v<<15&4294967295|v>>>17),v=I+(b^(R|~_))+w[5]+4237533241&4294967295,I=R+(v<<21&4294967295|v>>>11),v=_+(R^(I|~b))+w[12]+1700485571&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~R))+w[3]+2399980690&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~I))+w[10]+4293915773&4294967295,R=b+(v<<15&4294967295|v>>>17),v=I+(b^(R|~_))+w[1]+2240044497&4294967295,I=R+(v<<21&4294967295|v>>>11),v=_+(R^(I|~b))+w[8]+1873313359&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~R))+w[15]+4264355552&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~I))+w[6]+2734768916&4294967295,R=b+(v<<15&4294967295|v>>>17),v=I+(b^(R|~_))+w[13]+1309151649&4294967295,I=R+(v<<21&4294967295|v>>>11),v=_+(R^(I|~b))+w[4]+4149444226&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~R))+w[11]+3174756917&4294967295,b=_+(v<<10&4294967295|v>>>22),v=R+(_^(b|~I))+w[2]+718787259&4294967295,R=b+(v<<15&4294967295|v>>>17),v=I+(b^(R|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var I=_-this.blockSize,w=this.B,R=this.h,b=0;b<_;){if(R==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(w[R++]=T.charCodeAt(b++),R==this.blockSize){i(this,w),R=0;break}}else for(;b<_;)if(w[R++]=T[b++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var I=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=I&255,I/=256;for(this.u(T),T=Array(16),_=I=0;4>_;++_)for(var w=0;32>w;w+=8)T[I++]=this.g[_]>>>w&255;return T};function s(T,_){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function a(T,_){this.h=_;for(var I=[],w=!0,R=T.length-1;0<=R;R--){var b=T[R]|0;w&&b==_||(I[R]=b,w=!1)}this.g=I}var l={};function c(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return L(f(-T));for(var _=[],I=1,w=0;T>=I;w++)_[w]=T/I|0,I*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return L(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=f(Math.pow(_,8)),w=g,R=0;R<T.length;R+=8){var b=Math.min(8,T.length-R),v=parseInt(T.substring(R,R+b),_);8>b?(b=f(Math.pow(_,b)),w=w.j(b).add(f(v))):(w=w.j(I),w=w.add(f(v)))}return w}var g=c(0),y=c(1),A=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-L(this).m();for(var T=0,_=1,I=0;I<this.g.length;I++){var w=this.i(I);T+=(0<=w?w:4294967296+w)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(V(this))return"-"+L(this).toString(T);for(var _=f(Math.pow(T,6)),I=this,w="";;){var R=re(I,_).g;I=Q(I,R.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=R,N(I))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}t.l=function(T){return T=Q(this,T),V(T)?-1:N(T)?0:1};function L(T){for(var _=T.g.length,I=[],w=0;w<_;w++)I[w]=~T.g[w];return new a(I,~T.h).add(y)}t.abs=function(){return V(this)?L(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],w=0,R=0;R<=_;R++){var b=w+(this.i(R)&65535)+(T.i(R)&65535),v=(b>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);w=v>>>16,b&=65535,v&=65535,I[R]=v<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function Q(T,_){return T.add(L(_))}t.j=function(T){if(N(this)||N(T))return g;if(V(this))return V(T)?L(this).j(L(T)):L(L(this).j(T));if(V(T))return L(this.j(L(T)));if(0>this.l(A)&&0>T.l(A))return f(this.m()*T.m());for(var _=this.g.length+T.g.length,I=[],w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<T.g.length;R++){var b=this.i(w)>>>16,v=this.i(w)&65535,st=T.i(R)>>>16,yt=T.i(R)&65535;I[2*w+2*R]+=v*yt,K(I,2*w+2*R),I[2*w+2*R+1]+=b*yt,K(I,2*w+2*R+1),I[2*w+2*R+1]+=v*st,K(I,2*w+2*R+1),I[2*w+2*R+2]+=b*st,K(I,2*w+2*R+2)}for(w=0;w<_;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=_;w<2*_;w++)I[w]=0;return new a(I,0)};function K(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function H(T,_){this.g=T,this.h=_}function re(T,_){if(N(_))throw Error("division by zero");if(N(T))return new H(g,g);if(V(T))return _=re(L(T),_),new H(L(_.g),L(_.h));if(V(_))return _=re(T,L(_)),new H(L(_.g),_.h);if(30<T.g.length){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,w=_;0>=w.l(T);)I=ye(I),w=ye(w);var R=Y(I,1),b=Y(w,1);for(w=Y(w,2),I=Y(I,2);!N(w);){var v=b.add(w);0>=v.l(T)&&(R=R.add(I),b=v),w=Y(w,1),I=Y(I,1)}return _=Q(T,R.j(_)),new H(R,_)}for(R=g;0<=T.l(_);){for(I=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=f(I),v=b.j(_);V(v)||0<v.l(T);)I-=w,b=f(I),v=b.j(_);N(b)&&(b=y),R=R.add(b),T=Q(T,v)}return new H(R,T)}t.A=function(T){return re(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)&T.i(w);return new a(I,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)|T.i(w);return new a(I,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)^T.i(w);return new a(I,this.h^T.h)};function ye(T){for(var _=T.g.length+1,I=[],w=0;w<_;w++)I[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(I,T.h)}function Y(T,_){var I=_>>5;_%=32;for(var w=T.g.length-I,R=[],b=0;b<w;b++)R[b]=0<_?T.i(b+I)>>>_|T.i(b+I+1)<<32-_:T.i(b+I);return new a(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Zd=a}).apply(typeof _h<"u"?_h:typeof self<"u"?self:typeof window<"u"?window:{});var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep,tp,ui,np,$s,Ja,rp,ip,sp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Is=="object"&&Is];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break e;h=h[S]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,y.apply(null,arguments)}function A(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[S].apply(p,j)}}function V(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function L(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let j=0;j<C;j++)o[S+j]=p[j]}else o.push(p)}}class Q{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function re(o){return re[" "](o),o}re[" "]=function(){};var ye=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function Y(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function T(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function _(o){const u={};for(const h in o)u[h]=o[h];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<I.length;C++)h=I[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function R(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function v(){var o=dt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,h){const p=yt.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var yt=new Q(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,ce=!1,dt=new st,Rt=()=>{const o=l.Promise.resolve(void 0);fe=()=>{o.then(vt)}};var vt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){b(h)}var u=yt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ce=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function Lt(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ye){e:{try{re(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Lt.aa.h.call(this)}}N(Lt,Oe);var Ue={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),G=0;function z(o,u,h,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=S,this.key=++G,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function de(o){this.src=o,this.g={},this.h=0}de.prototype.add=function(o,u,h,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=m(o,u,p,S);return-1<j?(u=o[j],h||(u.fa=!1)):(u=new z(u,this.src,C,!!p,S),u.fa=h,o.push(u)),u};function we(o,u){var h=u.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(J(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function m(o,u,h,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==p)return S}return-1}var E="closure_lm_"+(1e6*Math.random()|0),P={};function D(o,u,h,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)D(o,u[C],h,p,S);return null}return h=Z(h),o&&o[k]?o.K(u,h,f(p)?!!p.capture:!!p,S):O(o,u,h,!1,p,S)}function O(o,u,h,p,S,C){if(!u)throw Error("Invalid event type");var j=f(S)?!!S.capture:!!S,Te=W(o);if(Te||(o[E]=Te=new de(o)),h=Te.add(u,h,p,j,C),h.proxy)return h;if(p=$(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)hn||(S=j),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(B(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function o(h){return u.call(o.src,o.listener,h)}const u=M;return o}function q(o,u,h,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)q(o,u[C],h,p,S);else p=f(p)?!!p.capture:!!p,h=Z(h),o&&o[k]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=m(C,h,p,S),-1<h&&(J(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=m(u,h,p,S)),(h=-1<o?u[o]:null)&&F(h))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[k])we(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(B(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=W(u))?(we(h,o),h.h==0&&(h.src=null,u[E]=null)):J(o)}}}function B(o){return o in P?P[o]:P[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new Lt(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&F(o),o=h.call(p,u)}return o}function W(o){return o=o[E],o instanceof de?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function X(){Ce.call(this),this.i=new de(this),this.M=this,this.F=null}N(X,Ce),X.prototype[k]=!0,X.prototype.removeEventListener=function(o,u,h,p){q(this,o,u,h,p)};function ne(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var S=u;u=new Oe(p,o),w(u,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var j=u.g=h[C];S=ve(j,p,!0,u)&&S}if(j=u.g=o,S=ve(j,p,!0,u)&&S,S=ve(j,p,!1,u)&&S,h)for(C=0;C<h.length;C++)j=u.g=h[C],S=ve(j,p,!1,u)&&S}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)J(h[p]);delete o.g[u],o.h--}}this.F=null},X.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},X.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ve(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==h){var Te=j.listener,ze=j.ha||j.src;j.fa&&we(o.i,j),S=Te.call(ze,p)!==!1&&S}}return S&&!p.defaultPrevented}function ge(o,u,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ve(o){o.g=ge(()=>{o.g=null,o.i&&(o.i=!1,Ve(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class pt extends Ce{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(o){Ce.call(this),this.h=o,this.g={}}N(Et,Ce);var Hr=[];function fn(o){Y(o.g,function(u,h){this.g.hasOwnProperty(h)&&F(u)},o),o.g={}}Et.prototype.N=function(){Et.aa.N.call(this),fn(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=l.JSON.stringify,ot=l.JSON.parse,It=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function dr(){}dr.prototype.h=null;function Zl(o){return o.h||(o.h=o.i())}function ec(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ho(){Oe.call(this,"d")}N(Ho,Oe);function qo(){Oe.call(this,"c")}N(qo,Oe);var Bn={},tc=null;function es(){return tc=tc||new X}Bn.La="serverreachability";function nc(o){Oe.call(this,Bn.La,o)}N(nc,Oe);function Kr(o){const u=es();ne(u,new nc(u))}Bn.STAT_EVENT="statevent";function rc(o,u){Oe.call(this,Bn.STAT_EVENT,o),this.stat=u}N(rc,Oe);function at(o){const u=es();ne(u,new rc(u,o))}Bn.Ma="timingevent";function ic(o,u){Oe.call(this,Bn.Ma,o),this.size=u}N(ic,Oe);function zr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function og(o,u,h,p,S,C){o.info(function(){if(o.g)if(C)for(var j="",Te=C.split("&"),ze=0;ze<Te.length;ze++){var _e=Te[ze].split("=");if(1<_e.length){var Xe=_e[0];_e=_e[1];var Ye=Xe.split("_");j=2<=Ye.length&&Ye[1]=="type"?j+(Xe+"="+_e+"&"):j+(Xe+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+h+`
`+j})}function ag(o,u,h,p,S,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+h+`
`+C+" "+j})}function pr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+cg(o,h)+(p?" "+p:"")})}function lg(o,u){o.info(function(){return"TIMEOUT: "+u})}Wr.prototype.info=function(){};function cg(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return fr(h)}catch{return u}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ko;function ns(){}N(ns,dr),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Ko=new ns;function dn(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},zo={};function Wo(o,u,h){o.L=1,o.v=os(Wt(u)),o.m=h,o.P=!0,lc(o,null)}function lc(o,u){o.F=Date.now(),rs(o),o.A=Wt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),wc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new oc,o.g=$c(o.j,h?u:null,!o.m),0<o.O&&(o.M=new pt(y(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Hr[0]=S.toString()),S=Hr);for(var C=0;C<S.length;C++){var j=D(h,S[C],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Kr(),og(o.i,o.u,o.A,o.l,o.R,o.m)}dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Gt(o)==3?u.j():this.Y(o)},dn.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=Gt(this.g);var u=this.g.Ba();const _r=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Cc(this.g)))){this.J||Ye!=4||u==7||(u==8||0>=_r?Kr(3):Kr(2)),Go(this);var h=this.g.Z();this.X=h;t:if(cc(this)){var p=Cc(this.g);o="";var S=p.length,C=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Gr(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,ag(this.i,this.u,this.A,this.l,this.R,Ye,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,ze=this.g;if((Te=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Te)){var _e=Te;break t}}_e=null}if(h=_e)pr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qo(this,h);else{this.o=!1,this.s=3,at(12),jn(this),Gr(this);break e}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<j.length;)if(bt=ug(this,j),bt==zo){Ye==4&&(this.s=4,at(14),h=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==ac){this.s=4,at(15),pr(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else pr(this.i,this.l,bt,null),Qo(this,bt);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||j.length!=0||this.h.h||(this.s=1,at(16),h=!1),this.o=this.o&&h,!h)pr(this.i,this.l,j,"[Invalid Chunked Response]"),jn(this),Gr(this);else if(0<j.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ta(Xe),Xe.M=!0,at(11))}}else pr(this.i,this.l,j,null),Qo(this,j);Ye==4&&jn(this),this.o&&!this.J&&(Ye==4?xc(this.j,this):(this.o=!1,rs(this)))}else Sg(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),jn(this),Gr(this)}}}catch{}finally{}};function cc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ug(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?zo:(h=Number(u.substring(h,p)),isNaN(h)?ac:(p+=1,p+h>u.length?zo:(u=u.slice(p,p+h),o.C=p+h,u)))}dn.prototype.cancel=function(){this.J=!0,jn(this)};function rs(o){o.S=Date.now()+o.I,uc(o,o.I)}function uc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zr(y(o.ba,o),u)}function Go(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lg(this.i,this.A),this.L!=2&&(Kr(),at(17)),jn(this),this.s=2,Gr(this)):uc(this,this.S-o)};function Gr(o){o.j.G==0||o.J||xc(o.j,o)}function jn(o){Go(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,fn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Qo(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Jo(h.h,o))){if(!o.K&&Jo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)hs(h),cs(h);else break e;ea(h),at(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=zr(y(h.Za,h),6e3));if(1>=dc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else qn(h,11)}else if((o.K||h.g==o)&&hs(h),!K(u))for(S=h.Da.g.parse(u),u=0;u<S.length;u++){let _e=S[u];if(h.T=_e[0],_e=_e[1],h.G==2)if(_e[0]=="c"){h.K=_e[1],h.ia=_e[2];const Xe=_e[3];Xe!=null&&(h.la=Xe,h.j.info("VER="+h.la));const Ye=_e[4];Ye!=null&&(h.Aa=Ye,h.j.info("SVER="+h.Aa));const _r=_e[5];_r!=null&&typeof _r=="number"&&0<_r&&(p=1.5*_r,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const bt=o.g;if(bt){const ds=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var C=p.h;C.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Xo(C,C.h),C.h=null))}if(p.D){const na=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(p.ya=na,be(p.I,p.D,na))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=Uc(p,p.J?p.ia:null,p.W),j.K){pc(p.h,j);var Te=j,ze=p.L;ze&&(Te.I=ze),Te.B&&(Go(Te),rs(Te)),p.g=j}else Vc(p);0<h.i.length&&us(h)}else _e[0]!="stop"&&_e[0]!="close"||qn(h,7);else h.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?qn(h,7):Zo(h):_e[0]!="noop"&&h.l&&h.l.ta(_e),h.v=0)}}Kr(4)}catch{}}var hg=class{constructor(o,u){this.g=o,this.map=u}};function hc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dc(o){return o.h?1:o.g?o.g.size:0}function Jo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Xo(o,u){o.g?o.g.add(u):o.h=u}function pc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}hc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return V(o.i)}function fg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function dg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function mc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=dg(o),p=fg(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],h&&h[C],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pg(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var C=o[h].substring(0,p);S=o[h].substring(p+1)}else C=o[h];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,is(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var u=o.i,h=new Xr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),yc(this,h),this.m=o.m}else o&&(u=String(o).match(_c))?(this.h=!1,is(this,u[1]||"",!0),this.o=Qr(u[2]||""),this.g=Qr(u[3]||"",!0),ss(this,u[4]),this.l=Qr(u[5]||"",!0),yc(this,u[6]||"",!0),this.m=Qr(u[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Jr(u,vc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Jr(u,vc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Jr(h,h.charAt(0)=="/"?_g:mg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Jr(h,vg)),o.join("")};function Wt(o){return new Hn(o)}function is(o,u,h){o.j=h?Qr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function yc(o,u,h){u instanceof Xr?(o.i=u,Eg(o.i,o.h)):(h||(u=Jr(u,yg)),o.i=new Xr(u,o.h))}function be(o,u,h){o.i.set(u,h)}function os(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,gg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var vc=/[#\/\?@]/g,mg=/[#\?:]/g,_g=/[#\?]/g,yg=/[#\?@]/g,vg=/#/g;function Xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function pn(o){o.g||(o.g=new Map,o.h=0,o.i&&pg(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Xr.prototype,t.add=function(o,u){pn(this),this.i=null,o=gr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ec(o,u){pn(o),u=gr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ic(o,u){return pn(o),u=gr(o,u),o.g.has(u)}t.forEach=function(o,u){pn(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(u,S,p,this)},this)},this)},t.na=function(){pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)h.push(u[p])}return h},t.V=function(o){pn(this);let u=[];if(typeof o=="string")Ic(this,o)&&(u=u.concat(this.g.get(gr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return pn(this),this.i=null,o=gr(this,o),Ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function wc(o,u,h){Ec(o,u),0<h.length&&(o.i=null,o.g.set(gr(o,u),V(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const C=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var S=C;j[p]!==""&&(S+="="+encodeURIComponent(String(j[p]))),o.push(S)}}return this.i=o.join("&")};function gr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Eg(o,u){u&&!o.j&&(pn(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(Ec(this,p),wc(this,S,h))},o)),o.j=u}function Ig(o,u){const h=new Wr;if(l.Image){const p=new Image;p.onload=A(gn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=A(gn,h,"TestLoadImage: error",!1,u,p),p.onabort=A(gn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(gn,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function wg(o,u){const h=new Wr,p=new AbortController,S=setTimeout(()=>{p.abort(),gn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?gn(h,"TestPingServer: ok",!0,u):gn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),gn(h,"TestPingServer: error",!1,u)})}function gn(o,u,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function Tg(){this.g=new It}function Ag(o,u,h){const p=h||"";try{mc(o,function(S,C){let j=S;f(S)&&(j=fr(S)),u.push(p+C+"="+encodeURIComponent(j))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Yr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Yr,dr),Yr.prototype.g=function(){return new as(this.l,this.j)},Yr.prototype.i=function(o){return function(){return o}}({});function as(o,u){X.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(as,X),t=as.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ei(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Zr(this):ei(this),this.readyState==3&&Tc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Zr(this))},t.Qa=function(o){this.g&&(this.response=o,Zr(this))},t.ga=function(){this.g&&Zr(this)};function Zr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ei(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ei(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let u="";return Y(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Yo(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Ac(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):be(o,u,h))}function De(o){X.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(De,X);var Rg=/^https?$/i,bg=["POST","PUT"];t=De.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ko.g(),this.v=this.o?Zl(this.o):Zl(Ko),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Rc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bg,u,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of h)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Rc(this,C)}};function Rc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,bc(o),ls(o)}function bc(o){o.A||(o.A=!0,ne(o,"complete"),ne(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ne(this,"complete"),ne(this,"abort"),ls(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sc(this):this.bb())},t.bb=function(){Sc(this)};function Sc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Gt(o)!=4||o.Z()!=2)){if(o.u&&Gt(o)==4)ge(o.Ea,0,o);else if(ne(o,"readystatechange"),Gt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=j===0){var S=String(o.D).match(_c)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Rg.test(S?S.toLowerCase():"")}h=p}if(h)ne(o,"complete"),ne(o,"success");else{o.m=6;try{var C=2<Gt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",bc(o)}}finally{ls(o)}}}}function ls(o,u){if(o.g){Pc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ne(o,"ready");try{h.onreadystatechange=p}catch{}}}function Pc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Gt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ot(u)}};function Cc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sg(o){const u={};o=(o.g&&2<=Gt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var h=R(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[S]||[];u[S]=C,C.push(h)}T(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Oc(o){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,o),this.cb=ti("retryDelaySeedMs",1e4,o),this.Wa=ti("forwardChannelMaxRetries",2,o),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new hc(o&&o.concurrentRequestLimit),this.Da=new Tg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Oc.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,p){at(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Uc(this,null,this.W),us(this)};function Zo(o){if(kc(o),o.G==3){var u=o.U++,h=Wt(o.I);if(be(h,"SID",o.K),be(h,"RID",u),be(h,"TYPE","terminate"),ni(o,h),u=new dn(o,o.j,u),u.L=2,u.v=os(Wt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=$c(u.j,null),u.g.ea(u.v)),u.F=Date.now(),rs(u)}Fc(o)}function cs(o){o.g&&(ta(o),o.g.cancel(),o.g=null)}function kc(o){cs(o),o.u&&(l.clearTimeout(o.u),o.u=null),hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function us(o){if(!fc(o.h)&&!o.s){o.s=!0;var u=o.Ga;fe||Rt(),ce||(fe(),ce=!0),dt.add(u,o),o.B=0}}function Pg(o,u){return dc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zr(y(o.Ga,o,u),Lc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new dn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Dc(this,S,u),h=Wt(this.I),be(h,"RID",o),be(h,"CVER",22),this.D&&be(h,"X-HTTP-Session-Id",this.D),ni(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(Ac(C)))+"&"+u:this.m&&Yo(h,this.m,C)),Xo(this.h,S),this.Ua&&be(h,"TYPE","init"),this.P?(be(h,"$req",u),be(h,"SID","null"),S.T=!0,Wo(S,h,null)):Wo(S,h,u),this.G=2}}else this.G==3&&(o?Nc(this,o):this.i.length==0||fc(this.h)||Nc(this))};function Nc(o,u){var h;u?h=u.l:h=o.U++;const p=Wt(o.I);be(p,"SID",o.K),be(p,"RID",h),be(p,"AID",o.T),ni(o,p),o.m&&o.o&&Yo(p,o.m,o.o),h=new dn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Dc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xo(o.h,h),Wo(h,p,u)}function ni(o,u){o.H&&Y(o.H,function(h,p){be(u,p,h)}),o.l&&mc({},function(h,p){be(u,p,h)})}function Dc(o,u,h){h=Math.min(o.i.length,h);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const j=["count="+h];C==-1?0<h?(C=S[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let Te=!0;for(let ze=0;ze<h;ze++){let _e=S[ze].g;const Xe=S[ze].map;if(_e-=C,0>_e)C=Math.max(0,S[ze].g-100),Te=!1;else try{Ag(Xe,j,"req"+_e+"_")}catch{p&&p(Xe)}}if(Te){p=j.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function Vc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;fe||Rt(),ce||(fe(),ce=!0),dt.add(u,o),o.v=0}}function ea(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zr(y(o.Fa,o),Lc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zr(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),cs(this),Mc(this))};function ta(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Mc(o){o.g=new dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Wt(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),ni(o,u),o.m&&o.o&&Yo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=os(Wt(u)),h.m=null,h.P=!0,lc(h,o)}t.Za=function(){this.C!=null&&(this.C=null,cs(this),ea(this),at(19))};function hs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function xc(o,u){var h=null;if(o.g==u){hs(o),ta(o),o.g=null;var p=2}else if(Jo(o.h,u))h=u.D,pc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=es(),ne(p,new ic(p,h)),us(o)}else Vc(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Pg(o,u)||p==2&&ea(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),S){case 1:qn(o,5);break;case 4:qn(o,10);break;case 3:qn(o,6);break;default:qn(o,2)}}}function Lc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function qn(o,u){if(o.j.info("Error code "+u),u==2){var h=y(o.fb,o),p=o.Xa;const S=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||is(p,"https"),os(p),S?Ig(p.toString(),h):wg(p.toString(),h)}else at(2);o.G=0,o.l&&o.l.sa(u),Fc(o),kc(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Fc(o){if(o.G=0,o.ka=[],o.l){const u=gc(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Uc(o,u,h){var p=h instanceof Hn?Wt(h):new Hn(h);if(p.g!="")u&&(p.g=u+"."+p.g),ss(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new Hn(null);p&&is(C,p),u&&(C.g=u),S&&ss(C,S),h&&(C.l=h),p=C}return h=o.D,u=o.ya,h&&u&&be(p,h,u),be(p,"VER",o.la),ni(o,p),p}function $c(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new Yr({eb:h})):new De(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bc(){}t=Bc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fs(){}fs.prototype.g=function(o,u){return new gt(o,u)};function gt(o,u){X.call(this),this.g=new Oc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new mr(this)}N(gt,X),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Zo(this.g)},gt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=fr(o),o=h);u.i.push(new hg(u.Ya++,o)),u.G==3&&us(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,gt.aa.N.call(this)};function jc(o){Ho.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(jc,Ho);function Hc(){qo.call(this),this.status=1}N(Hc,qo);function mr(o){this.g=o}N(mr,Bc),mr.prototype.ua=function(){ne(this.g,"a")},mr.prototype.ta=function(o){ne(this.g,new jc(o))},mr.prototype.sa=function(o){ne(this.g,new Hc)},mr.prototype.ra=function(){ne(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,sp=function(){return new fs},ip=function(){return es()},rp=Bn,Ja={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,$s=ts,sc.COMPLETE="complete",np=sc,ec.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",X.prototype.listen=X.prototype.K,ui=ec,tp=Yr,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,ep=De}).apply(typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{});const yh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Rl("@firebase/firestore");function si(){return or.logLevel}function te(t,...e){if(or.logLevel<=ue.DEBUG){const n=e.map(Ll);or.debug(`Firestore (${Br}): ${t}`,...n)}}function ar(t,...e){if(or.logLevel<=ue.ERROR){const n=e.map(Ll);or.error(`Firestore (${Br}): ${t}`,...n)}}function to(t,...e){if(or.logLevel<=ue.WARN){const n=e.map(Ll);or.warn(`Firestore (${Br}): ${t}`,...n)}}function Ll(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function Ke(t,e){t||he()}function Pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gw{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new et(e)}}class Qw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Jw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Qw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,te("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new Xw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Zw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ke(e)}static min(){return new ke(new je(0,0))}static max(){return new ke(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Mi{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const eT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Mi{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return eT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new se(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new se(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Fe.fromString(e))}static fromName(e){return new le(Fe.fromString(e).popFirst(5))}static empty(){return new le(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Fe(e.slice()))}}function tT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ke.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Dn(i,le.empty(),e)}function nT(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(ke.min(),le.empty(),-1)}static max(){return new Dn(ke.max(),le.empty(),-1)}}function rT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==iT)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const f=c;n(e[f]).next(d=>{a[f]=d,++l,l===s&&r(a)},d=>i(d))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function oT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cp.oe=-1;function Fl(t){return t==null}function no(t){return t===0&&1/t==-1/0}function aT(t){return typeof t=="number"&&Number.isInteger(t)&&!no(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eh(this.data.getIterator())}getIteratorFrom(e){return new Eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Eh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new it(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lT("Invalid base64 string: "+s):s}}(e);return new ln(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ln(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const cT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=cT.exec(t);if(Ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?ln.fromBase64String(t):ln.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hp(t){const e=t.mapValue.fields.__previous_value__;return Ul(e)?hp(e):e}function ro(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,s,a,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ul(t)?4:hT(t)?9007199254740991:10:he()}function Kt(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=lr(i.timestampValue),l=lr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ge(i.doubleValue),l=Ge(s.doubleValue);return a===l?no(a)===no(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vh(a)!==vh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Kt(a[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Li(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Mr(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ge(s.integerValue||s.doubleValue),c=Ge(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Ih(t.timestampValue,e.timestampValue);case 4:return Ih(ro(t),ro(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,a){const l=xi(s),c=xi(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=Ae(l[f],c[f]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Ae(Ge(s.latitude),Ge(a.latitude));return l!==0?l:Ae(Ge(s.longitude),Ge(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let f=0;f<l.length&&f<c.length;++f){const d=Mr(l[f],c[f]);if(d)return d}return Ae(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ts.mapValue&&a===Ts.mapValue)return 0;if(s===Ts.mapValue)return 1;if(a===Ts.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const y=Ae(c[g],d[g]);if(y!==0)return y;const A=Mr(l[c[g]],f[d[g]]);if(A!==0)return A}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Ih(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=lr(t),r=lr(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function xr(t){return Xa(t)}function Xa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xa(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Xa(n.fields[a])}`;return i+"}"}(t.mapValue):he()}function Ya(t){return!!t&&"integerValue"in t}function $l(t){return!!t&&"arrayValue"in t}function Bs(t){return!!t&&"mapValue"in t}function Ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Ii(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Ii(this.value))}}function fp(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new Qe([n]);if(Bs(r)){const s=fp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,ke.min(),ke.min(),ke.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new Pt(e,1,n,ke.min(),r,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,ke.min(),ke.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,ke.min(),ke.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.position=e,this.inclusive=n}}function wh(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(a.referenceValue),n.key):r=Mr(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Th(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function fT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{}class Be extends dp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pT(e,n,r):n==="array-contains"?new _T(e,r):n==="in"?new yT(e,r):n==="not-in"?new vT(e,r):n==="array-contains-any"?new ET(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gT(e,r):new mT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mr(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Mr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends dp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vn(e,n)}matches(e){return pp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pp(t){return t.op==="and"}function gp(t){return dT(t)&&pp(t)}function dT(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Za(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+xr(t.value);if(gp(t))return t.filters.map(e=>Za(e)).join(",");{const e=t.filters.map(n=>Za(n)).join(",");return`${t.op}(${e})`}}function mp(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Kt(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&mp(a,i.filters[l]),!0):!1}(t,e):void he()}function _p(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${xr(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(_p).join(" ,")+"}"}(t):"Filter"}class pT extends Be{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class gT extends Be{constructor(e,n){super(e,"in",n),this.keys=yp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mT extends Be{constructor(e,n){super(e,"not-in",n),this.keys=yp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class _T extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $l(n)&&Li(n.arrayValue,this.value)}}class yT extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class vT extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class ET extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Ah(t,e=null,n=[],r=[],i=null,s=null,a=null){return new IT(t,e,n,r,i,s,a)}function Bl(t){const e=Pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Za(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xr(r)).join(",")),e.ue=n}return e.ue}function jl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Th(t.startAt,e.startAt)&&Th(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wT(t,e,n,r,i,s,a,l){return new xo(t,e,n,r,i,s,a,l)}function TT(t){return new xo(t)}function Rh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AT(t){return t.collectionGroup!==null}function wi(t){const e=Pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(Qe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new oo(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new oo(Qe.keyField(),r))}return e.ce}function er(t){const e=Pe(t);return e.le||(e.le=RT(e,wi(t))),e.le}function RT(t,e){if(t.limitType==="F")return Ah(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oo(i.field,s)});const n=t.endAt?new so(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new so(t.startAt.position,t.startAt.inclusive):null;return Ah(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function el(t,e,n){return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vp(t,e){return jl(er(t),er(e))&&t.limitType===e.limitType}function Ep(t){return`${Bl(er(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_p(i)).join(", ")}]`),Fl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xr(i)).join(",")),`Target(${r})`}(er(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const f=wh(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,wi(r),i)||r.endAt&&!function(a,l,c){const f=wh(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,wi(r),i))}(t,e)}function bT(t){return(e,n)=>{let r=!1;for(const i of wi(t)){const s=ST(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ST(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,a,l){const c=a.data.field(s),f=l.data.field(s);return c!==null&&f!==null?Mr(c,f):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return up(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new ft(le.comparator);function ao(){return PT}const Ip=new ft(le.comparator);function As(...t){let e=Ip;for(const n of t)e=e.insert(n.key,n);return e}function wp(t){let e=Ip;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return Ti()}function Tp(){return Ti()}function Ti(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const CT=new ft(le.comparator),OT=new it(le.comparator);function tt(...t){let e=OT;for(const n of t)e=e.add(n);return e}const kT=new it(Ae);function NT(){return kT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(e)?"-0":e}}function Rp(t){return{integerValue:""+t}}function DT(t,e){return aT(e)?Rp(e):Ap(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this._=void 0}}function VT(t,e,n){return t instanceof lo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ul(s)&&(s=hp(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Fi?Sp(t,e):t instanceof Ui?Pp(t,e):function(i,s){const a=bp(i,s),l=bh(a)+bh(i.Pe);return Ya(a)&&Ya(i.Pe)?Rp(l):Ap(i.serializer,l)}(t,e)}function MT(t,e,n){return t instanceof Fi?Sp(t,e):t instanceof Ui?Pp(t,e):n}function bp(t,e){return t instanceof co?function(r){return Ya(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lo extends Lo{}class Fi extends Lo{constructor(e){super(),this.elements=e}}function Sp(t,e){const n=Cp(e);for(const r of t.elements)n.some(i=>Kt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends Lo{constructor(e){super(),this.elements=e}}function Pp(t,e){let n=Cp(e);for(const r of t.elements)n=n.filter(i=>!Kt(i,r));return{arrayValue:{values:n}}}class co extends Lo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function bh(t){return Ge(t.integerValue||t.doubleValue)}function Cp(t){return $l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xT(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fi&&i instanceof Fi||r instanceof Ui&&i instanceof Ui?Dr(r.elements,i.elements,Kt):r instanceof co&&i instanceof co?Kt(r.Pe,i.Pe):r instanceof lo&&i instanceof lo}(t.transform,e.transform)}class LT{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function js(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fo{}function Op(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Np(t.key,sn.none()):new Ji(t.key,t.data,sn.none());{const n=t.data,r=Ot.empty();let i=new it(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ur(t.key,r,new Nt(i.toArray()),sn.none())}}function FT(t,e,n){t instanceof Ji?function(i,s,a){const l=i.value.clone(),c=Ph(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(i,s,a){if(!js(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Ph(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(kp(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ai(t,e,n,r){return t instanceof Ji?function(s,a,l,c){if(!js(s.precondition,a))return l;const f=s.value.clone(),d=Ch(s.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,a,l,c){if(!js(s.precondition,a))return l;const f=Ch(s.fieldTransforms,c,a),d=a.data;return d.setAll(kp(s)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return js(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function UT(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bp(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function Sh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Dr(r,i,(s,a)=>xT(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends Fo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Fo{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ph(t,e,n){const r=new Map;Ke(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,MT(a,l,n[i]))}return r}function Ch(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,VT(s,a,e))}return r}class Np extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $T extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tp();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Op(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ke.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tt())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(n,r)=>Sh(n,r))&&Dr(this.baseMutations,e.baseMutations,(n,r)=>Sh(n,r))}}class ql{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ke(e.mutations.length===r.length);let i=function(){return CT}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ql(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,pe;function HT(t){switch(t){default:return he();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function qT(t){if(t===void 0)return ar("GRPC error has no .code"),U.UNKNOWN;switch(t){case Le.OK:return U.OK;case Le.CANCELLED:return U.CANCELLED;case Le.UNKNOWN:return U.UNKNOWN;case Le.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Le.INTERNAL:return U.INTERNAL;case Le.UNAVAILABLE:return U.UNAVAILABLE;case Le.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Le.NOT_FOUND:return U.NOT_FOUND;case Le.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Le.ABORTED:return U.ABORTED;case Le.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Le.DATA_LOSS:return U.DATA_LOSS;default:return he()}}(pe=Le||(Le={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zd([4294967295,4294967295],0);class KT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WT(t,e){return tl(t,e.toTimestamp())}function Pr(t){return Ke(!!t),ke.fromTimestamp(function(n){const r=lr(n);return new je(r.seconds,r.nanos)}(t))}function Dp(t,e){return nl(t,e).canonicalString()}function nl(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GT(t){const e=Fe.fromString(t);return Ke(n0(e)),e}function rl(t,e){return Dp(t.databaseId,e.path)}function QT(t){const e=GT(t);return e.length===4?Fe.emptyPath():XT(e)}function JT(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XT(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Oh(t,e,n){return{name:rl(t,e),fields:n.value.mapValue.fields}}function YT(t,e){let n;if(e instanceof Ji)n={update:Oh(t,e.key,e.value)};else if(e instanceof Np)n={delete:rl(t,e.key)};else if(e instanceof ur)n={update:Oh(t,e.key,e.data),updateMask:t0(e.fieldMask)};else{if(!(e instanceof $T))return he();n={verify:rl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ui)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof co)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function ZT(t,e){return t&&t.length>0?(Ke(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?Pr(i.updateTime):Pr(s);return a.isEqual(ke.min())&&(a=Pr(s)),new LT(a,i.transformResults||[])}(n,e))):[]}function e0(t){let e=QT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ke(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(g){const y=Vp(g);return y instanceof Vn&&gp(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(N){return new oo(Er(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Fl(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(g){const y=!!g.before,A=g.values||[];return new so(A,y)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const y=!g.before,A=g.values||[];return new so(A,y)}(n.endAt)),wT(e,i,a,s,l,"F",c,f)}function Vp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Er(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Er(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Er(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Er(n.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Er(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>Vp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function Er(t){return Qe.fromServerFormat(t.fieldPath)}function t0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function n0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.ct=e}}function i0(t){const e=e0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?el(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this._n=new o0}addToCollectionParentIndex(e,n){return this._n.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Dn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class o0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Lr(0)}static Ln(){return new Lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ai(r.mutation,i,Nt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,tt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=tt()){const i=Qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=As();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,tt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=ao();const a=Ti(),l=function(){return Ti()}();return n.forEach((c,f)=>{const d=r.get(f.key);i.has(f.key)&&(d===void 0||d.mutation instanceof ur)?s=s.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Ai(d.mutation,f,d.mutation.getFieldMask(),je.now())):a.set(f.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var g;return l.set(f,new l0(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ti();let i=new ft((a,l)=>a-l),s=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||Nt.empty();d=l.applyToLocalView(f,d),r.set(c,d);const g=(i.get(l.batchId)||tt()).add(c);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,g=Tp();d.forEach(y=>{if(!s.has(y)){const A=Op(n.get(y),r.get(y));A!==null&&g.set(y,A),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return le.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Qn());let l=-1,c=s;return a.next(f=>x.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,c,f,tt())).next(d=>({batchId:l,changes:wp(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=As();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=As();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,c=>{const f=function(g,y){return new xo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(d=>{d.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Pt.newInvalidDocument(d)))});let l=As();return a.forEach((c,f)=>{const d=s.get(c);d!==void 0&&Ai(d.mutation,f,Nt.empty(),je.now()),Hl(n,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return x.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pr(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:i0(i.bundledQuery),readTime:Pr(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.overlays=new ft(le.comparator),this.hr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Qn(),s=n.length+1,a=new le(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=s.get(f.largestBatchId);d===null&&(d=Qn(),s=s.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Qn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=i)););return x.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jT(n,r));let s=this.hr.get(n);s===void 0&&(s=tt(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.Pr=new it($e.Ir),this.Tr=new it($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new le(new Fe([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new le(new Fe([])),r=new $e(n,e),i=new $e(n,e+1);let s=tt();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return le.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new it($e.Ir)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new BT(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ae);return n.forEach(i=>{const s=new $e(i,0),a=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),x.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const a=new $e(new le(s),0);let l=new it(Ae);return this.wr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(c.pr)),!0)},a),x.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ke(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return x.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.vr=e,this.docs=function(){return new ft(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=ao();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ao();const a=n.path,l=new le(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||rT(nT(d),r)<=0||(i.has(d.key)||Hl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}Fr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p0(this)}getSize(e){return x.resolve(this.size)}}class p0 extends a0{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.persistence=e,this.Mr=new jr(n=>Bl(n),jl),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Kl,this.targetCount=0,this.Lr=Lr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),x.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Lr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.qn(n),x.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.Br={},this.overlays={},this.kr=new cp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new g0(this),this.indexManager=new s0,this.remoteDocumentCache=function(i){return new d0(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new r0(n),this.$r=new u0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new h0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new f0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new _0(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return x.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class _0 extends sT{constructor(e){super(),this.currentSequenceNumber=e}}class zl{constructor(e){this.persistence=e,this.zr=new Kl,this.jr=null}static Hr(e){return new zl(e)}get Jr(){if(this.jr)return this.jr;throw he()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),x.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Jr,r=>{const i=le.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ke.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return x.or([()=>x.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=tt(),i=tt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wl(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pv()?8:oT(Je())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new y0;return this.Ji(e,n,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,a,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(si()<=ue.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),x.resolve()):(si()<=ue.DEBUG&&te("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(si()<=ue.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(n))):x.resolve())}ji(e,n){if(Rh(n))return x.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=el(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=tt(...s);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.Zi(n,l);return this.Xi(n,f,a,c.readTime)?this.ji(e,el(n,null,"F")):this.es(e,f,n,c)}))})))}Hi(e,n,r,i){return Rh(n)||i.isEqual(ke.min())?x.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,r,i)?x.resolve(null):(si()<=ue.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oi(n)),this.es(e,a,n,tT(i,-1)).next(l=>l))})}Zi(e,n){let r=new it(bT(e));return n.forEach((i,s)=>{Hl(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return si()<=ue.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",oi(n)),this.zi.getDocumentsMatchingQuery(e,n,Dn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ft(Ae),this.rs=new jr(s=>Bl(s),jl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function I0(t,e,n,r){return new E0(t,e,n,r)}async function Mp(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=tt();for(const f of i){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of s){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({us:f,removedBatchIds:a,addedBatchIds:l}))})})}function w0(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const g=f.batch,y=g.keys();let A=x.resolve();return y.forEach(N=>{A=A.next(()=>d.getEntry(c,N)).next(V=>{const L=f.docVersions.get(N);Ke(L!==null),V.version.compareTo(L)<0&&(g.applyToRemoteDocument(V,f),V.isValidDocument()&&(V.setReadTime(f.commitVersion),d.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=tt();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function T0(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function A0(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class kh{constructor(){this.activeTargetIds=NT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R0{constructor(){this.no=new kh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new kh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs=null;function wa(){return Rs===null?Rs=function(){return 268435456+Math.round(2147483648*Math.random())}():Rs++,"0x"+Rs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class C0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,a){const l=wa(),c=this.vo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,s,a),this.Mo(n,c,f,i).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw to("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}xo(n,r,i,s,a,l){return this.Co(n,r,i,s,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}vo(n,r){const i=S0[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=wa();return new Promise((a,l)=>{const c=new ep;c.setWithCredentials(!0),c.listenOnce(np.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $s.NO_ERROR:const d=c.getResponseJson();te(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case $s.TIMEOUT:te(Ze,`RPC '${e}' ${s} timed out`),l(new se(U.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const g=c.getStatus();if(te(Ze,`RPC '${e}' ${s} failed with status:`,g,"response text:",c.getResponseText()),g>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const N=function(L){const Q=L.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(Q)>=0?Q:U.UNKNOWN}(A.status);l(new se(N,A.message))}else l(new se(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new se(U.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Ze,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);te(Ze,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",f,r,15)})}Oo(e,n,r){const i=wa(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sp(),l=ip(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.xmlHttpFactory=new tp({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");te(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,c);const g=a.createWebChannel(d,c);let y=!1,A=!1;const N=new P0({lo:L=>{A?te(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(te(Ze,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),te(Ze,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},ho:()=>g.close()}),V=(L,Q,K)=>{L.listen(Q,H=>{try{K(H)}catch(re){setTimeout(()=>{throw re},0)}})};return V(g,ui.EventType.OPEN,()=>{A||(te(Ze,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),V(g,ui.EventType.CLOSE,()=>{A||(A=!0,te(Ze,`RPC '${e}' stream ${i} transport closed`),N.po())}),V(g,ui.EventType.ERROR,L=>{A||(A=!0,to(Ze,`RPC '${e}' stream ${i} transport errored:`,L),N.po(new se(U.UNAVAILABLE,"The operation could not be completed")))}),V(g,ui.EventType.MESSAGE,L=>{var Q;if(!A){const K=L.data[0];Ke(!!K);const H=K,re=H.error||((Q=H[0])===null||Q===void 0?void 0:Q.error);if(re){te(Ze,`RPC '${e}' stream ${i} received error:`,re);const ye=re.status;let Y=function(I){const w=Le[I];if(w!==void 0)return qT(w)}(ye),T=re.message;Y===void 0&&(Y=U.INTERNAL,T="Unknown error status: "+ye+" with message "+re.message),A=!0,N.po(new se(Y,T)),g.close()}else te(Ze,`RPC '${e}' stream ${i} received:`,K),N.yo(K)}}),V(l,rp.STAT_EVENT,L=>{L.stat===Ja.PROXY?te(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Ja.NOPROXY&&te(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function Ta(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){return new KT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,s,a,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new xp(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new se(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k0 extends O0{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=ZT(e.writeResults,e.commitTime),r=Pr(e.commitTime);return this.listener.A_(r,n)}return Ke(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=JT(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YT(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,nl(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(U.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,nl(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(U.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class D0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ar(n),this.y_=!1):te("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{Yi(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=Pe(c);f.M_.add(4),await Xi(f),f.N_.set("Unknown"),f.M_.delete(4),await $o(f)}(this))})}),this.N_=new D0(r,i)}}async function $o(t){if(Yi(t))for(const e of t.x_)await e(!0)}async function Xi(t){for(const e of t.x_)await e(!1)}function Yi(t){return Pe(t).M_.size===0}async function Lp(t,e,n){if(!Mo(e))throw e;t.M_.add(1),await Xi(t),t.N_.set("Offline"),n||(n=()=>T0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await $o(t)})}function Fp(t,e){return e().catch(n=>Lp(t,n,e))}async function Bo(t){const e=Pe(t),n=Mn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;M0(e);)try{const i=await A0(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,x0(e,i)}catch(i){await Lp(e,i)}Up(e)&&$p(e)}function M0(t){return Yi(t)&&t.v_.length<10}function x0(t,e){t.v_.push(e);const n=Mn(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Up(t){return Yi(t)&&!Mn(t).Zo()&&t.v_.length>0}function $p(t){Mn(t).start()}async function L0(t){Mn(t).V_()}async function F0(t){const e=Mn(t);for(const n of t.v_)e.d_(n.mutations)}async function U0(t,e,n){const r=t.v_.shift(),i=ql.from(r,e,n);await Fp(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bo(t)}async function $0(t,e){e&&Mn(t).E_&&await async function(r,i){if(function(a){return HT(a)&&a!==U.ABORTED}(i.code)){const s=r.v_.shift();Mn(r).t_(),await Fp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bo(r)}}(t,e),Up(t)&&$p(t)}async function Dh(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Yi(n);n.M_.add(3),await Xi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await $o(n)}async function B0(t,e){const n=Pe(t);e?(n.M_.delete(2),await $o(n)):e||(n.M_.add(2),await Xi(n),n.N_.set("Unknown"))}function Mn(t){return t.k_||(t.k_=function(n,r,i){const s=Pe(n);return s.f_(),new k0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:L0.bind(null,t),Ao:$0.bind(null,t),R_:F0.bind(null,t),A_:U0.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Bo(t)):(await t.k_.stop(),t.v_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Gl(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bp(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Mo(t))return new se(U.UNAVAILABLE,`${e}: ${t}`);throw t}class j0{constructor(){this.queries=new jr(e=>Ep(e),vp),this.onlineState="Unknown",this.z_=new Set}}function H0(t){t.z_.forEach(e=>{e.next()})}var Vh,Mh;(Mh=Vh||(Vh={})).J_="default",Mh.Cache="cache";class q0{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new jr(l=>Ep(l),vp),this.Da=new Map,this.Ca=new Set,this.va=new ft(le.comparator),this.Fa=new Map,this.Ma=new Kl,this.xa={},this.Oa=new Map,this.Na=Lr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function K0(t,e,n){const r=Q0(t);try{const i=await function(a,l){const c=Pe(a),f=je.now(),d=l.reduce((A,N)=>A.add(N.key),tt());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=ao(),V=tt();return c.os.getEntries(A,d).next(L=>{N=L,N.forEach((Q,K)=>{K.isValidDocument()||(V=V.add(Q))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,N)).next(L=>{g=L;const Q=[];for(const K of l){const H=UT(K,g.get(K.key).overlayedDocument);H!=null&&Q.push(new ur(K.key,H,fp(H.value.mapValue),sn.exists(!0)))}return c.mutationQueue.addMutationBatch(A,f,Q,l)}).next(L=>{y=L;const Q=L.applyToLocalDocumentSet(g,V);return c.documentOverlayCache.saveOverlays(A,L.batchId,Q)})}).then(()=>({batchId:y.batchId,changes:wp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let f=a.xa[a.currentUser.toKey()];f||(f=new ft(Ae)),f=f.insert(l,c),a.xa[a.currentUser.toKey()]=f}(r,i.batchId,n),await jo(r,i.changes),await Bo(r.remoteStore)}catch(i){const s=Bp(i,"Failed to persist write");n.reject(s)}}function xh(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=Pe(a);c.onlineState=l;let f=!1;c.queries.forEach((d,g)=>{for(const y of g.U_)y.j_(l)&&(f=!0)}),f&&H0(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function z0(t,e){const n=Pe(t),r=e.batch.batchId;try{const i=await w0(n.localStore,e);Hp(n,r,null),jp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await lp(i)}}async function W0(t,e,n){const r=Pe(t);try{const i=await function(a,l){const c=Pe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(g=>(Ke(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(f,g))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,e);Hp(r,e,n),jp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await lp(i)}}function jp(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Hp(t,e,n){const r=Pe(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function jo(t,e,n){const r=Pe(t),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){i.push(f);const g=Wl.Ki(c.targetId,f);s.push(g)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,f){const d=Pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(f,y=>x.forEach(y.qi,A=>d.persistence.referenceDelegate.addReference(g,y.targetId,A)).next(()=>x.forEach(y.Qi,A=>d.persistence.referenceDelegate.removeReference(g,y.targetId,A)))))}catch(g){if(!Mo(g))throw g;te("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const y=g.targetId;if(!g.fromCache){const A=d.ns.get(y),N=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(N);d.ns=d.ns.insert(y,V)}}}(r.localStore,s))}async function G0(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Mp(n.localStore,e);n.currentUser=e,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new se(U.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.us)}}function Q0(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W0.bind(null,e),e}class Lh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return I0(this.persistence,new v0,e.initialUser,this.serializer)}createPersistence(e){return new m0(zl.Hr,this.serializer)}createSharedClientState(e){return new R0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class J0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G0.bind(null,this.syncEngine),await B0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new j0}()}createDatastore(e){const n=Uo(e.databaseInfo.databaseId),r=function(s){return new C0(s)}(e.databaseInfo);return function(s,a,l,c){return new N0(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new V0(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>xh(this.syncEngine,n,0),function(){return Nh.D()?new Nh:new b0}())}createSyncEngine(e,n){return function(i,s,a,l,c,f,d){const g=new q0(i,s,a,l,c,f);return d&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Pe(r);te("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Xi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{te("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(te("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Aa(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z0(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dh(e.remoteStore,i)),t._onlineComponents=e}function Y0(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Z0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Y0(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await Aa(t,new Lh)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Aa(t,new Lh);return t._offlineComponents}async function eA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Fh(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Fh(t,new J0))),t._onlineComponents}function tA(t){return eA(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e,n){if(!n)throw new se(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rA(t,e,n,r){if(e===!0&&r===!0)throw new se(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $h(t){if(!le.isDocumentKey(t))throw new se(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function il(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new se(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zw;switch(r.type){case"firstParty":return new Jw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uh.get(n);r&&(te("ComponentProvider","Removing Datastore"),Uh.delete(n),r.terminate())}(this),Promise.resolve()}}function iA(t,e,n,r={}){var i;const s=(t=il(t,Jl))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=et.MOCK_USER;else{l=lv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new se(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(f)}t._authCredentials=new Ww(new op(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xl(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class $i extends Xl{constructor(e,n,r){super(e,n,TT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new le(e))}withConverter(e){return new $i(this.firestore,e,this._path)}}function sA(t,e,...n){if(t=At(t),arguments.length===1&&(e=ap.newId()),nA("doc","path",e),t instanceof Jl){const r=Fe.fromString(e,...n);return $h(r),new on(t,null,new le(r))}{if(!(t instanceof on||t instanceof $i))throw new se(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return $h(r),new on(t.firestore,t instanceof $i?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new xp(this,"async_queue_retry"),this.hu=()=>{const n=Ta();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ta();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ta();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Mo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Gl.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&he()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Kp extends Jl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new oA}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zp(this),this._firestoreClient.terminate()}}function aA(t,e){const n=typeof t=="object"?t:_d(),r=typeof t=="string"?t:"(default)",i=Sl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ov("firestore");s&&iA(i,...s)}return i}function lA(t){return t._firestoreClient||zp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zp(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,f,d){return new uT(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,qp(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new X0(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi(ln.fromBase64String(e))}catch(n){throw new se(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bi(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=/^__.*__$/;class uA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}function Jp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Yl{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return uo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Jp(this.fu)&&cA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class hA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uo(e)}Fu(e,n,r,i=!1){return new Yl({fu:e,methodName:n,vu:r,path:Qe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fA(t){const e=t._freezeSettings(),n=Uo(t._databaseId);return new hA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dA(t,e,n,r,i,s={}){const a=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);eg("Data must be an object, but it was:",a,r);const l=Yp(r,a);let c,f;if(s.merge)c=new Nt(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const g of s.mergeFields){const y=pA(e,g,n);if(!a.contains(y))throw new se(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);_A(d,y)||d.push(y)}c=new Nt(d),f=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,f=a.fieldTransforms;return new uA(new Ot(l),c,f)}function Xp(t,e){if(Zp(t=At(t)))return eg("Unsupported field value:",e,t),Yp(t,e);if(t instanceof Gp)return function(r,i){if(!Jp(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=Xp(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:tl(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tl(i.serializer,s)}}if(r instanceof Qp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bi)return{bytesValue:zT(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ql(r)}`)}(t,e)}function Yp(t,e){const n={};return up(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=Xp(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Zp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Qp||t instanceof Bi||t instanceof on||t instanceof Gp)}function eg(t,e,n){if(!Zp(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ql(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function pA(t,e,n){if((e=At(e))instanceof Wp)return e._internalPath;if(typeof e=="string")return mA(t,e);throw uo("Field path arguments must be of type string or ",t,!1,void 0,n)}const gA=new RegExp("[~\\*/\\[\\]]");function mA(t,e,n){if(e.search(gA)>=0)throw uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wp(...e.split("."))._internalPath}catch{throw uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uo(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new se(U.INVALID_ARGUMENT,l+t+c)}function _A(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function vA(t,e,n){t=il(t,on);const r=il(t.firestore,Kp),i=yA(t.converter,e);return EA(r,[dA(fA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function EA(t,e){return function(r,i){const s=new Zn;return r.asyncQueue.enqueueAndForget(async()=>K0(await tA(r),i,s)),s.promise}(lA(t),e)}(function(e,n=!0){(function(i){Br=i})(Ur),Nr(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Kp(new Gw(r.getProvider("auth-internal")),new Yw(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new se(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(f.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),kn(yh,"4.6.4",e),kn(yh,"4.6.4","esm2017")})();const IA={apiKey:"AIzaSyD6XGHixkRSZPZKz9P7lo9Z8z0uLKnkU-Y",authDomain:"cards-52791.firebaseapp.com",projectId:"cards-52791",storageBucket:"cards-52791.appspot.com",messagingSenderId:"570542097564",appId:"1:570542097564:web:2bd6c369b1e09e629a1959"},tg=md(IA),Zi=qw(tg),wA=aA(tg),TA=zt({name:"Navbar",setup(){const t=Al();return{user:Tt("user"),logout:async()=>{try{await Zi.signOut(),t.push("/cards-firebase/login")}catch{console.error("Error logging out:")}}}}}),hr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},AA={class:"navList"},RA={key:0};function bA(t,e,n,r,i,s){const a=wo("router-link");return _t(),Vt("nav",null,[Re("ul",AA,[Re("li",null,[Me(a,{class:"list__item",to:"/cards-firebase"},{default:Cs(()=>[Vs("Главная ")]),_:1})]),Re("li",null,[Me(a,{class:"list__item",to:"/cards-firebase/about"},{default:Cs(()=>[Vs("О предмете")]),_:1})]),Re("li",null,[Me(a,{class:"list__item",to:"/cards-firebase/contacts"},{default:Cs(()=>[Vs("Контакты")]),_:1})]),t.user!==null?(_t(),Vt("li",RA,[Re("button",{onClick:e[0]||(e[0]=(...l)=>t.logout&&t.logout(...l))},"Logout")])):Ro("",!0)])])}const SA=hr(TA,[["render",bA],["__scopeId","data-v-4b6229d4"]]),PA={class:"container"},CA=zt({__name:"App",setup(t){const e=Tt("user");return(n,r)=>{const i=wo("router-view");return _t(),Vt("div",PA,[Yn(e)!==null?(_t(),qf(SA,{key:0})):Ro("",!0),Me(i)])}}}),OA=zt({props:{title:{type:String,default:"Card"}},setup(){return{}}}),kA={class:"card"};function NA(t,e,n,r,i,s){return _t(),Vt("div",kA,[Re("div",null,mo(t.title),1)])}const ng=hr(OA,[["render",NA],["__scopeId","data-v-4fe3022d"]]),DA=zt({name:"MainMenu",components:{Card:ng},setup(){return{}}}),VA={class:"cardsList"};function MA(t,e,n,r,i,s){const a=wo("Card");return _t(),Vt("div",VA,[Me(a,{title:"Раздел 1"}),Me(a,{title:"Раздел 2"}),Me(a,{title:"Раздел 3"})])}const xA=hr(DA,[["render",MA],["__scopeId","data-v-308a4407"]]),LA=zt({name:"About",components:{Card:ng},setup(){return{}}});function FA(t,e,n,r,i,s){const a=wo("Card");return _t(),Vt("div",null,[Me(a,{title:"О предмете"})])}const UA=hr(LA,[["render",FA]]),$A=zt({name:"Contacts",setup(){return{}}}),BA=Re("h1",null,"Contacts",-1),jA=Re("p",null," Our Contacts : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quam ducimus quisquam enim beatae neque! ",-1),HA=[BA,jA];function qA(t,e,n,r,i,s){return _t(),Vt("div",null,HA)}const KA=hr($A,[["render",qA]]),zA=zt({setup(){const t=Yt(""),e=Yt(""),n=Yt(""),r=Yt(null),i=Al();return{email:t,password:e,name:n,error:r,register:async()=>{r.value=null;try{const c=(await PI(Zi,t.value,e.value)).user;c&&(await vA(sA(wA,"users",c.uid),{email:t.value,name:n.value,createdAt:new Date}),i.push("/cards-firebase/"))}catch(l){r.value=l.message}},backToLogin:()=>{i.push("/cards-firebase/login")}}}}),rg=t=>(Tf("data-v-3d96a6eb"),t=t(),Af(),t),WA={class:"register"},GA={class:"register__inner"},QA=rg(()=>Re("h1",null,"Register",-1)),JA={class:"register__footer"},XA=rg(()=>Re("button",{type:"submit"},"Register",-1)),YA={key:0};function ZA(t,e,n,r,i,s){return _t(),Vt("div",WA,[Re("div",GA,[QA,Re("form",{class:"registerForm",onSubmit:e[4]||(e[4]=Qf((...a)=>t.register&&t.register(...a),["prevent"]))},[di(Re("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"Email",required:""},null,512),[[_i,t.email]]),di(Re("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:"password",placeholder:"Password",required:""},null,512),[[_i,t.password]]),di(Re("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>t.name=a),type:"text",placeholder:"Name",required:""},null,512),[[_i,t.name]]),Re("div",JA,[XA,Re("button",{onClick:e[3]||(e[3]=(...a)=>t.backToLogin&&t.backToLogin(...a)),type:"button"},"Back to Login")])],32),t.error?(_t(),Vt("p",YA,mo(t.error),1)):Ro("",!0)])])}const eR=hr(zA,[["render",ZA],["__scopeId","data-v-3d96a6eb"]]),tR=zt({setup(){const t=Yt(""),e=Yt(""),n=Yt(null),r=Al();return{email:t,password:e,error:n,login:async()=>{n.value=null;try{await CI(Zi,t.value,e.value),r.push("/cards-firebase/register")}catch(s){n.value=s.message}}}}}),ig=t=>(Tf("data-v-c6958433"),t=t(),Af(),t),nR={class:"login"},rR={class:"login__inner"},iR=ig(()=>Re("h1",null,"Login",-1)),sR=ig(()=>Re("button",{type:"submit"},"Login",-1)),oR={key:0};function aR(t,e,n,r,i,s){return _t(),Vt("div",nR,[Re("div",rR,[iR,Re("form",{class:"loginForm",onSubmit:e[3]||(e[3]=Qf((...a)=>t.login&&t.login(...a),["prevent"]))},[di(Re("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"Email",required:""},null,512),[[_i,t.email]]),di(Re("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:"password",placeholder:"Password",required:""},null,512),[[_i,t.password]]),sR,Re("button",{onClick:e[2]||(e[2]=a=>t.$router.push("/cards-firebase/register"))}," Register ")],32),t.error?(_t(),Vt("p",oR,mo(t.error),1)):Ro("",!0)])])}const lR=hr(tR,[["render",aR],["__scopeId","data-v-c6958433"]]),cR=[{path:"/cards-firebase",component:xA,meta:{requiresAuth:!0}},{path:"/cards-firebase/about",component:UA,meta:{requiresAuth:!0}},{path:"/cards-firebase/contacts",component:KA,meta:{requiresAuth:!0}},{path:"/cards-firebase/register",component:eR},{path:"/cards-firebase/login",component:lR}],sg=Xy({history:Ry(),routes:cR});sg.beforeEach((t,e,n)=>{const r=t.matched.some(s=>s.meta.requiresAuth),i=Zi.currentUser;r&&!i?n("./cards-firebase/login"):n()});const bs=z_(CA),jh=Yt(null);NI(Zi,t=>{jh.value=t,bs._container||(bs.use(sg),bs.provide("user",jh),bs.mount("#app"))});
