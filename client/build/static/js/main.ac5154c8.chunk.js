(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{27:function(e,n,a){e.exports=a(63)},32:function(e,n,a){},33:function(e,n,a){},34:function(e,n,a){},40:function(e,n,a){},41:function(e,n,a){},42:function(e,n,a){},60:function(e,n,a){},61:function(e,n,a){},63:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(24),c=a.n(o),l=(a(32),a(8)),i=a(1);a(33),a(34);var s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Google Books"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav nav-links"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/search"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/saved"},"Saved")))))};a(40);var u=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 bannerBox"},r.a.createElement("h1",null,"(React) Google Books Search"),r.a.createElement("h3",null,"Search for and Save Books of Interest")))},m=a(26);a(41);var f=function(e){return r.a.createElement("div",{className:"resultCardBox"},r.a.createElement("button",{className:"viewBtn"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View")),r.a.createElement("button",{className:"saveBtn"},"Save"),r.a.createElement("h5",{className:"cardTitle"},e.title),r.a.createElement("h6",{className:"cardSum"},e.author),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"col-9"},r.a.createElement("p",null,e.description))))};a(42);var v=function(e){var n=e.books;return r.a.createElement("div",{className:"row resultsBox"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",null,"Results")),n.map((function(e,n){return function(e,n){return r.a.createElement(f,{index:e.id,author:e.volumeInfo.authors,title:e.volumeInfo.title,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink,key:n})}(e,n)})))},E=r.a.forwardRef((function(e,n){return r.a.createElement("button",e,"Search")})),d=r.a.forwardRef((function(e,n){return r.a.createElement("input",Object.assign({},e,{ref:n}))})),h=a(10),g=a.n(h),w=function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))};a(60);var b=function(){var e=Object(t.useState)([]),n=Object(m.a)(e,2),a=n[0],o=n[1],c=Object(t.useRef)("");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row searchBox"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",null,"Book Search"),r.a.createElement("h6",null,"Book:"),r.a.createElement(d,{ref:c}),r.a.createElement(E,{onClick:function(){var e;e=c.current.value,w(e).then((function(e){return o(e.data.items)})).catch((function(e){return console.log(e)})),console.log(a)}}))),r.a.createElement(v,{books:a}))};a(61);var p=function(){return r.a.createElement("div",{className:"row savedBox"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h6",null,"HEY"),r.a.createElement(f,null)))};var k=function(){return r.a.createElement(p,null)};var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/search"},r.a.createElement(b,null)),r.a.createElement(i.a,{exact:!0,path:"/saved"},r.a.createElement(k,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(b,null))))))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(62);c.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):x(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.ac5154c8.chunk.js.map