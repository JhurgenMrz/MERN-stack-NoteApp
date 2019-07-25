(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(142)},110:function(e,t,a){},112:function(e,t,a){},137:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),o=(a(110),a(24)),s=a(31),u=(a(111),a(112),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"NotesApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Notes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create"},"Create Note")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/user"},"Create User"))))))}),m=a(6),i=a.n(m),p=a(19),d=a(28),f=a(33),v=a.n(f),E=a(12),b=a.n(E),h=(a(136),function(e){return r.a.createElement("div",null,r.a.createElement("div",{key:e.note._id},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",{className:"card-title col-6"},e.note.title),e.note.date>new Date?r.a.createElement("p",{className:"col-4 text-muted"},v()(e.note.date).toNow()):r.a.createElement("p",{className:"col-4 text-muted"},v()(e.note.date).fromNow()),r.a.createElement(o.b,{to:"/edit/".concat(e.note._id),className:"btn btn-info col-2"},"Edit")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.note.content),r.a.createElement("h6",{className:"card-subtitle mb-2 blockquote-footer"},e.note.author)),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.onClickDeleteNote(e.note._id)}},"Delete"),r.a.createElement("p",null,v()(e.note.createdAt).fromNow())))))}),N=(a(137),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))}),g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];function l(){return o.apply(this,arguments)}function o(){return(o=Object(p.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:4000/api/notes");case 2:t=e.sent,a=t.data.reverse(),c(a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){l()},[]),v.a.locale("es");var s=function(){var e=Object(p.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("http://localhost:4000/api/notes/".concat(t));case 2:a=e.sent,console.log(a),l();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},0===a.length?r.a.createElement(N,null):a.map(function(e){return r.a.createElement("div",{className:"col-md-6 p-3 "},r.a.createElement(h,{key:e._id,onClickDeleteNote:s,note:e}))}))},x=a(34),w=a(85),j=(a(141),function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({author:"",title:"",content:"",date:new Date,idNote:""}),s=Object(d.a)(o,2),u=s[0],m=s[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),E=v[0],h=v[1],N=function(){var t=Object(p.a)(i.a.mark(function t(){var a,n,r,c,o,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.match.params.id){t.next=23;break}return m(Object(x.a)({},u,{idNote:e.match.params.id})),h(!0),a=e.match.params.id,n="http://localhost:4000/api/notes/".concat(a),t.next=7,b.a.get(n);case 7:return r=t.sent,t.next=10,r.data;case 10:return c=t.sent,m({author:c.author,title:c.title,content:c.content,date:new Date(c.date)}),t.next=15,b.a.get("http://localhost:4000/api/users");case 15:return o=t.sent,t.t0=l,t.next=19,o.data.map(function(e){return e.username});case 19:t.t1=t.sent,(0,t.t0)(t.t1),t.next=42;break;case 23:return t.next=26,b.a.get("http://localhost:4000/api/users");case 26:return s=t.sent,t.t2=l,t.next=30,s.data.map(function(e){return e.username});case 30:return t.t3=t.sent,(0,t.t2)(t.t3),t.t4=m,t.t5=x.a,t.t6={},t.t7=u,t.next=38,s.data[0].username;case 38:t.t8=t.sent,t.t9={author:t.t8},t.t10=(0,t.t5)(t.t6,t.t7,t.t9),(0,t.t4)(t.t10);case 42:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){N()},[]);var g=function(){var t=Object(p.a)(i.a.mark(function t(a){var n,r,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:u.title,author:u.author,content:u.content,date:u.date},!E){t.next=9;break}return t.next=5,b.a.put("http://localhost:4000/api/notes/".concat(e.match.params.id),n);case 5:r=t.sent,console.log(r),t.next=13;break;case 9:return t.next=11,b.a.post("http://localhost:4000/api/notes",n);case 11:c=t.sent,console.log(c.data.message);case 13:window.location.href="/";case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Create a Note"),r.a.createElement("form",{onSubmit:g},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"author",required:!0,value:u.author,onChange:function(e){return m(Object(x.a)({},u,{author:e.target.value}))}},r.a.createElement("option",{disabled:!0,value:"Select"},"Seleccionar"),c.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",required:!0,value:u.title,onChange:function(e){return m(Object(x.a)({},u,{title:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"content",className:"form-control",placeholder:"Content",required:!0,value:u.content,onChange:function(e){return m(Object(x.a)({},u,{content:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(w.a,{className:"form-control",selected:u.date,onChange:function(e){m(Object(x.a)({},u,{date:e}))}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Note"))))}),k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),s=o[0],u=o[1],m="http://localhost:4000/api/users",f=function(){var e=Object(p.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(m);case 2:t=e.sent,a=t.data,c(a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){f()},[]);var v=function(){var e=Object(p.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.a.post(m,{username:s});case 3:f(),u("");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(m,"/").concat(t));case 2:f();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h3",null,"Create new User"),r.a.createElement("form",{onSubmit:v},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:s,type:"text",className:"form-control",onChange:function(e){u(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))),r.a.createElement("div",{className:"col-md-8"},0===a.length?r.a.createElement(N,null):r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},a.map(function(e){return r.a.createElement("li",{key:e._id,onDoubleClick:function(){return E(e._id)},className:"list-group-item list-group-item-action"},e.username)})))))};var O=function(){return r.a.createElement(o.a,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(s.a,{path:"/",exact:!0,component:g}),r.a.createElement(s.a,{path:"/edit/:id",component:j}),r.a.createElement(s.a,{path:"/create/",component:j}),r.a.createElement(s.a,{path:"/user",component:k})))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.e8e14957.chunk.js.map