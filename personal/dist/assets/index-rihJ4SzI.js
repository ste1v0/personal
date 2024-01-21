function Sg(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(i,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function op(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var np={exports:{}},pa={},sp={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An=Symbol.for("react.element"),Cg=Symbol.for("react.portal"),$g=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),zg=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),Lg=Symbol.for("react.forward_ref"),Pg=Symbol.for("react.suspense"),Ng=Symbol.for("react.memo"),Ig=Symbol.for("react.lazy"),id=Symbol.iterator;function Og(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,cp={};function uo(e,t,r){this.props=e,this.context=t,this.refs=cp,this.updater=r||ap}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function up(){}up.prototype=uo.prototype;function Vc(e,t,r){this.props=e,this.context=t,this.refs=cp,this.updater=r||ap}var Uc=Vc.prototype=new up;Uc.constructor=Vc;lp(Uc,uo.prototype);Uc.isPureReactComponent=!0;var od=Array.isArray,dp=Object.prototype.hasOwnProperty,jc={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,r){var i,o={},n=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(n=""+t.key),t)dp.call(t,i)&&!hp.hasOwnProperty(i)&&(o[i]=t[i]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)o[i]===void 0&&(o[i]=a[i]);return{$$typeof:An,type:e,key:n,ref:s,props:o,_owner:jc.current}}function Dg(e,t){return{$$typeof:An,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hc(e){return typeof e=="object"&&e!==null&&e.$$typeof===An}function Mg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var nd=/\/+/g;function Ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mg(""+e.key):t.toString(36)}function ys(e,t,r,i,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case An:case Cg:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+Ba(s,0):i,od(o)?(r="",e!=null&&(r=e.replace(nd,"$&/")+"/"),ys(o,t,r,"",function(u){return u})):o!=null&&(Hc(o)&&(o=Dg(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(nd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",od(e))for(var a=0;a<e.length;a++){n=e[a];var l=i+Ba(n,a);s+=ys(n,t,r,l,o)}else if(l=Og(e),typeof l=="function")for(e=l.call(e),a=0;!(n=e.next()).done;)n=n.value,l=i+Ba(n,a++),s+=ys(n,t,r,l,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qn(e,t,r){if(e==null)return e;var i=[],o=0;return ys(e,i,"","",function(n){return t.call(r,n,o++)}),i}function Rg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},bs={transition:null},Fg={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:bs,ReactCurrentOwner:jc};q.Children={map:qn,forEach:function(e,t,r){qn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return qn(e,function(){t++}),t},toArray:function(e){return qn(e,function(t){return t})||[]},only:function(e){if(!Hc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=uo;q.Fragment=$g;q.Profiler=zg;q.PureComponent=Vc;q.StrictMode=Eg;q.Suspense=Pg;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fg;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=lp({},e.props),o=e.key,n=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,s=jc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)dp.call(t,l)&&!hp.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:An,type:e.type,key:o,ref:n,props:i,_owner:s}};q.createContext=function(e){return e={$$typeof:Tg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ag,_context:e},e.Consumer=e};q.createElement=pp;q.createFactory=function(e){var t=pp.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Lg,render:e}};q.isValidElement=Hc;q.lazy=function(e){return{$$typeof:Ig,_payload:{_status:-1,_result:e},_init:Rg}};q.memo=function(e,t){return{$$typeof:Ng,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return rt.current.useCallback(e,t)};q.useContext=function(e){return rt.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};q.useEffect=function(e,t){return rt.current.useEffect(e,t)};q.useId=function(){return rt.current.useId()};q.useImperativeHandle=function(e,t,r){return rt.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return rt.current.useMemo(e,t)};q.useReducer=function(e,t,r){return rt.current.useReducer(e,t,r)};q.useRef=function(e){return rt.current.useRef(e)};q.useState=function(e){return rt.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return rt.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return rt.current.useTransition()};q.version="18.2.0";sp.exports=q;var ye=sp.exports;const pr=op(ye),R=Sg({__proto__:null,default:pr},[ye]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=ye,Vg=Symbol.for("react.element"),Ug=Symbol.for("react.fragment"),jg=Object.prototype.hasOwnProperty,Hg=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wg={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,r){var i,o={},n=null,s=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)jg.call(t,i)&&!Wg.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Vg,type:e,key:n,ref:s,props:o,_owner:Hg.current}}pa.Fragment=Ug;pa.jsx=fp;pa.jsxs=fp;np.exports=pa;var I=np.exports,zl={},mp={exports:{}},kt={},gp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var K=N.length;N.push(W);e:for(;0<K;){var xe=K-1>>>1,De=N[xe];if(0<o(De,W))N[xe]=W,N[K]=De,K=xe;else break e}}function r(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],K=N.pop();if(K!==W){N[0]=K;e:for(var xe=0,De=N.length,Wn=De>>>1;xe<Wn;){var ti=2*(xe+1)-1,Fa=N[ti],ri=ti+1,Kn=N[ri];if(0>o(Fa,K))ri<De&&0>o(Kn,Fa)?(N[xe]=Kn,N[ri]=K,xe=ri):(N[xe]=Fa,N[ti]=K,xe=ti);else if(ri<De&&0>o(Kn,K))N[xe]=Kn,N[ri]=K,xe=ri;else break e}}return W}function o(N,W){var K=N.sortIndex-W.sortIndex;return K!==0?K:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,p=3,g=!1,b=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var W=r(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=N)i(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=r(u)}}function w(N){if(_=!1,v(N),!b)if(r(l)!==null)b=!0,Ze(x);else{var W=r(u);W!==null&&ft(w,W.startTime-N)}}function x(N,W){b=!1,_&&(_=!1,y($),$=-1),g=!0;var K=p;try{for(v(W),d=r(l);d!==null&&(!(d.expirationTime>W)||N&&!ie());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,p=d.priorityLevel;var De=xe(d.expirationTime<=W);W=e.unstable_now(),typeof De=="function"?d.callback=De:d===r(l)&&i(l),v(W)}else i(l);d=r(l)}if(d!==null)var Wn=!0;else{var ti=r(u);ti!==null&&ft(w,ti.startTime-W),Wn=!1}return Wn}finally{d=null,p=K,g=!1}}var k=!1,S=null,$=-1,L=5,z=-1;function ie(){return!(e.unstable_now()-z<L)}function oe(){if(S!==null){var N=e.unstable_now();z=N;var W=!0;try{W=S(!0,N)}finally{W?Ae():(k=!1,S=null)}}else k=!1}var Ae;if(typeof m=="function")Ae=function(){m(oe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Be=_e.port2;_e.port1.onmessage=oe,Ae=function(){Be.postMessage(null)}}else Ae=function(){E(oe,0)};function Ze(N){S=N,k||(k=!0,Ae())}function ft(N,W){$=E(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,Ze(x))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var K=p;p=W;try{return N()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=p;p=N;try{return W()}finally{p=K}},e.unstable_scheduleCallback=function(N,W,K){var xe=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xe+K:xe):K=xe,N){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=K+De,N={id:f++,callback:W,priorityLevel:N,startTime:K,expirationTime:De,sortIndex:-1},K>xe?(N.sortIndex=K,t(u,N),r(l)===null&&N===r(u)&&(_?(y($),$=-1):_=!0,ft(w,K-xe))):(N.sortIndex=De,t(l,N),b||g||(b=!0,Ze(x))),N},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(N){var W=p;return function(){var K=p;p=W;try{return N.apply(this,arguments)}finally{p=K}}}})(vp);gp.exports=vp;var Kg=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=ye,xt=Kg;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bp=new Set,sn={};function Si(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(sn[e]=t,e=0;e<t.length;e++)bp.add(t[e])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,qg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},ad={};function Qg(e){return Al.call(ad,e)?!0:Al.call(sd,e)?!1:qg.test(e)?ad[e]=!0:(sd[e]=!0,!1)}function Yg(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xg(e,t,r,i){if(t===null||typeof t>"u"||Yg(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,r,i,o,n,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function Kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wc,Kc);He[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wc,Kc);He[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wc,Kc);He[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function qc(e,t,r,i){var o=He.hasOwnProperty(t)?He[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xg(t,r,o,i)&&(r=null),i||o===null?Qg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var br=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qn=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),ld=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Va;function Do(e){if(Va===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Va=t&&t[1]||""}return`
`+Va+e}var Ua=!1;function ja(e,t){if(!e||Ua)return"";Ua=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),n=i.stack.split(`
`),s=o.length-1,a=n.length-1;1<=s&&0<=a&&o[s]!==n[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==n[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==n[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ua=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Do(e):""}function Gg(e){switch(e.tag){case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ii:return"Fragment";case Ni:return"Portal";case Tl:return"Profiler";case Qc:return"StrictMode";case Ll:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _p:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case Yc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xc:return t=e.displayName||null,t!==null?t:Nl(e.type)||"Memo";case $r:t=e._payload,e=e._init;try{return Nl(e(t))}catch{}}return null}function Zg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(t);case 8:return t===Qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jg(e){var t=kp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,n.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yn(e){e._valueTracker||(e._valueTracker=Jg(e))}function Sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=kp(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var r=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function cd(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=jr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cp(e,t){t=t.checked,t!=null&&qc(e,"checked",t,!1)}function Ol(e,t){Cp(e,t);var r=jr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ud(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Dl(e,t,r){(t!=="number"||Os(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mo=Array.isArray;function Ki(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+jr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(Mo(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:jr(r)}}function $p(e,t){var r=jr(t.value),i=jr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function hd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xn,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xn=Xn||document.createElement("div"),Xn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function an(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){e0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function Ap(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function Tp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Ap(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var t0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(t0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,qi=null,Qi=null;function pd(e){if(e=Pn(e)){if(typeof Ul!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ya(t),Ul(e.stateNode,e.type,t))}}function Lp(e){qi?Qi?Qi.push(e):Qi=[e]:qi=e}function Pp(){if(qi){var e=qi,t=Qi;if(Qi=qi=null,pd(e),t)for(e=0;e<t.length;e++)pd(t[e])}}function Np(e,t){return e(t)}function Ip(){}var Ha=!1;function Op(e,t,r){if(Ha)return e(t,r);Ha=!0;try{return Np(e,t,r)}finally{Ha=!1,(qi!==null||Qi!==null)&&(Ip(),Pp())}}function ln(e,t){var r=e.stateNode;if(r===null)return null;var i=ya(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var jl=!1;if(fr)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){jl=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{jl=!1}function r0(e,t,r,i,o,n,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var Vo=!1,Ds=null,Ms=!1,Hl=null,i0={onError:function(e){Vo=!0,Ds=e}};function o0(e,t,r,i,o,n,s,a,l){Vo=!1,Ds=null,r0.apply(i0,arguments)}function n0(e,t,r,i,o,n,s,a,l){if(o0.apply(this,arguments),Vo){if(Vo){var u=Ds;Vo=!1,Ds=null}else throw Error(A(198));Ms||(Ms=!0,Hl=u)}}function Ci(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fd(e){if(Ci(e)!==e)throw Error(A(188))}function s0(e){var t=e.alternate;if(!t){if(t=Ci(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var n=o.alternate;if(n===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===r)return fd(o),e;if(n===i)return fd(o),t;n=n.sibling}throw Error(A(188))}if(r.return!==i.return)r=o,i=n;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,i=n;break}if(a===i){s=!0,i=o,r=n;break}a=a.sibling}if(!s){for(a=n.child;a;){if(a===r){s=!0,r=n,i=o;break}if(a===i){s=!0,i=n,r=o;break}a=a.sibling}if(!s)throw Error(A(189))}}if(r.alternate!==i)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function Mp(e){return e=s0(e),e!==null?Rp(e):null}function Rp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rp(e);if(t!==null)return t;e=e.sibling}return null}var Fp=xt.unstable_scheduleCallback,md=xt.unstable_cancelCallback,a0=xt.unstable_shouldYield,l0=xt.unstable_requestPaint,ke=xt.unstable_now,c0=xt.unstable_getCurrentPriorityLevel,Zc=xt.unstable_ImmediatePriority,Bp=xt.unstable_UserBlockingPriority,Rs=xt.unstable_NormalPriority,u0=xt.unstable_LowPriority,Vp=xt.unstable_IdlePriority,fa=null,or=null;function d0(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(fa,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:f0,h0=Math.log,p0=Math.LN2;function f0(e){return e>>>=0,e===0?32:31-(h0(e)/p0|0)|0}var Gn=64,Zn=4194304;function Ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,n=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?i=Ro(a):(n&=s,n!==0&&(i=Ro(n)))}else s=r&~o,s!==0?i=Ro(s):n!==0&&(i=Ro(n));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,n=t&-t,o>=n||o===16&&(n&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Wt(t),o=1<<r,i|=e[r],t&=~o;return i}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes;0<n;){var s=31-Wt(n),a=1<<s,l=o[s];l===-1?(!(a&r)||a&i)&&(o[s]=m0(a,t)):l<=t&&(e.expiredLanes|=a),n&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Up(){var e=Gn;return Gn<<=1,!(Gn&4194240)&&(Gn=64),e}function Wa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Tn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function v0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Wt(r),n=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~n}}function Jc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Wt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var re=0;function jp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,eu,Wp,Kp,qp,Kl=!1,Jn=[],Ir=null,Or=null,Dr=null,cn=new Map,un=new Map,zr=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function xo(e,t,r,i,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:n,targetContainers:[o]},t!==null&&(t=Pn(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function b0(e,t,r,i,o){switch(t){case"focusin":return Ir=xo(Ir,e,t,r,i,o),!0;case"dragenter":return Or=xo(Or,e,t,r,i,o),!0;case"mouseover":return Dr=xo(Dr,e,t,r,i,o),!0;case"pointerover":var n=o.pointerId;return cn.set(n,xo(cn.get(n)||null,e,t,r,i,o)),!0;case"gotpointercapture":return n=o.pointerId,un.set(n,xo(un.get(n)||null,e,t,r,i,o)),!0}return!1}function Qp(e){var t=li(e.target);if(t!==null){var r=Ci(t);if(r!==null){if(t=r.tag,t===13){if(t=Dp(r),t!==null){e.blockedOn=t,qp(e.priority,function(){Wp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Vl=i,r.target.dispatchEvent(i),Vl=null}else return t=Pn(r),t!==null&&eu(t),e.blockedOn=r,!1;t.shift()}return!0}function vd(e,t,r){ws(e)&&r.delete(t)}function w0(){Kl=!1,Ir!==null&&ws(Ir)&&(Ir=null),Or!==null&&ws(Or)&&(Or=null),Dr!==null&&ws(Dr)&&(Dr=null),cn.forEach(vd),un.forEach(vd)}function ko(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,w0)))}function dn(e){function t(o){return ko(o,e)}if(0<Jn.length){ko(Jn[0],e);for(var r=1;r<Jn.length;r++){var i=Jn[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ir!==null&&ko(Ir,e),Or!==null&&ko(Or,e),Dr!==null&&ko(Dr,e),cn.forEach(t),un.forEach(t),r=0;r<zr.length;r++)i=zr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<zr.length&&(r=zr[0],r.blockedOn===null);)Qp(r),r.blockedOn===null&&zr.shift()}var Yi=br.ReactCurrentBatchConfig,Bs=!0;function _0(e,t,r,i){var o=re,n=Yi.transition;Yi.transition=null;try{re=1,tu(e,t,r,i)}finally{re=o,Yi.transition=n}}function x0(e,t,r,i){var o=re,n=Yi.transition;Yi.transition=null;try{re=4,tu(e,t,r,i)}finally{re=o,Yi.transition=n}}function tu(e,t,r,i){if(Bs){var o=ql(e,t,r,i);if(o===null)tl(e,t,i,Vs,r),gd(e,i);else if(b0(o,e,t,r,i))i.stopPropagation();else if(gd(e,i),t&4&&-1<y0.indexOf(e)){for(;o!==null;){var n=Pn(o);if(n!==null&&Hp(n),n=ql(e,t,r,i),n===null&&tl(e,t,i,Vs,r),n===o)break;o=n}o!==null&&i.stopPropagation()}else tl(e,t,i,null,r)}}var Vs=null;function ql(e,t,r,i){if(Vs=null,e=Gc(i),e=li(e),e!==null)if(t=Ci(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Dp(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vs=e,null}function Yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case Zc:return 1;case Bp:return 4;case Rs:case u0:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var Lr=null,ru=null,_s=null;function Xp(){if(_s)return _s;var e,t=ru,r=t.length,i,o="value"in Lr?Lr.value:Lr.textContent,n=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===o[n-i];i++);return _s=o.slice(e,1<i?1-i:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function es(){return!0}function yd(){return!1}function St(e){function t(r,i,o,n,s){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(n):n[a]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?es:yd,this.isPropagationStopped=yd,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=St(ho),Ln=me({},ho,{view:0,detail:0}),k0=St(Ln),Ka,qa,So,ma=me({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==So&&(So&&e.type==="mousemove"?(Ka=e.screenX-So.screenX,qa=e.screenY-So.screenY):qa=Ka=0,So=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),bd=St(ma),S0=me({},ma,{dataTransfer:0}),C0=St(S0),$0=me({},Ln,{relatedTarget:0}),Qa=St($0),E0=me({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=St(E0),A0=me({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T0=St(A0),L0=me({},ho,{data:0}),wd=St(L0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function ou(){return O0}var D0=me({},Ln,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=St(D0),R0=me({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=St(R0),F0=me({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),B0=St(F0),V0=me({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=St(V0),j0=me({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=St(j0),W0=[9,13,27,32],nu=fr&&"CompositionEvent"in window,Uo=null;fr&&"documentMode"in document&&(Uo=document.documentMode);var K0=fr&&"TextEvent"in window&&!Uo,Gp=fr&&(!nu||Uo&&8<Uo&&11>=Uo),xd=" ",kd=!1;function Zp(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function q0(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(kd=!0,xd);case"textInput":return e=t.data,e===xd&&kd?null:e;default:return null}}function Q0(e,t){if(Oi)return e==="compositionend"||!nu&&Zp(e,t)?(e=Xp(),_s=ru=Lr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gp&&t.locale!=="ko"?null:t.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y0[e.type]:t==="textarea"}function ef(e,t,r,i){Lp(i),t=Us(t,"onChange"),0<t.length&&(r=new iu("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var jo=null,hn=null;function X0(e){hf(e,0)}function ga(e){var t=Ri(e);if(Sp(t))return e}function G0(e,t){if(e==="change")return t}var tf=!1;if(fr){var Ya;if(fr){var Xa="oninput"in document;if(!Xa){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Xa=typeof Cd.oninput=="function"}Ya=Xa}else Ya=!1;tf=Ya&&(!document.documentMode||9<document.documentMode)}function $d(){jo&&(jo.detachEvent("onpropertychange",rf),hn=jo=null)}function rf(e){if(e.propertyName==="value"&&ga(hn)){var t=[];ef(t,hn,e,Gc(e)),Op(X0,t)}}function Z0(e,t,r){e==="focusin"?($d(),jo=t,hn=r,jo.attachEvent("onpropertychange",rf)):e==="focusout"&&$d()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(hn)}function ev(e,t){if(e==="click")return ga(t)}function tv(e,t){if(e==="input"||e==="change")return ga(t)}function rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:rv;function pn(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!Al.call(t,o)||!qt(e[o],t[o]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var r=Ed(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ed(r)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(){for(var e=window,t=Os();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Os(e.document)}return t}function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iv(e){var t=nf(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&of(r.ownerDocument.documentElement,r)){if(i!==null&&su(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,n=Math.min(i.start,o);i=i.end===void 0?n:Math.min(i.end,o),!e.extend&&n>i&&(o=i,i=n,n=o),o=zd(r,n);var s=zd(r,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),n>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ov=fr&&"documentMode"in document&&11>=document.documentMode,Di=null,Ql=null,Ho=null,Yl=!1;function Ad(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yl||Di==null||Di!==Os(i)||(i=Di,"selectionStart"in i&&su(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&pn(Ho,i)||(Ho=i,i=Us(Ql,"onSelect"),0<i.length&&(t=new iu("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Di)))}function ts(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Mi={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},Ga={},sf={};fr&&(sf=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function va(e){if(Ga[e])return Ga[e];if(!Mi[e])return e;var t=Mi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sf)return Ga[e]=t[r];return e}var af=va("animationend"),lf=va("animationiteration"),cf=va("animationstart"),uf=va("transitionend"),df=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){df.set(e,t),Si(t,[e])}for(var Za=0;Za<Td.length;Za++){var Ja=Td[Za],nv=Ja.toLowerCase(),sv=Ja[0].toUpperCase()+Ja.slice(1);Yr(nv,"on"+sv)}Yr(af,"onAnimationEnd");Yr(lf,"onAnimationIteration");Yr(cf,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(uf,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Ld(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,n0(i,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var n=void 0;if(t)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==n&&o.isPropagationStopped())break e;Ld(o,a,u),n=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==n&&o.isPropagationStopped())break e;Ld(o,a,u),n=l}}}if(Ms)throw e=Hl,Ms=!1,Hl=null,e}function ae(e,t){var r=t[ec];r===void 0&&(r=t[ec]=new Set);var i=e+"__bubble";r.has(i)||(pf(t,e,2,!1),r.add(i))}function el(e,t,r){var i=0;t&&(i|=4),pf(r,e,i,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function fn(e){if(!e[rs]){e[rs]=!0,bp.forEach(function(r){r!=="selectionchange"&&(av.has(r)||el(r,!1,e),el(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,el("selectionchange",!1,t))}}function pf(e,t,r,i){switch(Yp(t)){case 1:var o=_0;break;case 4:o=x0;break;default:o=tu}r=o.bind(null,t,r,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function tl(e,t,r,i,o){var n=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=li(a),s===null)return;if(l=s.tag,l===5||l===6){i=n=s;continue e}a=a.parentNode}}i=i.return}Op(function(){var u=n,f=Gc(r),d=[];e:{var p=df.get(e);if(p!==void 0){var g=iu,b=e;switch(e){case"keypress":if(xs(r)===0)break e;case"keydown":case"keyup":g=M0;break;case"focusin":b="focus",g=Qa;break;case"focusout":b="blur",g=Qa;break;case"beforeblur":case"afterblur":g=Qa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=B0;break;case af:case lf:case cf:g=z0;break;case uf:g=U0;break;case"scroll":g=k0;break;case"wheel":g=H0;break;case"copy":case"cut":case"paste":g=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_d}var _=(t&4)!==0,E=!_&&e==="scroll",y=_?p!==null?p+"Capture":null:p;_=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,y!==null&&(w=ln(m,y),w!=null&&_.push(mn(m,w,v)))),E)break;m=m.return}0<_.length&&(p=new g(p,b,null,r,f),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Vl&&(b=r.relatedTarget||r.fromElement)&&(li(b)||b[mr]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(b=r.relatedTarget||r.toElement,g=u,b=b?li(b):null,b!==null&&(E=Ci(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=u),g!==b)){if(_=bd,w="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=_d,w="onPointerLeave",y="onPointerEnter",m="pointer"),E=g==null?p:Ri(g),v=b==null?p:Ri(b),p=new _(w,m+"leave",g,r,f),p.target=E,p.relatedTarget=v,w=null,li(f)===u&&(_=new _(y,m+"enter",b,r,f),_.target=v,_.relatedTarget=E,w=_),E=w,g&&b)t:{for(_=g,y=b,m=0,v=_;v;v=Ti(v))m++;for(v=0,w=y;w;w=Ti(w))v++;for(;0<m-v;)_=Ti(_),m--;for(;0<v-m;)y=Ti(y),v--;for(;m--;){if(_===y||y!==null&&_===y.alternate)break t;_=Ti(_),y=Ti(y)}_=null}else _=null;g!==null&&Pd(d,p,g,_,!1),b!==null&&E!==null&&Pd(d,E,b,_,!0)}}e:{if(p=u?Ri(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=G0;else if(Sd(p))if(tf)x=tv;else{x=J0;var k=Z0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=ev);if(x&&(x=x(e,u))){ef(d,x,r,f);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Dl(p,"number",p.value)}switch(k=u?Ri(u):window,e){case"focusin":(Sd(k)||k.contentEditable==="true")&&(Di=k,Ql=u,Ho=null);break;case"focusout":Ho=Ql=Di=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Ad(d,r,f);break;case"selectionchange":if(ov)break;case"keydown":case"keyup":Ad(d,r,f)}var S;if(nu)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Oi?Zp(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(Gp&&r.locale!=="ko"&&(Oi||$!=="onCompositionStart"?$==="onCompositionEnd"&&Oi&&(S=Xp()):(Lr=f,ru="value"in Lr?Lr.value:Lr.textContent,Oi=!0)),k=Us(u,$),0<k.length&&($=new wd($,e,null,r,f),d.push({event:$,listeners:k}),S?$.data=S:(S=Jp(r),S!==null&&($.data=S)))),(S=K0?q0(e,r):Q0(e,r))&&(u=Us(u,"onBeforeInput"),0<u.length&&(f=new wd("onBeforeInput","beforeinput",null,r,f),d.push({event:f,listeners:u}),f.data=S))}hf(d,t)})}function mn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Us(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,n=o.stateNode;o.tag===5&&n!==null&&(o=n,n=ln(e,r),n!=null&&i.unshift(mn(e,n,o)),n=ln(e,t),n!=null&&i.push(mn(e,n,o))),e=e.return}return i}function Ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pd(e,t,r,i,o){for(var n=t._reactName,s=[];r!==null&&r!==i;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,o?(l=ln(r,n),l!=null&&s.unshift(mn(r,l,a))):o||(l=ln(r,n),l!=null&&s.push(mn(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(lv,`
`).replace(cv,"")}function is(e,t,r){if(t=Nd(t),Nd(e)!==t&&r)throw Error(A(425))}function js(){}var Xl=null,Gl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(hv)}:Jl;function hv(e){setTimeout(function(){throw e})}function rl(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),dn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);dn(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),ir="__reactFiber$"+po,gn="__reactProps$"+po,mr="__reactContainer$"+po,ec="__reactEvents$"+po,pv="__reactListeners$"+po,fv="__reactHandles$"+po;function li(e){var t=e[ir];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mr]||r[ir]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Od(e);e!==null;){if(r=e[ir])return r;e=Od(e)}return t}e=r,r=e.parentNode}return null}function Pn(e){return e=e[ir]||e[mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ri(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ya(e){return e[gn]||null}var tc=[],Fi=-1;function Xr(e){return{current:e}}function le(e){0>Fi||(e.current=tc[Fi],tc[Fi]=null,Fi--)}function se(e,t){Fi++,tc[Fi]=e.current,e.current=t}var Hr={},Xe=Xr(Hr),at=Xr(!1),mi=Hr;function to(e,t){var r=e.type.contextTypes;if(!r)return Hr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},n;for(n in r)o[n]=t[n];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function Hs(){le(at),le(Xe)}function Dd(e,t,r){if(Xe.current!==Hr)throw Error(A(168));se(Xe,t),se(at,r)}function ff(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(A(108,Zg(e)||"Unknown",o));return me({},r,i)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,mi=Xe.current,se(Xe,e),se(at,at.current),!0}function Md(e,t,r){var i=e.stateNode;if(!i)throw Error(A(169));r?(e=ff(e,t,mi),i.__reactInternalMemoizedMergedChildContext=e,le(at),le(Xe),se(Xe,e)):le(at),se(at,r)}var cr=null,ba=!1,il=!1;function mf(e){cr===null?cr=[e]:cr.push(e)}function mv(e){ba=!0,mf(e)}function Gr(){if(!il&&cr!==null){il=!0;var e=0,t=re;try{var r=cr;for(re=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}cr=null,ba=!1}catch(o){throw cr!==null&&(cr=cr.slice(e+1)),Fp(Zc,Gr),o}finally{re=t,il=!1}}return null}var Bi=[],Vi=0,Ks=null,qs=0,zt=[],At=0,gi=null,ur=1,dr="";function oi(e,t){Bi[Vi++]=qs,Bi[Vi++]=Ks,Ks=e,qs=t}function gf(e,t,r){zt[At++]=ur,zt[At++]=dr,zt[At++]=gi,gi=e;var i=ur;e=dr;var o=32-Wt(i)-1;i&=~(1<<o),r+=1;var n=32-Wt(t)+o;if(30<n){var s=o-o%5;n=(i&(1<<s)-1).toString(32),i>>=s,o-=s,ur=1<<32-Wt(t)+o|r<<o|i,dr=n+e}else ur=1<<n|r<<o|i,dr=e}function au(e){e.return!==null&&(oi(e,1),gf(e,1,0))}function lu(e){for(;e===Ks;)Ks=Bi[--Vi],Bi[Vi]=null,qs=Bi[--Vi],Bi[Vi]=null;for(;e===gi;)gi=zt[--At],zt[At]=null,dr=zt[--At],zt[At]=null,ur=zt[--At],zt[At]=null}var wt=null,yt=null,ce=!1,Ht=null;function vf(e,t){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Rd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,yt=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=gi!==null?{id:ur,overflow:dr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,wt=e,yt=null,!0):!1;default:return!1}}function rc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ic(e){if(ce){var t=yt;if(t){var r=t;if(!Rd(e,t)){if(rc(e))throw Error(A(418));t=Mr(r.nextSibling);var i=wt;t&&Rd(e,t)?vf(i,r):(e.flags=e.flags&-4097|2,ce=!1,wt=e)}}else{if(rc(e))throw Error(A(418));e.flags=e.flags&-4097|2,ce=!1,wt=e}}}function Fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function os(e){if(e!==wt)return!1;if(!ce)return Fd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=yt)){if(rc(e))throw yf(),Error(A(418));for(;t;)vf(e,t),t=Mr(t.nextSibling)}if(Fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=Mr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=wt?Mr(e.stateNode.nextSibling):null;return!0}function yf(){for(var e=yt;e;)e=Mr(e.nextSibling)}function ro(){yt=wt=null,ce=!1}function cu(e){Ht===null?Ht=[e]:Ht.push(e)}var gv=br.ReactCurrentBatchConfig;function Ut(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Qs=Xr(null),Ys=null,Ui=null,uu=null;function du(){uu=Ui=Ys=null}function hu(e){var t=Qs.current;le(Qs),e._currentValue=t}function oc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Xi(e,t){Ys=e,uu=Ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(uu!==e)if(e={context:e,memoizedValue:t,next:null},Ui===null){if(Ys===null)throw Error(A(308));Ui=e,Ys.dependencies={lanes:0,firstContext:e}}else Ui=Ui.next=e;return t}var ci=null;function pu(e){ci===null?ci=[e]:ci.push(e)}function bf(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,pu(t)):(r.next=o.next,o.next=r),t.interleaved=r,gr(e,i)}function gr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Er=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,X&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,gr(e,r)}return o=i.interleaved,o===null?(t.next=t,pu(i)):(t.next=o.next,o.next=t),i.interleaved=t,gr(e,r)}function ks(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Jc(e,r)}}function Bd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?o=n=s:n=n.next=s,r=r.next}while(r!==null);n===null?o=n=t:n=n.next=t}else o=n=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Xs(e,t,r,i){var o=e.updateQueue;Er=!1;var n=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?n=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(n!==null){var d=o.baseState;s=0,f=u=l=null,a=n;do{var p=a.lane,g=a.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,_=a;switch(p=t,g=r,_.tag){case 1:if(b=_.payload,typeof b=="function"){d=b.call(g,d,p);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=_.payload,p=typeof b=="function"?b.call(g,d,p):b,p==null)break e;d=me({},d,p);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(f===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else n===null&&(o.shared.lanes=0);yi|=s,e.lanes=s,e.memoizedState=d}}function Vd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(A(191,o));o.call(i)}}}var _f=new yp.Component().refs;function nc(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:me({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var wa={isMounted:function(e){return(e=e._reactInternals)?Ci(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=et(),o=Br(e),n=hr(i,o);n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),ks(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=et(),o=Br(e),n=hr(i,o);n.tag=1,n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),ks(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=et(),i=Br(e),o=hr(r,i);o.tag=2,t!=null&&(o.callback=t),t=Rr(e,o,i),t!==null&&(Kt(t,e,i,r),ks(t,e,i))}};function Ud(e,t,r,i,o,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,n,s):t.prototype&&t.prototype.isPureReactComponent?!pn(r,i)||!pn(o,n):!0}function xf(e,t,r){var i=!1,o=Hr,n=t.contextType;return typeof n=="object"&&n!==null?n=Pt(n):(o=lt(t)?mi:Xe.current,i=t.contextTypes,n=(i=i!=null)?to(e,o):Hr),t=new t(r,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=n),t}function jd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function sc(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=_f,fu(e);var n=t.contextType;typeof n=="object"&&n!==null?o.context=Pt(n):(n=lt(t)?mi:Xe.current,o.context=to(e,n)),o.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(nc(e,t,n,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wa.enqueueReplaceState(o,o.state,null),Xs(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Co(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var i=r.stateNode}if(!i)throw Error(A(147,e));var o=i,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(s){var a=o.refs;a===_f&&(a=o.refs={}),s===null?delete a[n]:a[n]=s},t._stringRef=n,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hd(e){var t=e._init;return t(e._payload)}function kf(e){function t(y,m){if(e){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function r(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function i(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function o(y,m){return y=Vr(y,m),y.index=0,y.sibling=null,y}function n(y,m,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,v,w){return m===null||m.tag!==6?(m=ul(v,y.mode,w),m.return=y,m):(m=o(m,v),m.return=y,m)}function l(y,m,v,w){var x=v.type;return x===Ii?f(y,m,v.props.children,w,v.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$r&&Hd(x)===m.type)?(w=o(m,v.props),w.ref=Co(y,m,v),w.return=y,w):(w=As(v.type,v.key,v.props,null,y.mode,w),w.ref=Co(y,m,v),w.return=y,w)}function u(y,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=dl(v,y.mode,w),m.return=y,m):(m=o(m,v.children||[]),m.return=y,m)}function f(y,m,v,w,x){return m===null||m.tag!==7?(m=fi(v,y.mode,w,x),m.return=y,m):(m=o(m,v),m.return=y,m)}function d(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ul(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qn:return v=As(m.type,m.key,m.props,null,y.mode,v),v.ref=Co(y,null,m),v.return=y,v;case Ni:return m=dl(m,y.mode,v),m.return=y,m;case $r:var w=m._init;return d(y,w(m._payload),v)}if(Mo(m)||wo(m))return m=fi(m,y.mode,v,null),m.return=y,m;ns(y,m)}return null}function p(y,m,v,w){var x=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:a(y,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qn:return v.key===x?l(y,m,v,w):null;case Ni:return v.key===x?u(y,m,v,w):null;case $r:return x=v._init,p(y,m,x(v._payload),w)}if(Mo(v)||wo(v))return x!==null?null:f(y,m,v,w,null);ns(y,v)}return null}function g(y,m,v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(v)||null,a(m,y,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qn:return y=y.get(w.key===null?v:w.key)||null,l(m,y,w,x);case Ni:return y=y.get(w.key===null?v:w.key)||null,u(m,y,w,x);case $r:var k=w._init;return g(y,m,v,k(w._payload),x)}if(Mo(w)||wo(w))return y=y.get(v)||null,f(m,y,w,x,null);ns(m,w)}return null}function b(y,m,v,w){for(var x=null,k=null,S=m,$=m=0,L=null;S!==null&&$<v.length;$++){S.index>$?(L=S,S=null):L=S.sibling;var z=p(y,S,v[$],w);if(z===null){S===null&&(S=L);break}e&&S&&z.alternate===null&&t(y,S),m=n(z,m,$),k===null?x=z:k.sibling=z,k=z,S=L}if($===v.length)return r(y,S),ce&&oi(y,$),x;if(S===null){for(;$<v.length;$++)S=d(y,v[$],w),S!==null&&(m=n(S,m,$),k===null?x=S:k.sibling=S,k=S);return ce&&oi(y,$),x}for(S=i(y,S);$<v.length;$++)L=g(S,y,$,v[$],w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?$:L.key),m=n(L,m,$),k===null?x=L:k.sibling=L,k=L);return e&&S.forEach(function(ie){return t(y,ie)}),ce&&oi(y,$),x}function _(y,m,v,w){var x=wo(v);if(typeof x!="function")throw Error(A(150));if(v=x.call(v),v==null)throw Error(A(151));for(var k=x=null,S=m,$=m=0,L=null,z=v.next();S!==null&&!z.done;$++,z=v.next()){S.index>$?(L=S,S=null):L=S.sibling;var ie=p(y,S,z.value,w);if(ie===null){S===null&&(S=L);break}e&&S&&ie.alternate===null&&t(y,S),m=n(ie,m,$),k===null?x=ie:k.sibling=ie,k=ie,S=L}if(z.done)return r(y,S),ce&&oi(y,$),x;if(S===null){for(;!z.done;$++,z=v.next())z=d(y,z.value,w),z!==null&&(m=n(z,m,$),k===null?x=z:k.sibling=z,k=z);return ce&&oi(y,$),x}for(S=i(y,S);!z.done;$++,z=v.next())z=g(S,y,$,z.value,w),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?$:z.key),m=n(z,m,$),k===null?x=z:k.sibling=z,k=z);return e&&S.forEach(function(oe){return t(y,oe)}),ce&&oi(y,$),x}function E(y,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Ii&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qn:e:{for(var x=v.key,k=m;k!==null;){if(k.key===x){if(x=v.type,x===Ii){if(k.tag===7){r(y,k.sibling),m=o(k,v.props.children),m.return=y,y=m;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$r&&Hd(x)===k.type){r(y,k.sibling),m=o(k,v.props),m.ref=Co(y,k,v),m.return=y,y=m;break e}r(y,k);break}else t(y,k);k=k.sibling}v.type===Ii?(m=fi(v.props.children,y.mode,w,v.key),m.return=y,y=m):(w=As(v.type,v.key,v.props,null,y.mode,w),w.ref=Co(y,m,v),w.return=y,y=w)}return s(y);case Ni:e:{for(k=v.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){r(y,m.sibling),m=o(m,v.children||[]),m.return=y,y=m;break e}else{r(y,m);break}else t(y,m);m=m.sibling}m=dl(v,y.mode,w),m.return=y,y=m}return s(y);case $r:return k=v._init,E(y,m,k(v._payload),w)}if(Mo(v))return b(y,m,v,w);if(wo(v))return _(y,m,v,w);ns(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(r(y,m.sibling),m=o(m,v),m.return=y,y=m):(r(y,m),m=ul(v,y.mode,w),m.return=y,y=m),s(y)):r(y,m)}return E}var io=kf(!0),Sf=kf(!1),Nn={},nr=Xr(Nn),vn=Xr(Nn),yn=Xr(Nn);function ui(e){if(e===Nn)throw Error(A(174));return e}function mu(e,t){switch(se(yn,t),se(vn,e),se(nr,Nn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}le(nr),se(nr,t)}function oo(){le(nr),le(vn),le(yn)}function Cf(e){ui(yn.current);var t=ui(nr.current),r=Rl(t,e.type);t!==r&&(se(vn,e),se(nr,r))}function gu(e){vn.current===e&&(le(nr),le(vn))}var pe=Xr(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function vu(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var Ss=br.ReactCurrentDispatcher,nl=br.ReactCurrentBatchConfig,vi=0,fe=null,Te=null,Me=null,Zs=!1,Wo=!1,bn=0,vv=0;function qe(){throw Error(A(321))}function yu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qt(e[r],t[r]))return!1;return!0}function bu(e,t,r,i,o,n){if(vi=n,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?_v:xv,e=r(i,o),Wo){n=0;do{if(Wo=!1,bn=0,25<=n)throw Error(A(301));n+=1,Me=Te=null,t.updateQueue=null,Ss.current=kv,e=r(i,o)}while(Wo)}if(Ss.current=Js,t=Te!==null&&Te.next!==null,vi=0,Me=Te=fe=null,Zs=!1,t)throw Error(A(300));return e}function wu(){var e=bn!==0;return bn=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?fe.memoizedState=Me=e:Me=Me.next=e,Me}function Nt(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Me===null?fe.memoizedState:Me.next;if(t!==null)Me=t,Te=e;else{if(e===null)throw Error(A(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Me===null?fe.memoizedState=Me=e:Me=Me.next=e}return Me}function wn(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Nt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=Te,o=i.baseQueue,n=r.pending;if(n!==null){if(o!==null){var s=o.next;o.next=n.next,n.next=s}i.baseQueue=o=n,r.pending=null}if(o!==null){n=o.next,i=i.baseState;var a=s=null,l=null,u=n;do{var f=u.lane;if((vi&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,fe.lanes|=f,yi|=f}u=u.next}while(u!==null&&u!==n);l===null?s=i:l.next=a,qt(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do n=o.lane,fe.lanes|=n,yi|=n,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function al(e){var t=Nt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,n=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do n=e(n,s.action),s=s.next;while(s!==o);qt(n,t.memoizedState)||(st=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),r.lastRenderedState=n}return[n,i]}function $f(){}function Ef(e,t){var r=fe,i=Nt(),o=t(),n=!qt(i.memoizedState,o);if(n&&(i.memoizedState=o,st=!0),i=i.queue,_u(Tf.bind(null,r,i,e),[e]),i.getSnapshot!==t||n||Me!==null&&Me.memoizedState.tag&1){if(r.flags|=2048,_n(9,Af.bind(null,r,i,o,t),void 0,null),Re===null)throw Error(A(349));vi&30||zf(r,t,o)}return o}function zf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Af(e,t,r,i){t.value=r,t.getSnapshot=i,Lf(t)&&Pf(e)}function Tf(e,t,r){return r(function(){Lf(t)&&Pf(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qt(e,r)}catch{return!0}}function Pf(e){var t=gr(e,1);t!==null&&Kt(t,e,1,-1)}function Wd(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t.queue=e,e=e.dispatch=wv.bind(null,fe,e),[t.memoizedState,e]}function _n(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Nf(){return Nt().memoizedState}function Cs(e,t,r,i){var o=tr();fe.flags|=e,o.memoizedState=_n(1|t,r,void 0,i===void 0?null:i)}function _a(e,t,r,i){var o=Nt();i=i===void 0?null:i;var n=void 0;if(Te!==null){var s=Te.memoizedState;if(n=s.destroy,i!==null&&yu(i,s.deps)){o.memoizedState=_n(t,r,n,i);return}}fe.flags|=e,o.memoizedState=_n(1|t,r,n,i)}function Kd(e,t){return Cs(8390656,8,e,t)}function _u(e,t){return _a(2048,8,e,t)}function If(e,t){return _a(4,2,e,t)}function Of(e,t){return _a(4,4,e,t)}function Df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mf(e,t,r){return r=r!=null?r.concat([e]):null,_a(4,4,Df.bind(null,t,e),r)}function xu(){}function Rf(e,t){var r=Nt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&yu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Ff(e,t){var r=Nt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&yu(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Bf(e,t,r){return vi&21?(qt(r,t)||(r=Up(),fe.lanes|=r,yi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=r)}function yv(e,t){var r=re;re=r!==0&&4>r?r:4,e(!0);var i=nl.transition;nl.transition={};try{e(!1),t()}finally{re=r,nl.transition=i}}function Vf(){return Nt().memoizedState}function bv(e,t,r){var i=Br(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Uf(e))jf(t,r);else if(r=bf(e,t,r,i),r!==null){var o=et();Kt(r,e,i,o),Hf(r,t,i)}}function wv(e,t,r){var i=Br(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Uf(e))jf(t,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var s=t.lastRenderedState,a=n(s,r);if(o.hasEagerState=!0,o.eagerState=a,qt(a,s)){var l=t.interleaved;l===null?(o.next=o,pu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=bf(e,t,o,i),r!==null&&(o=et(),Kt(r,e,i,o),Hf(r,t,i))}}function Uf(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function jf(e,t){Wo=Zs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hf(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Jc(e,r)}}var Js={readContext:Pt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},_v={readContext:Pt,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Kd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Cs(4194308,4,Df.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cs(4,2,e,t)},useMemo:function(e,t){var r=tr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=tr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=bv.bind(null,fe,e),[i.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:Wd,useDebugValue:xu,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=Wd(!1),t=e[0];return e=yv.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=fe,o=tr();if(ce){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Re===null)throw Error(A(349));vi&30||zf(i,t,r)}o.memoizedState=r;var n={value:r,getSnapshot:t};return o.queue=n,Kd(Tf.bind(null,i,n,e),[e]),i.flags|=2048,_n(9,Af.bind(null,i,n,r,t),void 0,null),r},useId:function(){var e=tr(),t=Re.identifierPrefix;if(ce){var r=dr,i=ur;r=(i&~(1<<32-Wt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=bn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=vv++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xv={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:_u,useImperativeHandle:Mf,useInsertionEffect:If,useLayoutEffect:Of,useMemo:Ff,useReducer:sl,useRef:Nf,useState:function(){return sl(wn)},useDebugValue:xu,useDeferredValue:function(e){var t=Nt();return Bf(t,Te.memoizedState,e)},useTransition:function(){var e=sl(wn)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:$f,useSyncExternalStore:Ef,useId:Vf,unstable_isNewReconciler:!1},kv={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:_u,useImperativeHandle:Mf,useInsertionEffect:If,useLayoutEffect:Of,useMemo:Ff,useReducer:al,useRef:Nf,useState:function(){return al(wn)},useDebugValue:xu,useDeferredValue:function(e){var t=Nt();return Te===null?t.memoizedState=e:Bf(t,Te.memoizedState,e)},useTransition:function(){var e=al(wn)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:$f,useSyncExternalStore:Ef,useId:Vf,unstable_isNewReconciler:!1};function no(e,t){try{var r="",i=t;do r+=Gg(i),i=i.return;while(i);var o=r}catch(n){o=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:o,digest:null}}function ll(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ac(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function Wf(e,t,r){r=hr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){ta||(ta=!0,vc=i),ac(e,t)},r}function Kf(e,t,r){r=hr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){ac(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){ac(e,t),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function qd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Sv;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=Rv.bind(null,e,t,r),t.then(e,e))}function Qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yd(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hr(-1,1),t.tag=2,Rr(r,t,1))),r.lanes|=1),e)}var Cv=br.ReactCurrentOwner,st=!1;function Je(e,t,r,i){t.child=e===null?Sf(t,null,r,i):io(t,e.child,r,i)}function Xd(e,t,r,i,o){r=r.render;var n=t.ref;return Xi(t,o),i=bu(e,t,r,i,n,o),r=wu(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vr(e,t,o)):(ce&&r&&au(t),t.flags|=1,Je(e,t,i,o),t.child)}function Gd(e,t,r,i,o){if(e===null){var n=r.type;return typeof n=="function"&&!Tu(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=n,qf(e,t,n,i,o)):(e=As(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!(e.lanes&o)){var s=n.memoizedProps;if(r=r.compare,r=r!==null?r:pn,r(s,i)&&e.ref===t.ref)return vr(e,t,o)}return t.flags|=1,e=Vr(n,i),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,r,i,o){if(e!==null){var n=e.memoizedProps;if(pn(n,i)&&e.ref===t.ref)if(st=!1,t.pendingProps=i=n,(e.lanes&o)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,vr(e,t,o)}return lc(e,t,r,i,o)}function Qf(e,t,r){var i=t.pendingProps,o=i.children,n=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Hi,gt),gt|=r;else{if(!(r&1073741824))return e=n!==null?n.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Hi,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=n!==null?n.baseLanes:r,se(Hi,gt),gt|=i}else n!==null?(i=n.baseLanes|r,t.memoizedState=null):i=r,se(Hi,gt),gt|=i;return Je(e,t,o,r),t.child}function Yf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function lc(e,t,r,i,o){var n=lt(r)?mi:Xe.current;return n=to(t,n),Xi(t,o),r=bu(e,t,r,i,n,o),i=wu(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vr(e,t,o)):(ce&&i&&au(t),t.flags|=1,Je(e,t,r,o),t.child)}function Zd(e,t,r,i,o){if(lt(r)){var n=!0;Ws(t)}else n=!1;if(Xi(t,o),t.stateNode===null)$s(e,t),xf(t,r,i),sc(t,r,i,o),i=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=lt(r)?mi:Xe.current,u=to(t,u));var f=r.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jd(t,s,i,u),Er=!1;var p=t.memoizedState;s.state=p,Xs(t,i,s,o),l=t.memoizedState,a!==i||p!==l||at.current||Er?(typeof f=="function"&&(nc(t,r,f,i),l=t.memoizedState),(a=Er||Ud(t,r,a,i,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,wf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ut(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=lt(r)?mi:Xe.current,l=to(t,l));var g=r.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&jd(t,s,i,l),Er=!1,p=t.memoizedState,s.state=p,Xs(t,i,s,o);var b=t.memoizedState;a!==d||p!==b||at.current||Er?(typeof g=="function"&&(nc(t,r,g,i),b=t.memoizedState),(u=Er||Ud(t,r,u,i,p,b,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),s.props=i,s.state=b,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return cc(e,t,r,i,n,o)}function cc(e,t,r,i,o,n){Yf(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&Md(t,r,!1),vr(e,t,n);i=t.stateNode,Cv.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=io(t,e.child,null,n),t.child=io(t,null,a,n)):Je(e,t,a,n),t.memoizedState=i.state,o&&Md(t,r,!0),t.child}function Xf(e){var t=e.stateNode;t.pendingContext?Dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dd(e,t.context,!1),mu(e,t.containerInfo)}function Jd(e,t,r,i,o){return ro(),cu(o),t.flags|=256,Je(e,t,r,i),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,r){var i=t.pendingProps,o=pe.current,n=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(pe,o&1),e===null)return ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,n?(i=t.mode,n=t.child,s={mode:"hidden",children:s},!(i&1)&&n!==null?(n.childLanes=0,n.pendingProps=s):n=Sa(s,i,0,null),e=fi(e,i,r,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=dc(r),t.memoizedState=uc,e):ku(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return $v(e,t,s,i,a,o,r);if(n){n=i.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=Vr(o,l),i.subtreeFlags=o.subtreeFlags&14680064),a!==null?n=Vr(a,n):(n=fi(n,s,r,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,s=e.child.memoizedState,s=s===null?dc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},n.memoizedState=s,n.childLanes=e.childLanes&~r,t.memoizedState=uc,i}return n=e.child,e=n.sibling,i=Vr(n,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function ku(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,r,i){return i!==null&&cu(i),io(t,e.child,null,r),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $v(e,t,r,i,o,n,s){if(r)return t.flags&256?(t.flags&=-257,i=ll(Error(A(422))),ss(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=i.fallback,o=t.mode,i=Sa({mode:"visible",children:i.children},o,0,null),n=fi(n,o,s,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,t.mode&1&&io(t,e.child,null,s),t.child.memoizedState=dc(s),t.memoizedState=uc,n);if(!(t.mode&1))return ss(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var a=i.dgst;return i=a,n=Error(A(419)),i=ll(n,i,void 0),ss(e,t,s,i)}if(a=(s&e.childLanes)!==0,st||a){if(i=Re,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==n.retryLane&&(n.retryLane=o,gr(e,o),Kt(i,e,o,-1))}return Au(),i=ll(Error(A(421))),ss(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fv.bind(null,e),o._reactRetry=t,null):(e=n.treeContext,yt=Mr(o.nextSibling),wt=t,ce=!0,Ht=null,e!==null&&(zt[At++]=ur,zt[At++]=dr,zt[At++]=gi,ur=e.id,dr=e.overflow,gi=t),t=ku(t,i.children),t.flags|=4096,t)}function eh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),oc(e.return,t,r)}function cl(e,t,r,i,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=i,n.tail=r,n.tailMode=o)}function Zf(e,t,r){var i=t.pendingProps,o=i.revealOrder,n=i.tail;if(Je(e,t,i.children,r),i=pe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,r,t);else if(e.tag===19)eh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(se(pe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Gs(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),cl(t,!1,o,r,n);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Gs(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}cl(t,!0,r,null,n);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Vr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ev(e,t,r){switch(t.tag){case 3:Xf(t),ro();break;case 5:Cf(t);break;case 1:lt(t.type)&&Ws(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;se(Qs,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):r&t.child.childLanes?Gf(e,t,r):(se(pe,pe.current&1),e=vr(e,t,r),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Zf(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(pe,pe.current),i)break;return null;case 22:case 23:return t.lanes=0,Qf(e,t,r)}return vr(e,t,r)}var Jf,hc,em,tm;Jf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};hc=function(){};em=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,ui(nr.current);var n=null;switch(r){case"input":o=Il(e,o),i=Il(e,i),n=[];break;case"select":o=me({},o,{value:void 0}),i=me({},i,{value:void 0}),n=[];break;case"textarea":o=Ml(e,o),i=Ml(e,i),n=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=js)}Fl(r,i);var s;r=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sn.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in i){var l=i[u];if(a=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(n||(n=[]),n.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(n=n||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(n=n||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),n||a===l||(n=[])):(n=n||[]).push(u,l))}r&&(n=n||[]).push("style",r);var u=n;(t.updateQueue=u)&&(t.flags|=4)}};tm=function(e,t,r,i){r!==i&&(t.flags|=4)};function $o(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function zv(e,t,r){var i=t.pendingProps;switch(lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return lt(t.type)&&Hs(),Qe(t),null;case 3:return i=t.stateNode,oo(),le(at),le(Xe),vu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(wc(Ht),Ht=null))),hc(e,t),Qe(t),null;case 5:gu(t);var o=ui(yn.current);if(r=t.type,e!==null&&t.stateNode!=null)em(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(A(166));return Qe(t),null}if(e=ui(nr.current),os(t)){i=t.stateNode,r=t.type;var n=t.memoizedProps;switch(i[ir]=t,i[gn]=n,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",i),ae("close",i);break;case"iframe":case"object":case"embed":ae("load",i);break;case"video":case"audio":for(o=0;o<Fo.length;o++)ae(Fo[o],i);break;case"source":ae("error",i);break;case"img":case"image":case"link":ae("error",i),ae("load",i);break;case"details":ae("toggle",i);break;case"input":cd(i,n),ae("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!n.multiple},ae("invalid",i);break;case"textarea":dd(i,n),ae("invalid",i)}Fl(r,n),o=null;for(var s in n)if(n.hasOwnProperty(s)){var a=n[s];s==="children"?typeof a=="string"?i.textContent!==a&&(n.suppressHydrationWarning!==!0&&is(i.textContent,a,e),o=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(n.suppressHydrationWarning!==!0&&is(i.textContent,a,e),o=["children",""+a]):sn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ae("scroll",i)}switch(r){case"input":Yn(i),ud(i,n,!0);break;case"textarea":Yn(i),hd(i);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(i.onclick=js)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ep(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[ir]=t,e[gn]=i,Jf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bl(r,i),r){case"dialog":ae("cancel",e),ae("close",e),o=i;break;case"iframe":case"object":case"embed":ae("load",e),o=i;break;case"video":case"audio":for(o=0;o<Fo.length;o++)ae(Fo[o],e);o=i;break;case"source":ae("error",e),o=i;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=i;break;case"details":ae("toggle",e),o=i;break;case"input":cd(e,i),o=Il(e,i),ae("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=me({},i,{value:void 0}),ae("invalid",e);break;case"textarea":dd(e,i),o=Ml(e,i),ae("invalid",e);break;default:o=i}Fl(r,o),a=o;for(n in a)if(a.hasOwnProperty(n)){var l=a[n];n==="style"?Tp(e,l):n==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zp(e,l)):n==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&an(e,l):typeof l=="number"&&an(e,""+l):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(sn.hasOwnProperty(n)?l!=null&&n==="onScroll"&&ae("scroll",e):l!=null&&qc(e,n,l,s))}switch(r){case"input":Yn(e),ud(e,i,!1);break;case"textarea":Yn(e),hd(e);break;case"option":i.value!=null&&e.setAttribute("value",""+jr(i.value));break;case"select":e.multiple=!!i.multiple,n=i.value,n!=null?Ki(e,!!i.multiple,n,!1):i.defaultValue!=null&&Ki(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=js)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)tm(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(A(166));if(r=ui(yn.current),ui(nr.current),os(t)){if(i=t.stateNode,r=t.memoizedProps,i[ir]=t,(n=i.nodeValue!==r)&&(e=wt,e!==null))switch(e.tag){case 3:is(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(i.nodeValue,r,(e.mode&1)!==0)}n&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[ir]=t,t.stateNode=i}return Qe(t),null;case 13:if(le(pe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&yt!==null&&t.mode&1&&!(t.flags&128))yf(),ro(),t.flags|=98560,n=!1;else if(n=os(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(A(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(A(317));n[ir]=t}else ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),n=!1}else Ht!==null&&(wc(Ht),Ht=null),n=!0;if(!n)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):Au())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return oo(),hc(e,t),e===null&&fn(t.stateNode.containerInfo),Qe(t),null;case 10:return hu(t.type._context),Qe(t),null;case 17:return lt(t.type)&&Hs(),Qe(t),null;case 19:if(le(pe),n=t.memoizedState,n===null)return Qe(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)$o(n,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Gs(e),s!==null){for(t.flags|=128,$o(n,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)n=r,e=i,n.flags&=14680066,s=n.alternate,s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}n.tail!==null&&ke()>so&&(t.flags|=128,i=!0,$o(n,!1),t.lanes=4194304)}else{if(!i)if(e=Gs(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$o(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ce)return Qe(t),null}else 2*ke()-n.renderingStartTime>so&&r!==1073741824&&(t.flags|=128,i=!0,$o(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(r=n.last,r!==null?r.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ke(),t.sibling=null,r=pe.current,se(pe,i?r&1|2:r&1),t):(Qe(t),null);case 22:case 23:return zu(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?gt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Av(e,t){switch(lu(t),t.tag){case 1:return lt(t.type)&&Hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oo(),le(at),le(Xe),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return oo(),null;case 10:return hu(t.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var as=!1,Ye=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,O=null;function ji(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ve(e,t,i)}else r.current=null}function pc(e,t,r){try{r()}catch(i){ve(e,t,i)}}var th=!1;function Lv(e,t){if(Xl=Bs,e=nf(),su(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,n=i.focusNode;i=i.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var g;d!==r||o!==0&&d.nodeType!==3||(a=s+o),d!==n||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++u===o&&(a=s),p===n&&++f===i&&(l=s),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gl={focusedElem:e,selectionRange:r},Bs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var _=b.memoizedProps,E=b.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ut(t.type,_),E);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return b=th,th=!1,b}function Ko(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var n=o.destroy;o.destroy=void 0,n!==void 0&&pc(t,r,n)}o=o.next}while(o!==i)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function fc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ir],delete t[gn],delete t[ec],delete t[pv],delete t[fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function im(e){return e.tag===5||e.tag===3||e.tag===4}function rh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=js));else if(i!==4&&(e=e.child,e!==null))for(mc(e,t,r),e=e.sibling;e!==null;)mc(e,t,r),e=e.sibling}function gc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(gc(e,t,r),e=e.sibling;e!==null;)gc(e,t,r),e=e.sibling}var Ve=null,jt=!1;function Cr(e,t,r){for(r=r.child;r!==null;)om(e,t,r),r=r.sibling}function om(e,t,r){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(fa,r)}catch{}switch(r.tag){case 5:Ye||ji(r,t);case 6:var i=Ve,o=jt;Ve=null,Cr(e,t,r),Ve=i,jt=o,Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?rl(e.parentNode,r):e.nodeType===1&&rl(e,r),dn(e)):rl(Ve,r.stateNode));break;case 4:i=Ve,o=jt,Ve=r.stateNode.containerInfo,jt=!0,Cr(e,t,r),Ve=i,jt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var n=o,s=n.destroy;n=n.tag,s!==void 0&&(n&2||n&4)&&pc(r,t,s),o=o.next}while(o!==i)}Cr(e,t,r);break;case 1:if(!Ye&&(ji(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(a){ve(r,t,a)}Cr(e,t,r);break;case 21:Cr(e,t,r);break;case 22:r.mode&1?(Ye=(i=Ye)||r.memoizedState!==null,Cr(e,t,r),Ye=i):Cr(e,t,r);break;default:Cr(e,t,r)}}function ih(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Tv),t.forEach(function(i){var o=Bv.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Bt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var n=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,jt=!1;break e;case 3:Ve=a.stateNode.containerInfo,jt=!0;break e;case 4:Ve=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(Ve===null)throw Error(A(160));om(n,s,o),Ve=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nm(t,e),t=t.sibling}function nm(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),er(e),i&4){try{Ko(3,e,e.return),xa(3,e)}catch(_){ve(e,e.return,_)}try{Ko(5,e,e.return)}catch(_){ve(e,e.return,_)}}break;case 1:Bt(t,e),er(e),i&512&&r!==null&&ji(r,r.return);break;case 5:if(Bt(t,e),er(e),i&512&&r!==null&&ji(r,r.return),e.flags&32){var o=e.stateNode;try{an(o,"")}catch(_){ve(e,e.return,_)}}if(i&4&&(o=e.stateNode,o!=null)){var n=e.memoizedProps,s=r!==null?r.memoizedProps:n,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&n.type==="radio"&&n.name!=null&&Cp(o,n),Bl(a,s);var u=Bl(a,n);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?Tp(o,d):f==="dangerouslySetInnerHTML"?zp(o,d):f==="children"?an(o,d):qc(o,f,d,u)}switch(a){case"input":Ol(o,n);break;case"textarea":$p(o,n);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!n.multiple;var g=n.value;g!=null?Ki(o,!!n.multiple,g,!1):p!==!!n.multiple&&(n.defaultValue!=null?Ki(o,!!n.multiple,n.defaultValue,!0):Ki(o,!!n.multiple,n.multiple?[]:"",!1))}o[gn]=n}catch(_){ve(e,e.return,_)}}break;case 6:if(Bt(t,e),er(e),i&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,n=e.memoizedProps;try{o.nodeValue=n}catch(_){ve(e,e.return,_)}}break;case 3:if(Bt(t,e),er(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(_){ve(e,e.return,_)}break;case 4:Bt(t,e),er(e);break;case 13:Bt(t,e),er(e),o=e.child,o.flags&8192&&(n=o.memoizedState!==null,o.stateNode.isHidden=n,!n||o.alternate!==null&&o.alternate.memoizedState!==null||($u=ke())),i&4&&ih(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||f,Bt(t,e),Ye=u):Bt(t,e),er(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ko(4,p,p.return);break;case 1:ji(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(_){ve(i,r,_)}}break;case 5:ji(p,p.return);break;case 22:if(p.memoizedState!==null){nh(d);continue}}g!==null?(g.return=p,O=g):nh(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(n=o.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ap("display",s))}catch(_){ve(e,e.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){ve(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(t,e),er(e),i&4&&ih(e);break;case 21:break;default:Bt(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(im(r)){var i=r;break e}r=r.return}throw Error(A(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(an(o,""),i.flags&=-33);var n=rh(e);gc(e,n,o);break;case 3:case 4:var s=i.stateNode.containerInfo,a=rh(e);mc(e,a,s);break;default:throw Error(A(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pv(e,t,r){O=e,sm(e)}function sm(e,t,r){for(var i=(e.mode&1)!==0;O!==null;){var o=O,n=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||as;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ye;a=as;var u=Ye;if(as=s,(Ye=l)&&!u)for(O=o;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?sh(o):l!==null?(l.return=s,O=l):sh(o);for(;n!==null;)O=n,sm(n),n=n.sibling;O=o,as=a,Ye=u}oh(e)}else o.subtreeFlags&8772&&n!==null?(n.return=o,O=n):oh(e)}}function oh(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||xa(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ye)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ut(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&Vd(t,n,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Vd(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&dn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ye||t.flags&512&&fc(t)}catch(p){ve(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function nh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function sh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xa(4,t)}catch(l){ve(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(l){ve(t,o,l)}}var n=t.return;try{fc(t)}catch(l){ve(t,n,l)}break;case 5:var s=t.return;try{fc(t)}catch(l){ve(t,s,l)}}}catch(l){ve(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Nv=Math.ceil,ea=br.ReactCurrentDispatcher,Su=br.ReactCurrentOwner,Lt=br.ReactCurrentBatchConfig,X=0,Re=null,$e=null,Ue=0,gt=0,Hi=Xr(0),Le=0,xn=null,yi=0,ka=0,Cu=0,qo=null,nt=null,$u=0,so=1/0,lr=null,ta=!1,vc=null,Fr=null,ls=!1,Pr=null,ra=0,Qo=0,yc=null,Es=-1,zs=0;function et(){return X&6?ke():Es!==-1?Es:Es=ke()}function Br(e){return e.mode&1?X&2&&Ue!==0?Ue&-Ue:gv.transition!==null?(zs===0&&(zs=Up()),zs):(e=re,e!==0||(e=window.event,e=e===void 0?16:Yp(e.type)),e):1}function Kt(e,t,r,i){if(50<Qo)throw Qo=0,yc=null,Error(A(185));Tn(e,r,i),(!(X&2)||e!==Re)&&(e===Re&&(!(X&2)&&(ka|=r),Le===4&&Ar(e,Ue)),ct(e,i),r===1&&X===0&&!(t.mode&1)&&(so=ke()+500,ba&&Gr()))}function ct(e,t){var r=e.callbackNode;g0(e,t);var i=Fs(e,e===Re?Ue:0);if(i===0)r!==null&&md(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&md(r),t===1)e.tag===0?mv(ah.bind(null,e)):mf(ah.bind(null,e)),dv(function(){!(X&6)&&Gr()}),r=null;else{switch(jp(i)){case 1:r=Zc;break;case 4:r=Bp;break;case 16:r=Rs;break;case 536870912:r=Vp;break;default:r=Rs}r=fm(r,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function am(e,t){if(Es=-1,zs=0,X&6)throw Error(A(327));var r=e.callbackNode;if(Gi()&&e.callbackNode!==r)return null;var i=Fs(e,e===Re?Ue:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ia(e,i);else{t=i;var o=X;X|=2;var n=cm();(Re!==e||Ue!==t)&&(lr=null,so=ke()+500,pi(e,t));do try{Dv();break}catch(a){lm(e,a)}while(!0);du(),ea.current=n,X=o,$e!==null?t=0:(Re=null,Ue=0,t=Le)}if(t!==0){if(t===2&&(o=Wl(e),o!==0&&(i=o,t=bc(e,o))),t===1)throw r=xn,pi(e,0),Ar(e,i),ct(e,ke()),r;if(t===6)Ar(e,i);else{if(o=e.current.alternate,!(i&30)&&!Iv(o)&&(t=ia(e,i),t===2&&(n=Wl(e),n!==0&&(i=n,t=bc(e,n))),t===1))throw r=xn,pi(e,0),Ar(e,i),ct(e,ke()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(A(345));case 2:ni(e,nt,lr);break;case 3:if(Ar(e,i),(i&130023424)===i&&(t=$u+500-ke(),10<t)){if(Fs(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Jl(ni.bind(null,e,nt,lr),t);break}ni(e,nt,lr);break;case 4:if(Ar(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-Wt(i);n=1<<s,s=t[s],s>o&&(o=s),i&=~n}if(i=o,i=ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nv(i/1960))-i,10<i){e.timeoutHandle=Jl(ni.bind(null,e,nt,lr),i);break}ni(e,nt,lr);break;case 5:ni(e,nt,lr);break;default:throw Error(A(329))}}}return ct(e,ke()),e.callbackNode===r?am.bind(null,e):null}function bc(e,t){var r=qo;return e.current.memoizedState.isDehydrated&&(pi(e,t).flags|=256),e=ia(e,t),e!==2&&(t=nt,nt=r,t!==null&&wc(t)),e}function wc(e){nt===null?nt=e:nt.push.apply(nt,e)}function Iv(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],n=o.getSnapshot;o=o.value;try{if(!qt(n(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ar(e,t){for(t&=~Cu,t&=~ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),i=1<<r;e[r]=-1,t&=~i}}function ah(e){if(X&6)throw Error(A(327));Gi();var t=Fs(e,0);if(!(t&1))return ct(e,ke()),null;var r=ia(e,t);if(e.tag!==0&&r===2){var i=Wl(e);i!==0&&(t=i,r=bc(e,i))}if(r===1)throw r=xn,pi(e,0),Ar(e,t),ct(e,ke()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ni(e,nt,lr),ct(e,ke()),null}function Eu(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(so=ke()+500,ba&&Gr())}}function bi(e){Pr!==null&&Pr.tag===0&&!(X&6)&&Gi();var t=X;X|=1;var r=Lt.transition,i=re;try{if(Lt.transition=null,re=1,e)return e()}finally{re=i,Lt.transition=r,X=t,!(X&6)&&Gr()}}function zu(){gt=Hi.current,le(Hi)}function pi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,uv(r)),$e!==null)for(r=$e.return;r!==null;){var i=r;switch(lu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hs();break;case 3:oo(),le(at),le(Xe),vu();break;case 5:gu(i);break;case 4:oo();break;case 13:le(pe);break;case 19:le(pe);break;case 10:hu(i.type._context);break;case 22:case 23:zu()}r=r.return}if(Re=e,$e=e=Vr(e.current,null),Ue=gt=t,Le=0,xn=null,Cu=ka=yi=0,nt=qo=null,ci!==null){for(t=0;t<ci.length;t++)if(r=ci[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,n=r.pending;if(n!==null){var s=n.next;n.next=o,i.next=s}r.pending=i}ci=null}return e}function lm(e,t){do{var r=$e;try{if(du(),Ss.current=Js,Zs){for(var i=fe.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Zs=!1}if(vi=0,Me=Te=fe=null,Wo=!1,bn=0,Su.current=null,r===null||r.return===null){Le=1,xn=t,$e=null;break}e:{var n=e,s=r.return,a=r,l=t;if(t=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Qd(s);if(g!==null){g.flags&=-257,Yd(g,s,a,n,t),g.mode&1&&qd(n,u,t),t=g,l=u;var b=t.updateQueue;if(b===null){var _=new Set;_.add(l),t.updateQueue=_}else b.add(l);break e}else{if(!(t&1)){qd(n,u,t),Au();break e}l=Error(A(426))}}else if(ce&&a.mode&1){var E=Qd(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yd(E,s,a,n,t),cu(no(l,a));break e}}n=l=no(l,a),Le!==4&&(Le=2),qo===null?qo=[n]:qo.push(n),n=s;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var y=Wf(n,l,t);Bd(n,y);break e;case 1:a=l;var m=n.type,v=n.stateNode;if(!(n.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){n.flags|=65536,t&=-t,n.lanes|=t;var w=Kf(n,a,t);Bd(n,w);break e}}n=n.return}while(n!==null)}dm(r)}catch(x){t=x,$e===r&&r!==null&&($e=r=r.return);continue}break}while(!0)}function cm(){var e=ea.current;return ea.current=Js,e===null?Js:e}function Au(){(Le===0||Le===3||Le===2)&&(Le=4),Re===null||!(yi&268435455)&&!(ka&268435455)||Ar(Re,Ue)}function ia(e,t){var r=X;X|=2;var i=cm();(Re!==e||Ue!==t)&&(lr=null,pi(e,t));do try{Ov();break}catch(o){lm(e,o)}while(!0);if(du(),X=r,ea.current=i,$e!==null)throw Error(A(261));return Re=null,Ue=0,Le}function Ov(){for(;$e!==null;)um($e)}function Dv(){for(;$e!==null&&!a0();)um($e)}function um(e){var t=pm(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?dm(e):$e=t,Su.current=null}function dm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Av(r,t),r!==null){r.flags&=32767,$e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,$e=null;return}}else if(r=zv(r,t,gt),r!==null){$e=r;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Le===0&&(Le=5)}function ni(e,t,r){var i=re,o=Lt.transition;try{Lt.transition=null,re=1,Mv(e,t,r,i)}finally{Lt.transition=o,re=i}return null}function Mv(e,t,r,i){do Gi();while(Pr!==null);if(X&6)throw Error(A(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var n=r.lanes|r.childLanes;if(v0(e,n),e===Re&&($e=Re=null,Ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ls||(ls=!0,fm(Rs,function(){return Gi(),null})),n=(r.flags&15990)!==0,r.subtreeFlags&15990||n){n=Lt.transition,Lt.transition=null;var s=re;re=1;var a=X;X|=4,Su.current=null,Lv(e,r),nm(r,e),iv(Gl),Bs=!!Xl,Gl=Xl=null,e.current=r,Pv(r),l0(),X=a,re=s,Lt.transition=n}else e.current=r;if(ls&&(ls=!1,Pr=e,ra=o),n=e.pendingLanes,n===0&&(Fr=null),d0(r.stateNode),ct(e,ke()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(ta)throw ta=!1,e=vc,vc=null,e;return ra&1&&e.tag!==0&&Gi(),n=e.pendingLanes,n&1?e===yc?Qo++:(Qo=0,yc=e):Qo=0,Gr(),null}function Gi(){if(Pr!==null){var e=jp(ra),t=Lt.transition,r=re;try{if(Lt.transition=null,re=16>e?16:e,Pr===null)var i=!1;else{if(e=Pr,Pr=null,ra=0,X&6)throw Error(A(331));var o=X;for(X|=4,O=e.current;O!==null;){var n=O,s=n.child;if(O.flags&16){var a=n.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Ko(8,f,n)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var p=f.sibling,g=f.return;if(rm(f),f===u){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var b=n.alternate;if(b!==null){var _=b.child;if(_!==null){b.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}O=n}}if(n.subtreeFlags&2064&&s!==null)s.return=n,O=s;else e:for(;O!==null;){if(n=O,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Ko(9,n,n.return)}var y=n.sibling;if(y!==null){y.return=n.return,O=y;break e}O=n.return}}var m=e.current;for(O=m;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=m;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xa(9,a)}}catch(x){ve(a,a.return,x)}if(a===s){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(X=o,Gr(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(fa,e)}catch{}i=!0}return i}finally{re=r,Lt.transition=t}}return!1}function lh(e,t,r){t=no(r,t),t=Wf(e,t,1),e=Rr(e,t,1),t=et(),e!==null&&(Tn(e,1,t),ct(e,t))}function ve(e,t,r){if(e.tag===3)lh(e,e,r);else for(;t!==null;){if(t.tag===3){lh(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){e=no(r,e),e=Kf(t,e,1),t=Rr(t,e,1),e=et(),t!==null&&(Tn(t,1,e),ct(t,e));break}}t=t.return}}function Rv(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(Ue&r)===r&&(Le===4||Le===3&&(Ue&130023424)===Ue&&500>ke()-$u?pi(e,0):Cu|=r),ct(e,t)}function hm(e,t){t===0&&(e.mode&1?(t=Zn,Zn<<=1,!(Zn&130023424)&&(Zn=4194304)):t=1);var r=et();e=gr(e,t),e!==null&&(Tn(e,t,r),ct(e,r))}function Fv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hm(e,r)}function Bv(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(t),hm(e,r)}var pm;pm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)st=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return st=!1,Ev(e,t,r);st=!!(e.flags&131072)}else st=!1,ce&&t.flags&1048576&&gf(t,qs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;$s(e,t),e=t.pendingProps;var o=to(t,Xe.current);Xi(t,r),o=bu(null,t,i,e,o,r);var n=wu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(i)?(n=!0,Ws(t)):n=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fu(t),o.updater=wa,t.stateNode=o,o._reactInternals=t,sc(t,i,e,r),t=cc(null,t,i,!0,n,r)):(t.tag=0,ce&&n&&au(t),Je(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch($s(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Uv(i),e=Ut(i,e),o){case 0:t=lc(null,t,i,e,r);break e;case 1:t=Zd(null,t,i,e,r);break e;case 11:t=Xd(null,t,i,e,r);break e;case 14:t=Gd(null,t,i,Ut(i.type,e),r);break e}throw Error(A(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),lc(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),Zd(e,t,i,o,r);case 3:e:{if(Xf(t),e===null)throw Error(A(387));i=t.pendingProps,n=t.memoizedState,o=n.element,wf(e,t),Xs(t,i,null,r);var s=t.memoizedState;if(i=s.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){o=no(Error(A(423)),t),t=Jd(e,t,i,r,o);break e}else if(i!==o){o=no(Error(A(424)),t),t=Jd(e,t,i,r,o);break e}else for(yt=Mr(t.stateNode.containerInfo.firstChild),wt=t,ce=!0,Ht=null,r=Sf(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ro(),i===o){t=vr(e,t,r);break e}Je(e,t,i,r)}t=t.child}return t;case 5:return Cf(t),e===null&&ic(t),i=t.type,o=t.pendingProps,n=e!==null?e.memoizedProps:null,s=o.children,Zl(i,o)?s=null:n!==null&&Zl(i,n)&&(t.flags|=32),Yf(e,t),Je(e,t,s,r),t.child;case 6:return e===null&&ic(t),null;case 13:return Gf(e,t,r);case 4:return mu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=io(t,null,i,r):Je(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),Xd(e,t,i,o,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,n=t.memoizedProps,s=o.value,se(Qs,i._currentValue),i._currentValue=s,n!==null)if(qt(n.value,s)){if(n.children===o.children&&!at.current){t=vr(e,t,r);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var a=n.dependencies;if(a!==null){s=n.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(n.tag===1){l=hr(-1,r&-r),l.tag=2;var u=n.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),oc(n.return,r,t),a.lanes|=r;break}l=l.next}}else if(n.tag===10)s=n.type===t.type?null:n.child;else if(n.tag===18){if(s=n.return,s===null)throw Error(A(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),oc(s,r,t),s=n.sibling}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}Je(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Xi(t,r),o=Pt(o),i=i(o),t.flags|=1,Je(e,t,i,r),t.child;case 14:return i=t.type,o=Ut(i,t.pendingProps),o=Ut(i.type,o),Gd(e,t,i,o,r);case 15:return qf(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),$s(e,t),t.tag=1,lt(i)?(e=!0,Ws(t)):e=!1,Xi(t,r),xf(t,i,o),sc(t,i,o,r),cc(null,t,i,!0,e,r);case 19:return Zf(e,t,r);case 22:return Qf(e,t,r)}throw Error(A(156,t.tag))};function fm(e,t){return Fp(e,t)}function Vv(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,r,i){return new Vv(e,t,r,i)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uv(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yc)return 11;if(e===Xc)return 14}return 2}function Vr(e,t){var r=e.alternate;return r===null?(r=Tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function As(e,t,r,i,o,n){var s=2;if(i=e,typeof e=="function")Tu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ii:return fi(r.children,o,n,t);case Qc:s=8,o|=8;break;case Tl:return e=Tt(12,r,t,o|2),e.elementType=Tl,e.lanes=n,e;case Ll:return e=Tt(13,r,t,o),e.elementType=Ll,e.lanes=n,e;case Pl:return e=Tt(19,r,t,o),e.elementType=Pl,e.lanes=n,e;case xp:return Sa(r,o,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:s=10;break e;case _p:s=9;break e;case Yc:s=11;break e;case Xc:s=14;break e;case $r:s=16,i=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(s,r,t,o),t.elementType=e,t.type=i,t.lanes=n,t}function fi(e,t,r,i){return e=Tt(7,e,i,t),e.lanes=r,e}function Sa(e,t,r,i){return e=Tt(22,e,i,t),e.elementType=xp,e.lanes=r,e.stateNode={isHidden:!1},e}function ul(e,t,r){return e=Tt(6,e,null,t),e.lanes=r,e}function dl(e,t,r){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jv(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Lu(e,t,r,i,o,n,s,a,l){return e=new jv(e,t,r,a,l),t===1?(t=1,n===!0&&(t|=8)):t=0,n=Tt(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(n),e}function Hv(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function mm(e){if(!e)return Hr;e=e._reactInternals;e:{if(Ci(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(lt(r))return ff(e,r,t)}return t}function gm(e,t,r,i,o,n,s,a,l){return e=Lu(r,i,!0,e,o,n,s,a,l),e.context=mm(null),r=e.current,i=et(),o=Br(r),n=hr(i,o),n.callback=t??null,Rr(r,n,o),e.current.lanes=o,Tn(e,o,i),ct(e,i),e}function Ca(e,t,r,i){var o=t.current,n=et(),s=Br(o);return r=mm(r),t.context===null?t.context=r:t.pendingContext=r,t=hr(n,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Rr(o,t,s),e!==null&&(Kt(e,o,s,n),ks(e,o,s)),s}function oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Pu(e,t){ch(e,t),(e=e.alternate)&&ch(e,t)}function Wv(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}$a.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ca(e,t,null,null)};$a.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bi(function(){Ca(null,e,null,null)}),t[mr]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kp();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zr.length&&t!==0&&t<zr[r].priority;r++);zr.splice(r,0,e),r===0&&Qp(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uh(){}function Kv(e,t,r,i,o){if(o){if(typeof i=="function"){var n=i;i=function(){var u=oa(s);n.call(u)}}var s=gm(t,i,e,0,null,!1,!1,"",uh);return e._reactRootContainer=s,e[mr]=s.current,fn(e.nodeType===8?e.parentNode:e),bi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var a=i;i=function(){var u=oa(l);a.call(u)}}var l=Lu(e,0,!1,null,null,!1,!1,"",uh);return e._reactRootContainer=l,e[mr]=l.current,fn(e.nodeType===8?e.parentNode:e),bi(function(){Ca(t,l,r,i)}),l}function za(e,t,r,i,o){var n=r._reactRootContainer;if(n){var s=n;if(typeof o=="function"){var a=o;o=function(){var l=oa(s);a.call(l)}}Ca(t,s,e,o)}else s=Kv(r,t,e,o,i);return oa(s)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ro(t.pendingLanes);r!==0&&(Jc(t,r|1),ct(t,ke()),!(X&6)&&(so=ke()+500,Gr()))}break;case 13:bi(function(){var i=gr(e,1);if(i!==null){var o=et();Kt(i,e,1,o)}}),Pu(e,1)}};eu=function(e){if(e.tag===13){var t=gr(e,134217728);if(t!==null){var r=et();Kt(t,e,134217728,r)}Pu(e,134217728)}};Wp=function(e){if(e.tag===13){var t=Br(e),r=gr(e,t);if(r!==null){var i=et();Kt(r,e,t,i)}Pu(e,t)}};Kp=function(){return re};qp=function(e,t){var r=re;try{return re=e,t()}finally{re=r}};Ul=function(e,t,r){switch(t){case"input":if(Ol(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=ya(i);if(!o)throw Error(A(90));Sp(i),Ol(i,o)}}}break;case"textarea":$p(e,r);break;case"select":t=r.value,t!=null&&Ki(e,!!r.multiple,t,!1)}};Np=Eu;Ip=bi;var qv={usingClientEntryPoint:!1,Events:[Pn,Ri,ya,Lp,Pp,Eu]},Eo={findFiberByHostInstance:li,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qv={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||Wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{fa=cs.inject(Qv),or=cs}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv;kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(A(200));return Hv(e,t,null,r)};kt.createRoot=function(e,t){if(!Iu(e))throw Error(A(299));var r=!1,i="",o=vm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Lu(e,1,!1,null,null,r,!1,i,o),e[mr]=t.current,fn(e.nodeType===8?e.parentNode:e),new Nu(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return bi(e)};kt.hydrate=function(e,t,r){if(!Ea(t))throw Error(A(200));return za(null,e,t,!0,r)};kt.hydrateRoot=function(e,t,r){if(!Iu(e))throw Error(A(405));var i=r!=null&&r.hydratedSources||null,o=!1,n="",s=vm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=gm(t,null,e,1,r??null,o,!1,n,s),e[mr]=t.current,fn(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new $a(t)};kt.render=function(e,t,r){if(!Ea(t))throw Error(A(200));return za(null,e,t,!1,r)};kt.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(A(40));return e._reactRootContainer?(bi(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[mr]=null})}),!0):!1};kt.unstable_batchedUpdates=Eu;kt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Ea(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return za(e,t,r,!1,i)};kt.version="18.2.0-next-9e3b772b8-20220608";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),mp.exports=kt;var Yv=mp.exports,dh=Yv;zl.createRoot=dh.createRoot,zl.hydrateRoot=dh.hydrateRoot;function Xv({lightMode:e,setLightMode:t,fontIncreased:r,setFontIncreased:i}){function o(){t(s=>!s)}function n(){i(s=>!s)}return I.jsx("header",{className:"fade-in-header",children:I.jsx("nav",{children:I.jsxs("ul",{className:"header__container",children:[I.jsx("li",{className:"material-symbols-outlined hover pointer",onClick:n,children:I.jsx("span",{children:r?"text_decrease":"text_increase"})}),I.jsx("li",{className:"material-symbols-outlined hover pointer",onClick:o,children:I.jsx("span",{children:e?"dark_mode":"light_mode"})})]})})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=globalThis,Ou=Ts.ShadowRoot&&(Ts.ShadyCSS===void 0||Ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Du=Symbol(),hh=new WeakMap;let bm=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Du)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ou&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=hh.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&hh.set(r,t))}return t}toString(){return this.cssText}};const Gv=e=>new bm(typeof e=="string"?e:e+"",void 0,Du),B=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new bm(r,e,Du)},Zv=(e,t)=>{if(Ou)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),o=Ts.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)}},ph=Ou?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Gv(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jv,defineProperty:ey,getOwnPropertyDescriptor:ty,getOwnPropertyNames:ry,getOwnPropertySymbols:iy,getPrototypeOf:oy}=Object,Ur=globalThis,fh=Ur.trustedTypes,ny=fh?fh.emptyScript:"",hl=Ur.reactiveElementPolyfillSupport,Yo=(e,t)=>e,ao={toAttribute(e,t){switch(t){case Boolean:e=e?ny:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Mu=(e,t)=>!Jv(e,t),mh={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:Mu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ur.litPropertyMetadata??(Ur.litPropertyMetadata=new WeakMap);class Pi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=mh){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,r);o!==void 0&&ey(this.prototype,t,o)}}static getPropertyDescriptor(t,r,i){const{get:o,set:n}=ty(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mh}static _$Ei(){if(this.hasOwnProperty(Yo("elementProperties")))return;const t=oy(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yo("properties"))){const r=this.properties,i=[...ry(r),...iy(r)];for(const o of i)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)r.unshift(ph(o))}else t!==void 0&&r.push(ph(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zv(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ao).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:ao;this._$Em=o,this[o]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Mu)(this[t],r))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$E_)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}}Pi.elementStyles=[],Pi.shadowRootOptions={mode:"open"},Pi[Yo("elementProperties")]=new Map,Pi[Yo("finalized")]=new Map,hl==null||hl({ReactiveElement:Pi}),(Ur.reactiveElementVersions??(Ur.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=globalThis,na=Xo.trustedTypes,gh=na?na.createPolicy("lit-html",{createHTML:e=>e}):void 0,wm="$lit$",Tr=`lit$${(Math.random()+"").slice(9)}$`,_m="?"+Tr,sy=`<${_m}>`,wi=document,kn=()=>wi.createComment(""),Sn=e=>e===null||typeof e!="object"&&typeof e!="function",xm=Array.isArray,ay=e=>xm(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pl=`[ 	
\f\r]`,zo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vh=/-->/g,yh=/>/g,ii=RegExp(`>|${pl}(?:([^\\s"'>=/]+)(${pl}*=${pl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bh=/'/g,wh=/"/g,km=/^(?:script|style|textarea|title)$/i,ly=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=ly(1),bt=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),_h=new WeakMap,di=wi.createTreeWalker(wi,129);function Sm(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gh!==void 0?gh.createHTML(t):t}const cy=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=zo;for(let a=0;a<r;a++){const l=e[a];let u,f,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,f=s.exec(l),f!==null);)p=s.lastIndex,s===zo?f[1]==="!--"?s=vh:f[1]!==void 0?s=yh:f[2]!==void 0?(km.test(f[2])&&(o=RegExp("</"+f[2],"g")),s=ii):f[3]!==void 0&&(s=ii):s===ii?f[0]===">"?(s=o??zo,d=-1):f[1]===void 0?d=-2:(d=s.lastIndex-f[2].length,u=f[1],s=f[3]===void 0?ii:f[3]==='"'?wh:bh):s===wh||s===bh?s=ii:s===vh||s===yh?s=zo:(s=ii,o=void 0);const g=s===ii&&e[a+1].startsWith("/>")?" ":"";n+=s===zo?l+sy:d>=0?(i.push(u),l.slice(0,d)+wm+l.slice(d)+Tr+g):l+Tr+(d===-2?a:g)}return[Sm(e,n+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class Cn{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const a=t.length-1,l=this.parts,[u,f]=cy(t,r);if(this.el=Cn.createElement(u,i),di.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=di.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(wm)){const p=f[s++],g=o.getAttribute(d).split(Tr),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:b[2],strings:g,ctor:b[1]==="."?dy:b[1]==="?"?hy:b[1]==="@"?py:Aa}),o.removeAttribute(d)}else d.startsWith(Tr)&&(l.push({type:6,index:n}),o.removeAttribute(d));if(km.test(o.tagName)){const d=o.textContent.split(Tr),p=d.length-1;if(p>0){o.textContent=na?na.emptyScript:"";for(let g=0;g<p;g++)o.append(d[g],kn()),di.nextNode(),l.push({type:2,index:++n});o.append(d[p],kn())}}}else if(o.nodeType===8)if(o.data===_m)l.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(Tr,d+1))!==-1;)l.push({type:7,index:n}),d+=Tr.length-1}n++}}static createElement(t,r){const i=wi.createElement("template");return i.innerHTML=t,i}}function lo(e,t,r=e,i){var s,a;if(t===bt)return t;let o=i!==void 0?(s=r._$Co)==null?void 0:s[i]:r._$Cl;const n=Sn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=o:r._$Cl=o),o!==void 0&&(t=lo(e,o._$AS(e,t.values),o,i)),t}class uy{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??wi).importNode(r,!0);di.currentNode=o;let n=di.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new In(n,n.nextSibling,this,t):l.type===1?u=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(u=new fy(n,this,t)),this._$AV.push(u),l=i[++a]}s!==(l==null?void 0:l.index)&&(n=di.nextNode(),s++)}return di.currentNode=wi,o}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class In{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,o){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=lo(this,t,r),Sn(t)?t===ue||t==null||t===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==bt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ay(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ue&&Sn(this._$AH)?this._$AA.nextSibling.data=t:this.$(wi.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Cn.createElement(Sm(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const s=new uy(o,this),a=s.u(this.options);s.p(r),this.$(a),this._$AH=s}}_$AC(t){let r=_h.get(t.strings);return r===void 0&&_h.set(t.strings,r=new Cn(t)),r}T(t){xm(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of t)o===r.length?r.push(i=new In(this.k(kn()),this.k(kn()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Aa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,o,n){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ue}_$AI(t,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)t=lo(this,t,r,0),s=!Sn(t)||t!==this._$AH&&t!==bt,s&&(this._$AH=t);else{const a=t;let l,u;for(t=n[0],l=0;l<n.length-1;l++)u=lo(this,a[i+l],r,l),u===bt&&(u=this._$AH[l]),s||(s=!Sn(u)||u!==this._$AH[l]),u===ue?t=ue:t!==ue&&(t+=(u??"")+n[l+1]),this._$AH[l]=u}s&&!o&&this.O(t)}O(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class dy extends Aa{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===ue?void 0:t}}let hy=class extends Aa{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==ue)}};class py extends Aa{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){if((t=lo(this,t,r,0)??ue)===bt)return;const i=this._$AH,o=t===ue&&i!==ue||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==ue&&(i===ue||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class fy{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){lo(this,t)}}const fl=Xo.litHtmlPolyfillSupport;fl==null||fl(Cn,In),(Xo.litHtmlVersions??(Xo.litHtmlVersions=[])).push("3.1.1");const my=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=o=new In(t.insertBefore(kn(),n),n,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Go=class extends Pi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=my(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return bt}};var ip;Go._$litElement$=!0,Go.finalized=!0,(ip=globalThis.litElementHydrateSupport)==null||ip.call(globalThis,{LitElement:Go});const ml=globalThis.litElementPolyfillSupport;ml==null||ml({LitElement:Go});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");var V=B`
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
`,gy=B`
  ${V}

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
`,vy=B`
  ${V}

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
`,Cm=Object.defineProperty,yy=Object.defineProperties,by=Object.getOwnPropertyDescriptor,wy=Object.getOwnPropertyDescriptors,xh=Object.getOwnPropertySymbols,_y=Object.prototype.hasOwnProperty,xy=Object.prototype.propertyIsEnumerable,gl=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},kh=(e,t,r)=>t in e?Cm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wr=(e,t)=>{for(var r in t||(t={}))_y.call(t,r)&&kh(e,r,t[r]);if(xh)for(var r of xh(t))xy.call(t,r)&&kh(e,r,t[r]);return e},On=(e,t)=>yy(e,wy(t)),c=(e,t,r,i)=>{for(var o=i>1?void 0:i?by(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&Cm(t,r,o),o},ky=function(e,t){this[0]=e,this[1]=t},Sy=e=>{var t=e[gl("asyncIterator")],r=!1,i,o={};return t==null?(t=e[gl("iterator")](),i=n=>o[n]=s=>t[n](s)):(t=t.call(e),i=n=>o[n]=s=>{if(r){if(r=!1,n==="throw")throw s;return s}return r=!0,{done:!1,value:new ky(new Promise(a=>{var l=t[n](s);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),o[gl("iterator")]=()=>o,i("next"),"throw"in t?i("throw"):o.throw=n=>{throw n},"return"in t&&i("return"),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cy={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:Mu},$y=(e=Cy,t,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,e),i==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(i==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function h(e){return(t,r)=>typeof r=="object"?$y(e,t,r):((i,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $m(e){return(t,r)=>{const i=typeof t=="function"?t:t[r];Object.assign(i,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _c=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t){return(r,i,o)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};if(t){const{get:s,set:a}=typeof i=="object"?r:o??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return _c(r,i,{get(){let l=s.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return _c(r,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ey(e){return(t,r)=>_c(t,r,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(e))??null}})}var D=class extends Go{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,wr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},r);return}let o=" (unknown version)",n=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version),!(o&&n&&o===n)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${n} has already been registered.`)}};D.version="2.12.0";D.dependencies={};c([h()],D.prototype,"dir",2);c([h()],D.prototype,"lang",2);const Wr=Math.min,vt=Math.max,sa=Math.round,us=Math.floor,Kr=e=>({x:e,y:e}),zy={left:"right",right:"left",bottom:"top",top:"bottom"},Ay={start:"end",end:"start"};function xc(e,t,r){return vt(e,Wr(t,r))}function fo(e,t){return typeof e=="function"?e(t):e}function qr(e){return e.split("-")[0]}function mo(e){return e.split("-")[1]}function Em(e){return e==="x"?"y":"x"}function Ru(e){return e==="y"?"height":"width"}function Dn(e){return["top","bottom"].includes(qr(e))?"y":"x"}function Fu(e){return Em(Dn(e))}function Ty(e,t,r){r===void 0&&(r=!1);const i=mo(e),o=Fu(e),n=Ru(o);let s=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=aa(s)),[s,aa(s)]}function Ly(e){const t=aa(e);return[kc(e),t,kc(t)]}function kc(e){return e.replace(/start|end/g,t=>Ay[t])}function Py(e,t,r){const i=["left","right"],o=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?o:i:t?i:o;case"left":case"right":return t?n:s;default:return[]}}function Ny(e,t,r,i){const o=mo(e);let n=Py(qr(e),r==="start",i);return o&&(n=n.map(s=>s+"-"+o),t&&(n=n.concat(n.map(kc)))),n}function aa(e){return e.replace(/left|right|bottom|top/g,t=>zy[t])}function Iy(e){return{top:0,right:0,bottom:0,left:0,...e}}function zm(e){return typeof e!="number"?Iy(e):{top:e,right:e,bottom:e,left:e}}function la(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Sh(e,t,r){let{reference:i,floating:o}=e;const n=Dn(t),s=Fu(t),a=Ru(s),l=qr(t),u=n==="y",f=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[a]/2-o[a]/2;let g;switch(l){case"top":g={x:f,y:i.y-o.height};break;case"bottom":g={x:f,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:d};break;case"left":g={x:i.x-o.width,y:d};break;default:g={x:i.x,y:i.y}}switch(mo(t)){case"start":g[s]-=p*(r&&u?-1:1);break;case"end":g[s]+=p*(r&&u?-1:1);break}return g}const Oy=async(e,t,r)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:s}=r,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:d}=Sh(u,i,l),p=i,g={},b=0;for(let _=0;_<a.length;_++){const{name:E,fn:y}=a[_],{x:m,y:v,data:w,reset:x}=await y({x:f,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});if(f=m??f,d=v??d,g={...g,[E]:{...g[E],...w}},x&&b<=50){b++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:f,y:d}=Sh(u,p,l)),_=-1;continue}}return{x:f,y:d,placement:p,strategy:o,middlewareData:g}};async function Bu(e,t){var r;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=fo(t,e),b=zm(g),E=a[p?d==="floating"?"reference":"floating":d],y=la(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(E)))==null||r?E:E.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),m=d==="floating"?{...s.floating,x:i,y:o}:s.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),w=await(n.isElement==null?void 0:n.isElement(v))?await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1}:{x:1,y:1},x=la(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:l}):m);return{top:(y.top-x.top+b.top)/w.y,bottom:(x.bottom-y.bottom+b.bottom)/w.y,left:(y.left-x.left+b.left)/w.x,right:(x.right-y.right+b.right)/w.x}}const Dy=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:i,placement:o,rects:n,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:f=0}=fo(e,t)||{};if(u==null)return{};const d=zm(f),p={x:r,y:i},g=Fu(o),b=Ru(g),_=await s.getDimensions(u),E=g==="y",y=E?"top":"left",m=E?"bottom":"right",v=E?"clientHeight":"clientWidth",w=n.reference[b]+n.reference[g]-p[g]-n.floating[b],x=p[g]-n.reference[g],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let S=k?k[v]:0;(!S||!await(s.isElement==null?void 0:s.isElement(k)))&&(S=a.floating[v]||n.floating[b]);const $=w/2-x/2,L=S/2-_[b]/2-1,z=Wr(d[y],L),ie=Wr(d[m],L),oe=z,Ae=S-_[b]-ie,_e=S/2-_[b]/2+$,Be=xc(oe,_e,Ae),Ze=!l.arrow&&mo(o)!=null&&_e!=Be&&n.reference[b]/2-(_e<oe?z:ie)-_[b]/2<0,ft=Ze?_e<oe?_e-oe:_e-Ae:0;return{[g]:p[g]+ft,data:{[g]:Be,centerOffset:_e-Be-ft,...Ze&&{alignmentOffset:ft}},reset:Ze}}}),My=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:o,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:_=!0,...E}=fo(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const y=qr(o),m=qr(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(u.floating)),w=p||(m||!_?[aa(a)]:Ly(a));!p&&b!=="none"&&w.push(...Ny(a,_,b,v));const x=[a,...w],k=await Bu(t,E),S=[];let $=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&S.push(k[y]),d){const oe=Ty(o,s,v);S.push(k[oe[0]],k[oe[1]])}if($=[...$,{placement:o,overflows:S}],!S.every(oe=>oe<=0)){var L,z;const oe=(((L=n.flip)==null?void 0:L.index)||0)+1,Ae=x[oe];if(Ae)return{data:{index:oe,overflows:$},reset:{placement:Ae}};let _e=(z=$.filter(Be=>Be.overflows[0]<=0).sort((Be,Ze)=>Be.overflows[1]-Ze.overflows[1])[0])==null?void 0:z.placement;if(!_e)switch(g){case"bestFit":{var ie;const Be=(ie=$.map(Ze=>[Ze.placement,Ze.overflows.filter(ft=>ft>0).reduce((ft,N)=>ft+N,0)]).sort((Ze,ft)=>Ze[1]-ft[1])[0])==null?void 0:ie[0];Be&&(_e=Be);break}case"initialPlacement":_e=a;break}if(o!==_e)return{reset:{placement:_e}}}return{}}}};async function Ry(e,t){const{placement:r,platform:i,elements:o}=e,n=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=qr(r),a=mo(r),l=Dn(r)==="y",u=["left","top"].includes(s)?-1:1,f=n&&l?-1:1,d=fo(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof b=="number"&&(g=a==="end"?b*-1:b),l?{x:g*f,y:p*u}:{x:p*u,y:g*f}}const Fy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:o,y:n,placement:s,middlewareData:a}=t,l=await Ry(t,e);return s===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:n+l.y,data:{...l,placement:s}}}}},By=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:o}=t,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:E=>{let{x:y,y:m}=E;return{x:y,y:m}}},...l}=fo(e,t),u={x:r,y:i},f=await Bu(t,l),d=Dn(qr(o)),p=Em(d);let g=u[p],b=u[d];if(n){const E=p==="y"?"top":"left",y=p==="y"?"bottom":"right",m=g+f[E],v=g-f[y];g=xc(m,g,v)}if(s){const E=d==="y"?"top":"left",y=d==="y"?"bottom":"right",m=b+f[E],v=b-f[y];b=xc(m,b,v)}const _=a.fn({...t,[p]:g,[d]:b});return{..._,data:{x:_.x-r,y:_.y-i}}}}},Vy=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:o,elements:n}=t,{apply:s=()=>{},...a}=fo(e,t),l=await Bu(t,a),u=qr(r),f=mo(r),d=Dn(r)==="y",{width:p,height:g}=i.floating;let b,_;u==="top"||u==="bottom"?(b=u,_=f===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(_=u,b=f==="end"?"top":"bottom");const E=g-l[b],y=p-l[_],m=!t.middlewareData.shift;let v=E,w=y;if(d){const k=p-l.left-l.right;w=f||m?Wr(y,k):k}else{const k=g-l.top-l.bottom;v=f||m?Wr(E,k):k}if(m&&!f){const k=vt(l.left,0),S=vt(l.right,0),$=vt(l.top,0),L=vt(l.bottom,0);d?w=p-2*(k!==0||S!==0?k+S:vt(l.left,l.right)):v=g-2*($!==0||L!==0?$+L:vt(l.top,l.bottom))}await s({...t,availableWidth:w,availableHeight:v});const x=await o.getDimensions(n.floating);return p!==x.width||g!==x.height?{reset:{rects:!0}}:{}}}};function Qr(e){return Am(e)?(e.nodeName||"").toLowerCase():"#document"}function _t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _r(e){var t;return(t=(Am(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Am(e){return e instanceof Node||e instanceof _t(e).Node}function yr(e){return e instanceof Element||e instanceof _t(e).Element}function sr(e){return e instanceof HTMLElement||e instanceof _t(e).HTMLElement}function Ch(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _t(e).ShadowRoot}function Mn(e){const{overflow:t,overflowX:r,overflowY:i,display:o}=It(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(o)}function Uy(e){return["table","td","th"].includes(Qr(e))}function Vu(e){const t=Uu(),r=It(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function jy(e){let t=co(e);for(;sr(t)&&!Ta(t);){if(Vu(t))return t;t=co(t)}return null}function Uu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ta(e){return["html","body","#document"].includes(Qr(e))}function It(e){return _t(e).getComputedStyle(e)}function La(e){return yr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function co(e){if(Qr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ch(e)&&e.host||_r(e);return Ch(t)?t.host:t}function Tm(e){const t=co(e);return Ta(t)?e.ownerDocument?e.ownerDocument.body:e.body:sr(t)&&Mn(t)?t:Tm(t)}function $n(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const o=Tm(e),n=o===((i=e.ownerDocument)==null?void 0:i.body),s=_t(o);return n?t.concat(s,s.visualViewport||[],Mn(o)?o:[],s.frameElement&&r?$n(s.frameElement):[]):t.concat(o,$n(o,[],r))}function Lm(e){const t=It(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=sr(e),n=o?e.offsetWidth:r,s=o?e.offsetHeight:i,a=sa(r)!==n||sa(i)!==s;return a&&(r=n,i=s),{width:r,height:i,$:a}}function ju(e){return yr(e)?e:e.contextElement}function Zi(e){const t=ju(e);if(!sr(t))return Kr(1);const r=t.getBoundingClientRect(),{width:i,height:o,$:n}=Lm(t);let s=(n?sa(r.width):r.width)/i,a=(n?sa(r.height):r.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Hy=Kr(0);function Pm(e){const t=_t(e);return!Uu()||!t.visualViewport?Hy:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wy(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==_t(e)?!1:t}function _i(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),n=ju(e);let s=Kr(1);t&&(i?yr(i)&&(s=Zi(i)):s=Zi(e));const a=Wy(n,r,i)?Pm(n):Kr(0);let l=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,f=o.width/s.x,d=o.height/s.y;if(n){const p=_t(n),g=i&&yr(i)?_t(i):i;let b=p.frameElement;for(;b&&i&&g!==p;){const _=Zi(b),E=b.getBoundingClientRect(),y=It(b),m=E.left+(b.clientLeft+parseFloat(y.paddingLeft))*_.x,v=E.top+(b.clientTop+parseFloat(y.paddingTop))*_.y;l*=_.x,u*=_.y,f*=_.x,d*=_.y,l+=m,u+=v,b=_t(b).frameElement}}return la({width:f,height:d,x:l,y:u})}function Ky(e){let{rect:t,offsetParent:r,strategy:i}=e;const o=sr(r),n=_r(r);if(r===n)return t;let s={scrollLeft:0,scrollTop:0},a=Kr(1);const l=Kr(0);if((o||!o&&i!=="fixed")&&((Qr(r)!=="body"||Mn(n))&&(s=La(r)),sr(r))){const u=_i(r);a=Zi(r),l.x=u.x+r.clientLeft,l.y=u.y+r.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}}function qy(e){return Array.from(e.getClientRects())}function Nm(e){return _i(_r(e)).left+La(e).scrollLeft}function Qy(e){const t=_r(e),r=La(e),i=e.ownerDocument.body,o=vt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=vt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-r.scrollLeft+Nm(e);const a=-r.scrollTop;return It(i).direction==="rtl"&&(s+=vt(t.clientWidth,i.clientWidth)-o),{width:o,height:n,x:s,y:a}}function Yy(e,t){const r=_t(e),i=_r(e),o=r.visualViewport;let n=i.clientWidth,s=i.clientHeight,a=0,l=0;if(o){n=o.width,s=o.height;const u=Uu();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:n,height:s,x:a,y:l}}function Xy(e,t){const r=_i(e,!0,t==="fixed"),i=r.top+e.clientTop,o=r.left+e.clientLeft,n=sr(e)?Zi(e):Kr(1),s=e.clientWidth*n.x,a=e.clientHeight*n.y,l=o*n.x,u=i*n.y;return{width:s,height:a,x:l,y:u}}function $h(e,t,r){let i;if(t==="viewport")i=Yy(e,r);else if(t==="document")i=Qy(_r(e));else if(yr(t))i=Xy(t,r);else{const o=Pm(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return la(i)}function Im(e,t){const r=co(e);return r===t||!yr(r)||Ta(r)?!1:It(r).position==="fixed"||Im(r,t)}function Gy(e,t){const r=t.get(e);if(r)return r;let i=$n(e,[],!1).filter(a=>yr(a)&&Qr(a)!=="body"),o=null;const n=It(e).position==="fixed";let s=n?co(e):e;for(;yr(s)&&!Ta(s);){const a=It(s),l=Vu(s);!l&&a.position==="fixed"&&(o=null),(n?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Mn(s)&&!l&&Im(e,s))?i=i.filter(f=>f!==s):o=a,s=co(s)}return t.set(e,i),i}function Zy(e){let{element:t,boundary:r,rootBoundary:i,strategy:o}=e;const s=[...r==="clippingAncestors"?Gy(t,this._c):[].concat(r),i],a=s[0],l=s.reduce((u,f)=>{const d=$h(t,f,o);return u.top=vt(d.top,u.top),u.right=Wr(d.right,u.right),u.bottom=Wr(d.bottom,u.bottom),u.left=vt(d.left,u.left),u},$h(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Jy(e){const{width:t,height:r}=Lm(e);return{width:t,height:r}}function eb(e,t,r){const i=sr(t),o=_r(t),n=r==="fixed",s=_i(e,!0,n,t);let a={scrollLeft:0,scrollTop:0};const l=Kr(0);if(i||!i&&!n)if((Qr(t)!=="body"||Mn(o))&&(a=La(t)),i){const u=_i(t,!0,n,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else o&&(l.x=Nm(o));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Eh(e,t){return!sr(e)||It(e).position==="fixed"?null:t?t(e):e.offsetParent}function Om(e,t){const r=_t(e);if(!sr(e))return r;let i=Eh(e,t);for(;i&&Uy(i)&&It(i).position==="static";)i=Eh(i,t);return i&&(Qr(i)==="html"||Qr(i)==="body"&&It(i).position==="static"&&!Vu(i))?r:i||jy(e)||r}const tb=async function(e){let{reference:t,floating:r,strategy:i}=e;const o=this.getOffsetParent||Om,n=this.getDimensions;return{reference:eb(t,await o(r),i),floating:{x:0,y:0,...await n(r)}}};function rb(e){return It(e).direction==="rtl"}const Ls={convertOffsetParentRelativeRectToViewportRelativeRect:Ky,getDocumentElement:_r,getClippingRect:Zy,getOffsetParent:Om,getElementRects:tb,getClientRects:qy,getDimensions:Jy,getScale:Zi,isElement:yr,isRTL:rb};function ib(e,t){let r=null,i;const o=_r(e);function n(){clearTimeout(i),r&&r.disconnect(),r=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:u,top:f,width:d,height:p}=e.getBoundingClientRect();if(a||t(),!d||!p)return;const g=us(f),b=us(o.clientWidth-(u+d)),_=us(o.clientHeight-(f+p)),E=us(u),m={rootMargin:-g+"px "+-b+"px "+-_+"px "+-E+"px",threshold:vt(0,Wr(1,l))||1};let v=!0;function w(x){const k=x[0].intersectionRatio;if(k!==l){if(!v)return s();k?s(!1,k):i=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{r=new IntersectionObserver(w,{...m,root:o.ownerDocument})}catch{r=new IntersectionObserver(w,m)}r.observe(e)}return s(!0),n}function ob(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=ju(e),f=o||n?[...u?$n(u):[],...$n(t)]:[];f.forEach(y=>{o&&y.addEventListener("scroll",r,{passive:!0}),n&&y.addEventListener("resize",r)});const d=u&&a?ib(u,r):null;let p=-1,g=null;s&&(g=new ResizeObserver(y=>{let[m]=y;m&&m.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),u&&!l&&g.observe(u),g.observe(t));let b,_=l?_i(e):null;l&&E();function E(){const y=_i(e);_&&(y.x!==_.x||y.y!==_.y||y.width!==_.width||y.height!==_.height)&&r(),_=y,b=requestAnimationFrame(E)}return r(),()=>{f.forEach(y=>{o&&y.removeEventListener("scroll",r),n&&y.removeEventListener("resize",r)}),d&&d(),g&&g.disconnect(),g=null,l&&cancelAnimationFrame(b)}}const nb=By,sb=My,zh=Vy,ab=Dy,lb=(e,t,r)=>{const i=new Map,o={platform:Ls,...r},n={...o.platform,_c:i};return Oy(e,t,{...o,platform:n})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rn=e=>(...t)=>({_$litDirective$:e,values:t});let Fn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=Rn(class extends Fn{constructor(e){var t;if(super(e),e.type!==rr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((i=this.st)!=null&&i.has(n))&&this.it.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.it)n in t||(r.remove(n),this.it.delete(n));for(const n in t){const s=!!t[n];s===this.it.has(n)||(o=this.st)!=null&&o.has(n)||(s?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return bt}});function cb(e){return ub(e)}function vl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ub(e){for(let t=e;t;t=vl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=vl(e);t;t=vl(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function db(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var ee=class extends D{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||db(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ob(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Fy({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(zh({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(sb({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(nb({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(zh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ab({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Ls.getOffsetParent(r,cb):Ls.getOffsetParent;lb(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:On(wr({},Ls),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:o,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,u=o.arrow.y;let f="",d="",p="",g="";if(this.arrowPlacement==="start"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?b:"",g=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":b,g=s?b:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:d,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${U({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ee.styles=vy;c([P(".popup")],ee.prototype,"popup",2);c([P(".popup__arrow")],ee.prototype,"arrowEl",2);c([h()],ee.prototype,"anchor",2);c([h({type:Boolean,reflect:!0})],ee.prototype,"active",2);c([h({reflect:!0})],ee.prototype,"placement",2);c([h({reflect:!0})],ee.prototype,"strategy",2);c([h({type:Number})],ee.prototype,"distance",2);c([h({type:Number})],ee.prototype,"skidding",2);c([h({type:Boolean})],ee.prototype,"arrow",2);c([h({attribute:"arrow-placement"})],ee.prototype,"arrowPlacement",2);c([h({attribute:"arrow-padding",type:Number})],ee.prototype,"arrowPadding",2);c([h({type:Boolean})],ee.prototype,"flip",2);c([h({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ee.prototype,"flipFallbackPlacements",2);c([h({attribute:"flip-fallback-strategy"})],ee.prototype,"flipFallbackStrategy",2);c([h({type:Object})],ee.prototype,"flipBoundary",2);c([h({attribute:"flip-padding",type:Number})],ee.prototype,"flipPadding",2);c([h({type:Boolean})],ee.prototype,"shift",2);c([h({type:Object})],ee.prototype,"shiftBoundary",2);c([h({attribute:"shift-padding",type:Number})],ee.prototype,"shiftPadding",2);c([h({attribute:"auto-size"})],ee.prototype,"autoSize",2);c([h()],ee.prototype,"sync",2);c([h({type:Object})],ee.prototype,"autoSizeBoundary",2);c([h({attribute:"auto-size-padding",type:Number})],ee.prototype,"autoSizePadding",2);var Dm=new Map,hb=new WeakMap;function pb(e){return e??{keyframes:[],options:{duration:0}}}function Ah(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function te(e,t){Dm.set(e,pb(t))}function de(e,t,r){const i=hb.get(e);if(i!=null&&i[t])return Ah(i[t],r.dir);const o=Dm.get(t);return o?Ah(o,r.dir):{keyframes:[],options:{duration:0}}}function tt(e,t){return new Promise(r=>{function i(o){o.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function be(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,On(wr({},r),{duration:Hu()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Th(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Hu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ee(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function ca(e,t){return e.map(r=>On(wr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const Sc=new Set,fb=new MutationObserver(Bm),Wi=new Map;let Mm=document.documentElement.dir||"ltr",Rm=document.documentElement.lang||navigator.language,ai;fb.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Fm(...e){e.map(t=>{const r=t.$code.toLowerCase();Wi.has(r)?Wi.set(r,Object.assign(Object.assign({},Wi.get(r)),t)):Wi.set(r,t),ai||(ai=t)}),Bm()}function Bm(){Mm=document.documentElement.dir||"ltr",Rm=document.documentElement.lang||navigator.language,[...Sc.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let mb=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Sc.add(this.host)}hostDisconnected(){Sc.delete(this.host)}dir(){return`${this.host.dir||Mm}`.toLowerCase()}lang(){return`${this.host.lang||Rm}`.toLowerCase()}getTranslationData(t){var r,i;const o=new Intl.Locale(t.replace(/_/g,"-")),n=o==null?void 0:o.language.toLowerCase(),s=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",a=Wi.get(`${n}-${s}`),l=Wi.get(n);return{locale:o,language:n,region:s,primary:a,secondary:l}}exists(t,r){var i;const{primary:o,secondary:n}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[t]||n&&n[t]||r.includeFallback&&ai&&ai[t])}term(t,...r){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(o&&o[t])n=o[t];else if(ai&&ai[t])n=ai[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,r)}};var Vm={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Fm(Vm);var gb=Vm,Z=class extends mb{};Fm(gb);function T(e,t){const r=wr({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,s=Array.isArray(e)?e:[e];i.update=function(a){s.forEach(l=>{const u=l;if(a.has(u)){const f=a.get(u),d=this[u];f!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,d)}}),n.call(this,a)}}}var Pe=class extends D{constructor(){super(),this.localize=new Z(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Th(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Th(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Ee(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=de(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Ee(this.body);const{keyframes:e,options:t}=de(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${U({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Pe.styles=gy;Pe.dependencies={"sl-popup":ee};c([P("slot:not([name])")],Pe.prototype,"defaultSlot",2);c([P(".tooltip__body")],Pe.prototype,"body",2);c([P("sl-popup")],Pe.prototype,"popup",2);c([h()],Pe.prototype,"content",2);c([h()],Pe.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);c([h({type:Number})],Pe.prototype,"distance",2);c([h({type:Boolean,reflect:!0})],Pe.prototype,"open",2);c([h({type:Number})],Pe.prototype,"skidding",2);c([h()],Pe.prototype,"trigger",2);c([h({type:Boolean})],Pe.prototype,"hoist",2);c([T("open",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleOpenChange",1);c([T(["content","distance","hoist","placement","skidding"])],Pe.prototype,"handleOptionsChange",1);c([T("disabled")],Pe.prototype,"handleDisabledChange",1);te("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});te("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vb=new Set(["children","localName","ref","style","className"]),Lh=new WeakMap,yb=(e,t,r,i,o)=>{const n=o==null?void 0:o[t];n===void 0||r===i?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((s,a,l)=>{let u=Lh.get(s);u===void 0&&Lh.set(s,u=new Map);let f=u.get(a);l!==void 0?f===void 0?(u.set(a,f={handleEvent:l}),s.addEventListener(a,f)):f.handleEvent=l:f!==void 0&&(u.delete(a),s.removeEventListener(a,f))})(e,n,r)},F=({react:e,tagName:t,elementClass:r,events:i,displayName:o})=>{const n=new Set(Object.keys(i??{})),s=e.forwardRef((a,l)=>{const u=e.useRef(null),f=e.useRef(null),d={},p={};for(const[g,b]of Object.entries(a))vb.has(g)?d[g==="className"?"class":g]=b:n.has(g)||g in r.prototype?p[g]=b:d[g]=b;return e.useLayoutEffect(()=>{if(f.current!==null){for(const g in p)yb(f.current,g,a[g],u.current?u.current[g]:void 0,i);u.current=a}}),e.useLayoutEffect(()=>{var g;(g=f.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{f.current=g,typeof l=="function"?l(g):l!==null&&(l.current=g)},[l])})});return s.displayName=o??r.name,s};var bb="sl-tooltip";Pe.define("sl-tooltip");F({tagName:bb,elementClass:Pe,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var wb=B`
  ${V}

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
`,_b=B`
  ${V}

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
`,$i=(e="value")=>(t,r)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,s,a){var l;const u=i.getPropertyOptions(e),f=typeof u.attribute=="string"?u.attribute:e;if(n===f){const d=u.converter||ao,g=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:ao.fromAttribute)(a,u.type);this[e]!==g&&(this[r]=g)}o.call(this,n,s,a)}},Ao=new WeakMap,To=new WeakMap,Lo=new WeakMap,yl=new WeakSet,ds=new WeakMap,xr=class{constructor(e,t){this.handleFormData=r=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!i&&!s&&typeof o=="string"&&o.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{r.formData.append(o,a.toString())}):r.formData.append(o,n.toString()))},this.handleFormSubmit=r=>{var i;const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Ao.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ds.set(this.host,[])},this.handleInteraction=r=>{const i=ds.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=wr({form:r=>{const i=r.form;if(i){const n=r.getRootNode().getElementById(i);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ds.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ds.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ao.has(this.form)?Ao.get(this.form).add(this.host):Ao.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),To.has(this.form)||(To.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Lo.has(this.form)||(Lo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ao.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),To.has(this.form)&&(this.form.reportValidity=To.get(this.form),To.delete(this.form)),Lo.has(this.form)&&(this.form.checkValidity=Lo.get(this.form),Lo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?yl.add(e):yl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!yl.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Pa=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),xb=Object.freeze(On(wr({},Pa),{valid:!1,valueMissing:!0})),kb=Object.freeze(On(wr({},Pa),{valid:!1,customError:!0})),Sb=B`
  ${V}

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
`,Cc="";function $c(e){Cc=e}function Cb(e=""){if(!Cc){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)$c(r.getAttribute("data-shoelace"));else{const i=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";i&&(o=i.getAttribute("src")),$c(o.split("/").slice(0,-1).join("/"))}}return Cc.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var $b={name:"default",resolver:e=>Cb(`assets/icons/${e}.svg`)},Eb=$b,Ph={caret:`
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
  `},zb={name:"system",resolver:e=>e in Ph?`data:image/svg+xml,${encodeURIComponent(Ph[e])}`:""},Ab=zb,Tb=[Eb,Ab],Ec=[];function Lb(e){Ec.push(e)}function Pb(e){Ec=Ec.filter(t=>t!==e)}function Nh(e){return Tb.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nb=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Um=e=>e.strings===void 0,Ib={},Ob=(e,t=Ib)=>e._$AH=t;var Po=Symbol(),hs=Symbol(),bl,wl=new Map,ne=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let i;if(t!=null&&t.spriteSheet)return C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Po:hs}catch{return hs}try{const o=document.createElement("div");o.innerHTML=await i.text();const n=o.firstElementChild;if(((r=n==null?void 0:n.tagName)==null?void 0:r.toLowerCase())!=="svg")return Po;bl||(bl=new DOMParser);const a=bl.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Po}catch{return Po}}connectedCallback(){super.connectedCallback(),Lb(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pb(this)}getIconSource(){const e=Nh(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),i=r?Nh(this.library):void 0;if(!t){this.svg=null;return}let o=wl.get(t);if(o||(o=this.resolveIcon(t,i),wl.set(t,o)),!this.initialRender)return;const n=await o;if(n===hs&&wl.delete(t),t===this.getIconSource().url){if(Nb(n)){this.svg=n;return}switch(n){case hs:case Po:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ne.styles=Sb;c([j()],ne.prototype,"svg",2);c([h({reflect:!0})],ne.prototype,"name",2);c([h()],ne.prototype,"src",2);c([h()],ne.prototype,"label",2);c([h({reflect:!0})],ne.prototype,"library",2);c([T("label")],ne.prototype,"handleLabelChange",1);c([T(["name","src","library"])],ne.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=e=>e??ue;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=Rn(class extends Fn{constructor(e){if(super(e),e.type!==rr.PROPERTY&&e.type!==rr.ATTRIBUTE&&e.type!==rr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Um(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===bt||t===ue)return t;const r=e.element,i=e.name;if(e.type===rr.PROPERTY){if(t===r[i])return bt}else if(e.type===rr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return bt}else if(e.type===rr.ATTRIBUTE&&r.getAttribute(i)===t+"")return bt;return Ob(e),t}});var Ne=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return C`
      <label
        part="base"
        class=${U({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .indeterminate=${xi(this.indeterminate)}
          .checked=${xi(this.checked)}
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
          ${this.checked?C`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?C`
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
    `}};Ne.styles=_b;Ne.dependencies={"sl-icon":ne};c([P('input[type="checkbox"]')],Ne.prototype,"input",2);c([j()],Ne.prototype,"hasFocus",2);c([h()],Ne.prototype,"title",2);c([h()],Ne.prototype,"name",2);c([h()],Ne.prototype,"value",2);c([h({reflect:!0})],Ne.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Ne.prototype,"checked",2);c([h({type:Boolean,reflect:!0})],Ne.prototype,"indeterminate",2);c([$i("checked")],Ne.prototype,"defaultChecked",2);c([h({reflect:!0})],Ne.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Ne.prototype,"required",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleDisabledChange",1);c([T(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ne.prototype,"handleStateChange",1);var Db=B`
  ${V}

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
`,Bn=class extends D{constructor(){super(...arguments),this.localize=new Z(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Bn.styles=Db;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ih(e,t,r){return e?t(e):r==null?void 0:r(e)}var we=class zc extends D{constructor(){super(...arguments),this.localize=new Z(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ee(this.childrenContainer);const{keyframes:t,options:r}=de(this,"tree-item.collapse",{dir:this.localize.dir()});await be(this.childrenContainer,ca(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&zc.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ee(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=de(this,"tree-item.expand",{dir:this.localize.dir()});await be(this.childrenContainer,ca(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>zc.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${U({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${U({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Ih(this.loading,()=>C` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ih(this.selectable,()=>C`
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
                ?checked="${xi(this.selected)}"
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
    `}};we.styles=wb;we.dependencies={"sl-checkbox":Ne,"sl-icon":ne,"sl-spinner":Bn};c([j()],we.prototype,"indeterminate",2);c([j()],we.prototype,"isLeaf",2);c([j()],we.prototype,"loading",2);c([j()],we.prototype,"selectable",2);c([h({type:Boolean,reflect:!0})],we.prototype,"expanded",2);c([h({type:Boolean,reflect:!0})],we.prototype,"selected",2);c([h({type:Boolean,reflect:!0})],we.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],we.prototype,"lazy",2);c([P("slot:not([name])")],we.prototype,"defaultSlot",2);c([P("slot[name=children]")],we.prototype,"childrenSlot",2);c([P(".tree-item__item")],we.prototype,"itemElement",2);c([P(".tree-item__children")],we.prototype,"childrenContainer",2);c([P(".tree-item__expand-button slot")],we.prototype,"expandButtonSlot",2);c([T("loading",{waitUntilFirstUpdate:!0})],we.prototype,"handleLoadingChange",1);c([T("disabled")],we.prototype,"handleDisabledChange",1);c([T("selected")],we.prototype,"handleSelectedChange",1);c([T("expanded",{waitUntilFirstUpdate:!0})],we.prototype,"handleExpandedChange",1);c([T("expanded",{waitUntilFirstUpdate:!0})],we.prototype,"handleExpandAnimation",1);c([T("lazy",{waitUntilFirstUpdate:!0})],we.prototype,"handleLazyChange",1);var Ji=we;te("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});te("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Mb="sl-tree-item";Ji.define("sl-tree-item");F({tagName:Mb,elementClass:Ji,react:R,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Rb=B`
  ${V}

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
`,Ge=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return C`
      <label
        part="base"
        class=${U({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .checked=${xi(this.checked)}
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
    `}};Ge.styles=Rb;c([P('input[type="checkbox"]')],Ge.prototype,"input",2);c([j()],Ge.prototype,"hasFocus",2);c([h()],Ge.prototype,"title",2);c([h()],Ge.prototype,"name",2);c([h()],Ge.prototype,"value",2);c([h({reflect:!0})],Ge.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Ge.prototype,"checked",2);c([$i("checked")],Ge.prototype,"defaultChecked",2);c([h({reflect:!0})],Ge.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Ge.prototype,"required",2);c([T("checked",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleCheckedChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleDisabledChange",1);var Fb="sl-switch";Ge.define("sl-switch");F({tagName:Fb,elementClass:Ge,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var Bb=B`
  ${V}

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
`,Vb=B`
  ${V}

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
 */const jm=Symbol.for(""),Ub=e=>{if((e==null?void 0:e.r)===jm)return e==null?void 0:e._$litStatic$},ua=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:jm}),Oh=new Map,jb=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],a=[];let l,u=0,f=!1;for(;u<i;){for(l=t[u];u<i&&(n=r[u],(o=Ub(n))!==void 0);)l+=o+t[++u],f=!0;u!==i&&a.push(n),s.push(l),u++}if(u===i&&s.push(t[i]),f){const d=s.join("$$lit$$");(t=Oh.get(d))===void 0&&(s.raw=s,Oh.set(d,t=s)),r=a}return e(t,...r)},Zo=jb(C);var ze=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ua`a`:ua`button`;return Zo`
      <${t}
        part="base"
        class=${U({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};ze.styles=Vb;ze.dependencies={"sl-icon":ne};c([P(".icon-button")],ze.prototype,"button",2);c([j()],ze.prototype,"hasFocus",2);c([h()],ze.prototype,"name",2);c([h()],ze.prototype,"library",2);c([h()],ze.prototype,"src",2);c([h()],ze.prototype,"href",2);c([h()],ze.prototype,"target",2);c([h()],ze.prototype,"download",2);c([h()],ze.prototype,"label",2);c([h({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);var Hb=0,Qt=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.attrId=++Hb,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${U({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?C`
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
    `}};Qt.styles=Bb;Qt.dependencies={"sl-icon-button":ze};c([P(".tab")],Qt.prototype,"tab",2);c([h({reflect:!0})],Qt.prototype,"panel",2);c([h({type:Boolean,reflect:!0})],Qt.prototype,"active",2);c([h({type:Boolean})],Qt.prototype,"closable",2);c([h({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([T("active")],Qt.prototype,"handleActiveChange",1);c([T("disabled")],Qt.prototype,"handleDisabledChange",1);var Wb="sl-tab";Qt.define("sl-tab");F({tagName:Wb,elementClass:Qt,react:R,events:{onSlClose:"sl-close"},displayName:"SlTab"});var Kb=B`
  ${V}

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
`;function qb(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ac=new Set;function Qb(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Jo(e){if(Ac.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=Qb();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function en(e){Ac.delete(e),Ac.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function Tc(e,t,r="vertical",i="smooth"){const o=qb(e,t),n=o.top+t.scrollTop,s=o.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,f=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<a?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<u?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>f&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}var ut=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Tc(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=wr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Tc(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),s=o.slice(0,o.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${U({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
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

          ${this.hasScrollControls?C`
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
    `}};ut.styles=Kb;ut.dependencies={"sl-icon-button":ze};c([P(".tab-group")],ut.prototype,"tabGroup",2);c([P(".tab-group__body")],ut.prototype,"body",2);c([P(".tab-group__nav")],ut.prototype,"nav",2);c([P(".tab-group__indicator")],ut.prototype,"indicator",2);c([j()],ut.prototype,"hasScrollControls",2);c([h()],ut.prototype,"placement",2);c([h()],ut.prototype,"activation",2);c([h({attribute:"no-scroll-controls",type:Boolean})],ut.prototype,"noScrollControls",2);c([T("noScrollControls",{waitUntilFirstUpdate:!0})],ut.prototype,"updateScrollControls",1);c([T("placement",{waitUntilFirstUpdate:!0})],ut.prototype,"syncIndicator",1);var Yb="sl-tab-group";ut.define("sl-tab-group");F({tagName:Yb,elementClass:ut,react:R,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var Xb=B`
  ${V}

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
`,Gb=0,go=class extends D{constructor(){super(...arguments),this.attrId=++Gb,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${U({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};go.styles=Xb;c([h({reflect:!0})],go.prototype,"name",2);c([h({type:Boolean,reflect:!0})],go.prototype,"active",2);c([T("active")],go.prototype,"handleActiveChange",1);var Zb="sl-tab-panel";go.define("sl-tab-panel");F({tagName:Zb,elementClass:go,react:R,events:{},displayName:"SlTabPanel"});var Jb=B`
  ${V}

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
`,kr=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${U({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
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
    `}};kr.styles=Jb;kr.dependencies={"sl-icon-button":ze};c([h({reflect:!0})],kr.prototype,"variant",2);c([h({reflect:!0})],kr.prototype,"size",2);c([h({type:Boolean,reflect:!0})],kr.prototype,"pill",2);c([h({type:Boolean})],kr.prototype,"removable",2);var e1="sl-tag";kr.define("sl-tag");F({tagName:e1,elementClass:kr,react:R,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var Vn=B`
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
`,t1=B`
  ${V}
  ${Vn}

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
`,Ct=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function r1(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var G=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${U({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${M(this.name)}
              .value=${xi(this.value)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=t1;c([P(".textarea__control")],G.prototype,"input",2);c([j()],G.prototype,"hasFocus",2);c([h()],G.prototype,"title",2);c([h()],G.prototype,"name",2);c([h()],G.prototype,"value",2);c([h({reflect:!0})],G.prototype,"size",2);c([h({type:Boolean,reflect:!0})],G.prototype,"filled",2);c([h()],G.prototype,"label",2);c([h({attribute:"help-text"})],G.prototype,"helpText",2);c([h()],G.prototype,"placeholder",2);c([h({type:Number})],G.prototype,"rows",2);c([h()],G.prototype,"resize",2);c([h({type:Boolean,reflect:!0})],G.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],G.prototype,"readonly",2);c([h({reflect:!0})],G.prototype,"form",2);c([h({type:Boolean,reflect:!0})],G.prototype,"required",2);c([h({type:Number})],G.prototype,"minlength",2);c([h({type:Number})],G.prototype,"maxlength",2);c([h()],G.prototype,"autocapitalize",2);c([h()],G.prototype,"autocorrect",2);c([h()],G.prototype,"autocomplete",2);c([h({type:Boolean})],G.prototype,"autofocus",2);c([h()],G.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],G.prototype,"spellcheck",2);c([h()],G.prototype,"inputmode",2);c([$i()],G.prototype,"defaultValue",2);c([T("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);c([T("rows",{waitUntilFirstUpdate:!0})],G.prototype,"handleRowsChange",1);c([T("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);var i1="sl-textarea";G.define("sl-textarea");F({tagName:i1,elementClass:G,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var o1=B`
  ${V}

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
`,Na=class extends D{render(){return C` <slot></slot> `}};Na.styles=o1;var n1="sl-visually-hidden";Na.define("sl-visually-hidden");F({tagName:n1,elementClass:Na,react:R,events:{},displayName:"SlVisuallyHidden"});var s1=B`
  ${V}

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
`;function Ce(e,t,r){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>r?i(r):i(e)}function Dh(e,t=!1){function r(n){const s=n.getChildrenItems({includeDisabled:!1});if(s.length){const a=s.every(u=>u.selected),l=s.every(u=>!u.selected&&!u.indeterminate);n.selected=a,n.indeterminate=!a&&!l}}function i(n){const s=n.parentElement;Ji.isTreeItem(s)&&(r(s),i(s))}function o(n){for(const s of n.getChildrenItems())s.selected=t?n.selected||s.selected:!s.disabled&&n.selected,o(s);t&&r(n)}o(e),i(e)}var Zr=class extends D{constructor(){super(),this.selection="single",this.localize=new Z(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Ji.isTreeItem),i=[...t.removedNodes].filter(Ji.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ji.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Dh(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var n;return["input","textarea"].includes((n=o==null?void 0:o.tagName)==null?void 0:n.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(l=>l.matches(":focus")),n=t[o],s=l=>{const u=t[Ce(l,0,t.length-1)];this.focusItem(u)},a=l=>{n.expanded=l};e.key==="ArrowDown"?s(o+1):e.key==="ArrowUp"?s(o-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?s(o+1):a(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!n||n.disabled||n.isLeaf||!n.expanded?s(o-1):a(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(n.disabled||this.selectItem(n))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var n;return(n=o==null?void 0:o.classList)==null?void 0:n.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Dh(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(r),!t.has(r)})}render(){return C`
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
    `}};Zr.styles=s1;c([P("slot:not([name])")],Zr.prototype,"defaultSlot",2);c([P("slot[name=expand-icon]")],Zr.prototype,"expandedIconSlot",2);c([P("slot[name=collapse-icon]")],Zr.prototype,"collapsedIconSlot",2);c([h()],Zr.prototype,"selection",2);c([T("selection")],Zr.prototype,"handleSelectionChange",1);var a1="sl-tree";Zr.define("sl-tree");F({tagName:a1,elementClass:Zr,react:R,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var l1=B`
  ${V}

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
 */const Hm="important",c1=" !"+Hm,ot=Rn(class extends Fn{constructor(e){var t;if(super(e),e.type!==rr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ut.add(i);const n=typeof o=="string"&&o.endsWith(c1);i.includes("-")||n?r.setProperty(i,n?o.slice(0,-11):o,n?Hm:""):r[i]=o}}return bt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lc=class extends Fn{constructor(t){if(super(t),this.et=ue,t.type!==rr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ue||t==null)return this.vt=void 0,this.et=t;if(t===bt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Lc.directiveName="unsafeHTML",Lc.resultType=1;const Ps=Rn(Lc);var We=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),n=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return Ce(n,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${U({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
          ${t.map(i=>r>i&&r<i+1?C`
                <span
                  class=${U({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ot({clipPath:e?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${Ps(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ot({clipPath:e?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${Ps(this.getSymbol(i+1))}
                  </div>
                </span>
              `:C`
              <span
                class=${U({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Ps(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};We.styles=l1;We.dependencies={"sl-icon":ne};c([P(".rating")],We.prototype,"rating",2);c([j()],We.prototype,"hoverValue",2);c([j()],We.prototype,"isHovering",2);c([h()],We.prototype,"label",2);c([h({type:Number})],We.prototype,"value",2);c([h({type:Number})],We.prototype,"max",2);c([h({type:Number})],We.prototype,"precision",2);c([h({type:Boolean,reflect:!0})],We.prototype,"readonly",2);c([h({type:Boolean,reflect:!0})],We.prototype,"disabled",2);c([h()],We.prototype,"getSymbol",2);c([$m({passive:!0})],We.prototype,"handleTouchMove",1);c([T("hoverValue")],We.prototype,"handleHoverValueChange",1);c([T("isHovering")],We.prototype,"handleIsHoveringChange",1);var u1="sl-rating";We.define("sl-rating");var d1=F({tagName:u1,elementClass:We,react:R,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"}),h1=d1,p1=B`
  ${V}
  ${Vn}

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
`,he=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",n=t*e;if(o){const s=`${t-n}px + ${e} * ${i}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${i} / 2))`}else{const s=`${n}px - ${e} * ${i}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${U({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${xi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
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
    `}};he.styles=p1;c([P(".range__control")],he.prototype,"input",2);c([P(".range__tooltip")],he.prototype,"output",2);c([j()],he.prototype,"hasFocus",2);c([j()],he.prototype,"hasTooltip",2);c([h()],he.prototype,"title",2);c([h()],he.prototype,"name",2);c([h({type:Number})],he.prototype,"value",2);c([h()],he.prototype,"label",2);c([h({attribute:"help-text"})],he.prototype,"helpText",2);c([h({type:Boolean,reflect:!0})],he.prototype,"disabled",2);c([h({type:Number})],he.prototype,"min",2);c([h({type:Number})],he.prototype,"max",2);c([h({type:Number})],he.prototype,"step",2);c([h()],he.prototype,"tooltip",2);c([h({attribute:!1})],he.prototype,"tooltipFormatter",2);c([h({reflect:!0})],he.prototype,"form",2);c([$i()],he.prototype,"defaultValue",2);c([$m({passive:!0})],he.prototype,"handleThumbDragStart",1);c([T("value",{waitUntilFirstUpdate:!0})],he.prototype,"handleValueChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],he.prototype,"handleDisabledChange",1);c([T("hasTooltip",{waitUntilFirstUpdate:!0})],he.prototype,"syncRange",1);var f1="sl-range";he.define("sl-range");F({tagName:f1,elementClass:he,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var m1=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Sr=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:o}=m1.find(n=>Math.abs(r)<n.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;i==="minute"?n=ps("second"):i==="hour"?n=ps("minute"):i==="day"?n=ps("hour"):n=ps("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),n)}return C` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};c([j()],Sr.prototype,"isoTime",2);c([j()],Sr.prototype,"relativeTime",2);c([j()],Sr.prototype,"titleTime",2);c([h()],Sr.prototype,"date",2);c([h()],Sr.prototype,"format",2);c([h()],Sr.prototype,"numeric",2);c([h({type:Boolean})],Sr.prototype,"sync",2);function ps(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var g1="sl-relative-time";Sr.define("sl-relative-time");F({tagName:g1,elementClass:Sr,react:R,events:{},displayName:"SlRelativeTime"});var v1=B`
  ${V}

  :host {
    display: contents;
  }
`,Un=class extends D{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Un.styles=v1;c([h({type:Boolean,reflect:!0})],Un.prototype,"disabled",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Un.prototype,"handleDisabledChange",1);var y1="sl-resize-observer";Un.define("sl-resize-observer");F({tagName:y1,elementClass:Un,react:R,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var b1=B`
  ${V}
  ${Vn}

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
`,Q=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new Z(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>C`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(r||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let s=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=n+1,s>o.length-1&&(s=0)):e.key==="ArrowUp"?(s=n-1,s<0&&(s=o.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=o.length-1),this.setCurrentOption(o[s])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return C`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof r=="string"?Ps(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return C`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return C``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ee(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=de(this,"select.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.currentOption&&Tc(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ee(this);const{keyframes:e,options:t}=de(this,"select.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,tt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,tt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${U({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?C`
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
    `}};Q.styles=b1;Q.dependencies={"sl-icon":ne,"sl-popup":ee,"sl-tag":kr};c([P(".select")],Q.prototype,"popup",2);c([P(".select__combobox")],Q.prototype,"combobox",2);c([P(".select__display-input")],Q.prototype,"displayInput",2);c([P(".select__value-input")],Q.prototype,"valueInput",2);c([P(".select__listbox")],Q.prototype,"listbox",2);c([j()],Q.prototype,"hasFocus",2);c([j()],Q.prototype,"displayLabel",2);c([j()],Q.prototype,"currentOption",2);c([j()],Q.prototype,"selectedOptions",2);c([h()],Q.prototype,"name",2);c([h({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Q.prototype,"value",2);c([$i()],Q.prototype,"defaultValue",2);c([h({reflect:!0})],Q.prototype,"size",2);c([h()],Q.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);c([h({attribute:"max-options-visible",type:Number})],Q.prototype,"maxOptionsVisible",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);c([h({type:Boolean})],Q.prototype,"clearable",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"open",2);c([h({type:Boolean})],Q.prototype,"hoist",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"filled",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"pill",2);c([h()],Q.prototype,"label",2);c([h({reflect:!0})],Q.prototype,"placement",2);c([h({attribute:"help-text"})],Q.prototype,"helpText",2);c([h({reflect:!0})],Q.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Q.prototype,"required",2);c([h()],Q.prototype,"getTag",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);c([T("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);c([T("open",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpenChange",1);te("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});te("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var w1="sl-select";Q.define("sl-select");F({tagName:w1,elementClass:Q,react:R,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var _1=B`
  ${V}

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
`,Ia=class extends D{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${U({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ia.styles=_1;c([h()],Ia.prototype,"effect",2);var x1="sl-skeleton";Ia.define("sl-skeleton");F({tagName:x1,elementClass:Ia,react:R,events:{},displayName:"SlSkeleton"});var k1="sl-spinner";Bn.define("sl-spinner");F({tagName:k1,elementClass:Bn,react:R,events:{},displayName:"SlSpinner"});var S1=B`
  ${V}

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
`;function tn(e,t){function r(o){const n=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,a=n.left+s.scrollX,l=n.top+s.scrollY,u=o.pageX-a,f=o.pageY-l;t!=null&&t.onMove&&t.onMove(u,f)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var dt=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),tn(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let a;s.endsWith("%")?a=this.size*(parseFloat(s)/100):a=parseFloat(s),t&&!this.vertical&&(a=this.size-a),o>=a-this.snapThreshold&&o<=a+this.snapThreshold&&(o=a)}),this.position=Ce(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ce(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",C`
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
    `}};dt.styles=S1;c([P(".divider")],dt.prototype,"divider",2);c([h({type:Number,reflect:!0})],dt.prototype,"position",2);c([h({attribute:"position-in-pixels",type:Number})],dt.prototype,"positionInPixels",2);c([h({type:Boolean,reflect:!0})],dt.prototype,"vertical",2);c([h({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);c([h()],dt.prototype,"primary",2);c([h()],dt.prototype,"snap",2);c([h({type:Number,attribute:"snap-threshold"})],dt.prototype,"snapThreshold",2);c([T("position")],dt.prototype,"handlePositionChange",1);c([T("positionInPixels")],dt.prototype,"handlePositionInPixelsChange",1);c([T("vertical")],dt.prototype,"handleVerticalChange",1);var C1="sl-split-panel";dt.define("sl-split-panel");F({tagName:C1,elementClass:dt,react:R,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var $1=B`
  ${V}

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
`,$t=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return C`
      <div
        part="base"
        class=${U({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};$t.styles=$1;$t.dependencies={"sl-icon":ne};c([P(".option__label")],$t.prototype,"defaultSlot",2);c([j()],$t.prototype,"current",2);c([j()],$t.prototype,"selected",2);c([j()],$t.prototype,"hasHover",2);c([h({reflect:!0})],$t.prototype,"value",2);c([h({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);c([T("disabled")],$t.prototype,"handleDisabledChange",1);c([T("selected")],$t.prototype,"handleSelectedChange",1);c([T("value")],$t.prototype,"handleValueChange",1);var E1="sl-option";$t.define("sl-option");F({tagName:E1,elementClass:$t,react:R,events:{},displayName:"SlOption"});var z1="sl-popup";ee.define("sl-popup");F({tagName:z1,elementClass:ee,react:R,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var A1=B`
  ${V}

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
`,vo=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${U({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ot({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};vo.styles=A1;c([h({type:Number,reflect:!0})],vo.prototype,"value",2);c([h({type:Boolean,reflect:!0})],vo.prototype,"indeterminate",2);c([h()],vo.prototype,"label",2);var T1="sl-progress-bar";vo.define("sl-progress-bar");F({tagName:T1,elementClass:vo,react:R,events:{},displayName:"SlProgressBar"});var L1=B`
  ${V}

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
`,Yt=class extends D{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${U({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Yt.styles=L1;Yt.dependencies={"sl-icon":ne};c([j()],Yt.prototype,"checked",2);c([j()],Yt.prototype,"hasFocus",2);c([h()],Yt.prototype,"value",2);c([h({reflect:!0})],Yt.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);c([T("checked")],Yt.prototype,"handleCheckedChange",1);c([T("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1);var P1="sl-radio";Yt.define("sl-radio");F({tagName:P1,elementClass:Yt,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var N1=B`
  ${V}

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
`,Ei=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return C`
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
    `}};Ei.styles=N1;c([P(".progress-ring__indicator")],Ei.prototype,"indicator",2);c([j()],Ei.prototype,"indicatorOffset",2);c([h({type:Number,reflect:!0})],Ei.prototype,"value",2);c([h()],Ei.prototype,"label",2);var I1="sl-progress-ring";Ei.define("sl-progress-ring");F({tagName:I1,elementClass:Ei,react:R,events:{},displayName:"SlProgressRing"});var O1=B`
  ${V}

  :host {
    display: inline-block;
  }
`;let Wm=null;class Km{}Km.render=function(e,t){Wm(e,t)};self.QrCreator=Km;(function(e){function t(a,l,u,f){var d={},p=e(u,l);p.u(a),p.J(),f=f||0;var g=p.h(),b=p.h()+2*f;return d.text=a,d.level=l,d.version=u,d.O=b,d.a=function(_,E){return _-=f,E-=f,0>_||_>=g||0>E||E>=g?!1:p.a(_,E)},d}function r(a,l,u,f,d,p,g,b,_,E){function y(m,v,w,x,k,S,$){m?(a.lineTo(v+S,w+$),a.arcTo(v,w,x,k,p)):a.lineTo(v,w)}g?a.moveTo(l+p,u):a.moveTo(l,u),y(b,f,u,f,d,-p,0),y(_,f,d,l,d,0,-p),y(E,l,d,l,u,p,0),y(g,l,u,f,u,0,p)}function i(a,l,u,f,d,p,g,b,_,E){function y(m,v,w,x){a.moveTo(m+w,v),a.lineTo(m,v),a.lineTo(m,v+x),a.arcTo(m,v,m+w,v,p)}g&&y(l,u,p,p),b&&y(f,u,-p,p),_&&y(f,d,-p,-p),E&&y(l,d,p,-p)}function o(a,l){var u=l.fill;if(typeof u=="string")a.fillStyle=u;else{var f=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*l.size)),f==="linear-gradient")var p=a.createLinearGradient.apply(a,u);else if(f==="radial-gradient")p=a.createRadialGradient.apply(a,u);else throw Error("Unsupported fill");d.forEach(([g,b])=>{p.addColorStop(g,b)}),a.fillStyle=p}}function n(a,l){e:{var u=l.text,f=l.v,d=l.N,p=l.K,g=l.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var b=t(u,f,d,g);break e}catch{}b=void 0}if(!b)return null;for(u=a.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),f=b.O,p=l.size/f,u.beginPath(),g=0;g<f;g+=1)for(d=0;d<f;d+=1){var _=u,E=l.left+d*p,y=l.top+g*p,m=g,v=d,w=b.a,x=E+p,k=y+p,S=m-1,$=m+1,L=v-1,z=v+1,ie=Math.floor(Math.min(.5,Math.max(0,l.R))*p),oe=w(m,v),Ae=w(S,L),_e=w(S,v);S=w(S,z);var Be=w(m,z);z=w($,z),v=w($,v),$=w($,L),m=w(m,L),E=Math.round(E),y=Math.round(y),x=Math.round(x),k=Math.round(k),oe?r(_,E,y,x,k,ie,!_e&&!m,!_e&&!Be,!v&&!Be,!v&&!m):i(_,E,y,x,k,ie,_e&&m&&Ae,_e&&Be&&S,v&&Be&&z,v&&m&&$)}return o(u,l),u.fill(),a}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Wm=function(a,l){var u={};Object.assign(u,s,a),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),n(l,u)):(a=document.createElement("canvas"),a.width=u.size,a.height=u.size,u=n(a,u),l.appendChild(u))}})(function(){function e(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(f){for(var d=0;d<u.length;d+=1)f.put(u[d],8)}}}function t(){var l=[],u=0,f={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)f.m((d>>>p-g-1&1)==1)},f:function(){return u},m:function(d){var p=Math.floor(u/8);l.length<=p&&l.push(0),d&&(l[p]|=128>>>u%8),u+=1}};return f}function r(l,u){function f(m,v){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||b<=m+w))for(var x=-1;7>=x;x+=1)-1>=v+x||b<=v+x||(g[m+w][v+x]=0<=w&&6>=w&&(x==0||x==6)||0<=x&&6>=x&&(w==0||w==6)||2<=w&&4>=w&&2<=x&&4>=x)}function d(m,v){for(var w=b=4*l+17,x=Array(w),k=0;k<w;k+=1){x[k]=Array(w);for(var S=0;S<w;S+=1)x[k][S]=null}for(g=x,f(0,0),f(b-7,0),f(0,b-7),w=n.G(l),x=0;x<w.length;x+=1)for(k=0;k<w.length;k+=1){S=w[x];var $=w[k];if(g[S][$]==null)for(var L=-2;2>=L;L+=1)for(var z=-2;2>=z;z+=1)g[S+L][$+z]=L==-2||L==2||z==-2||z==2||L==0&&z==0}for(w=8;w<b-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<b-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=n.w(p<<3|v),x=0;15>x;x+=1)k=!m&&(w>>x&1)==1,g[6>x?x:8>x?x+1:b-15+x][8]=k,g[8][8>x?b-x-1:9>x?15-x:14-x]=k;if(g[b-8][8]=!m,7<=l){for(w=n.A(l),x=0;18>x;x+=1)k=!m&&(w>>x&1)==1,g[Math.floor(x/3)][x%3+b-8-3]=k;for(x=0;18>x;x+=1)k=!m&&(w>>x&1)==1,g[x%3+b-8-3][Math.floor(x/3)]=k}if(_==null){for(m=a.I(l,p),w=t(),x=0;x<E.length;x+=1)k=E[x],w.put(4,4),w.put(k.b(),n.f(4,l)),k.write(w);for(x=k=0;x<m.length;x+=1)k+=m[x].j;if(w.f()>8*k)throw Error("code length overflow. ("+w.f()+">"+8*k+")");for(w.f()+4<=8*k&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*k)&&(w.put(236,8),!(w.f()>=8*k));)w.put(17,8);var ie=0;for(k=x=0,S=Array(m.length),$=Array(m.length),L=0;L<m.length;L+=1){var oe=m[L].j,Ae=m[L].o-oe;for(x=Math.max(x,oe),k=Math.max(k,Ae),S[L]=Array(oe),z=0;z<S[L].length;z+=1)S[L][z]=255&w.B()[z+ie];for(ie+=oe,z=n.C(Ae),oe=i(S[L],z.b()-1).l(z),$[L]=Array(z.b()-1),z=0;z<$[L].length;z+=1)Ae=z+oe.b()-$[L].length,$[L][z]=0<=Ae?oe.c(Ae):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=ie=0;z<x;z+=1)for(L=0;L<m.length;L+=1)z<S[L].length&&(w[ie]=S[L][z],ie+=1);for(z=0;z<k;z+=1)for(L=0;L<m.length;L+=1)z<$[L].length&&(w[ie]=$[L][z],ie+=1);_=w}for(m=_,w=-1,x=b-1,k=7,S=0,v=n.F(v),$=b-1;0<$;$-=2)for($==6&&--$;;){for(L=0;2>L;L+=1)g[x][$-L]==null&&(z=!1,S<m.length&&(z=(m[S]>>>k&1)==1),v(x,$-L)&&(z=!z),g[x][$-L]=z,--k,k==-1&&(S+=1,k=7));if(x+=w,0>x||b<=x){x-=w,w=-w;break}}}var p=o[u],g=null,b=0,_=null,E=[],y={u:function(m){m=e(m),E.push(m),_=null},a:function(m,v){if(0>m||b<=m||0>v||b<=v)throw Error(m+","+v);return g[m][v]},h:function(){return b},J:function(){for(var m=0,v=0,w=0;8>w;w+=1){d(!0,w);var x=n.D(y);(w==0||m>x)&&(m=x,v=w)}d(!1,v)}};return y}function i(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var f=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+u),b=0;b<l.length-p;b+=1)g[b]=l[b+p];return g}(),d={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),b=0;b<d.b();b+=1)for(var _=0;_<p.b();_+=1)g[b+_]^=s.i(s.g(d.c(b))+s.g(p.c(_)));return i(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=s.g(d.c(0))-s.g(p.c(0)),b=Array(d.b()),_=0;_<d.b();_+=1)b[_]=d.c(_);for(_=0;_<p.b();_+=1)b[_]^=s.i(s.g(p.c(_))+g);return i(b,0).l(p)}};return d}r.s=function(l){for(var u=[],f=0;f<l.length;f++){var d=l.charCodeAt(f);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(f++,d=65536+((d&1023)<<10|l.charCodeAt(f)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var o={L:1,M:0,Q:3,H:2},n=function(){function l(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(d){for(var p=d<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return d<<12|p},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=i([1],0),g=0;g<d;g+=1)p=p.multiply(i([1,s.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,b=0;b<p;b+=1)for(var _=0;_<p;_+=1){for(var E=0,y=d.a(b,_),m=-1;1>=m;m+=1)if(!(0>b+m||p<=b+m))for(var v=-1;1>=v;v+=1)0>_+v||p<=_+v||(m!=0||v!=0)&&y==d.a(b+m,_+v)&&(E+=1);5<E&&(g+=3+E-5)}for(b=0;b<p-1;b+=1)for(_=0;_<p-1;_+=1)E=0,d.a(b,_)&&(E+=1),d.a(b+1,_)&&(E+=1),d.a(b,_+1)&&(E+=1),d.a(b+1,_+1)&&(E+=1),(E==0||E==4)&&(g+=3);for(b=0;b<p;b+=1)for(_=0;_<p-6;_+=1)d.a(b,_)&&!d.a(b,_+1)&&d.a(b,_+2)&&d.a(b,_+3)&&d.a(b,_+4)&&!d.a(b,_+5)&&d.a(b,_+6)&&(g+=40);for(_=0;_<p;_+=1)for(b=0;b<p-6;b+=1)d.a(b,_)&&!d.a(b+1,_)&&d.a(b+2,_)&&d.a(b+3,_)&&d.a(b+4,_)&&!d.a(b+5,_)&&d.a(b+6,_)&&(g+=40);for(_=E=0;_<p;_+=1)for(b=0;b<p;b+=1)d.a(b,_)&&(E+=1);return g+=Math.abs(100*E/p/p-50)/5*10}};return f}(),s=function(){for(var l=Array(256),u=Array(256),f=0;8>f;f+=1)l[f]=1<<f;for(f=8;256>f;f+=1)l[f]=l[f-4]^l[f-5]^l[f-6]^l[f-8];for(f=0;255>f;f+=1)u[l[f]]=f;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),a=function(){function l(d,p){switch(p){case o.L:return u[4*(d-1)];case o.M:return u[4*(d-1)+1];case o.Q:return u[4*(d-1)+2];case o.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(d,p){var g=l(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var b=0;b<d;b+=1)for(var _=g[3*b],E=g[3*b+1],y=g[3*b+2],m=0;m<_;m+=1){var v=y,w={};w.o=E,w.j=v,p.push(w)}return p}};return f}();return r}());const D1=QrCreator;var Ot=class extends D{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&D1.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ot({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ot.styles=O1;c([P("canvas")],Ot.prototype,"canvas",2);c([h()],Ot.prototype,"value",2);c([h()],Ot.prototype,"label",2);c([h({type:Number})],Ot.prototype,"size",2);c([h()],Ot.prototype,"fill",2);c([h()],Ot.prototype,"background",2);c([h({type:Number})],Ot.prototype,"radius",2);c([h({attribute:"error-correction"})],Ot.prototype,"errorCorrection",2);c([T(["background","errorCorrection","fill","radius","size","value"])],Ot.prototype,"generate",1);var M1="sl-qr-code";Ot.define("sl-qr-code");F({tagName:M1,elementClass:Ot,react:R,events:{},displayName:"SlQrCode"});var qm=B`
  ${V}

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
`,R1=B`
  ${qm}

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
`,Dt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Zo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${U({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Dt.styles=R1;c([P(".button")],Dt.prototype,"input",2);c([P(".hidden-input")],Dt.prototype,"hiddenInput",2);c([j()],Dt.prototype,"hasFocus",2);c([h({type:Boolean,reflect:!0})],Dt.prototype,"checked",2);c([h()],Dt.prototype,"value",2);c([h({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);c([h({reflect:!0})],Dt.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Dt.prototype,"pill",2);c([T("disabled",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleDisabledChange",1);var F1="sl-radio-button";Dt.define("sl-radio-button");F({tagName:F1,elementClass:Dt,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var B1=B`
  ${V}
  ${Vn}

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
`,V1=B`
  ${V}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Jr=class extends D{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=No(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=No(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=No(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=No(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=No(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
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
    `}};Jr.styles=V1;c([P("slot")],Jr.prototype,"defaultSlot",2);c([j()],Jr.prototype,"disableRole",2);c([h()],Jr.prototype,"label",2);function No(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Fe=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this),this.hasSlotController=new Ct(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?kb:e?xb:Pa}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),i=(t=r.find(a=>a.checked))!=null?t:r[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let s=r.indexOf(i)+o;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||(a.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
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

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
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
    `}};Fe.styles=B1;Fe.dependencies={"sl-button-group":Jr};c([P("slot:not([name])")],Fe.prototype,"defaultSlot",2);c([P(".radio-group__validation-input")],Fe.prototype,"validationInput",2);c([j()],Fe.prototype,"hasButtonGroup",2);c([j()],Fe.prototype,"errorMessage",2);c([j()],Fe.prototype,"defaultValue",2);c([h()],Fe.prototype,"label",2);c([h({attribute:"help-text"})],Fe.prototype,"helpText",2);c([h()],Fe.prototype,"name",2);c([h({reflect:!0})],Fe.prototype,"value",2);c([h({reflect:!0})],Fe.prototype,"size",2);c([h({reflect:!0})],Fe.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Fe.prototype,"required",2);c([T("size",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleSizeChange",1);c([T("value")],Fe.prototype,"handleValueChange",1);var U1="sl-radio-group";Fe.define("sl-radio-group");F({tagName:U1,elementClass:Fe,react:R,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var j1="sl-icon-button";ze.define("sl-icon-button");F({tagName:j1,elementClass:ze,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var H1=B`
  ${V}

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
`,ei=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),tn(this.base,{onMove:i=>{this.position=parseFloat(Ce(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Ce(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${U({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ot({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ot({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};ei.styles=H1;ei.scopedElement={"sl-icon":ne};c([P(".image-comparer")],ei.prototype,"base",2);c([P(".image-comparer__handle")],ei.prototype,"handle",2);c([h({type:Number,reflect:!0})],ei.prototype,"position",2);c([T("position",{waitUntilFirstUpdate:!0})],ei.prototype,"handlePositionChange",1);var W1="sl-image-comparer";ei.define("sl-image-comparer");F({tagName:W1,elementClass:ei,react:R,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var K1=B`
  ${V}

  :host {
    display: block;
  }
`,_l=new Map;function q1(e,t="cors"){const r=_l.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async o=>{const n={ok:o.ok,status:o.status,html:await o.text()};return _l.set(e,n),n});return _l.set(e,i),i}var zi=class extends D{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await q1(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};zi.styles=K1;c([h()],zi.prototype,"src",2);c([h()],zi.prototype,"mode",2);c([h({attribute:"allow-scripts",type:Boolean})],zi.prototype,"allowScripts",2);c([T("src")],zi.prototype,"handleSrcChange",1);var Q1="sl-include";zi.define("sl-include");F({tagName:Q1,elementClass:zi,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var Y1=B`
  ${V}
  ${Vn}

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
`,H=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,n=o&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
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
            class=${U({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${xi(this.value)}
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

            ${o?C`
                  <button
                    part="clear-button"
                    class=${U({input__clear:!0,"input__clear--visible":n})}
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
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
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
    `}};H.styles=Y1;H.dependencies={"sl-icon":ne};c([P(".input__control")],H.prototype,"input",2);c([j()],H.prototype,"hasFocus",2);c([h()],H.prototype,"title",2);c([h({reflect:!0})],H.prototype,"type",2);c([h()],H.prototype,"name",2);c([h()],H.prototype,"value",2);c([$i()],H.prototype,"defaultValue",2);c([h({reflect:!0})],H.prototype,"size",2);c([h({type:Boolean,reflect:!0})],H.prototype,"filled",2);c([h({type:Boolean,reflect:!0})],H.prototype,"pill",2);c([h()],H.prototype,"label",2);c([h({attribute:"help-text"})],H.prototype,"helpText",2);c([h({type:Boolean})],H.prototype,"clearable",2);c([h({type:Boolean,reflect:!0})],H.prototype,"disabled",2);c([h()],H.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],H.prototype,"readonly",2);c([h({attribute:"password-toggle",type:Boolean})],H.prototype,"passwordToggle",2);c([h({attribute:"password-visible",type:Boolean})],H.prototype,"passwordVisible",2);c([h({attribute:"no-spin-buttons",type:Boolean})],H.prototype,"noSpinButtons",2);c([h({reflect:!0})],H.prototype,"form",2);c([h({type:Boolean,reflect:!0})],H.prototype,"required",2);c([h()],H.prototype,"pattern",2);c([h({type:Number})],H.prototype,"minlength",2);c([h({type:Number})],H.prototype,"maxlength",2);c([h()],H.prototype,"min",2);c([h()],H.prototype,"max",2);c([h()],H.prototype,"step",2);c([h()],H.prototype,"autocapitalize",2);c([h()],H.prototype,"autocorrect",2);c([h()],H.prototype,"autocomplete",2);c([h({type:Boolean})],H.prototype,"autofocus",2);c([h()],H.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);c([h()],H.prototype,"inputmode",2);c([T("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);c([T("step",{waitUntilFirstUpdate:!0})],H.prototype,"handleStepChange",1);c([T("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var X1="sl-input";H.define("sl-input");F({tagName:X1,elementClass:H,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var G1=B`
  ${V}

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
 */const rn=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(i=o._$AO)==null||i.call(o,t,!1),rn(o,t);return!0},da=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},Qm=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ew(t)}};function Z1(e){this._$AN!==void 0?(da(this),this._$AM=e,Qm(this)):this._$AM=e}function J1(e,t=!1,r=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=r;n<i.length;n++)rn(i[n],!1),da(i[n]);else i!=null&&(rn(i,!1),da(i));else rn(this,e)}const ew=e=>{e.type==rr.CHILD&&(e._$AP??(e._$AP=J1),e._$AQ??(e._$AQ=Z1))};class tw extends Fn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),Qm(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),r&&(rn(this,t),da(this))}setValue(t){if(Um(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rw=()=>new iw;class iw{}const xl=new WeakMap,ow=Rn(class extends tw{render(e){return ue}update(e,[t]){var i;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=(i=e.options)==null?void 0:i.host,this.ot(this.lt=e.element)),ue}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let r=xl.get(t);r===void 0&&(r=new WeakMap,xl.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=xl.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var nw=class{constructor(e,t,r){this.popupRef=rw(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i==null?void 0:i.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0],n=this.localize.dir()==="rtl";if(!o)return;const{left:s,top:a,width:l,height:u}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?s+l:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?s+l:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+u}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const i of t.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var s;const a=(s=t.get(n))!=null?s:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?C`
      <sl-popup
        ${ow(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:C` <slot name="submenu" hidden></slot> `}},Et=class extends D{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new Z(this),this.hasSlotController=new Ct(this,"submenu"),this.submenuController=new nw(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return r1(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${U({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};Et.styles=G1;Et.dependencies={"sl-icon":ne,"sl-popup":ee};c([P("slot:not([name])")],Et.prototype,"defaultSlot",2);c([P(".menu-item")],Et.prototype,"menuItem",2);c([h()],Et.prototype,"type",2);c([h({type:Boolean,reflect:!0})],Et.prototype,"checked",2);c([h()],Et.prototype,"value",2);c([h({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);c([T("checked")],Et.prototype,"handleCheckedChange",1);c([T("disabled")],Et.prototype,"handleDisabledChange",1);c([T("type")],Et.prototype,"handleTypeChange",1);var sw="sl-menu-item";Et.define("sl-menu-item");F({tagName:sw,elementClass:Et,react:R,events:{},displayName:"SlMenuItem"});var aw=B`
  ${V}

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
`,Oa=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(o=>{var n;return t.includes(((n=o==null?void 0:o.getAttribute)==null?void 0:n.call(o,"role"))||"")});if(!r)return;const i=r;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Oa.styles=aw;c([P("slot")],Oa.prototype,"defaultSlot",2);var lw="sl-menu";Oa.define("sl-menu");F({tagName:lw,elementClass:Oa,react:R,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var cw=B`
  ${V}

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
`,Wu=class extends D{render(){return C` <slot part="base" class="menu-label"></slot> `}};Wu.styles=cw;var uw="sl-menu-label";Wu.define("sl-menu-label");F({tagName:uw,elementClass:Wu,react:R,events:{},displayName:"SlMenuLabel"});var dw=B`
  ${V}

  :host {
    display: contents;
  }
`,Xt=class extends D{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};Xt.styles=dw;c([h({reflect:!0})],Xt.prototype,"attr",2);c([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xt.prototype,"attrOldValue",2);c([h({attribute:"char-data",type:Boolean,reflect:!0})],Xt.prototype,"charData",2);c([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xt.prototype,"charDataOldValue",2);c([h({attribute:"child-list",type:Boolean,reflect:!0})],Xt.prototype,"childList",2);c([h({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);c([T("disabled")],Xt.prototype,"handleDisabledChange",1);c([T("attr",{waitUntilFirstUpdate:!0}),T("attr-old-value",{waitUntilFirstUpdate:!0}),T("char-data",{waitUntilFirstUpdate:!0}),T("char-data-old-value",{waitUntilFirstUpdate:!0}),T("childList",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleChange",1);var hw="sl-mutation-observer";Xt.define("sl-mutation-observer");F({tagName:hw,elementClass:Xt,react:R,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});function pw(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function fw(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!pw(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function mw(e){var t,r;const i=Pc(e),o=(t=i[0])!=null?t:null,n=(r=i[i.length-1])!=null?r:null;return{start:o,end:n}}function Pc(e){const t=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&fw(i)&&t.push(i);const o=n=>{var s;return((s=n.getRootNode({composed:!0}))==null?void 0:s.host)!==e};i instanceof HTMLSlotElement&&o(i)&&i.assignedElements({flatten:!0}).forEach(n=>{r(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}[...i.children].forEach(o=>r(o))}return r(e),t.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}function*Ym(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Sy(Ym(e.shadowRoot.activeElement))))}function gw(){return[...Ym()].pop()}var Io=[],Xm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r,i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=Pc(this.element),n=gw();let s=o.findIndex(l=>l===n);if(s===-1){this.currentFocus=o[0],(r=this.currentFocus)==null||r.focus({preventScroll:!0});return}const a=this.tabDirection==="forward"?1:-1;s+a>=o.length?s=0:s+a<0?s=o.length-1:s+=a,this.currentFocus=o[s],(i=this.currentFocus)==null||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Io.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Io=Io.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Io[Io.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Pc(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],i=this.tabDirection==="forward"?t:r;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}},vw=B`
  ${V}

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
`,Gt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer"),this.localize=new Z(this),this.modal=new Xm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Jo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),en(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=de(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Jo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ee(this.dialog),Ee(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=de(this,"dialog.show",{dir:this.localize.dir()}),r=de(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ee(this.dialog),Ee(this.overlay)]);const e=de(this,"dialog.hide",{dir:this.localize.dir()}),t=de(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,en(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${U({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":C`
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
    `}};Gt.styles=vw;Gt.dependencies={"sl-icon-button":ze};c([P(".dialog")],Gt.prototype,"dialog",2);c([P(".dialog__panel")],Gt.prototype,"panel",2);c([P(".dialog__overlay")],Gt.prototype,"overlay",2);c([h({type:Boolean,reflect:!0})],Gt.prototype,"open",2);c([h({reflect:!0})],Gt.prototype,"label",2);c([h({attribute:"no-header",type:Boolean,reflect:!0})],Gt.prototype,"noHeader",2);c([T("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);te("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});te("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});te("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});te("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});te("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var yw="sl-dialog";Gt.define("sl-dialog");F({tagName:yw,elementClass:Gt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var bw=B`
  ${V}

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
`,jn=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};jn.styles=bw;c([h({type:Boolean,reflect:!0})],jn.prototype,"vertical",2);c([T("vertical")],jn.prototype,"handleVerticalChange",1);var ww="sl-divider";jn.define("sl-divider");F({tagName:ww,elementClass:jn,react:R,events:{},displayName:"SlDivider"});var _w=B`
  ${V}

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
`;function Mh(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ht=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer"),this.localize=new Z(this),this.modal=new Xm(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Jo(this)))}disconnectedCallback(){super.disconnectedCallback(),en(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=de(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Jo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ee(this.drawer),Ee(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=de(this,`drawer.show${Mh(this.placement)}`,{dir:this.localize.dir()}),r=de(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),en(this)),await Promise.all([Ee(this.drawer),Ee(this.overlay)]);const e=de(this,`drawer.hide${Mh(this.placement)}`,{dir:this.localize.dir()}),t=de(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Jo(this)),this.open&&this.contained&&(this.modal.deactivate(),en(this))}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${U({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":C`
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
    `}};ht.styles=_w;ht.dependencies={"sl-icon-button":ze};c([P(".drawer")],ht.prototype,"drawer",2);c([P(".drawer__panel")],ht.prototype,"panel",2);c([P(".drawer__overlay")],ht.prototype,"overlay",2);c([h({type:Boolean,reflect:!0})],ht.prototype,"open",2);c([h({reflect:!0})],ht.prototype,"label",2);c([h({reflect:!0})],ht.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],ht.prototype,"contained",2);c([h({attribute:"no-header",type:Boolean,reflect:!0})],ht.prototype,"noHeader",2);c([T("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);c([T("contained",{waitUntilFirstUpdate:!0})],ht.prototype,"handleNoModalChange",1);te("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});te("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});te("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});te("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});te("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});te("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});te("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});te("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});te("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});te("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});te("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var xw="sl-drawer";ht.define("sl-drawer");F({tagName:xw,elementClass:ht,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var kw=B`
  ${V}

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
`,Ke=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>mw(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ee(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=de(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ee(this);const{keyframes:e,options:t}=de(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
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
        class=${U({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Ke.styles=kw;Ke.dependencies={"sl-popup":ee};c([P(".dropdown")],Ke.prototype,"popup",2);c([P(".dropdown__trigger")],Ke.prototype,"trigger",2);c([P(".dropdown__panel")],Ke.prototype,"panel",2);c([h({type:Boolean,reflect:!0})],Ke.prototype,"open",2);c([h({reflect:!0})],Ke.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);c([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ke.prototype,"stayOpenOnSelect",2);c([h({attribute:!1})],Ke.prototype,"containingElement",2);c([h({type:Number})],Ke.prototype,"distance",2);c([h({type:Number})],Ke.prototype,"skidding",2);c([h({type:Boolean})],Ke.prototype,"hoist",2);c([T("open",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleOpenChange",1);te("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});te("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Sw="sl-dropdown";Ke.define("sl-dropdown");F({tagName:Sw,elementClass:Ke,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var pt=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return C`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([h()],pt.prototype,"date",2);c([h()],pt.prototype,"weekday",2);c([h()],pt.prototype,"era",2);c([h()],pt.prototype,"year",2);c([h()],pt.prototype,"month",2);c([h()],pt.prototype,"day",2);c([h()],pt.prototype,"hour",2);c([h()],pt.prototype,"minute",2);c([h()],pt.prototype,"second",2);c([h({attribute:"time-zone-name"})],pt.prototype,"timeZoneName",2);c([h({attribute:"time-zone"})],pt.prototype,"timeZone",2);c([h({attribute:"hour-format"})],pt.prototype,"hourFormat",2);var Cw="sl-format-date";pt.define("sl-format-date");F({tagName:Cw,elementClass:pt,react:R,events:{},displayName:"SlFormatDate"});var Hn=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,n=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:o,unitDisplay:this.display})}};c([h({type:Number})],Hn.prototype,"value",2);c([h()],Hn.prototype,"unit",2);c([h()],Hn.prototype,"display",2);var $w="sl-format-bytes";Hn.define("sl-format-bytes");F({tagName:$w,elementClass:Hn,react:R,events:{},displayName:"SlFormatBytes"});var Mt=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([h({type:Number})],Mt.prototype,"value",2);c([h()],Mt.prototype,"type",2);c([h({attribute:"no-grouping",type:Boolean})],Mt.prototype,"noGrouping",2);c([h()],Mt.prototype,"currency",2);c([h({attribute:"currency-display"})],Mt.prototype,"currencyDisplay",2);c([h({attribute:"minimum-integer-digits",type:Number})],Mt.prototype,"minimumIntegerDigits",2);c([h({attribute:"minimum-fraction-digits",type:Number})],Mt.prototype,"minimumFractionDigits",2);c([h({attribute:"maximum-fraction-digits",type:Number})],Mt.prototype,"maximumFractionDigits",2);c([h({attribute:"minimum-significant-digits",type:Number})],Mt.prototype,"minimumSignificantDigits",2);c([h({attribute:"maximum-significant-digits",type:Number})],Mt.prototype,"maximumSignificantDigits",2);var Ew="sl-format-number";Mt.define("sl-format-number");F({tagName:Ew,elementClass:Mt,react:R,events:{},displayName:"SlFormatNumber"});var zw="sl-icon";ne.define("sl-icon");F({tagName:zw,elementClass:ne,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var Aw="sl-button-group";Jr.define("sl-button-group");F({tagName:Aw,elementClass:Jr,react:R,events:{},displayName:"SlButtonGroup"});var Tw=B`
  ${V}

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
`,Ku=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${U({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ku.styles=Tw;var Lw="sl-card";Ku.define("sl-card");F({tagName:Lw,elementClass:Ku,react:R,events:{},displayName:"SlCard"});var Pw=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Nw=B`
  ${V}

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
`,Iw=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const r=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(r.setPointerCapture(t.pointerId),this.handleDragStart()):r.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const r=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,n=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:i,behavior:"auto"}),t.scrollTo({left:o,top:n,behavior:Hu()?"auto":"smooth"}),requestAnimationFrame(async()=>{(r!==o||i!==n)&&await tt(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ow(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Dw(e,t,r=1){const i=t===void 0?0:e;t??(t=e);for(let o=i;r>0?o<t:t<o;o+=r)yield o}var Mw=(e,t)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...i)},t)}},Rh=(e,t,r)=>{const i=e[t];e[t]=function(...o){i.call(this,...o),r.call(this,i,...o)}},Rw="onscrollend"in window;if(!Rw){const e=new Set,t=new WeakMap,r=o=>{e.add(o.pointerId)},i=o=>{e.delete(o.pointerId)};document.addEventListener("pointerdown",r),document.addEventListener("pointerup",i),Rh(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scroll")return;const s=Mw(()=>{e.size?s():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),Rh(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scroll")return;const s=t.get(this);s&&o.call(this,"scroll",s,{passive:!0})})}var Se=class extends D{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Pw(this,()=>this.next()),this.scrollController=new Iw(this),this.intersectionObserverEntries=new Map,this.localize=new Z(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const i=r.target;i.toggleAttribute("inert",!r.isIntersecting),i.classList.toggle("--in-view",r.isIntersecting),i.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:i}=this,o=i?e/r:(e-t)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",n=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),n&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var s;const a=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"auto")}else if(r){const i=e.indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,r)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",r+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),i=e.slice(0,t);r.reverse().forEach((o,n)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(e.length-n-1)),this.prepend(s)}),i.forEach((o,n)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(n)),this.append(s)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,i)=>{(i+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i,scrollContainer:o}=this,n=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!n.length)return;const a=i?(e+n.length)%n.length:Ce(e,0,n.length-1);this.activeSlide=a;const l=Ce(e+(i?r:0),0,s.length-1),u=s[l],f=o.getBoundingClientRect(),d=u.getBoundingClientRect();o.scrollTo({left:d.left-f.left+o.scrollLeft,top:d.top-f.top+o.scrollTop,behavior:Hu()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),n=this.canScrollNext(),s=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${U({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${U({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
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
                  class=${U({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!n})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ow(Dw(r),a=>{const l=a===i;return C`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${U({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Se.styles=Nw;Se.dependencies={"sl-icon":ne};c([h({type:Boolean,reflect:!0})],Se.prototype,"loop",2);c([h({type:Boolean,reflect:!0})],Se.prototype,"navigation",2);c([h({type:Boolean,reflect:!0})],Se.prototype,"pagination",2);c([h({type:Boolean,reflect:!0})],Se.prototype,"autoplay",2);c([h({type:Number,attribute:"autoplay-interval"})],Se.prototype,"autoplayInterval",2);c([h({type:Number,attribute:"slides-per-page"})],Se.prototype,"slidesPerPage",2);c([h({type:Number,attribute:"slides-per-move"})],Se.prototype,"slidesPerMove",2);c([h()],Se.prototype,"orientation",2);c([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Se.prototype,"mouseDragging",2);c([P(".carousel__slides")],Se.prototype,"scrollContainer",2);c([P(".carousel__pagination")],Se.prototype,"paginationContainer",2);c([j()],Se.prototype,"activeSlide",2);c([T("loop",{waitUntilFirstUpdate:!0}),T("slidesPerPage",{waitUntilFirstUpdate:!0})],Se.prototype,"initializeSlides",1);c([T("activeSlide")],Se.prototype,"handelSlideChange",1);c([T("slidesPerMove")],Se.prototype,"updateSlidesSnap",1);c([T("autoplay")],Se.prototype,"handleAutoplayChange",1);c([T("mouseDragging")],Se.prototype,"handleMouseDraggingChange",1);var Fw="sl-carousel";Se.define("sl-carousel");var Bw=F({tagName:Fw,elementClass:Se,react:R,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"}),Vw=Bw,Uw=B`
  ${V}

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
`,qu=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return C` <slot></slot> `}};qu.styles=Uw;var jw="sl-carousel-item";qu.define("sl-carousel-item");var Hw=F({tagName:jw,elementClass:qu,react:R,events:{},displayName:"SlCarouselItem"}),Fh=Hw,Ww="sl-checkbox";Ne.define("sl-checkbox");F({tagName:Ww,elementClass:Ne,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Kw=B`
  ${V}

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
`,J=class extends D{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ct(this,"[default]","prefix","suffix"),this.localize=new Z(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Pa}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ua`a`:ua`button`;return Zo`
      <${t}
        part="base"
        class=${U({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Zo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Zo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};J.styles=qm;J.dependencies={"sl-icon":ne,"sl-spinner":Bn};c([P(".button")],J.prototype,"button",2);c([j()],J.prototype,"hasFocus",2);c([j()],J.prototype,"invalid",2);c([h()],J.prototype,"title",2);c([h({reflect:!0})],J.prototype,"variant",2);c([h({reflect:!0})],J.prototype,"size",2);c([h({type:Boolean,reflect:!0})],J.prototype,"caret",2);c([h({type:Boolean,reflect:!0})],J.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],J.prototype,"loading",2);c([h({type:Boolean,reflect:!0})],J.prototype,"outline",2);c([h({type:Boolean,reflect:!0})],J.prototype,"pill",2);c([h({type:Boolean,reflect:!0})],J.prototype,"circle",2);c([h()],J.prototype,"type",2);c([h()],J.prototype,"name",2);c([h()],J.prototype,"value",2);c([h()],J.prototype,"href",2);c([h()],J.prototype,"target",2);c([h()],J.prototype,"rel",2);c([h()],J.prototype,"download",2);c([h()],J.prototype,"form",2);c([h({attribute:"formaction"})],J.prototype,"formAction",2);c([h({attribute:"formenctype"})],J.prototype,"formEnctype",2);c([h({attribute:"formmethod"})],J.prototype,"formMethod",2);c([h({attribute:"formnovalidate",type:Boolean})],J.prototype,"formNoValidate",2);c([h({attribute:"formtarget"})],J.prototype,"formTarget",2);c([T("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);function je(e,t){qw(e)&&(e="100%");const r=Qw(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function fs(e){return Math.min(1,Math.max(0,e))}function qw(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Qw(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Gm(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ms(e){return Number(e)<=1?`${Number(e)*100}%`:e}function hi(e){return e.length===1?"0"+e:String(e)}function Yw(e,t,r){return{r:je(e,255)*255,g:je(t,255)*255,b:je(r,255)*255}}function Bh(e,t,r){e=je(e,255),t=je(t,255),r=je(r,255);const i=Math.max(e,t,r),o=Math.min(e,t,r);let n=0,s=0;const a=(i+o)/2;if(i===o)s=0,n=0;else{const l=i-o;switch(s=a>.5?l/(2-i-o):l/(i+o),i){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4;break}n/=6}return{h:n,s,l:a}}function kl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Xw(e,t,r){let i,o,n;if(e=je(e,360),t=je(t,100),r=je(r,100),t===0)o=r,n=r,i=r;else{const s=r<.5?r*(1+t):r+t-r*t,a=2*r-s;i=kl(a,s,e+1/3),o=kl(a,s,e),n=kl(a,s,e-1/3)}return{r:i*255,g:o*255,b:n*255}}function Vh(e,t,r){e=je(e,255),t=je(t,255),r=je(r,255);const i=Math.max(e,t,r),o=Math.min(e,t,r);let n=0;const s=i,a=i-o,l=i===0?0:a/i;if(i===o)n=0;else{switch(i){case e:n=(t-r)/a+(t<r?6:0);break;case t:n=(r-e)/a+2;break;case r:n=(e-t)/a+4;break}n/=6}return{h:n,s:l,v:s}}function Gw(e,t,r){e=je(e,360)*6,t=je(t,100),r=je(r,100);const i=Math.floor(e),o=e-i,n=r*(1-t),s=r*(1-o*t),a=r*(1-(1-o)*t),l=i%6,u=[r,s,n,n,a,r][l],f=[a,r,r,s,n,n][l],d=[n,n,a,r,r,s][l];return{r:u*255,g:f*255,b:d*255}}function Uh(e,t,r,i){const o=[hi(Math.round(e).toString(16)),hi(Math.round(t).toString(16)),hi(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Zw(e,t,r,i,o){const n=[hi(Math.round(e).toString(16)),hi(Math.round(t).toString(16)),hi(Math.round(r).toString(16)),hi(Jw(i))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function Jw(e){return Math.round(parseFloat(e)*255).toString(16)}function jh(e){return mt(e)/255}function mt(e){return parseInt(e,16)}function e_(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Nc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function t_(e){let t={r:0,g:0,b:0},r=1,i=null,o=null,n=null,s=!1,a=!1;return typeof e=="string"&&(e=o_(e)),typeof e=="object"&&(ar(e.r)&&ar(e.g)&&ar(e.b)?(t=Yw(e.r,e.g,e.b),s=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):ar(e.h)&&ar(e.s)&&ar(e.v)?(i=ms(e.s),o=ms(e.v),t=Gw(e.h,i,o),s=!0,a="hsv"):ar(e.h)&&ar(e.s)&&ar(e.l)&&(i=ms(e.s),n=ms(e.l),t=Xw(e.h,i,n),s=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Gm(r),{ok:s,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const r_="[-\\+]?\\d+%?",i_="[-\\+]?\\d*\\.\\d+%?",Nr="(?:"+i_+")|(?:"+r_+")",Sl="[\\s|\\(]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")\\s*\\)?",Cl="[\\s|\\(]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")\\s*\\)?",Vt={CSS_UNIT:new RegExp(Nr),rgb:new RegExp("rgb"+Sl),rgba:new RegExp("rgba"+Cl),hsl:new RegExp("hsl"+Sl),hsla:new RegExp("hsla"+Cl),hsv:new RegExp("hsv"+Sl),hsva:new RegExp("hsva"+Cl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function o_(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Nc[e])e=Nc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Vt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Vt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Vt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Vt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Vt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Vt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Vt.hex8.exec(e),r?{r:mt(r[1]),g:mt(r[2]),b:mt(r[3]),a:jh(r[4]),format:t?"name":"hex8"}:(r=Vt.hex6.exec(e),r?{r:mt(r[1]),g:mt(r[2]),b:mt(r[3]),format:t?"name":"hex"}:(r=Vt.hex4.exec(e),r?{r:mt(r[1]+r[1]),g:mt(r[2]+r[2]),b:mt(r[3]+r[3]),a:jh(r[4]+r[4]),format:t?"name":"hex8"}:(r=Vt.hex3.exec(e),r?{r:mt(r[1]+r[1]),g:mt(r[2]+r[2]),b:mt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function ar(e){return!!Vt.CSS_UNIT.exec(String(e))}class ge{constructor(t="",r={}){if(t instanceof ge)return t;typeof t=="number"&&(t=e_(t)),this.originalInput=t;const i=t_(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,i,o;const n=t.r/255,s=t.g/255,a=t.b/255;return n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=Gm(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Vh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Vh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${i}%, ${o}%)`:`hsva(${r}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=Bh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Bh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${i}%, ${o}%)`:`hsla(${r}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return Uh(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Zw(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${i})`:`rgba(${t}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(je(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(je(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Uh(this.r,this.g,this.b,!1);for(const[r,i]of Object.entries(Nc))if(t===i)return r;return!1}toString(t){const r=!!t;t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!r&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ge(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=fs(r.l),new ge(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ge(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=fs(r.l),new ge(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=fs(r.s),new ge(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=fs(r.s),new ge(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new ge(r)}mix(t,r=50){const i=this.toRgb(),o=new ge(t).toRgb(),n=r/100,s={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new ge(s)}analogous(t=6,r=30){const i=this.toHsl(),o=360/r,n=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,n.push(new ge(i));return n}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ge(t)}monochromatic(t=6){const r=this.toHsv(),{h:i}=r,{s:o}=r;let{v:n}=r;const s=[],a=1/t;for(;t--;)s.push(new ge({h:i,s:o,v:n})),n=(n+a)%1;return s}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ge({h:(r+72)%360,s:t.s,l:t.l}),new ge({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),i=new ge(t).toRgb(),o=r.a+i.a*(1-r.a);return new ge({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:i}=r,o=[this],n=360/t;for(let s=1;s<t;s++)o.push(new ge({h:(i+s*n)%360,s:r.s,l:r.l}));return o}equals(t){return this.toRgbString()===new ge(t).toRgbString()}}var Hh="EyeDropper"in window,Y=class extends D{constructor(){super(),this.formControlController=new xr(this),this.isSafeValue=!1,this.localize=new Z(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),tn(t,{onMove:s=>{this.alpha=Ce(s/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),tn(t,{onMove:s=>{this.hue=Ce(s/i*360,0,360),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,tn(t,{onMove:(a,l)=>{this.saturation=Ce(a/i*100,0,100),this.brightness=Ce(100-l/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ce(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ce(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ce(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ce(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ce(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ce(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ce(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ce(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ge(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=t.toRgb(),n=t.toHexString(),s=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Hh)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const o=new ge(`hsva(${e}, ${t}, ${r}, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=C`
      <div
        part="base"
        class=${U({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ot({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${U({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ot({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${ot({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ot({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ot({left:`${this.alpha}%`})}
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
            style=${ot({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":C`
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
            ${Hh?C`
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

        ${r.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{const n=this.parseColor(o);return n?C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${M(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(n.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ot({backgroundColor:n.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:C`
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
          class=${U({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ot({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};Y.styles=Kw;Y.dependencies={"sl-button-group":Jr,"sl-button":J,"sl-dropdown":Ke,"sl-icon":ne,"sl-input":H,"sl-visually-hidden":Na};c([P('[part~="base"]')],Y.prototype,"base",2);c([P('[part~="input"]')],Y.prototype,"input",2);c([P(".color-dropdown")],Y.prototype,"dropdown",2);c([P('[part~="preview"]')],Y.prototype,"previewButton",2);c([P('[part~="trigger"]')],Y.prototype,"trigger",2);c([j()],Y.prototype,"hasFocus",2);c([j()],Y.prototype,"isDraggingGridHandle",2);c([j()],Y.prototype,"isEmpty",2);c([j()],Y.prototype,"inputValue",2);c([j()],Y.prototype,"hue",2);c([j()],Y.prototype,"saturation",2);c([j()],Y.prototype,"brightness",2);c([j()],Y.prototype,"alpha",2);c([h()],Y.prototype,"value",2);c([$i()],Y.prototype,"defaultValue",2);c([h()],Y.prototype,"label",2);c([h()],Y.prototype,"format",2);c([h({type:Boolean,reflect:!0})],Y.prototype,"inline",2);c([h({reflect:!0})],Y.prototype,"size",2);c([h({attribute:"no-format-toggle",type:Boolean})],Y.prototype,"noFormatToggle",2);c([h()],Y.prototype,"name",2);c([h({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);c([h({type:Boolean})],Y.prototype,"hoist",2);c([h({type:Boolean})],Y.prototype,"opacity",2);c([h({type:Boolean})],Y.prototype,"uppercase",2);c([h()],Y.prototype,"swatches",2);c([h({reflect:!0})],Y.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Y.prototype,"required",2);c([T("format",{waitUntilFirstUpdate:!0})],Y.prototype,"handleFormatChange",1);c([T("opacity",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpacityChange",1);c([T("value")],Y.prototype,"handleValueChange",1);var n_="sl-color-picker";Y.define("sl-color-picker");F({tagName:n_,elementClass:Y,react:R,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var s_=B`
  ${V}

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
`,Ie=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,n="";r?[o,n]=this.from.trim().split("."):i&&([o,n]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(o):null;s?i?e=s.getAttribute(n)||"":r?e=s[n]||"":e=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,n=de(this,"copy.in",{dir:"ltr"}),s=de(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:i,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await o.animate(s.keyframes,s.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${U({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Ie.styles=s_;Ie.dependencies={"sl-icon":ne,"sl-tooltip":Pe};c([P('slot[name="copy-icon"]')],Ie.prototype,"copyIcon",2);c([P('slot[name="success-icon"]')],Ie.prototype,"successIcon",2);c([P('slot[name="error-icon"]')],Ie.prototype,"errorIcon",2);c([P("sl-tooltip")],Ie.prototype,"tooltip",2);c([j()],Ie.prototype,"isCopying",2);c([j()],Ie.prototype,"status",2);c([h()],Ie.prototype,"value",2);c([h()],Ie.prototype,"from",2);c([h({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);c([h({attribute:"copy-label"})],Ie.prototype,"copyLabel",2);c([h({attribute:"success-label"})],Ie.prototype,"successLabel",2);c([h({attribute:"error-label"})],Ie.prototype,"errorLabel",2);c([h({attribute:"feedback-duration",type:Number})],Ie.prototype,"feedbackDuration",2);c([h({attribute:"tooltip-placement"})],Ie.prototype,"tooltipPlacement",2);c([h({type:Boolean})],Ie.prototype,"hoist",2);te("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});te("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var a_="sl-copy-button";Ie.define("sl-copy-button");F({tagName:a_,elementClass:Ie,react:R,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var l_=B`
  ${V}

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
`,Rt=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ee(this.body);const{keyframes:t,options:r}=de(this,"details.show",{dir:this.localize.dir()});await be(this.body,ca(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ee(this.body);const{keyframes:t,options:r}=de(this,"details.hide",{dir:this.localize.dir()});await be(this.body,ca(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,tt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,tt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${U({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};Rt.styles=l_;Rt.dependencies={"sl-icon":ne};c([P(".details")],Rt.prototype,"details",2);c([P(".details__header")],Rt.prototype,"header",2);c([P(".details__body")],Rt.prototype,"body",2);c([P(".details__expand-icon-slot")],Rt.prototype,"expandIconSlot",2);c([h({type:Boolean,reflect:!0})],Rt.prototype,"open",2);c([h()],Rt.prototype,"summary",2);c([h({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);c([T("open",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleOpenChange",1);te("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});te("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var c_="sl-details";Rt.define("sl-details");F({tagName:c_,elementClass:Rt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var u_=B`
  ${V}

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
`,Li=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Zt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"icon","suffix"),this.localize=new Z(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ee(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=de(this,"alert.show",{dir:this.localize.dir()});await be(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Ee(this.base);const{keyframes:e,options:t}=de(this,"alert.hide",{dir:this.localize.dir()});await be(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}async toast(){return new Promise(e=>{Li.parentElement===null&&document.body.append(Li),Li.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Li.removeChild(this),e(),Li.querySelector("sl-alert")===null&&Li.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${U({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?C`
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
    `}};Zt.styles=u_;Zt.dependencies={"sl-icon-button":ze};c([P('[part~="base"]')],Zt.prototype,"base",2);c([h({type:Boolean,reflect:!0})],Zt.prototype,"open",2);c([h({type:Boolean,reflect:!0})],Zt.prototype,"closable",2);c([h({reflect:!0})],Zt.prototype,"variant",2);c([h({type:Number})],Zt.prototype,"duration",2);c([T("open",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleOpenChange",1);c([T("duration")],Zt.prototype,"handleDurationChange",1);te("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});te("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var d_="sl-alert";Zt.define("sl-alert");F({tagName:d_,elementClass:Zt,react:R,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var h_=B`
  ${V}

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
`,Ft=class extends D{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
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

        ${this.isLoaded?C`
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
    `}};Ft.styles=h_;Ft.dependencies={"sl-icon":ne};c([P(".animated-image__animated")],Ft.prototype,"animatedImage",2);c([j()],Ft.prototype,"frozenFrame",2);c([j()],Ft.prototype,"isLoaded",2);c([h()],Ft.prototype,"src",2);c([h()],Ft.prototype,"alt",2);c([h({type:Boolean,reflect:!0})],Ft.prototype,"play",2);c([T("play",{waitUntilFirstUpdate:!0})],Ft.prototype,"handlePlayChange",1);c([T("src")],Ft.prototype,"handleSrcChange",1);var p_="sl-animated-image";Ft.define("sl-animated-image");F({tagName:p_,elementClass:Ft,react:R,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var f_=B`
  ${V}

  :host {
    display: contents;
  }
`;const m_=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],g_=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],v_=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],y_=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],b_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],w_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],__=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],x_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],k_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],S_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],C_=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],$_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],E_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z_=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],A_=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],T_=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],L_=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],P_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],N_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],I_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],O_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],D_=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],M_=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],R_=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],F_=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],B_=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],V_=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],U_=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],j_=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],H_=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],W_=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],K_=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],q_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Q_=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Y_=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],X_=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],G_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z_=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],J_=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ex=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tx=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rx=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ix=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ox=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nx=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],sx=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],ax=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],lx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],cx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],ux=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],dx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],hx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],px=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],fx=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],mx=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],gx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],vx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],yx=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],bx=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],wx=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],_x=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],xx=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],kx=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sx=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cx=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],$x=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ex=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zx=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ax=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Tx=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Lx=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Px=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Nx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Ix=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ox=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Dx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Mx=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rx=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fx=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bx=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Ux=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],jx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Hx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Wx=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Kx=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],qx=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Yx=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Xx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ek=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],tk=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],rk=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ik=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],ok=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},nk=Object.freeze(Object.defineProperty({__proto__:null,backInDown:z_,backInLeft:A_,backInRight:T_,backInUp:L_,backOutDown:P_,backOutLeft:N_,backOutRight:I_,backOutUp:O_,bounce:m_,bounceIn:D_,bounceInDown:M_,bounceInLeft:R_,bounceInRight:F_,bounceInUp:B_,bounceOut:V_,bounceOutDown:U_,bounceOutLeft:j_,bounceOutRight:H_,bounceOutUp:W_,easings:Zm,fadeIn:K_,fadeInBottomLeft:q_,fadeInBottomRight:Q_,fadeInDown:Y_,fadeInDownBig:X_,fadeInLeft:G_,fadeInLeftBig:Z_,fadeInRight:J_,fadeInRightBig:ex,fadeInTopLeft:tx,fadeInTopRight:rx,fadeInUp:ix,fadeInUpBig:ox,fadeOut:nx,fadeOutBottomLeft:sx,fadeOutBottomRight:ax,fadeOutDown:lx,fadeOutDownBig:cx,fadeOutLeft:ux,fadeOutLeftBig:dx,fadeOutRight:hx,fadeOutRightBig:px,fadeOutTopLeft:fx,fadeOutTopRight:mx,fadeOutUp:gx,fadeOutUpBig:vx,flash:g_,flip:yx,flipInX:bx,flipInY:wx,flipOutX:_x,flipOutY:xx,headShake:v_,heartBeat:y_,hinge:Wx,jackInTheBox:Kx,jello:b_,lightSpeedInLeft:kx,lightSpeedInRight:Sx,lightSpeedOutLeft:Cx,lightSpeedOutRight:$x,pulse:w_,rollIn:qx,rollOut:Qx,rotateIn:Ex,rotateInDownLeft:zx,rotateInDownRight:Ax,rotateInUpLeft:Tx,rotateInUpRight:Lx,rotateOut:Px,rotateOutDownLeft:Nx,rotateOutDownRight:Ix,rotateOutUpLeft:Ox,rotateOutUpRight:Dx,rubberBand:__,shake:x_,shakeX:k_,shakeY:S_,slideInDown:Mx,slideInLeft:Rx,slideInRight:Fx,slideInUp:Bx,slideOutDown:Vx,slideOutLeft:Ux,slideOutRight:jx,slideOutUp:Hx,swing:C_,tada:$_,wobble:E_,zoomIn:Yx,zoomInDown:Xx,zoomInLeft:Gx,zoomInRight:Zx,zoomInUp:Jx,zoomOut:ek,zoomOutDown:tk,zoomOutLeft:rk,zoomOutRight:ik,zoomOutUp:ok},Symbol.toStringTag,{value:"Module"}));var Oe=class extends D{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Zm[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:nk[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!i?!1:(this.destroyAnimation(),this.animation=n.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Oe.styles=f_;c([Ey("slot")],Oe.prototype,"defaultSlot",2);c([h()],Oe.prototype,"name",2);c([h({type:Boolean,reflect:!0})],Oe.prototype,"play",2);c([h({type:Number})],Oe.prototype,"delay",2);c([h()],Oe.prototype,"direction",2);c([h({type:Number})],Oe.prototype,"duration",2);c([h()],Oe.prototype,"easing",2);c([h({attribute:"end-delay",type:Number})],Oe.prototype,"endDelay",2);c([h()],Oe.prototype,"fill",2);c([h({type:Number})],Oe.prototype,"iterations",2);c([h({attribute:"iteration-start",type:Number})],Oe.prototype,"iterationStart",2);c([h({attribute:!1})],Oe.prototype,"keyframes",2);c([h({attribute:"playback-rate",type:Number})],Oe.prototype,"playbackRate",2);c([T(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Oe.prototype,"handleAnimationChange",1);c([T("play")],Oe.prototype,"handlePlayChange",1);c([T("playbackRate")],Oe.prototype,"handlePlaybackRateChange",1);var sk="sl-animation";Oe.define("sl-animation");var ak=F({tagName:sk,elementClass:Oe,react:R,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),Jm=ak,lk=B`
  ${V}

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
`,yo=class extends D{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <span
        part="base"
        class=${U({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};yo.styles=lk;c([h({reflect:!0})],yo.prototype,"variant",2);c([h({type:Boolean,reflect:!0})],yo.prototype,"pill",2);c([h({type:Boolean,reflect:!0})],yo.prototype,"pulse",2);var ck="sl-badge";yo.define("sl-badge");F({tagName:ck,elementClass:yo,react:R,events:{},displayName:"SlBadge"});var uk=B`
  ${V}

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
`,Jt=class extends D{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=C``;return this.initials?t=C`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,C`
      <div
        part="base"
        class=${U({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Jt.styles=uk;Jt.dependencies={"sl-icon":ne};c([j()],Jt.prototype,"hasError",2);c([h()],Jt.prototype,"image",2);c([h()],Jt.prototype,"label",2);c([h()],Jt.prototype,"initials",2);c([h()],Jt.prototype,"loading",2);c([h({reflect:!0})],Jt.prototype,"shape",2);c([T("image")],Jt.prototype,"handleImageChange",1);var dk="sl-avatar";Jt.define("sl-avatar");F({tagName:dk,elementClass:Jt,react:R,events:{},displayName:"SlAvatar"});var hk=B`
  ${V}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ai=class extends D{constructor(){super(...arguments),this.localize=new Z(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ai.styles=hk;Ai.dependencies={"sl-icon":ne};c([P("slot")],Ai.prototype,"defaultSlot",2);c([P('slot[name="separator"]')],Ai.prototype,"separatorSlot",2);c([h()],Ai.prototype,"label",2);var pk="sl-breadcrumb";Ai.define("sl-breadcrumb");F({tagName:pk,elementClass:Ai,react:R,events:{},displayName:"SlBreadcrumb"});var fk=B`
  ${V}

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
`,bo=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return C`
      <div
        part="base"
        class=${U({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${M(this.target?this.target:void 0)}"
                rel=${M(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:C`
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
    `}};bo.styles=fk;c([h()],bo.prototype,"href",2);c([h()],bo.prototype,"target",2);c([h()],bo.prototype,"rel",2);var mk="sl-breadcrumb-item";bo.define("sl-breadcrumb-item");F({tagName:mk,elementClass:bo,react:R,events:{},displayName:"SlBreadcrumbItem"});var gk="sl-button";J.define("sl-button");F({tagName:gk,elementClass:J,react:R,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});const on=/^[a-z0-9]+(-[a-z0-9]+)*$/,Da=(e,t,r,i="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:i,prefix:l,name:a};return t&&!Ns(u)?null:u}const n=o[0],s=n.split("-");if(s.length>1){const a={provider:i,prefix:s.shift(),name:s.join("-")};return t&&!Ns(a)?null:a}if(r&&i===""){const a={provider:i,prefix:"",name:n};return t&&!Ns(a,r)?null:a}return null},Ns=(e,t)=>e?!!((e.provider===""||e.provider.match(on))&&(t&&e.prefix===""||e.prefix.match(on))&&e.name.match(on)):!1,eg=Object.freeze({left:0,top:0,width:16,height:16}),ha=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Qu=Object.freeze({...eg,...ha}),Ic=Object.freeze({...Qu,body:"",hidden:!1});function vk(e,t){const r={};!e.hFlip!=!t.hFlip&&(r.hFlip=!0),!e.vFlip!=!t.vFlip&&(r.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(r.rotate=i),r}function Wh(e,t){const r=vk(e,t);for(const i in Ic)i in ha?i in e&&!(i in r)&&(r[i]=ha[i]):i in t?r[i]=t[i]:i in e&&(r[i]=e[i]);return r}function yk(e,t){const r=e.icons,i=e.aliases||Object.create(null),o=Object.create(null);function n(s){if(r[s])return o[s]=[];if(!(s in o)){o[s]=null;const a=i[s]&&i[s].parent,l=a&&n(a);l&&(o[s]=[a].concat(l))}return o[s]}return(t||Object.keys(r).concat(Object.keys(i))).forEach(n),o}function bk(e,t,r){const i=e.icons,o=e.aliases||Object.create(null);let n={};function s(a){n=Wh(i[a]||o[a],n)}return s(t),r.forEach(s),Wh(e,n)}function tg(e,t){const r=[];if(typeof e!="object"||typeof e.icons!="object")return r;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),r.push(o)});const i=yk(e);for(const o in i){const n=i[o];n&&(t(o,bk(e,o,n)),r.push(o))}return r}const wk={provider:"",aliases:{},not_found:{},...eg};function $l(e,t){for(const r in t)if(r in e&&typeof e[r]!=typeof t[r])return!1;return!0}function rg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!$l(e,wk))return null;const r=t.icons;for(const o in r){const n=r[o];if(!o.match(on)||typeof n.body!="string"||!$l(n,Ic))return null}const i=t.aliases||Object.create(null);for(const o in i){const n=i[o],s=n.parent;if(!o.match(on)||typeof s!="string"||!r[s]&&!i[s]||!$l(n,Ic))return null}return t}const Kh=Object.create(null);function _k(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function ki(e,t){const r=Kh[e]||(Kh[e]=Object.create(null));return r[t]||(r[t]=_k(e,t))}function Yu(e,t){return rg(t)?tg(t,(r,i)=>{i?e.icons[r]=i:e.missing.add(r)}):[]}function xk(e,t,r){try{if(typeof r.body=="string")return e.icons[t]={...r},!0}catch{}return!1}let En=!1;function ig(e){return typeof e=="boolean"&&(En=e),En}function kk(e){const t=typeof e=="string"?Da(e,!0,En):e;if(t){const r=ki(t.provider,t.prefix),i=t.name;return r.icons[i]||(r.missing.has(i)?null:void 0)}}function Sk(e,t){const r=Da(e,!0,En);if(!r)return!1;const i=ki(r.provider,r.prefix);return xk(i,r.name,t)}function Ck(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),En&&!t&&!e.prefix){let o=!1;return rg(e)&&(e.prefix="",tg(e,(n,s)=>{s&&Sk(n,s)&&(o=!0)})),o}const r=e.prefix;if(!Ns({provider:t,prefix:r,name:"a"}))return!1;const i=ki(t,r);return!!Yu(i,e)}const og=Object.freeze({width:null,height:null}),ng=Object.freeze({...og,...ha}),$k=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ek=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function qh(e,t,r){if(t===1)return e;if(r=r||100,typeof e=="number")return Math.ceil(e*t*r)/r;if(typeof e!="string")return e;const i=e.split($k);if(i===null||!i.length)return e;const o=[];let n=i.shift(),s=Ek.test(n);for(;;){if(s){const a=parseFloat(n);isNaN(a)?o.push(n):o.push(Math.ceil(a*t*r)/r)}else o.push(n);if(n=i.shift(),n===void 0)return o.join("");s=!s}}const zk=e=>e==="unset"||e==="undefined"||e==="none";function Ak(e,t){const r={...Qu,...e},i={...ng,...t},o={left:r.left,top:r.top,width:r.width,height:r.height};let n=r.body;[r,i].forEach(b=>{const _=[],E=b.hFlip,y=b.vFlip;let m=b.rotate;E?y?m+=2:(_.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),_.push("scale(-1 1)"),o.top=o.left=0):y&&(_.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),_.push("scale(1 -1)"),o.top=o.left=0);let v;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:v=o.height/2+o.top,_.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:_.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,_.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}m%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),_.length&&(n='<g transform="'+_.join(" ")+'">'+n+"</g>")});const s=i.width,a=i.height,l=o.width,u=o.height;let f,d;s===null?(d=a===null?"1em":a==="auto"?u:a,f=qh(d,l/u)):(f=s==="auto"?l:s,d=a===null?qh(f,u/l):a==="auto"?u:a);const p={},g=(b,_)=>{zk(_)||(p[b]=_.toString())};return g("width",f),g("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:p,body:n}}const Tk=/\sid="(\S+)"/g,Lk="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Pk=0;function Nk(e,t=Lk){const r=[];let i;for(;i=Tk.exec(e);)r.push(i[1]);if(!r.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(n=>{const s=typeof t=="function"?t(n):t+(Pk++).toString(),a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Oc=Object.create(null);function Ik(e,t){Oc[e]=t}function Dc(e){return Oc[e]||Oc[""]}function Xu(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Gu=Object.create(null),Oo=["https://api.simplesvg.com","https://api.unisvg.com"],Is=[];for(;Oo.length>0;)Oo.length===1||Math.random()>.5?Is.push(Oo.shift()):Is.push(Oo.pop());Gu[""]=Xu({resources:["https://api.iconify.design"].concat(Is)});function Ok(e,t){const r=Xu(t);return r===null?!1:(Gu[e]=r,!0)}function Zu(e){return Gu[e]}const Dk=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Qh=Dk();function Mk(e,t){const r=Zu(e);if(!r)return 0;let i;if(!r.maxURL)i=0;else{let o=0;r.resources.forEach(s=>{o=Math.max(o,s.length)});const n=t+".json?icons=";i=r.maxURL-o-r.path.length-n.length}return i}function Rk(e){return e===404}const Fk=(e,t,r)=>{const i=[],o=Mk(e,t),n="icons";let s={type:n,provider:e,prefix:t,icons:[]},a=0;return r.forEach((l,u)=>{a+=l.length+1,a>=o&&u>0&&(i.push(s),s={type:n,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),i.push(s),i};function Bk(e){if(typeof e=="string"){const t=Zu(e);if(t)return t.path}return"/"}const Vk=(e,t,r)=>{if(!Qh){r("abort",424);return}let i=Bk(t.provider);switch(t.type){case"icons":{const n=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});i+=n+".json?"+l.toString();break}case"custom":{const n=t.uri;i+=n.slice(0,1)==="/"?n.slice(1):n;break}default:r("abort",400);return}let o=503;Qh(e+i).then(n=>{const s=n.status;if(s!==200){setTimeout(()=>{r(Rk(s)?"abort":"next",s)});return}return o=501,n.json()}).then(n=>{if(typeof n!="object"||n===null){setTimeout(()=>{n===404?r("abort",n):r("next",o)});return}setTimeout(()=>{r("success",n)})}).catch(()=>{r("next",o)})},Uk={prepare:Fk,send:Vk};function jk(e){const t={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((o,n)=>o.provider!==n.provider?o.provider.localeCompare(n.provider):o.prefix!==n.prefix?o.prefix.localeCompare(n.prefix):o.name.localeCompare(n.name));let i={provider:"",prefix:"",name:""};return e.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const n=o.provider,s=o.prefix,a=o.name,l=r[n]||(r[n]=Object.create(null)),u=l[s]||(l[s]=ki(n,s));let f;a in u.icons?f=t.loaded:s===""||u.missing.has(a)?f=t.missing:f=t.pending;const d={provider:n,prefix:s,name:a};f.push(d)}),t}function sg(e,t){e.forEach(r=>{const i=r.loaderCallbacks;i&&(r.loaderCallbacks=i.filter(o=>o.id!==t))})}function Hk(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1;const i=e.provider,o=e.prefix;t.forEach(n=>{const s=n.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])s.loaded.push({provider:i,prefix:o,name:u});else if(e.missing.has(u))s.missing.push({provider:i,prefix:o,name:u});else return r=!0,!0;return!1}),s.pending.length!==a&&(r||sg([e],n.id),n.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),n.abort))})}))}let Wk=0;function Kk(e,t,r){const i=Wk++,o=sg.bind(null,r,i);if(!t.pending.length)return o;const n={id:i,icons:t,callback:e,abort:o};return r.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(n)}),o}function qk(e,t=!0,r=!1){const i=[];return e.forEach(o=>{const n=typeof o=="string"?Da(o,t,r):o;n&&i.push(n)}),i}var Qk={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Yk(e,t,r,i){const o=e.resources.length,n=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let k=e.resources.slice(0);for(s=[];k.length>1;){const S=Math.floor(Math.random()*k.length);s.push(k[S]),k=k.slice(0,S).concat(k.slice(S+1))}s=s.concat(k)}else s=e.resources.slice(n).concat(e.resources.slice(0,n));const a=Date.now();let l="pending",u=0,f,d=null,p=[],g=[];typeof i=="function"&&g.push(i);function b(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),b(),p.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),p=[]}function E(k,S){S&&(g=[]),typeof k=="function"&&g.push(k)}function y(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:p.length,subscribe:E,abort:_}}function m(){l="failed",g.forEach(k=>{k(void 0,f)})}function v(){p.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),p=[]}function w(k,S,$){const L=S!=="success";switch(p=p.filter(z=>z!==k),l){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){f=$,m();return}if(L){f=$,p.length||(s.length?x():m());return}if(b(),v(),!e.random){const z=e.resources.indexOf(k.resource);z!==-1&&z!==e.index&&(e.index=z)}l="completed",g.forEach(z=>{z($)})}function x(){if(l!=="pending")return;b();const k=s.shift();if(k===void 0){if(p.length){d=setTimeout(()=>{b(),l==="pending"&&(v(),m())},e.timeout);return}m();return}const S={status:"pending",resource:k,callback:($,L)=>{w(S,$,L)}};p.push(S),u++,d=setTimeout(x,e.rotate),r(k,t,S.callback)}return setTimeout(x),y}function ag(e){const t={...Qk,...e};let r=[];function i(){r=r.filter(a=>a().status==="pending")}function o(a,l,u){const f=Yk(t,a,l,(d,p)=>{i(),u&&u(d,p)});return r.push(f),f}function n(a){return r.find(l=>a(l))||null}return{query:o,find:n,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:i}}function Yh(){}const El=Object.create(null);function Xk(e){if(!El[e]){const t=Zu(e);if(!t)return;const r=ag(t),i={config:t,redundancy:r};El[e]=i}return El[e]}function Gk(e,t,r){let i,o;if(typeof e=="string"){const n=Dc(e);if(!n)return r(void 0,424),Yh;o=n.send;const s=Xk(e);s&&(i=s.redundancy)}else{const n=Xu(e);if(n){i=ag(n);const s=e.resources?e.resources[0]:"",a=Dc(s);a&&(o=a.send)}}return!i||!o?(r(void 0,424),Yh):i.query(t,o,r)().abort}const Xh="iconify2",zn="iconify",lg=zn+"-count",Gh=zn+"-version",cg=36e5,Zk=168;function Mc(e,t){try{return e.getItem(t)}catch{}}function Ju(e,t,r){try{return e.setItem(t,r),!0}catch{}}function Zh(e,t){try{e.removeItem(t)}catch{}}function Rc(e,t){return Ju(e,lg,t.toString())}function Fc(e){return parseInt(Mc(e,lg))||0}const Ma={local:!0,session:!0},ug={local:new Set,session:new Set};let ed=!1;function Jk(e){ed=e}let gs=typeof window>"u"?{}:window;function dg(e){const t=e+"Storage";try{if(gs&&gs[t]&&typeof gs[t].length=="number")return gs[t]}catch{}Ma[e]=!1}function hg(e,t){const r=dg(e);if(!r)return;const i=Mc(r,Gh);if(i!==Xh){if(i){const a=Fc(r);for(let l=0;l<a;l++)Zh(r,zn+l.toString())}Ju(r,Gh,Xh),Rc(r,0);return}const o=Math.floor(Date.now()/cg)-Zk,n=a=>{const l=zn+a.toString(),u=Mc(r,l);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,a))return!0}catch{}Zh(r,l)}};let s=Fc(r);for(let a=s-1;a>=0;a--)n(a)||(a===s-1?(s--,Rc(r,s)):ug[e].add(a))}function pg(){if(!ed){Jk(!0);for(const e in Ma)hg(e,t=>{const r=t.data,i=t.provider,o=r.prefix,n=ki(i,o);if(!Yu(n,r).length)return!1;const s=r.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,s):s,!0})}}function e2(e,t){const r=e.lastModifiedCached;if(r&&r>=t)return r===t;if(e.lastModifiedCached=t,r)for(const i in Ma)hg(i,o=>{const n=o.data;return o.provider!==e.provider||n.prefix!==e.prefix||n.lastModified===t});return!0}function t2(e,t){ed||pg();function r(i){let o;if(!Ma[i]||!(o=dg(i)))return;const n=ug[i];let s;if(n.size)n.delete(s=Array.from(n).shift());else if(s=Fc(o),!Rc(o,s+1))return;const a={cached:Math.floor(Date.now()/cg),provider:e.provider,data:t};return Ju(o,zn+s.toString(),JSON.stringify(a))}t.lastModified&&!e2(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),r("local")||r("session"))}function Jh(){}function r2(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Hk(e)}))}function i2(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:r,prefix:i}=e,o=e.iconsToLoad;delete e.iconsToLoad;let n;if(!o||!(n=Dc(r)))return;n.prepare(r,i,o).forEach(a=>{Gk(r,a,l=>{if(typeof l!="object")a.icons.forEach(u=>{e.missing.add(u)});else try{const u=Yu(e,l);if(!u.length)return;const f=e.pendingIcons;f&&u.forEach(d=>{f.delete(d)}),t2(e,l)}catch(u){console.error(u)}r2(e)})})}))}const o2=(e,t)=>{const r=qk(e,!0,ig()),i=jk(r);if(!i.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(i.loaded,i.missing,i.pending,Jh)}),()=>{l=!1}}const o=Object.create(null),n=[];let s,a;return i.pending.forEach(l=>{const{provider:u,prefix:f}=l;if(f===a&&u===s)return;s=u,a=f,n.push(ki(u,f));const d=o[u]||(o[u]=Object.create(null));d[f]||(d[f]=[])}),i.pending.forEach(l=>{const{provider:u,prefix:f,name:d}=l,p=ki(u,f),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(d)||(g.add(d),o[u][f].push(d))}),n.forEach(l=>{const{provider:u,prefix:f}=l;o[u][f].length&&i2(l,o[u][f])}),t?Kk(t,i,n):Jh};function n2(e,t){const r={...e};for(const i in t){const o=t[i],n=typeof o;i in og?(o===null||o&&(n==="string"||n==="number"))&&(r[i]=o):n===typeof r[i]&&(r[i]=i==="rotate"?o%4:o)}return r}const s2=/[\s,]+/;function a2(e,t){t.split(s2).forEach(r=>{switch(r.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function l2(e,t=0){const r=e.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(r===""){const o=parseInt(e);return isNaN(o)?0:i(o)}else if(r!==e){let o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){let n=parseFloat(e.slice(0,e.length-r.length));return isNaN(n)?0:(n=n/o,n%1===0?i(n):0)}}return t}function c2(e,t){let r=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)r+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+e+"</svg>"}function u2(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function d2(e){return"data:image/svg+xml,"+u2(e)}function h2(e){return'url("'+d2(e)+'")'}let nn;function p2(){try{nn=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{nn=null}}function f2(e){return nn===void 0&&p2(),nn?nn.createHTML(e):e}const fg={...ng,inline:!1},m2={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},g2={display:"inline-block"},Bc={backgroundColor:"currentColor"},mg={backgroundColor:"transparent"},ep={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},tp={WebkitMask:Bc,mask:Bc,background:mg};for(const e in tp){const t=tp[e];for(const r in ep)t[e+r]=ep[r]}const v2={...fg,inline:!0};function rp(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const y2=(e,t,r,i)=>{const o=r?v2:fg,n=n2(o,t),s=t.mode||"svg",a={},l=t.style||{},u={...s==="svg"?m2:{},ref:i};for(let y in t){const m=t[y];if(m!==void 0)switch(y){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":n[y]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&a2(n,m);break;case"color":a.color=m;break;case"rotate":typeof m=="string"?n[y]=l2(m):typeof m=="number"&&(n[y]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete u["aria-hidden"];break;default:o[y]===void 0&&(u[y]=m)}}const f=Ak(e,n),d=f.attributes;if(n.inline&&(a.verticalAlign="-0.125em"),s==="svg"){u.style={...a,...l},Object.assign(u,d);let y=0,m=t.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:f2(Nk(f.body,m?()=>m+"ID"+y++:"iconifyReact"))},pr.createElement("svg",u)}const{body:p,width:g,height:b}=e,_=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),E=c2(p,{...d,width:g+"",height:b+""});return u.style={...a,"--svg":h2(E),width:rp(d.width),height:rp(d.height),...g2,..._?Bc:mg,...l},pr.createElement("span",u)};ig(!0);Ik("",Uk);if(typeof document<"u"&&typeof window<"u"){pg();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Ck(i))&&console.error(r)}catch{console.error(r)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let r in t){const i="IconifyProviders["+r+"] is invalid.";try{const o=t[r];if(typeof o!="object"||!o||o.resources===void 0)continue;Ok(r,o)||console.error(i)}catch{console.error(i)}}}}class gg extends pr.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const r=this.state,i=this.props.icon;if(typeof i=="object"&&i!==null&&typeof i.body=="string"){this._icon="",this._abortLoading(),(t||r.icon===null)&&this._setData({data:i});return}let o;if(typeof i!="string"||(o=Da(i,!1,!0))===null){this._abortLoading(),this._setData(null);return}const n=kk(o);if(!n){(!this._loading||this._loading.name!==i)&&(this._abortLoading(),this._icon="",this._setData(null),n!==null&&(this._loading={name:i,abort:o2([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||r.icon===null){this._abortLoading(),this._icon=i;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:n,classes:s}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,r=this.state.icon;if(r===null)return t.children?t.children:pr.createElement("span",{});let i=t;return r.classes&&(i={...t,className:(typeof t.className=="string"?t.className+" ":"")+r.classes.join(" ")}),y2({...Qu,...r.data},i,t._inline,t._ref)}}const si=pr.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!1};return pr.createElement(gg,i)});pr.forwardRef(function(t,r){const i={...t,_ref:r,_inline:!0};return pr.createElement(gg,i)});function b2({lightMode:e,fontIncreased:t}){const[r,i]=ye.useState(!1),[o,n]=ye.useState(0);function s(){n(l=>l+1),i(!0),setTimeout(function(){i(!1)},3250)}const a={transform:"rotate(1turn) scale(0.4)",transition:"all 3.25s",borderRadius:"50%"};return I.jsx(I.Fragment,{children:I.jsxs("main",{className:"fade-in-hero",children:[I.jsxs("section",{className:"hero__left",children:[I.jsx("div",{onClick:s,style:r?a:{display:"block"},className:e?"hero__profile hero__profile__pic--dark light pointer":"hero__profile hero__profile__pic--light light pointer",children:I.jsx(Jm,{name:"flash",duration:4e3,play:!0,children:I.jsx("span",{className:"hero__tap hover",children:r?"":"← Tap!"})})}),I.jsxs("div",{className:"hero__text",children:[I.jsx("div",{className:"hero__name",style:{fontSize:t?"var(--name-increased)":"var(--name-default)"},children:"Stepan Serov"}),I.jsx("span",{className:"hero__position",style:{fontSize:t?"var(--position-increased)":"var(--position-default)"},children:"Frontend Developer"})]}),I.jsxs("div",{className:"hero__badges",children:[I.jsx(si,{className:"hover rotate",icon:"mdi:react",width:"32",height:"32"}),I.jsx(si,{className:"hover",icon:"mdi:language-javascript",width:"32",height:"32"}),I.jsx(si,{className:"hover",icon:"mdi:tailwind",width:"32",height:"32"}),I.jsx(si,{className:"hover",icon:"mdi:language-html5",width:"32",height:"32"}),I.jsx(si,{className:"hover",icon:"mdi:language-css3",width:"32",height:"32"})]}),I.jsxs("div",{className:"hero__icons",children:[I.jsx(si,{icon:"iwwa:file-pdf",className:"hover",width:"32",height:"32"}),I.jsx("span",{children:"CV"})]})]}),I.jsxs("section",{className:"hero__right",children:[I.jsx("h2",{className:"kaushan-script-regular",style:{fontSize:t?"var(--title-increased)":"var(--title-default)"},children:"Latest projects"}),I.jsxs(Vw,{autoplay:!0,loop:!0,pagination:!0,mouseDragging:!0,className:"hero__carousel",children:[I.jsxs(Fh,{children:[I.jsx("img",{className:"hero__carousel-pic",alt:"Games Database",src:"./boxd-min.png"}),I.jsx("a",{href:"https://fabulous-marigold-8f871e.netlify.app",children:I.jsx("div",{style:{color:e?"black":"white"},className:"hero__carousel-title",children:"Games Database"})})]}),I.jsxs(Fh,{children:[I.jsx("img",{className:"hero__carousel-pic",alt:"Gaming News",src:"./rssgames-min.png"}),I.jsx("a",{href:"https://stunning-shortbread-4017c3.netlify.app",children:I.jsx("div",{style:{color:e?"black":"white"},className:"hero__carousel-title",children:"Gaming News"})})]})]})]})]})})}var vg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(n=o(n,i(a)))}return n}function i(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return r.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var s="";for(var a in n)t.call(n,a)&&n[a]&&(s=o(s,a));return s}function o(n,s){return s?n?n+" "+s:n+s:n}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(vg);var w2=vg.exports;const Ra=op(w2),_2=["xxl","xl","lg","md","sm","xs"],x2="xs",td=ye.createContext({prefixes:{},breakpoints:_2,minBreakpoint:x2});function rd(e,t){const{prefixes:r}=ye.useContext(td);return e||r[t]||t}function k2(){const{breakpoints:e}=ye.useContext(td);return e}function S2(){const{minBreakpoint:e}=ye.useContext(td);return e}function yg({as:e,bsPrefix:t,className:r,...i}){t=rd(t,"col");const o=k2(),n=S2(),s=[],a=[];return o.forEach(l=>{const u=i[l];delete i[l];let f,d,p;typeof u=="object"&&u!=null?{span:f,offset:d,order:p}=u:f=u;const g=l!==n?`-${l}`:"";f&&s.push(f===!0?`${t}${g}`:`${t}${g}-${f}`),p!=null&&a.push(`order${g}-${p}`),d!=null&&a.push(`offset${g}-${d}`)}),[{...i,className:Ra(r,...s,...a)},{as:e,bsPrefix:t,spans:s}]}const C2=ye.forwardRef((e,t)=>{const[{className:r,...i},{as:o="div",bsPrefix:n,spans:s}]=yg(e);return I.jsx(o,{...i,ref:t,className:Ra(r,!s.length&&n)})});C2.displayName="Col";function bg({animation:e,bg:t,bsPrefix:r,size:i,...o}){r=rd(r,"placeholder");const[{className:n,...s}]=yg(o);return{...s,className:Ra(n,e?`${r}-${e}`:r,i&&`${r}-${i}`,t&&`bg-${t}`)}}const $2=["as","disabled"];function E2(e,t){if(e==null)return{};var r={},i=Object.keys(e),o,n;for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function z2(e){return!e||e.trim()==="#"}function wg({tagName:e,disabled:t,href:r,target:i,rel:o,role:n,onClick:s,tabIndex:a=0,type:l}){e||(r!=null||i!=null||o!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},u];const f=p=>{if((t||e==="a"&&z2(r))&&p.preventDefault(),t){p.stopPropagation();return}s==null||s(p)},d=p=>{p.key===" "&&(p.preventDefault(),f(p))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:n??"button",disabled:void 0,tabIndex:t?void 0:a,href:r,target:e==="a"?i:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:f,onKeyDown:d},u]}const A2=ye.forwardRef((e,t)=>{let{as:r,disabled:i}=e,o=E2(e,$2);const[n,{tagName:s}]=wg(Object.assign({tagName:r,disabled:i},o));return I.jsx(s,Object.assign({},o,n,{ref:t}))});A2.displayName="Button";const _g=ye.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:i,active:o=!1,disabled:n=!1,className:s,...a},l)=>{const u=rd(t,"btn"),[f,{tagName:d}]=wg({tagName:e,disabled:n,...a}),p=d;return I.jsx(p,{...f,...a,ref:l,disabled:n,className:Ra(s,u,o&&"active",r&&`${u}-${r}`,i&&`${u}-${i}`,a.href&&n&&"disabled")})});_g.displayName="Button";const T2=_g,xg=ye.forwardRef((e,t)=>{const r=bg(e);return I.jsx(T2,{...r,ref:t,disabled:!0,tabIndex:-1})});xg.displayName="PlaceholderButton";const L2=xg,kg=ye.forwardRef(({as:e="span",...t},r)=>{const i=bg(t);return I.jsx(e,{...i,ref:r})});kg.displayName="Placeholder";const vs=Object.assign(kg,{Button:L2});function P2({lightMode:e}){const[t,r]=ye.useState([]),[i,o]=ye.useState(!1),[n,s]=ye.useState(0),[a,l]=ye.useState("");function u(f){return`<sl-icon name="${["emoji-angry","emoji-frown","emoji-expressionless","emoji-smile","emoji-laughing"][f-1]}"></sl-icon>`}return ye.useEffect(function(){r([]),fetch("https://dog-api.kinduff.com/api/facts").then(f=>{if(!f.ok)throw new Error("Something is wrong with the API");return f.json()}).then(f=>{r(f.facts[0])})},[i]),I.jsxs("footer",{className:"fade-in-footer",children:[I.jsxs("div",{className:"footer__title-container",children:[I.jsx(si,{icon:"fluent-emoji:dog-face",className:"scale",width:"32",height:"32"}),I.jsx("div",{className:"footer__title capitalize",children:"Random dog fact"}),I.jsx("span",{onClick:()=>o(f=>!f),className:"material-symbols-outlined pointer hover rotate",children:"refresh"})]}),t.length>0?I.jsxs("div",{style:{border:e?"1px dashed black":"1px dashed white"},className:"footer__fact",children:[" ",t]}):I.jsxs(I.Fragment,{children:[I.jsxs(vs,{animation:"glow",children:[I.jsx(vs,{style:{width:"30vw"}})," "]}),I.jsxs(vs,{animation:"glow",children:[I.jsx(vs,{style:{width:"30vw",marginBottom:"2vh"}})," "]})]}),I.jsx("div",{className:"footer__rating",children:n?I.jsx(Jm,{name:"jackInTheBox",duration:1e3,iterations:1,play:!0,children:I.jsx("div",{children:"Thanks!"})}):I.jsx(h1,{className:e?`light rating--${a}`:`dark rating--${a}`,label:"Rating",getSymbol:u,onSlHover:f=>l(f.target.value),onSlChange:()=>s(!0)})}),I.jsx("div",{className:e?"footer__icons footer__github--dark pointer":"footer__icons footer__github--light pointer"})]})}function N2(){const[e,t]=ye.useState(!1),[r,i]=ye.useState(!1);return I.jsxs("div",{style:{fontSize:e?"var(--increased)":"var(--default)",color:r?"black":"white"},className:r?"bg--light":"bg--dark",children:[I.jsx(Xv,{lightMode:r,setLightMode:i,fontIncreased:e,setFontIncreased:t}),I.jsx(b2,{lightMode:r,fontIncreased:e}),I.jsx(P2,{lightMode:r})]})}$c("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");zl.createRoot(document.getElementById("root")).render(I.jsx(I.Fragment,{children:I.jsx(N2,{})}));
