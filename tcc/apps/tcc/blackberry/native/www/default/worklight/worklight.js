
/* JavaScript content from worklight/worklight.js in JS Resources */
/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */



/**
 * ================================================================= 
 * Source file taken from :: wl_.min.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * @license
 * Lo-Dash 1.1.1 lodash.com/license
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(r){function a(n){return n&&typeof n=="object"&&!fe(n)&&Vt.call(n,"__wrapped__")?n:new K(n)}function q(n,t,e){var r=n.length,u=r-t>=e;if(u){var a={};for(e=t-1;++e<r;){var o=qt(n[e]);(Vt.call(a,o)?a[o]:a[o]=[]).push(n[e])}}return function(e){if(u){var r=qt(e);return Vt.call(a,r)&&-1<yt(a[r],e)}return-1<yt(n,e,t)}}function B(n){return n.charCodeAt(0)}function F(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1
}return e<r?-1:1}function R(n,t,e,r){function u(){var r=arguments,c=o?this:t;return a||(n=t[i]),e.length&&(r=r.length?(r=V(r),f?r.concat(e):e.concat(r)):e),this instanceof u?(M.prototype=n.prototype,c=new M,M.prototype=null,r=n.apply(c,r),Z(r)?r:c):n.apply(c,r)}var a=Y(n),o=!e,i=t;if(o){var f=r;e=t}else if(!a){if(!r)throw new Bt;t=n}return u}function T(){for(var n,t={g:_,b:"k(m)",c:"",e:"m",f:"",h:"",i:!0,j:!!le},e=0;n=arguments[e];e++)for(var r in n)t[r]=n[r];if(n=t.a,t.d=/^[^,]+/.exec(n)[0],e=At,r="var i,m="+t.d+",u="+t.e+";if(!m)return u;"+t.h+";",t.b?(r+="var n=m.length;i=-1;if("+t.b+"){",ie.unindexedChars&&(r+="if(l(m)){m=m.split('')}"),r+="while(++i<n){"+t.f+"}}else{"):ie.nonEnumArgs&&(r+="var n=m.length;i=-1;if(n&&j(m)){while(++i<n){i+='';"+t.f+"}}else{"),ie.enumPrototypes&&(r+="var v=typeof m=='function';"),t.i&&t.j)r+="var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];",ie.enumPrototypes&&(r+="if(!(v&&i=='prototype')){"),r+=t.f,ie.enumPrototypes&&(r+="}"),r+="}";
else if(r+="for(i in m){",(ie.enumPrototypes||t.i)&&(r+="if(",ie.enumPrototypes&&(r+="!(v&&i=='prototype')"),ie.enumPrototypes&&t.i&&(r+="&&"),t.i&&(r+="h.call(m,i)"),r+="){"),r+=t.f+";",(ie.enumPrototypes||t.i)&&(r+="}"),r+="}",ie.nonEnumShadows){r+="var f=m.constructor;";for(var u=0;7>u;u++)r+="i='"+t.g[u]+"';if(","constructor"==t.g[u]&&(r+="!(f&&f.prototype===m)&&"),r+="h.call(m,i)){"+t.f+"}"}return(t.b||ie.nonEnumArgs)&&(r+="}"),r+=t.c+";return u",e("h,j,k,l,o,p,r","return function("+n+"){"+r+"}")(Vt,H,fe,tt,le,a,P)
}function D(n){return"\\"+N[n]}function z(n){return se[n]}function L(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function K(n){this.__wrapped__=n}function M(){}function U(n){var t=!1;if(!n||Qt.call(n)!=E||!ie.argsClass&&H(n))return t;var e=n.constructor;return(Y(e)?e instanceof e:ie.nodeClass||!L(n))?ie.ownLast?(ye(n,function(n,e,r){return t=Vt.call(r,e),!1}),!0===t):(ye(n,function(n,e){t=e}),!1===t||Vt.call(n,t)):t}function V(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);
var r=-1;e=e-t||0;for(var u=Ot(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function G(n){return ve[n]}function H(n){return Qt.call(n)==C}function J(n,t,r,u,o,i){var f=n;if(typeof t=="function"&&(u=r,r=t,t=!1),typeof r=="function"){if(r=typeof u=="undefined"?r:a.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=Z(f)){var c=Qt.call(f);if(!I[c]||!ie.nodeClass&&L(f))return f;var l=fe(f)}if(!u||!t)return u?l?V(f):ge({},f):f;switch(u=oe[c],c){case j:case k:return new u(+f);case O:case A:return new u(f);
case S:return u(f.source,v.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(Vt.call(n,"index")&&(f.index=n.index),Vt.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?ft:me)(n,function(n,u){f[u]=J(n,t,r,e,o,i)}),f}function Q(n){var t=[];return ye(n,function(n,e){Y(n)&&t.push(e)}),t.sort()}function W(n){for(var t=-1,e=le(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function X(n,t,e,r,u,o){var f=e===i;if(e&&!f){e=typeof r=="undefined"?e:a.createCallback(e,r,2);
var c=e(n,t);if(typeof c!="undefined")return!!c}if(n===t)return 0!==n||1/n==1/t;var l=typeof n,p=typeof t;if(n===n&&(!n||"function"!=l&&"object"!=l)&&(!t||"function"!=p&&"object"!=p))return!1;if(null==n||null==t)return n===t;if(p=Qt.call(n),l=Qt.call(t),p==C&&(p=E),l==C&&(l=E),p!=l)return!1;switch(p){case j:case k:return+n==+t;case O:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case S:case A:return n==qt(t)}if(l=p==w,!l){if(Vt.call(n,"__wrapped__")||Vt.call(t,"__wrapped__"))return X(n.__wrapped__||n,t.__wrapped__||t,e,r,u,o);
if(p!=E||!ie.nodeClass&&(L(n)||L(t)))return!1;var p=!ie.argsObject&&H(n)?Nt:n.constructor,s=!ie.argsObject&&H(t)?Nt:t.constructor;if(p!=s&&(!Y(p)||!(p instanceof p&&Y(s)&&s instanceof s)))return!1}for(u||(u=[]),o||(o=[]),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,c=!0;if(u.push(n),o.push(t),l){if(p=n.length,v=t.length,c=v==n.length,!c&&!f)return c;for(;v--;)if(l=p,s=t[v],f)for(;l--&&!(c=X(n[l],s,e,r,u,o)););else if(!(c=X(n[v],s,e,r,u,o)))break;return c}return ye(t,function(t,a,i){return Vt.call(i,a)?(v++,c=Vt.call(n,a)&&X(n[a],t,e,r,u,o)):void 0
}),c&&!f&&ye(n,function(n,t,e){return Vt.call(e,t)?c=-1<--v:void 0}),c}function Y(n){return typeof n=="function"}function Z(n){return n?P[typeof n]:!1}function nt(n){return typeof n=="number"||Qt.call(n)==O}function tt(n){return typeof n=="string"||Qt.call(n)==A}function et(n,t,e){var r=arguments,u=0,o=2;if(!Z(n))return n;if(e===i)var f=r[3],c=r[4],l=r[5];else c=[],l=[],typeof e!="number"&&(o=r.length),3<o&&"function"==typeof r[o-2]?f=a.createCallback(r[--o-1],r[o--],2):2<o&&"function"==typeof r[o-1]&&(f=r[--o]);
for(;++u<o;)(fe(r[u])?ft:me)(r[u],function(t,e){var r,u,a=t,o=n[e];if(t&&((u=fe(t))||de(t))){for(a=c.length;a--;)if(r=c[a]==t){o=l[a];break}r||(o=u?fe(o)?o:[]:de(o)?o:{},f&&(a=f(o,t),typeof a!="undefined"&&(o=a)),c.push(t),l.push(o),f||(o=et(o,t,i,f,c,l)))}else f&&(a=f(o,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(o=a);n[e]=o});return n}function rt(n){for(var t=-1,e=le(n),r=e.length,u=Ot(r);++t<r;)u[t]=n[e[t]];return u}function ut(n,t,e){var r=-1,u=n?n.length:0,a=!1;return e=(0>e?te(0,u+e):e)||0,typeof u=="number"?a=-1<(tt(n)?n.indexOf(t,e):yt(n,t,e)):pe(n,function(n){return++r<e?void 0:!(a=n===t)
}),a}function at(n,t,e){var r=!0;if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u&&(r=!!t(n[e],e,n)););}else pe(n,function(n,e,u){return r=!!t(n,e,u)});return r}function ot(n,t,e){var r=[];if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}}else pe(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function it(n,t,e){if(t=a.createCallback(t,e),!fe(n)){var r;return pe(n,function(n,e,u){return t(n,e,u)?(r=n,!1):void 0}),r}e=-1;for(var u=n.length;++e<u;){var o=n[e];
if(t(o,e,n))return o}}function ft(n,t,e){if(t&&typeof e=="undefined"&&fe(n)){e=-1;for(var r=n.length;++e<r&&!1!==t(n[e],e,n););}else pe(n,t,e);return n}function ct(n,t,e){var r=-1,u=n?n.length:0,o=Ot(typeof u=="number"?u:0);if(t=a.createCallback(t,e),fe(n))for(;++r<u;)o[r]=t(n[r],r,n);else pe(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function lt(n,t,e){var r=-1/0,u=r;if(!t&&fe(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i>u&&(u=i)}}else t=!t&&tt(n)?B:a.createCallback(t,e),pe(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)
});return u}function pt(n,t,e,r){var u=3>arguments.length;if(t=a.createCallback(t,r,4),fe(n)){var o=-1,i=n.length;for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n)}else pe(n,function(n,r,a){e=u?(u=!1,n):t(e,n,r,a)});return e}function st(n,t,e,r){var u=n,o=n?n.length:0,i=3>arguments.length;if(typeof o!="number")var f=le(n),o=f.length;else ie.unindexedChars&&tt(n)&&(u=n.split(""));return t=a.createCallback(t,r,4),ft(n,function(n,r,a){r=f?f[--o]:--o,e=i?(i=!1,u[r]):t(e,u[r],r,a)}),e}function vt(n,t,e){var r;
if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u&&!(r=t(n[e],e,n)););}else pe(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function gt(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=-1;for(t=a.createCallback(t,e);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[0];return V(n,0,ee(te(0,r),u))}}function ht(n,t,e,r){var u=-1,o=n?n.length:0,i=[];for(typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1),null!=e&&(e=a.createCallback(e,r));++u<o;)r=n[u],e&&(r=e(r,u,n)),fe(r)?Gt.apply(i,t?r:ht(r)):i.push(r);
return i}function yt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?te(0,u+e):e||0)-1;else if(e)return r=dt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function mt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=a.createCallback(t,e);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:te(0,t);return V(n,r)}function dt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?a.createCallback(e,r,1):jt,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;return u}function bt(n,t,e,r){var u=-1,o=n?n.length:0,i=[],f=i;
typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1);var c=!t&&75<=o;if(c)var l={};for(null!=e&&(f=[],e=a.createCallback(e,r));++u<o;){r=n[u];var p=e?e(r,u,n):r;if(c)var s=qt(p),s=Vt.call(l,s)?!(f=l[s]):f=l[s]=[];(t?!u||f[f.length-1]!==p:s||0>yt(f,p))&&((e||c)&&f.push(p),i.push(r))}return i}function _t(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function Ct(n,t){return ie.fastBind||Wt&&2<arguments.length?Wt.call.apply(Wt,arguments):R(n,t,V(arguments,2))}function wt(n){var t=V(arguments,1);
return Jt(function(){n.apply(e,t)},1)}function jt(n){return n}function kt(n){ft(Q(n),function(t){var e=a[t]=n[t];a.prototype[t]=function(){var n=this.__wrapped__,t=[n];return Gt.apply(t,arguments),t=e.apply(a,t),n&&typeof n=="object"&&n==t?this:new K(t)}})}function xt(){return this.__wrapped__}r=r?$.defaults(n.Object(),r,$.pick(n,b)):n;var Ot=r.Array,Et=r.Boolean,St=r.Date,At=r.Function,It=r.Math,Pt=r.Number,Nt=r.Object,$t=r.RegExp,qt=r.String,Bt=r.TypeError,Ft=Ot(),Rt=Nt(),Tt=r._,Dt=$t("^"+qt(Rt.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),zt=It.ceil,Lt=r.clearTimeout,Kt=Ft.concat,Mt=It.floor,Ut=Dt.test(Ut=Nt.getPrototypeOf)&&Ut,Vt=Rt.hasOwnProperty,Gt=Ft.push,Ht=r.setImmediate,Jt=r.setTimeout,Qt=Rt.toString,Wt=Dt.test(Wt=V.bind)&&Wt,Xt=Dt.test(Xt=Ot.isArray)&&Xt,Yt=r.isFinite,Zt=r.isNaN,ne=Dt.test(ne=Nt.keys)&&ne,te=It.max,ee=It.min,re=r.parseInt,ue=It.random,It=Dt.test(r.attachEvent),ae=Wt&&!/\n|true/.test(Wt+It),oe={};
oe[w]=Ot,oe[j]=Et,oe[k]=St,oe[E]=Nt,oe[O]=Pt,oe[S]=$t,oe[A]=qt;var ie=a.support={};(function(){var n=function(){this.x=1},t={0:1,length:1},e=[];n.prototype={valueOf:1,y:1};for(var r in new n)e.push(r);for(r in arguments);ie.argsObject=arguments.constructor==Nt,ie.argsClass=H(arguments),ie.enumPrototypes=n.propertyIsEnumerable("prototype"),ie.fastBind=Wt&&!ae,ie.ownLast="x"!=e[0],ie.nonEnumArgs=0!=r,ie.nonEnumShadows=!/valueOf/.test(e),ie.spliceObjects=(Ft.splice.call(t,0,1),!t[0]),ie.unindexedChars="xx"!="x"[0]+Nt("x")[0];
try{ie.nodeClass=!(Qt.call(document)==E&&!({toString:0}+""))}catch(u){ie.nodeClass=!0}})(1),a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:g,variable:"",imports:{_:a}},Et={a:"q,w,g",h:"var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){",f:"if(typeof u[i]=='undefined')u[i]=m[i]",c:"}}"},Pt={a:"e,d,x",h:"d=d&&typeof x=='undefined'?d:p.createCallback(d,x)",b:"typeof n=='number'",f:"if(d(m[i],i,e)===false)return u"},It={h:"if(!r[typeof m])return u;"+Pt.h,b:!1},K.prototype=a.prototype,ie.argsClass||(H=function(n){return n?Vt.call(n,"callee"):!1
});var fe=Xt||function(n){return ie.argsObject&&n instanceof Ot||Qt.call(n)==w},ce=T({a:"q",e:"[]",h:"if(!(r[typeof q]))return u",f:"u.push(i)",b:!1}),le=ne?function(n){return Z(n)?ie.enumPrototypes&&typeof n=="function"||ie.nonEnumArgs&&n.length&&H(n)?ce(n):ne(n):[]}:ce,pe=T(Pt),se={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ve=W(se),ge=T(Et,{h:Et.h.replace(";",";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"),f:"u[i]=d?d(u[i],m[i]):m[i]"}),he=T(Et),ye=T(Pt,It,{i:!1}),me=T(Pt,It);
Y(/x/)&&(Y=function(n){return n instanceof At||Qt.call(n)==x});var de=Ut?function(n){if(!n||Qt.call(n)!=E||!ie.argsClass&&H(n))return!1;var t=n.valueOf,e=typeof t=="function"&&(e=Ut(t))&&Ut(e);return e?n==e||Ut(n)==e:U(n)}:U;return ae&&u&&typeof Ht=="function"&&(wt=Ct(Ht,r)),Ht=8==re("08")?re:function(n,t){return re(tt(n)?n.replace(h,""):n,t||0)},a.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},a.assign=ge,a.at=function(n){var t=-1,e=Kt.apply(Ft,V(arguments,1)),r=e.length,u=Ot(r);
for(ie.unindexedChars&&tt(n)&&(n=n.split(""));++t<r;)u[t]=n[e[t]];return u},a.bind=Ct,a.bindAll=function(n){for(var t=Kt.apply(Ft,arguments),e=1<t.length?0:(t=Q(n),-1),r=t.length;++e<r;){var u=t[e];n[u]=Ct(n[u],n)}return n},a.bindKey=function(n,t){return R(n,t,V(arguments,2),i)},a.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},a.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]
}},a.countBy=function(n,t,e){var r={};return t=a.createCallback(t,e),ft(n,function(n,e,u){e=qt(t(n,e,u)),Vt.call(r,e)?r[e]++:r[e]=1}),r},a.createCallback=function(n,t,e){if(null==n)return jt;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var u=le(n);return function(t){for(var e=u.length,r=!1;e--&&(r=X(t[u[e]],n[u[e]],i)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
}:function(e,r,u){return n.call(t,e,r,u)}:n},a.debounce=function(n,t,e){function r(){i=null,e||(a=n.apply(o,u))}var u,a,o,i;return function(){var f=e&&!i;return u=arguments,o=this,Lt(i),i=Jt(r,t),f&&(a=n.apply(o,u)),a}},a.defaults=he,a.defer=wt,a.delay=function(n,t){var r=V(arguments,2);return Jt(function(){n.apply(e,r)},t)},a.difference=function(n){for(var t=-1,e=n?n.length:0,r=Kt.apply(Ft,arguments),r=q(r,e,100),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u},a.filter=ot,a.flatten=ht,a.forEach=ft,a.forIn=ye,a.forOwn=me,a.functions=Q,a.groupBy=function(n,t,e){var r={};
return t=a.createCallback(t,e),ft(n,function(n,e,u){e=qt(t(n,e,u)),(Vt.call(r,e)?r[e]:r[e]=[]).push(n)}),r},a.initial=function(n,t,e){if(!n)return[];var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return V(n,0,ee(te(0,u-r),u))},a.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=100<=a,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=qt(c),l=Vt.call(r[0],l)?!(f=r[0][l]):f=r[0][l]=[];
if(l||0>yt(f,c)){o&&f.push(c);for(var p=e;--p;)if(!(r[p]||(r[p]=q(t[p],0,100)))(c))continue n;i.push(c)}}return i},a.invert=W,a.invoke=function(n,t){var e=V(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Ot(typeof a=="number"?a:0);return ft(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},a.keys=le,a.map=ct,a.max=lt,a.memoize=function(n,t){var e={};return function(){var r=qt(t?t.apply(this,arguments):arguments[0]);return Vt.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},a.merge=et,a.min=function(n,t,e){var r=1/0,u=r;
if(!t&&fe(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i<u&&(u=i)}}else t=!t&&tt(n)?B:a.createCallback(t,e),pe(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},a.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=a.createCallback(t,e);else var o=Kt.apply(Ft,arguments);return ye(n,function(n,e,a){(r?!t(n,e,a):0>yt(o,e,1))&&(u[e]=n)}),u},a.once=function(n){var t,e;return function(){return t?e:(t=!0,e=n.apply(this,arguments),n=null,e)}},a.pairs=function(n){for(var t=-1,e=le(n),r=e.length,u=Ot(r);++t<r;){var a=e[t];
u[t]=[a,n[a]]}return u},a.partial=function(n){return R(n,V(arguments,1))},a.partialRight=function(n){return R(n,V(arguments,1),null,i)},a.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=0,o=Kt.apply(Ft,arguments),i=Z(n)?o.length:0;++u<i;){var f=o[u];f in n&&(r[f]=n[f])}else t=a.createCallback(t,e),ye(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},a.pluck=ct,a.range=function(n,t,e){n=+n||0,e=+e||1,null==t&&(t=n,n=0);var r=-1;t=te(0,zt((t-n)/e));for(var u=Ot(t);++r<t;)u[r]=n,n+=e;
return u},a.reject=function(n,t,e){return t=a.createCallback(t,e),ot(n,function(n,e,r){return!t(n,e,r)})},a.rest=mt,a.shuffle=function(n){var t=-1,e=n?n.length:0,r=Ot(typeof e=="number"?e:0);return ft(n,function(n){var e=Mt(ue()*(++t+1));r[t]=r[e],r[e]=n}),r},a.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,o=Ot(typeof u=="number"?u:0);for(t=a.createCallback(t,e),ft(n,function(n,e,u){o[++r]={a:t(n,e,u),b:r,c:n}}),u=o.length,o.sort(F);u--;)o[u]=o[u].c;return o},a.tap=function(n,t){return t(n),n},a.throttle=function(n,t){function e(){i=new St,o=null,u=n.apply(a,r)
}var r,u,a,o,i=0;return function(){var f=new St,c=t-(f-i);return r=arguments,a=this,0<c?o||(o=Jt(e,c)):(Lt(o),o=null,i=f,u=n.apply(a,r)),u}},a.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Ot(n);for(t=a.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},a.toArray=function(n){return n&&typeof n.length=="number"?ie.unindexedChars&&tt(n)?n.split(""):V(n):rt(n)},a.union=function(){return bt(Kt.apply(Ft,arguments))},a.uniq=bt,a.values=rt,a.where=ot,a.without=function(n){for(var t=-1,e=n?n.length:0,r=q(arguments,1,30),u=[];++t<e;){var a=n[t];
r(a)||u.push(a)}return u},a.wrap=function(n,t){return function(){var e=[n];return Gt.apply(e,arguments),t.apply(this,e)}},a.zip=function(n){for(var t=-1,e=n?lt(ct(arguments,"length")):0,r=Ot(e);++t<e;)r[t]=ct(arguments,t);return r},a.zipObject=_t,a.collect=ct,a.drop=mt,a.each=ft,a.extend=ge,a.methods=Q,a.object=_t,a.select=ot,a.tail=mt,a.unique=bt,kt(a),a.clone=J,a.cloneDeep=function(n,t,e){return J(n,!0,t,e)},a.contains=ut,a.escape=function(n){return null==n?"":qt(n).replace(m,z)},a.every=at,a.find=it,a.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;
for(t=a.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},a.findKey=function(n,t,e){var r;return t=a.createCallback(t,e),me(n,function(n,e,u){return t(n,e,u)?(r=e,!1):void 0}),r},a.has=function(n,t){return n?Vt.call(n,t):!1},a.identity=jt,a.indexOf=yt,a.isArguments=H,a.isArray=fe,a.isBoolean=function(n){return!0===n||!1===n||Qt.call(n)==j},a.isDate=function(n){return n instanceof St||Qt.call(n)==k},a.isElement=function(n){return n?1===n.nodeType:!1},a.isEmpty=function(n){var t=!0;if(!n)return t;
var e=Qt.call(n),r=n.length;return e==w||e==A||(ie.argsClass?e==C:H(n))||e==E&&typeof r=="number"&&Y(n.splice)?!r:(me(n,function(){return t=!1}),t)},a.isEqual=X,a.isFinite=function(n){return Yt(n)&&!Zt(parseFloat(n))},a.isFunction=Y,a.isNaN=function(n){return nt(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=nt,a.isObject=Z,a.isPlainObject=de,a.isRegExp=function(n){return n instanceof $t||Qt.call(n)==S},a.isString=tt,a.isUndefined=function(n){return typeof n=="undefined"},a.lastIndexOf=function(n,t,e){var r=n?n.length:0;
for(typeof e=="number"&&(r=(0>e?te(0,r+e):ee(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},a.mixin=kt,a.noConflict=function(){return r._=Tt,this},a.parseInt=Ht,a.random=function(n,t){return null==n&&null==t&&(t=1),n=+n||0,null==t&&(t=n,n=0),n+Mt(ue()*((+t||0)-n+1))},a.reduce=pt,a.reduceRight=st,a.result=function(n,t){var r=n?n[t]:e;return Y(r)?n[t]():r},a.runInContext=t,a.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:le(n).length},a.some=vt,a.sortedIndex=dt,a.template=function(n,t,r){var u=a.templateSettings;
n||(n=""),r=he({},r,u);var o,i=he({},r.imports,u.imports),u=le(i),i=rt(i),p=0,v=r.interpolate||y,h="__p+='",v=$t((r.escape||y).source+"|"+v.source+"|"+(v===g?s:y).source+"|"+(r.evaluate||y).source+"|$","g");n.replace(v,function(t,e,r,u,a,i){return r||(r=u),h+=n.slice(p,i).replace(d,D),e&&(h+="'+__e("+e+")+'"),a&&(o=!0,h+="';"+a+";__p+='"),r&&(h+="'+((__t=("+r+"))==null?'':__t)+'"),p=i+t.length,t}),h+="';\n",v=r=r.variable,v||(r="obj",h="with("+r+"){"+h+"}"),h=(o?h.replace(f,""):h).replace(c,"$1").replace(l,"$1;"),h="function("+r+"){"+(v?"":r+"||("+r+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+h+"return __p}";
try{var m=At(u,"return "+h).apply(e,i)}catch(b){throw b.source=h,b}return t?m(t):(m.source=h,m)},a.unescape=function(n){return null==n?"":qt(n).replace(p,G)},a.uniqueId=function(n){var t=++o;return qt(null==n?"":n)+t},a.all=at,a.any=vt,a.detect=it,a.foldl=pt,a.foldr=st,a.include=ut,a.inject=pt,me(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(){var t=[this.__wrapped__];return Gt.apply(t,arguments),n.apply(a,t)})}),a.first=gt,a.last=function(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;
for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[u-1];return V(n,te(0,u-r))}},a.take=gt,a.head=gt,me(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);return null==t||e&&typeof t!="function"?r:new K(r)})}),a.VERSION="1.1.1",a.prototype.toString=function(){return qt(this.__wrapped__)},a.prototype.value=xt,a.prototype.valueOf=xt,pe(["join","pop","shift"],function(n){var t=Ft[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)
}}),pe(["push","reverse","sort","unshift"],function(n){var t=Ft[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),pe(["concat","slice","splice"],function(n){var t=Ft[n];a.prototype[n]=function(){return new K(t.apply(this.__wrapped__,arguments))}}),ie.spliceObjects||pe(["pop","shift","splice"],function(n){var t=Ft[n],e="splice"==n;a.prototype[n]=function(){var n=this.__wrapped__,r=t.apply(n,arguments);return 0===n.length&&delete n[0],e?new K(r):r}}),a}var e,r=typeof exports=="object"&&exports,u=typeof module=="object"&&module&&module.exports==r&&module,a=typeof global=="object"&&global;
a.global===a&&(n=a);var o=0,i={},f=/\b__p\+='';/g,c=/\b(__p\+=)''\+/g,l=/(__e\(.*?\)|\b__t\))\+'';/g,p=/&(?:amp|lt|gt|quot|#39);/g,s=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,v=/\w*$/,g=/<%=([\s\S]+?)%>/g,h=/^0+(?=.$)/,y=/($^)/,m=/[&<>"']/g,d=/['\n\r\t\u2028\u2029\\]/g,b="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),C="[object Arguments]",w="[object Array]",j="[object Boolean]",k="[object Date]",x="[object Function]",O="[object Number]",E="[object Object]",S="[object RegExp]",A="[object String]",I={};
I[x]=!1,I[C]=I[w]=I[j]=I[k]=I[O]=I[E]=I[S]=I[A]=!0;var P={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},N={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},$=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd&&false?(n._=$,define(function(){return $})):r&&!r.nodeType?u?(u.exports=$)._=$:r._=$:n._=$})(this);

var WL_ = _;
var _ = undefined;

/**
 * ================================================================= 
 * Source file taken from :: sjcl.min.js
 * ================================================================= 
 */

/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* SJCL minified. http://crypto.stanford.edu/sjcl/
The following *.js files from SJCL are in their source, with the following being our usage:

aes.js
bitArray.js
bn.js  -- excluded
cbc.js  -- excluded
ccm.js
codecBase64.js
codecBytes.js  -- excluded
codecHex.js
codecString.js
convenience.js
ecc.js  -- excluded
hmac.js
ocb2.js  -- excluded
pbkdf2.js
random.js
sha1.js  -- excluded
sha256.js
sjcl.js  -- excluded
srp.js  -- excluded

 */

"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
if(typeof module!="undefined"&&module.exports)module.exports=sjcl;
sjcl.cipher.aes=function(a){this.h[0][0][0]||this.z();var b,c,d,e,f=this.h[0][4],g=this.h[1];b=a.length;var h=1;if(b!==4&&b!==6&&b!==8)throw new sjcl.exception.invalid("invalid aes key size");this.a=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(a%b===0||b===8&&a%b===4){c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255];if(a%b===0){c=c<<8^c>>>24^h<<24;h=h<<1^(h>>7)*283}}d[a]=d[a-b]^c}for(b=0;a;b++,a--){c=d[b&3?a:a-4];e[b]=a<=4||b<4?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^
g[3][f[c&255]]}};
sjcl.cipher.aes.prototype={encrypt:function(a){return this.I(a,0)},decrypt:function(a){return this.I(a,1)},h:[[[],[],[],[],[]],[[],[],[],[],[]]],z:function(){var a=this.h[0],b=this.h[1],c=a[4],d=b[4],e,f,g,h=[],i=[],k,j,l,m;for(e=0;e<0x100;e++)i[(h[e]=e<<1^(e>>7)*283)^e]=e;for(f=g=0;!c[f];f^=k||1,g=i[g]||1){l=g^g<<1^g<<2^g<<3^g<<4;l=l>>8^l&255^99;c[f]=l;d[l]=f;j=h[e=h[k=h[f]]];m=j*0x1010101^e*0x10001^k*0x101^f*0x1010100;j=h[l]*0x101^l*0x1010100;for(e=0;e<4;e++){a[e][f]=j=j<<24^j>>>8;b[e][l]=m=m<<24^m>>>8}}for(e=
0;e<5;e++){a[e]=a[e].slice(0);b[e]=b[e].slice(0)}},I:function(a,b){if(a.length!==4)throw new sjcl.exception.invalid("invalid aes block size");var c=this.a[b],d=a[0]^c[0],e=a[b?3:1]^c[1],f=a[2]^c[2];a=a[b?1:3]^c[3];var g,h,i,k=c.length/4-2,j,l=4,m=[0,0,0,0];g=this.h[b];var n=g[0],o=g[1],p=g[2],q=g[3],r=g[4];for(j=0;j<k;j++){g=n[d>>>24]^o[e>>16&255]^p[f>>8&255]^q[a&255]^c[l];h=n[e>>>24]^o[f>>16&255]^p[a>>8&255]^q[d&255]^c[l+1];i=n[f>>>24]^o[a>>16&255]^p[d>>8&255]^q[e&255]^c[l+2];a=n[a>>>24]^o[d>>16&
255]^p[e>>8&255]^q[f&255]^c[l+3];l+=4;d=g;e=h;f=i}for(j=0;j<4;j++){m[b?3&-j:j]=r[d>>>24]<<24^r[e>>16&255]<<16^r[f>>8&255]<<8^r[a&255]^c[l++];g=d;d=e;e=f;f=a;a=g}return m}};
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.P(a.slice(b/32),32-(b&31)).slice(1);return c===undefined?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(a.length===0||b.length===0)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return d===32?a.concat(b):sjcl.bitArray.P(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;
if(b===0)return 0;return(b-1)*32+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(a.length*32<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;if(c>0&&b)a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1);return a},partial:function(a,b,c){if(a===32)return b;return(c?b|0:b<<32-a)+a*0x10000000000},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return false;var c=0,d;for(d=0;d<a.length;d++)c|=
a[d]^b[d];return c===0},P:function(a,b,c,d){var e;e=0;if(d===undefined)d=[];for(;b>=32;b-=32){d.push(c);c=0}if(b===0)return d.concat(a);for(e=0;e<a.length;e++){d.push(c|a[e]>>>b);c=a[e]<<32-b}e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,b+a>32?c:d.pop(),1));return d},k:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++){if((d&3)===0)e=a[d/4];b+=String.fromCharCode(e>>>24);e<<=8}return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++){d=d<<8|a.charCodeAt(c);if((c&3)===3){b.push(d);d=0}}c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,d*4)}};
sjcl.codec.base64={F:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.F,g=0,h=sjcl.bitArray.bitLength(a);if(c)f=f.substr(0,62)+"-_";for(c=0;d.length*6<h;){d+=f.charAt((g^a[c]>>>e)>>>26);if(e<6){g=a[c]<<6-e;e+=26;c++}else{g<<=6;e-=6}}for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d=0,e=sjcl.codec.base64.F,f=0,g;if(b)e=e.substr(0,62)+"-_";for(b=0;b<a.length;b++){g=e.indexOf(a.charAt(b));
if(g<0)throw new sjcl.exception.invalid("this isn't base64!");if(d>26){d-=26;c.push(f^g>>>d);f=g<<32-d}else{d+=6;f^=g<<32-d}}d&56&&c.push(sjcl.bitArray.partial(d&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.a[0]||this.z();if(a){this.n=a.n.slice(0);this.i=a.i.slice(0);this.e=a.e}else this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.n=this.N.slice(0);this.i=[];this.e=0;return this},update:function(a){if(typeof a==="string")a=sjcl.codec.utf8String.toBits(a);var b,c=this.i=sjcl.bitArray.concat(this.i,a);b=this.e;a=this.e=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b+=512)this.D(c.splice(0,16));return this},finalize:function(){var a,b=this.i,c=this.n;b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.e/
4294967296));for(b.push(this.e|0);b.length;)this.D(b.splice(0,16));this.reset();return c},N:[],a:[],z:function(){function a(e){return(e-Math.floor(e))*0x100000000|0}var b=0,c=2,d;a:for(;b<64;c++){for(d=2;d*d<=c;d++)if(c%d===0)continue a;if(b<8)this.N[b]=a(Math.pow(c,0.5));this.a[b]=a(Math.pow(c,1/3));b++}},D:function(a){var b,c,d=a.slice(0),e=this.n,f=this.a,g=e[0],h=e[1],i=e[2],k=e[3],j=e[4],l=e[5],m=e[6],n=e[7];for(a=0;a<64;a++){if(a<16)b=d[a];else{b=d[a+1&15];c=d[a+14&15];b=d[a&15]=(b>>>7^b>>>18^
b>>>3^b<<25^b<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+d[a&15]+d[a+9&15]|0}b=b+n+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(m^j&(l^m))+f[a];n=m;m=l;l=j;j=k+b|0;k=i;i=h;h=g;g=b+(h&i^k&(h^i))+(h>>>2^h>>>13^h>>>22^h<<30^h<<19^h<<10)|0}e[0]=e[0]+g|0;e[1]=e[1]+h|0;e[2]=e[2]+i|0;e[3]=e[3]+k|0;e[4]=e[4]+j|0;e[5]=e[5]+l|0;e[6]=e[6]+m|0;e[7]=e[7]+n|0}};
sjcl.mode.ccm={name:"ccm",encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,i=h.bitLength(c)/8,k=h.bitLength(g)/8;e=e||64;d=d||[];if(i<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;f<4&&k>>>8*f;f++);if(f<15-i)f=15-i;c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm.H(a,b,c,d,e,f);g=sjcl.mode.ccm.J(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),i=f.clamp(b,h-e),k=f.bitSlice(b,
h-e);h=(h-e)/8;if(g<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;b<4&&h>>>8*b;b++);if(b<15-g)b=15-g;c=f.clamp(c,8*(15-b));i=sjcl.mode.ccm.J(a,i,c,k,e,b);a=sjcl.mode.ccm.H(a,i.data,c,d,e,b);if(!f.equal(i.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");return i.data},H:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,i=h.k;e/=8;if(e%2||e<4||e>16)throw new sjcl.exception.invalid("ccm: invalid tag length");if(d.length>0xffffffff||b.length>0xffffffff)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
f=[h.partial(8,(d.length?64:0)|e-2<<2|f-1)];f=h.concat(f,c);f[3]|=h.bitLength(b)/8;f=a.encrypt(f);if(d.length){c=h.bitLength(d)/8;if(c<=65279)g=[h.partial(16,c)];else if(c<=0xffffffff)g=h.concat([h.partial(16,65534)],[c]);g=h.concat(g,d);for(d=0;d<g.length;d+=4)f=a.encrypt(i(f,g.slice(d,d+4).concat([0,0,0])))}for(d=0;d<b.length;d+=4)f=a.encrypt(i(f,b.slice(d,d+4).concat([0,0,0])));return h.clamp(f,e*8)},J:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.k;var i=b.length,k=h.bitLength(b);c=h.concat([h.partial(8,
f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!i)return{tag:d,data:[]};for(g=0;g<i;g+=4){c[3]++;e=a.encrypt(c);b[g]^=e[0];b[g+1]^=e[1];b[g+2]^=e[2];b[g+3]^=e[3]}return{tag:d,data:h.clamp(b,k)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(sjcl.bitArray.bitLength(c)!==128)throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.B,i=sjcl.bitArray,k=i.k,j=[0,0,0,0];c=h(a.encrypt(c));var l,m=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4){l=b.slice(g,g+4);j=k(j,l);m=m.concat(k(c,a.encrypt(k(c,l))));c=h(c)}l=b.slice(g);b=i.bitLength(l);g=a.encrypt(k(c,[0,0,0,b]));l=i.clamp(k(l.concat([0,0,0]),g),b);j=k(j,k(l.concat([0,0,0]),g));j=a.encrypt(k(j,k(c,h(c))));
if(d.length)j=k(j,f?d:sjcl.mode.ocb2.pmac(a,d));return m.concat(i.concat(l,i.clamp(j,e)))},decrypt:function(a,b,c,d,e,f){if(sjcl.bitArray.bitLength(c)!==128)throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.B,h=sjcl.bitArray,i=h.k,k=[0,0,0,0],j=g(a.encrypt(c)),l,m,n=sjcl.bitArray.bitLength(b)-e,o=[];d=d||[];for(c=0;c+4<n/32;c+=4){l=i(j,a.decrypt(i(j,b.slice(c,c+4))));k=i(k,l);o=o.concat(l);j=g(j)}m=n-c*32;l=a.encrypt(i(j,[0,0,0,m]));l=i(l,h.clamp(b.slice(c),
m).concat([0,0,0]));k=i(k,l);k=a.encrypt(i(k,i(j,g(j))));if(d.length)k=i(k,f?d:sjcl.mode.ocb2.pmac(a,d));if(!h.equal(h.clamp(k,e),h.bitSlice(b,n)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return o.concat(h.clamp(l,m))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.B,e=sjcl.bitArray,f=e.k,g=[0,0,0,0],h=a.encrypt([0,0,0,0]);h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4){h=d(h);g=f(g,a.encrypt(f(h,b.slice(c,c+4))))}b=b.slice(c);if(e.bitLength(b)<128){h=f(h,d(h));b=e.concat(b,[2147483648|0,0,
0,0])}g=f(g,b);return a.encrypt(f(d(f(h,d(h))),g))},B:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^(a[0]>>>31)*135]}};sjcl.misc.hmac=function(a,b){this.M=b=b||sjcl.hash.sha256;var c=[[],[]],d=b.prototype.blockSize/32;this.l=[new b,new b];if(a.length>d)a=b.hash(a);for(b=0;b<d;b++){c[0][b]=a[b]^909522486;c[1][b]=a[b]^1549556828}this.l[0].update(c[0]);this.l[1].update(c[1])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a,b){a=(new this.M(this.l[0])).update(a,b).finalize();return(new this.M(this.l[1])).update(a).finalize()};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;if(d<0||c<0)throw sjcl.exception.invalid("invalid params to pbkdf2");if(typeof a==="string")a=sjcl.codec.utf8String.toBits(a);e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,i,k=[],j=sjcl.bitArray;for(i=1;32*k.length<(d||1);i++){e=f=a.encrypt(j.concat(b,[i]));for(g=1;g<c;g++){f=a.encrypt(f);for(h=0;h<f.length;h++)e[h]^=f[h]}k=k.concat(e)}if(d)k=j.clamp(k,d);return k};
sjcl.random={randomWords:function(a,b){var c=[];b=this.isReady(b);var d;if(b===0)throw new sjcl.exception.notReady("generator isn't seeded");else b&2&&this.U(!(b&1));for(b=0;b<a;b+=4){(b+1)%0x10000===0&&this.L();d=this.w();c.push(d[0],d[1],d[2],d[3])}this.L();return c.slice(0,a)},setDefaultParanoia:function(a){this.t=a},addEntropy:function(a,b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.q[c],h=this.isReady(),i=0;d=this.G[c];if(d===undefined)d=this.G[c]=this.R++;if(g===undefined)g=this.q[c]=
0;this.q[c]=(this.q[c]+1)%this.b.length;switch(typeof a){case "number":if(b===undefined)b=1;this.b[g].update([d,this.u++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if(c==="[object Uint32Array]"){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{if(c!=="[object Array]")i=1;for(c=0;c<a.length&&!i;c++)if(typeof a[c]!="number")i=1}if(!i){if(b===undefined)for(c=b=0;c<a.length;c++)for(e=a[c];e>0;){b++;e>>>=1}this.b[g].update([d,this.u++,2,b,f,a.length].concat(a))}break;case "string":if(b===
undefined)b=a.length;this.b[g].update([d,this.u++,3,b,f,a.length]);this.b[g].update(a);break;default:i=1}if(i)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.j[g]+=b;this.f+=b;if(h===0){this.isReady()!==0&&this.K("seeded",Math.max(this.g,this.f));this.K("progress",this.getProgress())}},isReady:function(a){a=this.C[a!==undefined?a:this.t];return this.g&&this.g>=a?this.j[0]>80&&(new Date).valueOf()>this.O?3:1:this.f>=a?2:0},getProgress:function(a){a=
this.C[a?a:this.t];return this.g>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.m){if(window.addEventListener){window.addEventListener("load",this.o,false);window.addEventListener("mousemove",this.p,false)}else if(document.attachEvent){document.attachEvent("onload",this.o);document.attachEvent("onmousemove",this.p)}else throw new sjcl.exception.bug("can't attach event");this.m=true}},stopCollectors:function(){if(this.m){if(window.removeEventListener){window.removeEventListener("load",
this.o,false);window.removeEventListener("mousemove",this.p,false)}else if(window.detachEvent){window.detachEvent("onload",this.o);window.detachEvent("onmousemove",this.p)}this.m=false}},addEventListener:function(a,b){this.r[a][this.Q++]=b},removeEventListener:function(a,b){var c;a=this.r[a];var d=[];for(c in a)a.hasOwnProperty(c)&&a[c]===b&&d.push(c);for(b=0;b<d.length;b++){c=d[b];delete a[c]}},b:[new sjcl.hash.sha256],j:[0],A:0,q:{},u:0,G:{},R:0,g:0,f:0,O:0,a:[0,0,0,0,0,0,0,0],d:[0,0,0,0],s:undefined,
t:6,m:false,r:{progress:{},seeded:{}},Q:0,C:[0,48,64,96,128,192,0x100,384,512,768,1024],w:function(){for(var a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}return this.s.encrypt(this.d)},L:function(){this.a=this.w().concat(this.w());this.s=new sjcl.cipher.aes(this.a)},T:function(a){this.a=sjcl.hash.sha256.hash(this.a.concat(a));this.s=new sjcl.cipher.aes(this.a);for(a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}},U:function(a){var b=[],c=0,d;this.O=b[0]=(new Date).valueOf()+3E4;for(d=
0;d<16;d++)b.push(Math.random()*0x100000000|0);for(d=0;d<this.b.length;d++){b=b.concat(this.b[d].finalize());c+=this.j[d];this.j[d]=0;if(!a&&this.A&1<<d)break}if(this.A>=1<<this.b.length){this.b.push(new sjcl.hash.sha256);this.j.push(0)}this.f-=c;if(c>this.g)this.g=c;this.A++;this.T(b)},p:function(a){sjcl.random.addEntropy([a.x||a.clientX||a.offsetX,a.y||a.clientY||a.offsetY],2,"mouse")},o:function(){sjcl.random.addEntropy((new Date).valueOf(),2,"loadtime")},K:function(a,b){var c;a=sjcl.random.r[a];
var d=[];for(c in a)a.hasOwnProperty(c)&&d.push(a[c]);for(c=0;c<d.length;c++)d[c](b)}};try{var s=new Uint32Array(32);crypto.getRandomValues(s);sjcl.random.addEntropy(s,1024,"crypto['getRandomValues']")}catch(t){}
sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},encrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.c({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.c(f,c);c=f.adata;if(typeof f.salt==="string")f.salt=sjcl.codec.base64.toBits(f.salt);if(typeof f.iv==="string")f.iv=sjcl.codec.base64.toBits(f.iv);if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||typeof a==="string"&&f.iter<=100||f.ts!==64&&f.ts!==96&&f.ts!==128||f.ks!==128&&f.ks!==192&&f.ks!==0x100||f.iv.length<
2||f.iv.length>4)throw new sjcl.exception.invalid("json encrypt: invalid parameters");if(typeof a==="string"){g=sjcl.misc.cachedPbkdf2(a,f);a=g.key.slice(0,f.ks/32);f.salt=g.salt}if(typeof b==="string")b=sjcl.codec.utf8String.toBits(b);if(typeof c==="string")c=sjcl.codec.utf8String.toBits(c);g=new sjcl.cipher[f.cipher](a);e.c(d,f);d.key=a;f.ct=sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return e.encode(f)},decrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.c(e.c(e.c({},e.defaults),e.decode(b)),
c,true);var f;c=b.adata;if(typeof b.salt==="string")b.salt=sjcl.codec.base64.toBits(b.salt);if(typeof b.iv==="string")b.iv=sjcl.codec.base64.toBits(b.iv);if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||typeof a==="string"&&b.iter<=100||b.ts!==64&&b.ts!==96&&b.ts!==128||b.ks!==128&&b.ks!==192&&b.ks!==0x100||!b.iv||b.iv.length<2||b.iv.length>4)throw new sjcl.exception.invalid("json decrypt: invalid parameters");if(typeof a==="string"){f=sjcl.misc.cachedPbkdf2(a,b);a=f.key.slice(0,b.ks/32);b.salt=f.salt}if(typeof c===
"string")c=sjcl.codec.utf8String.toBits(c);f=new sjcl.cipher[b.cipher](a);c=sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,c,b.ts);e.c(d,b);d.key=a;return sjcl.codec.utf8String.fromBits(c)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+
sjcl.codec.base64.fromBits(a[b],1)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");b[d[2]]=
d[3]?parseInt(d[3],10):d[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4])}return b},c:function(a,b,c){if(a===undefined)a={};if(b===undefined)return a;var d;for(d in b)if(b.hasOwnProperty(d)){if(c&&a[d]!==undefined&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},W:function(a,b){var c={},d;for(d in a)if(a.hasOwnProperty(d)&&a[d]!==b[d])c[d]=a[d];return c},V:function(a,b){var c={},d;for(d=0;d<b.length;d++)if(a[b[d]]!==undefined)c[b[d]]=
a[b[d]];return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.S={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.S,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===undefined?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};

/*
  sha1.js
*/
sjcl.hash.sha1=function(a){a?(this._h=a._h.slice(0),this._buffer=a._buffer.slice(0),this._length=a._length):this.reset()};sjcl.hash.sha1.hash=function(a){return(new sjcl.hash.sha1).update(a).finalize()};
sjcl.hash.sha1.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);this._buffer=[];this._length=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this._buffer=sjcl.bitArray.concat(this._buffer,a);b=this._length;a=this._length=b+sjcl.bitArray.bitLength(a);for(b=this.blockSize+b&-this.blockSize;b<=a;b+=this.blockSize)this._block(c.splice(0,16));return this},finalize:function(){var a,b=this._buffer,c=this._h,b=sjcl.bitArray.concat(b,
[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this._length/4294967296));for(b.push(this._length|0);b.length;)this._block(b.splice(0,16));this.reset();return c},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(a,b,c,e){if(19>=a)return b&c|~b&e;if(39>=a)return b^c^e;if(59>=a)return b&c|b&e|c&e;if(79>=a)return b^c^e},_S:function(a,b){return b<<a|b>>>32-a},_block:function(a){var b,c,e,g,h,
k,f=a.slice(0),d=this._h;c=d[0];e=d[1];g=d[2];h=d[3];k=d[4];for(a=0;79>=a;a++)16<=a&&(f[a]=this._S(1,f[a-3]^f[a-8]^f[a-14]^f[a-16])),b=this._S(5,c)+this._f(a,e,g,h)+k+f[a]+this._key[Math.floor(a/20)]|0,k=h,h=g,g=this._S(30,e),e=c,c=b;d[0]=d[0]+c|0;d[1]=d[1]+e|0;d[2]=d[2]+g|0;d[3]=d[3]+h|0;d[4]=d[4]+k|0}};


/**
 * ================================================================= 
 * Source file taken from :: stacktrace.min.js
 * ================================================================= 
 */

// Domain Public by Eric Wendelin http://eriwen.com/ (2008)
//                  Luke Smith http://lucassmith.name/ (2008)
//                  Loic Dachary <loic@dachary.org> (2008)
//                  Johan Euphrosine <proppy@aminche.com> (2008)
//                  Oyvind Sean Kinsey http://kinsey.no/blog (2010)
//                  Victor Homyakov <victor-homyakov@users.sourceforge.net> (2010)
// https://github.com/eriwen/javascript-stacktrace/blob/v0.5.0/stacktrace.js
function printStackTrace(e){e=e||{guess:true};var t=e.e||null,n=!!e.guess;var r=new printStackTrace.implementation,i=r.run(t);return n?r.guessAnonymousFunctions(i):i}if(typeof module!=="undefined"&&module.exports){module.exports=printStackTrace}printStackTrace.implementation=function(){};printStackTrace.implementation.prototype={run:function(e,t){e=e||this.createException();t=t||this.mode(e);if(t==="other"){return this.other(arguments.callee)}else{return this[t](e)}},createException:function(){try{this.undef()}catch(e){return e}},mode:function(e){if(e["arguments"]&&e.stack){return"chrome"}else if(e.stack&&e.sourceURL){return"safari"}else if(e.stack&&e.number){return"ie"}else if(typeof e.message==="string"&&typeof window!=="undefined"&&window.opera){if(!e.stacktrace){return"opera9"}if(e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length){return"opera9"}if(!e.stack){return"opera10a"}if(e.stacktrace.indexOf("called from line")<0){return"opera10b"}return"opera11"}else if(e.stack){return"firefox"}return"other"},instrumentFunction:function(e,t,n){e=e||window;var r=e[t];e[t]=function(){n.call(this,printStackTrace().slice(4));return e[t]._instrumented.apply(this,arguments)};e[t]._instrumented=r},deinstrumentFunction:function(e,t){if(e[t].constructor===Function&&e[t]._instrumented&&e[t]._instrumented.constructor===Function){e[t]=e[t]._instrumented}},chrome:function(e){var t=(e.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");t.pop();return t},safari:function(e){return e.stack.replace(/\[native code\]\n/m,"").replace(/^(?=\w+Error\:).*$\n/m,"").replace(/^@/gm,"{anonymous}()@").split("\n")},ie:function(e){var t=/^.*at (\w+) \(([^\)]+)\)$/gm;return e.stack.replace(/at Anonymous function /gm,"{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m,"").replace(t,"$1@$2").split("\n")},firefox:function(e){return e.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^[\(@]/gm,"{anonymous}()@").split("\n")},opera11:function(e){var t="{anonymous}",n=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;var r=e.stacktrace.split("\n"),i=[];for(var s=0,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){var a=u[4]+":"+u[1]+":"+u[2];var f=u[3]||"global code";f=f.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,t);i.push(f+"@"+a+" -- "+r[s+1].replace(/^\s+/,""))}}return i},opera10b:function(e){var t=/^(.*)@(.+):(\d+)$/;var n=e.stacktrace.split("\n"),r=[];for(var i=0,s=n.length;i<s;i++){var o=t.exec(n[i]);if(o){var u=o[1]?o[1]+"()":"global code";r.push(u+"@"+o[2]+":"+o[3])}}return r},opera10a:function(e){var t="{anonymous}",n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;var r=e.stacktrace.split("\n"),i=[];for(var s=0,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){var a=u[3]||t;i.push(a+"()@"+u[2]+":"+u[1]+" -- "+r[s+1].replace(/^\s+/,""))}}return i},opera9:function(e){var t="{anonymous}",n=/Line (\d+).*script (?:in )?(\S+)/i;var r=e.message.split("\n"),i=[];for(var s=2,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){i.push(t+"()@"+u[2]+":"+u[1]+" -- "+r[s+1].replace(/^\s+/,""))}}return i},other:function(e){var t="{anonymous}",n=/function\s*([\w\-$]+)?\s*\(/i,r=[],i,s,o=10;while(e&&e["arguments"]&&r.length<o){i=n.test(e.toString())?RegExp.$1||t:t;s=Array.prototype.slice.call(e["arguments"]||[]);r[r.length]=i+"("+this.stringifyArguments(s)+")";e=e.caller}return r},stringifyArguments:function(e){var t=[];var n=Array.prototype.slice;for(var r=0;r<e.length;++r){var i=e[r];if(i===undefined){t[r]="undefined"}else if(i===null){t[r]="null"}else if(i.constructor){if(i.constructor===Array){if(i.length<3){t[r]="["+this.stringifyArguments(i)+"]"}else{t[r]="["+this.stringifyArguments(n.call(i,0,1))+"..."+this.stringifyArguments(n.call(i,-1))+"]"}}else if(i.constructor===Object){t[r]="#object"}else if(i.constructor===Function){t[r]="#function"}else if(i.constructor===String){t[r]='"'+i+'"'}else if(i.constructor===Number){t[r]=i}}}return t.join(",")},sourceCache:{},ajax:function(e){var t=this.createXMLHTTPObject();if(t){try{t.open("GET",e,false);t.send(null);return t.responseText}catch(n){}}return""},createXMLHTTPObject:function(){var e,t=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(var n=0;n<t.length;n++){try{e=t[n]();this.createXMLHTTPObject=t[n];return e}catch(r){}}},isSameDomain:function(e){return typeof location!=="undefined"&&e.indexOf(location.hostname)!==-1},getSource:function(e){if(!(e in this.sourceCache)){this.sourceCache[e]=this.ajax(e).split("\n")}return this.sourceCache[e]},guessAnonymousFunctions:function(e){for(var t=0;t<e.length;++t){var n=/\{anonymous\}\(.*\)@(.*)/,r=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,i=e[t],s=n.exec(i);if(s){var o=r.exec(s[1]);if(o){var u=o[1],a=o[2],f=o[3]||0;if(u&&this.isSameDomain(u)&&a){var l=this.guessAnonymousFunction(u,a,f);e[t]=i.replace("{anonymous}",l)}}}}return e},guessAnonymousFunction:function(e,t,n){var r;try{r=this.findFunctionName(this.getSource(e),t)}catch(i){r="getSource failed with url: "+e+", exception: "+i.toString()}return r},findFunctionName:function(e,t){var n=/function\s+([^(]*?)\s*\(([^)]*)\)/;var r=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;var i=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;var s="",o,u=Math.min(t,20),a,f;for(var l=0;l<u;++l){o=e[t-l-1];f=o.indexOf("//");if(f>=0){o=o.substr(0,f)}if(o){s=o+s;a=r.exec(s);if(a&&a[1]){return a[1]}a=n.exec(s);if(a&&a[1]){return a[1]}a=i.exec(s);if(a&&a[1]){return a[1]}}}return"(?)"}}


/**
 * ================================================================= 
 * Source file taken from :: wljsx.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function __WL(){}
var WL = WL ? WL : {};

window.WLJSX = {
	/*
	 * Constant values, required for prototype.js functionality 
	 */
	emptyFunction: function (){},
	
	/*
	 * Search for an element with a specified ID and returns it as a DOM element. 
	 * Returns null if element is not found 
	 * 
	 * @Param selector - a string with the requires DOM element's Id
	 */
	$ : function(id) {
		var elements = WLJQ("#" + id);
		if (elements.length == 0) {
			return null;
		} else {
			return elements[0];
		}
	},

	/*
	 * Searches for the elements with a specified selector and returns them as an array of DOM elements 
	 * 
	 * @Param selector - a string representing a CSS selector
	 */
	$$ : function(selector) {
		return WLJQ(selector);
	},
	
	$$$ : function(elem) {
		var elements = WLJQ(elem);
		if (elements.length == 0) {
			return null;
		} else {
			return elements[0];
		}
	},

	/*
	 * Same as $$ but searches inside of a given element only. Returns array of DOM elements 
	 * 
	 * @Param el - the DOM element to search inside of 
	 * @Param selector - a string representing a CSS selector
	 */
	find : function(el, selector) {
		return WLJQ(el).find(selector);
	},

	/*
	 * Creates a new DOM element and returns it 
	 * 
	 * @Param type - a string representing the element type (tag name, e.g. "<div/>") 
	 * @Param attrs - an object of attributes to be added to newly created element
	 */
	newElement : function(type, attrs) {
		return WLJQ(type, attrs)[0];
	},

	/*
	 * Appends the content before the end of a DOM element 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to append content to 
	 * @Param content - new content to be appended
	 */
	append : function(el, content) {
		WLJQ(el).append(content);
	},

	/*
	 * Prepends the content at the beginning of a DOM element 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to prepend content to 
	 * @Param content - new content to be prepended
	 */
	prepend : function(el, content) {
		WLJQ(el).prepend(content);
	},

	/*
	 * Sets or Gets DOM element's content 
	 * 
	 * @Param el - the DOM element to update content in 
	 * @Param content - new content, can be string or other DOM elements
	 */
	html : function(el, content) {
		if (content) {
			WLJQ(el).html(content);
		} else {
			return WLJQ(el).html();
		}
	},

	/*
	 * Empties the content of a given DOM element 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to empty
	 */
	empty : function(el) {
		WLJQ(el).empty();
	},

	/*
	 * Shows a DOM element (makes visible) 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to make visible
	 */
	show : function(el) {
		WLJQ(el).show();
	},

	/*
	 * Hides a DOM element (makes invisible) 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to hide
	 */
	hide : function(el) {
		WLJQ(el).hide();
	},

	/*
	 * Adds a specified CSS class to DOM elements 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to add the CSS class to 
	 * @Param className - string with the class' name
	 */
	addClass : function(el, className) {
		WLJQ(el).addClass(className);
	},

	/*
	 * Removes a specified CSS class from DOM elements 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to remove the CSS class from 
	 * @Param className - string with the class' name
	 */
	removeClass : function(el, className) {
		WLJQ(el).removeClass(className);
	},

	/*
	 * Sets or Gets the width of a DOM element (first one in case several elements fit CSS selector) 
	 * 
	 * @Param el - the DOM element to get/set width 
	 * @Param width - new width to set
	 */
	width : function(el, width) {
		if (width) {
			WLJQ(el).width(width);
		} else {
			return WLJQ(el).width();
		}
	},

	/*
	 * Sets or Gets the height of a DOM element (first one in case several elements fit CSS selector) 
	 * 
	 * @Param el - the DOM element to get/set height 
	 * @Param height - new height to set
	 */
	height : function(el, height) {
		if (height) {
			WLJQ(el).height(height);
		} else {
			return WLJQ(el).height();
		}
	},

	/*
	 * Removes an element from the DOM. 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to remove
	 */
	remove : function(el) {
		WLJQ(el).remove();
	},

	/*
	 * Sets specific CSS style on the DOM elements 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to set CSS style on 
	 * @Param style - an object of CSS styles to be set
	 */
	css : function(el, style) {
		WLJQ(el).css(style);
	},

	/*
	 * Sets or Gets the attribute of a DOM element 
	 * 
	 * @Param el - the DOM element to get/set attribute 
	 * @Param attrName - the name of an attribute 
	 * @Param attrValue - the new value of the attribute
	 */
	attr : function(el, attrName, attrValue) {
		if (attrValue) {
			WLJQ(el).attr(attrName, attrValue);
		} else {
			return WLJQ(el).attr(attrName);
		}
	},

	/*
	 * Adds the event listener to DOM elements for a specified event 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to add event listener to 
	 * @Param event - string with the event's name, e.g. "click", "change" etc. 
	 * @Param callback - a JavaScript function to be invoked once event is triggered
	 */
	bind : function(el, event, callback) {
		WLJQ(el).bind(event, callback);
	},

	/*
	 * Removes the event listener from DOM elements 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to remove event listener form 
	 * @Param event - string with the event's name, e.g. "click", "change" etc.
	 */
	unbind : function(el, event) {
		if (event) {
			WLJQ(el).unbind(event);
		} else {
			WLJQ(el).unbind();
		}
	},

	/*
	 * Triggers a specific event on DOM elements 
	 * 
	 * @Param el - the DOM element (or CSS selector string) to trigger the event on 
	 * @Param event - string with the event's name, e.g. "click", "change" etc.
	 */
	trigger : function(el, event) {
		WLJQ(el).trigger(event);
	},

	/*
	 * Retrieves the element that triggered the event (event's target) 
	 * 
	 * @Param event - event to get the target from
	 */
	eventTarget : function(event) {
		return event.target;
	},
	
	/*
	 * Detects browser types. Implementation taken from Prototype.js
	 */
	detectBrowser: function (){
		var userAgent = navigator.userAgent;
		var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
		return {
			isIE 			: !!window.attachEvent && !isOpera,
			isOpera 		: isOpera,
			isWebKit 		: userAgent.indexOf('AppleWebKit/') > -1,
			isGecko 		: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1,
			isMobileSafari 	: /Apple.*Mobile/.test(userAgent)
		};
	},
	
	/*
	 * Returns viewport root element depending on a browser. Implementation taken from Prototype.js
	 */
	getViewportRootElement: function (){
		var browser = WLJSX.detectBrowser();
		
		if (browser.isWebKit && !document.evaluate)
			return document;
		
		if (browser.isOpera && window.parseFloat(window.opera.version()) < 9.5)
			return document.body;

		return document.documentElement;
	},
	
	/*
	 * Returns the width of a viewport
	 */
	getViewportWidth: function (){
		return (this.getViewportRootElement())["clientWidth"];		
	},

	/*
	 * Returns the height of a viewport
	 */
	getViewportHeight: function (){
		return (this.getViewportRootElement())["clientHeight"];
	}, 
	
	isEmptyObject: function(obj){
		return WLJQ.isEmptyObject(obj);
	}
	

};

/*
 * The following namespaces are taken from prototypejs framework and adopted to work with Worklight
 */

/*
 * Class object defines a Class.create API for object oriented JS approach
 */
window.WLJSX.Class = (function() {
	var IS_DONTENUM_BUGGY = (function(){
		for (var p in { toString: 1 }) {
			if (p === 'toString') return false;
		}
		return true;
	})();

	function subclass() {};
	function create() {
		var parent = null;
		var properties = WLJSX.Object.toArray(arguments);
		
		if (WLJSX.Object.isFunction(properties[0]))
			parent = properties.shift();

		function klass() {
			this.initialize.apply(this, arguments);
		}

		WLJSX.Object.extend(klass, WLJSX.Class.Methods);
		klass.superclass = parent;
		klass.subclasses = [];

		if (parent) {
			subclass.prototype = parent.prototype;
			klass.prototype = new subclass;
			parent.subclasses.push(klass);
		}

		for (var i = 0, length = properties.length; i < length; i++)
			klass.addMethods(properties[i]);

		if (!klass.prototype.initialize)
			klass.prototype.initialize = WLJSX.emptyFunction;

		klass.prototype.constructor = klass;
		return klass;
	}

	function addMethods(source) {
		var ancestor = this.superclass && this.superclass.prototype,
			properties = WLJSX.Object.keys(source);

		if (IS_DONTENUM_BUGGY) {
			if (source.toString != Object.prototype.toString)
				properties.push("toString");
			if (source.valueOf != Object.prototype.valueOf)
				properties.push("valueOf");
		}

		for (var i = 0, length = properties.length; i < length; i++) {
			var property = properties[i], 
				value = source[property];
			
			if (ancestor && WLJSX.Object.isFunction(value) && value.argumentNames()[0] == "__super") {
				var method = value;
				value = (function(m) {
					return function() { return ancestor[m].apply(this, arguments); };
				})(property).wrap(method);

				value.valueOf = method.valueOf.bind(method);
				value.toString = method.toString.bind(method);
			}
			this.prototype[property] = value;
		}
		return this;
	}

	return {
		create: create,
		Methods: {
			addMethods: addMethods
		}
	};
})();

/*
 * WLJSX.Object APIs are responsible for Object related functionality
 * 
 * WLJSX.Object.objectSize(obj) - returns the number of properties in the supplied object
 * WLJSX.Object.toArray(iterable) - coverts object to array
 * WLJSX.Object.toJSON(obj) - converts object to it's JSON representation
 * WLJSX.Object.extend(destination, source) - extends destination object with properties from the source object   
 * WLJSX.Object.toQueryString(obj) - converts object to a query string
 * WLJSX.Object.keys(obj) - returns object keys as array
 * WLJSX.Object.clone(obj) - returns a new copy of a supplied object
 * WLJSX.Object.isArray(obj) - checks whether object is an array
 * WLJSX.Object.isFunction(obj) - checks whether object is a function 
 * WLJSX.Object.isString(obj) - checks whether object is a string
 * WLJSX.Object.isNumber(obj) - checks whether object is a number
 * WLJSX.Object.isDate(obj) - checks whether object is a date
 * WLJSX.Object.isUndefined(obj) - checks whether object is undefined 
 */
window.WLJSX.Object = {
		_toString: Object.prototype.toString,
		NULL_TYPE: 'Null',
	UNDEFINED_TYPE: 'Undefined',
	BOOLEAN_TYPE: 'Boolean',
	NUMBER_TYPE: 'Number',
	STRING_TYPE: 'String',
	OBJECT_TYPE: 'Object',
	FUNCTION_CLASS: '[object Function]',
	BOOLEAN_CLASS: '[object Boolean]',
    NUMBER_CLASS: '[object Number]',
    STRING_CLASS: '[object String]',
    ARRAY_CLASS: '[object Array]',
    DATE_CLASS: '[object Date]',
    
    NATIVE_JSON_STRINGIFY_SUPPORT: (window.JSON &&
    	typeof JSON.stringify === 'function' &&
    	JSON.stringify(0) === '0' &&
    	typeof JSON.stringify(function(x) { return x; }) === 'undefined'),
	
    objectSize: function(obj){
		var count = 0;
		for (var key in obj)
			count++;
		return count;
	},

	toArray: function (iterable){
		if (!iterable) return [];
		if ('toArray' in Object(iterable)) return iterable.toArray();
		var length = iterable.length || 0;
		var result = new Array(length);
		while (length--) result[length] = iterable[length];
		return result;
	},
	
	Type: function (o) {
		switch(o) {
			case null: return WLJSX.Object.NULL_TYPE;
			case (void 0): return WLJSX.Object.UNDEFINED_TYPE;
		}
		var type = typeof o;
		switch(type) {
			case 'boolean': return WLJSX.Object.BOOLEAN_TYPE;
			case 'number':  return WLJSX.Object.NUMBER_TYPE;
			case 'string':  return WLJSX.Object.STRING_TYPE;
		}
		return WLJSX.Object.OBJECT_TYPE;
	},
	
	extend: function (destination, source) {
		for (var property in source)
			destination[property] = source[property];
		return destination;
	},
	
	toJSON: function(object) {
		if (WLJSX.Object.NATIVE_JSON_STRINGIFY_SUPPORT) 
			return JSON.stringify(object);
		else 
			return WLJSX.Object.Str('', { '': object }, []);
	},
	
	Str: function(key, holder, stack) {
		var value = holder[key];
		var type = typeof value;
			if (WLJSX.Object.Type(value) === WLJSX.Object.OBJECT_TYPE && typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
			var _class = WLJSX.Object._toString.call(value);
			switch (_class) {
			case WLJSX.Object.NUMBER_CLASS:
			case WLJSX.Object.BOOLEAN_CLASS:
			case WLJSX.Object.STRING_CLASS:
				value = value.valueOf();
		}
			switch (value) {
			case null: return 'null';
			case true: return 'true';
			case false: return 'false';
		}
			type = typeof value;
		switch (type) {
			case 'string':
				return value;
			case 'number':
				return isFinite(value) ? String(value) : 'null';
			case 'object':
				for (var i = 0, length = stack.length; i < length; i++) {
					if (stack[i] === value) { throw new TypeError(); }
				}
				stack.push(value);
					var partial = [];
				if (_class === WLJSX.Object.ARRAY_CLASS) {
					for (var i = 0, length = value.length; i < length; i++) {
						var str = WLJSX.Object.Str(i, value, stack);
						partial.push(typeof str === 'undefined' ? 'null' : str);
					}
					partial = '[' + partial.join(',') + ']';
				} else {
					var keys = WLJSX.Object.keys(value);
					for (var i = 0, length = keys.length; i < length; i++) {
						var key = keys[i];
						var str = WLJSX.Object.Str(key, value, stack);
						if (typeof str !== "undefined") {
							partial.push(WLJSX.String.inspect(key, true)+ ':' + str);
						}
					}
					partial = '{' + partial.join(',') + '}';
				}
				stack.pop();
				return partial;
		}
	},
	
	toQueryString: function(object) {
		var results = [];

		for (var key in object){
			key = encodeURIComponent(key);
			var value = object[key];
			var queryPair = (WLJSX.Object.isUndefined(value)) ? key : key + '=' + encodeURIComponent(WLJSX.String.interpret(value));
				results.push(queryPair);
			}		
		return results.join('&');
	},

	keys: function(object) {
		if (WLJSX.Object.Type(object) !== WLJSX.Object.OBJECT_TYPE) { throw new TypeError(); }
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				results.push(property);
			}
		}
		return results;
	},

	clone: function(object) {
		return WLJSX.Object.extend({ }, object);
	},

	isArray: function(object) {
		if ((typeof Array.isArray == 'function') && Array.isArray([]) && !Array.isArray({})) {
			return Array.isArray(object);
		} else {
			return WLJSX.Object._toString.call(object) === WLJSX.Object.ARRAY_CLASS;
			}
		},

	isFunction: function (object) {
		return WLJSX.Object._toString.call(object) === WLJSX.Object.FUNCTION_CLASS;
	},

	isString: function (object) {
		return WLJSX.Object._toString.call(object) === WLJSX.Object.STRING_CLASS;
	},

	isNumber: function(object) {
		return WLJSX.Object._toString.call(object) === WLJSX.Object.NUMBER_CLASS;
	},

	isDate: function(object) {
		return WLJSX.Object._toString.call(object) === WLJSX.Object.DATE_CLASS;
	},

	isUndefined: function(object) {
		return typeof object === "undefined";
	}
};

/*
 * WLJSX.String APIs are responsible for String related functionality
 * 
 * WLJSX.String.stripScripts(str) - stripts <script> tags from string
 * WLJSX.String.escapeHTML(str) - replaces &, < and > characters with their escaped HTML values
 * WLJSX.String.inspect(str) - Returns a debug-oriented version of the string (i.e. wrapped in single or double quotes, with backslashes and quotes escaped)
 * WLJSX.String.interpret(str) - Forces value into a string. Returns an empty string for null  
 * WLJSX.String.strip(str) - Strips all leading and trailing whitespace from a string
 * WLJSX.String.isJSON(str) - validates whether string is a valid JSON representation
 * WLJSX.String.isBlank(str) - Check if the string is "blank" � either empty (length of 0) or containing only whitespace.
 * WLJSX.String.unfilterJSON(str) - Strips comment delimiters around Ajax JSON or JavaScript responses. This security method is called internally
 * WLJSX.String.evalJSON(str) - Evaluates the JSON in the string and returns the resulting object
*/
window.WLJSX.String = {
	specialChar : {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'\\': '\\\\'
	},
	stripScripts: function (str){
		return str.replace(new RegExp('<script[^>]*>([\\S\\s]*?)<\/script>', 'img'), '');
	},
		
	escapeHTML: function(str){
		return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	},

	interpret: function(str){
		return str == null ? '' : String(str);
	},

	strip: function (str){
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	
	toQueryParams: function(str){
		var match = WLJSX.String.strip(str).match(/([^?#]*)(#.*)?$/);
		if (!match) return { };

		var paramsArray = match[1].split('&');
		var paramsObj = {};
		for (var i=0; i<paramsArray.length; i++){
			var pair = paramsArray[i].split('=');
			if (pair[0]) {
				var key = decodeURIComponent(pair.shift());
				var value = pair.length > 1 ? pair.join('=') : pair[0];
				if (value != undefined) value = decodeURIComponent(value);
				paramsObj[key] = value;
			}
		}
		return paramsObj;
	},

	isJSON: function(str){
		if (WLJSX.String.isBlank(str)) return false;
		str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
		str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
		str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
		return (/^[\],:{}\s]*$/).test(str);
	},

	isBlank: function(str){
			return /^\s*$/.test(str);
		},

	inspect: function (str, useDoubleQuotes){
		var escapedString = str.replace(/[\x00-\x1f\\]/g, function(character) {
			if (character in WLJSX.String.specialChar) {
				return WLJSX.String.specialChar[character];
			}
			return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
		});
		if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
		return "'" + escapedString.replace(/'/g, '\\\'') + "'";
	},
	
	unfilterJSON: function(str){
		return str.replace(/^\/\*-secure-([\s\S]*)\*\/\s*$/, '$1');
	},
	
	evalJSON: function(str, sanitize){
		var json = WLJSX.String.unfilterJSON(str);
		if (window.JSON && typeof JSON.parse === 'function' && JSON.parse('{"test": true}').test){
			// Native json parse support
			return JSON.parse(json);
		} else {
			// No native json parse support
			cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			if (cx.test(json)) {
				json = json.replace(cx, function (a) {
					return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}
			try {
				if (!sanitize || WLJSX.String.isJSON(json)) return eval('(' + json + ')');
			} catch (e) { }
			throw new SyntaxError('Badly formed JSON string: ' + WLJSX.String.inspect(str));
		}
	}
};

/*
 * WLJSX.PeriodicalExecuter APIs are responsible for PeriodicalExecuter related functionality
 * 
 * WLJSX.Object.execute() - Executes a callback supplied at initialization
 * WLJSX.Object.stop() - Stops the timer interval execution
 * new WLJSX.PeriodicalExecuter(callback, frequency) - returns new WLJSX.PeriodicalExecuter() object 
 * which will call callback at specified frequencies (in seconds)
 */
window.WLJSX.PeriodicalExecuter = function(callback, frequency){
	var callback = callback;
	var frequency = frequency;
	var currentlyExecuting = false;

	function onTimerEvent() {
		if (!currentlyExecuting) {
			try {
				currentlyExecuting = true;
				callback();
				currentlyExecuting = false;
			} catch(e) {
				currentlyExecuting = false;
				throw e;
			}
		}
	}

	var timer = setInterval(onTimerEvent.bind(this), frequency * 1000);
	
	return {
		execute: function() {
			callback(this);
		},

		stop: function() {
			if (!timer) return;
			clearInterval(timer);
			timer = null;
		}
	}
};


/*
 * Extends JavaScript Function object
 * 
 * Public API:
 * functionName.argumentNames - http://api.prototypejs.org/language/Function/prototype/argumentNames/
 * finctionName.bind - http://api.prototypejs.org/language/Function/prototype/bind/
 * functionName.bindAsEventListener - http://api.prototypejs.org/language/Function/prototype/bindAsEventListener/ 
 * functionName.curry - http://api.prototypejs.org/language/Function/prototype/curry/
 * functionName.delay - http://api.prototypejs.org/language/Function/prototype/delay/
 * functionName.defer - http://api.prototypejs.org/language/Function/prototype/defer/
 * functionName.wrap - http://api.prototypejs.org/language/Function/prototype/wrap/
 */
WLJSX.Object.extend(Function.prototype, (function() {
	var slice = Array.prototype.slice;

	function update(array, args) {
		var arrayLength = array.length, length = args.length;
		while (length--) array[arrayLength + length] = args[length];
		return array;
	}

	function merge(array, args) {
		array = slice.call(array, 0);
		return update(array, args);
	}

	function argumentNames() {
		var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
			.replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
			.replace(/\s+/g, '').split(',');
		return names.length == 1 && !names[0] ? [] : names;
	}

	function bind(context) {
		if (arguments.length < 2 && WLJSX.Object.isUndefined(arguments[0])) return this;
		var __method = this, args = slice.call(arguments, 1);
		return function() {
			var a = merge(args, arguments);
			return __method.apply(context, a);
		};
	}

	function bindAsEventListener(context) {
		var __method = this, args = slice.call(arguments, 1);
		return function(event) {
			var a = update([event || window.event], args);
			return __method.apply(context, a);
		};
	}

	function curry() {
		if (!arguments.length) return this;
		var __method = this, args = slice.call(arguments, 0);
		return function() {
			var a = merge(args, arguments);
			return __method.apply(this, a);
		};
	}

	function delay(timeout) {
		var __method = this, args = slice.call(arguments, 1);
		timeout = timeout * 1000;
		return window.setTimeout(function() {
			return __method.apply(__method, args);
		}, timeout);
	}

	function defer() {
		var args = update([0.01], arguments);
		return this.delay.apply(this, args);
	}

	function wrap(wrapper) {
		var __method = this;
		return function() {
			var a = update([__method.bind(this)], arguments);
			return wrapper.apply(this, a);
		};
	}

	return {
		argumentNames:       argumentNames,
		bind:                bind,
		bindAsEventListener: bindAsEventListener,
		curry:               curry,
		delay:               delay,
		defer:               defer,
		wrap:                wrap
	};
})());




/**
 * ================================================================= 
 * Source file taken from :: ajax.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

window.WLJSX.Ajax = {
	getTransport: function() {
		var tr = null; 
		try {
			tr = new XMLHttpRequest();
			if (tr == null) tr = new ActiveXObject('Msxml2.XMLHTTP');
			if (tr == null) tr = new ActiveXObject('Microsoft.XMLHTTP');
		} catch (e){}
		
		return tr;
	}
};

window.WLJSX.Ajax.Request = WLJSX.Class.create({
	_complete: false,

	initialize: function(url, options) {
		this.options = {
				method:       'post',
				asynchronous: true,
				contentType:  'application/x-www-form-urlencoded',
				encoding:     'UTF-8',
				parameters:   '',
				evalJSON:     true,
				evalJS:       true
			};
		WLJSX.Object.extend(this.options, options || { });

		this.options.method = this.options.method.toLowerCase();
		this.transport = window.WLJSX.Ajax.getTransport();
		this.request(url);
	},

	request: function(url) {
		this.url = url;
		this.method = this.options.method;
		var params = WLJSX.Object.isString(this.options.parameters) ?
				this.options.parameters : WLJSX.Object.toQueryString(this.options.parameters);

		if (this.method !== 'get' && this.method !== 'post') {
			params += (params ? '&' : '') + "_method=" + this.method;
			this.method = 'post';
		}

		if (params && this.method === 'get') {
			
			this.url += ((this.url.indexOf('?') > -1) ? '&' : '?') + params;
		}

		if(!this.options.skipQueryParam){
			this.parameters = WLJSX.String.toQueryParams(params);
		}

		try {
			var response = new window.WLJSX.Ajax.Response(this);
			if (this.options.onCreate) this.options.onCreate(response);

			this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);

			if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

			this.transport.onreadystatechange = this.onStateChange.bind(this);
			this.setRequestHeaders();
			
			WL.Analytics._logOutboundRequest(this.url, this.trackingId);

			this.body = this.method == 'post' ? (this.options.postBody || params) : null;
			this.transport.send(this.body);

		      /* Force Firefox to handle ready state 4 for synchronous requests */
			if (!this.options.asynchronous && this.transport.overrideMimeType)
				this.onStateChange();

		}
		catch (e) {
			this.dispatchException(e);
		}
	},

	onStateChange: function() {
		var readyState = this.transport.readyState;
		if (readyState > 1 && !((readyState == 4) && this._complete))
			this.respondToReadyState(this.transport.readyState);
	},
	
	setRequestHeaders: function() {	
		var headers = {
			'X-Requested-With': 'XMLHttpRequest',
			'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
			'Accept-Language' : WL.App.getDeviceLocale()
		};
		
		this.trackingId = WL.Analytics._getTrackingId();
		if(this.trackingId != null){
			headers['x-wl-analytics-tracking-id'] = this.trackingId
		}
		
		if (this.method == 'post') {
			headers['Content-type'] = this.options.contentType + (this.options.encoding ? '; charset=' + this.options.encoding : '');

		      /* Force "Connection: close" for older Mozilla browsers to work
		       * around a bug where XMLHttpRequest sends an incorrect
		       * Content-length header. See Mozilla Bugzilla #246651.
		       */
			if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
		            headers['Connection'] = 'close';
		}

		if (typeof this.options.requestHeaders == 'object') {
			var extras = this.options.requestHeaders;

			if (WLJSX.Object.isFunction(extras.push))
				for (var i = 0, length = extras.length; i < length; i += 2)
					headers[extras[i]] = extras[i+1];
			else
				for (key in extras){
					var value = extras[key];
					headers[key] = (value == null || typeof(value) == 'undefined') ? "" : value;
				}
		}

		for (var name in headers)
			this.transport.setRequestHeader(name, headers[name]);
	},

	success: function() {
		var status = this.getStatus();
		if (status == 0 && this.isSameOrigin() == false) {
			return false;
		}
		return !status || (status >= 200 && status < 300) || status == 304;
	},

	getStatus: function() {
		try {
			if (this.transport.status === 1223) return 204;
			return this.transport.status || 0;
		} catch (e) { return 0; }
	},

	respondToReadyState: function(readyState) {
		var state = window.WLJSX.Ajax.Request.Events[readyState], 
			response = new window.WLJSX.Ajax.Response(this);

		if (state == 'Complete') {
			try {
				this._complete = true;
				(this.options['on' + response.status]
				|| this.options['on' + (this.success() ? 'Success' : 'Failure')]
				|| WLJSX.emptyFunction)(response, response.headerJSON);
			} catch (e) {
				this.dispatchException(e);
			}

			var contentType = response.getHeader('Content-type');
			if (this.options.evalJS == 'force'
				|| (	this.options.evalJS && 
						this.isSameOrigin() && 
						contentType && 
						contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
				this.evalResponse();
		}

		try {
			(this.options['on' + state] || WLJSX.emptyFunction)(response, response.headerJSON);
		} catch (e) {
			this.dispatchException(e);
		}

		if (state == 'Complete') {
			this.transport.onreadystatechange = WLJSX.emptyFunction;
		}
	},

	isSameOrigin: function() {
		var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
		var url = location.protocol + '//' + document.domain;
		if (location.port) url += ':' + location.port;
		return (!m || (m[0] == url));
	},

	getHeader: function(name) {
		try {
			return this.transport.getResponseHeader(name) || null;
		} catch (e) { return null; }
	},

	evalResponse: function() {
		try {
			return eval(WLJSX.String.unfilterJSON(this.transport.responseText || ''));
		} catch (e) {
			this.dispatchException(e);
		}
	},

	dispatchException: function(exception) {
		(this.options.onException || WLJSX.emptyFunction)(this, exception);
	}
});

window.WLJSX.Ajax.Request.Events = ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

window.WLJSX.Ajax.Response = WLJSX.Class.create({
	initialize: function(request){
		this.request = request;
		var transport  = this.transport  = request.transport,
			readyState = this.readyState = transport.readyState;

		if ((readyState > 2 && !WLJSX.detectBrowser().isIE) || readyState == 4) {
			this.status       = this.getStatus();
			this.statusText   = this.getStatusText();
			this.responseText = WLJSX.String.interpret(transport.responseText);
			this.headerJSON   = this._getHeaderJSON();
		}

		if (readyState == 4) {
			var xml = transport.responseXML;
			this.responseXML  = WLJSX.Object.isUndefined(xml) ? null : xml;
			this.responseJSON = this._getResponseJSON();
			
			WL.Analytics._logInboundResponse(request, this);
		}
	},

	status:      0,

	statusText: '',

	getStatus: window.WLJSX.Ajax.Request.prototype.getStatus,

	getStatusText: function() {
		try {
			return this.transport.statusText || '';
		} catch (e) { return '' }
	},

	getHeader: window.WLJSX.Ajax.Request.prototype.getHeader,

	getAllHeaders: function() {
		try {
			return this.getAllResponseHeaders();
		} catch (e) { return null }
	},

	getResponseHeader: function(name) {
		return this.transport.getResponseHeader(name);
	},

	getAllResponseHeaders: function() {
		return this.transport.getAllResponseHeaders();
	},

	_getHeaderJSON: function() {
		var json = this.getHeader('X-JSON');
		if (!json) return null;
		json = decodeURIComponent(escape(json));
		try {
			return Sting.wl.evalJSON(json, this.request.options.sanitizeJSON || !this.request.isSameOrigin());
		} catch (e) {
			this.request.dispatchException(e);
		}
	},

	_getResponseJSON: function() {
		//Assume JSON is returned regardless, and only throw an exception
		//if we expected JSON and JSON was not returned
        var options = this.request.options;
        try {
            return WLJSX.String.evalJSON(this.responseText, (options.sanitizeJSON || !this.request.isSameOrigin()));
        } catch (e) {
            if (    !options.evalJSON 
                    || (options.evalJSON != 'force' && (this.getHeader('Content-type') || '').indexOf('application/json') < 0) 
                    || WLJSX.String.isBlank(this.responseText))
                return null;
            else
                this.request.dispatchException(e);
        }
    }
});


/**
 * ================================================================= 
 * Source file taken from :: dialogwindow.js
 * ================================================================= 
 */

/**
* @license
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/* JavaScript content from wlclient/js/window.js in Common Resources */
WL.DialogWindow = WLJSX.Class.create();
WL.DialogWindow.prototype = {
    initialize : function() {
	this.options = WLJSX.Object.extend({
	    className : 'modalWindow',
	    title : '&nbsp;',
	    body : '&nbsp;',
	    buttons : [{}],
	    width : 200,
	    height : 300
	}, arguments[0] || {});

	var win, overlay, dialog, content, viewportWidth, viewportHeight, dialogWidth, dialogHeight, wlDialogTitle, wlDialogBody;
	// remove old dialogs if exists
	var oldDialog = WLJSX.$('WLdialogContainer');
	if (oldDialog) {
	    WLJSX.remove(oldDialog);
	}

	// create new dialog with children elements
	win = WLJSX.newElement('<div/>', {
	    'id' : 'WLdialogContainer'
	});

	overlay = WLJSX.newElement('<div/>', {
	    'id' : 'WLdialogOverlay'
	});

	dialog = WLJSX.newElement('<div/>', {
	    'id' : 'WLdialog'
	});

	wlDialogTitle = WLJSX.newElement('<h1/>', {
	    'id' : 'WLdialogTitle'
	});

	wlDialogBody = WLJSX.newElement('<p/>', {
	    'id' : 'WLdialogBody'
	});

	WLJSX.html(wlDialogTitle, this.options.title);
	WLJSX.html(wlDialogBody, this.options.body);

	WLJSX.prepend(dialog, wlDialogTitle);
	WLJSX.append(dialog, wlDialogBody);

	WLJSX.prepend(win, overlay);
	WLJSX.append(win, dialog);

	// append dialog to the body element
	WLJSX.prepend(WLJSX.$$$('body'), win);

	// position the dialog in the middle of the screen
	viewportWidth = WLJSX.getViewportWidth();
	viewportHeight = WLJSX.getViewportHeight();
	dialogWidth = WLJQ(dialog).outerWidth();
	dialogHeight = WLJQ(dialog).outerHeight();

	WLJSX.css(dialog, {
	    left : viewportWidth / 2 - dialogWidth / 2 + 'px',
	    top : viewportHeight / 2 - dialogHeight / 2 + 'px'
	});
    },

    setTitle : function(title) {
	if (!title || title === '') {
	    title = '&nbsp;';
	}
	var dialogTitle = WLJSX.$('WLdialogTitle');
	WLJSX.html(dialogTitle, title);
    },

    setHTMLContent : function(html) {
	var dialogBody = WLJSX.$('WLdialogBody');
	WLJSX.html(dialogBody, html);
    },

    setContent : function(html) {
	var dialogBody = WLJSX.$('WLdialogBody');
	WLJSX.html(dialogBody, html);
    },

    showCenter : function() {
	this.show();
    },

    show : function() {
	// hack for Safari
	if (typeof this.overlayOpacity === 'undefined') {
	    var that = this;
	    setTimeout(function() {
		that.show();
	    }, 10);
	    return;
	}
	var wlDialogContainer = WLJSX.$('WLdialogContainer');
	WLJSX.show(wlDialogContainer);
    },

    hide : function() {
	var wlDialogContainer = WLJSX.$('WLdialogContainer');
	WLJSX.hide(wlDialogContainer);
    },

    destroy : function() {
	var wlDialogContainer = WLJSX.$('WLdialogContainer');
	WLJSX.remove(wlDialogContainer);
    }
};


/**
 * A Wrapper for the dialog required libraries:
 * 
 * @author Benny Weingarten, Raanan Avidor
 * @require window.js
 */
WL.Dialog = WLJSX.Class.create();
WL.Dialog.prototype = {

    __dialog : null,
    __options : {
	title : "",
	text : ""
    },

    /**
     * The constructor creates the dialog but does not display it. Call the show() method to display the
     * dialog.
     * 
     * @param options Optional. An object of the following form: { title: string, text: string }
     */
    initialize : function(containerId, options) {
	WL.Validators.validateOptions({
	    title : 'string',
	    text : 'string'
	}, options, 'new WL.Dialog');

	WLJSX.Object.extend(this.__options, options || {});

	__dialog = new WL.DialogWindow({
	    title : this.__options.title,
	    text : this.__options.text
	});
	this.setText(this.__options.text);
    },

    /**
     * Sets the title of the dialog.
     * @param titleText the title of the dialog.
     */
    setTitle : function(titleText) {
	__dialog.setTitle(titleText);
    },

    /**
     * Sets text within the dialog.
     * @param text text within the dialog.
     */
    setText : function(text) {
	__dialog.setHTMLContent(text);
    },

    /**
     * Shows the dialog.
     */
    show : function() {
	__dialog.showCenter();
    },

    /**
     * Hides the dialog.
     */
    hide : function() {
	__dialog.hide();
    },

    /**
     * Destroys the dialog.
     */
    destroy : function() {
	__dialog.destroy();
    }
};



/**
 * ================================================================= 
 * Source file taken from :: wlutils.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


/*
 * Worklight Utils
 */
__WLUtils = function() {

    // ........................Private methods........................

    function getStyle(element, cssprop) {
        if (element.currentStyle) { // IE
            return element.currentStyle[cssprop];
        } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
            return document.defaultView.getComputedStyle(element, "")[cssprop];
        } else { // try and get inline style
            return element.style[cssprop];
        }
    }

    function getUrlParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    }

    function getWidth(element) {
        var maxWidth = getStyle(element, 'width');
        var isPercentage = (maxWidth + '').indexOf('%') > -1;
        maxWidth = parseInt(maxWidth, 10);
        if (maxWidth === null || isNaN(maxWidth) || maxWidth === 0 || isPercentage) {
            maxWidth = getStyle(element, 'maxWidth');
            isPercentage = (maxWidth + '').indexOf('%') > -1;
            maxWidth = parseInt(maxWidth, 10);
            if (maxWidth === null || isNaN(maxWidth) || maxWidth === 0 || isPercentage) {
                maxWidth = WLJSX.width(element);
                maxWidth = parseInt(maxWidth, 10);
                if (maxWidth === null || isNaN(maxWidth)) {
                    maxWidth = 0;
                }
            }
        }
        return maxWidth;
    }

    // @Deprecated
    function doEllipsis(elm, options) {
        var currentOptions = {
            maxWidth : 0,
            addTitle : false
        };

        WLJSX.Object.extend(currentOptions, options || {});
        var origText = elm.innerHTML;
        var display = elm.style.display;
        elm.style.display = 'inline';
        var whiteSpace = elm.style.whiteSpace;
        elm.style.whiteSpace = 'nowrap';
        var maxWidth = currentOptions.maxWidth > 0 ? currentOptions.maxWidth : getWidth(elm);
        var width = elm.style.width;
        elm.style.width = 'auto';
        // Can't get the width of the element, no ellipsis is performed.
        if (maxWidth === 0 || WLJSX.width(elm) <= maxWidth) {
            elm.style.display = display;
            elm.style.width = width;
            elm.style.whiteSpace = whiteSpace;
            return;
        }
        // Reset content of element
        var text = origText;

        // Start width - assume min 3px per char
        var maxNumberOfChars = Math.ceil(maxWidth / 3);
        text = text.substring(0, maxNumberOfChars);

        // First reduce text size to fit the element
        while (WLJSX.width(elm) >= maxWidth && text.length > 3) {
            text = text.substr(0, text.length - 2);
            WLJSX.html(elm, text);
        }

        do {
            text = text.substr(0, text.length - 1);
            WLJSX.html(elm, text + "...");
        } while (WLJSX.width(elm) > maxWidth && text.length > 3);

        if (text !== origText && currentOptions.addTitle) {
            elm.title = origText;
        }
        elm.style.display = display;
        elm.style.width = width;
        elm.style.whiteSpace = whiteSpace;
    }

    this.wlReachableCallback = function(connection) {
    };

    // .................... Public methods ...........................

    this.__networkCheckTimeout = function() {
        if (!window.connectivityCheckDone) {
            WL.Logger.debug("Connectivity check has timed out");
            window.connectivityCheckDone = true;
            WL.Utils.dispatchWLEvent(__WL.InternalEvents.REACHABILITY_TEST_FAILURE);
        }
    };

    // checks that the WL server is available, and fires an appropriate event.
    this.wlCheckReachability = function() {
        this.wlCheckServerReachability();
    };

    this.wlCheckServerReachability = function() {
        var isCheckDone = false;
        // iOS's isReachable does not check a server's availability. Rather, it
        // merely checks is a socket can be opened.
        if (typeof navigator.network != "undefined" && navigator.connection.type == 'NONE') {
            WL.Utils.dispatchWLEvent(__WL.InternalEvents.REACHABILITY_TEST_FAILURE);
            isCheckDone = true;
        }

        var reachabilityUrl = WL.Client.getAppProperty(WL.AppProp.APP_SERVICES_URL) + "reach";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", reachabilityUrl, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                clearTimeout(xhrTimeout);
                WL.Utils.dispatchWLEvent(__WL.InternalEvents.REACHABILITY_TEST_SUCCESS);
            }
        };

        xhr.send("");
        var networkType = navigator.connection.type; 
        var reachTimeout = 6000; 
        //WL.Logger.debug("Network type is " + networkType) ;
        if (networkType == Connection.CELL_2G || networkType == Connection.UNKNOWN || 
        		networkType == Connection.CELL ){
        	reachTimeout = 30000; 
        }
        //WL.Logger.debug("Reach timeout is " + reachTimeout) ;
        
        var xhrTimeout = setTimeout(function() {
            if (!isCheckDone) {
                xhr.abort();
                WL.Utils.dispatchWLEvent(__WL.InternalEvents.REACHABILITY_TEST_FAILURE);
            }
        }, reachTimeout);
    };

    /**
     * Retrieves from the server the suitable skinLoader.js content, based on
     * the appId and appVersion parameters, computes the skin name, and pass it
     * to the provided callback. The method works only with development server
     * (not production).
     */
    this.__getSkinFromRemoteSkinLoader = function(appId, appVersion, callback) {
        // displaying an error message if appId or appVersion are missing
        if (!appId) {
            WL.SimpleDialog.show(WL.ClientMessages.error, WL.ClientMessages.downloadAppWebResourcesPleaseSpecifyAppID,
                    [ {
                        text : WL.ClientMessages.close
                    } ]);
            return;
        } else if (!appVersion) {
            WL.SimpleDialog.show(WL.ClientMessages.error,
                    WL.ClientMessages.downloadAppWebResourcesPleaseSpecifyAppVersion, [ {
                        text : WL.ClientMessages.close
                    } ]);
            return;
        }

        // send request to the server for getting the app's skinLoader.js
        // content
        var url = WL.StaticAppProps.WORKLIGHT_BASE_URL + "/dev/appdata?appId=" + appId + "&appVer=" + appVersion
                + "&appEnv=" + WL.Client.getEnvironment();
        new WLJSX.Ajax.Request(url, {
            onSuccess : function(response) {
                // evaluating skinLoader.js content (which defines the
                // method
                // getSkinName), and then passing the callback the
                // getSkinName()
                // return value
                WL._isInnerAppChanged = true;
                eval(response.responseJSON.skinLoaderContent);
                var newSkinName = getSkinName();
                if (response.responseJSON.availableSkins.indexOf(newSkinName) != -1) {
                    callback(newSkinName);
                } else {
                    WL.SimpleDialog.show(WL.ClientMessages.error, WL.Utils.formatString(
                            WL.ClientMessages.downloadAppWebResourcesSkinIsNotValid, newSkinName), [ {
                        text : WL.ClientMessages.close
                    } ]);
                }
            },
            onFailure : function(response) {
                if (response.status == 0) {
                    WL.SimpleDialog.show(WL.ClientMessages.error,
                            WL.ClientMessages.downloadAppWebResourcesConnectionToServerUnavailable, [ {
                                text : WL.ClientMessages.close
                            } ]);
                } else {
                    switch (response.responseJSON.error) {
                    case "singleSkin":
                        WL._isInnerAppChanged = true;
                        // this is not a real failure, it happens
                        // whenever the
                        // target app has only a single skin (and
                        // therefore it
                        // has no skinLoader.js file).
                        callback("default");
                        break;
                    case "appNotExist":
                        WL.SimpleDialog.show(WL.ClientMessages.error, WL.Utils.formatString(
                                WL.ClientMessages.downloadAppWebResourcesAppIdNotExist, appId), [ {
                            text : WL.ClientMessages.close
                        } ]);
                        break;
                    case "versionNotExist":
                        WL.SimpleDialog.show(WL.ClientMessages.error, WL.Utils.formatString(
                                WL.ClientMessages.downloadAppWebResourcesAppVersionNotExist, appId, appVersion,
                                WL.Client.getEnvironment()), [ {
                            text : WL.ClientMessages.close
                        } ]);
                        break;
                    default:
                        WL.SimpleDialog.show(WL.ClientMessages.error, response.responseJSON.errorText, [ {
                            text : WL.ClientMessages.close
                        } ]);
                    }
                }
            }
        });
    };

    /**
     * @param {Object}
     *            value
     * @return value if defined or null otherwise.
     */
    this.safeGetValue = function(value) {
        if (!WLJSX.Object.isUndefined(value)) {
            return value;
        } else {
            return null;
        }
    };

    /**
     * @deprecated - use WL.App.getErrorMessage(
     */
    this.getErrorMessage = function(e) {
        if (e === null) {
            return null;
        } else if (WLJSX.Object.isString(e)) {
            return e;
        } else if (e.description) {
            return e.description;
        } else if (e.message) {
            return e.message;
        } else if (WLJSX.Object.isArray(e)) {
            return e.join(",");
        } else {
            return e.toString();
        }
    };

    /**
     * Adds a parameter to the given URL.
     * 
     * @param {string}
     *            url
     * @param {string}
     *            parameter name
     * @param {string}
     *            parameter value
     * @return the url with the added parameter.
     */
    this.addParameterToURL = function(url, name, value) {
        if (url.indexOf("?") === -1) {
            url += "?";
        } else {
            url += "&";
        }
        url += (name + '=' + encodeURIComponent(value));
        return url;
    };

    // @Deprecated
    this.ellipsisByClassName = function(className, options) {
        var elements = WLJSX.$$('.' + className);
        for ( var i = 0; i < elements.length; i++) {
            doEllipsis(elements[i], options);
        }
    };

    // @Deprecated
    this.ellipsisByElement = function(e, options) {
        doEllipsis(e, options);
    };

    this.formatString = function() {
        var resStr = arguments[0];
        for ( var i = 1; i < arguments.length; i++) {
            var re = new RegExp("\\{" + (i - 1) + "\\}", "g");
            resStr = resStr.replace(re, arguments[i]);
        }
        return resStr;
    };

    var __deviceLocale;
    this.setLocalization = function() {
    	var deviceLocale = WL.App.getDeviceLocale();
    	//The json containing user facing messages needs to be loaded and assigned only once. 
    	//Check if the object has already been assigned.Else re-use the existing object
    	if(typeof WL.ClientMessages === 'undefined' || __deviceLocale !== deviceLocale) {
    		__deviceLocale = deviceLocale;
    		WL.ClientMessages = undefined;
    		// In web (mobile web and desktop web), we inject the proper WL.ClientMessages in the HTML file at the server,
    		// so we would never get into this conditional code block.  This is a good thing!  No extra round trips to the
    		// server to pick up language files.  We trust the web browser's Accept-Language header in those environments.

    		var deviceLanguage = WL.App.getDeviceLanguage();    	

    		// Windows Phone 8 returns inconsistent values for WL.App.getDeviceLocale().
    		// Use navigator.userLanguage is case of Windows Phone environment
    		if (WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE || WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE_8) {
    			deviceLocale = navigator.userLanguage;
    		}

    		// Ensure that the messages.json files are placed in lang folders or lang-COUNTRYCODE folders. 
    		// Ensure that the separator is "-" and not "_" as the RPX tool places translated files into folders with "-".        	
    		var lang = deviceLocale.substring(0, 2);    	
    		var region = deviceLocale.substring(3);        	
    		deviceLocale = lang.toLowerCase() + "-" + region.toUpperCase();
    		
    		// special fallback for zh languages (see 41026)
    		if(deviceLocale.indexOf("zh-HANS") != -1) deviceLocale = "zh";
    		else if(deviceLocale.indexOf("zh-HANT") != -1 || deviceLocale.indexOf("zh-HK") != -1) deviceLocale = "zh-TW";

    		try {
	    		//Check if the languagePreferences has been populated
	    		if(typeof WL.StaticAppProps.LANGUAGE_PREFERENCES !== 'undefined' &&
	    				WL.StaticAppProps.LANGUAGE_PREFERENCES !== null && 
	    				WL.StaticAppProps.LANGUAGE_PREFERENCES.trim().length > 0) {
	
	    			var wlLangPrefs = WL.StaticAppProps.LANGUAGE_PREFERENCES.split(",");
	    			
	    			for(var i = 0, len = wlLangPrefs.length; i < len; i++) {
	    				wlLangPrefs[i] = wlLangPrefs[i].trim();
	    				// special fallback for zh languages (see 41026)
	    				if(wlLangPrefs[i].indexOf("zh-Hans") != -1) wlLangPrefs[i] = "zh";
	    				if(wlLangPrefs[i].indexOf("zh-Hant") != -1 || wlLangPrefs[i].indexOf("zh-HK") != -1) wlLangPrefs[i] = "zh-TW";
	    			}
	    			
	    			// check if the deviceLocale is part of the preference list.If so load it and skip rest.
	    			if(wlLangPrefs.indexOf(deviceLocale) != -1) {
	    				loadWLClientMessages(deviceLocale);
	    			} 
	    			
	    			// deviceLocale will always have language and locale part
	    			if(typeof WL.ClientMessages === 'undefined'/* && deviceLocale.length > 2*/) {
	    				// deviceLocale is not part of wlLangPrefs,
	    				// check if the deviceLanguage is part of the preference list. If so, load it
	    				if(wlLangPrefs.indexOf(lang) != -1) {
	    					loadWLClientMessages(lang);
	    				}
	    			}
	    			
	    			if(typeof WL.ClientMessages === 'undefined') {
	    				// Loop through wlLangPrefs to find the first valid language
	    				for(var i = 0, len = wlLangPrefs.length; i < len; i++) {
	    					loadWLClientMessages(wlLangPrefs[i]);
	    					if (typeof WL.ClientMessages !== 'undefined') {
	    						break;
	    					}
						}
	    			}
	    		} else {
	    			// Get the file from which to pickup the user visible messages.
	    			// prefer deviceLocale, then deviceLanguage, then English, in that order
	    			loadWLClientMessages(deviceLocale);
	    			// we don't have a deviceLanguage translation file, try deviceLocale
	    			if (typeof WL.ClientMessages === 'undefined') { 
	    				loadWLClientMessages(lang);
	    			}
	    		}
    		} catch(e){
    			//TODO: log error
    		}
    		
    		// fall back to English
    		if (typeof WL.ClientMessages === 'undefined') {
				loadWLClientMessages('en');
				// TODO: log and crash?  If WL.ClientMessages is still undefined here, we're dead (but this could be made safe by using a function in WL.ClientMessages to
				// retrieve messages rather than referring to a (possibly undefined) value directly
			}
    	}
    };
    
    function loadWLClientMessages(lang) {
  	
    	var url = "worklight/messages/" + lang + "/messages.json";
    	if(lang === null || typeof lang === 'undefined' || lang.indexOf('en') == 0) {
    		// why indexOf? check 41118
    		url = "worklight/messages/messages.json";
        }
    	
    	//Windows 8 does not allow ajax calls to local json files. For Windows 8 environment set isLocal option in the ajax call to false.
		//For other environments keep it as true.        	
		var isLocal = true;
		if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8) {
			isLocal = false;
		}
		
    	// try-catch block required.In Windows 8 if load does not succeed, it does not go to error callback.
    	// Instead throws an exception and execution ends.
    	try{					
    		WLJQ.ajax({
				async : false,
				isLocal : isLocal,
				dataType : "json",
				url : url,
				success : function(data) {
					WL.ClientMessages = data;					
				},
				error : function(data) {}
			});
    	}catch(e){};
    };
    
    
    this.clearText = function(className, attribute) {
        var elementsToClear = WLJSX.$$('.' + className);
        var element;
        for ( var i = 0; i < elementsToClear.length; i++) {
            element = elementsToClear[i];
            if (!attribute || attribute === 'innerHTML') {
                if (element.tagName.toLowerCase() === 'input') {
                    element.value = '';
                } else {
                    WLJSX.empty(element);
                }
            } else if (attribute === 'title') {
                element.title = '';
            } else if (attribute === 'alt') {
                element.alt = '';
            }
        }
    };

    this.replaceElementsText = function(parentId, dictionary, attribute) {
        if (!dictionary) {
            dictionary = WL_I18N_MESSAGES;
        }

        var cssSelector;
        if (parentId) {
            cssSelector = "#" + parentId + " ." + WL_CLASS_NAME_TRANSLATE;
        } else {
            cssSelector = "." + WL_CLASS_NAME_TRANSLATE;
        }

        var elementsToFill = WLJSX.$$(cssSelector);
        var element;
        for ( var i = 0; i < elementsToFill.length; i++) {
            element = elementsToFill[i];
            if (!attribute || attribute === 'innerHTML') {
                // Use value instead of innerHTML in input elements
                if (element.tagName.toLowerCase() === 'input') {
                    element.value = dictionary[element.id];
                } else {
                    WLJSX.html(element, dictionary[element.id]);
                }
            } else if (attribute === 'title') {
                element.title = dictionary[element.id];
            } else if (attribute === 'alt') {
                element.alt = dictionary[element.id];
            }
        }
    };

    /*
     * Adds the URL prefix to the URL if not already added and
     * WL.StaticAppProps.WORKLIGHT_ROOT_URL is set This is used when working
     * with desktop gadget and we need a static URL
     */
    this.createAPIRequestURL = function(path) {
        var resultURL;

        // if "path" is an absolute URL we just use it
        if (/^[a-z]+:\/\//i.test(path)) {
            resultURL = path;
        }//check itms-services (download app inside app url) and if it is that, accept it.
        else if ((WL.Client.getEnvironment() === WL.Environment.IPHONE || WL.Client.getEnvironment() === WL.Environment.IPAD) && path.indexOf("itms-services") === 0) {
        	resultURL = path;
        }
        else if (path.indexOf("/") === 0) {
            // In case using absolute url like "/random" it must be under
            // app/services
            var appServicesUrl = WL.Client.getAppProperty(WL.AppProp.APP_SERVICES_URL);
            resultURL = appServicesUrl.substr(0, appServicesUrl.length - 1) + path;
        } else {
            // Relative URL
            // We take http://<IP>:<PORT>/<app-name>/<env-name>/" - and append
            // "path" to it
            resultURL = WL.Client.getAppProperty(WL.AppProp.WORKLIGHT_ROOT_URL) + path;
        }
        return resultURL;
    };

    /*
     * Extends the target object with the source object only with fields and
     * methods that do not already exist on the target.
     */
    this.extend = function(target, source) {
        target = WLJSX.Object.extend(WLJSX.Object.clone(source), target);
        return target;
    };

    /*
     * extracts the host part of a url. For example, for the input
     * url="https://212.10.0.15:8888/application/service/?arg=blue", the result
     * would be "212.10.0.15".
     */
    this.getHostname = function(url) {
        var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/:]+)', 'im');
        return url.match(re)[1].toString();
    };

    this.dispatchWLEvent = function(eventName) {
        // ie (WP7/VISTA) support custom event
        if (typeof document.createEvent == "undefined") {
            WLJSX.trigger(document, eventName);
        } else {
            var e = document.createEvent('Events');
            e.initEvent(eventName, false, false);
            document.dispatchEvent(e);
        }
    };

    this.getCurrentSkinName = function() {
        var skinName = null;
        // readUserPref is syncronized on Android but async on iOS, this is why
        // the implementation differ

        if (WL.Client.getEnvironment() === WL.Env.ANDROID || WL.EnvProfile.isEnabled(WL.EPField.ISIOS)) {
        	skinName = WL.StaticAppProps.SKIN_NAME;
        } else if (WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE || WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE_8) {
            skinName = getUrlParam("skinName");
            if (skinName.length == 0) {
                skinName = "default";
            }
        }
        // environements that don't support skins should return 'default'
        else {
            skinName = 'default';
        }
        return skinName;
    };

    /**
     * function: getFreeSpaceOnDevice return: free space on device in Bytes
     * Should be called only for environments that support direct update
     * (currently Android + iOS)
     */
    this.getFreeSpaceOnDevice = function() {
        var freeSpace;
        
        if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS) || WL.Client.getEnvironment() === WL.Env.ANDROID) {
            freeSpace = WL.StaticAppProps.FREE_SPACE;
        }
        // environements that don't support skins should return 'default'
        else {
            var msg = "WL.Utils.getFreeSpaceOnDevice(..) should be supported only on environments that support direct update";
            var ex = new Error(msg);
            WL.Logger.error(msg, ex);
            throw ex;
        }
        return Number(freeSpace).toFixed(2);
    };

    // hide application with a black div
    this.addBlackDiv = function() {
        var blackDiv = WLJSX.newElement('<div/>', {
            'id' : 'blockingDiv',
            'style' : 'background-color:black; z-index: 9999; position: fix; top:0; left:0; right:0; bottom:0;'
        });
        document.body.appendChild(blackDiv);
    };

    this.removeBlackDiv = function() {
        while (WLJSX.$('blockingDiv')) {
            document.body.removeChild(WLJSX.$('blockingDiv'));
        }
    };

    this.getSkinLoaderChecksum = function() {
        var skinLoaderChecksum;
        if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS) || WL.Client.getEnvironment() === WL.Env.ANDROID) {
            skinLoaderChecksum = WL.StaticAppProps.SKIN_LOADER_CHECKSUM;
        }
        // environments that don't support skins should return null
        else {
            var msg = "WL.Utils.getSkinLoaderChecksum(..) should be supported only on environments that support direct update";
            var ex = new Error(msg);
            WL.Logger.error(msg, ex);
            throw ex;
        }

        if ((typeof skinLoaderChecksum === 'undefined') || (skinLoaderChecksum == null)
                || (skinLoaderChecksum.length == 0)) {
            skinLoaderChecksum = WL_SKINLOADER_CHECKSUM.checksum;
            WL.Utils.setSkinLoaderChecksum(skinLoaderChecksum);
        }
        return skinLoaderChecksum;
    };

    this.setSkinLoaderChecksum = function(skinLoaderChecksum) {
        if ((WL.Client.getEnvironment() === WL.Env.ANDROID) || (WL.EnvProfile.isEnabled(WL.EPField.ISIOS))) {
            WL.App.writeUserPref('wlSkinLoaderChecksum', skinLoaderChecksum);
        }
        // environments that don't support skins should return null
        else {
            var msg = "WL.Utils.setSkinLoaderChecksum(..) should be supported only on environments that support direct update";
            var ex = new Error(msg);
            WL.Logger.error(msg, ex);
            throw ex;
        }
    };

    this.safeInnerHTML = function(target, contentToSet, options) {
        // iPhone sometimes just fails to set innerHTML - no idea why. you
        // end up with an empty div.
        // it's more reliable with a setTimeout but still not reliable enough.
        // this function sets the text and then checks it. if it's not
        // there, it tries once more. horrible, but necessary.
        // note: this really became an issue within the app and was even
        // worse in 1st gen and 3g. 3GS was mostly fixed with one timeout,
        // whereas even 3 didn't seem to always fix pre-3GS
        // some blog posts indicated that they noticed the problem only
        // when the messed with location.href
        // (http://blog.johnmckerrell.com/2007/03/07/problems-with-safari-and-innerhtml/)
        // so i've removed this stuff in the app and location.href is no
        // longer changed. seems to be worse with database than it was
        // with XHR but assume we'll leave it in place to be safe
        var _options = {
            onSuccess : function() {
            },
            onFailure : function() {
                WL.Logger.debug("safeInnerHtml error. Could not perform " + target.id + ".innerHtml = " + contentToSet)
                        .bind(this);
            },
            count : 10
        };
        if (!WLJSX.Object.isUndefined(options)) {
            _options = WLJSX.Object.extend(_options, options);
        }

        if (!WL.EnvProfile.isEnabled(WL.EPField.ISIOS)) {
            target.innerHTML = contentToSet;
            _options.onSuccess();
            return;
        }

        target.innerHTML = contentToSet;
        var timeout = 50;
        var count = _options.count;

        if ((contentToSet != '' && target.innerHTML == '') || (contentToSet == '' && target.innerHTML != '')) {
            if (_options.count <= 0) {
                _options.onFailure();
            } else {
                WL.Logger.debug(target.id + ".innerHTML failed. number of attempts remaining: " + count + " ( + "
                        + timeout + "ms timout)");
                --count;
                _options.count = count;
                setTimeout(function() {
                    safeInnerHTML(target, contentToSet, _options);
                }, timeout);
            }
        } else {
            _options.onSuccess();
        }
    };

    /**
     * Helper function, there is a difference between IOS and Android In Android
     * Cordova returns the data as is, while in IOS it envelops it in another
     * Object. Check if IOS and if so return the inner data
     * 
     * @param response -
     *            Cordova response Object
     * @param innerFieldName -
     *            the name of the inner object to retrieved in IOS
     */
    this.getCordovaPluginResponseObject = function(response, innerFieldName) {
        if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS)) {
            if (response) {
                return response[innerFieldName];
            }
        }
        return response;
    };
    
    /**
	 * Version compares 2 version numbers in strings to the length of the maxLength parameter
	 * @param {string} x
	 * @param {string} y
	 * @param {string} maxLength
	 * @return -1 if x>y, 1 if x<y, or 0 if equal
	 */
	this.versionCompare = function(x, y, maxLength){
		var i = 0,
		x_components = x.split("."),
		y_components = y.split("."),
		len = Math.min(x_components.length, y_components.length),
		maxLng = maxLength || 5;

		if (x === y) {
			return 0;
		}
	
		for (i = 0; i < len; i += 1) {
	
			// x > y
			if (parseInt(x_components[i]) > parseInt(y_components[i])) {
				return 1;
			}
	
			// y > x
			if (parseInt(x_components[i]) < parseInt(y_components[i])) {
				return -1;
			}
			
			if(i >= maxLng) break; //check only up to maxLength+1 parts
			
			// If one's a prefix of the other, the longer one is greater.
		    if (x_components.length > y_components.length)
		    {
		        return 1;
		    }
	
		    if (x_components.length < y_components.length)
		    {
		        return -1;
		    }
			
			
		}
	
		return 0; //same
	};
}; // End WL.Utils

__WL.prototype.Utils = new __WLUtils;
WL.Utils = new __WLUtils;


/**
 * ================================================================= 
 * Source file taken from :: wlproperties.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


WL.AppProperty = {
    AIR_ICON_16x16_PATH : "AIR_ICON_16x16_PATH",
    AIR_ICON_128x128_PATH : "AIR_ICON_128x128_PATH",
    DOWNLOAD_APP_LINK : "DOWNLOAD_APP_LINK",
    ENVIRONMENT : "ENVIRONMENT",
    APP_DISPLAY_NAME : "APP_DISPLAY_NAME",
    APP_LOGIN_TYPE : "APP_LOGIN_TYPE",
    APP_VERSION : "APP_VERSION",
    HEIGHT : "HEIGHT",
    IID : "IID",
    LATEST_VERSION : "LATEST_VERSION",
    LOGIN_DISPLAY_TYPE : "LOGIN_DISPLAY_TYPE",
    LOGIN_REALM : "LOGIN_REALM",
    MAIN_FILE_PATH : "MAIN_FILE_PATH",
    SHOW_IN_TASKBAR : "SHOW_IN_TASKBAR",
    THUMBNAIL_IMAGE_URL : "THUMBNAIL_IMAGE_URL",
    WELCOME_PAGE_URL : "WELCOME_PAGE_URL",
    WIDTH : "WIDTH",
    WORKLIGHT_ROOT_URL : "WORKLIGHT_ROOT_URL",
    APP_SERVICES_URL : "APP_SERVICES_URL",
    WLCLIENT_TIMEOUT_IN_MILLIS : "WLCLIENT_TIMEOUT_IN_MILLIS"
};

// Short alias:
WL.AppProp = WL.AppProperty;

// A copy of the Java GadgetEnvironment version.
var __WLEnvironment = {
    PREVIEW : "preview",
    IPHONE : "iphone",
    IPAD : "ipad",
    DESKTOPBROWSER : "desktopbrowser",
    ADOBE_AIR : "air",
    ANDROID : "android",
    BLACKBERRY : "blackberry",
    BLACKBERRY10 : "blackberry10",
    WINDOWS_PHONE_8: "windowsphone8",
    WINDOWS8: 'windows8',
    MOBILE_WEB: "mobilewebapp"
};
__WL.prototype.Environment = __WLEnvironment;
WL.Environment = __WLEnvironment;
// Short alias:
WL.Env = WL.Environment;

// Constants for language manipulations
var WL_CLASS_NAME_TRANSLATE = 'translate';
var WL_I18N_MESSAGES = null;

// A copy of the Java AppLoginType version.
WL.AppLoginType = {
    LOGIN_ON_STARTUP : "onStartup",
    LOGIN_ON_DEMAND : "onDemand",
    NO_LOGIN : "never"
};

WL.UserInfo = {
    IS_USER_AUTHENTICATED : "isUserAuthenticated",
    USER_NAME : "userName",
    LOGIN_NAME : "loginName",
    USER_ID : "userId"
};

WL.Orientation = {
    AUTO : -1,
    LANDSCAPE : 0,
    PORTRAIT : 1
};

WL.FixedViewType = {
    TOP : "top",
    BOTTOM : "bottom"
};

// In case of shell app load inner app, set it to true to prevent direct update.
WL._isInnerAppChanged = false;

/*
 * NOTICE: All server errors MUST be defined with same values in the ErrorCode
 * java enumeration.
 */
var __WLErrorCode = {
    UNEXPECTED_ERROR : "UNEXPECTED_ERROR",
    API_INVOCATION_FAILURE : "API_INVOCATION_FAILURE",
    USER_INSTANCE_ACCESS_VIOLATION : "USER_INSTANCE_ACCESS_VIOLATION",
    AUTHENTICATION_REQUIRED : "AUTHENTICATION_REQUIRED",
    DOMAIN_ACCESS_FORBIDDEN : "DOMAIN_ACCESS_FORBIDDEN",

    // Client Side Errors
    UNRESPONSIVE_HOST : "UNRESPONSIVE_HOST",
    LOGIN_FAILURE : "LOGIN_FAILURE",
    REQUEST_TIMEOUT : "REQUEST_TIMEOUT",
    PROCEDURE_ERROR : "PROCEDURE_ERROR",
    UNSUPPORTED_VERSION : "UNSUPPORTED_VERSION",
    UNSUPPORTED_BROWSER : "UNSUPPORTED_BROWSER",
    DISABLED_COOKIES : "DISABLED_COOKIES",
    CONNECTION_IN_PROGRESS : "CONNECTION_IN_PROGRESS"
};
__WL.prototype.ErrorCode = __WLErrorCode;
WL.ErrorCode = __WLErrorCode;

WL.FBRealmPopupOptions = {
    width : 1000,
    height : 600
};

// save the base url since the WL.StaticAppProps.WORKLIGHT_ROOT_URL &&
// WL.StaticAppProps.APP_SERVICES_URL
WL.StaticAppProps.POSTFIX_WORKLIGHT_ROOT_URL = WL.StaticAppProps.WORKLIGHT_ROOT_URL;
WL.StaticAppProps.POSTFIX_APP_SERVICES_URL = WL.StaticAppProps.APP_SERVICES_URL;


WL.EPField = {

	    // NOTICE - value must be equal to the field name!!!
	    SUPPORT_COOKIES : "SUPPORT_COOKIES",
	    DESKTOP : "DESKTOP",
	    WEB : "WEB",
	    MOBILE : "MOBILE",
	    USES_AUTHENTICATOR : "USES_AUTHENTICATOR",
	    SAVES_USERNAME : "SAVES_USERNAME",
	    HAS_NATIVE_LOGGER : "HAS_NATIVE_LOGGER",
	    USES_NATIVE_TOOLBAR : "USES_NATIVE_TOOLBAR",
	    USES_CORDOVA : "USES_CORDOVA",
	    SUPPORT_DIRECT_UPDATE_FROM_SERVER : "SUPPORT_DIRECT_UPDATE_FROM_SERVER",
	    SUPPORT_DIAGNOSTIC : "SUPPORT_DIAGNOSTIC",
	    ISIOS : "ISIOS",
	    SUPPORT_PUSH : "SUPPORT_PUSH",
	    SUPPORT_PUSH_SMS : "SUPPORT_PUSH_SMS",
	    WEB_BROWSER_ONLY : "WEB_BROWSER_ONLY",
	    SUPPORT_CHALLENGE : "SUPPORT_CHALLENGE",
	    SUPPORT_SHELL : "SUPPORT_SHELL",
	    SUPPORT_DEVICE_AUTH : "SUPPORT_DEVICE_AUTH",
	    SERVER_ADDRESS_CONFIGURABLE : "SERVER_ADDRESS_CONFIGURABLE",
	    SUPPORT_WL_USER_PREF : "SUPPORT_WL_USER_PREF",	    
	    SUPPORT_WL_NATIVE_XHR : "SUPPORT_WL_NATIVE_XHR"
	};

	WL.EnvProfileField = WL.EPField;
	WL.BaseProfileData = {
	    SUPPORT_COOKIES : true,
	    SUPPORT_DIRECT_UPDATE_FROM_SERVER : false,
	    SUPPORT_DIAGNOSTIC : false,
	    SUPPORT_PUSH : false,
	    SUPPORT_PUSH_SMS : false,
	    SUPPORT_DEVICE_AUTH : false,
	    SERVER_ADDRESS_CONFIGURABLE : false,
	    SUPPORT_WL_USER_PREF : false
	};
	WL.WebProfileData = {
	    WEB : true
	};
	WL.WebProfileData = WL.Utils.extend(WL.WebProfileData, WL.BaseProfileData);

	WL.DesktopProfileData = {
	    DESKTOP : true,
	    USES_AUTHENTICATOR : true,
	    SAVES_USERNAME : false
	};

	WL.MobileProfileData = {
	    USES_AUTHENTICATOR : true,
	    SAVES_USERNAME : false
	};

	WL.MobileProfileData = WL.Utils.extend(WL.MobileProfileData, WL.BaseProfileData);

	// Notice that the default profile is web so all web environments
	// Do not need to explicitly define one unless they want to
	// define a field differently.
	WL.DefaultProfileData = WLJSX.Object.clone(WL.WebProfileData);

	WL.airProfileData = WLJSX.Object.clone(WL.DesktopProfileData);
	WL.airProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;

	WL.previewProfileData = WLJSX.Object.clone(WL.WebProfileData);
	WL.previewProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;

	WL.embeddedProfileData = WLJSX.Object.clone(WL.WebProfileData);
	WL.embeddedProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;

	WL.mobilewebappProfileData = WLJSX.Object.clone(WL.WebProfileData);
	WL.mobilewebappProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;

	WL.iosDeviceProfileData = WLJSX.Object.clone(WL.MobileProfileData);
	WL.iosDeviceProfileData[WL.EPField.MOBILE] = true;
	WL.iosDeviceProfileData[WL.EPField.DESKTOP] = false;
	WL.iosDeviceProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = true;
	WL.iosDeviceProfileData[WL.EPField.SAVES_USERNAME] = true;
	WL.iosDeviceProfileData[WL.EPField.SAVES_USERNAME] = true;
	WL.iosDeviceProfileData[WL.EPField.ISIOS] = true;
	WL.iosDeviceProfileData[WL.EPField.USES_CORDOVA] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_DIAGNOSTIC] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_PUSH] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_PUSH_SMS] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_SHELL] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_DEVICE_AUTH] = true;
	WL.iosDeviceProfileData[WL.EPField.SERVER_ADDRESS_CONFIGURABLE] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_WL_USER_PREF] = true;
	WL.iosDeviceProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
	

	WL.iphoneProfileData = WLJSX.Object.clone(WL.iosDeviceProfileData);
	WL.ipadProfileData = WLJSX.Object.clone(WL.iosDeviceProfileData);

	WL.androidProfileData = WLJSX.Object.clone(WL.MobileProfileData);
	WL.androidProfileData[WL.EPField.MOBILE] = true;
	WL.androidProfileData[WL.EPField.DESKTOP] = false;
	WL.androidProfileData[WL.EPField.USES_NATIVE_TOOLBAR] = true;
	WL.androidProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = true;
	WL.androidProfileData[WL.EPField.SAVES_USERNAME] = true;
	WL.androidProfileData[WL.EPField.USES_CORDOVA] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_DIAGNOSTIC] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_PUSH] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_PUSH_SMS] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_SHELL] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_DEVICE_AUTH] = true;
	WL.androidProfileData[WL.EPField.SERVER_ADDRESS_CONFIGURABLE] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_WL_USER_PREF] = true;
	WL.androidProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;

	WL.blackberryProfileData = WLJSX.Object.clone(WL.MobileProfileData);
	WL.blackberryProfileData[WL.EPField.MOBILE] = true;
	WL.blackberryProfileData[WL.EPField.HAS_NATIVE_LOGGER] = false;
	WL.blackberryProfileData[WL.EPField.SUPPORT_PUSH_SMS] = true;

	WL.blackberry10ProfileData = WLJSX.Object.clone(WL.MobileProfileData);
	WL.blackberry10ProfileData[WL.EPField.MOBILE] = true;
	WL.blackberry10ProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
	WL.blackberry10ProfileData[WL.EPField.SUPPORT_PUSH_SMS] = true;
	WL.blackberry10ProfileData[WL.EPField.USES_CORDOVA] = true;

	WL.windowsphone8ProfileData = WLJSX.Object.clone(WL.MobileProfileData);
	WL.windowsphone8ProfileData[WL.EPField.MOBILE] = true;
	WL.windowsphone8ProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
	WL.windowsphone8ProfileData[WL.EPField.USES_CORDOVA] = true;
	WL.windowsphone8ProfileData[WL.EPField.SUPPORT_PUSH_SMS] = true;
	WL.windowsphone8ProfileData[WL.EPField.SUPPORT_PUSH] = true;
	WL.windowsphone8ProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = true;
	WL.windowsphone8ProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;


/**
 * ================================================================= 
 * Source file taken from :: simpledialog.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


/**
 * Opens a native dialog using phonegap notification api
 */
__WLSimpleDialog = function() {
    this.__buttons = null;
    this.__dialog = null;

    this.__callback = function(result) {

        if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
            // Phonegap bug - native code returns button number instead of
            // button index
        	//returned index from Cordova is one-based indexing 1,2,3..so
       		result--;
            
        } else if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.BLACKBERRY) {
        } else if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.WINDOWS8) {
        } else {
            WL.SimpleDialog.__dialog.hide();
            WL.SimpleDialog.__dialog = null;
        }
        
        // in case of invalid result value just clean up the array of buttons (otherwise next show will fail)
        if (result < 0 || result >= WL.SimpleDialog.__buttons.length) {
        	WL.SimpleDialog.__buttons = null;
        	WL.SimpleDialog.__dialog = null;
        	return;
        }

        var handler = WL.SimpleDialog.__buttons[result].handler;

        WL.SimpleDialog.__buttons = null;

        if (handler) {
            handler();
        }
    };

    var __validateButtonsObject = function(buttons, callerName) {
        if (!WL.Validators.isValidationEnabled) {
            return;
        }
        if ((!buttons) || (buttons.constructor !== Array) || (buttons.length == 0)) {
            WL.Validators.logAndThrow("Invalid argument value '" + buttons
                    + "', expected an array with button descriptors.", callerName);
        }
        for ( var i = 0; i < buttons.length; i++) {
            if (!buttons[i].text || typeof buttons[i].text !== 'string') {
                WL.Validators.logAndThrow("Invalid argument value '" + buttons
                        + "', button descriptor must contain text as string.", callerName);
            }
            if (buttons[i].handler && typeof buttons[i].handler !== 'function') {
                WL.Validators.logAndThrow("Invalid argument value '" + buttons
                        + "', button descriptor handler must be a function.", callerName);
            }
        }
    };

    /**
     * 
     * 
     * @param title
     *            The title of the dialog window
     * @param text
     *            The text in the dialog window
     * @param buttons
     *            An array of button descriptors and event handler functions.
     *            Example: [{text: "OK", handler: function() { ... }}, {text:
     *            "Cancel", handler: function() { ... }}]
     * @param option
     *            Optional. When native dialog is not available for the current
     *            environment. An object of the following form: { title: string,
     *            text: string }
     */
    this.show = function(title, text, buttons, options) {
        var wlDialogContainer = WLJSX.$('WLdialogContainer');
        if (!title && !text && wlDialogContainer) {
            WLJSX.css(wlDialogContainer, {
                display : 'block'
            });
            return;
        }
        if (WL.SimpleDialog.__buttons != null) {
            WL.Logger.error("WL.SimpleDialog.show() cannot be invoked while dialog is open");
            return;
        }

        WL.Validators.validateArguments([ 'string', 'string', __validateButtonsObject,
                WL.Validators.validateObjectOrNull ], arguments, 'WL.SimpleDialog.show');

        WL.SimpleDialog.__buttons = buttons;
        if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
            var buttonsArray = [];
            for ( var i = 0; i < buttons.length; i++) {
            	buttonsArray[i] = buttons[i].text;
            }
            
            // decide whether the dialog in android should be a modal one 
            // this funciton contains framework logic that should be refactored out of simpleDialog.show()!!!!
            function isShowModalDialogInAndroid()
            {
            	if (WL.StaticAppProps.ENVIRONMENT != WL.Env.ANDROID) {

            		// this hack is for Android only ...
            		return false;
            	}
            	
            	// modal dialog in direct update 
                var isAndroidDirectUpdateModal = (title == WL.ClientMessages.directUpdateNotificationTitle);
                // if there is a single button which isn't close in remote disable, we should have a modal dialog
                var isAndroidRemoteDisableModal = (!WL.Client.isShowCloseButtonOnRemoteDisable() && buttons.length == 1 && buttons[0].text.indexOf(WL.ClientMessages.close) == -1);

                var isModal =  (isAndroidDirectUpdateModal || isAndroidRemoteDisableModal);
                
                return isModal;
            }
            
            // Check if we should use a modal dialog in Android
            var isAndroidModalDialog = isShowModalDialogInAndroid();
            
            // Use a custom plugin for Android modal Dialogue
            if (isAndroidModalDialog) {
            	cordova.exec(function (result) { WL.SimpleDialog.__callback(result); }, 
            			function (err) { WL.Logger.error("WL.SimpleDialog.show() error in invoking callback."); }, 
            			"WLCustomDialog", "confirm", [text, title, buttonsArray]);
            } else {
            	// use cordova to show the dialogue 
                navigator.notification.confirm(text, WL.SimpleDialog.__callback, title, buttonsArray);
            }
        } else if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.BLACKBERRY) {
            var buttonTitlesArray = new Array();
            for ( var i = 0; i < buttons.length; i++) {
                buttonTitlesArray.push(buttons[i].text);
            }
            var result = blackberry.ui.dialog.customAsk(title + "\n\n" + text, buttonTitlesArray, 0, true);
            this.__callback(result);
        } else if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.WINDOWS8) {
            var messageDialog = new Windows.UI.Popups.MessageDialog(text, title);
            for (var i = 0; i< buttons.length; i += 1) {
            	if (i < 3) { // WINDOWS8 can only show 3 buttons
            		messageDialog.commands.append(new Windows.UI.Popups.UICommand(buttons[i].text, buttons[i].handler));
            	}
            }
            messageDialog.showAsync();
            this.__callback(buttons.length);
        } else {
            var dialogOptions = options || {};

            this.__dialog = new WL.Dialog("body", dialogOptions);

            var message = '<p>' + text + '</p>';
            for ( var i = 0; i < buttons.length; i++) {
                message += '<button type="button" class="dialogButton" tabIndex="' + i + '">' + buttons[i].text
                        + '</button>';
            }

            this.__dialog.setTitle(title);
            this.__dialog.setText(message);
            this.__dialog.show();
            var dialogButtons = WLJSX.$$('.dialogButton');
            for ( var i = 0; i < dialogButtons.length; i++) {
                WLJSX.bind(dialogButtons[i], 'click', function(event) {
                    WL.SimpleDialog.__callback(WLJSX.eventTarget(event).tabIndex);
                    return false;
                });
            }
        }
    };
};
__WL.prototype.SimpleDialog = new __WLSimpleDialog;
WL.SimpleDialog = new __WLSimpleDialog;


/**
 * ================================================================= 
 * Source file taken from :: wlapp.js
 * ================================================================= 
 */

/**
\ * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
 * @class
 * @ilog.undocumented.constructor
 * @displayname WL.App
 */
__WLApp = function() {

    /**
     * Opens the specified URL according to the specified target and options
     * (specs). The behavior of this method depends on the app environment, as
     * follows:
     *  <table class="userTable" cellspacing="0">
  		<thead>
			<tr>
				<th>Environment</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="attributes">Adobe AIR</td>
				<td class="nameDescription">Opens a new browser window at the specified URL. The target and options parameters are ignored.</td>
			</tr>
			<tr>
				<td class="attributes">TO BE COMPLETED</td>
				<td class="nameDescription">TO BE COMPLETED.</td>
			</tr>
		</tbody>
		</table>
     * 
     * @param url
     *            Mandatory. The URL of the web page to be opened.
     * @param target
     *            Optional. The value to be used as the target (or name)
     *            parameter of JavaScript <code>window.open</code> method. If
     *            no value is specified, <code>_self</code> will be used.
     * 
     * @param options
     *            Optional. Parameters hash.
     *            If no value is specified, the following options are used:
	 * 			  status=1, toolbar=1, location=1, menubar=1, directories=1, resizable=1, scrollbars=1
     * @return A reference to the newly opened window, or NULL if no window was opened.
     */
    this.openURL = function(url, target, options) {
        WL.Validators.validateArguments([ 'string', WL.Validators.validateStringOrNull,
                WL.Validators.validateStringOrNull ], arguments, 'WL.App.openURL');

        var wnd = null;
        if (WLJSX.Object.isUndefined(options) || options === null) {
            options = "status=1,toolbar=1,location=1,menubar=1,directories=1,resizable=1,scrollbars=1";
        }
        if (WLJSX.Object.isUndefined(target) || target === null) {
            target = '_self';
        }
        var absoluteURL = WL.Utils.createAPIRequestURL(url);
        switch (WL.StaticAppProps.ENVIRONMENT) {
        case WL.Env.IPAD:
        case WL.Env.IPHONE:
        	window.open(absoluteURL, '_system'); 
            break;
        case WL.Env.ADOBE_AIR:
            var urlReq = new window.runtime.flash.net.URLRequest(absoluteURL);
            wnd = window.runtime.flash.net.navigateToURL(urlReq);
            break; 
        case WL.Env.BLACKBERRY:
            var args = new blackberry.invoke.BrowserArguments(absoluteURL);
            blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
            break;
        case WL.Env.BLACKBERRY10:
            blackberry.invoke.invoke({
                target: "sys.browser",
                uri: absoluteURL
            }, function(){}, function(){
            	WL.Logger.error("Failed to open URL " + absoluteURL);
            });
            break;
        default:
            if (target === "_self") {
                document.location.href = absoluteURL;
            } else {
                wnd = window.open(absoluteURL, target, options);
            }
            break;
        }
        WL.Logger.debug("openURL url: " + absoluteURL);

        return wnd;
    };

    /**
     * Returns the locale code (or device language on BlackBerry).
     * Returns the locale code according to user device settings, for example: en_US.
     * @note {Note} On BlackBerry 6 and 7, this method returns the device language (for example, en), not the device locale.
     */
	this.getDeviceLocale = function(callback) {
		locale = WL.Client.getDeviceLocale();
		//if locale is not confiured, take it regulary from navigator, if there is Cordova it would already be set using cordova
		if (typeof locale === 'undefined' || locale == null) {
			return (navigator.language) ? navigator.language : navigator.userLanguage;
		}
		return locale;
    };

    /**
     * Returns the language code.
     * Returns the language code according to user device settings, for example: en.
     */
    this.getDeviceLanguage = function() {
        return this.getDeviceLocale().substring(0, 2);
    };
    
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * Returns the pattern to the successCallback with a properties object as a parameter,that contains :
		pattern,symbol,fraction,rounding,positive etc
     */
    
    this.getLocalePattern = function(callback){    	
    	pattern = WL.Client.getLocalePattern();    	
    	return pattern;
    }
    
    /**
     * Returns the decimal separator.
     * Returns the decimal separator accoriding to the region/locale preferences. eg : French uses "," but English uses "."
     */
    this.getDecimalSeparator = function() {    	
    	var localepattern=this.getLocalePattern();
    	if (typeof localepattern === 'undefined' || localepattern == null) {
    		return ".";
    	}
    	return localepattern.decimal;
    }

    /**
     * Upgrade the inner application. This feature is currently applicable only
     * for Android and iOS platforms
     * @ignore
     */
    this.__update = function() {
        return;
    };
    
    /**
     * Extracts a string that contains an error message.
     * Extracts a string that contains the error message within the specified exception object. 
     * Use for exceptions that are thrown by the IBM® Worklight® client runtime framework.
     * @param {Function} callback Mandatory. The function that is called when Back is pressed.
     * @example {}
     * WL.App.overrideBackButton(backFunc);
	 * function backFunc(){
	 *    alert('you hit the back key!');
	 * }
     */
    this.getErrorMessage = function(e) {
        var message;
        if (e === null) {
            message = null;
        } else if (WLJSX.Object.isString(e)) {
            message = e;
        } else if (WLJSX.Object.isArray(e)) {
            message = e.join(",");
        } else if (e.description || e.message) {
            // the exception message
            message = e.description ? e.description : e.message;

            // add file name and line number
            if (e.fileName) {
                message += " [" + e.fileName + ": line " + e.lineNumber + "]";
            } else if (e.sourceURL) {
                message += " [" + e.sourceURL + ": line " + e.line + "]";
            }
        } else {
            message = e.toString();
        }
        return message;
    };

    // Back Button support (Work on Android && Windows Phone)
    /**
     * Overrides the default behavior of the Back button on Android, 
     * Windows Phone 7.5 (deprecated in IBM® Worklight® V6.0.0), and Windows Phone 8.
     * 
     * Overrides the default behavior of the Back button on Android, 
     * Windows Phone 7.5, and Windows Phone 8 devices, calling the callback function whenever Back is pressed.
     * @param exception Mandatory. The exception object from which the error string is extracted.
     */
    this.overrideBackButton = function(callback) {
    };

    /**
     * Resets the original Back button behavior.
     * 
     * Resets the original Back button behavior after it was changed by the overrideBackButton method.
     * @note {Note} This method applies to Android, Windows Phone 7.5 (deprecated in IBM® Worklight® V6.0.0), and Windows Phone 8 only.
     */
    this.resetBackButton = function() {
    };

    /**
     * Copies the specified string to the clipboard.
     * 
     * This method is applicable to iOS and Android.
     * @param {String} string Mandatory. The text to be copied to the clipboard
     * @param callback Optional. For Android environments only. The callback function that is called after the data is copied to the clipboard.
     */
    this.copyToClipboard = function(text) {
    };

    // ////////////////////////////////////////
    // Read/Write User Pref on Local Storage
    // ////////////////////////////////////////

    this.readUserPref = function(key, successCallback, failCallback) {
        var msg = "WL.App.readUserPref(..) is supported only on Android and iOS environments";
        var ex = new Error(msg);
        WL.Logger.error(msg, ex);
        throw ex;
    };

    this.writeUserPref = function(key, value) {
        var msg = "WL.App.writeUserPref(..) is supported only on Android and iOS environments";
        var ex = new Error(msg);
        WL.Logger.error(msg, ex);
        throw ex;
    };
    
    this.showSplashScreen = function() {
    	// Do nothing. the real implementation is environment specific.
    	WL.Logger.debug("Splash screen (show) is only available on iOS and Android environments.");
    }

    this.hideSplashScreen = function() {
    	// Do nothing, as this is called from the template application, and shouldn't fail whatsoever.
    	WL.Logger.debug("Splash screen (hide) is only available on iOS and Android environments.");
    }
    
    /**
     * Sends an action and optional data object to native action receivers. 
     * Sends an action and optional data object to native action receivers. 
     * @note {Note} If there are no native action receivers registered, the action 
     * is queued until a native action receiver is registered. 
     * @param {String} action Custom string that represents an action. All receivers registered 
     * with the specified action receive the message.
     * @param data Optional parameter: custom JSON object containing key-value pairs.
     * @example {}
     * WL.App.sendActionToNative(“doSomething”);
     * WL.App.sendActionToNative(“doSomething”, { customData: 12345} );
     */
    this.sendActionToNative = function(action, data) {
    	// Do nothing. the real implementation is environment specific.
    	WL.Logger.debug("WL.App.sendActionToNative(...) is supported only for Android and iOS environments.");
    }

    /**
     * Registers an action receiver. 
     * @note {Note} In JavaScript code, a receiver must be implemented as a callback that can
     * receive an object.
     * @param {String} id. A string parameter used to uniquely identify receiver function, to be able 
     * to remove it at later stages.
     * @param {Function} callback Mandatory. The JavaScript function that is called by the 
     * Worklight framework when an action is sent from native code to JavaScript code.
     * @example {}
     * WL.App.addActionReceiver(“MyReceiver”, function (receivedActon){
     *	// process receivedAction
     * });
     */
    this.addActionReceiver = function (id, callback) {
    	// Do nothing. the real implementation is environment specific.
    	WL.Logger.debug("WL.App.addActionReceiver(...) is supported only for Android and iOS environments.");
    }

    /**
     * Removes a previously added receiver. 
     * Removes a previously added receiver. After this API is called, the receiver identified 
     * by receiverId no longer receives actions.
     * @param {String} id. A string parameter used to uniquely identify a previously 
     * registered receiver function.
     * @example {}
     * WL.App.removeActionReceiver(“MyReceiver”);
     */
    this.removeActionReceiver = function (id) {
    	// Do nothing. the real implementation is environment specific.
    	WL.Logger.debug("WL.App.removeActionReceiver(...) is supported only for Android and iOS environments.");
    }

};

__WL.prototype.App = new __WLApp;
WL.App = new __WLApp;


/**
 * ================================================================= 
 * Source file taken from :: wlrequest.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

// Overwriting the prototype.js isSameOrigin method -
// Updated the original method by wrapping the return statement with try/catch
// because it does not work properly in desktop applications such as Vista
// (document.domain is undefined).
WLJSX.Ajax.Request.prototype.isSameOrigin = function() {
    var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
    try {
        var url = location.protocol + '//' + document.domain;
        if (location.port) {
            url += ':' + location.port;
        }
        return (!m || (m[0] == url));
    } catch (e) {
        return true;
    }
};


WL.Response = WLJSX.Class.create({
    invocationContext : null,
    status : -1,
    initialize : function(transport, invocationContext) {
        if (transport !== null && typeof transport.status != "undefined") {
            this.status = (transport.status || 200);
        }
        this.invocationContext = invocationContext;
    }
});

WL.FailResponse = WLJSX.Class.create({
    invocationContext : null,
    status : -1,
    errorCode : null,
    errorMsg : null,
    initialize : function(transport, invocationContext) {
        if (transport !== null && typeof transport.status != "undefined") {
            this.status = (transport.status || 200);
        }
        this.invocationContext = invocationContext;

        this.errorCode = transport.responseJSON.errorCode;
        this.errorMsg = transport.responseJSON.errorMsg;
    }
});


/*
 * Piggybackers should have the following optional properties:
 *  - a function called processOptions(options) (called before the request is sent)
 *  - a function called onSuccess(transport, options)
 *  - a function called onFailure(transport, options)
 */
window.WLJSX.Ajax.WlRequestPiggyBackers = [];

/*
 * A wrapper for the prototype Ajax.Request. The wrapper is responsible for: 1.
 * Add double-cookie headers to the request. 2. Parse cookies from the response.
 * 3. Invoke the authenticator on demand.
 */
window.WLJSX.Ajax.WLRequest = WLJSX.Class.create({
            instanceId : null,
            wlAnswers : {},
            postAnswerRealm : '',
            MAX_AUTH_HEADER_SIZE : 900,
            MAX_TOTAL_HEADER_SIZE : 3000,

            initialize : function(url, options) {
            	this.options = WLJSX.Object.clone(WLJSX.Ajax.WLRequest.options);

                WLJSX.Object.extend(this.options, options || {});
                this.url = WL.Utils.createAPIRequestURL(url);
                this.callerOptions = options;
                this.isTimeout = false;
                this.timeoutTimer = null;

                // this.stopPolling = false;
                this.options.onSuccess = this.onWlSuccess.bind(this);
                this.options.onFailure = this.onWlFailure.bind(this);

                // Handle Exceptions
                this.options.onException = this.onException.bind(this);

                // 0 is the response status when the host is unresponsive
                // (server is
                // down)
                this.options.on0 = this.onUnresponsiveHost.bind(this);

                // Appending the cookie headers to possibly existing ones.
                // If you pass additional headers make sure to use objects of
                // name-value
                // pairs (and not arrays).
                // this.options.requestHeaders =
                // Object.extend(CookieManager.createCookieHeaders(),
                // this.options.requestHeaders || {});
                this.options.requestHeaders = WL.CookieManager.createCookieHeaders();

                // For GET requests - preventing Vista from returning cached GET
                // ajax
                // responses.
                // For POST requests - preventing Air from sending a GET request
                // if the
                // request has no body (even if
                // it's declared as a POST request).
                if (WLJSX.Object.isUndefined(this.options.parameters) || this.options.parameters === null
                        || this.options.parameters === "") {
                    this.options.parameters = {};
                }
                
                // call piggybackers to modify options  
                for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
                	var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
                	if (typeof (piggybacker.processOptions) == "function") {
                		piggybacker.processOptions(this.options);                		
                	}
                }                

                // Add a parameter to notify that this is an Ajax request - for
                // Air.
                this.options.parameters.isAjaxRequest = "true";
                this.wlAnswers = {};
                this.sendRequest();
            },

            /*
             * We need to know ahead of time, for challenge processing if extra work needs to be done if we try and send
             * a message which headers are too big.
             */
            createRequestHeaders : function(){
            	var requestHeaders = {};
            	requestHeaders = WL.CookieManager.createCookieHeaders();
                requestHeaders["x-wl-app-version"] = WL.StaticAppProps.APP_VERSION;  
                
                var platformVersionParameter = (WL.StaticAppProps.WORKLIGHT_PLATFORM_VERSION) ? WL.StaticAppProps.WORKLIGHT_PLATFORM_VERSION : "";
        		var nativeVersionParameter = (WL.StaticAppProps.WORKLIGHT_NATIVE_VERSION) ? WL.StaticAppProps.WORKLIGHT_NATIVE_VERSION : "";
        		
                var headerJSON = {
            			applicationDetails : {
            				platformVersion : platformVersionParameter,
            				nativeVersion : nativeVersionParameter
            			}
            		};
                
                // Add x-wl-app-details header in case relevant, currently used for direct update (environments???)
                if (typeof(WL.__DirectUpdateManager) !== "undefined" && typeof(JSON) !== "undefined" &&
                	WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER)) {
                	headerJSON = WL.__DirectUpdateManager.generateAppDetails(headerJSON);
                } 
                
                WL.Logger.trace('Application details header: ' + JSON.stringify(headerJSON));
                //console.log('Application details header: ' + JSON.stringify(headerJSON));
                
                requestHeaders["x-wl-app-details"] = JSON.stringify(headerJSON);

                // add Authorization header from wlAnswres
                if (typeof this.wlAnswers != "undefined") {
                    var authJson = {};
                    var shouldSendAuthHeader = false;
                    for ( var realm in this.wlAnswers) {
                        if (Object.prototype.hasOwnProperty.call(this.wlAnswers, realm)) {
                            answer = "";
                            try {
                                answer = JSON.parse(this.wlAnswers[realm]);
                            } catch (e) {
                                answer = this.wlAnswers[realm];
                            }
                            // Validate we are working with standrad JSON
                            if (typeof answer == "string" && typeof JSON == "undefined") {
                                authJson[realm] = answer.indexOf("\"") == 0 ? answer : "\"" + answer + "\"";
                            } else {
                                authJson[realm] = answer;
                            }
                            shouldSendAuthHeader = true;
                        }
                    }
                    if (shouldSendAuthHeader == true) {
                        requestHeaders.Authorization = WLJSX.Object.toJSON(authJson);
                    }
                }

                // add headers from WL.Client.globalHeaders in case the Single (native) HTTP Client is disabled;
                // otherwise the headers will be added in native code
                if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR) || WL.Client.__state().enableFIPS) {
	                if ((typeof WL.Client.__globalHeaders != "undefined") && (WL.Client.__globalHeaders != null)) {
	                    for ( var headerName in WL.Client.__globalHeaders) {
	                        if (Object.prototype.hasOwnProperty.call(WL.Client.__globalHeaders, headerName)) {
	                            requestHeaders[headerName] = WL.Client.__globalHeaders[headerName];
	                        }
	                    }
	                }
                }
                
                var optionalHeaders = this.options.optionalHeaders;
                if(typeof optionalHeaders != 'undefined' && optionalHeaders != null){
                	for ( var headerName in optionalHeaders) {
                    	if (Object.prototype.hasOwnProperty.call(optionalHeaders, headerName)) {
                    		requestHeaders[headerName] = optionalHeaders[headerName];
                    	}
                	}
                }
                
                return requestHeaders;
            },
            
            // automaticResend is to be used when comming from submitAnswer or removeExpectedAnswer, we need to know if we should handle the
            // request differently (add it to the challangeHandler wiating list).
            sendRequest : function(requestHeaders) {
            	var shouldPostAnswers = false;
            	
                WL.Logger.debug("Request [" + this.url + "]");
                // Update the random before every request to prevent caching.
                this.options.parameters.x = Math.random();
                
                //add headers
                if (typeof(requestHeaders) === 'undefined'){
                	this.options.requestHeaders = this.createRequestHeaders();
                } else {
                	this.options.requestHeaders = requestHeaders;
                }
                
                var postAnswersOptions = {};
            	
            	//check if we need to send the auth header in the body, becuase it is too large or the total header size is too large
                var allHeadersSize = WLJSX.Object.toJSON(this.options.requestHeaders).length;
                var authHeaderSize = typeof(this.options.requestHeaders.Authorization) === 'undefined' ? -1 : 
                	WLJSX.Object.toJSON(this.options.requestHeaders.Authorization).length;
                
                if ((allHeadersSize > this.MAX_TOTAL_HEADER_SIZE || authHeaderSize > this.MAX_AUTH_HEADER_SIZE) && authHeaderSize >-1 ){
                	
                	postAnswersOptions = WL.Utils.extend(postAnswersOptions, this.options);
                    postAnswersOptions.requestHeaders = this.options.requestHeaders;
                	postAnswersOptions.onSuccess = this.onPostAnswersSuccess.bind(this);
                	postAnswersOptions.onFailure = this.onPostAnswersFailure.bind(this);
                	
                	postAnswersOptions.postBody = this.options.requestHeaders.Authorization;
                	postAnswersOptions.requestHeaders.Authorization = 'wl-authorization-in-body';
                	this.wlAnswers = {};
                	shouldPostAnswers = true;
                }
                
                if (typeof(this.options.requestHeaders.Authorization) !== 'undefined') {
                    //init the wlAnswer map...
                	this.wlAnswers = {};
                }
                
                if (this.options.timeout > 0) {
                    this.timeoutTimer = window.setTimeout(this.handleTimeout.bind(this), this.options.timeout);
                }

                if (shouldPostAnswers){
                	authenticateNewUrl = WL.Utils.createAPIRequestURL('authenticate');
                	new WLJSX.Ajax.Request(authenticateNewUrl, postAnswersOptions);
                } else {
                	new WLJSX.Ajax.Request(this.url, this.options);
                }
            },
            
            onSuccessParent : function(transport, par) {
            	if (this.isTimeout) {
					return;
				}
				this.cancelTimeout();
				var containsChallenges = WL.Client.checkResponseForChallenges(this, transport, par);
				
				if (!containsChallenges) {
					 // Handle notification subscription for push (if needed)
	                if (transport.responseJSON && transport.responseJSON.notificationSubscriptionState && WL.Client.Push.__isDeviceSupportPush()) {
	                    handleSubscriptions(transport.responseJSON.notificationSubscriptionState);
	                }
	                
	                // Handle notification subscription for sms push (if needed)
	        		if (transport.responseJSON && transport.responseJSON.smsNotificationSubscriptionState && WL.Client.Push.isPushSMSSupported()) {
	        			handleSMSSubscriptions(transport.responseJSON.smsNotificationSubscriptionState);
	                }
				}
				
				return containsChallenges;
            },
            
            /*
             * Custom success handelr for PostAnswer Request, it will not send the onSuccess to the application code,
             * because this is not a resend but a special request, and the user should not be informed about it.
             */
			onPostAnswersSuccess : function(transport) {
				this.onSuccessParent(transport, this.postAnswerRealm);
				this.postAnswerRealm = '';
			},
        
            /**
			 * when a onWlSuccess arrives but it came from an response to a
			 * postAnsweresRequest then we should not continue the onSucess any
			 * further
			 * 
			 * @param transport
			 * @param responseToPostAnswers
			 */
            onWlSuccess : function(transport) {
            	if (this.isTimeout) {
                    return;
                }
            	var containsChallenges = this.onSuccessParent(transport);
                
                if (!containsChallenges) {
                    this.onSuccess(transport);
                }
            },

            onSuccess : function(transport) {
                WLJSX.Ajax.WLRequest.setConnected(true);
                if (transport.getAllHeaders() !== null) {
                    // Handle Cookies:
                    var headers = transport.getAllHeaders().split("\n");
                    WL.CookieManager.handleResponseHeaders(headers);
                }

                WL.Logger.debug("response [" + this.url + "] success: " + transport.responseText);

                //Check for pendings push notification in case user was not loggedin
                if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_PUSH) && WL.Client.Push.__hasPendings()) {
                    WL.Client.Push.__dispatchPendings();
                }
                
                for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
                	var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
                	if (typeof (piggybacker.onSuccess) == "function") {
                		piggybacker.onSuccess(transport, this.options);                		
                	}
                }

                                
                if (typeof (this.callerOptions.onSuccess) == "function") {
                    this.callerOptions.onSuccess(transport);
                }
            },

            /*
             * Custom failure handelr for PostAnswer Request, it will remove the original request from waiting list, and not send the onFailure to the application code,
             * because this is not a resend but a special request, and the user should not be informed about it.
             *  
             * When a message arrives from a postAnswerRequert ("authenticate") and it is a 401,403, we need to remove it from the waitinglist so there wont be any resend on it,
             * because if has accepts in it, it will trigger the resend.
             */
            onPostAnswersFailure : function(transport){
            	if (this.isTimeout) {
                    return;
                }
                this.cancelTimeout();
                WL.Client.removeFromWaitingListOnPostAnsweresWlReponse(transport, this, this.postAnswerRealm);
                WL.Client.checkResponseForChallenges(this, transport, this.postAnswerRealm);
                this.postAnswerRealm = '';
            },

            onWlFailure : function(transport) {
				if (this.isTimeout) {
                    return;
                }
                this.cancelTimeout();
                if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_COOKIES)) {
                    if (transport && transport.getAllHeaders && transport.getAllHeaders() !== null) {
                        var headers = transport.getAllHeaders().split("\n");
                        WL.CookieManager.handleResponseHeaders(headers);
                    }
                }
                var containsChallenges = WL.Client.checkResponseForChallenges(this, transport);
                if (!containsChallenges)  {
                    this.onFailure(transport);
                }
            },

            onFailure : function(transport) {
                // sometimes onFailure is called with a dummy transport object
                // for example when an authentication timeout occurs.
                if (transport && transport.getAllHeaders && transport.getAllHeaders() !== null) {
                    var headers = transport.getAllHeaders().split("\n");
                    WL.CookieManager.handleResponseHeaders(headers);
                }

                if (transport.responseJSON === null) {
                    try {
                        transport.responseJSON = WLJSX.String.evalJSON(transport.responseText, true);
                    } catch (e) {
                        transport.responseJSON = {
                            errorCode : WL.ErrorCode.UNEXPECTED_ERROR,
                            errorMsg : WL.ClientMessages.unexpectedError
                        };
                    }
                }

                if (transport.responseJSON.errorCode != WL.ErrorCode.REQUEST_TIMEOUT
                        && transport.responseJSON.errorCode != WL.ErrorCode.UNRESPONSIVE_HOST) {
                    WLJSX.Ajax.WLRequest.setConnected(true);
                }

                var callbackHandler = this.getCallbackForErrorCode(transport.responseJSON.errorCode);

                if (callbackHandler) {
                    callbackHandler(this, transport);
                }

                if (transport.responseJSON.errorCode === WL.ErrorCode.USER_INSTANCE_ACCESS_VIOLATION) {
                    WLJSX.Ajax.WLRequest.options.onAuthentication(this, transport);
                    return;
                }
                WL.Logger.error("[" + this.url + "] failure. state: " + transport.status + ", response: "
                        + transport.responseJSON.errorMsg);

                for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
                	var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
                	if (typeof (piggybacker.onFailure) == "function") {
                		piggybacker.onFailure(transport, this.options);                		
                	}
                }

                
                if (typeof (this.callerOptions.onFailure) == "function") {
                    this.callerOptions.onFailure(transport);
                }
            },

            getCallbackForErrorCode : function(errorCode) {
                return this.options['on' + errorCode];
            },

            onException : function(request, ex) {
                if (this.isTimeout) {
                    return;
                }
                this.cancelTimeout();
                WL.Logger.error("[" + this.url + "] exception.", ex);
                // Workaround for prototype's known behavior of swallowing
                // exceptions.
                (function() {
                    throw ex;
                }).defer();
            },

            onUnresponsiveHost : function() {
                if (this.isTimeout) {
                    return;
                }
                this.cancelTimeout();

                WLJSX.Ajax.WLRequest.setConnected(false);

                if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
                    WL.Logger
                            .error("["
                                    + this.url
                                    + "] Host is not responsive. Try to manually access the URL through the android emulator browser to verify connectivity.");
                } else {
                    WL.Logger.error("[" + this.url + "] Host is not responsive.");
                }
                var transport = {};
                transport.responseJSON = {
                    errorCode : WL.ErrorCode.UNRESPONSIVE_HOST,
                    errorMsg : WL.ClientMessages.unresponsiveHost
                };

                if (typeof (this.callerOptions.onFailure) == "function") {
                    this.callerOptions.onFailure(transport);
                }
            },

            handleTimeout : function() {
                WL.Logger.error("Request timeout for [" + this.url + "]");
                this.cancelTimeout(); // cancel all other timers (if there are
                // any)
                this.isTimeout = true;

                WLJSX.Ajax.WLRequest.setConnected(false);

                var transport = {};
                
                //changes made
                
                /*transport.responseJSON = {
                    errorCode : WL.ErrorCode.REQUEST_TIMEOUT,
                    errorMsg : WL.Utils
                            .formatString(
                                    'Request timed out for {0}. Make sure the host address is available to the app (especially relevant for Android and iPhone apps).',
                                    this.url)
                };*/
                transport.responseJSON = {
                        errorCode : WL.ErrorCode.REQUEST_TIMEOUT,
                        errorMsg : WL.Utils
                                .formatString(
                                        WL.ClientMessages.handleTimeOut,
                                        this.url)
                    };
                if (typeof (this.callerOptions.onFailure) == "function") {
                    this.callerOptions.onFailure(transport);
                }
            },

            cancelTimeout : function() {
                if (this.timeoutTimer !== null) {
                    window.clearTimeout(this.timeoutTimer);
                    this.timeoutTimer = null;
                    this.isTimeout = false;
                }
            },

            // Default behavior for setConnected. This function should be
            // overwritten
            // and respond to the connected state
            setConnected : function(isConnected) {
                WL.Logger.debug("Application is now " + (isConnected ? " online." : "offline."));
            },

            checkIfCanResend : function() {
                if (typeof this.wlAnswers === "undefined") {
                    return true;
                }

                for ( var realm in this.wlAnswers) {
                    if (Object.prototype.hasOwnProperty.call(this.wlAnswers, realm)) {
                        if (this.wlAnswers[realm] == null) {
                            return false;
                        }
                    }
                }

                return true;
            },

            // initialize the wlAnswer table with realm = null values
            setExpectedAnswers : function(realms) {
                for ( var realm in realms) {
                    if (Object.prototype.hasOwnProperty.call(realms, realm)) {
                        this.wlAnswers[realm] = null;
                    }
                }
            },

            submitAnswer : function(realm, answer) {
                this.wlAnswers[realm] = answer;
                if (this.checkIfCanResend()) {
                	this.handleResendOrSendPostAnswers(realm);
                }
            },
            
            removeExpectedAnswer : function(realm) {
                delete this.wlAnswers[realm];
                if (this.checkIfCanResend()) {
                	this.handleResendOrSendPostAnswers(realm);                   
                }
            },
            
            /*
             * If the total header size is larger than MAX_TOTAL_HEADER_SIZE or the auth header is larger than MAX_AUTH_HEADER_SIZE
             * we need to put the original request into the waiting list, because we will send a special "authenticate" request that will have the 
             * Autherization header in the body.
             * 
             */
            handleResendOrSendPostAnswers : function(realm){
            	var headers = this.createRequestHeaders();
            	
            	var moveToWaitingList = false;
            	var allHeadersSize = WLJSX.Object.toJSON(headers).length;
				var authHeaderSize = typeof(headers.Authorization) === 'undefined' ? -1 : 
					WLJSX.Object.toJSON(headers.Authorization).length;
				 
				if ((allHeadersSize > this.MAX_TOTAL_HEADER_SIZE || authHeaderSize > this.MAX_AUTH_HEADER_SIZE) && authHeaderSize >-1 ){
					moveToWaitingList = true;
				}
            	
            	if (moveToWaitingList){
            		//iterate over all the challageHandlers
            		this.postAnswerRealm = realm;
            		handler = WL.Client.__chMap[realm];
            		if (typeof(handler) !== 'undefined'){
            			handler.moveToWaitingList(this);
            		}
            	}
            	this.sendRequest(headers);
            }
        });

// WLRequest default options:
WLJSX.Ajax.WLRequest.options = {
    method : 'post',
    asynchronous : true,
    encoding : 'UTF-8',
    parameters : '',
    evalJSON : true,
    timeout : -1,
    onAuthentication : null,
    isAuthResponse : null
};

function handleSubscriptions(notificationSubscriptionState) {
    WL.Client.Push.__clearSubscribedEventSources();
    WL.Client.Push.__clearSubscribedTags();
    
    var deviceToken = notificationSubscriptionState.token;
    if (!notificationSubscriptionState.eventSources || notificationSubscriptionState.eventSources.length <= 0) {
        WL.Logger.debug("Send new server notification token id.");
    } else {
        var eventSources = notificationSubscriptionState.eventSources;
        WL.Client.Push.__updateSubscribedEventSources(eventSources);
    }
    
    if (notificationSubscriptionState.tags && notificationSubscriptionState.tags.length > 0) {
        var tags = notificationSubscriptionState.tags;
        WL.Client.Push.__updateSubscribedTags(tags);
    }
   
    WL.Client.Push.__updateToken(deviceToken);
}

function handleSMSSubscriptions(notificationSubscriptionState) {
    WL.Client.Push.__clearSubscribedSMSEventSources();
    var eventSources = notificationSubscriptionState.eventSources;
    WL.Client.Push.__updateSubscribedSMSEventSources(eventSources);
}

/**
 * ================================================================= 
 * Source file taken from :: wlcookiemanager.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


/**
 * Cookie manager singleton
 */
WL.CookieManager = function() {
    var COOKIE_JSESSION_ID = "JSESSIONID";
    var COOKIE_WLSESSION_ID = "WLSESSIONID";

    // WARN: This constant is also accessed in the iOS native code
    // (WLCookieExtractor.m)
    var PERSISTED_COOKIES_NAME = "cookies";

    var cookies = null;
    var cookiePersister = null;
    var gadgetName = null;
    var gadgetEnvironment = null;
    var gadgetIID = null;

    var CookiePersister = WLJSX.Class.create({
        init : function() {
        },
        storeCookies : function() {
        },
        readCookies : function() {
        }, // throws exception on failure.
        clearCookies : function() {
        }
    });

    // Air
    // Adobe Air has a local SQLite DB which is used to persist the cookies.
    // All cookies are saved as a JSON object in the cookies table, under the
    // name "cookies".
    //
    var AirCookiePersister = WLJSX.Class.create(CookiePersister, {
        conn : null,

        init : function() {
            this.conn = new air.SQLConnection();
            // The database file is in the application storage
            // directory
            var folder = air.File.applicationStorageDirectory;
            var dbFile = folder.resolvePath("worklight.db");

            try {
                this.conn.open(dbFile);
            } catch (e) {
                WL.Logger.error("Error opening cookies DB: " + e.message + ", Details: " + e.details);
                return;
            }

            var createStmt = new air.SQLStatement();
            createStmt.sqlConnection = this.conn;
            createStmt.text = "CREATE TABLE IF NOT EXISTS cookies (name VARCHAR(255) PRIMARY KEY, value VARCHAR(255))";

            try {
                createStmt.execute();
            } catch (e) {
                WL.Logger.error("Error creating cookies DB tables: " + e.message + ", Details: " + e.details);
            }
        },

        storeCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                WL.Logger.debug("Storing cookies: " + JSONCookies);

                // first cookie - need to use an "insert" sql
                // command
                if (this.getCookieValue(PERSISTED_COOKIES_NAME) === null) {
                    var insertStmt = new air.SQLStatement();
                    insertStmt.sqlConnection = this.conn;
                    insertStmt.text = "INSERT INTO cookies (name, value) VALUES(\"" + PERSISTED_COOKIES_NAME + "\", \""
                            + JSONCookies + "\")";
                    insertStmt.execute();
                } else {
                    // cookies were persisted already - need to
                    // use an "update"
                    // sql command
                    var updateStmt = new air.SQLStatement();
                    updateStmt.sqlConnection = this.conn;
                    updateStmt.text = "UPDATE cookies SET name=\"" + PERSISTED_COOKIES_NAME + "\", value=\""
                            + JSONCookies + "\" WHERE name=\"" + PERSISTED_COOKIES_NAME + "\"";
                    updateStmt.execute();
                }
            } catch (e) {
                WL.Logger.error("Error storing cookies: " + e.message + ", Details: " + e.details);
            }
        },

        readCookies : function() {
            var JSONCookies = this.getCookieValue(PERSISTED_COOKIES_NAME);
            if (JSONCookies) {
                WL.Logger.debug("Read cookies: " + JSONCookies);
                var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
                for ( var key in cookiesObj) {
                    cookies[key] = cookiesObj[key];
                }
            }
        },

        clearCookies : function() {
            try {
                var deleteStmt = new air.SQLStatement();
                deleteStmt.sqlConnection = this.conn;
                deleteStmt.text = "DELETE FROM cookies";
                deleteStmt.execute();
            } catch (e) {
                WL.Logger.error("Error clearing cookies: " + e.message);
            }
        },

        getCookieValue : function(cookieName) {
            try {
                var cookieValue = null;
                var selectStmt = new air.SQLStatement();
                selectStmt.sqlConnection = this.conn;
                selectStmt.text = "SELECT * FROM cookies WHERE name=\"" + cookieName + "\"";
                selectStmt.execute();

                var result = selectStmt.getResult();
                if (result.data !== null) {
                    var numResults = result.data.length;
                    for ( var i = 0; i < numResults; i++) {
                        cookieValue = result.data[i].value;
                    }
                }
                return cookieValue;
            } catch (e) {
                WL.Logger.error("Error getting cookie: " + cookieName + ", error: " + e.message);
            }
        }
    });

    //
    // Blackberry Persister
    //
    var BlackberryCookiePersister = WLJSX.Class.create(CookiePersister, {
        storeCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                WL.Logger.debug("Storing cookies: (" + JSONCookies + ")");
                __WL.blackBerryPersister.store(PERSISTED_COOKIES_NAME, JSONCookies);
            } catch (e) {
                WL.Logger.error("Error storing cookie: " + e.message);
            }
        },

        readCookies : function() {
            try {
                var JSONCookies = __WL.blackBerryPersister.read(PERSISTED_COOKIES_NAME);
                WL.Logger.debug("Read cookies: " + JSONCookies);
                if (JSONCookies != null) {
                    var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
                    for ( var key in cookiesObj) {
                        cookies[key] = cookiesObj[key];
                    }
                }
            } catch (e) {
                WL.Logger.error("Error reading cookies: " + e.message);
            }
        },

        clearCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                __WL.blackBerryPersister.remove(PERSISTED_COOKIES_NAME);
                WL.Logger.debug("Delete cookies: " + JSONCookies);
            } catch (e) {
                WL.Logger.error("Error deleting cookies: " + e.message);
            }
        }
    });

    //
    // Windows Phone Persister
    //
    var WPCookiePersister = WLJSX.Class.create(CookiePersister, {
        storeCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                window.localStorage.setItem(PERSISTED_COOKIES_NAME, JSONCookies);
                WL.Logger.debug("Storing cookies: (" + JSONCookies + ")");
                this.readCookies();
            } catch (e) {
                WL.Logger.error("Error storing cookie: " + e.message);
            }
        },

        readCookies : function() {
            try {
            	JSONCookies = window.localStorage.getItem(PERSISTED_COOKIES_NAME);
				
				if (JSONCookies != null) {
					var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
					for (var key in cookiesObj){
						cookies[key] = cookiesObj[key];
					}
				}
            } catch (e) {
                WL.Logger.error("Error reading cookies: " + e.message);
            }
        },

        clearCookies : function() {
            try {
            	window.localStorage.removeItem(PERSISTED_COOKIES_NAME);
                WL.Logger.debug("Delete cookies: " + JSONCookies);
            } catch (e) {
                WL.Logger.error("Error deleting cookies: " + e.message);
            }
        }
    });

    var LocalStorageCookiePersister = WLJSX.Class.create(CookiePersister, {
        storeCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                WL.Logger.debug("Storing cookies: (" + JSONCookies + ")");
                __WL.LocalStorage.setValue(PERSISTED_COOKIES_NAME, JSONCookies);
            } catch (e) {
                WL.Logger.error("Error storing cookie: " + e.message);
            }
        },

        readCookies : function() {
            try {
                var JSONCookies = __WL.LocalStorage.getValue(PERSISTED_COOKIES_NAME);
                if (JSONCookies == '') {
                    return;
                }
                WL.Logger.debug("Read cookies: " + JSONCookies);
                if (JSONCookies != null) {
                    var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
                    for ( var key in cookiesObj) {
                        cookies[key] = cookiesObj[key];
                    }
                }
            } catch (e) {
                WL.Logger.error("Error reading cookies: " + e.message);
            }
        },

        clearCookies : function() {
            try {
                var JSONCookies = WLJSX.Object.toJSON(cookies);
                __WL.LocalStorage.clear(KEY_COOKIES);
                WL.Logger.debug("Delete cookies: " + JSONCookies);
            } catch (e) {
                WL.Logger.error("Error deleting cookies: " + e.message);
            }
        }
    });

    // 
    // Android
    //
    var AndroidCookiePersister = LocalStorageCookiePersister;

    //
    // iPhone
    //	
    var IPhoneCookiePersister = LocalStorageCookiePersister;

    // Private methods of the cookie manager:

    // Create the cookie persister according to the environment
    var createCookiePersister = function() {
        switch (gadgetEnvironment) {
        case WL.Env.ADOBE_AIR:
            cookiePersister = new AirCookiePersister();
            break;
        case WL.Env.IPHONE:
            cookiePersister = new IPhoneCookiePersister();
            break;
        case WL.Env.IPAD:
            cookiePersister = new IPhoneCookiePersister();
            break;
        case WL.Env.BLACKBERRY:
            // check if localStorage (HTML5 feature) supported
            cookiePersister = (typeof localStorage != "undefined") ? new LocalStorageCookiePersister
                    : new BlackberryCookiePersister();
            break;
        case WL.Env.ANDROID:
            cookiePersister = new AndroidCookiePersister();
            break;
        case WL.Env.WINDOWS_PHONE_8:
            cookiePersister = new WPCookiePersister();
            break;
        default:
            cookiePersister = null;
            break;
        }
    };

    var parseCookiesFromHeader = function(header) {
        var resultCookies = [];
        var headerValue = header.substr(header.indexOf(":") + 1);

        var cookieParts = headerValue.split(",");
        for ( var i = 0; i < cookieParts.length; i++) {
            var cookiePart = cookieParts[i];
            // WL.Logger.debug("CookiePart: " + cookiePart);
            var cookieSubparts = cookiePart.split("=");
            if (cookieSubparts.length < 2) {
                WL.Logger.error("invalid cookie header: " + header);
            } else {
                var cookie = {
                    name : WLJSX.String.strip(cookieSubparts[0]),
                    value : WLJSX.String.strip(cookieSubparts[1].split(';')[0])
                };
                resultCookies.push(cookie);
            }
        }
        return resultCookies;
    };

    var getCookie = function(cookieName) {
        var cookieValue = "";
        if (isCookieManagementRequired()) {
            cookieValue = cookies[cookieName];
        } else {
            if (document.cookie.length > 0) {
                var cookieStart = document.cookie.indexOf(cookieName + "=");
                if (cookieStart !== -1) {
                    cookieStart = cookieStart + cookieName.length + 1;
                    var cookieEnd = document.cookie.indexOf(";", cookieStart);
                    if (cookieEnd === -1) {
                        cookieEnd = document.cookie.length;
                    }
                    cookieValue = decodeURI(document.cookie.substring(cookieStart, cookieEnd));
                }
            }
        }
        if (typeof cookieValue === 'undefined') {
            cookieValue = null;
        }
        // WL.Logger.debug("getCookieValue: " + cookieName + "=" + cookieValue);
        return {
            name : cookieName,
            value : cookieValue
        };
    };

    var isCookieManagementRequired = function() {
        return !WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_COOKIES);
    };

    // Public API methods
    return {
        init : function(gadgetDisplayName, gadgetEnv, gadgetInstanceID) {
            gadgetName = gadgetDisplayName;
            gadgetEnvironment = gadgetEnv;
            gadgetIID = gadgetInstanceID;

            cookies = {};
            createCookiePersister();

            if (cookiePersister !== null) {
                cookiePersister.init();
                try {
                    cookiePersister.readCookies();
                } catch (e) {
                    WL.Logger.error("error read cookies: " + e.message);
                    cookiePersister.clearCookies();
                }
                WL.Logger.debug("CookieMgr read cookies: " + WLJSX.Object.toJSON(cookies));
            }
        },

        // Called by WP7 native code after call readCookies
        updateCookies : function(JSONCookies) {
            try {
                var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
                for ( var key in cookiesObj) {
                    cookies[key] = cookiesObj[key];
                }
            } catch (e) {
                WL.Logger.error("Problems to update cookies " + e + " " + JSONCookies);
            }
        },

        clearCookies : function() {
            cookies = {};
            if (cookiePersister !== null) {
                cookiePersister.clearCookies();
            }
        },

        createCookieHeaders : function() {
            var headers = {};
            if (isCookieManagementRequired()) {
                var cookieHeaderValue = '';
                for ( var key in cookies) {
                    cookieHeaderValue += key + "=" + cookies[key] + ";";
                }

                if (cookieHeaderValue != '') {
                    headers.Cookie = cookieHeaderValue;
                }
            }

            if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DEVICE_AUTH) && typeof device != "undefined"
                    && device != null && typeof device.uuid != "undefined") {
            	var deviceId = {};
                if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8) {			
					//Device uuid changes and system generates different uuid's for different apps. 
	        		//For device SSO to work it should be same across apps and adapterid remains same for a device.
                	deviceId.id = WL.Device.getHardwareIdentifier();
                } else if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
					//Device uuid changes and system generates different uuid's for different apps.
                	//For device SSO to work it should be same across apps and PublisherHostId is same if publisherid matches with apps
                	deviceId.id = WL.PublisherHostID;
                } else {
                	deviceId.id = device.uuid;
                }
                deviceId.os = device.version;
                deviceId.model = device.model;
                deviceId.environment = WL.Client.getEnvironment();
                headers.deviceId = WLJSX.Object.toJSON(deviceId);
            }
            return headers;
        },

        handleResponseHeaders : function(headers) {
            if (!isCookieManagementRequired()) {
                return;
            }
            var sessionCookies = {};
            for ( var i = 0; i < headers.length; i++) {
                var header = headers[i];
                if (header.toLowerCase().indexOf("set-cookie") > -1) {
                    var parsedCookies = parseCookiesFromHeader(header);
                    for ( var j = 0; j < parsedCookies.length; j++) {
                        var cookie = parsedCookies[j];
                        // Persist only the non session cookies
                        if (cookie.name != COOKIE_JSESSION_ID && cookie.name != COOKIE_WLSESSION_ID) {
                            cookies[cookie.name] = cookie.value;
                        } else {
                            sessionCookies[cookie.name] = cookie.value;
                        }

                        if (cookiePersister !== null) {
                            if (cookies != null && WLJSX.Object.objectSize(cookies) > 0) {
                                // in case there is two requests immediate after
                                // login we need
                                // to ensure session cookies is not persist
                                delete cookies[COOKIE_WLSESSION_ID];
                                delete cookies[COOKIE_JSESSION_ID];
                                cookiePersister.storeCookies();
                            }
                        }
                    }
                }
            }

            // Add the session cookies into the memory cookies
           if (isCookieManagementRequired()) {
              for (var key in sessionCookies){
                 cookies[key] = sessionCookies[key];
              }
            }
             
        },

        getJSessionID : function() {
            var jsessionidCookie = getCookie(COOKIE_JSESSION_ID);
            return (jsessionidCookie === null) ? null : jsessionidCookie.value;
        },

        areCookiesEnabled : function() {
            var enabled = true;
            if (WL.EnvProfile.isEnabled(WL.EPField.WEB)) {
                var date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                document.cookie = "testcookie=oreo; expires=" + date.toGMTString() + "; path=/";
                var cookie = getCookie('testcookie');
                enabled = (cookie.value === 'oreo');
            }
            return enabled;
        }
    };
}();
/* End CookieManager */

/**
 * ================================================================= 
 * Source file taken from :: worklight.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/



/**
 * EnvironmentProfile
 */
WL.EnvProfile = function() {
    var profile = null;

    return {
        initialize : function(env) {
            if (typeof WL[env + "ProfileData"] !== 'undefined') {
                profile = WL[env + "ProfileData"];
            } else {
                profile = WL.DefaultProfileData;
            }
        },

        getValue : function(field) {
            return profile[field];
        },

        isEnabled : function(field) {
            return !!(field in profile && profile[field]);
        },
        
        disable : function(field) {
            if (field in profile) {
                profile[field] = false;
            }
        }
    };
}();

__WL.MultiEventListener = WLJSX.Class.create({
    isEventComplete : false,
    onEventsComplete : null,
    events : null,

    initialize : function() {
        this.events = new Object();
    },

    __onEvent : function(e) {
        this.events[e.type] = true;
        for (x in this.events) {
            if (!this.events[x]) {
                return;
            }
        }
        this.onEventsComplete();
    },

    registerEvent : function(e) {
        document.addEventListener(e, this.__onEvent.bind(this), false);
        this.events[e] = false;
    }
});

__WL.InternalEvents = {
    REACHABILITY_TEST_FAILURE : "WL:REACHABILITY_TEST_FAILURE",
    REACHABILITY_TEST_SUCCESS : "WL:REACHABILITY_TEST_SUCCESS"
};

var __WLEvents = {
    WORKLIGHT_IS_CONNECTED : "WL:WORKLIGHT_IS_CONNECTED",
    WORKLIGHT_IS_DISCONNECTED : "WL:WORKLIGHT_IS_DISCONNECTED"
};

__WL.prototype.Events = __WLEvents;
WL.Events = __WLEvents;

__WLLocalStorage = function() {
    var isSupportLocalStorage = (typeof localStorage != "undefined");
    var HTML5_NOT_SUPPORT_MSG = ". HTML5 localStorage not supported on current browser.";

    if (typeof document.addEventListener != 'undefined') {
	    document.addEventListener('deviceready', deviceReadyCallback, false);
    } else {
    	document.attachEvent('ondeviceready', deviceReadyCallback);
    }
    
    function preventClearSpecialValues () {
    	// prevent from clear Worklight special values
        if (typeof Storage != "undefined" && isSupportLocalStorage) {
            Storage.prototype.clear = function() {
                for (item in localStorage) {
                    if (item != "cookies" && item != "userName") {
                        localStorage.removeItem(item);
                    }
                }
            };
        }
    };
    
    function deviceReadyCallback() {
    	isSupportLocalStorage = (typeof localStorage != "undefined");
        preventClearSpecialValues();
    };
    

    this.getValue = function(key) {
        var value = null;
        if (isSupportLocalStorage) {
            value = localStorage.getItem(key);
        } else {
            WL.Logger.debug("Can't retrive value for key " + key + HTML5_NOT_SUPPORT_MSG);
        }
        return value;
    },

    this.setValue = function(key, value) {
        if (isSupportLocalStorage) {
            localStorage.setItem(key, value);
        } else {
            WL.Logger.debug("Can't set value " + value + " for key" + key + HTML5_NOT_SUPPORT_MSG);
        }
    },

    this.clear = function(key) {
        if (isSupportLocalStorage) {
            localStorage.removeItem(key);
        } else {
            WL.Logger.debug("Can't clear key " + key + HTML5_NOT_SUPPORT_MSG);
        }
    },

    this.clearAll = function() {
        if (isSupportLocalStorage) {
            localStorage.clear();
        } else {
            WL.Logger.debug("Can't clear storage" + HTML5_NOT_SUPPORT_MSG);
        }
    };
};

__WL.LocalStorage = new __WLLocalStorage;

__WLToast = function() {
    // Support toast message (for Android devices)
    this.show = function(message) {
    };
};
__WL.prototype.Toast = new __WLToast;
WL.Toast = new __WLToast;

__WLDevice = function() {
    /**
     * Supported environments: Android, iOS
     * 
     * @param callback -
     *            the callback function
     * @return network info from device in JSON format The returned object
     *         consist from the following properties: isNetworkConnected,
     *         isAirplaneMode, isRoaming, networkConnectionType, wifiName,
     *         telephonyNetworkType, carrierName, ipAddress,
     */
    this.getNetworkInfo = function(callback) {
        callback({});
    };
};
__WL.prototype.Device = new __WLDevice;
WL.Device = new __WLDevice;


/**
 * ================================================================= 
 * Source file taken from :: diagnosticdialog.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

__WLDiagnosticDialog = function() {
    this.showDialog = function(title, messageText, allowReload, allowDetails, response, customErrorMsg) {
        var buttons = [];
        if (allowReload) {
            buttons.push({
                text : WL.ClientMessages.reload,
                handler : function() {
                    WL.Client.reloadApp();
                }
            });
        }
        if (WL.App.close) {
            buttons.push({
                text : WL.ClientMessages.close,
                handler : function() {
                }
            });
        }

        // Troubleshooting button
        if (allowDetails && WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DIAGNOSTIC)) {
            buttons.push({
                text : WL.ClientMessages.details,
                handler : function() {
                    WL.Device.getNetworkInfo(function(networkInfoObject) {
                    	WL.App.hideSplashScreen();
                        showDiagnosticTable(response, networkInfoObject, customErrorMsg);
                    });
                }
            });
        }

        if (buttons.length == 0) {
            buttons.push({
                text : WL.ClientMessages.close,
                handler : function() {
                }
            });
        }
        WL.SimpleDialog.show(title, messageText, buttons);
    };

    // Diagnostics functions
    function showDiagnosticTable(response, networkInfo, customErrorMsg) {
        // Back again with networkInfo object
        var diagnosticData = getDiagnosticData(response, networkInfo, customErrorMsg);
        clearScreenBeforeDiagnostics();
        WLJSX.$$('html')[0].style.overflow = 'auto';
        WLJSX.$$('body')[0].style.overflow = 'visible';
        WLJSX.$$('body')[0].style.backgroundColor = 'white';

        var diagnosticDiv = WLJSX.newElement('<div/>', {
            'id' : 'diagnostic',
            'class' : 'max'
        });

        var contentContainer = WLJSX.$$$("body");
        if (contentContainer && contentContainer.tagName.toLowerCase() != "body") {
            contentContainer.style.display = "none";
        }
        WLJSX.$$('body')[0].appendChild(diagnosticDiv);

        var diagnosticTable = WLJSX.newElement('<table/>', {
            'id' : 'diagnosticTable'
        });

        WLJSX.append(diagnosticDiv, diagnosticTable);
        WLJSX.addClass(diagnosticTable, 'max');
        WLJSX.addClass(diagnosticTable, 'diagnosticTable');
        var titleRow = WLJSX.newElement('<tr/>');
        var titleColumn = WLJSX.newElement('<td/>', {
            'class' : 'center strong',
            'colspan' : '2'
        });

        WLJSX.html(titleColumn, WL.ClientMessages.diagApp);
        WLJSX.append(diagnosticTable, titleRow);
        WLJSX.append(titleRow, titleColumn);
        WLJSX.append(diagnosticTable, titleRow);

        for (dataRecord in diagnosticData) {
            var row = WLJSX.newElement('<tr/>');
            var labelColumn = WLJSX.newElement('<td>' + dataRecord + '</td>');
            var dataColumn = WLJSX.newElement('<td>' + diagnosticData[dataRecord] + '</td>');
            WLJSX.append(row, labelColumn);
            WLJSX.append(row, dataColumn);
            WLJSX.append(diagnosticTable, row);
        }
        titleColumn.appendChild(getDiagnosticsButtonDiv(diagnosticData));
        diagnosticDiv.appendChild(getDiagnosticsButtonDiv(diagnosticData));
        if (WL.StaticAppProps.ENVIRONMENT == WL.Env.ANDROID) {
            WL.OptionsMenu.init();
        }
    }

    function getDiagnosticData(response, networkInfo, customErrorMsg) {
        var diagnosticData = {};
        diagnosticData[WL.ClientMessages.diagTime] = new Date();
        diagnosticData[WL.ClientMessages.diagApplicationName] = WL.StaticAppProps.APP_DISPLAY_NAME;
        diagnosticData[WL.ClientMessages.diagApplicationVersion] = WL.StaticAppProps.APP_VERSION;
        diagnosticData[WL.ClientMessages.diagServiceURL] = WL.StaticAppProps.WORKLIGHT_ROOT_URL;
        diagnosticData[WL.ClientMessages.diagDevicePlatform] = (typeof (device) != "undefined") ? device.platform : "";
        diagnosticData[WL.ClientMessages.diagDeviceVersion] = (typeof (device) != "undefined") ? device.version : "";
        diagnosticData[WL.ClientMessages.diagScreenResolution] = (WL.App.getScreenWidth ? WL.App.getScreenWidth() : screen.width) + 'x'
                + (WL.App.getScreenHeight ? WL.App.getScreenHeight() : screen.height);
        if (typeof networkInfo != "undefined") {
            diagnosticData[WL.ClientMessages.diagAirplaneMode] = networkInfo.isAirplaneMode == null ? WL.ClientMessages.notAvailable
                    : networkInfo.isAirplaneMode;
            diagnosticData[WL.ClientMessages.diagUsingNetwork] = networkInfo.networkConnectionType;
            diagnosticData[WL.ClientMessages.diagWifiName] = networkInfo.wifiName == null ? WL.ClientMessages.notAvailable
                    : networkInfo.wifiName;
            diagnosticData[WL.ClientMessages.diagMobileNetworkType] = networkInfo.telephonyNetworkType == null ? WL.ClientMessages.notAvailable
                    : networkInfo.telephonyNetworkType;
            diagnosticData[WL.ClientMessages.diagCarrierName] = networkInfo.carrierName == null ? WL.ClientMessages.notAvailable
                    : networkInfo.carrierName;
            diagnosticData[WL.ClientMessages.diagIPAddress] = networkInfo.ipAddress;
        }
        diagnosticData[WL.ClientMessages.diagErrorCode] = response.errorCode;
        diagnosticData[WL.ClientMessages.diagErrorMessage] = (typeof (customErrorMsg) === 'undefined' || customErrorMsg == null) ? response.errorMsg
                : customErrorMsg;
        diagnosticData[WL.ClientMessages.diagHttpStatus] = response.status != -1 ? response.status : "";
        return diagnosticData;
    }

    function getDiagnosticsButtonDiv(diagnosticData) {
        var copyButton = WLJSX.newElement('<input/>', {
            'class' : 'diagnosticButtons',
            'type' : 'button',
            'value' : WL.ClientMessages.copyToClipboard,
            'title' : WL.ClientMessages.copyToClipboard
        });
        var reloadButton = WLJSX.newElement('<input/>', {
            'class' : 'diagnosticButtons',
            'type' : 'button',
            'value' : WL.ClientMessages.reload,
            'title' : WL.ClientMessages.reload
        });
        var buttonsDiv = WLJSX.newElement('<div/>', {
            'class' : 'center'
        });
        var diagnosticToCopy = formatDiagnosticData(diagnosticData);

        WLJSX.bind(copyButton, 'click', function() {
            WL.App.copyToClipboard(diagnosticToCopy);
        });

        WLJSX.bind(reloadButton, 'click', function() {
        	 WL.Client.reloadApp();
        });

        buttonsDiv.appendChild(reloadButton);
        buttonsDiv.appendChild(copyButton);
       
        // Add worklight setting button to android
        if (WL.Env.ANDROID == WL.StaticAppProps.ENVIRONMENT) {
            if (WL.Client.isSettingsEnabled()) {
                var settingsButton = WLJSX.newElement('<input/>', {
                    'class' : 'diagnosticButtons',
                    'type' : 'button',
                    'value' : WL.ClientMessages.settings,
                    'title' : WL.ClientMessages.settings
                });
                WLJSX.bind(settingsButton, 'click', function() {
                    WL.App.__showWLPreferences();
                });
                buttonsDiv.appendChild(settingsButton);
            }
        }
        return buttonsDiv;
    }

    function formatDiagnosticData(diagnosticData) {
        var diagnosticDataText = "" + WL.ClientMessages.diagApp + "\n\n";
        for (property in diagnosticData) {
            var diagnosticDataValue = (typeof diagnosticData[property] == "undefined" || diagnosticData[property] == "undefined") ? ""
                    : diagnosticData[property];
            diagnosticDataText += property + " : " + diagnosticDataValue + "\n\n";
        }
        return diagnosticDataText;
    }

    function clearScreenBeforeDiagnostics() {
        var contentContainer = WLJSX.$$$("body");
        WLJSX.empty(contentContainer);
        // hideBusy();
        // Android native elements
        if (WL.OptionsMenu) {
            WL.OptionsMenu.setVisible(false);
        }
        if (WL.TabBar) {
            WL.TabBar.setVisible(false);
        }
    }
};

__WL.prototype.DiagnosticDialog = new __WLDiagnosticDialog;
WL.DiagnosticDialog = new __WLDiagnosticDialog;


/**
 * ================================================================= 
 * Source file taken from :: wllogger.js
 * ================================================================= 
 */

/*
 * Licensed Materials - Property of IBM
 * 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/*globals WL, printStackTrace, air, worklight, cordova, WLJQ*/
/*jshint expr:true, strict:false, maxdepth:4, maxparams:5*/

WL.Logger = (function (jQuery) {
	
  var $ = jQuery;

  var priorities = {
    trace      : 600,
    debug      : 500,
    log        : 400,
    info       : 300,
    warn       : 200,
    error      : 100,
    fatal      : 50,
    _analytics : 25
  };

  var LEFT_BRACKET = '[';
  var RIGHT_BRACKET = '] '; //There's a space at the end.

  var __getStateDefaults = function() {
    var udf;  // because undefined can be overridden
    return {
      enabled : true,
      stringify : true,
      pretty: false,
      stacktrace : false,
      ismsie : !!(document.all && document.querySelector && !document.addEventListener),
      callback : '',
      tag : {level: false, pkg: true},
      pkg : '',
      whitelist : [],  // @deprecated since version 6.2; use filters instead
      blacklist : [],  // @deprecated since version 6.2; use filters instead
      filters : udf,
      level : [],
      metadata : {},
      capture : udf,
      analyticsCapture : udf,
      maxFileSize : udf,
      autoSendLogs: true,
      autoUpdateConfig: true
    };
  };

  var state = __getStateDefaults();

  var deviceReady = false;
  var queue = [];

  var CDV_PLUGIN_LOGGER = 'LoggerPlugin';
  var CDV_ACTION_LOG = 'log';
  var CDV_ACTION_SET_NATIVE_OPTIONS = 'setNativeOptions';
  var CDV_ACTION_SEND = 'send';
  var CDV_ACTION_GET_STATUS = 'getStatus';
  var CDV_ACTION_SEND_ANALYTICS = 'sendAnalytics';
  var REQ_SEND_LOGS = '/loguploader';
  
  // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
  // guaranteed to be available
  if (typeof console === 'undefined' && WL.StaticAppProps.ENVIRONMENT === 'air') {
    window.addEventListener('load', function() {
      // override console.  Yes global; no 'var' declaration.
      console = WL.Logger;
    }, false);
  }
  
  // we want to pass log messages to cordova, which may not be ready,
  // so we listen for deviceready event, and queue until event occurs
  var __onDeviceReady = function() {
    if (deviceReady) {
      return;
    }

    var noop = function () {};
    deviceReady = true;

    for (var i = 0; i < queue.length; i++) {
      var current = queue[i];
      if ($.isArray(current)) {
        cordova.exec(null, null, CDV_PLUGIN_LOGGER, CDV_ACTION_LOG, current);
      } else if (typeof current === 'object') {

        current.dfd = current.dfd || {};
        cordova.exec(current.dfd.resolve || noop,
            current.dfd.reject || noop,
            CDV_PLUGIN_LOGGER, CDV_ACTION_SET_NATIVE_OPTIONS, [current]);
      }
    }

    queue = null;
  };

  var __resetState = function () {
    state = __getStateDefaults();
    return this;
  };

  var __getLogArgArray = function (args, priority, pkg) {

    var msgStr = __stringifyArguments(args);
    var meta = $.extend(true, {'$src': 'js', '$arguments': args}, state.metadata); //clone obj
    state.metadata = {}; //clear metadata obj

    for (var i = 0; i < args.length; i++) {

      if (args[i] instanceof Error) {
        args[i] = {'$name': args[i].toString(), '$stacktrace': printStackTrace({e: args[i]})};
      }
    }

    if (typeof priority === 'string') {
      priority = priority.toUpperCase();
    }
    
    return [priority, pkg, msgStr, meta, (new Date()).getTime()];
  };

  var __checkNativeEnvironment = function () {
    // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
    // guaranteed to be available
    var env = WL.StaticAppProps.ENVIRONMENT;

    return (env === 'android' ||
        env === 'iphone' ||
        env === 'ipad');
  };
  
  if (__checkNativeEnvironment()) {
    var interval = setInterval(function() {
      if (!deviceReady && typeof window.cordova === 'object' && typeof window.cordova.exec === 'function') {
        setTimeout(function(){
          __onDeviceReady();
        },0);
        clearInterval(interval);
      }
    }, 500);
  }

  var __insideArray = function (needle, haystack) {

    return haystack.indexOf(needle) !== -1;
  };

  var __getKeys = function (obj) {
    var arr = [];

    for (var key in obj) {
      if(obj.hasOwnProperty(key)){
        arr.push(key);
      }
    }
    return arr;
  };

  var __setState = function (options) {

    state = {
        enabled : typeof options.enabled === 'boolean' ? options.enabled : state.enabled,
        stringify : typeof options.stringify === 'boolean' ? options.stringify : state.stringify,
        pretty: typeof options.pretty === 'boolean' ? options.pretty : state.pretty,
        stacktrace : typeof options.stacktrace === 'boolean' ? options.stacktrace : state.stacktrace,
        ismsie : typeof options.ismsie === 'boolean' ? options.ismsie : state.ismsie,
        callback : options.callback || state.callback,
        tag : $.extend({level: false, pkg: true}, options.tag || state.tag),
        pkg : options.pkg || state.pkg,
        whitelist : options.whitelist || state.whitelist,  // @deprecated in 6.2; use filters instead
        blacklist : options.blacklist || state.blacklist,  // @deprecated in 6.2; use filters instead
        filters : options.filters === null || typeof options.filters === 'object' ? options.filters : state.filters,  // {'jsonstore': 'WARN', 'otherPkg': 'DEBUG'}
        level : options.level || state.level,
        metadata: options.metadata || state.metadata,
        capture : typeof options.capture === 'boolean' ? options.capture : state.capture,
        analyticsCapture : typeof options.analyticsCapture === 'boolean' ? options.analyticsCapture : state.analyticsCapture,
        maxFileSize : typeof options.maxFileSize === 'number' && options.maxFileSize % 1 === 0 ? options.maxFileSize : state.maxFileSize,
        autoSendLogs : typeof options.autoSendLogs === 'boolean' ? options.autoSendLogs : state.autoSendLogs,
        autoUpdateConfig : typeof options.autoUpdateConfig === 'boolean' ? options.autoUpdateConfig : state.autoUpdateConfig
      };
    if (__checkNativeEnvironment()) {
      _setNativeOptions({filters: state.filters, level: state.level, capture: state.capture, analyticsCapture: state.analyticsCapture, maxFileSize: state.maxFileSize, autoSendLogs: state.autoSendLogs, autoUpdateConfig: state.autoUpdateConfig});
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
      WL.WebLogger._setState(state);
    }
  };

  var __stringify = function (input) {

    if (input instanceof Error) {

      return (state.stacktrace) ? printStackTrace({e: input}).join('\n') : input.toString();
    }

    else if (typeof input === 'object' && JSON && JSON.stringify) {

      try {
        return (state.pretty) ? JSON.stringify(input, null, ' ') : JSON.stringify(input);
      }
      catch (e) {
        return 'Stringify Failed: ' + e;
      }

    } else {
      return (typeof input === 'undefined') ? 'undefined' : input.toString();
    }
  };

  var __stringifyArguments = function (args) {

    var len = args.length,
    i = 0,
    res = [];

    for (; i < len ; i++) {
      res.push(__stringify(args[i]));
    }

    return res.join(' ');
  };

  //currentPriority is the priority linked to the current log msg
  //stateLevel can be an Array (whitelist of levels), a string (e.g. 'warn') or a number (200)
  var __checkLevel = function (currentPriority, stateLevel) {

    if ($.isArray(stateLevel)) {

      return  (//Check if current is whitelisted (state)
          stateLevel.length > 0 &&
          !__insideArray(currentPriority, stateLevel)
      );

    } else if (typeof stateLevel === 'string') {

      stateLevel = stateLevel.toLowerCase();//Handle WARN, wArN, etc instead of just warn

      return  (//Get numeric value and compare current with state
          typeof (priorities[currentPriority]) === 'number' &&
          typeof (priorities[stateLevel]) === 'number' &&
          (priorities[currentPriority]  > priorities[stateLevel])
      );

    } else if (typeof stateLevel === 'number') {

      return (//Compare current with state
          typeof (priorities[currentPriority]) === 'number' &&
          (priorities[currentPriority]  > stateLevel)
      );
    }

    return true; //Bail out, level is some unknown type
  };

  var __checkFilters = function (priority, pkg) {
    if (__getKeys(state.filters).length > 0) {  // non-empty filters object
      return __checkLevel(priority, state.filters[pkg]);
    }
    return false;
  };

  var __checkLists = function (pkg, whitelistArr, blacklistArr) {

    return (//Package inside Whitelist
        ($.isArray(whitelistArr) && whitelistArr.length > 0 && !__insideArray(pkg, whitelistArr)) ||

        //Package inside Blacklist
        ($.isArray(blacklistArr) && blacklistArr.length > 0 && __insideArray(pkg, blacklistArr))
    );
  };

  var __log = function (args, priority) {

    var str = '',
    pkg = state.pkg;

    state.pkg = ''; //clear pkg from state obj

    if (!__checkNativeEnvironment()) {
      if (!state.enabled ||
          __checkFilters(priority, pkg) ||
          __checkLists(pkg, state.whitelist, state.blacklist) ||
          __checkLevel(priority, state.level)) {

        return;
      }
    }

    if (state.stringify) {
      str = __stringifyArguments(args);
    }

    //Apply Package Tag
    if (state.tag.pkg && typeof pkg === 'string' && pkg.length > 0) {
      str = LEFT_BRACKET + pkg + RIGHT_BRACKET + str;
    }

    //Apply Level Tag
    if (state.tag.level) {
      str = LEFT_BRACKET + priority.toUpperCase() + RIGHT_BRACKET + str;
    }

    if (!state.stringify && str.length > 0) {
      args.unshift(str);
    }

    if (!__checkNativeEnvironment()) {

      // Queue for later sending
      if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
        WL.WebLogger.log(__getLogArgArray(args, priority, pkg));
      }
      
      //Log to the console
      // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
      // guaranteed to be available
      if (typeof console === 'object' && WL.StaticAppProps.ENVIRONMENT !== 'air') {  // avoid infinite loop on Adobe AIR 

        if (typeof console[priority] === 'function') {
          (state.stringify) ? console[priority](str) : console[priority].apply(console, args);

        } else if (priority === 'fatal') {
          if (typeof console.error === 'function') {
            (state.stringify) ? console.error(str) : console.error.apply(console, args);
          }

        } else if (priority === 'trace') {
          if (typeof console.debug === 'function') {
            (state.stringify) ? console.debug(str) : console.debug.apply(console, args);
          }

        } else if (priority === '_analytics') {
        	// Do nothing
        } else if (typeof console.log === 'function') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);

        } else if (state.ismsie && typeof console.log === 'object') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);
        }

      } else {
    	  
        //Special case for Adobe Air apps in debug mode
        if (typeof air === 'object' && air.Introspector && air.Introspector.Console) {
        	
          if (typeof air.Introspector.Console[priority] === 'function') {
            (state.stringify) ? air.Introspector.Console[priority](str) : air.Introspector.Console[priority].apply(air, args);

          } else if (typeof air.Introspector.Console.log === 'function') {
            (state.stringify) ? air.Introspector.Console.log(str) : air.Introspector.Console.log.apply(air, args);
          }
        }

        //Special case for BlackBerry
        else if (typeof worklight === 'object' && worklight.utils && typeof worklight.utils.log === 'function') {

          str = (!state.stringify) ? __stringifyArguments(args) : str;

          worklight.utils.log(str, priority);
        }
      }

    } else {

      if (!deviceReady) {

        try {
          queue.push(__getLogArgArray(args, priority, pkg));
        } catch (e) {
          console.log('[wl.logger] ' + e.toString());
        }

      } else if (typeof cordova === 'object' && cordova.exec) {

        cordova.exec(null, null, CDV_PLUGIN_LOGGER, CDV_ACTION_LOG, __getLogArgArray(args, priority, pkg));
      }

    }

    //The default value of state.callback is an empty string (not a function)
    if (typeof state.callback === 'function') {
      if (!state.stringify) {
        str = args;
      }
      state.callback(str, priority, pkg);
    }

  };

  var LogInstance = function (ops) {
    this.options = ops || {};
  };

  //Add .debug(), .log(), etc. to LogInstances
  $.each(__getKeys(priorities), function (idx, priority) {
    LogInstance.prototype[priority] = function () {
      WL.Logger.ctx(this.options)[priority].apply(this, arguments);
    };
  });

  var _create = function (options) {
    return new LogInstance(options);
  };

  // @deprecated in 6.2
  var _on = function () {
    __log(['WL.Logger.on is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return this;
  };

  var _config = function(options) {
    __setState($.extend(options || {}, {enabled: true}));
    return this;
  };

  // @deprecated in 6.2
  var _off = function () {
    __log(['WL.Logger.off is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return this;
  };

  var _status = function () {

    var dfd = $.Deferred();

    var onSuccess = function(currentNativeSettings) {
      state = $.extend(state, currentNativeSettings);
      dfd.resolve(state);
    };

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(onSuccess, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_GET_STATUS, []);
      }, 0);
    } else {
      dfd.resolve(state);
    }

    return dfd;
  };

  var _ctx = function (options) {
    $.extend(state, options || {});
    return this;
  };

  var _send = function () {

    var dfd = $.Deferred();

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SEND, []);
      }, 0);
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
      return WL.WebLogger.sendLogs();
    } else {
      setTimeout(function() {
        dfd.resolve();
      }, 0);
    }

    return dfd.promise();
  };
  
  var __manualSendLogs = function(dfd){
	  __getLogsFromNative()
	  .done(function(logs) {
	    if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
	      WL.WebLogger._ajax(logs, REQ_SEND_LOGS)
		    .done(function(){
			    cordova.exec({}, {}, "WPLoggerPlugin", "deleteLogData", []);
			    dfd.resolve();
		    })
		    .fail(function(){
			    dfd.reject();
		    });
	    } else {
	      dfd.resolve();
	    }
		  
	  }).fail(function(){
		  dfd.reject();
	  }); 
  };
  
  var __getLogsFromNative = function(){
	  var dfd = $.Deferred();
	  cordova.exec(dfd.resolve, dfd.reject, "WPLoggerPlugin", "getLogData", []);
	  return dfd.promise();
  }
  
  var __sendAnalytics = function () {

      var dfd = $.Deferred();

      if (__checkNativeEnvironment()) {
        setTimeout(function () {
          cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SEND_ANALYTICS, []);
        }, 0);
      } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
        return WL.WebLogger.sendAnalytics();
      } else {
        setTimeout(function() {
          dfd.resolve();
        }, 0);
      }

      return dfd.promise();
  };

  var _metadata = function (obj) {

    if (typeof obj === 'object') {
      state.metadata = obj;
    }

    return this;
  };

  var _setNativeOptionsDeprecated = function () {
    __log(['WL.Logger.setNativeOptions is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return _setNativeOptions.apply(this, arguments);
  };

  // public call to setNativeOptions is deprecated in 6.2, but we keep this private function
  var _setNativeOptions = function (options) {
    var dfd = $.Deferred();

    if (typeof options !== 'object') {

      setTimeout(function () {
        dfd.reject({src: 'setNativeOptions', msg: 'You must pass an object to WL.Logger.setNativeOptions'});
      }, 1);

      return dfd.promise();
    }

    if (!__checkNativeEnvironment()) {

      setTimeout(function () {
        dfd.reject({src: 'setNativeOptions', msg: 'WL.Logger.setNativeOptions only works on Android and iOS environments, current environment is: '+
          __checkNativeEnvironment()});
      }, 1);

      return dfd.promise();
    }

    var ops = {};

    //Check if maxFileSize is an integer (e.g. 1, not 1.1)
    if (Math.floor(options.maxFileSize) === options.maxFileSize && $.isNumeric(options.maxFileSize)) {
      ops.maxFileSize = options.maxFileSize;
    }

    //Level is 'trace', debug', 'log', 'info', 'warn', 'error', or 'fatal'
    //Why Up/Low case? __getKeys will return lower case strings and native expects upper cased strings.
    if (typeof options.level === 'string' && __insideArray(options.level.toLowerCase(), __getKeys(priorities))) {
      ops.level = options.level.toUpperCase();
    }

    if (typeof options.capture === 'boolean') {
      ops.capture = options.capture;
    }

    if (typeof options.analyticsCapture === 'boolean') {
      ops.analyticsCapture = options.analyticsCapture;
    }

    if (typeof options.autoSendLogs === 'boolean') {
      ops.autoSendLogs = options.autoSendLogs;
    }

    if (typeof options.autoUpdateConfig === 'boolean') {
      ops.autoUpdateConfig = options.autoUpdateConfig;
    }

    if (typeof options.filters === 'object' || options.filters === null) {
      // TODO: validate each key/value pair in the object conforms to {String: String}, like {'package': 'LEVEL'} ?
      ops.filters = options.filters === null ? {} : options.filters;
    }


    if (!deviceReady) {
      // console.log('MIKE: _setNativeOptions 3');
      //Queue the operation until the bridge to native is active
      ops.dfd = dfd;
      try {
        queue.push(ops);
      } catch (e) {
        console.log('[wl.logger] ' + e.toString());
      }
    } else {
      cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SET_NATIVE_OPTIONS, [ops]);
    }

    return dfd.promise();
  };
  
  var _updateConfigFromServer = function() {
    var dfd = $.Deferred();

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(dfd.resolve, dfd.reject, 'LoggerPlugin', 'updateConfigFromServer', []);
      }, 0);
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
  	  return WL.WebLogger.updateConfigFromServer();
    } else {
      setTimeout(function() {
        dfd.resolve();
      }, 0);
    }

    return dfd.promise();
  };

  var __processAutomaticTrigger = function(){
	  if (__checkNativeEnvironment()) {
	      setTimeout(function () {
	        cordova.exec(null, null, 'LoggerPlugin', 'processAutomaticTrigger', []);
	      }, 0);
	  } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
	  	WL.WebLogger._processAutomaticTrigger();
	  }
  };

  // global error catch:
  var __onerrorOriginal = window.onerror;
  window.onerror = function(msg, filename, line, column, errorObj) {
    try{
      var errorMessage = 'Uncaught Exception: ' + msg + ' at ' + (filename ? '(compiled_code)' : filename) + ':' + line;

      var stackMetaData = { $stacktrace: 'NONE' };

      if(typeof errorObj !== 'undefined'){
        stackMetaData = { $stacktrace: errorObj.stack };
      }

      WL.Logger.metadata(stackMetaData).fatal(errorMessage);

      if (typeof __onerrorOriginal === 'function') {
        return __onerrorOriginal(msg, filename, line);
      }
    } catch(err) {
      // Try catch to avoid unlikely event of infinite loop
    }
    return false;
  };

  var PUBLIC_API = {
    create : _create,
    on : _on, // @deprecated in 6.2; use config instead
    off : _off, // @deprecated in 6.2; use config instead
    config : _config,
    status : _status,
    ctx : _ctx,
    send: _send,
    metadata: _metadata,
    updateConfigFromServer: _updateConfigFromServer,
    setNativeOptions : _setNativeOptionsDeprecated,  // @deprecated in 6.2; use config instead
    // for internal:
    _sendAnalytics: __sendAnalytics,  // called by WL.Analytics
    _processAutomaticTrigger: __processAutomaticTrigger,  // called from WLClient connect and invokeProcedure onSuccess callbacks
    // for testing:
    __onDeviceReady : __onDeviceReady,
    __deviceReady : deviceReady,
    __resetState : __resetState,  // back to the defaults
    
    // For web logger state manipulation
    __state: function() { return state; },
    __updateState: function(newState) { state = newState; }
  };

  //Add .debug(), .log(), etc. to WL.Logger's public API
  $.each(__getKeys(priorities), function (idx, priority) {
    PUBLIC_API[priority] = function () {
      __log([].slice.call(arguments), priority);
    };
  });

  return PUBLIC_API;

}(WLJQ)); //WL.Logger


/**
 * ================================================================= 
 * Source file taken from :: weblogger.js
 * ================================================================= 
 */

/*
 * Licensed Materials - Property of IBM
 * 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/*globals WL, WLJQ, device*/
/*jshint expr:true, strict:false, maxdepth:4*/

WL.WebLogger = (function(jQuery) {

    var
    $ = jQuery,
    REQ_SEND_LOGS = '/loguploader',
    REQ_UPDATE_CONFIG = '/configprofile',
    KEY_LOCAL_STORAGE_LOGS = '__WL_WEBLOG_LOGS__',
    KEY_LOCAL_STORAGE_SWAP = '__WL_WEBLOG_SWAP__',
    KEY_LOCAL_STORAGE_ANALYTICS = '__WL_WEBLOG_ANALYTICS__',
    KEY_LOCAL_STORAGE_CONFIG = '__WL_WEBLOG_CONFIG__',
    KEY_REMOTE_STORAGE_CONFIG = '__WL_WEBLOG_REMOTE_CONFIG__',

    DEFAULT_MAX_STORAGE_SIZE = 500000,
    BUFFER_TIME_IN_MILLISECONDS = 60000,
    sendLogsTimeBuffer = 0;

    
    var __usingLocalConfiguration = function(){
	  	var configurationString = localStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);
	  	
	  	if(configurationString == null){
	  		return true;
	  	}
	  	
	  	return false;
  	};
  	
    /*
	*	INIT - Load state if persisted. Else get default state
    */
    (function(){
      if (typeof(Storage) !== 'undefined') {

        var configurationString = null;
        
        if(__usingLocalConfiguration()){
        	configurationString = localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG);
        }else{
        	configurationString = localStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);
        }

        if (configurationString === null){
          var state = WL.Logger.__state();
          state.maxFileSize = DEFAULT_MAX_STORAGE_SIZE;
          WL.Logger.__updateState(state);
          
          var stateString = JSON.stringify(state);
          localStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
        } else {
          var configuration = JSON.parse(configurationString);
          WL.Logger.__updateState(configuration);
        }
      }
    })();
    
    
    /*
	*	PUBLIC METHODS
    */
    var _log = function(args) {
      var state = WL.Logger.__state();
      
      setTimeout(function () {
	      if (typeof(Storage) !== 'undefined') {
	        var level =  args[0];
	        var pkg = args[1];
	        var msg = args[2];
	        var meta = args[3];
	        var time = args[4];
	
	        var logData = {
	          'pkg': pkg,
	          'timestamp': __formatDate(new Date(time), '%d-%M-%Y %H:%m:%s:%ms'),
	          'level': level,
	          'msg': msg,
	          'metadata': meta
	        };
	
	        if(level === '_ANALYTICS' && state.analyticsCapture !== false){
	          __persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS);
	        }else if(state.capture !== false){
	          __persistLog(logData, KEY_LOCAL_STORAGE_LOGS);
	        }
	      }
      }, 0);
    },

    _sendLogs = function(){
      return __send([KEY_LOCAL_STORAGE_LOGS, KEY_LOCAL_STORAGE_SWAP]);
    },

    _sendAnalytics = function() {
      return __send([KEY_LOCAL_STORAGE_ANALYTICS]);
    },

    _updateConfigFromServer = function() {
      var dfd = $.Deferred();

      __ajax({}, REQ_UPDATE_CONFIG).done(function(data){

    	  __processUpdateConfig(data);
          dfd.resolve();
			
		}).fail(function(){
			dfd.reject();
		});

      return dfd.promise();
    },


    /*
     * PRIVATE METHODS
     */

    __send = function(keys) {
    	var dfd = $.Deferred();

    	var persistedLogs = '';
    	
    	keys.forEach(function(key){
    		var value = localStorage.getItem(key);
    		if(value !== null){
    			persistedLogs += value;
    		}
    	});
    	
    	var logdata = {
    		__logdata : persistedLogs
    	};

    	if(persistedLogs !== null) {

    		__ajax(logdata, REQ_SEND_LOGS).done(function(){

    			keys.forEach(function(key){
    				localStorage.removeItem(key);
    			});

    			console.log('Client logs successfully sent to the server');
    			dfd.resolve();
    			
    		}).fail(function(){
    			dfd.reject();
    		});

    	} else {
    		console.log('There are no persisted logs to send.');
    	}

    	return dfd.promise();
    },
  
  __ajax = function(data, path) {
	  var dfd = $.Deferred(),
	  headers = __getHeaders();

	  new WLJSX.Ajax.WLRequest(path, {
		  method: 'post',
		  optionalHeaders: headers,
		  parameters: JSON.stringify(data),
		  skipQueryParam: true,
		  onSuccess : function(data) {
			  dfd.resolve(data);
		  },
		  onFailure : function(){
			  dfd.reject();
		  }
	  });

	  return dfd.promise();
  },

  __persistLog = function(log, key){
		if(__fileSizeReached(key)){
			if(key === KEY_LOCAL_STORAGE_LOGS){
				__attemptFileSwap();
			}else{
				// No swapping for analytics
				return;
			}
		}
		
		var stringified = JSON.stringify(log);
		var persistedLogs = localStorage.getItem(key);
		
		if(persistedLogs === null){
			persistedLogs = stringified;
		}else{
			persistedLogs +=  ', ' + stringified;
		}
		
		try{
			localStorage.setItem(key, persistedLogs);
		}catch(e){
			console.log('Local storage capacity reached. Client logs will not be persisted');
		}
	},
	
	__attemptFileSwap = function(){
		try{
			var currentLogs = localStorage.getItem(KEY_LOCAL_STORAGE_LOGS);
			localStorage.setItem(KEY_LOCAL_STORAGE_SWAP, currentLogs);
			localStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
		}catch(e){
			console.log('Local storage capacity reached. WL.Logger will delete old logs to make room for new ones.');
			localStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
			localStorage.removeItem(KEY_LOCAL_STORAGE_SWAP);
		}
	},

	__processUpdateConfig = function(configString){
		var config = null;

		try{
			config = JSON.parse(configString.responseText);
		}catch(e){

		}

		if(config !== null){
			console.log('Matching configuration successfully retrieved from the server.');
			var wllogger = config.wllogger;
			if(wllogger !== null){
				var filters = wllogger.filters;
				var level = wllogger.level;
				
		        localStorage.setItem(KEY_REMOTE_STORAGE_CONFIG, localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG));

				WL.Logger.config({
					filters: filters,
					level: level
				});
			}
		}else{
			console.log('No matching configurations found from the server. Defaulting to local configuration');
			localStorage.removeItem(KEY_REMOTE_STORAGE_CONFIG); 
			
			var configurationString = localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG);
			var configuration = JSON.parse(configurationString);
	        WL.Logger.__updateState(configuration);
		}
	},

  __setState = function(state){
    if (typeof(Storage) !== 'undefined') {
      var stateString = JSON.stringify(state);
      
      if(__usingLocalConfiguration()){
    	  localStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
      }else{
    	  localStorage.setItem(KEY_REMOTE_STORAGE_CONFIG, stateString);
      }
    }
  },
  
  __processAutomaticTrigger = function(){
	  var currentTime = Date.now();
	  var elapsedTime = currentTime - sendLogsTimeBuffer;
	  
	  var autoSend = WL.Logger.__state().autoSendLogs;
	  var autoUpdate = WL.Logger.__state().autoUpdateConfig;

	  if(elapsedTime > BUFFER_TIME_IN_MILLISECONDS){
		  if(autoUpdate){
			  _updateConfigFromServer();
		  }

		  if(autoSend){
			  _sendLogs();
			  _sendAnalytics();
		  }

		  sendLogsTimeBuffer = currentTime;
	  }
  },

  /*
	 * UTILITY METHODS
   */
	
	__getHeaders = function(){
		var appName = WL.Client.getAppProperty(WL.AppProp.APP_DISPLAY_NAME);
		var appVersion = WL.Client.getAppProperty(WL.AppProp.APP_VERSION);
		var env = WL.StaticAppProps.ENVIRONMENT;
		var deviceId = 'UNKNOWN';
		var osversion = 'UNKNOWN';
		var model = 'UNKNOWN';
		
		if(typeof window.cordova === 'object' &&
      typeof window.device === 'object') {
			osversion = device.version;
			model = device.model;
			deviceId = device.uuid;
		}
		
		if(env === 'preview'){
			env = 'common';
		}

		var headers = {
      'x-wl-clientlog-deviceId' : deviceId,
      'x-wl-clientlog-appname' : appName,
      'x-wl-clientlog-appversion' : appVersion,
      'x-wl-clientlog-osversion' : osversion,
      'x-wl-clientlog-env' : env,
      'x-wl-clientlog-model' : model
		};
			
		return headers;
	},

	__fileSizeReached = function(key){
		var persistedLogs = localStorage.getItem(key);
		if(persistedLogs === null) {
      return false;
		}

		var m = encodeURIComponent(persistedLogs).match(/%[89ABab]/g);
		var size = persistedLogs.length + (m ? m.length : 0);
		
		var maxSize = WL.Logger.__state().maxFileSize;
		if(maxSize === null || typeof maxSize === 'undefined') {
			maxSize = DEFAULT_MAX_STORAGE_SIZE;
		}

		if(size >= maxSize){
			return true;
		}
		
		return false;
	},
	
	__formatDate = function(date, fmt) {
    function pad(value) {
      return (value.toString().length < 2) ? '0' + value : value;
    }
    return fmt.replace(/%([a-zA-Z])/g, function (m, fmtCode) {
      switch (fmtCode) {
        case 'Y':
        return date.getFullYear();
        case 'M':
        return pad(date.getMonth() + 1);
        case 'd':
        return pad(date.getDate());
        case 'H':
        return pad(date.getHours());
        case 'm':
        return pad(date.getMinutes());
        case 's':
        return pad(date.getSeconds());
        case 'ms':
        return pad(date.getMilliseconds());
        default:
        throw new Error('Unsupported format code: ' + fmtCode);
      }
   });
  };

  // public API
  return {
    log: _log,
    sendLogs: _sendLogs,
    sendAnalytics: _sendAnalytics,
    updateConfigFromServer: _updateConfigFromServer,
    _processAutomaticTrigger : __processAutomaticTrigger,
    _setState: __setState,
    _ajax: __ajax
  };

}(WLJQ)); //WL.WebLogger

/**
 * ================================================================= 
 * Source file taken from :: analytics.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*global WLJQ */

var WL = WL || {};

/**
Everything delegates to WL.Logger, but we keep the WL.Analytics API to make it clear
to callers the difference in purpose of WL.Logger (debug) vs. WL.Analytics (analytics!).
 */
WL.Analytics = (function (jQuery) {

	'use strict';

	var

	//Dependencies
	$ = jQuery,

	//Constants
	_PKG_NAME = 'wl.analytics',
	
	// Private variables
	pendingTrackingIDs = {},

	/**
    Turns on the capture of analytics data.
    Returns a promise for backward compatibility.
	 */
	_enable = function () {
		var dfd = $.Deferred();

		WL.Logger.config({analyticsCapture: true});
		setTimeout(function() {
			dfd.resolve(true);
		}, 0);

		return dfd.promise();
	},

	/**
		Turns off the capture of analytics data.
    Returns a promise for backward compatibility.
	 */
	_disable = function () {
		var dfd = $.Deferred();

		WL.Logger.config({analyticsCapture: false});
		setTimeout(function() {
			dfd.resolve(false);
		}, 0);

		return dfd.promise();
	},

	/**
    Logs a message with contextual data.
    Returns a promise for backward compatibility.
	 */
	_log = function (msg, name) {
		var dfd = $.Deferred();

		if(typeof name === 'undefined'){
			name = "";
		}
			
		if (typeof msg === 'object') {
			WL.Logger.metadata(msg).ctx({pkg: _PKG_NAME})._analytics(name || '');
		} else {
			WL.Logger.ctx({pkg: _PKG_NAME})._analytics(msg, name);
		}

		setTimeout(function() {
			dfd.resolve();
		}, 0);

		return dfd.promise();
	},

	/**
		Disables analytics capture
    @deprecated since 6.2
    As you can see, it's a no-op.
	 */
	_restart = function () {
		WL.Logger.ctx({pkg: _PKG_NAME}).warn('Function \'restart\' is deprecated in Worklight 6.2.  It is now a no-op.');
		var dfd = $.Deferred();
		setTimeout(function() {
			dfd.resolve();
		}, 0);
		return dfd.promise();
	},

	/**
		Returns the current state of WL.Analytics
	 */
	_state = function () {
		var dfd = $.Deferred();

		WL.Logger.status()

		.then(function(currentLoggerState) {
			dfd.resolve({enabled: currentLoggerState.analyticsCapture});
		})

		.fail(function(errMsg) {
			dfd.reject(errMsg);
		});

		return dfd.promise();
	},

	/**
    Send any collected analytics data collected to this point to the Worklight server.
	 */
	_send = function () {
		// returns a promise
		return WL.Logger._sendAnalytics();
	},
	
	/**
    	Get tracking id for sending requests
	 */
	__getTrackingId = function () {
		if(__checkNativeEnvironment()){
			return null;
		}
		
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},
	
	/**
		Log outbound network request
	 */
	__logOutboundRequest = function (path, trackingId) {
		
		if(!__checkNativeEnvironment()){
			try{
				pendingTrackingIDs[trackingId] = 1;
				
				var startTime = new Date().getTime();
				
				var metadata = {
					'$path': path,
					'$category' : "network",
					'$trackingid' : trackingId,
					'$type' : "request",
					'$time' : startTime
				}
				
				WL.Logger.metadata(metadata)._analytics('logOutboundRequest');
			}catch(e){
				// Do nothing
			}
		}
	},
	
	/**
	Log inbound network response
	 */
	__logInboundResponse = function (request, response) {
		if(!__checkNativeEnvironment()){
			try{
				var trackingId = request.trackingId;
				
				if(pendingTrackingIDs.hasOwnProperty(trackingId)){
					delete pendingTrackingIDs[trackingId];
		
					var endTime = new Date().getTime();
					
					var numBytes = 0;
					var responseText = response.responseJSON;
					if(responseText){
						numBytes = JSON.stringify(responseText).length;
					}
		
					// TODO BYTES
					var metadata = {
						'$category' : 'network',
						'$trackingid' : trackingId,
						'$type' : 'response',
						'$time' : endTime,
						'$bytes': numBytes
					}
		
					WL.Logger.metadata(metadata)._analytics('logInboundResponse');
				}
			}catch(e){
				// Do nothing
			}
		}
	},
	
	__checkNativeEnvironment = function () {
		var env = WL.StaticAppProps.ENVIRONMENT;

		return (env === 'android' ||
				env === 'iphone' ||
				env === 'ipad');
	};

	//public API
	return {
		enable : _enable,
		disable: _disable,
		restart : _restart, // @deprecated since 6.2
		log: _log,
		state: _state,
		send: _send,
		
		_logOutboundRequest: __logOutboundRequest,
		_logInboundResponse: __logInboundResponse,
		_getTrackingId: __getTrackingId
	};

}(WLJQ)); //WL.Analytics


/**
 * ================================================================= 
 * Source file taken from :: validators.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


/*
 * Validators are responsible for validating method arguments in development mode.
 */
WL.Validators = {
    // Validation should be disabled by default - so Welcome pages do not validate in production.
    // If we want validation for the welcome page we must add a solution to turn it off in production.
    isValidationEnabled : false,
    verbose : true,

    // True when 'o' is set, the native JavaScript event is defined, and 'o' has an event phase
    isEvent : function(obj) {
	return obj && obj.type;
    },

    logAndThrow : function(msg, callerName) {
	// Logger is not be available in public resources (welcome page).
	if (WL.Logger) {
	    if (callerName) {
		msg = "Invalid invocation of method " + callerName + "; " + msg;
	    }
	    if (this.verbose) {
		WL.Logger.error(msg);
	    }
	}
	throw new Error(msg);
    },

    enableValidation : function() {
	this.isValidationEnabled = true;
    },

    disableValidation : function() {
	this.isValidationEnabled = false;
    },

    validateArguments : function(validators, args, callerName) {
	if (validators.length < args.length) {
	    // More arguments than validators ... accept only if last argument is an Event.
	    if ((validators.length !== (args.length - 1)) || !this.isEvent(args[args.length - 1])) {
		this.logAndThrow("Method was passed " + args.length + " arguments, expected only " + validators.length + " " + WLJSX.Object.toJSON(validators) + ".", callerName);
	    }
	}
	this.validateArray(validators, args, callerName);
    },

    validateMinimumArguments : function(args, mandatoryArgsLength, callerName) {
	if (args.length < mandatoryArgsLength) {
	    this.logAndThrow("Method passed: " + args.length + " arguments. Minimum arguments expected are: " + mandatoryArgsLength + " arguments.", callerName);
	}
    },

    /*
     * Validates each argument in the array with the matching validator. @Param array - a JavaScript array.
     * @Param validators - an array of validators - a validator can be a function or a simple JavaScript type
     * (string).
     */
    validateArray : function(validators, array, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	for ( var i = 0; i < validators.length; ++i) {
	    this.validateArgument(validators[i], array[i], callerName);
	}
    },

    /*
     * Validates a single argument. @Param arg - an argument of any type. @Param validator - a function or a
     * simple JavaScript type (string).
     */
    validateArgument : function(validator, arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	switch (typeof validator) {
	    // Case validation function.
	    case 'function':
		validator.call(this, arg);
		break;
	    // Case direct type.
	    case 'string':
		if (typeof arg !== validator) {
		    this.logAndThrow("Invalid value '" + WLJSX.Object.toJSON(arg) + "' (" + (typeof arg) + "), expected type '" + validator + "'.", callerName);
		}
		break;
	    default:
		// This error can be caused only if worklight code is bugged.
		this.logAndThrow("Invalid or undefined validator for argument '" + WLJSX.Object.toJSON(arg) + "'", callerName);
	}
    },

    /*
     * Validates that each option attribute in the given options has a valid name and type. @Param options -
     * the options to validate. @Param validOptions - the valid options hash with their validators:
     * validOptions = { onSuccess : 'function', timeout : function(value){...} }
     * 
     */
    validateOptions : function(validOptions, options, callerName) {
	this.validateObjectProperties(validOptions, options, true, callerName);

    },

    /*
     * Validates that option attribute in the given options have a valid name and type - only if they are
     * explicitly defined in validOptions. If an option attribute does not exist in validOptions, it is simply
     * ignored @Param options - the options to validate. @Param validOptions - the valid options hash with
     * their validators: validOptions = { onSuccess : 'function', timeout : function(value){...} }
     * 
     */
    validateOptionsLoose : function(validOptions, options, callerName) {
	this.validateObjectProperties(validOptions, options, false, callerName);
    },

    /*
     * Validates that each option attribute in the given options has a valid name and type. @Param options -
     * the options to validate. @Param validOptions - the valid options hash with their validators:
     * validOptions = { onSuccess : 'function', timeout : function(value){...} } @Param strict - a boolean
     * indicating whether options' properties that don't exist in validOptions are allowed
     * 
     */
    validateObjectProperties : function(validOptions, options, strict, callerName) {
	if (!this.isValidationEnabled || typeof options === 'undefined') {
	    return;
	}
	for ( var att in options) {
	    // Check that the attribute exists in the validOptions.
	    if (!validOptions[att]) {
		if (strict) {
		    this.logAndThrow("Invalid options attribute '" + att + "', valid attributes: " + WLJSX.Object.toJSON(validOptions), callerName);
		} else {
		    continue;
		}
	    }
	    try {
		// Check that the attribute type is valid.
		this.validateArgument(validOptions[att], options[att], callerName);
	    } catch (e) {
		this.logAndThrow("Invalid options attribute '" + att + "'. " + (e.message || e.description), callerName);
	    }
	}
    },

    /*
     * Validates that each option attribute in the given options is from the one of the validators type.
     * @Param options - the options to validate. @Param validatos - the valid types (in string format):
     * validators = ['string','null','undefined',someFunction,'boolean'...]
     * 
     */
    validateAllOptionTypes : function(validators, options, callerName) {
	if (!this.isValidationEnabled || typeof options === 'undefined') {
	    return;
	}
	var isValidAtt = false;
	for ( var att in options) {
	    isValidAtt = false;
	    for ( var i = 0; i < validators.length; ++i) {
		try {
		    // Check that the attribute type is valid.
		    this.verbose = false;
		    this.validateArgument(validators[i], options[att], callerName);
		    isValidAtt = true;
		    break;
		} catch (e) {
		    // do nothing
		}
	    }
	    this.verbose = true;
	    if (!isValidAtt) {
		this.logAndThrow("Invalid options attribute '" + att + "' (" + typeof (options[att]) + "). Please use just the following types: " + validators.join(","), callerName);
	    }
	}
    },

    validateStringOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'string')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'string'.", callerName);
	}
    },
    
    validateBooleanOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'boolean')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'boolean'.", callerName);
	}
    },
    
    validateObjectOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'object')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'object'.", callerName);
	}
    },

    validateFunctionOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'function')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'function'.", callerName);
	}
    },

    validateNotEmptyString : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'string') || arg.length == 0) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected not empty string.", callerName);
	}
    }
};


/**
 * ================================================================= 
 * Source file taken from :: busyindicator.web.js
 * ================================================================= 
 */

/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function getBusyOverlay(parent, overlayOptions, busy) {
	var win, overlay, busy, wlBusyTitle, viewportWidth, viewportHeight, busyWidth, busyHeight;
	// create busy elements
	win = WLJSX.newElement('<div/>', {
	    'id' : 'WLbusyContainer'
	});

	overlay = WLJSX.newElement('<div/>', {
	    'id' : 'WLbusyOverlay'
	});

	busy = WLJSX.newElement('<div/>', {
	    'id' : 'WLbusy'
	});

	wlBusyTitle = WLJSX.newElement('<h1/>', {
	    'id' : 'WLbusyTitle'
	});

	WLJSX.html(wlBusyTitle, overlayOptions.text);

	WLJSX.prepend(busy, wlBusyTitle);

	WLJSX.prepend(win, overlay);
	WLJSX.append(win, busy);

	// append busy to content
	WLJSX.prepend(parent, win);
	
	// position the busy in the middle of the viewport
	viewportWidth = WLJSX.width(parent);
	viewportHeight = WLJSX.height(window);
	
	busyWidth = WLJQ(busy).outerWidth(true);
	busyHeight = WLJQ(busy).outerHeight(true);
	
	WLJSX.css(busy, {
	    left : viewportWidth / 2 - busyWidth / 2 + 'px',
	    top : viewportHeight / 2 - busyHeight / 2 + 'px'
	});
	
	return true;
}

WL.BusyIndicator = WLJSX.Class.create({
	/**
	* @param containerId (string) - the parent element id for the loading signal. If null - the content div
	*                will be used, unless this is iPhone, in which case the viewport will be used.
	* @param options (hash) - same options that busy.js support but flatted Example: {color:'#fff',
	*                size:'16', etc...}
	* 
	* overlay properties: only for backward compatibility.
	* The only property that exists is text == STR e.g. "loading" Default: 'Loading...' taken from WL.ClientMessages.loading
	* 
	* Native iPhone busy indicator properties:
	* bounceAnimation == Boolean. Show a bounce animation when displaying the busy indicator. Default false.
	* textColor == String (Color name or Color notation, e.g. "00FF00" or "green"). Text color. Default white.
	* strokeOpacity == Float.
	* fullScreen == Boolean. Show the overlay over the entire screen. Default true.
	* boxLength == Float. Height and Width of the overlay, when fullScreen is false. 
	* duration == Integer (milliseconds). Note: if duration is given isVisible() method will become unreliable.
	* minDuration == Integer (milliseconds).
	*/

	initialize : function(containerId, options) {
		this.__busyOverlay = false;
		this.__containerElement = null;
		
		//changes made. Defect 17303. Ensure that Busy Indicator shows language picked from device or set by user.
		WL.Utils.setLocalization();
		
		this.__options = {
			color : null,
			size : 48,
			weight : 4,
			iradius : 12,
			text : WL.ClientMessages.loading
		};
		
		WL.Validators.validateOptions({
			container : 'object',
			overlaycolor : 'string',
			opacity : 'number',
			text : 'string',
			textLocation : 'string',
			style : 'string',
			color : 'string',
			size : 'number',
			type : 'string',
			iradius : 'number',
			weight : 'number',
			count : 'number',
			speed : 'number',
			minopac : 'number',
			bounceAnimation : 'boolean',
			textColor : 'string',
			strokeOpacity : 'number',
			fullScreen : 'boolean',
			boxLength : 'number',
			duration : 'number',
			minDuration : 'number'
		}, options, 'new WL.BusyIndicator');

		if (!WLJSX.Object.isUndefined(options)) {
			this.__options = WLJSX.Object.extend(this.__options, options);
		}

		if (WLJSX.Object.isUndefined(containerId) || containerId === null) {
			// If containerId is null in iPhone - use the viewport as the busy indicator container
			if (WL.Client.getAppProperty(WL.AppProp.ENVIRONMENT) === WL.Env.IPHONE) {
				this.__containerElement = 'viewport';
			} else {
				// If containerId is null in all other envs - use the body element as the busy indicator container
				this.__containerElement = WLJSX.$$$('body');
			}
		} else {
			this.__containerElement = WLJSX.$(containerId);
		}
	},

	/**
	* Shows the busy indicator
	*/
	show : function() {
		if (this.isVisible()) {
			return;
		}
		
		if (WLJSX.Object.isUndefined(this.__busyOverlay) || this.__busyOverlay === false) {
			var overlay = {
				color : this.__options.overlaycolor,
				opacity : this.__options.opacity,
				text : this.__options.text,
				style : this.__options.style,
				textLocation : this.__options.textLocation
			};
			
			var busy = {
				color : this.__options.color,
				size : this.__options.size,
				type : this.__options.type,
				iradius : this.__options.radius,
				weight : this.__options.weight,
				count : this.__options.count,
				speed : this.__options.speed,
				minopac : this.__options.minopac
			};
			
			try {
				this.__busyOverlay = getBusyOverlay(this.__containerElement, overlay, busy);
			} catch (e) {
				WL.Logger.error("Failed to show BusyIndicator:", e);
			}
		}
	},

	/**
	 * Hides the busy indicator
	 */
	hide : function() {
		if (!WLJSX.Object.isUndefined(this.__busyOverlay) && this.__busyOverlay !== false) {
			var wlBusyContainer = WLJSX.$('WLbusyContainer');
			WLJSX.remove(wlBusyContainer);
			this.__busyOverlay = false;
		}
	},
	
	isVisible : function() {
		return (this.__busyOverlay);
	}
});


/**
 * ================================================================= 
 * Source file taken from :: deviceAuthentication.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * Object which handle the device authentication
 */
__WLDeviceAuth = function() {
    this.__requestToResend = null, this.__deviceChallengeToken = null,

    this.init = function(initCallback) {
    	WL.DeviceAuth.__initDeviceAuthManager(function(result){initCallback(result);});
    },


    /**
     * Check if the device has a certificate
     * 
     * @param successCallback
     * @param failureCallback
     */
    this.__isCertificateExists = function(provisioningEntitiy, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "isCertificateExists", [ provisioningEntitiy ]);
    },
    
    this.__clearDeviceCertificate = function(provisioningEntitiy, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "clearDeviceCertCredentials", [ provisioningEntitiy ]);
    },

    /**
     * Sign the deviceAuth payload
     * 
     * @param payloadJSON -
     *            application JSON data
     * @param provisioningEntitiy
     * @param isProvisioningEnabled
     * @param successCallback
     * @param failureCallback
     */
    this.signDeviceAuth = function(successCallback, failureCallback, payloadJSON, provisioningEntitiy, isProvisioningEnabled) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "signDeviceAuth", [payloadJSON, provisioningEntitiy, isProvisioningEnabled]);
    },
    
    this.saveCertificate = function(successCallback, failureCallback, provisioningEntitiy, certificate, realm) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "saveCertificate", [ provisioningEntitiy, certificate, realm]);
    },

    this.signCsr = function(csrData, provisioningEntitiy, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "signCsr", [ csrData, provisioningEntitiy ]);
    },

    this.__initDeviceAuthManager = function(initCallback) {
        cordova.exec(initCallback, initCallback, "DeviceAuth", "init", []);
    },

    /**
     * Default implementation for WL.Client.init's options
     * onGetCustomDeviceProperties. Our default implementation actually does
     * nothing. If overriding this method, the user must call
     * resumeDeviceAuthProcess with the payload
     * 
     * @param resumeDeviceAuthProcess
     *            function to call when done with getting extra data
     */
    this.__defaultOnGetCustomDeviceProperties = function(resumeDeviceAuthProcess) {
        resumeDeviceAuthProcess({});
    },

    /**
     * Default implementation for WL.Client.init's options
     * onGetCustomDeviceProvisioningProperties. Our default implementation
     * actually does nothing. If overriding this method, the user must call
     * resumeDeviceProvisioningProcess with the payload
     * 
     * @param resumeDeviceProvisioningProcess
     *            function to call when ready
     */
    this.__defaultOnGetCustomDeviceProvisioningProperties = function(resumeDeviceProvisioningProcess) {
        resumeDeviceProvisioningProcess({});
    };
};
__WL.prototype.DeviceAuth = new __WLDeviceAuth;
WL.DeviceAuth = new __WLDeviceAuth;


/**
 * ================================================================= 
 * Source file taken from :: userAuthentication.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*globals WL, cordova, WLJQ*/

/**
 * Object which handle the device authentication
 */
WL.UserAuth = (function () {

    //'use strict';

    var PLUGIN_NAME = 'UserAuth';

    var _init = function () {

        var deferred = WLJQ.Deferred();

        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'init', []);

        return deferred.promise();
    };

    var _isCertificateExists = function () {

        var deferred = WLJQ.Deferred();

        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'isCertificateExists', []);

        return deferred.promise();
    };
    
    var _saveCertificate = function(options) {

        var deferred = WLJQ.Deferred();

        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'saveCertificate', [ options.cert, options.realm]);

        return deferred.promise();
    };

    var _signCsr = function(options) {

        var deferred = WLJQ.Deferred();

        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'signCsr', [ options.csr ]);

        return deferred.promise();
    };

    var _signedHttpRequest = function (options) {

        var deferred = WLJQ.Deferred();

        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'send', [
            options.url || '',
            options.method || 'GET',
            options.headers || {},
            options.data || '',
            options.validate || true,
            options.cookiesToRemove || []
        ]);

        return deferred.promise();
    };

    var _deleteCertificate = function () {
        
        var deferred = WLJQ.Deferred();
        
        cordova.exec(deferred.resolve, deferred.reject, PLUGIN_NAME, 'clean', []);

        return deferred.promise();
    };
    
    var _isSupportedEnvironment = function(){
        var env = WL.Client.getEnvironment();

        return env === WL.Environment.ANDROID || env === WL.Environment.IPHONE || env === WL.Environment.IPAD;
    };

    return {
        init: _init,
        isCertificateExists : _isCertificateExists,
        saveCertificate : _saveCertificate,
        signCsr : _signCsr,
        signedHttpRequest: _signedHttpRequest,
        deleteCertificate : _deleteCertificate,
        isSupportedEnvironment : _isSupportedEnvironment
    };

}());

/**
 * ================================================================= 
 * Source file taken from :: wlclient.js
 * ================================================================= 
 */

/**
 \ * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
 * @class WLClient uses Douglas Crockford's Module (Singleton) Pattern.
 * @ilog.undocumented.constructor
 * @displayname WL.Client
 * @requires prototype.js
 * @requires gadgetCommunicationAPI.js
 * @requires wlcommon.js
 * @requires messages.js
 * @requires worklight.js
 */
__WLClient = function() {

	// .................. Private Constants ..................

	// GadgetAPIServlet paths.
	// Must always be in synch with the corresponding
	// GadgetRequestInfo.GADGETS_HANDLER_... Java constants.
	var REQ_PATH_INIT = "init";
	var REQ_PATH_LOGIN = "login";
	var REQ_PATH_LOGOUT = "logout";
	var REQ_PATH_GET_USER_INFO = "getuserinfo";
	var REQ_PATH_SET_USER_PREFS = "setup";
	var REQ_PATH_DELETE_USER_PREF = "deleteup";
	var REQ_PATH_PROXY = "proxy";
	var REQ_PATH_BACKEND_QUERY = "query";
	var REQ_PATH_HEART_BEAT = "heartbeat";
	var REQ_PATH_LOG_ACTIVITY = "logactivity";
	var REQ_PATH_GET_APP_UPDATES = "updates";
	var REQ_PATH_COMPOSITE = "composite";
	var REQ_PATH_APP_VERSION_ACCESS = "appversionaccess";
	var REQ_PATH_BACKEND_INVOKE = "/../../invoke";
	//var REQ_PATH_EVENTS = "events"; // defined in eventTransmission.js
	
	var REQ_PATH_WL_TOKEN = "/../../oauth/token";
	
	// .................. Public constants ..........................
	var MESSAGE_ID = 'messageId';
	this.getMessageID = function() {
		return MESSAGE_ID;
	};

	// .................. Private Members ..........................

	var userInfo = {};
	var gadgetProps = {};
	var userPrefs = {};

	var blockingDiv = null;

	var busyIndicator = null;
	var busyCounter = 0;

	// ChannelProcessor Map with key==realmName
	this.__chMap = {};

	this.__globalHeaders = {};

	var __isSettingsEnabled = false;
	var __locale;
	var __pattern;
	var __androidScreenSize = {};

	var initOptions = {
		onSuccess : function() {},
		onFailure : onDefaultInitFailure,
		onConnectionFailure : onRequestTimeout,
		timeout : 0,
    enableLogger : true,  // @deprecated the use of enableLogger in initOptions is deprecated in 6.2
		minAppWidth : 170,
		heartBeatIntervalInSecs : 7 * 60,
		onUnsupportedVersion : onUnsupportedVersion,
		onUnsupportedBrowser : onUnsupportedBrowser,
		onDisabledCookies : onDisabledCookies,
		onUserInstanceAccessViolation : onUserInstanceAccessViolation,
		onGetCustomDeviceProperties : WL.DeviceAuth.__defaultOnGetCustomDeviceProperties,
		onGetCustomDeviceProvisioningProperties : WL.DeviceAuth.__defaultOnGetCustomDeviceProvisioningProperties,
		validateArguments : true,
		updateSilently : false,
		showCloseOnRemoteDisableDenial : true,
		showIOS7StatusBar : true,
		autoHideSplash : true
		// authenticator : ...
		// messages : ...
		// busyOptions : ...
	};

	var contentPort = null;
	var authPort = null;
	var isLoginActive = false;
	var isConnecting = false;
	var _isConnected = null;

	var heartBeatPeriodicalExecuter = null;

	// Used by Air only.
	var isMinimized = false;

	// Used for extending async-methods options object to add default
	// implementations.
	var defaultOptions = {
		onSuccess : function(response) {
			WL.Logger.debug("defaultOptions:onSuccess");
		},
		onFailure : function(response) {
			WL.Logger.error("defaultOptions:onFailure " + response.errorMsg);
		},
		invocationContext : null
	};

	var defaultLogoutOptions = {
		onSuccess : function(response) {
			WL.Logger.debug("defaultOptions:onSuccess");
		},
		onFailure : function(response) {
			onDefaultInitFailure(response);
		},
		invocationContext : null
	};

	var errorCodeCallbacks = {};
	errorCodeCallbacks[WL.ErrorCode.UNSUPPORTED_BROWSER] = 'onUnsupportedBrowser';
	errorCodeCallbacks[WL.ErrorCode.REQUEST_TIMEOUT] = 'onConnectionFailure';
	errorCodeCallbacks[WL.ErrorCode.UNRESPONSIVE_HOST] = 'onConnectionFailure';
	errorCodeCallbacks[WL.ErrorCode.UNSUPPORTED_VERSION] = 'onUnsupportedVersion';
	errorCodeCallbacks[WL.ErrorCode.DISABLED_COOKIES] = 'onDisabledCookies';
	errorCodeCallbacks[WL.ErrorCode.USER_INSTANCE_ACCESS_VIOLATION] = 'onUserInstanceAccessViolation';

	// .................. Private Methods ..........................
	//

	// Hide the splash screen in case autoHideSplash init option is true (for Android and iOS)
    function autoHideSplashScreen() {
        switch (getEnv()) {
            case WL.Env.ANDROID:
                if (initOptions.autoHideSplash) {
                    WL.App.hideSplashScreen();
                }
                break;
            
			case WL.Env.IPHONE:
            case WL.Env.IPAD:
                if (initOptions.autoHideSplash) {
                    WL.App.hideSplashScreen();
                }
                break;
            }
    }
    
	// Default implementation for the WL.Client.init onFailure (Application may
	// override).
	// If a specific failure handler exist - it is called, otherwise a default
	// error dialog
	// is displayed (with reload app link).
	// Application may choose to override specific exceptions or to override the
	// general
	// onFailure, in this case it has to handle all exceptions.
	function onDefaultInitFailure(response) {
		if (response.errorCode == WL.ErrorCode.CONNECTION_IN_PROGRESS) {
			return;
		}
		
		WL.Logger.error("Client init failed. " + response.errorMsg);
		var errMsg = (response.errorMsg == WL.ClientMessages.authFailure ? response.errorMsg : WL.ClientMessages.unexpectedError);
		showWidgetContent();
		var callbackName = errorCodeCallbacks[response.errorCode];
		if (callbackName && initOptions[callbackName]) {
			initOptions[callbackName](response);
		} else {
			showDialog(WL.ClientMessages.wlclientInitFailure, response.userMsg ? response.userMsg : errMsg, response.recoverable, true, response);
		}
	}

	function onUnsupportedVersion(response) {
		// On Air the content should appear before dialog, see bug
		// http://bugzilla.worklight.com/show_bug.cgi?id=2956
		if (getEnv() === WL.Env.ADOBE_AIR) {
			showWidgetContent();
		}

		// Patch - downloadNewVersion element is added in the msg string.
		WL.SimpleDialog.show(WL.ClientMessages.gadgetUpdateAvailable, response.errorMsg, [{
			text : WL.ClientMessages.ok,
			handler : function() {
				// Note you must add the null options to openURL
				// otherwise the event is assumed the 3rd argument.
				WL.App.openURL(getAppProp(WL.AppProp.DOWNLOAD_APP_LINK), "_new", null);
				if (getEnv() === WL.Env.ADOBE_AIR) {
					window.setTimeout(WL.Client.close, 100);
				}
			}
		}]);
	}

	function onRequestTimeout(response) {
		showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.requestTimeout, true, true, response);
	}

	function onUnsupportedBrowser(response) {
    	WL.SimpleDialog.show(WL.ClientMessages.wlclientInitFailure, WL.Utils.formatString(
                WL.ClientMessages.browserIsNotSupported, WL.BrowserDetect.browser + ' ' + WL.BrowserDetect.version));
	}

	function onDisabledCookies(response) {
		showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.cookiesAreDisabled, true, false, response);
	}

	function onUserInstanceAccessViolation(response) {
        showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.userInstanceAccessViolationException,
                false, false, response);
	}

	function isLoginOnStartup() {
		return getAppProp(WL.AppProp.APP_LOGIN_TYPE) === WL.AppLoginType.LOGIN_ON_STARTUP;
	}

	function onInitSuccess(transport) {
		gadgetProps = transport.responseJSON.gadgetProps;
		userPrefs = transport.responseJSON.userPrefs;
		finalizeInit();
	}

	function onInitFailure(transport) {
		showWidgetContent();
		WL.Client.__hideBusy();
		initOptions.onFailure(new WL.FailResponse(transport, initOptions.invocationContext));
	}

	function finalizeInit() {
		showWidgetContent();
		WL.Client.__hideBusy();

		switch (getEnv()) {

			case WL.Env.IPHONE:
				WL.Utils.checkForInnerAppUpdate();
				break;
		}

		if (WL.EnvProfile.isEnabled(WL.EPField.WEB)) {
			initResizeHandler();
		}

		WL.Logger.debug('before: initOptions.onSuccess');
		// Hide the splash screen in case autoHideSplash init option is true (for Android and iOS) before calling wlEnvInit()
        autoHideSplashScreen();
        
		initOptions.onSuccess(new WL.Response({}, initOptions.invocationContext));
		WL.Logger.debug('after: initOptions.onSuccess');

		isInitialized = true;

		//add onpause event - flushing the content of events buffer to the server before going ot background
		if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
			document.addEventListener("pause", WL.Client.flushBufferFromAsync, false);
			WL.Logger.debug("added onPause event handler ");
		}
		WL.Logger.debug('wlclient init success');
	}

	function onMobileConnectivityCheckFailure() {
		var res = new WL.Response({}, initOptions.invocationContext);
		res.errorCode = WL.ErrorCode.UNRESPONSIVE_HOST;
		res.errorMsg = WL.ClientMessages.noInternet;
		res.userMsg = res.errorMsg;
		res.recoverable = true;
		showWidgetContent();
		WL.Client.__hideBusy();
		setConnected(false);
		
		// Hide the splash screen in case autoHideSplash init option is true (for Android and iOS)
		autoHideSplashScreen();
		
		initOptions.onFailure(res);
	}

	function setConnected(isConnected) {
		if (_isConnected !== isConnected) {
			_isConnected = isConnected;
            WL.Utils.dispatchWLEvent(_isConnected ? WL.Events.WORKLIGHT_IS_CONNECTED
                    : WL.Events.WORKLIGHT_IS_DISCONNECTED);
		}
	}

	var AdobeAir = {
		minimizeCommand : null,
		restoreCommand : null
	};

	function initAdobeAir() {
		WLJSX.bind(document.body, 'mousedown', onAIRNativeMove.bindAsEventListener(this));

		// Add Tray Icon and Menu
		var iconLoadComplete = function(event) {
			var eventTarget = WLJSX.eventTarget(event);
			air.NativeApplication.nativeApplication.icon.bitmaps = [eventTarget.content.bitmapData];
		};
		var iconLoad = new air.Loader();
		var iconMenu = new air.NativeMenu();

		// Minimize Command
		AdobeAir.minimizeCommand = iconMenu.addItem(new air.NativeMenuItem(WL.ClientMessages.minimize));
		AdobeAir.minimizeCommand.addEventListener(air.Event.SELECT, function(event) {
			WL.Client.minimize();
		});

		// Restore Command
		AdobeAir.restoreCommand = iconMenu.addItem(new air.NativeMenuItem(WL.ClientMessages.restore));
		AdobeAir.restoreCommand.addEventListener(air.Event.SELECT, function(event) {
			WL.Client.restore();
		});

		// Exit Command
		var closeCommand = iconMenu.addItem(new air.NativeMenuItem(WL.ClientMessages.close));
		closeCommand.addEventListener(air.Event.SELECT, function(event) {
			if (WL.Client.onBeforeClose) {
				WL.Client.onBeforeClose();
			}
			WL.Client.close();
		});

		// Restore the app if the desktop icon was clicked.
		air.NativeApplication.nativeApplication.addEventListener(air.InvokeEvent.INVOKE, function(event) {
			WL.Client.restore();
		});

		window.nativeWindow.addEventListener(air.NativeWindowDisplayStateEvent.DISPLAY_STATE_CHANGING, function(event) {
			setMinimized(!isMinimized);
		});

		if (air.NativeApplication.supportsSystemTrayIcon) {
			iconLoad.contentLoaderInfo.addEventListener(air.Event.COMPLETE, iconLoadComplete);
			iconLoad.load(new air.URLRequest(getAppProp(WL.AppProp.AIR_ICON_16x16_PATH)));
			air.NativeApplication.nativeApplication.icon.tooltip = getAppProp(WL.AppProp.APP_DISPLAY_NAME);
			air.NativeApplication.nativeApplication.icon.menu = iconMenu;
            air.NativeApplication.nativeApplication.icon.addEventListener(window.runtime.flash.events.MouseEvent.CLICK,
                    function(event) {
				if (isMinimized) {
					WL.Client.restore();
				} else {
					WL.Client.minimize();
				}
			});
		}
		if (air.NativeApplication.supportsDockIcon) {
			iconLoad.contentLoaderInfo.addEventListener(air.Event.COMPLETE, iconLoadComplete);
			iconLoad.load(new air.URLRequest(getAppProp(WL.AppProp.AIR_ICON_128x128_PATH)));
			air.NativeApplication.nativeApplication.icon.menu = iconMenu;
		}

		setMinimized(true);
	}

	function setMinimized(isMini) {
		isMinimized = isMini;
		AdobeAir.minimizeCommand.enabled = !isMinimized;
		AdobeAir.restoreCommand.enabled = isMinimized;
	}

	/**
	 * @ignore
	 * Activates a login on demand to the server.
	 *
	 * @param realm,
	 *            type string or null. If null is passed the deployment
	 *            configured realm is used.
	 * @param options,
	 *            type Options.
	 */
	function login(realm, options) {
		new WLJSX.Ajax.WLRequest(REQ_PATH_LOGIN, {
			method : 'post',
			parameters : {
				realm : realm
			},
			onSuccess : onLoginSuccess,
			onFailure : onLoginFailure
		});

		function onLoginSuccess(transport) {
			// Login returns userInfo.
			WLJSX.Object.extend(userInfo, transport.responseJSON);
			options.onSuccess(new WL.Response(transport, options.invocationContext));
		}

		function onLoginFailure(transport) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

	}

	function sendHeartBeat() {

		new WLJSX.Ajax.WLRequest(REQ_PATH_HEART_BEAT, {
			onSuccess : function() {
			},
			onFailure : function() {
			},
			timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
		});
	}

	function onWLShow() {
		if (WLJSX.Object.isFunction(WL.Client.onShow)) {
			WL.Client.onShow();
		}
	}

	function onWLHide() {
		if (WLJSX.Object.isFunction(WL.Client.onHide)) {
			WL.Client.onHide();
		}
	}

	function setStylePropertyOnElement(elm, style, property) {
		if (!WLJSX.Object.isUndefined(style[property])) {
			elm.style[property] = style[property];
		}
	}

	function showWidgetContent() {
		// Android native elements
		if ( typeof WL.optionsMenu !== 'undefined' && WL.optionsMenu !== null) {
			WL.optionsMenu.setVisible(true);
		}
		if (WL.TabBar) {
			WL.TabBar.setVisible(true);
		}
		( typeof (contentPort.show) === 'function') ? contentPort.show() : WLJSX.show(contentPort);
	}

    this.isShowCloseButtonOnRemoteDisable = function()
    {
    	if (initOptions.showCloseOnRemoteDisableDenial == true)
    	{		
			return true;
    	}
    	else
    	{
			return false;
		}
	};
	
	this.__setConnectingState=function(connectionStatus){
		isConnecting=connectionStatus;
	}
	
	this.__hideBusy = function() {
		if (busyCounter <= 0) {
			busyCounter = 0;
			return;
		}
		if (busyIndicator && busyIndicator.isVisible() || WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
			if (WL.EnvProfile.isEnabled(WL.EPField.MOBILE)) {
				if (busyIndicator.isVisible()) {
					WL.Utils.removeBlackDiv();
				}
			}
			busyIndicator.hide();
			busyCounter--;
		}
	};

	this.__showBusy = function() {
		if (busyIndicator && !busyIndicator.isVisible()) {
			var env = WL.Client.getEnvironment();
            if (WL.EnvProfile.isEnabled(WL.EPField.MOBILE) &&
                env != WL.Env.WINDOWS_PHONE_8 && env != WL.Env.BLACKBERRY) {
				WL.Utils.addBlackDiv();
			}
			busyIndicator.show();
			busyCounter++;
		}
	};

	this.__setFriendlyName = function(friendlyName, options) {
		WL.Validators.validateArguments(['string', WL.Validators.validateObjectOrNull], arguments, 'WL.Client.__setFriendlyName');

		if ( typeof options !== "undefined") {
			WL.Validators.validateOptions({
				onSuccess : 'function',
				onFailure : 'function'
			}, options, 'WL.Client.__setFriendlyName');
		} else {
			options = {};
			options.onSuccess = function(){};
			options.onFailure = function(){};
		}

		var friendlyNameJSON = WLJSX.Object.toJSON({
			friendlyName : friendlyName
		});

		new WLJSX.Ajax.WLRequest("friendlyname", {
			method : 'post',
			parameters : {
				friendlyName : friendlyNameJSON
			},
			onSuccess : options.onSuccess,
			onFailure : options.onFailure
		});
	};

	this.__getFriendlyName = function(options) {

		WL.Validators.validateArguments(['object'], arguments, 'WL.Client.__getFriendlyName');

		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function'
		}, options, 'WL.Client.__getFriendlyName');

		new WLJSX.Ajax.WLRequest("friendlyname", {
			method : 'post',
			parameters : {
				getFriendlyName : "true"
			},
			onSuccess : options.onSuccess,
			onFailure : options.onFailure
		});
	};

	function initResizeHandler() {
		WLJSX.bind(document.onresize ? document : window, 'resize', onResizeGadget);
		onResizeGadget();
	}

	function getBlockingDiv() {
		if (blockingDiv === null) {
			blockingDiv = WLJSX.newElement('<div/>', {
				'id' : 'blockOuter',
				'class' : 'hide'
			});
			var blockingDivContent = WLJSX.newElement('<div/>', {
				'id' : 'blockInner'
			});
			WLJSX.append(blockingDiv, blockingDivContent);
			WLJSX.append(document.body, blockingDiv);
		}
		return blockingDiv;
	}

	;

	function showBlockingDiv(isShow, zIndex) {
		var div = getBlockingDiv();
		if (isShow) {
			div.className = 'show';
			if (zIndex) {
				div.style.zIndex = zIndex;
			}
		} else {
			div.className = 'hide';
			div.style.zIndex = '';
			setBlockingDivContent(null);
		}
	}

	function setBlockingDivContent(content) {
		var div = getBlockingDiv();
		if (div.firstChild) {
			div.removeChild(div.firstChild);
		}
		if (content !== null) {
			div.appendChild(content);
		}
	}

	function onResizeGadget() {
		if (WLJSX.getViewportWidth() === undefined || // In mobile web
		// viewport width is
		// undefined.
		WLJSX.getViewportWidth() >= initOptions.minAppWidth) {
			showBlockingDiv(false);
		} else {
			var divContent = document.createTextNode(WL.ClientMessages.expandWindow);
			setBlockingDivContent(divContent);
			showBlockingDiv(true);
		}
	}

	function onAIRNativeMove(element) {
		var scrollableTags = ['DIV', 'UL'];
		var elementObject = element.tagName ? element : element.toElement;
		// Currently, scrollers only appear in DIVs
		if (scrollableTags.indexOf(elementObject.tagName) > -1) {
			var css = document.defaultView.getComputedStyle(elementObject, null);
			var styleOverflow = css === null ? '' : css.overflow;
			var styleOverflowY = css === null ? '' : css.overflowY;
			var styleOverflowX = css === null ? '' : css.overflowX;

			// When clicking on the scrollbar the overflow is always 'auto' and
			// not 'visible'
            if (styleOverflow === 'auto' || styleOverflowY === 'auto' || styleOverflowX === 'auto'
                    || styleOverflow === 'scroll' || styleOverflowY === 'scroll' || styleOverflowX === 'scroll') {
				return;
			}
		}// Allow selecting content of text box
		else if (elementObject.tagName === 'INPUT' && elementObject.type === 'text') {
			return;
		}
		window.nativeWindow.startMove();
	}

	function getUserInfoValue(key, realm) {
		var value = null;
		if (realm == null) {
			realm = getAppProp(WL.AppProp.LOGIN_REALM);
		}
		if ( typeof userInfo[realm] !== 'undefined') {
			value = (userInfo[realm])[key];
		} else {
			WL.Logger.error("Unknown realm [" + realm + "]. null returned for key: " + key);
		}
		return value;
	}

	function showDialog(title, messageText, allowReload, allowDetails, response, customErrorMsg) {
		WL.Client.__hideBusy();
		WL.DiagnosticDialog.showDialog(title, messageText, allowReload, allowDetails, response, customErrorMsg);
	}

	/*
	 * Extends the async method options with default options. Default options
	 * are added if missing but do not override existing options.
	 */
	function extendWithDefaultOptions(options) {
		return WL.Utils.extend(options || {}, defaultOptions);
	}

	function extendWithDefaultLogoutOptions(options) {
		return WL.Utils.extend(options || {}, defaultLogoutOptions);
	}

	function replaceGadgetMessages() {
		if (initOptions.messages) {
			WL_I18N_MESSAGES = initOptions.messages;
		} else if ( typeof Messages != 'undefined') {
			WL_I18N_MESSAGES = Messages;
		}

		if ( typeof WL_I18N_MESSAGES === 'undefined') {
			WL.Logger.debug("Application did not define an i18n messages object, skipping translation.");
			return;
		}
		// Replace all the text in the gadget with the appropriate i18n text
		WL.Utils.replaceElementsText();
	}

	function isDesktopEnvironment() {
		return WL.EnvProfile.isEnabled(WL.EPField.DESKTOP);
	}

	function getEnv() {
		return WL.StaticAppProps.ENVIRONMENT;
	}
	
	/**
	 * This function is needed to send the environment to the server
	 * since the server does not know how to handle the 'preview' environment
	 * Returns: environment for server request
	 */
	function getEnvironmentForServerRequest() {
    	if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.PREVIEW) {
    		return WL.StaticAppProps.PREVIEW_ENVIRONMENT;
    	} else {
	    	return WL.StaticAppProps.ENVIRONMENT;	
	    }
	};

	function isIOSEnv() {
		return WL.EnvProfile.isEnabled(WL.EPField.ISIOS);
	}

	function getAppProp(key) {
		return gadgetProps[key] || WL.StaticAppProps[key];
	}
    
	function onEnvInit(options) {
		if (contentPort === null || typeof contentPort == "undefined") {
			throw new Error("Missing element with 'content' id in the html.");
		}
		// Must override the prototype hide/show to override the css'
		// display:none.
		contentPort.show = function() {

			// Fix for Webkit bug: form controls are not reacting after content
			// .hide() .show().
			// The workaround is to add some whitespace to the div.
			if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
				WLJSX.append(contentPort, '<!-- -->');
			}
			if (contentPort	.style) {
				contentPort.style.display = 'block';	
			}
		};
		contentPort.hide = function() {
			if (contentPort.style) {
				contentPort.style.display = '';	
			}
		};

		replaceGadgetMessages();

		if (options.enableLogger || ( typeof options.logger === 'object' && options.logger.enabled)) {
      WL.Logger.warn('Initialization options \'enableLogger\' and \'logger\' are deprecated. Use WL.Logger.config to set logger behavior.');
      WL.Logger.config(options.logger || {});
		}

		if ( typeof options.analytics === 'object') {
      WL.Logger.warn('Initialization option \'analytics\' is deprecated. Use WL.Analytics.enable/disable to set analytics data capture.');

			setTimeout(function() {
        var analyticsFunction = 'enable';
        if (!initOptions.analytics.enabled) {
          analyticsFunction = 'disable';
        }
				WL.Analytics[analyticsFunction]().always(function(res) {
					WLJQ(document).trigger('WL/ANALYTICS/READY', [res]);
				});
			}, 0);

		}

		if (( typeof initOptions.enableFIPS === 'boolean') && (initOptions.enableFIPS)) {
			if ( typeof WL._FIPSHttpImpl === 'object') {

				WL.FIPSHttp._enable().always(function(res) {
					WLJQ(document).trigger('WL/FIPS/READY', [res]);
				});

			} else {
				WL.Logger.warn("FIPS feature not found, but initOptions enables it on startup");
			}
        	
        	WL.Logger.debug("FIPS is enabled - disable Single HTTP Client functionality");
        	WL.EnvProfile.disable(WL.EPField.SUPPORT_WL_NATIVE_XHR);
        } else if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)){
        	window.WLJSX.Ajax.getTransport = function() {
        		return new WLNativeXHR();
        	}
		}

		WL.Logger.debug('wlclient init started');

		// if container was not defined in the busyOptions - send null (so that
		// the whole viewport/body will be used)

		busyIndicator = new WL.BusyIndicator(initOptions.busyOptions ? initOptions.busyOptions.container : null, initOptions.busyOptions);
		if (!isIOSEnv() && initOptions.connectOnStartup) {
			WL.Client.__showBusy();
		}
		WLJSX.Ajax.WLRequest.options.timeout = initOptions.timeout;
		if (WL.Client.getEnvironment() != WL.Env.MOBILE_WEB) {
			WLJSX.Ajax.WLRequest.setConnected = setConnected.bind(this);
		} else {
			WLJSX.Ajax.WLRequest.setConnected = function() {
			};
		}

		WL.CookieManager.init(getAppProp(WL.AppProp.APP_DISPLAY_NAME), getAppProp(WL.AppProp.ENVIRONMENT), getAppProp(WL.AppProp.IID));

		if (!WL.CookieManager.areCookiesEnabled()) {
			var disabledCookiesResponse = new WL.Response({}, options.invocationContext);
			disabledCookiesResponse.errorCode = WL.ErrorCode.DISABLED_COOKIES;
			disabledCookiesResponse.errorMsg = WL.Utils.formatString(WL.ClientMessages.cookiesAreDisabled);
			disabledCookiesResponse.userMsg = disabledCookiesResponse.errorMsg;
			showWidgetContent();
			initOptions.onFailure(disabledCookiesResponse);
			return;
		}
		switch (getEnv()) {
			case WL.Env.ANDROID:
				// An injected interface from WLDroidGap.bindBrowser, used to dismiss the splash screen
        	    // TODO remove this js interface once WLDroidGap is removed  
				if ( typeof WLCordovaSplashScreenDialog !== 'undefined' && WLCordovaSplashScreenDialog !== null) {
					WLCordovaSplashScreenDialog.removeSplashScreen();
				}
				break;
			case WL.Env.ADOBE_AIR:
				initAdobeAir();
				break;
			default:
				break;
		}
	}
	

	// ................ Public API methods .....................

	// ...... API variables ......

	/**
	 * Note: This method is only applicable to widgets running in Adobe Air.
	 *
	 * To specify the app's behavior on before close, provide an implementation
	 * for the WL.Client.onBeforeClose callback functions Neither of these
	 * methods should receive any parameters.
	 */
	this.onBeforeClose = null;

	/**
	 * This method initializes the WL.Client object.
	 *
	 * The options of this method reside in the initOptions.js file.
	 *
	 * @param [options] An optional options object augmented with the following additional optional properties:
	 *
	 *  <table class="userTable" cellspacing="0">
	 <thead>
	 <tr>
	 <th>Property</th>
	 <th>Description</th>
	 </tr>
	 </thead>
	 <tbody>
	 <tr>
	 <td class="attributes">Timeout</td>
	 <td class="nameDescription">An integer value, denoting the timeout in milliseconds. The timeout affects all calls from the app to the Worklight® Server. If not specified, a timeout of 30,000 milliseconds (30 seconds) is used.</td>
	 </tr>
	 <tr>
	 <td class="attributes">TO BE COMPLETED</td>
	 <td class="nameDescription">TO BE COMPLETED.</td>
	 </tr>
	 </tbody>
	 </table>
	 */
	this.init = function(options) {
		WL.Validators.enableValidation();
		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function',
			onConnectionFailure : 'function',
      enableLogger : 'boolean',  // @deprecated The use of enableLogger in initOptions is deprecated in 6.2
			analytics : 'object',
			enableFIPS : 'boolean',
      logger : 'object',  // @deprecated The use of logger in initOptions is deprecated in 6.2
			updateSilently : 'boolean',
			timeout : 'number',
			minAppWidth : 'number',
			heartBeatIntervalInSecs : 'number',
			onUnsupportedVersion : 'function',
			onRequestTimeout : 'function',
			onUnsupportedBrowser : 'function',
			onDisabledCookies : 'function',
			onUserInstanceAccessViolation : 'function',
			// deprecated
			onErrorAppVersionAccessDenial : 'function',
			onErrorRemoteDisableDenial : 'function',
			onGetCustomDeviceProperties : 'function',
			onGetCustomDeviceProvisioningProperties : 'function',
			authenticator : 'object',
			messages : 'object',
			busyOptions : 'object',
			validateArguments : 'boolean',
			connectOnStartup : 'boolean', // @deprecated The use of connectOnStartup in initOptions is deprecated in 6.2
			showCloseOnRemoteDisableDenial : 'boolean',
			showIOS7StatusBar : 'boolean',
			autoHideSplash : 'boolean'
		}, options, "WL.Client.init");

		contentPort = WLJSX.$$$('body');

		// initialize runtime enviroment fields
		WL.EnvProfile.initialize(getEnv());

		if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
			WL.Utils.addBlackDiv();
		}
		( typeof (contentPort.show) === 'function') ? contentPort.show() : WLJSX.show(contentPort);

		// If not declared explicitly, default value of connectOnStartup is false.
		if ( typeof options.connectOnStartup === 'undefined' || options.connectOnStartup === null) {
			options.connectOnStartup = false;
		} else {
			WL.Logger.warn('Initialization option \'connectOnStartup\' is deprecated. Use WL.Client.connect() to connect to the Worklight Server.');
		}

		WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS = 30000;
		if (!options.timeout) {
			options.timeout = WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS;
		}

		// ////////////////////////////////////////////////////////////////
		// Set user's JavaScript initialization code to options.onSuccess
		// ////////////////////////////////////////////////////////////////

		//Setting the cordova's logging level to DEBUG instead of the the default WARN
		if ( typeof cordova === 'object' && typeof cordova.logger === 'object' && typeof cordova.logger.level === 'function') {
			cordova.logger.level(cordova.logger.DEBUG);
		}
		//Call to load localized user visible messages based on device locale.
		WL.Utils.setLocalization();
		
		var wlInit = function() {

			if (window.wlEnvInit !== undefined) {
				wlEnvInit();
			} else if (window.wlCommonInit !== undefined) {
				wlCommonInit();
			}
			// Add an interface for notifying native code about init complete
			WL.Client.__onWlInitComplete();
		};

		// before v4.1.3:
		// an onSuccess callback was provided by main html file's onload
		if (options.onSuccess) {
			// before v4.1.3 wlCommonInit was not yet defined.
			// in such case, we define an empty function, because new
			// environments js template expects this method.
			if (window.wlCommonInit === undefined) {
				wlCommonInit = function() {
				};
			}
			// extracting the user's onSuccess to call wlInit after the original
			// onSuccess - so new
			// environments's js code (v4.1.3 and newer) will be invoked.
			var _onSuccess = options.onSuccess;
			options.onSuccess = function() {
				// calls the old onSuccess callback as defined in main html
				// onload
				_onSuccess();
				// calls the new initialization scheme as defined in v4.1.3
				wlInit();
			};
		}
		// starting v4.1.3 -
		else {
			options.onSuccess = wlInit;
		}

		WLJSX.Object.extend(initOptions, options);
		initOptions.validateArguments ? WL.Validators.enableValidation() : WL.Validators.disableValidation();

		var connectOptions = {
			onSuccess : onInitSuccess.bind(this),
			onFailure : function() {
				WL.Client.__hideBusy();
				initOptions.onFailure.apply(this, arguments);
			}.bind(this),
			timeout : initOptions.timeout
		};

		// All the devices which are Cordova based have to wait for the
		// 'deviceready' event
		// to make sure that the Cordova functionality is initialized.
		if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
			if (WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE_8) {
				// Windows Phone 7 / 8 does not support custom events
				WLJSX.bind(document, __WL.InternalEvents.REACHABILITY_TEST_SUCCESS, this.connect.bind(this, connectOptions));
				WLJSX.bind(document, __WL.InternalEvents.REACHABILITY_TEST_FAILURE, onMobileConnectivityCheckFailure.bind(this));
			} else {
				document.addEventListener(__WL.InternalEvents.REACHABILITY_TEST_FAILURE, onMobileConnectivityCheckFailure.bind(this), false);
				document.addEventListener(__WL.InternalEvents.REACHABILITY_TEST_SUCCESS, this.connect.bind(this, connectOptions), false);
			}

			var cordovaInit = function(event) {
				WL.Logger.debug("ondeviceready event dispatched");
				if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD) || (WL.Client.getEnvironment() == WL.Env.ANDROID)) {
					WL.App.getInitParameters("appVersionPref,wlSkinName,wlSkinLoaderChecksum", cordovaInitCallback);
				} else {
                	if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
	                	//Device uuid changes and system generates different uuid's for different apps.  
                    	//For device SSO to work it should be same across apps and PublisherHostId is same if publisherid matches with apps
	                	var options = {
	                			onSuccess: function(response){
	                				WL.PublisherHostID = JSON.stringify(response.deviceID); //set the device id so that its used later
	                			},
	                			onFailure: function(){
	                				//Add failure message
	                			}
	                	};
	                	WL.Device.getPublisherHostID(options); //cordova call
                	}
					cordovaInitCallback(null);
				}
			};

			var addDeviceIDHeader = function() {
				var deferred = WLJQ.Deferred();

				function deviceIDSuccessCallback(id) {
					if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
						deviceID = id;
					} else if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8) {  
            			deviceID = WL.Device.getHardwareIdentifier();
					} else {
						deviceID = WL.Utils.getCordovaPluginResponseObject(id, 'deviceUUID');
					}
					WL.Logger.trace('addDeviceIDHeader deviceIDSuccessCallback');
					WL.Client.addGlobalHeader('x-wl-device-id', deviceID);

					return deferred.resolve();
				};

				function deviceIDFailureCallback(error) {
					WL.Logger.trace('doConnectOnStartUp deviceIDFailureCallback: ', error);
					WL.Client.addGlobalHeader('x-wl-device-id', '');
					return deferred.resolve();
				}

				if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
            		WL.Device.__getPublisherHostID(deviceIDSuccessCallback, deviceIDFailureCallback);
				} else {
					if ( typeof (WL.DeviceAuth.__getDeviceUUID) !== 'undefined') {
						WL.DeviceAuth.__getDeviceUUID(deviceIDSuccessCallback, deviceIDFailureCallback);
					} else {
						setTimeout(deferred.resolve, 0);
					}
				}

				return deferred.promise();
			};

			var doConnectOnStartUp = function() {
				addDeviceIDHeader().then(function() {
					if (options.connectOnStartup) {
						// through Cordova,
						WL.Logger.debug('connectOnStartup');

						if (!WL.UserAuth.isSupportedEnvironment()) {
							WL.Utils.wlCheckReachability();
							return;
						}

						var signRequest = function(signedHttpRequestOptions) {
							WL.UserAuth.signedHttpRequest(signedHttpRequestOptions).then(function() {
								WL.Utils.wlCheckReachability();
							}).fail(function(err) {
								WL.Logger.error('doConnectOnStartUp deviceIDSuccessCallback ERROR', err);
							});
						};

						WL.UserAuth.init().then(function() {
							return WL.UserAuth.isCertificateExists('application');
						}).then(function(result) {
							var signedHttpRequestOptions = {
								method : 'GET',
								data : '',
								validate : false,
								cookiesToRemove : [],
								url : WL.Utils.createAPIRequestURL('sslclientauth'),
								entity : 'application'
							};

							var isCertificateExists = WL.Utils.getCordovaPluginResponseObject(result, 'isCertificateExists');
							WL.Logger.trace('connectOnStartup isCertificateExists: ', isCertificateExists);

							if ('true' === isCertificateExists) {

            					if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
            						// should be removed when all environments will work via native
            						signedHttpRequestOptions.headers = {'x-wl-device-id' : WL.Client.__getGlobalHeaders()['x-wl-device-id']};
            					}
            					
								signRequest(signedHttpRequestOptions);
							} else {
								WL.Utils.wlCheckReachability();
							}
						}).fail(function(err) {
							WL.Logger.error('doConnectOnStartUp ERROR', err);
							WL.Utils.wlCheckReachability();
						});

					} else {
						WL.Logger.trace('connectOnStartup finalizeInit');
						finalizeInit();
					}
				});
			};

			var cordovaInitCallback = function(returnedData) {
				navigator.globalization.getLocaleName(function(locale) {
					__locale = locale.value;
					if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD)) {
						//TODO: move this outside when cordova getPreferredLanguage() is fixed
						navigator.globalization.getPreferredLanguage(function(language) {
							var __lang = language.value;
							if(typeof __lang !== 'undefined' ) {
								if(__lang.length > 2) {
									__locale = __lang;
								} else {
									__locale = __lang + __locale.substr(2);
								}
							}
							WL.Utils.setLocalization();
						}, function(){});
					} else {
						WL.Utils.setLocalization();
					}
				}, function() {
				});

				//getNumberPattern is not supported on WP8
				if (WL.Client.getEnvironment() == WL.Env.WINDOWS_PHONE_8 ) { 
					cordova.exec(function(value) { __pattern = {'decimal' : value }  ;  }, 
					function (err) { __pattern ={'decimal' :  "."} ; } ,
					'DeviceInfo', "getDecimalSeparator", [] ); 
				}else { 
				  navigator.globalization.getNumberPattern(function(pattern) {
					__pattern = pattern;
					}, function() {
					}, {
						type : 'decimal'
					});
				}

				if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
					cordova.exec(function(value) {
						__isSettingsEnabled = value == "true" ? true : false;
						if ( typeof WL.OptionsMenu !== 'undefined' && WL.OptionsMenu !== null) {
							try {
								WL.OptionsMenu.init();
							} catch(err) {
								__isSettingsEnabled = false;
							}
						}
					}, null, 'WLApp', "readUserPref", ["enableSettings"]);

					//get the size first
					WL.App.getScreenSize(function(data) {
						__androidScreenSize = data;
					});

					//register listener for resize
					window.addEventListener("resize", function() {
						WL.App.getScreenSize(function(data) {
							__androidScreenSize = data;
						});
					});
				}

				onEnvInit(options);
				if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
					if (returnedData !== null && returnedData !== "") {
						if (( typeof returnedData.appVersionPref) !== "undefined") {
							WL.StaticAppProps.APP_VERSION = returnedData.appVersionPref;
						}
						WL.StaticAppProps.SKIN_NAME = returnedData.wlSkinName;

						if (( typeof returnedData.wlSkinLoaderChecksum) !== "undefined") {
							WL.StaticAppProps.SKIN_LOADER_CHECKSUM = returnedData.wlSkinLoaderChecksum;
						}

						WL.StaticAppProps.FREE_SPACE = returnedData.freeSpace;
					}
					// In development mode, the application has a settings
					// widget in which the user may alter
					// the application's root url
					// and here the application reads this url, and replaces the
					// static prop
					// WL.StaticAppProps.WORKLIGHT_ROOT_URL
					// __setWLServerAddress for iOS is called within
					// wlgap.ios.js's wlCheckReachability
					// function because it is an asynchronous call.

					// Only in Android we should clear the history of the
					// WebView, otherwise when user will
					// press the back button after upgrade he will return to the
					// html page before the upgrade
					if (WL.Env.ANDROID == getEnv()) {
						cordova.exec(null, null, 'WLApp', 'clearHistory', []);
					}
				}
				if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD)) {

					WL.StaticAppProps.APP_VERSION = returnedData.appVersionPref;
					WL.StaticAppProps.FREE_SPACE = returnedData.freeSpace;
					WL.StaticAppProps.SKIN_NAME = returnedData.wlSkinName;
					WL.StaticAppProps.SKIN_LOADER_CHECKSUM = returnedData.wlSkinLoaderChecksum;

					// Adds status bar in iOS 7
					if (initOptions.showIOS7StatusBar && WL.Utils.versionCompare(device.version, "7.0", 2) >= 0) {
						var statusBar = WLJSX.$$('<div>').attr("id", "wl_ios7bar");
						WLJSX.$$('body').prepend(statusBar);
						WLJSX.$$('body').addClass('wl_ios7');
					}
				} else if (WL.Client.getEnvironment() == WL.Env.WINDOWS_PHONE_8) {
					WL.StaticAppProps.SKIN_NAME = 'default';
				}
				if (WL.EnvProfile.isEnabled(WL.EPField.SERVER_ADDRESS_CONFIGURABLE)) {
					WL.App.__setWLServerAddress(doConnectOnStartUp);
				} else {
					doConnectOnStartUp();
				}

			};

			// make sure we wait for the 'deviceready' event. If it already has
			// benn fired, PhoneGap.available will be true
            if (typeof cordova != "undefined" && cordova !== null && cordova.available
                    || typeof PhoneGap != "undefined" && PhoneGap.available) {
				cordovaInit();
			} else {
				if (WL.Client.getEnvironment() === WL.Env.WINDOWS_PHONE_8) {
					// Windows Phone 7 / 8 does not support custom events
					WLJSX.bind(document, 'deviceready', cordovaInit.bind(this));
				} else {
					// use setTimeout to ensure all Cordova function (especially
					// navigator.network and
					// naviator.notification) is available
					document.addEventListener('deviceready', function() {
						setTimeout(cordovaInit, 0);
					}, false);
				}
			}
		} else {
			onEnvInit(options);
			if (options.connectOnStartup) {
				if (getEnv() == WL.Env.BLACKBERRY) {
					document.addEventListener(__WL.InternalEvents.REACHABILITY_TEST_FAILURE, onMobileConnectivityCheckFailure.bind(this), false);
					document.addEventListener(__WL.InternalEvents.REACHABILITY_TEST_SUCCESS, this.connect.bind(this, connectOptions), false);
					WL.Utils.wlCheckReachability();
				} else {
					this.connect(connectOptions);
				}
			} else {
				finalizeInit();
			}
		}
	};

	this.isSettingsEnabled = function() {
		return __isSettingsEnabled;
	};

	this.getDeviceLocale = function() {
		return __locale;
	};

	this.getLocalePattern = function() {
		return __pattern;
	};
	// establishes a session with the worklight server, receiving any
	// block/notify messages that
	// may apply to this application, and other information (i.e. checksum data
	// for direct update).
	this.connect = function(options) {
		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function',
			timeout : 'number'
		}, options, 'WL.Client.connect');

		if (isConnecting) {
			WL.Logger.error("Cannot invoke WL.Client.connect while it is already executing.");
			if (options && options.onFailure) {
				var response = new WL.Response({}, initOptions.invocationContext);
				response.errorCode = WL.ErrorCode.CONNECTION_IN_PROGRESS;
				options.onFailure(response);
			}
			return;
		}

		options = extendWithDefaultOptions(options);

		var timeout = getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS);
		if (!WLJSX.Object.isUndefined(options.timeout)) {
			timeout = options.timeout;
		}

		function onConnectSuccess(transport) {

			if (transport == null || transport.responseJSON == null) {
				showDialog(WL.ClientMessages.error, WL.ClientMessages.responseNotRecognized, true, true, {}, WL.ClientMessages.responseNotRecognized);
			}
			userInfo = transport.responseJSON.userInfo;
			gadgetProps = transport.responseJSON.gadgetProps;
			userPrefs = transport.responseJSON.userPrefs;

			// for desktop environments, display the update version dialog.
			if (WL.EnvProfile.isEnabled(WL.EPField.DESKTOP) && getAppProp(WL.AppProp.LATEST_VERSION) > getAppProp(WL.AppProp.APP_VERSION)) {
				var response = new WL.Response({}, initOptions.invocationContext);
				response.errorCode = WL.ErrorCode.UNSUPPORTED_VERSION;
				response.appVersion = getAppProp(WL.AppProp.APP_VERSION);
				response.latestVersion = getAppProp(WL.AppProp.LATEST_VERSION);
				response.downloadAppURL = getAppProp(WL.AppProp.DOWNLOAD_APP_LINK);
				response.errorMsg = WL.Utils.formatString(WL.ClientMessages.upgradeGadget, response.appVersion, response.latestVersion);
				response.userMsg = response.errorMsg;
				if (initOptions.onUnsupportedVersion) {
					initOptions.onUnsupportedVersion(response);
				} else {
					options.onFailure(response);
				}
				return;
			}

			if (initOptions.heartBeatIntervalInSecs && initOptions.heartBeatIntervalInSecs > 0 && !heartBeatPeriodicalExecuter) {
				// Start heartbeat polling.
				heartBeatPeriodicalExecuter = new WLJSX.PeriodicalExecuter(sendHeartBeat, initOptions.heartBeatIntervalInSecs);

				if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
					// stop heartbit on pause
					document.addEventListener("pause", function() {
						if (heartBeatPeriodicalExecuter) {
							heartBeatPeriodicalExecuter.stop();
						}
					}, false);

					// start heartbit on pause
					document.addEventListener("resume", function() {
						if (heartBeatPeriodicalExecuter) {
							heartBeatPeriodicalExecuter = new WLJSX.PeriodicalExecuter(sendHeartBeat, initOptions.heartBeatIntervalInSecs);
						}
					}, false);
				}
			}

			WL.Logger.debug('wlclient connect success');
			isConnecting = false;
			options.onSuccess(transport);
			WL.Logger._processAutomaticTrigger();
		}

		function onForegroundRequestCallback(transport) {
			var response = transport.responseJSON;
		}

		function callServerOnForeground(networkInfo) {
			var isDirectUpdateSupported = WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER);

			if (networkInfo.isNetworkConnected === undefined || networkInfo.isNetworkConnected === null || networkInfo.isNetworkConnected) {
				var isDirectUpdateSupported = WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER);
				new WLJSX.Ajax.WLRequest(REQ_PATH_COMPOSITE, {
					method : 'post',
					parameters : {
						requests : JSON.stringify({
							appversionaccess : {
								reqPath : REQ_PATH_APP_VERSION_ACCESS,
								parameters : {}
							}
						})
					},
					onSuccess : onForegroundRequestCallback,
					onFailure : onForegroundRequestFailure,
					timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
				});
			}
		}

		function onForegroundRequestFailure(transport) {
			// empty implementation, the error is allready printed to the log
			// via WLJSX.AJAX.Request object
			// if callback wasn't defined an exception will be raised
		}

		function onInitFailure(transport) {
			showWidgetContent();
			onFailureResetSettings(transport);
		}

		function onFailureResetSettings(transport) {
			isConnecting = false;
			setConnected(false);
			options.onFailure(new WL.FailResponse(transport));
		}

		function sendInitRequest() {
			if (WL.UserAuth.isSupportedEnvironment()) {
				WL.Client.establishSSLClientAuth(REQ_PATH_INIT, {
					onSuccess : onConnectSuccess.bind(this),
					onFailure : onInitFailure.bind(this),
					timeout : timeout
				});
			} else {
				new WLJSX.Ajax.WLRequest(REQ_PATH_INIT, {
					onSuccess : onConnectSuccess.bind(this),
					onFailure : onInitFailure.bind(this),
					timeout : timeout
				});
			}
		}

		isConnecting = true;
		sendInitRequest();
	};

	/**
	 * This method logs in to a specific realm.
	 *
	 * An asynchronous function. Logs in to a specific realm.
	 *
	 * @param realm Mandatory. A realm that defines how the login process is performed. The realm is the one defined in the application descriptor.
	 * @param options Optional. A standard <code>options</code> object.
	 */
	this.login = function(realm, options) {
		WL.Validators.validateArguments([WL.Validators.validateStringOrNull, WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function',
			timeout : 'number'
		})], arguments, "WL.Client.login");

		options = extendWithDefaultOptions(options);
		login(realm, options);
	};
	
	/**
	 * Checks whether direct update is available. In case it is - a challenge handler will be triggered
	 * In case onSuccess callback is received - there is no direct update available on the server
	 *
	 * @param options
	 *            Optional. Parameters hash.
	 */
	this.checkForDirectUpdate = function(options){
		WL.Client.login("wl_directUpdateRealm", options);
	}

	/**
	 * Invalidates the current session (via the server).
	 *
	 * @param options,
	 *            type: Options
	 */
	this.logout = function(realm, options) {
		WL.Validators.validateArguments([WL.Validators.validateStringOrNull, WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function',
			timeout : 'number'
		})], arguments, 'WL.Client.logout');
		options = extendWithDefaultLogoutOptions(options);

		function onLogoutSuccess(transport) {
			if ( typeof userInfo[realm] === "undefined") {
				WL.Logger.error('onLogoutSuccess: realm: ' + realm + ' is undefined');
            } else {
			(userInfo[realm])[WL.UserInfo.IS_USER_AUTHENTICATED] = false;
            }
			if (getAppProp(WL.AppProp.LOGIN_REALM) === realm && heartBeatPeriodicalExecuter) {
				// stop sending heart beats
				heartBeatPeriodicalExecuter.stop();
				heartBeatPeriodicalExecuter = null;
			}
			var logoutResponse = new WL.Response(transport, options.invocationContext);
			logoutResponse.response = transport;
			realm = realm || getAppProp(WL.AppProp.LOGIN_REALM);
			if (getAppProp(WL.AppProp.LOGIN_REALM) === realm && isLoginOnStartup()) {
				gadgetProps = {};
				userInfo = {};
				userPrefs = {};
			}
			options.onSuccess(logoutResponse);
		}

		function onLogoutFail(transport) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

		if (!realm) {
			WL.Logger.error("Invalid call for WL.Client.logout. Realm must be specified for unsecured applications.");
			return;
		}

		new WLJSX.Ajax.WLRequest(REQ_PATH_LOGOUT, {
			parameters : {
				realm : realm
			},
			onSuccess : onLogoutSuccess,
			onFailure : onLogoutFail
		});

		if (!WLJSX.Ajax.WLRequest.setConnected) {
			WLJSX.Ajax.WLRequest.setConnected = function() {
			};
		}
	};

	/**
	 * Returns a user pref value by its key or null if one is not defined.
	 *
	 * @param prefKey,
	 *            type string
	 *
	 * @return user preference value, type: string or null
	 */
	this.getUserPref = function(key) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.getUserPref');
		return userPrefs[key] || null;
	};

	/**
	 * An asynchronous function. Creates a new user preference, or updates the
	 * value of an existing user preference, as follows:
	 * <ul>
	 * <li>If a user preference with the specified user key is already defined,
	 * the user preference value is updated.
	 * <li>If there is no user preference defined with the specified key, a new
	 * user preference is created with the specified key and value. However, if
	 * there are already 100 preferences, preference will be created, and the
	 * method's failure handler will be called.
	 * </ul>
	 *
	 * @param key
	 *            Mandatory. The user preference key.
	 * @param value
	 *            Mandatory. The value of the user preference.
	 * @param options
	 *            Optional. A standard {@link options} object.
	 */
	this.setUserPref = function(key, value, options) {
		WL.Validators.validateArguments(['string', 'string', WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function'
		})], arguments, 'WL.Client.setUserPref');
		var userPrefsHash = {};
		userPrefsHash[key] = value;
		WL.Client.setUserPrefs(userPrefsHash, options);
	};

	/**
	 * Updates the server with the current user prefs. Make sure you call this
	 * method after setting or removing user prefs - otherwise the changes will
	 * be lost in the next session.
	 *
	 * @param key,
	 *            type string
	 */
	this.setUserPrefs = function(userPrefsHash, options) {
		WL.Validators.validateArguments(['object', WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function',
			invocationContext : function() {
			}
		})], arguments, 'WL.Client.setUserPrefs');

		options = extendWithDefaultOptions(options);

		function onStoreSuccess(transport) {
			WLJSX.Object.extend(userPrefs, userPrefsHash);
			options.onSuccess(new WL.Response(transport, options.invocationContext));
		}

		function onStoreFailure(transport) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

		// User is not allow to save key\value when value is 'undefined'.
		// In case of 'undefined' we delete the key
		for (var key in userPrefsHash) {
			if ( typeof (userPrefsHash[key]) === 'undefined') {
				WL.Logger.debug('WL.Client.setUserPrefs(): value for key:' + key + ' is \'undefined\', will save value as null');
				userPrefsHash[key] = null;
			}
		}

		var userPrefsJSON = WLJSX.Object.toJSON(userPrefsHash);
		new WLJSX.Ajax.WLRequest(REQ_PATH_SET_USER_PREFS, {
			parameters : {
				userprefs : userPrefsJSON
			},
			onSuccess : onStoreSuccess,
			onFailure : onStoreFailure,
			timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
		});
	};

	this.deleteUserPref = function(key, options) {
		WL.Validators.validateArguments(['string', WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function'
		})], arguments, 'WL.Client.deleteUserPref');

		options = extendWithDefaultOptions(options);

		function onDeleteSuccess(transport) {
			delete userPrefs[key];
			options.onSuccess(new WL.Response(transport, options.invocationContext));
		}

		function onDeleteFailure(transport) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

		new WLJSX.Ajax.WLRequest(REQ_PATH_DELETE_USER_PREF, {
			parameters : {
				userprefkey : key
			},
			onSuccess : onDeleteSuccess.bind(this),
			onFailure : onDeleteFailure,
			timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
		});
	};

	/**
	 * Verifies if the user pref key exists.
	 *
	 * @param key,
	 *            type string
	 *
	 * @return type boolean: true if exists.
	 */
	this.hasUserPref = function(key) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.hasUserPref');
		return ( key in userPrefs);
	};

	this.getAppProperty = function(propKey) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.getAppProperty');
		return getAppProp(propKey);
	};

	this.hasAppProperty = function(key) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.hasAppProperty');
		return ( key in gadgetProps) || ( key in WL.StaticAppProps);
	};

	this.getEnvironment = function() {
		return getEnv();
	};

	/**
	 * Used to report user activity for auditing or reporting purposes.
	 * <p>
	 * The Worklight server maintains a separate database table to store app
	 * statistics for each day of the week. The tables are named gadget_stat_n,
	 * where n is a number from 1 to 7 which identifies the day of the week. The
	 * method adds a user- specified log line to the relevant table.
	 *
	 * @param activityType
	 *            Mandatory. A string that identifies the activity.
	 */
	this.logActivity = function(activityType) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.logActivity');
		function onMySuccess(transport) {
			WL.Logger.debug("Activity [" + activityType + "] logged successfully.");
		}

		function onMyFailure(transport) {
			WL.Logger.error("Activity [" + activityType + "] logging failed.");
		}

		new WLJSX.Ajax.WLRequest(REQ_PATH_LOG_ACTIVITY, {
			parameters : {
				activity : activityType
			},
			onSuccess : onMySuccess,
			onFailure : onMyFailure,
			timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
		});
	};

	/**
	 * Updates the userInfo data with latest server information. The method was
	 * added as a workaround for identifying backend authentication failures;
	 * After procedure failure, the application can activate and the test the
	 * auth status using WL.Client.isUserAuthenticated(...)
	 */
	this.updateUserInfo = function(options) {
		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function'
		}, options, 'WL.Client.validateOptions');

		options = extendWithDefaultOptions(options);

		function onUpdateUserInfoSuccess(transport) {
			WLJSX.Object.extend(userInfo, transport.responseJSON);
			options.onSuccess(new WL.Response(transport, options.invocationContext));
		}

		function onUpdateUserInfoFailure(transport, msg) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

		new WLJSX.Ajax.WLRequest(REQ_PATH_GET_USER_INFO, {
			onSuccess : onUpdateUserInfoSuccess,
			onFailure : onUpdateUserInfoFailure,
			timeout : getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS)
		});
	};

	this.getUserInfo = function(realm, key) {
		WL.Validators.validateArguments([WL.Validators.validateStringOrNull, 'string'], arguments, 'WL.Client.getUserInfo');
		return getUserInfoValue(key, realm);
	};

	/**
	 * Returns the logged-in user name or NULL if unknown. The user identity can
	 * be know by the server but NOT authenticated in case a Persistent Cookie
	 * is used. Use method isUserAuthenticated() to verify.
	 */
	this.getUserName = function(realm) {
		var result = null;
		WL.Validators.validateStringOrNull(realm, 'WL.Client.getUserName');
		result = getUserInfoValue(WL.UserInfo.USER_NAME, realm);
		if (result == null) {
			result = getUserInfoValue(WL.UserInfo.USER_ID, realm);
		}
		return result;
	};

	/**
	 * Returns the login name of the currently logged in user or NULL if unknown
	 * The loginName is used to by the iPhone native application to inject the
	 * last logged in username when the gadget starts-up
	 */
	this.getLoginName = function(realm) {
		var result = null;
		WL.Validators.validateStringOrNull(realm, 'WL.Client.getLoginName');
		result = getUserInfoValue(WL.UserInfo.LOGIN_NAME, realm);
		if (result == null) {
			result = getUserInfoValue(WL.UserInfo.USER_ID, realm);
		}
		return result;
	};

	/**
	 * Returns TRUE if the user is authenticated to the given realm. If no realm
	 * is supplied will check the gadget server realm.
	 */
	this.isUserAuthenticated = function(realm) {
		WL.Validators.validateStringOrNull(realm, 'WL.Client.isUserAuthenticated');
		var isAuth = getUserInfoValue(WL.UserInfo.IS_USER_AUTHENTICATED, realm);

		// userInfo properties are passed as strings.
		return !!parseInt(isAuth || 0, 10);
	};

	/**
	 * Invokes a procedure exposed by a Worklight adapter.
	 *
	 * @param invocationData
	 *            Mandatory. A JSON block of parameters. <br>
	 *            <code>{<br>
	 *            adapter : adapter-name.wlname,<br>
	 *            procedure : adapter-name.procedure-name.wlname,<br>
	 *            parameters : [],<br>
	 *            }</code>
	 *
	 * @param options
	 *            Optional. Parameters hash.
	 */
	this.__invokeProcedure = function(invocationData, options, useSendInvoke) {

		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function',
			invocationContext : function() {
			},
			onConnectionFailure : 'function',
			timeout : 'number',
			fromChallengeRequest : 'boolean'
		}, options, 'WL.Client.invokeProcedure');

		options = extendWithDefaultOptions(options);

		var blocked = false;

		function onInvokeProcedureSuccess(transport) {
			if (!blocked) {
				blocked = true;
				if (!transport.responseJSON.isSuccessful) {
					var failResponse = new WL.Response(transport, options.invocationContext);
					failResponse.errorCode = WL.ErrorCode.PROCEDURE_ERROR;
					failResponse.errorMsg = WL.ClientMessages.serverError;
					failResponse.invocationResult = transport.responseJSON;
					if (failResponse.invocationResult.errors) {
						failResponse.errorMsg += " " + failResponse.invocationResult.errors;
						WL.Logger.error(failResponse.errorMsg);
					}
					options.onFailure(failResponse);
				} else {
					var response = new WL.Response(transport, options.invocationContext);
					response.invocationResult = transport.responseJSON;
					options.onSuccess(response);
				}
			}
			
			WL.Logger._processAutomaticTrigger();
		}

		function onInvokeProcedureFailure(transport) {
			if (!blocked) {
				blocked = true;
				setConnected(false);
				var errorCode = transport.responseJSON.errorCode;
				if (options.onConnectionFailure && (errorCode == WL.ErrorCode.UNRESPONSIVE_HOST || errorCode == WL.ErrorCode.REQUEST_TIMEOUT)) {
					options.onConnectionFailure(new WL.FailResponse(transport, options.invocationContext));
				} else {
					options.onFailure(new WL.FailResponse(transport, options.invocationContext));
				}
			}
		}

		// Build request options from invocationData
		var requestOptions = {
			onSuccess : onInvokeProcedureSuccess,
			onFailure : onInvokeProcedureFailure
		};

		if (!WLJSX.Object.isUndefined(options.timeout)) {
			requestOptions.timeout = options.timeout;
		}

		if (!WLJSX.Object.isUndefined(options.fromChallengeRequest)) {
			requestOptions.fromChallengeRequest = options.fromChallengeRequest;
		}

		requestOptions.parameters = {};
		requestOptions.parameters.adapter = invocationData.adapter;
		requestOptions.parameters.procedure = invocationData.procedure;

		var environment = WL.Client.getEnvironment();

		switch(environment) {
			case WL.Env.ANDROID:
			case WL.Env.IPHONE:
			case WL.Env.IPAD:
			case WL.Env.BLACKBERRY10:
			case WL.Env.WINDOWS_PHONE_8:
			case WL.Env.MOBILE_WEB:
			case WL.Env.ADOBE_AIR:
				requestOptions.parameters.compressResponse = invocationData.compressResponse;
				break;
			default:
				break;
		}
		if (invocationData.parameters) {
			requestOptions.parameters.parameters = WLJSX.Object.toJSON(invocationData.parameters);
		}
		if (invocationData.parameters) {
			requestOptions.parameters.parameters = WLJSX.Object.toJSON(invocationData.parameters);
		}

		//invoke is used for adapter
		var url = REQ_PATH_BACKEND_QUERY;
		if (!WLJSX.Object.isUndefined(useSendInvoke) && useSendInvoke) {
			url = REQ_PATH_BACKEND_INVOKE;
		}

		// need to send device context updates when calling invokeProcedure
		if (!WLJSX.Object.isUndefined(WL.Client.__deviceContextTransmission))
			WL.Client.__deviceContextTransmission.enableDeltaSending(true);

		if (!this.isConnected() && WL.UserAuth.isSupportedEnvironment()) {
			WL.Client.establishSSLClientAuth(url, requestOptions);
		} else {
			new WLJSX.Ajax.WLRequest(url, requestOptions);
		}
		if (!WLJSX.Object.isUndefined(WL.Client.__deviceContextTransmission))
			WL.Client.__deviceContextTransmission.enableDeltaSending(false);
	};

    this.invokeProcedure = function (invocationData, options, useSendInvoke) {
      var dfd = WLJQ.Deferred();

      //Ensure options will be an object
      options = options || {};

      //Save the user provided callbacks
      var onSuccessCallback = options.onSuccess;
      var onFailureCallback = options.onFailure;

      //Wrap onSuccess
      options.onSuccess = function () {

        if (typeof options === 'object' && typeof options.onSuccess === 'function' && typeof onSuccessCallback === 'function') {
          onSuccessCallback.apply(this, arguments);
        }

        dfd.resolve.apply(this, arguments);
      };

      //Wrap onFailure
      options.onFailure = function () {

        if (typeof options === 'object' && typeof options.onFailure === 'function' && typeof onFailureCallback === 'function') {
          onFailureCallback.apply(this, arguments);
        }

        dfd.reject.apply(this, arguments);
      };

      //Ensure async behavior
      setTimeout(function () {

        //Call the implementation that only supports callbacks

        try {

          WL.Client.__invokeProcedure(invocationData, options, useSendInvoke);

        } catch (e) {
          WL.Logger.error(e);
          dfd.reject(e);
        }

      }, 0);

      return dfd.promise();
    };

	/**
	 * @ignore
	 * Establishes an SSL Session with client certificate if one exists,
	 * prior to invoking procedure @ url provided
	 * @param url -
	 *            a URL for the Worklight adapter procedure to be invoked
	 * @param requestOptions
	 *            invocation request options
	 */
	this.establishSSLClientAuth = function(url, requestOptions) {
		WL.Logger.debug('establishSSLClientAuth');

		var signRequest = function(signedHttpRequestOptions) {
			WL.UserAuth.signedHttpRequest(signedHttpRequestOptions).then(function() {
				new WLJSX.Ajax.WLRequest(url, requestOptions);
			}).fail(function(err) {
				WL.Logger.error('establishSSLClientAuth deviceIDSuccessCallback ERROR', err);
			});
		};

		WL.UserAuth.init().then(function() {
			return WL.UserAuth.isCertificateExists('application');
		}).then(function(result) {
			var signedHttpRequestOptions = {
				method : 'GET',
				data : '',
				validate : false,
				cookiesToRemove : [],
				url : WL.Utils.createAPIRequestURL('sslclientauth'),
				entity : 'application'
			};

			var isCertificateExists = WL.Utils.getCordovaPluginResponseObject(result, 'isCertificateExists');
			WL.Logger.debug('establishSSLClientAuth isCertificateExists: ', isCertificateExists);

			if ('true' === isCertificateExists) {
            	if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
					// should be removed when all environments will work via native
            		signedHttpRequestOptions.headers = {'x-wl-device-id' : WL.Client.__getGlobalHeaders()['x-wl-device-id']};
            	}

				signRequest(signedHttpRequestOptions);
			} else {
				new WLJSX.Ajax.WLRequest(url, requestOptions);
			}
		}).fail(function(err) {
			WL.Logger.error('establishSSLClientAuth ERROR', err);
		});
	};

	/**
	 * @ignore
	 * Fetchs an HTML or XML from a given URL (3rd party host). Applications
	 * should use to bypass the single origin constraint of javascript XML. -
	 * The user must be authenticated before the app can use the method. - The
	 * content is returned in the response.responseXML or response.responseText -
	 * Valid hosts must be listed in conf/proxy_domains_whitelist.txt Each line
	 * in the file contains a single host name example: www.cnn.com
	 *
	 * @param url -
	 *            a URL. Must start with http://
	 * @param options
	 *            (custom only): isXML - if true, responseXML is set with
	 *            content, otherwise responseText.
	 */
	this.makeRequest = function(url, options) {
		WL.Validators.validateArguments(['string', WL.Validators.validateOptions.curry({
			onSuccess : 'function',
			onFailure : 'function',
			timeout : 'number',
			isXml : 'boolean'
		})], arguments, 'WL.Client.makeRequest');

		options = extendWithDefaultOptions(options);

		function onFetchXMLSuccess(transport) {
			var response = new WL.Response(transport, options.invocationContext);
			response.responseXML = transport.responseXML;
			options.onSuccess(response);
		}

		function onFetchTextSuccess(transport) {
			var response = new WL.Response(transport, options.invocationContext);
			response.responseText = transport.responseText;
			options.onSuccess(response);
		}

		function onFetchFailure(transport) {
			options.onFailure(new WL.FailResponse(transport, options.invocationContext));
		}

		var onSuccessCallback = options.isXml ? onFetchXMLSuccess : onFetchTextSuccess;
		var myoptions = {
			method : "get",
			parameters : {
				url : url
			},
			onSuccess : onSuccessCallback,
			onFailure : onFetchFailure,
			evalJSON : false
		};
		if ('timeout' in options) {
			myoptions.timeout = options.timeout;
		}
		new WLJSX.Ajax.WLRequest(REQ_PATH_PROXY, myoptions);
	};

	this.close = function() {
		if (getEnv() === WL.Env.ADOBE_AIR) {
			air.NativeApplication.nativeApplication.icon.bitmaps = [];
			var activeWindows = air.NativeApplication.nativeApplication.openedWindows;
			for (var i = 0; i < activeWindows.length; i++) {
				activeWindows[i].close();
			}
			air.NativeApplication.nativeApplication.exit();
			WL.Logger.debug("App closed");
		}
	};

	this.minimize = function() {
		if (getEnv() === WL.Env.ADOBE_AIR) {
			var activeWindows = air.NativeApplication.nativeApplication.openedWindows;
			for (var i = 0; i < activeWindows.length; i++) {
				if (getAppProp(WL.AppProp.SHOW_IN_TASKBAR)) {
					activeWindows[i].minimize();
				} else {
					activeWindows[i].visible = false;
				}
			}
			setMinimized(true);
			WL.Logger.debug("App minimized");
		}
	};

	this.restore = function() {
		if (getEnv() === WL.Env.ADOBE_AIR) {
			var activeWindows = air.NativeApplication.nativeApplication.openedWindows;
			for (var i = 0; i < activeWindows.length; i++) {
				if (getAppProp(WL.AppProp.SHOW_IN_TASKBAR)) {
					activeWindows[i].restore();
				} else {
					activeWindows[i].activate();
				}
			}
			setMinimized(false);
			WL.Logger.debug("App restored");
		}
	};

	/**
	 * Reloads the application.
	 */
	this.reloadApp = function() {
		document.location.reload();
	};

	/**
	 * @ Use WL.Device.getNetworkInfo(callbackFunction) to check
	 *             connectivity. Look for isNetworkConnected in
	 *             callbackFunction's network info parameter.
	 */
	this.isConnected = function() {
		return !!_isConnected;
	};

	this.setHeartBeatInterval = function(newIntervalInSecs) {
		WL.Validators.validateArguments(['number'], arguments, 'WL.Client.setHeartBeatInterval');
		initOptions.heartBeatIntervalInSecs = newIntervalInSecs;

		if (heartBeatPeriodicalExecuter) {
			heartBeatPeriodicalExecuter.stop();
			heartBeatPeriodicalExecuter = null;
		}

		if (initOptions.heartBeatIntervalInSecs > 0) {
			heartBeatPeriodicalExecuter = new WLJSX.PeriodicalExecuter(sendHeartBeat, initOptions.heartBeatIntervalInSecs);
		}
	};

	/**
	 * Initiate the function that handles
	 * onGetCustomDeviceProvisioningProperties (gets custom device provisiong
	 * data, to send to the server before starting the provisioinig process).
	 *
	 * If the user addded his own implementation for
	 * onGetCustomDeviceProvisioningProperties, we call it, if not we call our
	 * own default. The user should add his function using the WL.Client.init's
	 * options.
	 */
	this.__getCustomDeviceProvisioningProperties = function(resumeDeviceProvisioningProcess) {
		return initOptions.onGetCustomDeviceProvisioningProperties(resumeDeviceProvisioningProcess);
	};

	/**
	 * Initiate the function that handles onGetCustomDeviceProperties (gets
	 * custom properties to send with the device auth payload) If the user
	 * addded his own implementation for onGetCustomDeviceProperties, we call
	 * it, if not we call our own default. The user adds his function using the
	 * WL.Client.init's options.
	 */
	this.__getCustomDeviceProperties = function(resumeDeviceAuthProcess) {
		return initOptions.onGetCustomDeviceProperties(resumeDeviceAuthProcess);
	};

	/**
	 * add data to the global headers. these headers will be sent on each WL
	 * sendRequest
	 */
	this.addGlobalHeader = function(name, value) {
		this.__globalHeaders[name] = value;
            
        if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
            var headerObj = {
                headerName : name,
                headerValue : value
            };

            cordova.exec(null, null, "WLNativeXHRPlugin", "addGlobalHeader", [headerObj]);
        } else if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_USER_PREF)) {
			WL.App.writeUserPref(name, value);
		}
	};

	this.removeGlobalHeader = function(name) {
            
        if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
            var headerObj = {
                headerName : name
            };
            cordova.exec(null, null, "WLNativeXHRPlugin", "removeGlobalHeader", [headerObj]);
        }
            
		delete this.__globalHeaders[name];
	};

    this.__getGlobalHeaders = function(onSuccess){
    	if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
    		if (typeof (onSuccess) === 'undefined') {
    			onSuccess = null;
    		}
    		cordova.exec(onSuccess, null, "WLNativeXHRPlugin", "getGlobalHeaders", []);
    	}
    	
		return this.__globalHeaders;
	};
	
	function isWl403HandleChallenge(response) {
		var env = WL.Client.getEnvironment();
		var previewEnv = WL.StaticAppProps.PREVIEW_ENVIRONMENT;

		var envsSupporting403 = [WL.Env.WINDOWS_PHONE_8, WL.Env.BLACKBERRY, WL.Env.BLACKBERRY10, WL.Env.MOBILE_WEB, WL.Env.DESKTOPBROWSER];

		if (-1 !== WLJQ.inArray(env, envsSupporting403) || (env === WL.Env.PREVIEW && -1 !== WLJQ.inArray(previewEnv, envsSupporting403))) {
			if (response.status == 403) {
				var challengesHeader = response.getHeader("WWW-Authenticate");
				if (( typeof challengesHeader !== "undefined") && (challengesHeader == "WL-Composite-Challenge")) {
					return true;
				}
			}
		}

		return false;
	};

	this.checkResponseForChallenges = function(wlRequest, response, responseForPostAnswersRealm) {
		var containsChallenges = false;

		// iterate over successes in json
		if (( typeof response.responseJSON !== "undefined") && (response.responseJSON != null) && (response.responseJSON["WL-Authentication-Success"] !== "undefined") && (response.responseJSON["WL-Authentication-Success"] != null)) {
			successes = response.responseJSON["WL-Authentication-Success"];
			handleSuccess(successes);
		}
		// check WL-Authentication-Success header
		var successHeader = response.getHeader("WL-Authentication-Success");
		if (( typeof successHeader !== "undefined") && (successHeader != null)) {
			handleSuccess(successHeader);
			response.setRequestHeader("WL-Authentication-Success", "");
		}

		if (WL.Client.isWl401(response) || isWl403HandleChallenge(response)) {
			var challengeRealms = response.responseJSON.challenges;
			wlRequest.setExpectedAnswers(challengeRealms);
			var realm = getDirectUpdateRealm(challengeRealms);
			if (realm) {
				executeChallenge(challengeRealms, realm);
			} else {
				for (realm in challengeRealms) {
					executeChallenge(challengeRealms, realm);
				}
			}
			containsChallenges = true;
		}
		// check if wl403
		else if (WL.Client.isWl403(response)) {
			var wlFailure = response.responseJSON["WL-Authentication-Failure"];
			isConnecting = false;
			// only one failure in this type of message
			for (var realm in wlFailure) {
				if (Object.prototype.hasOwnProperty.call(wlFailure, realm)) {
					handler = WL.Client.__chMap[realm];
					if (handler != null && typeof handler !== 'undefined') {
						handler.handleFailure(wlFailure[realm], wlRequest, response);
						handler.clearWaitingList();
					} else {
						var reason = wlFailure[realm].reason;
						// show Access denied dialog with diagnostics
						if ( typeof (reason) != 'undefined' && reason != null) {
							showDialog(WL.ClientMessages.error, WL.ClientMessages.accessDenied, true, true, response, reason);
						} else {
							showDialog(WL.ClientMessages.error, WL.ClientMessages.accessDenied, true, true, response);
						}
					}
				}
			}
			containsChallenges = true;
		}
		// handle non worklight responses
		else {
			for (var processorRealm in WL.Client.__chMap) {
				if (Object.prototype.hasOwnProperty.call(WL.Client.__chMap, processorRealm)) {
					var handler = WL.Client.__chMap[processorRealm];
					if (!handler.isWLHandler && handler.isCustomResponse(response)) {
						handler.startChallengeHandling(wlRequest, response);
						containsChallenges = true;
						break;
					}
				}
			}
		}
		// Handle successes
		function handleSuccess(successes) {
			for (var realm in successes) {
				if (Object.prototype.hasOwnProperty.call(successes, realm)) {
					// always add the identity to userInfo even if there is
					// no cp to handle it (like SingleIdentity)
					userInfo[realm] = successes[realm];
					var cp = WL.Client.__chMap[realm];
					if ( typeof cp !== "undefined") {
						if (cp.isWLHandler) {
							cp.processSuccess(successes[realm]);
							cp.releaseWaitingList();
						}
					}
				}
			}
		}



		/**
		 * Search for the direct update realm in an array of realms
		 * @param realms - an array of realms
		 * @returns the update realm if it found or null if it doesn't
		 */
		function getDirectUpdateRealm(realms) {

			for (var realm in realms) {
				if (realm == 'wl_directUpdateRealm') {
					return realm;
				} 
			}

			return null;
		}
		
		/**
		 * handle the challenge (execute it if everything is ok)
		 * @param challengeRealms - an array of realms that the given realm is part of
		 * @param realm - the realm of the challenge that needs to be execute
		 */
		function executeChallenge(challengeRealms,realm)
		{
			if (Object.prototype.hasOwnProperty
					.call(challengeRealms, realm)) {
				// get the correct challenge
				var handler = WL.Client.__chMap[realm];
				if (handler == null || typeof handler == 'undefined') {
					WL.Logger
							.error("unknown challenge arrived, cannot process realm "
									+ realm + " challenge.");
					WL.SimpleDialog.show(WL.ClientMessages.error,
							WL.ClientMessages.authFailure, [ {
								text : WL.ClientMessages.close
							} ]);
				} else {
					handler.startChallengeHandling(wlRequest,
							challengeRealms[realm]);
				}
			}
		}
		
		return containsChallenges;
	};

	function onForegroundCallback() {
		WL.Device.getNetworkInfo(callServerOnForeground);
	}

	/**
	 * @ignore
	 * check is a worklight 403 response
	 */
	this.isWl403 = function(response) {
		if (response.status == 403) {
			if (( typeof response.responseJSON !== "undefined") && (response.responseJSON != null) && response.responseJSON["WL-Authentication-Failure"]) {
				return true;
			}
		}
		return false;
	};

	/**
	 * @ignore
	 * check is a worklight 401 response
	 */
	this.isWl401 = function(response) {
		if (response.status == 401) {
			var challengesHeader = response.getHeader("WWW-Authenticate");
			if (( typeof challengesHeader !== "undefined") && (challengesHeader == "WL-Composite-Challenge")) {
				return true;
			}
		}
		return false;
	};

	/*
	 * When a message arrives from a postAnswerRequert ("authenticate") and it is a 401,403, we need to remove it from the waitinglist so there wont be any resend on it,
	 * because if has accepts in it, it will trigger the resend.
	 */
	this.removeFromWaitingListOnPostAnsweresWlReponse = function(response, wlRequest, responseForPostAnswersRealm) {
		if (this.isWl401(response) || this.isWl403(response) || isWl403HandleChallenge(response)) {
			//in case this is a wl response to a postAnswers Request, we need to take the original out of line
			handler = WL.Client.__chMap[responseForPostAnswersRealm];
			if ( typeof (handler) !== 'undefined') {
				handler.removeFromWaitingList(wlRequest);
			}
		}
	};

	// ChallengeHandler protocol start
	function AbstractChallengeHandler(realmName) {
		this.realm = realmName;
		this.isWLHandler = false;
		this.activeRequest = null;
		this.requestWaitingList = [];

		/**
		 * @ignore
		 * in case this is the first request that is associated with the
		 * challenge, set activeRequest and handleChallenge. If this is not the
		 * first request, we place it in a queue for handling once we finish
		 * handling the first request (just get the result).
		 */
		this.startChallengeHandling = function(wlRequest, obj) {
			WL.Client.__hideBusy();
			if (this.activeRequest == null) {
				this.activeRequest = wlRequest;
			} else if (WLJSX.Object.isUndefined(wlRequest.options.fromChallengeRequest)) {
				this.requestWaitingList.push(wlRequest);
				return;
			}

			this.handleChallenge(obj);

		};

		/**
		 * @ignore
		 * Must be implemented by developer.
		 *
		 * This method is responsible for actual challenge handling.
		 * It will be invoked by the Worklight framework in case isCustomResponse() API has
		 * returned true value
		 *
		 */
		this.handleChallenge = function(obj) {
		};

		/**
		 * @ignore
		 * In case of cancel we need to clear the waiting list of request,
		 * without further handling.
		 */
		this.clearWaitingList = function() {
			this.requestWaitingList = [];
		};

		/**
		 * @ignore
		 * When processing is successful (onSuccess) we assume the challenge is
		 * answered, and does need further handling so we remove the expected
		 * answer from the waiting list. Then we clear the waiting list.
		 */
		this.releaseWaitingList = function() {
			if (this.requestWaitingList.length > 0) {
				for (var i = 0; i < this.requestWaitingList.length; i++) {
					this.requestWaitingList[i].removeExpectedAnswer(this.realm);
				}
			}
			this.requestWaitingList = [];
		};

		/**
		 * @ignore
		 * This method is used to cancel the processing of the challenge
		 * Because this is a failure to authenticate, the original message will be discarded
		 * (i.e. will not be sent again, even if all other challenges are successfull)
		 */
		this.submitFailure = function(err) {
			if ( typeof (err) === 'string') {
				WL.Logger.error(err);
			}
			this.activeRequest = null;
			this.clearWaitingList();
		};

		this.moveToWaitingList = function(wlRequest) {
			this.requestWaitingList.push(wlRequest);
		};

		this.removeFromWaitingList = function(wlRequest) {
			for (var i = 0; i < this.requestWaitingList.length; i++) {
				if (this.requestWaitingList[i] === wlRequest) {
					spliced = this.requestWaitingList.splice(i - 1, 1);
					break;
				}
			}
		};

		WL.Client.__chMap[realmName] = this;
	}

	/**
	 * @ignore
	 * WL challenge processor will handle challenges from wl server (401, 403,
	 * and successes, and failures)
	 */
	this.createWLChallengeHandler = function(realmName) {
		// Creates SUPER challenge processor
		var challengeHandler = new AbstractChallengeHandler(realmName);
		challengeHandler.isWLHandler = true;

		challengeHandler.MAX_NUMBER_OF_FAILURES = 3;
		challengeHandler.numOfFailures = 0;

		// Extends it by adding new methods (can also override methods)
		challengeHandler.submitChallengeAnswer = function(answer) {
			if (( typeof answer === "undefined") || answer == null) {
				challengeHandler.activeRequest.removeExpectedAnswer(this.realm);
			} else {
				challengeHandler.activeRequest.submitAnswer(this.realm, answer);
			}
			// cp has done its job, now we can set the activRequest to null.
			challengeHandler.activeRequest = null;
		};

		// when a WL success arrives, this user method is called.
		challengeHandler.processSuccess = function(identity) {

		};

		// when a WL failure arrives, this user method is called.
		challengeHandler.handleFailure = function(err) {

		};

		// Returns it
		return challengeHandler;
	};

	/**
	 * @ignore
	 * abstract base class for deviceAuth
	 * provide helper methods for creating the basicJsonPayload that will be signed (or not) and sent to the server
	 * Important - If the user/app developer wants to write his own code to replace the payload, he must
	 * implement onDeviceAuthDataReady and do what he wants there (it will be called automatically after getDeviceAuthDataAsync
	 * by the system.
	 */
	this.createDeviceAuthChallengeHandler = function(realmName) {
		// Creates SUPER challenge processor
		var challengeHandler = WL.Client.createWLChallengeHandler(realmName);

		challengeHandler.getDeviceAuthDataAsync = function(deviceAuthSettings) {

            var deviceID = "";
            
			var assembleDeviceAuthData = function() {
				var appData = {
					id : WL.StaticAppProps.APP_ID,
					version : WL.StaticAppProps.APP_VERSION
				};

				var deviceData = {
					id : deviceID,
					os : device.version,
					model : device.model,
					environment : WL.StaticAppProps.ENVIRONMENT
				};

				var payload = {
					token : deviceAuthSettings.token,
					app : appData,
					device : deviceData,
					custom : {}
				};

				challengeHandler.onDeviceAuthDataReady(payload, deviceAuthSettings);
			};

			function deviceIDSuccessCallback(id) {
				if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8) {  
	            	//Device uuid changes and system generates different uuid's for different apps. 
	        		//For device SSO to work it should be same across apps and adapterid remains same for a device.
	            	deviceID = WL.Device.getHardwareIdentifier();
	            } else if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
	            	//Device uuid changes and system generates different uuid's for different apps.
	            	//For device SSO to work it should be unique and PublisherHostId is unique per device and per publisher.
	            	deviceID = id;
	            } else {
	            	deviceID = WL.Utils.getCordovaPluginResponseObject(id, "deviceUUID");
	            }
				assembleDeviceAuthData();
			};

			function deviceIDFailureCallback(error) {
				throw new RuntimeException(error);
			}

			if (WL.Client.getEnvironment() === WL.Environment.WINDOWS_PHONE_8) {
        		WL.Device.__getPublisherHostID(deviceIDSuccessCallback, deviceIDFailureCallback);
			} else {			
				if ( typeof (WL.DeviceAuth.__getDeviceUUID) !== 'undefined') {
					WL.DeviceAuth.__getDeviceUUID(deviceIDSuccessCallback, deviceIDFailureCallback);
				} else {
					assembleDeviceAuthData();
				}
			}
		};

        challengeHandler.onDeviceAuthDataReady = function(deviceDataJSON, deviceProvisioning){};

		// Returns it
		return challengeHandler;
	};

	/**
	 * @ignore
	 * abstract base class for provisioning
	 * provide helper methods for provisioning that uses the wl server for getting the certificate
	 */
	this.createProvisioningChallengeHandler = function(realmName) {
		// Creates SUPER challenge processor
		var challengeHandler = WL.Client.createDeviceAuthChallengeHandler(realmName);
        var provisioningEntity;

		/**
		 * @deprecated use createCustomCsr(challenge) instead
		 */
		challengeHandler.createJsonCsr = function(provisionEntity, realm, customPayload) {
		};

		challengeHandler.createCustomCsr = function(challenge) {
		};

		challengeHandler.isCertificateChallengeResponse = function(challenge) {
			if (!WLJSX.Object.isUndefined(challenge.certificate)) {
				return true;
			}
			return false;
		};

		/**
		 * @deprecated use submitCustomCsr(csr, challenge) instead
		 */
		challengeHandler.onCsrDataReady = function(csrJson, provisionEntity) {
			WL.DeviceAuth.signCsr(csrJson, provisionEntity, function(result) {
				result = WL.Utils.getCordovaPluginResponseObject(result, "csrHeader");
				var answer = {
					CSR : result
				};

				challengeHandler.submitChallengeAnswer(answer);
			}, function(err) {
				WL.DiagnosticDialog.showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.deviceAuthenticationFail, false, true, {}, err);
			});
		};

		challengeHandler.submitCustomCsr = function(csrJson, challenge) {
			if (challenge.entity == 'application') {
				csrJson.applicationId = WL.StaticAppProps.APP_ID;
			} else if (challenge.entity.indexOf("group:") == 0) {
				csrJson.groupId = challenge.entity.substr(6);
			}
			csrJson.token = challenge.token;

			if (csrJson.deviceId == undefined) {
				csrJson.deviceId = device.uuid;
			}
			WL.DeviceAuth.signCsr(csrJson, challenge.entity, function(result) {
				result = WL.Utils.getCordovaPluginResponseObject(result, "csrHeader");
				var answer = {
					CSR : result
				};

				challengeHandler.submitChallengeAnswer(answer);
			}, function(err) {
				WL.DiagnosticDialog.showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.deviceAuthenticationFail, false, true, {}, err);
			});
		};

		/**
		 * @ignore
		 * Needs to be implemented by the user
		 * Invoked, when it is determined that this handler should handle the incoming the message.
		 * Does the actual handler work, to handle the response.
		 *
		 * @param challenge the challenge to handle
		 */
		challengeHandler.handleChallenge = function(challenge) {
			WL.DeviceAuth.init(function() {
				initCallback();
			});

			provisioningEntity = challenge.ID.entity;

			function initCallback(result) {
				if (challengeHandler.isCertificateChallengeResponse(challenge)) {
					WL.DeviceAuth.saveCertificate(
					//success callback
					function() {
						var deviceAuthSettings = {
							token : challenge.ID.token,
							isProvisioningEnabled : true,
							provisioningEntity : challenge.ID.entity
						};
						challengeHandler.getDeviceAuthDataAsync(deviceAuthSettings);
					},
					//failure callback
					function(err) {
						WL.DiagnosticDialog.showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.saveCertificateFailure, false, true, {}, err);
					}, challenge.ID.entity, challenge.certificate, challengeHandler.realm);
					//handle save certificate
				} else {
					//handler device auth
					WL.DeviceAuth.__isCertificateExists(challenge.ID.entity,
					// success callback
					function(result) {
						var isCertificateExists = WL.Utils.getCordovaPluginResponseObject(result, "isCertificateExists");
						isCertificateExists = ("true" == isCertificateExists);
						if (isCertificateExists) {
							var deviceAuthSettings = {
								token : challenge.ID.token,
								isProvisioningEnabled : true,
								provisioningEntity : challenge.ID.entity
							};
							challengeHandler.getDeviceAuthDataAsync(deviceAuthSettings);
						} else {
							shouldStartProvisioning();
						};
					},
					// failure callback
					function() {
						WL.DiagnosticDialog.showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.deviceAuthenticationFail, false, true, challenge);
					});

					function shouldStartProvisioning() {
						if (!challenge.ID.allowed) {
							//submiting an empty answer so it will resend, and then get the 401 again, hopefully is allowed
							challengeHandler.submitChallengeAnswer();
						} else {
							if (challengeHandler.createCustomCsr != undefined) {
								challengeHandler.createCustomCsr(challenge.ID);
							} else {
								WL.Logger.warn("Function createJsonCsr() is deprecated. Use createCustomCsr() instead.");
								challengeHandler.createJsonCsr(challenge.ID.entity, challengeHandler.realm, {token:challenge.ID.token});
							}
						}
					}

				}
			}

		};

		challengeHandler.onDeviceAuthDataReady = function(deviceDataJSON, deviceProvisioning) {
			WL.DeviceAuth.signDeviceAuth(function(result) {
				result = WL.Utils.getCordovaPluginResponseObject(result, "jwsHeader");
				var answer = {
					ID : result
				};

				challengeHandler.submitChallengeAnswer(answer);
			}, function(err) {
				//TODO: what is the acceptible error here:
				WL.DiagnosticDialog.showDialog(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.deviceAuthenticationFail, false, true, {}, err);
			}, deviceDataJSON, deviceProvisioning.provisioningEntity, deviceProvisioning.isProvisioningEnabled);
		};

	        challengeHandler.clearDeviceProvisioningCertificate = function() {
	        	WL.DeviceAuth.__clearDeviceCertificate(provisioningEntity);
	        }
	       
		challengeHandler.handleFailure = function(err, request, response) {
			if (err.reason == "bad token") {
				if (challengeHandler.numOfFailures < challengeHandler.MAX_NUMBER_OF_FAILURES) {
					challengeHandler.numOfFailures++;
					request.sendRequest();
				} else {
					request.onFailure(response);
				}
			}
	        	//delete certificate by provisioningEntity
	        	else {
	        		challengeHandler.clearDeviceProvisioningCertificate();
	        		request.onFailure(response);
	        	}	        	
		};

		// Returns it
		return challengeHandler;
	};

	/**
	 * @ignore
	 * This method creates a new challenge handler instance responsible for a specified realm.
	 * In order for it to function developer must implement the following mandatory methods,
	 * as described in IBM Worklight InfoCenter.
	 *
	 * isCustomResponse()
	 * handleChallenge()
	 */
	this.createChallengeHandler = function(realmName) {
		// Creates abstract challenge handler
		var challengeHandler = new AbstractChallengeHandler(realmName);
		challengeHandler.isWLHandler = false;

		// Extends it by adding new methods (can also override methods)

		/**
		 * User calls this function when the the challange was handled successfully.
		 * When a success is submitted, the state of successes is checked for all chalanges issued per original request.
		 * What this means is that, if all challenges are succesfully met, the original message would be resent automagically.
		 */
		challengeHandler.submitSuccess = function() {
			// ch has done its job, now we can set the activRequest to null.
			challengeHandler.activeRequest.removeExpectedAnswer(this.realm);
			challengeHandler.activeRequest = null;
			challengeHandler.releaseWaitingList();

		};

		/**
		 * Must be implemented by developer.
		 *
		 * This method will be invoked by the Worklight framework for every server response.
		 * It is responsible to detect whether server response contains data
		 * that should be processed by this challenge handler.
		 */
		challengeHandler.isCustomResponse = function(transport) {
			return false;
		};

		/**
		 * This method should be used in a challenge handler to submit authentication of a form, in case of form
		 * based authentication.
		 */
		challengeHandler.submitLoginForm = function(reqURL, options, submitLoginFormCallback) {
			var timer = null;

			WL.Logger.debug("Request [login]");

			function onUnresponsiveHost(transport) {
				if (isTimeout()) {
					return;
				}
				cancelTimer();

				WLJSX.Ajax.WLRequest.setConnected(false);
				submitLoginFormCallback(transport);
			}

			function onLoginFormResponse(transport) {
				if (isTimeout()) {
					return;
				}
				cancelTimer();
				submitLoginFormCallback(transport);
			}

			setTimer(WLJSX.Ajax.WLRequest.options.timeout);

			var requestHeaders = WL.CookieManager.createCookieHeaders();
			requestHeaders['x-wl-app-version'] = WL.StaticAppProps.APP_VERSION;
            if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
				// should be removed when all environments will work via native
            	requestHeaders['x-wl-device-id'] = WL.Client.__getGlobalHeaders()['x-wl-device-id'];
            }

			// add headers
			if (options && options.headers) {
				var headers = options.headers;
				if (( typeof headers != "undefined") && (headers != null)) {
					for (var headerName in headers) {
						if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
							requestHeaders[headerName] = headers[headerName];
						}
					}
				}
			}

			var reqOptions = {
				method : 'post',
				onSuccess : onLoginFormResponse,
				onFailure : onLoginFormResponse,
				// Unresponsive host: Some desktops treat as success if not
				// defined explicitly.
				on0 : onUnresponsiveHost.bind(this),
				requestHeaders : requestHeaders
			};

			if (WL.StaticAppProps.ENVIRONMENT === WL.Environment.ADOBE_AIR) {
				reqOptions.postBody = WLJSX.Object.toQueryString(options.parameters);
			} else {
				reqOptions.parameters = options.parameters;
			}

			var finalUrl = null;

			if (reqURL.indexOf("http") == 0 && reqURL.indexOf(':') > 0) {
				finalUrl = reqURL;
			} else {
				finalUrl = WL.Utils.createAPIRequestURL(reqURL);
			}

			var ajaxRequest = new WLJSX.Ajax.Request(finalUrl, reqOptions);

			function setTimer(timeout) {
				if (timer !== null) {
					window.clearTimeout(timer);
				}
				timer = window.setTimeout(onTimeout, timeout);
			}

			function onTimeout() {
				timer = null;
				ajaxRequest.transport.abort();

				var transport = {};
				transport.responseJSON = {
					errorCode : WL.ErrorCode.REQUEST_TIMEOUT,
					errorMsg : WL.ClientMessages.requestTimeout
				};
				submitLoginFormCallback(transport);
			}

			function cancelTimer() {
				if (timer !== null) {
					window.clearTimeout(timer);
					timer = null;
				}
			}

			function isTimeout() {
				return (timer === null);
			}

		};

		/**
		 * This method should be used in a challenge handler to submit authentication to adapter procedure in case of Adapter
		 * authentication.
		 */
		challengeHandler.submitAdapterAuthentication = function(invocationData, options) {
			if ( typeof (options) === 'undefined' || options == null) {
				options = {};
			}
			options.fromChallengeRequest = true;
			WL.Client.invokeProcedure(invocationData, options, true);
		};

		// Returns it
		return challengeHandler;
	};

    /**
	 * Check if the user added a default handler for OnRemoteDisableDenial and
	 * if so, activate it. If not then call the defaultRemoteDisableDenial.
	 */
	this.__handleOnRemoteDisableDenial = function(defaultonErrorRemoteDisableDenial, that, msg, downloadLink) {
		// Hide the splash screen in case autoHideSplash init option is true (for Android and iOS)
        autoHideSplashScreen();
        
		WL.Client.__hideBusy();
		isConnecting = false;

		if (initOptions.onErrorRemoteDisableDenial) {
			initOptions.onErrorRemoteDisableDenial(msg, downloadLink);
		} else if (initOptions.onErrorAppVersionAccessDenial) {
			WL.Logger.debug("Initialization option onErrorAppVersionAccessDenial is deprecated, use onErrorRemoteDisableDenial instead.");
			initOptions.onErrorAppVersionAccessDenial();
		} else {
			defaultonErrorRemoteDisableDenial(that, msg, downloadLink);
		}
	};

	this.getUsername = function() {
		var username = null;
		switch (WL.Client.getEnvironment()) {
			case WL.Env.IPHONE:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
			case WL.Env.IPAD:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
			case WL.Env.ANDROID:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
			case WL.Env.BLACKBERRY:
				if ( typeof localStorage !== "undefined") {
					username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				} else {
					username = __WL.blackBerryPersister.read(WL.UserInfo.USER_NAME);
				}
				break;
		}
		return username;
	};

	this.__getScreenHeight = function() {
		if ( typeof __androidScreenSize == 'undefined') {
			return null;
		}
		return __androidScreenSize.height;
	};

	this.__getScreenWidth = function() {
		if ( typeof __androidScreenSize == 'undefined') {
			return null;
		}
		return __androidScreenSize.width;
	};

	// New interface for notifying native code when JS init is complete (Initially implemented only for Android)
    this.__onWlInitComplete = function() {};

	/**
	 * @private
	 * Returns an non mutable object with some information about the state of the app (e.g. if FIPS is configured to be enabled or disabled)
	 * */
	this.__state = function() {

		// Note that we do not check the state of FIPS enabled/disabled in the FIPSHttpImpl because it can be in an
		// indeterminate state until the WL/FIPS/Ready event is fired.
		var state = {
			enableFIPS : ( typeof initOptions.enableFIPS === 'boolean' ? (initOptions.enableFIPS && typeof WL._FIPSHttpImpl === 'object') : false)
		};

		return WL_.cloneDeep(state);
	};

	// WL AccessToken retrieval APIs start

	var WL_DEFAULT_ACCESS_TOKEN_SCOPE = "wl-default-scope";
	var WL_ACCESS_TOKEN_TYPE = 'Bearer';
	var wlAccessTokens = {}; // existing tokens map
	var wlLastAccessToken = null;

	/**
	 * Gets the status code and WWW-Authenticate header of a failure response from a resource server
	 * and determines whether an access token was requested. returns the scope if a token is required
	 * or null if the response is not access-token related.
	 */
	this.getRequiredAccessTokenScope = function(status, headerValue) {
		if (status != 401 && status != 403){
			return null;
		}
		
		var headerAttributes = parseAuthenticationHeader(headerValue);
		
		if (!headerAttributes || !headerAttributes.scope){
			return null;
		}
		
		var scope = headerAttributes.scope;
		
		return scope;
	}
	
	/**
	 * Obtains an access token for the requested scope. This token is required in order 
	 * to send a request to an external server protected by Worklight Resource Server Filter.
	 * If the client is not already authenticated in all the realms defined by the scope, 
	 * calling this method will trigger an authentication sequence for the missing realms. 
	 **/
	this.obtainAccessToken = function(scope, onSuccess, onFailure){
		var tokenScope = scope || WL_DEFAULT_ACCESS_TOKEN_SCOPE;
		
		var successCallback = onSuccess;
		var failureCallback = onFailure;
				
		var params = {
				timeout: WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS || 30*1000,
				grant_type: 'client_credentials',
				scope: tokenScope
			};
		
		var WL_APPNAME = WL.Client.getAppProperty(WL.AppProperty.APP_DISPLAY_NAME);
		var WL_ENV = getEnvironmentForServerRequest();

		var headerValue = {
			'wl-oauth-client' : "WLapp " + [WL_APPNAME, WL_ENV].join(":")
		};
		
		new WLJSX.Ajax.WLRequest(REQ_PATH_WL_TOKEN, {
			method: 'POST',
			optionalHeaders: headerValue,
			onSuccess : onGetTokenSuccess.bind(this, scope),
			onFailure : onGetTokenFailure.bind(this),
			parameters: params
		});
		
		function onGetTokenSuccess(scope, transport){
			
			if (	transport && 
					transport.responseJSON && 
					transport.responseJSON.token_type &&
					transport.responseJSON.access_token)
			{
		    	var tokenString = transport.responseJSON.access_token;
		    	wlAccessTokens[scope] = tokenString;   	
		    	wlLastAccessToken = tokenString;
		    	successCallback(new WL.Response(transport, null));
			} else {
				WL.Logger.error("WL.Client.obtainAccessToken() failed to parse server response");
				failureCallback(new WL.FailResponse(transport, null));
			} 
		}
		
		function onGetTokenFailure(transport){
			failureCallback(new WL.FailResponse(transport, null));
		}
	}
	
	/**
	 * Gets the last obtained access token for the requested scope.
	 * If no scope is given, gets the last obtained token.
	 */
	this.getLastAccessToken = function(scope){
		if (!scope){
			return wlLastAccessToken;
		}
		
		return wlAccessTokens[scope];
	}
	
	/**
	 * Parse the authentication header of a response from a resource server 
	 */
	function parseAuthenticationHeader(header) {
		var typeAndAttributes = header.split(' ');
				
		if (typeAndAttributes[0] != WL_ACCESS_TOKEN_TYPE) {
			return null;
		}
		
		var attributes = header.substr(typeAndAttributes[0].length + 1).split(',');
		
		var res = {};
		
		for (var i = 0; i < attributes.length; i++) {
			var pair = attributes[i].split('=');
			
			var attrName = pair[0];
			var attrValue = pair[1].replace(/\"/g, "");
			
			res[attrName] = attrValue; 
		}
		
		return res;
	}	

	
	// WL AccessToken retrieval APIs end
	

  /**
  * To share key/value pair among applications participating in WL's "group support"
  * In 6.2, expected parameter is {key: 'key1'}.  Future versions may take an encryption key.
  */
  this.setSharedToken = function(obj) {
      var dfd = $.Deferred();

      obj = obj || {};
      var key = obj.key;
      var value = obj.value;

      if (typeof key !== 'undefined') {
        if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
             || (WL.Client.getEnvironment() === WL.Env.IPAD)
             || (WL.Client.getEnvironment() === WL.Env.ANDROID))
             && (typeof cordova === 'object')) {
         setTimeout(function () {
           cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'setSharedToken', [key, value]);
         }, 0);
       }
     } else {
       setTimeout(dfd.resolve, 0);
     }

     return dfd.promise();
  };

  /**
  * To retrieve value for key from among applications participating in WL's "group support"
  * In 6.2, expected parameter is {key: 'key1'}.  Future versions may take an decryption key.
  */
  this.getSharedToken = function(obj) {
      var dfd = $.Deferred();

      obj = obj || {};
      var key = obj.key || '';

      if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
            || (WL.Client.getEnvironment() === WL.Env.IPAD)
            || (WL.Client.getEnvironment() === WL.Env.ANDROID))
            && (typeof cordova === 'object')) {
        setTimeout(function () {
          cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'getSharedToken', [key]);
        }, 0);
      } else {
        setTimeout(dfd.resolve, 0);
      }

      return dfd.promise();
  };

  /**
  * To clear value for key from among applications participating in WL's "group support"
  * In 6.2, expected parameter is {key: 'key1'}.
  */
  this.clearSharedToken = function(obj) {
      var dfd = $.Deferred();

      obj = obj || {};
      var key = obj.key || '';

      if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
            || (WL.Client.getEnvironment() === WL.Env.IPAD)
            || (WL.Client.getEnvironment() === WL.Env.ANDROID))
            && (typeof cordova === 'object')) {
        setTimeout(function () {
          cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'clearSharedToken', [key]);
        }, 0);
      } else {
        setTimeout(dfd.resolve, 0);
      }

      return dfd.promise();
  };

};

__WL.prototype.Client = new __WLClient;
WL.Client = new __WLClient;


/**
 * ================================================================= 
 * Source file taken from :: antiXSRFChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// Creating a new challengeProcessor
var wl_antiXSRFChallengeHandler = WL.Client.createWLChallengeHandler("wl_antiXSRFRealm");
wl_antiXSRFChallengeHandler.handleChallenge = function(obj) {
    WL.Client.addGlobalHeader("WL-Instance-Id", obj["WL-Instance-Id"]);
    this.submitChallengeAnswer();
};

/**
 * ================================================================= 
 * Source file taken from :: remoteDisableChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var wl_remoteDisableChallengeHandler = WL.Client.createWLChallengeHandler("wl_remoteDisableRealm");

wl_remoteDisableChallengeHandler.handleChallenge = function(obj) {

	// get new message params
	var message = obj.message;
    var messageId = obj.messageId; 
    var messageType = obj.messageType;
   
    // get value of previously stored message id
	var storedMessageId = __WL.LocalStorage.getValue(WL.Client.getMessageID());
	
	if (isDisplayMessageDialogue(storedMessageId, messageId, messageType))
	{
		  WL.SimpleDialog.show(WL.ClientMessages.notificationTitle, message, [ {
		        text : WL.ClientMessages.close,
		        handler : function() {
		        	wl_remoteDisableChallengeHandler.submitChallengeAnswer(messageId);
		        }
		    } ]);
		
		// keep the message id in the local storage
		__WL.LocalStorage.setValue(WL.Client.getMessageID(), messageId);
	}
	else
	{
		// don't show dialogue
		wl_remoteDisableChallengeHandler.submitChallengeAnswer(messageId);
	}
};


/**
 * determine whether or not to display message dialogue 
 * @param storedMessageId
 * @param messageId
 * @param messageType
 * @returns {Boolean}
 */
function isDisplayMessageDialogue(storedMessageId,messageId, messageType)
{
	// restrictions apply only to notify messages 
	if (messageType != "NOTIFY")
	{
		return true;
	}

	// display only new messages - the first time they are received 
	if (typeof storedMessageId == "undefined" || storedMessageId != messageId)
	{
		return true;
	}
	else
	{
		return false;
	}	
}

function getEnv() {
    return WL.StaticAppProps.ENVIRONMENT;
}

wl_remoteDisableChallengeHandler.__generateDialogueButtons = function(downloadLink)
{
	// start with an empty array 
	var buttons = [];
	
	// show close button in two cases:
	// 1) its the only button (no download link)
	// 2) the flag to show it is on 
	if (!downloadLink || WL.Client.isShowCloseButtonOnRemoteDisable())
	{
		buttons = [ {
	         text : WL.ClientMessages.close,
	         handler : function() {
	         }
	     } ];
	}
	
	// add download link if necessary 
	if (downloadLink) {
            buttons.push({
                text : WL.ClientMessages.upgrade,
                handler : function() {
                    // Note you must add the null options to openURL
                    // otherwise the event is assumed the 3rd argument.
                    WL.App.openURL(downloadLink, "_new", null);
                }
            });
        }
			
	return buttons;
}


wl_remoteDisableChallengeHandler.handleFailure = function(err) {
	var message;
	
	if (typeof err == "undefined" || err == null)
	{
		message = "unknown error occurred."
	    WL.Logger.debug(">>> wl_remoteDisableChallengeHandler.handleFailure invoked with a missing err argument");
	}
	else if(err.message) {
    	message = err.message;
    } else if (err.reason) {
    	message = err.reason;
    } else {
    	WL.Logger.debug(">>> wl_remoteDisableChallengeHandler.handleFailure invoked with unexpected err format: " + JSON.stringify(err, null, 4));
    	message = "unknown error occurred."
    };
    var downloadLink = err.downloadLink;

    /*
     * Processor default handler for failure (display message and close App).
     */
    function defaultRemoteDisableDenialHandler(that,msg,downloadLink) {
    		
        var buttons = that.__generateDialogueButtons(downloadLink);

        // Patch - downloadNewVersion element is added in the msg string.
        WL.SimpleDialog.show(WL.ClientMessages.applicationDenied, msg, buttons);
    }

    WL.Client.__handleOnRemoteDisableDenial(defaultRemoteDisableDenialHandler,this, message, downloadLink);
};


/**
 * ================================================================= 
 * Source file taken from :: encryptedcache.js
 * ================================================================= 
 */

/*Wrapped by closure compiler to prevent namespace
                  pollution*/
                  (function(){/*

 Licensed Materials - Property of IBM
 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or
 disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/
var myMathRandom=Math.random,myMathFloor=Math.floor,myMathCeil=Math.ceil,myStringFromCharCode=String.fromCharCode,myDecodeURIComponent=decodeURIComponent,myEncodeURIComponent=encodeURIComponent,myUnescape=unescape,myEscape=escape,api={open:"open",close:"close",changeCredentials:"changeCredentials",destroy:"destroy",read:"read",write:"write",remove:"remove",secureRandom:"secureRandom",random:"random",keygen:"keygen"};
function a2h(a){var c="",b;for(b=0;b<a.length;b++)c+=(16>a[b]?"0":"")+a[b].toString(16);return c}function h2a(a){var c=[];a.replace(/(..)/g,function(a){c.push(parseInt(a,16))});return c}function s2a(a){var c=[],b;for(b=0;b<a.length;b++)c[b]=a.charCodeAt(b);return c}function enc_utf8(a){try{return myUnescape(myEncodeURIComponent(a))}catch(c){throw c;}}function dec_utf8(a){try{return myDecodeURIComponent(myEscape(a))}catch(c){throw c;}}
function MD5(a){function c(a,d){var b,c,e,g,f;e=a&2147483648;g=d&2147483648;b=a&1073741824;c=d&1073741824;f=(a&1073741823)+(d&1073741823);return b&c?f^2147483648^e^g:b|c?f&1073741824?f^3221225472^e^g:f^1073741824^e^g:f^e^g}function b(a,d,b,e,g,f,h){a=c(a,c(c(d&b|~d&e,g),h));return c(a<<f|a>>>32-f,d)}function e(a,d,b,e,g,f,h){a=c(a,c(c(d&e|b&~e,g),h));return c(a<<f|a>>>32-f,d)}function g(a,d,b,e,f,g,h){a=c(a,c(c(d^b^e,f),h));return c(a<<g|a>>>32-g,d)}function l(a,d,b,e,g,f,h){a=c(a,c(c(b^(d|~e),g),
h));return c(a<<f|a>>>32-f,d)}function k(a){var d,b,e=[];for(b=0;3>=b;b++)d=a>>>8*b&255,e=e.concat(d);return e}var d=[],m,o,p,q,f,i,h,j,d=function(a){var d,b=a.length;d=b+8;for(var e=16*((d-d%64)/64+1),c=[],f=0,g=0;g<b;)d=(g-g%4)/4,f=8*(g%4),c[d]|=a[g]<<f,g++;d=(g-g%4)/4;c[d]|=128<<8*(g%4);c[e-2]=b<<3;c[e-1]=b>>>29;return c}(a);f=1732584193;i=4023233417;h=2562383102;j=271733878;for(a=0;a<d.length;a+=16)m=f,o=i,p=h,q=j,f=b(f,i,h,j,d[a+0],7,3614090360),j=b(j,f,i,h,d[a+1],12,3905402710),h=b(h,j,f,i,
d[a+2],17,606105819),i=b(i,h,j,f,d[a+3],22,3250441966),f=b(f,i,h,j,d[a+4],7,4118548399),j=b(j,f,i,h,d[a+5],12,1200080426),h=b(h,j,f,i,d[a+6],17,2821735955),i=b(i,h,j,f,d[a+7],22,4249261313),f=b(f,i,h,j,d[a+8],7,1770035416),j=b(j,f,i,h,d[a+9],12,2336552879),h=b(h,j,f,i,d[a+10],17,4294925233),i=b(i,h,j,f,d[a+11],22,2304563134),f=b(f,i,h,j,d[a+12],7,1804603682),j=b(j,f,i,h,d[a+13],12,4254626195),h=b(h,j,f,i,d[a+14],17,2792965006),i=b(i,h,j,f,d[a+15],22,1236535329),f=e(f,i,h,j,d[a+1],5,4129170786),j=
e(j,f,i,h,d[a+6],9,3225465664),h=e(h,j,f,i,d[a+11],14,643717713),i=e(i,h,j,f,d[a+0],20,3921069994),f=e(f,i,h,j,d[a+5],5,3593408605),j=e(j,f,i,h,d[a+10],9,38016083),h=e(h,j,f,i,d[a+15],14,3634488961),i=e(i,h,j,f,d[a+4],20,3889429448),f=e(f,i,h,j,d[a+9],5,568446438),j=e(j,f,i,h,d[a+14],9,3275163606),h=e(h,j,f,i,d[a+3],14,4107603335),i=e(i,h,j,f,d[a+8],20,1163531501),f=e(f,i,h,j,d[a+13],5,2850285829),j=e(j,f,i,h,d[a+2],9,4243563512),h=e(h,j,f,i,d[a+7],14,1735328473),i=e(i,h,j,f,d[a+12],20,2368359562),
f=g(f,i,h,j,d[a+5],4,4294588738),j=g(j,f,i,h,d[a+8],11,2272392833),h=g(h,j,f,i,d[a+11],16,1839030562),i=g(i,h,j,f,d[a+14],23,4259657740),f=g(f,i,h,j,d[a+1],4,2763975236),j=g(j,f,i,h,d[a+4],11,1272893353),h=g(h,j,f,i,d[a+7],16,4139469664),i=g(i,h,j,f,d[a+10],23,3200236656),f=g(f,i,h,j,d[a+13],4,681279174),j=g(j,f,i,h,d[a+0],11,3936430074),h=g(h,j,f,i,d[a+3],16,3572445317),i=g(i,h,j,f,d[a+6],23,76029189),f=g(f,i,h,j,d[a+9],4,3654602809),j=g(j,f,i,h,d[a+12],11,3873151461),h=g(h,j,f,i,d[a+15],16,530742520),
i=g(i,h,j,f,d[a+2],23,3299628645),f=l(f,i,h,j,d[a+0],6,4096336452),j=l(j,f,i,h,d[a+7],10,1126891415),h=l(h,j,f,i,d[a+14],15,2878612391),i=l(i,h,j,f,d[a+5],21,4237533241),f=l(f,i,h,j,d[a+12],6,1700485571),j=l(j,f,i,h,d[a+3],10,2399980690),h=l(h,j,f,i,d[a+10],15,4293915773),i=l(i,h,j,f,d[a+1],21,2240044497),f=l(f,i,h,j,d[a+8],6,1873313359),j=l(j,f,i,h,d[a+15],10,4264355552),h=l(h,j,f,i,d[a+6],15,2734768916),i=l(i,h,j,f,d[a+13],21,1309151649),f=l(f,i,h,j,d[a+4],6,4149444226),j=l(j,f,i,h,d[a+11],10,3174756917),
h=l(h,j,f,i,d[a+2],15,718787259),i=l(i,h,j,f,d[a+9],21,3951481745),f=c(f,m),i=c(i,o),h=c(h,p),j=c(j,q);return k(f).concat(k(i),k(h),k(j))}var hexcase=0,b64pad="",chrsz=8;function hex_sha1(a){return binb2hex(core_sha1(str2binb(a),a.length*chrsz))}function b64_sha1(a){return binb2b64(core_sha1(str2binb(a),a.length*chrsz))}function str_sha1(a){return binb2str(core_sha1(str2binb(a),a.length*chrsz))}function hex_hmac_sha1(a,c){return binb2hex(core_hmac_sha1(a,c))}
function b64_hmac_sha1(a,c){return binb2b64(core_hmac_sha1(a,c))}function str_hmac_sha1(a,c){return binb2str(core_hmac_sha1(a,c))}
function core_sha1(a,c){a[c>>5]|=128<<24-c%32;a[(c+64>>9<<4)+15]=c;for(var b=Array(80),e=1732584193,g=-271733879,l=-1732584194,k=271733878,d=-1009589776,m=0;m<a.length;m+=16){for(var o=e,p=g,q=l,f=k,i=d,h=0;80>h;h++){b[h]=16>h?a[m+h]:rol(b[h-3]^b[h-8]^b[h-14]^b[h-16],1);var j=safe_add(safe_add(rol(e,5),sha1_ft(h,g,l,k)),safe_add(safe_add(d,b[h]),sha1_kt(h))),d=k,k=l,l=rol(g,30),g=e,e=j}e=safe_add(e,o);g=safe_add(g,p);l=safe_add(l,q);k=safe_add(k,f);d=safe_add(d,i)}return[e,g,l,k,d]}
function sha1_ft(a,c,b,e){return 20>a?c&b|~c&e:40>a?c^b^e:60>a?c&b|c&e|b&e:c^b^e}function sha1_kt(a){return 20>a?1518500249:40>a?1859775393:60>a?-1894007588:-899497514}function core_hmac_sha1(a,c){var b=str2binb(a);16<b.length&&(b=core_sha1(b,a.length*chrsz));for(var e=Array(16),g=Array(16),l=0;16>l;l++)e[l]=b[l]^909522486,g[l]=b[l]^1549556828;b=core_sha1(e.concat(str2binb(c)),512+c.length*chrsz);return core_sha1(g.concat(b),672)}
function safe_add(a,c){var b=(a&65535)+(c&65535);return(a>>16)+(c>>16)+(b>>16)<<16|b&65535}function rol(a,c){return a<<c|a>>>32-c}function str2binb(a){for(var c=[],b=(1<<chrsz)-1,e=0;e<a.length*chrsz;e+=chrsz)c[e>>5]|=(a.charCodeAt(e/chrsz)&b)<<32-chrsz-e%32;return c}function binb2str(a){for(var c="",b=(1<<chrsz)-1,e=0;e<32*a.length;e+=chrsz)c+=myStringFromCharCode(a[e>>5]>>>32-chrsz-e%32&b);return c}
function binb2hex(a){for(var c=hexcase?"0123456789ABCDEF":"0123456789abcdef",b="",e=0;e<4*a.length;e++)b+=c.charAt(a[e>>2]>>8*(3-e%4)+4&15)+c.charAt(a[e>>2]>>8*(3-e%4)&15);return b}function binb2b64(a){for(var c="",b=0;b<4*a.length;b+=3)for(var e=(a[b>>2]>>8*(3-b%4)&255)<<16|(a[b+1>>2]>>8*(3-(b+1)%4)&255)<<8|a[b+2>>2]>>8*(3-(b+2)%4)&255,g=0;4>g;g++)c=8*b+6*g>32*a.length?c+b64pad:c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>6*(3-g)&63);return c}
function SHA256(a){function c(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function b(a,b){return a>>>b|a<<32-b}a=function(a){for(var a=a.replace(/\r\n/g,"\n"),b="",c=0;c<a.length;c++){var k=a.charCodeAt(c);128>k?b+=myStringFromCharCode(k):(127<k&&2048>k?b+=myStringFromCharCode(k>>6|192):(b+=myStringFromCharCode(k>>12|224),b+=myStringFromCharCode(k>>6&63|128)),b+=myStringFromCharCode(k&63|128))}return b}(a);return function(a){for(var b="",c=0;c<4*a.length;c++)b+="0123456789abcdef".charAt(a[c>>
2]>>8*(3-c%4)+4&15)+"0123456789abcdef".charAt(a[c>>2]>>8*(3-c%4)&15);return b}(function(a,g){var l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,
2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],k=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],d=Array(64),m,o,p,q,f,i,h,j,r,n,s,t;a[g>>5]|=128<<24-g%32;a[(g+64>>9<<4)+15]=g;for(r=0;r<a.length;r+=16){m=k[0];o=k[1];p=k[2];q=k[3];
f=k[4];i=k[5];h=k[6];j=k[7];for(n=0;64>n;n++)d[n]=16>n?a[n+r]:c(c(c(b(d[n-2],17)^b(d[n-2],19)^d[n-2]>>>10,d[n-7]),b(d[n-15],7)^b(d[n-15],18)^d[n-15]>>>3),d[n-16]),s=c(c(c(c(j,b(f,6)^b(f,11)^b(f,25)),f&i^~f&h),l[n]),d[n]),t=c(b(m,2)^b(m,13)^b(m,22),m&o^m&p^o&p),j=h,h=i,i=f,f=c(q,s),q=p,p=o,o=m,m=c(s,t);k[0]=c(m,k[0]);k[1]=c(o,k[1]);k[2]=c(p,k[2]);k[3]=c(q,k[3]);k[4]=c(f,k[4]);k[5]=c(i,k[5]);k[6]=c(h,k[6]);k[7]=c(j,k[7])}return k}(function(a){for(var b=[],c=0;c<8*a.length;c+=8)b[c>>5]|=(a.charCodeAt(c/
8)&255)<<24-c%32;return b}(a),8*a.length))}var Base64={encode:function(a){a=sjcl.codec.utf8String.toBits(a);return sjcl.codec.base64.fromBits(a)},decode:function(a){a=sjcl.codec.base64.toBits(a);return sjcl.codec.utf8String.fromBits(a)}};
function EncryptedCache(){this.STORAGE_PREFIX="__$WLEOC__";this.SALT_KEY="__$WLEOC_SALT";this.CIPHER_KEY="__$WLEOC_CIPHER";this.VERSION="__$WLEOC_VERSION";this.DPK_KEY_DERIVATION_ITERATIONS=this.CBK_KEY_DERIVATION_ITERATIONS=1E3;this.keyCreationContext=this.DPK=null;WL.Client.getEnvironment()===WL.Environment.ANDROID||WL.Client.getEnvironment()===WL.Environment.IPHONE||WL.Client.getEnvironment()===WL.Environment.IPAD?(this[api.keygen]=new NativePBKDF2,this.encryptor=new NativeEncryptor):(this[api.keygen]=
new WebBasedPBKDF2,this.encryptor=new WebBasedEncryptor)}
var OK=EncryptedCache.prototype.OK=0,ERROR_NO_EOC=EncryptedCache.prototype.ERROR_NO_EOC=1,ERROR_CREDENTIALS_MISMATCH=EncryptedCache.prototype.ERROR_CREDENTIALS_MISMATCH=2,ERROR_EOC_TO_BE_DELETED=EncryptedCache.prototype.ERROR_EOC_TO_BE_DELETED=3,ERROR_EOC_DELETED=EncryptedCache.prototype.ERROR_EOC_DELETED=4,ERROR_UNSAFE_CREDENTIALS=EncryptedCache.prototype.ERROR_UNSAFE_CREDENTIALS=5,ERROR_EOC_CLOSED=EncryptedCache.prototype.ERROR_EOC_CLOSED=6,ERROR_NO_SUCH_KEY=EncryptedCache.prototype.ERROR_NO_SUCH_KEY=
7,ERROR_LOCAL_STORAGE_NOT_SUPPORTED=EncryptedCache.prototype.ERROR_LOCAL_STORAGE_NOT_SUPPORTED=8,ERROR_KEY_CREATION_IN_PROGRESS=EncryptedCache.prototype.ERROR_KEY_CREATION_IN_PROGRESS=9,ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE=EncryptedCache.prototype.ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE=10,ERROR_COULD_NOT_GENERATE_KEY=EncryptedCache.prototype.ERROR_COULD_NOT_GENERATE_KEY=11,ERROR_INVALID_PARAMETER=EncryptedCache.prototype.ERROR_INVALID_PARAMETER=12,ERROR_UNKNOWN=EncryptedCache.prototype.ERROR_UNKNOWN=
13,ERROR_MIGRATION=EncryptedCache.prototype.ERROR_MIGRATION=14;EncryptedCache.prototype[api.close]=function(a,c){WL.Validators.validateArguments([WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.close");if(this.keyCreationContext){if(c)return c(ERROR_KEY_CREATION_IN_PROGRESS);throw ERROR_KEY_CREATION_IN_PROGRESS;}this.DPK=null;a&&a(OK)};EncryptedCache.prototype[api.random]=function(){return myMathRandom()};
EncryptedCache.prototype[api.secureRandom]=function(a,c){var a="function"!==typeof a?function(){}:a,b,e={};if("number"===typeof c&&parseFloat(c)==parseInt(c,10)&&!isNaN(c)&&0<c)e.bytes=c;b=WL.EnvProfile.isEnabled(WL.EPField.WEB)&&WL.Client.getEnvironment()!=WL.Env.MOBILE_WEB?WL.StaticAppProps.POSTFIX_APP_SERVICES_URL+"random":WL.StaticAppProps.APP_SERVICES_URL+"random";WLJQ.ajax({url:b,method:"get",data:e,timeout:WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS}).done(function(b){a(b)}).fail(function(){a(ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE)})};
EncryptedCache.prototype[api.open]=function(a,c,b,e){try{WL.Validators.validateArguments(["string","boolean",WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.open")}catch(g){console.log(g);if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(void 0===a||""===a){console.log("Error: credentials is undefined or empty.");if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(this.DPK){var l=null;this.close(function(){},
function(a){l=a});if(null!==l)return e(l)}if(!localStorage){if(e)return e(ERROR_LOCAL_STORAGE_NOT_SUPPORTED);throw ERROR_LOCAL_STORAGE_NOT_SUPPORTED;}if(this.keyCreationContext){if(e)return e(ERROR_KEY_CREATION_IN_PROGRESS);throw ERROR_KEY_CREATION_IN_PROGRESS;}var k=localStorage.getItem(this.SALT_KEY);if(null===k){if(!c){if(e)return e(ERROR_NO_EOC);throw ERROR_NO_EOC;}this.keyCreationContext={credentials:a,salt:""+this[api.random](),onCompleteHandler:b,onErrorHandler:e};var d=this;this[api.secureRandom](function(a){if(a==
ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE){a=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;if(a)return a(ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE);throw ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE;}d[api.keygen].deriveKey(a,d.keyCreationContext.salt,d.DPK_KEY_DERIVATION_ITERATIONS,32,function(a){d.keyCreationContext.DPK=a;d[api.keygen].deriveKey(d.keyCreationContext.credentials,d.keyCreationContext.salt,d.CBK_KEY_DERIVATION_ITERATIONS,32,function(a){var b=[MD5(""+
d[api.random]())];d.encryptor.rawEncrypt(d.keyCreationContext.DPK,a,b[0],function(a){localStorage.setItem(d.CIPHER_KEY,a);localStorage.setItem(d.SALT_KEY,d.keyCreationContext.salt);localStorage.setItem(d.VERSION,"1");a=d.keyCreationContext.onCompleteHandler;d.DPK=d.keyCreationContext.DPK;this.keyCreationContext=d.keyCreationContext=null;a&&a(OK)},function(a){console.log(a);a=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);
else throw ERROR_COULD_NOT_GENERATE_KEY;})},function(a){console.log(a);a=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);else throw ERROR_COULD_NOT_GENERATE_KEY;})},function(a){console.log(a);a=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);else throw ERROR_COULD_NOT_GENERATE_KEY;})})}else this.keyCreationContext={onCompleteHandler:b,onErrorHandler:e},
d=this,this[api.keygen].deriveKey(a,k,d.CBK_KEY_DERIVATION_ITERATIONS,32,function(a){var b=d.keyCreationContext.onCompleteHandler,c=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;var e=localStorage.getItem(d.CIPHER_KEY);d.encryptor.rawDecrypt(e,a,function(e){d.DPK=e;var e=localStorage.getItem(d.VERSION),g=WL.Client.getEnvironment();("iphone"===g||"ipad"===g)&&("undefined"===typeof e||"string"!==typeof e)?reEncryptStorage(b,c,d,a):b&&b(OK)},function(a){console.log(a);
if(c)c(ERROR_CREDENTIALS_MISMATCH);else throw ERROR_CREDENTIALS_MISMATCH;})},function(a){console.log(a);a=d.keyCreationContext.onErrorHandler;this.keyCreationContext=d.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);else throw ERROR_COULD_NOT_GENERATE_KEY;})};
function reEncryptStorage(a,c,b,e){function g(a){console.log(a);if(c)c(ERROR_MIGRATION);else throw ERROR_MIGRATION;}var l=[MD5(""+b[api.random]())];b.encryptor.rawEncrypt(b.DPK,e,l[0],function(c){localStorage.setItem(b.CIPHER_KEY,c);reEncryptKeys(a,g,b)},g)}
function reEncryptKeys(a,c,b){function e(){0<l.length?(k=l.pop(),readUsingHashedKey(k,b,g,c)):(localStorage.setItem(b.VERSION,"1"),a&&a(OK))}function g(a){writeUsingHashedKey(k,a,b,e,c)}for(var l=[],k="",d=localStorage.length-1;0<=d;d--){var m=localStorage.key(d);0===m.indexOf(b.STORAGE_PREFIX)&&l.push(m)}e()}function readUsingHashedKey(a,c,b,e){a=localStorage.getItem(a);c.encryptor.rawDecrypt(a,c.DPK,b,e)}
function writeUsingHashedKey(a,c,b,e,g){var l=b.STORAGE_PREFIX,k=a.replace(l,""),a=[MD5(k+b[api.random]())];b.encryptor.rawEncrypt(c,b.DPK,a[0],function(a){localStorage.setItem(l+k,a);e()},g)}
EncryptedCache.prototype[api.destroy]=function(a,c){WL.Validators.validateArguments([WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.destroy");var b=null;this.close(function(){},function(a){b=a});if(null!==b){if(c)return c(b);throw b;}localStorage.removeItem(this.SALT_KEY);localStorage.removeItem(this.CIPHER_KEY);for(var e=localStorage.length-1;0<=e;e--){var g=localStorage.key(e);0===g.indexOf(this.STORAGE_PREFIX)&&localStorage.removeItem(g)}a&&
a(OK)};
EncryptedCache.prototype[api.changeCredentials]=function(a,c,b){try{WL.Validators.validateArguments(["string",WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.changeCredentials")}catch(e){console.log(e);if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(void 0===a||""===a){console.log("Error: new_credentials is undefined or empty.");if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(this.keyCreationContext){if(b)return b(ERROR_KEY_CREATION_IN_PROGRESS);throw ERROR_KEY_CREATION_IN_PROGRESS;
}if(!this.DPK){if(b)return b(ERROR_EOC_CLOSED);throw ERROR_EOC_CLOSED;}this.keyCreationContext={credentials:a,salt:""+this[api.random](),onCompleteHandler:c,onErrorHandler:b};var g=this;this[api.keygen].deriveKey(this.keyCreationContext.credentials,this.keyCreationContext.salt,this.CBK_KEY_DERIVATION_ITERATIONS,32,function(a){var b=[MD5(""+g[api.random]())];g.encryptor.rawEncrypt(g.DPK,a,b[0],function(a){localStorage.setItem(g.CIPHER_KEY,a);localStorage.setItem(g.SALT_KEY,g.keyCreationContext.salt);
a=g.keyCreationContext.onCompleteHandler;this.keyCreationContext=g.keyCreationContext=null;a&&a(OK)},function(a){console.log(a);a=g.keyCreationContext.onErrorHandler;this.keyCreationContext=g.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);else throw ERROR_COULD_NOT_GENERATE_KEY;})},function(a){console.log(a);a=g.keyCreationContext.onErrorHandler;this.keyCreationContext=g.keyCreationContext=null;if(a)a(ERROR_COULD_NOT_GENERATE_KEY);else throw ERROR_COULD_NOT_GENERATE_KEY;})};
EncryptedCache.prototype[api.write]=function(a,c,b,e){try{WL.Validators.validateArguments(["string",WL.Validators.validateStringOrNull,WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.write")}catch(g){console.log(g);if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(void 0===a||""===a){console.log("Error: key is undefined or empty.");if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(!this.DPK)return e(ERROR_EOC_CLOSED);
a=SHA256(a);if(null===c){if(localStorage.removeItem(this.STORAGE_PREFIX+a),b)return b(OK)}else{var l=[MD5(a+this[api.random]())],k=this.STORAGE_PREFIX;this.encryptor.rawEncrypt(Base64.encode(c),this.DPK,l[0],function(c){localStorage.setItem(k+a,c);b&&b(OK)},e)}};
EncryptedCache.prototype[api.remove]=function(a,c,b){try{WL.Validators.validateArguments(["string",WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.remove")}catch(e){console.log(e);if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(void 0===a||""===a){console.log("Error: key is undefined or empty.");if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(!this.DPK){if(b)return b(ERROR_EOC_CLOSED);throw ERROR_EOC_CLOSED;
}this.write(a,null,c,b)};
EncryptedCache.prototype[api.read]=function(a,c,b){try{WL.Validators.validateArguments(["string",WL.Validators.validateFunctionOrNull,WL.Validators.validateFunctionOrNull],arguments,"WL.EncryptedCache.read")}catch(e){console.log(e);if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(void 0===a||""===a){console.log("Error: key is undefined or empty.");if(b)return b(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(!this.DPK){if(b)return b(ERROR_EOC_CLOSED);throw ERROR_EOC_CLOSED;
}var a=SHA256(a),g=localStorage.getItem(this.STORAGE_PREFIX+a);if(null===g){if(c)return c(null)}else this.encryptor.rawDecrypt(g,this.DPK,function(a){a=Base64.decode(a);c&&c(a)},b)};function NativeEncryptor(){}
NativeEncryptor.prototype.rawEncrypt=function(a,c,b,e,g){try{WL.Validators.validateArguments(["string","string","object","function","function"],arguments,"NativeEncryptor.prototype.rawEncrypt")}catch(l){console.log(l);if(g)return g(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}var k=a,d=c,m=a2h(b);if(!d||!k||!m||null===d||null===k||null===m||1>d.length||1>k.length||1>m.length){if(g)return g(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}cordova.exec(e,function(){g()},"SecurityPlugin",
"encrypt",[d,k,m])};
NativeEncryptor.prototype.rawDecrypt=function(a,c,b,e){try{WL.Validators.validateArguments(["string","string","function","function"],arguments,"NativeEncryptor.prototype.rawDecrypt")}catch(g){console.log(g);if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}var l=JSON.parse(a),k=l.ct,d=c,m=l.iv;if(!d||!k||!m||null===d||null===k||null===m||1>d.length||1>k.length||1>m.length){if(e)return e(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}cordova.exec(b,function(a){console.log(a);
e(ERROR_UNKNOWN)},"SecurityPlugin","decrypt",[d,l.ct,m])};function NativePBKDF2(){}
NativePBKDF2.prototype.deriveKey=function(a,c,b,e,g,l){try{WL.Validators.validateArgument("string",a,"NativePBKDF2.prototype.deriveKey");WL.Validators.validateArgument("string",c,"NativePBKDF2.prototype.deriveKey");WL.Validators.validateArgument(function(a){"function"!==typeof a&&this.logAndThrow("Invalid value '"+WLJSX.Object.toJSON(a)+"' ("+typeof a+"), expected type 'function' for parameter onCompleteHandler.","NativePBKDF2.prototype.deriveKey")},g,"");WL.Validators.validateArgument(function(a){"function"!==
typeof a&&this.logAndThrow("Invalid value '"+WLJSX.Object.toJSON(a)+"' ("+typeof a+"), expected type 'function' for parameter onErrorHandler.","NativePBKDF2.prototype.deriveKey")},l,"");if(!("number"===typeof b&&Math.ceil(b)===Math.floor(b)))throw"Error: Invalid invocation of method NativePBKDF2.prototype.deriveKey; Invalid parameter type for argument 'num_iterations'";if(!("number"===typeof e&&Math.ceil(e)===Math.floor(e)))throw"Error: Invalid invocation of method NativePBKDF2.prototype.deriveKey; Invalid parameter type for argument 'num_bytes'";
}catch(k){console.log(k);if(l)return l(ERROR_INVALID_PARAMETER);throw ERROR_INVALID_PARAMETER;}if(!a||null===a||!c||null===c||!b||null===b||!e||null===e||1>c.length||0>parseInt(b,10))return l(ERROR_INVALID_PARAMETER);cordova.exec(g,function(a){console.log(a);l(ERROR_UNKNOWN)},"SecurityPlugin","keygen",[a,c,b,e])};function WebBasedEncryptor(){}
WebBasedEncryptor.prototype.rawEncrypt=function(a,c,b,e,g){var l=null;try{b=sjcl.codec.hex.toBits(a2h(b)),l=sjcl.json.encrypt(c,a,{iv:b})}catch(k){console.log(k);if(g)return g(ERROR_UNKNOWN);throw ERROR_UNKNOWN;}e&&e(l)};WebBasedEncryptor.prototype.rawDecrypt=function(a,c,b,e){var g=null;try{g=sjcl.json.decrypt(c,a)}catch(l){console.log(l);if(e)return e(ERROR_UNKNOWN);throw ERROR_UNKNOWN;}b&&b(g)};function WebBasedPBKDF2(){}
WebBasedPBKDF2.prototype.deriveKey=function(a,c,b,e,g,l){var k=null;try{k=sjcl.misc.pbkdf2(a,c,b,8*e)}catch(d){console.log(d);if(l)return l(ERROR_UNKNOWN);throw ERROR_UNKNOWN;}g&&g(binb2hex(k))};window.WL.EncryptedCache=new EncryptedCache;})();


/**
 * ================================================================= 
 * Source file taken from :: securityutils.js
 * ================================================================= 
 */

/**
 * SecurityUtils Modules
 */

 WL.SecurityUtils = (function (jQuery, lodash) {

  var

  //Dependencies
  $ = jQuery,
  _ = lodash;

  //Constants
  var
  DATA_KEY_LENGTH = 32,
  ANDROID_ENV = WL.Environment.ANDROID,
  IPHONE_ENV = WL.Environment.IPHONE,
  IPAD_ENV = WL.Environment.IPAD,
  PLUGIN_NAME = 'SecurityPlugin',
  KEYGEN_METHOD_NAME = 'keygen',
  ENCRYPT_METHOD_NAME = 'encrypt',
  DECRYPT_METHOD_NAME = 'decrypt',
  LOCAL_RANDOM_METHOD_NAME = 'localRandomString',
  BASE64_ENCODE_METHOD_NAME = 'base64Encode',
  BASE64_DECODE_METHOD_NAME = 'base64Decode',
  CURRENT_VERSION = 1,
  CURRENT_SOURCE = 'js',
  IS_EOC = false;

  var WLBase64 = {

    encode : function (input) {
      var bits = sjcl.codec.utf8String.toBits(input);
      return sjcl.codec.base64.fromBits(bits);
    },

    decode : function (input) {
      var bits =  sjcl.codec.base64.toBits(input);
      return sjcl.codec.utf8String.fromBits(bits);
    }
  };

  var __hmacSHA1 = function (key) {
    var hasher = new sjcl.misc.hmac(key, sjcl.hash.sha1);
    this.encrypt = function () {
        return hasher.encrypt.apply(hasher, arguments);
    };
  };

  var __toHex = function (str) {

    if(typeof str !== 'string') {
      return '';
    }

    var hex = '',
      i;
    for (i = 0 ; i < str.length; i++) {
      hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
  };

  var __checkNativeEnvironment = function () {
    var env = WL.Client.getEnvironment();

    return (env === ANDROID_ENV ||
      env === IPHONE_ENV ||
      env === IPAD_ENV);
  };

  var __callNative = function (options, error) {

    var dfd = $.Deferred();

    var successCallback = function (res) {

      switch(options.method) {

        //Encrypt returns a stringified version of a JSON object
        case ENCRYPT_METHOD_NAME:
          dfd.resolve(JSON.parse(res));
          break;

        default:
          dfd.resolve.apply(this, arguments);
      }
    };

    cordova.exec(successCallback, dfd.reject, PLUGIN_NAME, options.method, options.params);

    return dfd.promise();
  };

  var __callPureWeb = function (options) {

    var dfd = $.Deferred();

    var password,
      key,
      salt,
      iterations,
      len,
      text,
      ct,
      iv,
      src,
      version,
      bitSalt,
      hexKey,
      encryptionStr,
      encryptionObj,
      decryptionStr,
      retObj,
      bytes,
      input;


    if (options.method === KEYGEN_METHOD_NAME) {

      password = options.params[0];
      salt = options.params[1];
      iterations = options.params[2];
      len = options.params[3];

      if (typeof iterations !== 'number' || iterations < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Number of iterations must greater than 0'});

      } else if (typeof password !== 'string' || password.length < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Password cannot be nil/empty'});

      } else if (typeof salt !== 'string' || salt.length < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Salt cannot be nil/empty'});

      } else {

        try {

          bitSalt = sjcl.codec.hex.toBits(__toHex(salt));
          hexKey = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(password, bitSalt, iterations, len * 8, __hmacSHA1));
          dfd.resolve(hexKey);

        } catch (e) {

          dfd.reject({msg: e.toString()});
        }

      }

    } else if (options.method === ENCRYPT_METHOD_NAME) {

      key = options.params[0];
      text = options.params[1];

      if (typeof key !== 'string' || key.length < 1) {

        dfd.reject({msg: 'ENCRYPT_ERROR = Cannot work with an empty/nil key'});

      } else if (typeof text !== 'string' || text.length < 1) {

        dfd.reject({msg: 'ENCRYPT_ERROR = Cannot encrypt empty/nil plaintext'});

      } else {

        try {

          encryptionStr = sjcl.json.encrypt(key, text);
          encryptionObj = JSON.parse(encryptionStr);

          retObj = _.pick(encryptionObj, ['ct', 'iv']);
          retObj.v = CURRENT_VERSION;
          retObj.src = CURRENT_SOURCE;

          dfd.resolve(retObj);

        } catch (e) {

          dfd.reject({msg: e.toString()});
        }
      }

    } else if (options.method === DECRYPT_METHOD_NAME) {

      key = options.params[0];
      ct = options.params[1];
      iv = options.params[2];
      src = options.params[3];
      version = options.params[4];

      if (typeof key !== 'string' || key.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot work with an empty/nil key'});

      } else if (typeof ct !== 'string' || ct.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt empty/nil cipher'});

      } else if (typeof iv !== 'string' || iv.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot encrypt with empty/nil iv'});

      } else if (src !== 'js') {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt something not encrypted in this environment'});

      } else if (version !== CURRENT_VERSION) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt something with that version'});

      } else {

        try {

          decryptionStr = sjcl.json.decrypt(key, JSON.stringify({ct: ct, iv:iv}));
          dfd.resolve(decryptionStr);

        } catch(e) {

          dfd.reject({msg: e.toString()});
        }
      }
    } else if (options.method === LOCAL_RANDOM_METHOD_NAME) {

      try {

        bytes = options.params[0];
        dfd.resolve(sjcl.codec.hex.fromBits(sjcl.random.randomWords(bytes/4)));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }

    } else if (options.method === BASE64_ENCODE_METHOD_NAME) {

      try {

        input = options.params[0];
        dfd.resolve(WLBase64.encode(input));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }

    } else if (options.method === BASE64_DECODE_METHOD_NAME) {

      try {

        input = options.params[0];
        dfd.resolve(WLBase64.decode(input));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }
    }

    return dfd.promise();
  };

  var _keygen = function (options) {

    WL.Validators.isValidationEnabled = true;

    var err = WL.Validators.validateOptions({
      password : 'string',
      salt : 'string',
      iterations : 'number'
    }, options, 'WL.SecurityUtils.keygen');

    var ops = {
      method: KEYGEN_METHOD_NAME,
      params: [__toHex(options.password), __toHex(options.salt), options.iterations, DATA_KEY_LENGTH]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {
      return __callPureWeb(ops);
    }
  };

  var _encrypt = function (options) {

    WL.Validators.validateOptions({
      key : 'string',
      text : 'string'
    }, options, 'WL.SecurityUtils.encrypt');

    var ops = {
      method: ENCRYPT_METHOD_NAME,
      params: [options.key, options.text, '']
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }
  };

  var _decrypt = function (options) {

    WL.Validators.validateOptions({
      key : 'string',
      ct : 'string',
      iv : 'string',
      src: 'string',
      v : 'number'
    }, options, 'WL.SecurityUtils.decrypt');

    var ops = {
      method: DECRYPT_METHOD_NAME,
      params: [options.key, options.ct, options.iv, options.src || '', options.v || CURRENT_VERSION]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }
  };

  var _localRandomString = function (length) {

    var bytes = 32;

    if (typeof length === 'number' && length > 0) {
      bytes = length;
    }

    var ops = {
      method: LOCAL_RANDOM_METHOD_NAME,
      params: [bytes]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  var _remoteRandomString = function (length) {

    var dfd = $.Deferred();

    WL.EncryptedCache.secureRandom(function (res) {

      if (typeof res === 'string') {
        dfd.resolve(res);
      } else {
        dfd.reject({msg: res});
      }

    }, length);

    return dfd.promise();
  };

  var _base64Encode = function (input) {

    var ops = {
      method: BASE64_ENCODE_METHOD_NAME,
      params: [input]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  var _base64Decode = function (input) {

    var ops = {
      method: BASE64_DECODE_METHOD_NAME,
      params: [input]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  return {
    keygen : _keygen,
    encrypt: _encrypt,
    decrypt: _decrypt,
    remoteRandomString : _remoteRandomString,
    localRandomString : _localRandomString,
    base64Encode: _base64Encode,
    base64Decode : _base64Decode
  };

}(WLJQ, WL_));

/**
 * ================================================================= 
 * Source file taken from :: jsonstore_stub.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var WL = WL || {};

WL.JSONStore = (function(_) {
  var publicAPI = [
    'init',
    'get',
    'initCollection',
    'usePassword',
    'clearPassword',
    'closeAll',
    'documentify',
    'changePassword',
    'destroy',
    'getErrorMessage',
    'startTransaction',
    'commitTransaction',
    'rollbackTransaction',
    'fileInfo',
    'QueryPart'
  ];

  var stub = {};

  var jsonStoreEnabled = function() {
    return !(_.isUndefined(WL._JSONStoreImpl));
  };

  _.each(publicAPI, function(apiName) {
    var implName = apiName;
    stub[apiName] =
      (function(apiName, implName) {
      return function() {
        if (jsonStoreEnabled()) {
          return WL._JSONStoreImpl[implName].apply(WL._JSONStoreImpl, arguments);
        } else {
          var featureName = 'JSONStore';
          var cmd = 'WL.JSONStore.' + apiName;
          var errMsg = 'Failed to call {1} because {0} is missing in the application. Add {0} to the application descriptor, rebuild and deploy it.';
          throw new Error(WL.Utils.formatString(errMsg, featureName, cmd));
        }
      };
    })(apiName, implName);
  });

  return stub;
}(WL_));


/**
 * ================================================================= 
 * Source file taken from :: fipshttp_stub.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var WL = WL || {};

WL.FIPSHttp = (function (_) {
	var publicAPI = [
							"_enable",
							"_state"
	        		];
	
	var stub = {};
	
	var FIPSHttpEnabled = function() { 
		return !(_.isUndefined(WL._FIPSHttpImpl)) 
	};
	
	_.each(publicAPI, function(apiName) {
		var implName = apiName;
		stub[apiName] = 
			(function(apiName, implName) {
				return function() {
					if (FIPSHttpEnabled()) {
						return  WL._FIPSHttpImpl[implName].apply(WL._FIPSHttpImpl, arguments);
					} else {
						var featureName = 'FIPSHttp';
						var cmd = 'WL.FIPSHttp.' + apiName;
						var errMsg = "Failed to call {1} because {0} is missing in the application. Add {0} to the application descriptor, rebuild and deploy it.";
						throw new Error(WL.Utils.formatString(errMsg, featureName, cmd));
					}
				};
			})(apiName, implName);
	});
	
	return stub;
}(WL_));

/**
 * ================================================================= 
 * Source file taken from :: busyindicator.web.preview.js
 * ================================================================= 
 */

/**
* @license
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

WL.BusyIndicator = WLJSX.Class.create({
	/**
	* @param containerId (string) - the parent element id for the loading signal. If null - the content div
	*                will be used, unless this is iPhone, in which case the viewport will be used.
	* @param options (hash) - same options that busy.js support but flatted Example: {color:'#fff',
	*                size:'16', etc...}
	* 
	* overlay properties: only for backward compatibility.
	* The only property that exists is text == STR e.g. "loading" Default: 'Loading...' taken from WL.ClientMessages.loading
	* 
	* Native iPhone busy indicator properties:
	* bounceAnimation == Boolean. Show a bounce animation when displaying the busy indicator. Default false.
	* textColor == String (Color name or Color notation, e.g. "00FF00" or "green"). Text color. Default white.
	* strokeOpacity == Float.
	* fullScreen == Boolean. Show the overlay over the entire screen. Default true.
	* boxLength == Float. Height and Width of the overlay, when fullScreen is false. 
	* duration == Integer (milliseconds). Note: if duration is given isVisible() method will become unreliable.
	* minDuration == Integer (milliseconds).
	*/

	initialize : function(containerId, options) {
		this.__busyOverlay = false;
		this.__containerElement = null;
		
		//changes made. Defect 17303. Ensure that Busy Indicator shows language picked from device or set by user.
		WL.Utils.setLocalization();
		
		this.__options = {
			color : null,
			size : 48,
			weight : 4,
			iradius : 12,
			text : WL.ClientMessages.loading
		};
		
		WL.Validators.validateOptions({
			container : 'object',
			overlaycolor : 'string',
			opacity : 'number',
			text : 'string',
			textLocation : 'string',
			style : 'string',
			color : 'string',
			size : 'number',
			type : 'string',
			iradius : 'number',
			weight : 'number',
			count : 'number',
			speed : 'number',
			minopac : 'number',
			bounceAnimation : 'boolean',
			textColor : 'string',
			strokeOpacity : 'number',
			fullScreen : 'boolean',
			boxLength : 'number',
			duration : 'number',
			minDuration : 'number'
		}, options, 'new WL.BusyIndicator');
		
		if (!WLJSX.Object.isUndefined(options)) {
			this.__options = WLJSX.Object.extend(this.__options, options);
		}

		if (WLJSX.Object.isUndefined(containerId) || containerId === null) {
			// If containerId is null in iPhone - use the viewport as the busy indicator container
			if (WL.Client.getAppProperty(WL.AppProp.ENVIRONMENT) === WL.Env.IPHONE) {
				this.__containerElement = 'viewport';
			} else {
				// If containerId is null in all other envs - use the body element as the busy indicator container
				this.__containerElement = WLJSX.$$$('body');
			}
		} else {
			this.__containerElement = WLJSX.$(containerId);
		}
	},

	/**
	* Shows the busy indicator
	*/
	show : function() {
		if (this.isVisible()) {
			return;
		}
		
		if (WLJSX.Object.isUndefined(this.__busyOverlay) || this.__busyOverlay === false) {
			var overlay = {
				color : this.__options.overlaycolor,
				opacity : this.__options.opacity,
				text : this.__options.text,
				style : this.__options.style,
				textLocation : this.__options.textLocation
			};
			
			var busy = {
				color : this.__options.color,
				size : this.__options.size,
				type : this.__options.type,
				iradius : this.__options.radius,
				weight : this.__options.weight,
				count : this.__options.count,
				speed : this.__options.speed,
				minopac : this.__options.minopac
			};
			
			try {
				this.__busyOverlay = getBusyOverlay(this.__containerElement, overlay, busy);
			} catch (e) {
				WL.Logger.error("Failed to show BusyIndicator:", e);
			}
		}
	},

	/**
	 * Hides the busy indicator
	 */
	hide : function() {
		if (!WLJSX.Object.isUndefined(this.__busyOverlay) && this.__busyOverlay !== false) {
			var wlBusyContainer = WLJSX.$('WLbusyContainer');
			WLJSX.remove(wlBusyContainer);
			this.__busyOverlay = false;
		}
	},
	
	isVisible : function() {
		return (this.__busyOverlay);
	}
});


/**
 * ================================================================= 
 * Source file taken from :: deviceAuthentication.preview.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM 5725-I43 (C) Copyright IBM Corp. 2006,
 * 2013. All Rights Reserved. US Government Users Restricted Rights - Use,
 * duplication or disclosure restricted by GSA ADP Schedule Contract with IBM
 * Corp.
 */

// Dummy calls, since there is no device in preview
WL.DeviceAuth.__isCertificateExists = function(provisioningEntitiy, successCallback, failureCallback) {
	successCallback(true);
};

WL.DeviceAuth.__createDeviceAuthHeader = function(successCallback, failureCallback, payloadJSON, isProvisioningEnabled, provisioningEntitiy) {
	successCallback({"device":{"id":"dummy","os":"dummy-web","model":"dummy-model","environment":"dummy-web"},"app":{"id":WL.StaticAppProps.APP_DISPLAY_NAME,"version":WL.StaticAppProps.APP_VERSION},"token":payloadJSON.token,"custom":payloadJSON.custom});
};
 
WL.DeviceAuth.createCSR = function(provisioningEntitiy, realm, csrData, failureCallback) {
};
    
WL.DeviceAuth.__initDeviceAuthManager = function(successCallback, failureCallback) {
	successCallback();
};

/**
 * ================================================================= 
 * Source file taken from :: userAuthentication.preview.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM 5725-I43 (C) Copyright IBM Corp. 2006,
 * 2013. All Rights Reserved. US Government Users Restricted Rights - Use,
 * duplication or disclosure restricted by GSA ADP Schedule Contract with IBM
 * Corp.
 */

// Dummy calls, since there is no device in preview
WL.UserAuth.__isCertificateExists = function(provisioningEntitiy, successCallback, failureCallback) {
	successCallback(true);
};

WL.UserAuth.__createDeviceAuthHeader = function(successCallback, failureCallback, payloadJSON, isProvisioningEnabled, provisioningEntitiy) {
	successCallback({"device":{"id":"dummy","os":"dummy-web","model":"dummy-model","environment":"dummy-web"},"app":{"id":WL.StaticAppProps.APP_DISPLAY_NAME,"version":WL.StaticAppProps.APP_VERSION},"token":payloadJSON.token,"custom":payloadJSON.custom});
};
 
WL.UserAuth.createCSR = function(provisioningEntitiy, realm, csrData, failureCallback) {
};
    
WL.UserAuth.__initDeviceAuthManager = function(successCallback, failureCallback) {
	successCallback();
};

/**
 * ================================================================= 
 * Source file taken from :: noProvisioningChallengeHandler.preview.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
var wl_noDeviceProvisioningChallengeHandler = WL.Client.createDeviceAuthChallengeHandler("wl_deviceNoProvisioningRealm");

wl_noDeviceProvisioningChallengeHandler.handleChallenge = function(challenge) {
	var deviceAuthSettings = {
		token : challenge.token
	};

	var deviceDataJSON = {
		token : deviceAuthSettings.token,
		app : {
			id : WL.StaticAppProps.APP_DISPLAY_NAME,
			version : WL.StaticAppProps.APP_VERSION
		},
		device : {
			id : "previewDummyId",
			os : "previewDummyOS",
			model : "previewDummyModel",
			environment : WL.StaticAppProps.ENVIRONMENT
		},
		custom : {}
	};
	wl_noDeviceProvisioningChallengeHandler.onDeviceAuthDataReady(deviceDataJSON, deviceAuthSettings);
};

wl_noDeviceProvisioningChallengeHandler.onDeviceAuthDataReady = function(deviceDataJSON, deviceProvisioning) {
	var answer = {
		ID : deviceDataJSON
	};
	wl_noDeviceProvisioningChallengeHandler.submitChallengeAnswer(answer);
};


/**
 * ================================================================= 
 * Source file taken from :: wlgap.blackberry.js
 * ================================================================= 
 */

/**
* @license
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

//Add device uuid etc...
if (typeof window.device == "undefined") {
		window.device = {
			version : "",
			name : ""
	};
	if (typeof worklight != "undefined" && typeof worklight.utils != "undefined" && typeof worklight.utils.device != "undefined") {
		var deviceObject = JSON.parse(worklight.utils.device());
		device.uuid = deviceObject.uuid;
		device.version = deviceObject.version;
		device.name = deviceObject.name;
	} else {
		if (typeof blackberry != "undefined") {
			if (typeof blackberry.identity.uuid) {
				device.uuid = blackberry.identity.uuid;
			} else if (typeof blackberry.identity.PIN) {
				device.uuid = blackberry.identity.PIN;
			}
		}
	}
}

//logout on exit
if (typeof blackberry != "undefined") {
    blackberry.app.event.onExit(function() {
	if (WL.StaticAppProps.LOGIN_REALM != null) {
	    new WLJSX.Ajax.WLRequest("logout", {
		parameters : {
		    realm : WL.StaticAppProps.LOGIN_REALM
		},
		onSuccess : function() {
		    blackberry.app.exit();
		},
		onFailure : function() {
		    blackberry.app.exit();
		},
		timeout : 5000
	    });
	} else {
	    blackberry.app.exit();
	}
    });
}

// add dynamicly meta tag for init scale of the widget
function setScaleMetaTag() {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'initial-scale=1.0';
    document.getElementsByTagName('head')[0].appendChild(meta);
}
setScaleMetaTag();

/*
 * Class enable to save parameters to local database
 */
__WL.BlackBerryPersister = WLJSX.Class.create({
    _db : null,
    _PARAMS_TABLE : "Params",

    read : function(key) {
	try {
	    WL.Logger.debug("Enter read: " + key);
	    this._openDatabase();
	    var rs = this._db.execute('select * from ' + this._PARAMS_TABLE + ' where Key="' + key + '"');
	    var value = null;
	    if (rs.isValidRow()) {
		value = rs.field(1);
	    }
	    rs.close();
	    this._closeDatabase();
	    WL.Logger.debug("Exit read: " + key);
	    return value;
	} catch (e) {
	    WL.Logger.error("Problem reading from native database: " + e);
	    return;
	}
    },

    store : function(key, value) {
	try {
	    WL.Logger.debug("Enter store: " + key);
	    var oldValue = this.read(key);
	    this._openDatabase();
	    if (oldValue == null) {
		this._db.execute('insert into ' + this._PARAMS_TABLE + ' values (?, ?)', [key, value]);
	    } else {
		this._db.execute('update ' + this._PARAMS_TABLE + ' set Value=? where Key=?', [value, key]);
	    }
	    this._closeDatabase()
	    WL.Logger.debug("Exit store: " + key);
	} catch (e) {
	    WL.Logger.error("Problem store to native database: " + e);
	}
    },

    remove : function(key) {
	WL.Logger.debug("Enter remove: " + key);
	this._openDatabase();
	var sql = 'delete from Params where Key="' + key + '"';
	this._db.execute(sql);
	this._closeDatabase();
	WL.Logger.debug("Exit remove: " + key);
    },

    initialize : function() {
    },

    _openDatabase : function() {
	this._db = google.gears.factory.create('beta.database');
	this._db.open('parameters-values');
	this._db.execute('create table if not exists ' + this._PARAMS_TABLE + ' (Key text, Value text)');
    },

    _closeDatabase : function() {
	this._db.close();
    }
});

/**
 * @deprecated
 */
WL.App.close = function() {
    blackberry.app.exit();
}

if (typeof blackberry != "undefined") {
    blackberry.app.event.onForeground(function() {
	var e = document.createEvent('Events');
	e.initEvent('foreground', false, false);
	document.dispatchEvent(e);
    });
}

/**
 * Device functions
 */
WL.Device = WL.Device || {};

WL.Device.setFriendlyName = function(friendlyName, options){
	WL.Client.__setFriendlyName(friendlyName, options);
};

WL.Device.getFriendlyName = function(options){
	WL.Client.__getFriendlyName(options);
};

WL.Device.getID = function(options){
	WL.Validators.validateArguments([ 'object' ], arguments, 'WL.Device.getID');
	
	WL.Validators.validateOptions({ 
			onSuccess : 'function', 
			onFailure : 'function'
		}, options, 'WL.Client.getID');
	
	var deviceID = { deviceID: device.uuid };
	
	options.onSuccess(deviceID);
};


__WL.blackBerryPersister = new __WL.BlackBerryPersister();
/**
 * Push Notification API for the blackberry environment.
 */
__WLPush = function() {
    var subscribedSMSEventSources = {};
    
    var defaultSubscribeSMSOptions = {
        requestHeaders : {},
        onFailure : function() {
            WL.Logger.error("WL.Client.Push.subscribeSMS: error subscribing for notifications");
        },
        onSuccess : function() {
        }
    };
    var defaultUnsubscribeSMSOptions = {
        requestHeaders : {},
        onFailure : function() {
            WL.Logger.error("WL.Client.Push.unsubscribeSMS: error unsubscribing from notifications");
        },
        onSuccess : function() {
        }
    };

    this.subscribeSMS = function(alias, adapter, eventSource, phoneNumber, options) {
     
        WL.Validators.validateArguments([ 'string', 'string', 'string', 'string', WL.Validators.validateObjectOrNull ], arguments, 'WL.Client.Push.subscribeSMS');
        WL.Validators.validateOptionsLoose({
            onSuccess : 'function',
            onFailure : 'function'
        }, options, "WL.Client.Push.subscribeSMS");

        if (!options) {
            options = {};
        }
        
        var extendedOptions = WLJSX.Object.extend(WLJSX.Object.clone(defaultSubscribeSMSOptions), options);
        
        var subscribedSMSEventSource = {
                "adapter" : adapter,
                "eventSource" : eventSource
            };
        
        var requestOptions = {
            onSuccess : function() {
            	subscribedSMSEventSources[alias] = subscribedSMSEventSource;
                if (extendedOptions.onSuccess) {
                    extendedOptions.onSuccess();
                }
            },
            onFailure : extendedOptions.onFailure
        };

        requestOptions.requestHeaders = {};
        requestOptions.parameters = {};
        requestOptions.parameters.adapter = subscribedSMSEventSource.adapter;
        requestOptions.parameters.eventSource = subscribedSMSEventSource.eventSource;
        requestOptions.parameters.alias = alias;
        requestOptions.parameters.transport = "SMS";
    	requestOptions.parameters.phoneNumber = phoneNumber;
        requestOptions.parameters.subscribe = WLJSX.Object.toJSON(options);
        new WLJSX.Ajax.WLRequest("notifications", requestOptions);
    };

    this.unsubscribeSMS = function(alias, options) {

    	 if (!subscribedSMSEventSources[alias] || !subscribedSMSEventSources[alias].adapter) {
             WL.Logger.error("No subscribed push SMS event source for alias '" + alias + "'.");
             if (options.onSuccess) {
                 options.onSuccess();
             }
             return;
         }

        WL.Validators.validateArguments([ 'string', WL.Validators.validateObjectOrNull ], arguments, 'WL.Client.Push.unsubscribeSMS');
        WL.Validators.validateOptionsLoose({
            onSuccess : 'function',
            onFailure : 'function'
        }, options, "WL.Client.Push.unsubscribeSMS");

        var extendedOptions = WLJSX.Object.extend(WLJSX.Object.clone(defaultUnsubscribeSMSOptions), options);

        var subscribedSMSEventSource = subscribedSMSEventSources[alias];
        var requestOptions = {
            onSuccess : function() {
                subscribedSMSEventSources[alias] = {};
                if (extendedOptions.onSuccess) {
                    extendedOptions.onSuccess();
                }
            },
            onFailure : extendedOptions.onFailure
        };
        requestOptions.requestHeaders = {};
        requestOptions.parameters = {};
        requestOptions.parameters.alias = alias;
        requestOptions.parameters.adapter = subscribedSMSEventSource.adapter;
        requestOptions.parameters.eventSource = subscribedSMSEventSource.eventSource;
        requestOptions.parameters.unsubscribe = "";
        requestOptions.parameters.transport = "SMS";
        new WLJSX.Ajax.WLRequest("notifications", requestOptions);
    };
    
    /**
     * @return true if the environment supports SMS push.
     */
    this.isPushSMSSupported = function() {
        return WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_PUSH_SMS);
    };
    
    /**
     * Check subscribe status of an SMS related event source.
     * 
     * @param alias
     *            {string} - alias of the event source.
     */
    this.isSMSSubscribed = function(alias) {
    	return (typeof subscribedSMSEventSources[alias] != "undefined" && typeof subscribedSMSEventSources[alias].eventSource != "undefined");
    };

    /**
     * Clear the subscribed SMS event sources
     */
    this.__clearSubscribedSMSEventSources = function(eventSources) {
        WL.Logger.debug("Clearing SMS notification subscriptions.");
        subscribedSMSEventSources = {};
    };

     /**
     * Update the subscribed SMS event sources
     */
    this.__updateSubscribedSMSEventSources = function(eventSources) {
        WL.Logger.debug("Updating SMS notification subscriptions.");
        for (event in eventSources) {
            subscribedSMSEventSources[eventSources[event].alias] = {
                    "adapter" : eventSources[event].adapter,
                    "eventSource" : eventSources[event].eventSource
                };
        }
    };

    /**
     * Clear the subscribed event sources
     */
    this.__clearSubscribedEventSources = function(eventSources) {
        WL.Logger.debug("Clearing notification subscriptions.");
    };

    /**
     * Called when ready to subcribe for events
     */
    this.onReadyToSubscribe = function() {
    };

};

__WLClient.prototype.Push = new __WLPush();
WL.Client.Push = new __WLPush();

