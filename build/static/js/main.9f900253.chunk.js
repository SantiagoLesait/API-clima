(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(7),r=c.n(i),l=(c(14),c(5)),j=c.n(l),d=c(8),o=c(3),u=c(6),b=c(2),h=function(e){var t=e.busqueda,c=e.handleBusqueda,s=e.setConsulta,i=Object(n.useState)(!1),r=Object(b.a)(i,2),l=r[0],j=r[1],d=t.ciudad,o=t.pais;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==o.trim()?(j(!1),s(!0)):j(!0)},children:[l?Object(a.jsx)("p",{className:"red accent-4 error",children:"Todos los campos son obligatorios"}):null,Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsx)("input",{type:"text",name:"ciudad",id:"ciudad",value:d,onChange:c}),Object(a.jsx)("label",{htmlFor:"ciudad",children:"Ciudad:"})]}),Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsxs)("select",{name:"pais",id:"pais",value:o,onChange:c,children:[Object(a.jsx)("option",{value:"",children:"-- Seleccione un pais --"}),Object(a.jsx)("option",{value:"USA",children:"Estados Unidos"}),Object(a.jsx)("option",{value:"MX",children:"Mexico"}),Object(a.jsx)("option",{value:"AR",children:"Argentina"}),Object(a.jsx)("option",{value:"BR",children:"Brasil"}),Object(a.jsx)("option",{value:"NG",children:"Nigeria"})]}),Object(a.jsx)("label",{htmlFor:"pais",children:"Pais:"})]}),Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("input",{type:"submit",value:"Buscar ciudad",className:"waves-effect waves-light btn-large btn-block yellow accent-4"})})]})})},O=function(e){var t=e.titulo;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{children:Object(a.jsx)("div",{className:"nav-wrapper light-blue darken-2",children:Object(a.jsx)("a",{href:"!",className:"brand-logo",children:t})})})})},m=function(e){var t=e.data,c=(e.error,t.name),n=t.main;return c?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"card-panel white col s12",children:Object(a.jsxs)("div",{className:"black-text",children:[Object(a.jsxs)("h2",{children:["La temperatura en ",c," es:"]}),Object(a.jsx)("p",{className:"temperatura",children:(n.temp-273.1).toFixed(2)+"\xb0C"}),Object(a.jsxs)("h2",{children:["La temperatura maxima en ",c," es:"]}),Object(a.jsx)("p",{children:(n.temp_max-273.1).toFixed(2)+"\xb0C"}),Object(a.jsxs)("h2",{children:["La temperatura minima en ",c," es:"]}),Object(a.jsx)("p",{children:(n.temp_min-273.1).toFixed(2)+"\xb0C"}),Object(a.jsxs)("h2",{children:["La sensacion termica en ",c," es:"]}),Object(a.jsx)("p",{children:(n.feels_like-273.1).toFixed(2)+"\xb0C"})]})})}):null},x=function(e){var t=e.mensaje;return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"red accent-4 error",children:t})})};var p=function(){var e,t=Object(n.useState)({ciudad:"",pais:""}),c=Object(b.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(!1),l=Object(b.a)(r,2),p=l[0],v=l[1],f=Object(n.useState)({}),g=Object(b.a)(f,2),N=g[0],F=g[1],C=Object(n.useState)(!1),w=Object(b.a)(C,2),S=w[0],k=w[1],B=s.ciudad,y=s.pais;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=11;break}return"e2cacd9fbb50ac6e188473a239037b08",t="https://api.openweathermap.org/data/2.5/weather?q=".concat(B,",").concat(y,"&appid=").concat("e2cacd9fbb50ac6e188473a239037b08"),e.next=5,fetch(t);case 5:return c=e.sent,e.next=8,c.json();case 8:a=e.sent,F(a),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),"404"===N.cod?k(!0):k(!1)}),[p]),e=S?Object(a.jsx)(x,{mensaje:"No hay resultados"}):Object(a.jsx)(m,{data:N,error:S}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{titulo:"Clima React App"}),Object(a.jsx)("div",{className:"contenedor-form",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col m6 s12",children:Object(a.jsx)(h,{busqueda:s,handleBusqueda:function(e){i(Object(u.a)(Object(u.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))},setConsulta:v})}),Object(a.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.9f900253.chunk.js.map