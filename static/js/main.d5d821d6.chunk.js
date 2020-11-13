(this["webpackJsonppokemon-card"]=this["webpackJsonppokemon-card"]||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),s=n(9),i=n.n(s),o=(n(61),n(50)),l=n(27),u=n.n(l),d=n(45),p=n(12),j=function(e){return function(t){return t?[e,t].join("__"):e}},b={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},f=n(106),h=n(114),m=n(110),O=n(72),g=(n(63),Object(f.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))),x=function(e){var t=e.pokemon,n=g(),a=r.a.useState(!1),s=Object(p.a)(a,2),i=s[0],o=s[1];return Object(c.jsxs)("div",{className:"open-modal",children:[Object(c.jsx)("img",{onClick:function(){o(!0)},className:"img",src:t.sprites.front_default}),Object(c.jsx)(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:i,onClose:function(){o(!1)},closeAfterTransition:!0,BackdropComponent:m.a,BackdropProps:{timeout:500},children:Object(c.jsx)(O.a,{in:i,children:Object(c.jsxs)("div",{className:n.paper,children:[Object(c.jsx)("p",{children:"Pokemon base experience"}),Object(c.jsx)("p",{id:"transition-modal-title",children:t.base_experience}),Object(c.jsx)("p",{children:"Pokemon base stat"}),Object(c.jsx)("p",{id:"transition-modal-description",children:t.stats[0].base_stat})]})})})]})},v=(n(67),j("pokemon-card")),k=function(e){var t=e.pokemon,n=e.clickOnType;return Object(c.jsxs)("div",{className:v(),children:[Object(c.jsxs)("div",{className:v("avatar-container"),children:[Object(c.jsx)(x,{pokemon:t,children:" "}),Object(c.jsx)("div",{className:v("avatar-container__types-wrapper"),children:t.types.map((function(e,t){return Object(c.jsx)("div",{onClick:n,style:{backgroundColor:b[e.type.name]},id:e.type.name,className:v("avatar-container__types-wrapper__type"),children:e.type.name},t)}))})]}),Object(c.jsxs)("div",{className:v("name"),children:[t.name," "]}),Object(c.jsxs)("div",{className:v("pokemon-stats"),children:[Object(c.jsxs)("div",{className:v("pokemon-stats__weight"),children:[Object(c.jsx)("p",{children:"Weight"}),Object(c.jsx)("p",{children:t.weight})]}),Object(c.jsxs)("div",{className:v("pokemon-stats__height"),children:[Object(c.jsx)("p",{children:"Height"}),Object(c.jsx)("p",{children:t.height})]})]})]})},y=n(115),C=n(113),N=n(111),w=n(112),_=(n(68),j("select")),P=Object(f.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:10}}}));function S(e){var t=e.setPokemonPerPage,n=P(),a=r.a.useState("10"),s=Object(p.a)(a,2),i=s[0],o=s[1],l=r.a.useState(!1),u=Object(p.a)(l,2),d=u[0],j=u[1];return Object(c.jsx)("div",{className:_(),children:Object(c.jsxs)(N.a,{className:n.formControl,children:["Pokemons per page",Object(c.jsx)(y.a,{id:"demo-controlled-open-select-label"}),Object(c.jsxs)(w.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:d,onClose:function(){j(!1)},onOpen:function(){j(!0)},value:i,onChange:function(e){o(e.target.value),t(e.target.value)},children:[Object(c.jsx)(C.a,{value:10,children:"Ten"}),Object(c.jsx)(C.a,{value:20,children:"Twenty"}),Object(c.jsx)(C.a,{value:50,children:"Fifty"})]})]})})}n(69);var T=j("App");var F=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),l=i[0],j=i[1],f=Object(a.useState)(!0),h=Object(p.a)(f,2),m=h[0],O=h[1],g=Object(a.useState)(10),x=Object(p.a)(g,2),v=x[0],y=x[1],C=Object(a.useState)(""),N=Object(p.a)(C,2),w=N[0],_=N[1],P=Object(a.useState)([]),F=Object(p.a)(P,2),B=F[0],E=F[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(v));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,I(n.results);case 9:c=e.sent,r(c),j(c),O(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]);var I=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){if(!(0===w.length&&B.length>0))if(0===w.length&&0===B.length)r(l);else{if(!(w.length>0))return;var e=l.filter((function(e){return e.name.includes(w.toLowerCase())}));r(e)}}),[w]),Object(a.useEffect)((function(){if(!(0===B.lentgh&&w.length>0))if(0===w.length&&0===B.length)r(l);else{if(!(B.length>0))return;var e=l.filter((function(e){var t,n=e.types.map((function(e){return e.type.name}));return t=B,n.filter((function(e){return t.indexOf(e)>-1})).length>0}));r(e)}}),[B]);var L=function(e){B.includes(e.target.id)||E([].concat(Object(o.a)(B),[e.target.id]))},A=function(e){var t=B.filter((function(t){return t!==e.target.id}));E(t)};return Object(c.jsxs)("div",{className:T(),children:[Object(c.jsxs)("div",{className:T("nav-bar"),children:[Object(c.jsx)("input",{onChange:function(e){_(e.target.value)},value:w,placeholder:"search by name",className:T("input")}),Object(c.jsx)(S,{setPokemonPerPage:y,setSearchTerm:_,setSearchByTypes:E}),Object(c.jsxs)("div",{className:T("search-by-types"),children:["click on types for search by type",B.map((function(e,t){return Object(c.jsx)("span",{onClick:A,style:{backgroundColor:b[e]},id:e,children:e},t)}))]})]}),m?Object(c.jsx)("h1",{children:"Loading..."}):Object(c.jsx)(c.Fragment,{children:n.map((function(e){return Object(c.jsx)(k,{clickOnType:L,pokemon:e},e.name)}))})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(F,{}),document.getElementById("root")),B()}},[[70,1,2]]]);
//# sourceMappingURL=main.d5d821d6.chunk.js.map