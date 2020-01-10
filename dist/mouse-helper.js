!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mouse-helper",[],t):"object"==typeof exports?exports["mouse-helper"]=t():e["mouse-helper"]=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=function(){if(!document.body)return console.log("Failed to create mouse helper, document.body not ready"),!1;var e=document.querySelector(".mouse-helper");if(!e){var t=n(1),o=document.createElement("style");o.setAttribute("type","text/css"),o.setAttribute("context","mouse-helper"),o.innerHTML=t,document.head.appendChild(o),(e=document.createElement("div")).className="mouse-helper",document.body.appendChild(e)}return e.mouseHelper||(document.addEventListener("mousemove",(function(t){e.style.left=t.pageX+"px",e.style.top=t.pageY+"px"})),document.addEventListener("mousedown",(function(){e.classList.add("mouse-helper-button-down")})),document.addEventListener("mouseup",(function(){e.classList.remove("mouse-helper-button-down")})),e.mouseHelper=!0),!0}},function(e,t){e.exports=".mouse-helper {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    z-index: 999999;\r\n    top: 0;\r\n    left: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath transform='translate(-72)' fill='%23fff' stroke='%23000' stroke-width='20' d='M423.547,323.115l-320-320c-3.051-3.051-7.637-3.947-11.627-2.304s-6.592,5.547-6.592,9.856V480c0,4.501,2.837,8.533,7.083,10.048c4.224,1.536,8.981,0.192,11.84-3.285l85.205-104.128l56.853,123.179c1.792,3.883,5.653,6.187,9.685,6.187c1.408,0,2.837-0.277,4.203-0.875l74.667-32c2.645-1.131,4.736-3.285,5.76-5.973c1.024-2.688,0.939-5.675-0.277-8.299l-57.024-123.52h132.672c4.309,0,8.213-2.603,9.856-6.592C427.515,330.752,426.598,326.187,423.547,323.115z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.mouse-helper-button-down {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath transform='translate(-72)' fill='%23ddd' stroke='%23000' stroke-width='20' d='M423.547,323.115l-320-320c-3.051-3.051-7.637-3.947-11.627-2.304s-6.592,5.547-6.592,9.856V480c0,4.501,2.837,8.533,7.083,10.048c4.224,1.536,8.981,0.192,11.84-3.285l85.205-104.128l56.853,123.179c1.792,3.883,5.653,6.187,9.685,6.187c1.408,0,2.837-0.277,4.203-0.875l74.667-32c2.645-1.131,4.736-3.285,5.76-5.973c1.024-2.688,0.939-5.675-0.277-8.299l-57.024-123.52h132.672c4.309,0,8.213-2.603,9.856-6.592C427.515,330.752,426.598,326.187,423.547,323.115z'/%3e%3c/svg%3e\");\r\n}"}])}));