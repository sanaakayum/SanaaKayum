(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"3/DG":function(e,t){function n(e,t){var n=[],r=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(t)).join(".")+"]"}),function(o,i){if(n.length>0){var c=n.indexOf(this);~c?n.splice(c+1):n.push(this),~c?r.splice(c,1/0,o):r.push(o),~n.indexOf(i)&&(i=t.call(this,o,i))}else n.push(i);return null==e?i:e.call(this,o,i)}}(e.exports=function(e,t,r,o){return JSON.stringify(e,n(t,o),r)}).getSerialize=n},TBPK:function(e,t,n){"use strict";var r=n("VjyN").createClient({space:"calc8uiajr6g",accessToken:"sn5JM4r2sLCCMtQFQ536eMZDVEBXHJ6tOMrnQq64QT4"});t.a=r},VjyN:function(e,t,n){"use strict";n.r(t),n.d(t,"createClient",(function(){return I}));var r={};n.r(r),n.d(r,"wrapSpace",(function(){return f}));var o={};n.r(o),n.d(o,"wrapEntry",(function(){return E})),n.d(o,"wrapEntryCollection",(function(){return T}));var i={};n.r(i),n.d(i,"wrapAsset",(function(){return U})),n.d(i,"wrapAssetCollection",(function(){return x}));var c={};n.r(c),n.d(c,"wrapContentType",(function(){return S})),n.d(c,"wrapContentTypeCollection",(function(){return L}));var s={};n.r(s),n.d(s,"wrapLocale",(function(){return A})),n.d(s,"wrapLocaleCollection",(function(){return C}));var a=n("vDqi"),u=n.n(a),l=n("/2F5");function f(e){return Object(l.c)(Object(l.e)(e))}var p=n("BkRI"),y=n.n(p),d=n("3/DG"),v=n.n(d);function b(e){return Object.defineProperty(e,"stringifySafe",{enumerable:!1,configurable:!1,writable:!1,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return v()(this,e,t,(function(e,t){return{sys:{type:"Link",linkType:"Entry",id:t.sys.id,circular:!0}}}))}})}var O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function g(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h={},j=function(e){return e&&e.sys&&"Link"===e.sys.type},m=function(e){return e.type+"!"+e.id},w=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===("undefined"===typeof t?"undefined":O(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==h}));for(var t in e)e[t]===h&&delete e[t];return e}(t))}return t},k=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,i=m({type:r,id:o});return e.get(i)||h}(e,t);return r===h?n?r:t:r},P=function(e,t){if(t=t||{},!e.items)return[];var n=y()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(g(t),g(e.includes[n]))}),[]),o=[].concat(g(n.items),g(r)),i=new Map(o.map((function(e){return[m(e.sys),e]})));return o.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,w(n,j,(function(e){return k(i,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items};function E(e){return Object(l.c)(Object(l.e)(y()(e)))}function T(e,t){var n=t.resolveLinks,r=t.removeUnresolved,o=b(Object(l.e)(y()(e)));return n&&(o.items=P(o,{removeUnresolved:r,itemEntryPoints:["fields"]})),Object(l.c)(o)}function U(e){return Object(l.c)(Object(l.e)(y()(e)))}function x(e){return Object(l.c)(Object(l.e)(y()(e)))}function S(e){return Object(l.c)(Object(l.e)(y()(e)))}function L(e){return Object(l.c)(Object(l.e)(y()(e)))}function A(e){return Object(l.c)(Object(l.e)(y()(e)))}function C(e){return Object(l.c)(Object(l.e)(y()(e)))}var _={space:r,entry:o,asset:i,contentType:c,locale:s};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!t.initial&&!t.nextSyncToken&&!t.nextPageToken)throw new Error("Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing");if(t&&t.content_type&&!t.type)t.type="Entry";else if(t&&t.content_type&&t.type&&"Entry"!==t.type)throw new Error("When using the `content_type` filter your `type` parameter cannot be different from `Entry`.");var r={resolveLinks:!0,removeUnresolved:!1,paginate:!0},o=q(q({},r),n),i=o.resolveLinks,c=o.removeUnresolved,s=o.paginate,a={paginate:s};return R(e,[],t,a).then((function(e){i&&(e.items=P(e,{removeUnresolved:c,itemEntryPoints:["fields"]}));var t=N(e.items);return e.nextSyncToken&&(t.nextSyncToken=e.nextSyncToken),e.nextPageToken&&(t.nextPageToken=e.nextPageToken),Object(l.c)(b(Object(l.e)(t)))}),(function(e){throw e}))}function N(e){var t=function(e){return function(t,n){return n.sys.type===e&&t.push(Object(l.e)(n)),t}};return{entries:e.reduce(t("Entry"),[]),assets:e.reduce(t("Asset"),[]),deletedEntries:e.reduce(t("DeletedEntry"),[]),deletedAssets:e.reduce(t("DeletedAsset"),[])}}function R(e,t,n,r){var o=r.paginate;return n.nextSyncToken&&(n.sync_token=n.nextSyncToken,delete n.nextSyncToken),n.nextPageToken&&(n.sync_token=n.nextPageToken,delete n.nextPageToken),n.sync_token&&(delete n.initial,delete n.type,delete n.content_type,delete n.limit),e.get("sync",Object(l.b)({query:n})).then((function(r){var i=r.data||{};return t=t.concat(i.items||[]),i.nextPageUrl?o?(delete n.initial,n.sync_token=J(i.nextPageUrl),R(e,t,n,{paginate:o})):{items:t,nextPageToken:J(i.nextPageUrl)}:i.nextSyncUrl?{items:t,nextSyncToken:J(i.nextSyncUrl)}:{items:[]}}))}function J(e){var t=e.split("?");return t.length>0?t[1].replace("sync_token=",""):""}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=e.http,n=e.getGlobalOptions,r=_.space.wrapSpace,o=_.contentType,i=o.wrapContentType,c=o.wrapContentTypeCollection,s=_.entry,a=s.wrapEntry,u=s.wrapEntryCollection,f=_.asset,p=f.wrapAsset,y=f.wrapAssetCollection,d=_.locale.wrapLocaleCollection,v=function(e){var t=new Error("The resource could not be found.");return t.sys={type:"Error",id:"NotFound"},t.details={type:"Entry",id:e,environment:n().environment,space:n().space},t};function b(e){if(e.data)throw e.data;if(e.response&&e.response.data)throw e.response.data;throw e}function O(e){e.select&&!/sys/i.test(e.select)&&(e.select+=",sys")}function g(e){e.defaults.baseURL=n().environmentBaseUrl}return{getSpace:function(){return function(e){e.defaults.baseURL=n().spaceBaseUrl}(t),t.get("").then((function(e){return r(e.data)}),b)},getContentType:function(e){return g(t),t.get("content_types/"+e).then((function(e){return i(e.data)}),b)},getContentTypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(t),t.get("content_types",Object(l.b)({query:e})).then((function(e){return c(e.data)}),b)},getEntry:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?this.getEntries(G({"sys.id":e},t)).then((function(t){if(t.items.length>0)return a(t.items[0]);throw v(e)}),b):Promise.reject(v(e))},getEntries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(t);var r=n(e),o=r.resolveLinks,i=r.removeUnresolved;return O(e),t.get("entries",Object(l.b)({query:e})).then((function(e){return u(e.data,{resolveLinks:o,removeUnresolved:i})}),b)},getAsset:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g(t),O(n),t.get("assets/"+e,Object(l.b)({query:n})).then((function(e){return p(e.data)}),b)},getAssets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(t),O(e),t.get("assets",Object(l.b)({query:e})).then((function(e){return y(e.data)}),b)},getLocales:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(t),t.get("locales",Object(l.b)({query:e})).then((function(e){return d(e.data)}),b)},parseEntries:function(e){var t=n({}),r=t.resolveLinks,o=t.removeUnresolved;return u(e,{resolveLinks:r,removeUnresolved:o})},sync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{paginate:!0},o=n(e),i=o.resolveLinks,c=o.removeUnresolved;return g(t),z(t,e,G({resolveLinks:i,removeUnresolved:c},r))}}}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){if(!e.accessToken)throw new TypeError("Expected parameter accessToken");if(!e.space)throw new TypeError("Expected parameter space");var t=H(H({},{resolveLinks:!0,removeUnresolved:!1,defaultHostname:"cdn.contentful.com",environment:"master"}),e),n=Object(l.d)("contentful.js/".concat("0.0.0-determined-by-semantic-release"),t.application,t.integration);t.headers=H(H({},t.headers),{},{"Content-Type":"application/vnd.contentful.delivery.v1+json","X-Contentful-User-Agent":n});var r,o=Object(l.a)(u.a,t),i=(r={resolveLinks:t.resolveLinks,environment:t.environment,removeUnresolved:t.removeUnresolved,spaceBaseUrl:o.defaults.baseURL,environmentBaseUrl:"".concat(o.defaults.baseURL,"environments/").concat(t.environment)},function(e){return Object.assign({},r,e)});return o.defaults.baseURL=i().environmentBaseUrl,function(e){e.interceptors.response.use((function(e){return e}),(function(e){if(e.response&&e.response.config.headers.Authorization){var t=e.response.config.headers.Authorization;e.response.config.headers.Authorization=e.response.config.headers.Authorization.replace(t,"Bearer...".concat(t.substr(-5))),e.response.request._headers&&e.response.request._headers.authorization&&(e.response.request._headers.authorization=e.response.request._headers.authorization.replace(t,"Bearer...".concat(t.substr(-5)))),e.response.request._header&&(e.response.request._header=e.response.request._header.replace(t,"Bearer...".concat(t.substr(-5))))}return Promise.reject(e)}))}(o),F({http:o,getGlobalOptions:i})}}}]);