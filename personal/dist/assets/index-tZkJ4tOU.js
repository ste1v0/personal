function A0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zp={exports:{}},Fa={},Jp={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),T0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),P0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),F0=Symbol.for("react.lazy"),qd=Symbol.iterator;function B0(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,rf={};function Io(e,t,r){this.props=e,this.context=t,this.refs=rf,this.updater=r||ef}Io.prototype.isReactComponent={};Io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=Io.prototype;function yu(e,t,r){this.props=e,this.context=t,this.refs=rf,this.updater=r||ef}var bu=yu.prototype=new nf;bu.constructor=yu;tf(bu,Io.prototype);bu.isPureReactComponent=!0;var Qd=Array.isArray,of=Object.prototype.hasOwnProperty,wu={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)of.call(t,n)&&!sf.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:Zi,type:e,key:i,ref:s,props:o,_owner:wu.current}}function V0(e,t){return{$$typeof:Zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zi}function U0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Gd=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U0(""+e.key):t.toString(36)}function Vs(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zi:case T0:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+gl(s,0):n,Qd(o)?(r="",e!=null&&(r=e.replace(Gd,"$&/")+"/"),Vs(o,t,r,"",function(u){return u})):o!=null&&(_u(o)&&(o=V0(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Gd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",Qd(e))for(var l=0;l<e.length;l++){i=e[l];var a=n+gl(i,l);s+=Vs(i,t,r,a,o)}else if(a=B0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=n+gl(i,l++),s+=Vs(i,t,r,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gs(e,t,r){if(e==null)return e;var n=[],o=0;return Vs(e,n,"","",function(i){return t.call(r,i,o++)}),n}function j0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},Us={transition:null},H0={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Us,ReactCurrentOwner:wu};X.Children={map:gs,forEach:function(e,t,r){gs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Io;X.Fragment=I0;X.Profiler=P0;X.PureComponent=yu;X.StrictMode=L0;X.Suspense=M0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;X.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=tf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=wu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)of.call(t,a)&&!sf.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Zi,type:e.type,key:o,ref:i,props:n,_owner:s}};X.createContext=function(e){return e={$$typeof:O0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N0,_context:e},e.Consumer=e};X.createElement=af;X.createFactory=function(e){var t=af.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:D0,render:e}};X.isValidElement=_u;X.lazy=function(e){return{$$typeof:F0,_payload:{_status:-1,_result:e},_init:j0}};X.memo=function(e,t){return{$$typeof:R0,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Us.transition;Us.transition={};try{e()}finally{Us.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return dt.current.useCallback(e,t)};X.useContext=function(e){return dt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};X.useEffect=function(e,t){return dt.current.useEffect(e,t)};X.useId=function(){return dt.current.useId()};X.useImperativeHandle=function(e,t,r){return dt.current.useImperativeHandle(e,t,r)};X.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return dt.current.useMemo(e,t)};X.useReducer=function(e,t,r){return dt.current.useReducer(e,t,r)};X.useRef=function(e){return dt.current.useRef(e)};X.useState=function(e){return dt.current.useState(e)};X.useSyncExternalStore=function(e,t,r){return dt.current.useSyncExternalStore(e,t,r)};X.useTransition=function(){return dt.current.useTransition()};X.version="18.2.0";Jp.exports=X;var le=Jp.exports;const Ir=Yp(le),R=A0({__proto__:null,default:Ir},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=le,K0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),Q0=Object.prototype.hasOwnProperty,G0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Q0.call(t,n)&&!X0.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:K0,type:e,key:i,ref:s,props:o,_owner:G0.current}}Fa.Fragment=q0;Fa.jsx=lf;Fa.jsxs=lf;Zp.exports=Fa;var N=Zp.exports,oc={},cf={exports:{}},Pt={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var Q=L.length;L.push(W);e:for(;0<Q;){var te=Q-1>>>1,me=L[te];if(0<o(me,W))L[te]=W,L[Q]=me,Q=te;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var W=L[0],Q=L.pop();if(Q!==W){L[0]=Q;e:for(var te=0,me=L.length,Xt=me>>>1;te<Xt;){var Ge=2*(te+1)-1,_r=L[Ge],St=Ge+1,We=L[St];if(0>o(_r,Q))St<me&&0>o(We,_r)?(L[te]=We,L[St]=Q,te=St):(L[te]=_r,L[Ge]=Q,te=Ge);else if(St<me&&0>o(We,Q))L[te]=We,L[St]=Q,te=St;else break e}}return W}function o(L,W){var Q=L.sortIndex-W.sortIndex;return Q!==0?Q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],p=1,d=null,h=3,g=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var W=r(u);W!==null;){if(W.callback===null)n(u);else if(W.startTime<=L)n(u),W.sortIndex=W.expirationTime,t(a,W);else break;W=r(u)}}function _(L){if(w=!1,b(L),!y)if(r(a)!==null)y=!0,pe(x);else{var W=r(u);W!==null&&Ee(_,W.startTime-L)}}function x(L,W){y=!1,w&&(w=!1,v($),$=-1),g=!0;var Q=h;try{for(b(W),d=r(a);d!==null&&(!(d.expirationTime>W)||L&&!B());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var me=te(d.expirationTime<=W);W=e.unstable_now(),typeof me=="function"?d.callback=me:d===r(a)&&n(a),b(W)}else n(a);d=r(a)}if(d!==null)var Xt=!0;else{var Ge=r(u);Ge!==null&&Ee(_,Ge.startTime-W),Xt=!1}return Xt}finally{d=null,h=Q,g=!1}}var k=!1,C=null,$=-1,z=5,E=-1;function B(){return!(e.unstable_now()-E<z)}function U(){if(C!==null){var L=e.unstable_now();E=L;var W=!0;try{W=C(!0,L)}finally{W?ie():(k=!1,C=null)}}else k=!1}var ie;if(typeof f=="function")ie=function(){f(U)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,de=ee.port2;ee.port1.onmessage=U,ie=function(){de.postMessage(null)}}else ie=function(){S(U,0)};function pe(L){C=L,k||(k=!0,ie())}function Ee(L,W){$=S(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,pe(x))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var Q=h;h=W;try{return L()}finally{h=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=h;h=L;try{return W()}finally{h=Q}},e.unstable_scheduleCallback=function(L,W,Q){var te=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?te+Q:te):Q=te,L){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,L={id:p++,callback:W,priorityLevel:L,startTime:Q,expirationTime:me,sortIndex:-1},Q>te?(L.sortIndex=Q,t(u,L),r(a)===null&&L===r(u)&&(w?(v($),$=-1):w=!0,Ee(_,Q-te))):(L.sortIndex=me,t(a,L),y||g||(y=!0,pe(x))),L},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(L){var W=h;return function(){var Q=h;h=W;try{return L.apply(this,arguments)}finally{h=Q}}}})(df);uf.exports=df;var Y0=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=le,Lt=Y0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,$i={};function Hn(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for($i[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},Yd={};function J0(e){return ic.call(Yd,e)?!0:ic.call(Xd,e)?!1:Z0.test(e)?Yd[e]=!0:(Xd[e]=!0,!1)}function ev(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tv(e,t,r,n){if(t===null||typeof t>"u"||ev(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function ku(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xu,ku);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xu,ku);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xu,ku);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,t,r,n){var o=Je.hasOwnProperty(t)?Je[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tv(t,r,o,n)&&(r=null),n||o===null?J0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Mr=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),mf=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),Zd=Symbol.iterator;function Vo(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,vl;function ni(e){if(vl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var yl=!1;function bl(e,t){if(!e||yl)return"";yl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{yl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ni(e):""}function rv(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function cc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case eo:return"Fragment";case Jn:return"Portal";case sc:return"Profiler";case Cu:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mf:return(e.displayName||"Context")+".Consumer";case ff:return(e._context.displayName||"Context")+".Provider";case $u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eu:return t=e.displayName||null,t!==null?t:cc(e.type)||"Memo";case Wr:t=e._payload,e=e._init;try{return cc(e(t))}catch{}}return null}function nv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ov(e){var t=vf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=ov(e))}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=vf(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uc(e,t){var r=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Jd(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=cn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bf(e,t){t=t.checked,t!=null&&Su(e,"checked",t,!1)}function dc(e,t){bf(e,t);var r=cn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hc(e,t.type,r):t.hasOwnProperty("defaultValue")&&hc(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function hc(e,t,r){(t!=="number"||sa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var oi=Array.isArray;function po(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+cn(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function th(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(oi(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:cn(r)}}function wf(e,t){var r=cn(t.value),n=cn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,xf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){iv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ai[t]=ai[e]})});function kf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}function Sf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=kf(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var sv=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(e,t){if(t){if(sv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function gc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yc=null,fo=null,mo=null;function nh(e){if(e=ts(e)){if(typeof yc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ha(t),yc(e.stateNode,e.type,t))}}function Cf(e){fo?mo?mo.push(e):mo=[e]:fo=e}function $f(){if(fo){var e=fo,t=mo;if(mo=fo=null,nh(e),t)for(e=0;e<t.length;e++)nh(t[e])}}function Ef(e,t){return e(t)}function zf(){}var wl=!1;function Af(e,t,r){if(wl)return e(t,r);wl=!0;try{return Ef(e,t,r)}finally{wl=!1,(fo!==null||mo!==null)&&(zf(),$f())}}function zi(e,t){var r=e.stateNode;if(r===null)return null;var n=Ha(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var bc=!1;if(Lr)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{bc=!1}function av(e,t,r,n,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(p){this.onError(p)}}var li=!1,aa=null,la=!1,wc=null,lv={onError:function(e){li=!0,aa=e}};function cv(e,t,r,n,o,i,s,l,a){li=!1,aa=null,av.apply(lv,arguments)}function uv(e,t,r,n,o,i,s,l,a){if(cv.apply(this,arguments),li){if(li){var u=aa;li=!1,aa=null}else throw Error(T(198));la||(la=!0,wc=u)}}function Wn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oh(e){if(Wn(e)!==e)throw Error(T(188))}function dv(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return oh(o),e;if(i===n)return oh(o),t;i=i.sibling}throw Error(T(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function If(e){return e=dv(e),e!==null?Lf(e):null}function Lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lf(e);if(t!==null)return t;e=e.sibling}return null}var Pf=Lt.unstable_scheduleCallback,ih=Lt.unstable_cancelCallback,hv=Lt.unstable_shouldYield,pv=Lt.unstable_requestPaint,Le=Lt.unstable_now,fv=Lt.unstable_getCurrentPriorityLevel,Au=Lt.unstable_ImmediatePriority,Nf=Lt.unstable_UserBlockingPriority,ca=Lt.unstable_NormalPriority,mv=Lt.unstable_LowPriority,Of=Lt.unstable_IdlePriority,Ba=null,yr=null;function gv(e){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:bv,vv=Math.log,yv=Math.LN2;function bv(e){return e>>>=0,e===0?32:31-(vv(e)/yv|0)|0}var ws=64,_s=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ua(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~o;l!==0?n=ii(l):(i&=s,i!==0&&(n=ii(i)))}else s=r&~o,s!==0?n=ii(s):i!==0&&(n=ii(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-nr(t),o=1<<r,n|=e[r],t&=~o;return n}function wv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-nr(i),l=1<<s,a=o[s];a===-1?(!(l&r)||l&n)&&(o[s]=wv(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function _c(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Df(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function _l(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ji(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nr(t),e[t]=r}function xv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-nr(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Tu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-nr(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ce=0;function Mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rf,Iu,Ff,Bf,Vf,xc=!1,xs=[],Jr=null,en=null,tn=null,Ai=new Map,Ti=new Map,qr=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(e,t){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function jo(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ts(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sv(e,t,r,n,o){switch(t){case"focusin":return Jr=jo(Jr,e,t,r,n,o),!0;case"dragenter":return en=jo(en,e,t,r,n,o),!0;case"mouseover":return tn=jo(tn,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Ai.set(i,jo(Ai.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Ti.set(i,jo(Ti.get(i)||null,e,t,r,n,o)),!0}return!1}function Uf(e){var t=En(e.target);if(t!==null){var r=Wn(t);if(r!==null){if(t=r.tag,t===13){if(t=Tf(r),t!==null){e.blockedOn=t,Vf(e.priority,function(){Ff(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=kc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);vc=n,r.target.dispatchEvent(n),vc=null}else return t=ts(r),t!==null&&Iu(t),e.blockedOn=r,!1;t.shift()}return!0}function ah(e,t,r){js(e)&&r.delete(t)}function Cv(){xc=!1,Jr!==null&&js(Jr)&&(Jr=null),en!==null&&js(en)&&(en=null),tn!==null&&js(tn)&&(tn=null),Ai.forEach(ah),Ti.forEach(ah)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,xc||(xc=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,Cv)))}function Ii(e){function t(o){return Ho(o,e)}if(0<xs.length){Ho(xs[0],e);for(var r=1;r<xs.length;r++){var n=xs[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Jr!==null&&Ho(Jr,e),en!==null&&Ho(en,e),tn!==null&&Ho(tn,e),Ai.forEach(t),Ti.forEach(t),r=0;r<qr.length;r++)n=qr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<qr.length&&(r=qr[0],r.blockedOn===null);)Uf(r),r.blockedOn===null&&qr.shift()}var go=Mr.ReactCurrentBatchConfig,da=!0;function $v(e,t,r,n){var o=ce,i=go.transition;go.transition=null;try{ce=1,Lu(e,t,r,n)}finally{ce=o,go.transition=i}}function Ev(e,t,r,n){var o=ce,i=go.transition;go.transition=null;try{ce=4,Lu(e,t,r,n)}finally{ce=o,go.transition=i}}function Lu(e,t,r,n){if(da){var o=kc(e,t,r,n);if(o===null)Il(e,t,n,ha,r),sh(e,n);else if(Sv(o,e,t,r,n))n.stopPropagation();else if(sh(e,n),t&4&&-1<kv.indexOf(e)){for(;o!==null;){var i=ts(o);if(i!==null&&Rf(i),i=kc(e,t,r,n),i===null&&Il(e,t,n,ha,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Il(e,t,n,null,r)}}var ha=null;function kc(e,t,r,n){if(ha=null,e=zu(n),e=En(e),e!==null)if(t=Wn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Tf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ha=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case Au:return 1;case Nf:return 4;case ca:case mv:return 16;case Of:return 536870912;default:return 16}default:return 16}}var Xr=null,Pu=null,Hs=null;function Hf(){if(Hs)return Hs;var e,t=Pu,r=t.length,n,o="value"in Xr?Xr.value:Xr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Hs=o.slice(e,1<n?1-n:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function lh(){return!1}function Nt(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ks:lh,this.isPropagationStopped=lh,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),t}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Nt(Lo),es=$e({},Lo,{view:0,detail:0}),zv=Nt(es),xl,kl,Wo,Va=$e({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?(xl=e.screenX-Wo.screenX,kl=e.screenY-Wo.screenY):kl=xl=0,Wo=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),ch=Nt(Va),Av=$e({},Va,{dataTransfer:0}),Tv=Nt(Av),Iv=$e({},es,{relatedTarget:0}),Sl=Nt(Iv),Lv=$e({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Nt(Lv),Nv=$e({},Lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ov=Nt(Nv),Dv=$e({},Lo,{data:0}),uh=Nt(Dv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fv[e])?!!t[e]:!1}function Ou(){return Bv}var Vv=$e({},es,{key:function(e){if(e.key){var t=Mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uv=Nt(Vv),jv=$e({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=Nt(jv),Hv=$e({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Wv=Nt(Hv),Kv=$e({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=Nt(Kv),Qv=$e({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Nt(Qv),Xv=[9,13,27,32],Du=Lr&&"CompositionEvent"in window,ci=null;Lr&&"documentMode"in document&&(ci=document.documentMode);var Yv=Lr&&"TextEvent"in window&&!ci,Wf=Lr&&(!Du||ci&&8<ci&&11>=ci),hh=" ",ph=!1;function Kf(e,t){switch(e){case"keyup":return Xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var to=!1;function Zv(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(ph=!0,hh);case"textInput":return e=t.data,e===hh&&ph?null:e;default:return null}}function Jv(e,t){if(to)return e==="compositionend"||!Du&&Kf(e,t)?(e=Hf(),Hs=Pu=Xr=null,to=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function Qf(e,t,r,n){Cf(n),t=pa(t,"onChange"),0<t.length&&(r=new Nu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ui=null,Li=null;function ty(e){im(e,0)}function Ua(e){var t=oo(e);if(yf(t))return e}function ry(e,t){if(e==="change")return t}var Gf=!1;if(Lr){var Cl;if(Lr){var $l="oninput"in document;if(!$l){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),$l=typeof mh.oninput=="function"}Cl=$l}else Cl=!1;Gf=Cl&&(!document.documentMode||9<document.documentMode)}function gh(){ui&&(ui.detachEvent("onpropertychange",Xf),Li=ui=null)}function Xf(e){if(e.propertyName==="value"&&Ua(Li)){var t=[];Qf(t,Li,e,zu(e)),Af(ty,t)}}function ny(e,t,r){e==="focusin"?(gh(),ui=t,Li=r,ui.attachEvent("onpropertychange",Xf)):e==="focusout"&&gh()}function oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua(Li)}function iy(e,t){if(e==="click")return Ua(t)}function sy(e,t){if(e==="input"||e==="change")return Ua(t)}function ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sr=typeof Object.is=="function"?Object.is:ay;function Pi(e,t){if(sr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!ic.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yh(e,t){var r=vh(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vh(r)}}function Yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zf(){for(var e=window,t=sa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=sa(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ly(e){var t=Zf(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Yf(r.ownerDocument.documentElement,r)){if(n!==null&&Mu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=yh(r,i);var s=yh(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cy=Lr&&"documentMode"in document&&11>=document.documentMode,ro=null,Sc=null,di=null,Cc=!1;function bh(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cc||ro==null||ro!==sa(n)||(n=ro,"selectionStart"in n&&Mu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),di&&Pi(di,n)||(di=n,n=pa(Sc,"onSelect"),0<n.length&&(t=new Nu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ro)))}function Ss(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var no={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},El={},Jf={};Lr&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function ja(e){if(El[e])return El[e];if(!no[e])return e;var t=no[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jf)return El[e]=t[r];return e}var em=ja("animationend"),tm=ja("animationiteration"),rm=ja("animationstart"),nm=ja("transitionend"),om=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){om.set(e,t),Hn(t,[e])}for(var zl=0;zl<wh.length;zl++){var Al=wh[zl],uy=Al.toLowerCase(),dy=Al[0].toUpperCase()+Al.slice(1);mn(uy,"on"+dy)}mn(em,"onAnimationEnd");mn(tm,"onAnimationIteration");mn(rm,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(nm,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function _h(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,uv(n,t,void 0,e),e.currentTarget=null}function im(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;_h(o,l,u),i=a}else for(s=0;s<n.length;s++){if(l=n[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;_h(o,l,u),i=a}}}if(la)throw e=wc,la=!1,wc=null,e}function ge(e,t){var r=t[Tc];r===void 0&&(r=t[Tc]=new Set);var n=e+"__bubble";r.has(n)||(sm(t,e,2,!1),r.add(n))}function Tl(e,t,r){var n=0;t&&(n|=4),sm(r,e,n,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Cs]){e[Cs]=!0,pf.forEach(function(r){r!=="selectionchange"&&(hy.has(r)||Tl(r,!1,e),Tl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,Tl("selectionchange",!1,t))}}function sm(e,t,r,n){switch(jf(t)){case 1:var o=$v;break;case 4:o=Ev;break;default:o=Lu}r=o.bind(null,t,r,e),o=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Il(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=En(l),s===null)return;if(a=s.tag,a===5||a===6){n=i=s;continue e}l=l.parentNode}}n=n.return}Af(function(){var u=i,p=zu(r),d=[];e:{var h=om.get(e);if(h!==void 0){var g=Nu,y=e;switch(e){case"keypress":if(Ws(r)===0)break e;case"keydown":case"keyup":g=Uv;break;case"focusin":y="focus",g=Sl;break;case"focusout":y="blur",g=Sl;break;case"beforeblur":case"afterblur":g=Sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wv;break;case em:case tm:case rm:g=Pv;break;case nm:g=qv;break;case"scroll":g=zv;break;case"wheel":g=Gv;break;case"copy":case"cut":case"paste":g=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dh}var w=(t&4)!==0,S=!w&&e==="scroll",v=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,b;f!==null;){b=f;var _=b.stateNode;if(b.tag===5&&_!==null&&(b=_,v!==null&&(_=zi(f,v),_!=null&&w.push(Oi(f,_,b)))),S)break;f=f.return}0<w.length&&(h=new g(h,y,null,r,p),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&r!==vc&&(y=r.relatedTarget||r.fromElement)&&(En(y)||y[Pr]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=u,y=y?En(y):null,y!==null&&(S=Wn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=ch,_="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=dh,_="onPointerLeave",v="onPointerEnter",f="pointer"),S=g==null?h:oo(g),b=y==null?h:oo(y),h=new w(_,f+"leave",g,r,p),h.target=S,h.relatedTarget=b,_=null,En(p)===u&&(w=new w(v,f+"enter",y,r,p),w.target=b,w.relatedTarget=S,_=w),S=_,g&&y)t:{for(w=g,v=y,f=0,b=w;b;b=Xn(b))f++;for(b=0,_=v;_;_=Xn(_))b++;for(;0<f-b;)w=Xn(w),f--;for(;0<b-f;)v=Xn(v),b--;for(;f--;){if(w===v||v!==null&&w===v.alternate)break t;w=Xn(w),v=Xn(v)}w=null}else w=null;g!==null&&xh(d,h,g,w,!1),y!==null&&S!==null&&xh(d,S,y,w,!0)}}e:{if(h=u?oo(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=ry;else if(fh(h))if(Gf)x=sy;else{x=oy;var k=ny}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=iy);if(x&&(x=x(e,u))){Qf(d,x,r,p);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&hc(h,"number",h.value)}switch(k=u?oo(u):window,e){case"focusin":(fh(k)||k.contentEditable==="true")&&(ro=k,Sc=u,di=null);break;case"focusout":di=Sc=ro=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,bh(d,r,p);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":bh(d,r,p)}var C;if(Du)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else to?Kf(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(Wf&&r.locale!=="ko"&&(to||$!=="onCompositionStart"?$==="onCompositionEnd"&&to&&(C=Hf()):(Xr=p,Pu="value"in Xr?Xr.value:Xr.textContent,to=!0)),k=pa(u,$),0<k.length&&($=new uh($,e,null,r,p),d.push({event:$,listeners:k}),C?$.data=C:(C=qf(r),C!==null&&($.data=C)))),(C=Yv?Zv(e,r):Jv(e,r))&&(u=pa(u,"onBeforeInput"),0<u.length&&(p=new uh("onBeforeInput","beforeinput",null,r,p),d.push({event:p,listeners:u}),p.data=C))}im(d,t)})}function Oi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pa(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=zi(e,r),i!=null&&n.unshift(Oi(e,i,o)),i=zi(e,t),i!=null&&n.push(Oi(e,i,o))),e=e.return}return n}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xh(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var l=r,a=l.alternate,u=l.stateNode;if(a!==null&&a===n)break;l.tag===5&&u!==null&&(l=u,o?(a=zi(r,i),a!=null&&s.unshift(Oi(r,a,l))):o||(a=zi(r,i),a!=null&&s.push(Oi(r,a,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var py=/\r\n?/g,fy=/\u0000|\uFFFD/g;function kh(e){return(typeof e=="string"?e:""+e).replace(py,`
`).replace(fy,"")}function $s(e,t,r){if(t=kh(t),kh(e)!==t&&r)throw Error(T(425))}function fa(){}var $c=null,Ec=null;function zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(e){return Sh.resolve(null).then(e).catch(vy)}:Ac;function vy(e){setTimeout(function(){throw e})}function Ll(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Ii(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Ii(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Po=Math.random().toString(36).slice(2),vr="__reactFiber$"+Po,Di="__reactProps$"+Po,Pr="__reactContainer$"+Po,Tc="__reactEvents$"+Po,yy="__reactListeners$"+Po,by="__reactHandles$"+Po;function En(e){var t=e[vr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Pr]||r[vr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ch(e);e!==null;){if(r=e[vr])return r;e=Ch(e)}return t}e=r,r=e.parentNode}return null}function ts(e){return e=e[vr]||e[Pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ha(e){return e[Di]||null}var Ic=[],io=-1;function gn(e){return{current:e}}function ve(e){0>io||(e.current=Ic[io],Ic[io]=null,io--)}function fe(e,t){io++,Ic[io]=e.current,e.current=t}var un={},st=gn(un),vt=gn(!1),Nn=un;function xo(e,t){var r=e.type.contextTypes;if(!r)return un;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function yt(e){return e=e.childContextTypes,e!=null}function ma(){ve(vt),ve(st)}function $h(e,t,r){if(st.current!==un)throw Error(T(168));fe(st,t),fe(vt,r)}function am(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(T(108,nv(e)||"Unknown",o));return $e({},r,n)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Nn=st.current,fe(st,e),fe(vt,vt.current),!0}function Eh(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=am(e,t,Nn),n.__reactInternalMemoizedMergedChildContext=e,ve(vt),ve(st),fe(st,e)):ve(vt),fe(vt,r)}var $r=null,Wa=!1,Pl=!1;function lm(e){$r===null?$r=[e]:$r.push(e)}function wy(e){Wa=!0,lm(e)}function vn(){if(!Pl&&$r!==null){Pl=!0;var e=0,t=ce;try{var r=$r;for(ce=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}$r=null,Wa=!1}catch(o){throw $r!==null&&($r=$r.slice(e+1)),Pf(Au,vn),o}finally{ce=t,Pl=!1}}return null}var so=[],ao=0,va=null,ya=0,Rt=[],Ft=0,On=null,zr=1,Ar="";function Sn(e,t){so[ao++]=ya,so[ao++]=va,va=e,ya=t}function cm(e,t,r){Rt[Ft++]=zr,Rt[Ft++]=Ar,Rt[Ft++]=On,On=e;var n=zr;e=Ar;var o=32-nr(n)-1;n&=~(1<<o),r+=1;var i=32-nr(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,zr=1<<32-nr(t)+o|r<<o|n,Ar=i+e}else zr=1<<i|r<<o|n,Ar=e}function Ru(e){e.return!==null&&(Sn(e,1),cm(e,1,0))}function Fu(e){for(;e===va;)va=so[--ao],so[ao]=null,ya=so[--ao],so[ao]=null;for(;e===On;)On=Rt[--Ft],Rt[Ft]=null,Ar=Rt[--Ft],Rt[Ft]=null,zr=Rt[--Ft],Rt[Ft]=null}var Tt=null,zt=null,ye=!1,rr=null;function um(e,t){var r=Bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zh(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,zt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=On!==null?{id:zr,overflow:Ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Tt=e,zt=null,!0):!1;default:return!1}}function Lc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pc(e){if(ye){var t=zt;if(t){var r=t;if(!zh(e,t)){if(Lc(e))throw Error(T(418));t=rn(r.nextSibling);var n=Tt;t&&zh(e,t)?um(n,r):(e.flags=e.flags&-4097|2,ye=!1,Tt=e)}}else{if(Lc(e))throw Error(T(418));e.flags=e.flags&-4097|2,ye=!1,Tt=e}}}function Ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Es(e){if(e!==Tt)return!1;if(!ye)return Ah(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zc(e.type,e.memoizedProps)),t&&(t=zt)){if(Lc(e))throw dm(),Error(T(418));for(;t;)um(e,t),t=rn(t.nextSibling)}if(Ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){zt=rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}zt=null}}else zt=Tt?rn(e.stateNode.nextSibling):null;return!0}function dm(){for(var e=zt;e;)e=rn(e.nextSibling)}function ko(){zt=Tt=null,ye=!1}function Bu(e){rr===null?rr=[e]:rr.push(e)}var _y=Mr.ReactCurrentBatchConfig;function er(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ba=gn(null),wa=null,lo=null,Vu=null;function Uu(){Vu=lo=wa=null}function ju(e){var t=ba.current;ve(ba),e._currentValue=t}function Nc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function vo(e,t){wa=e,Vu=lo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Vu!==e)if(e={context:e,memoizedValue:t,next:null},lo===null){if(wa===null)throw Error(T(308));lo=e,wa.dependencies={lanes:0,firstContext:e}}else lo=lo.next=e;return t}var zn=null;function Hu(e){zn===null?zn=[e]:zn.push(e)}function hm(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Hu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Nr(e,n)}function Nr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kr=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,J&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Nr(e,r)}return o=n.interleaved,o===null?(t.next=t,Hu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nr(e,r)}function Ks(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Tu(e,r)}}function Th(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function _a(e,t,r,n){var o=e.updateQueue;Kr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;s=0,p=u=a=null,l=i;do{var h=l.lane,g=l.eventTime;if((n&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=t,g=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=$e({},d,h);break e;case 2:Kr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=g,a=d):p=p.next=g,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Mn|=s,e.lanes=s,e.memoizedState=d}}function Ih(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(T(191,o));o.call(n)}}}var fm=new hf.Component().refs;function Oc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:$e({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ka={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ct(),o=sn(e),i=Tr(n,o);i.payload=t,r!=null&&(i.callback=r),t=nn(e,i,o),t!==null&&(or(t,e,o,n),Ks(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ct(),o=sn(e),i=Tr(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=nn(e,i,o),t!==null&&(or(t,e,o,n),Ks(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ct(),n=sn(e),o=Tr(r,n);o.tag=2,t!=null&&(o.callback=t),t=nn(e,o,n),t!==null&&(or(t,e,n,r),Ks(t,e,n))}};function Lh(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Pi(r,n)||!Pi(o,i):!0}function mm(e,t,r){var n=!1,o=un,i=t.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(o=yt(t)?Nn:st.current,n=t.contextTypes,i=(n=n!=null)?xo(e,o):un),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ph(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function Dc(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=fm,Wu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ut(i):(i=yt(t)?Nn:st.current,o.context=xo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oc(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ka.enqueueReplaceState(o,o.state,null),_a(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ko(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;l===fm&&(l=o.refs={}),s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nh(e){var t=e._init;return t(e._payload)}function gm(e){function t(v,f){if(e){var b=v.deletions;b===null?(v.deletions=[f],v.flags|=16):b.push(f)}}function r(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function n(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function o(v,f){return v=an(v,f),v.index=0,v.sibling=null,v}function i(v,f,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<f?(v.flags|=2,f):b):(v.flags|=2,f)):(v.flags|=1048576,f)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,b,_){return f===null||f.tag!==6?(f=Bl(b,v.mode,_),f.return=v,f):(f=o(f,b),f.return=v,f)}function a(v,f,b,_){var x=b.type;return x===eo?p(v,f,b.props.children,_,b.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wr&&Nh(x)===f.type)?(_=o(f,b.props),_.ref=Ko(v,f,b),_.return=v,_):(_=Zs(b.type,b.key,b.props,null,v.mode,_),_.ref=Ko(v,f,b),_.return=v,_)}function u(v,f,b,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==b.containerInfo||f.stateNode.implementation!==b.implementation?(f=Vl(b,v.mode,_),f.return=v,f):(f=o(f,b.children||[]),f.return=v,f)}function p(v,f,b,_,x){return f===null||f.tag!==7?(f=Pn(b,v.mode,_,x),f.return=v,f):(f=o(f,b),f.return=v,f)}function d(v,f,b){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bl(""+f,v.mode,b),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vs:return b=Zs(f.type,f.key,f.props,null,v.mode,b),b.ref=Ko(v,null,f),b.return=v,b;case Jn:return f=Vl(f,v.mode,b),f.return=v,f;case Wr:var _=f._init;return d(v,_(f._payload),b)}if(oi(f)||Vo(f))return f=Pn(f,v.mode,b,null),f.return=v,f;zs(v,f)}return null}function h(v,f,b,_){var x=f!==null?f.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return x!==null?null:l(v,f,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vs:return b.key===x?a(v,f,b,_):null;case Jn:return b.key===x?u(v,f,b,_):null;case Wr:return x=b._init,h(v,f,x(b._payload),_)}if(oi(b)||Vo(b))return x!==null?null:p(v,f,b,_,null);zs(v,b)}return null}function g(v,f,b,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(b)||null,l(f,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vs:return v=v.get(_.key===null?b:_.key)||null,a(f,v,_,x);case Jn:return v=v.get(_.key===null?b:_.key)||null,u(f,v,_,x);case Wr:var k=_._init;return g(v,f,b,k(_._payload),x)}if(oi(_)||Vo(_))return v=v.get(b)||null,p(f,v,_,x,null);zs(f,_)}return null}function y(v,f,b,_){for(var x=null,k=null,C=f,$=f=0,z=null;C!==null&&$<b.length;$++){C.index>$?(z=C,C=null):z=C.sibling;var E=h(v,C,b[$],_);if(E===null){C===null&&(C=z);break}e&&C&&E.alternate===null&&t(v,C),f=i(E,f,$),k===null?x=E:k.sibling=E,k=E,C=z}if($===b.length)return r(v,C),ye&&Sn(v,$),x;if(C===null){for(;$<b.length;$++)C=d(v,b[$],_),C!==null&&(f=i(C,f,$),k===null?x=C:k.sibling=C,k=C);return ye&&Sn(v,$),x}for(C=n(v,C);$<b.length;$++)z=g(C,v,$,b[$],_),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?$:z.key),f=i(z,f,$),k===null?x=z:k.sibling=z,k=z);return e&&C.forEach(function(B){return t(v,B)}),ye&&Sn(v,$),x}function w(v,f,b,_){var x=Vo(b);if(typeof x!="function")throw Error(T(150));if(b=x.call(b),b==null)throw Error(T(151));for(var k=x=null,C=f,$=f=0,z=null,E=b.next();C!==null&&!E.done;$++,E=b.next()){C.index>$?(z=C,C=null):z=C.sibling;var B=h(v,C,E.value,_);if(B===null){C===null&&(C=z);break}e&&C&&B.alternate===null&&t(v,C),f=i(B,f,$),k===null?x=B:k.sibling=B,k=B,C=z}if(E.done)return r(v,C),ye&&Sn(v,$),x;if(C===null){for(;!E.done;$++,E=b.next())E=d(v,E.value,_),E!==null&&(f=i(E,f,$),k===null?x=E:k.sibling=E,k=E);return ye&&Sn(v,$),x}for(C=n(v,C);!E.done;$++,E=b.next())E=g(C,v,$,E.value,_),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?$:E.key),f=i(E,f,$),k===null?x=E:k.sibling=E,k=E);return e&&C.forEach(function(U){return t(v,U)}),ye&&Sn(v,$),x}function S(v,f,b,_){if(typeof b=="object"&&b!==null&&b.type===eo&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case vs:e:{for(var x=b.key,k=f;k!==null;){if(k.key===x){if(x=b.type,x===eo){if(k.tag===7){r(v,k.sibling),f=o(k,b.props.children),f.return=v,v=f;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wr&&Nh(x)===k.type){r(v,k.sibling),f=o(k,b.props),f.ref=Ko(v,k,b),f.return=v,v=f;break e}r(v,k);break}else t(v,k);k=k.sibling}b.type===eo?(f=Pn(b.props.children,v.mode,_,b.key),f.return=v,v=f):(_=Zs(b.type,b.key,b.props,null,v.mode,_),_.ref=Ko(v,f,b),_.return=v,v=_)}return s(v);case Jn:e:{for(k=b.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===b.containerInfo&&f.stateNode.implementation===b.implementation){r(v,f.sibling),f=o(f,b.children||[]),f.return=v,v=f;break e}else{r(v,f);break}else t(v,f);f=f.sibling}f=Vl(b,v.mode,_),f.return=v,v=f}return s(v);case Wr:return k=b._init,S(v,f,k(b._payload),_)}if(oi(b))return y(v,f,b,_);if(Vo(b))return w(v,f,b,_);zs(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,f!==null&&f.tag===6?(r(v,f.sibling),f=o(f,b),f.return=v,v=f):(r(v,f),f=Bl(b,v.mode,_),f.return=v,v=f),s(v)):r(v,f)}return S}var So=gm(!0),vm=gm(!1),rs={},br=gn(rs),Mi=gn(rs),Ri=gn(rs);function An(e){if(e===rs)throw Error(T(174));return e}function Ku(e,t){switch(fe(Ri,t),fe(Mi,e),fe(br,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fc(t,e)}ve(br),fe(br,t)}function Co(){ve(br),ve(Mi),ve(Ri)}function ym(e){An(Ri.current);var t=An(br.current),r=fc(t,e.type);t!==r&&(fe(Mi,e),fe(br,r))}function qu(e){Mi.current===e&&(ve(br),ve(Mi))}var Se=gn(0);function xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function Qu(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var qs=Mr.ReactCurrentDispatcher,Ol=Mr.ReactCurrentBatchConfig,Dn=0,Ce=null,Fe=null,Ke=null,ka=!1,hi=!1,Fi=0,xy=0;function nt(){throw Error(T(321))}function Gu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sr(e[r],t[r]))return!1;return!0}function Xu(e,t,r,n,o,i){if(Dn=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?$y:Ey,e=r(n,o),hi){i=0;do{if(hi=!1,Fi=0,25<=i)throw Error(T(301));i+=1,Ke=Fe=null,t.updateQueue=null,qs.current=zy,e=r(n,o)}while(hi)}if(qs.current=Sa,t=Fe!==null&&Fe.next!==null,Dn=0,Ke=Fe=Ce=null,ka=!1,t)throw Error(T(300));return e}function Yu(){var e=Fi!==0;return Fi=0,e}function mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ce.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function jt(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ke===null?Ce.memoizedState:Ke.next;if(t!==null)Ke=t,Fe=e;else{if(e===null)throw Error(T(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ke===null?Ce.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Bi(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=jt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=Fe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=s=null,a=null,u=i;do{var p=u.lane;if((Dn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=n):a=a.next=d,Ce.lanes|=p,Mn|=p}u=u.next}while(u!==null&&u!==i);a===null?s=n:a.next=l,sr(n,t.memoizedState)||(gt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,Ce.lanes|=i,Mn|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ml(e){var t=jt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);sr(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function bm(){}function wm(e,t){var r=Ce,n=jt(),o=t(),i=!sr(n.memoizedState,o);if(i&&(n.memoizedState=o,gt=!0),n=n.queue,Zu(km.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Vi(9,xm.bind(null,r,n,o,t),void 0,null),qe===null)throw Error(T(349));Dn&30||_m(r,t,o)}return o}function _m(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xm(e,t,r,n){t.value=r,t.getSnapshot=n,Sm(t)&&Cm(e)}function km(e,t,r){return r(function(){Sm(t)&&Cm(e)})}function Sm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sr(e,r)}catch{return!0}}function Cm(e){var t=Nr(e,1);t!==null&&or(t,e,1,-1)}function Oh(e){var t=mr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Cy.bind(null,Ce,e),[t.memoizedState,e]}function Vi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function $m(){return jt().memoizedState}function Qs(e,t,r,n){var o=mr();Ce.flags|=e,o.memoizedState=Vi(1|t,r,void 0,n===void 0?null:n)}function qa(e,t,r,n){var o=jt();n=n===void 0?null:n;var i=void 0;if(Fe!==null){var s=Fe.memoizedState;if(i=s.destroy,n!==null&&Gu(n,s.deps)){o.memoizedState=Vi(t,r,i,n);return}}Ce.flags|=e,o.memoizedState=Vi(1|t,r,i,n)}function Dh(e,t){return Qs(8390656,8,e,t)}function Zu(e,t){return qa(2048,8,e,t)}function Em(e,t){return qa(4,2,e,t)}function zm(e,t){return qa(4,4,e,t)}function Am(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tm(e,t,r){return r=r!=null?r.concat([e]):null,qa(4,4,Am.bind(null,t,e),r)}function Ju(){}function Im(e,t){var r=jt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Gu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Lm(e,t){var r=jt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Gu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Pm(e,t,r){return Dn&21?(sr(r,t)||(r=Df(),Ce.lanes|=r,Mn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=r)}function ky(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var n=Ol.transition;Ol.transition={};try{e(!1),t()}finally{ce=r,Ol.transition=n}}function Nm(){return jt().memoizedState}function Sy(e,t,r){var n=sn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Om(e))Dm(t,r);else if(r=hm(e,t,r,n),r!==null){var o=ct();or(r,e,n,o),Mm(r,t,n)}}function Cy(e,t,r){var n=sn(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Om(e))Dm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,r);if(o.hasEagerState=!0,o.eagerState=l,sr(l,s)){var a=t.interleaved;a===null?(o.next=o,Hu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}r=hm(e,t,o,n),r!==null&&(o=ct(),or(r,e,n,o),Mm(r,t,n))}}function Om(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Dm(e,t){hi=ka=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Mm(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Tu(e,r)}}var Sa={readContext:Ut,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},$y={readContext:Ut,useCallback:function(e,t){return mr().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:Dh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Qs(4194308,4,Am.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qs(4,2,e,t)},useMemo:function(e,t){var r=mr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=mr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Sy.bind(null,Ce,e),[n.memoizedState,e]},useRef:function(e){var t=mr();return e={current:e},t.memoizedState=e},useState:Oh,useDebugValue:Ju,useDeferredValue:function(e){return mr().memoizedState=e},useTransition:function(){var e=Oh(!1),t=e[0];return e=ky.bind(null,e[1]),mr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ce,o=mr();if(ye){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),qe===null)throw Error(T(349));Dn&30||_m(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Dh(km.bind(null,n,i,e),[e]),n.flags|=2048,Vi(9,xm.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=mr(),t=qe.identifierPrefix;if(ye){var r=Ar,n=zr;r=(n&~(1<<32-nr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ey={readContext:Ut,useCallback:Im,useContext:Ut,useEffect:Zu,useImperativeHandle:Tm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Lm,useReducer:Dl,useRef:$m,useState:function(){return Dl(Bi)},useDebugValue:Ju,useDeferredValue:function(e){var t=jt();return Pm(t,Fe.memoizedState,e)},useTransition:function(){var e=Dl(Bi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:wm,useId:Nm,unstable_isNewReconciler:!1},zy={readContext:Ut,useCallback:Im,useContext:Ut,useEffect:Zu,useImperativeHandle:Tm,useInsertionEffect:Em,useLayoutEffect:zm,useMemo:Lm,useReducer:Ml,useRef:$m,useState:function(){return Ml(Bi)},useDebugValue:Ju,useDeferredValue:function(e){var t=jt();return Fe===null?t.memoizedState=e:Pm(t,Fe.memoizedState,e)},useTransition:function(){var e=Ml(Bi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:wm,useId:Nm,unstable_isNewReconciler:!1};function $o(e,t){try{var r="",n=t;do r+=rv(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Rl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Mc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,t,r){r=Tr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){$a||($a=!0,qc=n),Mc(e,t)},r}function Fm(e,t,r){r=Tr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Mc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Mc(e,t),typeof n!="function"&&(on===null?on=new Set([this]):on.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Mh(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Ay;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=jy.bind(null,e,t,r),t.then(e,e))}function Rh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fh(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Tr(-1,1),t.tag=2,nn(r,t,1))),r.lanes|=1),e)}var Ty=Mr.ReactCurrentOwner,gt=!1;function lt(e,t,r,n){t.child=e===null?vm(t,null,r,n):So(t,e.child,r,n)}function Bh(e,t,r,n,o){r=r.render;var i=t.ref;return vo(t,o),n=Xu(e,t,r,n,i,o),r=Yu(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Or(e,t,o)):(ye&&r&&Ru(t),t.flags|=1,lt(e,t,n,o),t.child)}function Vh(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!ad(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Bm(e,t,i,n,o)):(e=Zs(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:Pi,r(s,n)&&e.ref===t.ref)return Or(e,t,o)}return t.flags|=1,e=an(i,n),e.ref=t.ref,e.return=t,t.child=e}function Bm(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Pi(i,n)&&e.ref===t.ref)if(gt=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,Or(e,t,o)}return Rc(e,t,r,n,o)}function Vm(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(uo,$t),$t|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(uo,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,fe(uo,$t),$t|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,fe(uo,$t),$t|=n;return lt(e,t,o,r),t.child}function Um(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Rc(e,t,r,n,o){var i=yt(r)?Nn:st.current;return i=xo(t,i),vo(t,o),r=Xu(e,t,r,n,i,o),n=Yu(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Or(e,t,o)):(ye&&n&&Ru(t),t.flags|=1,lt(e,t,r,o),t.child)}function Uh(e,t,r,n,o){if(yt(r)){var i=!0;ga(t)}else i=!1;if(vo(t,o),t.stateNode===null)Gs(e,t),mm(t,r,n),Dc(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=yt(r)?Nn:st.current,u=xo(t,u));var p=r.getDerivedStateFromProps,d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||a!==u)&&Ph(t,s,n,u),Kr=!1;var h=t.memoizedState;s.state=h,_a(t,n,s,o),a=t.memoizedState,l!==n||h!==a||vt.current||Kr?(typeof p=="function"&&(Oc(t,r,p,n),a=t.memoizedState),(l=Kr||Lh(t,r,l,n,h,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),s.props=n,s.state=a,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,pm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:er(t.type,l),s.props=u,d=t.pendingProps,h=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=Ut(a):(a=yt(r)?Nn:st.current,a=xo(t,a));var g=r.getDerivedStateFromProps;(p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Ph(t,s,n,a),Kr=!1,h=t.memoizedState,s.state=h,_a(t,n,s,o);var y=t.memoizedState;l!==d||h!==y||vt.current||Kr?(typeof g=="function"&&(Oc(t,r,g,n),y=t.memoizedState),(u=Kr||Lh(t,r,u,n,h,y,a)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=a,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Fc(e,t,r,n,i,o)}function Fc(e,t,r,n,o,i){Um(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&Eh(t,r,!1),Or(e,t,i);n=t.stateNode,Ty.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=So(t,e.child,null,i),t.child=So(t,null,l,i)):lt(e,t,l,i),t.memoizedState=n.state,o&&Eh(t,r,!0),t.child}function jm(e){var t=e.stateNode;t.pendingContext?$h(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$h(e,t.context,!1),Ku(e,t.containerInfo)}function jh(e,t,r,n,o){return ko(),Bu(o),t.flags|=256,lt(e,t,r,n),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Vc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hm(e,t,r){var n=t.pendingProps,o=Se.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(Se,o&1),e===null)return Pc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Xa(s,n,0,null),e=Pn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vc(r),t.memoizedState=Bc,e):ed(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Iy(e,t,s,n,l,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=an(o,a),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=an(l,i):(i=Pn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Vc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Bc,n}return i=e.child,e=i.sibling,n=an(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ed(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function As(e,t,r,n){return n!==null&&Bu(n),So(t,e.child,null,r),e=ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iy(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Rl(Error(T(422))),As(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Xa({mode:"visible",children:n.children},o,0,null),i=Pn(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&So(t,e.child,null,s),t.child.memoizedState=Vc(s),t.memoizedState=Bc,i);if(!(t.mode&1))return As(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(T(419)),n=Rl(i,n,void 0),As(e,t,s,n)}if(l=(s&e.childLanes)!==0,gt||l){if(n=qe,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nr(e,o),or(n,e,o,-1))}return sd(),n=Rl(Error(T(421))),As(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,zt=rn(o.nextSibling),Tt=t,ye=!0,rr=null,e!==null&&(Rt[Ft++]=zr,Rt[Ft++]=Ar,Rt[Ft++]=On,zr=e.id,Ar=e.overflow,On=t),t=ed(t,n.children),t.flags|=4096,t)}function Hh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Nc(e.return,t,r)}function Fl(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Wm(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(lt(e,t,n.children,r),n=Se.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hh(e,r,t);else if(e.tag===19)Hh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(fe(Se,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&xa(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Fl(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xa(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Fl(t,!0,r,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=an(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=an(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ly(e,t,r){switch(t.tag){case 3:jm(t),ko();break;case 5:ym(t);break;case 1:yt(t.type)&&ga(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;fe(ba,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(fe(Se,Se.current&1),t.flags|=128,null):r&t.child.childLanes?Hm(e,t,r):(fe(Se,Se.current&1),e=Or(e,t,r),e!==null?e.sibling:null);fe(Se,Se.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Wm(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(Se,Se.current),n)break;return null;case 22:case 23:return t.lanes=0,Vm(e,t,r)}return Or(e,t,r)}var Km,Uc,qm,Qm;Km=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Uc=function(){};qm=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,An(br.current);var i=null;switch(r){case"input":o=uc(e,o),n=uc(e,n),i=[];break;case"select":o=$e({},o,{value:void 0}),n=$e({},n,{value:void 0}),i=[];break;case"textarea":o=pc(e,o),n=pc(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=fa)}mc(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($i.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var a=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(i||(i=[]),i.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($i.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ge("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Qm=function(e,t,r,n){r!==n&&(t.flags|=4)};function qo(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Py(e,t,r){var n=t.pendingProps;switch(Fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return yt(t.type)&&ma(),ot(t),null;case 3:return n=t.stateNode,Co(),ve(vt),ve(st),Qu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rr!==null&&(Xc(rr),rr=null))),Uc(e,t),ot(t),null;case 5:qu(t);var o=An(Ri.current);if(r=t.type,e!==null&&t.stateNode!=null)qm(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return ot(t),null}if(e=An(br.current),Es(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[vr]=t,n[Di]=i,e=(t.mode&1)!==0,r){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(o=0;o<si.length;o++)ge(si[o],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":Jd(n,i),ge("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},ge("invalid",n);break;case"textarea":th(n,i),ge("invalid",n)}mc(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&$s(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$s(n.textContent,l,e),o=["children",""+l]):$i.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ge("scroll",n)}switch(r){case"input":ys(n),eh(n,i,!0);break;case"textarea":ys(n),rh(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=fa)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_f(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[vr]=t,e[Di]=n,Km(e,t,!1,!1),t.stateNode=e;e:{switch(s=gc(r,n),r){case"dialog":ge("cancel",e),ge("close",e),o=n;break;case"iframe":case"object":case"embed":ge("load",e),o=n;break;case"video":case"audio":for(o=0;o<si.length;o++)ge(si[o],e);o=n;break;case"source":ge("error",e),o=n;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=n;break;case"details":ge("toggle",e),o=n;break;case"input":Jd(e,n),o=uc(e,n),ge("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=$e({},n,{value:void 0}),ge("invalid",e);break;case"textarea":th(e,n),o=pc(e,n),ge("invalid",e);break;default:o=n}mc(r,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Sf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xf(e,a)):i==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Ei(e,a):typeof a=="number"&&Ei(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($i.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ge("scroll",e):a!=null&&Su(e,i,a,s))}switch(r){case"input":ys(e),eh(e,n,!1);break;case"textarea":ys(e),rh(e);break;case"option":n.value!=null&&e.setAttribute("value",""+cn(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?po(e,!!n.multiple,i,!1):n.defaultValue!=null&&po(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Qm(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=An(Ri.current),An(br.current),Es(t)){if(n=t.stateNode,r=t.memoizedProps,n[vr]=t,(i=n.nodeValue!==r)&&(e=Tt,e!==null))switch(e.tag){case 3:$s(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[vr]=t,t.stateNode=n}return ot(t),null;case 13:if(ve(Se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&zt!==null&&t.mode&1&&!(t.flags&128))dm(),ko(),t.flags|=98560,i=!1;else if(i=Es(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[vr]=t}else ko(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),i=!1}else rr!==null&&(Xc(rr),rr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Be===0&&(Be=3):sd())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Co(),Uc(e,t),e===null&&Ni(t.stateNode.containerInfo),ot(t),null;case 10:return ju(t.type._context),ot(t),null;case 17:return yt(t.type)&&ma(),ot(t),null;case 19:if(ve(Se),i=t.memoizedState,i===null)return ot(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)qo(i,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xa(e),s!==null){for(t.flags|=128,qo(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return fe(Se,Se.current&1|2),t.child}e=e.sibling}i.tail!==null&&Le()>Eo&&(t.flags|=128,n=!0,qo(i,!1),t.lanes=4194304)}else{if(!n)if(e=xa(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),qo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ye)return ot(t),null}else 2*Le()-i.renderingStartTime>Eo&&r!==1073741824&&(t.flags|=128,n=!0,qo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Le(),t.sibling=null,r=Se.current,fe(Se,n?r&1|2:r&1),t):(ot(t),null);case 22:case 23:return id(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?$t&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Ny(e,t){switch(Fu(t),t.tag){case 1:return yt(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Co(),ve(vt),ve(st),Qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qu(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ko()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Co(),null;case 10:return ju(t.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var Ts=!1,it=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,O=null;function co(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ae(e,t,n)}else r.current=null}function jc(e,t,r){try{r()}catch(n){Ae(e,t,n)}}var Wh=!1;function Dy(e,t){if($c=da,e=Zf(),Mu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,l=-1,a=-1,u=0,p=0,d=e,h=null;t:for(;;){for(var g;d!==r||o!==0&&d.nodeType!==3||(l=s+o),d!==i||n!==0&&d.nodeType!==3||(a=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===r&&++u===o&&(l=s),h===i&&++p===n&&(a=s),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ec={focusedElem:e,selectionRange:r},da=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:er(t.type,w),S);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){Ae(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Wh,Wh=!1,y}function pi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&jc(t,r,i)}o=o.next}while(o!==n)}}function Qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Hc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Gm(e){var t=e.alternate;t!==null&&(e.alternate=null,Gm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vr],delete t[Di],delete t[Tc],delete t[yy],delete t[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=fa));else if(n!==4&&(e=e.child,e!==null))for(Wc(e,t,r),e=e.sibling;e!==null;)Wc(e,t,r),e=e.sibling}function Kc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Kc(e,t,r),e=e.sibling;e!==null;)Kc(e,t,r),e=e.sibling}var Xe=null,tr=!1;function Hr(e,t,r){for(r=r.child;r!==null;)Ym(e,t,r),r=r.sibling}function Ym(e,t,r){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(Ba,r)}catch{}switch(r.tag){case 5:it||co(r,t);case 6:var n=Xe,o=tr;Xe=null,Hr(e,t,r),Xe=n,tr=o,Xe!==null&&(tr?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(tr?(e=Xe,r=r.stateNode,e.nodeType===8?Ll(e.parentNode,r):e.nodeType===1&&Ll(e,r),Ii(e)):Ll(Xe,r.stateNode));break;case 4:n=Xe,o=tr,Xe=r.stateNode.containerInfo,tr=!0,Hr(e,t,r),Xe=n,tr=o;break;case 0:case 11:case 14:case 15:if(!it&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&jc(r,t,s),o=o.next}while(o!==n)}Hr(e,t,r);break;case 1:if(!it&&(co(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ae(r,t,l)}Hr(e,t,r);break;case 21:Hr(e,t,r);break;case 22:r.mode&1?(it=(n=it)||r.memoizedState!==null,Hr(e,t,r),it=n):Hr(e,t,r);break;default:Hr(e,t,r)}}function qh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Oy),t.forEach(function(n){var o=Wy.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Zt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tr=!1;break e;case 3:Xe=l.stateNode.containerInfo,tr=!0;break e;case 4:Xe=l.stateNode.containerInfo,tr=!0;break e}l=l.return}if(Xe===null)throw Error(T(160));Ym(i,s,o),Xe=null,tr=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zm(t,e),t=t.sibling}function Zm(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zt(t,e),fr(e),n&4){try{pi(3,e,e.return),Qa(3,e)}catch(w){Ae(e,e.return,w)}try{pi(5,e,e.return)}catch(w){Ae(e,e.return,w)}}break;case 1:Zt(t,e),fr(e),n&512&&r!==null&&co(r,r.return);break;case 5:if(Zt(t,e),fr(e),n&512&&r!==null&&co(r,r.return),e.flags&32){var o=e.stateNode;try{Ei(o,"")}catch(w){Ae(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bf(o,i),gc(l,s);var u=gc(l,i);for(s=0;s<a.length;s+=2){var p=a[s],d=a[s+1];p==="style"?Sf(o,d):p==="dangerouslySetInnerHTML"?xf(o,d):p==="children"?Ei(o,d):Su(o,p,d,u)}switch(l){case"input":dc(o,i);break;case"textarea":wf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?po(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?po(o,!!i.multiple,i.defaultValue,!0):po(o,!!i.multiple,i.multiple?[]:"",!1))}o[Di]=i}catch(w){Ae(e,e.return,w)}}break;case 6:if(Zt(t,e),fr(e),n&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Ae(e,e.return,w)}}break;case 3:if(Zt(t,e),fr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(w){Ae(e,e.return,w)}break;case 4:Zt(t,e),fr(e);break;case 13:Zt(t,e),fr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nd=Le())),n&4&&qh(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(it=(u=it)||p,Zt(t,e),it=u):Zt(t,e),fr(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(d=O=p;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:pi(4,h,h.return);break;case 1:co(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Ae(n,r,w)}}break;case 5:co(h,h.return);break;case 22:if(h.memoizedState!==null){Gh(d);continue}}g!==null?(g.return=h,O=g):Gh(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=kf("display",s))}catch(w){Ae(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ae(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zt(t,e),fr(e),n&4&&qh(e);break;case 21:break;default:Zt(t,e),fr(e)}}function fr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xm(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Ei(o,""),n.flags&=-33);var i=Kh(e);Kc(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Kh(e);Wc(e,l,s);break;default:throw Error(T(161))}}catch(a){Ae(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function My(e,t,r){O=e,Jm(e)}function Jm(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||Ts;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||it;l=Ts;var u=it;if(Ts=s,(it=a)&&!u)for(O=o;O!==null;)s=O,a=s.child,s.tag===22&&s.memoizedState!==null?Xh(o):a!==null?(a.return=s,O=a):Xh(o);for(;i!==null;)O=i,Jm(i),i=i.sibling;O=o,Ts=l,it=u}Qh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Qh(e)}}function Qh(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||Qa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!it)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:er(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ih(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ih(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Ii(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}it||t.flags&512&&Hc(t)}catch(h){Ae(t,t.return,h)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Gh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Xh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Qa(4,t)}catch(a){Ae(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(a){Ae(t,o,a)}}var i=t.return;try{Hc(t)}catch(a){Ae(t,i,a)}break;case 5:var s=t.return;try{Hc(t)}catch(a){Ae(t,s,a)}}}catch(a){Ae(t,t.return,a)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Ry=Math.ceil,Ca=Mr.ReactCurrentDispatcher,td=Mr.ReactCurrentOwner,Vt=Mr.ReactCurrentBatchConfig,J=0,qe=null,De=null,Ye=0,$t=0,uo=gn(0),Be=0,Ui=null,Mn=0,Ga=0,rd=0,fi=null,mt=null,nd=0,Eo=1/0,Cr=null,$a=!1,qc=null,on=null,Is=!1,Yr=null,Ea=0,mi=0,Qc=null,Xs=-1,Ys=0;function ct(){return J&6?Le():Xs!==-1?Xs:Xs=Le()}function sn(e){return e.mode&1?J&2&&Ye!==0?Ye&-Ye:_y.transition!==null?(Ys===0&&(Ys=Df()),Ys):(e=ce,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e):1}function or(e,t,r,n){if(50<mi)throw mi=0,Qc=null,Error(T(185));Ji(e,r,n),(!(J&2)||e!==qe)&&(e===qe&&(!(J&2)&&(Ga|=r),Be===4&&Qr(e,Ye)),bt(e,n),r===1&&J===0&&!(t.mode&1)&&(Eo=Le()+500,Wa&&vn()))}function bt(e,t){var r=e.callbackNode;_v(e,t);var n=ua(e,e===qe?Ye:0);if(n===0)r!==null&&ih(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ih(r),t===1)e.tag===0?wy(Yh.bind(null,e)):lm(Yh.bind(null,e)),gy(function(){!(J&6)&&vn()}),r=null;else{switch(Mf(n)){case 1:r=Au;break;case 4:r=Nf;break;case 16:r=ca;break;case 536870912:r=Of;break;default:r=ca}r=ag(r,eg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function eg(e,t){if(Xs=-1,Ys=0,J&6)throw Error(T(327));var r=e.callbackNode;if(yo()&&e.callbackNode!==r)return null;var n=ua(e,e===qe?Ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=za(e,n);else{t=n;var o=J;J|=2;var i=rg();(qe!==e||Ye!==t)&&(Cr=null,Eo=Le()+500,Ln(e,t));do try{Vy();break}catch(l){tg(e,l)}while(!0);Uu(),Ca.current=i,J=o,De!==null?t=0:(qe=null,Ye=0,t=Be)}if(t!==0){if(t===2&&(o=_c(e),o!==0&&(n=o,t=Gc(e,o))),t===1)throw r=Ui,Ln(e,0),Qr(e,n),bt(e,Le()),r;if(t===6)Qr(e,n);else{if(o=e.current.alternate,!(n&30)&&!Fy(o)&&(t=za(e,n),t===2&&(i=_c(e),i!==0&&(n=i,t=Gc(e,i))),t===1))throw r=Ui,Ln(e,0),Qr(e,n),bt(e,Le()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:Cn(e,mt,Cr);break;case 3:if(Qr(e,n),(n&130023424)===n&&(t=nd+500-Le(),10<t)){if(ua(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ct(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ac(Cn.bind(null,e,mt,Cr),t);break}Cn(e,mt,Cr);break;case 4:if(Qr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-nr(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=Le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Ry(n/1960))-n,10<n){e.timeoutHandle=Ac(Cn.bind(null,e,mt,Cr),n);break}Cn(e,mt,Cr);break;case 5:Cn(e,mt,Cr);break;default:throw Error(T(329))}}}return bt(e,Le()),e.callbackNode===r?eg.bind(null,e):null}function Gc(e,t){var r=fi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=za(e,t),e!==2&&(t=mt,mt=r,t!==null&&Xc(t)),e}function Xc(e){mt===null?mt=e:mt.push.apply(mt,e)}function Fy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qr(e,t){for(t&=~rd,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-nr(t),n=1<<r;e[r]=-1,t&=~n}}function Yh(e){if(J&6)throw Error(T(327));yo();var t=ua(e,0);if(!(t&1))return bt(e,Le()),null;var r=za(e,t);if(e.tag!==0&&r===2){var n=_c(e);n!==0&&(t=n,r=Gc(e,n))}if(r===1)throw r=Ui,Ln(e,0),Qr(e,t),bt(e,Le()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,mt,Cr),bt(e,Le()),null}function od(e,t){var r=J;J|=1;try{return e(t)}finally{J=r,J===0&&(Eo=Le()+500,Wa&&vn())}}function Rn(e){Yr!==null&&Yr.tag===0&&!(J&6)&&yo();var t=J;J|=1;var r=Vt.transition,n=ce;try{if(Vt.transition=null,ce=1,e)return e()}finally{ce=n,Vt.transition=r,J=t,!(J&6)&&vn()}}function id(){$t=uo.current,ve(uo)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,my(r)),De!==null)for(r=De.return;r!==null;){var n=r;switch(Fu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ma();break;case 3:Co(),ve(vt),ve(st),Qu();break;case 5:qu(n);break;case 4:Co();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:ju(n.type._context);break;case 22:case 23:id()}r=r.return}if(qe=e,De=e=an(e.current,null),Ye=$t=t,Be=0,Ui=null,rd=Ga=Mn=0,mt=fi=null,zn!==null){for(t=0;t<zn.length;t++)if(r=zn[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}zn=null}return e}function tg(e,t){do{var r=De;try{if(Uu(),qs.current=Sa,ka){for(var n=Ce.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ka=!1}if(Dn=0,Ke=Fe=Ce=null,hi=!1,Fi=0,td.current=null,r===null||r.return===null){Be=1,Ui=t,De=null;break}e:{var i=e,s=r.return,l=r,a=t;if(t=Ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Rh(s);if(g!==null){g.flags&=-257,Fh(g,s,l,i,t),g.mode&1&&Mh(i,u,t),t=g,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Mh(i,u,t),sd();break e}a=Error(T(426))}}else if(ye&&l.mode&1){var S=Rh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Fh(S,s,l,i,t),Bu($o(a,l));break e}}i=a=$o(a,l),Be!==4&&(Be=2),fi===null?fi=[i]:fi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Rm(i,a,t);Th(i,v);break e;case 1:l=a;var f=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(on===null||!on.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Fm(i,l,t);Th(i,_);break e}}i=i.return}while(i!==null)}og(r)}catch(x){t=x,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function rg(){var e=Ca.current;return Ca.current=Sa,e===null?Sa:e}function sd(){(Be===0||Be===3||Be===2)&&(Be=4),qe===null||!(Mn&268435455)&&!(Ga&268435455)||Qr(qe,Ye)}function za(e,t){var r=J;J|=2;var n=rg();(qe!==e||Ye!==t)&&(Cr=null,Ln(e,t));do try{By();break}catch(o){tg(e,o)}while(!0);if(Uu(),J=r,Ca.current=n,De!==null)throw Error(T(261));return qe=null,Ye=0,Be}function By(){for(;De!==null;)ng(De)}function Vy(){for(;De!==null&&!hv();)ng(De)}function ng(e){var t=sg(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?og(e):De=t,td.current=null}function og(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ny(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,De=null;return}}else if(r=Py(r,t,$t),r!==null){De=r;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Be===0&&(Be=5)}function Cn(e,t,r){var n=ce,o=Vt.transition;try{Vt.transition=null,ce=1,Uy(e,t,r,n)}finally{Vt.transition=o,ce=n}return null}function Uy(e,t,r,n){do yo();while(Yr!==null);if(J&6)throw Error(T(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(xv(e,i),e===qe&&(De=qe=null,Ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Is||(Is=!0,ag(ca,function(){return yo(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Vt.transition,Vt.transition=null;var s=ce;ce=1;var l=J;J|=4,td.current=null,Dy(e,r),Zm(r,e),ly(Ec),da=!!$c,Ec=$c=null,e.current=r,My(r),pv(),J=l,ce=s,Vt.transition=i}else e.current=r;if(Is&&(Is=!1,Yr=e,Ea=o),i=e.pendingLanes,i===0&&(on=null),gv(r.stateNode),bt(e,Le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if($a)throw $a=!1,e=qc,qc=null,e;return Ea&1&&e.tag!==0&&yo(),i=e.pendingLanes,i&1?e===Qc?mi++:(mi=0,Qc=e):mi=0,vn(),null}function yo(){if(Yr!==null){var e=Mf(Ea),t=Vt.transition,r=ce;try{if(Vt.transition=null,ce=16>e?16:e,Yr===null)var n=!1;else{if(e=Yr,Yr=null,Ea=0,J&6)throw Error(T(331));var o=J;for(J|=4,O=e.current;O!==null;){var i=O,s=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:pi(8,p,i)}var d=p.child;if(d!==null)d.return=p,O=d;else for(;O!==null;){p=O;var h=p.sibling,g=p.return;if(Gm(p),p===u){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,O=s;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pi(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,O=v;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){s=O;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,O=b;else e:for(s=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qa(9,l)}}catch(x){Ae(l,l.return,x)}if(l===s){O=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,O=_;break e}O=l.return}}if(J=o,vn(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(Ba,e)}catch{}n=!0}return n}finally{ce=r,Vt.transition=t}}return!1}function Zh(e,t,r){t=$o(r,t),t=Rm(e,t,1),e=nn(e,t,1),t=ct(),e!==null&&(Ji(e,1,t),bt(e,t))}function Ae(e,t,r){if(e.tag===3)Zh(e,e,r);else for(;t!==null;){if(t.tag===3){Zh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(on===null||!on.has(n))){e=$o(r,e),e=Fm(t,e,1),t=nn(t,e,1),e=ct(),t!==null&&(Ji(t,1,e),bt(t,e));break}}t=t.return}}function jy(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&r,qe===e&&(Ye&r)===r&&(Be===4||Be===3&&(Ye&130023424)===Ye&&500>Le()-nd?Ln(e,0):rd|=r),bt(e,t)}function ig(e,t){t===0&&(e.mode&1?(t=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):t=1);var r=ct();e=Nr(e,t),e!==null&&(Ji(e,t,r),bt(e,r))}function Hy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ig(e,r)}function Wy(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),ig(e,r)}var sg;sg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return gt=!1,Ly(e,t,r);gt=!!(e.flags&131072)}else gt=!1,ye&&t.flags&1048576&&cm(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Gs(e,t),e=t.pendingProps;var o=xo(t,st.current);vo(t,r),o=Xu(null,t,n,e,o,r);var i=Yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(n)?(i=!0,ga(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wu(t),o.updater=Ka,t.stateNode=o,o._reactInternals=t,Dc(t,n,e,r),t=Fc(null,t,n,!0,i,r)):(t.tag=0,ye&&i&&Ru(t),lt(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Gs(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=qy(n),e=er(n,e),o){case 0:t=Rc(null,t,n,e,r);break e;case 1:t=Uh(null,t,n,e,r);break e;case 11:t=Bh(null,t,n,e,r);break e;case 14:t=Vh(null,t,n,er(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:er(n,o),Rc(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:er(n,o),Uh(e,t,n,o,r);case 3:e:{if(jm(t),e===null)throw Error(T(387));n=t.pendingProps,i=t.memoizedState,o=i.element,pm(e,t),_a(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$o(Error(T(423)),t),t=jh(e,t,n,r,o);break e}else if(n!==o){o=$o(Error(T(424)),t),t=jh(e,t,n,r,o);break e}else for(zt=rn(t.stateNode.containerInfo.firstChild),Tt=t,ye=!0,rr=null,r=vm(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ko(),n===o){t=Or(e,t,r);break e}lt(e,t,n,r)}t=t.child}return t;case 5:return ym(t),e===null&&Pc(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,zc(n,o)?s=null:i!==null&&zc(n,i)&&(t.flags|=32),Um(e,t),lt(e,t,s,r),t.child;case 6:return e===null&&Pc(t),null;case 13:return Hm(e,t,r);case 4:return Ku(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=So(t,null,n,r):lt(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:er(n,o),Bh(e,t,n,o,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,fe(ba,n._currentValue),n._currentValue=s,i!==null)if(sr(i.value,s)){if(i.children===o.children&&!vt.current){t=Or(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===n){if(i.tag===1){a=Tr(-1,r&-r),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=r,a=i.alternate,a!==null&&(a.lanes|=r),Nc(i.return,r,t),l.lanes|=r;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Nc(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}lt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,vo(t,r),o=Ut(o),n=n(o),t.flags|=1,lt(e,t,n,r),t.child;case 14:return n=t.type,o=er(n,t.pendingProps),o=er(n.type,o),Vh(e,t,n,o,r);case 15:return Bm(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:er(n,o),Gs(e,t),t.tag=1,yt(n)?(e=!0,ga(t)):e=!1,vo(t,r),mm(t,n,o),Dc(t,n,o,r),Fc(null,t,n,!0,e,r);case 19:return Wm(e,t,r);case 22:return Vm(e,t,r)}throw Error(T(156,t.tag))};function ag(e,t){return Pf(e,t)}function Ky(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,r,n){return new Ky(e,t,r,n)}function ad(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qy(e){if(typeof e=="function")return ad(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===Eu)return 14}return 2}function an(e,t){var r=e.alternate;return r===null?(r=Bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zs(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")ad(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case eo:return Pn(r.children,o,i,t);case Cu:s=8,o|=8;break;case sc:return e=Bt(12,r,t,o|2),e.elementType=sc,e.lanes=i,e;case ac:return e=Bt(13,r,t,o),e.elementType=ac,e.lanes=i,e;case lc:return e=Bt(19,r,t,o),e.elementType=lc,e.lanes=i,e;case gf:return Xa(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ff:s=10;break e;case mf:s=9;break e;case $u:s=11;break e;case Eu:s=14;break e;case Wr:s=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Bt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Pn(e,t,r,n){return e=Bt(7,e,n,t),e.lanes=r,e}function Xa(e,t,r,n){return e=Bt(22,e,n,t),e.elementType=gf,e.lanes=r,e.stateNode={isHidden:!1},e}function Bl(e,t,r){return e=Bt(6,e,null,t),e.lanes=r,e}function Vl(e,t,r){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qy(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ld(e,t,r,n,o,i,s,l,a){return e=new Qy(e,t,r,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(i),e}function Gy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function lg(e){if(!e)return un;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(yt(r))return am(e,r,t)}return t}function cg(e,t,r,n,o,i,s,l,a){return e=ld(r,n,!0,e,o,i,s,l,a),e.context=lg(null),r=e.current,n=ct(),o=sn(r),i=Tr(n,o),i.callback=t??null,nn(r,i,o),e.current.lanes=o,Ji(e,o,n),bt(e,n),e}function Ya(e,t,r,n){var o=t.current,i=ct(),s=sn(o);return r=lg(r),t.context===null?t.context=r:t.pendingContext=r,t=Tr(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=nn(o,t,s),e!==null&&(or(e,o,s,i),Ks(e,o,s)),s}function Aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function cd(e,t){Jh(e,t),(e=e.alternate)&&Jh(e,t)}function Xy(){return null}var ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function ud(e){this._internalRoot=e}Za.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ya(e,t,null,null)};Za.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){Ya(null,e,null,null)}),t[Pr]=null}};function Za(e){this._internalRoot=e}Za.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qr.length&&t!==0&&t<qr[r].priority;r++);qr.splice(r,0,e),r===0&&Uf(e)}};function dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ep(){}function Yy(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Aa(s);i.call(u)}}var s=cg(t,n,e,0,null,!1,!1,"",ep);return e._reactRootContainer=s,e[Pr]=s.current,Ni(e.nodeType===8?e.parentNode:e),Rn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=Aa(a);l.call(u)}}var a=ld(e,0,!1,null,null,!1,!1,"",ep);return e._reactRootContainer=a,e[Pr]=a.current,Ni(e.nodeType===8?e.parentNode:e),Rn(function(){Ya(t,a,r,n)}),a}function el(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=Aa(s);l.call(a)}}Ya(t,s,e,o)}else s=Yy(r,t,e,o,n);return Aa(s)}Rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ii(t.pendingLanes);r!==0&&(Tu(t,r|1),bt(t,Le()),!(J&6)&&(Eo=Le()+500,vn()))}break;case 13:Rn(function(){var n=Nr(e,1);if(n!==null){var o=ct();or(n,e,1,o)}}),cd(e,1)}};Iu=function(e){if(e.tag===13){var t=Nr(e,134217728);if(t!==null){var r=ct();or(t,e,134217728,r)}cd(e,134217728)}};Ff=function(e){if(e.tag===13){var t=sn(e),r=Nr(e,t);if(r!==null){var n=ct();or(r,e,t,n)}cd(e,t)}};Bf=function(){return ce};Vf=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}};yc=function(e,t,r){switch(t){case"input":if(dc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ha(n);if(!o)throw Error(T(90));yf(n),dc(n,o)}}}break;case"textarea":wf(e,r);break;case"select":t=r.value,t!=null&&po(e,!!r.multiple,t,!1)}};Ef=od;zf=Rn;var Zy={usingClientEntryPoint:!1,Events:[ts,oo,Ha,Cf,$f,od]},Qo={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Jy={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Ba=Ls.inject(Jy),yr=Ls}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;Pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(t))throw Error(T(200));return Gy(e,t,null,r)};Pt.createRoot=function(e,t){if(!dd(e))throw Error(T(299));var r=!1,n="",o=ug;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ld(e,1,!1,null,null,r,!1,n,o),e[Pr]=t.current,Ni(e.nodeType===8?e.parentNode:e),new ud(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return Rn(e)};Pt.hydrate=function(e,t,r){if(!Ja(t))throw Error(T(200));return el(null,e,t,!0,r)};Pt.hydrateRoot=function(e,t,r){if(!dd(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=ug;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=cg(t,null,e,1,r??null,o,!1,i,s),e[Pr]=t.current,Ni(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Za(t)};Pt.render=function(e,t,r){if(!Ja(t))throw Error(T(200));return el(null,e,t,!1,r)};Pt.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(T(40));return e._reactRootContainer?(Rn(function(){el(null,null,e,!1,function(){e._reactRootContainer=null,e[Pr]=null})}),!0):!1};Pt.unstable_batchedUpdates=od;Pt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ja(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return el(e,t,r,!1,n)};Pt.version="18.2.0-next-9e3b772b8-20220608";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(e){console.error(e)}}dg(),cf.exports=Pt;var eb=cf.exports,tp=eb;oc.createRoot=tp.createRoot,oc.hydrateRoot=tp.hydrateRoot;const gi=/^[a-z0-9]+(-[a-z0-9]+)*$/,tl=(e,t,r,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),a=o.pop(),u={provider:o.length>0?o[0]:n,prefix:a,name:l};return t&&!Js(u)?null:u}const i=o[0],s=i.split("-");if(s.length>1){const l={provider:n,prefix:s.shift(),name:s.join("-")};return t&&!Js(l)?null:l}if(r&&n===""){const l={provider:n,prefix:"",name:i};return t&&!Js(l,r)?null:l}return null},Js=(e,t)=>e?!!((e.provider===""||e.provider.match(gi))&&(t&&e.prefix===""||e.prefix.match(gi))&&e.name.match(gi)):!1,hg=Object.freeze({left:0,top:0,width:16,height:16}),Ta=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),hd=Object.freeze({...hg,...Ta}),Yc=Object.freeze({...hd,body:"",hidden:!1});function tb(e,t){const r={};!e.hFlip!=!t.hFlip&&(r.hFlip=!0),!e.vFlip!=!t.vFlip&&(r.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(r.rotate=n),r}function rp(e,t){const r=tb(e,t);for(const n in Yc)n in Ta?n in e&&!(n in r)&&(r[n]=Ta[n]):n in t?r[n]=t[n]:n in e&&(r[n]=e[n]);return r}function rb(e,t){const r=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(r[s])return o[s]=[];if(!(s in o)){o[s]=null;const l=n[s]&&n[s].parent,a=l&&i(l);a&&(o[s]=[l].concat(a))}return o[s]}return(t||Object.keys(r).concat(Object.keys(n))).forEach(i),o}function nb(e,t,r){const n=e.icons,o=e.aliases||Object.create(null);let i={};function s(l){i=rp(n[l]||o[l],i)}return s(t),r.forEach(s),rp(e,i)}function pg(e,t){const r=[];if(typeof e!="object"||typeof e.icons!="object")return r;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),r.push(o)});const n=rb(e);for(const o in n){const i=n[o];i&&(t(o,nb(e,o,i)),r.push(o))}return r}const ob={provider:"",aliases:{},not_found:{},...hg};function Ul(e,t){for(const r in t)if(r in e&&typeof e[r]!=typeof t[r])return!1;return!0}function fg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Ul(e,ob))return null;const r=t.icons;for(const o in r){const i=r[o];if(!o.match(gi)||typeof i.body!="string"||!Ul(i,Yc))return null}const n=t.aliases||Object.create(null);for(const o in n){const i=n[o],s=i.parent;if(!o.match(gi)||typeof s!="string"||!r[s]&&!n[s]||!Ul(i,Yc))return null}return t}const np=Object.create(null);function ib(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Fn(e,t){const r=np[e]||(np[e]=Object.create(null));return r[t]||(r[t]=ib(e,t))}function pd(e,t){return fg(t)?pg(t,(r,n)=>{n?e.icons[r]=n:e.missing.add(r)}):[]}function sb(e,t,r){try{if(typeof r.body=="string")return e.icons[t]={...r},!0}catch{}return!1}let ji=!1;function mg(e){return typeof e=="boolean"&&(ji=e),ji}function ab(e){const t=typeof e=="string"?tl(e,!0,ji):e;if(t){const r=Fn(t.provider,t.prefix),n=t.name;return r.icons[n]||(r.missing.has(n)?null:void 0)}}function lb(e,t){const r=tl(e,!0,ji);if(!r)return!1;const n=Fn(r.provider,r.prefix);return sb(n,r.name,t)}function cb(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),ji&&!t&&!e.prefix){let o=!1;return fg(e)&&(e.prefix="",pg(e,(i,s)=>{s&&lb(i,s)&&(o=!0)})),o}const r=e.prefix;if(!Js({provider:t,prefix:r,name:"a"}))return!1;const n=Fn(t,r);return!!pd(n,e)}const gg=Object.freeze({width:null,height:null}),vg=Object.freeze({...gg,...Ta}),ub=/(-?[0-9.]*[0-9]+[0-9.]*)/g,db=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function op(e,t,r){if(t===1)return e;if(r=r||100,typeof e=="number")return Math.ceil(e*t*r)/r;if(typeof e!="string")return e;const n=e.split(ub);if(n===null||!n.length)return e;const o=[];let i=n.shift(),s=db.test(i);for(;;){if(s){const l=parseFloat(i);isNaN(l)?o.push(i):o.push(Math.ceil(l*t*r)/r)}else o.push(i);if(i=n.shift(),i===void 0)return o.join("");s=!s}}const hb=e=>e==="unset"||e==="undefined"||e==="none";function pb(e,t){const r={...hd,...e},n={...vg,...t},o={left:r.left,top:r.top,width:r.width,height:r.height};let i=r.body;[r,n].forEach(y=>{const w=[],S=y.hFlip,v=y.vFlip;let f=y.rotate;S?v?f+=2:(w.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),w.push("scale(-1 1)"),o.top=o.left=0):v&&(w.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),w.push("scale(1 -1)"),o.top=o.left=0);let b;switch(f<0&&(f-=Math.floor(f/4)*4),f=f%4,f){case 1:b=o.height/2+o.top,w.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:w.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,w.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}f%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),w.length&&(i='<g transform="'+w.join(" ")+'">'+i+"</g>")});const s=n.width,l=n.height,a=o.width,u=o.height;let p,d;s===null?(d=l===null?"1em":l==="auto"?u:l,p=op(d,a/u)):(p=s==="auto"?a:s,d=l===null?op(p,u/a):l==="auto"?u:l);const h={},g=(y,w)=>{hb(w)||(h[y]=w.toString())};return g("width",p),g("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+u.toString(),{attributes:h,body:i}}const fb=/\sid="(\S+)"/g,mb="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gb=0;function vb(e,t=mb){const r=[];let n;for(;n=fb.exec(e);)r.push(n[1]);if(!r.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(i=>{const s=typeof t=="function"?t(i):t+(gb++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Zc=Object.create(null);function yb(e,t){Zc[e]=t}function Jc(e){return Zc[e]||Zc[""]}function fd(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const md=Object.create(null),Go=["https://api.simplesvg.com","https://api.unisvg.com"],ea=[];for(;Go.length>0;)Go.length===1||Math.random()>.5?ea.push(Go.shift()):ea.push(Go.pop());md[""]=fd({resources:["https://api.iconify.design"].concat(ea)});function bb(e,t){const r=fd(t);return r===null?!1:(md[e]=r,!0)}function gd(e){return md[e]}const wb=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ip=wb();function _b(e,t){const r=gd(e);if(!r)return 0;let n;if(!r.maxURL)n=0;else{let o=0;r.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";n=r.maxURL-o-r.path.length-i.length}return n}function xb(e){return e===404}const kb=(e,t,r)=>{const n=[],o=_b(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},l=0;return r.forEach((a,u)=>{l+=a.length+1,l>=o&&u>0&&(n.push(s),s={type:i,provider:e,prefix:t,icons:[]},l=a.length),s.icons.push(a)}),n.push(s),n};function Sb(e){if(typeof e=="string"){const t=gd(e);if(t)return t.path}return"/"}const Cb=(e,t,r)=>{if(!ip){r("abort",424);return}let n=Sb(t.provider);switch(t.type){case"icons":{const i=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});n+=i+".json?"+a.toString();break}case"custom":{const i=t.uri;n+=i.slice(0,1)==="/"?i.slice(1):i;break}default:r("abort",400);return}let o=503;ip(e+n).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{r(xb(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?r("abort",i):r("next",o)});return}setTimeout(()=>{r("success",i)})}).catch(()=>{r("next",o)})},$b={prepare:kb,send:Cb};function Eb(e){const t={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const i=o.provider,s=o.prefix,l=o.name,a=r[i]||(r[i]=Object.create(null)),u=a[s]||(a[s]=Fn(i,s));let p;l in u.icons?p=t.loaded:s===""||u.missing.has(l)?p=t.missing:p=t.pending;const d={provider:i,prefix:s,name:l};p.push(d)}),t}function yg(e,t){e.forEach(r=>{const n=r.loaderCallbacks;n&&(r.loaderCallbacks=n.filter(o=>o.id!==t))})}function zb(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1;const n=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==o)return!0;const u=a.name;if(e.icons[u])s.loaded.push({provider:n,prefix:o,name:u});else if(e.missing.has(u))s.missing.push({provider:n,prefix:o,name:u});else return r=!0,!0;return!1}),s.pending.length!==l&&(r||yg([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Ab=0;function Tb(e,t,r){const n=Ab++,o=yg.bind(null,r,n);if(!t.pending.length)return o;const i={id:n,icons:t,callback:e,abort:o};return r.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function Ib(e,t=!0,r=!1){const n=[];return e.forEach(o=>{const i=typeof o=="string"?tl(o,t,r):o;i&&n.push(i)}),n}var Lb={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Pb(e,t,r,n){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let k=e.resources.slice(0);for(s=[];k.length>1;){const C=Math.floor(Math.random()*k.length);s.push(k[C]),k=k.slice(0,C).concat(k.slice(C+1))}s=s.concat(k)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const l=Date.now();let a="pending",u=0,p,d=null,h=[],g=[];typeof n=="function"&&g.push(n);function y(){d&&(clearTimeout(d),d=null)}function w(){a==="pending"&&(a="aborted"),y(),h.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),h=[]}function S(k,C){C&&(g=[]),typeof k=="function"&&g.push(k)}function v(){return{startTime:l,payload:t,status:a,queriesSent:u,queriesPending:h.length,subscribe:S,abort:w}}function f(){a="failed",g.forEach(k=>{k(void 0,p)})}function b(){h.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),h=[]}function _(k,C,$){const z=C!=="success";switch(h=h.filter(E=>E!==k),a){case"pending":break;case"failed":if(z||!e.dataAfterTimeout)return;break;default:return}if(C==="abort"){p=$,f();return}if(z){p=$,h.length||(s.length?x():f());return}if(y(),b(),!e.random){const E=e.resources.indexOf(k.resource);E!==-1&&E!==e.index&&(e.index=E)}a="completed",g.forEach(E=>{E($)})}function x(){if(a!=="pending")return;y();const k=s.shift();if(k===void 0){if(h.length){d=setTimeout(()=>{y(),a==="pending"&&(b(),f())},e.timeout);return}f();return}const C={status:"pending",resource:k,callback:($,z)=>{_(C,$,z)}};h.push(C),u++,d=setTimeout(x,e.rotate),r(k,t,C.callback)}return setTimeout(x),v}function bg(e){const t={...Lb,...e};let r=[];function n(){r=r.filter(l=>l().status==="pending")}function o(l,a,u){const p=Pb(t,l,a,(d,h)=>{n(),u&&u(d,h)});return r.push(p),p}function i(l){return r.find(a=>l(a))||null}return{query:o,find:i,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:n}}function sp(){}const jl=Object.create(null);function Nb(e){if(!jl[e]){const t=gd(e);if(!t)return;const r=bg(t),n={config:t,redundancy:r};jl[e]=n}return jl[e]}function Ob(e,t,r){let n,o;if(typeof e=="string"){const i=Jc(e);if(!i)return r(void 0,424),sp;o=i.send;const s=Nb(e);s&&(n=s.redundancy)}else{const i=fd(e);if(i){n=bg(i);const s=e.resources?e.resources[0]:"",l=Jc(s);l&&(o=l.send)}}return!n||!o?(r(void 0,424),sp):n.query(t,o,r)().abort}const ap="iconify2",Hi="iconify",wg=Hi+"-count",lp=Hi+"-version",_g=36e5,Db=168;function eu(e,t){try{return e.getItem(t)}catch{}}function vd(e,t,r){try{return e.setItem(t,r),!0}catch{}}function cp(e,t){try{e.removeItem(t)}catch{}}function tu(e,t){return vd(e,wg,t.toString())}function ru(e){return parseInt(eu(e,wg))||0}const rl={local:!0,session:!0},xg={local:new Set,session:new Set};let yd=!1;function Mb(e){yd=e}let Ps=typeof window>"u"?{}:window;function kg(e){const t=e+"Storage";try{if(Ps&&Ps[t]&&typeof Ps[t].length=="number")return Ps[t]}catch{}rl[e]=!1}function Sg(e,t){const r=kg(e);if(!r)return;const n=eu(r,lp);if(n!==ap){if(n){const l=ru(r);for(let a=0;a<l;a++)cp(r,Hi+a.toString())}vd(r,lp,ap),tu(r,0);return}const o=Math.floor(Date.now()/_g)-Db,i=l=>{const a=Hi+l.toString(),u=eu(r,a);if(typeof u=="string"){try{const p=JSON.parse(u);if(typeof p=="object"&&typeof p.cached=="number"&&p.cached>o&&typeof p.provider=="string"&&typeof p.data=="object"&&typeof p.data.prefix=="string"&&t(p,l))return!0}catch{}cp(r,a)}};let s=ru(r);for(let l=s-1;l>=0;l--)i(l)||(l===s-1?(s--,tu(r,s)):xg[e].add(l))}function Cg(){if(!yd){Mb(!0);for(const e in rl)Sg(e,t=>{const r=t.data,n=t.provider,o=r.prefix,i=Fn(n,o);if(!pd(i,r).length)return!1;const s=r.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Rb(e,t){const r=e.lastModifiedCached;if(r&&r>=t)return r===t;if(e.lastModifiedCached=t,r)for(const n in rl)Sg(n,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Fb(e,t){yd||Cg();function r(n){let o;if(!rl[n]||!(o=kg(n)))return;const i=xg[n];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=ru(o),!tu(o,s+1))return;const l={cached:Math.floor(Date.now()/_g),provider:e.provider,data:t};return vd(o,Hi+s.toString(),JSON.stringify(l))}t.lastModified&&!Rb(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),r("local")||r("session"))}function up(){}function Bb(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,zb(e)}))}function Vb(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:r,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=Jc(r)))return;i.prepare(r,n,o).forEach(l=>{Ob(r,l,a=>{if(typeof a!="object")l.icons.forEach(u=>{e.missing.add(u)});else try{const u=pd(e,a);if(!u.length)return;const p=e.pendingIcons;p&&u.forEach(d=>{p.delete(d)}),Fb(e,a)}catch(u){console.error(u)}Bb(e)})})}))}const Ub=(e,t)=>{const r=Ib(e,!0,mg()),n=Eb(r);if(!n.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(n.loaded,n.missing,n.pending,up)}),()=>{a=!1}}const o=Object.create(null),i=[];let s,l;return n.pending.forEach(a=>{const{provider:u,prefix:p}=a;if(p===l&&u===s)return;s=u,l=p,i.push(Fn(u,p));const d=o[u]||(o[u]=Object.create(null));d[p]||(d[p]=[])}),n.pending.forEach(a=>{const{provider:u,prefix:p,name:d}=a,h=Fn(u,p),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(d)||(g.add(d),o[u][p].push(d))}),i.forEach(a=>{const{provider:u,prefix:p}=a;o[u][p].length&&Vb(a,o[u][p])}),t?Tb(t,n,i):up};function jb(e,t){const r={...e};for(const n in t){const o=t[n],i=typeof o;n in gg?(o===null||o&&(i==="string"||i==="number"))&&(r[n]=o):i===typeof r[n]&&(r[n]=n==="rotate"?o%4:o)}return r}const Hb=/[\s,]+/;function Wb(e,t){t.split(Hb).forEach(r=>{switch(r.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Kb(e,t=0){const r=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(r===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(r!==e){let o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-r.length));return isNaN(i)?0:(i=i/o,i%1===0?n(i):0)}}return t}function qb(e,t){let r=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)r+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+e+"</svg>"}function Qb(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Gb(e){return"data:image/svg+xml,"+Qb(e)}function Xb(e){return'url("'+Gb(e)+'")'}let vi;function Yb(){try{vi=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{vi=null}}function Zb(e){return vi===void 0&&Yb(),vi?vi.createHTML(e):e}const $g={...vg,inline:!1},Jb={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},e1={display:"inline-block"},nu={backgroundColor:"currentColor"},Eg={backgroundColor:"transparent"},dp={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},hp={WebkitMask:nu,mask:nu,background:Eg};for(const e in hp){const t=hp[e];for(const r in dp)t[e+r]=dp[r]}const t1={...$g,inline:!0};function pp(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const r1=(e,t,r,n)=>{const o=r?t1:$g,i=jb(o,t),s=t.mode||"svg",l={},a=t.style||{},u={...s==="svg"?Jb:{},ref:n};for(let v in t){const f=t[v];if(f!==void 0)switch(v){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[v]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Wb(i,f);break;case"color":l.color=f;break;case"rotate":typeof f=="string"?i[v]=Kb(f):typeof f=="number"&&(i[v]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete u["aria-hidden"];break;default:o[v]===void 0&&(u[v]=f)}}const p=pb(e,i),d=p.attributes;if(i.inline&&(l.verticalAlign="-0.125em"),s==="svg"){u.style={...l,...a},Object.assign(u,d);let v=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:Zb(vb(p.body,f?()=>f+"ID"+v++:"iconifyReact"))},Ir.createElement("svg",u)}const{body:h,width:g,height:y}=e,w=s==="mask"||(s==="bg"?!1:h.indexOf("currentColor")!==-1),S=qb(h,{...d,width:g+"",height:y+""});return u.style={...l,"--svg":Xb(S),width:pp(d.width),height:pp(d.height),...e1,...w?nu:Eg,...a},Ir.createElement("span",u)};mg(!0);yb("",$b);if(typeof document<"u"&&typeof window<"u"){Cg();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!cb(n))&&console.error(r)}catch{console.error(r)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let r in t){const n="IconifyProviders["+r+"] is invalid.";try{const o=t[r];if(typeof o!="object"||!o||o.resources===void 0)continue;bb(r,o)||console.error(n)}catch{console.error(n)}}}}class zg extends Ir.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const r=this.state,n=this.props.icon;if(typeof n=="object"&&n!==null&&typeof n.body=="string"){this._icon="",this._abortLoading(),(t||r.icon===null)&&this._setData({data:n});return}let o;if(typeof n!="string"||(o=tl(n,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=ab(o);if(!i){(!this._loading||this._loading.name!==n)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:n,abort:Ub([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==n||r.icon===null){this._abortLoading(),this._icon=n;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(n)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,r=this.state.icon;if(r===null)return t.children?t.children:Ir.createElement("span",{});let n=t;return r.classes&&(n={...t,className:(typeof t.className=="string"?t.className+" ":"")+r.classes.join(" ")}),r1({...hd,...r.data},n,t._inline,t._ref)}}const Er=Ir.forwardRef(function(t,r){const n={...t,_ref:r,_inline:!1};return Ir.createElement(zg,n)});Ir.forwardRef(function(t,r){const n={...t,_ref:r,_inline:!0};return Ir.createElement(zg,n)});function n1({lightMode:e,setLightMode:t,fontIncreased:r,setFontIncreased:n}){function o(){t(s=>!s),localStorage.setItem("mode",!e)}function i(){n(s=>!s),localStorage.setItem("font",!r)}return N.jsx("header",{className:"fade-in-header",children:N.jsx("nav",{style:{backgroundColor:e?"#282836":"#CACAD3",color:e?"white":"black"},children:N.jsxs("ul",{className:"header__features",children:[N.jsx("li",{style:{backgroundColor:e?"#141515":"#EEF0F3"},className:"header__homepage",children:N.jsx(Er,{icon:"line-md:home-md-twotone-alt",width:"24",height:"24"})}),N.jsxs("li",{className:"header__link",children:[N.jsx(Er,{icon:"iwwa:file-pdf",className:"hover",width:"24",height:"24"}),N.jsx("a",{className:"header__cv",href:"https://ste1v0.dev/serov_frontend.pdf",target:"_blank",rel:"noreferrer",children:"CV"})]}),N.jsxs("li",{className:"header__link",children:[N.jsx(Er,{icon:"ic:twotone-telegram",className:"hover rotate",width:"24",height:"24"}),N.jsx("a",{className:"header__tg",href:"https://t.me/ste1v0",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),N.jsxs("li",{className:"header__right",children:[N.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:i,children:r?"text_decrease":"text_increase"}),N.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:o,children:e?"dark_mode":"light_mode"})]})]})})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=globalThis,bd=ta.ShadowRoot&&(ta.ShadyCSS===void 0||ta.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wd=Symbol(),fp=new WeakMap;let Ag=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==wd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(bd&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=fp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&fp.set(r,t))}return t}toString(){return this.cssText}};const o1=e=>new Ag(typeof e=="string"?e:e+"",void 0,wd),V=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Ag(r,e,wd)},i1=(e,t)=>{if(bd)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=ta.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},mp=bd?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return o1(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:s1,defineProperty:a1,getOwnPropertyDescriptor:l1,getOwnPropertyNames:c1,getOwnPropertySymbols:u1,getPrototypeOf:d1}=Object,ln=globalThis,gp=ln.trustedTypes,h1=gp?gp.emptyScript:"",Hl=ln.reactiveElementPolyfillSupport,yi=(e,t)=>e,zo={toAttribute(e,t){switch(t){case Boolean:e=e?h1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},_d=(e,t)=>!s1(e,t),vp={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:_d};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ln.litPropertyMetadata??(ln.litPropertyMetadata=new WeakMap);class Zn extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=vp){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&a1(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=l1(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const l=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vp}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;const t=d1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){const r=this.properties,n=[...c1(r),...u1(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(mp(o))}else t!==void 0&&r.push(mp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return i1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:zo).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:zo;this._$Em=o,this[o]=l.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??_d)(this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}}Zn.elementStyles=[],Zn.shadowRootOptions={mode:"open"},Zn[yi("elementProperties")]=new Map,Zn[yi("finalized")]=new Map,Hl==null||Hl({ReactiveElement:Zn}),(ln.reactiveElementVersions??(ln.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,Ia=bi.trustedTypes,yp=Ia?Ia.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tg="$lit$",Gr=`lit$${(Math.random()+"").slice(9)}$`,Ig="?"+Gr,p1=`<${Ig}>`,Bn=document,Wi=()=>Bn.createComment(""),Ki=e=>e===null||typeof e!="object"&&typeof e!="function",Lg=Array.isArray,f1=e=>Lg(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Wl=`[ 	
\f\r]`,Xo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bp=/-->/g,wp=/>/g,kn=RegExp(`>|${Wl}(?:([^\\s"'>=/]+)(${Wl}*=${Wl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_p=/'/g,xp=/"/g,Pg=/^(?:script|style|textarea|title)$/i,m1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=m1(1),At=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),kp=new WeakMap,Tn=Bn.createTreeWalker(Bn,129);function Ng(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yp!==void 0?yp.createHTML(t):t}const g1=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Xo;for(let l=0;l<r;l++){const a=e[l];let u,p,d=-1,h=0;for(;h<a.length&&(s.lastIndex=h,p=s.exec(a),p!==null);)h=s.lastIndex,s===Xo?p[1]==="!--"?s=bp:p[1]!==void 0?s=wp:p[2]!==void 0?(Pg.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=kn):p[3]!==void 0&&(s=kn):s===kn?p[0]===">"?(s=o??Xo,d=-1):p[1]===void 0?d=-2:(d=s.lastIndex-p[2].length,u=p[1],s=p[3]===void 0?kn:p[3]==='"'?xp:_p):s===xp||s===_p?s=kn:s===bp||s===wp?s=Xo:(s=kn,o=void 0);const g=s===kn&&e[l+1].startsWith("/>")?" ":"";i+=s===Xo?a+p1:d>=0?(n.push(u),a.slice(0,d)+Tg+a.slice(d)+Gr+g):a+Gr+(d===-2?l:g)}return[Ng(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class qi{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const l=t.length-1,a=this.parts,[u,p]=g1(t,r);if(this.el=qi.createElement(u,n),Tn.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Tn.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Tg)){const h=p[s++],g=o.getAttribute(d).split(Gr),y=/([.?@])?(.*)/.exec(h);a.push({type:1,index:i,name:y[2],strings:g,ctor:y[1]==="."?y1:y[1]==="?"?b1:y[1]==="@"?w1:nl}),o.removeAttribute(d)}else d.startsWith(Gr)&&(a.push({type:6,index:i}),o.removeAttribute(d));if(Pg.test(o.tagName)){const d=o.textContent.split(Gr),h=d.length-1;if(h>0){o.textContent=Ia?Ia.emptyScript:"";for(let g=0;g<h;g++)o.append(d[g],Wi()),Tn.nextNode(),a.push({type:2,index:++i});o.append(d[h],Wi())}}}else if(o.nodeType===8)if(o.data===Ig)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Gr,d+1))!==-1;)a.push({type:7,index:i}),d+=Gr.length-1}i++}}static createElement(t,r){const n=Bn.createElement("template");return n.innerHTML=t,n}}function Ao(e,t,r=e,n){var s,l;if(t===At)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const i=Ki(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Ao(e,o._$AS(e,t.values),o,n)),t}class v1{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Bn).importNode(r,!0);Tn.currentNode=o;let i=Tn.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new ns(i,i.nextSibling,this,t):a.type===1?u=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(u=new _1(i,this,t)),this._$AV.push(u),a=n[++l]}s!==(a==null?void 0:a.index)&&(i=Tn.nextNode(),s++)}return Tn.currentNode=Bn,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ns{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ao(this,t,r),Ki(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==At&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):f1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==be&&Ki(this._$AH)?this._$AA.nextSibling.data=t:this.$(Bn.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=qi.createElement(Ng(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const s=new v1(o,this),l=s.u(this.options);s.p(r),this.$(l),this._$AH=s}}_$AC(t){let r=kp.get(t.strings);return r===void 0&&kp.set(t.strings,r=new qi(t)),r}T(t){Lg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new ns(this.k(Wi()),this.k(Wi()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class nl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=be}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=Ao(this,t,r,0),s=!Ki(t)||t!==this._$AH&&t!==At,s&&(this._$AH=t);else{const l=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=Ao(this,l[n+a],r,a),u===At&&(u=this._$AH[a]),s||(s=!Ki(u)||u!==this._$AH[a]),u===be?t=be:t!==be&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!o&&this.O(t)}O(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class y1 extends nl{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===be?void 0:t}}let b1=class extends nl{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}};class w1 extends nl{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Ao(this,t,r,0)??be)===At)return;const n=this._$AH,o=t===be&&n!==be||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==be&&(n===be||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class _1{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ao(this,t)}}const Kl=bi.litHtmlPolyfillSupport;Kl==null||Kl(qi,ns),(bi.litHtmlVersions??(bi.litHtmlVersions=[])).push("3.1.1");const x1=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new ns(t.insertBefore(Wi(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wi=class extends Zn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=x1(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return At}};var Xp;wi._$litElement$=!0,wi.finalized=!0,(Xp=globalThis.litElementHydrateSupport)==null||Xp.call(globalThis,{LitElement:wi});const ql=globalThis.litElementPolyfillSupport;ql==null||ql({LitElement:wi});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");var H=V`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,k1=V`
  ${H}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,S1=V`
  ${H}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`,Og=Object.defineProperty,C1=Object.defineProperties,$1=Object.getOwnPropertyDescriptor,E1=Object.getOwnPropertyDescriptors,Sp=Object.getOwnPropertySymbols,z1=Object.prototype.hasOwnProperty,A1=Object.prototype.propertyIsEnumerable,Ql=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},Cp=(e,t,r)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Rr=(e,t)=>{for(var r in t||(t={}))z1.call(t,r)&&Cp(e,r,t[r]);if(Sp)for(var r of Sp(t))A1.call(t,r)&&Cp(e,r,t[r]);return e},os=(e,t)=>C1(e,E1(t)),c=(e,t,r,n)=>{for(var o=n>1?void 0:n?$1(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Og(t,r,o),o},T1=function(e,t){this[0]=e,this[1]=t},I1=e=>{var t=e[Ql("asyncIterator")],r=!1,n,o={};return t==null?(t=e[Ql("iterator")](),n=i=>o[i]=s=>t[i](s)):(t=t.call(e),n=i=>o[i]=s=>{if(r){if(r=!1,i==="throw")throw s;return s}return r=!0,{done:!1,value:new T1(new Promise(l=>{var a=t[i](s);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),o[Ql("iterator")]=()=>o,n("next"),"throw"in t?n("throw"):o.throw=i=>{throw i},"return"in t&&n("return"),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L1={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:_d},P1=(e=L1,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.C(s,void 0,e),l}}}if(n==="setter"){const{name:s}=r;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+n)};function m(e){return(t,r)=>typeof r=="object"?P1(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dg(e){return(t,r)=>{const n=typeof t=="function"?t:t[r];Object.assign(n,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t){return(r,n,o)=>{const i=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:s,set:l}=typeof n=="object"?r:o??(()=>{const a=Symbol();return{get(){return this[a]},set(u){this[a]=u}}})();return ou(r,n,{get(){let a=s.call(this);return a===void 0&&(a=i(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return ou(r,n,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N1(e){return(t,r)=>ou(t,r,{async get(){var n;return await this.updateComplete,((n=this.renderRoot)==null?void 0:n.querySelector(e))??null}})}var D=class extends wi{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Rr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends t{},r);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in n&&n.version&&(i=" v"+n.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};D.version="2.12.0";D.dependencies={};c([m()],D.prototype,"dir",2);c([m()],D.prototype,"lang",2);const dn=Math.min,Et=Math.max,La=Math.round,Ns=Math.floor,hn=e=>({x:e,y:e}),O1={left:"right",right:"left",bottom:"top",top:"bottom"},D1={start:"end",end:"start"};function iu(e,t,r){return Et(e,dn(t,r))}function No(e,t){return typeof e=="function"?e(t):e}function pn(e){return e.split("-")[0]}function Oo(e){return e.split("-")[1]}function Mg(e){return e==="x"?"y":"x"}function xd(e){return e==="y"?"height":"width"}function is(e){return["top","bottom"].includes(pn(e))?"y":"x"}function kd(e){return Mg(is(e))}function M1(e,t,r){r===void 0&&(r=!1);const n=Oo(e),o=kd(e),i=xd(o);let s=o==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Pa(s)),[s,Pa(s)]}function R1(e){const t=Pa(e);return[su(e),t,su(t)]}function su(e){return e.replace(/start|end/g,t=>D1[t])}function F1(e,t,r){const n=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?o:n:t?n:o;case"left":case"right":return t?i:s;default:return[]}}function B1(e,t,r,n){const o=Oo(e);let i=F1(pn(e),r==="start",n);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(su)))),i}function Pa(e){return e.replace(/left|right|bottom|top/g,t=>O1[t])}function V1(e){return{top:0,right:0,bottom:0,left:0,...e}}function Rg(e){return typeof e!="number"?V1(e):{top:e,right:e,bottom:e,left:e}}function Na(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function $p(e,t,r){let{reference:n,floating:o}=e;const i=is(t),s=kd(t),l=xd(s),a=pn(t),u=i==="y",p=n.x+n.width/2-o.width/2,d=n.y+n.height/2-o.height/2,h=n[l]/2-o[l]/2;let g;switch(a){case"top":g={x:p,y:n.y-o.height};break;case"bottom":g={x:p,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:d};break;case"left":g={x:n.x-o.width,y:d};break;default:g={x:n.x,y:n.y}}switch(Oo(t)){case"start":g[s]-=h*(r&&u?-1:1);break;case"end":g[s]+=h*(r&&u?-1:1);break}return g}const U1=async(e,t,r)=>{const{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:s}=r,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:d}=$p(u,n,a),h=n,g={},y=0;for(let w=0;w<l.length;w++){const{name:S,fn:v}=l[w],{x:f,y:b,data:_,reset:x}=await v({x:p,y:d,initialPlacement:n,placement:h,strategy:o,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});if(p=f??p,d=b??d,g={...g,[S]:{...g[S],..._}},x&&y<=50){y++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(u=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:p,y:d}=$p(u,h,a)),w=-1;continue}}return{x:p,y:d,placement:h,strategy:o,middlewareData:g}};async function Sd(e,t){var r;t===void 0&&(t={});const{x:n,y:o,platform:i,rects:s,elements:l,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:g=0}=No(t,e),y=Rg(g),S=l[h?d==="floating"?"reference":"floating":d],v=Na(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(S)))==null||r?S:S.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:p,strategy:a})),f=d==="floating"?{...s.floating,x:n,y:o}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),_=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},x=Na(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f,offsetParent:b,strategy:a}):f);return{top:(v.top-x.top+y.top)/_.y,bottom:(x.bottom-v.bottom+y.bottom)/_.y,left:(v.left-x.left+y.left)/_.x,right:(x.right-v.right+y.right)/_.x}}const j1=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:o,rects:i,platform:s,elements:l,middlewareData:a}=t,{element:u,padding:p=0}=No(e,t)||{};if(u==null)return{};const d=Rg(p),h={x:r,y:n},g=kd(o),y=xd(g),w=await s.getDimensions(u),S=g==="y",v=S?"top":"left",f=S?"bottom":"right",b=S?"clientHeight":"clientWidth",_=i.reference[y]+i.reference[g]-h[g]-i.floating[y],x=h[g]-i.reference[g],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let C=k?k[b]:0;(!C||!await(s.isElement==null?void 0:s.isElement(k)))&&(C=l.floating[b]||i.floating[y]);const $=_/2-x/2,z=C/2-w[y]/2-1,E=dn(d[v],z),B=dn(d[f],z),U=E,ie=C-w[y]-B,ee=C/2-w[y]/2+$,de=iu(U,ee,ie),pe=!a.arrow&&Oo(o)!=null&&ee!=de&&i.reference[y]/2-(ee<U?E:B)-w[y]/2<0,Ee=pe?ee<U?ee-U:ee-ie:0;return{[g]:h[g]+Ee,data:{[g]:de,centerOffset:ee-de-Ee,...pe&&{alignmentOffset:Ee}},reset:pe}}}),H1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:o,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:u}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...S}=No(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const v=pn(o),f=pn(l)===l,b=await(a.isRTL==null?void 0:a.isRTL(u.floating)),_=h||(f||!w?[Pa(l)]:R1(l));!h&&y!=="none"&&_.push(...B1(l,w,y,b));const x=[l,..._],k=await Sd(t,S),C=[];let $=((n=i.flip)==null?void 0:n.overflows)||[];if(p&&C.push(k[v]),d){const U=M1(o,s,b);C.push(k[U[0]],k[U[1]])}if($=[...$,{placement:o,overflows:C}],!C.every(U=>U<=0)){var z,E;const U=(((z=i.flip)==null?void 0:z.index)||0)+1,ie=x[U];if(ie)return{data:{index:U,overflows:$},reset:{placement:ie}};let ee=(E=$.filter(de=>de.overflows[0]<=0).sort((de,pe)=>de.overflows[1]-pe.overflows[1])[0])==null?void 0:E.placement;if(!ee)switch(g){case"bestFit":{var B;const de=(B=$.map(pe=>[pe.placement,pe.overflows.filter(Ee=>Ee>0).reduce((Ee,L)=>Ee+L,0)]).sort((pe,Ee)=>pe[1]-Ee[1])[0])==null?void 0:B[0];de&&(ee=de);break}case"initialPlacement":ee=l;break}if(o!==ee)return{reset:{placement:ee}}}return{}}}};async function W1(e,t){const{placement:r,platform:n,elements:o}=e,i=await(n.isRTL==null?void 0:n.isRTL(o.floating)),s=pn(r),l=Oo(r),a=is(r)==="y",u=["left","top"].includes(s)?-1:1,p=i&&a?-1:1,d=No(t,e);let{mainAxis:h,crossAxis:g,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof y=="number"&&(g=l==="end"?y*-1:y),a?{x:g*p,y:h*u}:{x:h*u,y:g*p}}const K1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:o,y:i,placement:s,middlewareData:l}=t,a=await W1(t,e);return s===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:o+a.x,y:i+a.y,data:{...a,placement:s}}}}},q1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:S=>{let{x:v,y:f}=S;return{x:v,y:f}}},...a}=No(e,t),u={x:r,y:n},p=await Sd(t,a),d=is(pn(o)),h=Mg(d);let g=u[h],y=u[d];if(i){const S=h==="y"?"top":"left",v=h==="y"?"bottom":"right",f=g+p[S],b=g-p[v];g=iu(f,g,b)}if(s){const S=d==="y"?"top":"left",v=d==="y"?"bottom":"right",f=y+p[S],b=y-p[v];y=iu(f,y,b)}const w=l.fn({...t,[h]:g,[d]:y});return{...w,data:{x:w.x-r,y:w.y-n}}}}},Q1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:o,elements:i}=t,{apply:s=()=>{},...l}=No(e,t),a=await Sd(t,l),u=pn(r),p=Oo(r),d=is(r)==="y",{width:h,height:g}=n.floating;let y,w;u==="top"||u==="bottom"?(y=u,w=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(w=u,y=p==="end"?"top":"bottom");const S=g-a[y],v=h-a[w],f=!t.middlewareData.shift;let b=S,_=v;if(d){const k=h-a.left-a.right;_=p||f?dn(v,k):k}else{const k=g-a.top-a.bottom;b=p||f?dn(S,k):k}if(f&&!p){const k=Et(a.left,0),C=Et(a.right,0),$=Et(a.top,0),z=Et(a.bottom,0);d?_=h-2*(k!==0||C!==0?k+C:Et(a.left,a.right)):b=g-2*($!==0||z!==0?$+z:Et(a.top,a.bottom))}await s({...t,availableWidth:_,availableHeight:b});const x=await o.getDimensions(i.floating);return h!==x.width||g!==x.height?{reset:{rects:!0}}:{}}}};function fn(e){return Fg(e)?(e.nodeName||"").toLowerCase():"#document"}function It(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fr(e){var t;return(t=(Fg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fg(e){return e instanceof Node||e instanceof It(e).Node}function Dr(e){return e instanceof Element||e instanceof It(e).Element}function wr(e){return e instanceof HTMLElement||e instanceof It(e).HTMLElement}function Ep(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof It(e).ShadowRoot}function ss(e){const{overflow:t,overflowX:r,overflowY:n,display:o}=Ht(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(o)}function G1(e){return["table","td","th"].includes(fn(e))}function Cd(e){const t=$d(),r=Ht(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function X1(e){let t=To(e);for(;wr(t)&&!ol(t);){if(Cd(t))return t;t=To(t)}return null}function $d(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ol(e){return["html","body","#document"].includes(fn(e))}function Ht(e){return It(e).getComputedStyle(e)}function il(e){return Dr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function To(e){if(fn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ep(e)&&e.host||Fr(e);return Ep(t)?t.host:t}function Bg(e){const t=To(e);return ol(t)?e.ownerDocument?e.ownerDocument.body:e.body:wr(t)&&ss(t)?t:Bg(t)}function Qi(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const o=Bg(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=It(o);return i?t.concat(s,s.visualViewport||[],ss(o)?o:[],s.frameElement&&r?Qi(s.frameElement):[]):t.concat(o,Qi(o,[],r))}function Vg(e){const t=Ht(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=wr(e),i=o?e.offsetWidth:r,s=o?e.offsetHeight:n,l=La(r)!==i||La(n)!==s;return l&&(r=i,n=s),{width:r,height:n,$:l}}function Ed(e){return Dr(e)?e:e.contextElement}function bo(e){const t=Ed(e);if(!wr(t))return hn(1);const r=t.getBoundingClientRect(),{width:n,height:o,$:i}=Vg(t);let s=(i?La(r.width):r.width)/n,l=(i?La(r.height):r.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Y1=hn(0);function Ug(e){const t=It(e);return!$d()||!t.visualViewport?Y1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Z1(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==It(e)?!1:t}function Vn(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),i=Ed(e);let s=hn(1);t&&(n?Dr(n)&&(s=bo(n)):s=bo(e));const l=Z1(i,r,n)?Ug(i):hn(0);let a=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,p=o.width/s.x,d=o.height/s.y;if(i){const h=It(i),g=n&&Dr(n)?It(n):n;let y=h.frameElement;for(;y&&n&&g!==h;){const w=bo(y),S=y.getBoundingClientRect(),v=Ht(y),f=S.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,b=S.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,u*=w.y,p*=w.x,d*=w.y,a+=f,u+=b,y=It(y).frameElement}}return Na({width:p,height:d,x:a,y:u})}function J1(e){let{rect:t,offsetParent:r,strategy:n}=e;const o=wr(r),i=Fr(r);if(r===i)return t;let s={scrollLeft:0,scrollTop:0},l=hn(1);const a=hn(0);if((o||!o&&n!=="fixed")&&((fn(r)!=="body"||ss(i))&&(s=il(r)),wr(r))){const u=Vn(r);l=bo(r),a.x=u.x+r.clientLeft,a.y=u.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}}function ew(e){return Array.from(e.getClientRects())}function jg(e){return Vn(Fr(e)).left+il(e).scrollLeft}function tw(e){const t=Fr(e),r=il(e),n=e.ownerDocument.body,o=Et(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=Et(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-r.scrollLeft+jg(e);const l=-r.scrollTop;return Ht(n).direction==="rtl"&&(s+=Et(t.clientWidth,n.clientWidth)-o),{width:o,height:i,x:s,y:l}}function rw(e,t){const r=It(e),n=Fr(e),o=r.visualViewport;let i=n.clientWidth,s=n.clientHeight,l=0,a=0;if(o){i=o.width,s=o.height;const u=$d();(!u||u&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:i,height:s,x:l,y:a}}function nw(e,t){const r=Vn(e,!0,t==="fixed"),n=r.top+e.clientTop,o=r.left+e.clientLeft,i=wr(e)?bo(e):hn(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,a=o*i.x,u=n*i.y;return{width:s,height:l,x:a,y:u}}function zp(e,t,r){let n;if(t==="viewport")n=rw(e,r);else if(t==="document")n=tw(Fr(e));else if(Dr(t))n=nw(t,r);else{const o=Ug(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Na(n)}function Hg(e,t){const r=To(e);return r===t||!Dr(r)||ol(r)?!1:Ht(r).position==="fixed"||Hg(r,t)}function ow(e,t){const r=t.get(e);if(r)return r;let n=Qi(e,[],!1).filter(l=>Dr(l)&&fn(l)!=="body"),o=null;const i=Ht(e).position==="fixed";let s=i?To(e):e;for(;Dr(s)&&!ol(s);){const l=Ht(s),a=Cd(s);!a&&l.position==="fixed"&&(o=null),(i?!a&&!o:!a&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||ss(s)&&!a&&Hg(e,s))?n=n.filter(p=>p!==s):o=l,s=To(s)}return t.set(e,n),n}function iw(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e;const s=[...r==="clippingAncestors"?ow(t,this._c):[].concat(r),n],l=s[0],a=s.reduce((u,p)=>{const d=zp(t,p,o);return u.top=Et(d.top,u.top),u.right=dn(d.right,u.right),u.bottom=dn(d.bottom,u.bottom),u.left=Et(d.left,u.left),u},zp(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function sw(e){const{width:t,height:r}=Vg(e);return{width:t,height:r}}function aw(e,t,r){const n=wr(t),o=Fr(t),i=r==="fixed",s=Vn(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const a=hn(0);if(n||!n&&!i)if((fn(t)!=="body"||ss(o))&&(l=il(t)),n){const u=Vn(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=jg(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Ap(e,t){return!wr(e)||Ht(e).position==="fixed"?null:t?t(e):e.offsetParent}function Wg(e,t){const r=It(e);if(!wr(e))return r;let n=Ap(e,t);for(;n&&G1(n)&&Ht(n).position==="static";)n=Ap(n,t);return n&&(fn(n)==="html"||fn(n)==="body"&&Ht(n).position==="static"&&!Cd(n))?r:n||X1(e)||r}const lw=async function(e){let{reference:t,floating:r,strategy:n}=e;const o=this.getOffsetParent||Wg,i=this.getDimensions;return{reference:aw(t,await o(r),n),floating:{x:0,y:0,...await i(r)}}};function cw(e){return Ht(e).direction==="rtl"}const ra={convertOffsetParentRelativeRectToViewportRelativeRect:J1,getDocumentElement:Fr,getClippingRect:iw,getOffsetParent:Wg,getElementRects:lw,getClientRects:ew,getDimensions:sw,getScale:bo,isElement:Dr,isRTL:cw};function uw(e,t){let r=null,n;const o=Fr(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const{left:u,top:p,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const g=Ns(p),y=Ns(o.clientWidth-(u+d)),w=Ns(o.clientHeight-(p+h)),S=Ns(u),f={rootMargin:-g+"px "+-y+"px "+-w+"px "+-S+"px",threshold:Et(0,dn(1,a))||1};let b=!0;function _(x){const k=x[0].intersectionRatio;if(k!==a){if(!b)return s();k?s(!1,k):n=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{r=new IntersectionObserver(_,{...f,root:o.ownerDocument})}catch{r=new IntersectionObserver(_,f)}r.observe(e)}return s(!0),i}function dw(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,u=Ed(e),p=o||i?[...u?Qi(u):[],...Qi(t)]:[];p.forEach(v=>{o&&v.addEventListener("scroll",r,{passive:!0}),i&&v.addEventListener("resize",r)});const d=u&&l?uw(u,r):null;let h=-1,g=null;s&&(g=new ResizeObserver(v=>{let[f]=v;f&&f.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),u&&!a&&g.observe(u),g.observe(t));let y,w=a?Vn(e):null;a&&S();function S(){const v=Vn(e);w&&(v.x!==w.x||v.y!==w.y||v.width!==w.width||v.height!==w.height)&&r(),w=v,y=requestAnimationFrame(S)}return r(),()=>{p.forEach(v=>{o&&v.removeEventListener("scroll",r),i&&v.removeEventListener("resize",r)}),d&&d(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(y)}}const hw=q1,pw=H1,Tp=Q1,fw=j1,mw=(e,t,r)=>{const n=new Map,o={platform:ra,...r},i={...o.platform,_c:n};return U1(e,t,{...o,platform:i})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},as=e=>(...t)=>({_$litDirective$:e,values:t});let ls=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=as(class extends ls{constructor(e){var t;if(super(e),e.type!==gr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const s=!!t[i];s===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(s?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return At}});function gw(e){return vw(e)}function Gl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function vw(e){for(let t=e;t;t=Gl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Gl(e);t;t=Gl(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function yw(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var se=class extends D{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||yw(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=dw(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[K1({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Tp({apply:({rects:r})=>{const n=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(pw({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(hw({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Tp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(fw({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>ra.getOffsetParent(r,gw):ra.getOffsetParent;mw(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:os(Rr({},ra),{getOffsetParent:t})}).then(({x:r,y:n,middlewareData:o,placement:i})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${r}px`,top:`${n}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let p="",d="",h="",g="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?y:"",g=s?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":y,g=s?y:"",h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof a=="number"?`${a}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:d,bottom:h,left:g,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${K({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};se.styles=S1;c([P(".popup")],se.prototype,"popup",2);c([P(".popup__arrow")],se.prototype,"arrowEl",2);c([m()],se.prototype,"anchor",2);c([m({type:Boolean,reflect:!0})],se.prototype,"active",2);c([m({reflect:!0})],se.prototype,"placement",2);c([m({reflect:!0})],se.prototype,"strategy",2);c([m({type:Number})],se.prototype,"distance",2);c([m({type:Number})],se.prototype,"skidding",2);c([m({type:Boolean})],se.prototype,"arrow",2);c([m({attribute:"arrow-placement"})],se.prototype,"arrowPlacement",2);c([m({attribute:"arrow-padding",type:Number})],se.prototype,"arrowPadding",2);c([m({type:Boolean})],se.prototype,"flip",2);c([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],se.prototype,"flipFallbackPlacements",2);c([m({attribute:"flip-fallback-strategy"})],se.prototype,"flipFallbackStrategy",2);c([m({type:Object})],se.prototype,"flipBoundary",2);c([m({attribute:"flip-padding",type:Number})],se.prototype,"flipPadding",2);c([m({type:Boolean})],se.prototype,"shift",2);c([m({type:Object})],se.prototype,"shiftBoundary",2);c([m({attribute:"shift-padding",type:Number})],se.prototype,"shiftPadding",2);c([m({attribute:"auto-size"})],se.prototype,"autoSize",2);c([m()],se.prototype,"sync",2);c([m({type:Object})],se.prototype,"autoSizeBoundary",2);c([m({attribute:"auto-size-padding",type:Number})],se.prototype,"autoSizePadding",2);var Kg=new Map,bw=new WeakMap;function ww(e){return e??{keyframes:[],options:{duration:0}}}function Ip(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ae(e,t){Kg.set(e,ww(t))}function we(e,t,r){const n=bw.get(e);if(n!=null&&n[t])return Ip(n[t],r.dir);const o=Kg.get(t);return o?Ip(o,r.dir):{keyframes:[],options:{duration:0}}}function ut(e,t){return new Promise(r=>{function n(o){o.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function Te(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,os(Rr({},r),{duration:zd()?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function Lp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function zd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Me(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}function Oa(e,t){return e.map(r=>os(Rr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const au=new Set,_w=new MutationObserver(Xg),ho=new Map;let qg=document.documentElement.dir||"ltr",Qg=document.documentElement.lang||navigator.language,$n;_w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Gg(...e){e.map(t=>{const r=t.$code.toLowerCase();ho.has(r)?ho.set(r,Object.assign(Object.assign({},ho.get(r)),t)):ho.set(r,t),$n||($n=t)}),Xg()}function Xg(){qg=document.documentElement.dir||"ltr",Qg=document.documentElement.lang||navigator.language,[...au.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let xw=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){au.add(this.host)}hostDisconnected(){au.delete(this.host)}dir(){return`${this.host.dir||qg}`.toLowerCase()}lang(){return`${this.host.lang||Qg}`.toLowerCase()}getTranslationData(t){var r,n;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),s=(n=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",l=ho.get(`${i}-${s}`),a=ho.get(i);return{locale:o,language:i,region:s,primary:l,secondary:a}}exists(t,r){var n;const{primary:o,secondary:i}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[t]||i&&i[t]||r.includeFallback&&$n&&$n[t])}term(t,...r){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let i;if(n&&n[t])i=n[t];else if(o&&o[t])i=o[t];else if($n&&$n[t])i=$n[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,r)}};var Yg={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Gg(Yg);var kw=Yg,ne=class extends xw{};Gg(kw);function I(e,t){const r=Rr({waitUntilFirstUpdate:!1},t);return(n,o)=>{const{update:i}=n,s=Array.isArray(e)?e:[e];n.update=function(l){s.forEach(a=>{const u=a;if(l.has(u)){const p=l.get(u),d=this[u];p!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,d)}}),i.call(this,l)}}}var Ve=class extends D{constructor(){super(),this.localize=new ne(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Lp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Lp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Me(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=we(this,"tooltip.show",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Me(this.body);const{keyframes:e,options:t}=we(this,"tooltip.hide",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${K({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ve.styles=k1;Ve.dependencies={"sl-popup":se};c([P("slot:not([name])")],Ve.prototype,"defaultSlot",2);c([P(".tooltip__body")],Ve.prototype,"body",2);c([P("sl-popup")],Ve.prototype,"popup",2);c([m()],Ve.prototype,"content",2);c([m()],Ve.prototype,"placement",2);c([m({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);c([m({type:Number})],Ve.prototype,"distance",2);c([m({type:Boolean,reflect:!0})],Ve.prototype,"open",2);c([m({type:Number})],Ve.prototype,"skidding",2);c([m()],Ve.prototype,"trigger",2);c([m({type:Boolean})],Ve.prototype,"hoist",2);c([I("open",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleOpenChange",1);c([I(["content","distance","hoist","placement","skidding"])],Ve.prototype,"handleOptionsChange",1);c([I("disabled")],Ve.prototype,"handleDisabledChange",1);ae("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ae("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sw=new Set(["children","localName","ref","style","className"]),Pp=new WeakMap,Cw=(e,t,r,n,o)=>{const i=o==null?void 0:o[t];i===void 0||r===n?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((s,l,a)=>{let u=Pp.get(s);u===void 0&&Pp.set(s,u=new Map);let p=u.get(l);a!==void 0?p===void 0?(u.set(l,p={handleEvent:a}),s.addEventListener(l,p)):p.handleEvent=a:p!==void 0&&(u.delete(l),s.removeEventListener(l,p))})(e,i,r)},F=({react:e,tagName:t,elementClass:r,events:n,displayName:o})=>{const i=new Set(Object.keys(n??{})),s=e.forwardRef((l,a)=>{const u=e.useRef(null),p=e.useRef(null),d={},h={};for(const[g,y]of Object.entries(l))Sw.has(g)?d[g==="className"?"class":g]=y:i.has(g)||g in r.prototype?h[g]=y:d[g]=y;return e.useLayoutEffect(()=>{if(p.current!==null){for(const g in h)Cw(p.current,g,l[g],u.current?u.current[g]:void 0,n);u.current=l}}),e.useLayoutEffect(()=>{var g;(g=p.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{p.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)},[a])})});return s.displayName=o??r.name,s};var $w="sl-tooltip";Ve.define("sl-tooltip");F({tagName:$w,elementClass:Ve,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var Ew=V`
  ${H}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,zw=V`
  ${H}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Kn=(e="value")=>(t,r)=>{const n=t.constructor,o=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(i,s,l){var a;const u=n.getPropertyOptions(e),p=typeof u.attribute=="string"?u.attribute:e;if(i===p){const d=u.converter||zo,g=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:zo.fromAttribute)(l,u.type);this[e]!==g&&(this[r]=g)}o.call(this,i,s,l)}},Yo=new WeakMap,Zo=new WeakMap,Jo=new WeakMap,Xl=new WeakSet,Os=new WeakMap,Br=class{constructor(e,t){this.handleFormData=r=>{const n=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!n&&!s&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{r.formData.append(o,l.toString())}):r.formData.append(o,i.toString()))},this.handleFormSubmit=r=>{var n;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=Yo.get(this.form))==null||n.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Os.set(this.host,[])},this.handleInteraction=r=>{const n=Os.get(this.host);n.includes(r.type)||n.push(r.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Rr({form:r=>{const n=r.form;if(n){const i=r.getRootNode().getElementById(n);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var n;return(n=r.disabled)!=null?n:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,n)=>r.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Os.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Os.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Yo.has(this.form)?Yo.get(this.form).add(this.host):Yo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Zo.has(this.form)||(Zo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Jo.has(this.form)||(Jo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Yo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Zo.has(this.form)&&(this.form.reportValidity=Zo.get(this.form),Zo.delete(this.form)),Jo.has(this.form)&&(this.form.checkValidity=Jo.get(this.form),Jo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Xl.add(e):Xl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Xl.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},sl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Aw=Object.freeze(os(Rr({},sl),{valid:!1,valueMissing:!0})),Tw=Object.freeze(os(Rr({},sl),{valid:!1,customError:!0})),Iw=V`
  ${H}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,lu="";function cu(e){lu=e}function Lw(e=""){if(!lu){const t=[...document.getElementsByTagName("script")],r=t.find(n=>n.hasAttribute("data-shoelace"));if(r)cu(r.getAttribute("data-shoelace"));else{const n=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";n&&(o=n.getAttribute("src")),cu(o.split("/").slice(0,-1).join("/"))}}return lu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Pw={name:"default",resolver:e=>Lw(`assets/icons/${e}.svg`)},Nw=Pw,Np={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ow={name:"system",resolver:e=>e in Np?`data:image/svg+xml,${encodeURIComponent(Np[e])}`:""},Dw=Ow,Mw=[Nw,Dw],uu=[];function Rw(e){uu.push(e)}function Fw(e){uu=uu.filter(t=>t!==e)}function Op(e){return Mw.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bw=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Zg=e=>e.strings===void 0,Vw={},Uw=(e,t=Vw)=>e._$AH=t;var ei=Symbol(),Ds=Symbol(),Yl,Zl=new Map,ue=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(t!=null&&t.spriteSheet)return A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?ei:Ds}catch{return Ds}try{const o=document.createElement("div");o.innerHTML=await n.text();const i=o.firstElementChild;if(((r=i==null?void 0:i.tagName)==null?void 0:r.toLowerCase())!=="svg")return ei;Yl||(Yl=new DOMParser);const l=Yl.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):ei}catch{return ei}}connectedCallback(){super.connectedCallback(),Rw(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fw(this)}getIconSource(){const e=Op(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),n=r?Op(this.library):void 0;if(!t){this.svg=null;return}let o=Zl.get(t);if(o||(o=this.resolveIcon(t,n),Zl.set(t,o)),!this.initialRender)return;const i=await o;if(i===Ds&&Zl.delete(t),t===this.getIconSource().url){if(Bw(i)){this.svg=i;return}switch(i){case Ds:case ei:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=n==null?void 0:n.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=Iw;c([q()],ue.prototype,"svg",2);c([m({reflect:!0})],ue.prototype,"name",2);c([m()],ue.prototype,"src",2);c([m()],ue.prototype,"label",2);c([m({reflect:!0})],ue.prototype,"library",2);c([I("label")],ue.prototype,"handleLabelChange",1);c([I(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=e=>e??be;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=as(class extends ls{constructor(e){if(super(e),e.type!==gr.PROPERTY&&e.type!==gr.ATTRIBUTE&&e.type!==gr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Zg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===At||t===be)return t;const r=e.element,n=e.name;if(e.type===gr.PROPERTY){if(t===r[n])return At}else if(e.type===gr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return At}else if(e.type===gr.ATTRIBUTE&&r.getAttribute(n)===t+"")return At;return Uw(e),t}});var Ue=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return A`
      <label
        part="base"
        class=${K({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .indeterminate=${Un(this.indeterminate)}
          .checked=${Un(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?A`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?A`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};Ue.styles=zw;Ue.dependencies={"sl-icon":ue};c([P('input[type="checkbox"]')],Ue.prototype,"input",2);c([q()],Ue.prototype,"hasFocus",2);c([m()],Ue.prototype,"title",2);c([m()],Ue.prototype,"name",2);c([m()],Ue.prototype,"value",2);c([m({reflect:!0})],Ue.prototype,"size",2);c([m({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);c([m({type:Boolean,reflect:!0})],Ue.prototype,"checked",2);c([m({type:Boolean,reflect:!0})],Ue.prototype,"indeterminate",2);c([Kn("checked")],Ue.prototype,"defaultChecked",2);c([m({reflect:!0})],Ue.prototype,"form",2);c([m({type:Boolean,reflect:!0})],Ue.prototype,"required",2);c([I("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);c([I(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ue.prototype,"handleStateChange",1);var jw=V`
  ${H}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,cs=class extends D{constructor(){super(...arguments),this.localize=new ne(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};cs.styles=jw;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dp(e,t,r){return e?t(e):r==null?void 0:r(e)}var Ie=class du extends D{constructor(){super(...arguments),this.localize=new ne(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Me(this.childrenContainer);const{keyframes:t,options:r}=we(this,"tree-item.collapse",{dir:this.localize.dir()});await Te(this.childrenContainer,Oa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&du.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Me(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=we(this,"tree-item.expand",{dir:this.localize.dir()});await Te(this.childrenContainer,Oa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>du.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return A`
      <div
        part="base"
        class="${K({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${K({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Dp(this.loading,()=>A` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Dp(this.selectable,()=>A`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Un(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ie.styles=Ew;Ie.dependencies={"sl-checkbox":Ue,"sl-icon":ue,"sl-spinner":cs};c([q()],Ie.prototype,"indeterminate",2);c([q()],Ie.prototype,"isLeaf",2);c([q()],Ie.prototype,"loading",2);c([q()],Ie.prototype,"selectable",2);c([m({type:Boolean,reflect:!0})],Ie.prototype,"expanded",2);c([m({type:Boolean,reflect:!0})],Ie.prototype,"selected",2);c([m({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);c([m({type:Boolean,reflect:!0})],Ie.prototype,"lazy",2);c([P("slot:not([name])")],Ie.prototype,"defaultSlot",2);c([P("slot[name=children]")],Ie.prototype,"childrenSlot",2);c([P(".tree-item__item")],Ie.prototype,"itemElement",2);c([P(".tree-item__children")],Ie.prototype,"childrenContainer",2);c([P(".tree-item__expand-button slot")],Ie.prototype,"expandButtonSlot",2);c([I("loading",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleLoadingChange",1);c([I("disabled")],Ie.prototype,"handleDisabledChange",1);c([I("selected")],Ie.prototype,"handleSelectedChange",1);c([I("expanded",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleExpandedChange",1);c([I("expanded",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleExpandAnimation",1);c([I("lazy",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleLazyChange",1);var wo=Ie;ae("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ae("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Hw="sl-tree-item";wo.define("sl-tree-item");F({tagName:Hw,elementClass:wo,react:R,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Ww=V`
  ${H}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,at=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return A`
      <label
        part="base"
        class=${K({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .checked=${Un(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};at.styles=Ww;c([P('input[type="checkbox"]')],at.prototype,"input",2);c([q()],at.prototype,"hasFocus",2);c([m()],at.prototype,"title",2);c([m()],at.prototype,"name",2);c([m()],at.prototype,"value",2);c([m({reflect:!0})],at.prototype,"size",2);c([m({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([m({type:Boolean,reflect:!0})],at.prototype,"checked",2);c([Kn("checked")],at.prototype,"defaultChecked",2);c([m({reflect:!0})],at.prototype,"form",2);c([m({type:Boolean,reflect:!0})],at.prototype,"required",2);c([I("checked",{waitUntilFirstUpdate:!0})],at.prototype,"handleCheckedChange",1);c([I("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);var Kw="sl-switch";at.define("sl-switch");F({tagName:Kw,elementClass:at,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var qw=V`
  ${H}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Qw=V`
  ${H}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jg=Symbol.for(""),Gw=e=>{if((e==null?void 0:e.r)===Jg)return e==null?void 0:e._$litStatic$},Da=(e,...t)=>({_$litStatic$:t.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]),r:Jg}),Mp=new Map,Xw=e=>(t,...r)=>{const n=r.length;let o,i;const s=[],l=[];let a,u=0,p=!1;for(;u<n;){for(a=t[u];u<n&&(i=r[u],(o=Gw(i))!==void 0);)a+=o+t[++u],p=!0;u!==n&&l.push(i),s.push(a),u++}if(u===n&&s.push(t[n]),p){const d=s.join("$$lit$$");(t=Mp.get(d))===void 0&&(s.raw=s,Mp.set(d,t=s)),r=l}return e(t,...r)},_i=Xw(A);var Re=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Da`a`:Da`button`;return _i`
      <${t}
        part="base"
        class=${K({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${M(e?void 0:this.disabled)}
        type=${M(e?void 0:"button")}
        href=${M(e?this.href:void 0)}
        target=${M(e?this.target:void 0)}
        download=${M(e?this.download:void 0)}
        rel=${M(e&&this.target?"noreferrer noopener":void 0)}
        role=${M(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${M(this.name)}
          library=${M(this.library)}
          src=${M(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Re.styles=Qw;Re.dependencies={"sl-icon":ue};c([P(".icon-button")],Re.prototype,"button",2);c([q()],Re.prototype,"hasFocus",2);c([m()],Re.prototype,"name",2);c([m()],Re.prototype,"library",2);c([m()],Re.prototype,"src",2);c([m()],Re.prototype,"href",2);c([m()],Re.prototype,"target",2);c([m()],Re.prototype,"download",2);c([m()],Re.prototype,"label",2);c([m({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);var Yw=0,ar=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.attrId=++Yw,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${K({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ar.styles=qw;ar.dependencies={"sl-icon-button":Re};c([P(".tab")],ar.prototype,"tab",2);c([m({reflect:!0})],ar.prototype,"panel",2);c([m({type:Boolean,reflect:!0})],ar.prototype,"active",2);c([m({type:Boolean})],ar.prototype,"closable",2);c([m({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);c([I("active")],ar.prototype,"handleActiveChange",1);c([I("disabled")],ar.prototype,"handleDisabledChange",1);var Zw="sl-tab";ar.define("sl-tab");F({tagName:Zw,elementClass:ar,react:R,events:{onSlClose:"sl-close"},displayName:"SlTab"});var Jw=V`
  ${H}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function e_(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var hu=new Set;function t_(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function xi(e){if(hu.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=t_();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function ki(e){hu.delete(e),hu.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function pu(e,t,r="vertical",n="smooth"){const o=e_(e,t),i=o.top+t.scrollTop,s=o.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,u=t.scrollTop,p=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:n}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(i<u?t.scrollTo({top:i,behavior:n}):i+e.clientHeight>p&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:n}))}var wt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,n)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),n.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(s=>s.matches(":focus")),i=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&pu(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Rr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>n.active=n===this.activeTab),this.panels.forEach(n=>{var o;return n.active=n.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&pu(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",o=this.getAllTabs(),s=o.slice(0,o.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${K({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};wt.styles=Jw;wt.dependencies={"sl-icon-button":Re};c([P(".tab-group")],wt.prototype,"tabGroup",2);c([P(".tab-group__body")],wt.prototype,"body",2);c([P(".tab-group__nav")],wt.prototype,"nav",2);c([P(".tab-group__indicator")],wt.prototype,"indicator",2);c([q()],wt.prototype,"hasScrollControls",2);c([m()],wt.prototype,"placement",2);c([m()],wt.prototype,"activation",2);c([m({attribute:"no-scroll-controls",type:Boolean})],wt.prototype,"noScrollControls",2);c([I("noScrollControls",{waitUntilFirstUpdate:!0})],wt.prototype,"updateScrollControls",1);c([I("placement",{waitUntilFirstUpdate:!0})],wt.prototype,"syncIndicator",1);var r_="sl-tab-group";wt.define("sl-tab-group");F({tagName:r_,elementClass:wt,react:R,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var n_=V`
  ${H}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,o_=0,Do=class extends D{constructor(){super(...arguments),this.attrId=++o_,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${K({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Do.styles=n_;c([m({reflect:!0})],Do.prototype,"name",2);c([m({type:Boolean,reflect:!0})],Do.prototype,"active",2);c([I("active")],Do.prototype,"handleActiveChange",1);var i_="sl-tab-panel";Do.define("sl-tab-panel");F({tagName:i_,elementClass:Do,react:R,events:{},displayName:"SlTabPanel"});var s_=V`
  ${H}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Vr=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return A`
      <span
        part="base"
        class=${K({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?A`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Vr.styles=s_;Vr.dependencies={"sl-icon-button":Re};c([m({reflect:!0})],Vr.prototype,"variant",2);c([m({reflect:!0})],Vr.prototype,"size",2);c([m({type:Boolean,reflect:!0})],Vr.prototype,"pill",2);c([m({type:Boolean})],Vr.prototype,"removable",2);var a_="sl-tag";Vr.define("sl-tag");F({tagName:a_,elementClass:Vr,react:R,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var us=V`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,l_=V`
  ${H}
  ${us}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Ot=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function c_(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var re=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${K({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${M(this.name)}
              .value=${Un(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              rows=${M(this.rows)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              autocapitalize=${M(this.autocapitalize)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${M(this.spellcheck)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=l_;c([P(".textarea__control")],re.prototype,"input",2);c([q()],re.prototype,"hasFocus",2);c([m()],re.prototype,"title",2);c([m()],re.prototype,"name",2);c([m()],re.prototype,"value",2);c([m({reflect:!0})],re.prototype,"size",2);c([m({type:Boolean,reflect:!0})],re.prototype,"filled",2);c([m()],re.prototype,"label",2);c([m({attribute:"help-text"})],re.prototype,"helpText",2);c([m()],re.prototype,"placeholder",2);c([m({type:Number})],re.prototype,"rows",2);c([m()],re.prototype,"resize",2);c([m({type:Boolean,reflect:!0})],re.prototype,"disabled",2);c([m({type:Boolean,reflect:!0})],re.prototype,"readonly",2);c([m({reflect:!0})],re.prototype,"form",2);c([m({type:Boolean,reflect:!0})],re.prototype,"required",2);c([m({type:Number})],re.prototype,"minlength",2);c([m({type:Number})],re.prototype,"maxlength",2);c([m()],re.prototype,"autocapitalize",2);c([m()],re.prototype,"autocorrect",2);c([m()],re.prototype,"autocomplete",2);c([m({type:Boolean})],re.prototype,"autofocus",2);c([m()],re.prototype,"enterkeyhint",2);c([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],re.prototype,"spellcheck",2);c([m()],re.prototype,"inputmode",2);c([Kn()],re.prototype,"defaultValue",2);c([I("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);c([I("rows",{waitUntilFirstUpdate:!0})],re.prototype,"handleRowsChange",1);c([I("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1);var u_="sl-textarea";re.define("sl-textarea");F({tagName:u_,elementClass:re,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var d_=V`
  ${H}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,al=class extends D{render(){return A` <slot></slot> `}};al.styles=d_;var h_="sl-visually-hidden";al.define("sl-visually-hidden");F({tagName:h_,elementClass:al,react:R,events:{},displayName:"SlVisuallyHidden"});var p_=V`
  ${H}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Oe(e,t,r){const n=o=>Object.is(o,-0)?0:o;return e<t?n(t):e>r?n(r):n(e)}function Rp(e,t=!1){function r(i){const s=i.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(u=>u.selected),a=s.every(u=>!u.selected&&!u.indeterminate);i.selected=l,i.indeterminate=!l&&!a}}function n(i){const s=i.parentElement;wo.isTreeItem(s)&&(r(s),n(s))}function o(i){for(const s of i.getChildrenItems())s.selected=t?i.selected||s.selected:!s.disabled&&i.selected,o(s);t&&r(i)}o(e),n(e)}var yn=class extends D{constructor(){super(),this.selection="single",this.localize=new ne(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(wo.isTreeItem),n=[...t.removedNodes].filter(wo.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),wo.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const n=r.cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),n.setAttribute("data-default",""),n.slot=`${e}-icon`,n}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Rp(e);else if(this.selection==="single"||e.isLeaf){const n=this.getAllTreeItems();for(const o of n)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(n=>!t.includes(n)))&&Promise.all(r.map(n=>n.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var i;return["input","textarea"].includes((i=o==null?void 0:o.tagName)==null?void 0:i.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",n=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(a=>a.matches(":focus")),i=t[o],s=a=>{const u=t[Oe(a,0,t.length-1)];this.focusItem(u)},l=a=>{i.expanded=a};e.key==="ArrowDown"?s(o+1):e.key==="ArrowUp"?s(o-1):r&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"?!i||i.disabled||i.expanded||i.isLeaf&&!i.lazy?s(o+1):l(!0):r&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"?!i||i.disabled||i.isLeaf||!i.expanded?s(o-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(i.disabled||this.selectItem(i))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),n=e.composedPath().some(o=>{var i;return(i=o==null?void 0:o.classList)==null?void 0:i.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(n?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Rp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var n;if(r.disabled)return!1;const o=(n=r.parentElement)==null?void 0:n.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(r),!t.has(r)})}render(){return A`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};yn.styles=p_;c([P("slot:not([name])")],yn.prototype,"defaultSlot",2);c([P("slot[name=expand-icon]")],yn.prototype,"expandedIconSlot",2);c([P("slot[name=collapse-icon]")],yn.prototype,"collapsedIconSlot",2);c([m()],yn.prototype,"selection",2);c([I("selection")],yn.prototype,"handleSelectionChange",1);var f_="sl-tree";yn.define("sl-tree");F({tagName:f_,elementClass:yn,react:R,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var m_=V`
  ${H}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e0="important",g_=" !"+e0,ft=as(class extends ls{constructor(e){var t;if(super(e),e.type!==gr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const n of this.ut)t[n]==null&&(this.ut.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ut.add(n);const i=typeof o=="string"&&o.endsWith(g_);n.includes("-")||i?r.setProperty(n,i?o.slice(0,-11):o,i?e0:""):r[n]=o}}return At}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fu=class extends ls{constructor(t){if(super(t),this.et=be,t.type!==gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===be||t==null)return this.vt=void 0,this.et=t;if(t===At)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}};fu.directiveName="unsafeHTML",fu.resultType=1;const na=as(fu);var et=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:o}=this.rating.getBoundingClientRect(),i=t?this.roundToPrecision((n-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return Oe(i,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",n=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==n&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,A`
      <div
        part="base"
        class=${K({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(n=>r>n&&r<n+1?A`
                <span
                  class=${K({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ft({clipPath:e?`inset(0 ${(r-n)*100}% 0 0)`:`inset(0 0 0 ${(r-n)*100}%)`})}
                  >
                    ${na(this.getSymbol(n+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ft({clipPath:e?`inset(0 0 0 ${100-(r-n)*100}%)`:`inset(0 ${100-(r-n)*100}% 0 0)`})}
                  >
                    ${na(this.getSymbol(n+1))}
                  </div>
                </span>
              `:A`
              <span
                class=${K({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1,"rating__symbol--active":r>=n+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${na(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};et.styles=m_;et.dependencies={"sl-icon":ue};c([P(".rating")],et.prototype,"rating",2);c([q()],et.prototype,"hoverValue",2);c([q()],et.prototype,"isHovering",2);c([m()],et.prototype,"label",2);c([m({type:Number})],et.prototype,"value",2);c([m({type:Number})],et.prototype,"max",2);c([m({type:Number})],et.prototype,"precision",2);c([m({type:Boolean,reflect:!0})],et.prototype,"readonly",2);c([m({type:Boolean,reflect:!0})],et.prototype,"disabled",2);c([m()],et.prototype,"getSymbol",2);c([Dg({passive:!0})],et.prototype,"handleTouchMove",1);c([I("hoverValue")],et.prototype,"handleHoverValueChange",1);c([I("isHovering")],et.prototype,"handleIsHoveringChange",1);var v_="sl-rating";et.define("sl-rating");var y_=F({tagName:v_,elementClass:et,react:R,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"}),b_=y_,w_=V`
  ${H}
  ${us}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,xe=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",i=t*e;if(o){const s=`${t-i}px + ${e} * ${n}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${n} / 2))`}else{const s=`${i}px - ${e} * ${n}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${n} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${K({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${M(this.name)}
              ?disabled=${this.disabled}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Un(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?A`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};xe.styles=w_;c([P(".range__control")],xe.prototype,"input",2);c([P(".range__tooltip")],xe.prototype,"output",2);c([q()],xe.prototype,"hasFocus",2);c([q()],xe.prototype,"hasTooltip",2);c([m()],xe.prototype,"title",2);c([m()],xe.prototype,"name",2);c([m({type:Number})],xe.prototype,"value",2);c([m()],xe.prototype,"label",2);c([m({attribute:"help-text"})],xe.prototype,"helpText",2);c([m({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);c([m({type:Number})],xe.prototype,"min",2);c([m({type:Number})],xe.prototype,"max",2);c([m({type:Number})],xe.prototype,"step",2);c([m()],xe.prototype,"tooltip",2);c([m({attribute:!1})],xe.prototype,"tooltipFormatter",2);c([m({reflect:!0})],xe.prototype,"form",2);c([Kn()],xe.prototype,"defaultValue",2);c([Dg({passive:!0})],xe.prototype,"handleThumbDragStart",1);c([I("value",{waitUntilFirstUpdate:!0})],xe.prototype,"handleValueChange",1);c([I("disabled",{waitUntilFirstUpdate:!0})],xe.prototype,"handleDisabledChange",1);c([I("hasTooltip",{waitUntilFirstUpdate:!0})],xe.prototype,"syncRange",1);var __="sl-range";xe.define("sl-range");F({tagName:__,elementClass:xe,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var x_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ur=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:o}=x_.find(i=>Math.abs(r)<i.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let i;n==="minute"?i=Ms("second"):n==="hour"?i=Ms("minute"):n==="day"?i=Ms("hour"):i=Ms("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),i)}return A` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};c([q()],Ur.prototype,"isoTime",2);c([q()],Ur.prototype,"relativeTime",2);c([q()],Ur.prototype,"titleTime",2);c([m()],Ur.prototype,"date",2);c([m()],Ur.prototype,"format",2);c([m()],Ur.prototype,"numeric",2);c([m({type:Boolean})],Ur.prototype,"sync",2);function Ms(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var k_="sl-relative-time";Ur.define("sl-relative-time");F({tagName:k_,elementClass:Ur,react:R,events:{},displayName:"SlRelativeTime"});var S_=V`
  ${H}

  :host {
    display: contents;
  }
`,ds=class extends D{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};ds.styles=S_;c([m({type:Boolean,reflect:!0})],ds.prototype,"disabled",2);c([I("disabled",{waitUntilFirstUpdate:!0})],ds.prototype,"handleDisabledChange",1);var C_="sl-resize-observer";ds.define("sl-resize-observer");F({tagName:C_,elementClass:ds,react:R,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var $_=V`
  ${H}
  ${us}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Y=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new ne(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,n=t.closest("sl-icon-button")!==null;if(!(r||n)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),i=o.indexOf(this.currentOption);let s=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=i+1,s>o.length-1&&(s=0)):e.key==="ArrowUp"?(s=i-1,s<0&&(s=o.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=o.length-1),this.setCurrentOption(o[s])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of o)if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),n=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(n=>r.push(n.value)),this.setSelectedOptions(e.filter(n=>t.includes(n.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(n=>n.selected=!1),r.length&&r.forEach(n=>n.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,n;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(n=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?n:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return A`<div @sl-remove=${n=>this.handleTagRemove(n,e)}>
          ${typeof r=="string"?na(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Me(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=we(this,"select.show",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.currentOption&&pu(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Me(this);const{keyframes:e,options:t}=we(this,"select.hide",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ut(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value.length===0;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${K({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?A`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?A`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=$_;Y.dependencies={"sl-icon":ue,"sl-popup":se,"sl-tag":Vr};c([P(".select")],Y.prototype,"popup",2);c([P(".select__combobox")],Y.prototype,"combobox",2);c([P(".select__display-input")],Y.prototype,"displayInput",2);c([P(".select__value-input")],Y.prototype,"valueInput",2);c([P(".select__listbox")],Y.prototype,"listbox",2);c([q()],Y.prototype,"hasFocus",2);c([q()],Y.prototype,"displayLabel",2);c([q()],Y.prototype,"currentOption",2);c([q()],Y.prototype,"selectedOptions",2);c([m()],Y.prototype,"name",2);c([m({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Y.prototype,"value",2);c([Kn()],Y.prototype,"defaultValue",2);c([m({reflect:!0})],Y.prototype,"size",2);c([m()],Y.prototype,"placeholder",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"multiple",2);c([m({attribute:"max-options-visible",type:Number})],Y.prototype,"maxOptionsVisible",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);c([m({type:Boolean})],Y.prototype,"clearable",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"open",2);c([m({type:Boolean})],Y.prototype,"hoist",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"filled",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"pill",2);c([m()],Y.prototype,"label",2);c([m({reflect:!0})],Y.prototype,"placement",2);c([m({attribute:"help-text"})],Y.prototype,"helpText",2);c([m({reflect:!0})],Y.prototype,"form",2);c([m({type:Boolean,reflect:!0})],Y.prototype,"required",2);c([m()],Y.prototype,"getTag",2);c([I("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);c([I("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);c([I("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);ae("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var E_="sl-select";Y.define("sl-select");F({tagName:E_,elementClass:Y,react:R,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var z_=V`
  ${H}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ll=class extends D{constructor(){super(...arguments),this.effect="none"}render(){return A`
      <div
        part="base"
        class=${K({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ll.styles=z_;c([m()],ll.prototype,"effect",2);var A_="sl-skeleton";ll.define("sl-skeleton");F({tagName:A_,elementClass:ll,react:R,events:{},displayName:"SlSkeleton"});var T_="sl-spinner";cs.define("sl-spinner");F({tagName:T_,elementClass:cs,react:R,events:{},displayName:"SlSpinner"});var I_=V`
  ${H}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Si(e,t){function r(o){const i=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=i.left+s.scrollX,a=i.top+s.scrollY,u=o.pageX-l,p=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,p)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var _t=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Si(this,{onMove:(r,n)=>{let o=this.vertical?n:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),o>=l-this.snapThreshold&&o<=l+this.snapThreshold&&(o=l)}),this.position=Oe(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Oe(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${n}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${o}`,this.style[t]="",A`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${M(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};_t.styles=I_;c([P(".divider")],_t.prototype,"divider",2);c([m({type:Number,reflect:!0})],_t.prototype,"position",2);c([m({attribute:"position-in-pixels",type:Number})],_t.prototype,"positionInPixels",2);c([m({type:Boolean,reflect:!0})],_t.prototype,"vertical",2);c([m({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);c([m()],_t.prototype,"primary",2);c([m()],_t.prototype,"snap",2);c([m({type:Number,attribute:"snap-threshold"})],_t.prototype,"snapThreshold",2);c([I("position")],_t.prototype,"handlePositionChange",1);c([I("positionInPixels")],_t.prototype,"handlePositionInPixelsChange",1);c([I("vertical")],_t.prototype,"handleVerticalChange",1);var L_="sl-split-panel";_t.define("sl-split-panel");F({tagName:L_,elementClass:_t,react:R,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var P_=V`
  ${H}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Dt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return A`
      <div
        part="base"
        class=${K({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Dt.styles=P_;Dt.dependencies={"sl-icon":ue};c([P(".option__label")],Dt.prototype,"defaultSlot",2);c([q()],Dt.prototype,"current",2);c([q()],Dt.prototype,"selected",2);c([q()],Dt.prototype,"hasHover",2);c([m({reflect:!0})],Dt.prototype,"value",2);c([m({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);c([I("disabled")],Dt.prototype,"handleDisabledChange",1);c([I("selected")],Dt.prototype,"handleSelectedChange",1);c([I("value")],Dt.prototype,"handleValueChange",1);var N_="sl-option";Dt.define("sl-option");F({tagName:N_,elementClass:Dt,react:R,events:{},displayName:"SlOption"});var O_="sl-popup";se.define("sl-popup");F({tagName:O_,elementClass:se,react:R,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var D_=V`
  ${H}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Mo=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return A`
      <div
        part="base"
        class=${K({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ft({width:`${this.value}%`})}>
          ${this.indeterminate?"":A` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Mo.styles=D_;c([m({type:Number,reflect:!0})],Mo.prototype,"value",2);c([m({type:Boolean,reflect:!0})],Mo.prototype,"indeterminate",2);c([m()],Mo.prototype,"label",2);var M_="sl-progress-bar";Mo.define("sl-progress-bar");F({tagName:M_,elementClass:Mo,react:R,events:{},displayName:"SlProgressBar"});var R_=V`
  ${H}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,lr=class extends D{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return A`
      <span
        part="base"
        class=${K({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?A` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};lr.styles=R_;lr.dependencies={"sl-icon":ue};c([q()],lr.prototype,"checked",2);c([q()],lr.prototype,"hasFocus",2);c([m()],lr.prototype,"value",2);c([m({reflect:!0})],lr.prototype,"size",2);c([m({type:Boolean,reflect:!0})],lr.prototype,"disabled",2);c([I("checked")],lr.prototype,"handleCheckedChange",1);c([I("disabled",{waitUntilFirstUpdate:!0})],lr.prototype,"handleDisabledChange",1);var F_="sl-radio";lr.define("sl-radio");F({tagName:F_,elementClass:lr,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var B_=V`
  ${H}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,qn=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,n=r-this.value/100*r;this.indicatorOffset=`${n}px`}}render(){return A`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};qn.styles=B_;c([P(".progress-ring__indicator")],qn.prototype,"indicator",2);c([q()],qn.prototype,"indicatorOffset",2);c([m({type:Number,reflect:!0})],qn.prototype,"value",2);c([m()],qn.prototype,"label",2);var V_="sl-progress-ring";qn.define("sl-progress-ring");F({tagName:V_,elementClass:qn,react:R,events:{},displayName:"SlProgressRing"});var U_=V`
  ${H}

  :host {
    display: inline-block;
  }
`;let t0=null;class r0{}r0.render=function(e,t){t0(e,t)};self.QrCreator=r0;(function(e){function t(l,a,u,p){var d={},h=e(u,a);h.u(l),h.J(),p=p||0;var g=h.h(),y=h.h()+2*p;return d.text=l,d.level=a,d.version=u,d.O=y,d.a=function(w,S){return w-=p,S-=p,0>w||w>=g||0>S||S>=g?!1:h.a(w,S)},d}function r(l,a,u,p,d,h,g,y,w,S){function v(f,b,_,x,k,C,$){f?(l.lineTo(b+C,_+$),l.arcTo(b,_,x,k,h)):l.lineTo(b,_)}g?l.moveTo(a+h,u):l.moveTo(a,u),v(y,p,u,p,d,-h,0),v(w,p,d,a,d,0,-h),v(S,a,d,a,u,h,0),v(g,a,u,p,u,0,h)}function n(l,a,u,p,d,h,g,y,w,S){function v(f,b,_,x){l.moveTo(f+_,b),l.lineTo(f,b),l.lineTo(f,b+x),l.arcTo(f,b,f+_,b,h)}g&&v(a,u,h,h),y&&v(p,u,-h,h),w&&v(p,d,-h,-h),S&&v(a,d,h,-h)}function o(l,a){var u=a.fill;if(typeof u=="string")l.fillStyle=u;else{var p=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*a.size)),p==="linear-gradient")var h=l.createLinearGradient.apply(l,u);else if(p==="radial-gradient")h=l.createRadialGradient.apply(l,u);else throw Error("Unsupported fill");d.forEach(([g,y])=>{h.addColorStop(g,y)}),l.fillStyle=h}}function i(l,a){e:{var u=a.text,p=a.v,d=a.N,h=a.K,g=a.P;for(d=Math.max(1,d||1),h=Math.min(40,h||40);d<=h;d+=1)try{var y=t(u,p,d,g);break e}catch{}y=void 0}if(!y)return null;for(u=l.getContext("2d"),a.background&&(u.fillStyle=a.background,u.fillRect(a.left,a.top,a.size,a.size)),p=y.O,h=a.size/p,u.beginPath(),g=0;g<p;g+=1)for(d=0;d<p;d+=1){var w=u,S=a.left+d*h,v=a.top+g*h,f=g,b=d,_=y.a,x=S+h,k=v+h,C=f-1,$=f+1,z=b-1,E=b+1,B=Math.floor(Math.min(.5,Math.max(0,a.R))*h),U=_(f,b),ie=_(C,z),ee=_(C,b);C=_(C,E);var de=_(f,E);E=_($,E),b=_($,b),$=_($,z),f=_(f,z),S=Math.round(S),v=Math.round(v),x=Math.round(x),k=Math.round(k),U?r(w,S,v,x,k,B,!ee&&!f,!ee&&!de,!b&&!de,!b&&!f):n(w,S,v,x,k,B,ee&&f&&ie,ee&&de&&C,b&&de&&E,b&&f&&$)}return o(u,a),u.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};t0=function(l,a){var u={};Object.assign(u,s,l),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,a instanceof HTMLCanvasElement?((a.width!==u.size||a.height!==u.size)&&(a.width=u.size,a.height=u.size),a.getContext("2d").clearRect(0,0,a.width,a.height),i(a,u)):(l=document.createElement("canvas"),l.width=u.size,l.height=u.size,u=i(l,u),a.appendChild(u))}})(function(){function e(a){var u=r.s(a);return{S:function(){return 4},b:function(){return u.length},write:function(p){for(var d=0;d<u.length;d+=1)p.put(u[d],8)}}}function t(){var a=[],u=0,p={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,h){for(var g=0;g<h;g+=1)p.m((d>>>h-g-1&1)==1)},f:function(){return u},m:function(d){var h=Math.floor(u/8);a.length<=h&&a.push(0),d&&(a[h]|=128>>>u%8),u+=1}};return p}function r(a,u){function p(f,b){for(var _=-1;7>=_;_+=1)if(!(-1>=f+_||y<=f+_))for(var x=-1;7>=x;x+=1)-1>=b+x||y<=b+x||(g[f+_][b+x]=0<=_&&6>=_&&(x==0||x==6)||0<=x&&6>=x&&(_==0||_==6)||2<=_&&4>=_&&2<=x&&4>=x)}function d(f,b){for(var _=y=4*a+17,x=Array(_),k=0;k<_;k+=1){x[k]=Array(_);for(var C=0;C<_;C+=1)x[k][C]=null}for(g=x,p(0,0),p(y-7,0),p(0,y-7),_=i.G(a),x=0;x<_.length;x+=1)for(k=0;k<_.length;k+=1){C=_[x];var $=_[k];if(g[C][$]==null)for(var z=-2;2>=z;z+=1)for(var E=-2;2>=E;E+=1)g[C+z][$+E]=z==-2||z==2||E==-2||E==2||z==0&&E==0}for(_=8;_<y-8;_+=1)g[_][6]==null&&(g[_][6]=_%2==0);for(_=8;_<y-8;_+=1)g[6][_]==null&&(g[6][_]=_%2==0);for(_=i.w(h<<3|b),x=0;15>x;x+=1)k=!f&&(_>>x&1)==1,g[6>x?x:8>x?x+1:y-15+x][8]=k,g[8][8>x?y-x-1:9>x?15-x:14-x]=k;if(g[y-8][8]=!f,7<=a){for(_=i.A(a),x=0;18>x;x+=1)k=!f&&(_>>x&1)==1,g[Math.floor(x/3)][x%3+y-8-3]=k;for(x=0;18>x;x+=1)k=!f&&(_>>x&1)==1,g[x%3+y-8-3][Math.floor(x/3)]=k}if(w==null){for(f=l.I(a,h),_=t(),x=0;x<S.length;x+=1)k=S[x],_.put(4,4),_.put(k.b(),i.f(4,a)),k.write(_);for(x=k=0;x<f.length;x+=1)k+=f[x].j;if(_.f()>8*k)throw Error("code length overflow. ("+_.f()+">"+8*k+")");for(_.f()+4<=8*k&&_.put(0,4);_.f()%8!=0;)_.m(!1);for(;!(_.f()>=8*k)&&(_.put(236,8),!(_.f()>=8*k));)_.put(17,8);var B=0;for(k=x=0,C=Array(f.length),$=Array(f.length),z=0;z<f.length;z+=1){var U=f[z].j,ie=f[z].o-U;for(x=Math.max(x,U),k=Math.max(k,ie),C[z]=Array(U),E=0;E<C[z].length;E+=1)C[z][E]=255&_.B()[E+B];for(B+=U,E=i.C(ie),U=n(C[z],E.b()-1).l(E),$[z]=Array(E.b()-1),E=0;E<$[z].length;E+=1)ie=E+U.b()-$[z].length,$[z][E]=0<=ie?U.c(ie):0}for(E=_=0;E<f.length;E+=1)_+=f[E].o;for(_=Array(_),E=B=0;E<x;E+=1)for(z=0;z<f.length;z+=1)E<C[z].length&&(_[B]=C[z][E],B+=1);for(E=0;E<k;E+=1)for(z=0;z<f.length;z+=1)E<$[z].length&&(_[B]=$[z][E],B+=1);w=_}for(f=w,_=-1,x=y-1,k=7,C=0,b=i.F(b),$=y-1;0<$;$-=2)for($==6&&--$;;){for(z=0;2>z;z+=1)g[x][$-z]==null&&(E=!1,C<f.length&&(E=(f[C]>>>k&1)==1),b(x,$-z)&&(E=!E),g[x][$-z]=E,--k,k==-1&&(C+=1,k=7));if(x+=_,0>x||y<=x){x-=_,_=-_;break}}}var h=o[u],g=null,y=0,w=null,S=[],v={u:function(f){f=e(f),S.push(f),w=null},a:function(f,b){if(0>f||y<=f||0>b||y<=b)throw Error(f+","+b);return g[f][b]},h:function(){return y},J:function(){for(var f=0,b=0,_=0;8>_;_+=1){d(!0,_);var x=i.D(v);(_==0||f>x)&&(f=x,b=_)}d(!1,b)}};return v}function n(a,u){if(typeof a.length>"u")throw Error(a.length+"/"+u);var p=function(){for(var h=0;h<a.length&&a[h]==0;)h+=1;for(var g=Array(a.length-h+u),y=0;y<a.length-h;y+=1)g[y]=a[y+h];return g}(),d={c:function(h){return p[h]},b:function(){return p.length},multiply:function(h){for(var g=Array(d.b()+h.b()-1),y=0;y<d.b();y+=1)for(var w=0;w<h.b();w+=1)g[y+w]^=s.i(s.g(d.c(y))+s.g(h.c(w)));return n(g,0)},l:function(h){if(0>d.b()-h.b())return d;for(var g=s.g(d.c(0))-s.g(h.c(0)),y=Array(d.b()),w=0;w<d.b();w+=1)y[w]=d.c(w);for(w=0;w<h.b();w+=1)y[w]^=s.i(s.g(h.c(w))+g);return n(y,0).l(h)}};return d}r.s=function(a){for(var u=[],p=0;p<a.length;p++){var d=a.charCodeAt(p);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(p++,d=65536+((d&1023)<<10|a.charCodeAt(p)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var o={L:1,M:0,Q:3,H:2},i=function(){function a(d){for(var h=0;d!=0;)h+=1,d>>>=1;return h}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(d){for(var h=d<<10;0<=a(h)-a(1335);)h^=1335<<a(h)-a(1335);return(d<<10|h)^21522},A:function(d){for(var h=d<<12;0<=a(h)-a(7973);)h^=7973<<a(h)-a(7973);return d<<12|h},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(h,g){return(h+g)%2==0};case 1:return function(h){return h%2==0};case 2:return function(h,g){return g%3==0};case 3:return function(h,g){return(h+g)%3==0};case 4:return function(h,g){return(Math.floor(h/2)+Math.floor(g/3))%2==0};case 5:return function(h,g){return h*g%2+h*g%3==0};case 6:return function(h,g){return(h*g%2+h*g%3)%2==0};case 7:return function(h,g){return(h*g%3+(h+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var h=n([1],0),g=0;g<d;g+=1)h=h.multiply(n([1,s.i(g)],0));return h},f:function(d,h){if(d!=4||1>h||40<h)throw Error("mode: "+d+"; type: "+h);return 10>h?8:16},D:function(d){for(var h=d.h(),g=0,y=0;y<h;y+=1)for(var w=0;w<h;w+=1){for(var S=0,v=d.a(y,w),f=-1;1>=f;f+=1)if(!(0>y+f||h<=y+f))for(var b=-1;1>=b;b+=1)0>w+b||h<=w+b||(f!=0||b!=0)&&v==d.a(y+f,w+b)&&(S+=1);5<S&&(g+=3+S-5)}for(y=0;y<h-1;y+=1)for(w=0;w<h-1;w+=1)S=0,d.a(y,w)&&(S+=1),d.a(y+1,w)&&(S+=1),d.a(y,w+1)&&(S+=1),d.a(y+1,w+1)&&(S+=1),(S==0||S==4)&&(g+=3);for(y=0;y<h;y+=1)for(w=0;w<h-6;w+=1)d.a(y,w)&&!d.a(y,w+1)&&d.a(y,w+2)&&d.a(y,w+3)&&d.a(y,w+4)&&!d.a(y,w+5)&&d.a(y,w+6)&&(g+=40);for(w=0;w<h;w+=1)for(y=0;y<h-6;y+=1)d.a(y,w)&&!d.a(y+1,w)&&d.a(y+2,w)&&d.a(y+3,w)&&d.a(y+4,w)&&!d.a(y+5,w)&&d.a(y+6,w)&&(g+=40);for(w=S=0;w<h;w+=1)for(y=0;y<h;y+=1)d.a(y,w)&&(S+=1);return g+=Math.abs(100*S/h/h-50)/5*10}};return p}(),s=function(){for(var a=Array(256),u=Array(256),p=0;8>p;p+=1)a[p]=1<<p;for(p=8;256>p;p+=1)a[p]=a[p-4]^a[p-5]^a[p-6]^a[p-8];for(p=0;255>p;p+=1)u[a[p]]=p;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,h){switch(h){case o.L:return u[4*(d-1)];case o.M:return u[4*(d-1)+1];case o.Q:return u[4*(d-1)+2];case o.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(d,h){var g=a(d,h);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+h);d=g.length/3,h=[];for(var y=0;y<d;y+=1)for(var w=g[3*y],S=g[3*y+1],v=g[3*y+2],f=0;f<w;f+=1){var b=v,_={};_.o=S,_.j=b,h.push(_)}return h}};return p}();return r}());const j_=QrCreator;var Wt=class extends D{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&j_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return A`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ft({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Wt.styles=U_;c([P("canvas")],Wt.prototype,"canvas",2);c([m()],Wt.prototype,"value",2);c([m()],Wt.prototype,"label",2);c([m({type:Number})],Wt.prototype,"size",2);c([m()],Wt.prototype,"fill",2);c([m()],Wt.prototype,"background",2);c([m({type:Number})],Wt.prototype,"radius",2);c([m({attribute:"error-correction"})],Wt.prototype,"errorCorrection",2);c([I(["background","errorCorrection","fill","radius","size","value"])],Wt.prototype,"generate",1);var H_="sl-qr-code";Wt.define("sl-qr-code");F({tagName:H_,elementClass:Wt,react:R,events:{},displayName:"SlQrCode"});var n0=V`
  ${H}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,W_=V`
  ${n0}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Kt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return _i`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${K({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${M(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Kt.styles=W_;c([P(".button")],Kt.prototype,"input",2);c([P(".hidden-input")],Kt.prototype,"hiddenInput",2);c([q()],Kt.prototype,"hasFocus",2);c([m({type:Boolean,reflect:!0})],Kt.prototype,"checked",2);c([m()],Kt.prototype,"value",2);c([m({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);c([m({reflect:!0})],Kt.prototype,"size",2);c([m({type:Boolean,reflect:!0})],Kt.prototype,"pill",2);c([I("disabled",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleDisabledChange",1);var K_="sl-radio-button";Kt.define("sl-radio-button");F({tagName:K_,elementClass:Kt,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var q_=V`
  ${H}
  ${us}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Q_=V`
  ${H}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,bn=class extends D{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ti(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=ti(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=ti(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=ti(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=ti(t);n&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",r===0),n.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),n.classList.toggle("sl-button-group__button--last",r===e.length-1),n.classList.toggle("sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return A`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};bn.styles=Q_;c([P("slot")],bn.prototype,"defaultSlot",2);c([q()],bn.prototype,"disableRole",2);c([m()],bn.prototype,"label",2);function ti(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Qe=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this),this.hasSlotController=new Ot(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Tw:e?Aw:sl}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),n=this.value;t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),n=(t=r.find(l=>l.checked))!=null?t:r[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,i=this.value;let s=r.indexOf(n)+o;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(n=>n.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async n=>{await n.updateComplete,n.checked=n.value===this.value,n.size=this.size})),this.hasButtonGroup=r.some(n=>n.tagName.toLowerCase()==="sl-radio-button"),!r.some(n=>n.checked))if(this.hasButtonGroup){const n=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");n&&(n.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const n=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");n&&(n.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=A`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return A`
      <fieldset
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?A`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Qe.styles=q_;Qe.dependencies={"sl-button-group":bn};c([P("slot:not([name])")],Qe.prototype,"defaultSlot",2);c([P(".radio-group__validation-input")],Qe.prototype,"validationInput",2);c([q()],Qe.prototype,"hasButtonGroup",2);c([q()],Qe.prototype,"errorMessage",2);c([q()],Qe.prototype,"defaultValue",2);c([m()],Qe.prototype,"label",2);c([m({attribute:"help-text"})],Qe.prototype,"helpText",2);c([m()],Qe.prototype,"name",2);c([m({reflect:!0})],Qe.prototype,"value",2);c([m({reflect:!0})],Qe.prototype,"size",2);c([m({reflect:!0})],Qe.prototype,"form",2);c([m({type:Boolean,reflect:!0})],Qe.prototype,"required",2);c([I("size",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleSizeChange",1);c([I("value")],Qe.prototype,"handleValueChange",1);var G_="sl-radio-group";Qe.define("sl-radio-group");F({tagName:G_,elementClass:Qe,react:R,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var X_="sl-icon-button";Re.define("sl-icon-button");F({tagName:X_,elementClass:Re,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Y_=V`
  ${H}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,wn=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Si(this.base,{onMove:n=>{this.position=parseFloat(Oe(n/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(o-=n),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(o+=n),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Oe(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        id="image-comparer"
        class=${K({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ft({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ft({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};wn.styles=Y_;wn.scopedElement={"sl-icon":ue};c([P(".image-comparer")],wn.prototype,"base",2);c([P(".image-comparer__handle")],wn.prototype,"handle",2);c([m({type:Number,reflect:!0})],wn.prototype,"position",2);c([I("position",{waitUntilFirstUpdate:!0})],wn.prototype,"handlePositionChange",1);var Z_="sl-image-comparer";wn.define("sl-image-comparer");F({tagName:Z_,elementClass:wn,react:R,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var J_=V`
  ${H}

  :host {
    display: block;
  }
`,Jl=new Map;function ex(e,t="cors"){const r=Jl.get(e);if(r!==void 0)return Promise.resolve(r);const n=fetch(e,{mode:t}).then(async o=>{const i={ok:o.ok,status:o.status,html:await o.text()};return Jl.set(e,i),i});return Jl.set(e,n),n}var Qn=class extends D{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await ex(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return A`<slot></slot>`}};Qn.styles=J_;c([m()],Qn.prototype,"src",2);c([m()],Qn.prototype,"mode",2);c([m({attribute:"allow-scripts",type:Boolean})],Qn.prototype,"allowScripts",2);c([I("src")],Qn.prototype,"handleSrcChange",1);var tx="sl-include";Qn.define("sl-include");F({tagName:tx,elementClass:Qn,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var rx=V`
  ${H}
  ${us}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,G=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${K({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${M(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Un(this.value)}
              autocapitalize=${M(this.autocapitalize)}
              autocomplete=${M(this.autocomplete)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${M(this.pattern)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?A`
                  <button
                    part="clear-button"
                    class=${K({input__clear:!0,"input__clear--visible":i})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?A`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:A`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=rx;G.dependencies={"sl-icon":ue};c([P(".input__control")],G.prototype,"input",2);c([q()],G.prototype,"hasFocus",2);c([m()],G.prototype,"title",2);c([m({reflect:!0})],G.prototype,"type",2);c([m()],G.prototype,"name",2);c([m()],G.prototype,"value",2);c([Kn()],G.prototype,"defaultValue",2);c([m({reflect:!0})],G.prototype,"size",2);c([m({type:Boolean,reflect:!0})],G.prototype,"filled",2);c([m({type:Boolean,reflect:!0})],G.prototype,"pill",2);c([m()],G.prototype,"label",2);c([m({attribute:"help-text"})],G.prototype,"helpText",2);c([m({type:Boolean})],G.prototype,"clearable",2);c([m({type:Boolean,reflect:!0})],G.prototype,"disabled",2);c([m()],G.prototype,"placeholder",2);c([m({type:Boolean,reflect:!0})],G.prototype,"readonly",2);c([m({attribute:"password-toggle",type:Boolean})],G.prototype,"passwordToggle",2);c([m({attribute:"password-visible",type:Boolean})],G.prototype,"passwordVisible",2);c([m({attribute:"no-spin-buttons",type:Boolean})],G.prototype,"noSpinButtons",2);c([m({reflect:!0})],G.prototype,"form",2);c([m({type:Boolean,reflect:!0})],G.prototype,"required",2);c([m()],G.prototype,"pattern",2);c([m({type:Number})],G.prototype,"minlength",2);c([m({type:Number})],G.prototype,"maxlength",2);c([m()],G.prototype,"min",2);c([m()],G.prototype,"max",2);c([m()],G.prototype,"step",2);c([m()],G.prototype,"autocapitalize",2);c([m()],G.prototype,"autocorrect",2);c([m()],G.prototype,"autocomplete",2);c([m({type:Boolean})],G.prototype,"autofocus",2);c([m()],G.prototype,"enterkeyhint",2);c([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],G.prototype,"spellcheck",2);c([m()],G.prototype,"inputmode",2);c([I("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);c([I("step",{waitUntilFirstUpdate:!0})],G.prototype,"handleStepChange",1);c([I("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);var nx="sl-input";G.define("sl-input");F({tagName:nx,elementClass:G,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var ox=V`
  ${H}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=(e,t)=>{var n;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(n=o._$AO)==null||n.call(o,t,!1),Ci(o,t);return!0},Ma=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},o0=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ax(t)}};function ix(e){this._$AN!==void 0?(Ma(this),this._$AM=e,o0(this)):this._$AM=e}function sx(e,t=!1,r=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=r;i<n.length;i++)Ci(n[i],!1),Ma(n[i]);else n!=null&&(Ci(n,!1),Ma(n));else Ci(this,e)}const ax=e=>{e.type==gr.CHILD&&(e._$AP??(e._$AP=sx),e._$AQ??(e._$AQ=ix))};class lx extends ls{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),o0(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),r&&(Ci(this,t),Ma(this))}setValue(t){if(Zg(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cx=()=>new ux;class ux{}const ec=new WeakMap,dx=as(class extends lx{render(e){return be}update(e,[t]){var n;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=(n=e.options)==null?void 0:n.host,this.ot(this.lt=e.element)),be}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let r=ec.get(t);r===void 0&&(r=new WeakMap,ec.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=ec.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var hx=class{constructor(e,t,r){this.popupRef=cx(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var o;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(o=n.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),o=n==null?void 0:n.assignedElements({flatten:!0}).filter(p=>p.localName==="sl-menu")[0],i=this.localize.dir()==="rtl";if(!o)return;const{left:s,top:l,width:a,height:u}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+u}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const n of t.assignedElements())if(r=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let n=1;n!==r.length;++n)r[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((o,i)=>{var s;const l=(s=t.get(i))!=null?s:new CSSUnitValue(0,"px"),u=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?A`
      <sl-popup
        ${dx(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:A` <slot name="submenu" hidden></slot> `}},Mt=class extends D{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ne(this),this.hasSlotController=new Ot(this,"submenu"),this.submenuController=new hx(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return c_(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${K({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};Mt.styles=ox;Mt.dependencies={"sl-icon":ue,"sl-popup":se};c([P("slot:not([name])")],Mt.prototype,"defaultSlot",2);c([P(".menu-item")],Mt.prototype,"menuItem",2);c([m()],Mt.prototype,"type",2);c([m({type:Boolean,reflect:!0})],Mt.prototype,"checked",2);c([m()],Mt.prototype,"value",2);c([m({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);c([I("checked")],Mt.prototype,"handleCheckedChange",1);c([I("disabled")],Mt.prototype,"handleDisabledChange",1);c([I("type")],Mt.prototype,"handleTypeChange",1);var px="sl-menu-item";Mt.define("sl-menu-item");F({tagName:px,elementClass:Mt,react:R,events:{},displayName:"SlMenuItem"});var fx=V`
  ${H}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,cl=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(o=>{var i;return t.includes(((i=o==null?void 0:o.getAttribute)==null?void 0:i.call(o,"role"))||"")});if(!r)return;const n=r;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let n=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};cl.styles=fx;c([P("slot")],cl.prototype,"defaultSlot",2);var mx="sl-menu";cl.define("sl-menu");F({tagName:mx,elementClass:cl,react:R,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var gx=V`
  ${H}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ad=class extends D{render(){return A` <slot part="base" class="menu-label"></slot> `}};Ad.styles=gx;var vx="sl-menu-label";Ad.define("sl-menu-label");F({tagName:vx,elementClass:Ad,react:R,events:{},displayName:"SlMenuLabel"});var yx=V`
  ${H}

  :host {
    display: contents;
  }
`,cr=class extends D{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return A` <slot></slot> `}};cr.styles=yx;c([m({reflect:!0})],cr.prototype,"attr",2);c([m({attribute:"attr-old-value",type:Boolean,reflect:!0})],cr.prototype,"attrOldValue",2);c([m({attribute:"char-data",type:Boolean,reflect:!0})],cr.prototype,"charData",2);c([m({attribute:"char-data-old-value",type:Boolean,reflect:!0})],cr.prototype,"charDataOldValue",2);c([m({attribute:"child-list",type:Boolean,reflect:!0})],cr.prototype,"childList",2);c([m({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);c([I("disabled")],cr.prototype,"handleDisabledChange",1);c([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],cr.prototype,"handleChange",1);var bx="sl-mutation-observer";cr.define("sl-mutation-observer");F({tagName:bx,elementClass:cr,react:R,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});function wx(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function _x(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!wx(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function xx(e){var t,r;const n=mu(e),o=(t=n[0])!=null?t:null,i=(r=n[n.length-1])!=null?r:null;return{start:o,end:i}}function mu(e){const t=[];function r(n){if(n instanceof Element){if(n.hasAttribute("inert"))return;!t.includes(n)&&_x(n)&&t.push(n);const o=i=>{var s;return((s=i.getRootNode({composed:!0}))==null?void 0:s.host)!==e};n instanceof HTMLSlotElement&&o(n)&&n.assignedElements({flatten:!0}).forEach(i=>{r(i)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)}[...n.children].forEach(o=>r(o))}return r(e),t.sort((n,o)=>{const i=Number(n.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-i})}function*i0(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*I1(i0(e.shadowRoot.activeElement))))}function kx(){return[...i0()].pop()}var ri=[],s0=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r,n;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=mu(this.element),i=kx();let s=o.findIndex(a=>a===i);if(s===-1){this.currentFocus=o[0],(r=this.currentFocus)==null||r.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;s+l>=o.length?s=0:s+l<0?s=o.length-1:s+=l,this.currentFocus=o[s],(n=this.currentFocus)==null||n.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){ri.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ri=ri.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ri[ri.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=mu(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],n=this.tabDirection==="forward"?t:r;typeof(n==null?void 0:n.focus)=="function"&&(this.currentFocus=n,n.focus({preventScroll:!0}))}}}},Sx=V`
  ${H}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ur=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer"),this.localize=new ne(this),this.modal=new s0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),xi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ki(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"dialog.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),xi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Me(this.dialog),Me(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,"dialog.show",{dir:this.localize.dir()}),r=we(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Me(this.dialog),Me(this.overlay)]);const e=we(this,"dialog.hide",{dir:this.localize.dir()}),t=we(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Te(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ki(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${K({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":A`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ur.styles=Sx;ur.dependencies={"sl-icon-button":Re};c([P(".dialog")],ur.prototype,"dialog",2);c([P(".dialog__panel")],ur.prototype,"panel",2);c([P(".dialog__overlay")],ur.prototype,"overlay",2);c([m({type:Boolean,reflect:!0})],ur.prototype,"open",2);c([m({reflect:!0})],ur.prototype,"label",2);c([m({attribute:"no-header",type:Boolean,reflect:!0})],ur.prototype,"noHeader",2);c([I("open",{waitUntilFirstUpdate:!0})],ur.prototype,"handleOpenChange",1);ae("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ae("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ae("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Cx="sl-dialog";ur.define("sl-dialog");F({tagName:Cx,elementClass:ur,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var $x=V`
  ${H}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,hs=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};hs.styles=$x;c([m({type:Boolean,reflect:!0})],hs.prototype,"vertical",2);c([I("vertical")],hs.prototype,"handleVerticalChange",1);var Ex="sl-divider";hs.define("sl-divider");F({tagName:Ex,elementClass:hs,react:R,events:{},displayName:"SlDivider"});var zx=V`
  ${H}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Fp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var xt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer"),this.localize=new ne(this),this.modal=new s0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),xi(this)))}disconnectedCallback(){super.disconnectedCallback(),ki(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"drawer.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),xi(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Me(this.drawer),Me(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,`drawer.show${Fp(this.placement)}`,{dir:this.localize.dir()}),r=we(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ki(this)),await Promise.all([Me(this.drawer),Me(this.overlay)]);const e=we(this,`drawer.hide${Fp(this.placement)}`,{dir:this.localize.dir()}),t=we(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Te(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),xi(this)),this.open&&this.contained&&(this.modal.deactivate(),ki(this))}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${K({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":A`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};xt.styles=zx;xt.dependencies={"sl-icon-button":Re};c([P(".drawer")],xt.prototype,"drawer",2);c([P(".drawer__panel")],xt.prototype,"panel",2);c([P(".drawer__overlay")],xt.prototype,"overlay",2);c([m({type:Boolean,reflect:!0})],xt.prototype,"open",2);c([m({reflect:!0})],xt.prototype,"label",2);c([m({reflect:!0})],xt.prototype,"placement",2);c([m({type:Boolean,reflect:!0})],xt.prototype,"contained",2);c([m({attribute:"no-header",type:Boolean,reflect:!0})],xt.prototype,"noHeader",2);c([I("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1);c([I("contained",{waitUntilFirstUpdate:!0})],xt.prototype,"handleNoModalChange",1);ae("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ae("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ae("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ax="sl-drawer";xt.define("sl-drawer");F({tagName:Ax,elementClass:xt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var Tx=V`
  ${H}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,tt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,o;const i=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),n=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>xx(n).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Me(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=we(this,"dropdown.show",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Me(this);const{keyframes:e,options:t}=we(this,"dropdown.hide",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${K({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};tt.styles=Tx;tt.dependencies={"sl-popup":se};c([P(".dropdown")],tt.prototype,"popup",2);c([P(".dropdown__trigger")],tt.prototype,"trigger",2);c([P(".dropdown__panel")],tt.prototype,"panel",2);c([m({type:Boolean,reflect:!0})],tt.prototype,"open",2);c([m({reflect:!0})],tt.prototype,"placement",2);c([m({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);c([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],tt.prototype,"stayOpenOnSelect",2);c([m({attribute:!1})],tt.prototype,"containingElement",2);c([m({type:Number})],tt.prototype,"distance",2);c([m({type:Number})],tt.prototype,"skidding",2);c([m({type:Boolean})],tt.prototype,"hoist",2);c([I("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);ae("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Ix="sl-dropdown";tt.define("sl-dropdown");F({tagName:Ix,elementClass:tt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var kt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return A`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([m()],kt.prototype,"date",2);c([m()],kt.prototype,"weekday",2);c([m()],kt.prototype,"era",2);c([m()],kt.prototype,"year",2);c([m()],kt.prototype,"month",2);c([m()],kt.prototype,"day",2);c([m()],kt.prototype,"hour",2);c([m()],kt.prototype,"minute",2);c([m()],kt.prototype,"second",2);c([m({attribute:"time-zone-name"})],kt.prototype,"timeZoneName",2);c([m({attribute:"time-zone"})],kt.prototype,"timeZone",2);c([m({attribute:"hour-format"})],kt.prototype,"hourFormat",2);var Lx="sl-format-date";kt.define("sl-format-date");F({tagName:Lx,elementClass:kt,react:R,events:{},displayName:"SlFormatDate"});var ps=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[n]+this.unit,i=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:o,unitDisplay:this.display})}};c([m({type:Number})],ps.prototype,"value",2);c([m()],ps.prototype,"unit",2);c([m()],ps.prototype,"display",2);var Px="sl-format-bytes";ps.define("sl-format-bytes");F({tagName:Px,elementClass:ps,react:R,events:{},displayName:"SlFormatBytes"});var qt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([m({type:Number})],qt.prototype,"value",2);c([m()],qt.prototype,"type",2);c([m({attribute:"no-grouping",type:Boolean})],qt.prototype,"noGrouping",2);c([m()],qt.prototype,"currency",2);c([m({attribute:"currency-display"})],qt.prototype,"currencyDisplay",2);c([m({attribute:"minimum-integer-digits",type:Number})],qt.prototype,"minimumIntegerDigits",2);c([m({attribute:"minimum-fraction-digits",type:Number})],qt.prototype,"minimumFractionDigits",2);c([m({attribute:"maximum-fraction-digits",type:Number})],qt.prototype,"maximumFractionDigits",2);c([m({attribute:"minimum-significant-digits",type:Number})],qt.prototype,"minimumSignificantDigits",2);c([m({attribute:"maximum-significant-digits",type:Number})],qt.prototype,"maximumSignificantDigits",2);var Nx="sl-format-number";qt.define("sl-format-number");F({tagName:Nx,elementClass:qt,react:R,events:{},displayName:"SlFormatNumber"});var Ox="sl-icon";ue.define("sl-icon");F({tagName:Ox,elementClass:ue,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var Dx="sl-button-group";bn.define("sl-button-group");F({tagName:Dx,elementClass:bn,react:R,events:{},displayName:"SlButtonGroup"});var Mx=V`
  ${H}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Td=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${K({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Td.styles=Mx;var Rx="sl-card";Td.define("sl-card");F({tagName:Rx,elementClass:Td,react:R,events:{},displayName:"SlCard"});var Fx=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Bx=V`
  ${H}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Vx=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const r=this.host.scrollContainer,n=!!t.movementX||!!t.movementY;!this.dragging&&n?(r.setPointerCapture(t.pointerId),this.handleDragStart()):r.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const r=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,i=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:n,behavior:"auto"}),t.scrollTo({left:o,top:i,behavior:zd()?"auto":"smooth"}),requestAnimationFrame(async()=>{(r!==o||n!==i)&&await ut(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ux(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jx(e,t,r=1){const n=t===void 0?0:e;t??(t=e);for(let o=n;r>0?o<t:t<o;o+=r)yield o}var Hx=(e,t)=>{let r=0;return function(...n){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...n)},t)}},Bp=(e,t,r)=>{const n=e[t];e[t]=function(...o){n.call(this,...o),r.call(this,n,...o)}},Wx="onscrollend"in window;if(!Wx){const e=new Set,t=new WeakMap,r=o=>{e.add(o.pointerId)},n=o=>{e.delete(o.pointerId)};document.addEventListener("pointerdown",r),document.addEventListener("pointerup",n),Bp(EventTarget.prototype,"addEventListener",function(o,i){if(i!=="scroll")return;const s=Hx(()=>{e.size?s():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),Bp(EventTarget.prototype,"removeEventListener",function(o,i){if(i!=="scroll")return;const s=t.get(this);s&&o.call(this,"scroll",s,{passive:!0})})}var Pe=class extends D{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Fx(this,()=>this.next()),this.scrollController=new Vx(this),this.intersectionObserverEntries=new Map,this.localize=new ne(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>this.isCarouselItem(n)&&!n.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const n=r.target;n.toggleAttribute("inert",!r.isIntersecting),n.classList.toggle("--in-view",r.isIntersecting),n.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:n}=this,o=n?e/r:(e-t)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",n=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",i=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),i&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),n&&this.updateComplete.then(()=>{var s;const l=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(n=>n.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const n=Number(r.target.getAttribute("data-clone"));this.goToSlide(n,"auto")}else if(r){const n=e.indexOf(r.target);this.activeSlide=Math.ceil(n/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,r)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",r+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),n=e.slice(0,t);r.reverse().forEach((o,i)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(e.length-i-1)),this.prepend(s)}),n.forEach((o,i)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(i)),this.append(s)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,n)=>{(n+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:n,scrollContainer:o}=this,i=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!i.length)return;const l=n?(e+i.length)%i.length:Oe(e,0,i.length-1);this.activeSlide=l;const a=Oe(e+(n?r:0),0,s.length-1),u=s[a],p=o.getBoundingClientRect(),d=u.getBoundingClientRect();o.scrollTo({left:d.left-p.left+o.scrollLeft,top:d.top-p.top+o.scrollTop,behavior:zd()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,r=this.getPageCount(),n=this.getCurrentPage(),o=this.canScrollPrev(),i=this.canScrollNext(),s=this.localize.dir()==="ltr";return A`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${K({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?A`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${K({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${K({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!i})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?A`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ux(jx(r),l=>{const a=l===n;return A`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${K({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,r)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Pe.styles=Bx;Pe.dependencies={"sl-icon":ue};c([m({type:Boolean,reflect:!0})],Pe.prototype,"loop",2);c([m({type:Boolean,reflect:!0})],Pe.prototype,"navigation",2);c([m({type:Boolean,reflect:!0})],Pe.prototype,"pagination",2);c([m({type:Boolean,reflect:!0})],Pe.prototype,"autoplay",2);c([m({type:Number,attribute:"autoplay-interval"})],Pe.prototype,"autoplayInterval",2);c([m({type:Number,attribute:"slides-per-page"})],Pe.prototype,"slidesPerPage",2);c([m({type:Number,attribute:"slides-per-move"})],Pe.prototype,"slidesPerMove",2);c([m()],Pe.prototype,"orientation",2);c([m({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Pe.prototype,"mouseDragging",2);c([P(".carousel__slides")],Pe.prototype,"scrollContainer",2);c([P(".carousel__pagination")],Pe.prototype,"paginationContainer",2);c([q()],Pe.prototype,"activeSlide",2);c([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],Pe.prototype,"initializeSlides",1);c([I("activeSlide")],Pe.prototype,"handelSlideChange",1);c([I("slidesPerMove")],Pe.prototype,"updateSlidesSnap",1);c([I("autoplay")],Pe.prototype,"handleAutoplayChange",1);c([I("mouseDragging")],Pe.prototype,"handleMouseDraggingChange",1);var Kx="sl-carousel";Pe.define("sl-carousel");F({tagName:Kx,elementClass:Pe,react:R,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var qx=V`
  ${H}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Id=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return A` <slot></slot> `}};Id.styles=qx;var Qx="sl-carousel-item";Id.define("sl-carousel-item");F({tagName:Qx,elementClass:Id,react:R,events:{},displayName:"SlCarouselItem"});var Gx="sl-checkbox";Ue.define("sl-checkbox");F({tagName:Gx,elementClass:Ue,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Xx=V`
  ${H}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,oe=class extends D{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ot(this,"[default]","prefix","suffix"),this.localize=new ne(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:sl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Da`a`:Da`button`;return _i`
      <${t}
        part="base"
        class=${K({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${M(e?void 0:this.disabled)}
        type=${M(e?void 0:this.type)}
        title=${this.title}
        name=${M(e?void 0:this.name)}
        value=${M(e?void 0:this.value)}
        href=${M(e?this.href:void 0)}
        target=${M(e?this.target:void 0)}
        download=${M(e?this.download:void 0)}
        rel=${M(e?this.rel:void 0)}
        role=${M(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?_i` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?_i`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};oe.styles=n0;oe.dependencies={"sl-icon":ue,"sl-spinner":cs};c([P(".button")],oe.prototype,"button",2);c([q()],oe.prototype,"hasFocus",2);c([q()],oe.prototype,"invalid",2);c([m()],oe.prototype,"title",2);c([m({reflect:!0})],oe.prototype,"variant",2);c([m({reflect:!0})],oe.prototype,"size",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"caret",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"loading",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"outline",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"pill",2);c([m({type:Boolean,reflect:!0})],oe.prototype,"circle",2);c([m()],oe.prototype,"type",2);c([m()],oe.prototype,"name",2);c([m()],oe.prototype,"value",2);c([m()],oe.prototype,"href",2);c([m()],oe.prototype,"target",2);c([m()],oe.prototype,"rel",2);c([m()],oe.prototype,"download",2);c([m()],oe.prototype,"form",2);c([m({attribute:"formaction"})],oe.prototype,"formAction",2);c([m({attribute:"formenctype"})],oe.prototype,"formEnctype",2);c([m({attribute:"formmethod"})],oe.prototype,"formMethod",2);c([m({attribute:"formnovalidate",type:Boolean})],oe.prototype,"formNoValidate",2);c([m({attribute:"formtarget"})],oe.prototype,"formTarget",2);c([I("disabled",{waitUntilFirstUpdate:!0})],oe.prototype,"handleDisabledChange",1);function Ze(e,t){Yx(e)&&(e="100%");const r=Zx(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Rs(e){return Math.min(1,Math.max(0,e))}function Yx(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Zx(e){return typeof e=="string"&&e.indexOf("%")!==-1}function a0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Fs(e){return Number(e)<=1?`${Number(e)*100}%`:e}function In(e){return e.length===1?"0"+e:String(e)}function Jx(e,t,r){return{r:Ze(e,255)*255,g:Ze(t,255)*255,b:Ze(r,255)*255}}function Vp(e,t,r){e=Ze(e,255),t=Ze(t,255),r=Ze(r,255);const n=Math.max(e,t,r),o=Math.min(e,t,r);let i=0,s=0;const l=(n+o)/2;if(n===o)s=0,i=0;else{const a=n-o;switch(s=l>.5?a/(2-n-o):a/(n+o),n){case e:i=(t-r)/a+(t<r?6:0);break;case t:i=(r-e)/a+2;break;case r:i=(e-t)/a+4;break}i/=6}return{h:i,s,l}}function tc(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ek(e,t,r){let n,o,i;if(e=Ze(e,360),t=Ze(t,100),r=Ze(r,100),t===0)o=r,i=r,n=r;else{const s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=tc(l,s,e+1/3),o=tc(l,s,e),i=tc(l,s,e-1/3)}return{r:n*255,g:o*255,b:i*255}}function Up(e,t,r){e=Ze(e,255),t=Ze(t,255),r=Ze(r,255);const n=Math.max(e,t,r),o=Math.min(e,t,r);let i=0;const s=n,l=n-o,a=n===0?0:l/n;if(n===o)i=0;else{switch(n){case e:i=(t-r)/l+(t<r?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,v:s}}function tk(e,t,r){e=Ze(e,360)*6,t=Ze(t,100),r=Ze(r,100);const n=Math.floor(e),o=e-n,i=r*(1-t),s=r*(1-o*t),l=r*(1-(1-o)*t),a=n%6,u=[r,s,i,i,l,r][a],p=[l,r,r,s,i,i][a],d=[i,i,l,r,r,s][a];return{r:u*255,g:p*255,b:d*255}}function jp(e,t,r,n){const o=[In(Math.round(e).toString(16)),In(Math.round(t).toString(16)),In(Math.round(r).toString(16))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function rk(e,t,r,n,o){const i=[In(Math.round(e).toString(16)),In(Math.round(t).toString(16)),In(Math.round(r).toString(16)),In(nk(n))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function nk(e){return Math.round(parseFloat(e)*255).toString(16)}function Hp(e){return Ct(e)/255}function Ct(e){return parseInt(e,16)}function ok(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const gu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ik(e){let t={r:0,g:0,b:0},r=1,n=null,o=null,i=null,s=!1,l=!1;return typeof e=="string"&&(e=lk(e)),typeof e=="object"&&(Sr(e.r)&&Sr(e.g)&&Sr(e.b)?(t=Jx(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Sr(e.h)&&Sr(e.s)&&Sr(e.v)?(n=Fs(e.s),o=Fs(e.v),t=tk(e.h,n,o),s=!0,l="hsv"):Sr(e.h)&&Sr(e.s)&&Sr(e.l)&&(n=Fs(e.s),i=Fs(e.l),t=ek(e.h,n,i),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=a0(r),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const sk="[-\\+]?\\d+%?",ak="[-\\+]?\\d*\\.\\d+%?",Zr="(?:"+ak+")|(?:"+sk+")",rc="[\\s|\\(]+("+Zr+")[,|\\s]+("+Zr+")[,|\\s]+("+Zr+")\\s*\\)?",nc="[\\s|\\(]+("+Zr+")[,|\\s]+("+Zr+")[,|\\s]+("+Zr+")[,|\\s]+("+Zr+")\\s*\\)?",Jt={CSS_UNIT:new RegExp(Zr),rgb:new RegExp("rgb"+rc),rgba:new RegExp("rgba"+nc),hsl:new RegExp("hsl"+rc),hsla:new RegExp("hsla"+nc),hsv:new RegExp("hsv"+rc),hsva:new RegExp("hsva"+nc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lk(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(gu[e])e=gu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Jt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Jt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Jt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Jt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Jt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Jt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Jt.hex8.exec(e),r?{r:Ct(r[1]),g:Ct(r[2]),b:Ct(r[3]),a:Hp(r[4]),format:t?"name":"hex8"}:(r=Jt.hex6.exec(e),r?{r:Ct(r[1]),g:Ct(r[2]),b:Ct(r[3]),format:t?"name":"hex"}:(r=Jt.hex4.exec(e),r?{r:Ct(r[1]+r[1]),g:Ct(r[2]+r[2]),b:Ct(r[3]+r[3]),a:Hp(r[4]+r[4]),format:t?"name":"hex8"}:(r=Jt.hex3.exec(e),r?{r:Ct(r[1]+r[1]),g:Ct(r[2]+r[2]),b:Ct(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function Sr(e){return!!Jt.CSS_UNIT.exec(String(e))}class ze{constructor(t="",r={}){if(t instanceof ze)return t;typeof t=="number"&&(t=ok(t)),this.originalInput=t;const n=ik(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??n.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,n,o;const i=t.r/255,s=t.g/255,l=t.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*n+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=a0(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Up(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Up(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${n}%, ${o}%)`:`hsva(${r}, ${n}%, ${o}%, ${this.roundA})`}toHsl(){const t=Vp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Vp(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${n}%, ${o}%)`:`hsla(${r}, ${n}%, ${o}%, ${this.roundA})`}toHex(t=!1){return jp(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return rk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${n})`:`rgba(${t}, ${r}, ${n}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(Ze(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(Ze(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+jp(this.r,this.g,this.b,!1);for(const[r,n]of Object.entries(gu))if(t===n)return r;return!1}toString(t){const r=!!t;t=t??this.format;let n=!1;const o=this.a<1&&this.a>=0;return!r&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ze(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=Rs(r.l),new ze(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ze(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=Rs(r.l),new ze(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=Rs(r.s),new ze(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=Rs(r.s),new ze(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new ze(r)}mix(t,r=50){const n=this.toRgb(),o=new ze(t).toRgb(),i=r/100,s={r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a};return new ze(s)}analogous(t=6,r=30){const n=this.toHsl(),o=360/r,i=[this];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,i.push(new ze(n));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ze(t)}monochromatic(t=6){const r=this.toHsv(),{h:n}=r,{s:o}=r;let{v:i}=r;const s=[],l=1/t;for(;t--;)s.push(new ze({h:n,s:o,v:i})),i=(i+l)%1;return s}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ze({h:(r+72)%360,s:t.s,l:t.l}),new ze({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),n=new ze(t).toRgb(),o=r.a+n.a*(1-r.a);return new ze({r:(r.r*r.a+n.r*n.a*(1-r.a))/o,g:(r.g*r.a+n.g*n.a*(1-r.a))/o,b:(r.b*r.a+n.b*n.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:n}=r,o=[this],i=360/t;for(let s=1;s<t;s++)o.push(new ze({h:(n+s*i)%360,s:r.s,l:r.l}));return o}equals(t){return this.toRgbString()===new ze(t).toRgbString()}}var Wp="EyeDropper"in window,Z=class extends D{constructor(){super(),this.formControlController=new Br(this),this.isSafeValue=!1,this.localize=new ne(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let o=this.value,i=this.value;r.focus(),e.preventDefault(),Si(t,{onMove:s=>{this.alpha=Oe(s/n*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let o=this.value,i=this.value;r.focus(),e.preventDefault(),Si(t,{onMove:s=>{this.hue=Oe(s/n*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:o}=t.getBoundingClientRect();let i=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Si(t,{onMove:(l,a)=>{this.saturation=Oe(l/n*100,0,100),this.brightness=Oe(100-a/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Oe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Oe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Oe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Oe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Oe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Oe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Oe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Oe(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ze(e);if(!t.isValid)return null;const r=t.toHsl(),n={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=t.toRgb(),i=t.toHexString(),s=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Wp)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,n=100){const o=new ze(`hsva(${e}, ${t}, ${r}, ${n/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),n=A`
      <div
        part="base"
        class=${K({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?A`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ft({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${K({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ft({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${M(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${ft({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${M(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?A`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ft({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ft({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${M(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ft({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":A`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Wp?A`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?A`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{const i=this.parseColor(o);return i?A`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${M(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ft({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?n:A`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${K({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ft({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${n}
      </sl-dropdown>
    `}};Z.styles=Xx;Z.dependencies={"sl-button-group":bn,"sl-button":oe,"sl-dropdown":tt,"sl-icon":ue,"sl-input":G,"sl-visually-hidden":al};c([P('[part~="base"]')],Z.prototype,"base",2);c([P('[part~="input"]')],Z.prototype,"input",2);c([P(".color-dropdown")],Z.prototype,"dropdown",2);c([P('[part~="preview"]')],Z.prototype,"previewButton",2);c([P('[part~="trigger"]')],Z.prototype,"trigger",2);c([q()],Z.prototype,"hasFocus",2);c([q()],Z.prototype,"isDraggingGridHandle",2);c([q()],Z.prototype,"isEmpty",2);c([q()],Z.prototype,"inputValue",2);c([q()],Z.prototype,"hue",2);c([q()],Z.prototype,"saturation",2);c([q()],Z.prototype,"brightness",2);c([q()],Z.prototype,"alpha",2);c([m()],Z.prototype,"value",2);c([Kn()],Z.prototype,"defaultValue",2);c([m()],Z.prototype,"label",2);c([m()],Z.prototype,"format",2);c([m({type:Boolean,reflect:!0})],Z.prototype,"inline",2);c([m({reflect:!0})],Z.prototype,"size",2);c([m({attribute:"no-format-toggle",type:Boolean})],Z.prototype,"noFormatToggle",2);c([m()],Z.prototype,"name",2);c([m({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([m({type:Boolean})],Z.prototype,"hoist",2);c([m({type:Boolean})],Z.prototype,"opacity",2);c([m({type:Boolean})],Z.prototype,"uppercase",2);c([m()],Z.prototype,"swatches",2);c([m({reflect:!0})],Z.prototype,"form",2);c([m({type:Boolean,reflect:!0})],Z.prototype,"required",2);c([I("format",{waitUntilFirstUpdate:!0})],Z.prototype,"handleFormatChange",1);c([I("opacity",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpacityChange",1);c([I("value")],Z.prototype,"handleValueChange",1);var ck="sl-color-picker";Z.define("sl-color-picker");F({tagName:ck,elementClass:Z,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var uk=V`
  ${H}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,je=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),n=this.from.includes("[")&&this.from.includes("]");let o=this.from,i="";r?[o,i]=this.from.trim().split("."):n&&([o,i]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(o):null;s?n?e=s.getAttribute(i)||"":r?e=s[i]||"":e=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),n=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,i=we(this,"copy.in",{dir:"ltr"}),s=we(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:n,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(i.keyframes,i.options).finished,setTimeout(async()=>{await o.animate(s.keyframes,s.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(i.keyframes,i.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return A`
      <sl-tooltip
        class=${K({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};je.styles=uk;je.dependencies={"sl-icon":ue,"sl-tooltip":Ve};c([P('slot[name="copy-icon"]')],je.prototype,"copyIcon",2);c([P('slot[name="success-icon"]')],je.prototype,"successIcon",2);c([P('slot[name="error-icon"]')],je.prototype,"errorIcon",2);c([P("sl-tooltip")],je.prototype,"tooltip",2);c([q()],je.prototype,"isCopying",2);c([q()],je.prototype,"status",2);c([m()],je.prototype,"value",2);c([m()],je.prototype,"from",2);c([m({type:Boolean,reflect:!0})],je.prototype,"disabled",2);c([m({attribute:"copy-label"})],je.prototype,"copyLabel",2);c([m({attribute:"success-label"})],je.prototype,"successLabel",2);c([m({attribute:"error-label"})],je.prototype,"errorLabel",2);c([m({attribute:"feedback-duration",type:Number})],je.prototype,"feedbackDuration",2);c([m({attribute:"tooltip-placement"})],je.prototype,"tooltipPlacement",2);c([m({type:Boolean})],je.prototype,"hoist",2);ae("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ae("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var dk="sl-copy-button";je.define("sl-copy-button");F({tagName:dk,elementClass:je,react:R,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var hk=V`
  ${H}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Qt=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Me(this.body);const{keyframes:t,options:r}=we(this,"details.show",{dir:this.localize.dir()});await Te(this.body,Oa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Me(this.body);const{keyframes:t,options:r}=we(this,"details.hide",{dir:this.localize.dir()});await Te(this.body,Oa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ut(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return A`
      <details
        part="base"
        class=${K({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Qt.styles=hk;Qt.dependencies={"sl-icon":ue};c([P(".details")],Qt.prototype,"details",2);c([P(".details__header")],Qt.prototype,"header",2);c([P(".details__body")],Qt.prototype,"body",2);c([P(".details__expand-icon-slot")],Qt.prototype,"expandIconSlot",2);c([m({type:Boolean,reflect:!0})],Qt.prototype,"open",2);c([m()],Qt.prototype,"summary",2);c([m({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([I("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);ae("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ae("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var pk="sl-details";Qt.define("sl-details");F({tagName:pk,elementClass:Qt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var fk=V`
  ${H}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Yn=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),dr=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"icon","suffix"),this.localize=new ne(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Me(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=we(this,"alert.show",{dir:this.localize.dir()});await Te(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Me(this.base);const{keyframes:e,options:t}=we(this,"alert.hide",{dir:this.localize.dir()});await Te(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}async toast(){return new Promise(e=>{Yn.parentElement===null&&document.body.append(Yn),Yn.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Yn.removeChild(this),e(),Yn.querySelector("sl-alert")===null&&Yn.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${K({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};dr.styles=fk;dr.dependencies={"sl-icon-button":Re};c([P('[part~="base"]')],dr.prototype,"base",2);c([m({type:Boolean,reflect:!0})],dr.prototype,"open",2);c([m({type:Boolean,reflect:!0})],dr.prototype,"closable",2);c([m({reflect:!0})],dr.prototype,"variant",2);c([m({type:Number})],dr.prototype,"duration",2);c([I("open",{waitUntilFirstUpdate:!0})],dr.prototype,"handleOpenChange",1);c([I("duration")],dr.prototype,"handleDurationChange",1);ae("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var mk="sl-alert";dr.define("sl-alert");F({tagName:mk,elementClass:dr,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var gk=V`
  ${H}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Gt=class extends D{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return A`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?A`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Gt.styles=gk;Gt.dependencies={"sl-icon":ue};c([P(".animated-image__animated")],Gt.prototype,"animatedImage",2);c([q()],Gt.prototype,"frozenFrame",2);c([q()],Gt.prototype,"isLoaded",2);c([m()],Gt.prototype,"src",2);c([m()],Gt.prototype,"alt",2);c([m({type:Boolean,reflect:!0})],Gt.prototype,"play",2);c([I("play",{waitUntilFirstUpdate:!0})],Gt.prototype,"handlePlayChange",1);c([I("src")],Gt.prototype,"handleSrcChange",1);var vk="sl-animated-image";Gt.define("sl-animated-image");F({tagName:vk,elementClass:Gt,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var yk=V`
  ${H}

  :host {
    display: contents;
  }
`;const bk=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],wk=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],_k=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],xk=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],kk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ck=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],$k=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ek=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ak=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Tk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ik=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lk=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Pk=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Nk=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ok=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Dk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Mk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Rk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Fk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Bk=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Vk=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Uk=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],jk=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hk=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Wk=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Kk=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],qk=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Qk=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Gk=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Xk=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Yk=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zk=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jk=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],e2=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],t2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r2=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],n2=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],o2=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],i2=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],s2=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],a2=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],l2=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],c2=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],u2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],d2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],h2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],p2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],f2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],m2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],g2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],v2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],y2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],b2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],w2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],_2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],x2=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],k2=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],S2=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],C2=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],$2=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],E2=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z2=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],A2=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],T2=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],I2=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],L2=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],P2=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],N2=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],O2=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],D2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],M2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],R2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],F2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],B2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],V2=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],U2=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],j2=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],H2=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],W2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],K2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],q2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Q2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],G2=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],X2=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Y2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],J2=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],eS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],tS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],rS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],nS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],oS=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],iS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],sS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],aS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],lS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],l0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},cS=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Lk,backInLeft:Pk,backInRight:Nk,backInUp:Ok,backOutDown:Dk,backOutLeft:Mk,backOutRight:Rk,backOutUp:Fk,bounce:bk,bounceIn:Bk,bounceInDown:Vk,bounceInLeft:Uk,bounceInRight:jk,bounceInUp:Hk,bounceOut:Wk,bounceOutDown:Kk,bounceOutLeft:qk,bounceOutRight:Qk,bounceOutUp:Gk,easings:l0,fadeIn:Xk,fadeInBottomLeft:Yk,fadeInBottomRight:Zk,fadeInDown:Jk,fadeInDownBig:e2,fadeInLeft:t2,fadeInLeftBig:r2,fadeInRight:n2,fadeInRightBig:o2,fadeInTopLeft:i2,fadeInTopRight:s2,fadeInUp:a2,fadeInUpBig:l2,fadeOut:c2,fadeOutBottomLeft:u2,fadeOutBottomRight:d2,fadeOutDown:h2,fadeOutDownBig:p2,fadeOutLeft:f2,fadeOutLeftBig:m2,fadeOutRight:g2,fadeOutRightBig:v2,fadeOutTopLeft:y2,fadeOutTopRight:b2,fadeOutUp:w2,fadeOutUpBig:_2,flash:wk,flip:x2,flipInX:k2,flipInY:S2,flipOutX:C2,flipOutY:$2,headShake:_k,heartBeat:xk,hinge:G2,jackInTheBox:X2,jello:kk,lightSpeedInLeft:E2,lightSpeedInRight:z2,lightSpeedOutLeft:A2,lightSpeedOutRight:T2,pulse:Sk,rollIn:Y2,rollOut:Z2,rotateIn:I2,rotateInDownLeft:L2,rotateInDownRight:P2,rotateInUpLeft:N2,rotateInUpRight:O2,rotateOut:D2,rotateOutDownLeft:M2,rotateOutDownRight:R2,rotateOutUpLeft:F2,rotateOutUpRight:B2,rubberBand:Ck,shake:$k,shakeX:Ek,shakeY:zk,slideInDown:V2,slideInLeft:U2,slideInRight:j2,slideInUp:H2,slideOutDown:W2,slideOutLeft:K2,slideOutRight:q2,slideOutUp:Q2,swing:Ak,tada:Tk,wobble:Ik,zoomIn:J2,zoomInDown:eS,zoomInLeft:tS,zoomInRight:rS,zoomInUp:nS,zoomOut:oS,zoomOutDown:iS,zoomOutLeft:sS,zoomOutRight:aS,zoomOutUp:lS},Symbol.toStringTag,{value:"Module"}));var He=class extends D{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=l0[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:cS[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!n?!1:(this.destroyAnimation(),this.animation=i.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};He.styles=yk;c([N1("slot")],He.prototype,"defaultSlot",2);c([m()],He.prototype,"name",2);c([m({type:Boolean,reflect:!0})],He.prototype,"play",2);c([m({type:Number})],He.prototype,"delay",2);c([m()],He.prototype,"direction",2);c([m({type:Number})],He.prototype,"duration",2);c([m()],He.prototype,"easing",2);c([m({attribute:"end-delay",type:Number})],He.prototype,"endDelay",2);c([m()],He.prototype,"fill",2);c([m({type:Number})],He.prototype,"iterations",2);c([m({attribute:"iteration-start",type:Number})],He.prototype,"iterationStart",2);c([m({attribute:!1})],He.prototype,"keyframes",2);c([m({attribute:"playback-rate",type:Number})],He.prototype,"playbackRate",2);c([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],He.prototype,"handleAnimationChange",1);c([I("play")],He.prototype,"handlePlayChange",1);c([I("playbackRate")],He.prototype,"handlePlaybackRateChange",1);var uS="sl-animation";He.define("sl-animation");var dS=F({tagName:uS,elementClass:He,react:R,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),c0=dS,hS=V`
  ${H}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ro=class extends D{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${K({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ro.styles=hS;c([m({reflect:!0})],Ro.prototype,"variant",2);c([m({type:Boolean,reflect:!0})],Ro.prototype,"pill",2);c([m({type:Boolean,reflect:!0})],Ro.prototype,"pulse",2);var pS="sl-badge";Ro.define("sl-badge");F({tagName:pS,elementClass:Ro,react:R,events:{},displayName:"SlBadge"});var fS=V`
  ${H}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,hr=class extends D{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=A`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=A``;return this.initials?t=A`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=A`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,A`
      <div
        part="base"
        class=${K({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};hr.styles=fS;hr.dependencies={"sl-icon":ue};c([q()],hr.prototype,"hasError",2);c([m()],hr.prototype,"image",2);c([m()],hr.prototype,"label",2);c([m()],hr.prototype,"initials",2);c([m()],hr.prototype,"loading",2);c([m({reflect:!0})],hr.prototype,"shape",2);c([I("image")],hr.prototype,"handleImageChange",1);var mS="sl-avatar";hr.define("sl-avatar");F({tagName:mS,elementClass:hr,react:R,events:{},displayName:"SlAvatar"});var gS=V`
  ${H}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Gn=class extends D{constructor(){super(...arguments),this.localize=new ne(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const n=t.querySelector('[slot="separator"]');n===null?t.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),A`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Gn.styles=gS;Gn.dependencies={"sl-icon":ue};c([P("slot")],Gn.prototype,"defaultSlot",2);c([P('slot[name="separator"]')],Gn.prototype,"separatorSlot",2);c([m()],Gn.prototype,"label",2);var vS="sl-breadcrumb";Gn.define("sl-breadcrumb");F({tagName:vS,elementClass:Gn,react:R,events:{},displayName:"SlBreadcrumb"});var yS=V`
  ${H}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Fo=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return A`
      <div
        part="base"
        class=${K({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?A`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${M(this.target?this.target:void 0)}"
                rel=${M(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:A`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Fo.styles=yS;c([m()],Fo.prototype,"href",2);c([m()],Fo.prototype,"target",2);c([m()],Fo.prototype,"rel",2);var bS="sl-breadcrumb-item";Fo.define("sl-breadcrumb-item");F({tagName:bS,elementClass:Fo,react:R,events:{},displayName:"SlBreadcrumbItem"});var wS="sl-button";oe.define("sl-button");F({tagName:wS,elementClass:oe,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});function _S(e){return Object.prototype.toString.call(e)==="[object Object]"}function Kp(e){return _S(e)||Array.isArray(e)}function xS(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ld(e,t){const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;const o=JSON.stringify(Object.keys(e.breakpoints||{})),i=JSON.stringify(Object.keys(t.breakpoints||{}));return o!==i?!1:r.every(s=>{const l=e[s],a=t[s];return typeof l=="function"?`${l}`==`${a}`:!Kp(l)||!Kp(a)?l===a:Ld(l,a)})}function qp(e){return e.concat().sort((t,r)=>t.name>r.name?1:-1).map(t=>t.options)}function kS(e,t){if(e.length!==t.length)return!1;const r=qp(e),n=qp(t);return r.every((o,i)=>{const s=n[i];return Ld(o,s)})}function Pd(e){return typeof e=="number"}function vu(e){return typeof e=="string"}function Nd(e){return typeof e=="boolean"}function Qp(e){return Object.prototype.toString.call(e)==="[object Object]"}function _e(e){return Math.abs(e)}function Od(e){return Math.sign(e)}function oa(e,t){return _e(e-t)}function SS(e,t){if(e===0||t===0||_e(e)<=_e(t))return 0;const r=oa(_e(e),_e(t));return _e(r/e)}function Gi(e){return Xi(e).map(Number)}function ir(e){return e[fs(e)]}function fs(e){return Math.max(0,e.length-1)}function Dd(e,t){return t===fs(e)}function Gp(e,t=0){return Array.from(Array(e),(r,n)=>t+n)}function Xi(e){return Object.keys(e)}function u0(e,t){return[e,t].reduce((r,n)=>(Xi(n).forEach(o=>{const i=r[o],s=n[o],l=Qp(i)&&Qp(s);r[o]=l?u0(i,s):s}),r),{})}function d0(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function CS(e,t){const r={start:n,center:o,end:i};function n(){return 0}function o(a){return i(a)/2}function i(a){return t-a}function s(a,u){return vu(e)?r[e](a):e(t,a,u)}return{measure:s}}function Yi(){let e=[];function t(o,i,s,l={passive:!0}){let a;if("addEventListener"in o)o.addEventListener(i,s,l),a=()=>o.removeEventListener(i,s,l);else{const u=o;u.addListener(s),a=()=>u.removeListener(s)}return e.push(a),n}function r(){e=e.filter(o=>o())}const n={add:t,clear:r};return n}function $S(e,t,r,n){const o=Yi(),i=1e3/60;let s=null,l=0,a=0;function u(){o.add(e,"visibilitychange",()=>{e.hidden&&y()})}function p(){g(),o.clear()}function d(S){s||(s=S);const v=S-s;for(s=S,l+=v;l>=i;)r(),l-=i;const f=_e(l/i);n(f),a&&t.requestAnimationFrame(d)}function h(){a||(a=t.requestAnimationFrame(d))}function g(){t.cancelAnimationFrame(a),s=null,l=0,a=0}function y(){s=null,l=0}return{init:u,destroy:p,start:h,stop:g,update:r,render:n}}function ES(e,t){const r=e==="y"?"y":"x",n=e==="y"?"x":"y",o=l(),i=a();function s(p){const{width:d,height:h}=p;return r==="x"?d:h}function l(){return r==="y"?"top":t==="rtl"?"right":"left"}function a(){return r==="y"?"bottom":t==="rtl"?"left":"right"}return{scroll:r,cross:n,startEdge:o,endEdge:i,measureSize:s}}function jn(e=0,t=0){const r=_e(e-t);function n(u){return u<e}function o(u){return u>t}function i(u){return n(u)||o(u)}function s(u){return i(u)?n(u)?e:t:u}function l(u){return r?u-r*Math.ceil((u-t)/r):u}return{length:r,max:t,min:e,constrain:s,reachedAny:i,reachedMax:o,reachedMin:n,removeOffset:l}}function h0(e,t,r){const{constrain:n}=jn(0,e),o=e+1;let i=s(t);function s(h){return r?_e((o+h)%o):n(h)}function l(){return i}function a(h){return i=s(h),d}function u(h){return p().set(l()+h)}function p(){return h0(e,l(),r)}const d={get:l,set:a,add:u,clone:p};return d}function zS(e){const t=e==="rtl"?-1:1;function r(o){return o*t}return{apply:r}}function AS(e,t,r,n,o,i,s,l,a,u,p,d,h,g,y,w,S,v,f,b){const{cross:_}=e,x=["INPUT","SELECT","TEXTAREA"],k={passive:!1},C=Yi(),$=Yi(),z=jn(50,225).constrain(y.measure(20)),E={mouse:300,touch:400},B={mouse:500,touch:600},U=w?43:25;let ie=!1,ee=0,de=0,pe=!1,Ee=!1,L=!1,W=!1;function Q(j){if(!b)return;function he(rt){(Nd(b)||b(j,rt))&&St(rt)}const Ne=r;C.add(Ne,"dragstart",rt=>rt.preventDefault(),k).add(Ne,"touchmove",()=>{},k).add(Ne,"touchend",()=>{}).add(Ne,"touchstart",he).add(Ne,"mousedown",he).add(Ne,"touchcancel",pt).add(Ne,"contextmenu",pt).add(Ne,"click",xr,!0)}function te(){C.clear(),$.clear()}function me(){const j=W?n:r;$.add(j,"touchmove",We,k).add(j,"touchend",pt).add(j,"mousemove",We,k).add(j,"mouseup",pt)}function Xt(j){const he=j.nodeName||"";return x.includes(he)}function Ge(){return(w?B:E)[W?"mouse":"touch"]}function _r(j,he){const Ne=h.add(Od(j)*-1),rt=d.byDistance(j,!w).distance;return w||_e(j)<z?rt:v&&he?rt*.5:d.byIndex(Ne.get(),0).distance}function St(j){const he=d0(j,o);W=he,!(he&&j.button!==0)&&(Xt(j.target)||(L=w&&he&&!j.buttons&&ie,ie=oa(i.get(),l.get())>=2,pe=!0,s.pointerDown(j),p.useFriction(0).useDuration(0),i.set(l),me(),ee=s.readPoint(j),de=s.readPoint(j,_),g.emit("pointerDown")))}function We(j){const he=s.readPoint(j),Ne=s.readPoint(j,_),rt=oa(he,ee),jr=oa(Ne,de);if(!Ee&&!W&&(!j.cancelable||(Ee=rt>jr,!Ee)))return pt(j);const pr=s.pointerMove(j);rt>S&&(L=!0),p.useFriction(.3).useDuration(1),a.start(),i.add(t.apply(pr)),j.preventDefault()}function pt(j){const Ne=d.byDistance(0,!1).index!==h.get(),rt=s.pointerUp(j)*Ge(),jr=_r(t.apply(rt),Ne),pr=SS(rt,jr),_n=U-10*pr,kr=f+pr/50;Ee=!1,pe=!1,$.clear(),p.useDuration(_n).useFriction(kr),u.distance(jr,!w),W=!1,g.emit("pointerUp")}function xr(j){L&&(j.stopPropagation(),j.preventDefault())}function Yt(){return pe}return{init:Q,pointerDown:Yt,destroy:te}}function TS(e,t){let n,o;function i(d){return d.timeStamp}function s(d,h){const y=`client${(h||e.scroll)==="x"?"X":"Y"}`;return(d0(d,t)?d:d.touches[0])[y]}function l(d){return n=d,o=d,s(d)}function a(d){const h=s(d)-s(o),g=i(d)-i(n)>170;return o=d,g&&(n=d),h}function u(d){if(!n||!o)return 0;const h=s(o)-s(n),g=i(d)-i(n),y=i(d)-i(o)>170,w=h/g;return g&&!y&&_e(w)>.1?w:0}return{pointerDown:l,pointerMove:a,pointerUp:u,readPoint:s}}function IS(){function e(r){const{offsetTop:n,offsetLeft:o,offsetWidth:i,offsetHeight:s}=r;return{top:n,right:o+i,bottom:n+s,left:o,width:i,height:s}}return{measure:e}}function LS(e){function t(n){return e*(n/100)}return{measure:t}}function PS(e,t,r,n,o,i,s){let l,a,u=[],p=!1;function d(w){return o.measureSize(s.measure(w))}function h(w){if(!i)return;a=d(e),u=n.map(d);function S(f){for(const b of f){const _=b.target===e,x=n.indexOf(b.target),k=_?a:u[x],C=d(_?e:n[x]);if(_e(C-k)>=.5){r.requestAnimationFrame(()=>{w.reInit(),t.emit("resize")});break}}}l=new ResizeObserver(f=>{p||(Nd(i)||i(w,f))&&S(f)}),[e].concat(n).forEach(f=>l.observe(f))}function g(){l&&l.disconnect(),p=!0}return{init:h,destroy:g}}function NS(e,t,r,n,o){let i=0,s=0,l=n,a=o,u=e.get(),p=0;function d(){const x=r.get()-e.get(),k=!l;let C=0;return k?(i=0,e.set(r),C=x):(i+=x/l,i*=a,u+=i,e.add(i),C=u-p),s=Od(C),p=u,_}function h(){const x=r.get()-t.get();return _e(x)<.001}function g(){return l}function y(){return s}function w(){return i}function S(){return f(n)}function v(){return b(o)}function f(x){return l=x,_}function b(x){return a=x,_}const _={direction:y,duration:g,velocity:w,seek:d,settled:h,useBaseFriction:v,useBaseDuration:S,useFriction:b,useDuration:f};return _}function OS(e,t,r,n,o){const i=o.measure(10),s=o.measure(50),l=jn(.1,.99);let a=!1;function u(){return!(a||!e.reachedAny(r.get())||!e.reachedAny(t.get()))}function p(g){if(!u())return;const y=e.reachedMin(t.get())?"min":"max",w=_e(e[y]-t.get()),S=r.get()-t.get(),v=l.constrain(w/s);r.subtract(S*v),!g&&_e(S)<i&&(r.set(e.constrain(r.get())),n.useDuration(25).useBaseFriction())}function d(g){a=!g}return{constrain:p,toggleActive:d}}function DS(e,t,r,n,o){const i=jn(-t+e,0),s=p(),l=u(),a=d();function u(){const g=s[0],y=ir(s),w=s.lastIndexOf(g),S=s.indexOf(y)+1;return jn(w,S)}function p(){return r.map((g,y)=>{const w=!y,S=Dd(r,y);return w?i.max:S?i.min:i.constrain(g)}).map(g=>parseFloat(g.toFixed(3)))}function d(){if(t<=e+o)return[i.max];if(n==="keepSnaps")return s;const{min:g,max:y}=l;return s.slice(g,y)}return{snapsContained:a,scrollContainLimit:l}}function MS(e,t,r){const n=t[0],o=r?n-e:ir(t);return{limit:jn(o,n)}}function RS(e,t,r,n){const i=t.min+.1,s=t.max+.1,{reachedMin:l,reachedMax:a}=jn(i,s);function u(h){return h===1?a(r.get()):h===-1?l(r.get()):!1}function p(h){if(!u(h))return;const g=e*(h*-1);n.forEach(y=>y.add(g))}return{loop:p}}function FS(e){const{max:t,length:r}=e;function n(i){const s=i-t;return r?s/-r:0}return{get:n}}function BS(e,t,r,n,o){const{startEdge:i,endEdge:s}=e,{groupSlides:l}=o,a=d().map(t.measure),u=h(),p=g();function d(){return l(n).map(w=>ir(w)[s]-w[0][i]).map(_e)}function h(){return n.map(w=>r[i]-w[i]).map(w=>-_e(w))}function g(){return l(u).map(w=>w[0]).map((w,S)=>w+a[S])}return{snaps:u,snapsAligned:p}}function VS(e,t,r,n,o,i){const{groupSlides:s}=o,{min:l,max:a}=n,u=p();function p(){const h=s(i),g=!e||t==="keepSnaps";return r.length===1?[i]:g?h:h.slice(l,a).map((y,w,S)=>{const v=!w,f=Dd(S,w);if(v){const b=ir(S[0])+1;return Gp(b)}if(f){const b=fs(i)-ir(S)[0]+1;return Gp(b,ir(S)[0])}return y})}return{slideRegistry:u}}function US(e,t,r,n,o){const{reachedAny:i,removeOffset:s,constrain:l}=n;function a(y){return y.concat().sort((w,S)=>_e(w)-_e(S))[0]}function u(y){const w=e?s(y):l(y),S=t.map(f=>f-w).map(f=>p(f,0)).map((f,b)=>({diff:f,index:b})).sort((f,b)=>_e(f.diff)-_e(b.diff)),{index:v}=S[0];return{index:v,distance:w}}function p(y,w){const S=[y,y+r,y-r];if(!e)return S[0];if(!w)return a(S);const v=S.filter(f=>Od(f)===w);return v.length?a(v):ir(S)-r}function d(y,w){const S=t[y]-o.get(),v=p(S,w);return{index:y,distance:v}}function h(y,w){const S=o.get()+y,{index:v,distance:f}=u(S),b=!e&&i(S);if(!w||b)return{index:v,distance:y};const _=t[v]-f,x=y+p(_,0);return{index:v,distance:x}}return{byDistance:h,byIndex:d,shortcut:p}}function jS(e,t,r,n,o,i,s){function l(d){const h=d.distance,g=d.index!==t.get();i.add(h),h&&(n.duration()?e.start():(e.update(),e.render(1),e.update())),g&&(r.set(t.get()),t.set(d.index),s.emit("select"))}function a(d,h){const g=o.byDistance(d,h);l(g)}function u(d,h){const g=t.clone().set(d),y=o.byIndex(g.get(),h);l(y)}return{distance:a,index:u}}function HS(e,t,r,n,o,i){let s=0;function l(){i.add(document,"keydown",a,!1),t.forEach(u)}function a(d){d.code==="Tab"&&(s=new Date().getTime())}function u(d){const h=()=>{if(new Date().getTime()-s>10)return;e.scrollLeft=0;const w=t.indexOf(d),S=r.findIndex(v=>v.includes(w));Pd(S)&&(o.useDuration(0),n.index(S,0))};i.add(d,"focus",h,{passive:!0,capture:!0})}return{init:l}}function ia(e){let t=e;function r(){return t}function n(a){t=s(a)}function o(a){t+=s(a)}function i(a){t-=s(a)}function s(a){return Pd(a)?a:a.get()}return{get:r,set:n,add:o,subtract:i}}function p0(e,t,r){const n=e.scroll==="x"?s:l,o=r.style;let i=!1;function s(h){return`translate3d(${h}px,0px,0px)`}function l(h){return`translate3d(0px,${h}px,0px)`}function a(h){i||(o.transform=n(t.apply(h)))}function u(h){i=!h}function p(){i||(o.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:p,to:a,toggleActive:u}}function WS(e,t,r,n,o,i,s,l,a,u){const d=Gi(i),h=Gi(i).reverse(),g=f().concat(b());function y($,z){return $.reduce((E,B)=>E-i[B],z)}function w($,z){return $.reduce((E,B)=>y(E,z)>0?E.concat([B]):E,[])}function S($){return s.map((z,E)=>({start:z-o[E]+.5+$,end:z+r-.5+$}))}function v($,z,E){const B=S(z);return $.map(U=>{const ie=E?0:-n,ee=E?n:0,de=E?"end":"start",pe=B[U][de];return{index:U,loopPoint:pe,slideLocation:ia(-1),translate:p0(e,t,u[U]),target:()=>a.get()>pe?ie:ee}})}function f(){const $=l[0],z=w(h,$);return v(z,n,!1)}function b(){const $=r-l[0]-1,z=w(d,$);return v(z,-n,!0)}function _(){return g.every(({index:$})=>{const z=d.filter(E=>E!==$);return y(z,r)<=.1})}function x(){g.forEach($=>{const{target:z,translate:E,slideLocation:B}=$,U=z();U!==B.get()&&(E.to(U),B.set(U))})}function k(){g.forEach($=>$.translate.clear())}return{canLoop:_,clear:k,loop:x,loopPoints:g}}function KS(e,t,r){let n,o=!1;function i(a){if(!r)return;function u(p){for(const d of p)if(d.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}n=new MutationObserver(p=>{o||(Nd(r)||r(a,p))&&u(p)}),n.observe(e,{childList:!0})}function s(){n&&n.disconnect(),o=!0}return{init:i,destroy:s}}function qS(e,t,r,n){const o={};let i=null,s=null,l,a=!1;function u(){l=new IntersectionObserver(y=>{a||(y.forEach(w=>{const S=t.indexOf(w.target);o[S]=w}),i=null,s=null,r.emit("slidesInView"))},{root:e.parentElement,threshold:n}),t.forEach(y=>l.observe(y))}function p(){l&&l.disconnect(),a=!0}function d(y){return Xi(o).reduce((w,S)=>{const v=parseInt(S),{isIntersecting:f}=o[v];return(y&&f||!y&&!f)&&w.push(v),w},[])}function h(y=!0){if(y&&i)return i;if(!y&&s)return s;const w=d(y);return y&&(i=w),y||(s=w),w}return{init:u,destroy:p,get:h}}function QS(e,t,r,n,o,i){const{measureSize:s,startEdge:l,endEdge:a}=e,u=r[0]&&o,p=y(),d=w(),h=r.map(s),g=S();function y(){if(!u)return 0;const f=r[0];return _e(t[l]-f[l])}function w(){if(!u)return 0;const f=i.getComputedStyle(ir(n));return parseFloat(f.getPropertyValue(`margin-${a}`))}function S(){return r.map((f,b,_)=>{const x=!b,k=Dd(_,b);return x?h[b]+p:k?h[b]+d:_[b+1][l]-f[l]}).map(_e)}return{slideSizes:h,slideSizesWithGaps:g,startGap:p,endGap:d}}function GS(e,t,r,n,o,i,s,l,a,u){const{startEdge:p,endEdge:d}=e,h=Pd(n);function g(v,f){return Gi(v).filter(b=>b%f===0).map(b=>v.slice(b,b+f))}function y(v){return v.length?Gi(v).reduce((f,b)=>{const _=ir(f)||0,x=_===0,k=b===fs(v),C=i[p]-s[_][p],$=i[p]-s[b][d],z=!o&&x?t.apply(l):0,E=!o&&k?t.apply(a):0;return _e($-E-(C+z))>r+u&&f.push(b),k&&f.push(v.length),f},[]).map((f,b,_)=>{const x=Math.max(_[b-1]||0);return v.slice(x,f)}):[]}function w(v){return h?g(v,n):y(v)}return{groupSlides:w}}function XS(e,t,r,n,o,i,s){const{align:l,axis:a,direction:u,startIndex:p,loop:d,duration:h,dragFree:g,dragThreshold:y,inViewThreshold:w,slidesToScroll:S,skipSnaps:v,containScroll:f,watchResize:b,watchSlides:_,watchDrag:x}=i,k=2,C=IS(),$=C.measure(t),z=r.map(C.measure),E=zS(u),B=ES(a,u),U=B.measureSize($),ie=LS(U),ee=CS(l,U),de=!d&&!!f,pe=d||!!f,{slideSizes:Ee,slideSizesWithGaps:L,startGap:W,endGap:Q}=QS(B,$,z,r,pe,o),te=GS(B,E,U,S,d,$,z,W,Q,k),{snaps:me,snapsAligned:Xt}=BS(B,ee,$,z,te),Ge=-ir(me)+ir(L),{snapsContained:_r,scrollContainLimit:St}=DS(U,Ge,Xt,f,k),We=de?_r:Xt,{limit:pt}=MS(Ge,We,d),xr=h0(fs(We),p,d),Yt=xr.clone(),ke=Gi(r),j=({dragHandler:xn,scrollBody:fl,scrollBounds:ml,options:{loop:ms}})=>{ms||ml.constrain(xn.pointerDown()),fl.seek()},he=({scrollBody:xn,translate:fl,location:ml,offsetLocation:ms,scrollLooper:k0,slideLooper:S0,dragHandler:C0,animation:$0,eventHandler:Hd,options:{loop:E0}},z0)=>{const Wd=xn.velocity(),Kd=xn.settled();Kd&&!C0.pointerDown()&&($0.stop(),Hd.emit("settle")),Kd||Hd.emit("scroll"),ms.set(ml.get()-Wd+Wd*z0),E0&&(k0.loop(xn.direction()),S0.loop()),fl.to(ms.get())},Ne=$S(n,o,()=>j(pl),xn=>he(pl,xn)),rt=.68,jr=We[xr.get()],pr=ia(jr),_n=ia(jr),kr=ia(jr),Bo=NS(pr,_n,kr,h,rt),dl=US(d,We,Ge,pt,kr),hl=jS(Ne,xr,Yt,Bo,dl,kr,s),Vd=FS(pt),Ud=Yi(),_0=qS(t,r,s,w),{slideRegistry:jd}=VS(de,f,We,St,te,ke),x0=HS(e,r,jd,hl,Bo,Ud),pl={ownerDocument:n,ownerWindow:o,eventHandler:s,containerRect:$,slideRects:z,animation:Ne,axis:B,direction:E,dragHandler:AS(B,E,e,n,o,kr,TS(B,o),pr,Ne,hl,Bo,dl,xr,s,ie,g,y,v,rt,x),eventStore:Ud,percentOfView:ie,index:xr,indexPrevious:Yt,limit:pt,location:pr,offsetLocation:_n,options:i,resizeHandler:PS(t,s,o,r,B,b,C),scrollBody:Bo,scrollBounds:OS(pt,pr,kr,Bo,ie),scrollLooper:RS(Ge,pt,_n,[pr,_n,kr]),scrollProgress:Vd,scrollSnapList:We.map(Vd.get),scrollSnaps:We,scrollTarget:dl,scrollTo:hl,slideLooper:WS(B,E,U,Ge,Ee,L,me,We,_n,r),slideFocus:x0,slidesHandler:KS(t,s,_),slidesInView:_0,slideIndexes:ke,slideRegistry:jd,slidesToScroll:te,target:kr,translate:p0(B,E,t)};return pl}function YS(){const e={};let t;function r(a){t=a}function n(a){return e[a]||[]}function o(a){return n(a).forEach(u=>u(t,a)),l}function i(a,u){return e[a]=n(a).concat([u]),l}function s(a,u){return e[a]=n(a).filter(p=>p!==u),l}const l={init:r,emit:o,off:s,on:i};return l}const ZS={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function JS(e){function t(i,s){return u0(i,s||{})}function r(i){const s=i.breakpoints||{},l=Xi(s).filter(a=>e.matchMedia(a).matches).map(a=>s[a]).reduce((a,u)=>t(a,u),{});return t(i,l)}function n(i){return i.map(s=>Xi(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:r,optionsMediaQueries:n}}function eC(e){let t=[];function r(i,s){return t=s.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(i,e)),s.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function n(){t=t.filter(i=>i.destroy())}return{init:r,destroy:n}}function Ra(e,t,r){const n=e.ownerDocument,o=n.defaultView,i=JS(o),s=eC(i),l=Yi(),a=YS(),{mergeOptions:u,optionsAtMedia:p,optionsMediaQueries:d}=i,{on:h,off:g,emit:y}=a,w=B;let S=!1,v,f=u(ZS,Ra.globalOptions),b=u(f),_=[],x,k,C;function $(){const{container:ke,slides:j}=b;k=(vu(ke)?e.querySelector(ke):ke)||e.children[0];const Ne=vu(j)?k.querySelectorAll(j):j;C=[].slice.call(Ne||k.children)}function z(ke){const j=XS(e,k,C,n,o,ke,a);if(ke.loop&&!j.slideLooper.canLoop()){const he=Object.assign({},ke,{loop:!1});return z(he)}return j}function E(ke,j){S||(f=u(f,ke),b=p(f),_=j||_,$(),v=z(b),d([f,..._.map(({options:he})=>he)]).forEach(he=>l.add(he,"change",B)),b.active&&(v.translate.to(v.location.get()),v.animation.init(),v.slidesInView.init(),v.slideFocus.init(),v.eventHandler.init(Yt),v.resizeHandler.init(Yt),v.slidesHandler.init(Yt),v.options.loop&&v.slideLooper.loop(),k.offsetParent&&C.length&&v.dragHandler.init(Yt),x=s.init(Yt,_)))}function B(ke,j){const he=te();U(),E(u({startIndex:he},ke),j),a.emit("reInit")}function U(){v.dragHandler.destroy(),v.eventStore.clear(),v.translate.clear(),v.slideLooper.clear(),v.resizeHandler.destroy(),v.slidesHandler.destroy(),v.slidesInView.destroy(),v.animation.destroy(),s.destroy(),l.clear()}function ie(){S||(S=!0,l.clear(),U(),a.emit("destroy"))}function ee(ke,j,he){!b.active||S||(v.scrollBody.useBaseFriction().useDuration(j===!0?0:b.duration),v.scrollTo.index(ke,he||0))}function de(ke){const j=v.index.add(1).get();ee(j,ke,-1)}function pe(ke){const j=v.index.add(-1).get();ee(j,ke,1)}function Ee(){return v.index.add(1).get()!==te()}function L(){return v.index.add(-1).get()!==te()}function W(){return v.scrollSnapList}function Q(){return v.scrollProgress.get(v.location.get())}function te(){return v.index.get()}function me(){return v.indexPrevious.get()}function Xt(){return v.slidesInView.get()}function Ge(){return v.slidesInView.get(!1)}function _r(){return x}function St(){return v}function We(){return e}function pt(){return k}function xr(){return C}const Yt={canScrollNext:Ee,canScrollPrev:L,containerNode:pt,internalEngine:St,destroy:ie,off:g,on:h,emit:y,plugins:_r,previousScrollSnap:me,reInit:w,rootNode:We,scrollNext:de,scrollPrev:pe,scrollProgress:Q,scrollSnapList:W,scrollTo:ee,selectedScrollSnap:te,slideNodes:xr,slidesInView:Xt,slidesNotInView:Ge};return E(t,r),setTimeout(()=>a.emit("init"),0),Yt}Ra.globalOptions=void 0;function Md(e={},t=[]){const r=le.useRef(e),n=le.useRef(t),[o,i]=le.useState(),[s,l]=le.useState(),a=le.useCallback(()=>{o&&o.reInit(r.current,n.current)},[o]);return le.useEffect(()=>{if(xS()&&s){Ra.globalOptions=Md.globalOptions;const u=Ra(s,r.current,n.current);return i(u),()=>u.destroy()}else i(void 0)},[s,i]),le.useEffect(()=>{Ld(r.current,e)||(r.current=e,a())},[e,a]),le.useEffect(()=>{kS(n.current,t)||(n.current=t,a())},[t,a]),[l,o]}Md.globalOptions=void 0;const tC={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Rd(e={}){let t,r,n,o=!1,i=!0,s=!1,l=0,a=0;function u(b,_){r=b;const{mergeOptions:x,optionsAtMedia:k}=_,C=x(tC,Rd.globalOptions),$=x(C,e);if(t=k($),r.scrollSnapList().length<=1)return;s=t.jump,n=!1;const{eventStore:z,ownerDocument:E}=r.internalEngine(),B=r.rootNode(),U=t.rootNode&&t.rootNode(B)||B;r.on("pointerDown",h),t.stopOnInteraction||r.on("pointerUp",d),t.stopOnMouseEnter&&(z.add(U,"mouseenter",()=>{i=!1,h()}),t.stopOnInteraction||z.add(U,"mouseleave",()=>{i=!0,d()})),t.stopOnFocusIn&&(z.add(U,"focusin",h),t.stopOnInteraction||z.add(U,"focusout",d)),z.add(E,"visibilitychange",()=>{if(E.visibilityState==="hidden")return i=o,h();i&&d()}),t.playOnInit&&r.on("init",d).on("reInit",d)}function p(){n=!0,o=!1,r.off("init",d).off("reInit",d),r.off("pointerDown",h),t.stopOnInteraction||r.off("pointerUp",d),h(),cancelAnimationFrame(l),l=0}function d(){if(n||!i)return;o||r.emit("autoplay:play");const{ownerWindow:b}=r.internalEngine();b.clearInterval(a),a=b.setInterval(v,t.delay),o=!0}function h(){if(n)return;o&&r.emit("autoplay:stop");const{ownerWindow:b}=r.internalEngine();b.clearInterval(a),a=0,o=!1}function g(b){typeof b<"u"&&(s=b),i=!0,d()}function y(){o&&h()}function w(){o&&g()}function S(){return o}function v(){l=requestAnimationFrame(()=>{const{index:b}=r.internalEngine(),_=b.clone().add(1).get(),x=r.scrollSnapList().length-1;t.stopOnLastSnap&&_===x&&h(),r.canScrollNext()?r.scrollNext(s):r.scrollTo(0,s)})}return{name:"autoplay",options:e,init:u,destroy:p,play:g,stop:y,reset:w,isPlaying:S}}Rd.globalOptions=void 0;function rC({lightMode:e,fontIncreased:t}){const[r,n]=le.useState(!1),[o]=Md({loop:!1},[Rd()]);function i(){n(!0),setTimeout(function(){n(!1)},3250)}const s={transform:"rotate(1turn) scale(0.4)",transition:"all 3.25s",borderRadius:"50%"};return N.jsx(N.Fragment,{children:N.jsxs("main",{className:"fade-in-hero",children:[N.jsxs("section",{className:"hero__left",children:[N.jsx("div",{onClick:i,style:r?s:{display:"block"},className:e?"hero__profile hero__profile__pic--dark light pointer":"hero__profile hero__profile__pic--light light pointer",children:N.jsx(c0,{name:"flash",duration:4e3,play:!0,children:N.jsx("span",{className:"hero__tap hover",children:r?"":"← Tap!"})})}),N.jsxs("div",{className:"hero__text",children:[N.jsx("div",{className:"hero__name",style:{fontSize:t?"var(--name-increased)":"var(--name-default)"},children:"Stepan Serov"}),N.jsx("span",{className:"hero__position",style:{fontSize:t?"var(--position-increased)":"var(--position-default)"},children:"Frontend Developer"})]}),N.jsxs("div",{className:"hero__badges",children:[N.jsx(Er,{className:"hover rotate",icon:"mdi:react",width:"32",height:"32"}),N.jsx(Er,{className:"hover",icon:"mdi:language-javascript",width:"32",height:"32"}),N.jsx(Er,{className:"hover",icon:"mdi:git",width:"32",height:"32"}),N.jsx(Er,{className:"hover",icon:"mdi:language-html5",width:"32",height:"32"}),N.jsx(Er,{className:"hover",icon:"mdi:language-css3",width:"32",height:"32"})]})]}),N.jsxs("section",{className:"hero__right",children:[N.jsx("h2",{className:"kaushan-script-regular",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Latest projects"}),N.jsx("div",{className:"embla",ref:o,children:N.jsxs("div",{className:"embla__container",children:[N.jsx("div",{className:"embla__slide boxd",children:N.jsx("span",{className:"embla__slide-text",children:N.jsx("a",{href:"https://fabulous-marigold-8f871e.netlify.app/",target:"_blank",rel:"noreferrer",children:"→ Games Database"})})}),N.jsx("div",{className:"embla__slide gamingnews",children:N.jsx("span",{className:"embla__slide-text",children:N.jsx("a",{href:"https://stunning-shortbread-4017c3.netlify.app",target:"_blank",rel:"noreferrer",children:"→ Gaming News"})})})]})})]})]})})}var f0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(i=o(i,n(l)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var l in i)t.call(i,l)&&i[l]&&(s=o(s,l));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(f0);var nC=f0.exports;const ul=Yp(nC),oC=["xxl","xl","lg","md","sm","xs"],iC="xs",Fd=le.createContext({prefixes:{},breakpoints:oC,minBreakpoint:iC});function Bd(e,t){const{prefixes:r}=le.useContext(Fd);return e||r[t]||t}function sC(){const{breakpoints:e}=le.useContext(Fd);return e}function aC(){const{minBreakpoint:e}=le.useContext(Fd);return e}function m0({as:e,bsPrefix:t,className:r,...n}){t=Bd(t,"col");const o=sC(),i=aC(),s=[],l=[];return o.forEach(a=>{const u=n[a];delete n[a];let p,d,h;typeof u=="object"&&u!=null?{span:p,offset:d,order:h}=u:p=u;const g=a!==i?`-${a}`:"";p&&s.push(p===!0?`${t}${g}`:`${t}${g}-${p}`),h!=null&&l.push(`order${g}-${h}`),d!=null&&l.push(`offset${g}-${d}`)}),[{...n,className:ul(r,...s,...l)},{as:e,bsPrefix:t,spans:s}]}const lC=le.forwardRef((e,t)=>{const[{className:r,...n},{as:o="div",bsPrefix:i,spans:s}]=m0(e);return N.jsx(o,{...n,ref:t,className:ul(r,!s.length&&i)})});lC.displayName="Col";function g0({animation:e,bg:t,bsPrefix:r,size:n,...o}){r=Bd(r,"placeholder");const[{className:i,...s}]=m0(o);return{...s,className:ul(i,e?`${r}-${e}`:r,n&&`${r}-${n}`,t&&`bg-${t}`)}}const cC=["as","disabled"];function uC(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function dC(e){return!e||e.trim()==="#"}function v0({tagName:e,disabled:t,href:r,target:n,rel:o,role:i,onClick:s,tabIndex:l=0,type:a}){e||(r!=null||n!=null||o!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:a||"button",disabled:t},u];const p=h=>{if((t||e==="a"&&dC(r))&&h.preventDefault(),t){h.stopPropagation();return}s==null||s(h)},d=h=>{h.key===" "&&(h.preventDefault(),p(h))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:p,onKeyDown:d},u]}const hC=le.forwardRef((e,t)=>{let{as:r,disabled:n}=e,o=uC(e,cC);const[i,{tagName:s}]=v0(Object.assign({tagName:r,disabled:n},o));return N.jsx(s,Object.assign({},o,i,{ref:t}))});hC.displayName="Button";const y0=le.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:o=!1,disabled:i=!1,className:s,...l},a)=>{const u=Bd(t,"btn"),[p,{tagName:d}]=v0({tagName:e,disabled:i,...l}),h=d;return N.jsx(h,{...p,...l,ref:a,disabled:i,className:ul(s,u,o&&"active",r&&`${u}-${r}`,n&&`${u}-${n}`,l.href&&i&&"disabled")})});y0.displayName="Button";const pC=y0,b0=le.forwardRef((e,t)=>{const r=g0(e);return N.jsx(pC,{...r,ref:t,disabled:!0,tabIndex:-1})});b0.displayName="PlaceholderButton";const fC=b0,w0=le.forwardRef(({as:e="span",...t},r)=>{const n=g0(t);return N.jsx(e,{...n,ref:r})});w0.displayName="Placeholder";const Bs=Object.assign(w0,{Button:fC});function mC({lightMode:e}){const[t,r]=le.useState([]),[n,o]=le.useState(!1),[i,s]=le.useState(0),[l,a]=le.useState("");function u(p){return`<sl-icon name="${["emoji-angry","emoji-frown","emoji-expressionless","emoji-smile","emoji-laughing"][p-1]}"></sl-icon>`}return le.useEffect(function(){r([]),fetch("https://dog-api.kinduff.com/api/facts").then(p=>{if(!p.ok)throw new Error("Something is wrong with the API");return p.json()}).then(p=>{r(p.facts[0])})},[n]),N.jsxs("footer",{className:"fade-in-footer",children:[N.jsxs("div",{className:"footer__title-container",children:[N.jsx(Er,{icon:"fluent-emoji:dog-face",className:"scale",width:"32",height:"32"}),N.jsx("div",{className:"footer__title capitalize",children:"Random dog fact"}),N.jsx("span",{onClick:()=>o(p=>!p),className:"material-symbols-outlined pointer hover rotate",children:"refresh"})]}),t.length>0?N.jsxs("div",{style:{border:e?"1px dashed black":"1px dashed white"},className:"footer__fact",children:[" ",t]}):N.jsxs(N.Fragment,{children:[N.jsxs(Bs,{animation:"glow",children:[N.jsx(Bs,{style:{width:"30vw"}})," "]}),N.jsxs(Bs,{animation:"glow",children:[N.jsx(Bs,{style:{width:"30vw",marginBottom:"2vh"}})," "]})]}),N.jsxs("div",{className:"footer__rating",children:[N.jsx("span",{children:"Rate this page"}),i?N.jsx(c0,{name:"jackInTheBox",duration:1e3,iterations:1,play:!0,children:N.jsx("div",{children:"Thanks!"})}):N.jsx(b_,{className:e?`light rating--${l}`:`dark rating--${l}`,label:"Rating",getSymbol:u,onSlHover:p=>a(p.target.value),onSlChange:()=>s(!0)})]}),N.jsx("a",{href:"https://github.com/ste1v0",target:"_blank",rel:"noreferrer",children:N.jsx("div",{className:e?"footer__icons footer__github--dark pointer":"footer__icons footer__github--light pointer"})})]})}function gC(){const[e,t]=le.useState(localStorage.getItem("font")||!1),[r,n]=le.useState(localStorage.getItem("mode")||!1);return N.jsxs("div",{style:{fontSize:e?"var(--increased)":"var(--default)",color:r?"black":"white"},className:r?"bg--light":"bg--dark",children:[N.jsx(n1,{lightMode:r,setLightMode:n,fontIncreased:e,setFontIncreased:t}),N.jsx(rC,{lightMode:r,fontIncreased:e}),N.jsx(mC,{lightMode:r})]})}cu("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");oc.createRoot(document.getElementById("root")).render(N.jsx(N.Fragment,{children:N.jsx(gC,{})}));
