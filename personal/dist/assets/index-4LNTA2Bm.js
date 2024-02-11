function W0(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(i,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tf={exports:{}},Na={},rf={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=Symbol.for("react.element"),G0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),X0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),jd=Symbol.iterator;function rv(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,of={};function kn(e,t,r){this.props=e,this.context=t,this.refs=of,this.updater=r||nf}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function af(){}af.prototype=kn.prototype;function Su(e,t,r){this.props=e,this.context=t,this.refs=of,this.updater=r||nf}var Cu=Su.prototype=new af;Cu.constructor=Su;sf(Cu,kn.prototype);Cu.isPureReactComponent=!0;var Ud=Array.isArray,lf=Object.prototype.hasOwnProperty,$u={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,r){var i,n={},s=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)lf.call(t,i)&&!cf.hasOwnProperty(i)&&(n[i]=t[i]);var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)n[i]===void 0&&(n[i]=l[i]);return{$$typeof:Hs,type:e,key:s,ref:o,props:n,_owner:$u.current}}function iv(e,t){return{$$typeof:Hs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hs}function nv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Hd=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nv(""+e.key):t.toString(36)}function Do(e,t,r,i,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Hs:case G0:o=!0}}if(o)return o=e,n=n(o),e=i===""?"."+hl(o,0):i,Ud(n)?(r="",e!=null&&(r=e.replace(Hd,"$&/")+"/"),Do(n,t,r,"",function(c){return c})):n!=null&&(Eu(n)&&(n=iv(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(Hd,"$&/")+"/")+e)),t.push(n)),1;if(o=0,i=i===""?".":i+":",Ud(e))for(var l=0;l<e.length;l++){s=e[l];var a=i+hl(s,l);o+=Do(s,t,r,a,n)}else if(a=rv(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=i+hl(s,l++),o+=Do(s,t,r,a,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function co(e,t,r){if(e==null)return e;var i=[],n=0;return Do(e,i,"","",function(s){return t.call(r,s,n++)}),i}function sv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Ro={transition:null},ov={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:$u};Q.Children={map:co,forEach:function(e,t,r){co(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=kn;Q.Fragment=K0;Q.Profiler=X0;Q.PureComponent=Su;Q.StrictMode=q0;Q.Suspense=J0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;Q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=sf({},e.props),n=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$u.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)lf.call(t,a)&&!cf.hasOwnProperty(a)&&(i[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:Hs,type:e.type,key:n,ref:s,props:i,_owner:o}};Q.createContext=function(e){return e={$$typeof:Q0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y0,_context:e},e.Consumer=e};Q.createElement=uf;Q.createFactory=function(e){var t=uf.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Z0,render:e}};Q.isValidElement=Eu;Q.lazy=function(e){return{$$typeof:tv,_payload:{_status:-1,_result:e},_init:sv}};Q.memo=function(e,t){return{$$typeof:ev,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return at.current.useCallback(e,t)};Q.useContext=function(e){return at.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return at.current.useDeferredValue(e)};Q.useEffect=function(e,t){return at.current.useEffect(e,t)};Q.useId=function(){return at.current.useId()};Q.useImperativeHandle=function(e,t,r){return at.current.useImperativeHandle(e,t,r)};Q.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return at.current.useMemo(e,t)};Q.useReducer=function(e,t,r){return at.current.useReducer(e,t,r)};Q.useRef=function(e){return at.current.useRef(e)};Q.useState=function(e){return at.current.useState(e)};Q.useSyncExternalStore=function(e,t,r){return at.current.useSyncExternalStore(e,t,r)};Q.useTransition=function(){return at.current.useTransition()};Q.version="18.2.0";rf.exports=Q;var O=rf.exports;const ce=ef(O),U=W0({__proto__:null,default:ce},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=O,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,r){var i,n={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)uv.call(t,i)&&!hv.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:lv,type:e,key:s,ref:o,props:n,_owner:dv.current}}Na.Fragment=cv;Na.jsx=df;Na.jsxs=df;tf.exports=Na;var T=tf.exports,ac={},hf={exports:{}},Tt={},pf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,j){var X=N.length;N.push(j);e:for(;0<X;){var be=X-1>>>1,ze=N[be];if(0<n(ze,j))N[be]=j,N[X]=ze,X=be;else break e}}function r(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],X=N.pop();if(X!==j){N[0]=X;e:for(var be=0,ze=N.length,ao=ze>>>1;be<ao;){var ui=2*(be+1)-1,dl=N[ui],di=ui+1,lo=N[di];if(0>n(dl,X))di<ze&&0>n(lo,dl)?(N[be]=lo,N[di]=X,be=di):(N[be]=dl,N[ui]=X,be=ui);else if(di<ze&&0>n(lo,X))N[be]=lo,N[di]=X,be=di;else break e}}return j}function n(N,j){var X=N.sortIndex-j.sortIndex;return X!==0?X:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,d=null,p=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(N){for(var j=r(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=r(c)}}function x(N){if(w=!1,b(N),!y)if(r(a)!==null)y=!0,Ie(_);else{var j=r(c);j!==null&&We(x,j.startTime-N)}}function _(N,j){y=!1,w&&(w=!1,v($),$=-1),g=!0;var X=p;try{for(b(j),d=r(a);d!==null&&(!(d.expirationTime>j)||N&&!M());){var be=d.callback;if(typeof be=="function"){d.callback=null,p=d.priorityLevel;var ze=be(d.expirationTime<=j);j=e.unstable_now(),typeof ze=="function"?d.callback=ze:d===r(a)&&i(a),b(j)}else i(a);d=r(a)}if(d!==null)var ao=!0;else{var ui=r(c);ui!==null&&We(x,ui.startTime-j),ao=!1}return ao}finally{d=null,p=X,g=!1}}var S=!1,E=null,$=-1,P=5,C=-1;function M(){return!(e.unstable_now()-C<P)}function R(){if(E!==null){var N=e.unstable_now();C=N;var j=!0;try{j=E(!0,N)}finally{j?te():(S=!1,E=null)}}else S=!1}var te;if(typeof f=="function")te=function(){f(R)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ye=le.port2;le.port1.onmessage=R,te=function(){ye.postMessage(null)}}else te=function(){k(R,0)};function Ie(N){E=N,S||(S=!0,te())}function We(N,j){$=k(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ie(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var X=p;p=j;try{return N()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=p;p=N;try{return j()}finally{p=X}},e.unstable_scheduleCallback=function(N,j,X){var be=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?be+X:be):X=be,N){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=X+ze,N={id:h++,callback:j,priorityLevel:N,startTime:X,expirationTime:ze,sortIndex:-1},X>be?(N.sortIndex=X,t(c,N),r(a)===null&&N===r(c)&&(w?(v($),$=-1):w=!0,We(x,X-be))):(N.sortIndex=ze,t(a,N),y||g||(y=!0,Ie(_))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var j=p;return function(){var X=p;p=j;try{return N.apply(this,arguments)}finally{p=X}}}})(ff);pf.exports=ff;var pv=pf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=O,Et=pv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gf=new Set,bs={};function Ni(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(bs[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wd={},Gd={};function mv(e){return lc.call(Gd,e)?!0:lc.call(Wd,e)?!1:fv.test(e)?Gd[e]=!0:(Wd[e]=!0,!1)}function gv(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vv(e,t,r,i){if(t===null||typeof t>"u"||gv(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,r,i,n,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,zu);Xe[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,zu);Xe[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,zu);Xe[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Au(e,t,r,i){var n=Xe.hasOwnProperty(t)?Xe[t]:null;(n!==null?n.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vv(t,r,n,i)&&(r=null),i||n===null?mv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,i=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var $r=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Lu=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),vf=Symbol.for("react.provider"),yf=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Kd=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,pl;function Xn(e){if(pl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||""}return`
`+pl+e}var fl=!1;function ml(e,t){if(!e||fl)return"";fl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),s=i.stack.split(`
`),o=n.length-1,l=s.length-1;1<=o&&0<=l&&n[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(n[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||n[o]!==s[l]){var a=`
`+n[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{fl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Xn(e):""}function yv(e){switch(e.tag){case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function hc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Hi:return"Portal";case cc:return"Profiler";case Lu:return"StrictMode";case uc:return"Suspense";case dc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yf:return(e.displayName||"Context")+".Consumer";case vf:return(e._context.displayName||"Context")+".Provider";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:hc(e.type)||"Memo";case Or:t=e._payload,e=e._init;try{return hc(e(t))}catch{}}return null}function bv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(t);case 8:return t===Lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wv(e){var t=wf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=wv(e))}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=wf(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pc(e,t){var r=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function qd(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Zr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&Au(e,"checked",t,!1)}function fc(e,t){_f(e,t);var r=Zr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mc(e,t.type,r):t.hasOwnProperty("defaultValue")&&mc(e,t.type,Zr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function mc(e,t,r){(t!=="number"||ea(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Yn=Array.isArray;function nn(e,t,r,i){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Zr(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function gc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(Yn(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Zr(r)}}function kf(e,t){var r=Zr(t.value),i=Zr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Qd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ws(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function $f(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Ef(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=$f(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,n):e[r]=n}}var _v=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(e,t){if(t){if(_v[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xc=null,sn=null,on=null;function Zd(e){if(e=Ks(e)){if(typeof xc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ba(t),xc(e.stateNode,e.type,t))}}function Tf(e){sn?on?on.push(e):on=[e]:sn=e}function zf(){if(sn){var e=sn,t=on;if(on=sn=null,Zd(e),t)for(e=0;e<t.length;e++)Zd(t[e])}}function Af(e,t){return e(t)}function Lf(){}var gl=!1;function Pf(e,t,r){if(gl)return e(t,r);gl=!0;try{return Af(e,t,r)}finally{gl=!1,(sn!==null||on!==null)&&(Lf(),zf())}}function xs(e,t){var r=e.stateNode;if(r===null)return null;var i=Ba(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var _c=!1;if(xr)try{var In={};Object.defineProperty(In,"passive",{get:function(){_c=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{_c=!1}function kv(e,t,r,i,n,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var es=!1,ta=null,ra=!1,kc=null,Sv={onError:function(e){es=!0,ta=e}};function Cv(e,t,r,i,n,s,o,l,a){es=!1,ta=null,kv.apply(Sv,arguments)}function $v(e,t,r,i,n,s,o,l,a){if(Cv.apply(this,arguments),es){if(es){var c=ta;es=!1,ta=null}else throw Error(A(198));ra||(ra=!0,kc=c)}}function Mi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jd(e){if(Mi(e)!==e)throw Error(A(188))}function Ev(e){var t=e.alternate;if(!t){if(t=Mi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,i=t;;){var n=r.return;if(n===null)break;var s=n.alternate;if(s===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===r)return Jd(n),e;if(s===i)return Jd(n),t;s=s.sibling}throw Error(A(188))}if(r.return!==i.return)r=n,i=s;else{for(var o=!1,l=n.child;l;){if(l===r){o=!0,r=n,i=s;break}if(l===i){o=!0,i=n,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,i=n;break}if(l===i){o=!0,i=s,r=n;break}l=l.sibling}if(!o)throw Error(A(189))}}if(r.alternate!==i)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function If(e){return e=Ev(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Mf=Et.unstable_scheduleCallback,eh=Et.unstable_cancelCallback,Tv=Et.unstable_shouldYield,zv=Et.unstable_requestPaint,Ee=Et.unstable_now,Av=Et.unstable_getCurrentPriorityLevel,Nu=Et.unstable_ImmediatePriority,Df=Et.unstable_UserBlockingPriority,ia=Et.unstable_NormalPriority,Lv=Et.unstable_LowPriority,Rf=Et.unstable_IdlePriority,Ma=null,dr=null;function Pv(e){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(Ma,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Nv,Ov=Math.log,Iv=Math.LN2;function Nv(e){return e>>>=0,e===0?32:31-(Ov(e)/Iv|0)|0}var fo=64,mo=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,n=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~n;l!==0?i=Qn(l):(s&=o,s!==0&&(i=Qn(s)))}else o=r&~n,o!==0?i=Qn(o):s!==0&&(i=Qn(s));if(i===0)return 0;if(t!==0&&t!==i&&!(t&n)&&(n=i&-i,s=t&-t,n>=s||n===16&&(s&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Qt(t),n=1<<r,i|=e[r],t&=~n;return i}function Mv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,a=n[o];a===-1?(!(l&r)||l&i)&&(n[o]=Mv(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function vl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ws(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=r}function Rv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Qt(r),s=1<<n;t[n]=0,i[n]=-1,e[n]=-1,r&=~s}}function Mu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Qt(r),n=1<<i;n&t|e[i]&t&&(e[i]|=t),r&=~n}}var ae=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,Du,jf,Uf,Hf,Cc=!1,go=[],Ur=null,Hr=null,Wr=null,_s=new Map,ks=new Map,Nr=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(e,t){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(t.pointerId)}}function Nn(e,t,r,i,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Ks(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Bv(e,t,r,i,n){switch(t){case"focusin":return Ur=Nn(Ur,e,t,r,i,n),!0;case"dragenter":return Hr=Nn(Hr,e,t,r,i,n),!0;case"mouseover":return Wr=Nn(Wr,e,t,r,i,n),!0;case"pointerover":var s=n.pointerId;return _s.set(s,Nn(_s.get(s)||null,e,t,r,i,n)),!0;case"gotpointercapture":return s=n.pointerId,ks.set(s,Nn(ks.get(s)||null,e,t,r,i,n)),!0}return!1}function Wf(e){var t=vi(e.target);if(t!==null){var r=Mi(t);if(r!==null){if(t=r.tag,t===13){if(t=Of(r),t!==null){e.blockedOn=t,Hf(e.priority,function(){jf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=$c(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);wc=i,r.target.dispatchEvent(i),wc=null}else return t=Ks(r),t!==null&&Du(t),e.blockedOn=r,!1;t.shift()}return!0}function rh(e,t,r){Fo(e)&&r.delete(t)}function Vv(){Cc=!1,Ur!==null&&Fo(Ur)&&(Ur=null),Hr!==null&&Fo(Hr)&&(Hr=null),Wr!==null&&Fo(Wr)&&(Wr=null),_s.forEach(rh),ks.forEach(rh)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cc||(Cc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,Vv)))}function Ss(e){function t(n){return Mn(n,e)}if(0<go.length){Mn(go[0],e);for(var r=1;r<go.length;r++){var i=go[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ur!==null&&Mn(Ur,e),Hr!==null&&Mn(Hr,e),Wr!==null&&Mn(Wr,e),_s.forEach(t),ks.forEach(t),r=0;r<Nr.length;r++)i=Nr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Nr.length&&(r=Nr[0],r.blockedOn===null);)Wf(r),r.blockedOn===null&&Nr.shift()}var an=$r.ReactCurrentBatchConfig,sa=!0;function jv(e,t,r,i){var n=ae,s=an.transition;an.transition=null;try{ae=1,Ru(e,t,r,i)}finally{ae=n,an.transition=s}}function Uv(e,t,r,i){var n=ae,s=an.transition;an.transition=null;try{ae=4,Ru(e,t,r,i)}finally{ae=n,an.transition=s}}function Ru(e,t,r,i){if(sa){var n=$c(e,t,r,i);if(n===null)El(e,t,i,oa,r),th(e,i);else if(Bv(n,e,t,r,i))i.stopPropagation();else if(th(e,i),t&4&&-1<Fv.indexOf(e)){for(;n!==null;){var s=Ks(n);if(s!==null&&Vf(s),s=$c(e,t,r,i),s===null&&El(e,t,i,oa,r),s===n)break;n=s}n!==null&&i.stopPropagation()}else El(e,t,i,null,r)}}var oa=null;function $c(e,t,r,i){if(oa=null,e=Iu(i),e=vi(e),e!==null)if(t=Mi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Of(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oa=e,null}function Gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case Nu:return 1;case Df:return 4;case ia:case Lv:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var Rr=null,Fu=null,Bo=null;function Kf(){if(Bo)return Bo;var e,t=Fu,r=t.length,i,n="value"in Rr?Rr.value:Rr.textContent,s=n.length;for(e=0;e<r&&t[e]===n[e];e++);var o=r-e;for(i=1;i<=o&&t[r-i]===n[s-i];i++);return Bo=n.slice(e,1<i?1-i:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function ih(){return!1}function zt(e){function t(r,i,n,s,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vo:ih,this.isPropagationStopped=ih,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=zt(Sn),Gs=_e({},Sn,{view:0,detail:0}),Hv=zt(Gs),yl,bl,Dn,Da=_e({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(yl=e.screenX-Dn.screenX,bl=e.screenY-Dn.screenY):bl=yl=0,Dn=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),nh=zt(Da),Wv=_e({},Da,{dataTransfer:0}),Gv=zt(Wv),Kv=_e({},Gs,{relatedTarget:0}),wl=zt(Kv),qv=_e({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=zt(qv),Yv=_e({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qv=zt(Yv),Zv=_e({},Sn,{data:0}),sh=zt(Zv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function Vu(){return ry}var iy=_e({},Gs,{key:function(e){if(e.key){var t=Jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=zt(iy),sy=_e({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=zt(sy),oy=_e({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),ay=zt(oy),ly=_e({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=zt(ly),uy=_e({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=zt(uy),hy=[9,13,27,32],ju=xr&&"CompositionEvent"in window,ts=null;xr&&"documentMode"in document&&(ts=document.documentMode);var py=xr&&"TextEvent"in window&&!ts,qf=xr&&(!ju||ts&&8<ts&&11>=ts),ah=" ",lh=!1;function Xf(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function fy(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(lh=!0,ah);case"textInput":return e=t.data,e===ah&&lh?null:e;default:return null}}function my(e,t){if(Gi)return e==="compositionend"||!ju&&Xf(e,t)?(e=Kf(),Bo=Fu=Rr=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function Qf(e,t,r,i){Tf(i),t=aa(t,"onChange"),0<t.length&&(r=new Bu("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var rs=null,Cs=null;function vy(e){lm(e,0)}function Ra(e){var t=Xi(e);if(xf(t))return e}function yy(e,t){if(e==="change")return t}var Zf=!1;if(xr){var xl;if(xr){var _l="oninput"in document;if(!_l){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),_l=typeof uh.oninput=="function"}xl=_l}else xl=!1;Zf=xl&&(!document.documentMode||9<document.documentMode)}function dh(){rs&&(rs.detachEvent("onpropertychange",Jf),Cs=rs=null)}function Jf(e){if(e.propertyName==="value"&&Ra(Cs)){var t=[];Qf(t,Cs,e,Iu(e)),Pf(vy,t)}}function by(e,t,r){e==="focusin"?(dh(),rs=t,Cs=r,rs.attachEvent("onpropertychange",Jf)):e==="focusout"&&dh()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(Cs)}function xy(e,t){if(e==="click")return Ra(t)}function _y(e,t){if(e==="input"||e==="change")return Ra(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var er=typeof Object.is=="function"?Object.is:ky;function $s(e,t){if(er(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!lc.call(t,n)||!er(e[n],t[n]))return!1}return!0}function hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ph(e,t){var r=hh(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hh(r)}}function em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tm(){for(var e=window,t=ea();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ea(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sy(e){var t=tm(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&em(r.ownerDocument.documentElement,r)){if(i!==null&&Uu(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,s=Math.min(i.start,n);i=i.end===void 0?s:Math.min(i.end,n),!e.extend&&s>i&&(n=i,i=s,s=n),n=ph(r,s);var o=ph(r,i);n&&o&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cy=xr&&"documentMode"in document&&11>=document.documentMode,Ki=null,Ec=null,is=null,Tc=!1;function fh(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tc||Ki==null||Ki!==ea(i)||(i=Ki,"selectionStart"in i&&Uu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),is&&$s(is,i)||(is=i,i=aa(Ec,"onSelect"),0<i.length&&(t=new Bu("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Ki)))}function yo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qi={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},kl={},rm={};xr&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Fa(e){if(kl[e])return kl[e];if(!qi[e])return e;var t=qi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in rm)return kl[e]=t[r];return e}var im=Fa("animationend"),nm=Fa("animationiteration"),sm=Fa("animationstart"),om=Fa("transitionend"),am=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(e,t){am.set(e,t),Ni(t,[e])}for(var Sl=0;Sl<mh.length;Sl++){var Cl=mh[Sl],$y=Cl.toLowerCase(),Ey=Cl[0].toUpperCase()+Cl.slice(1);ni($y,"on"+Ey)}ni(im,"onAnimationEnd");ni(nm,"onAnimationIteration");ni(sm,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(om,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function gh(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,$v(i,t,void 0,e),e.currentTarget=null}function lm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],n=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&n.isPropagationStopped())break e;gh(n,l,c),s=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&n.isPropagationStopped())break e;gh(n,l,c),s=a}}}if(ra)throw e=kc,ra=!1,kc=null,e}function he(e,t){var r=t[Oc];r===void 0&&(r=t[Oc]=new Set);var i=e+"__bubble";r.has(i)||(cm(t,e,2,!1),r.add(i))}function $l(e,t,r){var i=0;t&&(i|=4),cm(r,e,i,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Es(e){if(!e[bo]){e[bo]=!0,gf.forEach(function(r){r!=="selectionchange"&&(Ty.has(r)||$l(r,!1,e),$l(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,$l("selectionchange",!1,t))}}function cm(e,t,r,i){switch(Gf(t)){case 1:var n=jv;break;case 4:n=Uv;break;default:n=Ru}r=n.bind(null,t,r,e),n=void 0,!_c||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function El(e,t,r,i,n){var s=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===n||l.nodeType===8&&l.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;o=o.return}for(;l!==null;){if(o=vi(l),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}l=l.parentNode}}i=i.return}Pf(function(){var c=s,h=Iu(r),d=[];e:{var p=am.get(e);if(p!==void 0){var g=Bu,y=e;switch(e){case"keypress":if(Vo(r)===0)break e;case"keydown":case"keyup":g=ny;break;case"focusin":y="focus",g=wl;break;case"focusout":y="blur",g=wl;break;case"beforeblur":case"afterblur":g=wl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ay;break;case im:case nm:case sm:g=Xv;break;case om:g=cy;break;case"scroll":g=Hv;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=oh}var w=(t&4)!==0,k=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var f=c,b;f!==null;){b=f;var x=b.stateNode;if(b.tag===5&&x!==null&&(b=x,v!==null&&(x=xs(f,v),x!=null&&w.push(Ts(f,x,b)))),k)break;f=f.return}0<w.length&&(p=new g(p,y,null,r,h),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==wc&&(y=r.relatedTarget||r.fromElement)&&(vi(y)||y[_r]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=c,y=y?vi(y):null,y!==null&&(k=Mi(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=nh,x="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=oh,x="onPointerLeave",v="onPointerEnter",f="pointer"),k=g==null?p:Xi(g),b=y==null?p:Xi(y),p=new w(x,f+"leave",g,r,h),p.target=k,p.relatedTarget=b,x=null,vi(h)===c&&(w=new w(v,f+"enter",y,r,h),w.target=b,w.relatedTarget=k,x=w),k=x,g&&y)t:{for(w=g,v=y,f=0,b=w;b;b=Vi(b))f++;for(b=0,x=v;x;x=Vi(x))b++;for(;0<f-b;)w=Vi(w),f--;for(;0<b-f;)v=Vi(v),b--;for(;f--;){if(w===v||v!==null&&w===v.alternate)break t;w=Vi(w),v=Vi(v)}w=null}else w=null;g!==null&&vh(d,p,g,w,!1),y!==null&&k!==null&&vh(d,k,y,w,!0)}}e:{if(p=c?Xi(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=yy;else if(ch(p))if(Zf)_=_y;else{_=wy;var S=by}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=xy);if(_&&(_=_(e,c))){Qf(d,_,r,h);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&mc(p,"number",p.value)}switch(S=c?Xi(c):window,e){case"focusin":(ch(S)||S.contentEditable==="true")&&(Ki=S,Ec=c,is=null);break;case"focusout":is=Ec=Ki=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,fh(d,r,h);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":fh(d,r,h)}var E;if(ju)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Gi?Xf(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(qf&&r.locale!=="ko"&&(Gi||$!=="onCompositionStart"?$==="onCompositionEnd"&&Gi&&(E=Kf()):(Rr=h,Fu="value"in Rr?Rr.value:Rr.textContent,Gi=!0)),S=aa(c,$),0<S.length&&($=new sh($,e,null,r,h),d.push({event:$,listeners:S}),E?$.data=E:(E=Yf(r),E!==null&&($.data=E)))),(E=py?fy(e,r):my(e,r))&&(c=aa(c,"onBeforeInput"),0<c.length&&(h=new sh("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=E))}lm(d,t)})}function Ts(e,t,r){return{instance:e,listener:t,currentTarget:r}}function aa(e,t){for(var r=t+"Capture",i=[];e!==null;){var n=e,s=n.stateNode;n.tag===5&&s!==null&&(n=s,s=xs(e,r),s!=null&&i.unshift(Ts(e,s,n)),s=xs(e,t),s!=null&&i.push(Ts(e,s,n))),e=e.return}return i}function Vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vh(e,t,r,i,n){for(var s=t._reactName,o=[];r!==null&&r!==i;){var l=r,a=l.alternate,c=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&c!==null&&(l=c,n?(a=xs(r,s),a!=null&&o.unshift(Ts(r,a,l))):n||(a=xs(r,s),a!=null&&o.push(Ts(r,a,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var zy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Ay,"")}function wo(e,t,r){if(t=yh(t),yh(e)!==t&&r)throw Error(A(425))}function la(){}var zc=null,Ac=null;function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(Oy)}:Pc;function Oy(e){setTimeout(function(){throw e})}function Tl(e,t){var r=t,i=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){e.removeChild(n),Ss(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);Ss(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),ur="__reactFiber$"+Cn,zs="__reactProps$"+Cn,_r="__reactContainer$"+Cn,Oc="__reactEvents$"+Cn,Iy="__reactListeners$"+Cn,Ny="__reactHandles$"+Cn;function vi(e){var t=e[ur];if(t)return t;for(var r=e.parentNode;r;){if(t=r[_r]||r[ur]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=wh(e);e!==null;){if(r=e[ur])return r;e=wh(e)}return t}e=r,r=e.parentNode}return null}function Ks(e){return e=e[ur]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ba(e){return e[zs]||null}var Ic=[],Yi=-1;function si(e){return{current:e}}function pe(e){0>Yi||(e.current=Ic[Yi],Ic[Yi]=null,Yi--)}function de(e,t){Yi++,Ic[Yi]=e.current,e.current=t}var Jr={},rt=si(Jr),ht=si(!1),Ci=Jr;function pn(e,t){var r=e.type.contextTypes;if(!r)return Jr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var n={},s;for(s in r)n[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function pt(e){return e=e.childContextTypes,e!=null}function ca(){pe(ht),pe(rt)}function xh(e,t,r){if(rt.current!==Jr)throw Error(A(168));de(rt,t),de(ht,r)}function um(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in t))throw Error(A(108,bv(e)||"Unknown",n));return _e({},r,i)}function ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jr,Ci=rt.current,de(rt,e),de(ht,ht.current),!0}function _h(e,t,r){var i=e.stateNode;if(!i)throw Error(A(169));r?(e=um(e,t,Ci),i.__reactInternalMemoizedMergedChildContext=e,pe(ht),pe(rt),de(rt,e)):pe(ht),de(ht,r)}var vr=null,Va=!1,zl=!1;function dm(e){vr===null?vr=[e]:vr.push(e)}function My(e){Va=!0,dm(e)}function oi(){if(!zl&&vr!==null){zl=!0;var e=0,t=ae;try{var r=vr;for(ae=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}vr=null,Va=!1}catch(n){throw vr!==null&&(vr=vr.slice(e+1)),Mf(Nu,oi),n}finally{ae=t,zl=!1}}return null}var Qi=[],Zi=0,da=null,ha=0,Ot=[],It=0,$i=null,yr=1,br="";function pi(e,t){Qi[Zi++]=ha,Qi[Zi++]=da,da=e,ha=t}function hm(e,t,r){Ot[It++]=yr,Ot[It++]=br,Ot[It++]=$i,$i=e;var i=yr;e=br;var n=32-Qt(i)-1;i&=~(1<<n),r+=1;var s=32-Qt(t)+n;if(30<s){var o=n-n%5;s=(i&(1<<o)-1).toString(32),i>>=o,n-=o,yr=1<<32-Qt(t)+n|r<<n|i,br=s+e}else yr=1<<s|r<<n|i,br=e}function Hu(e){e.return!==null&&(pi(e,1),hm(e,1,0))}function Wu(e){for(;e===da;)da=Qi[--Zi],Qi[Zi]=null,ha=Qi[--Zi],Qi[Zi]=null;for(;e===$i;)$i=Ot[--It],Ot[It]=null,br=Ot[--It],Ot[It]=null,yr=Ot[--It],Ot[It]=null}var Ct=null,kt=null,fe=!1,Yt=null;function pm(e,t){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function kh(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,kt=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$i!==null?{id:yr,overflow:br}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,kt=null,!0):!1;default:return!1}}function Nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mc(e){if(fe){var t=kt;if(t){var r=t;if(!kh(e,t)){if(Nc(e))throw Error(A(418));t=Gr(r.nextSibling);var i=Ct;t&&kh(e,t)?pm(i,r):(e.flags=e.flags&-4097|2,fe=!1,Ct=e)}}else{if(Nc(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,Ct=e}}}function Sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function xo(e){if(e!==Ct)return!1;if(!fe)return Sh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lc(e.type,e.memoizedProps)),t&&(t=kt)){if(Nc(e))throw fm(),Error(A(418));for(;t;)pm(e,t),t=Gr(t.nextSibling)}if(Sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Ct?Gr(e.stateNode.nextSibling):null;return!0}function fm(){for(var e=kt;e;)e=Gr(e.nextSibling)}function fn(){kt=Ct=null,fe=!1}function Gu(e){Yt===null?Yt=[e]:Yt.push(e)}var Dy=$r.ReactCurrentBatchConfig;function Kt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var pa=si(null),fa=null,Ji=null,Ku=null;function qu(){Ku=Ji=fa=null}function Xu(e){var t=pa.current;pe(pa),e._currentValue=t}function Dc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function ln(e,t){fa=e,Ku=Ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Ku!==e)if(e={context:e,memoizedValue:t,next:null},Ji===null){if(fa===null)throw Error(A(308));Ji=e,fa.dependencies={lanes:0,firstContext:e}}else Ji=Ji.next=e;return t}var yi=null;function Yu(e){yi===null?yi=[e]:yi.push(e)}function mm(e,t,r,i){var n=t.interleaved;return n===null?(r.next=r,Yu(t)):(r.next=n.next,n.next=r),t.interleaved=r,kr(e,i)}function kr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ir=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ee&2){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,kr(e,r)}return n=i.interleaved,n===null?(t.next=t,Yu(i)):(t.next=n.next,n.next=t),i.interleaved=t,kr(e,r)}function jo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Mu(e,r)}}function Ch(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?n=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?n=s=t:s=s.next=t}else n=s=t;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ma(e,t,r,i){var n=e.updateQueue;Ir=!1;var s=n.firstBaseUpdate,o=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var d=n.baseState;o=0,h=c=a=null,l=s;do{var p=l.lane,g=l.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,g=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=_e({},d,p);break e;case 2:Ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=g,a=d):h=h.next=g,o|=p;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(h===null&&(a=d),n.baseState=a,n.firstBaseUpdate=c,n.lastBaseUpdate=h,t=n.shared.interleaved,t!==null){n=t;do o|=n.lane,n=n.next;while(n!==t)}else s===null&&(n.shared.lanes=0);Ti|=o,e.lanes=o,e.memoizedState=d}}function $h(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(A(191,n));n.call(i)}}}var vm=new mf.Component().refs;function Rc(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:_e({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ja={isMounted:function(e){return(e=e._reactInternals)?Mi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=st(),n=Xr(e),s=wr(i,n);s.payload=t,r!=null&&(s.callback=r),t=Kr(e,s,n),t!==null&&(Zt(t,e,n,i),jo(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=st(),n=Xr(e),s=wr(i,n);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Kr(e,s,n),t!==null&&(Zt(t,e,n,i),jo(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),i=Xr(e),n=wr(r,i);n.tag=2,t!=null&&(n.callback=t),t=Kr(e,n,i),t!==null&&(Zt(t,e,i,r),jo(t,e,i))}};function Eh(e,t,r,i,n,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,o):t.prototype&&t.prototype.isPureReactComponent?!$s(r,i)||!$s(n,s):!0}function ym(e,t,r){var i=!1,n=Jr,s=t.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(n=pt(t)?Ci:rt.current,i=t.contextTypes,s=(i=i!=null)?pn(e,n):Jr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ja,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),t}function Th(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&ja.enqueueReplaceState(t,t.state,null)}function Fc(e,t,r,i){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs=vm,Qu(e);var s=t.contextType;typeof s=="object"&&s!==null?n.context=Dt(s):(s=pt(t)?Ci:rt.current,n.context=pn(e,s)),n.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Rc(e,t,s,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&ja.enqueueReplaceState(n,n.state,null),ma(e,r,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var i=r.stateNode}if(!i)throw Error(A(147,e));var n=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=n.refs;l===vm&&(l=n.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zh(e){var t=e._init;return t(e._payload)}function bm(e){function t(v,f){if(e){var b=v.deletions;b===null?(v.deletions=[f],v.flags|=16):b.push(f)}}function r(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function i(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function n(v,f){return v=Yr(v,f),v.index=0,v.sibling=null,v}function s(v,f,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<f?(v.flags|=2,f):b):(v.flags|=2,f)):(v.flags|=1048576,f)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,b,x){return f===null||f.tag!==6?(f=Ml(b,v.mode,x),f.return=v,f):(f=n(f,b),f.return=v,f)}function a(v,f,b,x){var _=b.type;return _===Wi?h(v,f,b.props.children,x,b.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Or&&zh(_)===f.type)?(x=n(f,b.props),x.ref=Rn(v,f,b),x.return=v,x):(x=qo(b.type,b.key,b.props,null,v.mode,x),x.ref=Rn(v,f,b),x.return=v,x)}function c(v,f,b,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==b.containerInfo||f.stateNode.implementation!==b.implementation?(f=Dl(b,v.mode,x),f.return=v,f):(f=n(f,b.children||[]),f.return=v,f)}function h(v,f,b,x,_){return f===null||f.tag!==7?(f=Si(b,v.mode,x,_),f.return=v,f):(f=n(f,b),f.return=v,f)}function d(v,f,b){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ml(""+f,v.mode,b),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case uo:return b=qo(f.type,f.key,f.props,null,v.mode,b),b.ref=Rn(v,null,f),b.return=v,b;case Hi:return f=Dl(f,v.mode,b),f.return=v,f;case Or:var x=f._init;return d(v,x(f._payload),b)}if(Yn(f)||On(f))return f=Si(f,v.mode,b,null),f.return=v,f;_o(v,f)}return null}function p(v,f,b,x){var _=f!==null?f.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:l(v,f,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case uo:return b.key===_?a(v,f,b,x):null;case Hi:return b.key===_?c(v,f,b,x):null;case Or:return _=b._init,p(v,f,_(b._payload),x)}if(Yn(b)||On(b))return _!==null?null:h(v,f,b,x,null);_o(v,b)}return null}function g(v,f,b,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(b)||null,l(f,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:return v=v.get(x.key===null?b:x.key)||null,a(f,v,x,_);case Hi:return v=v.get(x.key===null?b:x.key)||null,c(f,v,x,_);case Or:var S=x._init;return g(v,f,b,S(x._payload),_)}if(Yn(x)||On(x))return v=v.get(b)||null,h(f,v,x,_,null);_o(f,x)}return null}function y(v,f,b,x){for(var _=null,S=null,E=f,$=f=0,P=null;E!==null&&$<b.length;$++){E.index>$?(P=E,E=null):P=E.sibling;var C=p(v,E,b[$],x);if(C===null){E===null&&(E=P);break}e&&E&&C.alternate===null&&t(v,E),f=s(C,f,$),S===null?_=C:S.sibling=C,S=C,E=P}if($===b.length)return r(v,E),fe&&pi(v,$),_;if(E===null){for(;$<b.length;$++)E=d(v,b[$],x),E!==null&&(f=s(E,f,$),S===null?_=E:S.sibling=E,S=E);return fe&&pi(v,$),_}for(E=i(v,E);$<b.length;$++)P=g(E,v,$,b[$],x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?$:P.key),f=s(P,f,$),S===null?_=P:S.sibling=P,S=P);return e&&E.forEach(function(M){return t(v,M)}),fe&&pi(v,$),_}function w(v,f,b,x){var _=On(b);if(typeof _!="function")throw Error(A(150));if(b=_.call(b),b==null)throw Error(A(151));for(var S=_=null,E=f,$=f=0,P=null,C=b.next();E!==null&&!C.done;$++,C=b.next()){E.index>$?(P=E,E=null):P=E.sibling;var M=p(v,E,C.value,x);if(M===null){E===null&&(E=P);break}e&&E&&M.alternate===null&&t(v,E),f=s(M,f,$),S===null?_=M:S.sibling=M,S=M,E=P}if(C.done)return r(v,E),fe&&pi(v,$),_;if(E===null){for(;!C.done;$++,C=b.next())C=d(v,C.value,x),C!==null&&(f=s(C,f,$),S===null?_=C:S.sibling=C,S=C);return fe&&pi(v,$),_}for(E=i(v,E);!C.done;$++,C=b.next())C=g(E,v,$,C.value,x),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?$:C.key),f=s(C,f,$),S===null?_=C:S.sibling=C,S=C);return e&&E.forEach(function(R){return t(v,R)}),fe&&pi(v,$),_}function k(v,f,b,x){if(typeof b=="object"&&b!==null&&b.type===Wi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case uo:e:{for(var _=b.key,S=f;S!==null;){if(S.key===_){if(_=b.type,_===Wi){if(S.tag===7){r(v,S.sibling),f=n(S,b.props.children),f.return=v,v=f;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Or&&zh(_)===S.type){r(v,S.sibling),f=n(S,b.props),f.ref=Rn(v,S,b),f.return=v,v=f;break e}r(v,S);break}else t(v,S);S=S.sibling}b.type===Wi?(f=Si(b.props.children,v.mode,x,b.key),f.return=v,v=f):(x=qo(b.type,b.key,b.props,null,v.mode,x),x.ref=Rn(v,f,b),x.return=v,v=x)}return o(v);case Hi:e:{for(S=b.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===b.containerInfo&&f.stateNode.implementation===b.implementation){r(v,f.sibling),f=n(f,b.children||[]),f.return=v,v=f;break e}else{r(v,f);break}else t(v,f);f=f.sibling}f=Dl(b,v.mode,x),f.return=v,v=f}return o(v);case Or:return S=b._init,k(v,f,S(b._payload),x)}if(Yn(b))return y(v,f,b,x);if(On(b))return w(v,f,b,x);_o(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,f!==null&&f.tag===6?(r(v,f.sibling),f=n(f,b),f.return=v,v=f):(r(v,f),f=Ml(b,v.mode,x),f.return=v,v=f),o(v)):r(v,f)}return k}var mn=bm(!0),wm=bm(!1),qs={},hr=si(qs),As=si(qs),Ls=si(qs);function bi(e){if(e===qs)throw Error(A(174));return e}function Zu(e,t){switch(de(Ls,t),de(As,e),de(hr,qs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vc(t,e)}pe(hr),de(hr,t)}function gn(){pe(hr),pe(As),pe(Ls)}function xm(e){bi(Ls.current);var t=bi(hr.current),r=vc(t,e.type);t!==r&&(de(As,e),de(hr,r))}function Ju(e){As.current===e&&(pe(hr),pe(As))}var we=si(0);function ga(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function ed(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Uo=$r.ReactCurrentDispatcher,Ll=$r.ReactCurrentBatchConfig,Ei=0,xe=null,Ne=null,Ve=null,va=!1,ns=!1,Ps=0,Ry=0;function Ze(){throw Error(A(321))}function td(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!er(e[r],t[r]))return!1;return!0}function rd(e,t,r,i,n,s){if(Ei=s,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?jy:Uy,e=r(i,n),ns){s=0;do{if(ns=!1,Ps=0,25<=s)throw Error(A(301));s+=1,Ve=Ne=null,t.updateQueue=null,Uo.current=Hy,e=r(i,n)}while(ns)}if(Uo.current=ya,t=Ne!==null&&Ne.next!==null,Ei=0,Ve=Ne=xe=null,va=!1,t)throw Error(A(300));return e}function id(){var e=Ps!==0;return Ps=0,e}function lr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?xe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Rt(){if(Ne===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ve===null?xe.memoizedState:Ve.next;if(t!==null)Ve=t,Ne=e;else{if(e===null)throw Error(A(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ve===null?xe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Os(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=Rt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=Ne,n=i.baseQueue,s=r.pending;if(s!==null){if(n!==null){var o=n.next;n.next=s.next,s.next=o}i.baseQueue=n=s,r.pending=null}if(n!==null){s=n.next,i=i.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((Ei&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=i):a=a.next=d,xe.lanes|=h,Ti|=h}c=c.next}while(c!==null&&c!==s);a===null?o=i:a.next=l,er(i,t.memoizedState)||(dt=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=a,r.lastRenderedState=i}if(e=r.interleaved,e!==null){n=e;do s=n.lane,xe.lanes|=s,Ti|=s,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ol(e){var t=Rt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=r.dispatch,n=r.pending,s=t.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do s=e(s,o.action),o=o.next;while(o!==n);er(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,i]}function _m(){}function km(e,t){var r=xe,i=Rt(),n=t(),s=!er(i.memoizedState,n);if(s&&(i.memoizedState=n,dt=!0),i=i.queue,nd($m.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Is(9,Cm.bind(null,r,i,n,t),void 0,null),je===null)throw Error(A(349));Ei&30||Sm(r,t,n)}return n}function Sm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Cm(e,t,r,i){t.value=r,t.getSnapshot=i,Em(t)&&Tm(e)}function $m(e,t,r){return r(function(){Em(t)&&Tm(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!er(e,r)}catch{return!0}}function Tm(e){var t=kr(e,1);t!==null&&Zt(t,e,1,-1)}function Ah(e){var t=lr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:e},t.queue=e,e=e.dispatch=Vy.bind(null,xe,e),[t.memoizedState,e]}function Is(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function zm(){return Rt().memoizedState}function Ho(e,t,r,i){var n=lr();xe.flags|=e,n.memoizedState=Is(1|t,r,void 0,i===void 0?null:i)}function Ua(e,t,r,i){var n=Rt();i=i===void 0?null:i;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,i!==null&&td(i,o.deps)){n.memoizedState=Is(t,r,s,i);return}}xe.flags|=e,n.memoizedState=Is(1|t,r,s,i)}function Lh(e,t){return Ho(8390656,8,e,t)}function nd(e,t){return Ua(2048,8,e,t)}function Am(e,t){return Ua(4,2,e,t)}function Lm(e,t){return Ua(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,r){return r=r!=null?r.concat([e]):null,Ua(4,4,Pm.bind(null,t,e),r)}function sd(){}function Im(e,t){var r=Rt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&td(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Nm(e,t){var r=Rt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&td(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Mm(e,t,r){return Ei&21?(er(r,t)||(r=Ff(),xe.lanes|=r,Ti|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=r)}function Fy(e,t){var r=ae;ae=r!==0&&4>r?r:4,e(!0);var i=Ll.transition;Ll.transition={};try{e(!1),t()}finally{ae=r,Ll.transition=i}}function Dm(){return Rt().memoizedState}function By(e,t,r){var i=Xr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Rm(e))Fm(t,r);else if(r=mm(e,t,r,i),r!==null){var n=st();Zt(r,e,i,n),Bm(r,t,i)}}function Vy(e,t,r){var i=Xr(e),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rm(e))Fm(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(n.hasEagerState=!0,n.eagerState=l,er(l,o)){var a=t.interleaved;a===null?(n.next=n,Yu(t)):(n.next=a.next,a.next=n),t.interleaved=n;return}}catch{}finally{}r=mm(e,t,n,i),r!==null&&(n=st(),Zt(r,e,i,n),Bm(r,t,i))}}function Rm(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Fm(e,t){ns=va=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bm(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Mu(e,r)}}var ya={readContext:Dt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},jy={readContext:Dt,useCallback:function(e,t){return lr().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Lh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ho(4194308,4,Pm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var r=lr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=lr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=By.bind(null,xe,e),[i.memoizedState,e]},useRef:function(e){var t=lr();return e={current:e},t.memoizedState=e},useState:Ah,useDebugValue:sd,useDeferredValue:function(e){return lr().memoizedState=e},useTransition:function(){var e=Ah(!1),t=e[0];return e=Fy.bind(null,e[1]),lr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=xe,n=lr();if(fe){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),je===null)throw Error(A(349));Ei&30||Sm(i,t,r)}n.memoizedState=r;var s={value:r,getSnapshot:t};return n.queue=s,Lh($m.bind(null,i,s,e),[e]),i.flags|=2048,Is(9,Cm.bind(null,i,s,r,t),void 0,null),r},useId:function(){var e=lr(),t=je.identifierPrefix;if(fe){var r=br,i=yr;r=(i&~(1<<32-Qt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ps++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ry++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uy={readContext:Dt,useCallback:Im,useContext:Dt,useEffect:nd,useImperativeHandle:Om,useInsertionEffect:Am,useLayoutEffect:Lm,useMemo:Nm,useReducer:Pl,useRef:zm,useState:function(){return Pl(Os)},useDebugValue:sd,useDeferredValue:function(e){var t=Rt();return Mm(t,Ne.memoizedState,e)},useTransition:function(){var e=Pl(Os)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:_m,useSyncExternalStore:km,useId:Dm,unstable_isNewReconciler:!1},Hy={readContext:Dt,useCallback:Im,useContext:Dt,useEffect:nd,useImperativeHandle:Om,useInsertionEffect:Am,useLayoutEffect:Lm,useMemo:Nm,useReducer:Ol,useRef:zm,useState:function(){return Ol(Os)},useDebugValue:sd,useDeferredValue:function(e){var t=Rt();return Ne===null?t.memoizedState=e:Mm(t,Ne.memoizedState,e)},useTransition:function(){var e=Ol(Os)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:_m,useSyncExternalStore:km,useId:Dm,unstable_isNewReconciler:!1};function vn(e,t){try{var r="",i=t;do r+=yv(i),i=i.return;while(i);var n=r}catch(s){n=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:n,digest:null}}function Il(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Bc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function Vm(e,t,r){r=wr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){wa||(wa=!0,Yc=i),Bc(e,t)},r}function jm(e,t,r){r=wr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=t.value;r.payload=function(){return i(n)},r.callback=function(){Bc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Bc(e,t),typeof i!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Ph(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Wy;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(r)||(n.add(r),e=sb.bind(null,e,t,r),t.then(e,e))}function Oh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ih(e,t,r,i,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=wr(-1,1),t.tag=2,Kr(r,t,1))),r.lanes|=1),e)}var Gy=$r.ReactCurrentOwner,dt=!1;function nt(e,t,r,i){t.child=e===null?wm(t,null,r,i):mn(t,e.child,r,i)}function Nh(e,t,r,i,n){r=r.render;var s=t.ref;return ln(t,n),i=rd(e,t,r,i,s,n),r=id(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Sr(e,t,n)):(fe&&r&&Hu(t),t.flags|=1,nt(e,t,i,n),t.child)}function Mh(e,t,r,i,n){if(e===null){var s=r.type;return typeof s=="function"&&!pd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Um(e,t,s,i,n)):(e=qo(r.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&n)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:$s,r(o,i)&&e.ref===t.ref)return Sr(e,t,n)}return t.flags|=1,e=Yr(s,i),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,r,i,n){if(e!==null){var s=e.memoizedProps;if($s(s,i)&&e.ref===t.ref)if(dt=!1,t.pendingProps=i=s,(e.lanes&n)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,Sr(e,t,n)}return Vc(e,t,r,i,n)}function Hm(e,t,r){var i=t.pendingProps,n=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(tn,wt),wt|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(tn,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,de(tn,wt),wt|=i}else s!==null?(i=s.baseLanes|r,t.memoizedState=null):i=r,de(tn,wt),wt|=i;return nt(e,t,n,r),t.child}function Wm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vc(e,t,r,i,n){var s=pt(r)?Ci:rt.current;return s=pn(t,s),ln(t,n),r=rd(e,t,r,i,s,n),i=id(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Sr(e,t,n)):(fe&&i&&Hu(t),t.flags|=1,nt(e,t,r,n),t.child)}function Dh(e,t,r,i,n){if(pt(r)){var s=!0;ua(t)}else s=!1;if(ln(t,n),t.stateNode===null)Wo(e,t),ym(t,r,i),Fc(t,r,i,n),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(r)?Ci:rt.current,c=pn(t,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==c)&&Th(t,o,i,c),Ir=!1;var p=t.memoizedState;o.state=p,ma(t,i,o,n),a=t.memoizedState,l!==i||p!==a||ht.current||Ir?(typeof h=="function"&&(Rc(t,r,h,i),a=t.memoizedState),(l=Ir||Eh(t,r,l,i,p,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=a),o.props=i,o.state=a,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,gm(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Kt(t.type,l),o.props=c,d=t.pendingProps,p=o.context,a=r.contextType,typeof a=="object"&&a!==null?a=Dt(a):(a=pt(r)?Ci:rt.current,a=pn(t,a));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||p!==a)&&Th(t,o,i,a),Ir=!1,p=t.memoizedState,o.state=p,ma(t,i,o,n);var y=t.memoizedState;l!==d||p!==y||ht.current||Ir?(typeof g=="function"&&(Rc(t,r,g,i),y=t.memoizedState),(c=Ir||Eh(t,r,c,i,p,y,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),o.props=i,o.state=y,o.context=a,i=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return jc(e,t,r,i,s,n)}function jc(e,t,r,i,n,s){Wm(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return n&&_h(t,r,!1),Sr(e,t,s);i=t.stateNode,Gy.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=mn(t,e.child,null,s),t.child=mn(t,null,l,s)):nt(e,t,l,s),t.memoizedState=i.state,n&&_h(t,r,!0),t.child}function Gm(e){var t=e.stateNode;t.pendingContext?xh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xh(e,t.context,!1),Zu(e,t.containerInfo)}function Rh(e,t,r,i,n){return fn(),Gu(n),t.flags|=256,nt(e,t,r,i),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Hc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Km(e,t,r){var i=t.pendingProps,n=we.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(n&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),de(we,n&1),e===null)return Mc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,s?(i=t.mode,s=t.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ga(o,i,0,null),e=Si(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Hc(r),t.memoizedState=Uc,e):od(t,o));if(n=e.memoizedState,n!==null&&(l=n.dehydrated,l!==null))return Ky(e,t,o,i,l,n,r);if(s){s=i.fallback,o=t.mode,n=e.child,l=n.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&t.child!==n?(i=t.child,i.childLanes=0,i.pendingProps=a,t.deletions=null):(i=Yr(n,a),i.subtreeFlags=n.subtreeFlags&14680064),l!==null?s=Yr(l,s):(s=Si(s,o,r,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=e.child.memoizedState,o=o===null?Hc(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Uc,i}return s=e.child,e=s.sibling,i=Yr(s,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function od(e,t){return t=Ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,r,i){return i!==null&&Gu(i),mn(t,e.child,null,r),e=od(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ky(e,t,r,i,n,s,o){if(r)return t.flags&256?(t.flags&=-257,i=Il(Error(A(422))),ko(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,n=t.mode,i=Ga({mode:"visible",children:i.children},n,0,null),s=Si(s,n,o,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,t.mode&1&&mn(t,e.child,null,o),t.child.memoizedState=Hc(o),t.memoizedState=Uc,s);if(!(t.mode&1))return ko(e,t,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(A(419)),i=Il(s,i,void 0),ko(e,t,o,i)}if(l=(o&e.childLanes)!==0,dt||l){if(i=je,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==s.retryLane&&(s.retryLane=n,kr(e,n),Zt(i,e,n,-1))}return hd(),i=Il(Error(A(421))),ko(e,t,o,i)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=ob.bind(null,e),n._reactRetry=t,null):(e=s.treeContext,kt=Gr(n.nextSibling),Ct=t,fe=!0,Yt=null,e!==null&&(Ot[It++]=yr,Ot[It++]=br,Ot[It++]=$i,yr=e.id,br=e.overflow,$i=t),t=od(t,i.children),t.flags|=4096,t)}function Fh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Dc(e.return,t,r)}function Nl(e,t,r,i,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=n)}function qm(e,t,r){var i=t.pendingProps,n=i.revealOrder,s=i.tail;if(nt(e,t,i.children,r),i=we.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fh(e,r,t);else if(e.tag===19)Fh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(de(we,i),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&ga(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),Nl(t,!1,n,r,s);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ga(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}Nl(t,!0,r,null,s);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ti|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Yr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qy(e,t,r){switch(t.tag){case 3:Gm(t),fn();break;case 5:xm(t);break;case 1:pt(t.type)&&ua(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,n=t.memoizedProps.value;de(pa,i._currentValue),i._currentValue=n;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(de(we,we.current&1),t.flags|=128,null):r&t.child.childLanes?Km(e,t,r):(de(we,we.current&1),e=Sr(e,t,r),e!==null?e.sibling:null);de(we,we.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return qm(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),de(we,we.current),i)break;return null;case 22:case 23:return t.lanes=0,Hm(e,t,r)}return Sr(e,t,r)}var Xm,Wc,Ym,Qm;Xm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Wc=function(){};Ym=function(e,t,r,i){var n=e.memoizedProps;if(n!==i){e=t.stateNode,bi(hr.current);var s=null;switch(r){case"input":n=pc(e,n),i=pc(e,i),s=[];break;case"select":n=_e({},n,{value:void 0}),i=_e({},i,{value:void 0}),s=[];break;case"textarea":n=gc(e,n),i=gc(e,i),s=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=la)}yc(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var l=n[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var a=i[c];if(l=n!=null?n[c]:void 0,i.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(r||(r={}),r[o]=a[o])}else r||(s||(s=[]),s.push(c,r)),r=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bs.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&he("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}r&&(s=s||[]).push("style",r);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Qm=function(e,t,r,i){r!==i&&(t.flags|=4)};function Fn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Xy(e,t,r){var i=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return pt(t.type)&&ca(),Je(t),null;case 3:return i=t.stateNode,gn(),pe(ht),pe(rt),ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(Jc(Yt),Yt=null))),Wc(e,t),Je(t),null;case 5:Ju(t);var n=bi(Ls.current);if(r=t.type,e!==null&&t.stateNode!=null)Ym(e,t,r,i,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(A(166));return Je(t),null}if(e=bi(hr.current),xo(t)){i=t.stateNode,r=t.type;var s=t.memoizedProps;switch(i[ur]=t,i[zs]=s,e=(t.mode&1)!==0,r){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(n=0;n<Zn.length;n++)he(Zn[n],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":qd(i,s),he("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},he("invalid",i);break;case"textarea":Yd(i,s),he("invalid",i)}yc(r,s),n=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,l,e),n=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,l,e),n=["children",""+l]):bs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",i)}switch(r){case"input":ho(i),Xd(i,s,!0);break;case"textarea":ho(i),Qd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=la)}i=n,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[ur]=t,e[zs]=i,Xm(e,t,!1,!1),t.stateNode=e;e:{switch(o=bc(r,i),r){case"dialog":he("cancel",e),he("close",e),n=i;break;case"iframe":case"object":case"embed":he("load",e),n=i;break;case"video":case"audio":for(n=0;n<Zn.length;n++)he(Zn[n],e);n=i;break;case"source":he("error",e),n=i;break;case"img":case"image":case"link":he("error",e),he("load",e),n=i;break;case"details":he("toggle",e),n=i;break;case"input":qd(e,i),n=pc(e,i),he("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=_e({},i,{value:void 0}),he("invalid",e);break;case"textarea":Yd(e,i),n=gc(e,i),he("invalid",e);break;default:n=i}yc(r,n),l=n;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ef(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cf(e,a)):s==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&ws(e,a):typeof a=="number"&&ws(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&he("scroll",e):a!=null&&Au(e,s,a,o))}switch(r){case"input":ho(e),Xd(e,i,!1);break;case"textarea":ho(e),Qd(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Zr(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?nn(e,!!i.multiple,s,!1):i.defaultValue!=null&&nn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=la)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Qm(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(A(166));if(r=bi(Ls.current),bi(hr.current),xo(t)){if(i=t.stateNode,r=t.memoizedProps,i[ur]=t,(s=i.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:wo(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(i.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[ur]=t,t.stateNode=i}return Je(t),null;case 13:if(pe(we),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&kt!==null&&t.mode&1&&!(t.flags&128))fm(),fn(),t.flags|=98560,s=!1;else if(s=xo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[ur]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else Yt!==null&&(Jc(Yt),Yt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):hd())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return gn(),Wc(e,t),e===null&&Es(t.stateNode.containerInfo),Je(t),null;case 10:return Xu(t.type._context),Je(t),null;case 17:return pt(t.type)&&ca(),Je(t),null;case 19:if(pe(we),s=t.memoizedState,s===null)return Je(t),null;if(i=(t.flags&128)!==0,o=s.rendering,o===null)if(i)Fn(s,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ga(e),o!==null){for(t.flags|=128,Fn(s,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)s=r,e=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(we,we.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>yn&&(t.flags|=128,i=!0,Fn(s,!1),t.lanes=4194304)}else{if(!i)if(e=ga(o),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Je(t),null}else 2*Ee()-s.renderingStartTime>yn&&r!==1073741824&&(t.flags|=128,i=!0,Fn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,r=we.current,de(we,i?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return dd(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?wt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Yy(e,t){switch(Wu(t),t.tag){case 1:return pt(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),pe(ht),pe(rt),ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ju(t),null;case 13:if(pe(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(we),null;case 4:return gn(),null;case 10:return Xu(t.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var So=!1,et=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,D=null;function en(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Se(e,t,i)}else r.current=null}function Gc(e,t,r){try{r()}catch(i){Se(e,t,i)}}var Bh=!1;function Zy(e,t){if(zc=sa,e=tm(),Uu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,a=-1,c=0,h=0,d=e,p=null;t:for(;;){for(var g;d!==r||n!==0&&d.nodeType!==3||(l=o+n),d!==s||i!==0&&d.nodeType!==3||(a=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++c===n&&(l=o),p===s&&++h===i&&(a=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ac={focusedElem:e,selectionRange:r},sa=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:Kt(t.type,w),k);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){Se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=Bh,Bh=!1,y}function ss(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var s=n.destroy;n.destroy=void 0,s!==void 0&&Gc(t,r,s)}n=n.next}while(n!==i)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Kc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Zm(e){var t=e.alternate;t!==null&&(e.alternate=null,Zm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ur],delete t[zs],delete t[Oc],delete t[Iy],delete t[Ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jm(e){return e.tag===5||e.tag===3||e.tag===4}function Vh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=la));else if(i!==4&&(e=e.child,e!==null))for(qc(e,t,r),e=e.sibling;e!==null;)qc(e,t,r),e=e.sibling}function Xc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Xc(e,t,r),e=e.sibling;e!==null;)Xc(e,t,r),e=e.sibling}var Ge=null,Xt=!1;function Pr(e,t,r){for(r=r.child;r!==null;)eg(e,t,r),r=r.sibling}function eg(e,t,r){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(Ma,r)}catch{}switch(r.tag){case 5:et||en(r,t);case 6:var i=Ge,n=Xt;Ge=null,Pr(e,t,r),Ge=i,Xt=n,Ge!==null&&(Xt?(e=Ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ge.removeChild(r.stateNode));break;case 18:Ge!==null&&(Xt?(e=Ge,r=r.stateNode,e.nodeType===8?Tl(e.parentNode,r):e.nodeType===1&&Tl(e,r),Ss(e)):Tl(Ge,r.stateNode));break;case 4:i=Ge,n=Xt,Ge=r.stateNode.containerInfo,Xt=!0,Pr(e,t,r),Ge=i,Xt=n;break;case 0:case 11:case 14:case 15:if(!et&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var s=n,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gc(r,t,o),n=n.next}while(n!==i)}Pr(e,t,r);break;case 1:if(!et&&(en(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){Se(r,t,l)}Pr(e,t,r);break;case 21:Pr(e,t,r);break;case 22:r.mode&1?(et=(i=et)||r.memoizedState!==null,Pr(e,t,r),et=i):Pr(e,t,r);break;default:Pr(e,t,r)}}function jh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qy),t.forEach(function(i){var n=ab.bind(null,e,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Xt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ge===null)throw Error(A(160));eg(s,o,n),Ge=null,Xt=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(c){Se(n,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tg(t,e),t=t.sibling}function tg(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),ar(e),i&4){try{ss(3,e,e.return),Ha(3,e)}catch(w){Se(e,e.return,w)}try{ss(5,e,e.return)}catch(w){Se(e,e.return,w)}}break;case 1:Wt(t,e),ar(e),i&512&&r!==null&&en(r,r.return);break;case 5:if(Wt(t,e),ar(e),i&512&&r!==null&&en(r,r.return),e.flags&32){var n=e.stateNode;try{ws(n,"")}catch(w){Se(e,e.return,w)}}if(i&4&&(n=e.stateNode,n!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_f(n,s),bc(l,o);var c=bc(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Ef(n,d):h==="dangerouslySetInnerHTML"?Cf(n,d):h==="children"?ws(n,d):Au(n,h,d,c)}switch(l){case"input":fc(n,s);break;case"textarea":kf(n,s);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?nn(n,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?nn(n,!!s.multiple,s.defaultValue,!0):nn(n,!!s.multiple,s.multiple?[]:"",!1))}n[zs]=s}catch(w){Se(e,e.return,w)}}break;case 6:if(Wt(t,e),ar(e),i&4){if(e.stateNode===null)throw Error(A(162));n=e.stateNode,s=e.memoizedProps;try{n.nodeValue=s}catch(w){Se(e,e.return,w)}}break;case 3:if(Wt(t,e),ar(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Ss(t.containerInfo)}catch(w){Se(e,e.return,w)}break;case 4:Wt(t,e),ar(e);break;case 13:Wt(t,e),ar(e),n=e.child,n.flags&8192&&(s=n.memoizedState!==null,n.stateNode.isHidden=s,!s||n.alternate!==null&&n.alternate.memoizedState!==null||(cd=Ee())),i&4&&jh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(et=(c=et)||h,Wt(t,e),et=c):Wt(t,e),ar(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(D=e,h=e.child;h!==null;){for(d=D=h;D!==null;){switch(p=D,g=p.child,p.tag){case 0:case 11:case 14:case 15:ss(4,p,p.return);break;case 1:en(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Se(i,r,w)}}break;case 5:en(p,p.return);break;case 22:if(p.memoizedState!==null){Hh(d);continue}}g!==null?(g.return=p,D=g):Hh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{n=d.stateNode,c?(s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=$f("display",o))}catch(w){Se(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wt(t,e),ar(e),i&4&&jh(e);break;case 21:break;default:Wt(t,e),ar(e)}}function ar(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Jm(r)){var i=r;break e}r=r.return}throw Error(A(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(ws(n,""),i.flags&=-33);var s=Vh(e);Xc(e,s,n);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Vh(e);qc(e,l,o);break;default:throw Error(A(161))}}catch(a){Se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jy(e,t,r){D=e,rg(e)}function rg(e,t,r){for(var i=(e.mode&1)!==0;D!==null;){var n=D,s=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||So;if(!o){var l=n.alternate,a=l!==null&&l.memoizedState!==null||et;l=So;var c=et;if(So=o,(et=a)&&!c)for(D=n;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Wh(n):a!==null?(a.return=o,D=a):Wh(n);for(;s!==null;)D=s,rg(s),s=s.sibling;D=n,So=l,et=c}Uh(e)}else n.subtreeFlags&8772&&s!==null?(s.return=n,D=s):Uh(e)}}function Uh(e){for(;D!==null;){var t=D;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Ha(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(r===null)i.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:Kt(t.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&$h(t,s,i);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$h(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ss(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}et||t.flags&512&&Kc(t)}catch(p){Se(t,t.return,p)}}if(t===e){D=null;break}if(r=t.sibling,r!==null){r.return=t.return,D=r;break}D=t.return}}function Hh(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var r=t.sibling;if(r!==null){r.return=t.return,D=r;break}D=t.return}}function Wh(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ha(4,t)}catch(a){Se(t,r,a)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var n=t.return;try{i.componentDidMount()}catch(a){Se(t,n,a)}}var s=t.return;try{Kc(t)}catch(a){Se(t,s,a)}break;case 5:var o=t.return;try{Kc(t)}catch(a){Se(t,o,a)}}}catch(a){Se(t,t.return,a)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var eb=Math.ceil,ba=$r.ReactCurrentDispatcher,ad=$r.ReactCurrentOwner,Mt=$r.ReactCurrentBatchConfig,ee=0,je=null,Le=null,Ke=0,wt=0,tn=si(0),Me=0,Ns=null,Ti=0,Wa=0,ld=0,os=null,ut=null,cd=0,yn=1/0,gr=null,wa=!1,Yc=null,qr=null,Co=!1,Fr=null,xa=0,as=0,Qc=null,Go=-1,Ko=0;function st(){return ee&6?Ee():Go!==-1?Go:Go=Ee()}function Xr(e){return e.mode&1?ee&2&&Ke!==0?Ke&-Ke:Dy.transition!==null?(Ko===0&&(Ko=Ff()),Ko):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Gf(e.type)),e):1}function Zt(e,t,r,i){if(50<as)throw as=0,Qc=null,Error(A(185));Ws(e,r,i),(!(ee&2)||e!==je)&&(e===je&&(!(ee&2)&&(Wa|=r),Me===4&&Mr(e,Ke)),ft(e,i),r===1&&ee===0&&!(t.mode&1)&&(yn=Ee()+500,Va&&oi()))}function ft(e,t){var r=e.callbackNode;Dv(e,t);var i=na(e,e===je?Ke:0);if(i===0)r!==null&&eh(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&eh(r),t===1)e.tag===0?My(Gh.bind(null,e)):dm(Gh.bind(null,e)),Py(function(){!(ee&6)&&oi()}),r=null;else{switch(Bf(i)){case 1:r=Nu;break;case 4:r=Df;break;case 16:r=ia;break;case 536870912:r=Rf;break;default:r=ia}r=ug(r,ig.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ig(e,t){if(Go=-1,Ko=0,ee&6)throw Error(A(327));var r=e.callbackNode;if(cn()&&e.callbackNode!==r)return null;var i=na(e,e===je?Ke:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=_a(e,i);else{t=i;var n=ee;ee|=2;var s=sg();(je!==e||Ke!==t)&&(gr=null,yn=Ee()+500,ki(e,t));do try{ib();break}catch(l){ng(e,l)}while(!0);qu(),ba.current=s,ee=n,Le!==null?t=0:(je=null,Ke=0,t=Me)}if(t!==0){if(t===2&&(n=Sc(e),n!==0&&(i=n,t=Zc(e,n))),t===1)throw r=Ns,ki(e,0),Mr(e,i),ft(e,Ee()),r;if(t===6)Mr(e,i);else{if(n=e.current.alternate,!(i&30)&&!tb(n)&&(t=_a(e,i),t===2&&(s=Sc(e),s!==0&&(i=s,t=Zc(e,s))),t===1))throw r=Ns,ki(e,0),Mr(e,i),ft(e,Ee()),r;switch(e.finishedWork=n,e.finishedLanes=i,t){case 0:case 1:throw Error(A(345));case 2:fi(e,ut,gr);break;case 3:if(Mr(e,i),(i&130023424)===i&&(t=cd+500-Ee(),10<t)){if(na(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){st(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Pc(fi.bind(null,e,ut,gr),t);break}fi(e,ut,gr);break;case 4:if(Mr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,n=-1;0<i;){var o=31-Qt(i);s=1<<o,o=t[o],o>n&&(n=o),i&=~s}if(i=n,i=Ee()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eb(i/1960))-i,10<i){e.timeoutHandle=Pc(fi.bind(null,e,ut,gr),i);break}fi(e,ut,gr);break;case 5:fi(e,ut,gr);break;default:throw Error(A(329))}}}return ft(e,Ee()),e.callbackNode===r?ig.bind(null,e):null}function Zc(e,t){var r=os;return e.current.memoizedState.isDehydrated&&(ki(e,t).flags|=256),e=_a(e,t),e!==2&&(t=ut,ut=r,t!==null&&Jc(t)),e}function Jc(e){ut===null?ut=e:ut.push.apply(ut,e)}function tb(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],s=n.getSnapshot;n=n.value;try{if(!er(s(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~ld,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Qt(t),i=1<<r;e[r]=-1,t&=~i}}function Gh(e){if(ee&6)throw Error(A(327));cn();var t=na(e,0);if(!(t&1))return ft(e,Ee()),null;var r=_a(e,t);if(e.tag!==0&&r===2){var i=Sc(e);i!==0&&(t=i,r=Zc(e,i))}if(r===1)throw r=Ns,ki(e,0),Mr(e,t),ft(e,Ee()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fi(e,ut,gr),ft(e,Ee()),null}function ud(e,t){var r=ee;ee|=1;try{return e(t)}finally{ee=r,ee===0&&(yn=Ee()+500,Va&&oi())}}function zi(e){Fr!==null&&Fr.tag===0&&!(ee&6)&&cn();var t=ee;ee|=1;var r=Mt.transition,i=ae;try{if(Mt.transition=null,ae=1,e)return e()}finally{ae=i,Mt.transition=r,ee=t,!(ee&6)&&oi()}}function dd(){wt=tn.current,pe(tn)}function ki(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ly(r)),Le!==null)for(r=Le.return;r!==null;){var i=r;switch(Wu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ca();break;case 3:gn(),pe(ht),pe(rt),ed();break;case 5:Ju(i);break;case 4:gn();break;case 13:pe(we);break;case 19:pe(we);break;case 10:Xu(i.type._context);break;case 22:case 23:dd()}r=r.return}if(je=e,Le=e=Yr(e.current,null),Ke=wt=t,Me=0,Ns=null,ld=Wa=Ti=0,ut=os=null,yi!==null){for(t=0;t<yi.length;t++)if(r=yi[t],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=n,i.next=o}r.pending=i}yi=null}return e}function ng(e,t){do{var r=Le;try{if(qu(),Uo.current=ya,va){for(var i=xe.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}va=!1}if(Ei=0,Ve=Ne=xe=null,ns=!1,Ps=0,ad.current=null,r===null||r.return===null){Me=1,Ns=t,Le=null;break}e:{var s=e,o=r.return,l=r,a=t;if(t=Ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Oh(o);if(g!==null){g.flags&=-257,Ih(g,o,l,s,t),g.mode&1&&Ph(s,c,t),t=g,a=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Ph(s,c,t),hd();break e}a=Error(A(426))}}else if(fe&&l.mode&1){var k=Oh(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ih(k,o,l,s,t),Gu(vn(a,l));break e}}s=a=vn(a,l),Me!==4&&(Me=2),os===null?os=[s]:os.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Vm(s,a,t);Ch(s,v);break e;case 1:l=a;var f=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(qr===null||!qr.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=jm(s,l,t);Ch(s,x);break e}}s=s.return}while(s!==null)}ag(r)}catch(_){t=_,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function sg(){var e=ba.current;return ba.current=ya,e===null?ya:e}function hd(){(Me===0||Me===3||Me===2)&&(Me=4),je===null||!(Ti&268435455)&&!(Wa&268435455)||Mr(je,Ke)}function _a(e,t){var r=ee;ee|=2;var i=sg();(je!==e||Ke!==t)&&(gr=null,ki(e,t));do try{rb();break}catch(n){ng(e,n)}while(!0);if(qu(),ee=r,ba.current=i,Le!==null)throw Error(A(261));return je=null,Ke=0,Me}function rb(){for(;Le!==null;)og(Le)}function ib(){for(;Le!==null&&!Tv();)og(Le)}function og(e){var t=cg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?ag(e):Le=t,ad.current=null}function ag(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yy(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}else if(r=Xy(r,t,wt),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function fi(e,t,r){var i=ae,n=Mt.transition;try{Mt.transition=null,ae=1,nb(e,t,r,i)}finally{Mt.transition=n,ae=i}return null}function nb(e,t,r,i){do cn();while(Fr!==null);if(ee&6)throw Error(A(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Rv(e,s),e===je&&(Le=je=null,Ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Co||(Co=!0,ug(ia,function(){return cn(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ae;ae=1;var l=ee;ee|=4,ad.current=null,Zy(e,r),tg(r,e),Sy(Ac),sa=!!zc,Ac=zc=null,e.current=r,Jy(r),zv(),ee=l,ae=o,Mt.transition=s}else e.current=r;if(Co&&(Co=!1,Fr=e,xa=n),s=e.pendingLanes,s===0&&(qr=null),Pv(r.stateNode),ft(e,Ee()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(wa)throw wa=!1,e=Yc,Yc=null,e;return xa&1&&e.tag!==0&&cn(),s=e.pendingLanes,s&1?e===Qc?as++:(as=0,Qc=e):as=0,oi(),null}function cn(){if(Fr!==null){var e=Bf(xa),t=Mt.transition,r=ae;try{if(Mt.transition=null,ae=16>e?16:e,Fr===null)var i=!1;else{if(e=Fr,Fr=null,xa=0,ee&6)throw Error(A(331));var n=ee;for(ee|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(D=c;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:ss(8,h,s)}var d=h.child;if(d!==null)d.return=h,D=d;else for(;D!==null;){h=D;var p=h.sibling,g=h.return;if(Zm(h),h===c){D=null;break}if(p!==null){p.return=g,D=p;break}D=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ss(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,D=v;break e}D=s.return}}var f=e.current;for(D=f;D!==null;){o=D;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,D=b;else e:for(o=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ha(9,l)}}catch(_){Se(l,l.return,_)}if(l===o){D=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,D=x;break e}D=l.return}}if(ee=n,oi(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(Ma,e)}catch{}i=!0}return i}finally{ae=r,Mt.transition=t}}return!1}function Kh(e,t,r){t=vn(r,t),t=Vm(e,t,1),e=Kr(e,t,1),t=st(),e!==null&&(Ws(e,1,t),ft(e,t))}function Se(e,t,r){if(e.tag===3)Kh(e,e,r);else for(;t!==null;){if(t.tag===3){Kh(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qr===null||!qr.has(i))){e=vn(r,e),e=jm(t,e,1),t=Kr(t,e,1),e=st(),t!==null&&(Ws(t,1,e),ft(t,e));break}}t=t.return}}function sb(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,je===e&&(Ke&r)===r&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Ee()-cd?ki(e,0):ld|=r),ft(e,t)}function lg(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var r=st();e=kr(e,t),e!==null&&(Ws(e,t,r),ft(e,r))}function ob(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lg(e,r)}function ab(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(t),lg(e,r)}var cg;cg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)dt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return dt=!1,qy(e,t,r);dt=!!(e.flags&131072)}else dt=!1,fe&&t.flags&1048576&&hm(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Wo(e,t),e=t.pendingProps;var n=pn(t,rt.current);ln(t,r),n=rd(null,t,i,e,n,r);var s=id();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(i)?(s=!0,ua(t)):s=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Qu(t),n.updater=ja,t.stateNode=n,n._reactInternals=t,Fc(t,i,e,r),t=jc(null,t,i,!0,s,r)):(t.tag=0,fe&&s&&Hu(t),nt(null,t,n,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,n=i._init,i=n(i._payload),t.type=i,n=t.tag=cb(i),e=Kt(i,e),n){case 0:t=Vc(null,t,i,e,r);break e;case 1:t=Dh(null,t,i,e,r);break e;case 11:t=Nh(null,t,i,e,r);break e;case 14:t=Mh(null,t,i,Kt(i.type,e),r);break e}throw Error(A(306,i,""))}return t;case 0:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:Kt(i,n),Vc(e,t,i,n,r);case 1:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:Kt(i,n),Dh(e,t,i,n,r);case 3:e:{if(Gm(t),e===null)throw Error(A(387));i=t.pendingProps,s=t.memoizedState,n=s.element,gm(e,t),ma(t,i,null,r);var o=t.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){n=vn(Error(A(423)),t),t=Rh(e,t,i,r,n);break e}else if(i!==n){n=vn(Error(A(424)),t),t=Rh(e,t,i,r,n);break e}else for(kt=Gr(t.stateNode.containerInfo.firstChild),Ct=t,fe=!0,Yt=null,r=wm(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(fn(),i===n){t=Sr(e,t,r);break e}nt(e,t,i,r)}t=t.child}return t;case 5:return xm(t),e===null&&Mc(t),i=t.type,n=t.pendingProps,s=e!==null?e.memoizedProps:null,o=n.children,Lc(i,n)?o=null:s!==null&&Lc(i,s)&&(t.flags|=32),Wm(e,t),nt(e,t,o,r),t.child;case 6:return e===null&&Mc(t),null;case 13:return Km(e,t,r);case 4:return Zu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=mn(t,null,i,r):nt(e,t,i,r),t.child;case 11:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:Kt(i,n),Nh(e,t,i,n,r);case 7:return nt(e,t,t.pendingProps,r),t.child;case 8:return nt(e,t,t.pendingProps.children,r),t.child;case 12:return nt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,n=t.pendingProps,s=t.memoizedProps,o=n.value,de(pa,i._currentValue),i._currentValue=o,s!==null)if(er(s.value,o)){if(s.children===n.children&&!ht.current){t=Sr(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=wr(-1,r&-r),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Dc(s.return,r,t),l.lanes|=r;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Dc(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,i=t.pendingProps.children,ln(t,r),n=Dt(n),i=i(n),t.flags|=1,nt(e,t,i,r),t.child;case 14:return i=t.type,n=Kt(i,t.pendingProps),n=Kt(i.type,n),Mh(e,t,i,n,r);case 15:return Um(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:Kt(i,n),Wo(e,t),t.tag=1,pt(i)?(e=!0,ua(t)):e=!1,ln(t,r),ym(t,i,n),Fc(t,i,n,r),jc(null,t,i,!0,e,r);case 19:return qm(e,t,r);case 22:return Hm(e,t,r)}throw Error(A(156,t.tag))};function ug(e,t){return Mf(e,t)}function lb(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,i){return new lb(e,t,r,i)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cb(e){if(typeof e=="function")return pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pu)return 11;if(e===Ou)return 14}return 2}function Yr(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function qo(e,t,r,i,n,s){var o=2;if(i=e,typeof e=="function")pd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wi:return Si(r.children,n,s,t);case Lu:o=8,n|=8;break;case cc:return e=Nt(12,r,t,n|2),e.elementType=cc,e.lanes=s,e;case uc:return e=Nt(13,r,t,n),e.elementType=uc,e.lanes=s,e;case dc:return e=Nt(19,r,t,n),e.elementType=dc,e.lanes=s,e;case bf:return Ga(r,n,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vf:o=10;break e;case yf:o=9;break e;case Pu:o=11;break e;case Ou:o=14;break e;case Or:o=16,i=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Nt(o,r,t,n),t.elementType=e,t.type=i,t.lanes=s,t}function Si(e,t,r,i){return e=Nt(7,e,i,t),e.lanes=r,e}function Ga(e,t,r,i){return e=Nt(22,e,i,t),e.elementType=bf,e.lanes=r,e.stateNode={isHidden:!1},e}function Ml(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function Dl(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ub(e,t,r,i,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function fd(e,t,r,i,n,s,o,l,a){return e=new ub(e,t,r,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(s),e}function db(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function dg(e){if(!e)return Jr;e=e._reactInternals;e:{if(Mi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(pt(r))return um(e,r,t)}return t}function hg(e,t,r,i,n,s,o,l,a){return e=fd(r,i,!0,e,n,s,o,l,a),e.context=dg(null),r=e.current,i=st(),n=Xr(r),s=wr(i,n),s.callback=t??null,Kr(r,s,n),e.current.lanes=n,Ws(e,n,i),ft(e,i),e}function Ka(e,t,r,i){var n=t.current,s=st(),o=Xr(n);return r=dg(r),t.context===null?t.context=r:t.pendingContext=r,t=wr(s,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Kr(n,t,o),e!==null&&(Zt(e,n,o,s),jo(e,n,o)),o}function ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function md(e,t){qh(e,t),(e=e.alternate)&&qh(e,t)}function hb(){return null}var pg=typeof reportError=="function"?reportError:function(e){console.error(e)};function gd(e){this._internalRoot=e}qa.prototype.render=gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ka(e,t,null,null)};qa.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zi(function(){Ka(null,e,null,null)}),t[_r]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nr.length&&t!==0&&t<Nr[r].priority;r++);Nr.splice(r,0,e),r===0&&Wf(e)}};function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function pb(e,t,r,i,n){if(n){if(typeof i=="function"){var s=i;i=function(){var c=ka(o);s.call(c)}}var o=hg(t,i,e,0,null,!1,!1,"",Xh);return e._reactRootContainer=o,e[_r]=o.current,Es(e.nodeType===8?e.parentNode:e),zi(),o}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var l=i;i=function(){var c=ka(a);l.call(c)}}var a=fd(e,0,!1,null,null,!1,!1,"",Xh);return e._reactRootContainer=a,e[_r]=a.current,Es(e.nodeType===8?e.parentNode:e),zi(function(){Ka(t,a,r,i)}),a}function Ya(e,t,r,i,n){var s=r._reactRootContainer;if(s){var o=s;if(typeof n=="function"){var l=n;n=function(){var a=ka(o);l.call(a)}}Ka(t,o,e,n)}else o=pb(r,t,e,n,i);return ka(o)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Qn(t.pendingLanes);r!==0&&(Mu(t,r|1),ft(t,Ee()),!(ee&6)&&(yn=Ee()+500,oi()))}break;case 13:zi(function(){var i=kr(e,1);if(i!==null){var n=st();Zt(i,e,1,n)}}),md(e,1)}};Du=function(e){if(e.tag===13){var t=kr(e,134217728);if(t!==null){var r=st();Zt(t,e,134217728,r)}md(e,134217728)}};jf=function(e){if(e.tag===13){var t=Xr(e),r=kr(e,t);if(r!==null){var i=st();Zt(r,e,t,i)}md(e,t)}};Uf=function(){return ae};Hf=function(e,t){var r=ae;try{return ae=e,t()}finally{ae=r}};xc=function(e,t,r){switch(t){case"input":if(fc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var n=Ba(i);if(!n)throw Error(A(90));xf(i),fc(i,n)}}}break;case"textarea":kf(e,r);break;case"select":t=r.value,t!=null&&nn(e,!!r.multiple,t,!1)}};Af=ud;Lf=zi;var fb={usingClientEntryPoint:!1,Events:[Ks,Xi,Ba,Tf,zf,ud]},Bn={findFiberByHostInstance:vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mb={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||hb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ma=$o.inject(mb),dr=$o}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fb;Tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(t))throw Error(A(200));return db(e,t,null,r)};Tt.createRoot=function(e,t){if(!vd(e))throw Error(A(299));var r=!1,i="",n=pg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=fd(e,1,!1,null,null,r,!1,i,n),e[_r]=t.current,Es(e.nodeType===8?e.parentNode:e),new gd(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return zi(e)};Tt.hydrate=function(e,t,r){if(!Xa(t))throw Error(A(200));return Ya(null,e,t,!0,r)};Tt.hydrateRoot=function(e,t,r){if(!vd(e))throw Error(A(405));var i=r!=null&&r.hydratedSources||null,n=!1,s="",o=pg;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=hg(t,null,e,1,r??null,n,!1,s,o),e[_r]=t.current,Es(e),i)for(e=0;e<i.length;e++)r=i[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new qa(t)};Tt.render=function(e,t,r){if(!Xa(t))throw Error(A(200));return Ya(null,e,t,!1,r)};Tt.unmountComponentAtNode=function(e){if(!Xa(e))throw Error(A(40));return e._reactRootContainer?(zi(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};Tt.unstable_batchedUpdates=ud;Tt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Xa(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ya(e,t,r,!1,i)};Tt.version="18.2.0-next-9e3b772b8-20220608";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(e){console.error(e)}}fg(),hf.exports=Tt;var gb=hf.exports,Yh=gb;ac.createRoot=Yh.createRoot,ac.hydrateRoot=Yh.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ms.apply(this,arguments)}var wi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wi||(wi={}));const Qh="popstate";function vb(e){e===void 0&&(e={});function t(i,n){let{pathname:s,search:o,hash:l}=i.location;return eu("",{pathname:s,search:o,hash:l},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(i,n){return typeof n=="string"?n:Sa(n)}return bb(t,r,null,e)}function Jt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yb(){return Math.random().toString(36).substr(2,8)}function Zh(e,t){return{usr:e.state,key:e.key,idx:t}}function eu(e,t,r,i){return r===void 0&&(r=null),Ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qa(t):t,{state:r,key:t&&t.key||i||yb()})}function Sa(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Qa(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function bb(e,t,r,i){i===void 0&&(i={});let{window:n=document.defaultView,v5Compat:s=!1}=i,o=n.history,l=wi.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(Ms({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=wi.Pop;let k=h(),v=k==null?null:k-c;c=k,a&&a({action:l,location:w.location,delta:v})}function p(k,v){l=wi.Push;let f=eu(w.location,k,v);r&&r(f,k),c=h()+1;let b=Zh(f,c),x=w.createHref(f);try{o.pushState(b,"",x)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;n.location.assign(x)}s&&a&&a({action:l,location:w.location,delta:1})}function g(k,v){l=wi.Replace;let f=eu(w.location,k,v);r&&r(f,k),c=h();let b=Zh(f,c),x=w.createHref(f);o.replaceState(b,"",x),s&&a&&a({action:l,location:w.location,delta:0})}function y(k){let v=n.location.origin!=="null"?n.location.origin:n.location.href,f=typeof k=="string"?k:Sa(k);return Jt(v,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,v)}let w={get action(){return l},get location(){return e(n,o)},listen(k){if(a)throw new Error("A history only accepts one active listener");return n.addEventListener(Qh,d),a=k,()=>{n.removeEventListener(Qh,d),a=null}},createHref(k){return t(n,k)},createURL:y,encodeLocation(k){let v=y(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(k){return o.go(k)}};return w}var Jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jh||(Jh={}));function mg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function wb(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:n=""}=typeof e=="string"?Qa(e):e;return{pathname:r?r.startsWith("/")?r:xb(r,t):t,search:kb(i),hash:Sb(n)}}function xb(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function Rl(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _b(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gg(e,t){let r=_b(e);return t?r.map((i,n)=>n===e.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function vg(e,t,r,i){i===void 0&&(i=!1);let n;typeof e=="string"?n=Qa(e):(n=Ms({},e),Jt(!n.pathname||!n.pathname.includes("?"),Rl("?","pathname","search",n)),Jt(!n.pathname||!n.pathname.includes("#"),Rl("#","pathname","hash",n)),Jt(!n.search||!n.search.includes("#"),Rl("#","search","hash",n)));let s=e===""||n.pathname==="",o=s?"/":n.pathname,l;if(o==null)l=r;else{let d=t.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;n.pathname=p.join("/")}l=d>=0?t[d]:"/"}let a=wb(n,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&r.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const yg=e=>e.join("/").replace(/\/\/+/g,"/"),kb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,bg=["post","put","patch","delete"];new Set(bg);const Cb=["get",...bg];new Set(Cb);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ca.apply(this,arguments)}const wg=O.createContext(null),$n=O.createContext(null),yd=O.createContext(null),Za=O.createContext({outlet:null,matches:[],isDataRoute:!1});function $b(e,t){let{relative:r}=t===void 0?{}:t;Ja()||Jt(!1);let{basename:i,navigator:n}=O.useContext($n),{hash:s,pathname:o,search:l}=_g(e,{relative:r}),a=o;return i!=="/"&&(a=o==="/"?i:yg([i,o])),n.createHref({pathname:a,search:l,hash:s})}function Ja(){return O.useContext(yd)!=null}function el(){return Ja()||Jt(!1),O.useContext(yd).location}function xg(e){O.useContext($n).static||O.useLayoutEffect(e)}function Eb(){let{isDataRoute:e}=O.useContext(Za);return e?Pb():Tb()}function Tb(){Ja()||Jt(!1);let e=O.useContext(wg),{basename:t,future:r,navigator:i}=O.useContext($n),{matches:n}=O.useContext(Za),{pathname:s}=el(),o=JSON.stringify(gg(n,r.v7_relativeSplatPath)),l=O.useRef(!1);return xg(()=>{l.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){i.go(c);return}let d=vg(c,JSON.parse(o),s,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:yg([t,d.pathname])),(h.replace?i.replace:i.push)(d,h.state,h)},[t,i,o,s,e])}function _g(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=O.useContext($n),{matches:n}=O.useContext(Za),{pathname:s}=el(),o=JSON.stringify(gg(n,i.v7_relativeSplatPath));return O.useMemo(()=>vg(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}var kg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kg||{}),Sg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sg||{});function zb(e){let t=O.useContext(wg);return t||Jt(!1),t}function Ab(e){let t=O.useContext(Za);return t||Jt(!1),t}function Lb(e){let t=Ab(),r=t.matches[t.matches.length-1];return r.route.id||Jt(!1),r.route.id}function Pb(){let{router:e}=zb(kg.UseNavigateStable),t=Lb(Sg.UseNavigateStable),r=O.useRef(!1);return xg(()=>{r.current=!0}),O.useCallback(function(n,s){s===void 0&&(s={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Ca({fromRouteId:t},s)))},[e,t])}function Ob(e){let{basename:t="/",children:r=null,location:i,navigationType:n=wi.Pop,navigator:s,static:o=!1,future:l}=e;Ja()&&Jt(!1);let a=t.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:a,navigator:s,static:o,future:Ca({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof i=="string"&&(i=Qa(i));let{pathname:h="/",search:d="",hash:p="",state:g=null,key:y="default"}=i,w=O.useMemo(()=>{let k=mg(h,a);return k==null?null:{location:{pathname:k,search:d,hash:p,state:g,key:y},navigationType:n}},[a,h,d,p,g,y,n]);return w==null?null:O.createElement($n.Provider,{value:c},O.createElement(yd.Provider,{children:r,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},tu.apply(this,arguments)}function Ib(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Nb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mb(e,t){return e.button===0&&(!t||t==="_self")&&!Nb(e)}const Db=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Rb="6";try{window.__reactRouterVersion=Rb}catch{}const Fb="startTransition",ep=U[Fb];function Bb(e){let{basename:t,children:r,future:i,window:n}=e,s=O.useRef();s.current==null&&(s.current=vb({window:n,v5Compat:!0}));let o=s.current,[l,a]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},h=O.useCallback(d=>{c&&ep?ep(()=>a(d)):a(d)},[a,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.createElement(Ob,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:i})}const Vb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fl=O.forwardRef(function(t,r){let{onClick:i,relative:n,reloadDocument:s,replace:o,state:l,target:a,to:c,preventScrollReset:h,unstable_viewTransition:d}=t,p=Ib(t,Db),{basename:g}=O.useContext($n),y,w=!1;if(typeof c=="string"&&jb.test(c)&&(y=c,Vb))try{let b=new URL(window.location.href),x=c.startsWith("//")?new URL(b.protocol+c):new URL(c),_=mg(x.pathname,g);x.origin===b.origin&&_!=null?c=_+x.search+x.hash:w=!0}catch{}let k=$b(c,{relative:n}),v=Ub(c,{replace:o,state:l,target:a,preventScrollReset:h,relative:n,unstable_viewTransition:d});function f(b){i&&i(b),b.defaultPrevented||v(b)}return O.createElement("a",tu({},p,{href:y||k,onClick:w||s?i:f,ref:r,target:a}))});var tp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tp||(tp={}));var rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));function Ub(e,t){let{target:r,replace:i,state:n,preventScrollReset:s,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,a=Eb(),c=el(),h=_g(e,{relative:o});return O.useCallback(d=>{if(Mb(d,r)){d.preventDefault();let p=i!==void 0?i:Sa(c)===Sa(h);a(e,{replace:p,state:n,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,a,h,i,n,r,e,s,o,l])}const ls=/^[a-z0-9]+(-[a-z0-9]+)*$/,tl=(e,t,r,i="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;i=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:i,prefix:a,name:l};return t&&!Xo(c)?null:c}const s=n[0],o=s.split("-");if(o.length>1){const l={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!Xo(l)?null:l}if(r&&i===""){const l={provider:i,prefix:"",name:s};return t&&!Xo(l,r)?null:l}return null},Xo=(e,t)=>e?!!((e.provider===""||e.provider.match(ls))&&(t&&e.prefix===""||e.prefix.match(ls))&&e.name.match(ls)):!1,Cg=Object.freeze({left:0,top:0,width:16,height:16}),$a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),bd=Object.freeze({...Cg,...$a}),ru=Object.freeze({...bd,body:"",hidden:!1});function Hb(e,t){const r={};!e.hFlip!=!t.hFlip&&(r.hFlip=!0),!e.vFlip!=!t.vFlip&&(r.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(r.rotate=i),r}function ip(e,t){const r=Hb(e,t);for(const i in ru)i in $a?i in e&&!(i in r)&&(r[i]=$a[i]):i in t?r[i]=t[i]:i in e&&(r[i]=e[i]);return r}function Wb(e,t){const r=e.icons,i=e.aliases||Object.create(null),n=Object.create(null);function s(o){if(r[o])return n[o]=[];if(!(o in n)){n[o]=null;const l=i[o]&&i[o].parent,a=l&&s(l);a&&(n[o]=[l].concat(a))}return n[o]}return(t||Object.keys(r).concat(Object.keys(i))).forEach(s),n}function Gb(e,t,r){const i=e.icons,n=e.aliases||Object.create(null);let s={};function o(l){s=ip(i[l]||n[l],s)}return o(t),r.forEach(o),ip(e,s)}function $g(e,t){const r=[];if(typeof e!="object"||typeof e.icons!="object")return r;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),r.push(n)});const i=Wb(e);for(const n in i){const s=i[n];s&&(t(n,Gb(e,n,s)),r.push(n))}return r}const Kb={provider:"",aliases:{},not_found:{},...Cg};function Bl(e,t){for(const r in t)if(r in e&&typeof e[r]!=typeof t[r])return!1;return!0}function Eg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Bl(e,Kb))return null;const r=t.icons;for(const n in r){const s=r[n];if(!n.match(ls)||typeof s.body!="string"||!Bl(s,ru))return null}const i=t.aliases||Object.create(null);for(const n in i){const s=i[n],o=s.parent;if(!n.match(ls)||typeof o!="string"||!r[o]&&!i[o]||!Bl(s,ru))return null}return t}const np=Object.create(null);function qb(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Ai(e,t){const r=np[e]||(np[e]=Object.create(null));return r[t]||(r[t]=qb(e,t))}function wd(e,t){return Eg(t)?$g(t,(r,i)=>{i?e.icons[r]=i:e.missing.add(r)}):[]}function Xb(e,t,r){try{if(typeof r.body=="string")return e.icons[t]={...r},!0}catch{}return!1}let Ds=!1;function Tg(e){return typeof e=="boolean"&&(Ds=e),Ds}function Yb(e){const t=typeof e=="string"?tl(e,!0,Ds):e;if(t){const r=Ai(t.provider,t.prefix),i=t.name;return r.icons[i]||(r.missing.has(i)?null:void 0)}}function Qb(e,t){const r=tl(e,!0,Ds);if(!r)return!1;const i=Ai(r.provider,r.prefix);return Xb(i,r.name,t)}function Zb(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Ds&&!t&&!e.prefix){let n=!1;return Eg(e)&&(e.prefix="",$g(e,(s,o)=>{o&&Qb(s,o)&&(n=!0)})),n}const r=e.prefix;if(!Xo({provider:t,prefix:r,name:"a"}))return!1;const i=Ai(t,r);return!!wd(i,e)}const zg=Object.freeze({width:null,height:null}),Ag=Object.freeze({...zg,...$a}),Jb=/(-?[0-9.]*[0-9]+[0-9.]*)/g,e1=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function sp(e,t,r){if(t===1)return e;if(r=r||100,typeof e=="number")return Math.ceil(e*t*r)/r;if(typeof e!="string")return e;const i=e.split(Jb);if(i===null||!i.length)return e;const n=[];let s=i.shift(),o=e1.test(s);for(;;){if(o){const l=parseFloat(s);isNaN(l)?n.push(s):n.push(Math.ceil(l*t*r)/r)}else n.push(s);if(s=i.shift(),s===void 0)return n.join("");o=!o}}const t1=e=>e==="unset"||e==="undefined"||e==="none";function r1(e,t){const r={...bd,...e},i={...Ag,...t},n={left:r.left,top:r.top,width:r.width,height:r.height};let s=r.body;[r,i].forEach(y=>{const w=[],k=y.hFlip,v=y.vFlip;let f=y.rotate;k?v?f+=2:(w.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),w.push("scale(-1 1)"),n.top=n.left=0):v&&(w.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),w.push("scale(1 -1)"),n.top=n.left=0);let b;switch(f<0&&(f-=Math.floor(f/4)*4),f=f%4,f){case 1:b=n.height/2+n.top,w.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:w.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:b=n.width/2+n.left,w.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}f%2===1&&(n.left!==n.top&&(b=n.left,n.left=n.top,n.top=b),n.width!==n.height&&(b=n.width,n.width=n.height,n.height=b)),w.length&&(s='<g transform="'+w.join(" ")+'">'+s+"</g>")});const o=i.width,l=i.height,a=n.width,c=n.height;let h,d;o===null?(d=l===null?"1em":l==="auto"?c:l,h=sp(d,a/c)):(h=o==="auto"?a:o,d=l===null?sp(h,c/a):l==="auto"?c:l);const p={},g=(y,w)=>{t1(w)||(p[y]=w.toString())};return g("width",h),g("height",d),p.viewBox=n.left.toString()+" "+n.top.toString()+" "+a.toString()+" "+c.toString(),{attributes:p,body:s}}const i1=/\sid="(\S+)"/g,n1="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let s1=0;function o1(e,t=n1){const r=[];let i;for(;i=i1.exec(e);)r.push(i[1]);if(!r.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(s=>{const o=typeof t=="function"?t(s):t+(s1++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const iu=Object.create(null);function a1(e,t){iu[e]=t}function nu(e){return iu[e]||iu[""]}function xd(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const _d=Object.create(null),Vn=["https://api.simplesvg.com","https://api.unisvg.com"],Yo=[];for(;Vn.length>0;)Vn.length===1||Math.random()>.5?Yo.push(Vn.shift()):Yo.push(Vn.pop());_d[""]=xd({resources:["https://api.iconify.design"].concat(Yo)});function l1(e,t){const r=xd(t);return r===null?!1:(_d[e]=r,!0)}function kd(e){return _d[e]}const c1=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let op=c1();function u1(e,t){const r=kd(e);if(!r)return 0;let i;if(!r.maxURL)i=0;else{let n=0;r.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";i=r.maxURL-n-r.path.length-s.length}return i}function d1(e){return e===404}const h1=(e,t,r)=>{const i=[],n=u1(e,t),s="icons";let o={type:s,provider:e,prefix:t,icons:[]},l=0;return r.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(i.push(o),o={type:s,provider:e,prefix:t,icons:[]},l=a.length),o.icons.push(a)}),i.push(o),i};function p1(e){if(typeof e=="string"){const t=kd(e);if(t)return t.path}return"/"}const f1=(e,t,r)=>{if(!op){r("abort",424);return}let i=p1(t.provider);switch(t.type){case"icons":{const s=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});i+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:r("abort",400);return}let n=503;op(e+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{r(d1(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?r("abort",s):r("next",n)});return}setTimeout(()=>{r("success",s)})}).catch(()=>{r("next",n)})},m1={prepare:h1,send:f1};function g1(e){const t={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return e.forEach(n=>{if(i.name===n.name&&i.prefix===n.prefix&&i.provider===n.provider)return;i=n;const s=n.provider,o=n.prefix,l=n.name,a=r[s]||(r[s]=Object.create(null)),c=a[o]||(a[o]=Ai(s,o));let h;l in c.icons?h=t.loaded:o===""||c.missing.has(l)?h=t.missing:h=t.pending;const d={provider:s,prefix:o,name:l};h.push(d)}),t}function Lg(e,t){e.forEach(r=>{const i=r.loaderCallbacks;i&&(r.loaderCallbacks=i.filter(n=>n.id!==t))})}function v1(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1;const i=e.provider,n=e.prefix;t.forEach(s=>{const o=s.icons,l=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(e.icons[c])o.loaded.push({provider:i,prefix:n,name:c});else if(e.missing.has(c))o.missing.push({provider:i,prefix:n,name:c});else return r=!0,!0;return!1}),o.pending.length!==l&&(r||Lg([e],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let y1=0;function b1(e,t,r){const i=y1++,n=Lg.bind(null,r,i);if(!t.pending.length)return n;const s={id:i,icons:t,callback:e,abort:n};return r.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}function w1(e,t=!0,r=!1){const i=[];return e.forEach(n=>{const s=typeof n=="string"?tl(n,t,r):n;s&&i.push(s)}),i}var x1={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _1(e,t,r,i){const n=e.resources.length,s=e.random?Math.floor(Math.random()*n):e.index;let o;if(e.random){let S=e.resources.slice(0);for(o=[];S.length>1;){const E=Math.floor(Math.random()*S.length);o.push(S[E]),S=S.slice(0,E).concat(S.slice(E+1))}o=o.concat(S)}else o=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let a="pending",c=0,h,d=null,p=[],g=[];typeof i=="function"&&g.push(i);function y(){d&&(clearTimeout(d),d=null)}function w(){a==="pending"&&(a="aborted"),y(),p.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),p=[]}function k(S,E){E&&(g=[]),typeof S=="function"&&g.push(S)}function v(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:p.length,subscribe:k,abort:w}}function f(){a="failed",g.forEach(S=>{S(void 0,h)})}function b(){p.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),p=[]}function x(S,E,$){const P=E!=="success";switch(p=p.filter(C=>C!==S),a){case"pending":break;case"failed":if(P||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){h=$,f();return}if(P){h=$,p.length||(o.length?_():f());return}if(y(),b(),!e.random){const C=e.resources.indexOf(S.resource);C!==-1&&C!==e.index&&(e.index=C)}a="completed",g.forEach(C=>{C($)})}function _(){if(a!=="pending")return;y();const S=o.shift();if(S===void 0){if(p.length){d=setTimeout(()=>{y(),a==="pending"&&(b(),f())},e.timeout);return}f();return}const E={status:"pending",resource:S,callback:($,P)=>{x(E,$,P)}};p.push(E),c++,d=setTimeout(_,e.rotate),r(S,t,E.callback)}return setTimeout(_),v}function Pg(e){const t={...x1,...e};let r=[];function i(){r=r.filter(l=>l().status==="pending")}function n(l,a,c){const h=_1(t,l,a,(d,p)=>{i(),c&&c(d,p)});return r.push(h),h}function s(l){return r.find(a=>l(a))||null}return{query:n,find:s,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:i}}function ap(){}const Vl=Object.create(null);function k1(e){if(!Vl[e]){const t=kd(e);if(!t)return;const r=Pg(t),i={config:t,redundancy:r};Vl[e]=i}return Vl[e]}function S1(e,t,r){let i,n;if(typeof e=="string"){const s=nu(e);if(!s)return r(void 0,424),ap;n=s.send;const o=k1(e);o&&(i=o.redundancy)}else{const s=xd(e);if(s){i=Pg(s);const o=e.resources?e.resources[0]:"",l=nu(o);l&&(n=l.send)}}return!i||!n?(r(void 0,424),ap):i.query(t,n,r)().abort}const lp="iconify2",Rs="iconify",Og=Rs+"-count",cp=Rs+"-version",Ig=36e5,C1=168;function su(e,t){try{return e.getItem(t)}catch{}}function Sd(e,t,r){try{return e.setItem(t,r),!0}catch{}}function up(e,t){try{e.removeItem(t)}catch{}}function ou(e,t){return Sd(e,Og,t.toString())}function au(e){return parseInt(su(e,Og))||0}const rl={local:!0,session:!0},Ng={local:new Set,session:new Set};let Cd=!1;function $1(e){Cd=e}let Eo=typeof window>"u"?{}:window;function Mg(e){const t=e+"Storage";try{if(Eo&&Eo[t]&&typeof Eo[t].length=="number")return Eo[t]}catch{}rl[e]=!1}function Dg(e,t){const r=Mg(e);if(!r)return;const i=su(r,cp);if(i!==lp){if(i){const l=au(r);for(let a=0;a<l;a++)up(r,Rs+a.toString())}Sd(r,cp,lp),ou(r,0);return}const n=Math.floor(Date.now()/Ig)-C1,s=l=>{const a=Rs+l.toString(),c=su(r,a);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>n&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&t(h,l))return!0}catch{}up(r,a)}};let o=au(r);for(let l=o-1;l>=0;l--)s(l)||(l===o-1?(o--,ou(r,o)):Ng[e].add(l))}function Rg(){if(!Cd){$1(!0);for(const e in rl)Dg(e,t=>{const r=t.data,i=t.provider,n=r.prefix,s=Ai(i,n);if(!wd(s,r).length)return!1;const o=r.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function E1(e,t){const r=e.lastModifiedCached;if(r&&r>=t)return r===t;if(e.lastModifiedCached=t,r)for(const i in rl)Dg(i,n=>{const s=n.data;return n.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function T1(e,t){Cd||Rg();function r(i){let n;if(!rl[i]||!(n=Mg(i)))return;const s=Ng[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=au(n),!ou(n,o+1))return;const l={cached:Math.floor(Date.now()/Ig),provider:e.provider,data:t};return Sd(n,Rs+o.toString(),JSON.stringify(l))}t.lastModified&&!E1(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),r("local")||r("session"))}function dp(){}function z1(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,v1(e)}))}function A1(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:r,prefix:i}=e,n=e.iconsToLoad;delete e.iconsToLoad;let s;if(!n||!(s=nu(r)))return;s.prepare(r,i,n).forEach(l=>{S1(r,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{e.missing.add(c)});else try{const c=wd(e,a);if(!c.length)return;const h=e.pendingIcons;h&&c.forEach(d=>{h.delete(d)}),T1(e,a)}catch(c){console.error(c)}z1(e)})})}))}const L1=(e,t)=>{const r=w1(e,!0,Tg()),i=g1(r);if(!i.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(i.loaded,i.missing,i.pending,dp)}),()=>{a=!1}}const n=Object.create(null),s=[];let o,l;return i.pending.forEach(a=>{const{provider:c,prefix:h}=a;if(h===l&&c===o)return;o=c,l=h,s.push(Ai(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),i.pending.forEach(a=>{const{provider:c,prefix:h,name:d}=a,p=Ai(c,h),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(d)||(g.add(d),n[c][h].push(d))}),s.forEach(a=>{const{provider:c,prefix:h}=a;n[c][h].length&&A1(a,n[c][h])}),t?b1(t,i,s):dp};function P1(e,t){const r={...e};for(const i in t){const n=t[i],s=typeof n;i in zg?(n===null||n&&(s==="string"||s==="number"))&&(r[i]=n):s===typeof r[i]&&(r[i]=i==="rotate"?n%4:n)}return r}const O1=/[\s,]+/;function I1(e,t){t.split(O1).forEach(r=>{switch(r.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function N1(e,t=0){const r=e.replace(/^-?[0-9.]*/,"");function i(n){for(;n<0;)n+=4;return n%4}if(r===""){const n=parseInt(e);return isNaN(n)?0:i(n)}else if(r!==e){let n=0;switch(r){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(e.slice(0,e.length-r.length));return isNaN(s)?0:(s=s/n,s%1===0?i(s):0)}}return t}function M1(e,t){let r=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)r+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+e+"</svg>"}function D1(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function R1(e){return"data:image/svg+xml,"+D1(e)}function F1(e){return'url("'+R1(e)+'")'}let cs;function B1(){try{cs=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{cs=null}}function V1(e){return cs===void 0&&B1(),cs?cs.createHTML(e):e}const Fg={...Ag,inline:!1},j1={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},U1={display:"inline-block"},lu={backgroundColor:"currentColor"},Bg={backgroundColor:"transparent"},hp={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pp={WebkitMask:lu,mask:lu,background:Bg};for(const e in pp){const t=pp[e];for(const r in hp)t[e+r]=hp[r]}const H1={...Fg,inline:!0};function fp(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const W1=(e,t,r,i)=>{const n=r?H1:Fg,s=P1(n,t),o=t.mode||"svg",l={},a=t.style||{},c={...o==="svg"?j1:{},ref:i};for(let v in t){const f=t[v];if(f!==void 0)switch(v){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":s[v]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&I1(s,f);break;case"color":l.color=f;break;case"rotate":typeof f=="string"?s[v]=N1(f):typeof f=="number"&&(s[v]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete c["aria-hidden"];break;default:n[v]===void 0&&(c[v]=f)}}const h=r1(e,s),d=h.attributes;if(s.inline&&(l.verticalAlign="-0.125em"),o==="svg"){c.style={...l,...a},Object.assign(c,d);let v=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:V1(o1(h.body,f?()=>f+"ID"+v++:"iconifyReact"))},ce.createElement("svg",c)}const{body:p,width:g,height:y}=e,w=o==="mask"||(o==="bg"?!1:p.indexOf("currentColor")!==-1),k=M1(p,{...d,width:g+"",height:y+""});return c.style={...l,"--svg":F1(k),width:fp(d.width),height:fp(d.height),...U1,...w?lu:Bg,...a},ce.createElement("span",c)};Tg(!0);a1("",m1);if(typeof document<"u"&&typeof window<"u"){Rg();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Zb(i))&&console.error(r)}catch{console.error(r)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let r in t){const i="IconifyProviders["+r+"] is invalid.";try{const n=t[r];if(typeof n!="object"||!n||n.resources===void 0)continue;l1(r,n)||console.error(i)}catch{console.error(i)}}}}class Vg extends ce.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const r=this.state,i=this.props.icon;if(typeof i=="object"&&i!==null&&typeof i.body=="string"){this._icon="",this._abortLoading(),(t||r.icon===null)&&this._setData({data:i});return}let n;if(typeof i!="string"||(n=tl(i,!1,!0))===null){this._abortLoading(),this._setData(null);return}const s=Yb(n);if(!s){(!this._loading||this._loading.name!==i)&&(this._abortLoading(),this._icon="",this._setData(null),s!==null&&(this._loading={name:i,abort:L1([n],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||r.icon===null){this._abortLoading(),this._icon=i;const o=["iconify"];n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),this._setData({data:s,classes:o}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,r=this.state.icon;if(r===null)return t.children?t.children:ce.createElement("span",{});let i=t;return r.classes&&(i={...t,className:(typeof t.className=="string"?t.className+" ":"")+r.classes.join(" ")}),W1({...bd,...r.data},i,t._inline,t._ref)}}const qt=ce.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!1};return ce.createElement(Vg,i)});ce.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!0};return ce.createElement(Vg,i)});function G1({lightMode:e,setLightMode:t,fontIncreased:r,setFontIncreased:i}){const n=el(),s=O.useRef("");O.useEffect(function(){n.hash&&(s.current=n.hash.slice(1)),s.current&&document.getElementById(s.current)&&setTimeout(function(){var a;(a=document.getElementById(s.current))==null||a.scrollIntoView({behavior:"smooth",block:"start"}),s.current=""},100)},[n]);function o(){t(a=>!a),localStorage.setItem("mode",String(!e))}function l(){i(a=>!a),localStorage.setItem("font",String(!r))}return T.jsx("header",{className:"fade-in-header",children:T.jsx("nav",{style:{backgroundColor:e?"#282836":"#CACAD3",color:e?"white":"black"},children:T.jsxs("ul",{className:"header__features",children:[T.jsx("li",{style:{backgroundColor:e?"#141515":"#EEF0F3"},className:"header__homepage",children:T.jsx(Fl,{to:"#",children:T.jsx(qt,{icon:"line-md:home-md-twotone-alt",width:"24",height:"24"})})}),T.jsx("li",{className:"header__link",children:T.jsx(Fl,{to:"#projects",children:"Projects"})}),T.jsx("li",{className:"header__link",children:T.jsx(Fl,{to:"#contacts",children:"Contacts"})}),T.jsx("li",{className:"header__link",children:T.jsxs("a",{href:"https://github.com/lydiahallie/javascript-questions#1-whats-the-output",target:"_blank",rel:"noreferrer",children:["JS ",T.jsx(qt,{icon:"lets-icons:external"})]})}),T.jsxs("li",{className:"header__right",children:[T.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:l,children:r?"text_decrease":"text_increase"}),T.jsx("span",{className:"material-symbols-outlined hover pointer right",onClick:o,children:e?"dark_mode":"light_mode"})]})]})})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=globalThis,$d=Qo.ShadowRoot&&(Qo.ShadyCSS===void 0||Qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ed=Symbol(),mp=new WeakMap;let jg=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ed)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if($d&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=mp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mp.set(r,t))}return t}toString(){return this.cssText}};const K1=e=>new jg(typeof e=="string"?e:e+"",void 0,Ed),W=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new jg(r,e,Ed)},q1=(e,t)=>{if($d)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Qo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},gp=$d?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return K1(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:X1,defineProperty:Y1,getOwnPropertyDescriptor:Q1,getOwnPropertyNames:Z1,getOwnPropertySymbols:J1,getPrototypeOf:ew}=Object,Qr=globalThis,vp=Qr.trustedTypes,tw=vp?vp.emptyScript:"",jl=Qr.reactiveElementPolyfillSupport,us=(e,t)=>e,bn={toAttribute(e,t){switch(t){case Boolean:e=e?tw:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Td=(e,t)=>!X1(e,t),yp={attribute:!0,type:String,converter:bn,reflect:!1,hasChanged:Td};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Qr.litPropertyMetadata??(Qr.litPropertyMetadata=new WeakMap);class Ui extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=yp){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Y1(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:s}=Q1(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yp}static _$Ei(){if(this.hasOwnProperty(us("elementProperties")))return;const t=ew(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(us("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(us("properties"))){const r=this.properties,i=[...Z1(r),...J1(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(gp(n))}else t!==void 0&&r.push(gp(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return q1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r){var s;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:bn).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){var s;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:bn;this._$Em=n,this[n]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Td)(this[t],r))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$Ej()}catch(n){throw t=!1,this._$Ej(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}}Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},Ui[us("elementProperties")]=new Map,Ui[us("finalized")]=new Map,jl==null||jl({ReactiveElement:Ui}),(Qr.reactiveElementVersions??(Qr.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=globalThis,Ea=ds.trustedTypes,bp=Ea?Ea.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ug="$lit$",Dr=`lit$${(Math.random()+"").slice(9)}$`,Hg="?"+Dr,rw=`<${Hg}>`,Li=document,Fs=()=>Li.createComment(""),Bs=e=>e===null||typeof e!="object"&&typeof e!="function",Wg=Array.isArray,iw=e=>Wg(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ul=`[ 	
\f\r]`,jn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wp=/-->/g,xp=/>/g,hi=RegExp(`>|${Ul}(?:([^\\s"'>=/]+)(${Ul}*=${Ul}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_p=/'/g,kp=/"/g,Gg=/^(?:script|style|textarea|title)$/i,nw=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),z=nw(1),St=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Sp=new WeakMap,xi=Li.createTreeWalker(Li,129);function Kg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bp!==void 0?bp.createHTML(t):t}const sw=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":"",o=jn;for(let l=0;l<r;l++){const a=e[l];let c,h,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===jn?h[1]==="!--"?o=wp:h[1]!==void 0?o=xp:h[2]!==void 0?(Gg.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=hi):h[3]!==void 0&&(o=hi):o===hi?h[0]===">"?(o=n??jn,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?hi:h[3]==='"'?kp:_p):o===kp||o===_p?o=hi:o===wp||o===xp?o=jn:(o=hi,n=void 0);const g=o===hi&&e[l+1].startsWith("/>")?" ":"";s+=o===jn?a+rw:d>=0?(i.push(c),a.slice(0,d)+Ug+a.slice(d)+Dr+g):a+Dr+(d===-2?l:g)}return[Kg(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class Vs{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const l=t.length-1,a=this.parts,[c,h]=sw(t,r);if(this.el=Vs.createElement(c,i),xi.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=xi.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Ug)){const p=h[o++],g=n.getAttribute(d).split(Dr),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?aw:y[1]==="?"?lw:y[1]==="@"?cw:il}),n.removeAttribute(d)}else d.startsWith(Dr)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(Gg.test(n.tagName)){const d=n.textContent.split(Dr),p=d.length-1;if(p>0){n.textContent=Ea?Ea.emptyScript:"";for(let g=0;g<p;g++)n.append(d[g],Fs()),xi.nextNode(),a.push({type:2,index:++s});n.append(d[p],Fs())}}}else if(n.nodeType===8)if(n.data===Hg)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(Dr,d+1))!==-1;)a.push({type:7,index:s}),d+=Dr.length-1}s++}}static createElement(t,r){const i=Li.createElement("template");return i.innerHTML=t,i}}function wn(e,t,r=e,i){var o,l;if(t===St)return t;let n=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const s=Bs(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(t=wn(e,n._$AS(e,t.values),n,i)),t}class ow{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??Li).importNode(r,!0);xi.currentNode=n;let s=xi.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new Xs(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new uw(s,this,t)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=xi.nextNode(),o++)}return xi.currentNode=Li,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Xs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=wn(this,t,r),Bs(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==St&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):iw(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==me&&Bs(this._$AH)?this._$AA.nextSibling.data=t:this.$(Li.createTextNode(t)),this._$AH=t}g(t){var s;const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Vs.createElement(Kg(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const o=new ow(n,this),l=o.u(this.options);o.p(r),this.$(l),this._$AH=o}}_$AC(t){let r=Sp.get(t.strings);return r===void 0&&Sp.set(t.strings,r=new Vs(t)),r}T(t){Wg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Xs(this.k(Fs()),this.k(Fs()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class il{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,s){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=wn(this,t,r,0),o=!Bs(t)||t!==this._$AH&&t!==St,o&&(this._$AH=t);else{const l=t;let a,c;for(t=s[0],a=0;a<s.length-1;a++)c=wn(this,l[i+a],r,a),c===St&&(c=this._$AH[a]),o||(o=!Bs(c)||c!==this._$AH[a]),c===me?t=me:t!==me&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!n&&this.O(t)}O(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class aw extends il{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===me?void 0:t}}let lw=class extends il{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}};class cw extends il{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){if((t=wn(this,t,r,0)??me)===St)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class uw{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wn(this,t)}}const Hl=ds.litHtmlPolyfillSupport;Hl==null||Hl(Vs,Xs),(ds.litHtmlVersions??(ds.litHtmlVersions=[])).push("3.1.1");const dw=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new Xs(t.insertBefore(Fs(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hs=class extends Ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dw(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return St}};var Jp;hs._$litElement$=!0,hs.finalized=!0,(Jp=globalThis.litElementHydrateSupport)==null||Jp.call(globalThis,{LitElement:hs});const Wl=globalThis.litElementPolyfillSupport;Wl==null||Wl({LitElement:hs});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");var G=W`
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
`,hw=W`
  ${G}

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
`,pw=W`
  ${G}

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
`,qg=Object.defineProperty,fw=Object.defineProperties,mw=Object.getOwnPropertyDescriptor,gw=Object.getOwnPropertyDescriptors,Cp=Object.getOwnPropertySymbols,vw=Object.prototype.hasOwnProperty,yw=Object.prototype.propertyIsEnumerable,Gl=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},$p=(e,t,r)=>t in e?qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Er=(e,t)=>{for(var r in t||(t={}))vw.call(t,r)&&$p(e,r,t[r]);if(Cp)for(var r of Cp(t))yw.call(t,r)&&$p(e,r,t[r]);return e},Ys=(e,t)=>fw(e,gw(t)),u=(e,t,r,i)=>{for(var n=i>1?void 0:i?mw(t,r):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&qg(t,r,n),n},bw=function(e,t){this[0]=e,this[1]=t},ww=e=>{var t=e[Gl("asyncIterator")],r=!1,i,n={};return t==null?(t=e[Gl("iterator")](),i=s=>n[s]=o=>t[s](o)):(t=t.call(e),i=s=>n[s]=o=>{if(r){if(r=!1,s==="throw")throw o;return o}return r=!0,{done:!1,value:new bw(new Promise(l=>{var a=t[s](o);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),n[Gl("iterator")]=()=>n,i("next"),"throw"in t?i("throw"):n.throw=s=>{throw s},"return"in t&&i("return"),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xw={attribute:!0,type:String,converter:bn,reflect:!1,hasChanged:Td},_w=(e=xw,t,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,e),i==="accessor"){const{name:o}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,e)},init(l){return l!==void 0&&this.C(o,void 0,e),l}}}if(i==="setter"){const{name:o}=r;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+i)};function m(e){return(t,r)=>typeof r=="object"?_w(e,t,r):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xg(e){return(t,r)=>{const i=typeof t=="function"?t:t[r];Object.assign(i,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cu=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(r,i,n)=>{const s=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:o,set:l}=typeof i=="object"?r:n??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return cu(r,i,{get(){let a=o.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return cu(r,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kw(e){return(t,r)=>cu(t,r,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(e))??null}})}var F=class extends hs{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Er({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},r);return}let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in i&&i.version&&(s=" v"+i.version),!(n&&s&&n===s)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`)}};F.version="2.12.0";F.dependencies={};u([m()],F.prototype,"dir",2);u([m()],F.prototype,"lang",2);const ei=Math.min,_t=Math.max,Ta=Math.round,To=Math.floor,ti=e=>({x:e,y:e}),Sw={left:"right",right:"left",bottom:"top",top:"bottom"},Cw={start:"end",end:"start"};function uu(e,t,r){return _t(e,ei(t,r))}function En(e,t){return typeof e=="function"?e(t):e}function ri(e){return e.split("-")[0]}function Tn(e){return e.split("-")[1]}function Yg(e){return e==="x"?"y":"x"}function zd(e){return e==="y"?"height":"width"}function Qs(e){return["top","bottom"].includes(ri(e))?"y":"x"}function Ad(e){return Yg(Qs(e))}function $w(e,t,r){r===void 0&&(r=!1);const i=Tn(e),n=Ad(e),s=zd(n);let o=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=za(o)),[o,za(o)]}function Ew(e){const t=za(e);return[du(e),t,du(t)]}function du(e){return e.replace(/start|end/g,t=>Cw[t])}function Tw(e,t,r){const i=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return r?t?n:i:t?i:n;case"left":case"right":return t?s:o;default:return[]}}function zw(e,t,r,i){const n=Tn(e);let s=Tw(ri(e),r==="start",i);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(du)))),s}function za(e){return e.replace(/left|right|bottom|top/g,t=>Sw[t])}function Aw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qg(e){return typeof e!="number"?Aw(e):{top:e,right:e,bottom:e,left:e}}function Aa(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ep(e,t,r){let{reference:i,floating:n}=e;const s=Qs(t),o=Ad(t),l=zd(o),a=ri(t),c=s==="y",h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,p=i[l]/2-n[l]/2;let g;switch(a){case"top":g={x:h,y:i.y-n.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:d};break;case"left":g={x:i.x-n.width,y:d};break;default:g={x:i.x,y:i.y}}switch(Tn(t)){case"start":g[o]-=p*(r&&c?-1:1);break;case"end":g[o]+=p*(r&&c?-1:1);break}return g}const Lw=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:o}=r,l=s.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:d}=Ep(c,i,a),p=i,g={},y=0;for(let w=0;w<l.length;w++){const{name:k,fn:v}=l[w],{x:f,y:b,data:x,reset:_}=await v({x:h,y:d,initialPlacement:i,placement:p,strategy:n,middlewareData:g,rects:c,platform:o,elements:{reference:e,floating:t}});if(h=f??h,d=b??d,g={...g,[k]:{...g[k],...x}},_&&y<=50){y++,typeof _=="object"&&(_.placement&&(p=_.placement),_.rects&&(c=_.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):_.rects),{x:h,y:d}=Ep(c,p,a)),w=-1;continue}}return{x:h,y:d,placement:p,strategy:n,middlewareData:g}};async function Ld(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:s,rects:o,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=En(t,e),y=Qg(g),k=l[p?d==="floating"?"reference":"floating":d],v=Aa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(k)))==null||r?k:k.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),f=d==="floating"?{...o.floating,x:i,y:n}:o.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),x=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},_=Aa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f,offsetParent:b,strategy:a}):f);return{top:(v.top-_.top+y.top)/x.y,bottom:(_.bottom-v.bottom+y.bottom)/x.y,left:(v.left-_.left+y.left)/x.x,right:(_.right-v.right+y.right)/x.x}}const Pw=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:i,placement:n,rects:s,platform:o,elements:l,middlewareData:a}=t,{element:c,padding:h=0}=En(e,t)||{};if(c==null)return{};const d=Qg(h),p={x:r,y:i},g=Ad(n),y=zd(g),w=await o.getDimensions(c),k=g==="y",v=k?"top":"left",f=k?"bottom":"right",b=k?"clientHeight":"clientWidth",x=s.reference[y]+s.reference[g]-p[g]-s.floating[y],_=p[g]-s.reference[g],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let E=S?S[b]:0;(!E||!await(o.isElement==null?void 0:o.isElement(S)))&&(E=l.floating[b]||s.floating[y]);const $=x/2-_/2,P=E/2-w[y]/2-1,C=ei(d[v],P),M=ei(d[f],P),R=C,te=E-w[y]-M,le=E/2-w[y]/2+$,ye=uu(R,le,te),Ie=!a.arrow&&Tn(n)!=null&&le!=ye&&s.reference[y]/2-(le<R?C:M)-w[y]/2<0,We=Ie?le<R?le-R:le-te:0;return{[g]:p[g]+We,data:{[g]:ye,centerOffset:le-ye-We,...Ie&&{alignmentOffset:We}},reset:Ie}}}),Ow=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:n,middlewareData:s,rects:o,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=En(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const v=ri(n),f=ri(l)===l,b=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=p||(f||!w?[za(l)]:Ew(l));!p&&y!=="none"&&x.push(...zw(l,w,y,b));const _=[l,...x],S=await Ld(t,k),E=[];let $=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&E.push(S[v]),d){const R=$w(n,o,b);E.push(S[R[0]],S[R[1]])}if($=[...$,{placement:n,overflows:E}],!E.every(R=>R<=0)){var P,C;const R=(((P=s.flip)==null?void 0:P.index)||0)+1,te=_[R];if(te)return{data:{index:R,overflows:$},reset:{placement:te}};let le=(C=$.filter(ye=>ye.overflows[0]<=0).sort((ye,Ie)=>ye.overflows[1]-Ie.overflows[1])[0])==null?void 0:C.placement;if(!le)switch(g){case"bestFit":{var M;const ye=(M=$.map(Ie=>[Ie.placement,Ie.overflows.filter(We=>We>0).reduce((We,N)=>We+N,0)]).sort((Ie,We)=>Ie[1]-We[1])[0])==null?void 0:M[0];ye&&(le=ye);break}case"initialPlacement":le=l;break}if(n!==le)return{reset:{placement:le}}}return{}}}};async function Iw(e,t){const{placement:r,platform:i,elements:n}=e,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),o=ri(r),l=Tn(r),a=Qs(r)==="y",c=["left","top"].includes(o)?-1:1,h=s&&a?-1:1,d=En(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof y=="number"&&(g=l==="end"?y*-1:y),a?{x:g*h,y:p*c}:{x:p*c,y:g*h}}const Nw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:n,y:s,placement:o,middlewareData:l}=t,a=await Iw(t,e);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:n+a.x,y:s+a.y,data:{...a,placement:o}}}}},Mw=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:k=>{let{x:v,y:f}=k;return{x:v,y:f}}},...a}=En(e,t),c={x:r,y:i},h=await Ld(t,a),d=Qs(ri(n)),p=Yg(d);let g=c[p],y=c[d];if(s){const k=p==="y"?"top":"left",v=p==="y"?"bottom":"right",f=g+h[k],b=g-h[v];g=uu(f,g,b)}if(o){const k=d==="y"?"top":"left",v=d==="y"?"bottom":"right",f=y+h[k],b=y-h[v];y=uu(f,y,b)}const w=l.fn({...t,[p]:g,[d]:y});return{...w,data:{x:w.x-r,y:w.y-i}}}}},Dw=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:s}=t,{apply:o=()=>{},...l}=En(e,t),a=await Ld(t,l),c=ri(r),h=Tn(r),d=Qs(r)==="y",{width:p,height:g}=i.floating;let y,w;c==="top"||c==="bottom"?(y=c,w=h===(await(n.isRTL==null?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(w=c,y=h==="end"?"top":"bottom");const k=g-a[y],v=p-a[w],f=!t.middlewareData.shift;let b=k,x=v;if(d){const S=p-a.left-a.right;x=h||f?ei(v,S):S}else{const S=g-a.top-a.bottom;b=h||f?ei(k,S):S}if(f&&!h){const S=_t(a.left,0),E=_t(a.right,0),$=_t(a.top,0),P=_t(a.bottom,0);d?x=p-2*(S!==0||E!==0?S+E:_t(a.left,a.right)):b=g-2*($!==0||P!==0?$+P:_t(a.top,a.bottom))}await o({...t,availableWidth:x,availableHeight:b});const _=await n.getDimensions(s.floating);return p!==_.width||g!==_.height?{reset:{rects:!0}}:{}}}};function ii(e){return Zg(e)?(e.nodeName||"").toLowerCase():"#document"}function $t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Tr(e){var t;return(t=(Zg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zg(e){return e instanceof Node||e instanceof $t(e).Node}function Cr(e){return e instanceof Element||e instanceof $t(e).Element}function pr(e){return e instanceof HTMLElement||e instanceof $t(e).HTMLElement}function Tp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $t(e).ShadowRoot}function Zs(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=Ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(n)}function Rw(e){return["table","td","th"].includes(ii(e))}function Pd(e){const t=Od(),r=Ft(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Fw(e){let t=xn(e);for(;pr(t)&&!nl(t);){if(Pd(t))return t;t=xn(t)}return null}function Od(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nl(e){return["html","body","#document"].includes(ii(e))}function Ft(e){return $t(e).getComputedStyle(e)}function sl(e){return Cr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function xn(e){if(ii(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tp(e)&&e.host||Tr(e);return Tp(t)?t.host:t}function Jg(e){const t=xn(e);return nl(t)?e.ownerDocument?e.ownerDocument.body:e.body:pr(t)&&Zs(t)?t:Jg(t)}function js(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=Jg(e),s=n===((i=e.ownerDocument)==null?void 0:i.body),o=$t(n);return s?t.concat(o,o.visualViewport||[],Zs(n)?n:[],o.frameElement&&r?js(o.frameElement):[]):t.concat(n,js(n,[],r))}function e0(e){const t=Ft(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=pr(e),s=n?e.offsetWidth:r,o=n?e.offsetHeight:i,l=Ta(r)!==s||Ta(i)!==o;return l&&(r=s,i=o),{width:r,height:i,$:l}}function Id(e){return Cr(e)?e:e.contextElement}function un(e){const t=Id(e);if(!pr(t))return ti(1);const r=t.getBoundingClientRect(),{width:i,height:n,$:s}=e0(t);let o=(s?Ta(r.width):r.width)/i,l=(s?Ta(r.height):r.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Bw=ti(0);function t0(e){const t=$t(e);return!Od()||!t.visualViewport?Bw:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vw(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==$t(e)?!1:t}function Pi(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),s=Id(e);let o=ti(1);t&&(i?Cr(i)&&(o=un(i)):o=un(e));const l=Vw(s,r,i)?t0(s):ti(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,h=n.width/o.x,d=n.height/o.y;if(s){const p=$t(s),g=i&&Cr(i)?$t(i):i;let y=p.frameElement;for(;y&&i&&g!==p;){const w=un(y),k=y.getBoundingClientRect(),v=Ft(y),f=k.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,b=k.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,c*=w.y,h*=w.x,d*=w.y,a+=f,c+=b,y=$t(y).frameElement}}return Aa({width:h,height:d,x:a,y:c})}function jw(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=pr(r),s=Tr(r);if(r===s)return t;let o={scrollLeft:0,scrollTop:0},l=ti(1);const a=ti(0);if((n||!n&&i!=="fixed")&&((ii(r)!=="body"||Zs(s))&&(o=sl(r)),pr(r))){const c=Pi(r);l=un(r),a.x=c.x+r.clientLeft,a.y=c.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-o.scrollLeft*l.x+a.x,y:t.y*l.y-o.scrollTop*l.y+a.y}}function Uw(e){return Array.from(e.getClientRects())}function r0(e){return Pi(Tr(e)).left+sl(e).scrollLeft}function Hw(e){const t=Tr(e),r=sl(e),i=e.ownerDocument.body,n=_t(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=_t(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+r0(e);const l=-r.scrollTop;return Ft(i).direction==="rtl"&&(o+=_t(t.clientWidth,i.clientWidth)-n),{width:n,height:s,x:o,y:l}}function Ww(e,t){const r=$t(e),i=Tr(e),n=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,a=0;if(n){s=n.width,o=n.height;const c=Od();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:s,height:o,x:l,y:a}}function Gw(e,t){const r=Pi(e,!0,t==="fixed"),i=r.top+e.clientTop,n=r.left+e.clientLeft,s=pr(e)?un(e):ti(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,a=n*s.x,c=i*s.y;return{width:o,height:l,x:a,y:c}}function zp(e,t,r){let i;if(t==="viewport")i=Ww(e,r);else if(t==="document")i=Hw(Tr(e));else if(Cr(t))i=Gw(t,r);else{const n=t0(e);i={...t,x:t.x-n.x,y:t.y-n.y}}return Aa(i)}function i0(e,t){const r=xn(e);return r===t||!Cr(r)||nl(r)?!1:Ft(r).position==="fixed"||i0(r,t)}function Kw(e,t){const r=t.get(e);if(r)return r;let i=js(e,[],!1).filter(l=>Cr(l)&&ii(l)!=="body"),n=null;const s=Ft(e).position==="fixed";let o=s?xn(e):e;for(;Cr(o)&&!nl(o);){const l=Ft(o),a=Pd(o);!a&&l.position==="fixed"&&(n=null),(s?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Zs(o)&&!a&&i0(e,o))?i=i.filter(h=>h!==o):n=l,o=xn(o)}return t.set(e,i),i}function qw(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const o=[...r==="clippingAncestors"?Kw(t,this._c):[].concat(r),i],l=o[0],a=o.reduce((c,h)=>{const d=zp(t,h,n);return c.top=_t(d.top,c.top),c.right=ei(d.right,c.right),c.bottom=ei(d.bottom,c.bottom),c.left=_t(d.left,c.left),c},zp(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Xw(e){const{width:t,height:r}=e0(e);return{width:t,height:r}}function Yw(e,t,r){const i=pr(t),n=Tr(t),s=r==="fixed",o=Pi(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=ti(0);if(i||!i&&!s)if((ii(t)!=="body"||Zs(n))&&(l=sl(t)),i){const c=Pi(t,!0,s,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else n&&(a.x=r0(n));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Ap(e,t){return!pr(e)||Ft(e).position==="fixed"?null:t?t(e):e.offsetParent}function n0(e,t){const r=$t(e);if(!pr(e))return r;let i=Ap(e,t);for(;i&&Rw(i)&&Ft(i).position==="static";)i=Ap(i,t);return i&&(ii(i)==="html"||ii(i)==="body"&&Ft(i).position==="static"&&!Pd(i))?r:i||Fw(e)||r}const Qw=async function(e){let{reference:t,floating:r,strategy:i}=e;const n=this.getOffsetParent||n0,s=this.getDimensions;return{reference:Yw(t,await n(r),i),floating:{x:0,y:0,...await s(r)}}};function Zw(e){return Ft(e).direction==="rtl"}const Zo={convertOffsetParentRelativeRectToViewportRelativeRect:jw,getDocumentElement:Tr,getClippingRect:qw,getOffsetParent:n0,getElementRects:Qw,getClientRects:Uw,getDimensions:Xw,getScale:un,isElement:Cr,isRTL:Zw};function Jw(e,t){let r=null,i;const n=Tr(e);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:h,width:d,height:p}=e.getBoundingClientRect();if(l||t(),!d||!p)return;const g=To(h),y=To(n.clientWidth-(c+d)),w=To(n.clientHeight-(h+p)),k=To(c),f={rootMargin:-g+"px "+-y+"px "+-w+"px "+-k+"px",threshold:_t(0,ei(1,a))||1};let b=!0;function x(_){const S=_[0].intersectionRatio;if(S!==a){if(!b)return o();S?o(!1,S):i=setTimeout(()=>{o(!1,1e-7)},100)}b=!1}try{r=new IntersectionObserver(x,{...f,root:n.ownerDocument})}catch{r=new IntersectionObserver(x,f)}r.observe(e)}return o(!0),s}function ex(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=Id(e),h=n||s?[...c?js(c):[],...js(t)]:[];h.forEach(v=>{n&&v.addEventListener("scroll",r,{passive:!0}),s&&v.addEventListener("resize",r)});const d=c&&l?Jw(c,r):null;let p=-1,g=null;o&&(g=new ResizeObserver(v=>{let[f]=v;f&&f.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),c&&!a&&g.observe(c),g.observe(t));let y,w=a?Pi(e):null;a&&k();function k(){const v=Pi(e);w&&(v.x!==w.x||v.y!==w.y||v.width!==w.width||v.height!==w.height)&&r(),w=v,y=requestAnimationFrame(k)}return r(),()=>{h.forEach(v=>{n&&v.removeEventListener("scroll",r),s&&v.removeEventListener("resize",r)}),d&&d(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(y)}}const tx=Mw,rx=Ow,Lp=Dw,ix=Pw,nx=(e,t,r)=>{const i=new Map,n={platform:Zo,...r},s={...n.platform,_c:i};return Lw(e,t,{...n,platform:s})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Js=e=>(...t)=>({_$litDirective$:e,values:t});let eo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=Js(class extends eo{constructor(e){var t;if(super(e),e.type!==cr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.it)s in t||(r.remove(s),this.it.delete(s));for(const s in t){const o=!!t[s];o===this.it.has(s)||(n=this.st)!=null&&n.has(s)||(o?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return St}});function sx(e){return ox(e)}function Kl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ox(e){for(let t=e;t;t=Kl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Kl(e);t;t=Kl(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function ax(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var se=class extends F{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||ax(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ex(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Nw({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Lp({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=n?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(rx({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(tx({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Lp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ix({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Zo.getOffsetParent(r,sx):Zo.getOffsetParent;nx(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ys(Er({},Zo),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:n,placement:s})=>{const o=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const a=n.arrow.x,c=n.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?y:"",g=o?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":y,g=o?y:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return z`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${K({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?z`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};se.styles=pw;u([I(".popup")],se.prototype,"popup",2);u([I(".popup__arrow")],se.prototype,"arrowEl",2);u([m()],se.prototype,"anchor",2);u([m({type:Boolean,reflect:!0})],se.prototype,"active",2);u([m({reflect:!0})],se.prototype,"placement",2);u([m({reflect:!0})],se.prototype,"strategy",2);u([m({type:Number})],se.prototype,"distance",2);u([m({type:Number})],se.prototype,"skidding",2);u([m({type:Boolean})],se.prototype,"arrow",2);u([m({attribute:"arrow-placement"})],se.prototype,"arrowPlacement",2);u([m({attribute:"arrow-padding",type:Number})],se.prototype,"arrowPadding",2);u([m({type:Boolean})],se.prototype,"flip",2);u([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],se.prototype,"flipFallbackPlacements",2);u([m({attribute:"flip-fallback-strategy"})],se.prototype,"flipFallbackStrategy",2);u([m({type:Object})],se.prototype,"flipBoundary",2);u([m({attribute:"flip-padding",type:Number})],se.prototype,"flipPadding",2);u([m({type:Boolean})],se.prototype,"shift",2);u([m({type:Object})],se.prototype,"shiftBoundary",2);u([m({attribute:"shift-padding",type:Number})],se.prototype,"shiftPadding",2);u([m({attribute:"auto-size"})],se.prototype,"autoSize",2);u([m()],se.prototype,"sync",2);u([m({type:Object})],se.prototype,"autoSizeBoundary",2);u([m({attribute:"auto-size-padding",type:Number})],se.prototype,"autoSizePadding",2);var s0=new Map,lx=new WeakMap;function cx(e){return e??{keyframes:[],options:{duration:0}}}function Pp(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oe(e,t){s0.set(e,cx(t))}function ge(e,t,r){const i=lx.get(e);if(i!=null&&i[t])return Pp(i[t],r.dir);const n=s0.get(t);return n?Pp(n,r.dir):{keyframes:[],options:{duration:0}}}function ot(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function Ce(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Ys(Er({},r),{duration:Nd()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function Op(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Nd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pe(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function La(e,t){return e.map(r=>Ys(Er({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const hu=new Set,ux=new MutationObserver(c0),rn=new Map;let o0=document.documentElement.dir||"ltr",a0=document.documentElement.lang||navigator.language,gi;ux.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function l0(...e){e.map(t=>{const r=t.$code.toLowerCase();rn.has(r)?rn.set(r,Object.assign(Object.assign({},rn.get(r)),t)):rn.set(r,t),gi||(gi=t)}),c0()}function c0(){o0=document.documentElement.dir||"ltr",a0=document.documentElement.lang||navigator.language,[...hu.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let dx=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){hu.add(this.host)}hostDisconnected(){hu.delete(this.host)}dir(){return`${this.host.dir||o0}`.toLowerCase()}lang(){return`${this.host.lang||a0}`.toLowerCase()}getTranslationData(t){var r,i;const n=new Intl.Locale(t.replace(/_/g,"-")),s=n==null?void 0:n.language.toLowerCase(),o=(i=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",l=rn.get(`${s}-${o}`),a=rn.get(s);return{locale:n,language:s,region:o,primary:l,secondary:a}}exists(t,r){var i;const{primary:n,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||s&&s[t]||r.includeFallback&&gi&&gi[t])}term(t,...r){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let s;if(i&&i[t])s=i[t];else if(n&&n[t])s=n[t];else if(gi&&gi[t])s=gi[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,r)}};var u0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};l0(u0);var hx=u0,ie=class extends dx{};l0(hx);function L(e,t){const r=Er({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:s}=i,o=Array.isArray(e)?e:[e];i.update=function(l){o.forEach(a=>{const c=a;if(l.has(c)){const h=l.get(c),d=this[c];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,d)}}),s.call(this,l)}}}var De=class extends F{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Op(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Op(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Pe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ge(this,"tooltip.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Pe(this.body);const{keyframes:e,options:t}=ge(this,"tooltip.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
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
    `}};De.styles=hw;De.dependencies={"sl-popup":se};u([I("slot:not([name])")],De.prototype,"defaultSlot",2);u([I(".tooltip__body")],De.prototype,"body",2);u([I("sl-popup")],De.prototype,"popup",2);u([m()],De.prototype,"content",2);u([m()],De.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],De.prototype,"disabled",2);u([m({type:Number})],De.prototype,"distance",2);u([m({type:Boolean,reflect:!0})],De.prototype,"open",2);u([m({type:Number})],De.prototype,"skidding",2);u([m()],De.prototype,"trigger",2);u([m({type:Boolean})],De.prototype,"hoist",2);u([L("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);u([L(["content","distance","hoist","placement","skidding"])],De.prototype,"handleOptionsChange",1);u([L("disabled")],De.prototype,"handleDisabledChange",1);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const px=new Set(["children","localName","ref","style","className"]),Ip=new WeakMap,fx=(e,t,r,i,n)=>{const s=n==null?void 0:n[t];s===void 0||r===i?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((o,l,a)=>{let c=Ip.get(o);c===void 0&&Ip.set(o,c=new Map);let h=c.get(l);a!==void 0?h===void 0?(c.set(l,h={handleEvent:a}),o.addEventListener(l,h)):h.handleEvent=a:h!==void 0&&(c.delete(l),o.removeEventListener(l,h))})(e,s,r)},H=({react:e,tagName:t,elementClass:r,events:i,displayName:n})=>{const s=new Set(Object.keys(i??{})),o=e.forwardRef((l,a)=>{const c=e.useRef(null),h=e.useRef(null),d={},p={};for(const[g,y]of Object.entries(l))px.has(g)?d[g==="className"?"class":g]=y:s.has(g)||g in r.prototype?p[g]=y:d[g]=y;return e.useLayoutEffect(()=>{if(h.current!==null){for(const g in p)fx(h.current,g,l[g],c.current?c.current[g]:void 0,i);c.current=l}}),e.useLayoutEffect(()=>{var g;(g=h.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{h.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)},[a])})});return o.displayName=n??r.name,o};var mx="sl-tooltip";De.define("sl-tooltip");H({tagName:mx,elementClass:De,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var gx=W`
  ${G}

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
`,vx=W`
  ${G}

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
`,Di=(e="value")=>(t,r)=>{const i=t.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,o,l){var a;const c=i.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(s===h){const d=c.converter||bn,g=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:bn.fromAttribute)(l,c.type);this[e]!==g&&(this[r]=g)}n.call(this,s,o,l)}},Un=new WeakMap,Hn=new WeakMap,Wn=new WeakMap,ql=new WeakSet,zo=new WeakMap,zr=class{constructor(e,t){this.handleFormData=r=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),s=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!i&&!o&&typeof n=="string"&&n.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{r.formData.append(n,l.toString())}):r.formData.append(n,s.toString()))},this.handleFormSubmit=r=>{var i;const n=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Un.get(this.form))==null||i.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!n&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),zo.set(this.host,[])},this.handleInteraction=r=>{const i=zo.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Er({form:r=>{const i=r.form;if(i){const s=r.getRootNode().getElementById(i);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),zo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),zo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Un.has(this.form)?Un.get(this.form).add(this.host):Un.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Hn.has(this.form)||(Hn.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Wn.has(this.form)||(Wn.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Un.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Hn.has(this.form)&&(this.form.reportValidity=Hn.get(this.form),Hn.delete(this.form)),Wn.has(this.form)&&(this.form.checkValidity=Wn.get(this.form),Wn.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ql.add(e):ql.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!ql.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ol=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),yx=Object.freeze(Ys(Er({},ol),{valid:!1,valueMissing:!0})),bx=Object.freeze(Ys(Er({},ol),{valid:!1,customError:!0})),wx=W`
  ${G}

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
`,pu="";function fu(e){pu=e}function xx(e=""){if(!pu){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)fu(r.getAttribute("data-shoelace"));else{const i=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let n="";i&&(n=i.getAttribute("src")),fu(n.split("/").slice(0,-1).join("/"))}}return pu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var _x={name:"default",resolver:e=>xx(`assets/icons/${e}.svg`)},kx=_x,Np={caret:`
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
  `},Sx={name:"system",resolver:e=>e in Np?`data:image/svg+xml,${encodeURIComponent(Np[e])}`:""},Cx=Sx,$x=[kx,Cx],mu=[];function Ex(e){mu.push(e)}function Tx(e){mu=mu.filter(t=>t!==e)}function Mp(e){return $x.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zx=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,d0=e=>e.strings===void 0,Ax={},Lx=(e,t=Ax)=>e._$AH=t;var Gn=Symbol(),Ao=Symbol(),Xl,Yl=new Map,ue=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let i;if(t!=null&&t.spriteSheet)return z`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Gn:Ao}catch{return Ao}try{const n=document.createElement("div");n.innerHTML=await i.text();const s=n.firstElementChild;if(((r=s==null?void 0:s.tagName)==null?void 0:r.toLowerCase())!=="svg")return Gn;Xl||(Xl=new DOMParser);const l=Xl.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Gn}catch{return Gn}}connectedCallback(){super.connectedCallback(),Ex(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Tx(this)}getIconSource(){const e=Mp(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),i=r?Mp(this.library):void 0;if(!t){this.svg=null;return}let n=Yl.get(t);if(n||(n=this.resolveIcon(t,i),Yl.set(t,n)),!this.initialRender)return;const s=await n;if(s===Ao&&Yl.delete(t),t===this.getIconSource().url){if(zx(s)){this.svg=s;return}switch(s){case Ao:case Gn:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=wx;u([q()],ue.prototype,"svg",2);u([m({reflect:!0})],ue.prototype,"name",2);u([m()],ue.prototype,"src",2);u([m()],ue.prototype,"label",2);u([m({reflect:!0})],ue.prototype,"library",2);u([L("label")],ue.prototype,"handleLabelChange",1);u([L(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>e??me;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=Js(class extends eo{constructor(e){if(super(e),e.type!==cr.PROPERTY&&e.type!==cr.ATTRIBUTE&&e.type!==cr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!d0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===St||t===me)return t;const r=e.element,i=e.name;if(e.type===cr.PROPERTY){if(t===r[i])return St}else if(e.type===cr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return St}else if(e.type===cr.ATTRIBUTE&&r.getAttribute(i)===t+"")return St;return Lx(e),t}});var Re=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return z`
      <label
        part="base"
        class=${K({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${B(this.value)}
          .indeterminate=${Oi(this.indeterminate)}
          .checked=${Oi(this.checked)}
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
    `}};Re.styles=vx;Re.dependencies={"sl-icon":ue};u([I('input[type="checkbox"]')],Re.prototype,"input",2);u([q()],Re.prototype,"hasFocus",2);u([m()],Re.prototype,"title",2);u([m()],Re.prototype,"name",2);u([m()],Re.prototype,"value",2);u([m({reflect:!0})],Re.prototype,"size",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"checked",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"indeterminate",2);u([Di("checked")],Re.prototype,"defaultChecked",2);u([m({reflect:!0})],Re.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Re.prototype,"required",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Re.prototype,"handleDisabledChange",1);u([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Re.prototype,"handleStateChange",1);var Px=W`
  ${G}

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
`,to=class extends F{constructor(){super(...arguments),this.localize=new ie(this)}render(){return z`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};to.styles=Px;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dp(e,t,r){return e?t(e):r==null?void 0:r(e)}var $e=class gu extends F{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Pe(this.childrenContainer);const{keyframes:t,options:r}=ge(this,"tree-item.collapse",{dir:this.localize.dir()});await Ce(this.childrenContainer,La(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&gu.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Pe(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=ge(this,"tree-item.expand",{dir:this.localize.dir()});await Ce(this.childrenContainer,La(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>gu.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return z`
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
            ${Dp(this.loading,()=>z` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Dp(this.selectable,()=>z`
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
                ?checked="${Oi(this.selected)}"
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
    `}};$e.styles=gx;$e.dependencies={"sl-checkbox":Re,"sl-icon":ue,"sl-spinner":to};u([q()],$e.prototype,"indeterminate",2);u([q()],$e.prototype,"isLeaf",2);u([q()],$e.prototype,"loading",2);u([q()],$e.prototype,"selectable",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"expanded",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"selected",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],$e.prototype,"lazy",2);u([I("slot:not([name])")],$e.prototype,"defaultSlot",2);u([I("slot[name=children]")],$e.prototype,"childrenSlot",2);u([I(".tree-item__item")],$e.prototype,"itemElement",2);u([I(".tree-item__children")],$e.prototype,"childrenContainer",2);u([I(".tree-item__expand-button slot")],$e.prototype,"expandButtonSlot",2);u([L("loading",{waitUntilFirstUpdate:!0})],$e.prototype,"handleLoadingChange",1);u([L("disabled")],$e.prototype,"handleDisabledChange",1);u([L("selected")],$e.prototype,"handleSelectedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],$e.prototype,"handleExpandedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],$e.prototype,"handleExpandAnimation",1);u([L("lazy",{waitUntilFirstUpdate:!0})],$e.prototype,"handleLazyChange",1);var dn=$e;oe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});oe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Ox="sl-tree-item";dn.define("sl-tree-item");H({tagName:Ox,elementClass:dn,react:U,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Ix=W`
  ${G}

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
`,it=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return z`
      <label
        part="base"
        class=${K({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${B(this.value)}
          .checked=${Oi(this.checked)}
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
    `}};it.styles=Ix;u([I('input[type="checkbox"]')],it.prototype,"input",2);u([q()],it.prototype,"hasFocus",2);u([m()],it.prototype,"title",2);u([m()],it.prototype,"name",2);u([m()],it.prototype,"value",2);u([m({reflect:!0})],it.prototype,"size",2);u([m({type:Boolean,reflect:!0})],it.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],it.prototype,"checked",2);u([Di("checked")],it.prototype,"defaultChecked",2);u([m({reflect:!0})],it.prototype,"form",2);u([m({type:Boolean,reflect:!0})],it.prototype,"required",2);u([L("checked",{waitUntilFirstUpdate:!0})],it.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);var Nx="sl-switch";it.define("sl-switch");H({tagName:Nx,elementClass:it,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var Mx=W`
  ${G}

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
`,Dx=W`
  ${G}

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
 */const h0=Symbol.for(""),Rx=e=>{if((e==null?void 0:e.r)===h0)return e==null?void 0:e._$litStatic$},Pa=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:h0}),Rp=new Map,Fx=e=>(t,...r)=>{const i=r.length;let n,s;const o=[],l=[];let a,c=0,h=!1;for(;c<i;){for(a=t[c];c<i&&(s=r[c],(n=Rx(s))!==void 0);)a+=n+t[++c],h=!0;c!==i&&l.push(s),o.push(a),c++}if(c===i&&o.push(t[i]),h){const d=o.join("$$lit$$");(t=Rp.get(d))===void 0&&(o.raw=o,Rp.set(d,t=o)),r=l}return e(t,...r)},ps=Fx(z);var Oe=class extends F{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Pa`a`:Pa`button`;return ps`
      <${t}
        part="base"
        class=${K({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:"button")}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e&&this.target?"noreferrer noopener":void 0)}
        role=${B(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Oe.styles=Dx;Oe.dependencies={"sl-icon":ue};u([I(".icon-button")],Oe.prototype,"button",2);u([q()],Oe.prototype,"hasFocus",2);u([m()],Oe.prototype,"name",2);u([m()],Oe.prototype,"library",2);u([m()],Oe.prototype,"src",2);u([m()],Oe.prototype,"href",2);u([m()],Oe.prototype,"target",2);u([m()],Oe.prototype,"download",2);u([m()],Oe.prototype,"label",2);u([m({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);var Bx=0,tr=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++Bx,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,z`
      <div
        part="base"
        class=${K({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};tr.styles=Mx;tr.dependencies={"sl-icon-button":Oe};u([I(".tab")],tr.prototype,"tab",2);u([m({reflect:!0})],tr.prototype,"panel",2);u([m({type:Boolean,reflect:!0})],tr.prototype,"active",2);u([m({type:Boolean})],tr.prototype,"closable",2);u([m({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);u([L("active")],tr.prototype,"handleActiveChange",1);u([L("disabled")],tr.prototype,"handleDisabledChange",1);var Vx="sl-tab";tr.define("sl-tab");H({tagName:Vx,elementClass:tr,react:U,events:{onSlClose:"sl-close"},displayName:"SlTab"});var jx=W`
  ${G}

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
`;function Ux(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var vu=new Set;function Hx(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function fs(e){if(vu.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=Hx();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function ms(e){vu.delete(e),vu.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function yu(e,t,r="vertical",i="smooth"){const n=Ux(e,t),s=n.top+t.scrollTop,o=n.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(o<l?t.scrollTo({left:o,behavior:i}):o+e.clientWidth>a&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<c?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>h&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}var mt=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var n;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const n=this.tabs.find(o=>o.matches(":focus")),s=this.localize.dir()==="rtl";if((n==null?void 0:n.tagName.toLowerCase())==="sl-tab"){let o=this.tabs.indexOf(n);e.key==="Home"?o=0:e.key==="End"?o=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?o--:(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&o++,o<0&&(o=this.tabs.length-1),o>this.tabs.length-1&&(o=0),this.tabs[o].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[o],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&yu(this.tabs[o],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Er({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var n;return i.active=i.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&yu(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",n=this.getAllTabs(),o=n.slice(0,n.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return z`
      <div
        part="base"
        class=${K({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
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
    `}};mt.styles=jx;mt.dependencies={"sl-icon-button":Oe};u([I(".tab-group")],mt.prototype,"tabGroup",2);u([I(".tab-group__body")],mt.prototype,"body",2);u([I(".tab-group__nav")],mt.prototype,"nav",2);u([I(".tab-group__indicator")],mt.prototype,"indicator",2);u([q()],mt.prototype,"hasScrollControls",2);u([m()],mt.prototype,"placement",2);u([m()],mt.prototype,"activation",2);u([m({attribute:"no-scroll-controls",type:Boolean})],mt.prototype,"noScrollControls",2);u([L("noScrollControls",{waitUntilFirstUpdate:!0})],mt.prototype,"updateScrollControls",1);u([L("placement",{waitUntilFirstUpdate:!0})],mt.prototype,"syncIndicator",1);var Wx="sl-tab-group";mt.define("sl-tab-group");H({tagName:Wx,elementClass:mt,react:U,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var Gx=W`
  ${G}

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
`,Kx=0,zn=class extends F{constructor(){super(...arguments),this.attrId=++Kx,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return z`
      <slot
        part="base"
        class=${K({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};zn.styles=Gx;u([m({reflect:!0})],zn.prototype,"name",2);u([m({type:Boolean,reflect:!0})],zn.prototype,"active",2);u([L("active")],zn.prototype,"handleActiveChange",1);var qx="sl-tab-panel";zn.define("sl-tab-panel");H({tagName:qx,elementClass:zn,react:U,events:{},displayName:"SlTabPanel"});var Xx=W`
  ${G}

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
`,Ar=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return z`
      <span
        part="base"
        class=${K({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};Ar.styles=Xx;Ar.dependencies={"sl-icon-button":Oe};u([m({reflect:!0})],Ar.prototype,"variant",2);u([m({reflect:!0})],Ar.prototype,"size",2);u([m({type:Boolean,reflect:!0})],Ar.prototype,"pill",2);u([m({type:Boolean})],Ar.prototype,"removable",2);var Yx="sl-tag";Ar.define("sl-tag");H({tagName:Yx,elementClass:Ar,react:U,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var ro=W`
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
`,Qx=W`
  ${G}
  ${ro}

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
`,At=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Zx(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var re=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return z`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
              name=${B(this.name)}
              .value=${Oi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              rows=${B(this.rows)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              autocapitalize=${B(this.autocapitalize)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${B(this.spellcheck)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
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
    `}};re.styles=Qx;u([I(".textarea__control")],re.prototype,"input",2);u([q()],re.prototype,"hasFocus",2);u([m()],re.prototype,"title",2);u([m()],re.prototype,"name",2);u([m()],re.prototype,"value",2);u([m({reflect:!0})],re.prototype,"size",2);u([m({type:Boolean,reflect:!0})],re.prototype,"filled",2);u([m()],re.prototype,"label",2);u([m({attribute:"help-text"})],re.prototype,"helpText",2);u([m()],re.prototype,"placeholder",2);u([m({type:Number})],re.prototype,"rows",2);u([m()],re.prototype,"resize",2);u([m({type:Boolean,reflect:!0})],re.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],re.prototype,"readonly",2);u([m({reflect:!0})],re.prototype,"form",2);u([m({type:Boolean,reflect:!0})],re.prototype,"required",2);u([m({type:Number})],re.prototype,"minlength",2);u([m({type:Number})],re.prototype,"maxlength",2);u([m()],re.prototype,"autocapitalize",2);u([m()],re.prototype,"autocorrect",2);u([m()],re.prototype,"autocomplete",2);u([m({type:Boolean})],re.prototype,"autofocus",2);u([m()],re.prototype,"enterkeyhint",2);u([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],re.prototype,"spellcheck",2);u([m()],re.prototype,"inputmode",2);u([Di()],re.prototype,"defaultValue",2);u([L("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);u([L("rows",{waitUntilFirstUpdate:!0})],re.prototype,"handleRowsChange",1);u([L("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1);var Jx="sl-textarea";re.define("sl-textarea");H({tagName:Jx,elementClass:re,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var e_=W`
  ${G}

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
`,al=class extends F{render(){return z` <slot></slot> `}};al.styles=e_;var t_="sl-visually-hidden";al.define("sl-visually-hidden");H({tagName:t_,elementClass:al,react:U,events:{},displayName:"SlVisuallyHidden"});var r_=W`
  ${G}

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
`;function Ae(e,t,r){const i=n=>Object.is(n,-0)?0:n;return e<t?i(t):e>r?i(r):i(e)}function Fp(e,t=!1){function r(s){const o=s.getChildrenItems({includeDisabled:!1});if(o.length){const l=o.every(c=>c.selected),a=o.every(c=>!c.selected&&!c.indeterminate);s.selected=l,s.indeterminate=!l&&!a}}function i(s){const o=s.parentElement;dn.isTreeItem(o)&&(r(o),i(o))}function n(s){for(const o of s.getChildrenItems())o.selected=t?s.selected||o.selected:!o.disabled&&s.selected,n(o);t&&r(s)}n(e),i(e)}var ai=class extends F{constructor(){super(),this.selection="single",this.localize=new ie(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(dn.isTreeItem),i=[...t.removedNodes].filter(dn.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),dn.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Fp(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const n of i)n.selected=n===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(n=>{var s;return["input","textarea"].includes((s=n==null?void 0:n.tagName)==null?void 0:s.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const n=t.findIndex(a=>a.matches(":focus")),s=t[n],o=a=>{const c=t[Ae(a,0,t.length-1)];this.focusItem(c)},l=a=>{s.expanded=a};e.key==="ArrowDown"?o(n+1):e.key==="ArrowUp"?o(n-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?o(n+1):l(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?o(n-1):l(!1):e.key==="Home"?o(0):e.key==="End"?o(t.length-1):(e.key==="Enter"||e.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(n=>{var s;return(s=n==null?void 0:n.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Fp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const n=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return n&&(!n.expanded||n.loading||t.has(n))&&t.add(r),!t.has(r)})}render(){return z`
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
    `}};ai.styles=r_;u([I("slot:not([name])")],ai.prototype,"defaultSlot",2);u([I("slot[name=expand-icon]")],ai.prototype,"expandedIconSlot",2);u([I("slot[name=collapse-icon]")],ai.prototype,"collapsedIconSlot",2);u([m()],ai.prototype,"selection",2);u([L("selection")],ai.prototype,"handleSelectionChange",1);var i_="sl-tree";ai.define("sl-tree");H({tagName:i_,elementClass:ai,react:U,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var n_=W`
  ${G}

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
 */const p0="important",s_=" !"+p0,ct=Js(class extends eo{constructor(e){var t;if(super(e),e.type!==cr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ut.add(i);const s=typeof n=="string"&&n.endsWith(s_);i.includes("-")||s?r.setProperty(i,s?n.slice(0,-11):n,s?p0:""):r[i]=n}}return St}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bu=class extends eo{constructor(t){if(super(t),this.et=me,t.type!==cr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this.vt=void 0,this.et=t;if(t===St)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}};bu.directiveName="unsafeHTML",bu.resultType=1;const Jo=Js(bu);var Ye=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:n}=this.rating.getBoundingClientRect(),s=t?this.roundToPrecision((i-e)/n*this.max,this.precision):this.roundToPrecision((e-r)/n*this.max,this.precision);return Ae(s,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const n=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const n=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,z`
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
          ${t.map(i=>r>i&&r<i+1?z`
                <span
                  class=${K({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ct({clipPath:e?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${Jo(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ct({clipPath:e?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${Jo(this.getSymbol(i+1))}
                  </div>
                </span>
              `:z`
              <span
                class=${K({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Jo(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ye.styles=n_;Ye.dependencies={"sl-icon":ue};u([I(".rating")],Ye.prototype,"rating",2);u([q()],Ye.prototype,"hoverValue",2);u([q()],Ye.prototype,"isHovering",2);u([m()],Ye.prototype,"label",2);u([m({type:Number})],Ye.prototype,"value",2);u([m({type:Number})],Ye.prototype,"max",2);u([m({type:Number})],Ye.prototype,"precision",2);u([m({type:Boolean,reflect:!0})],Ye.prototype,"readonly",2);u([m({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);u([m()],Ye.prototype,"getSymbol",2);u([Xg({passive:!0})],Ye.prototype,"handleTouchMove",1);u([L("hoverValue")],Ye.prototype,"handleHoverValueChange",1);u([L("isHovering")],Ye.prototype,"handleIsHoveringChange",1);var o_="sl-rating";Ye.define("sl-rating");var a_=H({tagName:o_,elementClass:Ye,react:U,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"}),l_=a_,c_=W`
  ${G}
  ${ro}

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
`,ve=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",s=t*e;if(n){const o=`${t-s}px + ${e} * ${i}`;this.output.style.translate=`calc((${o} - ${r/2}px - ${i} / 2))`}else{const o=`${s}px - ${e} * ${i}`;this.output.style.translate=`calc(${o} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return z`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
              name=${B(this.name)}
              ?disabled=${this.disabled}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${Oi(this.value.toString())}
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
    `}};ve.styles=c_;u([I(".range__control")],ve.prototype,"input",2);u([I(".range__tooltip")],ve.prototype,"output",2);u([q()],ve.prototype,"hasFocus",2);u([q()],ve.prototype,"hasTooltip",2);u([m()],ve.prototype,"title",2);u([m()],ve.prototype,"name",2);u([m({type:Number})],ve.prototype,"value",2);u([m()],ve.prototype,"label",2);u([m({attribute:"help-text"})],ve.prototype,"helpText",2);u([m({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);u([m({type:Number})],ve.prototype,"min",2);u([m({type:Number})],ve.prototype,"max",2);u([m({type:Number})],ve.prototype,"step",2);u([m()],ve.prototype,"tooltip",2);u([m({attribute:!1})],ve.prototype,"tooltipFormatter",2);u([m({reflect:!0})],ve.prototype,"form",2);u([Di()],ve.prototype,"defaultValue",2);u([Xg({passive:!0})],ve.prototype,"handleThumbDragStart",1);u([L("value",{waitUntilFirstUpdate:!0})],ve.prototype,"handleValueChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],ve.prototype,"handleDisabledChange",1);u([L("hasTooltip",{waitUntilFirstUpdate:!0})],ve.prototype,"syncRange",1);var u_="sl-range";ve.define("sl-range");H({tagName:u_,elementClass:ve,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var d_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Lr=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:n}=d_.find(s=>Math.abs(r)<s.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/n),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=Lo("second"):i==="hour"?s=Lo("minute"):i==="day"?s=Lo("hour"):s=Lo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return z` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};u([q()],Lr.prototype,"isoTime",2);u([q()],Lr.prototype,"relativeTime",2);u([q()],Lr.prototype,"titleTime",2);u([m()],Lr.prototype,"date",2);u([m()],Lr.prototype,"format",2);u([m()],Lr.prototype,"numeric",2);u([m({type:Boolean})],Lr.prototype,"sync",2);function Lo(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var h_="sl-relative-time";Lr.define("sl-relative-time");H({tagName:h_,elementClass:Lr,react:U,events:{},displayName:"SlRelativeTime"});var p_=W`
  ${G}

  :host {
    display: contents;
  }
`,io=class extends F{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return z` <slot @slotchange=${this.handleSlotChange}></slot> `}};io.styles=p_;u([m({type:Boolean,reflect:!0})],io.prototype,"disabled",2);u([L("disabled",{waitUntilFirstUpdate:!0})],io.prototype,"handleDisabledChange",1);var f_="sl-resize-observer";io.define("sl-resize-observer");H({tagName:f_,elementClass:io,react:U,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var m_=W`
  ${G}
  ${ro}

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
`,Z=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>z`
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
          ${typeof r=="string"?Jo(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return z`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return z``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=ge(this,"select.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.currentOption&&yu(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);const{keyframes:e,options:t}=ge(this,"select.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ot(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ot(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return z`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${K({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};Z.styles=m_;Z.dependencies={"sl-icon":ue,"sl-popup":se,"sl-tag":Ar};u([I(".select")],Z.prototype,"popup",2);u([I(".select__combobox")],Z.prototype,"combobox",2);u([I(".select__display-input")],Z.prototype,"displayInput",2);u([I(".select__value-input")],Z.prototype,"valueInput",2);u([I(".select__listbox")],Z.prototype,"listbox",2);u([q()],Z.prototype,"hasFocus",2);u([q()],Z.prototype,"displayLabel",2);u([q()],Z.prototype,"currentOption",2);u([q()],Z.prototype,"selectedOptions",2);u([m()],Z.prototype,"name",2);u([m({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Z.prototype,"value",2);u([Di()],Z.prototype,"defaultValue",2);u([m({reflect:!0})],Z.prototype,"size",2);u([m()],Z.prototype,"placeholder",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);u([m({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);u([m({type:Boolean})],Z.prototype,"clearable",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"open",2);u([m({type:Boolean})],Z.prototype,"hoist",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"filled",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"pill",2);u([m()],Z.prototype,"label",2);u([m({reflect:!0})],Z.prototype,"placement",2);u([m({attribute:"help-text"})],Z.prototype,"helpText",2);u([m({reflect:!0})],Z.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Z.prototype,"required",2);u([m()],Z.prototype,"getTag",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);u([L("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);u([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);oe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var g_="sl-select";Z.define("sl-select");H({tagName:g_,elementClass:Z,react:U,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var v_=W`
  ${G}

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
`,ll=class extends F{constructor(){super(...arguments),this.effect="none"}render(){return z`
      <div
        part="base"
        class=${K({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ll.styles=v_;u([m()],ll.prototype,"effect",2);var y_="sl-skeleton";ll.define("sl-skeleton");H({tagName:y_,elementClass:ll,react:U,events:{},displayName:"SlSkeleton"});var b_="sl-spinner";to.define("sl-spinner");H({tagName:b_,elementClass:to,react:U,events:{},displayName:"SlSpinner"});var w_=W`
  ${G}

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
`;function gs(e,t){function r(n){const s=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,l=s.left+o.scrollX,a=s.top+o.scrollY,c=n.pageX-l,h=n.pageY-a;t!=null&&t.onMove&&t.onMove(c,h)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var gt=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),gs(this,{onMove:(r,i)=>{let n=this.vertical?i:r;this.primary==="end"&&(n=this.size-n),this.snap&&this.snap.split(" ").forEach(o=>{let l;o.endsWith("%")?l=this.size*(parseFloat(o)/100):l=parseFloat(o),t&&!this.vertical&&(l=this.size-l),n>=l-this.snapThreshold&&n<=l+this.snapThreshold&&(n=l)}),this.position=Ae(this.pixelsToPercentage(n),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ae(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
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
        tabindex=${B(this.disabled?void 0:"0")}
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
    `}};gt.styles=w_;u([I(".divider")],gt.prototype,"divider",2);u([m({type:Number,reflect:!0})],gt.prototype,"position",2);u([m({attribute:"position-in-pixels",type:Number})],gt.prototype,"positionInPixels",2);u([m({type:Boolean,reflect:!0})],gt.prototype,"vertical",2);u([m({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);u([m()],gt.prototype,"primary",2);u([m()],gt.prototype,"snap",2);u([m({type:Number,attribute:"snap-threshold"})],gt.prototype,"snapThreshold",2);u([L("position")],gt.prototype,"handlePositionChange",1);u([L("positionInPixels")],gt.prototype,"handlePositionInPixelsChange",1);u([L("vertical")],gt.prototype,"handleVerticalChange",1);var x_="sl-split-panel";gt.define("sl-split-panel");H({tagName:x_,elementClass:gt,react:U,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var __=W`
  ${G}

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
`,Lt=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return z`
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
    `}};Lt.styles=__;Lt.dependencies={"sl-icon":ue};u([I(".option__label")],Lt.prototype,"defaultSlot",2);u([q()],Lt.prototype,"current",2);u([q()],Lt.prototype,"selected",2);u([q()],Lt.prototype,"hasHover",2);u([m({reflect:!0})],Lt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);u([L("disabled")],Lt.prototype,"handleDisabledChange",1);u([L("selected")],Lt.prototype,"handleSelectedChange",1);u([L("value")],Lt.prototype,"handleValueChange",1);var k_="sl-option";Lt.define("sl-option");H({tagName:k_,elementClass:Lt,react:U,events:{},displayName:"SlOption"});var S_="sl-popup";se.define("sl-popup");H({tagName:S_,elementClass:se,react:U,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var C_=W`
  ${G}

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
`,An=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return z`
      <div
        part="base"
        class=${K({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${B(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ct({width:`${this.value}%`})}>
          ${this.indeterminate?"":z` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};An.styles=C_;u([m({type:Number,reflect:!0})],An.prototype,"value",2);u([m({type:Boolean,reflect:!0})],An.prototype,"indeterminate",2);u([m()],An.prototype,"label",2);var $_="sl-progress-bar";An.define("sl-progress-bar");H({tagName:$_,elementClass:An,react:U,events:{},displayName:"SlProgressBar"});var E_=W`
  ${G}

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
`,rr=class extends F{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return z`
      <span
        part="base"
        class=${K({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?z` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};rr.styles=E_;rr.dependencies={"sl-icon":ue};u([q()],rr.prototype,"checked",2);u([q()],rr.prototype,"hasFocus",2);u([m()],rr.prototype,"value",2);u([m({reflect:!0})],rr.prototype,"size",2);u([m({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);u([L("checked")],rr.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],rr.prototype,"handleDisabledChange",1);var T_="sl-radio";rr.define("sl-radio");H({tagName:T_,elementClass:rr,react:U,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var z_=W`
  ${G}

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
`,Ri=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return z`
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
    `}};Ri.styles=z_;u([I(".progress-ring__indicator")],Ri.prototype,"indicator",2);u([q()],Ri.prototype,"indicatorOffset",2);u([m({type:Number,reflect:!0})],Ri.prototype,"value",2);u([m()],Ri.prototype,"label",2);var A_="sl-progress-ring";Ri.define("sl-progress-ring");H({tagName:A_,elementClass:Ri,react:U,events:{},displayName:"SlProgressRing"});var L_=W`
  ${G}

  :host {
    display: inline-block;
  }
`;let f0=null;class m0{}m0.render=function(e,t){f0(e,t)};self.QrCreator=m0;(function(e){function t(l,a,c,h){var d={},p=e(c,a);p.u(l),p.J(),h=h||0;var g=p.h(),y=p.h()+2*h;return d.text=l,d.level=a,d.version=c,d.O=y,d.a=function(w,k){return w-=h,k-=h,0>w||w>=g||0>k||k>=g?!1:p.a(w,k)},d}function r(l,a,c,h,d,p,g,y,w,k){function v(f,b,x,_,S,E,$){f?(l.lineTo(b+E,x+$),l.arcTo(b,x,_,S,p)):l.lineTo(b,x)}g?l.moveTo(a+p,c):l.moveTo(a,c),v(y,h,c,h,d,-p,0),v(w,h,d,a,d,0,-p),v(k,a,d,a,c,p,0),v(g,a,c,h,c,0,p)}function i(l,a,c,h,d,p,g,y,w,k){function v(f,b,x,_){l.moveTo(f+x,b),l.lineTo(f,b),l.lineTo(f,b+_),l.arcTo(f,b,f+x,b,p)}g&&v(a,c,p,p),y&&v(h,c,-p,p),w&&v(h,d,-p,-p),k&&v(a,d,p,-p)}function n(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var h=c.type,d=c.colorStops;if(c=c.position.map(g=>Math.round(g*a.size)),h==="linear-gradient")var p=l.createLinearGradient.apply(l,c);else if(h==="radial-gradient")p=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");d.forEach(([g,y])=>{p.addColorStop(g,y)}),l.fillStyle=p}}function s(l,a){e:{var c=a.text,h=a.v,d=a.N,p=a.K,g=a.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var y=t(c,h,d,g);break e}catch{}y=void 0}if(!y)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),h=y.O,p=a.size/h,c.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var w=c,k=a.left+d*p,v=a.top+g*p,f=g,b=d,x=y.a,_=k+p,S=v+p,E=f-1,$=f+1,P=b-1,C=b+1,M=Math.floor(Math.min(.5,Math.max(0,a.R))*p),R=x(f,b),te=x(E,P),le=x(E,b);E=x(E,C);var ye=x(f,C);C=x($,C),b=x($,b),$=x($,P),f=x(f,P),k=Math.round(k),v=Math.round(v),_=Math.round(_),S=Math.round(S),R?r(w,k,v,_,S,M,!le&&!f,!le&&!ye,!b&&!ye,!b&&!f):i(w,k,v,_,S,M,le&&f&&te,le&&ye&&E,b&&ye&&C,b&&f&&$)}return n(c,a),c.fill(),l}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};f0=function(l,a){var c={};Object.assign(c,o,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),s(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=s(l,c),a.appendChild(c))}})(function(){function e(a){var c=r.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var d=0;d<c.length;d+=1)h.put(c[d],8)}}}function t(){var a=[],c=0,h={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);a.length<=p&&a.push(0),d&&(a[p]|=128>>>c%8),c+=1}};return h}function r(a,c){function h(f,b){for(var x=-1;7>=x;x+=1)if(!(-1>=f+x||y<=f+x))for(var _=-1;7>=_;_+=1)-1>=b+_||y<=b+_||(g[f+x][b+_]=0<=x&&6>=x&&(_==0||_==6)||0<=_&&6>=_&&(x==0||x==6)||2<=x&&4>=x&&2<=_&&4>=_)}function d(f,b){for(var x=y=4*a+17,_=Array(x),S=0;S<x;S+=1){_[S]=Array(x);for(var E=0;E<x;E+=1)_[S][E]=null}for(g=_,h(0,0),h(y-7,0),h(0,y-7),x=s.G(a),_=0;_<x.length;_+=1)for(S=0;S<x.length;S+=1){E=x[_];var $=x[S];if(g[E][$]==null)for(var P=-2;2>=P;P+=1)for(var C=-2;2>=C;C+=1)g[E+P][$+C]=P==-2||P==2||C==-2||C==2||P==0&&C==0}for(x=8;x<y-8;x+=1)g[x][6]==null&&(g[x][6]=x%2==0);for(x=8;x<y-8;x+=1)g[6][x]==null&&(g[6][x]=x%2==0);for(x=s.w(p<<3|b),_=0;15>_;_+=1)S=!f&&(x>>_&1)==1,g[6>_?_:8>_?_+1:y-15+_][8]=S,g[8][8>_?y-_-1:9>_?15-_:14-_]=S;if(g[y-8][8]=!f,7<=a){for(x=s.A(a),_=0;18>_;_+=1)S=!f&&(x>>_&1)==1,g[Math.floor(_/3)][_%3+y-8-3]=S;for(_=0;18>_;_+=1)S=!f&&(x>>_&1)==1,g[_%3+y-8-3][Math.floor(_/3)]=S}if(w==null){for(f=l.I(a,p),x=t(),_=0;_<k.length;_+=1)S=k[_],x.put(4,4),x.put(S.b(),s.f(4,a)),S.write(x);for(_=S=0;_<f.length;_+=1)S+=f[_].j;if(x.f()>8*S)throw Error("code length overflow. ("+x.f()+">"+8*S+")");for(x.f()+4<=8*S&&x.put(0,4);x.f()%8!=0;)x.m(!1);for(;!(x.f()>=8*S)&&(x.put(236,8),!(x.f()>=8*S));)x.put(17,8);var M=0;for(S=_=0,E=Array(f.length),$=Array(f.length),P=0;P<f.length;P+=1){var R=f[P].j,te=f[P].o-R;for(_=Math.max(_,R),S=Math.max(S,te),E[P]=Array(R),C=0;C<E[P].length;C+=1)E[P][C]=255&x.B()[C+M];for(M+=R,C=s.C(te),R=i(E[P],C.b()-1).l(C),$[P]=Array(C.b()-1),C=0;C<$[P].length;C+=1)te=C+R.b()-$[P].length,$[P][C]=0<=te?R.c(te):0}for(C=x=0;C<f.length;C+=1)x+=f[C].o;for(x=Array(x),C=M=0;C<_;C+=1)for(P=0;P<f.length;P+=1)C<E[P].length&&(x[M]=E[P][C],M+=1);for(C=0;C<S;C+=1)for(P=0;P<f.length;P+=1)C<$[P].length&&(x[M]=$[P][C],M+=1);w=x}for(f=w,x=-1,_=y-1,S=7,E=0,b=s.F(b),$=y-1;0<$;$-=2)for($==6&&--$;;){for(P=0;2>P;P+=1)g[_][$-P]==null&&(C=!1,E<f.length&&(C=(f[E]>>>S&1)==1),b(_,$-P)&&(C=!C),g[_][$-P]=C,--S,S==-1&&(E+=1,S=7));if(_+=x,0>_||y<=_){_-=x,x=-x;break}}}var p=n[c],g=null,y=0,w=null,k=[],v={u:function(f){f=e(f),k.push(f),w=null},a:function(f,b){if(0>f||y<=f||0>b||y<=b)throw Error(f+","+b);return g[f][b]},h:function(){return y},J:function(){for(var f=0,b=0,x=0;8>x;x+=1){d(!0,x);var _=s.D(v);(x==0||f>_)&&(f=_,b=x)}d(!1,b)}};return v}function i(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var h=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var g=Array(a.length-p+c),y=0;y<a.length-p;y+=1)g[y]=a[y+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),y=0;y<d.b();y+=1)for(var w=0;w<p.b();w+=1)g[y+w]^=o.i(o.g(d.c(y))+o.g(p.c(w)));return i(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=o.g(d.c(0))-o.g(p.c(0)),y=Array(d.b()),w=0;w<d.b();w+=1)y[w]=d.c(w);for(w=0;w<p.b();w+=1)y[w]^=o.i(o.g(p.c(w))+g);return i(y,0).l(p)}};return d}r.s=function(a){for(var c=[],h=0;h<a.length;h++){var d=a.charCodeAt(h);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|a.charCodeAt(h)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var n={L:1,M:0,Q:3,H:2},s=function(){function a(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=i([1],0),g=0;g<d;g+=1)p=p.multiply(i([1,o.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,y=0;y<p;y+=1)for(var w=0;w<p;w+=1){for(var k=0,v=d.a(y,w),f=-1;1>=f;f+=1)if(!(0>y+f||p<=y+f))for(var b=-1;1>=b;b+=1)0>w+b||p<=w+b||(f!=0||b!=0)&&v==d.a(y+f,w+b)&&(k+=1);5<k&&(g+=3+k-5)}for(y=0;y<p-1;y+=1)for(w=0;w<p-1;w+=1)k=0,d.a(y,w)&&(k+=1),d.a(y+1,w)&&(k+=1),d.a(y,w+1)&&(k+=1),d.a(y+1,w+1)&&(k+=1),(k==0||k==4)&&(g+=3);for(y=0;y<p;y+=1)for(w=0;w<p-6;w+=1)d.a(y,w)&&!d.a(y,w+1)&&d.a(y,w+2)&&d.a(y,w+3)&&d.a(y,w+4)&&!d.a(y,w+5)&&d.a(y,w+6)&&(g+=40);for(w=0;w<p;w+=1)for(y=0;y<p-6;y+=1)d.a(y,w)&&!d.a(y+1,w)&&d.a(y+2,w)&&d.a(y+3,w)&&d.a(y+4,w)&&!d.a(y+5,w)&&d.a(y+6,w)&&(g+=40);for(w=k=0;w<p;w+=1)for(y=0;y<p;y+=1)d.a(y,w)&&(k+=1);return g+=Math.abs(100*k/p/p-50)/5*10}};return h}(),o=function(){for(var a=Array(256),c=Array(256),h=0;8>h;h+=1)a[h]=1<<h;for(h=8;256>h;h+=1)a[h]=a[h-4]^a[h-5]^a[h-6]^a[h-8];for(h=0;255>h;h+=1)c[a[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,p){switch(p){case n.L:return c[4*(d-1)];case n.M:return c[4*(d-1)+1];case n.Q:return c[4*(d-1)+2];case n.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=a(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var y=0;y<d;y+=1)for(var w=g[3*y],k=g[3*y+1],v=g[3*y+2],f=0;f<w;f+=1){var b=v,x={};x.o=k,x.j=b,p.push(x)}return p}};return h}();return r}());const P_=QrCreator;var Bt=class extends F{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&P_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return z`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ct({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Bt.styles=L_;u([I("canvas")],Bt.prototype,"canvas",2);u([m()],Bt.prototype,"value",2);u([m()],Bt.prototype,"label",2);u([m({type:Number})],Bt.prototype,"size",2);u([m()],Bt.prototype,"fill",2);u([m()],Bt.prototype,"background",2);u([m({type:Number})],Bt.prototype,"radius",2);u([m({attribute:"error-correction"})],Bt.prototype,"errorCorrection",2);u([L(["background","errorCorrection","fill","radius","size","value"])],Bt.prototype,"generate",1);var O_="sl-qr-code";Bt.define("sl-qr-code");H({tagName:O_,elementClass:Bt,react:U,events:{},displayName:"SlQrCode"});var g0=W`
  ${G}

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
`,I_=W`
  ${g0}

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
`,Vt=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return ps`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${K({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${B(this.value)}
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
    `}};Vt.styles=I_;u([I(".button")],Vt.prototype,"input",2);u([I(".hidden-input")],Vt.prototype,"hiddenInput",2);u([q()],Vt.prototype,"hasFocus",2);u([m({type:Boolean,reflect:!0})],Vt.prototype,"checked",2);u([m()],Vt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);u([m({reflect:!0})],Vt.prototype,"size",2);u([m({type:Boolean,reflect:!0})],Vt.prototype,"pill",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleDisabledChange",1);var N_="sl-radio-button";Vt.define("sl-radio-button");H({tagName:N_,elementClass:Vt,react:U,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var M_=W`
  ${G}
  ${ro}

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
`,D_=W`
  ${G}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,li=class extends F{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Kn(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Kn(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Kn(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Kn(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=Kn(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return z`
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
    `}};li.styles=D_;u([I("slot")],li.prototype,"defaultSlot",2);u([q()],li.prototype,"disableRole",2);u([m()],li.prototype,"label",2);function Kn(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Ue=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this),this.hasSlotController=new At(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?bx:e?yx:ol}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(n=>n.checked=n===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),i=(t=r.find(l=>l.checked))!=null?t:r[0],n=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,s=this.value;let o=r.indexOf(i)+n;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[o].value,r[o].checked=!0,this.hasButtonGroup?r[o].shadowRoot.querySelector("button").focus():(r[o].tabIndex=0,r[o].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=z`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return z`
      <fieldset
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
    `}};Ue.styles=M_;Ue.dependencies={"sl-button-group":li};u([I("slot:not([name])")],Ue.prototype,"defaultSlot",2);u([I(".radio-group__validation-input")],Ue.prototype,"validationInput",2);u([q()],Ue.prototype,"hasButtonGroup",2);u([q()],Ue.prototype,"errorMessage",2);u([q()],Ue.prototype,"defaultValue",2);u([m()],Ue.prototype,"label",2);u([m({attribute:"help-text"})],Ue.prototype,"helpText",2);u([m()],Ue.prototype,"name",2);u([m({reflect:!0})],Ue.prototype,"value",2);u([m({reflect:!0})],Ue.prototype,"size",2);u([m({reflect:!0})],Ue.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Ue.prototype,"required",2);u([L("size",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleSizeChange",1);u([L("value")],Ue.prototype,"handleValueChange",1);var R_="sl-radio-group";Ue.define("sl-radio-group");H({tagName:R_,elementClass:Ue,react:U,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var F_="sl-icon-button";Oe.define("sl-icon-button");H({tagName:F_,elementClass:Oe,react:U,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var B_=W`
  ${G}

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
`,ci=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),gs(this.base,{onMove:i=>{this.position=parseFloat(Ae(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let n=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(n-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(n+=i),e.key==="Home"&&(n=0),e.key==="End"&&(n=100),n=Ae(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return z`
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
    `}};ci.styles=B_;ci.scopedElement={"sl-icon":ue};u([I(".image-comparer")],ci.prototype,"base",2);u([I(".image-comparer__handle")],ci.prototype,"handle",2);u([m({type:Number,reflect:!0})],ci.prototype,"position",2);u([L("position",{waitUntilFirstUpdate:!0})],ci.prototype,"handlePositionChange",1);var V_="sl-image-comparer";ci.define("sl-image-comparer");H({tagName:V_,elementClass:ci,react:U,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var j_=W`
  ${G}

  :host {
    display: block;
  }
`,Ql=new Map;function U_(e,t="cors"){const r=Ql.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async n=>{const s={ok:n.ok,status:n.status,html:await n.text()};return Ql.set(e,s),s});return Ql.set(e,i),i}var Fi=class extends F{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await U_(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return z`<slot></slot>`}};Fi.styles=j_;u([m()],Fi.prototype,"src",2);u([m()],Fi.prototype,"mode",2);u([m({attribute:"allow-scripts",type:Boolean})],Fi.prototype,"allowScripts",2);u([L("src")],Fi.prototype,"handleSrcChange",1);var H_="sl-include";Fi.define("sl-include");H({tagName:H_,elementClass:Fi,react:U,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var W_=W`
  ${G}
  ${ro}

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
`,Y=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new At(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly,s=n&&(typeof this.value=="number"||this.value.length>0);return z`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${Oi(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
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
                    class=${K({input__clear:!0,"input__clear--visible":s})}
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
    `}};Y.styles=W_;Y.dependencies={"sl-icon":ue};u([I(".input__control")],Y.prototype,"input",2);u([q()],Y.prototype,"hasFocus",2);u([m()],Y.prototype,"title",2);u([m({reflect:!0})],Y.prototype,"type",2);u([m()],Y.prototype,"name",2);u([m()],Y.prototype,"value",2);u([Di()],Y.prototype,"defaultValue",2);u([m({reflect:!0})],Y.prototype,"size",2);u([m({type:Boolean,reflect:!0})],Y.prototype,"filled",2);u([m({type:Boolean,reflect:!0})],Y.prototype,"pill",2);u([m()],Y.prototype,"label",2);u([m({attribute:"help-text"})],Y.prototype,"helpText",2);u([m({type:Boolean})],Y.prototype,"clearable",2);u([m({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);u([m()],Y.prototype,"placeholder",2);u([m({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);u([m({attribute:"password-toggle",type:Boolean})],Y.prototype,"passwordToggle",2);u([m({attribute:"password-visible",type:Boolean})],Y.prototype,"passwordVisible",2);u([m({attribute:"no-spin-buttons",type:Boolean})],Y.prototype,"noSpinButtons",2);u([m({reflect:!0})],Y.prototype,"form",2);u([m({type:Boolean,reflect:!0})],Y.prototype,"required",2);u([m()],Y.prototype,"pattern",2);u([m({type:Number})],Y.prototype,"minlength",2);u([m({type:Number})],Y.prototype,"maxlength",2);u([m()],Y.prototype,"min",2);u([m()],Y.prototype,"max",2);u([m()],Y.prototype,"step",2);u([m()],Y.prototype,"autocapitalize",2);u([m()],Y.prototype,"autocorrect",2);u([m()],Y.prototype,"autocomplete",2);u([m({type:Boolean})],Y.prototype,"autofocus",2);u([m()],Y.prototype,"enterkeyhint",2);u([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Y.prototype,"spellcheck",2);u([m()],Y.prototype,"inputmode",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);u([L("step",{waitUntilFirstUpdate:!0})],Y.prototype,"handleStepChange",1);u([L("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);var G_="sl-input";Y.define("sl-input");H({tagName:G_,elementClass:Y,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var K_=W`
  ${G}

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
 */const vs=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,t,!1),vs(n,t);return!0},Oa=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},v0=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Y_(t)}};function q_(e){this._$AN!==void 0?(Oa(this),this._$AM=e,v0(this)):this._$AM=e}function X_(e,t=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)vs(i[s],!1),Oa(i[s]);else i!=null&&(vs(i,!1),Oa(i));else vs(this,e)}const Y_=e=>{e.type==cr.CHILD&&(e._$AP??(e._$AP=X_),e._$AQ??(e._$AQ=q_))};class Q_ extends eo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),v0(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(vs(this,t),Oa(this))}setValue(t){if(d0(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z_=()=>new J_;class J_{}const Zl=new WeakMap,ek=Js(class extends Q_{render(e){return me}update(e,[t]){var i;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=(i=e.options)==null?void 0:i.host,this.ot(this.lt=e.element)),me}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let r=Zl.get(t);r===void 0&&(r=new WeakMap,Zl.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=Zl.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var tk=class{constructor(e,t,r){this.popupRef=Z_(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var n;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(n=i.target.role)!=null&&n.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),n=i==null?void 0:i.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],s=this.localize.dir()==="rtl";if(!n)return;const{left:o,top:l,width:a,height:c}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const i of t.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,s)=>{var o;const l=(o=t.get(s))!=null?o:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return n-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?z`
      <sl-popup
        ${ek(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:z` <slot name="submenu" hidden></slot> `}},Pt=class extends F{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ie(this),this.hasSlotController=new At(this,"submenu"),this.submenuController=new tk(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Zx(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return z`
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
    `}};Pt.styles=K_;Pt.dependencies={"sl-icon":ue,"sl-popup":se};u([I("slot:not([name])")],Pt.prototype,"defaultSlot",2);u([I(".menu-item")],Pt.prototype,"menuItem",2);u([m()],Pt.prototype,"type",2);u([m({type:Boolean,reflect:!0})],Pt.prototype,"checked",2);u([m()],Pt.prototype,"value",2);u([m({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);u([L("checked")],Pt.prototype,"handleCheckedChange",1);u([L("disabled")],Pt.prototype,"handleDisabledChange",1);u([L("type")],Pt.prototype,"handleTypeChange",1);var rk="sl-menu-item";Pt.define("sl-menu-item");H({tagName:rk,elementClass:Pt,react:U,events:{},displayName:"SlMenuItem"});var ik=W`
  ${G}

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
`,cl=class extends F{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(n=>{var s;return t.includes(((s=n==null?void 0:n.getAttribute)==null?void 0:s.call(n,"role"))||"")});if(!r)return;const i=r;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return z`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};cl.styles=ik;u([I("slot")],cl.prototype,"defaultSlot",2);var nk="sl-menu";cl.define("sl-menu");H({tagName:nk,elementClass:cl,react:U,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var sk=W`
  ${G}

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
`,Md=class extends F{render(){return z` <slot part="base" class="menu-label"></slot> `}};Md.styles=sk;var ok="sl-menu-label";Md.define("sl-menu-label");H({tagName:ok,elementClass:Md,react:U,events:{},displayName:"SlMenuLabel"});var ak=W`
  ${G}

  :host {
    display: contents;
  }
`,ir=class extends F{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return z` <slot></slot> `}};ir.styles=ak;u([m({reflect:!0})],ir.prototype,"attr",2);u([m({attribute:"attr-old-value",type:Boolean,reflect:!0})],ir.prototype,"attrOldValue",2);u([m({attribute:"char-data",type:Boolean,reflect:!0})],ir.prototype,"charData",2);u([m({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ir.prototype,"charDataOldValue",2);u([m({attribute:"child-list",type:Boolean,reflect:!0})],ir.prototype,"childList",2);u([m({type:Boolean,reflect:!0})],ir.prototype,"disabled",2);u([L("disabled")],ir.prototype,"handleDisabledChange",1);u([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],ir.prototype,"handleChange",1);var lk="sl-mutation-observer";ir.define("sl-mutation-observer");H({tagName:lk,elementClass:ir,react:U,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});function ck(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function uk(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!ck(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function dk(e){var t,r;const i=wu(e),n=(t=i[0])!=null?t:null,s=(r=i[i.length-1])!=null?r:null;return{start:n,end:s}}function wu(e){const t=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&uk(i)&&t.push(i);const n=s=>{var o;return((o=s.getRootNode({composed:!0}))==null?void 0:o.host)!==e};i instanceof HTMLSlotElement&&n(i)&&i.assignedElements({flatten:!0}).forEach(s=>{r(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}[...i.children].forEach(n=>r(n))}return r(e),t.sort((i,n)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}function*y0(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*ww(y0(e.shadowRoot.activeElement))))}function hk(){return[...y0()].pop()}var qn=[],b0=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r,i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const n=wu(this.element),s=hk();let o=n.findIndex(a=>a===s);if(o===-1){this.currentFocus=n[0],(r=this.currentFocus)==null||r.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;o+l>=n.length?o=0:o+l<0?o=n.length-1:o+=l,this.currentFocus=n[o],(i=this.currentFocus)==null||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){qn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){qn=qn.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return qn[qn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=wu(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],i=this.tabDirection==="forward"?t:r;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}},pk=W`
  ${G}

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
`,nr=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer"),this.localize=new ie(this),this.modal=new b0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),fs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ms(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ge(this,"dialog.denyClose",{dir:this.localize.dir()});Ce(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),fs(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Pe(this.dialog),Pe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ge(this,"dialog.show",{dir:this.localize.dir()}),r=ge(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ce(this.panel,t.keyframes,t.options),Ce(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Pe(this.dialog),Pe(this.overlay)]);const e=ge(this,"dialog.hide",{dir:this.localize.dir()}),t=ge(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ce(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ce(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ms(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
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
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
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
    `}};nr.styles=pk;nr.dependencies={"sl-icon-button":Oe};u([I(".dialog")],nr.prototype,"dialog",2);u([I(".dialog__panel")],nr.prototype,"panel",2);u([I(".dialog__overlay")],nr.prototype,"overlay",2);u([m({type:Boolean,reflect:!0})],nr.prototype,"open",2);u([m({reflect:!0})],nr.prototype,"label",2);u([m({attribute:"no-header",type:Boolean,reflect:!0})],nr.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],nr.prototype,"handleOpenChange",1);oe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});oe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});oe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var fk="sl-dialog";nr.define("sl-dialog");H({tagName:fk,elementClass:nr,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var mk=W`
  ${G}

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
`,no=class extends F{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};no.styles=mk;u([m({type:Boolean,reflect:!0})],no.prototype,"vertical",2);u([L("vertical")],no.prototype,"handleVerticalChange",1);var gk="sl-divider";no.define("sl-divider");H({tagName:gk,elementClass:no,react:U,events:{},displayName:"SlDivider"});var vk=W`
  ${G}

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
`;function Bp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var vt=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer"),this.localize=new ie(this),this.modal=new b0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),fs(this)))}disconnectedCallback(){super.disconnectedCallback(),ms(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ge(this,"drawer.denyClose",{dir:this.localize.dir()});Ce(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),fs(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Pe(this.drawer),Pe(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ge(this,`drawer.show${Bp(this.placement)}`,{dir:this.localize.dir()}),r=ge(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ce(this.panel,t.keyframes,t.options),Ce(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ms(this)),await Promise.all([Pe(this.drawer),Pe(this.overlay)]);const e=ge(this,`drawer.hide${Bp(this.placement)}`,{dir:this.localize.dir()}),t=ge(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ce(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ce(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),fs(this)),this.open&&this.contained&&(this.modal.deactivate(),ms(this))}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}render(){return z`
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
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
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
    `}};vt.styles=vk;vt.dependencies={"sl-icon-button":Oe};u([I(".drawer")],vt.prototype,"drawer",2);u([I(".drawer__panel")],vt.prototype,"panel",2);u([I(".drawer__overlay")],vt.prototype,"overlay",2);u([m({type:Boolean,reflect:!0})],vt.prototype,"open",2);u([m({reflect:!0})],vt.prototype,"label",2);u([m({reflect:!0})],vt.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],vt.prototype,"contained",2);u([m({attribute:"no-header",type:Boolean,reflect:!0})],vt.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);u([L("contained",{waitUntilFirstUpdate:!0})],vt.prototype,"handleNoModalChange",1);oe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});oe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});oe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var yk="sl-drawer";vt.define("sl-drawer");H({tagName:yk,elementClass:vt,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var bk=W`
  ${G}

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
`,Qe=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>dk(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pe(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ge(this,"dropdown.show",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pe(this);const{keyframes:e,options:t}=ge(this,"dropdown.hide",{dir:this.localize.dir()});await Ce(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return z`
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
    `}};Qe.styles=bk;Qe.dependencies={"sl-popup":se};u([I(".dropdown")],Qe.prototype,"popup",2);u([I(".dropdown__trigger")],Qe.prototype,"trigger",2);u([I(".dropdown__panel")],Qe.prototype,"panel",2);u([m({type:Boolean,reflect:!0})],Qe.prototype,"open",2);u([m({reflect:!0})],Qe.prototype,"placement",2);u([m({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);u([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Qe.prototype,"stayOpenOnSelect",2);u([m({attribute:!1})],Qe.prototype,"containingElement",2);u([m({type:Number})],Qe.prototype,"distance",2);u([m({type:Number})],Qe.prototype,"skidding",2);u([m({type:Boolean})],Qe.prototype,"hoist",2);u([L("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);oe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var wk="sl-dropdown";Qe.define("sl-dropdown");H({tagName:wk,elementClass:Qe,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var yt=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return z`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};u([m()],yt.prototype,"date",2);u([m()],yt.prototype,"weekday",2);u([m()],yt.prototype,"era",2);u([m()],yt.prototype,"year",2);u([m()],yt.prototype,"month",2);u([m()],yt.prototype,"day",2);u([m()],yt.prototype,"hour",2);u([m()],yt.prototype,"minute",2);u([m()],yt.prototype,"second",2);u([m({attribute:"time-zone-name"})],yt.prototype,"timeZoneName",2);u([m({attribute:"time-zone"})],yt.prototype,"timeZone",2);u([m({attribute:"hour-format"})],yt.prototype,"hourFormat",2);var xk="sl-format-date";yt.define("sl-format-date");H({tagName:xk,elementClass:yt,react:U,events:{},displayName:"SlFormatDate"});var so=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),n=r[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:n,unitDisplay:this.display})}};u([m({type:Number})],so.prototype,"value",2);u([m()],so.prototype,"unit",2);u([m()],so.prototype,"display",2);var _k="sl-format-bytes";so.define("sl-format-bytes");H({tagName:_k,elementClass:so,react:U,events:{},displayName:"SlFormatBytes"});var jt=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([m({type:Number})],jt.prototype,"value",2);u([m()],jt.prototype,"type",2);u([m({attribute:"no-grouping",type:Boolean})],jt.prototype,"noGrouping",2);u([m()],jt.prototype,"currency",2);u([m({attribute:"currency-display"})],jt.prototype,"currencyDisplay",2);u([m({attribute:"minimum-integer-digits",type:Number})],jt.prototype,"minimumIntegerDigits",2);u([m({attribute:"minimum-fraction-digits",type:Number})],jt.prototype,"minimumFractionDigits",2);u([m({attribute:"maximum-fraction-digits",type:Number})],jt.prototype,"maximumFractionDigits",2);u([m({attribute:"minimum-significant-digits",type:Number})],jt.prototype,"minimumSignificantDigits",2);u([m({attribute:"maximum-significant-digits",type:Number})],jt.prototype,"maximumSignificantDigits",2);var kk="sl-format-number";jt.define("sl-format-number");H({tagName:kk,elementClass:jt,react:U,events:{},displayName:"SlFormatNumber"});var Sk="sl-icon";ue.define("sl-icon");H({tagName:Sk,elementClass:ue,react:U,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var Ck="sl-button-group";li.define("sl-button-group");H({tagName:Ck,elementClass:li,react:U,events:{},displayName:"SlButtonGroup"});var $k=W`
  ${G}

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
`,Dd=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer","header","image")}render(){return z`
      <div
        part="base"
        class=${K({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Dd.styles=$k;var Ek="sl-card";Dd.define("sl-card");H({tagName:Ek,elementClass:Dd,react:U,events:{},displayName:"SlCard"});var Tk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},zk=W`
  ${G}

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
`,Ak=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const r=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(r.setPointerCapture(t.pointerId),this.handleDragStart()):r.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const r=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const n=t.scrollLeft,s=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:i,behavior:"auto"}),t.scrollTo({left:n,top:s,behavior:Nd()?"auto":"smooth"}),requestAnimationFrame(async()=>{(r!==n||i!==s)&&await ot(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lk(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Pk(e,t,r=1){const i=t===void 0?0:e;t??(t=e);for(let n=i;r>0?n<t:t<n;n+=r)yield n}var Ok=(e,t)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...i)},t)}},Vp=(e,t,r)=>{const i=e[t];e[t]=function(...n){i.call(this,...n),r.call(this,i,...n)}},Ik="onscrollend"in window;if(!Ik){const e=new Set,t=new WeakMap,r=n=>{e.add(n.pointerId)},i=n=>{e.delete(n.pointerId)};document.addEventListener("pointerdown",r),document.addEventListener("pointerup",i),Vp(EventTarget.prototype,"addEventListener",function(n,s){if(s!=="scroll")return;const o=Ok(()=>{e.size?o():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",o,{passive:!0}),t.set(this,o)}),Vp(EventTarget.prototype,"removeEventListener",function(n,s){if(s!=="scroll")return;const o=t.get(this);o&&n.call(this,"scroll",o,{passive:!0})})}var Te=class extends F{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Tk(this,()=>this.next()),this.scrollController=new Ak(this),this.intersectionObserverEntries=new Map,this.localize=new ie(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const i=r.target;i.toggleAttribute("inert",!r.isIntersecting),i.classList.toggle("--in-view",r.isIntersecting),i.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:i}=this,n=i?e/r:(e-t)/r+1;return Math.ceil(n)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,n=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),n&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var o;const l=(o=this.shadowRoot)==null?void 0:o.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"auto")}else if(r){const i=e.indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,r)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",r+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),i=e.slice(0,t);r.reverse().forEach((n,s)=>{const o=n.cloneNode(!0);o.setAttribute("data-clone",String(e.length-s-1)),this.prepend(o)}),i.forEach((n,s)=>{const o=n.cloneNode(!0);o.setAttribute("data-clone",String(s)),this.append(o)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,i)=>{(i+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i,scrollContainer:n}=this,s=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!s.length)return;const l=i?(e+s.length)%s.length:Ae(e,0,s.length-1);this.activeSlide=l;const a=Ae(e+(i?r:0),0,o.length-1),c=o[a],h=n.getBoundingClientRect(),d=c.getBoundingClientRect();n.scrollTo({left:d.left-h.left+n.scrollLeft,top:d.top-h.top+n.scrollTop,behavior:Nd()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),n=this.canScrollPrev(),s=this.canScrollNext(),o=this.localize.dir()==="ltr";return z`
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

        ${this.navigation?z`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${K({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!n})}"
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
                  class=${K({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
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
                ${Lk(Pk(r),l=>{const a=l===i;return z`
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
    `}};Te.styles=zk;Te.dependencies={"sl-icon":ue};u([m({type:Boolean,reflect:!0})],Te.prototype,"loop",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"navigation",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"pagination",2);u([m({type:Boolean,reflect:!0})],Te.prototype,"autoplay",2);u([m({type:Number,attribute:"autoplay-interval"})],Te.prototype,"autoplayInterval",2);u([m({type:Number,attribute:"slides-per-page"})],Te.prototype,"slidesPerPage",2);u([m({type:Number,attribute:"slides-per-move"})],Te.prototype,"slidesPerMove",2);u([m()],Te.prototype,"orientation",2);u([m({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Te.prototype,"mouseDragging",2);u([I(".carousel__slides")],Te.prototype,"scrollContainer",2);u([I(".carousel__pagination")],Te.prototype,"paginationContainer",2);u([q()],Te.prototype,"activeSlide",2);u([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],Te.prototype,"initializeSlides",1);u([L("activeSlide")],Te.prototype,"handelSlideChange",1);u([L("slidesPerMove")],Te.prototype,"updateSlidesSnap",1);u([L("autoplay")],Te.prototype,"handleAutoplayChange",1);u([L("mouseDragging")],Te.prototype,"handleMouseDraggingChange",1);var Nk="sl-carousel";Te.define("sl-carousel");H({tagName:Nk,elementClass:Te,react:U,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Mk=W`
  ${G}

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
`,Rd=class extends F{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return z` <slot></slot> `}};Rd.styles=Mk;var Dk="sl-carousel-item";Rd.define("sl-carousel-item");H({tagName:Dk,elementClass:Rd,react:U,events:{},displayName:"SlCarouselItem"});var Rk="sl-checkbox";Re.define("sl-checkbox");H({tagName:Rk,elementClass:Re,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Fk=W`
  ${G}

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
`,ne=class extends F{constructor(){super(...arguments),this.formControlController=new zr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new At(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ol}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Pa`a`:Pa`button`;return ps`
      <${t}
        part="base"
        class=${K({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        title=${this.title}
        name=${B(e?void 0:this.name)}
        value=${B(e?void 0:this.value)}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e?this.rel:void 0)}
        role=${B(e?void 0:"button")}
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
        ${this.caret?ps` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ps`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ne.styles=g0;ne.dependencies={"sl-icon":ue,"sl-spinner":to};u([I(".button")],ne.prototype,"button",2);u([q()],ne.prototype,"hasFocus",2);u([q()],ne.prototype,"invalid",2);u([m()],ne.prototype,"title",2);u([m({reflect:!0})],ne.prototype,"variant",2);u([m({reflect:!0})],ne.prototype,"size",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"caret",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"loading",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"outline",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"pill",2);u([m({type:Boolean,reflect:!0})],ne.prototype,"circle",2);u([m()],ne.prototype,"type",2);u([m()],ne.prototype,"name",2);u([m()],ne.prototype,"value",2);u([m()],ne.prototype,"href",2);u([m()],ne.prototype,"target",2);u([m()],ne.prototype,"rel",2);u([m()],ne.prototype,"download",2);u([m()],ne.prototype,"form",2);u([m({attribute:"formaction"})],ne.prototype,"formAction",2);u([m({attribute:"formenctype"})],ne.prototype,"formEnctype",2);u([m({attribute:"formmethod"})],ne.prototype,"formMethod",2);u([m({attribute:"formnovalidate",type:Boolean})],ne.prototype,"formNoValidate",2);u([m({attribute:"formtarget"})],ne.prototype,"formTarget",2);u([L("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);function qe(e,t){Bk(e)&&(e="100%");const r=Vk(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Po(e){return Math.min(1,Math.max(0,e))}function Bk(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Vk(e){return typeof e=="string"&&e.indexOf("%")!==-1}function w0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Oo(e){return Number(e)<=1?`${Number(e)*100}%`:e}function _i(e){return e.length===1?"0"+e:String(e)}function jk(e,t,r){return{r:qe(e,255)*255,g:qe(t,255)*255,b:qe(r,255)*255}}function jp(e,t,r){e=qe(e,255),t=qe(t,255),r=qe(r,255);const i=Math.max(e,t,r),n=Math.min(e,t,r);let s=0,o=0;const l=(i+n)/2;if(i===n)o=0,s=0;else{const a=i-n;switch(o=l>.5?a/(2-i-n):a/(i+n),i){case e:s=(t-r)/a+(t<r?6:0);break;case t:s=(r-e)/a+2;break;case r:s=(e-t)/a+4;break}s/=6}return{h:s,s:o,l}}function Jl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Uk(e,t,r){let i,n,s;if(e=qe(e,360),t=qe(t,100),r=qe(r,100),t===0)n=r,s=r,i=r;else{const o=r<.5?r*(1+t):r+t-r*t,l=2*r-o;i=Jl(l,o,e+1/3),n=Jl(l,o,e),s=Jl(l,o,e-1/3)}return{r:i*255,g:n*255,b:s*255}}function Up(e,t,r){e=qe(e,255),t=qe(t,255),r=qe(r,255);const i=Math.max(e,t,r),n=Math.min(e,t,r);let s=0;const o=i,l=i-n,a=i===0?0:l/i;if(i===n)s=0;else{switch(i){case e:s=(t-r)/l+(t<r?6:0);break;case t:s=(r-e)/l+2;break;case r:s=(e-t)/l+4;break}s/=6}return{h:s,s:a,v:o}}function Hk(e,t,r){e=qe(e,360)*6,t=qe(t,100),r=qe(r,100);const i=Math.floor(e),n=e-i,s=r*(1-t),o=r*(1-n*t),l=r*(1-(1-n)*t),a=i%6,c=[r,o,s,s,l,r][a],h=[l,r,r,o,s,s][a],d=[s,s,l,r,r,o][a];return{r:c*255,g:h*255,b:d*255}}function Hp(e,t,r,i){const n=[_i(Math.round(e).toString(16)),_i(Math.round(t).toString(16)),_i(Math.round(r).toString(16))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Wk(e,t,r,i,n){const s=[_i(Math.round(e).toString(16)),_i(Math.round(t).toString(16)),_i(Math.round(r).toString(16)),_i(Gk(i))];return n&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Gk(e){return Math.round(parseFloat(e)*255).toString(16)}function Wp(e){return bt(e)/255}function bt(e){return parseInt(e,16)}function Kk(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const xu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function qk(e){let t={r:0,g:0,b:0},r=1,i=null,n=null,s=null,o=!1,l=!1;return typeof e=="string"&&(e=Qk(e)),typeof e=="object"&&(fr(e.r)&&fr(e.g)&&fr(e.b)?(t=jk(e.r,e.g,e.b),o=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):fr(e.h)&&fr(e.s)&&fr(e.v)?(i=Oo(e.s),n=Oo(e.v),t=Hk(e.h,i,n),o=!0,l="hsv"):fr(e.h)&&fr(e.s)&&fr(e.l)&&(i=Oo(e.s),s=Oo(e.l),t=Uk(e.h,i,s),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=w0(r),{ok:o,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const Xk="[-\\+]?\\d+%?",Yk="[-\\+]?\\d*\\.\\d+%?",Br="(?:"+Yk+")|(?:"+Xk+")",ec="[\\s|\\(]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")\\s*\\)?",tc="[\\s|\\(]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")\\s*\\)?",Gt={CSS_UNIT:new RegExp(Br),rgb:new RegExp("rgb"+ec),rgba:new RegExp("rgba"+tc),hsl:new RegExp("hsl"+ec),hsla:new RegExp("hsla"+tc),hsv:new RegExp("hsv"+ec),hsva:new RegExp("hsva"+tc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Qk(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(xu[e])e=xu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Gt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Gt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Gt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Gt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Gt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Gt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Gt.hex8.exec(e),r?{r:bt(r[1]),g:bt(r[2]),b:bt(r[3]),a:Wp(r[4]),format:t?"name":"hex8"}:(r=Gt.hex6.exec(e),r?{r:bt(r[1]),g:bt(r[2]),b:bt(r[3]),format:t?"name":"hex"}:(r=Gt.hex4.exec(e),r?{r:bt(r[1]+r[1]),g:bt(r[2]+r[2]),b:bt(r[3]+r[3]),a:Wp(r[4]+r[4]),format:t?"name":"hex8"}:(r=Gt.hex3.exec(e),r?{r:bt(r[1]+r[1]),g:bt(r[2]+r[2]),b:bt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function fr(e){return!!Gt.CSS_UNIT.exec(String(e))}class ke{constructor(t="",r={}){if(t instanceof ke)return t;typeof t=="number"&&(t=Kk(t)),this.originalInput=t;const i=qk(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,i,n;const s=t.r/255,o=t.g/255,l=t.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),l<=.03928?n=l/12.92:n=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n}getAlpha(){return this.a}setAlpha(t){return this.a=w0(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Up(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Up(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${i}%, ${n}%)`:`hsva(${r}, ${i}%, ${n}%, ${this.roundA})`}toHsl(){const t=jp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=jp(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${i}%, ${n}%)`:`hsla(${r}, ${i}%, ${n}%, ${this.roundA})`}toHex(t=!1){return Hp(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Wk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${i})`:`rgba(${t}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(qe(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(qe(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Hp(this.r,this.g,this.b,!1);for(const[r,i]of Object.entries(xu))if(t===i)return r;return!1}toString(t){const r=!!t;t=t??this.format;let i=!1;const n=this.a<1&&this.a>=0;return!r&&n&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ke(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=Po(r.l),new ke(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ke(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=Po(r.l),new ke(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=Po(r.s),new ke(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=Po(r.s),new ke(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new ke(r)}mix(t,r=50){const i=this.toRgb(),n=new ke(t).toRgb(),s=r/100,o={r:(n.r-i.r)*s+i.r,g:(n.g-i.g)*s+i.g,b:(n.b-i.b)*s+i.b,a:(n.a-i.a)*s+i.a};return new ke(o)}analogous(t=6,r=30){const i=this.toHsl(),n=360/r,s=[this];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,s.push(new ke(i));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ke(t)}monochromatic(t=6){const r=this.toHsv(),{h:i}=r,{s:n}=r;let{v:s}=r;const o=[],l=1/t;for(;t--;)o.push(new ke({h:i,s:n,v:s})),s=(s+l)%1;return o}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ke({h:(r+72)%360,s:t.s,l:t.l}),new ke({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),i=new ke(t).toRgb(),n=r.a+i.a*(1-r.a);return new ke({r:(r.r*r.a+i.r*i.a*(1-r.a))/n,g:(r.g*r.a+i.g*i.a*(1-r.a))/n,b:(r.b*r.a+i.b*i.a*(1-r.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:i}=r,n=[this],s=360/t;for(let o=1;o<t;o++)n.push(new ke({h:(i+o*s)%360,s:r.s,l:r.l}));return n}equals(t){return this.toRgbString()===new ke(t).toRgbString()}}var Gp="EyeDropper"in window,J=class extends F{constructor(){super(),this.formControlController=new zr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),gs(t,{onMove:o=>{this.alpha=Ae(o/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),gs(t,{onMove:o=>{this.hue=Ae(o/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:n}=t.getBoundingClientRect();let s=this.value,o=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,gs(t,{onMove:(l,a)=>{this.saturation=Ae(l/i*100,0,100),this.brightness=Ae(100-a/n*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ae(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ae(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ae(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ae(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ae(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ae(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ae(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ae(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ke(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},n=t.toRgb(),s=t.toHexString(),o=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(o)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Gp)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const n=new ke(`hsva(${e}, ${t}, ${r}, ${i/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(n=>n.trim()!==""),i=z`
      <div
        part="base"
        class=${K({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
            class=${K({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ct({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${B(this.disabled?void 0:"0")}
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
                tabindex=${B(this.disabled?void 0:"0")}
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
                      tabindex=${B(this.disabled?void 0:"0")}
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
            ${Gp?z`
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
                      tabindex=${B(this.disabled?void 0:"0")}
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
          class=${K({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ct({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};J.styles=Fk;J.dependencies={"sl-button-group":li,"sl-button":ne,"sl-dropdown":Qe,"sl-icon":ue,"sl-input":Y,"sl-visually-hidden":al};u([I('[part~="base"]')],J.prototype,"base",2);u([I('[part~="input"]')],J.prototype,"input",2);u([I(".color-dropdown")],J.prototype,"dropdown",2);u([I('[part~="preview"]')],J.prototype,"previewButton",2);u([I('[part~="trigger"]')],J.prototype,"trigger",2);u([q()],J.prototype,"hasFocus",2);u([q()],J.prototype,"isDraggingGridHandle",2);u([q()],J.prototype,"isEmpty",2);u([q()],J.prototype,"inputValue",2);u([q()],J.prototype,"hue",2);u([q()],J.prototype,"saturation",2);u([q()],J.prototype,"brightness",2);u([q()],J.prototype,"alpha",2);u([m()],J.prototype,"value",2);u([Di()],J.prototype,"defaultValue",2);u([m()],J.prototype,"label",2);u([m()],J.prototype,"format",2);u([m({type:Boolean,reflect:!0})],J.prototype,"inline",2);u([m({reflect:!0})],J.prototype,"size",2);u([m({attribute:"no-format-toggle",type:Boolean})],J.prototype,"noFormatToggle",2);u([m()],J.prototype,"name",2);u([m({type:Boolean,reflect:!0})],J.prototype,"disabled",2);u([m({type:Boolean})],J.prototype,"hoist",2);u([m({type:Boolean})],J.prototype,"opacity",2);u([m({type:Boolean})],J.prototype,"uppercase",2);u([m()],J.prototype,"swatches",2);u([m({reflect:!0})],J.prototype,"form",2);u([m({type:Boolean,reflect:!0})],J.prototype,"required",2);u([L("format",{waitUntilFirstUpdate:!0})],J.prototype,"handleFormatChange",1);u([L("opacity",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpacityChange",1);u([L("value")],J.prototype,"handleValueChange",1);var Zk="sl-color-picker";J.define("sl-color-picker");H({tagName:Zk,elementClass:J,react:U,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var Jk=W`
  ${G}

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
`,Fe=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let n=this.from,s="";r?[n,s]=this.from.trim().split("."):i&&([n,s]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in t?t.getElementById(n):null;o?i?e=o.getAttribute(s)||"":r?e=o[s]||"":e=o.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),n=e==="success"?this.successIcon:this.errorIcon,s=ge(this,"copy.in",{dir:"ltr"}),o=ge(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:i,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=e,n.hidden=!1,await n.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await n.animate(o.keyframes,o.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return z`
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
    `}};Fe.styles=Jk;Fe.dependencies={"sl-icon":ue,"sl-tooltip":De};u([I('slot[name="copy-icon"]')],Fe.prototype,"copyIcon",2);u([I('slot[name="success-icon"]')],Fe.prototype,"successIcon",2);u([I('slot[name="error-icon"]')],Fe.prototype,"errorIcon",2);u([I("sl-tooltip")],Fe.prototype,"tooltip",2);u([q()],Fe.prototype,"isCopying",2);u([q()],Fe.prototype,"status",2);u([m()],Fe.prototype,"value",2);u([m()],Fe.prototype,"from",2);u([m({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);u([m({attribute:"copy-label"})],Fe.prototype,"copyLabel",2);u([m({attribute:"success-label"})],Fe.prototype,"successLabel",2);u([m({attribute:"error-label"})],Fe.prototype,"errorLabel",2);u([m({attribute:"feedback-duration",type:Number})],Fe.prototype,"feedbackDuration",2);u([m({attribute:"tooltip-placement"})],Fe.prototype,"tooltipPlacement",2);u([m({type:Boolean})],Fe.prototype,"hoist",2);oe("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});oe("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var eS="sl-copy-button";Fe.define("sl-copy-button");H({tagName:eS,elementClass:Fe,react:U,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var tS=W`
  ${G}

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
`,Ut=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pe(this.body);const{keyframes:t,options:r}=ge(this,"details.show",{dir:this.localize.dir()});await Ce(this.body,La(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pe(this.body);const{keyframes:t,options:r}=ge(this,"details.hide",{dir:this.localize.dir()});await Ce(this.body,La(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ot(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ot(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return z`
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
    `}};Ut.styles=tS;Ut.dependencies={"sl-icon":ue};u([I(".details")],Ut.prototype,"details",2);u([I(".details__header")],Ut.prototype,"header",2);u([I(".details__body")],Ut.prototype,"body",2);u([I(".details__expand-icon-slot")],Ut.prototype,"expandIconSlot",2);u([m({type:Boolean,reflect:!0})],Ut.prototype,"open",2);u([m()],Ut.prototype,"summary",2);u([m({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);u([L("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);oe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});oe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var rS="sl-details";Ut.define("sl-details");H({tagName:rS,elementClass:Ut,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var iS=W`
  ${G}

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
`,ji=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),sr=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"icon","suffix"),this.localize=new ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pe(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=ge(this,"alert.show",{dir:this.localize.dir()});await Ce(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Pe(this.base);const{keyframes:e,options:t}=ge(this,"alert.hide",{dir:this.localize.dir()});await Ce(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ot(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ot(this,"sl-after-hide")}async toast(){return new Promise(e=>{ji.parentElement===null&&document.body.append(ji),ji.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ji.removeChild(this),e(),ji.querySelector("sl-alert")===null&&ji.remove()},{once:!0})})}render(){return z`
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
    `}};sr.styles=iS;sr.dependencies={"sl-icon-button":Oe};u([I('[part~="base"]')],sr.prototype,"base",2);u([m({type:Boolean,reflect:!0})],sr.prototype,"open",2);u([m({type:Boolean,reflect:!0})],sr.prototype,"closable",2);u([m({reflect:!0})],sr.prototype,"variant",2);u([m({type:Number})],sr.prototype,"duration",2);u([L("open",{waitUntilFirstUpdate:!0})],sr.prototype,"handleOpenChange",1);u([L("duration")],sr.prototype,"handleDurationChange",1);oe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var nS="sl-alert";sr.define("sl-alert");H({tagName:nS,elementClass:sr,react:U,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var sS=W`
  ${G}

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
`,Ht=class extends F{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return z`
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
    `}};Ht.styles=sS;Ht.dependencies={"sl-icon":ue};u([I(".animated-image__animated")],Ht.prototype,"animatedImage",2);u([q()],Ht.prototype,"frozenFrame",2);u([q()],Ht.prototype,"isLoaded",2);u([m()],Ht.prototype,"src",2);u([m()],Ht.prototype,"alt",2);u([m({type:Boolean,reflect:!0})],Ht.prototype,"play",2);u([L("play",{waitUntilFirstUpdate:!0})],Ht.prototype,"handlePlayChange",1);u([L("src")],Ht.prototype,"handleSrcChange",1);var oS="sl-animated-image";Ht.define("sl-animated-image");H({tagName:oS,elementClass:Ht,react:U,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var aS=W`
  ${G}

  :host {
    display: contents;
  }
`;const lS=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],cS=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],uS=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],dS=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],hS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pS=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fS=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],mS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],yS=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],bS=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xS=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],_S=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],kS=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],SS=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],CS=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],$S=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],ES=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],TS=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],zS=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],AS=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],LS=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],PS=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],OS=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],IS=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],NS=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],MS=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],DS=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],RS=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],FS=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],BS=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],VS=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jS=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],US=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],HS=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],WS=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],GS=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],KS=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qS=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],XS=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],YS=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],QS=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ZS=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],JS=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],e2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],t2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],r2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],i2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],n2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],s2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],o2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],a2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],l2=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],c2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],u2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],d2=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],h2=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],p2=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],f2=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],m2=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],g2=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],v2=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],y2=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],b2=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],w2=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],x2=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],_2=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],k2=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],S2=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],C2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],$2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],E2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],T2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],z2=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],A2=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],L2=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],P2=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],O2=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],I2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],N2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],M2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],D2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],R2=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],F2=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],B2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],V2=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],j2=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],U2=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],H2=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],W2=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],G2=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],K2=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],q2=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],X2=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Y2=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Q2=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],x0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Z2=Object.freeze(Object.defineProperty({__proto__:null,backInDown:xS,backInLeft:_S,backInRight:kS,backInUp:SS,backOutDown:CS,backOutLeft:$S,backOutRight:ES,backOutUp:TS,bounce:lS,bounceIn:zS,bounceInDown:AS,bounceInLeft:LS,bounceInRight:PS,bounceInUp:OS,bounceOut:IS,bounceOutDown:NS,bounceOutLeft:MS,bounceOutRight:DS,bounceOutUp:RS,easings:x0,fadeIn:FS,fadeInBottomLeft:BS,fadeInBottomRight:VS,fadeInDown:jS,fadeInDownBig:US,fadeInLeft:HS,fadeInLeftBig:WS,fadeInRight:GS,fadeInRightBig:KS,fadeInTopLeft:qS,fadeInTopRight:XS,fadeInUp:YS,fadeInUpBig:QS,fadeOut:ZS,fadeOutBottomLeft:JS,fadeOutBottomRight:e2,fadeOutDown:t2,fadeOutDownBig:r2,fadeOutLeft:i2,fadeOutLeftBig:n2,fadeOutRight:s2,fadeOutRightBig:o2,fadeOutTopLeft:a2,fadeOutTopRight:l2,fadeOutUp:c2,fadeOutUpBig:u2,flash:cS,flip:d2,flipInX:h2,flipInY:p2,flipOutX:f2,flipOutY:m2,headShake:uS,heartBeat:dS,hinge:R2,jackInTheBox:F2,jello:hS,lightSpeedInLeft:g2,lightSpeedInRight:v2,lightSpeedOutLeft:y2,lightSpeedOutRight:b2,pulse:pS,rollIn:B2,rollOut:V2,rotateIn:w2,rotateInDownLeft:x2,rotateInDownRight:_2,rotateInUpLeft:k2,rotateInUpRight:S2,rotateOut:C2,rotateOutDownLeft:$2,rotateOutDownRight:E2,rotateOutUpLeft:T2,rotateOutUpRight:z2,rubberBand:fS,shake:mS,shakeX:gS,shakeY:vS,slideInDown:A2,slideInLeft:L2,slideInRight:P2,slideInUp:O2,slideOutDown:I2,slideOutLeft:N2,slideOutRight:M2,slideOutUp:D2,swing:yS,tada:bS,wobble:wS,zoomIn:j2,zoomInDown:U2,zoomInLeft:H2,zoomInRight:W2,zoomInUp:G2,zoomOut:K2,zoomOutDown:q2,zoomOutLeft:X2,zoomOutRight:Y2,zoomOutUp:Q2},Symbol.toStringTag,{value:"Module"}));var Be=class extends F{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=x0[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:Z2[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!i?!1:(this.destroyAnimation(),this.animation=s.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return z` <slot @slotchange=${this.handleSlotChange}></slot> `}};Be.styles=aS;u([kw("slot")],Be.prototype,"defaultSlot",2);u([m()],Be.prototype,"name",2);u([m({type:Boolean,reflect:!0})],Be.prototype,"play",2);u([m({type:Number})],Be.prototype,"delay",2);u([m()],Be.prototype,"direction",2);u([m({type:Number})],Be.prototype,"duration",2);u([m()],Be.prototype,"easing",2);u([m({attribute:"end-delay",type:Number})],Be.prototype,"endDelay",2);u([m()],Be.prototype,"fill",2);u([m({type:Number})],Be.prototype,"iterations",2);u([m({attribute:"iteration-start",type:Number})],Be.prototype,"iterationStart",2);u([m({attribute:!1})],Be.prototype,"keyframes",2);u([m({attribute:"playback-rate",type:Number})],Be.prototype,"playbackRate",2);u([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Be.prototype,"handleAnimationChange",1);u([L("play")],Be.prototype,"handlePlayChange",1);u([L("playbackRate")],Be.prototype,"handlePlaybackRateChange",1);var J2="sl-animation";Be.define("sl-animation");var eC=H({tagName:J2,elementClass:Be,react:U,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),_0=eC,tC=W`
  ${G}

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
`,Ln=class extends F{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return z`
      <span
        part="base"
        class=${K({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ln.styles=tC;u([m({reflect:!0})],Ln.prototype,"variant",2);u([m({type:Boolean,reflect:!0})],Ln.prototype,"pill",2);u([m({type:Boolean,reflect:!0})],Ln.prototype,"pulse",2);var rC="sl-badge";Ln.define("sl-badge");H({tagName:rC,elementClass:Ln,react:U,events:{},displayName:"SlBadge"});var iC=W`
  ${G}

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
`,or=class extends F{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=z`
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
        class=${K({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};or.styles=iC;or.dependencies={"sl-icon":ue};u([q()],or.prototype,"hasError",2);u([m()],or.prototype,"image",2);u([m()],or.prototype,"label",2);u([m()],or.prototype,"initials",2);u([m()],or.prototype,"loading",2);u([m({reflect:!0})],or.prototype,"shape",2);u([L("image")],or.prototype,"handleImageChange",1);var nC="sl-avatar";or.define("sl-avatar");H({tagName:nC,elementClass:or,react:U,events:{},displayName:"SlAvatar"});var sC=W`
  ${G}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Bi=class extends F{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),z`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Bi.styles=sC;Bi.dependencies={"sl-icon":ue};u([I("slot")],Bi.prototype,"defaultSlot",2);u([I('slot[name="separator"]')],Bi.prototype,"separatorSlot",2);u([m()],Bi.prototype,"label",2);var oC="sl-breadcrumb";Bi.define("sl-breadcrumb");H({tagName:oC,elementClass:Bi,react:U,events:{},displayName:"SlBreadcrumb"});var aC=W`
  ${G}

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
`,Pn=class extends F{constructor(){super(...arguments),this.hasSlotController=new At(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return z`
      <div
        part="base"
        class=${K({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?z`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
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
    `}};Pn.styles=aC;u([m()],Pn.prototype,"href",2);u([m()],Pn.prototype,"target",2);u([m()],Pn.prototype,"rel",2);var lC="sl-breadcrumb-item";Pn.define("sl-breadcrumb-item");H({tagName:lC,elementClass:Pn,react:U,events:{},displayName:"SlBreadcrumbItem"});var cC="sl-button";ne.define("sl-button");H({tagName:cC,elementClass:ne,react:U,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});function Kp(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Fd(e={},t={}){Object.keys(t).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Kp(t[r])&&Kp(e[r])&&Object.keys(t[r]).length>0&&Fd(e[r],t[r])})}const k0={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tt(){const e=typeof document<"u"?document:{};return Fd(e,k0),e}const uC={document:k0,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function He(){const e=typeof window<"u"?window:{};return Fd(e,uC),e}function dC(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(r){t.__proto__=r}})}class Vr extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),dC(this))}}function oo(e=[]){const t=[];return e.forEach(r=>{Array.isArray(r)?t.push(...oo(r)):t.push(r)}),t}function S0(e,t){return Array.prototype.filter.call(e,t)}function hC(e){const t=[];for(let r=0;r<e.length;r+=1)t.indexOf(e[r])===-1&&t.push(e[r]);return t}function pC(e,t){if(typeof e!="string")return[e];const r=[],i=t.querySelectorAll(e);for(let n=0;n<i.length;n+=1)r.push(i[n]);return r}function V(e,t){const r=He(),i=tt();let n=[];if(!t&&e instanceof Vr)return e;if(!e)return new Vr(n);if(typeof e=="string"){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let o="div";s.indexOf("<li")===0&&(o="ul"),s.indexOf("<tr")===0&&(o="tbody"),(s.indexOf("<td")===0||s.indexOf("<th")===0)&&(o="tr"),s.indexOf("<tbody")===0&&(o="table"),s.indexOf("<option")===0&&(o="select");const l=i.createElement(o);l.innerHTML=s;for(let a=0;a<l.childNodes.length;a+=1)n.push(l.childNodes[a])}else n=pC(e.trim(),t||i)}else if(e.nodeType||e===r||e===i)n.push(e);else if(Array.isArray(e)){if(e instanceof Vr)return e;n=e}return new Vr(hC(n))}V.fn=Vr.prototype;function fC(...e){const t=oo(e.map(r=>r.split(" ")));return this.forEach(r=>{r.classList.add(...t)}),this}function mC(...e){const t=oo(e.map(r=>r.split(" ")));return this.forEach(r=>{r.classList.remove(...t)}),this}function gC(...e){const t=oo(e.map(r=>r.split(" ")));this.forEach(r=>{t.forEach(i=>{r.classList.toggle(i)})})}function vC(...e){const t=oo(e.map(r=>r.split(" ")));return S0(this,r=>t.filter(i=>r.classList.contains(i)).length>0).length>0}function yC(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let r=0;r<this.length;r+=1)if(arguments.length===2)this[r].setAttribute(e,t);else for(const i in e)this[r][i]=e[i],this[r].setAttribute(i,e[i]);return this}function bC(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function wC(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function xC(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function _C(...e){let[t,r,i,n]=e;typeof e[1]=="function"&&([t,i,n]=e,r=void 0),n||(n=!1);function s(c){const h=c.target;if(!h)return;const d=c.target.dom7EventData||[];if(d.indexOf(c)<0&&d.unshift(c),V(h).is(r))i.apply(h,d);else{const p=V(h).parents();for(let g=0;g<p.length;g+=1)V(p[g]).is(r)&&i.apply(p[g],d)}}function o(c){const h=c&&c.target?c.target.dom7EventData||[]:[];h.indexOf(c)<0&&h.unshift(c),i.apply(this,h)}const l=t.split(" ");let a;for(let c=0;c<this.length;c+=1){const h=this[c];if(r)for(a=0;a<l.length;a+=1){const d=l[a];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[d]||(h.dom7LiveListeners[d]=[]),h.dom7LiveListeners[d].push({listener:i,proxyListener:s}),h.addEventListener(d,s,n)}else for(a=0;a<l.length;a+=1){const d=l[a];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[d]||(h.dom7Listeners[d]=[]),h.dom7Listeners[d].push({listener:i,proxyListener:o}),h.addEventListener(d,o,n)}}return this}function kC(...e){let[t,r,i,n]=e;typeof e[1]=="function"&&([t,i,n]=e,r=void 0),n||(n=!1);const s=t.split(" ");for(let o=0;o<s.length;o+=1){const l=s[o];for(let a=0;a<this.length;a+=1){const c=this[a];let h;if(!r&&c.dom7Listeners?h=c.dom7Listeners[l]:r&&c.dom7LiveListeners&&(h=c.dom7LiveListeners[l]),h&&h.length)for(let d=h.length-1;d>=0;d-=1){const p=h[d];i&&p.listener===i||i&&p.listener&&p.listener.dom7proxy&&p.listener.dom7proxy===i?(c.removeEventListener(l,p.proxyListener,n),h.splice(d,1)):i||(c.removeEventListener(l,p.proxyListener,n),h.splice(d,1))}}}return this}function SC(...e){const t=He(),r=e[0].split(" "),i=e[1];for(let n=0;n<r.length;n+=1){const s=r[n];for(let o=0;o<this.length;o+=1){const l=this[o];if(t.CustomEvent){const a=new t.CustomEvent(s,{detail:i,bubbles:!0,cancelable:!0});l.dom7EventData=e.filter((c,h)=>h>0),l.dispatchEvent(a),l.dom7EventData=[],delete l.dom7EventData}}}return this}function CC(e){const t=this;function r(i){i.target===this&&(e.call(this,i),t.off("transitionend",r))}return e&&t.on("transitionend",r),this}function $C(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function EC(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function TC(){if(this.length>0){const e=He(),t=tt(),r=this[0],i=r.getBoundingClientRect(),n=t.body,s=r.clientTop||n.clientTop||0,o=r.clientLeft||n.clientLeft||0,l=r===e?e.scrollY:r.scrollTop,a=r===e?e.scrollX:r.scrollLeft;return{top:i.top+l-s,left:i.left+a-o}}return null}function zC(){const e=He();return this[0]?e.getComputedStyle(this[0],null):{}}function AC(e,t){const r=He();let i;if(arguments.length===1)if(typeof e=="string"){if(this[0])return r.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(i=0;i<this.length;i+=1)for(const n in e)this[i].style[n]=e[n];return this}if(arguments.length===2&&typeof e=="string"){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this}function LC(e){return e?(this.forEach((t,r)=>{e.apply(t,[t,r])}),this):this}function PC(e){const t=S0(this,e);return V(t)}function OC(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function IC(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function NC(e){const t=He(),r=tt(),i=this[0];let n,s;if(!i||typeof e>"u")return!1;if(typeof e=="string"){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(n=V(e),s=0;s<n.length;s+=1)if(n[s]===i)return!0;return!1}if(e===r)return i===r;if(e===t)return i===t;if(e.nodeType||e instanceof Vr){for(n=e.nodeType?[e]:e,s=0;s<n.length;s+=1)if(n[s]===i)return!0;return!1}return!1}function MC(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function DC(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return V([]);if(e<0){const r=t+e;return r<0?V([]):V([this[r]])}return V([this[e]])}function RC(...e){let t;const r=tt();for(let i=0;i<e.length;i+=1){t=e[i];for(let n=0;n<this.length;n+=1)if(typeof t=="string"){const s=r.createElement("div");for(s.innerHTML=t;s.firstChild;)this[n].appendChild(s.firstChild)}else if(t instanceof Vr)for(let s=0;s<t.length;s+=1)this[n].appendChild(t[s]);else this[n].appendChild(t)}return this}function FC(e){const t=tt();let r,i;for(r=0;r<this.length;r+=1)if(typeof e=="string"){const n=t.createElement("div");for(n.innerHTML=e,i=n.childNodes.length-1;i>=0;i-=1)this[r].insertBefore(n.childNodes[i],this[r].childNodes[0])}else if(e instanceof Vr)for(i=0;i<e.length;i+=1)this[r].insertBefore(e[i],this[r].childNodes[0]);else this[r].insertBefore(e,this[r].childNodes[0]);return this}function BC(e){return this.length>0?e?this[0].nextElementSibling&&V(this[0].nextElementSibling).is(e)?V([this[0].nextElementSibling]):V([]):this[0].nextElementSibling?V([this[0].nextElementSibling]):V([]):V([])}function VC(e){const t=[];let r=this[0];if(!r)return V([]);for(;r.nextElementSibling;){const i=r.nextElementSibling;e?V(i).is(e)&&t.push(i):t.push(i),r=i}return V(t)}function jC(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&V(t.previousElementSibling).is(e)?V([t.previousElementSibling]):V([]):t.previousElementSibling?V([t.previousElementSibling]):V([])}return V([])}function UC(e){const t=[];let r=this[0];if(!r)return V([]);for(;r.previousElementSibling;){const i=r.previousElementSibling;e?V(i).is(e)&&t.push(i):t.push(i),r=i}return V(t)}function HC(e){const t=[];for(let r=0;r<this.length;r+=1)this[r].parentNode!==null&&(e?V(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode));return V(t)}function WC(e){const t=[];for(let r=0;r<this.length;r+=1){let i=this[r].parentNode;for(;i;)e?V(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return V(t)}function GC(e){let t=this;return typeof e>"u"?V([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function KC(e){const t=[];for(let r=0;r<this.length;r+=1){const i=this[r].querySelectorAll(e);for(let n=0;n<i.length;n+=1)t.push(i[n])}return V(t)}function qC(e){const t=[];for(let r=0;r<this.length;r+=1){const i=this[r].children;for(let n=0;n<i.length;n+=1)(!e||V(i[n]).is(e))&&t.push(i[n])}return V(t)}function XC(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const qp={addClass:fC,removeClass:mC,hasClass:vC,toggleClass:gC,attr:yC,removeAttr:bC,transform:wC,transition:xC,on:_C,off:kC,trigger:SC,transitionEnd:CC,outerWidth:$C,outerHeight:EC,styles:zC,offset:TC,css:AC,each:LC,html:OC,text:IC,is:NC,index:MC,eq:DC,append:RC,prepend:FC,next:BC,nextAll:VC,prev:jC,prevAll:UC,parent:HC,parents:WC,closest:GC,find:KC,children:qC,filter:PC,remove:XC};Object.keys(qp).forEach(e=>{Object.defineProperty(V.fn,e,{value:qp[e],writable:!0})});function YC(e){const t=e;Object.keys(t).forEach(r=>{try{t[r]=null}catch{}try{delete t[r]}catch{}})}function Ia(e,t=0){return setTimeout(e,t)}function Us(){return Date.now()}function QC(e){const t=He();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}function ZC(e,t="x"){const r=He();let i,n,s;const o=QC(e);return r.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new r.WebKitCSSMatrix(n==="none"?"":n)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),t==="x"&&(r.WebKitCSSMatrix?n=s.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),t==="y"&&(r.WebKitCSSMatrix?n=s.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function Io(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function JC(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function xt(...e){const t=Object(e[0]),r=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const n=e[i];if(n!=null&&!JC(n)){const s=Object.keys(Object(n)).filter(o=>r.indexOf(o)<0);for(let o=0,l=s.length;o<l;o+=1){const a=s[o],c=Object.getOwnPropertyDescriptor(n,a);c!==void 0&&c.enumerable&&(Io(t[a])&&Io(n[a])?n[a].__swiper__?t[a]=n[a]:xt(t[a],n[a]):!Io(t[a])&&Io(n[a])?(t[a]={},n[a].__swiper__?t[a]=n[a]:xt(t[a],n[a])):t[a]=n[a])}}}return t}function No(e,t,r){e.style.setProperty(t,r)}function C0({swiper:e,targetPosition:t,side:r}){const i=He(),n=-e.translate;let s=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const a=t>n?"next":"prev",c=(d,p)=>a==="next"&&d>=p||a==="prev"&&d<=p,h=()=>{o=new Date().getTime(),s===null&&(s=o);const d=Math.max(Math.min((o-s)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let g=n+p*(t-n);if(c(g,t)&&(g=t),e.wrapperEl.scrollTo({[r]:g}),c(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(h)};h()}let rc;function e$(){const e=He(),t=tt();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let i=!1;try{const n=Object.defineProperty({},"passive",{get(){i=!0}});e.addEventListener("testPassiveListener",null,n)}catch{}return i}(),gestures:function(){return"ongesturestart"in e}()}}function $0(){return rc||(rc=e$()),rc}let ic;function t$({userAgent:e}={}){const t=$0(),r=He(),i=r.navigator.platform,n=e||r.navigator.userAgent,s={ios:!1,android:!1},o=r.screen.width,l=r.screen.height,a=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad).*OS\s([\d_]+)/);const h=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&t.touch&&y.indexOf(`${o}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),a&&!p&&(s.os="android",s.android=!0),(c||d||h)&&(s.os="ios",s.ios=!0),s}function r$(e={}){return ic||(ic=t$(e)),ic}let nc;function i$(){const e=He();function t(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function n$(){return nc||(nc=i$()),nc}function s$({swiper:e,on:t,emit:r}){const i=He();let n=null,s=null;const o=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(h=>{s=i.requestAnimationFrame(()=>{const{width:d,height:p}=e;let g=d,y=p;h.forEach(({contentBoxSize:w,contentRect:k,target:v})=>{v&&v!==e.el||(g=k?k.width:(w[0]||w).inlineSize,y=k?k.height:(w[0]||w).blockSize)}),(g!==d||y!==p)&&o()})}),n.observe(e.el))},a=()=>{s&&i.cancelAnimationFrame(s),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),t("destroy",()=>{a(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function o$({swiper:e,extendParams:t,on:r,emit:i}){const n=[],s=He(),o=(c,h={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,p=new d(g=>{if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(y):s.setTimeout(y,0)});p.observe(c,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=e.$el.parents();for(let h=0;h<c.length;h+=1)o(c[h])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},a=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",a)}const a$={on(e,t,r){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const n=r?"unshift":"push";return e.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][n](t)}),i},once(e,t,r){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function n(...s){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(i,s)}return n.__emitterProxy=t,i.on(e,n,r)},onAny(e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return r.eventsAnyListeners.indexOf(e)<0&&r.eventsAnyListeners[i](e),r},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const r=t.eventsAnyListeners.indexOf(e);return r>=0&&t.eventsAnyListeners.splice(r,1),t},off(e,t){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?r.eventsListeners[i]=[]:r.eventsListeners[i]&&r.eventsListeners[i].forEach((n,s)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&r.eventsListeners[i].splice(s,1)})}),r},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let r,i,n;return typeof e[0]=="string"||Array.isArray(e[0])?(r=e[0],i=e.slice(1,e.length),n=t):(r=e[0].events,i=e[0].data,n=e[0].context||t),i.unshift(n),(Array.isArray(r)?r:r.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...i])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(n,i)})}),t}};function l$(){const e=this;let t,r;const i=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?r=e.params.height:r=i[0].clientHeight,!(t===0&&e.isHorizontal()||r===0&&e.isVertical())&&(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),r=r-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Object.assign(e,{width:t,height:r,size:e.isHorizontal()?t:r}))}function c$(){const e=this;function t(C){return e.isHorizontal()?C:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[C]}function r(C,M){return parseFloat(C.getPropertyValue(t(M))||0)}const i=e.params,{$wrapperEl:n,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&i.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,h=n.children(`.${e.params.slideClass}`),d=a?e.virtual.slides.length:h.length;let p=[];const g=[],y=[];let w=i.slidesOffsetBefore;typeof w=="function"&&(w=i.slidesOffsetBefore.call(e));let k=i.slidesOffsetAfter;typeof k=="function"&&(k=i.slidesOffsetAfter.call(e));const v=e.snapGrid.length,f=e.slidesGrid.length;let b=i.spaceBetween,x=-w,_=0,S=0;if(typeof s>"u")return;typeof b=="string"&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*s),e.virtualSize=-b,o?h.css({marginLeft:"",marginBottom:"",marginTop:""}):h.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(No(e.wrapperEl,"--swiper-centered-offset-before",""),No(e.wrapperEl,"--swiper-centered-offset-after",""));const E=i.grid&&i.grid.rows>1&&e.grid;E&&e.grid.initSlides(d);let $;const P=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(C=>typeof i.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<d;C+=1){$=0;const M=h.eq(C);if(E&&e.grid.updateSlide(C,M,d,t),M.css("display")!=="none"){if(i.slidesPerView==="auto"){P&&(h[C].style[t("width")]="");const R=getComputedStyle(M[0]),te=M[0].style.transform,le=M[0].style.webkitTransform;if(te&&(M[0].style.transform="none"),le&&(M[0].style.webkitTransform="none"),i.roundLengths)$=e.isHorizontal()?M.outerWidth(!0):M.outerHeight(!0);else{const ye=r(R,"width"),Ie=r(R,"padding-left"),We=r(R,"padding-right"),N=r(R,"margin-left"),j=r(R,"margin-right"),X=R.getPropertyValue("box-sizing");if(X&&X==="border-box")$=ye+N+j;else{const{clientWidth:be,offsetWidth:ze}=M[0];$=ye+Ie+We+N+j+(ze-be)}}te&&(M[0].style.transform=te),le&&(M[0].style.webkitTransform=le),i.roundLengths&&($=Math.floor($))}else $=(s-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&($=Math.floor($)),h[C]&&(h[C].style[t("width")]=`${$}px`);h[C]&&(h[C].swiperSlideSize=$),y.push($),i.centeredSlides?(x=x+$/2+_/2+b,_===0&&C!==0&&(x=x-s/2-b),C===0&&(x=x-s/2-b),Math.abs(x)<1/1e3&&(x=0),i.roundLengths&&(x=Math.floor(x)),S%i.slidesPerGroup===0&&p.push(x),g.push(x)):(i.roundLengths&&(x=Math.floor(x)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&p.push(x),g.push(x),x=x+$+b),e.virtualSize+=$+b,_=$,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+k,o&&l&&(i.effect==="slide"||i.effect==="coverflow")&&n.css({width:`${e.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&n.css({[t("width")]:`${e.virtualSize+i.spaceBetween}px`}),E&&e.grid.updateWrapperSize($,p,t),!i.centeredSlides){const C=[];for(let M=0;M<p.length;M+=1){let R=p[M];i.roundLengths&&(R=Math.floor(R)),p[M]<=e.virtualSize-s&&C.push(R)}p=C,Math.floor(e.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-s)}if(p.length===0&&(p=[0]),i.spaceBetween!==0){const C=e.isHorizontal()&&o?"marginLeft":t("marginRight");h.filter((M,R)=>i.cssMode?R!==h.length-1:!0).css({[C]:`${b}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let C=0;y.forEach(R=>{C+=R+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween;const M=C-s;p=p.map(R=>R<0?-w:R>M?M+k:R)}if(i.centerInsufficientSlides){let C=0;if(y.forEach(M=>{C+=M+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween,C<s){const M=(s-C)/2;p.forEach((R,te)=>{p[te]=R-M}),g.forEach((R,te)=>{g[te]=R+M})}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:g,slidesSizesGrid:y}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){No(e.wrapperEl,"--swiper-centered-offset-before",`${-p[0]}px`),No(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const C=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(R=>R+C),e.slidesGrid=e.slidesGrid.map(R=>R+M)}if(d!==c&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!a&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const C=`${i.containerModifierClass}backface-hidden`,M=e.$el.hasClass(C);d<=i.maxBackfaceHiddenSlides?M||e.$el.addClass(C):M&&e.$el.removeClass(C)}}function u$(e){const t=this,r=[],i=t.virtual&&t.params.virtual.enabled;let n=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>i?t.slides.filter(a=>parseInt(a.getAttribute("data-swiper-slide-index"),10)===l)[0]:t.slides.eq(l)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||V([])).each(l=>{r.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!i)break;r.push(o(l))}else r.push(o(t.activeIndex));for(s=0;s<r.length;s+=1)if(typeof r[s]<"u"){const l=r[s].offsetHeight;n=l>n?l:n}(n||n===0)&&t.$wrapperEl.css("height",`${n}px`)}function d$(){const e=this,t=e.slides;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop}function h$(e=this&&this.translate||0){const t=this,r=t.params,{slides:i,rtlTranslate:n,snapGrid:s}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),i.removeClass(r.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let l=0;l<i.length;l+=1){const a=i[l];let c=a.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(c-=i[0].swiperSlideOffset);const h=(o+(r.centeredSlides?t.minTranslate():0)-c)/(a.swiperSlideSize+r.spaceBetween),d=(o-s[0]+(r.centeredSlides?t.minTranslate():0)-c)/(a.swiperSlideSize+r.spaceBetween),p=-(o-c),g=p+t.slidesSizesGrid[l];(p>=0&&p<t.size-1||g>1&&g<=t.size||p<=0&&g>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(l),i.eq(l).addClass(r.slideVisibleClass)),a.progress=n?-h:h,a.originalProgress=n?-d:d}t.visibleSlides=V(t.visibleSlides)}function p$(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const r=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:s,isEnd:o}=t;const l=s,a=o;i===0?(n=0,s=!0,o=!0):(n=(e-t.minTranslate())/i,s=n<=0,o=n>=1),Object.assign(t,{progress:n,isBeginning:s,isEnd:o}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!a&&t.emit("reachEnd toEdge"),(l&&!s||a&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}function f$(){const e=this,{slides:t,params:r,$wrapperEl:i,activeIndex:n,realIndex:s}=e,o=e.virtual&&r.virtual.enabled;t.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`);let l;o?l=e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${n}"]`):l=t.eq(n),l.addClass(r.slideActiveClass),r.loop&&(l.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass));let a=l.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);r.loop&&a.length===0&&(a=t.eq(0),a.addClass(r.slideNextClass));let c=l.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);r.loop&&c.length===0&&(c=t.eq(-1),c.addClass(r.slidePrevClass)),r.loop&&(a.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass),c.hasClass(r.slideDuplicateClass)?i.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass):i.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)),e.emitSlidesClasses()}function m$(e){const t=this,r=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:n,params:s,activeIndex:o,realIndex:l,snapIndex:a}=t;let c=e,h;if(typeof c>"u"){for(let p=0;p<i.length;p+=1)typeof i[p+1]<"u"?r>=i[p]&&r<i[p+1]-(i[p+1]-i[p])/2?c=p:r>=i[p]&&r<i[p+1]&&(c=p+1):r>=i[p]&&(c=p);s.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0)}if(n.indexOf(r)>=0)h=n.indexOf(r);else{const p=Math.min(s.slidesPerGroupSkip,c);h=p+Math.floor((c-p)/s.slidesPerGroup)}if(h>=n.length&&(h=n.length-1),c===o){h!==a&&(t.snapIndex=h,t.emit("snapIndexChange"));return}const d=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:h,realIndex:d,previousIndex:o,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function g$(e){const t=this,r=t.params,i=V(e).closest(`.${r.slideClass}`)[0];let n=!1,s;if(i){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===i){n=!0,s=o;break}}if(i&&n)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(V(i).attr("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const v$={updateSize:l$,updateSlides:c$,updateAutoHeight:u$,updateSlidesOffset:d$,updateSlidesProgress:h$,updateProgress:p$,updateSlidesClasses:f$,updateActiveIndex:m$,updateClickedSlide:g$};function y$(e=this.isHorizontal()?"x":"y"){const t=this,{params:r,rtlTranslate:i,translate:n,$wrapperEl:s}=t;if(r.virtualTranslate)return i?-n:n;if(r.cssMode)return n;let o=ZC(s[0],e);return i&&(o=-o),o||0}function b$(e,t){const r=this,{rtlTranslate:i,params:n,$wrapperEl:s,wrapperEl:o,progress:l}=r;let a=0,c=0;const h=0;r.isHorizontal()?a=i?-e:e:c=e,n.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),n.cssMode?o[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-a:-c:n.virtualTranslate||s.transform(`translate3d(${a}px, ${c}px, ${h}px)`),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?a:c;let d;const p=r.maxTranslate()-r.minTranslate();p===0?d=0:d=(e-r.minTranslate())/p,d!==l&&r.updateProgress(e),r.emit("setTranslate",r.translate,t)}function w$(){return-this.snapGrid[0]}function x$(){return-this.snapGrid[this.snapGrid.length-1]}function _$(e=0,t=this.params.speed,r=!0,i=!0,n){const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),c=s.maxTranslate();let h;if(i&&e>a?h=a:i&&e<c?h=c:h=e,s.updateProgress(h),o.cssMode){const d=s.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-h;else{if(!s.support.smoothScroll)return C0({swiper:s,targetPosition:-h,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-h,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(h),r&&(s.emit("beforeTransitionStart",t,n),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(h),r&&(s.emit("beforeTransitionStart",t,n),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,r&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}const k$={getTranslate:y$,setTranslate:b$,minTranslate:w$,maxTranslate:x$,translateTo:_$};function S$(e,t){const r=this;r.params.cssMode||r.$wrapperEl.transition(e),r.emit("setTransition",e,t)}function E0({swiper:e,runCallbacks:t,direction:r,step:i}){const{activeIndex:n,previousIndex:s}=e;let o=r;if(o||(n>s?o="next":n<s?o="prev":o="reset"),e.emit(`transition${i}`),t&&n!==s){if(o==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function C$(e=!0,t){const r=this,{params:i}=r;i.cssMode||(i.autoHeight&&r.updateAutoHeight(),E0({swiper:r,runCallbacks:e,direction:t,step:"Start"}))}function $$(e=!0,t){const r=this,{params:i}=r;r.animating=!1,!i.cssMode&&(r.setTransition(0),E0({swiper:r,runCallbacks:e,direction:t,step:"End"}))}const E$={setTransition:S$,transitionStart:C$,transitionEnd:$$};function T$(e=0,t=this.params.speed,r=!0,i,n){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const b=parseInt(e,10);if(!isFinite(b))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=b}const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:h,activeIndex:d,rtlTranslate:p,wrapperEl:g,enabled:y}=s;if(s.animating&&l.preventInteractionOnTransition||!y&&!i&&!n)return!1;const w=Math.min(s.params.slidesPerGroupSkip,o);let k=w+Math.floor((o-w)/s.params.slidesPerGroup);k>=a.length&&(k=a.length-1);const v=-a[k];if(l.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const x=-Math.floor(v*100),_=Math.floor(c[b]*100),S=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?x>=_&&x<S-(S-_)/2?o=b:x>=_&&x<S&&(o=b+1):x>=_&&(o=b)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(d||0)!==o))return!1;o!==(h||0)&&r&&s.emit("beforeSlideChangeStart"),s.updateProgress(v);let f;if(o>d?f="next":o<d?f="prev":f="reset",p&&-v===s.translate||!p&&v===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(v),f!=="reset"&&(s.transitionStart(r,f),s.transitionEnd(r,f)),!1;if(l.cssMode){const b=s.isHorizontal(),x=p?v:-v;if(t===0){const _=s.virtual&&s.params.virtual.enabled;_&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),g[b?"scrollLeft":"scrollTop"]=x,_&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return C0({swiper:s,targetPosition:x,side:b?"left":"top"}),!0;g.scrollTo({[b?"left":"top"]:x,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(r,f),t===0?s.transitionEnd(r,f):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(x){!s||s.destroyed||x.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(r,f))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0}function z$(e=0,t=this.params.speed,r=!0,i){if(typeof e=="string"){const o=parseInt(e,10);if(!isFinite(o))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=o}const n=this;let s=e;return n.params.loop&&(s+=n.loopedSlides),n.slideTo(s,t,r,i)}function A$(e=this.params.speed,t=!0,r){const i=this,{animating:n,enabled:s,params:o}=i;if(!s)return i;let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<o.slidesPerGroupSkip?1:l;if(o.loop){if(n&&o.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return o.rewind&&i.isEnd?i.slideTo(0,e,t,r):i.slideTo(i.activeIndex+a,e,t,r)}function L$(e=this.params.speed,t=!0,r){const i=this,{params:n,animating:s,snapGrid:o,slidesGrid:l,rtlTranslate:a,enabled:c}=i;if(!c)return i;if(n.loop){if(s&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}const h=a?i.translate:-i.translate;function d(k){return k<0?-Math.floor(Math.abs(k)):Math.floor(k)}const p=d(h),g=o.map(k=>d(k));let y=o[g.indexOf(p)-1];if(typeof y>"u"&&n.cssMode){let k;o.forEach((v,f)=>{p>=v&&(k=f)}),typeof k<"u"&&(y=o[k>0?k-1:k])}let w=0;if(typeof y<"u"&&(w=l.indexOf(y),w<0&&(w=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(w=w-i.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),n.rewind&&i.isBeginning){const k=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(k,e,t,r)}return i.slideTo(w,e,t,r)}function P$(e=this.params.speed,t=!0,r){const i=this;return i.slideTo(i.activeIndex,e,t,r)}function O$(e=this.params.speed,t=!0,r,i=.5){const n=this;let s=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[l]){const c=n.snapGrid[l],h=n.snapGrid[l+1];a-c>(h-c)*i&&(s+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],h=n.snapGrid[l];a-c<=(h-c)*i&&(s-=n.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,n.slidesGrid.length-1),n.slideTo(s,e,t,r)}function I$(){const e=this,{params:t,$wrapperEl:r}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.clickedIndex,s;if(t.loop){if(e.animating)return;s=parseInt(V(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?n<e.loopedSlides-i/2||n>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),n=r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ia(()=>{e.slideTo(n)})):e.slideTo(n):n>e.slides.length-i?(e.loopFix(),n=r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ia(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}const N$={slideTo:T$,slideToLoop:z$,slideNext:A$,slidePrev:L$,slideReset:P$,slideToClosest:O$,slideToClickedSlide:I$};function M$(){const e=this,t=tt(),{params:r,$wrapperEl:i}=e,n=i.children().length>0?V(i.children()[0].parentNode):i;n.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();let s=n.children(`.${r.slideClass}`);if(r.loopFillGroupWithBlank){const a=r.slidesPerGroup-s.length%r.slidesPerGroup;if(a!==r.slidesPerGroup){for(let c=0;c<a;c+=1){const h=V(t.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);n.append(h)}s=n.children(`.${r.slideClass}`)}}r.slidesPerView==="auto"&&!r.loopedSlides&&(r.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(r.loopedSlides||r.slidesPerView,10)),e.loopedSlides+=r.loopAdditionalSlides,e.loopedSlides>s.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=s.length);const o=[],l=[];s.each((a,c)=>{V(a).attr("data-swiper-slide-index",c)});for(let a=0;a<e.loopedSlides;a+=1){const c=a-Math.floor(a/s.length)*s.length;l.push(s.eq(c)[0]),o.unshift(s.eq(s.length-c-1)[0])}for(let a=0;a<l.length;a+=1)n.append(V(l[a].cloneNode(!0)).addClass(r.slideDuplicateClass));for(let a=o.length-1;a>=0;a-=1)n.prepend(V(o[a].cloneNode(!0)).addClass(r.slideDuplicateClass))}function D$(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:r,loopedSlides:i,allowSlidePrev:n,allowSlideNext:s,snapGrid:o,rtlTranslate:l}=e;let a;e.allowSlidePrev=!0,e.allowSlideNext=!0;const h=-o[t]-e.getTranslate();t<i?(a=r.length-i*3+t,a+=i,e.slideTo(a,0,!1,!0)&&h!==0&&e.setTranslate((l?-e.translate:e.translate)-h)):t>=r.length-i&&(a=-r.length+t+i,a+=i,e.slideTo(a,0,!1,!0)&&h!==0&&e.setTranslate((l?-e.translate:e.translate)-h)),e.allowSlidePrev=n,e.allowSlideNext=s,e.emit("loopFix")}function R$(){const e=this,{$wrapperEl:t,params:r,slides:i}=e;t.children(`.${r.slideClass}.${r.slideDuplicateClass},.${r.slideClass}.${r.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}const F$={loopCreate:M$,loopFix:D$,loopDestroy:R$};function B$(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const r=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;r.style.cursor="move",r.style.cursor=e?"grabbing":"grab"}function V$(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const j$={setGrabCursor:B$,unsetGrabCursor:V$};function U$(e,t=this){function r(i){if(!i||i===tt()||i===He())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return!n&&!i.getRootNode?null:n||r(i.getRootNode().host)}return r(t)}function H$(e){const t=this,r=tt(),i=He(),n=t.touchEventsData,{params:s,touches:o,enabled:l}=t;if(!l||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=e;a.originalEvent&&(a=a.originalEvent);let c=V(a.target);if(s.touchEventsTarget==="wrapper"&&!c.closest(t.wrapperEl).length||(n.isTouchEvent=a.type==="touchstart",!n.isTouchEvent&&"which"in a&&a.which===3)||!n.isTouchEvent&&"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const h=!!s.noSwipingClass&&s.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;h&&a.target&&a.target.shadowRoot&&d&&(c=V(d[0]));const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(a.target&&a.target.shadowRoot);if(s.noSwiping&&(g?U$(p,c[0]):c.closest(p)[0])){t.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler)[0])return;o.currentX=a.type==="touchstart"?a.targetTouches[0].pageX:a.pageX,o.currentY=a.type==="touchstart"?a.targetTouches[0].pageY:a.pageY;const y=o.currentX,w=o.currentY,k=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(k&&(y<=v||y>=i.innerWidth-v))if(k==="prevent")e.preventDefault();else return;if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=y,o.startY=w,n.touchStartTime=Us(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(n.allowThresholdMove=!1),a.type!=="touchstart"){let f=!0;c.is(n.focusableElements)&&(f=!1,c[0].nodeName==="SELECT"&&(n.isTouched=!1)),r.activeElement&&V(r.activeElement).is(n.focusableElements)&&r.activeElement!==c[0]&&r.activeElement.blur();const b=f&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||b)&&!c[0].isContentEditable&&a.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function W$(e){const t=tt(),r=this,i=r.touchEventsData,{params:n,touches:s,rtlTranslate:o,enabled:l}=r;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&r.emit("touchMoveOpposite",a);return}if(i.isTouchEvent&&a.type!=="touchmove")return;const c=a.type==="touchmove"&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),h=a.type==="touchmove"?c.pageX:a.pageX,d=a.type==="touchmove"?c.pageY:a.pageY;if(a.preventedByNestedSwiper){s.startX=h,s.startY=d;return}if(!r.allowTouchMove){V(a.target).is(i.focusableElements)||(r.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:h,startY:d,currentX:h,currentY:d}),i.touchStartTime=Us());return}if(i.isTouchEvent&&n.touchReleaseOnEdges&&!n.loop){if(r.isVertical()){if(d<s.startY&&r.translate<=r.maxTranslate()||d>s.startY&&r.translate>=r.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(h<s.startX&&r.translate<=r.maxTranslate()||h>s.startX&&r.translate>=r.minTranslate())return}if(i.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&V(a.target).is(i.focusableElements)){i.isMoved=!0,r.allowClick=!1;return}if(i.allowTouchCallbacks&&r.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;s.currentX=h,s.currentY=d;const p=s.currentX-s.startX,g=s.currentY-s.startY;if(r.params.threshold&&Math.sqrt(p**2+g**2)<r.params.threshold)return;if(typeof i.isScrolling>"u"){let v;r.isHorizontal()&&s.currentY===s.startY||r.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+g*g>=25&&(v=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,i.isScrolling=r.isHorizontal()?v>n.touchAngle:90-v>n.touchAngle)}if(i.isScrolling&&r.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;r.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation(),i.isMoved||(n.loop&&!n.cssMode&&r.loopFix(),i.startTranslate=r.getTranslate(),r.setTransition(0),r.animating&&r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,n.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",a)),r.emit("sliderMove",a),i.isMoved=!0;let y=r.isHorizontal()?p:g;s.diff=y,y*=n.touchRatio,o&&(y=-y),r.swipeDirection=y>0?"prev":"next",i.currentTranslate=y+i.startTranslate;let w=!0,k=n.resistanceRatio;if(n.touchReleaseOnEdges&&(k=0),y>0&&i.currentTranslate>r.minTranslate()?(w=!1,n.resistance&&(i.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+i.startTranslate+y)**k)):y<0&&i.currentTranslate<r.maxTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-i.startTranslate-y)**k)),w&&(a.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(y)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=r.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&r.freeMode||n.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),r.params.freeMode&&n.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(i.currentTranslate),r.setTranslate(i.currentTranslate))}function G$(e){const t=this,r=t.touchEventsData,{params:i,touches:n,rtlTranslate:s,slidesGrid:o,enabled:l}=t;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),r.allowTouchCallbacks&&t.emit("touchEnd",a),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&i.grabCursor&&t.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}i.grabCursor&&r.isMoved&&r.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Us(),h=c-r.touchStartTime;if(t.allowClick){const f=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(f&&f[0]||a.target),t.emit("tap click",a),h<300&&c-r.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(r.lastClickTime=Us(),Ia(()=>{t.destroyed||(t.allowClick=!0)}),!r.isTouched||!r.isMoved||!t.swipeDirection||n.diff===0||r.currentTranslate===r.startTranslate){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let d;if(i.followFinger?d=s?t.translate:-t.translate:d=-r.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let p=0,g=t.slidesSizesGrid[0];for(let f=0;f<o.length;f+=f<i.slidesPerGroupSkip?1:i.slidesPerGroup){const b=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof o[f+b]<"u"?d>=o[f]&&d<o[f+b]&&(p=f,g=o[f+b]-o[f]):d>=o[f]&&(p=f,g=o[o.length-1]-o[o.length-2])}let y=null,w=null;i.rewind&&(t.isBeginning?w=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const k=(d-o[p])/g,v=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(h>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(k>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?y:p+v):t.slideTo(p)),t.swipeDirection==="prev"&&(k>1-i.longSwipesRatio?t.slideTo(p+v):w!==null&&k<0&&Math.abs(k)>i.longSwipesRatio?t.slideTo(w):t.slideTo(p))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:p+v),t.swipeDirection==="prev"&&t.slideTo(w!==null?w:p))}}function Xp(){const e=this,{params:t,el:r}=e;if(r&&r.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function K$(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function q$(){const e=this,{wrapperEl:t,rtlTranslate:r,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const s=e.maxTranslate()-e.minTranslate();s===0?n=0:n=(e.translate-e.minTranslate())/s,n!==e.progress&&e.updateProgress(r?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let Yp=!1;function X$(){}const T0=(e,t)=>{const r=tt(),{params:i,touchEvents:n,el:s,wrapperEl:o,device:l,support:a}=e,c=!!i.nested,h=t==="on"?"addEventListener":"removeEventListener",d=t;if(!a.touch)s[h](n.start,e.onTouchStart,!1),r[h](n.move,e.onTouchMove,c),r[h](n.end,e.onTouchEnd,!1);else{const p=n.start==="touchstart"&&a.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;s[h](n.start,e.onTouchStart,p),s[h](n.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:c}:c),s[h](n.end,e.onTouchEnd,p),n.cancel&&s[h](n.cancel,e.onTouchEnd,p)}(i.preventClicks||i.preventClicksPropagation)&&s[h]("click",e.onClick,!0),i.cssMode&&o[h]("scroll",e.onScroll),i.updateOnWindowResize?e[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Xp,!0):e[d]("observerUpdate",Xp,!0)};function Y$(){const e=this,t=tt(),{params:r,support:i}=e;e.onTouchStart=H$.bind(e),e.onTouchMove=W$.bind(e),e.onTouchEnd=G$.bind(e),r.cssMode&&(e.onScroll=q$.bind(e)),e.onClick=K$.bind(e),i.touch&&!Yp&&(t.addEventListener("touchstart",X$),Yp=!0),T0(e,"on")}function Q$(){T0(this,"off")}const Z$={attachEvents:Y$,detachEvents:Q$},Qp=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function J$(){const e=this,{activeIndex:t,initialized:r,loopedSlides:i=0,params:n,$el:s}=e,o=n.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const c=(l in o?o[l]:void 0)||e.originalParams,h=Qp(e,n),d=Qp(e,c),p=n.enabled;h&&!d?(s.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&d&&(s.addClass(`${n.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&n.grid.fill==="column")&&s.addClass(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(k=>{const v=n[k]&&n[k].enabled,f=c[k]&&c[k].enabled;v&&!f&&e[k].disable(),!v&&f&&e[k].enable()});const g=c.direction&&c.direction!==n.direction,y=n.loop&&(c.slidesPerView!==n.slidesPerView||g);g&&r&&e.changeDirection(),xt(e.params,c);const w=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!w?e.disable():!p&&w&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),y&&r&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",c)}function eE(e,t="window",r){if(!e||t==="container"&&!r)return;let i=!1;const n=He(),s=t==="window"?n.innerHeight:r.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:c}=o[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=a):c<=r.clientWidth&&(i=a)}return i||"max"}const tE={setBreakpoint:J$,getBreakpoint:eE};function rE(e,t){const r=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&r.push(t+n)}):typeof i=="string"&&r.push(t+i)}),r}function iE(){const e=this,{classNames:t,params:r,rtl:i,$el:n,device:s,support:o}=e,l=rE(["initialized",r.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:i},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);t.push(...l),n.addClass([...t].join(" ")),e.emitContainerClasses()}function nE(){const e=this,{$el:t,classNames:r}=e;t.removeClass(r.join(" ")),e.emitContainerClasses()}const sE={addClasses:iE,removeClasses:nE};function oE(e,t,r,i,n,s){const o=He();let l;function a(){s&&s()}!V(e).parent("picture")[0]&&(!e.complete||!n)&&t?(l=new o.Image,l.onload=a,l.onerror=a,i&&(l.sizes=i),r&&(l.srcset=r),t&&(l.src=t)):a()}function aE(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let r=0;r<e.imagesToLoad.length;r+=1){const i=e.imagesToLoad[r];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}const lE={loadImage:oE,preloadImages:aE};function cE(){const e=this,{isLocked:t,params:r}=e,{slidesOffsetBefore:i}=r;if(i){const n=e.slides.length-1,s=e.slidesGrid[n]+e.slidesSizesGrid[n]+i*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;r.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),r.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const uE={checkOverflow:cE},Zp={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function dE(e,t){return function(i={}){const n=Object.keys(i)[0],s=i[n];if(typeof s!="object"||s===null){xt(t,i);return}if(["navigation","pagination","scrollbar"].indexOf(n)>=0&&e[n]===!0&&(e[n]={auto:!0}),!(n in e&&"enabled"in s)){xt(t,i);return}e[n]===!0&&(e[n]={enabled:!0}),typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),xt(t,i)}}const sc={eventsEmitter:a$,update:v$,translate:k$,transition:E$,slide:N$,loop:F$,grabCursor:j$,events:Z$,breakpoints:tE,checkOverflow:uE,classes:sE,images:lE},oc={};let _n=class mr{constructor(...t){let r,i;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?i=t[0]:[r,i]=t,i||(i={}),i=xt({},i),r&&!i.el&&(i.el=r),i.el&&V(i.el).length>1){const l=[];return V(i.el).each(a=>{const c=xt({},i,{el:a});l.push(new mr(c))}),l}const n=this;n.__swiper__=!0,n.support=$0(),n.device=r$({userAgent:i.userAgent}),n.browser=n$(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&n.modules.push(...i.modules);const s={};n.modules.forEach(l=>{l({swiper:n,extendParams:dE(i,s),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const o=xt({},Zp,s);return n.params=xt({},o,oc,i),n.originalParams=xt({},n.params),n.passedParams=xt({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=V,Object.assign(n,{enabled:n.params.enabled,el:r,classNames:[],slides:V(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:function(){const a=["touchstart","touchmove","touchend","touchcancel"],c=["pointerdown","pointermove","pointerup"];return n.touchEventsTouch={start:a[0],move:a[1],end:a[2],cancel:a[3]},n.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:Us(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,r){const i=this;t=Math.min(Math.max(t,0),1);const n=i.minTranslate(),o=(i.maxTranslate()-n)*t+n;i.translateTo(o,typeof r>"u"?0:r),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",r.join(" "))}getSlideClasses(t){const r=this;return r.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=[];t.slides.each(i=>{const n=t.getSlideClasses(i);r.push({slideEl:i,classNames:n}),t.emit("_slideClass",i,n)}),t.emit("_slideClasses",r)}slidesPerViewDynamic(t="current",r=!1){const i=this,{params:n,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:c}=i;let h=1;if(n.centeredSlides){let d=s[c].swiperSlideSize,p;for(let g=c+1;g<s.length;g+=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,h+=1,d>a&&(p=!0));for(let g=c-1;g>=0;g-=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,h+=1,d>a&&(p=!0))}else if(t==="current")for(let d=c+1;d<s.length;d+=1)(r?o[d]+l[d]-o[c]<a:o[d]-o[c]<a)&&(h+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<a&&(h+=1);return h}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:r,params:i}=t;i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;t.params.freeMode&&t.params.freeMode.enabled?(n(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?s=t.slideTo(t.slides.length-1,0,!1,!0):s=t.slideTo(t.activeIndex,0,!1,!0),s||n()),i.watchOverflow&&r!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,r=!0){const i=this,n=i.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.each(s=>{t==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),r&&i.update()),i}changeLanguageDirection(t){const r=this;r.rtl&&t==="rtl"||!r.rtl&&t==="ltr"||(r.rtl=t==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.$el.addClass(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.$el.removeClass(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(t){const r=this;if(r.mounted)return!0;const i=V(t||r.params.el);if(t=i[0],!t)return!1;t.swiper=r;const n=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const l=V(t.shadowRoot.querySelector(n()));return l.children=a=>i.children(a),l}return i.children?i.children(n()):V(i).children(n())})();if(o.length===0&&r.params.createElements){const a=tt().createElement("div");o=V(a),a.className=r.params.wrapperClass,i.append(a),i.children(`.${r.params.slideClass}`).each(c=>{o.append(c)})}return Object.assign(r,{$el:i,el:t,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:o.css("display")==="-webkit-box"}),!0}init(t){const r=this;return r.initialized||r.mount(t)===!1||(r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.params.loop&&r.loopCreate(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.preloadImages&&r.preloadImages(),r.params.loop?r.slideTo(r.params.initialSlide+r.loopedSlides,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.attachEvents(),r.initialized=!0,r.emit("init"),r.emit("afterInit")),r}destroy(t=!0,r=!0){const i=this,{params:n,$el:s,$wrapperEl:o,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),r&&(i.removeClasses(),s.removeAttr("style"),o.removeAttr("style"),l&&l.length&&l.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),t!==!1&&(i.$el[0].swiper=null,YC(i)),i.destroyed=!0),null}static extendDefaults(t){xt(oc,t)}static get extendedDefaults(){return oc}static get defaults(){return Zp}static installModule(t){mr.prototype.__modules__||(mr.prototype.__modules__=[]);const r=mr.prototype.__modules__;typeof t=="function"&&r.indexOf(t)<0&&r.push(t)}static use(t){return Array.isArray(t)?(t.forEach(r=>mr.installModule(r)),mr):(mr.installModule(t),mr)}};Object.keys(sc).forEach(e=>{Object.keys(sc[e]).forEach(t=>{_n.prototype[t]=sc[e][t]})});_n.use([s$,o$]);function hE({swiper:e,extendParams:t,on:r,emit:i}){let n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const w=e.slides.eq(e.activeIndex);let k=e.params.autoplay.delay;w.attr("data-swiper-autoplay")&&(k=w.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=Ia(()=>{let v;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),v=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(v=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(v=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),v=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(v=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(v=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||v===!1)&&s()},k)}function o(){return typeof n<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,i("autoplayStart"),s(),!0)}function l(){return!e.autoplay.running||typeof n>"u"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,i("autoplayStop"),!0)}function a(w){e.autoplay.running&&(e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,w===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(k=>{e.$wrapperEl[0].addEventListener(k,h)})))}function c(){const w=tt();w.visibilityState==="hidden"&&e.autoplay.running&&a(),w.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function h(w){!e||e.destroyed||!e.$wrapperEl||w.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(k=>{e.$wrapperEl[0].removeEventListener(k,h)}),e.autoplay.paused=!1,e.autoplay.running?s():l())}function d(){e.params.autoplay.disableOnInteraction?l():(i("autoplayPause"),a()),["transitionend","webkitTransitionEnd"].forEach(w=>{e.$wrapperEl[0].removeEventListener(w,h)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,i("autoplayResume"),s())}function g(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",d),e.$el.on("mouseleave",p))}function y(){e.$el.off("mouseenter",d),e.$el.off("mouseleave",p)}r("init",()=>{e.params.autoplay.enabled&&(o(),tt().addEventListener("visibilitychange",c),g())}),r("beforeTransitionStart",(w,k,v)=>{e.autoplay.running&&(v||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(k):l())}),r("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():a())}),r("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),r("destroy",()=>{y(),e.autoplay.running&&l(),tt().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:a,run:s,start:o,stop:l})}function Ii(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function jr(e,t){const r=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>r.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:Ii(t[i])&&Ii(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:jr(e[i],t[i]):e[i]=t[i]})}function z0(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function A0(e={}){return e.pagination&&typeof e.pagination.el>"u"}function L0(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function P0(e=""){const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),r=[];return t.forEach(i=>{r.indexOf(i)<0&&r.push(i)}),r.join(" ")}const O0=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function pE(e={},t=!0){const r={on:{}},i={},n={};jr(r,_n.defaults),jr(r,_n.extendedDefaults),r._emitClasses=!0,r.init=!1;const s={},o=O0.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?Ii(e[a])?(r[a]={},n[a]={},jr(r[a],e[a]),jr(n[a],e[a])):(r[a]=e[a],n[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?i[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:r.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{r[a]===!0&&(r[a]={}),r[a]===!1&&delete r[a]}),{params:r,passedParams:n,rest:s,events:i}}function fE({el:e,nextEl:t,prevEl:r,paginationEl:i,scrollbarEl:n,swiper:s},o){z0(o)&&t&&r&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=r,s.originalParams.navigation.prevEl=r),A0(o)&&i&&(s.params.pagination.el=i,s.originalParams.pagination.el=i),L0(o)&&n&&(s.params.scrollbar.el=n,s.originalParams.scrollbar.el=n),s.init(e)}const I0=(e,t)=>{let r=t.slidesPerView;if(t.breakpoints){const n=_n.prototype.getBreakpoint(t.breakpoints),s=n in t.breakpoints?t.breakpoints[n]:void 0;s&&s.slidesPerView&&(r=s.slidesPerView)}let i=Math.ceil(parseFloat(t.loopedSlides||r,10));return i+=t.loopAdditionalSlides,i>e.length&&t.loopedSlidesLimit&&(i=e.length),i};function mE(e,t,r){const i=t.map((a,c)=>ce.cloneElement(a,{swiper:e,"data-swiper-slide-index":c}));function n(a,c,h){return ce.cloneElement(a,{key:`${a.key}-duplicate-${c}-${h}`,className:`${a.props.className||""} ${r.slideDuplicateClass}`})}if(r.loopFillGroupWithBlank){const a=r.slidesPerGroup-i.length%r.slidesPerGroup;if(a!==r.slidesPerGroup)for(let c=0;c<a;c+=1){const h=ce.createElement("div",{className:`${r.slideClass} ${r.slideBlankClass}`});i.push(h)}}r.slidesPerView==="auto"&&!r.loopedSlides&&(r.loopedSlides=i.length);const s=I0(i,r),o=[],l=[];for(let a=0;a<s;a+=1){const c=a-Math.floor(a/i.length)*i.length;l.push(n(i[c],a,"append")),o.unshift(n(i[i.length-c-1],a,"prepend"))}return e&&(e.loopedSlides=s),[...o,...i,...l]}function gE(e,t,r,i,n){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(r&&i){const a=i.map(n),c=r.map(n);a.join("")!==c.join("")&&o("children"),i.length!==r.length&&o("children")}return O0.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(Ii(e[a])&&Ii(t[a])){const c=Object.keys(e[a]),h=Object.keys(t[a]);c.length!==h.length?o(a):(c.forEach(d=>{e[a][d]!==t[a][d]&&o(a)}),h.forEach(d=>{e[a][d]!==t[a][d]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}function N0(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function M0(e){const t=[];return ce.Children.toArray(e).forEach(r=>{N0(r)?t.push(r):r.props&&r.props.children&&M0(r.props.children).forEach(i=>t.push(i))}),t}function vE(e){const t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ce.Children.toArray(e).forEach(i=>{if(N0(i))t.push(i);else if(i.props&&i.props.slot&&r[i.props.slot])r[i.props.slot].push(i);else if(i.props&&i.props.children){const n=M0(i.props.children);n.length>0?n.forEach(s=>t.push(s)):r["container-end"].push(i)}else r["container-end"].push(i)}),{slides:t,slots:r}}function yE({swiper:e,slides:t,passedParams:r,changedParams:i,nextEl:n,prevEl:s,scrollbarEl:o,paginationEl:l}){const a=i.filter(_=>_!=="children"&&_!=="direction"),{params:c,pagination:h,navigation:d,scrollbar:p,virtual:g,thumbs:y}=e;let w,k,v,f,b;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(k=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&h&&!h.el&&(v=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&p&&!p.el&&(f=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||n)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(b=!0);const x=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(c[_].el=void 0,e[_].el=void 0))};a.forEach(_=>{if(Ii(c[_])&&Ii(r[_]))jr(c[_],r[_]);else{const S=r[_];(S===!0||S===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?S===!1&&x(_):c[_]=r[_]}}),a.includes("controller")&&!k&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),i.includes("children")&&t&&g&&c.virtual.enabled?(g.slides=t,g.update(!0)):i.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),w&&y.init()&&y.update(!0),k&&(e.controller.control=c.controller.control),v&&(l&&(c.pagination.el=l),h.init(),h.render(),h.update()),f&&(o&&(c.scrollbar.el=o),p.init(),p.updateSize(),p.setTranslate()),b&&(n&&(c.navigation.nextEl=n),s&&(c.navigation.prevEl=s),d.init(),d.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),e.update()}function bE(e,t,r){if(!r)return null;const i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`};return t.filter((n,s)=>s>=r.from&&s<=r.to).map(n=>ce.cloneElement(n,{swiper:e,style:i}))}const wE=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ys(e,t){return typeof window>"u"?O.useEffect(e,t):O.useLayoutEffect(e,t)}const xE=O.createContext(null),_E=O.createContext(null);function _u(){return _u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_u.apply(this,arguments)}const D0=O.forwardRef(function(e,t){let{className:r,tag:i="div",wrapperTag:n="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[c,h]=O.useState("swiper"),[d,p]=O.useState(null),[g,y]=O.useState(!1),w=O.useRef(!1),k=O.useRef(null),v=O.useRef(null),f=O.useRef(null),b=O.useRef(null),x=O.useRef(null),_=O.useRef(null),S=O.useRef(null),E=O.useRef(null),{params:$,passedParams:P,rest:C,events:M}=pE(l),{slides:R,slots:te}=vE(s),le=()=>{y(!g)};Object.assign($.on,{_containerClasses(j,X){h(X)}});const ye=()=>{if(Object.assign($.on,M),a=!0,v.current=new _n($),v.current.loopCreate=()=>{},v.current.loopDestroy=()=>{},$.loop&&(v.current.loopedSlides=I0(R,$)),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=R;const j={cache:!1,slides:R,renderExternal:p,renderExternalUpdate:!1};jr(v.current.params.virtual,j),jr(v.current.originalParams.virtual,j)}};k.current||ye(),v.current&&v.current.on("_beforeBreakpoint",le);const Ie=()=>{a||!M||!v.current||Object.keys(M).forEach(j=>{v.current.on(j,M[j])})},We=()=>{!M||!v.current||Object.keys(M).forEach(j=>{v.current.off(j,M[j])})};O.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",le)}),O.useEffect(()=>{!w.current&&v.current&&(v.current.emitSlidesClasses(),w.current=!0)}),ys(()=>{if(t&&(t.current=k.current),!!k.current)return v.current.destroyed&&ye(),fE({el:k.current,nextEl:x.current,prevEl:_.current,paginationEl:S.current,scrollbarEl:E.current,swiper:v.current},$),o&&o(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),ys(()=>{Ie();const j=gE(P,f.current,R,b.current,X=>X.key);return f.current=P,b.current=R,j.length&&v.current&&!v.current.destroyed&&yE({swiper:v.current,slides:R,passedParams:P,changedParams:j,nextEl:x.current,prevEl:_.current,scrollbarEl:E.current,paginationEl:S.current}),()=>{We()}}),ys(()=>{wE(v.current)},[d]);function N(){return $.virtual?bE(v.current,R,d):!$.loop||v.current&&v.current.destroyed?R.map(j=>ce.cloneElement(j,{swiper:v.current})):mE(v.current,R,$)}return ce.createElement(i,_u({ref:k,className:P0(`${c}${r?` ${r}`:""}`)},C),ce.createElement(_E.Provider,{value:v.current},te["container-start"],ce.createElement(n,{className:"swiper-wrapper"},te["wrapper-start"],N(),te["wrapper-end"]),z0($)&&ce.createElement(ce.Fragment,null,ce.createElement("div",{ref:_,className:"swiper-button-prev"}),ce.createElement("div",{ref:x,className:"swiper-button-next"})),L0($)&&ce.createElement("div",{ref:E,className:"swiper-scrollbar"}),A0($)&&ce.createElement("div",{ref:S,className:"swiper-pagination"}),te["container-end"]))});D0.displayName="Swiper";function ku(){return ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ku.apply(this,arguments)}const mi=O.forwardRef(function(e,t){let{tag:r="div",children:i,className:n="",swiper:s,zoom:o,virtualIndex:l,...a}=e===void 0?{}:e;const c=O.useRef(null),[h,d]=O.useState("swiper-slide");function p(w,k,v){k===c.current&&d(v)}ys(()=>{if(t&&(t.current=c.current),!(!c.current||!s)){if(s.destroyed){h!=="swiper-slide"&&d("swiper-slide");return}return s.on("_slideClass",p),()=>{s&&s.off("_slideClass",p)}}}),ys(()=>{s&&c.current&&!s.destroyed&&d(s.getSlideClasses(c.current))},[s]);const g={isActive:h.indexOf("swiper-slide-active")>=0||h.indexOf("swiper-slide-duplicate-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isDuplicate:h.indexOf("swiper-slide-duplicate")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0||h.indexOf("swiper-slide-duplicate-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0||h.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof i=="function"?i(g):i;return ce.createElement(r,ku({ref:c,className:P0(`${h}${n?` ${n}`:""}`),"data-swiper-slide-index":l},a),ce.createElement(xE.Provider,{value:g},o?ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},y()):y()))});mi.displayName="SwiperSlide";function kE({lightMode:e,fontIncreased:t}){const[r,i]=O.useState(!1);function n(){i(!0),setTimeout(function(){i(!1)},3250)}const s={transform:"rotate(1turn) scale(0.4)",transition:"all 3.25s",borderRadius:"50%"},o={backgroundColor:"black",color:"white"},l={backgroundColor:"white",color:"black"};return T.jsx(T.Fragment,{children:T.jsxs("main",{className:"fade-in-hero",children:[T.jsxs("section",{className:"hero__first",children:[T.jsx("div",{onClick:n,style:r?s:{display:"block"},className:e?"hero__profile hero__profile__pic--dark light pointer":"hero__profile hero__profile__pic--light light pointer",children:T.jsx(_0,{name:"flash",duration:4e3,play:!0,children:T.jsx("span",{className:"hero__tap hover",children:r?"":"← Tap!"})})}),T.jsxs("div",{className:"hero__text",children:[T.jsx("div",{className:"hero__name",style:{fontSize:t?"var(--name-increased)":"var(--name-default)"},children:"Stepan Serov"}),T.jsx("span",{className:"hero__position",style:{fontSize:t?"var(--position-increased)":"var(--position-default)"},children:"React Sorcery in the Making "})]})]}),T.jsx("section",{className:"hero__second",children:T.jsxs(D0,{className:"sample-slider",loop:!0,modules:[hE],autoplay:{delay:0},slidesPerView:6,speed:7e3,children:[T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover",icon:"mdi:language-css3",width:"32",height:"32"})}),T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover rotate",icon:"mdi:react",width:"32",height:"32"})}),T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover",icon:"mdi:language-javascript",width:"32",height:"32"})}),T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover",icon:"mdi:language-typescript",width:"32",height:"32"})}),T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover",icon:"mdi:git",width:"32",height:"32"})}),T.jsx(mi,{children:T.jsx(qt,{className:"sample-item hover",icon:"mdi:language-html5",width:"32",height:"32"})})]})}),T.jsxs("section",{className:"hero__third",id:"projects",children:[T.jsx("h2",{className:"hero__projects-title",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Latest projects"}),T.jsxs("div",{className:"hero__projects",children:[T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Personal"}),T.jsx("p",{children:"Sandbox & playground"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Mode/font changer"}),T.jsx("li",{children:"CSS Animations"}),T.jsx("li",{children:"Skeleton"}),T.jsx("li",{children:"Custom components"})]}),T.jsx("a",{href:"https://github.com/ste1v0/personal",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"VK Frontend Challenge"}),T.jsx("p",{children:"Infinite cats feed"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Favorites"}),T.jsx("li",{children:"Lazyloading"}),T.jsx("li",{children:"Loader"})]}),T.jsx("a",{href:"https://github.com/ste1v0/frontend-challenge",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Boxd"}),T.jsx("p",{children:"Games database including most popular titles"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Hotkeys"}),T.jsx("li",{children:"Loader"})]}),T.jsx("a",{href:"https://github.com/ste1v0/boxd",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]}),T.jsxs("div",{className:"hero__project-item",style:e?o:l,children:[T.jsx("h4",{children:"Gaming News"}),T.jsx("p",{children:"All things related to gaming gathered from 4 different RSS feeds"}),T.jsxs("ul",{children:[T.jsx("li",{children:"Mode/font changer"}),T.jsx("li",{children:"Mobile toggler"})]}),T.jsx("a",{href:"https://github.com/ste1v0/gaming-news",target:"_blank",rel:"noreferrer",children:"→ GitHub"})]})]})]}),T.jsxs("section",{className:"hero__fourth",id:"contacts",children:[T.jsx("h2",{className:"hero__contacts-title",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Contacts"}),T.jsxs("div",{className:"hero__contacts",children:[T.jsx("div",{style:e?o:l,className:"hero__contact-item scale",children:T.jsx("a",{href:"https://ste1v0.dev/serov_frontend.pdf",target:"_blank",rel:"noreferrer",children:T.jsx(qt,{icon:"vscode-icons:file-type-pdf2",width:"96",height:"96"})})}),T.jsx("div",{style:e?o:l,className:"hero__contact-item scale",children:T.jsx("a",{href:"https://t.me/ste1v0",target:"_blank",rel:"noreferrer",children:T.jsx(qt,{icon:"logos:telegram",width:"96",height:"96"})})})]})]})]})})}var R0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=n(s,i(l)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)t.call(s,l)&&s[l]&&(o=n(o,l));return o}function n(s,o){return o?s?s+" "+o:s+o:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(R0);var SE=R0.exports;const ul=ef(SE),CE=["xxl","xl","lg","md","sm","xs"],$E="xs",Bd=O.createContext({prefixes:{},breakpoints:CE,minBreakpoint:$E});function Vd(e,t){const{prefixes:r}=O.useContext(Bd);return e||r[t]||t}function EE(){const{breakpoints:e}=O.useContext(Bd);return e}function TE(){const{minBreakpoint:e}=O.useContext(Bd);return e}function F0({as:e,bsPrefix:t,className:r,...i}){t=Vd(t,"col");const n=EE(),s=TE(),o=[],l=[];return n.forEach(a=>{const c=i[a];delete i[a];let h,d,p;typeof c=="object"&&c!=null?{span:h,offset:d,order:p}=c:h=c;const g=a!==s?`-${a}`:"";h&&o.push(h===!0?`${t}${g}`:`${t}${g}-${h}`),p!=null&&l.push(`order${g}-${p}`),d!=null&&l.push(`offset${g}-${d}`)}),[{...i,className:ul(r,...o,...l)},{as:e,bsPrefix:t,spans:o}]}const zE=O.forwardRef((e,t)=>{const[{className:r,...i},{as:n="div",bsPrefix:s,spans:o}]=F0(e);return T.jsx(n,{...i,ref:t,className:ul(r,!o.length&&s)})});zE.displayName="Col";function B0({animation:e,bg:t,bsPrefix:r,size:i,...n}){r=Vd(r,"placeholder");const[{className:s,...o}]=F0(n);return{...o,className:ul(s,e?`${r}-${e}`:r,i&&`${r}-${i}`,t&&`bg-${t}`)}}const AE=["as","disabled"];function LE(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function PE(e){return!e||e.trim()==="#"}function V0({tagName:e,disabled:t,href:r,target:i,rel:n,role:s,onClick:o,tabIndex:l=0,type:a}){e||(r!=null||i!=null||n!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:a||"button",disabled:t},c];const h=p=>{if((t||e==="a"&&PE(r))&&p.preventDefault(),t){p.stopPropagation();return}o==null||o(p)},d=p=>{p.key===" "&&(p.preventDefault(),h(p))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:e==="a"?i:void 0,"aria-disabled":t||void 0,rel:e==="a"?n:void 0,onClick:h,onKeyDown:d},c]}const OE=O.forwardRef((e,t)=>{let{as:r,disabled:i}=e,n=LE(e,AE);const[s,{tagName:o}]=V0(Object.assign({tagName:r,disabled:i},n));return T.jsx(o,Object.assign({},n,s,{ref:t}))});OE.displayName="Button";const j0=O.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:i,active:n=!1,disabled:s=!1,className:o,...l},a)=>{const c=Vd(t,"btn"),[h,{tagName:d}]=V0({tagName:e,disabled:s,...l}),p=d;return T.jsx(p,{...h,...l,ref:a,disabled:s,className:ul(o,c,n&&"active",r&&`${c}-${r}`,i&&`${c}-${i}`,l.href&&s&&"disabled")})});j0.displayName="Button";const IE=j0,U0=O.forwardRef((e,t)=>{const r=B0(e);return T.jsx(IE,{...r,ref:t,disabled:!0,tabIndex:-1})});U0.displayName="PlaceholderButton";const NE=U0,H0=O.forwardRef(({as:e="span",...t},r)=>{const i=B0(t);return T.jsx(e,{...i,ref:r})});H0.displayName="Placeholder";const Mo=Object.assign(H0,{Button:NE});function ME({lightMode:e}){const[t,r]=O.useState([]),[i,n]=O.useState(!1),[s,o]=O.useState(0),[l,a]=O.useState("");function c(h){return`<sl-icon name="${["emoji-angry","emoji-frown","emoji-expressionless","emoji-smile","emoji-laughing"][h-1]}"></sl-icon>`}return O.useEffect(function(){r([]),fetch("https://dog-api.kinduff.com/api/facts").then(h=>{if(!h.ok)throw new Error("Something is wrong with the API");return h.json()}).then(h=>{r(h.facts[0])})},[i]),T.jsxs("footer",{className:"fade-in-footer",children:[T.jsxs("div",{className:"footer__title-container",children:[T.jsx(qt,{icon:"fluent-emoji:dog-face",className:"scale",width:"32",height:"32"}),T.jsx("div",{className:"footer__title capitalize",children:"Random dog fact"}),T.jsx("span",{onClick:()=>n(h=>!h),className:"material-symbols-outlined pointer hover rotate",children:"refresh"})]}),t.length>0?T.jsxs("div",{style:{border:e?"1px dashed black":"1px dashed white"},className:"footer__fact",children:[" ",t]}):T.jsxs(T.Fragment,{children:[T.jsxs(Mo,{animation:"glow",children:[T.jsx(Mo,{style:{width:"30vw"}})," "]}),T.jsxs(Mo,{animation:"glow",children:[T.jsx(Mo,{style:{width:"30vw",marginBottom:"2vh"}})," "]})]}),T.jsxs("div",{className:"footer__rating",children:[T.jsx("span",{children:"Rate this page"}),s?T.jsx(_0,{name:"jackInTheBox",duration:1e3,iterations:1,play:!0,children:T.jsx("div",{children:"Thanks!"})}):T.jsx(l_,{className:e?`light rating--${l}`:`dark rating--${l}`,label:"Rating",getSymbol:c,onSlHover:()=>a("hovered"),onSlChange:()=>o(1)})]}),T.jsx("a",{href:"https://github.com/ste1v0",target:"_blank",rel:"noreferrer",children:T.jsx("div",{className:e?"footer__icons footer__github--dark pointer":"footer__icons footer__github--light pointer"})})]})}function DE(){const[e,t]=O.useState(localStorage.getItem("font")==="true"),[r,i]=O.useState(localStorage.getItem("mode")==="true");return T.jsx(Bb,{children:T.jsxs("div",{style:{fontSize:e?"var(--increased)":"var(--default)",color:r?"black":"white"},className:r?"bg--light":"bg--dark",children:[T.jsx(G1,{lightMode:r,setLightMode:i,fontIncreased:e,setFontIncreased:t}),T.jsx(kE,{lightMode:r,fontIncreased:e}),T.jsx(ME,{lightMode:r})]})})}fu("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");ac.createRoot(document.getElementById("root")).render(T.jsx(T.Fragment,{children:T.jsx(DE,{})}));
