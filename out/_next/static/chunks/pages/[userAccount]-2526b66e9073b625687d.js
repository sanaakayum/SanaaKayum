_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"1jaE":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),s=(t("qhky"),t("8Kt/")),i=t.n(s),o=l.a.createElement;a.a=function(e){var a=e.article,t=e.title,l=e.description,s=e.image,c=e.keywords,r=e.url,m=e.color;return o(n.Fragment,null,o(i.a,null,o("title",null,t),o("link",{rel:"canonical",href:"https://sanaakayum.com".concat(r)}),o("base",{target:"_blank"}),o("link",{href:"https://images.ctfassets.net/",rel:"dns-prefetch"}),o("meta",{name:"description",property:"description",itemProp:"description",content:"".concat(a,"s by Sana'a Kayum | ").concat(l)}),o("meta",{name:"keywords",property:"keywords",content:c}),o("meta",{name:"theme-color",content:m}),o("meta",{name:"og:title",property:"og:title",content:l}),o("meta",{name:"og:description",property:"og:description",content:"".concat(a,"s by Sana'a Kayum | ").concat(l)}),o("link",{rel:"stylesheet",type:"text/css",href:"/assets/css/nprogress.css"}),o("meta",{name:"og:image",property:"og:image",content:"".concat(s,"?fm=png&w=1200&h=627&f=center&fit=pad"),itemProp:"image"}),o("meta",{name:"og:type",content:"website"}),o("meta",{name:"og:url",property:"og:url",content:"https://sanaakayum.com/".concat(r)}),o("meta",{property:"og:image:secure_url",name:"og:image:secure_url",content:"".concat(s,"?fm=png&w=1200&h=627&f=center&fit=pad")}),o("meta",{property:"og:image:type",name:"og:image:type",content:"image/jpg"}),o("meta",{property:"og:image:width",name:"og:image:width",content:"1200"}),o("meta",{property:"og:image:height",name:"og:image:height",content:"627"}),o("meta",{property:"og:image:alt",name:"og:image:alt",content:l}),o("meta",{property:"og:site_name",name:"og:site_name",content:"Sana'a Kayum"}),o("meta",{property:"og:locale",name:"og:locale",content:"en_US"}),o("meta",{property:"og:type",name:"og:type",content:"website"}),o("meta",{itemProp:"name",content:l+" | Sana'a Kayum"}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:card",content:"app"}),o("meta",{name:"twitter:site",content:"@SKClothingart"}),o("meta",{name:"twitter:creator",content:"@SKClothingart"}),o("meta",{name:"twitter:title",content:t}),o("meta",{name:"twitter:description",content:"".concat(a,"s by Sana'a Kayum | ").concat(l)}),o("meta",{name:"twitter:app:country",content:"ae"}),o("meta",{name:"twitter:image",content:"".concat(s,"?fm=png&w=1200&h=627&f=center&fit=pad")})))}},HAfi:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-account",function(){return t("XqBn")}])},XqBn:function(e,a,t){"use strict";t.r(a),t.d(a,"uploadToContentful",(function(){return w}));var n=t("q1tI"),l=t.n(n),s=(t("RMWC"),t("6xyR")),i=t("DZHF"),o=t("w62z"),c=t("1jaE"),r=t("/MKj"),m=t("tbn6"),u=t("3AC9"),d=t("nOHt"),p=t("wx14"),g=t("zM5D"),y=t("cWnB"),b=t("fwV1"),f=l.a.createElement;var v=function(e){var a=e.userdata,t=Object(n.useState)(""),l=t[0],s=t[1],i=Object(n.useState)(""),o=i[0],c=i[1],r=Object(n.useState)(""),u=r[0],d=r[1],v=Object(m.useToasts)().addToast,N=a.entryID;return f(g.a,Object(p.a)({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),f(g.a.Header,{closeButton:!0},f(g.a.Title,{id:"contained-modal-title-vcenter"},"Current Address")),f(g.a.Body,null,f("div",{className:"col-lg-12"},f("div",{className:"billing-info mb-20"},f("label",null,"Street Address"),f("input",{className:"billing-address",placeholder:"Street Address",type:"text",name:"addressLine",onChange:function(e){return d(e.target.value)}}))),f("div",{className:"col-lg-12"},f("div",{className:"billing-select mb-20"},f("label",null,"State / County"),f(b.a,{value:l,onChange:function(e){return s(e)}}),f("label",null,"Town / City"),f(b.b,{country:l,value:o,onChange:function(e){return c(e)}})))),f(g.a.Footer,null,f(y.a,{className:"btn-success",onClick:function(){w("addressDetails",{country:l,region:o,addressLine:u},N,v)}},"Confirm Address")))},N=l.a.createElement,w=function(e,a,t,n){u.a.then((function(e){return e.getEntry(t)})).then((function(t){return t.fields[e]={"en-US":a},t.update()})).then((function(e){return e.publish()})).finally(n(e+" changed successfully!",{appearance:"success",autoDismiss:!0}))};a.default=Object(r.b)((function(e){return{user:e.userData}}))((function(e){var a=e.user,t=Object(n.useState)("d-none"),r=t[0],u=t[1],p=Object(d.useRouter)().query.userAccount,g=Object(m.useToasts)().addToast,y=Object(n.useState)(!1),b=y[0],f=y[1],h=/(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,8}\w+/,S=a.user,k=S.entryID;return N(n.Fragment,null,N(c.a,{article:"Exquisite Wardrobe",title:"".concat(p,"'s Account"),description:"Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions.",image:"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png",keywords:"Sana'a Kayum, Dubai, Fashion ",url:"/".concat(p),color:"#000000"}),N(o.a,{headerTop:"visible"},N("div",{className:"myaccount-area pb-80 pt-100"},N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"ml-auto mr-auto col-lg-9"},N("div",{className:"myaccount-wrapper"},N(i.a,{defaultActiveKey:"0"},N(s.a,{className:"single-my-account mb-20"},N(s.a.Header,{className:"panel-heading"},N(i.a.Toggle,{variant:"link",eventKey:"0"},N("h3",{className:"panel-title"},N("span",null,"1 .")," Edit your account information"," "))),N(i.a.Collapse,{eventKey:"0"},N(s.a.Body,null,N("div",{className:"myaccount-info-wrapper"},N("div",{className:"account-info-wrapper"},N("h4",null,"My Account Information"),N("h5",null,S.firstName,"'s Details")),N("div",{className:"row"},N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"billing-info"},N("label",null,"First Name"),N("input",{type:"text",defaultValue:S.firstName,name:"firstName"}))),N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"billing-info"},N("label",null,"Last Name"),N("input",{type:"text",defaultValue:S.lastName,name:"lastName"}))),N("div",{className:"col-lg-12 col-md-12"},N("div",{className:"billing-info"},N("label",null,"Email Address"),N("input",{type:"email",defaultValue:S.email,name:"email"}))),N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"billing-info"},N("label",null,"Telephone"),N("input",{type:"text",defaultValue:S.mobile,name:"mobile"}))),N("div",{className:"col-lg-6 col-md-6"},N("div",{className:"billing-info"},N("label",null,"Username"),N("input",{type:"text",defaultValue:S.username,name:"username"})))),N("div",{className:"billing-info"},N("ul",null,S.facebook?N("li",null,N("i",{className:"fa fa-facebook"})," ",S.facebook):"",S.instagram?N("li",null,N("i",{className:"fa fa-instagram"})," ",S.instagram):"")),N("div",{className:"billing-back-btn"},N("div",{className:"billing-btn"},N("button",{onChange:function(e){e.preventDefault(),document.querySelector("input[name='firstName']").value!==S.firstName&&w("firstName",document.querySelector("input[name='firstName']").value,k,g),document.querySelector("input[name='lastName']").value!==S.lastName&&w("lastName",document.querySelector("input[name='lastName']").value,k,g),document.querySelector("input[name='email']").value!==S.email&&w("email",document.querySelector("input[name='email']").value,k,g),document.querySelector("input[name='mobile']").value!==S.mobile&&w("mobile",document.querySelector("input[name='mobile']").value,k,g),document.querySelector("input[name='username']").value!==S.username&&w("username",document.querySelector("input[name='username']").value,k,g)},type:"submit"},"Continue"))))))),N(s.a,{className:"single-my-account mb-20"},N(s.a.Header,{className:"panel-heading"},N(i.a.Toggle,{variant:"link",eventKey:"1"},N("h3",{className:"panel-title"},N("span",null,"2 .")," Change your password"))),N(i.a.Collapse,{eventKey:"1"},N(s.a.Body,null,N("div",{className:"myaccount-info-wrapper"},N("div",{className:"account-info-wrapper"},N("h4",null,"Change Password"),N("h5",null,"Your Password")),N("div",{className:"row"},N("div",{className:"col-lg-12 col-md-12"},N("div",{className:"billing-info"},N("label",null,"Password"),N("input",{name:"new-password",type:"password"}),N("span",{className:"text-danger ".concat(r)},"Password should contain eight characters of atleast one uppercase, one lowercase and a number"))),N("div",{className:"col-lg-12 col-md-12"},N("div",{className:"billing-info"},N("label",null,"Password Confirm"),N("input",{name:"confirm-password",type:"password"})))),N("div",{className:"billing-back-btn"},N("div",{className:"billing-btn"},N("button",{onClick:function(e){var a;e.preventDefault(),h.test(document.querySelector("input[name='new-password']").value)&&document.querySelector("input[name='new-password']").value===document.querySelector("input[name='confirm-password']").value?(u("d-none"),a=document.querySelector("input[name='new-password']").value,S.password!==a?w("password",a,k,g):g("Still the old password? Its a keeper !",{appearance:"error",autoDismiss:!0})):u("d-block")},type:"submit"},"Continue"))))))),N(s.a,{className:"single-my-account mb-20"},N(s.a.Header,{className:"panel-heading"},N(i.a.Toggle,{variant:"link",eventKey:"2"},N("h3",{className:"panel-title"},N("span",null,"3 .")," Modify your address book entries"," "))),N(i.a.Collapse,{eventKey:"2"},N(s.a.Body,null,N("div",{className:"myaccount-info-wrapper"},N("div",{className:"account-info-wrapper"},N("h4",null,"Address Book Entries")),N("div",{className:"entries-wrapper"},N("div",{className:"row"},N("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},N("div",{className:"entries-info text-center"},S.addressDetails?N(l.a.Fragment,null,N("p",null,S.addressDetails.addressLine),N("p",null,S.addressDetails.region,",",S.addressDetails.country)):N("button",{onClick:function(){return f(!0)},className:"addAddress btn-primary"},"Add Address"))),N("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},S.addressDetails?N("div",{className:"entries-edit-delete text-center"},N("button",{onClick:function(){return f(!0)},className:"edit"},"Edit"),N("button",{onClick:function(){w("addressDetails","",k,g)}},"Delete")):N("div",{className:"entries-edit-delete text-center"},N("button",{className:"edit",disabled:!0},"Edit"),N("button",{disabled:!0},"Delete"))),N(v,{show:b,onHide:function(){return f(!1)},userdata:S}))),N("div",{className:"billing-back-btn"},N("div",{className:"billing-btn"},N("button",{type:"submit"},"Continue")))))))))))))))}))}},[["HAfi",0,1,3,2,5,4,6,7,9,10,12]]]);