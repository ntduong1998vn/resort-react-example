(this.webpackJsonpresort=this.webpackJsonpresort||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},110:function(e,t,a){e.exports=a.p+"static/media/logo.c7c76c7a.svg"},113:function(e,t,a){e.exports=a(212)},118:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/room-1.e928a5c4.jpeg"},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),i=a.n(c),o=(a(118),a(15)),l=a(3),m=function(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)};m.defaultProps={hero:"defaultHero"};var s=m,u=function(e){var t=e.children,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,a),r.a.createElement("div",null),r.a.createElement("p",null,n),t)},p=a(10);function d(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t),r.a.createElement("div",null))}var f=a(18);function E(){var e=Object(n.useState)([{icon:r.a.createElement(f.c,null),title:"free cooktails",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."},{icon:r.a.createElement(f.d,null),title:"fahiking cooktails",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."},{icon:r.a.createElement(f.e,null),title:"fashuttle cooktails",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."},{icon:r.a.createElement(f.b,null),title:"fabeer cooktails",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis placeat eos minima, ipsa exercitationem ipsum dolor rerum hic omnis reprehenderit, in voluptatem, nostrum quidem explicabo dignissimos! Corporis, laudantium expedita."}]),t=Object(p.a)(e,2),a=t[0];t[1];return r.a.createElement("section",{className:"services"},r.a.createElement(d,{title:"services"}),r.a.createElement("div",{className:"services-center"},a.map((function(e,t){return r.a.createElement("article",{key:t,className:"service"},r.a.createElement("span",null,e.icon),r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.info))}))))}var b=a(52),v=a.n(b),g=a(36),h=a(19),x=a(27),N=a(85),j=a(86),y=a.n(j),O=a(5),k=a.n(O),S=a(6),C=a.n(S),_=a(7),P=a.n(_),z=a(14),F=a.n(z),T=a(87),w=a.n(T),R=a(88),A=a.n(R),D=a(89),L=a.n(D),H=a(90),W=a.n(H),K=a(91),I=a.n(K),B=a(92),M=a.n(B),$=a(93),q=a.n($),U=a(94),J=a.n(U),V=a(95),G=a.n(V),Q=a(96),X=a.n(Q),Y=a(97),Z=a.n(Y),ee=(F.a,k.a,C.a,P.a,w.a,k.a,C.a,P.a,A.a,k.a,C.a,P.a,L.a,k.a,C.a,P.a,W.a,k.a,C.a,P.a,I.a,k.a,C.a,P.a,M.a,k.a,C.a,P.a,q.a,k.a,C.a,P.a,J.a,k.a,C.a,P.a,G.a,k.a,C.a,P.a,X.a,k.a,C.a,P.a,Z.a,k.a,C.a,P.a,y.a,k.a,C.a,P.a,a(111)),te=Object(ee.a)({space:Object({NODE_ENV:"production",PUBLIC_URL:"/resort-react-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/resort-react-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ACCESS_TOKEN}),ae=r.a.createContext();function ne(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)([]),l=Object(p.a)(o,2),m=l[0],s=l[1],u=Object(n.useState)([]),d=Object(p.a)(u,2),f=d[0],E=d[1],b=Object(n.useState)(!0),j=Object(p.a)(b,2),y=j[0],O=j[1],k=Object(n.useState)({type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1}),S=Object(p.a)(k,2),C=S[0],_=S[1];function P(){return(P=Object(N.a)(v.a.mark((function e(){var t,a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.getEntries({content_type:"resort",order:"fields.price"});case 3:t=e.sent,console.log(t),a=z(t.items),n=a.filter((function(e){return!0===e.featured})),r=Math.max.apply(Math,Object(h.a)(a.map((function(e){return e.price})))),c=Math.max.apply(Math,Object(h.a)(a.map((function(e){return e.size})))),i(a),E(n),s(a),O(!1),_(Object(x.a)({},C,{maxPrice:r,maxSize:c})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function z(e){return e.map((function(e){var t=e.sys.id,a=e.fields.images.map((function(e){return e.fields.file.url}));return Object(x.a)({},e.fields,{images:a,id:t})}))}return Object(n.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){!function(){var e=C.type,t=C.capacity,a=C.price,n=C.minSize,r=C.maxSize,i=C.breakfast,o=C.pets,l=Object(h.a)(c);t=parseInt(t),a=parseInt(a),"all"!==e&&(l=l.filter((function(t){return t.type===e})));1!==t&&(l=l.filter((function(e){return e.capacity>=t})));l=(l=l.filter((function(e){return e.price<=a}))).filter((function(e){return e.size>=n&&e.size<=r})),i&&(l=l.filter((function(e){return!0===e.breakfast})));o&&(l=l.filter((function(e){return!0===e.pets})));s(l)}()}),[C]),r.a.createElement(ae.Provider,{value:Object(x.a)({rooms:c,sortedRooms:m,featuredRooms:f,loading:y},C,{getRoom:function(e){return c.find((function(t){return t.slug===e}))},handleChange:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name,r=Object(x.a)({},C,Object(g.a)({},n,a));_(r)}})},e.children)}var re=ae.Consumer;var ce=a(102),ie=a.n(ce);function oe(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h4",null,"Data Loading"),r.a.createElement("img",{src:ie.a,alt:""}))}function le(e){var t=e.room,a=t.name,n=t.slug,c=t.images,i=t.price;return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:c[0]||F.a,alt:"",className:"single room"}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",i),r.a.createElement("p",null,"per night")),r.a.createElement(l.b,{to:"/rooms/".concat(n),className:"btn-primary room-link"},"Features")),r.a.createElement("p",{className:"room-info"},a))}var me=function(){var e=Object(n.useContext)(ae),t=e.loading,a=e.featuredRooms;return a=a.map((function(e){return r.a.createElement(le,{key:e.id,room:e})})),r.a.createElement("section",{className:"featured-rooms"},r.a.createElement(d,{title:"featured rooms"}),r.a.createElement("div",{className:"featured-rooms-center"},t?r.a.createElement(oe,null):a))},se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{hero:"defaultHero"},r.a.createElement(u,{title:"luxurious rooms",subtitle:"deluxe rooms starting at 300$"},r.a.createElement(l.b,{to:"/rooms",className:"btn-primary"},"Our Rooms"))),r.a.createElement(E,null),r.a.createElement(me,null))},ue=function(e,t){return Object(h.a)(new Set(e.map((function(e){return e[t]}))))},pe=function(e){var t=e.rooms,a=Object(n.useContext)(ae),c=a.handleChange,i=a.type,o=a.capacity,l=a.price,m=a.minPrice,s=a.maxPrice,u=a.minSize,p=a.maxSize,f=a.breakfast,E=a.pets,b=ue(t,"type");b=(b=["all"].concat(Object(h.a)(b))).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));var v=ue(t,"capacity");return v=v.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("section",{className:"filter-container"},r.a.createElement(d,{title:"search rooms"}),r.a.createElement("form",{className:"filter-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",onChange:c,className:"form-control",value:i},b)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"Guests"),r.a.createElement("select",{name:"capacity",id:"capacity",onChange:c,className:"form-control",value:o},v)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"room price $",l),r.a.createElement("input",{type:"range",name:"price",min:m,max:s,id:"price",value:l,onChange:c,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"room size "),r.a.createElement("div",{className:"size-inputs"},r.a.createElement("input",{type:"number",name:"minSize",value:u,onChange:c,className:"size-input"}),r.a.createElement("input",{type:"number",name:"maxSize",value:p,onChange:c,className:"size-input"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:f,onChange:c}),r.a.createElement("label",{htmlFor:"breakfast"},"breakfast")),r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"pets",checked:E,onChange:c}),r.a.createElement("label",{htmlFor:"breakfast"},"pets")))))},de=function(e){var t=e.rooms;return 0===t.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"unfortunately no rooms matched your search parameters")):r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},t.map((function(e){return r.a.createElement(le,{key:e.id,room:e})}))))};var fe,Ee=(fe=function(e){var t=e.context,a=t.loading,n=t.sortedRooms,c=t.rooms;return a?r.a.createElement(oe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{rooms:c}),r.a.createElement(de,{rooms:n}))},function(e){return r.a.createElement(re,null,(function(t){return r.a.createElement(fe,Object.assign({},e,{context:t}))}))});var be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{hero:"roomsHero"},r.a.createElement(u,{title:"our rooms"},r.a.createElement(l.b,{to:"/",className:"btn-primary"},"return home"))),r.a.createElement(Ee,null))},ve=a(104),ge=a(105);function he(){var e=Object(ge.a)(["\n  min-height: 60vh;\n  background: url(",");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return he=function(){return e},e}var xe=a(106).a.header(he(),(function(e){return e.img?e.img:F.a}));var Ne=function(e){var t=Object(n.useState)(e.match.params.slug),a=Object(p.a)(t,2),c=a[0],i=(a[1],Object(n.useContext)(ae).getRoom(c));if(!i)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"no such room could be found"),r.a.createElement(l.b,{to:"/rooms",className:"btn-primary"},"back to rooms"));var o=i.name,m=i.description,s=i.capacity,d=i.size,f=i.price,E=i.extras,b=i.breakfast,v=i.pets,g=i.images,h=Object(ve.a)(g),x=(h[0],h.slice(1));return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,{img:g[0]||F.a},r.a.createElement(u,{title:"".concat(o," room")},r.a.createElement(l.b,{to:"/rooms",className:"btn-primary"},"back to rooms"))),r.a.createElement("section",{className:"single-room"},r.a.createElement("div",{className:"single-room-images"},x.map((function(e,t){return r.a.createElement("img",{key:t,src:e,alt:o})}))),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("article",{className:"desc"},r.a.createElement("h3",null,"details"),r.a.createElement("p",null,m)),r.a.createElement("article",{className:"info"},r.a.createElement("h3",null,"info"),r.a.createElement("h6",null,"price : $",f),r.a.createElement("h6",null,"size : ",d," SQFT"),r.a.createElement("h6",null,"max capacity :","".concat(s,s>1?" people":" person")),r.a.createElement("h6",null,v?"pets allowed":"no pets allowed"),r.a.createElement("h6",null,b&&"free breakfast included")))),r.a.createElement("section",{className:"room-extras"},r.a.createElement("h6",null,"extras "),r.a.createElement("ul",{className:"extras"},E.map((function(e,t){return r.a.createElement("li",{key:t},"- ",e)})))))};function je(){return r.a.createElement(s,null,r.a.createElement(u,{title:"404",subtitle:"page not found"},r.a.createElement(l.b,{to:"/",className:"btn-primary"},"return home")))}var ye=a(110),Oe=a.n(ye),ke=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:Oe.a,alt:"Beach Resort"})),r.a.createElement("button",{type:"button",className:"nav-btn",onClick:function(){c(!a)}},r.a.createElement(f.a,{className:"nav-icon"}))),r.a.createElement("ul",{className:a?"nav-links show-nav":"nav-links"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/rooms"},"Rooms")))))};var Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:se,exact:!0}),r.a.createElement(o.a,{path:"/rooms",component:be,exact:!0}),r.a.createElement(o.a,{path:"/rooms/:slug",component:Ne}),r.a.createElement(o.a,{component:je})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null,r.a.createElement(l.a,null,r.a.createElement(Se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/details-2.50c23e62.jpeg"},53:function(e,t){},6:function(e,t,a){e.exports=a.p+"static/media/details-3.7345b9f6.jpeg"},7:function(e,t,a){e.exports=a.p+"static/media/details-4.7569a316.jpeg"},86:function(e,t,a){e.exports=a.p+"static/media/details-1.33ab9f1e.jpeg"},87:function(e,t,a){e.exports=a.p+"static/media/room-2.052c7681.jpeg"},88:function(e,t,a){e.exports=a.p+"static/media/room-3.9a1103b5.jpeg"},89:function(e,t,a){e.exports=a.p+"static/media/room-4.1e407d88.jpeg"},90:function(e,t,a){e.exports=a.p+"static/media/room-5.a5c06e0b.jpeg"},91:function(e,t,a){e.exports=a.p+"static/media/room-6.b9a34e96.jpeg"},92:function(e,t,a){e.exports=a.p+"static/media/room-7.e251c8d5.jpeg"},93:function(e,t,a){e.exports=a.p+"static/media/room-8.ebb7fca5.jpeg"},94:function(e,t,a){e.exports=a.p+"static/media/room-9.7b17c49f.jpeg"},95:function(e,t,a){e.exports=a.p+"static/media/room-10.3b5c0871.jpeg"},96:function(e,t,a){e.exports=a.p+"static/media/room-11.f08fee37.jpeg"},97:function(e,t,a){e.exports=a.p+"static/media/room-12.0e293352.jpeg"}},[[113,1,2]]]);
//# sourceMappingURL=main.208f2e01.chunk.js.map