(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1048:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z"}))};u.displayName="IconMenu",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1051:function(e,t){var a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=a.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function l(e,t){t=t||{};var a,l,u,c=[],s=[],f=e.querySelectorAll(n);for(t.includeContainer&&r.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),a=0;a<f.length;a++)o(l=f[a])&&(0===(u=d(l))?c.push(l):s.push({documentOrder:a,tabIndex:u,node:l}));return s.sort(i).map((function(e){return e.node})).concat(c)}function o(e){return!(!u(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||d(e)<0)}function u(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}l.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,n)&&o(e)},l.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,c)&&u(e)};var c=a.concat("iframe").join(",");function d(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function i(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function s(e){return"INPUT"===e.tagName}e.exports=l},1054:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};u.displayName="IconClose",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1055:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};u.displayName="IconLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},1056:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};u.displayName="IconCheckmark",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1078:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};u.displayName="IconTrash",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1079:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};u.displayName="IconFolder",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var c=u;t.default=c},1092:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};u.displayName="IconPrinter",u.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},1110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};u.displayName="IconCalendar",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},1124:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M43.9 40.6c-.5 0-.9.1-1.3.2l-8.5-8.5c1.5-1.9 2.6-4.2 2.8-6.8h2l.3.3c1 1 2.6 1 3.7 0s1-2.6 0-3.7-2.6-1-3.7 0l-.3.3h-2c-.3-2.6-1.3-4.8-2.8-6.8l2.3-2.3c.6.3 1.3.5 2 .5 2.6 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2.1-4.6 4.6 0 .7.2 1.4.5 2L32 13.4c-1.9-1.5-4.2-2.6-6.8-2.8V4.7l.3-.3c1-1 1-2.6 0-3.7s-2.6-1-3.7 0-1 2.6 0 3.7l.3.3v5.9c-2.6.3-4.8 1.3-6.8 2.8L7.2 5.2c.2-.4.2-.8.2-1.3 0-2-1.6-3.7-3.7-3.7S.1 2 .1 4s1.6 3.7 3.7 3.7c.5 0 .9-.1 1.3-.2l8.5 8.5c-1.5 1.9-2.6 4.2-2.8 6.8H9c-.6-1.8-2.3-3.2-4.3-3.2C2.2 19.4.2 21.5.2 24s2.1 4.6 4.6 4.6c2 0 3.8-1.3 4.3-3.2h1.6c.3 2.6 1.3 4.8 2.8 6.8l-5 5h-.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6v-.4l5-5c1.9 1.5 4.2 2.6 6.8 2.8v1.6c-1.8.6-3.2 2.3-3.2 4.3 0 2.6 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-2-1.3-3.8-3.2-4.3v-1.6c2.6-.3 4.8-1.3 6.8-2.8l8.5 8.5c-.2.4-.2.8-.2 1.3 0 2 1.6 3.7 3.7 3.7s3.7-1.6 3.7-3.7c.1-1.9-1.8-3.6-3.9-3.6z"}))};u.displayName="IconAllergy",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},1125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M38.8 20H35v-9a11 11 0 00-22 0v9H9.2A2.22 2.22 0 007 22.2v23.7A2.2 2.2 0 009.2 48h29.7a2.22 2.22 0 002.2-2.2V22.2a2.38 2.38 0 00-2.3-2.2zM26 33.5V40h-4v-6.5a3.26 3.26 0 01-1-2.3 3 3 0 013-3 3.08 3.08 0 013 3 3.26 3.26 0 01-1 2.3zm6-14.9V20H16v-9a8 8 0 0116 0z"}))};u.displayName="IconPadlock",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M.7 20.1a2.47 2.47 0 01-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 01-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 01-.3 1.1 1 1 0 01-.9.4 1.92 1.92 0 01-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 01-1.2.4 1 1 0 01-.9-.4 2 2 0 01-.3-1.1 1.76 1.76 0 01.1-.6l2.5-15.1z"}))};u.displayName="IconFeatured",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1500:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M48 27v-6h-7.2a16.37 16.37 0 00-2.8-6.8l5-5L38.8 5l-5 5A18 18 0 0027 7.1V0h-6v7.1a16.37 16.37 0 00-6.8 2.8l-5-5-4.3 4.3 5 5A17.82 17.82 0 007.1 21H0v6h7.2a16.37 16.37 0 002.8 6.8l-5.1 5.1 4.2 4.2 5.1-5.1a17.82 17.82 0 006.8 2.8V48h6v-7.2a16.37 16.37 0 006.8-2.8l5.1 5.1 4.2-4.2-5.1-5.1a16.37 16.37 0 002.8-6.8zm-35.1-3.1A11.1 11.1 0 1124 35a11.14 11.14 0 01-11.1-11.1z"}))};u.displayName="IconSettings",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},1501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M24 5.3l5.2 11 .7 1.4 1.6.2 11.9 1.8-8.7 8.9-1.1 1.1.2 1.5 2 12.4-10.4-5.7-1.4-.8-1.4.8-10.4 5.7 2-12.4.2-1.5-1.1-1.1-8.7-8.9L16.5 18l1.6-.2.7-1.4L24 5.3M24 0c-.6 0-1 .4-1.4 1.2L16.1 15 1.6 17.2c-1.1.2-1.6.7-1.6 1.4 0 .4.2.9.7 1.5l10.5 10.7-2.5 15.1c0 .3-.1.5-.1.6 0 .4.1.8.3 1.1.3.3.6.4 1 .4.3 0 .7-.1 1.2-.4l13-7.1 13 7.1c.4.2.8.4 1.2.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.1v-.6L37 30.8l10.5-10.7c.5-.5.8-1 .8-1.5 0-.7-.5-1.2-1.6-1.4L31.9 15 25.4 1.2C25 .4 24.6 0 24 0z"}))};u.displayName="IconFeaturedOutline",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},987:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(2)),l=u(a(5)),o=u(a(988));function u(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(o.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var t=e.src,a=e.name,r=e.url,l=e.version,o=n.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},n.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(l))),u=t?n.default.createElement("a",{className:c("badge"),href:t},n.default.createElement("span",{className:c("badge-name")},"github"),n.default.createElement("span",{className:c("badge-version")},"source")):void 0;return n.default.createElement("div",{className:c("badge-container")},o,u)};i.propTypes=d;var s=i;t.default=s},988:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},989:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(a(0)),l=f(a(2)),o=f(a(5)),u=a(95),c=f(a(997)),d=f(a(336)),i=a(22),s=f(a(998));function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var _=o.default.bind(s.default),y={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,o=e.description,s=e.isExpanded,f=v((0,r.useState)(s),2),p=f[0],m=f[1],y=v((0,r.useState)(!1),2),g=y[0],w=y[1],E=r.default.useContext(u.ThemeContext),O=void 0!==n,x=function(){w(!g),p&&m(!p)},M=function(){m(!p),g&&w(!g)},j=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",E.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},o&&r.default.createElement("div",{className:_("description")},o),t),r.default.createElement("div",{className:_("footer")},a?r.default.createElement("div",{className:_("button-container")},O&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:x,onKeyDown:function(e){return j(e,x)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":p}),onClick:M,onKeyDown:function(e){return j(e,M)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:_("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:_("css")},n),p&&r.default.createElement("div",{className:_("code")},a))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var w=g;t.default=w},997:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},998:function(e,t,a){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);