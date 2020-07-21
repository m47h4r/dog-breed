(this["webpackJsonpdog-breed"]=this["webpackJsonpdog-breed"]||[]).push([[0],{19:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),i=n(10),l=n(1),o=(n(24),n(6)),s=n(8),m=(n(25),n(26),n(18));n(27);var d=function(e){var t=e.children,n=Object(m.a)(e,["children"]);return r.a.createElement(i.b,Object.assign({className:"link"},n),t)},f=[{id:"index",url:"/",text:"Home"},{id:"list",url:"/list",text:"Breed List"},{id:"quiz",url:"/quiz",text:"Breed Quiz"}];var b=function(e){var t=e.currentPage;return r.a.createElement("nav",{className:"navigation"},f.map((function(e){return t!==e.id?r.a.createElement(d,{to:e.url,key:e.id},e.text):null})))},E=(n(33),{api:{breedListURL:"https://dog.ceo/api/breeds/list/all",breedImageURLPrefix:"https://dog.ceo/api/breed/",breedImageURLSuffix:"/images"}});var g=function(e){var t=e.name,n=function(){var e=Object(a.useReducer)((function(e,t){switch(t.type){case"INCREMENT-IMAGE-INDEX":var n=e.imageURLs.message.length,a=-1;return a=+e.currentImageIndex===+n-1?0:e.currentImageIndex+1,Object(o.a)(Object(o.a)({},e),{},{currentImageIndex:a});case"SET-IMAGE-URLS":return Object(o.a)(Object(o.a)({},e),{},{imageURLs:t.data});default:return Object(o.a)({},e)}}),{currentImageIndex:-1,imageURLs:null}),t=Object(s.a)(e,2);return[t[0],t[1]]}(),c=Object(s.a)(n,2),u=c[0],i=c[1];return Object(a.useEffect)((function(){fetch(E.api.breedImageURLPrefix+t+E.api.breedImageURLSuffix).then((function(e){return e.json()})).then((function(e){return i({type:"SET-IMAGE-URLS",data:e})}))}),[i,t]),r.a.createElement("button",{className:"breed","data-testid":"breed-button","data-image-number":u.currentImageIndex,onClick:function(){return i({type:"INCREMENT-IMAGE-INDEX"})},style:{backgroundImage:"url(".concat(null!==u.imageURLs&&-1!==u.currentImageIndex?u.imageURLs.message[u.currentImageIndex]:"none",")")}},r.a.createElement("div",{className:-1!==u.currentImageIndex?"name name--readable":"name"},t))};var I=function(){var e=function(){var e=Object(a.useReducer)((function(e,t){switch(t.type){case"SET-BREEDLIST":return Object(o.a)(Object(o.a)({},e),{},{breedList:t.data});default:return Object(o.a)({},e)}}),{breedList:null}),t=Object(s.a)(e,2);return[t[0],t[1]]}(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){console.log(" i am in use effect of the list component "),fetch(E.api.breedListURL).then((function(e){return e.json()})).then((function(e){return c({type:"SET-BREEDLIST",data:e})}))}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{currentPage:"list"}),r.a.createElement("div",{className:"breed-wrapper"},n.breedList?Object.keys(n.breedList.message).map((function(e){return r.a.createElement(g,{name:e})})):null))};var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{currentPage:"quiz"}),r.a.createElement("p",null,"i am the BreedQuiz component"))};n(34);var h=function(){return r.a.createElement("div",{className:"index-wrapper"},r.a.createElement(b,{currentPage:"index"}))};var v=function(){return r.a.createElement(i.a,{basename:"/dog-breed"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/list"},r.a.createElement(I,null)),r.a.createElement(l.a,{path:"/quiz"},r.a.createElement(p,null)),r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.df772e90.chunk.js.map