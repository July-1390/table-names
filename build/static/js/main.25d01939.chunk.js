(this["webpackJsonpnames-adder"]=this["webpackJsonpnames-adder"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(7),r=a.n(c),i=a(8),l=a(2),o=a(0),j=function(e){var t=e.people,a=e.handleRemovePerson,s=Object(n.useState)(null),c=Object(l.a)(s,2),r=c[0],i=c[1];return Object(o.jsxs)("table",{className:"styled-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"First Name"}),Object(o.jsx)("th",{children:"Last Name"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{onMouseEnter:function(){return i(e.id)},onMouseLeave:function(){return i(null)},className:"".concat(r===e.id?"active-row":""),children:[Object(o.jsx)("td",{children:e.firstName}),Object(o.jsx)("td",{children:e.lastName}),Object(o.jsx)("button",{className:"delete-button ".concat(r===e.id?"visible":""),onClick:function(){return a(e.id)},children:"Delete"})]},e.id)}))})]})},d=a(4),u=function(e){var t=e.createPerson,a=Object(n.useState)({firstName:"",lastName:""}),s=Object(l.a)(a,2),c=s[0],r=s[1];return Object(o.jsxs)("div",{className:"wrapper-form",children:[Object(o.jsx)("input",{type:"text",placeholder:"Your First Name",onChange:function(e){return r(Object(d.a)(Object(d.a)({},c),{},{firstName:e.target.value}))},value:c.firstName}),Object(o.jsx)("input",{type:"text",placeholder:"Your Last Name",value:c.lastName,onChange:function(e){return r(Object(d.a)(Object(d.a)({},c),{},{lastName:e.target.value}))}}),Object(o.jsx)("button",{className:"button add-button",onClick:function(){t(c.firstName,c.lastName),r({firstName:"",lastName:""})},children:"Add New Person"})]})},b=[{id:15,firstName:"John",lastName:"Lewis"},{id:25,firstName:"Tom",lastName:"Hanks"},{id:45,firstName:"Melissa",lastName:"Rauch"},{id:87,firstName:"Laura",lastName:"Spencer"}];a(14);var m=function(){var e=Object(n.useState)(b),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"People Already Here"}),Object(o.jsx)(j,{people:a,handleRemovePerson:function(e){var t=a.filter((function(t){return t.id!==e}));s(t)}}),Object(o.jsx)(u,{createPerson:function(e,t){if(""!==e&&""!==t){var n={id:parseInt(1e4*Math.random()),firstName:e,lastName:t},c=[].concat(Object(i.a)(a),[n]);s(c)}}})]})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.25d01939.chunk.js.map