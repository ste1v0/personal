function f0(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(i,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function Ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Op={exports:{}},za={},Np={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),k0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Ed=Symbol.iterator;function C0(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var Mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Rp={};function _n(e,t,r){this.props=e,this.context=t,this.refs=Rp,this.updater=r||Mp}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fp(){}Fp.prototype=_n.prototype;function uu(e,t,r){this.props=e,this.context=t,this.refs=Rp,this.updater=r||Mp}var du=uu.prototype=new Fp;du.constructor=uu;Dp(du,_n.prototype);du.isPureReactComponent=!0;var Td=Array.isArray,Bp=Object.prototype.hasOwnProperty,hu={current:null},Vp={key:!0,ref:!0,__self:!0,__source:!0};function jp(e,t,r){var i,n={},s=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Bp.call(t,i)&&!Vp.hasOwnProperty(i)&&(n[i]=t[i]);var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)n[i]===void 0&&(n[i]=l[i]);return{$$typeof:Bs,type:e,key:s,ref:o,props:n,_owner:hu.current}}function $0(e,t){return{$$typeof:Bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs}function E0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var zd=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?E0(""+e.key):t.toString(36)}function Io(e,t,r,i,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Bs:case m0:o=!0}}if(o)return o=e,n=n(o),e=i===""?"."+rl(o,0):i,Td(n)?(r="",e!=null&&(r=e.replace(zd,"$&/")+"/"),Io(n,t,r,"",function(c){return c})):n!=null&&(pu(n)&&(n=$0(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(zd,"$&/")+"/")+e)),t.push(n)),1;if(o=0,i=i===""?".":i+":",Td(e))for(var l=0;l<e.length;l++){s=e[l];var a=i+rl(s,l);o+=Io(s,t,r,a,n)}else if(a=C0(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=i+rl(s,l++),o+=Io(s,t,r,a,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function so(e,t,r){if(e==null)return e;var i=[],n=0;return Io(e,i,"","",function(s){return t.call(r,s,n++)}),i}function T0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Oo={transition:null},z0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:hu};Q.Children={map:so,forEach:function(e,t,r){so(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=_n;Q.Fragment=g0;Q.Profiler=y0;Q.PureComponent=uu;Q.StrictMode=v0;Q.Suspense=x0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;Q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Dp({},e.props),n=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=hu.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Bp.call(t,a)&&!Vp.hasOwnProperty(a)&&(i[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:Bs,type:e.type,key:n,ref:s,props:i,_owner:o}};Q.createContext=function(e){return e={$$typeof:w0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b0,_context:e},e.Consumer=e};Q.createElement=jp;Q.createFactory=function(e){var t=jp.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:_0,render:e}};Q.isValidElement=pu;Q.lazy=function(e){return{$$typeof:S0,_payload:{_status:-1,_result:e},_init:T0}};Q.memo=function(e,t){return{$$typeof:k0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return at.current.useCallback(e,t)};Q.useContext=function(e){return at.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return at.current.useDeferredValue(e)};Q.useEffect=function(e,t){return at.current.useEffect(e,t)};Q.useId=function(){return at.current.useId()};Q.useImperativeHandle=function(e,t,r){return at.current.useImperativeHandle(e,t,r)};Q.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return at.current.useMemo(e,t)};Q.useReducer=function(e,t,r){return at.current.useReducer(e,t,r)};Q.useRef=function(e){return at.current.useRef(e)};Q.useState=function(e){return at.current.useState(e)};Q.useSyncExternalStore=function(e,t,r){return at.current.useSyncExternalStore(e,t,r)};Q.useTransition=function(){return at.current.useTransition()};Q.version="18.2.0";Np.exports=Q;var Y=Np.exports;const ce=Ip(Y),j=f0({__proto__:null,default:ce},[Y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=Y,L0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,O0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function Hp(e,t,r){var i,n={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)I0.call(t,i)&&!N0.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:L0,type:e,key:s,ref:o,props:n,_owner:O0.current}}za.Fragment=P0;za.jsx=Hp;za.jsxs=Hp;Op.exports=za;var T=Op.exports,Yl={},Up={exports:{}},Tt={},Wp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,V){var q=O.length;O.push(V);e:for(;0<q;){var be=q-1>>>1,ze=O[be];if(0<n(ze,V))O[be]=V,O[q]=ze,q=be;else break e}}function r(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],q=O.pop();if(q!==V){O[0]=q;e:for(var be=0,ze=O.length,io=ze>>>1;be<io;){var ci=2*(be+1)-1,tl=O[ci],ui=ci+1,no=O[ui];if(0>n(tl,q))ui<ze&&0>n(no,tl)?(O[be]=no,O[ui]=q,be=ui):(O[be]=tl,O[ci]=q,be=ci);else if(ui<ze&&0>n(no,q))O[be]=no,O[ui]=q,be=ui;else break e}}return V}function n(O,V){var q=O.sortIndex-V.sortIndex;return q!==0?q:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,d=null,p=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var V=r(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=O)i(c),V.sortIndex=V.expirationTime,t(a,V);else break;V=r(c)}}function _(O){if(w=!1,b(O),!y)if(r(a)!==null)y=!0,Oe(x);else{var V=r(c);V!==null&&We(_,V.startTime-O)}}function x(O,V){y=!1,w&&(w=!1,v($),$=-1),g=!0;var q=p;try{for(b(V),d=r(a);d!==null&&(!(d.expirationTime>V)||O&&!N());){var be=d.callback;if(typeof be=="function"){d.callback=null,p=d.priorityLevel;var ze=be(d.expirationTime<=V);V=e.unstable_now(),typeof ze=="function"?d.callback=ze:d===r(a)&&i(a),b(V)}else i(a);d=r(a)}if(d!==null)var io=!0;else{var ci=r(c);ci!==null&&We(_,ci.startTime-V),io=!1}return io}finally{d=null,p=q,g=!1}}var S=!1,E=null,$=-1,P=5,C=-1;function N(){return!(e.unstable_now()-C<P)}function D(){if(E!==null){var O=e.unstable_now();C=O;var V=!0;try{V=E(!0,O)}finally{V?te():(S=!1,E=null)}}else S=!1}var te;if(typeof f=="function")te=function(){f(D)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ye=le.port2;le.port1.onmessage=D,te=function(){ye.postMessage(null)}}else te=function(){k(D,0)};function Oe(O){E=O,S||(S=!0,te())}function We(O,V){$=k(function(){O(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Oe(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var q=p;p=V;try{return O()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=p;p=O;try{return V()}finally{p=q}},e.unstable_scheduleCallback=function(O,V,q){var be=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?be+q:be):q=be,O){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=q+ze,O={id:h++,callback:V,priorityLevel:O,startTime:q,expirationTime:ze,sortIndex:-1},q>be?(O.sortIndex=q,t(c,O),r(a)===null&&O===r(c)&&(w?(v($),$=-1):w=!0,We(_,q-be))):(O.sortIndex=ze,t(a,O),y||g||(y=!0,Oe(x))),O},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(O){var V=p;return function(){var q=p;p=V;try{return O.apply(this,arguments)}finally{p=q}}}})(Gp);Wp.exports=Gp;var M0=Wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=Y,Et=M0;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qp=new Set,gs={};function Ii(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(gs[e]=t,e=0;e<t.length;e++)qp.add(t[e])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Ld={};function R0(e){return Xl.call(Ld,e)?!0:Xl.call(Ad,e)?!1:D0.test(e)?Ld[e]=!0:(Ad[e]=!0,!1)}function F0(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B0(e,t,r,i){if(t===null||typeof t>"u"||F0(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,r,i,n,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fu=/[\-:]([a-z])/g;function mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fu,mu);Ye[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fu,mu);Ye[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fu,mu);Ye[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function gu(e,t,r,i){var n=Ye.hasOwnProperty(t)?Ye[t]:null;(n!==null?n.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B0(t,r,n,i)&&(r=null),i||n===null?R0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,i=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Cr=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Pd&&e[Pd]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,il;function Gn(e){if(il===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var nl=!1;function sl(e,t){if(!e||nl)return"";nl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),s=i.stack.split(`
`),o=n.length-1,l=s.length-1;1<=o&&0<=l&&n[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(n[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||n[o]!==s[l]){var a=`
`+n[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{nl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Gn(e):""}function V0(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function ec(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hi:return"Fragment";case ji:return"Portal";case Ql:return"Profiler";case vu:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xp:return(e.displayName||"Context")+".Consumer";case Yp:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bu:return t=e.displayName||null,t!==null?t:ec(e.type)||"Memo";case Pr:t=e._payload,e=e._init;try{return ec(e(t))}catch{}}return null}function j0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ec(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Zp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=H0(e))}function Jp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Zp(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tc(e,t){var r=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Id(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Qr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ef(e,t){t=t.checked,t!=null&&gu(e,"checked",t,!1)}function rc(e,t){ef(e,t);var r=Qr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ic(e,t.type,r):t.hasOwnProperty("defaultValue")&&ic(e,t.type,Qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Od(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ic(e,t,r){(t!=="number"||Xo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Kn=Array.isArray;function tn(e,t,r,i){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Qr(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(Kn(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Qr(r)}}function tf(e,t){var r=Qr(t.value),i=Qr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){U0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function sf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function of(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=sf(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,n):e[r]=n}}var W0=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(W0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ac(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lc=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cc=null,rn=null,nn=null;function Dd(e){if(e=Hs(e)){if(typeof cc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Oa(t),cc(e.stateNode,e.type,t))}}function af(e){rn?nn?nn.push(e):nn=[e]:rn=e}function lf(){if(rn){var e=rn,t=nn;if(nn=rn=null,Dd(e),t)for(e=0;e<t.length;e++)Dd(t[e])}}function cf(e,t){return e(t)}function uf(){}var ol=!1;function df(e,t,r){if(ol)return e(t,r);ol=!0;try{return cf(e,t,r)}finally{ol=!1,(rn!==null||nn!==null)&&(uf(),lf())}}function ys(e,t){var r=e.stateNode;if(r===null)return null;var i=Oa(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var uc=!1;if(wr)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{uc=!1}function G0(e,t,r,i,n,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var Qn=!1,Qo=null,Zo=!1,dc=null,K0={onError:function(e){Qn=!0,Qo=e}};function q0(e,t,r,i,n,s,o,l,a){Qn=!1,Qo=null,G0.apply(K0,arguments)}function Y0(e,t,r,i,n,s,o,l,a){if(q0.apply(this,arguments),Qn){if(Qn){var c=Qo;Qn=!1,Qo=null}else throw Error(A(198));Zo||(Zo=!0,dc=c)}}function Oi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rd(e){if(Oi(e)!==e)throw Error(A(188))}function X0(e){var t=e.alternate;if(!t){if(t=Oi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,i=t;;){var n=r.return;if(n===null)break;var s=n.alternate;if(s===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===r)return Rd(n),e;if(s===i)return Rd(n),t;s=s.sibling}throw Error(A(188))}if(r.return!==i.return)r=n,i=s;else{for(var o=!1,l=n.child;l;){if(l===r){o=!0,r=n,i=s;break}if(l===i){o=!0,i=n,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,i=n;break}if(l===i){o=!0,i=s,r=n;break}l=l.sibling}if(!o)throw Error(A(189))}}if(r.alternate!==i)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function pf(e){return e=X0(e),e!==null?ff(e):null}function ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ff(e);if(t!==null)return t;e=e.sibling}return null}var mf=Et.unstable_scheduleCallback,Fd=Et.unstable_cancelCallback,Q0=Et.unstable_shouldYield,Z0=Et.unstable_requestPaint,Ee=Et.unstable_now,J0=Et.unstable_getCurrentPriorityLevel,_u=Et.unstable_ImmediatePriority,gf=Et.unstable_UserBlockingPriority,Jo=Et.unstable_NormalPriority,ev=Et.unstable_LowPriority,vf=Et.unstable_IdlePriority,Aa=null,ur=null;function tv(e){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:nv,rv=Math.log,iv=Math.LN2;function nv(e){return e>>>=0,e===0?32:31-(rv(e)/iv|0)|0}var co=64,uo=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,n=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~n;l!==0?i=qn(l):(s&=o,s!==0&&(i=qn(s)))}else o=r&~n,o!==0?i=qn(o):s!==0&&(i=qn(s));if(i===0)return 0;if(t!==0&&t!==i&&!(t&n)&&(n=i&-i,s=t&-t,n>=s||n===16&&(s&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Qt(t),n=1<<r,i|=e[r],t&=~n;return i}function sv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ov(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,a=n[o];a===-1?(!(l&r)||l&i)&&(n[o]=sv(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function hc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function al(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=r}function av(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Qt(r),s=1<<n;t[n]=0,i[n]=-1,e[n]=-1,r&=~s}}function xu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Qt(r),n=1<<i;n&t|e[i]&t&&(e[i]|=t),r&=~n}}var ae=0;function bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wf,ku,_f,xf,kf,pc=!1,ho=[],jr=null,Hr=null,Ur=null,bs=new Map,ws=new Map,Or=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(t.pointerId)}}function Pn(e,t,r,i,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Hs(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function cv(e,t,r,i,n){switch(t){case"focusin":return jr=Pn(jr,e,t,r,i,n),!0;case"dragenter":return Hr=Pn(Hr,e,t,r,i,n),!0;case"mouseover":return Ur=Pn(Ur,e,t,r,i,n),!0;case"pointerover":var s=n.pointerId;return bs.set(s,Pn(bs.get(s)||null,e,t,r,i,n)),!0;case"gotpointercapture":return s=n.pointerId,ws.set(s,Pn(ws.get(s)||null,e,t,r,i,n)),!0}return!1}function Sf(e){var t=gi(e.target);if(t!==null){var r=Oi(t);if(r!==null){if(t=r.tag,t===13){if(t=hf(r),t!==null){e.blockedOn=t,kf(e.priority,function(){_f(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);lc=i,r.target.dispatchEvent(i),lc=null}else return t=Hs(r),t!==null&&ku(t),e.blockedOn=r,!1;t.shift()}return!0}function Vd(e,t,r){No(e)&&r.delete(t)}function uv(){pc=!1,jr!==null&&No(jr)&&(jr=null),Hr!==null&&No(Hr)&&(Hr=null),Ur!==null&&No(Ur)&&(Ur=null),bs.forEach(Vd),ws.forEach(Vd)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,uv)))}function _s(e){function t(n){return In(n,e)}if(0<ho.length){In(ho[0],e);for(var r=1;r<ho.length;r++){var i=ho[r];i.blockedOn===e&&(i.blockedOn=null)}}for(jr!==null&&In(jr,e),Hr!==null&&In(Hr,e),Ur!==null&&In(Ur,e),bs.forEach(t),ws.forEach(t),r=0;r<Or.length;r++)i=Or[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Or.length&&(r=Or[0],r.blockedOn===null);)Sf(r),r.blockedOn===null&&Or.shift()}var sn=Cr.ReactCurrentBatchConfig,ta=!0;function dv(e,t,r,i){var n=ae,s=sn.transition;sn.transition=null;try{ae=1,Su(e,t,r,i)}finally{ae=n,sn.transition=s}}function hv(e,t,r,i){var n=ae,s=sn.transition;sn.transition=null;try{ae=4,Su(e,t,r,i)}finally{ae=n,sn.transition=s}}function Su(e,t,r,i){if(ta){var n=fc(e,t,r,i);if(n===null)vl(e,t,i,ra,r),Bd(e,i);else if(cv(n,e,t,r,i))i.stopPropagation();else if(Bd(e,i),t&4&&-1<lv.indexOf(e)){for(;n!==null;){var s=Hs(n);if(s!==null&&wf(s),s=fc(e,t,r,i),s===null&&vl(e,t,i,ra,r),s===n)break;n=s}n!==null&&i.stopPropagation()}else vl(e,t,i,null,r)}}var ra=null;function fc(e,t,r,i){if(ra=null,e=wu(i),e=gi(e),e!==null)if(t=Oi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=hf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function Cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case _u:return 1;case gf:return 4;case Jo:case ev:return 16;case vf:return 536870912;default:return 16}default:return 16}}var Dr=null,Cu=null,Mo=null;function $f(){if(Mo)return Mo;var e,t=Cu,r=t.length,i,n="value"in Dr?Dr.value:Dr.textContent,s=n.length;for(e=0;e<r&&t[e]===n[e];e++);var o=r-e;for(i=1;i<=o&&t[r-i]===n[s-i];i++);return Mo=n.slice(e,1<i?1-i:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function jd(){return!1}function zt(e){function t(r,i,n,s,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:jd,this.isPropagationStopped=jd,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=zt(xn),js=xe({},xn,{view:0,detail:0}),pv=zt(js),ll,cl,On,La=xe({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(ll=e.screenX-On.screenX,cl=e.screenY-On.screenY):cl=ll=0,On=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Hd=zt(La),fv=xe({},La,{dataTransfer:0}),mv=zt(fv),gv=xe({},js,{relatedTarget:0}),ul=zt(gv),vv=xe({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=zt(vv),bv=xe({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=zt(bv),_v=xe({},xn,{data:0}),Ud=zt(_v),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sv[e])?!!t[e]:!1}function Eu(){return Cv}var $v=xe({},js,{key:function(e){if(e.key){var t=xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ev=zt($v),Tv=xe({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=zt(Tv),zv=xe({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Av=zt(zv),Lv=xe({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=zt(Lv),Iv=xe({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=zt(Iv),Nv=[9,13,27,32],Tu=wr&&"CompositionEvent"in window,Zn=null;wr&&"documentMode"in document&&(Zn=document.documentMode);var Mv=wr&&"TextEvent"in window&&!Zn,Ef=wr&&(!Tu||Zn&&8<Zn&&11>=Zn),Gd=" ",Kd=!1;function Tf(e,t){switch(e){case"keyup":return Nv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ui=!1;function Dv(e,t){switch(e){case"compositionend":return zf(t);case"keypress":return t.which!==32?null:(Kd=!0,Gd);case"textInput":return e=t.data,e===Gd&&Kd?null:e;default:return null}}function Rv(e,t){if(Ui)return e==="compositionend"||!Tu&&Tf(e,t)?(e=$f(),Mo=Cu=Dr=null,Ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fv[e.type]:t==="textarea"}function Af(e,t,r,i){af(i),t=ia(t,"onChange"),0<t.length&&(r=new $u("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Jn=null,xs=null;function Bv(e){Vf(e,0)}function Pa(e){var t=Ki(e);if(Jp(t))return e}function Vv(e,t){if(e==="change")return t}var Lf=!1;if(wr){var dl;if(wr){var hl="oninput"in document;if(!hl){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),hl=typeof Yd.oninput=="function"}dl=hl}else dl=!1;Lf=dl&&(!document.documentMode||9<document.documentMode)}function Xd(){Jn&&(Jn.detachEvent("onpropertychange",Pf),xs=Jn=null)}function Pf(e){if(e.propertyName==="value"&&Pa(xs)){var t=[];Af(t,xs,e,wu(e)),df(Bv,t)}}function jv(e,t,r){e==="focusin"?(Xd(),Jn=t,xs=r,Jn.attachEvent("onpropertychange",Pf)):e==="focusout"&&Xd()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(xs)}function Uv(e,t){if(e==="click")return Pa(t)}function Wv(e,t){if(e==="input"||e==="change")return Pa(t)}function Gv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Gv;function ks(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Xl.call(t,n)||!Jt(e[n],t[n]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,t){var r=Qd(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qd(r)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Xo(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kv(e){var t=Of(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&If(r.ownerDocument.documentElement,r)){if(i!==null&&zu(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,s=Math.min(i.start,n);i=i.end===void 0?s:Math.min(i.end,n),!e.extend&&s>i&&(n=i,i=s,s=n),n=Zd(r,s);var o=Zd(r,i);n&&o&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qv=wr&&"documentMode"in document&&11>=document.documentMode,Wi=null,mc=null,es=null,gc=!1;function Jd(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;gc||Wi==null||Wi!==Xo(i)||(i=Wi,"selectionStart"in i&&zu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),es&&ks(es,i)||(es=i,i=ia(mc,"onSelect"),0<i.length&&(t=new $u("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Wi)))}function fo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Gi={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},pl={},Nf={};wr&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Ia(e){if(pl[e])return pl[e];if(!Gi[e])return e;var t=Gi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Nf)return pl[e]=t[r];return e}var Mf=Ia("animationend"),Df=Ia("animationiteration"),Rf=Ia("animationstart"),Ff=Ia("transitionend"),Bf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(e,t){Bf.set(e,t),Ii(t,[e])}for(var fl=0;fl<eh.length;fl++){var ml=eh[fl],Yv=ml.toLowerCase(),Xv=ml[0].toUpperCase()+ml.slice(1);ii(Yv,"on"+Xv)}ii(Mf,"onAnimationEnd");ii(Df,"onAnimationIteration");ii(Rf,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(Ff,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function th(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Y0(i,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],n=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&n.isPropagationStopped())break e;th(n,l,c),s=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&n.isPropagationStopped())break e;th(n,l,c),s=a}}}if(Zo)throw e=dc,Zo=!1,dc=null,e}function he(e,t){var r=t[_c];r===void 0&&(r=t[_c]=new Set);var i=e+"__bubble";r.has(i)||(jf(t,e,2,!1),r.add(i))}function gl(e,t,r){var i=0;t&&(i|=4),jf(r,e,i,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[mo]){e[mo]=!0,qp.forEach(function(r){r!=="selectionchange"&&(Qv.has(r)||gl(r,!1,e),gl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,gl("selectionchange",!1,t))}}function jf(e,t,r,i){switch(Cf(t)){case 1:var n=dv;break;case 4:n=hv;break;default:n=Su}r=n.bind(null,t,r,e),n=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function vl(e,t,r,i,n){var s=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===n||l.nodeType===8&&l.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}l=l.parentNode}}i=i.return}df(function(){var c=s,h=wu(r),d=[];e:{var p=Bf.get(e);if(p!==void 0){var g=$u,y=e;switch(e){case"keypress":if(Do(r)===0)break e;case"keydown":case"keyup":g=Ev;break;case"focusin":y="focus",g=ul;break;case"focusout":y="blur",g=ul;break;case"beforeblur":case"afterblur":g=ul;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Av;break;case Mf:case Df:case Rf:g=yv;break;case Ff:g=Pv;break;case"scroll":g=pv;break;case"wheel":g=Ov;break;case"copy":case"cut":case"paste":g=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wd}var w=(t&4)!==0,k=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var f=c,b;f!==null;){b=f;var _=b.stateNode;if(b.tag===5&&_!==null&&(b=_,v!==null&&(_=ys(f,v),_!=null&&w.push(Cs(f,_,b)))),k)break;f=f.return}0<w.length&&(p=new g(p,y,null,r,h),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==lc&&(y=r.relatedTarget||r.fromElement)&&(gi(y)||y[_r]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=c,y=y?gi(y):null,y!==null&&(k=Oi(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=Hd,_="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Wd,_="onPointerLeave",v="onPointerEnter",f="pointer"),k=g==null?p:Ki(g),b=y==null?p:Ki(y),p=new w(_,f+"leave",g,r,h),p.target=k,p.relatedTarget=b,_=null,gi(h)===c&&(w=new w(v,f+"enter",y,r,h),w.target=b,w.relatedTarget=k,_=w),k=_,g&&y)t:{for(w=g,v=y,f=0,b=w;b;b=Fi(b))f++;for(b=0,_=v;_;_=Fi(_))b++;for(;0<f-b;)w=Fi(w),f--;for(;0<b-f;)v=Fi(v),b--;for(;f--;){if(w===v||v!==null&&w===v.alternate)break t;w=Fi(w),v=Fi(v)}w=null}else w=null;g!==null&&rh(d,p,g,w,!1),y!==null&&k!==null&&rh(d,k,y,w,!0)}}e:{if(p=c?Ki(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=Vv;else if(qd(p))if(Lf)x=Wv;else{x=Hv;var S=jv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Uv);if(x&&(x=x(e,c))){Af(d,x,r,h);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&ic(p,"number",p.value)}switch(S=c?Ki(c):window,e){case"focusin":(qd(S)||S.contentEditable==="true")&&(Wi=S,mc=c,es=null);break;case"focusout":es=mc=Wi=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Jd(d,r,h);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Jd(d,r,h)}var E;if(Tu)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ui?Tf(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(Ef&&r.locale!=="ko"&&(Ui||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ui&&(E=$f()):(Dr=h,Cu="value"in Dr?Dr.value:Dr.textContent,Ui=!0)),S=ia(c,$),0<S.length&&($=new Ud($,e,null,r,h),d.push({event:$,listeners:S}),E?$.data=E:(E=zf(r),E!==null&&($.data=E)))),(E=Mv?Dv(e,r):Rv(e,r))&&(c=ia(c,"onBeforeInput"),0<c.length&&(h=new Ud("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=E))}Vf(d,t)})}function Cs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ia(e,t){for(var r=t+"Capture",i=[];e!==null;){var n=e,s=n.stateNode;n.tag===5&&s!==null&&(n=s,s=ys(e,r),s!=null&&i.unshift(Cs(e,s,n)),s=ys(e,t),s!=null&&i.push(Cs(e,s,n))),e=e.return}return i}function Fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rh(e,t,r,i,n){for(var s=t._reactName,o=[];r!==null&&r!==i;){var l=r,a=l.alternate,c=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&c!==null&&(l=c,n?(a=ys(r,s),a!=null&&o.unshift(Cs(r,a,l))):n||(a=ys(r,s),a!=null&&o.push(Cs(r,a,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Zv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(Zv,`
`).replace(Jv,"")}function go(e,t,r){if(t=ih(t),ih(e)!==t&&r)throw Error(A(425))}function na(){}var vc=null,yc=null;function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(ry)}:wc;function ry(e){setTimeout(function(){throw e})}function yl(e,t){var r=t,i=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){e.removeChild(n),_s(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);_s(t)}function Wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),cr="__reactFiber$"+kn,$s="__reactProps$"+kn,_r="__reactContainer$"+kn,_c="__reactEvents$"+kn,iy="__reactListeners$"+kn,ny="__reactHandles$"+kn;function gi(e){var t=e[cr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[_r]||r[cr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=sh(e);e!==null;){if(r=e[cr])return r;e=sh(e)}return t}e=r,r=e.parentNode}return null}function Hs(e){return e=e[cr]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Oa(e){return e[$s]||null}var xc=[],qi=-1;function ni(e){return{current:e}}function pe(e){0>qi||(e.current=xc[qi],xc[qi]=null,qi--)}function de(e,t){qi++,xc[qi]=e.current,e.current=t}var Zr={},rt=ni(Zr),ht=ni(!1),ki=Zr;function dn(e,t){var r=e.type.contextTypes;if(!r)return Zr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var n={},s;for(s in r)n[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function pt(e){return e=e.childContextTypes,e!=null}function sa(){pe(ht),pe(rt)}function oh(e,t,r){if(rt.current!==Zr)throw Error(A(168));de(rt,t),de(ht,r)}function Hf(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in t))throw Error(A(108,j0(e)||"Unknown",n));return xe({},r,i)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zr,ki=rt.current,de(rt,e),de(ht,ht.current),!0}function ah(e,t,r){var i=e.stateNode;if(!i)throw Error(A(169));r?(e=Hf(e,t,ki),i.__reactInternalMemoizedMergedChildContext=e,pe(ht),pe(rt),de(rt,e)):pe(ht),de(ht,r)}var gr=null,Na=!1,bl=!1;function Uf(e){gr===null?gr=[e]:gr.push(e)}function sy(e){Na=!0,Uf(e)}function si(){if(!bl&&gr!==null){bl=!0;var e=0,t=ae;try{var r=gr;for(ae=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}gr=null,Na=!1}catch(n){throw gr!==null&&(gr=gr.slice(e+1)),mf(_u,si),n}finally{ae=t,bl=!1}}return null}var Yi=[],Xi=0,aa=null,la=0,Ot=[],Nt=0,Si=null,vr=1,yr="";function hi(e,t){Yi[Xi++]=la,Yi[Xi++]=aa,aa=e,la=t}function Wf(e,t,r){Ot[Nt++]=vr,Ot[Nt++]=yr,Ot[Nt++]=Si,Si=e;var i=vr;e=yr;var n=32-Qt(i)-1;i&=~(1<<n),r+=1;var s=32-Qt(t)+n;if(30<s){var o=n-n%5;s=(i&(1<<o)-1).toString(32),i>>=o,n-=o,vr=1<<32-Qt(t)+n|r<<n|i,yr=s+e}else vr=1<<s|r<<n|i,yr=e}function Au(e){e.return!==null&&(hi(e,1),Wf(e,1,0))}function Lu(e){for(;e===aa;)aa=Yi[--Xi],Yi[Xi]=null,la=Yi[--Xi],Yi[Xi]=null;for(;e===Si;)Si=Ot[--Nt],Ot[Nt]=null,yr=Ot[--Nt],Ot[Nt]=null,vr=Ot[--Nt],Ot[Nt]=null}var Ct=null,kt=null,fe=!1,Xt=null;function Gf(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lh(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,kt=Wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Si!==null?{id:vr,overflow:yr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,kt=null,!0):!1;default:return!1}}function kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(fe){var t=kt;if(t){var r=t;if(!lh(e,t)){if(kc(e))throw Error(A(418));t=Wr(r.nextSibling);var i=Ct;t&&lh(e,t)?Gf(i,r):(e.flags=e.flags&-4097|2,fe=!1,Ct=e)}}else{if(kc(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,Ct=e}}}function ch(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function vo(e){if(e!==Ct)return!1;if(!fe)return ch(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bc(e.type,e.memoizedProps)),t&&(t=kt)){if(kc(e))throw Kf(),Error(A(418));for(;t;)Gf(e,t),t=Wr(t.nextSibling)}if(ch(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=Wr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Ct?Wr(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=kt;e;)e=Wr(e.nextSibling)}function hn(){kt=Ct=null,fe=!1}function Pu(e){Xt===null?Xt=[e]:Xt.push(e)}var oy=Cr.ReactCurrentBatchConfig;function qt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ca=ni(null),ua=null,Qi=null,Iu=null;function Ou(){Iu=Qi=ua=null}function Nu(e){var t=ca.current;pe(ca),e._currentValue=t}function Cc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function on(e,t){ua=e,Iu=Qi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Iu!==e)if(e={context:e,memoizedValue:t,next:null},Qi===null){if(ua===null)throw Error(A(308));Qi=e,ua.dependencies={lanes:0,firstContext:e}}else Qi=Qi.next=e;return t}var vi=null;function Mu(e){vi===null?vi=[e]:vi.push(e)}function qf(e,t,r,i){var n=t.interleaved;return n===null?(r.next=r,Mu(t)):(r.next=n.next,n.next=r),t.interleaved=r,xr(e,i)}function xr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ir=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ee&2){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,xr(e,r)}return n=i.interleaved,n===null?(t.next=t,Mu(i)):(t.next=n.next,n.next=t),i.interleaved=t,xr(e,r)}function Ro(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,xu(e,r)}}function uh(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?n=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?n=s=t:s=s.next=t}else n=s=t;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function da(e,t,r,i){var n=e.updateQueue;Ir=!1;var s=n.firstBaseUpdate,o=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var d=n.baseState;o=0,h=c=a=null,l=s;do{var p=l.lane,g=l.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,g=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=xe({},d,p);break e;case 2:Ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=g,a=d):h=h.next=g,o|=p;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(h===null&&(a=d),n.baseState=a,n.firstBaseUpdate=c,n.lastBaseUpdate=h,t=n.shared.interleaved,t!==null){n=t;do o|=n.lane,n=n.next;while(n!==t)}else s===null&&(n.shared.lanes=0);$i|=o,e.lanes=o,e.memoizedState=d}}function dh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(A(191,n));n.call(i)}}}var Xf=new Kp.Component().refs;function $c(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:xe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ma={isMounted:function(e){return(e=e._reactInternals)?Oi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=st(),n=qr(e),s=br(i,n);s.payload=t,r!=null&&(s.callback=r),t=Gr(e,s,n),t!==null&&(Zt(t,e,n,i),Ro(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=st(),n=qr(e),s=br(i,n);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Gr(e,s,n),t!==null&&(Zt(t,e,n,i),Ro(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),i=qr(e),n=br(r,i);n.tag=2,t!=null&&(n.callback=t),t=Gr(e,n,i),t!==null&&(Zt(t,e,i,r),Ro(t,e,i))}};function hh(e,t,r,i,n,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,o):t.prototype&&t.prototype.isPureReactComponent?!ks(r,i)||!ks(n,s):!0}function Qf(e,t,r){var i=!1,n=Zr,s=t.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(n=pt(t)?ki:rt.current,i=t.contextTypes,s=(i=i!=null)?dn(e,n):Zr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),t}function ph(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Ec(e,t,r,i){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs=Xf,Du(e);var s=t.contextType;typeof s=="object"&&s!==null?n.context=Rt(s):(s=pt(t)?ki:rt.current,n.context=dn(e,s)),n.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&($c(e,t,s,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Ma.enqueueReplaceState(n,n.state,null),da(e,r,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var i=r.stateNode}if(!i)throw Error(A(147,e));var n=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=n.refs;l===Xf&&(l=n.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function Zf(e){function t(v,f){if(e){var b=v.deletions;b===null?(v.deletions=[f],v.flags|=16):b.push(f)}}function r(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function i(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function n(v,f){return v=Yr(v,f),v.index=0,v.sibling=null,v}function s(v,f,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<f?(v.flags|=2,f):b):(v.flags|=2,f)):(v.flags|=1048576,f)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,b,_){return f===null||f.tag!==6?(f=$l(b,v.mode,_),f.return=v,f):(f=n(f,b),f.return=v,f)}function a(v,f,b,_){var x=b.type;return x===Hi?h(v,f,b.props.children,_,b.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pr&&fh(x)===f.type)?(_=n(f,b.props),_.ref=Nn(v,f,b),_.return=v,_):(_=Uo(b.type,b.key,b.props,null,v.mode,_),_.ref=Nn(v,f,b),_.return=v,_)}function c(v,f,b,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==b.containerInfo||f.stateNode.implementation!==b.implementation?(f=El(b,v.mode,_),f.return=v,f):(f=n(f,b.children||[]),f.return=v,f)}function h(v,f,b,_,x){return f===null||f.tag!==7?(f=xi(b,v.mode,_,x),f.return=v,f):(f=n(f,b),f.return=v,f)}function d(v,f,b){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$l(""+f,v.mode,b),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oo:return b=Uo(f.type,f.key,f.props,null,v.mode,b),b.ref=Nn(v,null,f),b.return=v,b;case ji:return f=El(f,v.mode,b),f.return=v,f;case Pr:var _=f._init;return d(v,_(f._payload),b)}if(Kn(f)||An(f))return f=xi(f,v.mode,b,null),f.return=v,f;yo(v,f)}return null}function p(v,f,b,_){var x=f!==null?f.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return x!==null?null:l(v,f,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:return b.key===x?a(v,f,b,_):null;case ji:return b.key===x?c(v,f,b,_):null;case Pr:return x=b._init,p(v,f,x(b._payload),_)}if(Kn(b)||An(b))return x!==null?null:h(v,f,b,_,null);yo(v,b)}return null}function g(v,f,b,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(b)||null,l(f,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:return v=v.get(_.key===null?b:_.key)||null,a(f,v,_,x);case ji:return v=v.get(_.key===null?b:_.key)||null,c(f,v,_,x);case Pr:var S=_._init;return g(v,f,b,S(_._payload),x)}if(Kn(_)||An(_))return v=v.get(b)||null,h(f,v,_,x,null);yo(f,_)}return null}function y(v,f,b,_){for(var x=null,S=null,E=f,$=f=0,P=null;E!==null&&$<b.length;$++){E.index>$?(P=E,E=null):P=E.sibling;var C=p(v,E,b[$],_);if(C===null){E===null&&(E=P);break}e&&E&&C.alternate===null&&t(v,E),f=s(C,f,$),S===null?x=C:S.sibling=C,S=C,E=P}if($===b.length)return r(v,E),fe&&hi(v,$),x;if(E===null){for(;$<b.length;$++)E=d(v,b[$],_),E!==null&&(f=s(E,f,$),S===null?x=E:S.sibling=E,S=E);return fe&&hi(v,$),x}for(E=i(v,E);$<b.length;$++)P=g(E,v,$,b[$],_),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?$:P.key),f=s(P,f,$),S===null?x=P:S.sibling=P,S=P);return e&&E.forEach(function(N){return t(v,N)}),fe&&hi(v,$),x}function w(v,f,b,_){var x=An(b);if(typeof x!="function")throw Error(A(150));if(b=x.call(b),b==null)throw Error(A(151));for(var S=x=null,E=f,$=f=0,P=null,C=b.next();E!==null&&!C.done;$++,C=b.next()){E.index>$?(P=E,E=null):P=E.sibling;var N=p(v,E,C.value,_);if(N===null){E===null&&(E=P);break}e&&E&&N.alternate===null&&t(v,E),f=s(N,f,$),S===null?x=N:S.sibling=N,S=N,E=P}if(C.done)return r(v,E),fe&&hi(v,$),x;if(E===null){for(;!C.done;$++,C=b.next())C=d(v,C.value,_),C!==null&&(f=s(C,f,$),S===null?x=C:S.sibling=C,S=C);return fe&&hi(v,$),x}for(E=i(v,E);!C.done;$++,C=b.next())C=g(E,v,$,C.value,_),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?$:C.key),f=s(C,f,$),S===null?x=C:S.sibling=C,S=C);return e&&E.forEach(function(D){return t(v,D)}),fe&&hi(v,$),x}function k(v,f,b,_){if(typeof b=="object"&&b!==null&&b.type===Hi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:e:{for(var x=b.key,S=f;S!==null;){if(S.key===x){if(x=b.type,x===Hi){if(S.tag===7){r(v,S.sibling),f=n(S,b.props.children),f.return=v,v=f;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pr&&fh(x)===S.type){r(v,S.sibling),f=n(S,b.props),f.ref=Nn(v,S,b),f.return=v,v=f;break e}r(v,S);break}else t(v,S);S=S.sibling}b.type===Hi?(f=xi(b.props.children,v.mode,_,b.key),f.return=v,v=f):(_=Uo(b.type,b.key,b.props,null,v.mode,_),_.ref=Nn(v,f,b),_.return=v,v=_)}return o(v);case ji:e:{for(S=b.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===b.containerInfo&&f.stateNode.implementation===b.implementation){r(v,f.sibling),f=n(f,b.children||[]),f.return=v,v=f;break e}else{r(v,f);break}else t(v,f);f=f.sibling}f=El(b,v.mode,_),f.return=v,v=f}return o(v);case Pr:return S=b._init,k(v,f,S(b._payload),_)}if(Kn(b))return y(v,f,b,_);if(An(b))return w(v,f,b,_);yo(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,f!==null&&f.tag===6?(r(v,f.sibling),f=n(f,b),f.return=v,v=f):(r(v,f),f=$l(b,v.mode,_),f.return=v,v=f),o(v)):r(v,f)}return k}var pn=Zf(!0),Jf=Zf(!1),Us={},dr=ni(Us),Es=ni(Us),Ts=ni(Us);function yi(e){if(e===Us)throw Error(A(174));return e}function Ru(e,t){switch(de(Ts,t),de(Es,e),de(dr,Us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sc(t,e)}pe(dr),de(dr,t)}function fn(){pe(dr),pe(Es),pe(Ts)}function em(e){yi(Ts.current);var t=yi(dr.current),r=sc(t,e.type);t!==r&&(de(Es,e),de(dr,r))}function Fu(e){Es.current===e&&(pe(dr),pe(Es))}var we=ni(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function Bu(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Fo=Cr.ReactCurrentDispatcher,_l=Cr.ReactCurrentBatchConfig,Ci=0,_e=null,Ne=null,Ve=null,pa=!1,ts=!1,zs=0,ay=0;function Ze(){throw Error(A(321))}function Vu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function ju(e,t,r,i,n,s){if(Ci=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?dy:hy,e=r(i,n),ts){s=0;do{if(ts=!1,zs=0,25<=s)throw Error(A(301));s+=1,Ve=Ne=null,t.updateQueue=null,Fo.current=py,e=r(i,n)}while(ts)}if(Fo.current=fa,t=Ne!==null&&Ne.next!==null,Ci=0,Ve=Ne=_e=null,pa=!1,t)throw Error(A(300));return e}function Hu(){var e=zs!==0;return zs=0,e}function ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ft(){if(Ne===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Ne=e;else{if(e===null)throw Error(A(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function As(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=Ft(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=Ne,n=i.baseQueue,s=r.pending;if(s!==null){if(n!==null){var o=n.next;n.next=s.next,s.next=o}i.baseQueue=n=s,r.pending=null}if(n!==null){s=n.next,i=i.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((Ci&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=i):a=a.next=d,_e.lanes|=h,$i|=h}c=c.next}while(c!==null&&c!==s);a===null?o=i:a.next=l,Jt(i,t.memoizedState)||(dt=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=a,r.lastRenderedState=i}if(e=r.interleaved,e!==null){n=e;do s=n.lane,_e.lanes|=s,$i|=s,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function kl(e){var t=Ft(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=r.dispatch,n=r.pending,s=t.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do s=e(s,o.action),o=o.next;while(o!==n);Jt(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,i]}function tm(){}function rm(e,t){var r=_e,i=Ft(),n=t(),s=!Jt(i.memoizedState,n);if(s&&(i.memoizedState=n,dt=!0),i=i.queue,Uu(sm.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Ls(9,nm.bind(null,r,i,n,t),void 0,null),je===null)throw Error(A(349));Ci&30||im(r,t,n)}return n}function im(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nm(e,t,r,i){t.value=r,t.getSnapshot=i,om(t)&&am(e)}function sm(e,t,r){return r(function(){om(t)&&am(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function am(e){var t=xr(e,1);t!==null&&Zt(t,e,1,-1)}function mh(e){var t=ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},t.queue=e,e=e.dispatch=uy.bind(null,_e,e),[t.memoizedState,e]}function Ls(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function lm(){return Ft().memoizedState}function Bo(e,t,r,i){var n=ar();_e.flags|=e,n.memoizedState=Ls(1|t,r,void 0,i===void 0?null:i)}function Da(e,t,r,i){var n=Ft();i=i===void 0?null:i;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,i!==null&&Vu(i,o.deps)){n.memoizedState=Ls(t,r,s,i);return}}_e.flags|=e,n.memoizedState=Ls(1|t,r,s,i)}function gh(e,t){return Bo(8390656,8,e,t)}function Uu(e,t){return Da(2048,8,e,t)}function cm(e,t){return Da(4,2,e,t)}function um(e,t){return Da(4,4,e,t)}function dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hm(e,t,r){return r=r!=null?r.concat([e]):null,Da(4,4,dm.bind(null,t,e),r)}function Wu(){}function pm(e,t){var r=Ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Vu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function fm(e,t){var r=Ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Vu(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function mm(e,t,r){return Ci&21?(Jt(r,t)||(r=yf(),_e.lanes|=r,$i|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=r)}function ly(e,t){var r=ae;ae=r!==0&&4>r?r:4,e(!0);var i=_l.transition;_l.transition={};try{e(!1),t()}finally{ae=r,_l.transition=i}}function gm(){return Ft().memoizedState}function cy(e,t,r){var i=qr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},vm(e))ym(t,r);else if(r=qf(e,t,r,i),r!==null){var n=st();Zt(r,e,i,n),bm(r,t,i)}}function uy(e,t,r){var i=qr(e),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(vm(e))ym(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(n.hasEagerState=!0,n.eagerState=l,Jt(l,o)){var a=t.interleaved;a===null?(n.next=n,Mu(t)):(n.next=a.next,a.next=n),t.interleaved=n;return}}catch{}finally{}r=qf(e,t,n,i),r!==null&&(n=st(),Zt(r,e,i,n),bm(r,t,i))}}function vm(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ym(e,t){ts=pa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function bm(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,xu(e,r)}}var fa={readContext:Rt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},dy={readContext:Rt,useCallback:function(e,t){return ar().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:gh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Bo(4194308,4,dm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bo(4,2,e,t)},useMemo:function(e,t){var r=ar();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=ar();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=cy.bind(null,_e,e),[i.memoizedState,e]},useRef:function(e){var t=ar();return e={current:e},t.memoizedState=e},useState:mh,useDebugValue:Wu,useDeferredValue:function(e){return ar().memoizedState=e},useTransition:function(){var e=mh(!1),t=e[0];return e=ly.bind(null,e[1]),ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=_e,n=ar();if(fe){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),je===null)throw Error(A(349));Ci&30||im(i,t,r)}n.memoizedState=r;var s={value:r,getSnapshot:t};return n.queue=s,gh(sm.bind(null,i,s,e),[e]),i.flags|=2048,Ls(9,nm.bind(null,i,s,r,t),void 0,null),r},useId:function(){var e=ar(),t=je.identifierPrefix;if(fe){var r=yr,i=vr;r=(i&~(1<<32-Qt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=zs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ay++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hy={readContext:Rt,useCallback:pm,useContext:Rt,useEffect:Uu,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:fm,useReducer:xl,useRef:lm,useState:function(){return xl(As)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ft();return mm(t,Ne.memoizedState,e)},useTransition:function(){var e=xl(As)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:tm,useSyncExternalStore:rm,useId:gm,unstable_isNewReconciler:!1},py={readContext:Rt,useCallback:pm,useContext:Rt,useEffect:Uu,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:fm,useReducer:kl,useRef:lm,useState:function(){return kl(As)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ft();return Ne===null?t.memoizedState=e:mm(t,Ne.memoizedState,e)},useTransition:function(){var e=kl(As)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:tm,useSyncExternalStore:rm,useId:gm,unstable_isNewReconciler:!1};function mn(e,t){try{var r="",i=t;do r+=V0(i),i=i.return;while(i);var n=r}catch(s){n=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:n,digest:null}}function Sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Tc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function wm(e,t,r){r=br(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){ga||(ga=!0,Rc=i),Tc(e,t)},r}function _m(e,t,r){r=br(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=t.value;r.payload=function(){return i(n)},r.callback=function(){Tc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Tc(e,t),typeof i!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function vh(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new fy;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(r)||(n.add(r),e=Ty.bind(null,e,t,r),t.then(e,e))}function yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bh(e,t,r,i,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=br(-1,1),t.tag=2,Gr(r,t,1))),r.lanes|=1),e)}var my=Cr.ReactCurrentOwner,dt=!1;function nt(e,t,r,i){t.child=e===null?Jf(t,null,r,i):pn(t,e.child,r,i)}function wh(e,t,r,i,n){r=r.render;var s=t.ref;return on(t,n),i=ju(e,t,r,i,s,n),r=Hu(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,kr(e,t,n)):(fe&&r&&Au(t),t.flags|=1,nt(e,t,i,n),t.child)}function _h(e,t,r,i,n){if(e===null){var s=r.type;return typeof s=="function"&&!Ju(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,xm(e,t,s,i,n)):(e=Uo(r.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&n)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:ks,r(o,i)&&e.ref===t.ref)return kr(e,t,n)}return t.flags|=1,e=Yr(s,i),e.ref=t.ref,e.return=t,t.child=e}function xm(e,t,r,i,n){if(e!==null){var s=e.memoizedProps;if(ks(s,i)&&e.ref===t.ref)if(dt=!1,t.pendingProps=i=s,(e.lanes&n)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,kr(e,t,n)}return zc(e,t,r,i,n)}function km(e,t,r){var i=t.pendingProps,n=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ji,wt),wt|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Ji,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,de(Ji,wt),wt|=i}else s!==null?(i=s.baseLanes|r,t.memoizedState=null):i=r,de(Ji,wt),wt|=i;return nt(e,t,n,r),t.child}function Sm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function zc(e,t,r,i,n){var s=pt(r)?ki:rt.current;return s=dn(t,s),on(t,n),r=ju(e,t,r,i,s,n),i=Hu(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,kr(e,t,n)):(fe&&i&&Au(t),t.flags|=1,nt(e,t,r,n),t.child)}function xh(e,t,r,i,n){if(pt(r)){var s=!0;oa(t)}else s=!1;if(on(t,n),t.stateNode===null)Vo(e,t),Qf(t,r,i),Ec(t,r,i,n),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=pt(r)?ki:rt.current,c=dn(t,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==c)&&ph(t,o,i,c),Ir=!1;var p=t.memoizedState;o.state=p,da(t,i,o,n),a=t.memoizedState,l!==i||p!==a||ht.current||Ir?(typeof h=="function"&&($c(t,r,h,i),a=t.memoizedState),(l=Ir||hh(t,r,l,i,p,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=a),o.props=i,o.state=a,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Yf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:qt(t.type,l),o.props=c,d=t.pendingProps,p=o.context,a=r.contextType,typeof a=="object"&&a!==null?a=Rt(a):(a=pt(r)?ki:rt.current,a=dn(t,a));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||p!==a)&&ph(t,o,i,a),Ir=!1,p=t.memoizedState,o.state=p,da(t,i,o,n);var y=t.memoizedState;l!==d||p!==y||ht.current||Ir?(typeof g=="function"&&($c(t,r,g,i),y=t.memoizedState),(c=Ir||hh(t,r,c,i,p,y,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),o.props=i,o.state=y,o.context=a,i=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return Ac(e,t,r,i,s,n)}function Ac(e,t,r,i,n,s){Sm(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return n&&ah(t,r,!1),kr(e,t,s);i=t.stateNode,my.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=pn(t,e.child,null,s),t.child=pn(t,null,l,s)):nt(e,t,l,s),t.memoizedState=i.state,n&&ah(t,r,!0),t.child}function Cm(e){var t=e.stateNode;t.pendingContext?oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oh(e,t.context,!1),Ru(e,t.containerInfo)}function kh(e,t,r,i,n){return hn(),Pu(n),t.flags|=256,nt(e,t,r,i),t.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function $m(e,t,r){var i=t.pendingProps,n=we.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(n&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),de(we,n&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,s?(i=t.mode,s=t.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ba(o,i,0,null),e=xi(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pc(r),t.memoizedState=Lc,e):Gu(t,o));if(n=e.memoizedState,n!==null&&(l=n.dehydrated,l!==null))return gy(e,t,o,i,l,n,r);if(s){s=i.fallback,o=t.mode,n=e.child,l=n.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&t.child!==n?(i=t.child,i.childLanes=0,i.pendingProps=a,t.deletions=null):(i=Yr(n,a),i.subtreeFlags=n.subtreeFlags&14680064),l!==null?s=Yr(l,s):(s=xi(s,o,r,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=e.child.memoizedState,o=o===null?Pc(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Lc,i}return s=e.child,e=s.sibling,i=Yr(s,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Gu(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,r,i){return i!==null&&Pu(i),pn(t,e.child,null,r),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gy(e,t,r,i,n,s,o){if(r)return t.flags&256?(t.flags&=-257,i=Sl(Error(A(422))),bo(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,n=t.mode,i=Ba({mode:"visible",children:i.children},n,0,null),s=xi(s,n,o,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,t.mode&1&&pn(t,e.child,null,o),t.child.memoizedState=Pc(o),t.memoizedState=Lc,s);if(!(t.mode&1))return bo(e,t,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(A(419)),i=Sl(s,i,void 0),bo(e,t,o,i)}if(l=(o&e.childLanes)!==0,dt||l){if(i=je,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==s.retryLane&&(s.retryLane=n,xr(e,n),Zt(i,e,n,-1))}return Zu(),i=Sl(Error(A(421))),bo(e,t,o,i)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=zy.bind(null,e),n._reactRetry=t,null):(e=s.treeContext,kt=Wr(n.nextSibling),Ct=t,fe=!0,Xt=null,e!==null&&(Ot[Nt++]=vr,Ot[Nt++]=yr,Ot[Nt++]=Si,vr=e.id,yr=e.overflow,Si=t),t=Gu(t,i.children),t.flags|=4096,t)}function Sh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Cc(e.return,t,r)}function Cl(e,t,r,i,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=n)}function Em(e,t,r){var i=t.pendingProps,n=i.revealOrder,s=i.tail;if(nt(e,t,i.children,r),i=we.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sh(e,r,t);else if(e.tag===19)Sh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(de(we,i),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&ha(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),Cl(t,!1,n,r,s);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ha(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}Cl(t,!0,r,null,s);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),$i|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Yr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function vy(e,t,r){switch(t.tag){case 3:Cm(t),hn();break;case 5:em(t);break;case 1:pt(t.type)&&oa(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,n=t.memoizedProps.value;de(ca,i._currentValue),i._currentValue=n;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(de(we,we.current&1),t.flags|=128,null):r&t.child.childLanes?$m(e,t,r):(de(we,we.current&1),e=kr(e,t,r),e!==null?e.sibling:null);de(we,we.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Em(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),de(we,we.current),i)break;return null;case 22:case 23:return t.lanes=0,km(e,t,r)}return kr(e,t,r)}var Tm,Ic,zm,Am;Tm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ic=function(){};zm=function(e,t,r,i){var n=e.memoizedProps;if(n!==i){e=t.stateNode,yi(dr.current);var s=null;switch(r){case"input":n=tc(e,n),i=tc(e,i),s=[];break;case"select":n=xe({},n,{value:void 0}),i=xe({},i,{value:void 0}),s=[];break;case"textarea":n=nc(e,n),i=nc(e,i),s=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=na)}oc(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var l=n[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var a=i[c];if(l=n!=null?n[c]:void 0,i.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(r||(r={}),r[o]=a[o])}else r||(s||(s=[]),s.push(c,r)),r=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gs.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&he("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}r&&(s=s||[]).push("style",r);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Am=function(e,t,r,i){r!==i&&(t.flags|=4)};function Mn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function yy(e,t,r){var i=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return pt(t.type)&&sa(),Je(t),null;case 3:return i=t.stateNode,fn(),pe(ht),pe(rt),Bu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xt!==null&&(Vc(Xt),Xt=null))),Ic(e,t),Je(t),null;case 5:Fu(t);var n=yi(Ts.current);if(r=t.type,e!==null&&t.stateNode!=null)zm(e,t,r,i,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(A(166));return Je(t),null}if(e=yi(dr.current),vo(t)){i=t.stateNode,r=t.type;var s=t.memoizedProps;switch(i[cr]=t,i[$s]=s,e=(t.mode&1)!==0,r){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(n=0;n<Yn.length;n++)he(Yn[n],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":Id(i,s),he("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},he("invalid",i);break;case"textarea":Nd(i,s),he("invalid",i)}oc(r,s),n=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&go(i.textContent,l,e),n=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&go(i.textContent,l,e),n=["children",""+l]):gs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",i)}switch(r){case"input":ao(i),Od(i,s,!0);break;case"textarea":ao(i),Md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=na)}i=n,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[cr]=t,e[$s]=i,Tm(e,t,!1,!1),t.stateNode=e;e:{switch(o=ac(r,i),r){case"dialog":he("cancel",e),he("close",e),n=i;break;case"iframe":case"object":case"embed":he("load",e),n=i;break;case"video":case"audio":for(n=0;n<Yn.length;n++)he(Yn[n],e);n=i;break;case"source":he("error",e),n=i;break;case"img":case"image":case"link":he("error",e),he("load",e),n=i;break;case"details":he("toggle",e),n=i;break;case"input":Id(e,i),n=tc(e,i),he("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=xe({},i,{value:void 0}),he("invalid",e);break;case"textarea":Nd(e,i),n=nc(e,i),he("invalid",e);break;default:n=i}oc(r,n),l=n;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?of(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nf(e,a)):s==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&vs(e,a):typeof a=="number"&&vs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&he("scroll",e):a!=null&&gu(e,s,a,o))}switch(r){case"input":ao(e),Od(e,i,!1);break;case"textarea":ao(e),Md(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Qr(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?tn(e,!!i.multiple,s,!1):i.defaultValue!=null&&tn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=na)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Am(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(A(166));if(r=yi(Ts.current),yi(dr.current),vo(t)){if(i=t.stateNode,r=t.memoizedProps,i[cr]=t,(s=i.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:go(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[cr]=t,t.stateNode=i}return Je(t),null;case 13:if(pe(we),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&kt!==null&&t.mode&1&&!(t.flags&128))Kf(),hn(),t.flags|=98560,s=!1;else if(s=vo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[cr]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else Xt!==null&&(Vc(Xt),Xt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):Zu())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return fn(),Ic(e,t),e===null&&Ss(t.stateNode.containerInfo),Je(t),null;case 10:return Nu(t.type._context),Je(t),null;case 17:return pt(t.type)&&sa(),Je(t),null;case 19:if(pe(we),s=t.memoizedState,s===null)return Je(t),null;if(i=(t.flags&128)!==0,o=s.rendering,o===null)if(i)Mn(s,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ha(e),o!==null){for(t.flags|=128,Mn(s,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)s=r,e=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(we,we.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>gn&&(t.flags|=128,i=!0,Mn(s,!1),t.lanes=4194304)}else{if(!i)if(e=ha(o),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Mn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Je(t),null}else 2*Ee()-s.renderingStartTime>gn&&r!==1073741824&&(t.flags|=128,i=!0,Mn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,r=we.current,de(we,i?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return Qu(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?wt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function by(e,t){switch(Lu(t),t.tag){case 1:return pt(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),pe(ht),pe(rt),Bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(pe(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(we),null;case 4:return fn(),null;case 10:return Nu(t.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var wo=!1,et=!1,wy=typeof WeakSet=="function"?WeakSet:Set,M=null;function Zi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Se(e,t,i)}else r.current=null}function Oc(e,t,r){try{r()}catch(i){Se(e,t,i)}}var Ch=!1;function _y(e,t){if(vc=ta,e=Of(),zu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,a=-1,c=0,h=0,d=e,p=null;t:for(;;){for(var g;d!==r||n!==0&&d.nodeType!==3||(l=o+n),d!==s||i!==0&&d.nodeType!==3||(a=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++c===n&&(l=o),p===s&&++h===i&&(a=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(yc={focusedElem:e,selectionRange:r},ta=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:qt(t.type,w),k);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){Se(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=Ch,Ch=!1,y}function rs(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var s=n.destroy;n.destroy=void 0,s!==void 0&&Oc(t,r,s)}n=n.next}while(n!==i)}}function Ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Nc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[cr],delete t[$s],delete t[_c],delete t[iy],delete t[ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pm(e){return e.tag===5||e.tag===3||e.tag===4}function $h(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=na));else if(i!==4&&(e=e.child,e!==null))for(Mc(e,t,r),e=e.sibling;e!==null;)Mc(e,t,r),e=e.sibling}function Dc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Dc(e,t,r),e=e.sibling;e!==null;)Dc(e,t,r),e=e.sibling}var Ge=null,Yt=!1;function Lr(e,t,r){for(r=r.child;r!==null;)Im(e,t,r),r=r.sibling}function Im(e,t,r){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Aa,r)}catch{}switch(r.tag){case 5:et||Zi(r,t);case 6:var i=Ge,n=Yt;Ge=null,Lr(e,t,r),Ge=i,Yt=n,Ge!==null&&(Yt?(e=Ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ge.removeChild(r.stateNode));break;case 18:Ge!==null&&(Yt?(e=Ge,r=r.stateNode,e.nodeType===8?yl(e.parentNode,r):e.nodeType===1&&yl(e,r),_s(e)):yl(Ge,r.stateNode));break;case 4:i=Ge,n=Yt,Ge=r.stateNode.containerInfo,Yt=!0,Lr(e,t,r),Ge=i,Yt=n;break;case 0:case 11:case 14:case 15:if(!et&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var s=n,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oc(r,t,o),n=n.next}while(n!==i)}Lr(e,t,r);break;case 1:if(!et&&(Zi(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){Se(r,t,l)}Lr(e,t,r);break;case 21:Lr(e,t,r);break;case 22:r.mode&1?(et=(i=et)||r.memoizedState!==null,Lr(e,t,r),et=i):Lr(e,t,r);break;default:Lr(e,t,r)}}function Eh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wy),t.forEach(function(i){var n=Ay.bind(null,e,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Gt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Yt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Yt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Yt=!0;break e}l=l.return}if(Ge===null)throw Error(A(160));Im(s,o,n),Ge=null,Yt=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(c){Se(n,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}function Om(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(t,e),or(e),i&4){try{rs(3,e,e.return),Ra(3,e)}catch(w){Se(e,e.return,w)}try{rs(5,e,e.return)}catch(w){Se(e,e.return,w)}}break;case 1:Gt(t,e),or(e),i&512&&r!==null&&Zi(r,r.return);break;case 5:if(Gt(t,e),or(e),i&512&&r!==null&&Zi(r,r.return),e.flags&32){var n=e.stateNode;try{vs(n,"")}catch(w){Se(e,e.return,w)}}if(i&4&&(n=e.stateNode,n!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ef(n,s),ac(l,o);var c=ac(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?of(n,d):h==="dangerouslySetInnerHTML"?nf(n,d):h==="children"?vs(n,d):gu(n,h,d,c)}switch(l){case"input":rc(n,s);break;case"textarea":tf(n,s);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?tn(n,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?tn(n,!!s.multiple,s.defaultValue,!0):tn(n,!!s.multiple,s.multiple?[]:"",!1))}n[$s]=s}catch(w){Se(e,e.return,w)}}break;case 6:if(Gt(t,e),or(e),i&4){if(e.stateNode===null)throw Error(A(162));n=e.stateNode,s=e.memoizedProps;try{n.nodeValue=s}catch(w){Se(e,e.return,w)}}break;case 3:if(Gt(t,e),or(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(t.containerInfo)}catch(w){Se(e,e.return,w)}break;case 4:Gt(t,e),or(e);break;case 13:Gt(t,e),or(e),n=e.child,n.flags&8192&&(s=n.memoizedState!==null,n.stateNode.isHidden=s,!s||n.alternate!==null&&n.alternate.memoizedState!==null||(Yu=Ee())),i&4&&Eh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(et=(c=et)||h,Gt(t,e),et=c):Gt(t,e),or(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(d=M=h;M!==null;){switch(p=M,g=p.child,p.tag){case 0:case 11:case 14:case 15:rs(4,p,p.return);break;case 1:Zi(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Se(i,r,w)}}break;case 5:Zi(p,p.return);break;case 22:if(p.memoizedState!==null){zh(d);continue}}g!==null?(g.return=p,M=g):zh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{n=d.stateNode,c?(s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=sf("display",o))}catch(w){Se(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(t,e),or(e),i&4&&Eh(e);break;case 21:break;default:Gt(t,e),or(e)}}function or(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Pm(r)){var i=r;break e}r=r.return}throw Error(A(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(vs(n,""),i.flags&=-33);var s=$h(e);Dc(e,s,n);break;case 3:case 4:var o=i.stateNode.containerInfo,l=$h(e);Mc(e,l,o);break;default:throw Error(A(161))}}catch(a){Se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xy(e,t,r){M=e,Nm(e)}function Nm(e,t,r){for(var i=(e.mode&1)!==0;M!==null;){var n=M,s=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||wo;if(!o){var l=n.alternate,a=l!==null&&l.memoizedState!==null||et;l=wo;var c=et;if(wo=o,(et=a)&&!c)for(M=n;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?Ah(n):a!==null?(a.return=o,M=a):Ah(n);for(;s!==null;)M=s,Nm(s),s=s.sibling;M=n,wo=l,et=c}Th(e)}else n.subtreeFlags&8772&&s!==null?(s.return=n,M=s):Th(e)}}function Th(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Ra(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(r===null)i.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:qt(t.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&dh(t,s,i);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}dh(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&_s(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}et||t.flags&512&&Nc(t)}catch(p){Se(t,t.return,p)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function zh(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function Ah(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ra(4,t)}catch(a){Se(t,r,a)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var n=t.return;try{i.componentDidMount()}catch(a){Se(t,n,a)}}var s=t.return;try{Nc(t)}catch(a){Se(t,s,a)}break;case 5:var o=t.return;try{Nc(t)}catch(a){Se(t,o,a)}}}catch(a){Se(t,t.return,a)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var ky=Math.ceil,ma=Cr.ReactCurrentDispatcher,Ku=Cr.ReactCurrentOwner,Dt=Cr.ReactCurrentBatchConfig,ee=0,je=null,Le=null,Ke=0,wt=0,Ji=ni(0),Me=0,Ps=null,$i=0,Fa=0,qu=0,is=null,ut=null,Yu=0,gn=1/0,mr=null,ga=!1,Rc=null,Kr=null,_o=!1,Rr=null,va=0,ns=0,Fc=null,jo=-1,Ho=0;function st(){return ee&6?Ee():jo!==-1?jo:jo=Ee()}function qr(e){return e.mode&1?ee&2&&Ke!==0?Ke&-Ke:oy.transition!==null?(Ho===0&&(Ho=yf()),Ho):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Cf(e.type)),e):1}function Zt(e,t,r,i){if(50<ns)throw ns=0,Fc=null,Error(A(185));Vs(e,r,i),(!(ee&2)||e!==je)&&(e===je&&(!(ee&2)&&(Fa|=r),Me===4&&Nr(e,Ke)),ft(e,i),r===1&&ee===0&&!(t.mode&1)&&(gn=Ee()+500,Na&&si()))}function ft(e,t){var r=e.callbackNode;ov(e,t);var i=ea(e,e===je?Ke:0);if(i===0)r!==null&&Fd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Fd(r),t===1)e.tag===0?sy(Lh.bind(null,e)):Uf(Lh.bind(null,e)),ty(function(){!(ee&6)&&si()}),r=null;else{switch(bf(i)){case 1:r=_u;break;case 4:r=gf;break;case 16:r=Jo;break;case 536870912:r=vf;break;default:r=Jo}r=Hm(r,Mm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Mm(e,t){if(jo=-1,Ho=0,ee&6)throw Error(A(327));var r=e.callbackNode;if(an()&&e.callbackNode!==r)return null;var i=ea(e,e===je?Ke:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ya(e,i);else{t=i;var n=ee;ee|=2;var s=Rm();(je!==e||Ke!==t)&&(mr=null,gn=Ee()+500,_i(e,t));do try{$y();break}catch(l){Dm(e,l)}while(!0);Ou(),ma.current=s,ee=n,Le!==null?t=0:(je=null,Ke=0,t=Me)}if(t!==0){if(t===2&&(n=hc(e),n!==0&&(i=n,t=Bc(e,n))),t===1)throw r=Ps,_i(e,0),Nr(e,i),ft(e,Ee()),r;if(t===6)Nr(e,i);else{if(n=e.current.alternate,!(i&30)&&!Sy(n)&&(t=ya(e,i),t===2&&(s=hc(e),s!==0&&(i=s,t=Bc(e,s))),t===1))throw r=Ps,_i(e,0),Nr(e,i),ft(e,Ee()),r;switch(e.finishedWork=n,e.finishedLanes=i,t){case 0:case 1:throw Error(A(345));case 2:pi(e,ut,mr);break;case 3:if(Nr(e,i),(i&130023424)===i&&(t=Yu+500-Ee(),10<t)){if(ea(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){st(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=wc(pi.bind(null,e,ut,mr),t);break}pi(e,ut,mr);break;case 4:if(Nr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,n=-1;0<i;){var o=31-Qt(i);s=1<<o,o=t[o],o>n&&(n=o),i&=~s}if(i=n,i=Ee()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ky(i/1960))-i,10<i){e.timeoutHandle=wc(pi.bind(null,e,ut,mr),i);break}pi(e,ut,mr);break;case 5:pi(e,ut,mr);break;default:throw Error(A(329))}}}return ft(e,Ee()),e.callbackNode===r?Mm.bind(null,e):null}function Bc(e,t){var r=is;return e.current.memoizedState.isDehydrated&&(_i(e,t).flags|=256),e=ya(e,t),e!==2&&(t=ut,ut=r,t!==null&&Vc(t)),e}function Vc(e){ut===null?ut=e:ut.push.apply(ut,e)}function Sy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],s=n.getSnapshot;n=n.value;try{if(!Jt(s(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nr(e,t){for(t&=~qu,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Qt(t),i=1<<r;e[r]=-1,t&=~i}}function Lh(e){if(ee&6)throw Error(A(327));an();var t=ea(e,0);if(!(t&1))return ft(e,Ee()),null;var r=ya(e,t);if(e.tag!==0&&r===2){var i=hc(e);i!==0&&(t=i,r=Bc(e,i))}if(r===1)throw r=Ps,_i(e,0),Nr(e,t),ft(e,Ee()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pi(e,ut,mr),ft(e,Ee()),null}function Xu(e,t){var r=ee;ee|=1;try{return e(t)}finally{ee=r,ee===0&&(gn=Ee()+500,Na&&si())}}function Ei(e){Rr!==null&&Rr.tag===0&&!(ee&6)&&an();var t=ee;ee|=1;var r=Dt.transition,i=ae;try{if(Dt.transition=null,ae=1,e)return e()}finally{ae=i,Dt.transition=r,ee=t,!(ee&6)&&si()}}function Qu(){wt=Ji.current,pe(Ji)}function _i(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ey(r)),Le!==null)for(r=Le.return;r!==null;){var i=r;switch(Lu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sa();break;case 3:fn(),pe(ht),pe(rt),Bu();break;case 5:Fu(i);break;case 4:fn();break;case 13:pe(we);break;case 19:pe(we);break;case 10:Nu(i.type._context);break;case 22:case 23:Qu()}r=r.return}if(je=e,Le=e=Yr(e.current,null),Ke=wt=t,Me=0,Ps=null,qu=Fa=$i=0,ut=is=null,vi!==null){for(t=0;t<vi.length;t++)if(r=vi[t],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=n,i.next=o}r.pending=i}vi=null}return e}function Dm(e,t){do{var r=Le;try{if(Ou(),Fo.current=fa,pa){for(var i=_e.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}pa=!1}if(Ci=0,Ve=Ne=_e=null,ts=!1,zs=0,Ku.current=null,r===null||r.return===null){Me=1,Ps=t,Le=null;break}e:{var s=e,o=r.return,l=r,a=t;if(t=Ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=yh(o);if(g!==null){g.flags&=-257,bh(g,o,l,s,t),g.mode&1&&vh(s,c,t),t=g,a=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){vh(s,c,t),Zu();break e}a=Error(A(426))}}else if(fe&&l.mode&1){var k=yh(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),bh(k,o,l,s,t),Pu(mn(a,l));break e}}s=a=mn(a,l),Me!==4&&(Me=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=wm(s,a,t);uh(s,v);break e;case 1:l=a;var f=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=_m(s,l,t);uh(s,_);break e}}s=s.return}while(s!==null)}Bm(r)}catch(x){t=x,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function Rm(){var e=ma.current;return ma.current=fa,e===null?fa:e}function Zu(){(Me===0||Me===3||Me===2)&&(Me=4),je===null||!($i&268435455)&&!(Fa&268435455)||Nr(je,Ke)}function ya(e,t){var r=ee;ee|=2;var i=Rm();(je!==e||Ke!==t)&&(mr=null,_i(e,t));do try{Cy();break}catch(n){Dm(e,n)}while(!0);if(Ou(),ee=r,ma.current=i,Le!==null)throw Error(A(261));return je=null,Ke=0,Me}function Cy(){for(;Le!==null;)Fm(Le)}function $y(){for(;Le!==null&&!Q0();)Fm(Le)}function Fm(e){var t=jm(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Bm(e):Le=t,Ku.current=null}function Bm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=by(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}else if(r=yy(r,t,wt),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function pi(e,t,r){var i=ae,n=Dt.transition;try{Dt.transition=null,ae=1,Ey(e,t,r,i)}finally{Dt.transition=n,ae=i}return null}function Ey(e,t,r,i){do an();while(Rr!==null);if(ee&6)throw Error(A(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(av(e,s),e===je&&(Le=je=null,Ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_o||(_o=!0,Hm(Jo,function(){return an(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ae;ae=1;var l=ee;ee|=4,Ku.current=null,_y(e,r),Om(r,e),Kv(yc),ta=!!vc,yc=vc=null,e.current=r,xy(r),Z0(),ee=l,ae=o,Dt.transition=s}else e.current=r;if(_o&&(_o=!1,Rr=e,va=n),s=e.pendingLanes,s===0&&(Kr=null),tv(r.stateNode),ft(e,Ee()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(ga)throw ga=!1,e=Rc,Rc=null,e;return va&1&&e.tag!==0&&an(),s=e.pendingLanes,s&1?e===Fc?ns++:(ns=0,Fc=e):ns=0,si(),null}function an(){if(Rr!==null){var e=bf(va),t=Dt.transition,r=ae;try{if(Dt.transition=null,ae=16>e?16:e,Rr===null)var i=!1;else{if(e=Rr,Rr=null,va=0,ee&6)throw Error(A(331));var n=ee;for(ee|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(M=c;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:rs(8,h,s)}var d=h.child;if(d!==null)d.return=h,M=d;else for(;M!==null;){h=M;var p=h.sibling,g=h.return;if(Lm(h),h===c){M=null;break}if(p!==null){p.return=g,M=p;break}M=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,M=v;break e}M=s.return}}var f=e.current;for(M=f;M!==null;){o=M;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,M=b;else e:for(o=f;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ra(9,l)}}catch(x){Se(l,l.return,x)}if(l===o){M=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,M=_;break e}M=l.return}}if(ee=n,si(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Aa,e)}catch{}i=!0}return i}finally{ae=r,Dt.transition=t}}return!1}function Ph(e,t,r){t=mn(r,t),t=wm(e,t,1),e=Gr(e,t,1),t=st(),e!==null&&(Vs(e,1,t),ft(e,t))}function Se(e,t,r){if(e.tag===3)Ph(e,e,r);else for(;t!==null;){if(t.tag===3){Ph(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kr===null||!Kr.has(i))){e=mn(r,e),e=_m(t,e,1),t=Gr(t,e,1),e=st(),t!==null&&(Vs(t,1,e),ft(t,e));break}}t=t.return}}function Ty(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,je===e&&(Ke&r)===r&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Ee()-Yu?_i(e,0):qu|=r),ft(e,t)}function Vm(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var r=st();e=xr(e,t),e!==null&&(Vs(e,t,r),ft(e,r))}function zy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Vm(e,r)}function Ay(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(t),Vm(e,r)}var jm;jm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)dt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return dt=!1,vy(e,t,r);dt=!!(e.flags&131072)}else dt=!1,fe&&t.flags&1048576&&Wf(t,la,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Vo(e,t),e=t.pendingProps;var n=dn(t,rt.current);on(t,r),n=ju(null,t,i,e,n,r);var s=Hu();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(i)?(s=!0,oa(t)):s=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Du(t),n.updater=Ma,t.stateNode=n,n._reactInternals=t,Ec(t,i,e,r),t=Ac(null,t,i,!0,s,r)):(t.tag=0,fe&&s&&Au(t),nt(null,t,n,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,n=i._init,i=n(i._payload),t.type=i,n=t.tag=Py(i),e=qt(i,e),n){case 0:t=zc(null,t,i,e,r);break e;case 1:t=xh(null,t,i,e,r);break e;case 11:t=wh(null,t,i,e,r);break e;case 14:t=_h(null,t,i,qt(i.type,e),r);break e}throw Error(A(306,i,""))}return t;case 0:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:qt(i,n),zc(e,t,i,n,r);case 1:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:qt(i,n),xh(e,t,i,n,r);case 3:e:{if(Cm(t),e===null)throw Error(A(387));i=t.pendingProps,s=t.memoizedState,n=s.element,Yf(e,t),da(t,i,null,r);var o=t.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){n=mn(Error(A(423)),t),t=kh(e,t,i,r,n);break e}else if(i!==n){n=mn(Error(A(424)),t),t=kh(e,t,i,r,n);break e}else for(kt=Wr(t.stateNode.containerInfo.firstChild),Ct=t,fe=!0,Xt=null,r=Jf(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hn(),i===n){t=kr(e,t,r);break e}nt(e,t,i,r)}t=t.child}return t;case 5:return em(t),e===null&&Sc(t),i=t.type,n=t.pendingProps,s=e!==null?e.memoizedProps:null,o=n.children,bc(i,n)?o=null:s!==null&&bc(i,s)&&(t.flags|=32),Sm(e,t),nt(e,t,o,r),t.child;case 6:return e===null&&Sc(t),null;case 13:return $m(e,t,r);case 4:return Ru(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=pn(t,null,i,r):nt(e,t,i,r),t.child;case 11:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:qt(i,n),wh(e,t,i,n,r);case 7:return nt(e,t,t.pendingProps,r),t.child;case 8:return nt(e,t,t.pendingProps.children,r),t.child;case 12:return nt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,n=t.pendingProps,s=t.memoizedProps,o=n.value,de(ca,i._currentValue),i._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===n.children&&!ht.current){t=kr(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=br(-1,r&-r),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Cc(s.return,r,t),l.lanes|=r;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Cc(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,i=t.pendingProps.children,on(t,r),n=Rt(n),i=i(n),t.flags|=1,nt(e,t,i,r),t.child;case 14:return i=t.type,n=qt(i,t.pendingProps),n=qt(i.type,n),_h(e,t,i,n,r);case 15:return xm(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:qt(i,n),Vo(e,t),t.tag=1,pt(i)?(e=!0,oa(t)):e=!1,on(t,r),Qf(t,i,n),Ec(t,i,n,r),Ac(null,t,i,!0,e,r);case 19:return Em(e,t,r);case 22:return km(e,t,r)}throw Error(A(156,t.tag))};function Hm(e,t){return mf(e,t)}function Ly(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,i){return new Ly(e,t,r,i)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Py(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===bu)return 14}return 2}function Yr(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Uo(e,t,r,i,n,s){var o=2;if(i=e,typeof e=="function")Ju(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hi:return xi(r.children,n,s,t);case vu:o=8,n|=8;break;case Ql:return e=Mt(12,r,t,n|2),e.elementType=Ql,e.lanes=s,e;case Zl:return e=Mt(13,r,t,n),e.elementType=Zl,e.lanes=s,e;case Jl:return e=Mt(19,r,t,n),e.elementType=Jl,e.lanes=s,e;case Qp:return Ba(r,n,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yp:o=10;break e;case Xp:o=9;break e;case yu:o=11;break e;case bu:o=14;break e;case Pr:o=16,i=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Mt(o,r,t,n),t.elementType=e,t.type=i,t.lanes=s,t}function xi(e,t,r,i){return e=Mt(7,e,i,t),e.lanes=r,e}function Ba(e,t,r,i){return e=Mt(22,e,i,t),e.elementType=Qp,e.lanes=r,e.stateNode={isHidden:!1},e}function $l(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function El(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iy(e,t,r,i,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function ed(e,t,r,i,n,s,o,l,a){return e=new Iy(e,t,r,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(s),e}function Oy(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Um(e){if(!e)return Zr;e=e._reactInternals;e:{if(Oi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(pt(r))return Hf(e,r,t)}return t}function Wm(e,t,r,i,n,s,o,l,a){return e=ed(r,i,!0,e,n,s,o,l,a),e.context=Um(null),r=e.current,i=st(),n=qr(r),s=br(i,n),s.callback=t??null,Gr(r,s,n),e.current.lanes=n,Vs(e,n,i),ft(e,i),e}function Va(e,t,r,i){var n=t.current,s=st(),o=qr(n);return r=Um(r),t.context===null?t.context=r:t.pendingContext=r,t=br(s,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Gr(n,t,o),e!==null&&(Zt(e,n,o,s),Ro(e,n,o)),o}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function td(e,t){Ih(e,t),(e=e.alternate)&&Ih(e,t)}function Ny(){return null}var Gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function rd(e){this._internalRoot=e}ja.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Va(e,t,null,null)};ja.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ei(function(){Va(null,e,null,null)}),t[_r]=null}};function ja(e){this._internalRoot=e}ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=xf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Or.length&&t!==0&&t<Or[r].priority;r++);Or.splice(r,0,e),r===0&&Sf(e)}};function id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function My(e,t,r,i,n){if(n){if(typeof i=="function"){var s=i;i=function(){var c=ba(o);s.call(c)}}var o=Wm(t,i,e,0,null,!1,!1,"",Oh);return e._reactRootContainer=o,e[_r]=o.current,Ss(e.nodeType===8?e.parentNode:e),Ei(),o}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var l=i;i=function(){var c=ba(a);l.call(c)}}var a=ed(e,0,!1,null,null,!1,!1,"",Oh);return e._reactRootContainer=a,e[_r]=a.current,Ss(e.nodeType===8?e.parentNode:e),Ei(function(){Va(t,a,r,i)}),a}function Ua(e,t,r,i,n){var s=r._reactRootContainer;if(s){var o=s;if(typeof n=="function"){var l=n;n=function(){var a=ba(o);l.call(a)}}Va(t,o,e,n)}else o=My(r,t,e,n,i);return ba(o)}wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=qn(t.pendingLanes);r!==0&&(xu(t,r|1),ft(t,Ee()),!(ee&6)&&(gn=Ee()+500,si()))}break;case 13:Ei(function(){var i=xr(e,1);if(i!==null){var n=st();Zt(i,e,1,n)}}),td(e,1)}};ku=function(e){if(e.tag===13){var t=xr(e,134217728);if(t!==null){var r=st();Zt(t,e,134217728,r)}td(e,134217728)}};_f=function(e){if(e.tag===13){var t=qr(e),r=xr(e,t);if(r!==null){var i=st();Zt(r,e,t,i)}td(e,t)}};xf=function(){return ae};kf=function(e,t){var r=ae;try{return ae=e,t()}finally{ae=r}};cc=function(e,t,r){switch(t){case"input":if(rc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var n=Oa(i);if(!n)throw Error(A(90));Jp(i),rc(i,n)}}}break;case"textarea":tf(e,r);break;case"select":t=r.value,t!=null&&tn(e,!!r.multiple,t,!1)}};cf=Xu;uf=Ei;var Dy={usingClientEntryPoint:!1,Events:[Hs,Ki,Oa,af,lf,Xu]},Dn={findFiberByHostInstance:gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ry={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Aa=xo.inject(Ry),ur=xo}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(t))throw Error(A(200));return Oy(e,t,null,r)};Tt.createRoot=function(e,t){if(!id(e))throw Error(A(299));var r=!1,i="",n=Gm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=ed(e,1,!1,null,null,r,!1,i,n),e[_r]=t.current,Ss(e.nodeType===8?e.parentNode:e),new rd(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return Ei(e)};Tt.hydrate=function(e,t,r){if(!Ha(t))throw Error(A(200));return Ua(null,e,t,!0,r)};Tt.hydrateRoot=function(e,t,r){if(!id(e))throw Error(A(405));var i=r!=null&&r.hydratedSources||null,n=!1,s="",o=Gm;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Wm(t,null,e,1,r??null,n,!1,s,o),e[_r]=t.current,Ss(e),i)for(e=0;e<i.length;e++)r=i[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new ja(t)};Tt.render=function(e,t,r){if(!Ha(t))throw Error(A(200));return Ua(null,e,t,!1,r)};Tt.unmountComponentAtNode=function(e){if(!Ha(e))throw Error(A(40));return e._reactRootContainer?(Ei(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};Tt.unstable_batchedUpdates=Xu;Tt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Ha(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ua(e,t,r,!1,i)};Tt.version="18.2.0-next-9e3b772b8-20220608";function Km(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Km)}catch(e){console.error(e)}}Km(),Up.exports=Tt;var Fy=Up.exports,Nh=Fy;Yl.createRoot=Nh.createRoot,Yl.hydrateRoot=Nh.hydrateRoot;const ss=/^[a-z0-9]+(-[a-z0-9]+)*$/,Wa=(e,t,r,i="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;i=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:i,prefix:a,name:l};return t&&!Wo(c)?null:c}const s=n[0],o=s.split("-");if(o.length>1){const l={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!Wo(l)?null:l}if(r&&i===""){const l={provider:i,prefix:"",name:s};return t&&!Wo(l,r)?null:l}return null},Wo=(e,t)=>e?!!((e.provider===""||e.provider.match(ss))&&(t&&e.prefix===""||e.prefix.match(ss))&&e.name.match(ss)):!1,qm=Object.freeze({left:0,top:0,width:16,height:16}),wa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),nd=Object.freeze({...qm,...wa}),jc=Object.freeze({...nd,body:"",hidden:!1});function By(e,t){const r={};!e.hFlip!=!t.hFlip&&(r.hFlip=!0),!e.vFlip!=!t.vFlip&&(r.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(r.rotate=i),r}function Mh(e,t){const r=By(e,t);for(const i in jc)i in wa?i in e&&!(i in r)&&(r[i]=wa[i]):i in t?r[i]=t[i]:i in e&&(r[i]=e[i]);return r}function Vy(e,t){const r=e.icons,i=e.aliases||Object.create(null),n=Object.create(null);function s(o){if(r[o])return n[o]=[];if(!(o in n)){n[o]=null;const l=i[o]&&i[o].parent,a=l&&s(l);a&&(n[o]=[l].concat(a))}return n[o]}return(t||Object.keys(r).concat(Object.keys(i))).forEach(s),n}function jy(e,t,r){const i=e.icons,n=e.aliases||Object.create(null);let s={};function o(l){s=Mh(i[l]||n[l],s)}return o(t),r.forEach(o),Mh(e,s)}function Ym(e,t){const r=[];if(typeof e!="object"||typeof e.icons!="object")return r;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),r.push(n)});const i=Vy(e);for(const n in i){const s=i[n];s&&(t(n,jy(e,n,s)),r.push(n))}return r}const Hy={provider:"",aliases:{},not_found:{},...qm};function Tl(e,t){for(const r in t)if(r in e&&typeof e[r]!=typeof t[r])return!1;return!0}function Xm(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Tl(e,Hy))return null;const r=t.icons;for(const n in r){const s=r[n];if(!n.match(ss)||typeof s.body!="string"||!Tl(s,jc))return null}const i=t.aliases||Object.create(null);for(const n in i){const s=i[n],o=s.parent;if(!n.match(ss)||typeof o!="string"||!r[o]&&!i[o]||!Tl(s,jc))return null}return t}const Dh=Object.create(null);function Uy(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Ti(e,t){const r=Dh[e]||(Dh[e]=Object.create(null));return r[t]||(r[t]=Uy(e,t))}function sd(e,t){return Xm(t)?Ym(t,(r,i)=>{i?e.icons[r]=i:e.missing.add(r)}):[]}function Wy(e,t,r){try{if(typeof r.body=="string")return e.icons[t]={...r},!0}catch{}return!1}let Is=!1;function Qm(e){return typeof e=="boolean"&&(Is=e),Is}function Gy(e){const t=typeof e=="string"?Wa(e,!0,Is):e;if(t){const r=Ti(t.provider,t.prefix),i=t.name;return r.icons[i]||(r.missing.has(i)?null:void 0)}}function Ky(e,t){const r=Wa(e,!0,Is);if(!r)return!1;const i=Ti(r.provider,r.prefix);return Wy(i,r.name,t)}function qy(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Is&&!t&&!e.prefix){let n=!1;return Xm(e)&&(e.prefix="",Ym(e,(s,o)=>{o&&Ky(s,o)&&(n=!0)})),n}const r=e.prefix;if(!Wo({provider:t,prefix:r,name:"a"}))return!1;const i=Ti(t,r);return!!sd(i,e)}const Zm=Object.freeze({width:null,height:null}),Jm=Object.freeze({...Zm,...wa}),Yy=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Xy=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Rh(e,t,r){if(t===1)return e;if(r=r||100,typeof e=="number")return Math.ceil(e*t*r)/r;if(typeof e!="string")return e;const i=e.split(Yy);if(i===null||!i.length)return e;const n=[];let s=i.shift(),o=Xy.test(s);for(;;){if(o){const l=parseFloat(s);isNaN(l)?n.push(s):n.push(Math.ceil(l*t*r)/r)}else n.push(s);if(s=i.shift(),s===void 0)return n.join("");o=!o}}const Qy=e=>e==="unset"||e==="undefined"||e==="none";function Zy(e,t){const r={...nd,...e},i={...Jm,...t},n={left:r.left,top:r.top,width:r.width,height:r.height};let s=r.body;[r,i].forEach(y=>{const w=[],k=y.hFlip,v=y.vFlip;let f=y.rotate;k?v?f+=2:(w.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),w.push("scale(-1 1)"),n.top=n.left=0):v&&(w.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),w.push("scale(1 -1)"),n.top=n.left=0);let b;switch(f<0&&(f-=Math.floor(f/4)*4),f=f%4,f){case 1:b=n.height/2+n.top,w.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:w.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:b=n.width/2+n.left,w.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}f%2===1&&(n.left!==n.top&&(b=n.left,n.left=n.top,n.top=b),n.width!==n.height&&(b=n.width,n.width=n.height,n.height=b)),w.length&&(s='<g transform="'+w.join(" ")+'">'+s+"</g>")});const o=i.width,l=i.height,a=n.width,c=n.height;let h,d;o===null?(d=l===null?"1em":l==="auto"?c:l,h=Rh(d,a/c)):(h=o==="auto"?a:o,d=l===null?Rh(h,c/a):l==="auto"?c:l);const p={},g=(y,w)=>{Qy(w)||(p[y]=w.toString())};return g("width",h),g("height",d),p.viewBox=n.left.toString()+" "+n.top.toString()+" "+a.toString()+" "+c.toString(),{attributes:p,body:s}}const Jy=/\sid="(\S+)"/g,eb="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let tb=0;function rb(e,t=eb){const r=[];let i;for(;i=Jy.exec(e);)r.push(i[1]);if(!r.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(s=>{const o=typeof t=="function"?t(s):t+(tb++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const Hc=Object.create(null);function ib(e,t){Hc[e]=t}function Uc(e){return Hc[e]||Hc[""]}function od(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ad=Object.create(null),Rn=["https://api.simplesvg.com","https://api.unisvg.com"],Go=[];for(;Rn.length>0;)Rn.length===1||Math.random()>.5?Go.push(Rn.shift()):Go.push(Rn.pop());ad[""]=od({resources:["https://api.iconify.design"].concat(Go)});function nb(e,t){const r=od(t);return r===null?!1:(ad[e]=r,!0)}function ld(e){return ad[e]}const sb=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Fh=sb();function ob(e,t){const r=ld(e);if(!r)return 0;let i;if(!r.maxURL)i=0;else{let n=0;r.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";i=r.maxURL-n-r.path.length-s.length}return i}function ab(e){return e===404}const lb=(e,t,r)=>{const i=[],n=ob(e,t),s="icons";let o={type:s,provider:e,prefix:t,icons:[]},l=0;return r.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(i.push(o),o={type:s,provider:e,prefix:t,icons:[]},l=a.length),o.icons.push(a)}),i.push(o),i};function cb(e){if(typeof e=="string"){const t=ld(e);if(t)return t.path}return"/"}const ub=(e,t,r)=>{if(!Fh){r("abort",424);return}let i=cb(t.provider);switch(t.type){case"icons":{const s=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});i+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:r("abort",400);return}let n=503;Fh(e+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{r(ab(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?r("abort",s):r("next",n)});return}setTimeout(()=>{r("success",s)})}).catch(()=>{r("next",n)})},db={prepare:lb,send:ub};function hb(e){const t={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return e.forEach(n=>{if(i.name===n.name&&i.prefix===n.prefix&&i.provider===n.provider)return;i=n;const s=n.provider,o=n.prefix,l=n.name,a=r[s]||(r[s]=Object.create(null)),c=a[o]||(a[o]=Ti(s,o));let h;l in c.icons?h=t.loaded:o===""||c.missing.has(l)?h=t.missing:h=t.pending;const d={provider:s,prefix:o,name:l};h.push(d)}),t}function eg(e,t){e.forEach(r=>{const i=r.loaderCallbacks;i&&(r.loaderCallbacks=i.filter(n=>n.id!==t))})}function pb(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1;const i=e.provider,n=e.prefix;t.forEach(s=>{const o=s.icons,l=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(e.icons[c])o.loaded.push({provider:i,prefix:n,name:c});else if(e.missing.has(c))o.missing.push({provider:i,prefix:n,name:c});else return r=!0,!0;return!1}),o.pending.length!==l&&(r||eg([e],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let fb=0;function mb(e,t,r){const i=fb++,n=eg.bind(null,r,i);if(!t.pending.length)return n;const s={id:i,icons:t,callback:e,abort:n};return r.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}function gb(e,t=!0,r=!1){const i=[];return e.forEach(n=>{const s=typeof n=="string"?Wa(n,t,r):n;s&&i.push(s)}),i}var vb={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function yb(e,t,r,i){const n=e.resources.length,s=e.random?Math.floor(Math.random()*n):e.index;let o;if(e.random){let S=e.resources.slice(0);for(o=[];S.length>1;){const E=Math.floor(Math.random()*S.length);o.push(S[E]),S=S.slice(0,E).concat(S.slice(E+1))}o=o.concat(S)}else o=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let a="pending",c=0,h,d=null,p=[],g=[];typeof i=="function"&&g.push(i);function y(){d&&(clearTimeout(d),d=null)}function w(){a==="pending"&&(a="aborted"),y(),p.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),p=[]}function k(S,E){E&&(g=[]),typeof S=="function"&&g.push(S)}function v(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:p.length,subscribe:k,abort:w}}function f(){a="failed",g.forEach(S=>{S(void 0,h)})}function b(){p.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),p=[]}function _(S,E,$){const P=E!=="success";switch(p=p.filter(C=>C!==S),a){case"pending":break;case"failed":if(P||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){h=$,f();return}if(P){h=$,p.length||(o.length?x():f());return}if(y(),b(),!e.random){const C=e.resources.indexOf(S.resource);C!==-1&&C!==e.index&&(e.index=C)}a="completed",g.forEach(C=>{C($)})}function x(){if(a!=="pending")return;y();const S=o.shift();if(S===void 0){if(p.length){d=setTimeout(()=>{y(),a==="pending"&&(b(),f())},e.timeout);return}f();return}const E={status:"pending",resource:S,callback:($,P)=>{_(E,$,P)}};p.push(E),c++,d=setTimeout(x,e.rotate),r(S,t,E.callback)}return setTimeout(x),v}function tg(e){const t={...vb,...e};let r=[];function i(){r=r.filter(l=>l().status==="pending")}function n(l,a,c){const h=yb(t,l,a,(d,p)=>{i(),c&&c(d,p)});return r.push(h),h}function s(l){return r.find(a=>l(a))||null}return{query:n,find:s,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:i}}function Bh(){}const zl=Object.create(null);function bb(e){if(!zl[e]){const t=ld(e);if(!t)return;const r=tg(t),i={config:t,redundancy:r};zl[e]=i}return zl[e]}function wb(e,t,r){let i,n;if(typeof e=="string"){const s=Uc(e);if(!s)return r(void 0,424),Bh;n=s.send;const o=bb(e);o&&(i=o.redundancy)}else{const s=od(e);if(s){i=tg(s);const o=e.resources?e.resources[0]:"",l=Uc(o);l&&(n=l.send)}}return!i||!n?(r(void 0,424),Bh):i.query(t,n,r)().abort}const Vh="iconify2",Os="iconify",rg=Os+"-count",jh=Os+"-version",ig=36e5,_b=168;function Wc(e,t){try{return e.getItem(t)}catch{}}function cd(e,t,r){try{return e.setItem(t,r),!0}catch{}}function Hh(e,t){try{e.removeItem(t)}catch{}}function Gc(e,t){return cd(e,rg,t.toString())}function Kc(e){return parseInt(Wc(e,rg))||0}const Ga={local:!0,session:!0},ng={local:new Set,session:new Set};let ud=!1;function xb(e){ud=e}let ko=typeof window>"u"?{}:window;function sg(e){const t=e+"Storage";try{if(ko&&ko[t]&&typeof ko[t].length=="number")return ko[t]}catch{}Ga[e]=!1}function og(e,t){const r=sg(e);if(!r)return;const i=Wc(r,jh);if(i!==Vh){if(i){const l=Kc(r);for(let a=0;a<l;a++)Hh(r,Os+a.toString())}cd(r,jh,Vh),Gc(r,0);return}const n=Math.floor(Date.now()/ig)-_b,s=l=>{const a=Os+l.toString(),c=Wc(r,a);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>n&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&t(h,l))return!0}catch{}Hh(r,a)}};let o=Kc(r);for(let l=o-1;l>=0;l--)s(l)||(l===o-1?(o--,Gc(r,o)):ng[e].add(l))}function ag(){if(!ud){xb(!0);for(const e in Ga)og(e,t=>{const r=t.data,i=t.provider,n=r.prefix,s=Ti(i,n);if(!sd(s,r).length)return!1;const o=r.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function kb(e,t){const r=e.lastModifiedCached;if(r&&r>=t)return r===t;if(e.lastModifiedCached=t,r)for(const i in Ga)og(i,n=>{const s=n.data;return n.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Sb(e,t){ud||ag();function r(i){let n;if(!Ga[i]||!(n=sg(i)))return;const s=ng[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=Kc(n),!Gc(n,o+1))return;const l={cached:Math.floor(Date.now()/ig),provider:e.provider,data:t};return cd(n,Os+o.toString(),JSON.stringify(l))}t.lastModified&&!kb(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),r("local")||r("session"))}function Uh(){}function Cb(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,pb(e)}))}function $b(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:r,prefix:i}=e,n=e.iconsToLoad;delete e.iconsToLoad;let s;if(!n||!(s=Uc(r)))return;s.prepare(r,i,n).forEach(l=>{wb(r,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{e.missing.add(c)});else try{const c=sd(e,a);if(!c.length)return;const h=e.pendingIcons;h&&c.forEach(d=>{h.delete(d)}),Sb(e,a)}catch(c){console.error(c)}Cb(e)})})}))}const Eb=(e,t)=>{const r=gb(e,!0,Qm()),i=hb(r);if(!i.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(i.loaded,i.missing,i.pending,Uh)}),()=>{a=!1}}const n=Object.create(null),s=[];let o,l;return i.pending.forEach(a=>{const{provider:c,prefix:h}=a;if(h===l&&c===o)return;o=c,l=h,s.push(Ti(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),i.pending.forEach(a=>{const{provider:c,prefix:h,name:d}=a,p=Ti(c,h),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(d)||(g.add(d),n[c][h].push(d))}),s.forEach(a=>{const{provider:c,prefix:h}=a;n[c][h].length&&$b(a,n[c][h])}),t?mb(t,i,s):Uh};function Tb(e,t){const r={...e};for(const i in t){const n=t[i],s=typeof n;i in Zm?(n===null||n&&(s==="string"||s==="number"))&&(r[i]=n):s===typeof r[i]&&(r[i]=i==="rotate"?n%4:n)}return r}const zb=/[\s,]+/;function Ab(e,t){t.split(zb).forEach(r=>{switch(r.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Lb(e,t=0){const r=e.replace(/^-?[0-9.]*/,"");function i(n){for(;n<0;)n+=4;return n%4}if(r===""){const n=parseInt(e);return isNaN(n)?0:i(n)}else if(r!==e){let n=0;switch(r){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(e.slice(0,e.length-r.length));return isNaN(s)?0:(s=s/n,s%1===0?i(s):0)}}return t}function Pb(e,t){let r=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)r+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+e+"</svg>"}function Ib(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ob(e){return"data:image/svg+xml,"+Ib(e)}function Nb(e){return'url("'+Ob(e)+'")'}let os;function Mb(){try{os=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{os=null}}function Db(e){return os===void 0&&Mb(),os?os.createHTML(e):e}const lg={...Jm,inline:!1},Rb={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Fb={display:"inline-block"},qc={backgroundColor:"currentColor"},cg={backgroundColor:"transparent"},Wh={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Gh={WebkitMask:qc,mask:qc,background:cg};for(const e in Gh){const t=Gh[e];for(const r in Wh)t[e+r]=Wh[r]}const Bb={...lg,inline:!0};function Kh(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Vb=(e,t,r,i)=>{const n=r?Bb:lg,s=Tb(n,t),o=t.mode||"svg",l={},a=t.style||{},c={...o==="svg"?Rb:{},ref:i};for(let v in t){const f=t[v];if(f!==void 0)switch(v){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":s[v]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Ab(s,f);break;case"color":l.color=f;break;case"rotate":typeof f=="string"?s[v]=Lb(f):typeof f=="number"&&(s[v]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete c["aria-hidden"];break;default:n[v]===void 0&&(c[v]=f)}}const h=Zy(e,s),d=h.attributes;if(s.inline&&(l.verticalAlign="-0.125em"),o==="svg"){c.style={...l,...a},Object.assign(c,d);let v=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:Db(rb(h.body,f?()=>f+"ID"+v++:"iconifyReact"))},ce.createElement("svg",c)}const{body:p,width:g,height:y}=e,w=o==="mask"||(o==="bg"?!1:p.indexOf("currentColor")!==-1),k=Pb(p,{...d,width:g+"",height:y+""});return c.style={...l,"--svg":Nb(k),width:Kh(d.width),height:Kh(d.height),...Fb,...w?qc:cg,...a},ce.createElement("span",c)};Qm(!0);ib("",db);if(typeof document<"u"&&typeof window<"u"){ag();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!qy(i))&&console.error(r)}catch{console.error(r)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let r in t){const i="IconifyProviders["+r+"] is invalid.";try{const n=t[r];if(typeof n!="object"||!n||n.resources===void 0)continue;nb(r,n)||console.error(i)}catch{console.error(i)}}}}class ug extends ce.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const r=this.state,i=this.props.icon;if(typeof i=="object"&&i!==null&&typeof i.body=="string"){this._icon="",this._abortLoading(),(t||r.icon===null)&&this._setData({data:i});return}let n;if(typeof i!="string"||(n=Wa(i,!1,!0))===null){this._abortLoading(),this._setData(null);return}const s=Gy(n);if(!s){(!this._loading||this._loading.name!==i)&&(this._abortLoading(),this._icon="",this._setData(null),s!==null&&(this._loading={name:i,abort:Eb([n],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||r.icon===null){this._abortLoading(),this._icon=i;const o=["iconify"];n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),this._setData({data:s,classes:o}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,r=this.state.icon;if(r===null)return t.children?t.children:ce.createElement("span",{});let i=t;return r.classes&&(i={...t,className:(typeof t.className=="string"?t.className+" ":"")+r.classes.join(" ")}),Vb({...nd,...r.data},i,t._inline,t._ref)}}const It=ce.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!1};return ce.createElement(ug,i)});ce.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!0};return ce.createElement(ug,i)});function jb({lightMode:e,setLightMode:t,fontIncreased:r,setFontIncreased:i}){function n(){t(o=>!o),localStorage.setItem("mode",String(!e))}function s(){i(o=>!o),localStorage.setItem("font",String(!r))}return T.jsx("header",{className:"fade-in-header",children:T.jsx("nav",{style:{backgroundColor:e?"#282836":"#CACAD3",color:e?"white":"black"},children:T.jsxs("ul",{className:"header__features",children:[T.jsx("li",{style:{backgroundColor:e?"#141515":"#EEF0F3"},className:"header__homepage",children:T.jsx(It,{icon:"line-md:home-md-twotone-alt",width:"24",height:"24"})}),T.jsxs("li",{className:"header__link",children:[T.jsx(It,{icon:"iwwa:file-pdf",className:"hover",width:"24",height:"24"}),T.jsx("a",{className:"header__cv",href:"https://ste1v0.dev/serov_frontend.pdf",target:"_blank",rel:"noreferrer",children:"CV"})]}),T.jsxs("li",{className:"header__link",children:[T.jsx(It,{icon:"ic:twotone-telegram",className:"hover rotate",width:"24",height:"24"}),T.jsx("a",{className:"header__tg",href:"https://t.me/ste1v0",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),T.jsxs("li",{className:"header__right",children:[T.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:s,children:r?"text_decrease":"text_increase"}),T.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:n,children:e?"dark_mode":"light_mode"})]})]})})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=globalThis,dd=Ko.ShadowRoot&&(Ko.ShadyCSS===void 0||Ko.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hd=Symbol(),qh=new WeakMap;let dg=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==hd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(dd&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=qh.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qh.set(r,t))}return t}toString(){return this.cssText}};const Hb=e=>new dg(typeof e=="string"?e:e+"",void 0,hd),U=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new dg(r,e,hd)},Ub=(e,t)=>{if(dd)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Ko.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Yh=dd?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Hb(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wb,defineProperty:Gb,getOwnPropertyDescriptor:Kb,getOwnPropertyNames:qb,getOwnPropertySymbols:Yb,getPrototypeOf:Xb}=Object,Xr=globalThis,Xh=Xr.trustedTypes,Qb=Xh?Xh.emptyScript:"",Al=Xr.reactiveElementPolyfillSupport,as=(e,t)=>e,vn={toAttribute(e,t){switch(t){case Boolean:e=e?Qb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pd=(e,t)=>!Wb(e,t),Qh={attribute:!0,type:String,converter:vn,reflect:!1,hasChanged:pd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xr.litPropertyMetadata??(Xr.litPropertyMetadata=new WeakMap);class Vi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Qh){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Gb(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:s}=Kb(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qh}static _$Ei(){if(this.hasOwnProperty(as("elementProperties")))return;const t=Xb(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(as("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(as("properties"))){const r=this.properties,i=[...qb(r),...Yb(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Yh(n))}else t!==void 0&&r.push(Yh(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ub(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r){var s;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:vn).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){var s;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:vn;this._$Em=n,this[n]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??pd)(this[t],r))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$Ej()}catch(n){throw t=!1,this._$Ej(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}}Vi.elementStyles=[],Vi.shadowRootOptions={mode:"open"},Vi[as("elementProperties")]=new Map,Vi[as("finalized")]=new Map,Al==null||Al({ReactiveElement:Vi}),(Xr.reactiveElementVersions??(Xr.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=globalThis,_a=ls.trustedTypes,Zh=_a?_a.createPolicy("lit-html",{createHTML:e=>e}):void 0,hg="$lit$",Mr=`lit$${(Math.random()+"").slice(9)}$`,pg="?"+Mr,Zb=`<${pg}>`,zi=document,Ns=()=>zi.createComment(""),Ms=e=>e===null||typeof e!="object"&&typeof e!="function",fg=Array.isArray,Jb=e=>fg(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ll=`[ 	
\f\r]`,Fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jh=/-->/g,ep=/>/g,di=RegExp(`>|${Ll}(?:([^\\s"'>=/]+)(${Ll}*=${Ll}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tp=/'/g,rp=/"/g,mg=/^(?:script|style|textarea|title)$/i,e1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),z=e1(1),St=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),ip=new WeakMap,bi=zi.createTreeWalker(zi,129);function gg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zh!==void 0?Zh.createHTML(t):t}const t1=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":"",o=Fn;for(let l=0;l<r;l++){const a=e[l];let c,h,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===Fn?h[1]==="!--"?o=Jh:h[1]!==void 0?o=ep:h[2]!==void 0?(mg.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=di):h[3]!==void 0&&(o=di):o===di?h[0]===">"?(o=n??Fn,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?di:h[3]==='"'?rp:tp):o===rp||o===tp?o=di:o===Jh||o===ep?o=Fn:(o=di,n=void 0);const g=o===di&&e[l+1].startsWith("/>")?" ":"";s+=o===Fn?a+Zb:d>=0?(i.push(c),a.slice(0,d)+hg+a.slice(d)+Mr+g):a+Mr+(d===-2?l:g)}return[gg(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class Ds{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const l=t.length-1,a=this.parts,[c,h]=t1(t,r);if(this.el=Ds.createElement(c,i),bi.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=bi.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(hg)){const p=h[o++],g=n.getAttribute(d).split(Mr),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?i1:y[1]==="?"?n1:y[1]==="@"?s1:Ka}),n.removeAttribute(d)}else d.startsWith(Mr)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(mg.test(n.tagName)){const d=n.textContent.split(Mr),p=d.length-1;if(p>0){n.textContent=_a?_a.emptyScript:"";for(let g=0;g<p;g++)n.append(d[g],Ns()),bi.nextNode(),a.push({type:2,index:++s});n.append(d[p],Ns())}}}else if(n.nodeType===8)if(n.data===pg)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(Mr,d+1))!==-1;)a.push({type:7,index:s}),d+=Mr.length-1}s++}}static createElement(t,r){const i=zi.createElement("template");return i.innerHTML=t,i}}function yn(e,t,r=e,i){var o,l;if(t===St)return t;let n=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const s=Ms(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(t=yn(e,n._$AS(e,t.values),n,i)),t}class r1{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??zi).importNode(r,!0);bi.currentNode=n;let s=bi.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new Ws(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new o1(s,this,t)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=bi.nextNode(),o++)}return bi.currentNode=zi,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Ws{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=yn(this,t,r),Ms(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==St&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jb(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==me&&Ms(this._$AH)?this._$AA.nextSibling.data=t:this.$(zi.createTextNode(t)),this._$AH=t}g(t){var s;const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ds.createElement(gg(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const o=new r1(n,this),l=o.u(this.options);o.p(r),this.$(l),this._$AH=o}}_$AC(t){let r=ip.get(t.strings);return r===void 0&&ip.set(t.strings,r=new Ds(t)),r}T(t){fg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Ws(this.k(Ns()),this.k(Ns()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Ka{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,s){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=yn(this,t,r,0),o=!Ms(t)||t!==this._$AH&&t!==St,o&&(this._$AH=t);else{const l=t;let a,c;for(t=s[0],a=0;a<s.length-1;a++)c=yn(this,l[i+a],r,a),c===St&&(c=this._$AH[a]),o||(o=!Ms(c)||c!==this._$AH[a]),c===me?t=me:t!==me&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!n&&this.O(t)}O(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class i1 extends Ka{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===me?void 0:t}}let n1=class extends Ka{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}};class s1 extends Ka{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){if((t=yn(this,t,r,0)??me)===St)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class o1{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){yn(this,t)}}const Pl=ls.litHtmlPolyfillSupport;Pl==null||Pl(Ds,Ws),(ls.litHtmlVersions??(ls.litHtmlVersions=[])).push("3.1.1");const a1=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new Ws(t.insertBefore(Ns(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cs=class extends Vi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=a1(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return St}};var Pp;cs._$litElement$=!0,cs.finalized=!0,(Pp=globalThis.litElementHydrateSupport)==null||Pp.call(globalThis,{LitElement:cs});const Il=globalThis.litElementPolyfillSupport;Il==null||Il({LitElement:cs});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");var W=U`
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
`,l1=U`
  ${W}

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
`,c1=U`
  ${W}

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
`,vg=Object.defineProperty,u1=Object.defineProperties,d1=Object.getOwnPropertyDescriptor,h1=Object.getOwnPropertyDescriptors,np=Object.getOwnPropertySymbols,p1=Object.prototype.hasOwnProperty,f1=Object.prototype.propertyIsEnumerable,Ol=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},sp=(e,t,r)=>t in e?vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$r=(e,t)=>{for(var r in t||(t={}))p1.call(t,r)&&sp(e,r,t[r]);if(np)for(var r of np(t))f1.call(t,r)&&sp(e,r,t[r]);return e},Gs=(e,t)=>u1(e,h1(t)),u=(e,t,r,i)=>{for(var n=i>1?void 0:i?d1(t,r):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&vg(t,r,n),n},m1=function(e,t){this[0]=e,this[1]=t},g1=e=>{var t=e[Ol("asyncIterator")],r=!1,i,n={};return t==null?(t=e[Ol("iterator")](),i=s=>n[s]=o=>t[s](o)):(t=t.call(e),i=s=>n[s]=o=>{if(r){if(r=!1,s==="throw")throw o;return o}return r=!0,{done:!1,value:new m1(new Promise(l=>{var a=t[s](o);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),n[Ol("iterator")]=()=>n,i("next"),"throw"in t?i("throw"):n.throw=s=>{throw s},"return"in t&&i("return"),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v1={attribute:!0,type:String,converter:vn,reflect:!1,hasChanged:pd},y1=(e=v1,t,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,e),i==="accessor"){const{name:o}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,e)},init(l){return l!==void 0&&this.C(o,void 0,e),l}}}if(i==="setter"){const{name:o}=r;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+i)};function m(e){return(t,r)=>typeof r=="object"?y1(e,t,r):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yg(e){return(t,r)=>{const i=typeof t=="function"?t:t[r];Object.assign(i,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(r,i,n)=>{const s=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:o,set:l}=typeof i=="object"?r:n??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Yc(r,i,{get(){let a=o.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Yc(r,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b1(e){return(t,r)=>Yc(t,r,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(e))??null}})}var R=class extends cs{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,$r({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},r);return}let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in i&&i.version&&(s=" v"+i.version),!(n&&s&&n===s)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`)}};R.version="2.12.0";R.dependencies={};u([m()],R.prototype,"dir",2);u([m()],R.prototype,"lang",2);const Jr=Math.min,xt=Math.max,xa=Math.round,So=Math.floor,ei=e=>({x:e,y:e}),w1={left:"right",right:"left",bottom:"top",top:"bottom"},_1={start:"end",end:"start"};function Xc(e,t,r){return xt(e,Jr(t,r))}function Sn(e,t){return typeof e=="function"?e(t):e}function ti(e){return e.split("-")[0]}function Cn(e){return e.split("-")[1]}function bg(e){return e==="x"?"y":"x"}function fd(e){return e==="y"?"height":"width"}function Ks(e){return["top","bottom"].includes(ti(e))?"y":"x"}function md(e){return bg(Ks(e))}function x1(e,t,r){r===void 0&&(r=!1);const i=Cn(e),n=md(e),s=fd(n);let o=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=ka(o)),[o,ka(o)]}function k1(e){const t=ka(e);return[Qc(e),t,Qc(t)]}function Qc(e){return e.replace(/start|end/g,t=>_1[t])}function S1(e,t,r){const i=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return r?t?n:i:t?i:n;case"left":case"right":return t?s:o;default:return[]}}function C1(e,t,r,i){const n=Cn(e);let s=S1(ti(e),r==="start",i);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(Qc)))),s}function ka(e){return e.replace(/left|right|bottom|top/g,t=>w1[t])}function $1(e){return{top:0,right:0,bottom:0,left:0,...e}}function wg(e){return typeof e!="number"?$1(e):{top:e,right:e,bottom:e,left:e}}function Sa(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function op(e,t,r){let{reference:i,floating:n}=e;const s=Ks(t),o=md(t),l=fd(o),a=ti(t),c=s==="y",h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,p=i[l]/2-n[l]/2;let g;switch(a){case"top":g={x:h,y:i.y-n.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:d};break;case"left":g={x:i.x-n.width,y:d};break;default:g={x:i.x,y:i.y}}switch(Cn(t)){case"start":g[o]-=p*(r&&c?-1:1);break;case"end":g[o]+=p*(r&&c?-1:1);break}return g}const E1=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:o}=r,l=s.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:d}=op(c,i,a),p=i,g={},y=0;for(let w=0;w<l.length;w++){const{name:k,fn:v}=l[w],{x:f,y:b,data:_,reset:x}=await v({x:h,y:d,initialPlacement:i,placement:p,strategy:n,middlewareData:g,rects:c,platform:o,elements:{reference:e,floating:t}});if(h=f??h,d=b??d,g={...g,[k]:{...g[k],..._}},x&&y<=50){y++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(c=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):x.rects),{x:h,y:d}=op(c,p,a)),w=-1;continue}}return{x:h,y:d,placement:p,strategy:n,middlewareData:g}};async function gd(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:s,rects:o,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=Sn(t,e),y=wg(g),k=l[p?d==="floating"?"reference":"floating":d],v=Sa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(k)))==null||r?k:k.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),f=d==="floating"?{...o.floating,x:i,y:n}:o.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),_=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},x=Sa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f,offsetParent:b,strategy:a}):f);return{top:(v.top-x.top+y.top)/_.y,bottom:(x.bottom-v.bottom+y.bottom)/_.y,left:(v.left-x.left+y.left)/_.x,right:(x.right-v.right+y.right)/_.x}}const T1=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:i,placement:n,rects:s,platform:o,elements:l,middlewareData:a}=t,{element:c,padding:h=0}=Sn(e,t)||{};if(c==null)return{};const d=wg(h),p={x:r,y:i},g=md(n),y=fd(g),w=await o.getDimensions(c),k=g==="y",v=k?"top":"left",f=k?"bottom":"right",b=k?"clientHeight":"clientWidth",_=s.reference[y]+s.reference[g]-p[g]-s.floating[y],x=p[g]-s.reference[g],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let E=S?S[b]:0;(!E||!await(o.isElement==null?void 0:o.isElement(S)))&&(E=l.floating[b]||s.floating[y]);const $=_/2-x/2,P=E/2-w[y]/2-1,C=Jr(d[v],P),N=Jr(d[f],P),D=C,te=E-w[y]-N,le=E/2-w[y]/2+$,ye=Xc(D,le,te),Oe=!a.arrow&&Cn(n)!=null&&le!=ye&&s.reference[y]/2-(le<D?C:N)-w[y]/2<0,We=Oe?le<D?le-D:le-te:0;return{[g]:p[g]+We,data:{[g]:ye,centerOffset:le-ye-We,...Oe&&{alignmentOffset:We}},reset:Oe}}}),z1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:n,middlewareData:s,rects:o,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=Sn(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const v=ti(n),f=ti(l)===l,b=await(a.isRTL==null?void 0:a.isRTL(c.floating)),_=p||(f||!w?[ka(l)]:k1(l));!p&&y!=="none"&&_.push(...C1(l,w,y,b));const x=[l,..._],S=await gd(t,k),E=[];let $=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&E.push(S[v]),d){const D=x1(n,o,b);E.push(S[D[0]],S[D[1]])}if($=[...$,{placement:n,overflows:E}],!E.every(D=>D<=0)){var P,C;const D=(((P=s.flip)==null?void 0:P.index)||0)+1,te=x[D];if(te)return{data:{index:D,overflows:$},reset:{placement:te}};let le=(C=$.filter(ye=>ye.overflows[0]<=0).sort((ye,Oe)=>ye.overflows[1]-Oe.overflows[1])[0])==null?void 0:C.placement;if(!le)switch(g){case"bestFit":{var N;const ye=(N=$.map(Oe=>[Oe.placement,Oe.overflows.filter(We=>We>0).reduce((We,O)=>We+O,0)]).sort((Oe,We)=>Oe[1]-We[1])[0])==null?void 0:N[0];ye&&(le=ye);break}case"initialPlacement":le=l;break}if(n!==le)return{reset:{placement:le}}}return{}}}};async function A1(e,t){const{placement:r,platform:i,elements:n}=e,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),o=ti(r),l=Cn(r),a=Ks(r)==="y",c=["left","top"].includes(o)?-1:1,h=s&&a?-1:1,d=Sn(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof y=="number"&&(g=l==="end"?y*-1:y),a?{x:g*h,y:p*c}:{x:p*c,y:g*h}}const L1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:n,y:s,placement:o,middlewareData:l}=t,a=await A1(t,e);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:n+a.x,y:s+a.y,data:{...a,placement:o}}}}},P1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:k=>{let{x:v,y:f}=k;return{x:v,y:f}}},...a}=Sn(e,t),c={x:r,y:i},h=await gd(t,a),d=Ks(ti(n)),p=bg(d);let g=c[p],y=c[d];if(s){const k=p==="y"?"top":"left",v=p==="y"?"bottom":"right",f=g+h[k],b=g-h[v];g=Xc(f,g,b)}if(o){const k=d==="y"?"top":"left",v=d==="y"?"bottom":"right",f=y+h[k],b=y-h[v];y=Xc(f,y,b)}const w=l.fn({...t,[p]:g,[d]:y});return{...w,data:{x:w.x-r,y:w.y-i}}}}},I1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:s}=t,{apply:o=()=>{},...l}=Sn(e,t),a=await gd(t,l),c=ti(r),h=Cn(r),d=Ks(r)==="y",{width:p,height:g}=i.floating;let y,w;c==="top"||c==="bottom"?(y=c,w=h===(await(n.isRTL==null?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(w=c,y=h==="end"?"top":"bottom");const k=g-a[y],v=p-a[w],f=!t.middlewareData.shift;let b=k,_=v;if(d){const S=p-a.left-a.right;_=h||f?Jr(v,S):S}else{const S=g-a.top-a.bottom;b=h||f?Jr(k,S):S}if(f&&!h){const S=xt(a.left,0),E=xt(a.right,0),$=xt(a.top,0),P=xt(a.bottom,0);d?_=p-2*(S!==0||E!==0?S+E:xt(a.left,a.right)):b=g-2*($!==0||P!==0?$+P:xt(a.top,a.bottom))}await o({...t,availableWidth:_,availableHeight:b});const x=await n.getDimensions(s.floating);return p!==x.width||g!==x.height?{reset:{rects:!0}}:{}}}};function ri(e){return _g(e)?(e.nodeName||"").toLowerCase():"#document"}function $t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Er(e){var t;return(t=(_g(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function _g(e){return e instanceof Node||e instanceof $t(e).Node}function Sr(e){return e instanceof Element||e instanceof $t(e).Element}function hr(e){return e instanceof HTMLElement||e instanceof $t(e).HTMLElement}function ap(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $t(e).ShadowRoot}function qs(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=Bt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(n)}function O1(e){return["table","td","th"].includes(ri(e))}function vd(e){const t=yd(),r=Bt(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function N1(e){let t=bn(e);for(;hr(t)&&!qa(t);){if(vd(t))return t;t=bn(t)}return null}function yd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qa(e){return["html","body","#document"].includes(ri(e))}function Bt(e){return $t(e).getComputedStyle(e)}function Ya(e){return Sr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function bn(e){if(ri(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ap(e)&&e.host||Er(e);return ap(t)?t.host:t}function xg(e){const t=bn(e);return qa(t)?e.ownerDocument?e.ownerDocument.body:e.body:hr(t)&&qs(t)?t:xg(t)}function Rs(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=xg(e),s=n===((i=e.ownerDocument)==null?void 0:i.body),o=$t(n);return s?t.concat(o,o.visualViewport||[],qs(n)?n:[],o.frameElement&&r?Rs(o.frameElement):[]):t.concat(n,Rs(n,[],r))}function kg(e){const t=Bt(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=hr(e),s=n?e.offsetWidth:r,o=n?e.offsetHeight:i,l=xa(r)!==s||xa(i)!==o;return l&&(r=s,i=o),{width:r,height:i,$:l}}function bd(e){return Sr(e)?e:e.contextElement}function ln(e){const t=bd(e);if(!hr(t))return ei(1);const r=t.getBoundingClientRect(),{width:i,height:n,$:s}=kg(t);let o=(s?xa(r.width):r.width)/i,l=(s?xa(r.height):r.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const M1=ei(0);function Sg(e){const t=$t(e);return!yd()||!t.visualViewport?M1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function D1(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==$t(e)?!1:t}function Ai(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),s=bd(e);let o=ei(1);t&&(i?Sr(i)&&(o=ln(i)):o=ln(e));const l=D1(s,r,i)?Sg(s):ei(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,h=n.width/o.x,d=n.height/o.y;if(s){const p=$t(s),g=i&&Sr(i)?$t(i):i;let y=p.frameElement;for(;y&&i&&g!==p;){const w=ln(y),k=y.getBoundingClientRect(),v=Bt(y),f=k.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,b=k.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,c*=w.y,h*=w.x,d*=w.y,a+=f,c+=b,y=$t(y).frameElement}}return Sa({width:h,height:d,x:a,y:c})}function R1(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=hr(r),s=Er(r);if(r===s)return t;let o={scrollLeft:0,scrollTop:0},l=ei(1);const a=ei(0);if((n||!n&&i!=="fixed")&&((ri(r)!=="body"||qs(s))&&(o=Ya(r)),hr(r))){const c=Ai(r);l=ln(r),a.x=c.x+r.clientLeft,a.y=c.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-o.scrollLeft*l.x+a.x,y:t.y*l.y-o.scrollTop*l.y+a.y}}function F1(e){return Array.from(e.getClientRects())}function Cg(e){return Ai(Er(e)).left+Ya(e).scrollLeft}function B1(e){const t=Er(e),r=Ya(e),i=e.ownerDocument.body,n=xt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=xt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Cg(e);const l=-r.scrollTop;return Bt(i).direction==="rtl"&&(o+=xt(t.clientWidth,i.clientWidth)-n),{width:n,height:s,x:o,y:l}}function V1(e,t){const r=$t(e),i=Er(e),n=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,a=0;if(n){s=n.width,o=n.height;const c=yd();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:s,height:o,x:l,y:a}}function j1(e,t){const r=Ai(e,!0,t==="fixed"),i=r.top+e.clientTop,n=r.left+e.clientLeft,s=hr(e)?ln(e):ei(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,a=n*s.x,c=i*s.y;return{width:o,height:l,x:a,y:c}}function lp(e,t,r){let i;if(t==="viewport")i=V1(e,r);else if(t==="document")i=B1(Er(e));else if(Sr(t))i=j1(t,r);else{const n=Sg(e);i={...t,x:t.x-n.x,y:t.y-n.y}}return Sa(i)}function $g(e,t){const r=bn(e);return r===t||!Sr(r)||qa(r)?!1:Bt(r).position==="fixed"||$g(r,t)}function H1(e,t){const r=t.get(e);if(r)return r;let i=Rs(e,[],!1).filter(l=>Sr(l)&&ri(l)!=="body"),n=null;const s=Bt(e).position==="fixed";let o=s?bn(e):e;for(;Sr(o)&&!qa(o);){const l=Bt(o),a=vd(o);!a&&l.position==="fixed"&&(n=null),(s?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||qs(o)&&!a&&$g(e,o))?i=i.filter(h=>h!==o):n=l,o=bn(o)}return t.set(e,i),i}function U1(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const o=[...r==="clippingAncestors"?H1(t,this._c):[].concat(r),i],l=o[0],a=o.reduce((c,h)=>{const d=lp(t,h,n);return c.top=xt(d.top,c.top),c.right=Jr(d.right,c.right),c.bottom=Jr(d.bottom,c.bottom),c.left=xt(d.left,c.left),c},lp(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function W1(e){const{width:t,height:r}=kg(e);return{width:t,height:r}}function G1(e,t,r){const i=hr(t),n=Er(t),s=r==="fixed",o=Ai(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=ei(0);if(i||!i&&!s)if((ri(t)!=="body"||qs(n))&&(l=Ya(t)),i){const c=Ai(t,!0,s,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else n&&(a.x=Cg(n));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function cp(e,t){return!hr(e)||Bt(e).position==="fixed"?null:t?t(e):e.offsetParent}function Eg(e,t){const r=$t(e);if(!hr(e))return r;let i=cp(e,t);for(;i&&O1(i)&&Bt(i).position==="static";)i=cp(i,t);return i&&(ri(i)==="html"||ri(i)==="body"&&Bt(i).position==="static"&&!vd(i))?r:i||N1(e)||r}const K1=async function(e){let{reference:t,floating:r,strategy:i}=e;const n=this.getOffsetParent||Eg,s=this.getDimensions;return{reference:G1(t,await n(r),i),floating:{x:0,y:0,...await s(r)}}};function q1(e){return Bt(e).direction==="rtl"}const qo={convertOffsetParentRelativeRectToViewportRelativeRect:R1,getDocumentElement:Er,getClippingRect:U1,getOffsetParent:Eg,getElementRects:K1,getClientRects:F1,getDimensions:W1,getScale:ln,isElement:Sr,isRTL:q1};function Y1(e,t){let r=null,i;const n=Er(e);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:h,width:d,height:p}=e.getBoundingClientRect();if(l||t(),!d||!p)return;const g=So(h),y=So(n.clientWidth-(c+d)),w=So(n.clientHeight-(h+p)),k=So(c),f={rootMargin:-g+"px "+-y+"px "+-w+"px "+-k+"px",threshold:xt(0,Jr(1,a))||1};let b=!0;function _(x){const S=x[0].intersectionRatio;if(S!==a){if(!b)return o();S?o(!1,S):i=setTimeout(()=>{o(!1,1e-7)},100)}b=!1}try{r=new IntersectionObserver(_,{...f,root:n.ownerDocument})}catch{r=new IntersectionObserver(_,f)}r.observe(e)}return o(!0),s}function X1(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=bd(e),h=n||s?[...c?Rs(c):[],...Rs(t)]:[];h.forEach(v=>{n&&v.addEventListener("scroll",r,{passive:!0}),s&&v.addEventListener("resize",r)});const d=c&&l?Y1(c,r):null;let p=-1,g=null;o&&(g=new ResizeObserver(v=>{let[f]=v;f&&f.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),c&&!a&&g.observe(c),g.observe(t));let y,w=a?Ai(e):null;a&&k();function k(){const v=Ai(e);w&&(v.x!==w.x||v.y!==w.y||v.width!==w.width||v.height!==w.height)&&r(),w=v,y=requestAnimationFrame(k)}return r(),()=>{h.forEach(v=>{n&&v.removeEventListener("scroll",r),s&&v.removeEventListener("resize",r)}),d&&d(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(y)}}const Q1=P1,Z1=z1,up=I1,J1=T1,ew=(e,t,r)=>{const i=new Map,n={platform:qo,...r},s={...n.platform,_c:i};return E1(e,t,{...n,platform:s})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ys=e=>(...t)=>({_$litDirective$:e,values:t});let Xs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=Ys(class extends Xs{constructor(e){var t;if(super(e),e.type!==lr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.it)s in t||(r.remove(s),this.it.delete(s));for(const s in t){const o=!!t[s];o===this.it.has(s)||(n=this.st)!=null&&n.has(s)||(o?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return St}});function tw(e){return rw(e)}function Nl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function rw(e){for(let t=e;t;t=Nl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Nl(e);t;t=Nl(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function iw(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var se=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||iw(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=X1(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[L1({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(up({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=n?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Z1({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Q1({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(up({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(J1({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>qo.getOffsetParent(r,tw):qo.getOffsetParent;ew(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Gs($r({},qo),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:n,placement:s})=>{const o=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const a=n.arrow.x,c=n.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?y:"",g=o?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":y,g=o?y:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return z`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${G({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?z`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};se.styles=c1;u([I(".popup")],se.prototype,"popup",2);u([I(".popup__arrow")],se.prototype,"arrowEl",2);u([m()],se.prototype,"anchor",2);u([m({type:Boolean,reflect:!0})],se.prototype,"active",2);u([m({reflect:!0})],se.prototype,"placement",2);u([m({reflect:!0})],se.prototype,"strategy",2);u([m({type:Number})],se.prototype,"distance",2);u([m({type:Number})],se.prototype,"skidding",2);u([m({type:Boolean})],se.prototype,"arrow",2);u([m({attribute:"arrow-placement"})],se.prototype,"arrowPlacement",2);u([m({attribute:"arrow-padding",type:Number})],se.prototype,"arrowPadding",2);u([m({type:Boolean})],se.prototype,"flip",2);u([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],se.prototype,"flipFallbackPlacements",2);u([m({attribute:"flip-fallback-strategy"})],se.prototype,"flipFallbackStrategy",2);u([m({type:Object})],se.prototype,"flipBoundary",2);u([m({attribute:"flip-padding",type:Number})],se.prototype,"flipPadding",2);u([m({type:Boolean})],se.prototype,"shift",2);u([m({type:Object})],se.prototype,"shiftBoundary",2);u([m({attribute:"shift-padding",type:Number})],se.prototype,"shiftPadding",2);u([m({attribute:"auto-size"})],se.prototype,"autoSize",2);u([m()],se.prototype,"sync",2);u([m({type:Object})],se.prototype,"autoSizeBoundary",2);u([m({attribute:"auto-size-padding",type:Number})],se.prototype,"autoSizePadding",2);var Tg=new Map,nw=new WeakMap;function sw(e){return e??{keyframes:[],options:{duration:0}}}function dp(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oe(e,t){Tg.set(e,sw(t))}function ge(e,t,r){const i=nw.get(e);if(i!=null&&i[t])return dp(i[t],r.dir);const n=Tg.get(t);return n?dp(n,r.dir):{keyframes:[],options:{duration:0}}}function ot(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function Ce(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Gs($r({},r),{duration:wd()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function hp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function wd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pe(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Ca(e,t){return e.map(r=>Gs($r({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const Zc=new Set,ow=new MutationObserver(Pg),en=new Map;let zg=document.documentElement.dir||"ltr",Ag=document.documentElement.lang||navigator.language,mi;ow.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Lg(...e){e.map(t=>{const r=t.$code.toLowerCase();en.has(r)?en.set(r,Object.assign(Object.assign({},en.get(r)),t)):en.set(r,t),mi||(mi=t)}),Pg()}function Pg(){zg=document.documentElement.dir||"ltr",Ag=document.documentElement.lang||navigator.language,[...Zc.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let aw=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Zc.add(this.host)}hostDisconnected(){Zc.delete(this.host)}dir(){return`${this.host.dir||zg}`.toLowerCase()}lang(){return`${this.host.lang||Ag}`.toLowerCase()}getTranslationData(t){var r,i;const n=new Intl.Locale(t.replace(/_/g,"-")),s=n==null?void 0:n.language.toLowerCase(),o=(i=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",l=en.get(`${s}-${o}`),a=en.get(s);return{locale:n,language:s,region:o,primary:l,secondary:a}}exists(t,r){var i;const{primary:n,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||s&&s[t]||r.includeFallback&&mi&&mi[t])}term(t,...r){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let s;if(i&&i[t])s=i[t];else if(n&&n[t])s=n[t];else if(mi&&mi[t])s=mi[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,r)}};var Ig={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Lg(Ig);var lw=Ig,ie=class extends aw{};Lg(lw);function L(e,t){const r=$r({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:s}=i,o=Array.isArray(e)?e:[e];i.update=function(l){o.forEach(a=>{const c=a;if(l.has(c)){const h=l.get(c),d=this[c];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,d)}}),s.call(this,l)}}}var De=class extends R{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=hp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=hp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Pe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ge(this,"tooltip.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Pe(this.body);const{keyframes:e,options:t}=ge(this,"tooltip.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${G({tooltip:!0,"tooltip--open":this.open})}
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
    `}};De.styles=l1;De.dependencies={"sl-popup":se};u([I("slot:not([name])")],De.prototype,"defaultSlot",2);u([I(".tooltip__body")],De.prototype,"body",2);u([I("sl-popup")],De.prototype,"popup",2);u([m()],De.prototype,"content",2);u([m()],De.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],De.prototype,"disabled",2);u([m({type:Number})],De.prototype,"distance",2);u([m({type:Boolean,reflect:!0})],De.prototype,"open",2);u([m({type:Number})],De.prototype,"skidding",2);u([m()],De.prototype,"trigger",2);u([m({type:Boolean})],De.prototype,"hoist",2);u([L("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);u([L(["content","distance","hoist","placement","skidding"])],De.prototype,"handleOptionsChange",1);u([L("disabled")],De.prototype,"handleDisabledChange",1);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cw=new Set(["children","localName","ref","style","className"]),pp=new WeakMap,uw=(e,t,r,i,n)=>{const s=n==null?void 0:n[t];s===void 0||r===i?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((o,l,a)=>{let c=pp.get(o);c===void 0&&pp.set(o,c=new Map);let h=c.get(l);a!==void 0?h===void 0?(c.set(l,h={handleEvent:a}),o.addEventListener(l,h)):h.handleEvent=a:h!==void 0&&(c.delete(l),o.removeEventListener(l,h))})(e,s,r)},H=({react:e,tagName:t,elementClass:r,events:i,displayName:n})=>{const s=new Set(Object.keys(i??{})),o=e.forwardRef((l,a)=>{const c=e.useRef(null),h=e.useRef(null),d={},p={};for(const[g,y]of Object.entries(l))cw.has(g)?d[g==="className"?"class":g]=y:s.has(g)||g in r.prototype?p[g]=y:d[g]=y;return e.useLayoutEffect(()=>{if(h.current!==null){for(const g in p)uw(h.current,g,l[g],c.current?c.current[g]:void 0,i);c.current=l}}),e.useLayoutEffect(()=>{var g;(g=h.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{h.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)},[a])})});return o.displayName=n??r.name,o};var dw="sl-tooltip";De.define("sl-tooltip");H({tagName:dw,elementClass:De,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var hw=U`
  ${W}

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
`,pw=U`
  ${W}

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
`,Ni=(e="value")=>(t,r)=>{const i=t.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,o,l){var a;const c=i.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(s===h){const d=c.converter||vn,g=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:vn.fromAttribute)(l,c.type);this[e]!==g&&(this[r]=g)}n.call(this,s,o,l)}},Bn=new WeakMap,Vn=new WeakMap,jn=new WeakMap,Ml=new WeakSet,Co=new WeakMap,Tr=class{constructor(e,t){this.handleFormData=r=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),s=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!i&&!o&&typeof n=="string"&&n.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{r.formData.append(n,l.toString())}):r.formData.append(n,s.toString()))},this.handleFormSubmit=r=>{var i;const n=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Bn.get(this.form))==null||i.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!n&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Co.set(this.host,[])},this.handleInteraction=r=>{const i=Co.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=$r({form:r=>{const i=r.form;if(i){const s=r.getRootNode().getElementById(i);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Co.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Co.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Bn.has(this.form)?Bn.get(this.form).add(this.host):Bn.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Vn.has(this.form)||(Vn.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),jn.has(this.form)||(jn.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Bn.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Vn.has(this.form)&&(this.form.reportValidity=Vn.get(this.form),Vn.delete(this.form)),jn.has(this.form)&&(this.form.checkValidity=jn.get(this.form),jn.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ml.add(e):Ml.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Ml.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Xa=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),fw=Object.freeze(Gs($r({},Xa),{valid:!1,valueMissing:!0})),mw=Object.freeze(Gs($r({},Xa),{valid:!1,customError:!0})),gw=U`
  ${W}

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
`,Jc="";function eu(e){Jc=e}function vw(e=""){if(!Jc){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)eu(r.getAttribute("data-shoelace"));else{const i=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let n="";i&&(n=i.getAttribute("src")),eu(n.split("/").slice(0,-1).join("/"))}}return Jc.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var yw={name:"default",resolver:e=>vw(`assets/icons/${e}.svg`)},bw=yw,fp={caret:`
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
  `},ww={name:"system",resolver:e=>e in fp?`data:image/svg+xml,${encodeURIComponent(fp[e])}`:""},_w=ww,xw=[bw,_w],tu=[];function kw(e){tu.push(e)}function Sw(e){tu=tu.filter(t=>t!==e)}function mp(e){return xw.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cw=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Og=e=>e.strings===void 0,$w={},Ew=(e,t=$w)=>e._$AH=t;var Hn=Symbol(),$o=Symbol(),Dl,Rl=new Map,ue=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let i;if(t!=null&&t.spriteSheet)return z`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Hn:$o}catch{return $o}try{const n=document.createElement("div");n.innerHTML=await i.text();const s=n.firstElementChild;if(((r=s==null?void 0:s.tagName)==null?void 0:r.toLowerCase())!=="svg")return Hn;Dl||(Dl=new DOMParser);const l=Dl.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Hn}catch{return Hn}}connectedCallback(){super.connectedCallback(),kw(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sw(this)}getIconSource(){const e=mp(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),i=r?mp(this.library):void 0;if(!t){this.svg=null;return}let n=Rl.get(t);if(n||(n=this.resolveIcon(t,i),Rl.set(t,n)),!this.initialRender)return;const s=await n;if(s===$o&&Rl.delete(t),t===this.getIconSource().url){if(Cw(s)){this.svg=s;return}switch(s){case $o:case Hn:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=gw;u([K()],ue.prototype,"svg",2);u([m({reflect:!0})],ue.prototype,"name",2);u([m()],ue.prototype,"src",2);u([m()],ue.prototype,"label",2);u([m({reflect:!0})],ue.prototype,"library",2);u([L("label")],ue.prototype,"handleLabelChange",1);u([L(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=e=>e??me;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=Ys(class extends Xs{constructor(e){if(super(e),e.type!==lr.PROPERTY&&e.type!==lr.ATTRIBUTE&&e.type!==lr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Og(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===St||t===me)return t;const r=e.element,i=e.name;if(e.type===lr.PROPERTY){if(t===r[i])return St}else if(e.type===lr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return St}else if(e.type===lr.ATTRIBUTE&&r.getAttribute(i)===t+"")return St;return Ew(e),t}});var Re=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return z`
      <label
        part="base"
        class=${G({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${F(this.value)}
          .indeterminate=${Li(this.indeterminate)}
          .checked=${Li(this.checked)}
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
          ${this.checked?z`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?z`
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
    `}};Re.styles=pw;Re.dependencies={"sl-icon":ue};u([I('input[type="checkbox"]')],Re.prototype,"input",2);u([K()],Re.prototype,"hasFocus",2);u([m()],Re.prototype,"title",2);u([m()],Re.prototype,"name",2);u([m()],Re.prototype,"value",2);u([m({reflect:!0})],Re.prototype,"size",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"checked",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"indeterminate",2);u([Ni("checked")],Re.prototype,"defaultChecked",2);u([m({reflect:!0})],Re.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"required",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Re.prototype,"handleDisabledChange",1);u([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Re.prototype,"handleStateChange",1);var Tw=U`
  ${W}

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
`,Qs=class extends R{constructor(){super(...arguments),this.localize=new ie(this)}render(){return z`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Qs.styles=Tw;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gp(e,t,r){return e?t(e):r==null?void 0:r(e)}var $e=class ru extends R{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Pe(this.childrenContainer);const{keyframes:t,options:r}=ge(this,"tree-item.collapse",{dir:this.localize.dir()});await Ce(this.childrenContainer,Ca(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&ru.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Pe(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=ge(this,"tree-item.expand",{dir:this.localize.dir()});await Ce(this.childrenContainer,Ca(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>ru.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return z`
      <div
        part="base"
        class="${G({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${G({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${gp(this.loading,()=>z` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${gp(this.selectable,()=>z`
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
                ?checked="${Li(this.selected)}"
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
    `}};$e.styles=hw;$e.dependencies={"sl-checkbox":Re,"sl-icon":ue,"sl-spinner":Qs};u([K()],$e.prototype,"indeterminate",2);u([K()],$e.prototype,"isLeaf",2);u([K()],$e.prototype,"loading",2);u([K()],$e.prototype,"selectable",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"expanded",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"selected",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"lazy",2);u([I("slot:not([name])")],$e.prototype,"defaultSlot",2);u([I("slot[name=children]")],$e.prototype,"childrenSlot",2);u([I(".tree-item__item")],$e.prototype,"itemElement",2);u([I(".tree-item__children")],$e.prototype,"childrenContainer",2);u([I(".tree-item__expand-button slot")],$e.prototype,"expandButtonSlot",2);u([L("loading",{waitUntilFirstUpdate:!0})],$e.prototype,"handleLoadingChange",1);u([L("disabled")],$e.prototype,"handleDisabledChange",1);u([L("selected")],$e.prototype,"handleSelectedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],$e.prototype,"handleExpandedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],$e.prototype,"handleExpandAnimation",1);u([L("lazy",{waitUntilFirstUpdate:!0})],$e.prototype,"handleLazyChange",1);var cn=$e;oe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});oe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var zw="sl-tree-item";cn.define("sl-tree-item");H({tagName:zw,elementClass:cn,react:j,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Aw=U`
  ${W}

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
`,it=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return z`
      <label
        part="base"
        class=${G({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${F(this.value)}
          .checked=${Li(this.checked)}
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
    `}};it.styles=Aw;u([I('input[type="checkbox"]')],it.prototype,"input",2);u([K()],it.prototype,"hasFocus",2);u([m()],it.prototype,"title",2);u([m()],it.prototype,"name",2);u([m()],it.prototype,"value",2);u([m({reflect:!0})],it.prototype,"size",2);u([m({type:Boolean,reflect:!0})],it.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],it.prototype,"checked",2);u([Ni("checked")],it.prototype,"defaultChecked",2);u([m({reflect:!0})],it.prototype,"form",2);u([m({type:Boolean,reflect:!0})],it.prototype,"required",2);u([L("checked",{waitUntilFirstUpdate:!0})],it.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);var Lw="sl-switch";it.define("sl-switch");H({tagName:Lw,elementClass:it,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var Pw=U`
  ${W}

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
`,Iw=U`
  ${W}

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
 */const Ng=Symbol.for(""),Ow=e=>{if((e==null?void 0:e.r)===Ng)return e==null?void 0:e._$litStatic$},$a=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:Ng}),vp=new Map,Nw=e=>(t,...r)=>{const i=r.length;let n,s;const o=[],l=[];let a,c=0,h=!1;for(;c<i;){for(a=t[c];c<i&&(s=r[c],(n=Ow(s))!==void 0);)a+=n+t[++c],h=!0;c!==i&&l.push(s),o.push(a),c++}if(c===i&&o.push(t[i]),h){const d=o.join("$$lit$$");(t=vp.get(d))===void 0&&(o.raw=o,vp.set(d,t=o)),r=l}return e(t,...r)},us=Nw(z);var Ie=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?$a`a`:$a`button`;return us`
      <${t}
        part="base"
        class=${G({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${F(e?void 0:this.disabled)}
        type=${F(e?void 0:"button")}
        href=${F(e?this.href:void 0)}
        target=${F(e?this.target:void 0)}
        download=${F(e?this.download:void 0)}
        rel=${F(e&&this.target?"noreferrer noopener":void 0)}
        role=${F(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${F(this.name)}
          library=${F(this.library)}
          src=${F(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ie.styles=Iw;Ie.dependencies={"sl-icon":ue};u([I(".icon-button")],Ie.prototype,"button",2);u([K()],Ie.prototype,"hasFocus",2);u([m()],Ie.prototype,"name",2);u([m()],Ie.prototype,"library",2);u([m()],Ie.prototype,"src",2);u([m()],Ie.prototype,"href",2);u([m()],Ie.prototype,"target",2);u([m()],Ie.prototype,"download",2);u([m()],Ie.prototype,"label",2);u([m({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);var Mw=0,er=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++Mw,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,z`
      <div
        part="base"
        class=${G({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?z`
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
    `}};er.styles=Pw;er.dependencies={"sl-icon-button":Ie};u([I(".tab")],er.prototype,"tab",2);u([m({reflect:!0})],er.prototype,"panel",2);u([m({type:Boolean,reflect:!0})],er.prototype,"active",2);u([m({type:Boolean})],er.prototype,"closable",2);u([m({type:Boolean,reflect:!0})],er.prototype,"disabled",2);u([L("active")],er.prototype,"handleActiveChange",1);u([L("disabled")],er.prototype,"handleDisabledChange",1);var Dw="sl-tab";er.define("sl-tab");H({tagName:Dw,elementClass:er,react:j,events:{onSlClose:"sl-close"},displayName:"SlTab"});var Rw=U`
  ${W}

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
`;function Fw(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var iu=new Set;function Bw(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ds(e){if(iu.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=Bw();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function hs(e){iu.delete(e),iu.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function nu(e,t,r="vertical",i="smooth"){const n=Fw(e,t),s=n.top+t.scrollTop,o=n.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(o<l?t.scrollTo({left:o,behavior:i}):o+e.clientWidth>a&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<c?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>h&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}var mt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var n;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const n=this.tabs.find(o=>o.matches(":focus")),s=this.localize.dir()==="rtl";if((n==null?void 0:n.tagName.toLowerCase())==="sl-tab"){let o=this.tabs.indexOf(n);e.key==="Home"?o=0:e.key==="End"?o=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?o--:(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&o++,o<0&&(o=this.tabs.length-1),o>this.tabs.length-1&&(o=0),this.tabs[o].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[o],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&nu(this.tabs[o],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=$r({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var n;return i.active=i.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&nu(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",n=this.getAllTabs(),o=n.slice(0,n.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return z`
      <div
        part="base"
        class=${G({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?z`
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

          ${this.hasScrollControls?z`
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
    `}};mt.styles=Rw;mt.dependencies={"sl-icon-button":Ie};u([I(".tab-group")],mt.prototype,"tabGroup",2);u([I(".tab-group__body")],mt.prototype,"body",2);u([I(".tab-group__nav")],mt.prototype,"nav",2);u([I(".tab-group__indicator")],mt.prototype,"indicator",2);u([K()],mt.prototype,"hasScrollControls",2);u([m()],mt.prototype,"placement",2);u([m()],mt.prototype,"activation",2);u([m({attribute:"no-scroll-controls",type:Boolean})],mt.prototype,"noScrollControls",2);u([L("noScrollControls",{waitUntilFirstUpdate:!0})],mt.prototype,"updateScrollControls",1);u([L("placement",{waitUntilFirstUpdate:!0})],mt.prototype,"syncIndicator",1);var Vw="sl-tab-group";mt.define("sl-tab-group");H({tagName:Vw,elementClass:mt,react:j,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var jw=U`
  ${W}

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
`,Hw=0,$n=class extends R{constructor(){super(...arguments),this.attrId=++Hw,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return z`
      <slot
        part="base"
        class=${G({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};$n.styles=jw;u([m({reflect:!0})],$n.prototype,"name",2);u([m({type:Boolean,reflect:!0})],$n.prototype,"active",2);u([L("active")],$n.prototype,"handleActiveChange",1);var Uw="sl-tab-panel";$n.define("sl-tab-panel");H({tagName:Uw,elementClass:$n,react:j,events:{},displayName:"SlTabPanel"});var Ww=U`
  ${W}

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
`,zr=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return z`
      <span
        part="base"
        class=${G({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?z`
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
    `}};zr.styles=Ww;zr.dependencies={"sl-icon-button":Ie};u([m({reflect:!0})],zr.prototype,"variant",2);u([m({reflect:!0})],zr.prototype,"size",2);u([m({type:Boolean,reflect:!0})],zr.prototype,"pill",2);u([m({type:Boolean})],zr.prototype,"removable",2);var Gw="sl-tag";zr.define("sl-tag");H({tagName:Gw,elementClass:zr,react:j,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var Zs=U`
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
`,Kw=U`
  ${W}
  ${Zs}

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
`,At=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function qw(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var re=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return z`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${G({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${F(this.name)}
              .value=${Li(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${F(this.placeholder)}
              rows=${F(this.rows)}
              minlength=${F(this.minlength)}
              maxlength=${F(this.maxlength)}
              autocapitalize=${F(this.autocapitalize)}
              autocorrect=${F(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${F(this.spellcheck)}
              enterkeyhint=${F(this.enterkeyhint)}
              inputmode=${F(this.inputmode)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=Kw;u([I(".textarea__control")],re.prototype,"input",2);u([K()],re.prototype,"hasFocus",2);u([m()],re.prototype,"title",2);u([m()],re.prototype,"name",2);u([m()],re.prototype,"value",2);u([m({reflect:!0})],re.prototype,"size",2);u([m({type:Boolean,reflect:!0})],re.prototype,"filled",2);u([m()],re.prototype,"label",2);u([m({attribute:"help-text"})],re.prototype,"helpText",2);u([m()],re.prototype,"placeholder",2);u([m({type:Number})],re.prototype,"rows",2);u([m()],re.prototype,"resize",2);u([m({type:Boolean,reflect:!0})],re.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],re.prototype,"readonly",2);u([m({reflect:!0})],re.prototype,"form",2);u([m({type:Boolean,reflect:!0})],re.prototype,"required",2);u([m({type:Number})],re.prototype,"minlength",2);u([m({type:Number})],re.prototype,"maxlength",2);u([m()],re.prototype,"autocapitalize",2);u([m()],re.prototype,"autocorrect",2);u([m()],re.prototype,"autocomplete",2);u([m({type:Boolean})],re.prototype,"autofocus",2);u([m()],re.prototype,"enterkeyhint",2);u([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],re.prototype,"spellcheck",2);u([m()],re.prototype,"inputmode",2);u([Ni()],re.prototype,"defaultValue",2);u([L("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);u([L("rows",{waitUntilFirstUpdate:!0})],re.prototype,"handleRowsChange",1);u([L("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1);var Yw="sl-textarea";re.define("sl-textarea");H({tagName:Yw,elementClass:re,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var Xw=U`
  ${W}

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
`,Qa=class extends R{render(){return z` <slot></slot> `}};Qa.styles=Xw;var Qw="sl-visually-hidden";Qa.define("sl-visually-hidden");H({tagName:Qw,elementClass:Qa,react:j,events:{},displayName:"SlVisuallyHidden"});var Zw=U`
  ${W}

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
`;function Ae(e,t,r){const i=n=>Object.is(n,-0)?0:n;return e<t?i(t):e>r?i(r):i(e)}function yp(e,t=!1){function r(s){const o=s.getChildrenItems({includeDisabled:!1});if(o.length){const l=o.every(c=>c.selected),a=o.every(c=>!c.selected&&!c.indeterminate);s.selected=l,s.indeterminate=!l&&!a}}function i(s){const o=s.parentElement;cn.isTreeItem(o)&&(r(o),i(o))}function n(s){for(const o of s.getChildrenItems())o.selected=t?s.selected||o.selected:!o.disabled&&s.selected,n(o);t&&r(s)}n(e),i(e)}var oi=class extends R{constructor(){super(),this.selection="single",this.localize=new ie(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(cn.isTreeItem),i=[...t.removedNodes].filter(cn.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),cn.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),yp(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const n of i)n.selected=n===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(n=>{var s;return["input","textarea"].includes((s=n==null?void 0:n.tagName)==null?void 0:s.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const n=t.findIndex(a=>a.matches(":focus")),s=t[n],o=a=>{const c=t[Ae(a,0,t.length-1)];this.focusItem(c)},l=a=>{s.expanded=a};e.key==="ArrowDown"?o(n+1):e.key==="ArrowUp"?o(n-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?o(n+1):l(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?o(n-1):l(!1):e.key==="Home"?o(0):e.key==="End"?o(t.length-1):(e.key==="Enter"||e.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(n=>{var s;return(s=n==null?void 0:n.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>yp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const n=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return n&&(!n.expanded||n.loading||t.has(n))&&t.add(r),!t.has(r)})}render(){return z`
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
    `}};oi.styles=Zw;u([I("slot:not([name])")],oi.prototype,"defaultSlot",2);u([I("slot[name=expand-icon]")],oi.prototype,"expandedIconSlot",2);u([I("slot[name=collapse-icon]")],oi.prototype,"collapsedIconSlot",2);u([m()],oi.prototype,"selection",2);u([L("selection")],oi.prototype,"handleSelectionChange",1);var Jw="sl-tree";oi.define("sl-tree");H({tagName:Jw,elementClass:oi,react:j,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var e_=U`
  ${W}

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
 */const Mg="important",t_=" !"+Mg,ct=Ys(class extends Xs{constructor(e){var t;if(super(e),e.type!==lr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ut.add(i);const s=typeof n=="string"&&n.endsWith(t_);i.includes("-")||s?r.setProperty(i,s?n.slice(0,-11):n,s?Mg:""):r[i]=n}}return St}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let su=class extends Xs{constructor(t){if(super(t),this.et=me,t.type!==lr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this.vt=void 0,this.et=t;if(t===St)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}};su.directiveName="unsafeHTML",su.resultType=1;const Yo=Ys(su);var Xe=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:n}=this.rating.getBoundingClientRect(),s=t?this.roundToPrecision((i-e)/n*this.max,this.precision):this.roundToPrecision((e-r)/n*this.max,this.precision);return Ae(s,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const n=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const n=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,z`
      <div
        part="base"
        class=${G({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
          ${t.map(i=>r>i&&r<i+1?z`
                <span
                  class=${G({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ct({clipPath:e?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${Yo(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ct({clipPath:e?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${Yo(this.getSymbol(i+1))}
                  </div>
                </span>
              `:z`
              <span
                class=${G({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Yo(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Xe.styles=e_;Xe.dependencies={"sl-icon":ue};u([I(".rating")],Xe.prototype,"rating",2);u([K()],Xe.prototype,"hoverValue",2);u([K()],Xe.prototype,"isHovering",2);u([m()],Xe.prototype,"label",2);u([m({type:Number})],Xe.prototype,"value",2);u([m({type:Number})],Xe.prototype,"max",2);u([m({type:Number})],Xe.prototype,"precision",2);u([m({type:Boolean,reflect:!0})],Xe.prototype,"readonly",2);u([m({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);u([m()],Xe.prototype,"getSymbol",2);u([yg({passive:!0})],Xe.prototype,"handleTouchMove",1);u([L("hoverValue")],Xe.prototype,"handleHoverValueChange",1);u([L("isHovering")],Xe.prototype,"handleIsHoveringChange",1);var r_="sl-rating";Xe.define("sl-rating");var i_=H({tagName:r_,elementClass:Xe,react:j,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"}),n_=i_,s_=U`
  ${W}
  ${Zs}

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
`,ve=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",s=t*e;if(n){const o=`${t-s}px + ${e} * ${i}`;this.output.style.translate=`calc((${o} - ${r/2}px - ${i} / 2))`}else{const o=`${s}px - ${e} * ${i}`;this.output.style.translate=`calc(${o} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return z`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${G({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${F(this.name)}
              ?disabled=${this.disabled}
              min=${F(this.min)}
              max=${F(this.max)}
              step=${F(this.step)}
              .value=${Li(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?z`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ve.styles=s_;u([I(".range__control")],ve.prototype,"input",2);u([I(".range__tooltip")],ve.prototype,"output",2);u([K()],ve.prototype,"hasFocus",2);u([K()],ve.prototype,"hasTooltip",2);u([m()],ve.prototype,"title",2);u([m()],ve.prototype,"name",2);u([m({type:Number})],ve.prototype,"value",2);u([m()],ve.prototype,"label",2);u([m({attribute:"help-text"})],ve.prototype,"helpText",2);u([m({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);u([m({type:Number})],ve.prototype,"min",2);u([m({type:Number})],ve.prototype,"max",2);u([m({type:Number})],ve.prototype,"step",2);u([m()],ve.prototype,"tooltip",2);u([m({attribute:!1})],ve.prototype,"tooltipFormatter",2);u([m({reflect:!0})],ve.prototype,"form",2);u([Ni()],ve.prototype,"defaultValue",2);u([yg({passive:!0})],ve.prototype,"handleThumbDragStart",1);u([L("value",{waitUntilFirstUpdate:!0})],ve.prototype,"handleValueChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],ve.prototype,"handleDisabledChange",1);u([L("hasTooltip",{waitUntilFirstUpdate:!0})],ve.prototype,"syncRange",1);var o_="sl-range";ve.define("sl-range");H({tagName:o_,elementClass:ve,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var a_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ar=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:n}=a_.find(s=>Math.abs(r)<s.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/n),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=Eo("second"):i==="hour"?s=Eo("minute"):i==="day"?s=Eo("hour"):s=Eo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return z` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};u([K()],Ar.prototype,"isoTime",2);u([K()],Ar.prototype,"relativeTime",2);u([K()],Ar.prototype,"titleTime",2);u([m()],Ar.prototype,"date",2);u([m()],Ar.prototype,"format",2);u([m()],Ar.prototype,"numeric",2);u([m({type:Boolean})],Ar.prototype,"sync",2);function Eo(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var l_="sl-relative-time";Ar.define("sl-relative-time");H({tagName:l_,elementClass:Ar,react:j,events:{},displayName:"SlRelativeTime"});var c_=U`
  ${W}

  :host {
    display: contents;
  }
`,Js=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return z` <slot @slotchange=${this.handleSlotChange}></slot> `}};Js.styles=c_;u([m({type:Boolean,reflect:!0})],Js.prototype,"disabled",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Js.prototype,"handleDisabledChange",1);var u_="sl-resize-observer";Js.define("sl-resize-observer");H({tagName:u_,elementClass:Js,react:j,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var d_=U`
  ${W}
  ${Zs}

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
`,Z=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>z`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(r||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const n=this.getAllOptions(),s=n.indexOf(this.currentOption);let o=Math.max(0,s);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(o=s+1,o>n.length-1&&(o=0)):e.key==="ArrowUp"?(o=s-1,o<0&&(o=n.length-1)):e.key==="Home"?o=0:e.key==="End"&&(o=n.length-1),this.setCurrentOption(n[o])}if(e.key.length===1||e.key==="Backspace"){const n=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const s of n)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,i;this.selectedOptions=this.getAllOptions().filter(n=>n.selected),this.multiple?(this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return z`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof r=="string"?Yo(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return z`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return z``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=ge(this,"select.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.currentOption&&nu(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);const{keyframes:e,options:t}=ge(this,"select.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ot(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ot(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return z`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${G({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?z`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${n?z`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=d_;Z.dependencies={"sl-icon":ue,"sl-popup":se,"sl-tag":zr};u([I(".select")],Z.prototype,"popup",2);u([I(".select__combobox")],Z.prototype,"combobox",2);u([I(".select__display-input")],Z.prototype,"displayInput",2);u([I(".select__value-input")],Z.prototype,"valueInput",2);u([I(".select__listbox")],Z.prototype,"listbox",2);u([K()],Z.prototype,"hasFocus",2);u([K()],Z.prototype,"displayLabel",2);u([K()],Z.prototype,"currentOption",2);u([K()],Z.prototype,"selectedOptions",2);u([m()],Z.prototype,"name",2);u([m({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Z.prototype,"value",2);u([Ni()],Z.prototype,"defaultValue",2);u([m({reflect:!0})],Z.prototype,"size",2);u([m()],Z.prototype,"placeholder",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);u([m({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);u([m({type:Boolean})],Z.prototype,"clearable",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"open",2);u([m({type:Boolean})],Z.prototype,"hoist",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"filled",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"pill",2);u([m()],Z.prototype,"label",2);u([m({reflect:!0})],Z.prototype,"placement",2);u([m({attribute:"help-text"})],Z.prototype,"helpText",2);u([m({reflect:!0})],Z.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"required",2);u([m()],Z.prototype,"getTag",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);u([L("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);u([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);oe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var h_="sl-select";Z.define("sl-select");H({tagName:h_,elementClass:Z,react:j,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var p_=U`
  ${W}

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
`,Za=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return z`
      <div
        part="base"
        class=${G({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Za.styles=p_;u([m()],Za.prototype,"effect",2);var f_="sl-skeleton";Za.define("sl-skeleton");H({tagName:f_,elementClass:Za,react:j,events:{},displayName:"SlSkeleton"});var m_="sl-spinner";Qs.define("sl-spinner");H({tagName:m_,elementClass:Qs,react:j,events:{},displayName:"SlSpinner"});var g_=U`
  ${W}

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
`;function ps(e,t){function r(n){const s=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,l=s.left+o.scrollX,a=s.top+o.scrollY,c=n.pageX-l,h=n.pageY-a;t!=null&&t.onMove&&t.onMove(c,h)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var gt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),ps(this,{onMove:(r,i)=>{let n=this.vertical?i:r;this.primary==="end"&&(n=this.size-n),this.snap&&this.snap.split(" ").forEach(o=>{let l;o.endsWith("%")?l=this.size*(parseFloat(o)/100):l=parseFloat(o),t&&!this.vertical&&(l=this.size-l),n>=l-this.snapThreshold&&n<=l+this.snapThreshold&&(n=l)}),this.position=Ae(this.pixelsToPercentage(n),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ae(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,n="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${i}`:r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${n}`,this.style[t]="",z`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${F(this.disabled?void 0:"0")}
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
    `}};gt.styles=g_;u([I(".divider")],gt.prototype,"divider",2);u([m({type:Number,reflect:!0})],gt.prototype,"position",2);u([m({attribute:"position-in-pixels",type:Number})],gt.prototype,"positionInPixels",2);u([m({type:Boolean,reflect:!0})],gt.prototype,"vertical",2);u([m({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);u([m()],gt.prototype,"primary",2);u([m()],gt.prototype,"snap",2);u([m({type:Number,attribute:"snap-threshold"})],gt.prototype,"snapThreshold",2);u([L("position")],gt.prototype,"handlePositionChange",1);u([L("positionInPixels")],gt.prototype,"handlePositionInPixelsChange",1);u([L("vertical")],gt.prototype,"handleVerticalChange",1);var v_="sl-split-panel";gt.define("sl-split-panel");H({tagName:v_,elementClass:gt,react:j,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var y_=U`
  ${W}

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
`,Lt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return z`
      <div
        part="base"
        class=${G({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Lt.styles=y_;Lt.dependencies={"sl-icon":ue};u([I(".option__label")],Lt.prototype,"defaultSlot",2);u([K()],Lt.prototype,"current",2);u([K()],Lt.prototype,"selected",2);u([K()],Lt.prototype,"hasHover",2);u([m({reflect:!0})],Lt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);u([L("disabled")],Lt.prototype,"handleDisabledChange",1);u([L("selected")],Lt.prototype,"handleSelectedChange",1);u([L("value")],Lt.prototype,"handleValueChange",1);var b_="sl-option";Lt.define("sl-option");H({tagName:b_,elementClass:Lt,react:j,events:{},displayName:"SlOption"});var w_="sl-popup";se.define("sl-popup");H({tagName:w_,elementClass:se,react:j,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var __=U`
  ${W}

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
`,En=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return z`
      <div
        part="base"
        class=${G({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${F(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ct({width:`${this.value}%`})}>
          ${this.indeterminate?"":z` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};En.styles=__;u([m({type:Number,reflect:!0})],En.prototype,"value",2);u([m({type:Boolean,reflect:!0})],En.prototype,"indeterminate",2);u([m()],En.prototype,"label",2);var x_="sl-progress-bar";En.define("sl-progress-bar");H({tagName:x_,elementClass:En,react:j,events:{},displayName:"SlProgressBar"});var k_=U`
  ${W}

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
`,tr=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return z`
      <span
        part="base"
        class=${G({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?z` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};tr.styles=k_;tr.dependencies={"sl-icon":ue};u([K()],tr.prototype,"checked",2);u([K()],tr.prototype,"hasFocus",2);u([m()],tr.prototype,"value",2);u([m({reflect:!0})],tr.prototype,"size",2);u([m({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);u([L("checked")],tr.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],tr.prototype,"handleDisabledChange",1);var S_="sl-radio";tr.define("sl-radio");H({tagName:S_,elementClass:tr,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var C_=U`
  ${W}

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
`,Mi=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return z`
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
    `}};Mi.styles=C_;u([I(".progress-ring__indicator")],Mi.prototype,"indicator",2);u([K()],Mi.prototype,"indicatorOffset",2);u([m({type:Number,reflect:!0})],Mi.prototype,"value",2);u([m()],Mi.prototype,"label",2);var $_="sl-progress-ring";Mi.define("sl-progress-ring");H({tagName:$_,elementClass:Mi,react:j,events:{},displayName:"SlProgressRing"});var E_=U`
  ${W}

  :host {
    display: inline-block;
  }
`;let Dg=null;class Rg{}Rg.render=function(e,t){Dg(e,t)};self.QrCreator=Rg;(function(e){function t(l,a,c,h){var d={},p=e(c,a);p.u(l),p.J(),h=h||0;var g=p.h(),y=p.h()+2*h;return d.text=l,d.level=a,d.version=c,d.O=y,d.a=function(w,k){return w-=h,k-=h,0>w||w>=g||0>k||k>=g?!1:p.a(w,k)},d}function r(l,a,c,h,d,p,g,y,w,k){function v(f,b,_,x,S,E,$){f?(l.lineTo(b+E,_+$),l.arcTo(b,_,x,S,p)):l.lineTo(b,_)}g?l.moveTo(a+p,c):l.moveTo(a,c),v(y,h,c,h,d,-p,0),v(w,h,d,a,d,0,-p),v(k,a,d,a,c,p,0),v(g,a,c,h,c,0,p)}function i(l,a,c,h,d,p,g,y,w,k){function v(f,b,_,x){l.moveTo(f+_,b),l.lineTo(f,b),l.lineTo(f,b+x),l.arcTo(f,b,f+_,b,p)}g&&v(a,c,p,p),y&&v(h,c,-p,p),w&&v(h,d,-p,-p),k&&v(a,d,p,-p)}function n(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var h=c.type,d=c.colorStops;if(c=c.position.map(g=>Math.round(g*a.size)),h==="linear-gradient")var p=l.createLinearGradient.apply(l,c);else if(h==="radial-gradient")p=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");d.forEach(([g,y])=>{p.addColorStop(g,y)}),l.fillStyle=p}}function s(l,a){e:{var c=a.text,h=a.v,d=a.N,p=a.K,g=a.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var y=t(c,h,d,g);break e}catch{}y=void 0}if(!y)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),h=y.O,p=a.size/h,c.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var w=c,k=a.left+d*p,v=a.top+g*p,f=g,b=d,_=y.a,x=k+p,S=v+p,E=f-1,$=f+1,P=b-1,C=b+1,N=Math.floor(Math.min(.5,Math.max(0,a.R))*p),D=_(f,b),te=_(E,P),le=_(E,b);E=_(E,C);var ye=_(f,C);C=_($,C),b=_($,b),$=_($,P),f=_(f,P),k=Math.round(k),v=Math.round(v),x=Math.round(x),S=Math.round(S),D?r(w,k,v,x,S,N,!le&&!f,!le&&!ye,!b&&!ye,!b&&!f):i(w,k,v,x,S,N,le&&f&&te,le&&ye&&E,b&&ye&&C,b&&f&&$)}return n(c,a),c.fill(),l}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Dg=function(l,a){var c={};Object.assign(c,o,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),s(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=s(l,c),a.appendChild(c))}})(function(){function e(a){var c=r.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var d=0;d<c.length;d+=1)h.put(c[d],8)}}}function t(){var a=[],c=0,h={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);a.length<=p&&a.push(0),d&&(a[p]|=128>>>c%8),c+=1}};return h}function r(a,c){function h(f,b){for(var _=-1;7>=_;_+=1)if(!(-1>=f+_||y<=f+_))for(var x=-1;7>=x;x+=1)-1>=b+x||y<=b+x||(g[f+_][b+x]=0<=_&&6>=_&&(x==0||x==6)||0<=x&&6>=x&&(_==0||_==6)||2<=_&&4>=_&&2<=x&&4>=x)}function d(f,b){for(var _=y=4*a+17,x=Array(_),S=0;S<_;S+=1){x[S]=Array(_);for(var E=0;E<_;E+=1)x[S][E]=null}for(g=x,h(0,0),h(y-7,0),h(0,y-7),_=s.G(a),x=0;x<_.length;x+=1)for(S=0;S<_.length;S+=1){E=_[x];var $=_[S];if(g[E][$]==null)for(var P=-2;2>=P;P+=1)for(var C=-2;2>=C;C+=1)g[E+P][$+C]=P==-2||P==2||C==-2||C==2||P==0&&C==0}for(_=8;_<y-8;_+=1)g[_][6]==null&&(g[_][6]=_%2==0);for(_=8;_<y-8;_+=1)g[6][_]==null&&(g[6][_]=_%2==0);for(_=s.w(p<<3|b),x=0;15>x;x+=1)S=!f&&(_>>x&1)==1,g[6>x?x:8>x?x+1:y-15+x][8]=S,g[8][8>x?y-x-1:9>x?15-x:14-x]=S;if(g[y-8][8]=!f,7<=a){for(_=s.A(a),x=0;18>x;x+=1)S=!f&&(_>>x&1)==1,g[Math.floor(x/3)][x%3+y-8-3]=S;for(x=0;18>x;x+=1)S=!f&&(_>>x&1)==1,g[x%3+y-8-3][Math.floor(x/3)]=S}if(w==null){for(f=l.I(a,p),_=t(),x=0;x<k.length;x+=1)S=k[x],_.put(4,4),_.put(S.b(),s.f(4,a)),S.write(_);for(x=S=0;x<f.length;x+=1)S+=f[x].j;if(_.f()>8*S)throw Error("code length overflow. ("+_.f()+">"+8*S+")");for(_.f()+4<=8*S&&_.put(0,4);_.f()%8!=0;)_.m(!1);for(;!(_.f()>=8*S)&&(_.put(236,8),!(_.f()>=8*S));)_.put(17,8);var N=0;for(S=x=0,E=Array(f.length),$=Array(f.length),P=0;P<f.length;P+=1){var D=f[P].j,te=f[P].o-D;for(x=Math.max(x,D),S=Math.max(S,te),E[P]=Array(D),C=0;C<E[P].length;C+=1)E[P][C]=255&_.B()[C+N];for(N+=D,C=s.C(te),D=i(E[P],C.b()-1).l(C),$[P]=Array(C.b()-1),C=0;C<$[P].length;C+=1)te=C+D.b()-$[P].length,$[P][C]=0<=te?D.c(te):0}for(C=_=0;C<f.length;C+=1)_+=f[C].o;for(_=Array(_),C=N=0;C<x;C+=1)for(P=0;P<f.length;P+=1)C<E[P].length&&(_[N]=E[P][C],N+=1);for(C=0;C<S;C+=1)for(P=0;P<f.length;P+=1)C<$[P].length&&(_[N]=$[P][C],N+=1);w=_}for(f=w,_=-1,x=y-1,S=7,E=0,b=s.F(b),$=y-1;0<$;$-=2)for($==6&&--$;;){for(P=0;2>P;P+=1)g[x][$-P]==null&&(C=!1,E<f.length&&(C=(f[E]>>>S&1)==1),b(x,$-P)&&(C=!C),g[x][$-P]=C,--S,S==-1&&(E+=1,S=7));if(x+=_,0>x||y<=x){x-=_,_=-_;break}}}var p=n[c],g=null,y=0,w=null,k=[],v={u:function(f){f=e(f),k.push(f),w=null},a:function(f,b){if(0>f||y<=f||0>b||y<=b)throw Error(f+","+b);return g[f][b]},h:function(){return y},J:function(){for(var f=0,b=0,_=0;8>_;_+=1){d(!0,_);var x=s.D(v);(_==0||f>x)&&(f=x,b=_)}d(!1,b)}};return v}function i(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var h=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var g=Array(a.length-p+c),y=0;y<a.length-p;y+=1)g[y]=a[y+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),y=0;y<d.b();y+=1)for(var w=0;w<p.b();w+=1)g[y+w]^=o.i(o.g(d.c(y))+o.g(p.c(w)));return i(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=o.g(d.c(0))-o.g(p.c(0)),y=Array(d.b()),w=0;w<d.b();w+=1)y[w]=d.c(w);for(w=0;w<p.b();w+=1)y[w]^=o.i(o.g(p.c(w))+g);return i(y,0).l(p)}};return d}r.s=function(a){for(var c=[],h=0;h<a.length;h++){var d=a.charCodeAt(h);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|a.charCodeAt(h)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var n={L:1,M:0,Q:3,H:2},s=function(){function a(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=i([1],0),g=0;g<d;g+=1)p=p.multiply(i([1,o.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,y=0;y<p;y+=1)for(var w=0;w<p;w+=1){for(var k=0,v=d.a(y,w),f=-1;1>=f;f+=1)if(!(0>y+f||p<=y+f))for(var b=-1;1>=b;b+=1)0>w+b||p<=w+b||(f!=0||b!=0)&&v==d.a(y+f,w+b)&&(k+=1);5<k&&(g+=3+k-5)}for(y=0;y<p-1;y+=1)for(w=0;w<p-1;w+=1)k=0,d.a(y,w)&&(k+=1),d.a(y+1,w)&&(k+=1),d.a(y,w+1)&&(k+=1),d.a(y+1,w+1)&&(k+=1),(k==0||k==4)&&(g+=3);for(y=0;y<p;y+=1)for(w=0;w<p-6;w+=1)d.a(y,w)&&!d.a(y,w+1)&&d.a(y,w+2)&&d.a(y,w+3)&&d.a(y,w+4)&&!d.a(y,w+5)&&d.a(y,w+6)&&(g+=40);for(w=0;w<p;w+=1)for(y=0;y<p-6;y+=1)d.a(y,w)&&!d.a(y+1,w)&&d.a(y+2,w)&&d.a(y+3,w)&&d.a(y+4,w)&&!d.a(y+5,w)&&d.a(y+6,w)&&(g+=40);for(w=k=0;w<p;w+=1)for(y=0;y<p;y+=1)d.a(y,w)&&(k+=1);return g+=Math.abs(100*k/p/p-50)/5*10}};return h}(),o=function(){for(var a=Array(256),c=Array(256),h=0;8>h;h+=1)a[h]=1<<h;for(h=8;256>h;h+=1)a[h]=a[h-4]^a[h-5]^a[h-6]^a[h-8];for(h=0;255>h;h+=1)c[a[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,p){switch(p){case n.L:return c[4*(d-1)];case n.M:return c[4*(d-1)+1];case n.Q:return c[4*(d-1)+2];case n.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=a(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var y=0;y<d;y+=1)for(var w=g[3*y],k=g[3*y+1],v=g[3*y+2],f=0;f<w;f+=1){var b=v,_={};_.o=k,_.j=b,p.push(_)}return p}};return h}();return r}());const T_=QrCreator;var Vt=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&T_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return z`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ct({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Vt.styles=E_;u([I("canvas")],Vt.prototype,"canvas",2);u([m()],Vt.prototype,"value",2);u([m()],Vt.prototype,"label",2);u([m({type:Number})],Vt.prototype,"size",2);u([m()],Vt.prototype,"fill",2);u([m()],Vt.prototype,"background",2);u([m({type:Number})],Vt.prototype,"radius",2);u([m({attribute:"error-correction"})],Vt.prototype,"errorCorrection",2);u([L(["background","errorCorrection","fill","radius","size","value"])],Vt.prototype,"generate",1);var z_="sl-qr-code";Vt.define("sl-qr-code");H({tagName:z_,elementClass:Vt,react:j,events:{},displayName:"SlQrCode"});var Fg=U`
  ${W}

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
`,A_=U`
  ${Fg}

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
`,jt=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return us`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${G({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${F(this.value)}
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
    `}};jt.styles=A_;u([I(".button")],jt.prototype,"input",2);u([I(".hidden-input")],jt.prototype,"hiddenInput",2);u([K()],jt.prototype,"hasFocus",2);u([m({type:Boolean,reflect:!0})],jt.prototype,"checked",2);u([m()],jt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);u([m({reflect:!0})],jt.prototype,"size",2);u([m({type:Boolean,reflect:!0})],jt.prototype,"pill",2);u([L("disabled",{waitUntilFirstUpdate:!0})],jt.prototype,"handleDisabledChange",1);var L_="sl-radio-button";jt.define("sl-radio-button");H({tagName:L_,elementClass:jt,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var P_=U`
  ${W}
  ${Zs}

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
`,I_=U`
  ${W}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ai=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Un(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Un(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Un(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Un(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=Un(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return z`
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
    `}};ai.styles=I_;u([I("slot")],ai.prototype,"defaultSlot",2);u([K()],ai.prototype,"disableRole",2);u([m()],ai.prototype,"label",2);function Un(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var He=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this),this.hasSlotController=new At(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?mw:e?fw:Xa}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(n=>n.checked=n===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),i=(t=r.find(l=>l.checked))!=null?t:r[0],n=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,s=this.value;let o=r.indexOf(i)+n;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[o].value,r[o].checked=!0,this.hasButtonGroup?r[o].shadowRoot.querySelector("button").focus():(r[o].tabIndex=0,r[o].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=z`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return z`
      <fieldset
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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

          ${this.hasButtonGroup?z`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${n}
                </sl-button-group>
              `:n}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};He.styles=P_;He.dependencies={"sl-button-group":ai};u([I("slot:not([name])")],He.prototype,"defaultSlot",2);u([I(".radio-group__validation-input")],He.prototype,"validationInput",2);u([K()],He.prototype,"hasButtonGroup",2);u([K()],He.prototype,"errorMessage",2);u([K()],He.prototype,"defaultValue",2);u([m()],He.prototype,"label",2);u([m({attribute:"help-text"})],He.prototype,"helpText",2);u([m()],He.prototype,"name",2);u([m({reflect:!0})],He.prototype,"value",2);u([m({reflect:!0})],He.prototype,"size",2);u([m({reflect:!0})],He.prototype,"form",2);u([m({type:Boolean,reflect:!0})],He.prototype,"required",2);u([L("size",{waitUntilFirstUpdate:!0})],He.prototype,"handleSizeChange",1);u([L("value")],He.prototype,"handleValueChange",1);var O_="sl-radio-group";He.define("sl-radio-group");H({tagName:O_,elementClass:He,react:j,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var N_="sl-icon-button";Ie.define("sl-icon-button");H({tagName:N_,elementClass:Ie,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var M_=U`
  ${W}

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
`,li=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),ps(this.base,{onMove:i=>{this.position=parseFloat(Ae(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let n=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(n-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(n+=i),e.key==="Home"&&(n=0),e.key==="End"&&(n=100),n=Ae(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return z`
      <div
        part="base"
        id="image-comparer"
        class=${G({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ct({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ct({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};li.styles=M_;li.scopedElement={"sl-icon":ue};u([I(".image-comparer")],li.prototype,"base",2);u([I(".image-comparer__handle")],li.prototype,"handle",2);u([m({type:Number,reflect:!0})],li.prototype,"position",2);u([L("position",{waitUntilFirstUpdate:!0})],li.prototype,"handlePositionChange",1);var D_="sl-image-comparer";li.define("sl-image-comparer");H({tagName:D_,elementClass:li,react:j,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var R_=U`
  ${W}

  :host {
    display: block;
  }
`,Fl=new Map;function F_(e,t="cors"){const r=Fl.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async n=>{const s={ok:n.ok,status:n.status,html:await n.text()};return Fl.set(e,s),s});return Fl.set(e,i),i}var Di=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await F_(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return z`<slot></slot>`}};Di.styles=R_;u([m()],Di.prototype,"src",2);u([m()],Di.prototype,"mode",2);u([m({attribute:"allow-scripts",type:Boolean})],Di.prototype,"allowScripts",2);u([L("src")],Di.prototype,"handleSrcChange",1);var B_="sl-include";Di.define("sl-include");H({tagName:B_,elementClass:Di,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var V_=U`
  ${W}
  ${Zs}

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
`,X=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly,s=n&&(typeof this.value=="number"||this.value.length>0);return z`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${G({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${F(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${F(this.placeholder)}
              minlength=${F(this.minlength)}
              maxlength=${F(this.maxlength)}
              min=${F(this.min)}
              max=${F(this.max)}
              step=${F(this.step)}
              .value=${Li(this.value)}
              autocapitalize=${F(this.autocapitalize)}
              autocomplete=${F(this.autocomplete)}
              autocorrect=${F(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${F(this.pattern)}
              enterkeyhint=${F(this.enterkeyhint)}
              inputmode=${F(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?z`
                  <button
                    part="clear-button"
                    class=${G({input__clear:!0,"input__clear--visible":s})}
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
            ${this.passwordToggle&&!this.disabled?z`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?z`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:z`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=V_;X.dependencies={"sl-icon":ue};u([I(".input__control")],X.prototype,"input",2);u([K()],X.prototype,"hasFocus",2);u([m()],X.prototype,"title",2);u([m({reflect:!0})],X.prototype,"type",2);u([m()],X.prototype,"name",2);u([m()],X.prototype,"value",2);u([Ni()],X.prototype,"defaultValue",2);u([m({reflect:!0})],X.prototype,"size",2);u([m({type:Boolean,reflect:!0})],X.prototype,"filled",2);u([m({type:Boolean,reflect:!0})],X.prototype,"pill",2);u([m()],X.prototype,"label",2);u([m({attribute:"help-text"})],X.prototype,"helpText",2);u([m({type:Boolean})],X.prototype,"clearable",2);u([m({type:Boolean,reflect:!0})],X.prototype,"disabled",2);u([m()],X.prototype,"placeholder",2);u([m({type:Boolean,reflect:!0})],X.prototype,"readonly",2);u([m({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);u([m({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);u([m({attribute:"no-spin-buttons",type:Boolean})],X.prototype,"noSpinButtons",2);u([m({reflect:!0})],X.prototype,"form",2);u([m({type:Boolean,reflect:!0})],X.prototype,"required",2);u([m()],X.prototype,"pattern",2);u([m({type:Number})],X.prototype,"minlength",2);u([m({type:Number})],X.prototype,"maxlength",2);u([m()],X.prototype,"min",2);u([m()],X.prototype,"max",2);u([m()],X.prototype,"step",2);u([m()],X.prototype,"autocapitalize",2);u([m()],X.prototype,"autocorrect",2);u([m()],X.prototype,"autocomplete",2);u([m({type:Boolean})],X.prototype,"autofocus",2);u([m()],X.prototype,"enterkeyhint",2);u([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);u([m()],X.prototype,"inputmode",2);u([L("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);u([L("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);u([L("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);var j_="sl-input";X.define("sl-input");H({tagName:j_,elementClass:X,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var H_=U`
  ${W}

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
 */const fs=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,t,!1),fs(n,t);return!0},Ea=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},Bg=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),G_(t)}};function U_(e){this._$AN!==void 0?(Ea(this),this._$AM=e,Bg(this)):this._$AM=e}function W_(e,t=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)fs(i[s],!1),Ea(i[s]);else i!=null&&(fs(i,!1),Ea(i));else fs(this,e)}const G_=e=>{e.type==lr.CHILD&&(e._$AP??(e._$AP=W_),e._$AQ??(e._$AQ=U_))};class K_ extends Xs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),Bg(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(fs(this,t),Ea(this))}setValue(t){if(Og(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q_=()=>new Y_;class Y_{}const Bl=new WeakMap,X_=Ys(class extends K_{render(e){return me}update(e,[t]){var i;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=(i=e.options)==null?void 0:i.host,this.ot(this.lt=e.element)),me}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let r=Bl.get(t);r===void 0&&(r=new WeakMap,Bl.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=Bl.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Q_=class{constructor(e,t,r){this.popupRef=q_(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var n;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(n=i.target.role)!=null&&n.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),n=i==null?void 0:i.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],s=this.localize.dir()==="rtl";if(!n)return;const{left:o,top:l,width:a,height:c}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const i of t.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,s)=>{var o;const l=(o=t.get(s))!=null?o:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return n-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?z`
      <sl-popup
        ${X_(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:z` <slot name="submenu" hidden></slot> `}},Pt=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ie(this),this.hasSlotController=new At(this,"submenu"),this.submenuController=new Q_(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return qw(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return z`
      <div
        id="anchor"
        part="base"
        class=${G({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};Pt.styles=H_;Pt.dependencies={"sl-icon":ue,"sl-popup":se};u([I("slot:not([name])")],Pt.prototype,"defaultSlot",2);u([I(".menu-item")],Pt.prototype,"menuItem",2);u([m()],Pt.prototype,"type",2);u([m({type:Boolean,reflect:!0})],Pt.prototype,"checked",2);u([m()],Pt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);u([L("checked")],Pt.prototype,"handleCheckedChange",1);u([L("disabled")],Pt.prototype,"handleDisabledChange",1);u([L("type")],Pt.prototype,"handleTypeChange",1);var Z_="sl-menu-item";Pt.define("sl-menu-item");H({tagName:Z_,elementClass:Pt,react:j,events:{},displayName:"SlMenuItem"});var J_=U`
  ${W}

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
`,Ja=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(n=>{var s;return t.includes(((s=n==null?void 0:n.getAttribute)==null?void 0:s.call(n,"role"))||"")});if(!r)return;const i=r;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return z`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ja.styles=J_;u([I("slot")],Ja.prototype,"defaultSlot",2);var ex="sl-menu";Ja.define("sl-menu");H({tagName:ex,elementClass:Ja,react:j,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var tx=U`
  ${W}

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
`,_d=class extends R{render(){return z` <slot part="base" class="menu-label"></slot> `}};_d.styles=tx;var rx="sl-menu-label";_d.define("sl-menu-label");H({tagName:rx,elementClass:_d,react:j,events:{},displayName:"SlMenuLabel"});var ix=U`
  ${W}

  :host {
    display: contents;
  }
`,rr=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return z` <slot></slot> `}};rr.styles=ix;u([m({reflect:!0})],rr.prototype,"attr",2);u([m({attribute:"attr-old-value",type:Boolean,reflect:!0})],rr.prototype,"attrOldValue",2);u([m({attribute:"char-data",type:Boolean,reflect:!0})],rr.prototype,"charData",2);u([m({attribute:"char-data-old-value",type:Boolean,reflect:!0})],rr.prototype,"charDataOldValue",2);u([m({attribute:"child-list",type:Boolean,reflect:!0})],rr.prototype,"childList",2);u([m({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);u([L("disabled")],rr.prototype,"handleDisabledChange",1);u([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],rr.prototype,"handleChange",1);var nx="sl-mutation-observer";rr.define("sl-mutation-observer");H({tagName:nx,elementClass:rr,react:j,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});function sx(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function ox(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!sx(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function ax(e){var t,r;const i=ou(e),n=(t=i[0])!=null?t:null,s=(r=i[i.length-1])!=null?r:null;return{start:n,end:s}}function ou(e){const t=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&ox(i)&&t.push(i);const n=s=>{var o;return((o=s.getRootNode({composed:!0}))==null?void 0:o.host)!==e};i instanceof HTMLSlotElement&&n(i)&&i.assignedElements({flatten:!0}).forEach(s=>{r(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}[...i.children].forEach(n=>r(n))}return r(e),t.sort((i,n)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}function*Vg(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*g1(Vg(e.shadowRoot.activeElement))))}function lx(){return[...Vg()].pop()}var Wn=[],jg=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r,i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const n=ou(this.element),s=lx();let o=n.findIndex(a=>a===s);if(o===-1){this.currentFocus=n[0],(r=this.currentFocus)==null||r.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;o+l>=n.length?o=0:o+l<0?o=n.length-1:o+=l,this.currentFocus=n[o],(i=this.currentFocus)==null||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Wn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Wn=Wn.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Wn[Wn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=ou(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],i=this.tabDirection==="forward"?t:r;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}},cx=U`
  ${W}

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
`,ir=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer"),this.localize=new ie(this),this.modal=new jg(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ds(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),hs(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ge(this,"dialog.denyClose",{dir:this.localize.dir()});Ce(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ds(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Pe(this.dialog),Pe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ge(this,"dialog.show",{dir:this.localize.dir()}),r=ge(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ce(this.panel,t.keyframes,t.options),Ce(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Pe(this.dialog),Pe(this.overlay)]);const e=ge(this,"dialog.hide",{dir:this.localize.dir()}),t=ge(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ce(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ce(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,hs(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
      <div
        part="base"
        class=${G({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${F(this.noHeader?this.label:void 0)}
          aria-labelledby=${F(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":z`
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
    `}};ir.styles=cx;ir.dependencies={"sl-icon-button":Ie};u([I(".dialog")],ir.prototype,"dialog",2);u([I(".dialog__panel")],ir.prototype,"panel",2);u([I(".dialog__overlay")],ir.prototype,"overlay",2);u([m({type:Boolean,reflect:!0})],ir.prototype,"open",2);u([m({reflect:!0})],ir.prototype,"label",2);u([m({attribute:"no-header",type:Boolean,reflect:!0})],ir.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],ir.prototype,"handleOpenChange",1);oe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});oe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});oe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ux="sl-dialog";ir.define("sl-dialog");H({tagName:ux,elementClass:ir,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var dx=U`
  ${W}

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
`,eo=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};eo.styles=dx;u([m({type:Boolean,reflect:!0})],eo.prototype,"vertical",2);u([L("vertical")],eo.prototype,"handleVerticalChange",1);var hx="sl-divider";eo.define("sl-divider");H({tagName:hx,elementClass:eo,react:j,events:{},displayName:"SlDivider"});var px=U`
  ${W}

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
`;function bp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var vt=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer"),this.localize=new ie(this),this.modal=new jg(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ds(this)))}disconnectedCallback(){super.disconnectedCallback(),hs(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ge(this,"drawer.denyClose",{dir:this.localize.dir()});Ce(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ds(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Pe(this.drawer),Pe(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ge(this,`drawer.show${bp(this.placement)}`,{dir:this.localize.dir()}),r=ge(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ce(this.panel,t.keyframes,t.options),Ce(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),hs(this)),await Promise.all([Pe(this.drawer),Pe(this.overlay)]);const e=ge(this,`drawer.hide${bp(this.placement)}`,{dir:this.localize.dir()}),t=ge(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ce(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ce(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ds(this)),this.open&&this.contained&&(this.modal.deactivate(),hs(this))}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
      <div
        part="base"
        class=${G({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${F(this.noHeader?this.label:void 0)}
          aria-labelledby=${F(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":z`
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
    `}};vt.styles=px;vt.dependencies={"sl-icon-button":Ie};u([I(".drawer")],vt.prototype,"drawer",2);u([I(".drawer__panel")],vt.prototype,"panel",2);u([I(".drawer__overlay")],vt.prototype,"overlay",2);u([m({type:Boolean,reflect:!0})],vt.prototype,"open",2);u([m({reflect:!0})],vt.prototype,"label",2);u([m({reflect:!0})],vt.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],vt.prototype,"contained",2);u([m({attribute:"no-header",type:Boolean,reflect:!0})],vt.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);u([L("contained",{waitUntilFirstUpdate:!0})],vt.prototype,"handleNoModalChange",1);oe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});oe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});oe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var fx="sl-drawer";vt.define("sl-drawer");H({tagName:fx,elementClass:vt,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var mx=U`
  ${W}

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
`,Qe=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>ax(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ge(this,"dropdown.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);const{keyframes:e,options:t}=ge(this,"dropdown.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return z`
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
        class=${G({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Qe.styles=mx;Qe.dependencies={"sl-popup":se};u([I(".dropdown")],Qe.prototype,"popup",2);u([I(".dropdown__trigger")],Qe.prototype,"trigger",2);u([I(".dropdown__panel")],Qe.prototype,"panel",2);u([m({type:Boolean,reflect:!0})],Qe.prototype,"open",2);u([m({reflect:!0})],Qe.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);u([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Qe.prototype,"stayOpenOnSelect",2);u([m({attribute:!1})],Qe.prototype,"containingElement",2);u([m({type:Number})],Qe.prototype,"distance",2);u([m({type:Number})],Qe.prototype,"skidding",2);u([m({type:Boolean})],Qe.prototype,"hoist",2);u([L("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);oe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var gx="sl-dropdown";Qe.define("sl-dropdown");H({tagName:gx,elementClass:Qe,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var yt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return z`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};u([m()],yt.prototype,"date",2);u([m()],yt.prototype,"weekday",2);u([m()],yt.prototype,"era",2);u([m()],yt.prototype,"year",2);u([m()],yt.prototype,"month",2);u([m()],yt.prototype,"day",2);u([m()],yt.prototype,"hour",2);u([m()],yt.prototype,"minute",2);u([m()],yt.prototype,"second",2);u([m({attribute:"time-zone-name"})],yt.prototype,"timeZoneName",2);u([m({attribute:"time-zone"})],yt.prototype,"timeZone",2);u([m({attribute:"hour-format"})],yt.prototype,"hourFormat",2);var vx="sl-format-date";yt.define("sl-format-date");H({tagName:vx,elementClass:yt,react:j,events:{},displayName:"SlFormatDate"});var to=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),n=r[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:n,unitDisplay:this.display})}};u([m({type:Number})],to.prototype,"value",2);u([m()],to.prototype,"unit",2);u([m()],to.prototype,"display",2);var yx="sl-format-bytes";to.define("sl-format-bytes");H({tagName:yx,elementClass:to,react:j,events:{},displayName:"SlFormatBytes"});var Ht=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([m({type:Number})],Ht.prototype,"value",2);u([m()],Ht.prototype,"type",2);u([m({attribute:"no-grouping",type:Boolean})],Ht.prototype,"noGrouping",2);u([m()],Ht.prototype,"currency",2);u([m({attribute:"currency-display"})],Ht.prototype,"currencyDisplay",2);u([m({attribute:"minimum-integer-digits",type:Number})],Ht.prototype,"minimumIntegerDigits",2);u([m({attribute:"minimum-fraction-digits",type:Number})],Ht.prototype,"minimumFractionDigits",2);u([m({attribute:"maximum-fraction-digits",type:Number})],Ht.prototype,"maximumFractionDigits",2);u([m({attribute:"minimum-significant-digits",type:Number})],Ht.prototype,"minimumSignificantDigits",2);u([m({attribute:"maximum-significant-digits",type:Number})],Ht.prototype,"maximumSignificantDigits",2);var bx="sl-format-number";Ht.define("sl-format-number");H({tagName:bx,elementClass:Ht,react:j,events:{},displayName:"SlFormatNumber"});var wx="sl-icon";ue.define("sl-icon");H({tagName:wx,elementClass:ue,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var _x="sl-button-group";ai.define("sl-button-group");H({tagName:_x,elementClass:ai,react:j,events:{},displayName:"SlButtonGroup"});var xx=U`
  ${W}

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
`,xd=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer","header","image")}render(){return z`
      <div
        part="base"
        class=${G({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};xd.styles=xx;var kx="sl-card";xd.define("sl-card");H({tagName:kx,elementClass:xd,react:j,events:{},displayName:"SlCard"});var Sx=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Cx=U`
  ${W}

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
`,$x=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const r=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(r.setPointerCapture(t.pointerId),this.handleDragStart()):r.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const r=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const n=t.scrollLeft,s=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:i,behavior:"auto"}),t.scrollTo({left:n,top:s,behavior:wd()?"auto":"smooth"}),requestAnimationFrame(async()=>{(r!==n||i!==s)&&await ot(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ex(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Tx(e,t,r=1){const i=t===void 0?0:e;t??(t=e);for(let n=i;r>0?n<t:t<n;n+=r)yield n}var zx=(e,t)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...i)},t)}},wp=(e,t,r)=>{const i=e[t];e[t]=function(...n){i.call(this,...n),r.call(this,i,...n)}},Ax="onscrollend"in window;if(!Ax){const e=new Set,t=new WeakMap,r=n=>{e.add(n.pointerId)},i=n=>{e.delete(n.pointerId)};document.addEventListener("pointerdown",r),document.addEventListener("pointerup",i),wp(EventTarget.prototype,"addEventListener",function(n,s){if(s!=="scroll")return;const o=zx(()=>{e.size?o():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",o,{passive:!0}),t.set(this,o)}),wp(EventTarget.prototype,"removeEventListener",function(n,s){if(s!=="scroll")return;const o=t.get(this);o&&n.call(this,"scroll",o,{passive:!0})})}var Te=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Sx(this,()=>this.next()),this.scrollController=new $x(this),this.intersectionObserverEntries=new Map,this.localize=new ie(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const i=r.target;i.toggleAttribute("inert",!r.isIntersecting),i.classList.toggle("--in-view",r.isIntersecting),i.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:i}=this,n=i?e/r:(e-t)/r+1;return Math.ceil(n)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,n=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),n&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var o;const l=(o=this.shadowRoot)==null?void 0:o.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"auto")}else if(r){const i=e.indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,r)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",r+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),i=e.slice(0,t);r.reverse().forEach((n,s)=>{const o=n.cloneNode(!0);o.setAttribute("data-clone",String(e.length-s-1)),this.prepend(o)}),i.forEach((n,s)=>{const o=n.cloneNode(!0);o.setAttribute("data-clone",String(s)),this.append(o)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,i)=>{(i+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i,scrollContainer:n}=this,s=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!s.length)return;const l=i?(e+s.length)%s.length:Ae(e,0,s.length-1);this.activeSlide=l;const a=Ae(e+(i?r:0),0,o.length-1),c=o[a],h=n.getBoundingClientRect(),d=c.getBoundingClientRect();n.scrollTo({left:d.left-h.left+n.scrollLeft,top:d.top-h.top+n.scrollTop,behavior:wd()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),n=this.canScrollPrev(),s=this.canScrollNext(),o=this.localize.dir()==="ltr";return z`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${G({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?z`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${G({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!n})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${o?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${G({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${o?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?z`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ex(Tx(r),l=>{const a=l===i;return z`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${G({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
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
    `}};Te.styles=Cx;Te.dependencies={"sl-icon":ue};u([m({type:Boolean,reflect:!0})],Te.prototype,"loop",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"navigation",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"pagination",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"autoplay",2);u([m({type:Number,attribute:"autoplay-interval"})],Te.prototype,"autoplayInterval",2);u([m({type:Number,attribute:"slides-per-page"})],Te.prototype,"slidesPerPage",2);u([m({type:Number,attribute:"slides-per-move"})],Te.prototype,"slidesPerMove",2);u([m()],Te.prototype,"orientation",2);u([m({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Te.prototype,"mouseDragging",2);u([I(".carousel__slides")],Te.prototype,"scrollContainer",2);u([I(".carousel__pagination")],Te.prototype,"paginationContainer",2);u([K()],Te.prototype,"activeSlide",2);u([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],Te.prototype,"initializeSlides",1);u([L("activeSlide")],Te.prototype,"handelSlideChange",1);u([L("slidesPerMove")],Te.prototype,"updateSlidesSnap",1);u([L("autoplay")],Te.prototype,"handleAutoplayChange",1);u([L("mouseDragging")],Te.prototype,"handleMouseDraggingChange",1);var Lx="sl-carousel";Te.define("sl-carousel");H({tagName:Lx,elementClass:Te,react:j,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Px=U`
  ${W}

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
`,kd=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return z` <slot></slot> `}};kd.styles=Px;var Ix="sl-carousel-item";kd.define("sl-carousel-item");H({tagName:Ix,elementClass:kd,react:j,events:{},displayName:"SlCarouselItem"});var Ox="sl-checkbox";Re.define("sl-checkbox");H({tagName:Ox,elementClass:Re,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Nx=U`
  ${W}

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
`,ne=class extends R{constructor(){super(...arguments),this.formControlController=new Tr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new At(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Xa}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?$a`a`:$a`button`;return us`
      <${t}
        part="base"
        class=${G({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${F(e?void 0:this.disabled)}
        type=${F(e?void 0:this.type)}
        title=${this.title}
        name=${F(e?void 0:this.name)}
        value=${F(e?void 0:this.value)}
        href=${F(e?this.href:void 0)}
        target=${F(e?this.target:void 0)}
        download=${F(e?this.download:void 0)}
        rel=${F(e?this.rel:void 0)}
        role=${F(e?void 0:"button")}
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
        ${this.caret?us` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?us`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ne.styles=Fg;ne.dependencies={"sl-icon":ue,"sl-spinner":Qs};u([I(".button")],ne.prototype,"button",2);u([K()],ne.prototype,"hasFocus",2);u([K()],ne.prototype,"invalid",2);u([m()],ne.prototype,"title",2);u([m({reflect:!0})],ne.prototype,"variant",2);u([m({reflect:!0})],ne.prototype,"size",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"caret",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"loading",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"outline",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"pill",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"circle",2);u([m()],ne.prototype,"type",2);u([m()],ne.prototype,"name",2);u([m()],ne.prototype,"value",2);u([m()],ne.prototype,"href",2);u([m()],ne.prototype,"target",2);u([m()],ne.prototype,"rel",2);u([m()],ne.prototype,"download",2);u([m()],ne.prototype,"form",2);u([m({attribute:"formaction"})],ne.prototype,"formAction",2);u([m({attribute:"formenctype"})],ne.prototype,"formEnctype",2);u([m({attribute:"formmethod"})],ne.prototype,"formMethod",2);u([m({attribute:"formnovalidate",type:Boolean})],ne.prototype,"formNoValidate",2);u([m({attribute:"formtarget"})],ne.prototype,"formTarget",2);u([L("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);function qe(e,t){Mx(e)&&(e="100%");const r=Dx(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function To(e){return Math.min(1,Math.max(0,e))}function Mx(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Dx(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Hg(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function zo(e){return Number(e)<=1?`${Number(e)*100}%`:e}function wi(e){return e.length===1?"0"+e:String(e)}function Rx(e,t,r){return{r:qe(e,255)*255,g:qe(t,255)*255,b:qe(r,255)*255}}function _p(e,t,r){e=qe(e,255),t=qe(t,255),r=qe(r,255);const i=Math.max(e,t,r),n=Math.min(e,t,r);let s=0,o=0;const l=(i+n)/2;if(i===n)o=0,s=0;else{const a=i-n;switch(o=l>.5?a/(2-i-n):a/(i+n),i){case e:s=(t-r)/a+(t<r?6:0);break;case t:s=(r-e)/a+2;break;case r:s=(e-t)/a+4;break}s/=6}return{h:s,s:o,l}}function Vl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Fx(e,t,r){let i,n,s;if(e=qe(e,360),t=qe(t,100),r=qe(r,100),t===0)n=r,s=r,i=r;else{const o=r<.5?r*(1+t):r+t-r*t,l=2*r-o;i=Vl(l,o,e+1/3),n=Vl(l,o,e),s=Vl(l,o,e-1/3)}return{r:i*255,g:n*255,b:s*255}}function xp(e,t,r){e=qe(e,255),t=qe(t,255),r=qe(r,255);const i=Math.max(e,t,r),n=Math.min(e,t,r);let s=0;const o=i,l=i-n,a=i===0?0:l/i;if(i===n)s=0;else{switch(i){case e:s=(t-r)/l+(t<r?6:0);break;case t:s=(r-e)/l+2;break;case r:s=(e-t)/l+4;break}s/=6}return{h:s,s:a,v:o}}function Bx(e,t,r){e=qe(e,360)*6,t=qe(t,100),r=qe(r,100);const i=Math.floor(e),n=e-i,s=r*(1-t),o=r*(1-n*t),l=r*(1-(1-n)*t),a=i%6,c=[r,o,s,s,l,r][a],h=[l,r,r,o,s,s][a],d=[s,s,l,r,r,o][a];return{r:c*255,g:h*255,b:d*255}}function kp(e,t,r,i){const n=[wi(Math.round(e).toString(16)),wi(Math.round(t).toString(16)),wi(Math.round(r).toString(16))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Vx(e,t,r,i,n){const s=[wi(Math.round(e).toString(16)),wi(Math.round(t).toString(16)),wi(Math.round(r).toString(16)),wi(jx(i))];return n&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function jx(e){return Math.round(parseFloat(e)*255).toString(16)}function Sp(e){return bt(e)/255}function bt(e){return parseInt(e,16)}function Hx(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const au={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ux(e){let t={r:0,g:0,b:0},r=1,i=null,n=null,s=null,o=!1,l=!1;return typeof e=="string"&&(e=Kx(e)),typeof e=="object"&&(pr(e.r)&&pr(e.g)&&pr(e.b)?(t=Rx(e.r,e.g,e.b),o=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):pr(e.h)&&pr(e.s)&&pr(e.v)?(i=zo(e.s),n=zo(e.v),t=Bx(e.h,i,n),o=!0,l="hsv"):pr(e.h)&&pr(e.s)&&pr(e.l)&&(i=zo(e.s),s=zo(e.l),t=Fx(e.h,i,s),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Hg(r),{ok:o,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const Wx="[-\\+]?\\d+%?",Gx="[-\\+]?\\d*\\.\\d+%?",Fr="(?:"+Gx+")|(?:"+Wx+")",jl="[\\s|\\(]+("+Fr+")[,|\\s]+("+Fr+")[,|\\s]+("+Fr+")\\s*\\)?",Hl="[\\s|\\(]+("+Fr+")[,|\\s]+("+Fr+")[,|\\s]+("+Fr+")[,|\\s]+("+Fr+")\\s*\\)?",Kt={CSS_UNIT:new RegExp(Fr),rgb:new RegExp("rgb"+jl),rgba:new RegExp("rgba"+Hl),hsl:new RegExp("hsl"+jl),hsla:new RegExp("hsla"+Hl),hsv:new RegExp("hsv"+jl),hsva:new RegExp("hsva"+Hl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Kx(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(au[e])e=au[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Kt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Kt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Kt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Kt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Kt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Kt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Kt.hex8.exec(e),r?{r:bt(r[1]),g:bt(r[2]),b:bt(r[3]),a:Sp(r[4]),format:t?"name":"hex8"}:(r=Kt.hex6.exec(e),r?{r:bt(r[1]),g:bt(r[2]),b:bt(r[3]),format:t?"name":"hex"}:(r=Kt.hex4.exec(e),r?{r:bt(r[1]+r[1]),g:bt(r[2]+r[2]),b:bt(r[3]+r[3]),a:Sp(r[4]+r[4]),format:t?"name":"hex8"}:(r=Kt.hex3.exec(e),r?{r:bt(r[1]+r[1]),g:bt(r[2]+r[2]),b:bt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function pr(e){return!!Kt.CSS_UNIT.exec(String(e))}class ke{constructor(t="",r={}){if(t instanceof ke)return t;typeof t=="number"&&(t=Hx(t)),this.originalInput=t;const i=Ux(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,i,n;const s=t.r/255,o=t.g/255,l=t.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),l<=.03928?n=l/12.92:n=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n}getAlpha(){return this.a}setAlpha(t){return this.a=Hg(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=xp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=xp(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${i}%, ${n}%)`:`hsva(${r}, ${i}%, ${n}%, ${this.roundA})`}toHsl(){const t=_p(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=_p(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${i}%, ${n}%)`:`hsla(${r}, ${i}%, ${n}%, ${this.roundA})`}toHex(t=!1){return kp(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Vx(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${i})`:`rgba(${t}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(qe(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(qe(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+kp(this.r,this.g,this.b,!1);for(const[r,i]of Object.entries(au))if(t===i)return r;return!1}toString(t){const r=!!t;t=t??this.format;let i=!1;const n=this.a<1&&this.a>=0;return!r&&n&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ke(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=To(r.l),new ke(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ke(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=To(r.l),new ke(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=To(r.s),new ke(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=To(r.s),new ke(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new ke(r)}mix(t,r=50){const i=this.toRgb(),n=new ke(t).toRgb(),s=r/100,o={r:(n.r-i.r)*s+i.r,g:(n.g-i.g)*s+i.g,b:(n.b-i.b)*s+i.b,a:(n.a-i.a)*s+i.a};return new ke(o)}analogous(t=6,r=30){const i=this.toHsl(),n=360/r,s=[this];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,s.push(new ke(i));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ke(t)}monochromatic(t=6){const r=this.toHsv(),{h:i}=r,{s:n}=r;let{v:s}=r;const o=[],l=1/t;for(;t--;)o.push(new ke({h:i,s:n,v:s})),s=(s+l)%1;return o}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ke({h:(r+72)%360,s:t.s,l:t.l}),new ke({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),i=new ke(t).toRgb(),n=r.a+i.a*(1-r.a);return new ke({r:(r.r*r.a+i.r*i.a*(1-r.a))/n,g:(r.g*r.a+i.g*i.a*(1-r.a))/n,b:(r.b*r.a+i.b*i.a*(1-r.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:i}=r,n=[this],s=360/t;for(let o=1;o<t;o++)n.push(new ke({h:(i+o*s)%360,s:r.s,l:r.l}));return n}equals(t){return this.toRgbString()===new ke(t).toRgbString()}}var Cp="EyeDropper"in window,J=class extends R{constructor(){super(),this.formControlController=new Tr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),ps(t,{onMove:o=>{this.alpha=Ae(o/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),ps(t,{onMove:o=>{this.hue=Ae(o/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:n}=t.getBoundingClientRect();let s=this.value,o=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ps(t,{onMove:(l,a)=>{this.saturation=Ae(l/i*100,0,100),this.brightness=Ae(100-a/n*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ae(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ae(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ae(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ae(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ae(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ae(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ae(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ae(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ke(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},n=t.toRgb(),s=t.toHexString(),o=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(o)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Cp)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const n=new ke(`hsva(${e}, ${t}, ${r}, ${i/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(n=>n.trim()!==""),i=z`
      <div
        part="base"
        class=${G({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?z`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ct({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${G({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ct({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${F(this.disabled?void 0:"0")}
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
                style=${ct({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${F(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?z`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ct({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ct({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${F(this.disabled?void 0:"0")}
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
            style=${ct({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":z`
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
            ${Cp?z`
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

        ${r.length>0?z`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(n=>{const s=this.parseColor(n);return s?z`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${F(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>this.selectSwatch(n)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ct({backgroundColor:s.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${n}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:z`
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
          class=${G({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ct({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};J.styles=Nx;J.dependencies={"sl-button-group":ai,"sl-button":ne,"sl-dropdown":Qe,"sl-icon":ue,"sl-input":X,"sl-visually-hidden":Qa};u([I('[part~="base"]')],J.prototype,"base",2);u([I('[part~="input"]')],J.prototype,"input",2);u([I(".color-dropdown")],J.prototype,"dropdown",2);u([I('[part~="preview"]')],J.prototype,"previewButton",2);u([I('[part~="trigger"]')],J.prototype,"trigger",2);u([K()],J.prototype,"hasFocus",2);u([K()],J.prototype,"isDraggingGridHandle",2);u([K()],J.prototype,"isEmpty",2);u([K()],J.prototype,"inputValue",2);u([K()],J.prototype,"hue",2);u([K()],J.prototype,"saturation",2);u([K()],J.prototype,"brightness",2);u([K()],J.prototype,"alpha",2);u([m()],J.prototype,"value",2);u([Ni()],J.prototype,"defaultValue",2);u([m()],J.prototype,"label",2);u([m()],J.prototype,"format",2);u([m({type:Boolean,reflect:!0})],J.prototype,"inline",2);u([m({reflect:!0})],J.prototype,"size",2);u([m({attribute:"no-format-toggle",type:Boolean})],J.prototype,"noFormatToggle",2);u([m()],J.prototype,"name",2);u([m({type:Boolean,reflect:!0})],J.prototype,"disabled",2);u([m({type:Boolean})],J.prototype,"hoist",2);u([m({type:Boolean})],J.prototype,"opacity",2);u([m({type:Boolean})],J.prototype,"uppercase",2);u([m()],J.prototype,"swatches",2);u([m({reflect:!0})],J.prototype,"form",2);u([m({type:Boolean,reflect:!0})],J.prototype,"required",2);u([L("format",{waitUntilFirstUpdate:!0})],J.prototype,"handleFormatChange",1);u([L("opacity",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpacityChange",1);u([L("value")],J.prototype,"handleValueChange",1);var qx="sl-color-picker";J.define("sl-color-picker");H({tagName:qx,elementClass:J,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var Yx=U`
  ${W}

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
`,Fe=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let n=this.from,s="";r?[n,s]=this.from.trim().split("."):i&&([n,s]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in t?t.getElementById(n):null;o?i?e=o.getAttribute(s)||"":r?e=o[s]||"":e=o.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),n=e==="success"?this.successIcon:this.errorIcon,s=ge(this,"copy.in",{dir:"ltr"}),o=ge(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:i,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=e,n.hidden=!1,await n.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await n.animate(o.keyframes,o.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return z`
      <sl-tooltip
        class=${G({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Fe.styles=Yx;Fe.dependencies={"sl-icon":ue,"sl-tooltip":De};u([I('slot[name="copy-icon"]')],Fe.prototype,"copyIcon",2);u([I('slot[name="success-icon"]')],Fe.prototype,"successIcon",2);u([I('slot[name="error-icon"]')],Fe.prototype,"errorIcon",2);u([I("sl-tooltip")],Fe.prototype,"tooltip",2);u([K()],Fe.prototype,"isCopying",2);u([K()],Fe.prototype,"status",2);u([m()],Fe.prototype,"value",2);u([m()],Fe.prototype,"from",2);u([m({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);u([m({attribute:"copy-label"})],Fe.prototype,"copyLabel",2);u([m({attribute:"success-label"})],Fe.prototype,"successLabel",2);u([m({attribute:"error-label"})],Fe.prototype,"errorLabel",2);u([m({attribute:"feedback-duration",type:Number})],Fe.prototype,"feedbackDuration",2);u([m({attribute:"tooltip-placement"})],Fe.prototype,"tooltipPlacement",2);u([m({type:Boolean})],Fe.prototype,"hoist",2);oe("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});oe("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Xx="sl-copy-button";Fe.define("sl-copy-button");H({tagName:Xx,elementClass:Fe,react:j,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var Qx=U`
  ${W}

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
`,Ut=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pe(this.body);const{keyframes:t,options:r}=ge(this,"details.show",{dir:this.localize.dir()});await Ce(this.body,Ca(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pe(this.body);const{keyframes:t,options:r}=ge(this,"details.hide",{dir:this.localize.dir()});await Ce(this.body,Ca(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ot(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ot(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return z`
      <details
        part="base"
        class=${G({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};Ut.styles=Qx;Ut.dependencies={"sl-icon":ue};u([I(".details")],Ut.prototype,"details",2);u([I(".details__header")],Ut.prototype,"header",2);u([I(".details__body")],Ut.prototype,"body",2);u([I(".details__expand-icon-slot")],Ut.prototype,"expandIconSlot",2);u([m({type:Boolean,reflect:!0})],Ut.prototype,"open",2);u([m()],Ut.prototype,"summary",2);u([m({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);u([L("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);oe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});oe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Zx="sl-details";Ut.define("sl-details");H({tagName:Zx,elementClass:Ut,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var Jx=U`
  ${W}

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
`,Bi=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),nr=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"icon","suffix"),this.localize=new ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pe(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=ge(this,"alert.show",{dir:this.localize.dir()});await Ce(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Pe(this.base);const{keyframes:e,options:t}=ge(this,"alert.hide",{dir:this.localize.dir()});await Ce(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}async toast(){return new Promise(e=>{Bi.parentElement===null&&document.body.append(Bi),Bi.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Bi.removeChild(this),e(),Bi.querySelector("sl-alert")===null&&Bi.remove()},{once:!0})})}render(){return z`
      <div
        part="base"
        class=${G({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?z`
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
    `}};nr.styles=Jx;nr.dependencies={"sl-icon-button":Ie};u([I('[part~="base"]')],nr.prototype,"base",2);u([m({type:Boolean,reflect:!0})],nr.prototype,"open",2);u([m({type:Boolean,reflect:!0})],nr.prototype,"closable",2);u([m({reflect:!0})],nr.prototype,"variant",2);u([m({type:Number})],nr.prototype,"duration",2);u([L("open",{waitUntilFirstUpdate:!0})],nr.prototype,"handleOpenChange",1);u([L("duration")],nr.prototype,"handleDurationChange",1);oe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ek="sl-alert";nr.define("sl-alert");H({tagName:ek,elementClass:nr,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var tk=U`
  ${W}

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
`,Wt=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return z`
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

        ${this.isLoaded?z`
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
    `}};Wt.styles=tk;Wt.dependencies={"sl-icon":ue};u([I(".animated-image__animated")],Wt.prototype,"animatedImage",2);u([K()],Wt.prototype,"frozenFrame",2);u([K()],Wt.prototype,"isLoaded",2);u([m()],Wt.prototype,"src",2);u([m()],Wt.prototype,"alt",2);u([m({type:Boolean,reflect:!0})],Wt.prototype,"play",2);u([L("play",{waitUntilFirstUpdate:!0})],Wt.prototype,"handlePlayChange",1);u([L("src")],Wt.prototype,"handleSrcChange",1);var rk="sl-animated-image";Wt.define("sl-animated-image");H({tagName:rk,elementClass:Wt,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var ik=U`
  ${W}

  :host {
    display: contents;
  }
`;const nk=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],sk=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],ok=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],ak=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],lk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ck=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],uk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],dk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],fk=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],mk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],gk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vk=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],yk=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],bk=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],wk=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],_k=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],xk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],kk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Sk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ck=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],$k=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ek=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Tk=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],zk=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ak=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Lk=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Pk=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Ik=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Ok=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Nk=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Mk=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dk=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rk=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fk=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bk=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Vk=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jk=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hk=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Uk=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wk=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gk=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kk=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qk=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Yk=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Xk=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Qk=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Zk=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Jk=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],eS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],tS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],rS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],iS=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],nS=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],sS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],oS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],aS=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],lS=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],cS=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],uS=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],dS=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],hS=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pS=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],fS=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],mS=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],gS=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vS=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],yS=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],bS=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],wS=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],_S=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],xS=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],kS=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],SS=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],CS=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],$S=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ES=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],TS=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zS=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],AS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],LS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],PS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],IS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],OS=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],NS=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],MS=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],DS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],RS=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],FS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],BS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],VS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],jS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],HS=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],US=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],WS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],GS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],KS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ug={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},qS=Object.freeze(Object.defineProperty({__proto__:null,backInDown:vk,backInLeft:yk,backInRight:bk,backInUp:wk,backOutDown:_k,backOutLeft:xk,backOutRight:kk,backOutUp:Sk,bounce:nk,bounceIn:Ck,bounceInDown:$k,bounceInLeft:Ek,bounceInRight:Tk,bounceInUp:zk,bounceOut:Ak,bounceOutDown:Lk,bounceOutLeft:Pk,bounceOutRight:Ik,bounceOutUp:Ok,easings:Ug,fadeIn:Nk,fadeInBottomLeft:Mk,fadeInBottomRight:Dk,fadeInDown:Rk,fadeInDownBig:Fk,fadeInLeft:Bk,fadeInLeftBig:Vk,fadeInRight:jk,fadeInRightBig:Hk,fadeInTopLeft:Uk,fadeInTopRight:Wk,fadeInUp:Gk,fadeInUpBig:Kk,fadeOut:qk,fadeOutBottomLeft:Yk,fadeOutBottomRight:Xk,fadeOutDown:Qk,fadeOutDownBig:Zk,fadeOutLeft:Jk,fadeOutLeftBig:eS,fadeOutRight:tS,fadeOutRightBig:rS,fadeOutTopLeft:iS,fadeOutTopRight:nS,fadeOutUp:sS,fadeOutUpBig:oS,flash:sk,flip:aS,flipInX:lS,flipInY:cS,flipOutX:uS,flipOutY:dS,headShake:ok,heartBeat:ak,hinge:OS,jackInTheBox:NS,jello:lk,lightSpeedInLeft:hS,lightSpeedInRight:pS,lightSpeedOutLeft:fS,lightSpeedOutRight:mS,pulse:ck,rollIn:MS,rollOut:DS,rotateIn:gS,rotateInDownLeft:vS,rotateInDownRight:yS,rotateInUpLeft:bS,rotateInUpRight:wS,rotateOut:_S,rotateOutDownLeft:xS,rotateOutDownRight:kS,rotateOutUpLeft:SS,rotateOutUpRight:CS,rubberBand:uk,shake:dk,shakeX:hk,shakeY:pk,slideInDown:$S,slideInLeft:ES,slideInRight:TS,slideInUp:zS,slideOutDown:AS,slideOutLeft:LS,slideOutRight:PS,slideOutUp:IS,swing:fk,tada:mk,wobble:gk,zoomIn:RS,zoomInDown:FS,zoomInLeft:BS,zoomInRight:VS,zoomInUp:jS,zoomOut:HS,zoomOutDown:US,zoomOutLeft:WS,zoomOutRight:GS,zoomOutUp:KS},Symbol.toStringTag,{value:"Module"}));var Be=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Ug[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:qS[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!i?!1:(this.destroyAnimation(),this.animation=s.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return z` <slot @slotchange=${this.handleSlotChange}></slot> `}};Be.styles=ik;u([b1("slot")],Be.prototype,"defaultSlot",2);u([m()],Be.prototype,"name",2);u([m({type:Boolean,reflect:!0})],Be.prototype,"play",2);u([m({type:Number})],Be.prototype,"delay",2);u([m()],Be.prototype,"direction",2);u([m({type:Number})],Be.prototype,"duration",2);u([m()],Be.prototype,"easing",2);u([m({attribute:"end-delay",type:Number})],Be.prototype,"endDelay",2);u([m()],Be.prototype,"fill",2);u([m({type:Number})],Be.prototype,"iterations",2);u([m({attribute:"iteration-start",type:Number})],Be.prototype,"iterationStart",2);u([m({attribute:!1})],Be.prototype,"keyframes",2);u([m({attribute:"playback-rate",type:Number})],Be.prototype,"playbackRate",2);u([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Be.prototype,"handleAnimationChange",1);u([L("play")],Be.prototype,"handlePlayChange",1);u([L("playbackRate")],Be.prototype,"handlePlaybackRateChange",1);var YS="sl-animation";Be.define("sl-animation");var XS=H({tagName:YS,elementClass:Be,react:j,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),Wg=XS,QS=U`
  ${W}

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
`,Tn=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return z`
      <span
        part="base"
        class=${G({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Tn.styles=QS;u([m({reflect:!0})],Tn.prototype,"variant",2);u([m({type:Boolean,reflect:!0})],Tn.prototype,"pill",2);u([m({type:Boolean,reflect:!0})],Tn.prototype,"pulse",2);var ZS="sl-badge";Tn.define("sl-badge");H({tagName:ZS,elementClass:Tn,react:j,events:{},displayName:"SlBadge"});var JS=U`
  ${W}

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
`,sr=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=z`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=z``;return this.initials?t=z`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=z`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,z`
      <div
        part="base"
        class=${G({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};sr.styles=JS;sr.dependencies={"sl-icon":ue};u([K()],sr.prototype,"hasError",2);u([m()],sr.prototype,"image",2);u([m()],sr.prototype,"label",2);u([m()],sr.prototype,"initials",2);u([m()],sr.prototype,"loading",2);u([m({reflect:!0})],sr.prototype,"shape",2);u([L("image")],sr.prototype,"handleImageChange",1);var e2="sl-avatar";sr.define("sl-avatar");H({tagName:e2,elementClass:sr,react:j,events:{},displayName:"SlAvatar"});var t2=U`
  ${W}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ri=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),z`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ri.styles=t2;Ri.dependencies={"sl-icon":ue};u([I("slot")],Ri.prototype,"defaultSlot",2);u([I('slot[name="separator"]')],Ri.prototype,"separatorSlot",2);u([m()],Ri.prototype,"label",2);var r2="sl-breadcrumb";Ri.define("sl-breadcrumb");H({tagName:r2,elementClass:Ri,react:j,events:{},displayName:"SlBreadcrumb"});var i2=U`
  ${W}

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
`,zn=class extends R{constructor(){super(...arguments),this.hasSlotController=new At(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return z`
      <div
        part="base"
        class=${G({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?z`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${F(this.target?this.target:void 0)}"
                rel=${F(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:z`
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
    `}};zn.styles=i2;u([m()],zn.prototype,"href",2);u([m()],zn.prototype,"target",2);u([m()],zn.prototype,"rel",2);var n2="sl-breadcrumb-item";zn.define("sl-breadcrumb-item");H({tagName:n2,elementClass:zn,react:j,events:{},displayName:"SlBreadcrumbItem"});var s2="sl-button";ne.define("sl-button");H({tagName:s2,elementClass:ne,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});function $p(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Sd(e={},t={}){Object.keys(t).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:$p(t[r])&&$p(e[r])&&Object.keys(t[r]).length>0&&Sd(e[r],t[r])})}const Gg={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tt(){const e=typeof document<"u"?document:{};return Sd(e,Gg),e}const o2={document:Gg,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ue(){const e=typeof window<"u"?window:{};return Sd(e,o2),e}function a2(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(r){t.__proto__=r}})}class Br extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),a2(this))}}function ro(e=[]){const t=[];return e.forEach(r=>{Array.isArray(r)?t.push(...ro(r)):t.push(r)}),t}function Kg(e,t){return Array.prototype.filter.call(e,t)}function l2(e){const t=[];for(let r=0;r<e.length;r+=1)t.indexOf(e[r])===-1&&t.push(e[r]);return t}function c2(e,t){if(typeof e!="string")return[e];const r=[],i=t.querySelectorAll(e);for(let n=0;n<i.length;n+=1)r.push(i[n]);return r}function B(e,t){const r=Ue(),i=tt();let n=[];if(!t&&e instanceof Br)return e;if(!e)return new Br(n);if(typeof e=="string"){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let o="div";s.indexOf("<li")===0&&(o="ul"),s.indexOf("<tr")===0&&(o="tbody"),(s.indexOf("<td")===0||s.indexOf("<th")===0)&&(o="tr"),s.indexOf("<tbody")===0&&(o="table"),s.indexOf("<option")===0&&(o="select");const l=i.createElement(o);l.innerHTML=s;for(let a=0;a<l.childNodes.length;a+=1)n.push(l.childNodes[a])}else n=c2(e.trim(),t||i)}else if(e.nodeType||e===r||e===i)n.push(e);else if(Array.isArray(e)){if(e instanceof Br)return e;n=e}return new Br(l2(n))}B.fn=Br.prototype;function u2(...e){const t=ro(e.map(r=>r.split(" ")));return this.forEach(r=>{r.classList.add(...t)}),this}function d2(...e){const t=ro(e.map(r=>r.split(" ")));return this.forEach(r=>{r.classList.remove(...t)}),this}function h2(...e){const t=ro(e.map(r=>r.split(" ")));this.forEach(r=>{t.forEach(i=>{r.classList.toggle(i)})})}function p2(...e){const t=ro(e.map(r=>r.split(" ")));return Kg(this,r=>t.filter(i=>r.classList.contains(i)).length>0).length>0}function f2(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let r=0;r<this.length;r+=1)if(arguments.length===2)this[r].setAttribute(e,t);else for(const i in e)this[r][i]=e[i],this[r].setAttribute(i,e[i]);return this}function m2(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function g2(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function v2(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function y2(...e){let[t,r,i,n]=e;typeof e[1]=="function"&&([t,i,n]=e,r=void 0),n||(n=!1);function s(c){const h=c.target;if(!h)return;const d=c.target.dom7EventData||[];if(d.indexOf(c)<0&&d.unshift(c),B(h).is(r))i.apply(h,d);else{const p=B(h).parents();for(let g=0;g<p.length;g+=1)B(p[g]).is(r)&&i.apply(p[g],d)}}function o(c){const h=c&&c.target?c.target.dom7EventData||[]:[];h.indexOf(c)<0&&h.unshift(c),i.apply(this,h)}const l=t.split(" ");let a;for(let c=0;c<this.length;c+=1){const h=this[c];if(r)for(a=0;a<l.length;a+=1){const d=l[a];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[d]||(h.dom7LiveListeners[d]=[]),h.dom7LiveListeners[d].push({listener:i,proxyListener:s}),h.addEventListener(d,s,n)}else for(a=0;a<l.length;a+=1){const d=l[a];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[d]||(h.dom7Listeners[d]=[]),h.dom7Listeners[d].push({listener:i,proxyListener:o}),h.addEventListener(d,o,n)}}return this}function b2(...e){let[t,r,i,n]=e;typeof e[1]=="function"&&([t,i,n]=e,r=void 0),n||(n=!1);const s=t.split(" ");for(let o=0;o<s.length;o+=1){const l=s[o];for(let a=0;a<this.length;a+=1){const c=this[a];let h;if(!r&&c.dom7Listeners?h=c.dom7Listeners[l]:r&&c.dom7LiveListeners&&(h=c.dom7LiveListeners[l]),h&&h.length)for(let d=h.length-1;d>=0;d-=1){const p=h[d];i&&p.listener===i||i&&p.listener&&p.listener.dom7proxy&&p.listener.dom7proxy===i?(c.removeEventListener(l,p.proxyListener,n),h.splice(d,1)):i||(c.removeEventListener(l,p.proxyListener,n),h.splice(d,1))}}}return this}function w2(...e){const t=Ue(),r=e[0].split(" "),i=e[1];for(let n=0;n<r.length;n+=1){const s=r[n];for(let o=0;o<this.length;o+=1){const l=this[o];if(t.CustomEvent){const a=new t.CustomEvent(s,{detail:i,bubbles:!0,cancelable:!0});l.dom7EventData=e.filter((c,h)=>h>0),l.dispatchEvent(a),l.dom7EventData=[],delete l.dom7EventData}}}return this}function _2(e){const t=this;function r(i){i.target===this&&(e.call(this,i),t.off("transitionend",r))}return e&&t.on("transitionend",r),this}function x2(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function k2(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function S2(){if(this.length>0){const e=Ue(),t=tt(),r=this[0],i=r.getBoundingClientRect(),n=t.body,s=r.clientTop||n.clientTop||0,o=r.clientLeft||n.clientLeft||0,l=r===e?e.scrollY:r.scrollTop,a=r===e?e.scrollX:r.scrollLeft;return{top:i.top+l-s,left:i.left+a-o}}return null}function C2(){const e=Ue();return this[0]?e.getComputedStyle(this[0],null):{}}function $2(e,t){const r=Ue();let i;if(arguments.length===1)if(typeof e=="string"){if(this[0])return r.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(i=0;i<this.length;i+=1)for(const n in e)this[i].style[n]=e[n];return this}if(arguments.length===2&&typeof e=="string"){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this}function E2(e){return e?(this.forEach((t,r)=>{e.apply(t,[t,r])}),this):this}function T2(e){const t=Kg(this,e);return B(t)}function z2(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function A2(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function L2(e){const t=Ue(),r=tt(),i=this[0];let n,s;if(!i||typeof e>"u")return!1;if(typeof e=="string"){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(n=B(e),s=0;s<n.length;s+=1)if(n[s]===i)return!0;return!1}if(e===r)return i===r;if(e===t)return i===t;if(e.nodeType||e instanceof Br){for(n=e.nodeType?[e]:e,s=0;s<n.length;s+=1)if(n[s]===i)return!0;return!1}return!1}function P2(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function I2(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return B([]);if(e<0){const r=t+e;return r<0?B([]):B([this[r]])}return B([this[e]])}function O2(...e){let t;const r=tt();for(let i=0;i<e.length;i+=1){t=e[i];for(let n=0;n<this.length;n+=1)if(typeof t=="string"){const s=r.createElement("div");for(s.innerHTML=t;s.firstChild;)this[n].appendChild(s.firstChild)}else if(t instanceof Br)for(let s=0;s<t.length;s+=1)this[n].appendChild(t[s]);else this[n].appendChild(t)}return this}function N2(e){const t=tt();let r,i;for(r=0;r<this.length;r+=1)if(typeof e=="string"){const n=t.createElement("div");for(n.innerHTML=e,i=n.childNodes.length-1;i>=0;i-=1)this[r].insertBefore(n.childNodes[i],this[r].childNodes[0])}else if(e instanceof Br)for(i=0;i<e.length;i+=1)this[r].insertBefore(e[i],this[r].childNodes[0]);else this[r].insertBefore(e,this[r].childNodes[0]);return this}function M2(e){return this.length>0?e?this[0].nextElementSibling&&B(this[0].nextElementSibling).is(e)?B([this[0].nextElementSibling]):B([]):this[0].nextElementSibling?B([this[0].nextElementSibling]):B([]):B([])}function D2(e){const t=[];let r=this[0];if(!r)return B([]);for(;r.nextElementSibling;){const i=r.nextElementSibling;e?B(i).is(e)&&t.push(i):t.push(i),r=i}return B(t)}function R2(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&B(t.previousElementSibling).is(e)?B([t.previousElementSibling]):B([]):t.previousElementSibling?B([t.previousElementSibling]):B([])}return B([])}function F2(e){const t=[];let r=this[0];if(!r)return B([]);for(;r.previousElementSibling;){const i=r.previousElementSibling;e?B(i).is(e)&&t.push(i):t.push(i),r=i}return B(t)}function B2(e){const t=[];for(let r=0;r<this.length;r+=1)this[r].parentNode!==null&&(e?B(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode));return B(t)}function V2(e){const t=[];for(let r=0;r<this.length;r+=1){let i=this[r].parentNode;for(;i;)e?B(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return B(t)}function j2(e){let t=this;return typeof e>"u"?B([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function H2(e){const t=[];for(let r=0;r<this.length;r+=1){const i=this[r].querySelectorAll(e);for(let n=0;n<i.length;n+=1)t.push(i[n])}return B(t)}function U2(e){const t=[];for(let r=0;r<this.length;r+=1){const i=this[r].children;for(let n=0;n<i.length;n+=1)(!e||B(i[n]).is(e))&&t.push(i[n])}return B(t)}function W2(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const Ep={addClass:u2,removeClass:d2,hasClass:p2,toggleClass:h2,attr:f2,removeAttr:m2,transform:g2,transition:v2,on:y2,off:b2,trigger:w2,transitionEnd:_2,outerWidth:x2,outerHeight:k2,styles:C2,offset:S2,css:$2,each:E2,html:z2,text:A2,is:L2,index:P2,eq:I2,append:O2,prepend:N2,next:M2,nextAll:D2,prev:R2,prevAll:F2,parent:B2,parents:V2,closest:j2,find:H2,children:U2,filter:T2,remove:W2};Object.keys(Ep).forEach(e=>{Object.defineProperty(B.fn,e,{value:Ep[e],writable:!0})});function G2(e){const t=e;Object.keys(t).forEach(r=>{try{t[r]=null}catch{}try{delete t[r]}catch{}})}function Ta(e,t=0){return setTimeout(e,t)}function Fs(){return Date.now()}function K2(e){const t=Ue();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}function q2(e,t="x"){const r=Ue();let i,n,s;const o=K2(e);return r.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new r.WebKitCSSMatrix(n==="none"?"":n)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),t==="x"&&(r.WebKitCSSMatrix?n=s.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),t==="y"&&(r.WebKitCSSMatrix?n=s.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function Ao(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Y2(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function _t(...e){const t=Object(e[0]),r=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const n=e[i];if(n!=null&&!Y2(n)){const s=Object.keys(Object(n)).filter(o=>r.indexOf(o)<0);for(let o=0,l=s.length;o<l;o+=1){const a=s[o],c=Object.getOwnPropertyDescriptor(n,a);c!==void 0&&c.enumerable&&(Ao(t[a])&&Ao(n[a])?n[a].__swiper__?t[a]=n[a]:_t(t[a],n[a]):!Ao(t[a])&&Ao(n[a])?(t[a]={},n[a].__swiper__?t[a]=n[a]:_t(t[a],n[a])):t[a]=n[a])}}}return t}function Lo(e,t,r){e.style.setProperty(t,r)}function qg({swiper:e,targetPosition:t,side:r}){const i=Ue(),n=-e.translate;let s=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const a=t>n?"next":"prev",c=(d,p)=>a==="next"&&d>=p||a==="prev"&&d<=p,h=()=>{o=new Date().getTime(),s===null&&(s=o);const d=Math.max(Math.min((o-s)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let g=n+p*(t-n);if(c(g,t)&&(g=t),e.wrapperEl.scrollTo({[r]:g}),c(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(h)};h()}let Ul;function X2(){const e=Ue(),t=tt();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let i=!1;try{const n=Object.defineProperty({},"passive",{get(){i=!0}});e.addEventListener("testPassiveListener",null,n)}catch{}return i}(),gestures:function(){return"ongesturestart"in e}()}}function Yg(){return Ul||(Ul=X2()),Ul}let Wl;function Q2({userAgent:e}={}){const t=Yg(),r=Ue(),i=r.navigator.platform,n=e||r.navigator.userAgent,s={ios:!1,android:!1},o=r.screen.width,l=r.screen.height,a=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad).*OS\s([\d_]+)/);const h=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&t.touch&&y.indexOf(`${o}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),a&&!p&&(s.os="android",s.android=!0),(c||d||h)&&(s.os="ios",s.ios=!0),s}function Z2(e={}){return Wl||(Wl=Q2(e)),Wl}let Gl;function J2(){const e=Ue();function t(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function eC(){return Gl||(Gl=J2()),Gl}function tC({swiper:e,on:t,emit:r}){const i=Ue();let n=null,s=null;const o=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(h=>{s=i.requestAnimationFrame(()=>{const{width:d,height:p}=e;let g=d,y=p;h.forEach(({contentBoxSize:w,contentRect:k,target:v})=>{v&&v!==e.el||(g=k?k.width:(w[0]||w).inlineSize,y=k?k.height:(w[0]||w).blockSize)}),(g!==d||y!==p)&&o()})}),n.observe(e.el))},a=()=>{s&&i.cancelAnimationFrame(s),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),t("destroy",()=>{a(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function rC({swiper:e,extendParams:t,on:r,emit:i}){const n=[],s=Ue(),o=(c,h={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,p=new d(g=>{if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(y):s.setTimeout(y,0)});p.observe(c,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=e.$el.parents();for(let h=0;h<c.length;h+=1)o(c[h])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},a=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",a)}const iC={on(e,t,r){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const n=r?"unshift":"push";return e.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][n](t)}),i},once(e,t,r){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function n(...s){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(i,s)}return n.__emitterProxy=t,i.on(e,n,r)},onAny(e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return r.eventsAnyListeners.indexOf(e)<0&&r.eventsAnyListeners[i](e),r},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const r=t.eventsAnyListeners.indexOf(e);return r>=0&&t.eventsAnyListeners.splice(r,1),t},off(e,t){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?r.eventsListeners[i]=[]:r.eventsListeners[i]&&r.eventsListeners[i].forEach((n,s)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&r.eventsListeners[i].splice(s,1)})}),r},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let r,i,n;return typeof e[0]=="string"||Array.isArray(e[0])?(r=e[0],i=e.slice(1,e.length),n=t):(r=e[0].events,i=e[0].data,n=e[0].context||t),i.unshift(n),(Array.isArray(r)?r:r.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...i])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(n,i)})}),t}};function nC(){const e=this;let t,r;const i=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?r=e.params.height:r=i[0].clientHeight,!(t===0&&e.isHorizontal()||r===0&&e.isVertical())&&(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),r=r-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Object.assign(e,{width:t,height:r,size:e.isHorizontal()?t:r}))}function sC(){const e=this;function t(C){return e.isHorizontal()?C:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[C]}function r(C,N){return parseFloat(C.getPropertyValue(t(N))||0)}const i=e.params,{$wrapperEl:n,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&i.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,h=n.children(`.${e.params.slideClass}`),d=a?e.virtual.slides.length:h.length;let p=[];const g=[],y=[];let w=i.slidesOffsetBefore;typeof w=="function"&&(w=i.slidesOffsetBefore.call(e));let k=i.slidesOffsetAfter;typeof k=="function"&&(k=i.slidesOffsetAfter.call(e));const v=e.snapGrid.length,f=e.slidesGrid.length;let b=i.spaceBetween,_=-w,x=0,S=0;if(typeof s>"u")return;typeof b=="string"&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*s),e.virtualSize=-b,o?h.css({marginLeft:"",marginBottom:"",marginTop:""}):h.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(Lo(e.wrapperEl,"--swiper-centered-offset-before",""),Lo(e.wrapperEl,"--swiper-centered-offset-after",""));const E=i.grid&&i.grid.rows>1&&e.grid;E&&e.grid.initSlides(d);let $;const P=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(C=>typeof i.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<d;C+=1){$=0;const N=h.eq(C);if(E&&e.grid.updateSlide(C,N,d,t),N.css("display")!=="none"){if(i.slidesPerView==="auto"){P&&(h[C].style[t("width")]="");const D=getComputedStyle(N[0]),te=N[0].style.transform,le=N[0].style.webkitTransform;if(te&&(N[0].style.transform="none"),le&&(N[0].style.webkitTransform="none"),i.roundLengths)$=e.isHorizontal()?N.outerWidth(!0):N.outerHeight(!0);else{const ye=r(D,"width"),Oe=r(D,"padding-left"),We=r(D,"padding-right"),O=r(D,"margin-left"),V=r(D,"margin-right"),q=D.getPropertyValue("box-sizing");if(q&&q==="border-box")$=ye+O+V;else{const{clientWidth:be,offsetWidth:ze}=N[0];$=ye+Oe+We+O+V+(ze-be)}}te&&(N[0].style.transform=te),le&&(N[0].style.webkitTransform=le),i.roundLengths&&($=Math.floor($))}else $=(s-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&($=Math.floor($)),h[C]&&(h[C].style[t("width")]=`${$}px`);h[C]&&(h[C].swiperSlideSize=$),y.push($),i.centeredSlides?(_=_+$/2+x/2+b,x===0&&C!==0&&(_=_-s/2-b),C===0&&(_=_-s/2-b),Math.abs(_)<1/1e3&&(_=0),i.roundLengths&&(_=Math.floor(_)),S%i.slidesPerGroup===0&&p.push(_),g.push(_)):(i.roundLengths&&(_=Math.floor(_)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&p.push(_),g.push(_),_=_+$+b),e.virtualSize+=$+b,x=$,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+k,o&&l&&(i.effect==="slide"||i.effect==="coverflow")&&n.css({width:`${e.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&n.css({[t("width")]:`${e.virtualSize+i.spaceBetween}px`}),E&&e.grid.updateWrapperSize($,p,t),!i.centeredSlides){const C=[];for(let N=0;N<p.length;N+=1){let D=p[N];i.roundLengths&&(D=Math.floor(D)),p[N]<=e.virtualSize-s&&C.push(D)}p=C,Math.floor(e.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-s)}if(p.length===0&&(p=[0]),i.spaceBetween!==0){const C=e.isHorizontal()&&o?"marginLeft":t("marginRight");h.filter((N,D)=>i.cssMode?D!==h.length-1:!0).css({[C]:`${b}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let C=0;y.forEach(D=>{C+=D+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween;const N=C-s;p=p.map(D=>D<0?-w:D>N?N+k:D)}if(i.centerInsufficientSlides){let C=0;if(y.forEach(N=>{C+=N+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween,C<s){const N=(s-C)/2;p.forEach((D,te)=>{p[te]=D-N}),g.forEach((D,te)=>{g[te]=D+N})}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:g,slidesSizesGrid:y}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Lo(e.wrapperEl,"--swiper-centered-offset-before",`${-p[0]}px`),Lo(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const C=-e.snapGrid[0],N=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+C),e.slidesGrid=e.slidesGrid.map(D=>D+N)}if(d!==c&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!a&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const C=`${i.containerModifierClass}backface-hidden`,N=e.$el.hasClass(C);d<=i.maxBackfaceHiddenSlides?N||e.$el.addClass(C):N&&e.$el.removeClass(C)}}function oC(e){const t=this,r=[],i=t.virtual&&t.params.virtual.enabled;let n=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>i?t.slides.filter(a=>parseInt(a.getAttribute("data-swiper-slide-index"),10)===l)[0]:t.slides.eq(l)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||B([])).each(l=>{r.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!i)break;r.push(o(l))}else r.push(o(t.activeIndex));for(s=0;s<r.length;s+=1)if(typeof r[s]<"u"){const l=r[s].offsetHeight;n=l>n?l:n}(n||n===0)&&t.$wrapperEl.css("height",`${n}px`)}function aC(){const e=this,t=e.slides;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop}function lC(e=this&&this.translate||0){const t=this,r=t.params,{slides:i,rtlTranslate:n,snapGrid:s}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),i.removeClass(r.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let l=0;l<i.length;l+=1){const a=i[l];let c=a.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(c-=i[0].swiperSlideOffset);const h=(o+(r.centeredSlides?t.minTranslate():0)-c)/(a.swiperSlideSize+r.spaceBetween),d=(o-s[0]+(r.centeredSlides?t.minTranslate():0)-c)/(a.swiperSlideSize+r.spaceBetween),p=-(o-c),g=p+t.slidesSizesGrid[l];(p>=0&&p<t.size-1||g>1&&g<=t.size||p<=0&&g>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(l),i.eq(l).addClass(r.slideVisibleClass)),a.progress=n?-h:h,a.originalProgress=n?-d:d}t.visibleSlides=B(t.visibleSlides)}function cC(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const r=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:s,isEnd:o}=t;const l=s,a=o;i===0?(n=0,s=!0,o=!0):(n=(e-t.minTranslate())/i,s=n<=0,o=n>=1),Object.assign(t,{progress:n,isBeginning:s,isEnd:o}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!a&&t.emit("reachEnd toEdge"),(l&&!s||a&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}function uC(){const e=this,{slides:t,params:r,$wrapperEl:i,activeIndex:n,realIndex:s}=e,o=e.virtual&&r.virtual.enabled;t.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`);let l;o?l=e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${n}"]`):l=t.eq(n),l.addClass(r.slideActiveClass),r.loop&&(l.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass));let a=l.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);r.loop&&a.length===0&&(a=t.eq(0),a.addClass(r.slideNextClass));let c=l.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);r.loop&&c.length===0&&(c=t.eq(-1),c.addClass(r.slidePrevClass)),r.loop&&(a.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass),c.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)),e.emitSlidesClasses()}function dC(e){const t=this,r=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:n,params:s,activeIndex:o,realIndex:l,snapIndex:a}=t;let c=e,h;if(typeof c>"u"){for(let p=0;p<i.length;p+=1)typeof i[p+1]<"u"?r>=i[p]&&r<i[p+1]-(i[p+1]-i[p])/2?c=p:r>=i[p]&&r<i[p+1]&&(c=p+1):r>=i[p]&&(c=p);s.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0)}if(n.indexOf(r)>=0)h=n.indexOf(r);else{const p=Math.min(s.slidesPerGroupSkip,c);h=p+Math.floor((c-p)/s.slidesPerGroup)}if(h>=n.length&&(h=n.length-1),c===o){h!==a&&(t.snapIndex=h,t.emit("snapIndexChange"));return}const d=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:h,realIndex:d,previousIndex:o,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function hC(e){const t=this,r=t.params,i=B(e).closest(`.${r.slideClass}`)[0];let n=!1,s;if(i){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===i){n=!0,s=o;break}}if(i&&n)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(B(i).attr("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const pC={updateSize:nC,updateSlides:sC,updateAutoHeight:oC,updateSlidesOffset:aC,updateSlidesProgress:lC,updateProgress:cC,updateSlidesClasses:uC,updateActiveIndex:dC,updateClickedSlide:hC};function fC(e=this.isHorizontal()?"x":"y"){const t=this,{params:r,rtlTranslate:i,translate:n,$wrapperEl:s}=t;if(r.virtualTranslate)return i?-n:n;if(r.cssMode)return n;let o=q2(s[0],e);return i&&(o=-o),o||0}function mC(e,t){const r=this,{rtlTranslate:i,params:n,$wrapperEl:s,wrapperEl:o,progress:l}=r;let a=0,c=0;const h=0;r.isHorizontal()?a=i?-e:e:c=e,n.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),n.cssMode?o[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-a:-c:n.virtualTranslate||s.transform(`translate3d(${a}px, ${c}px, ${h}px)`),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?a:c;let d;const p=r.maxTranslate()-r.minTranslate();p===0?d=0:d=(e-r.minTranslate())/p,d!==l&&r.updateProgress(e),r.emit("setTranslate",r.translate,t)}function gC(){return-this.snapGrid[0]}function vC(){return-this.snapGrid[this.snapGrid.length-1]}function yC(e=0,t=this.params.speed,r=!0,i=!0,n){const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),c=s.maxTranslate();let h;if(i&&e>a?h=a:i&&e<c?h=c:h=e,s.updateProgress(h),o.cssMode){const d=s.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-h;else{if(!s.support.smoothScroll)return qg({swiper:s,targetPosition:-h,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-h,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(h),r&&(s.emit("beforeTransitionStart",t,n),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(h),r&&(s.emit("beforeTransitionStart",t,n),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,r&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}const bC={getTranslate:fC,setTranslate:mC,minTranslate:gC,maxTranslate:vC,translateTo:yC};function wC(e,t){const r=this;r.params.cssMode||r.$wrapperEl.transition(e),r.emit("setTransition",e,t)}function Xg({swiper:e,runCallbacks:t,direction:r,step:i}){const{activeIndex:n,previousIndex:s}=e;let o=r;if(o||(n>s?o="next":n<s?o="prev":o="reset"),e.emit(`transition${i}`),t&&n!==s){if(o==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function _C(e=!0,t){const r=this,{params:i}=r;i.cssMode||(i.autoHeight&&r.updateAutoHeight(),Xg({swiper:r,runCallbacks:e,direction:t,step:"Start"}))}function xC(e=!0,t){const r=this,{params:i}=r;r.animating=!1,!i.cssMode&&(r.setTransition(0),Xg({swiper:r,runCallbacks:e,direction:t,step:"End"}))}const kC={setTransition:wC,transitionStart:_C,transitionEnd:xC};function SC(e=0,t=this.params.speed,r=!0,i,n){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const b=parseInt(e,10);if(!isFinite(b))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=b}const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:h,activeIndex:d,rtlTranslate:p,wrapperEl:g,enabled:y}=s;if(s.animating&&l.preventInteractionOnTransition||!y&&!i&&!n)return!1;const w=Math.min(s.params.slidesPerGroupSkip,o);let k=w+Math.floor((o-w)/s.params.slidesPerGroup);k>=a.length&&(k=a.length-1);const v=-a[k];if(l.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const _=-Math.floor(v*100),x=Math.floor(c[b]*100),S=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?_>=x&&_<S-(S-x)/2?o=b:_>=x&&_<S&&(o=b+1):_>=x&&(o=b)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(d||0)!==o))return!1;o!==(h||0)&&r&&s.emit("beforeSlideChangeStart"),s.updateProgress(v);let f;if(o>d?f="next":o<d?f="prev":f="reset",p&&-v===s.translate||!p&&v===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(v),f!=="reset"&&(s.transitionStart(r,f),s.transitionEnd(r,f)),!1;if(l.cssMode){const b=s.isHorizontal(),_=p?v:-v;if(t===0){const x=s.virtual&&s.params.virtual.enabled;x&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),g[b?"scrollLeft":"scrollTop"]=_,x&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return qg({swiper:s,targetPosition:_,side:b?"left":"top"}),!0;g.scrollTo({[b?"left":"top"]:_,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(r,f),t===0?s.transitionEnd(r,f):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(_){!s||s.destroyed||_.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(r,f))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0}function CC(e=0,t=this.params.speed,r=!0,i){if(typeof e=="string"){const o=parseInt(e,10);if(!isFinite(o))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=o}const n=this;let s=e;return n.params.loop&&(s+=n.loopedSlides),n.slideTo(s,t,r,i)}function $C(e=this.params.speed,t=!0,r){const i=this,{animating:n,enabled:s,params:o}=i;if(!s)return i;let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<o.slidesPerGroupSkip?1:l;if(o.loop){if(n&&o.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return o.rewind&&i.isEnd?i.slideTo(0,e,t,r):i.slideTo(i.activeIndex+a,e,t,r)}function EC(e=this.params.speed,t=!0,r){const i=this,{params:n,animating:s,snapGrid:o,slidesGrid:l,rtlTranslate:a,enabled:c}=i;if(!c)return i;if(n.loop){if(s&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}const h=a?i.translate:-i.translate;function d(k){return k<0?-Math.floor(Math.abs(k)):Math.floor(k)}const p=d(h),g=o.map(k=>d(k));let y=o[g.indexOf(p)-1];if(typeof y>"u"&&n.cssMode){let k;o.forEach((v,f)=>{p>=v&&(k=f)}),typeof k<"u"&&(y=o[k>0?k-1:k])}let w=0;if(typeof y<"u"&&(w=l.indexOf(y),w<0&&(w=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(w=w-i.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),n.rewind&&i.isBeginning){const k=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(k,e,t,r)}return i.slideTo(w,e,t,r)}function TC(e=this.params.speed,t=!0,r){const i=this;return i.slideTo(i.activeIndex,e,t,r)}function zC(e=this.params.speed,t=!0,r,i=.5){const n=this;let s=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[l]){const c=n.snapGrid[l],h=n.snapGrid[l+1];a-c>(h-c)*i&&(s+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],h=n.snapGrid[l];a-c<=(h-c)*i&&(s-=n.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,n.slidesGrid.length-1),n.slideTo(s,e,t,r)}function AC(){const e=this,{params:t,$wrapperEl:r}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.clickedIndex,s;if(t.loop){if(e.animating)return;s=parseInt(B(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?n<e.loopedSlides-i/2||n>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),n=r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ta(()=>{e.slideTo(n)})):e.slideTo(n):n>e.slides.length-i?(e.loopFix(),n=r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ta(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}const LC={slideTo:SC,slideToLoop:CC,slideNext:$C,slidePrev:EC,slideReset:TC,slideToClosest:zC,slideToClickedSlide:AC};function PC(){const e=this,t=tt(),{params:r,$wrapperEl:i}=e,n=i.children().length>0?B(i.children()[0].parentNode):i;n.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();let s=n.children(`.${r.slideClass}`);if(r.loopFillGroupWithBlank){const a=r.slidesPerGroup-s.length%r.slidesPerGroup;if(a!==r.slidesPerGroup){for(let c=0;c<a;c+=1){const h=B(t.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);n.append(h)}s=n.children(`.${r.slideClass}`)}}r.slidesPerView==="auto"&&!r.loopedSlides&&(r.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(r.loopedSlides||r.slidesPerView,10)),e.loopedSlides+=r.loopAdditionalSlides,e.loopedSlides>s.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=s.length);const o=[],l=[];s.each((a,c)=>{B(a).attr("data-swiper-slide-index",c)});for(let a=0;a<e.loopedSlides;a+=1){const c=a-Math.floor(a/s.length)*s.length;l.push(s.eq(c)[0]),o.unshift(s.eq(s.length-c-1)[0])}for(let a=0;a<l.length;a+=1)n.append(B(l[a].cloneNode(!0)).addClass(r.slideDuplicateClass));for(let a=o.length-1;a>=0;a-=1)n.prepend(B(o[a].cloneNode(!0)).addClass(r.slideDuplicateClass))}function IC(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:r,loopedSlides:i,allowSlidePrev:n,allowSlideNext:s,snapGrid:o,rtlTranslate:l}=e;let a;e.allowSlidePrev=!0,e.allowSlideNext=!0;const h=-o[t]-e.getTranslate();t<i?(a=r.length-i*3+t,a+=i,e.slideTo(a,0,!1,!0)&&h!==0&&e.setTranslate((l?-e.translate:e.translate)-h)):t>=r.length-i&&(a=-r.length+t+i,a+=i,e.slideTo(a,0,!1,!0)&&h!==0&&e.setTranslate((l?-e.translate:e.translate)-h)),e.allowSlidePrev=n,e.allowSlideNext=s,e.emit("loopFix")}function OC(){const e=this,{$wrapperEl:t,params:r,slides:i}=e;t.children(`.${r.slideClass}.${r.slideDuplicateClass},.${r.slideClass}.${r.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}const NC={loopCreate:PC,loopFix:IC,loopDestroy:OC};function MC(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const r=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;r.style.cursor="move",r.style.cursor=e?"grabbing":"grab"}function DC(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const RC={setGrabCursor:MC,unsetGrabCursor:DC};function FC(e,t=this){function r(i){if(!i||i===tt()||i===Ue())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return!n&&!i.getRootNode?null:n||r(i.getRootNode().host)}return r(t)}function BC(e){const t=this,r=tt(),i=Ue(),n=t.touchEventsData,{params:s,touches:o,enabled:l}=t;if(!l||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=e;a.originalEvent&&(a=a.originalEvent);let c=B(a.target);if(s.touchEventsTarget==="wrapper"&&!c.closest(t.wrapperEl).length||(n.isTouchEvent=a.type==="touchstart",!n.isTouchEvent&&"which"in a&&a.which===3)||!n.isTouchEvent&&"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const h=!!s.noSwipingClass&&s.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;h&&a.target&&a.target.shadowRoot&&d&&(c=B(d[0]));const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(a.target&&a.target.shadowRoot);if(s.noSwiping&&(g?FC(p,c[0]):c.closest(p)[0])){t.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler)[0])return;o.currentX=a.type==="touchstart"?a.targetTouches[0].pageX:a.pageX,o.currentY=a.type==="touchstart"?a.targetTouches[0].pageY:a.pageY;const y=o.currentX,w=o.currentY,k=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(k&&(y<=v||y>=i.innerWidth-v))if(k==="prevent")e.preventDefault();else return;if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=y,o.startY=w,n.touchStartTime=Fs(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(n.allowThresholdMove=!1),a.type!=="touchstart"){let f=!0;c.is(n.focusableElements)&&(f=!1,c[0].nodeName==="SELECT"&&(n.isTouched=!1)),r.activeElement&&B(r.activeElement).is(n.focusableElements)&&r.activeElement!==c[0]&&r.activeElement.blur();const b=f&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||b)&&!c[0].isContentEditable&&a.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function VC(e){const t=tt(),r=this,i=r.touchEventsData,{params:n,touches:s,rtlTranslate:o,enabled:l}=r;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&r.emit("touchMoveOpposite",a);return}if(i.isTouchEvent&&a.type!=="touchmove")return;const c=a.type==="touchmove"&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),h=a.type==="touchmove"?c.pageX:a.pageX,d=a.type==="touchmove"?c.pageY:a.pageY;if(a.preventedByNestedSwiper){s.startX=h,s.startY=d;return}if(!r.allowTouchMove){B(a.target).is(i.focusableElements)||(r.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:h,startY:d,currentX:h,currentY:d}),i.touchStartTime=Fs());return}if(i.isTouchEvent&&n.touchReleaseOnEdges&&!n.loop){if(r.isVertical()){if(d<s.startY&&r.translate<=r.maxTranslate()||d>s.startY&&r.translate>=r.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(h<s.startX&&r.translate<=r.maxTranslate()||h>s.startX&&r.translate>=r.minTranslate())return}if(i.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&B(a.target).is(i.focusableElements)){i.isMoved=!0,r.allowClick=!1;return}if(i.allowTouchCallbacks&&r.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;s.currentX=h,s.currentY=d;const p=s.currentX-s.startX,g=s.currentY-s.startY;if(r.params.threshold&&Math.sqrt(p**2+g**2)<r.params.threshold)return;if(typeof i.isScrolling>"u"){let v;r.isHorizontal()&&s.currentY===s.startY||r.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+g*g>=25&&(v=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,i.isScrolling=r.isHorizontal()?v>n.touchAngle:90-v>n.touchAngle)}if(i.isScrolling&&r.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;r.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation(),i.isMoved||(n.loop&&!n.cssMode&&r.loopFix(),i.startTranslate=r.getTranslate(),r.setTransition(0),r.animating&&r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,n.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",a)),r.emit("sliderMove",a),i.isMoved=!0;let y=r.isHorizontal()?p:g;s.diff=y,y*=n.touchRatio,o&&(y=-y),r.swipeDirection=y>0?"prev":"next",i.currentTranslate=y+i.startTranslate;let w=!0,k=n.resistanceRatio;if(n.touchReleaseOnEdges&&(k=0),y>0&&i.currentTranslate>r.minTranslate()?(w=!1,n.resistance&&(i.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+i.startTranslate+y)**k)):y<0&&i.currentTranslate<r.maxTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-i.startTranslate-y)**k)),w&&(a.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(y)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=r.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&r.freeMode||n.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),r.params.freeMode&&n.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(i.currentTranslate),r.setTranslate(i.currentTranslate))}function jC(e){const t=this,r=t.touchEventsData,{params:i,touches:n,rtlTranslate:s,slidesGrid:o,enabled:l}=t;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),r.allowTouchCallbacks&&t.emit("touchEnd",a),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&i.grabCursor&&t.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}i.grabCursor&&r.isMoved&&r.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Fs(),h=c-r.touchStartTime;if(t.allowClick){const f=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(f&&f[0]||a.target),t.emit("tap click",a),h<300&&c-r.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(r.lastClickTime=Fs(),Ta(()=>{t.destroyed||(t.allowClick=!0)}),!r.isTouched||!r.isMoved||!t.swipeDirection||n.diff===0||r.currentTranslate===r.startTranslate){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let d;if(i.followFinger?d=s?t.translate:-t.translate:d=-r.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let p=0,g=t.slidesSizesGrid[0];for(let f=0;f<o.length;f+=f<i.slidesPerGroupSkip?1:i.slidesPerGroup){const b=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof o[f+b]<"u"?d>=o[f]&&d<o[f+b]&&(p=f,g=o[f+b]-o[f]):d>=o[f]&&(p=f,g=o[o.length-1]-o[o.length-2])}let y=null,w=null;i.rewind&&(t.isBeginning?w=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const k=(d-o[p])/g,v=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(h>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(k>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?y:p+v):t.slideTo(p)),t.swipeDirection==="prev"&&(k>1-i.longSwipesRatio?t.slideTo(p+v):w!==null&&k<0&&Math.abs(k)>i.longSwipesRatio?t.slideTo(w):t.slideTo(p))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:p+v),t.swipeDirection==="prev"&&t.slideTo(w!==null?w:p))}}function Tp(){const e=this,{params:t,el:r}=e;if(r&&r.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function HC(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function UC(){const e=this,{wrapperEl:t,rtlTranslate:r,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const s=e.maxTranslate()-e.minTranslate();s===0?n=0:n=(e.translate-e.minTranslate())/s,n!==e.progress&&e.updateProgress(r?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let zp=!1;function WC(){}const Qg=(e,t)=>{const r=tt(),{params:i,touchEvents:n,el:s,wrapperEl:o,device:l,support:a}=e,c=!!i.nested,h=t==="on"?"addEventListener":"removeEventListener",d=t;if(!a.touch)s[h](n.start,e.onTouchStart,!1),r[h](n.move,e.onTouchMove,c),r[h](n.end,e.onTouchEnd,!1);else{const p=n.start==="touchstart"&&a.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;s[h](n.start,e.onTouchStart,p),s[h](n.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:c}:c),s[h](n.end,e.onTouchEnd,p),n.cancel&&s[h](n.cancel,e.onTouchEnd,p)}(i.preventClicks||i.preventClicksPropagation)&&s[h]("click",e.onClick,!0),i.cssMode&&o[h]("scroll",e.onScroll),i.updateOnWindowResize?e[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Tp,!0):e[d]("observerUpdate",Tp,!0)};function GC(){const e=this,t=tt(),{params:r,support:i}=e;e.onTouchStart=BC.bind(e),e.onTouchMove=VC.bind(e),e.onTouchEnd=jC.bind(e),r.cssMode&&(e.onScroll=UC.bind(e)),e.onClick=HC.bind(e),i.touch&&!zp&&(t.addEventListener("touchstart",WC),zp=!0),Qg(e,"on")}function KC(){Qg(this,"off")}const qC={attachEvents:GC,detachEvents:KC},Ap=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function YC(){const e=this,{activeIndex:t,initialized:r,loopedSlides:i=0,params:n,$el:s}=e,o=n.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const c=(l in o?o[l]:void 0)||e.originalParams,h=Ap(e,n),d=Ap(e,c),p=n.enabled;h&&!d?(s.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&d&&(s.addClass(`${n.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&n.grid.fill==="column")&&s.addClass(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(k=>{const v=n[k]&&n[k].enabled,f=c[k]&&c[k].enabled;v&&!f&&e[k].disable(),!v&&f&&e[k].enable()});const g=c.direction&&c.direction!==n.direction,y=n.loop&&(c.slidesPerView!==n.slidesPerView||g);g&&r&&e.changeDirection(),_t(e.params,c);const w=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!w?e.disable():!p&&w&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),y&&r&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",c)}function XC(e,t="window",r){if(!e||t==="container"&&!r)return;let i=!1;const n=Ue(),s=t==="window"?n.innerHeight:r.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:c}=o[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=a):c<=r.clientWidth&&(i=a)}return i||"max"}const QC={setBreakpoint:YC,getBreakpoint:XC};function ZC(e,t){const r=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&r.push(t+n)}):typeof i=="string"&&r.push(t+i)}),r}function JC(){const e=this,{classNames:t,params:r,rtl:i,$el:n,device:s,support:o}=e,l=ZC(["initialized",r.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:i},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);t.push(...l),n.addClass([...t].join(" ")),e.emitContainerClasses()}function e$(){const e=this,{$el:t,classNames:r}=e;t.removeClass(r.join(" ")),e.emitContainerClasses()}const t$={addClasses:JC,removeClasses:e$};function r$(e,t,r,i,n,s){const o=Ue();let l;function a(){s&&s()}!B(e).parent("picture")[0]&&(!e.complete||!n)&&t?(l=new o.Image,l.onload=a,l.onerror=a,i&&(l.sizes=i),r&&(l.srcset=r),t&&(l.src=t)):a()}function i$(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let r=0;r<e.imagesToLoad.length;r+=1){const i=e.imagesToLoad[r];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}const n$={loadImage:r$,preloadImages:i$};function s$(){const e=this,{isLocked:t,params:r}=e,{slidesOffsetBefore:i}=r;if(i){const n=e.slides.length-1,s=e.slidesGrid[n]+e.slidesSizesGrid[n]+i*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;r.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),r.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const o$={checkOverflow:s$},Lp={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function a$(e,t){return function(i={}){const n=Object.keys(i)[0],s=i[n];if(typeof s!="object"||s===null){_t(t,i);return}if(["navigation","pagination","scrollbar"].indexOf(n)>=0&&e[n]===!0&&(e[n]={auto:!0}),!(n in e&&"enabled"in s)){_t(t,i);return}e[n]===!0&&(e[n]={enabled:!0}),typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),_t(t,i)}}const Kl={eventsEmitter:iC,update:pC,translate:bC,transition:kC,slide:LC,loop:NC,grabCursor:RC,events:qC,breakpoints:QC,checkOverflow:o$,classes:t$,images:n$},ql={};let wn=class fr{constructor(...t){let r,i;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?i=t[0]:[r,i]=t,i||(i={}),i=_t({},i),r&&!i.el&&(i.el=r),i.el&&B(i.el).length>1){const l=[];return B(i.el).each(a=>{const c=_t({},i,{el:a});l.push(new fr(c))}),l}const n=this;n.__swiper__=!0,n.support=Yg(),n.device=Z2({userAgent:i.userAgent}),n.browser=eC(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&n.modules.push(...i.modules);const s={};n.modules.forEach(l=>{l({swiper:n,extendParams:a$(i,s),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const o=_t({},Lp,s);return n.params=_t({},o,ql,i),n.originalParams=_t({},n.params),n.passedParams=_t({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=B,Object.assign(n,{enabled:n.params.enabled,el:r,classNames:[],slides:B(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:function(){const a=["touchstart","touchmove","touchend","touchcancel"],c=["pointerdown","pointermove","pointerup"];return n.touchEventsTouch={start:a[0],move:a[1],end:a[2],cancel:a[3]},n.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:Fs(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,r){const i=this;t=Math.min(Math.max(t,0),1);const n=i.minTranslate(),o=(i.maxTranslate()-n)*t+n;i.translateTo(o,typeof r>"u"?0:r),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",r.join(" "))}getSlideClasses(t){const r=this;return r.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=[];t.slides.each(i=>{const n=t.getSlideClasses(i);r.push({slideEl:i,classNames:n}),t.emit("_slideClass",i,n)}),t.emit("_slideClasses",r)}slidesPerViewDynamic(t="current",r=!1){const i=this,{params:n,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:c}=i;let h=1;if(n.centeredSlides){let d=s[c].swiperSlideSize,p;for(let g=c+1;g<s.length;g+=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,h+=1,d>a&&(p=!0));for(let g=c-1;g>=0;g-=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,h+=1,d>a&&(p=!0))}else if(t==="current")for(let d=c+1;d<s.length;d+=1)(r?o[d]+l[d]-o[c]<a:o[d]-o[c]<a)&&(h+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<a&&(h+=1);return h}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:r,params:i}=t;i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;t.params.freeMode&&t.params.freeMode.enabled?(n(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?s=t.slideTo(t.slides.length-1,0,!1,!0):s=t.slideTo(t.activeIndex,0,!1,!0),s||n()),i.watchOverflow&&r!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,r=!0){const i=this,n=i.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.each(s=>{t==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),r&&i.update()),i}changeLanguageDirection(t){const r=this;r.rtl&&t==="rtl"||!r.rtl&&t==="ltr"||(r.rtl=t==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.$el.addClass(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.$el.removeClass(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(t){const r=this;if(r.mounted)return!0;const i=B(t||r.params.el);if(t=i[0],!t)return!1;t.swiper=r;const n=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const l=B(t.shadowRoot.querySelector(n()));return l.children=a=>i.children(a),l}return i.children?i.children(n()):B(i).children(n())})();if(o.length===0&&r.params.createElements){const a=tt().createElement("div");o=B(a),a.className=r.params.wrapperClass,i.append(a),i.children(`.${r.params.slideClass}`).each(c=>{o.append(c)})}return Object.assign(r,{$el:i,el:t,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:o.css("display")==="-webkit-box"}),!0}init(t){const r=this;return r.initialized||r.mount(t)===!1||(r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.params.loop&&r.loopCreate(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.preloadImages&&r.preloadImages(),r.params.loop?r.slideTo(r.params.initialSlide+r.loopedSlides,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.attachEvents(),r.initialized=!0,r.emit("init"),r.emit("afterInit")),r}destroy(t=!0,r=!0){const i=this,{params:n,$el:s,$wrapperEl:o,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),r&&(i.removeClasses(),s.removeAttr("style"),o.removeAttr("style"),l&&l.length&&l.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),t!==!1&&(i.$el[0].swiper=null,G2(i)),i.destroyed=!0),null}static extendDefaults(t){_t(ql,t)}static get extendedDefaults(){return ql}static get defaults(){return Lp}static installModule(t){fr.prototype.__modules__||(fr.prototype.__modules__=[]);const r=fr.prototype.__modules__;typeof t=="function"&&r.indexOf(t)<0&&r.push(t)}static use(t){return Array.isArray(t)?(t.forEach(r=>fr.installModule(r)),fr):(fr.installModule(t),fr)}};Object.keys(Kl).forEach(e=>{Object.keys(Kl[e]).forEach(t=>{wn.prototype[t]=Kl[e][t]})});wn.use([tC,rC]);function l$({swiper:e,extendParams:t,on:r,emit:i}){let n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const w=e.slides.eq(e.activeIndex);let k=e.params.autoplay.delay;w.attr("data-swiper-autoplay")&&(k=w.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=Ta(()=>{let v;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),v=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(v=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(v=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),v=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(v=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(v=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||v===!1)&&s()},k)}function o(){return typeof n<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,i("autoplayStart"),s(),!0)}function l(){return!e.autoplay.running||typeof n>"u"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,i("autoplayStop"),!0)}function a(w){e.autoplay.running&&(e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,w===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(k=>{e.$wrapperEl[0].addEventListener(k,h)})))}function c(){const w=tt();w.visibilityState==="hidden"&&e.autoplay.running&&a(),w.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function h(w){!e||e.destroyed||!e.$wrapperEl||w.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(k=>{e.$wrapperEl[0].removeEventListener(k,h)}),e.autoplay.paused=!1,e.autoplay.running?s():l())}function d(){e.params.autoplay.disableOnInteraction?l():(i("autoplayPause"),a()),["transitionend","webkitTransitionEnd"].forEach(w=>{e.$wrapperEl[0].removeEventListener(w,h)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,i("autoplayResume"),s())}function g(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",d),e.$el.on("mouseleave",p))}function y(){e.$el.off("mouseenter",d),e.$el.off("mouseleave",p)}r("init",()=>{e.params.autoplay.enabled&&(o(),tt().addEventListener("visibilitychange",c),g())}),r("beforeTransitionStart",(w,k,v)=>{e.autoplay.running&&(v||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(k):l())}),r("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():a())}),r("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),r("destroy",()=>{y(),e.autoplay.running&&l(),tt().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:a,run:s,start:o,stop:l})}function Pi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Vr(e,t){const r=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>r.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:Pi(t[i])&&Pi(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:Vr(e[i],t[i]):e[i]=t[i]})}function Zg(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Jg(e={}){return e.pagination&&typeof e.pagination.el>"u"}function e0(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function t0(e=""){const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),r=[];return t.forEach(i=>{r.indexOf(i)<0&&r.push(i)}),r.join(" ")}const r0=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function c$(e={},t=!0){const r={on:{}},i={},n={};Vr(r,wn.defaults),Vr(r,wn.extendedDefaults),r._emitClasses=!0,r.init=!1;const s={},o=r0.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?Pi(e[a])?(r[a]={},n[a]={},Vr(r[a],e[a]),Vr(n[a],e[a])):(r[a]=e[a],n[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?i[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:r.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{r[a]===!0&&(r[a]={}),r[a]===!1&&delete r[a]}),{params:r,passedParams:n,rest:s,events:i}}function u$({el:e,nextEl:t,prevEl:r,paginationEl:i,scrollbarEl:n,swiper:s},o){Zg(o)&&t&&r&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=r,s.originalParams.navigation.prevEl=r),Jg(o)&&i&&(s.params.pagination.el=i,s.originalParams.pagination.el=i),e0(o)&&n&&(s.params.scrollbar.el=n,s.originalParams.scrollbar.el=n),s.init(e)}const i0=(e,t)=>{let r=t.slidesPerView;if(t.breakpoints){const n=wn.prototype.getBreakpoint(t.breakpoints),s=n in t.breakpoints?t.breakpoints[n]:void 0;s&&s.slidesPerView&&(r=s.slidesPerView)}let i=Math.ceil(parseFloat(t.loopedSlides||r,10));return i+=t.loopAdditionalSlides,i>e.length&&t.loopedSlidesLimit&&(i=e.length),i};function d$(e,t,r){const i=t.map((a,c)=>ce.cloneElement(a,{swiper:e,"data-swiper-slide-index":c}));function n(a,c,h){return ce.cloneElement(a,{key:`${a.key}-duplicate-${c}-${h}`,className:`${a.props.className||""} ${r.slideDuplicateClass}`})}if(r.loopFillGroupWithBlank){const a=r.slidesPerGroup-i.length%r.slidesPerGroup;if(a!==r.slidesPerGroup)for(let c=0;c<a;c+=1){const h=ce.createElement("div",{className:`${r.slideClass} ${r.slideBlankClass}`});i.push(h)}}r.slidesPerView==="auto"&&!r.loopedSlides&&(r.loopedSlides=i.length);const s=i0(i,r),o=[],l=[];for(let a=0;a<s;a+=1){const c=a-Math.floor(a/i.length)*i.length;l.push(n(i[c],a,"append")),o.unshift(n(i[i.length-c-1],a,"prepend"))}return e&&(e.loopedSlides=s),[...o,...i,...l]}function h$(e,t,r,i,n){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(r&&i){const a=i.map(n),c=r.map(n);a.join("")!==c.join("")&&o("children"),i.length!==r.length&&o("children")}return r0.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(Pi(e[a])&&Pi(t[a])){const c=Object.keys(e[a]),h=Object.keys(t[a]);c.length!==h.length?o(a):(c.forEach(d=>{e[a][d]!==t[a][d]&&o(a)}),h.forEach(d=>{e[a][d]!==t[a][d]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}function n0(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function s0(e){const t=[];return ce.Children.toArray(e).forEach(r=>{n0(r)?t.push(r):r.props&&r.props.children&&s0(r.props.children).forEach(i=>t.push(i))}),t}function p$(e){const t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ce.Children.toArray(e).forEach(i=>{if(n0(i))t.push(i);else if(i.props&&i.props.slot&&r[i.props.slot])r[i.props.slot].push(i);else if(i.props&&i.props.children){const n=s0(i.props.children);n.length>0?n.forEach(s=>t.push(s)):r["container-end"].push(i)}else r["container-end"].push(i)}),{slides:t,slots:r}}function f$({swiper:e,slides:t,passedParams:r,changedParams:i,nextEl:n,prevEl:s,scrollbarEl:o,paginationEl:l}){const a=i.filter(x=>x!=="children"&&x!=="direction"),{params:c,pagination:h,navigation:d,scrollbar:p,virtual:g,thumbs:y}=e;let w,k,v,f,b;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(k=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&h&&!h.el&&(v=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&p&&!p.el&&(f=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||n)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(b=!0);const _=x=>{e[x]&&(e[x].destroy(),x==="navigation"?(c[x].prevEl=void 0,c[x].nextEl=void 0,e[x].prevEl=void 0,e[x].nextEl=void 0):(c[x].el=void 0,e[x].el=void 0))};a.forEach(x=>{if(Pi(c[x])&&Pi(r[x]))Vr(c[x],r[x]);else{const S=r[x];(S===!0||S===!1)&&(x==="navigation"||x==="pagination"||x==="scrollbar")?S===!1&&_(x):c[x]=r[x]}}),a.includes("controller")&&!k&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),i.includes("children")&&t&&g&&c.virtual.enabled?(g.slides=t,g.update(!0)):i.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),w&&y.init()&&y.update(!0),k&&(e.controller.control=c.controller.control),v&&(l&&(c.pagination.el=l),h.init(),h.render(),h.update()),f&&(o&&(c.scrollbar.el=o),p.init(),p.updateSize(),p.setTranslate()),b&&(n&&(c.navigation.nextEl=n),s&&(c.navigation.prevEl=s),d.init(),d.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),e.update()}function m$(e,t,r){if(!r)return null;const i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`};return t.filter((n,s)=>s>=r.from&&s<=r.to).map(n=>ce.cloneElement(n,{swiper:e,style:i}))}const g$=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ms(e,t){return typeof window>"u"?Y.useEffect(e,t):Y.useLayoutEffect(e,t)}const v$=Y.createContext(null),y$=Y.createContext(null);function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},lu.apply(this,arguments)}const o0=Y.forwardRef(function(e,t){let{className:r,tag:i="div",wrapperTag:n="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[c,h]=Y.useState("swiper"),[d,p]=Y.useState(null),[g,y]=Y.useState(!1),w=Y.useRef(!1),k=Y.useRef(null),v=Y.useRef(null),f=Y.useRef(null),b=Y.useRef(null),_=Y.useRef(null),x=Y.useRef(null),S=Y.useRef(null),E=Y.useRef(null),{params:$,passedParams:P,rest:C,events:N}=c$(l),{slides:D,slots:te}=p$(s),le=()=>{y(!g)};Object.assign($.on,{_containerClasses(V,q){h(q)}});const ye=()=>{if(Object.assign($.on,N),a=!0,v.current=new wn($),v.current.loopCreate=()=>{},v.current.loopDestroy=()=>{},$.loop&&(v.current.loopedSlides=i0(D,$)),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=D;const V={cache:!1,slides:D,renderExternal:p,renderExternalUpdate:!1};Vr(v.current.params.virtual,V),Vr(v.current.originalParams.virtual,V)}};k.current||ye(),v.current&&v.current.on("_beforeBreakpoint",le);const Oe=()=>{a||!N||!v.current||Object.keys(N).forEach(V=>{v.current.on(V,N[V])})},We=()=>{!N||!v.current||Object.keys(N).forEach(V=>{v.current.off(V,N[V])})};Y.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",le)}),Y.useEffect(()=>{!w.current&&v.current&&(v.current.emitSlidesClasses(),w.current=!0)}),ms(()=>{if(t&&(t.current=k.current),!!k.current)return v.current.destroyed&&ye(),u$({el:k.current,nextEl:_.current,prevEl:x.current,paginationEl:S.current,scrollbarEl:E.current,swiper:v.current},$),o&&o(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),ms(()=>{Oe();const V=h$(P,f.current,D,b.current,q=>q.key);return f.current=P,b.current=D,V.length&&v.current&&!v.current.destroyed&&f$({swiper:v.current,slides:D,passedParams:P,changedParams:V,nextEl:_.current,prevEl:x.current,scrollbarEl:E.current,paginationEl:S.current}),()=>{We()}}),ms(()=>{g$(v.current)},[d]);function O(){return $.virtual?m$(v.current,D,d):!$.loop||v.current&&v.current.destroyed?D.map(V=>ce.cloneElement(V,{swiper:v.current})):d$(v.current,D,$)}return ce.createElement(i,lu({ref:k,className:t0(`${c}${r?` ${r}`:""}`)},C),ce.createElement(y$.Provider,{value:v.current},te["container-start"],ce.createElement(n,{className:"swiper-wrapper"},te["wrapper-start"],O(),te["wrapper-end"]),Zg($)&&ce.createElement(ce.Fragment,null,ce.createElement("div",{ref:x,className:"swiper-button-prev"}),ce.createElement("div",{ref:_,className:"swiper-button-next"})),e0($)&&ce.createElement("div",{ref:E,className:"swiper-scrollbar"}),Jg($)&&ce.createElement("div",{ref:S,className:"swiper-pagination"}),te["container-end"]))});o0.displayName="Swiper";function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},cu.apply(this,arguments)}const fi=Y.forwardRef(function(e,t){let{tag:r="div",children:i,className:n="",swiper:s,zoom:o,virtualIndex:l,...a}=e===void 0?{}:e;const c=Y.useRef(null),[h,d]=Y.useState("swiper-slide");function p(w,k,v){k===c.current&&d(v)}ms(()=>{if(t&&(t.current=c.current),!(!c.current||!s)){if(s.destroyed){h!=="swiper-slide"&&d("swiper-slide");return}return s.on("_slideClass",p),()=>{s&&s.off("_slideClass",p)}}}),ms(()=>{s&&c.current&&!s.destroyed&&d(s.getSlideClasses(c.current))},[s]);const g={isActive:h.indexOf("swiper-slide-active")>=0||h.indexOf("swiper-slide-duplicate-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isDuplicate:h.indexOf("swiper-slide-duplicate")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0||h.indexOf("swiper-slide-duplicate-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0||h.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof i=="function"?i(g):i;return ce.createElement(r,cu({ref:c,className:t0(`${h}${n?` ${n}`:""}`),"data-swiper-slide-index":l},a),ce.createElement(v$.Provider,{value:g},o?ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},y()):y()))});fi.displayName="SwiperSlide";function b$({lightMode:e,fontIncreased:t}){const[r,i]=Y.useState(!1);function n(){i(!0),setTimeout(function(){i(!1)},3250)}const s={transform:"rotate(1turn) scale(0.4)",transition:"all 3.25s",borderRadius:"50%"},o={backgroundColor:"black",color:"white"},l={backgroundColor:"white",color:"black"};return T.jsx(T.Fragment,{children:T.jsxs("main",{className:"fade-in-hero",children:[T.jsxs("section",{className:"hero__first",children:[T.jsx("div",{onClick:n,style:r?s:{display:"block"},className:e?"hero__profile hero__profile__pic--dark light pointer":"hero__profile hero__profile__pic--light light pointer",children:T.jsx(Wg,{name:"flash",duration:4e3,play:!0,children:T.jsx("span",{className:"hero__tap hover",children:r?"":"← Tap!"})})}),T.jsxs("div",{className:"hero__text",children:[T.jsx("div",{className:"hero__name",style:{fontSize:t?"var(--name-increased)":"var(--name-default)"},children:"Stepan Serov"}),T.jsx("span",{className:"hero__position",style:{fontSize:t?"var(--position-increased)":"var(--position-default)"},children:"React Sorcery in the Making "})]})]}),T.jsx("section",{className:"hero__second",children:T.jsxs(o0,{className:"sample-slider",loop:!0,modules:[l$],autoplay:{delay:0},slidesPerView:6,speed:7e3,children:[T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover",icon:"mdi:language-css3",width:"32",height:"32"})}),T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover rotate",icon:"mdi:react",width:"32",height:"32"})}),T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover",icon:"mdi:language-javascript",width:"32",height:"32"})}),T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover",icon:"mdi:language-typescript",width:"32",height:"32"})}),T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover",icon:"mdi:git",width:"32",height:"32"})}),T.jsx(fi,{children:T.jsx(It,{className:"sample-item hover",icon:"mdi:language-html5",width:"32",height:"32"})})]})}),T.jsxs("section",{className:"hero__third",children:[T.jsx("h2",{className:"hero__projects-title",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Latest projects"}),T.jsxs("div",{className:"hero__projects",children:[T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Personal"}),T.jsx("p",{children:"Sandbox & playground"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Mode/font changer"}),T.jsx("li",{children:"CSS Animations"}),T.jsx("li",{children:"Skeleton"}),T.jsx("li",{children:"Custom components"})]}),T.jsx("a",{href:"https://github.com/ste1v0/personal",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"VK Frontend Challenge"}),T.jsx("p",{children:"Infinite cats feed"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Favorites"}),T.jsx("li",{children:"Lazyloading"}),T.jsx("li",{children:"Loader"})]}),T.jsx("a",{href:"https://github.com/ste1v0/frontend-challenge",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Boxd"}),T.jsx("p",{children:"Games database"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Hotkeys"}),T.jsx("li",{children:"Loader"})]}),T.jsx("a",{href:"https://github.com/ste1v0/boxd",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Gaming News"}),T.jsx("p",{children:"All things related to gaming gathered from 4 different RSS feeds"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Mode/font changer"}),T.jsx("li",{children:"Mobile toggler"})]}),T.jsx("a",{href:"https://github.com/ste1v0/gaming-news",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]})]})]}),T.jsxs("section",{className:"hero__fourth",children:[T.jsx("h2",{className:"hero__contacts-title",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Contacts"}),T.jsxs("div",{className:"hero__contacts",children:[T.jsx("div",{style:e?o:l,className:"hero__contact-item scale",children:T.jsx("a",{href:"https://ste1v0.dev/serov_frontend.pdf",target:"_blank",rel:"noreferrer",children:T.jsx(It,{icon:"vscode-icons:file-type-pdf2",width:"96",height:"96"})})}),T.jsx("div",{style:e?o:l,className:"hero__contact-item scale",children:T.jsx("a",{href:"https://t.me/ste1v0",target:"_blank",rel:"noreferrer",children:T.jsx(It,{icon:"logos:telegram",width:"96",height:"96"})})})]})]})]})})}var a0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=n(s,i(l)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)t.call(s,l)&&s[l]&&(o=n(o,l));return o}function n(s,o){return o?s?s+" "+o:s+o:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(a0);var w$=a0.exports;const el=Ip(w$),_$=["xxl","xl","lg","md","sm","xs"],x$="xs",Cd=Y.createContext({prefixes:{},breakpoints:_$,minBreakpoint:x$});function $d(e,t){const{prefixes:r}=Y.useContext(Cd);return e||r[t]||t}function k$(){const{breakpoints:e}=Y.useContext(Cd);return e}function S$(){const{minBreakpoint:e}=Y.useContext(Cd);return e}function l0({as:e,bsPrefix:t,className:r,...i}){t=$d(t,"col");const n=k$(),s=S$(),o=[],l=[];return n.forEach(a=>{const c=i[a];delete i[a];let h,d,p;typeof c=="object"&&c!=null?{span:h,offset:d,order:p}=c:h=c;const g=a!==s?`-${a}`:"";h&&o.push(h===!0?`${t}${g}`:`${t}${g}-${h}`),p!=null&&l.push(`order${g}-${p}`),d!=null&&l.push(`offset${g}-${d}`)}),[{...i,className:el(r,...o,...l)},{as:e,bsPrefix:t,spans:o}]}const C$=Y.forwardRef((e,t)=>{const[{className:r,...i},{as:n="div",bsPrefix:s,spans:o}]=l0(e);return T.jsx(n,{...i,ref:t,className:el(r,!o.length&&s)})});C$.displayName="Col";function c0({animation:e,bg:t,bsPrefix:r,size:i,...n}){r=$d(r,"placeholder");const[{className:s,...o}]=l0(n);return{...o,className:el(s,e?`${r}-${e}`:r,i&&`${r}-${i}`,t&&`bg-${t}`)}}const $$=["as","disabled"];function E$(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function T$(e){return!e||e.trim()==="#"}function u0({tagName:e,disabled:t,href:r,target:i,rel:n,role:s,onClick:o,tabIndex:l=0,type:a}){e||(r!=null||i!=null||n!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:a||"button",disabled:t},c];const h=p=>{if((t||e==="a"&&T$(r))&&p.preventDefault(),t){p.stopPropagation();return}o==null||o(p)},d=p=>{p.key===" "&&(p.preventDefault(),h(p))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:e==="a"?i:void 0,"aria-disabled":t||void 0,rel:e==="a"?n:void 0,onClick:h,onKeyDown:d},c]}const z$=Y.forwardRef((e,t)=>{let{as:r,disabled:i}=e,n=E$(e,$$);const[s,{tagName:o}]=u0(Object.assign({tagName:r,disabled:i},n));return T.jsx(o,Object.assign({},n,s,{ref:t}))});z$.displayName="Button";const d0=Y.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:i,active:n=!1,disabled:s=!1,className:o,...l},a)=>{const c=$d(t,"btn"),[h,{tagName:d}]=u0({tagName:e,disabled:s,...l}),p=d;return T.jsx(p,{...h,...l,ref:a,disabled:s,className:el(o,c,n&&"active",r&&`${c}-${r}`,i&&`${c}-${i}`,l.href&&s&&"disabled")})});d0.displayName="Button";const A$=d0,h0=Y.forwardRef((e,t)=>{const r=c0(e);return T.jsx(A$,{...r,ref:t,disabled:!0,tabIndex:-1})});h0.displayName="PlaceholderButton";const L$=h0,p0=Y.forwardRef(({as:e="span",...t},r)=>{const i=c0(t);return T.jsx(e,{...i,ref:r})});p0.displayName="Placeholder";const Po=Object.assign(p0,{Button:L$});function P$({lightMode:e}){const[t,r]=Y.useState([]),[i,n]=Y.useState(!1),[s,o]=Y.useState(0),[l,a]=Y.useState("");function c(h){return`<sl-icon name="${["emoji-angry","emoji-frown","emoji-expressionless","emoji-smile","emoji-laughing"][h-1]}"></sl-icon>`}return Y.useEffect(function(){r([]),fetch("https://dog-api.kinduff.com/api/facts").then(h=>{if(!h.ok)throw new Error("Something is wrong with the API");return h.json()}).then(h=>{r(h.facts[0])})},[i]),T.jsxs("footer",{className:"fade-in-footer",children:[T.jsxs("div",{className:"footer__title-container",children:[T.jsx(It,{icon:"fluent-emoji:dog-face",className:"scale",width:"32",height:"32"}),T.jsx("div",{className:"footer__title capitalize",children:"Random dog fact"}),T.jsx("span",{onClick:()=>n(h=>!h),className:"material-symbols-outlined pointer hover rotate",children:"refresh"})]}),t.length>0?T.jsxs("div",{style:{border:e?"1px dashed black":"1px dashed white"},className:"footer__fact",children:[" ",t]}):T.jsxs(T.Fragment,{children:[T.jsxs(Po,{animation:"glow",children:[T.jsx(Po,{style:{width:"30vw"}})," "]}),T.jsxs(Po,{animation:"glow",children:[T.jsx(Po,{style:{width:"30vw",marginBottom:"2vh"}})," "]})]}),T.jsxs("div",{className:"footer__rating",children:[T.jsx("span",{children:"Rate this page"}),s?T.jsx(Wg,{name:"jackInTheBox",duration:1e3,iterations:1,play:!0,children:T.jsx("div",{children:"Thanks!"})}):T.jsx(n_,{className:e?`light rating--${l}`:`dark rating--${l}`,label:"Rating",getSymbol:c,onSlHover:()=>a("hovered"),onSlChange:()=>o(1)})]}),T.jsx("a",{href:"https://github.com/ste1v0",target:"_blank",rel:"noreferrer",children:T.jsx("div",{className:e?"footer__icons footer__github--dark pointer":"footer__icons footer__github--light pointer"})})]})}function I$(){const[e,t]=Y.useState(localStorage.getItem("font")==="true"),[r,i]=Y.useState(localStorage.getItem("mode")==="true");return T.jsxs("div",{style:{fontSize:e?"var(--increased)":"var(--default)",color:r?"black":"white"},className:r?"bg--light":"bg--dark",children:[T.jsx(jb,{lightMode:r,setLightMode:i,fontIncreased:e,setFontIncreased:t}),T.jsx(b$,{lightMode:r,fontIncreased:e}),T.jsx(P$,{lightMode:r})]})}eu("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");Yl.createRoot(document.getElementById("root")).render(T.jsx(T.Fragment,{children:T.jsx(I$,{})}));
