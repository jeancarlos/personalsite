(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[3],{33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(16),o=n(0),c=n.n(o);n(33);var r=function(e){var t=e.children,n=e.onMouseLeave,a=e.component,o=void 0===a?"div":a,r=e.show,s=void 0!==r&&r,i=e.className,l=o,u=s?"Tooltip--show":"",m="".concat(void 0===i?"":i," Tooltip ").concat(u);return c.a.createElement(l,{onClick:n,onMouseLeave:n,className:m,role:"tooltip"},t)},s=n(17),i=(n(34),[{name:"Twitter",url:"https://twitter.com/jeancarlos"},{name:"Instagram",url:"https://www.instagram.com/jeancosouza/"},{name:"Spotify",url:"https://open.spotify.com/user/jeancosouza"},{name:"GitHub",url:"https://github.com/jeancarlos"},{name:"LinkedIn",url:"https://www.linkedin.com/in/jeancarlosudi/"},{name:"steam",url:"https://steamcommunity.com/r/leonrk"},{name:"Switch Friend Code",content:"1749 2384 1794"},{name:"The source code of this site",url:"https://github.com/jeancarlos/mysite"}]);t.default=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],l=t[1],u=function(e,t,n){var a="boolean"===typeof n,o=function(e,o){return t===o?function(e){return a?n:e}(!e):e};l((function(e){return e.map(o)})),e.preventDefault()};return Object(o.useEffect)((function(){l(i.map((function(){return!1})))}),[]),c.a.createElement("header",{className:"App--Header"},c.a.createElement("h1",{className:"App--Title"},c.a.createElement(s.a,{symbol:"\ud83d\udd17"})," Social & Links"),c.a.createElement("ul",{className:"App-Links Social__List"},i.map((function(e,t){var a=e.name,o=e.url,s=e.content;return c.a.createElement("li",{key:a,className:"Social__ListItem"},c.a.createElement("span",{className:"Social__Bullet"},"*"),s?[c.a.createElement("a",{key:"a",onClick:function(e){return u(e,t)},href:"#pop"}," ",a),c.a.createElement(r,{key:"Tooltip",onMouseLeave:function(e){return u(e,t,!1)},component:"span",show:n[t]},s)]:c.a.createElement("a",{rel:"noopener noreferrer",href:o}," ",a))}))))}}}]);
//# sourceMappingURL=3.6c69176a.chunk.js.map