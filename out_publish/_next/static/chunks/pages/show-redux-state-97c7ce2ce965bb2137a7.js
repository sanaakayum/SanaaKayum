_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"7vlR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show-redux-state",function(){return n("pirR")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,a=o(n("q1tI")),u=n("elyg"),i=n("nOHt"),l=new Map,f=window.IntersectionObserver,s={};var p=function(e,t){var n=c||(f?c=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),s[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",c=a.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,u.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),l=c.href,h=c.as,v=e.children,w=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=a.Children.only(v),E=_&&"object"===typeof _&&_.ref,m=a.default.useRef(),L={ref:a.default.useCallback((function(e){(m.current&&(m.current(),m.current=void 0),t&&f&&e&&e.tagName&&(0,u.isLocalURL)(l))&&(s[l+"%"+h]||(m.current=p(e,(function(){d(n,l,h,{locale:"undefined"!==typeof b?b:n&&n.locale})}))));E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[t,E,l,h,n,b]),onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,h,w,y,g,b)}};return t&&(L.onMouseEnter=function(e){(0,u.isLocalURL)(l)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),d(n,l,h,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(L.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof b?b:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(_,L)};t.default=h},pirR:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("/MKj"),a=n("YFqc"),u=n.n(a),i=o.a.createElement,l={background:"#ebebeb",width:400,padding:10,border:"1px solid grey",marginBottom:10};t.default=function(){var e=Object(c.c)((function(e){return e}));return i(o.a.Fragment,null,i("pre",{style:l},i("code",null,JSON.stringify(e,null,4))),i(u.a,{href:"/"},i("a",null,"Go Back Home")))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["7vlR",0,1,2,3]]]);