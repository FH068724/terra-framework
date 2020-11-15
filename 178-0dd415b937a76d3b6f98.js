(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1029:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.processedRoutesPropType=t.componentConfigPropType=t.routePropType=t.routeConfigPropType=t.navigationLayoutConfigPropType=void 0;var r=n(a(166)),o=n(a(2)),l=["tiny","small","medium","large","huge"];t.supportedComponentBreakpoints=l;var u=o.default.objectOf((function(e,t,a,n,o){if(!("default"===t||l.indexOf(t)>=0))return new Error("Invalid prop '".concat(o,"' supplied to '").concat(a,"'. Validation failed."));var u=e[t],i=!0;return null!==u&&("object"!==(0,r.default)(u)||!u.componentClass||"object"!==(0,r.default)(u.props)&&null!==u.props&&void 0!==u.props)&&(i=!1),!!i||new Error("Invalid prop '".concat(o,"' supplied to '").concat(a,"'. Validation failed."))}));t.componentConfigPropType=u;var i=o.default.shape({path:function(e,t,a){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(a,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:u.isRequired});t.routePropType=i;var d=o.default.objectOf(i);t.routeConfigPropType=d;var f=o.default.shape({header:d,menu:d,content:d});t.navigationLayoutConfigPropType=f;var c=o.default.arrayOf(o.default.shape({path:o.default.string,componentClass:o.default.func,componentProps:o.default.object}));t.processedRoutesPropType=c},1048:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z"}))};u.displayName="IconMenu",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1054:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};u.displayName="IconClose",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1055:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};u.displayName="IconLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},1056:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};u.displayName="IconCheckmark",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1078:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};u.displayName="IconTrash",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1079:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(27));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};u.displayName="IconFolder",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var i=u;t.default=i},1827:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=a(84),l=n(a(1078)),u=n(a(1079)),i=n(a(226)),d=n(a(1047)),f=function(){return r.default.createElement(o.MemoryRouter,null,r.default.createElement(d.default,{id:"test-header",layoutConfig:{size:"large"},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1",icon:r.default.createElement(l.default,null)},{id:"234",path:"/something2",text:"item 2",icon:r.default.createElement(u.default,null)},{id:"345",path:"/something3",text:"item 3",icon:r.default.createElement(i.default,null)}]}}))};t.default=f}}]);