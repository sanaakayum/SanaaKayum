_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"0gQz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.render=b;var r=n("q1tI"),i=m(r),c=m(n("17x9")),l=m(n("8+s/")),u=n("7XLz"),s=n("C28R");function m(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],a="link"===e?"href":"content";return Object.keys(t).forEach((function(o){var r=t[o];"string"!==typeof r?Object.keys(r).forEach((function(t){(Array.isArray(r[t])?r[t]:[r[t]]).forEach((function(r){var i;null!==r&&n.push((g(i={tagName:e},o,t),g(i,a,r),i))}))})):n.push(g({tagName:e},o,r))})),n}function h(e){return[].concat(y("meta",e.meta),y("link",e.link))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function a(e){var n=e.tagName,a=p(e,["tagName"]);return"meta"===n?i.default.createElement("meta",o({},a,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",o({},a,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),h(e).reduce((function(e,t){return e.push(a(t)),e}),n)}var v=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(r.Component);v.propTypes={title:c.default.oneOfType([c.default.string,c.default.func]),description:c.default.oneOfType([c.default.string,c.default.func]),canonical:c.default.oneOfType([c.default.string,c.default.func]),base:c.default.string,meta:c.default.objectOf(c.default.oneOfType([c.default.string,c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))])),link:c.default.objectOf(c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))),auto:c.default.objectOf(c.default.bool)};var w=(0,l.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},a=!0,o=function(){a=e[r].hasOwnProperty("extend");var o=e[r],i=(0,u.clone)(e[r]);["title","description","canonical"].forEach((function(e){o.hasOwnProperty(e)&&("function"===typeof o[e]?n[e]=o[e](n[e]):void 0===n[e]&&(n[e]=o[e]))})),(0,u.defaults)(t,i)},r=e.length-1;a&&r>=0;r--)o();return"string"===typeof n.title&&(t.title=n.title),"string"===typeof n.description&&(0,u.defaults)(t,{meta:{name:{description:n.description}}}),"string"===typeof n.canonical&&(0,u.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){s.canUseDOM&&("string"===typeof e.title&&(document.title=e.title),(0,s.insertDocumentMeta)(h(e)))}))(v);w.renderAsReact=function(){return b(w.rewind())},t.default=w},"1jaE":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("qhky"),i=(n("0gQz"),o.a.createElement);t.a=function(e){var t=e.article,n=e.title,a=e.description,o=e.image,c=e.keywords,l=e.url,u=e.color;return i(r.a,null,i("title",null,n),i("link",{rel:"canonical",href:"https://sanaakayum.com".concat(l)}),i("base",{target:"_blank",href:""}),i("link",{href:"https://images.ctfassets.net/",rel:"dns-prefetch"}),i("meta",{property:"Description",content:"".concat(t,"s by Sana'a Kayum | ").concat(a)}),i("meta",{name:"Keywords",content:c}),i("meta",{name:"theme-color",content:u}),i("meta",{property:"og:title",content:a}),i("meta",{property:"og:description",content:"".concat(t,"s by Sana'a Kayum | ").concat(a)}),i("meta",{name:"og:title",content:a}),i("meta",{name:"og:description",content:"".concat(t,"s by Sana'a Kayum | ").concat(a)}),i("meta",{name:"og:image",content:o}),i("meta",{name:"og:type",content:"website"}),i("meta",{name:"og:url",content:"https://sanaakayum.com".concat(l)}),i("meta",{name:"og:image:secure_url",content:o}),i("meta",{name:"og:image:type",content:"image/jpg"}),i("meta",{name:"og:image:width",content:"200"}),i("meta",{name:"og:image:height",content:"200"}),i("meta",{name:"og:image:alt",content:a}),i("meta",{name:"og:site_name",content:"Sana'a Kayum"}),i("meta",{name:"og:locale",content:"en_US"}),i("meta",{name:"og:type",content:"website"}),i("meta",{name:"og:type",content:"website"}),i("meta",{name:"og:url",content:"https://sanaakayum.com".concat(l)}),i("meta",{property:"og:image:secure_url",content:o}),i("meta",{property:"og:image:type",content:"image/jpg"}),i("meta",{property:"og:image:width",content:"200"}),i("meta",{property:"og:image:height",content:"200"}),i("meta",{property:"og:image:alt",content:a}),i("meta",{property:"og:site_name",content:"Sana'a Kayum"}),i("meta",{property:"og:locale",content:"en_US"}),i("meta",{property:"og:type",content:"website"}),i("meta",{itemProp:"name",content:a+" | Sana'a Kayum"}),i("meta",{itemProp:"description",content:"".concat(t,"s by Sana'a Kayum | ").concat(a)}),i("meta",{itemProp:"image",content:o}),i("meta",{name:"twitter:card",content:"summary_large_image"}),i("meta",{name:"twitter:card",content:"app"}),i("meta",{name:"twitter:site",content:"@SKClothingart"}),i("meta",{name:"twitter:creator",content:"@SKClothingart"}),i("meta",{name:"twitter:title",content:n}),i("meta",{name:"twitter:description",content:"".concat(t,"s by Sana'a Kayum | ").concat(a)}),i("meta",{name:"twitter:app:country",content:"ae"}),i("meta",{name:"twitter:image",content:o}))}},"7XLz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,a=e.base,o=e.canonical,r=e.meta,i=e.link,c=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:a,canonical:o,meta:r,link:i,auto:c}))}catch(l){return{}}},t.defaults=function e(t,n){return Object.keys(n).reduce((function(o,r){return t.hasOwnProperty(r)?"object"===a(t[r])&&!Array.isArray(t[r])&&t[r]&&e(t[r],n[r]):t[r]=n[r],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},"8+s/":function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=n("q1tI"),r=a(o),i=a(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!==typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function m(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),m()},c.componentDidUpdate=function(){m()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),m()},c.render=function(){return r.createElement(a,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),c(f,"canUseDOM",l),f}}},C28R:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=r,t.insertDocumentMeta=function(e){r(),(0,a.forEach)(e,i)};var a=n("7XLz");t.canUseDOM=!("undefined"===typeof window||!window.document||!window.document.createElement);function o(e){e.parentNode.removeChild(e)}function r(){(0,a.forEach)(document.querySelectorAll("head [data-rdm]"),o)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["tagName"]),a=document.createElement(t);for(var o in n)e.hasOwnProperty(o)&&a.setAttribute(o,e[o]);a.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(a)}},Gytx:function(e,t){e.exports=function(e,t,n,a){var o=n?n.call(a,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<r.length;l++){var u=r[l];if(!c(u))return!1;var s=e[u],m=t[u];if(!1===(o=n?n.call(a,s,m,u):void 0)||void 0===o&&s!==m)return!1}return!0}},pg7x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lookbook",function(){return n("ypl5")}])},ypl5:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("/MKj"),i=n("1jaE"),c=n("rZvH"),l=n("3Vja"),u=n("UudH"),s=(n("M8f+"),o.a.createElement),m=function(e){var t=e.layout,n=(e.top,e.borderStyle,e.headerPaddingClass,e.headerBgClass,Object(a.useState)(0)),o=n[0],r=n[1],i=Object(a.useState)(0),m=(i[0],i[1]);Object(a.useEffect)((function(){var e=document.querySelector(".lookbook-header");return m(e.offsetTop),window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[]);var f=function(){r(window.scrollY)};return s("header",{className:"lookbook-header ".concat(o>10?"shrink":"")},s("div",{className:"container-fluid"===t?t:"container"},s("div",{className:"row "},s("div",{className:"col-xl-3 col-lg-8 d-lg-block"},s("div",{className:"logo text-center logo-hm5"},s("a",{className:"sticky-none",href:"/"},s("img",{alt:"",src:"/assets/img/logo/logo-gold.png"})),s("a",{className:"sticky-block",href:"/"},s("img",{alt:"",src:"/assets/img/logo/logo-gold.png"})))),s("div",{className:"col-xl-6 col-lg-8 d-none d-lg-block"},s(c.a,null)),s("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},s(l.a,null))),s(u.a,null)))},f=n("b6Qr"),d=n("zM5D"),p=n("YFqc"),g=n.n(p),y=o.a.createElement,h=function(e){var t=e.items,n=Object(a.useState)(!1),r=n[0],i=n[1],c=Object(a.useState)("Beautiful"),l=(c[0],c[1]),u=Object(a.useState)("donning"),s=u[0],m=u[1],p=Object(a.useState)(0),h=p[0],b=p[1],v=function(e){return Math.random()*e|0},w=function(){var e=["Beautiful","Gorgeous","Charming","Elegant"];return e[v(e.length)]},O=Object(a.useState)(""),k=O[0],N=O[1];return Object(a.useEffect)((function(){l(w()),N(t.map((function(e,t){return y(a.Fragment,{key:e.id},y("div",{className:"grid-item grid-item-".concat(t+1," ").concat(t%3?t%2?"span-2":"span-3":""," ").concat(t%2?"span-2":"")},y("div",{className:"product-wrap",onClick:function(){console.log("click recorded"),function(){var e=["donning","rocking","enrobed in","stuns in","adorns"];m(e[v(e.length)])}(),w(),i(!0),b(e)}},y("div",{className:"product-img"},y("img",{className:"default-img",itemProp:"image",alt:e.collectionName,loading:"lazy",title:e.collectionName+" "+e.article+" by Sana'a Kayum",src:f.isSafari?"".concat(""+e.image[0].fields.file.url,"?fm=jpg"):""+e.image[0].fields.file.url}),e.image.length>1?y("img",{className:"hover-img",itemProp:"image",alt:e.collectionName,loading:"lazy",title:e.collectionName+" "+e.article+" by Sana'a Kayum",src:f.isSafari?"".concat(""+e.image[1].fields.file.url,"?fm=jpg"):""+e.image[1].fields.file.url}):""))))})))}),[t]),k?y(o.a.Fragment,null,y("div",{className:"lookbook-wrapper"},y("div",{className:"grid-layout"},k),y(d.a,{show:r,onHide:function(){return i(!1)}},y(d.a.Header,{closeButton:!0}),y(d.a.Body,null,y("div",{className:"row mx-5"},y("div",{className:"col-md-5 col-sm-12 col-xs-12"},y("div",{className:"product-wrap"},y("div",{className:"product-img"},y("img",{className:"default-img",itemProp:"image",alt:h?h.collectionName:"",loading:"lazy",title:"".concat(h?h.collectionName:"").concat(h?h.article:""," by Sana'a Kayum"),src:h.images?f.isSafari?"".concat(""+h.images[0].fields.file.url,"?fm=jpg"):""+h.images[0].fields.file.url:""}),h.images&&h.image.length>1?y("img",{className:"hover-img",itemProp:"image",alt:h.collectionName,loading:"lazy",title:h.collectionName+" "+h.article+" by Sana'a Kayum",src:h.images?f.isSafari?"".concat(""+h.images[1].fields.file.url,"?fm=jpg"):""+h.images[1].fields.file.url:""}):""))),y("div",{className:"col-md-5 col-sm-12 col-xs-12"},y("div",{className:"details-wrapper"},y("h5",{className:"collection-name"},h.collectionName," Collection by Sana'a Kayum"),y("h6",{className:"article-name"},h.article),y("p",{className:"description"}," "+h.clientName+" ",s," ",h.description?-1!=["A","E","I","O","U"].indexOf(h.description.split(" ")[0][0])?" an "+h.description:" a "+h.description:"")))),y("div",{className:"row mt-3"},y("div",{className:"col "}),y("div",{className:"col span-3 text-center"},y(g.a,{href:h.collectionName?"shop?search="+h.collectionName.toLowerCase():"'"},y("button",{className:"stlBtn"},"Shop The Look"))),y("div",{className:"col"})))))):""},b=o.a.createElement;t.default=Object(r.b)((function(e){return{lookbooks:e.lookbookData.lookbooks}}))((function(e){return b(o.a.Fragment,null,b(i.a,{article:"Exquisite Wardrobe",title:"Haute Couture & High-Street Fashion",description:"Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions.",image:"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png",keywords:"Sana'a Kayum, Dubai, Fashion ",url:"https://sanaakayum.com",color:"#000000"}),b(m,{layout:"container-fluid",top:"visible",headerPaddingClass:"header-padding-2"}),b(h,{items:e.lookbooks}))}))}},[["pg7x",0,1,2,4,3,5,6,10,12]]]);