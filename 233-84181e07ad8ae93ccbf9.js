(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1021:function(e,t,n){e.exports={"content-wrapper":"TimeInput-test-module__content-wrapper___hn5T5"}},2109:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(21)),u=r(n(25)),l=r(n(31)),i=r(n(28)),a=r(n(29)),c=r(n(30)),f=r(n(0)),s=r(n(5)),p=r(n(994)),d=r(n(1021));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.default)(this,n)}}var b=s.default.bind(d.default),m=function(e){(0,i.default)(n,e);var t=h(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).state={blurTriggerCount:0,focusTriggerCount:0},r.handleBlur=r.handleBlur.bind((0,l.default)(r)),r.handleFocus=r.handleFocus.bind((0,l.default)(r)),r.blurCount=0,r.focusCount=0,r}return(0,u.default)(n,[{key:"handleBlur",value:function(){this.blurCount+=1,this.setState({blurTriggerCount:this.blurCount})}},{key:"handleFocus",value:function(){this.focusCount+=1,this.setState({focusTriggerCount:this.focusCount})}},{key:"render",value:function(){return f.default.createElement("div",{className:b("content-wrapper")},f.default.createElement("div",{id:"time-input-value"},f.default.createElement("h3",null,"onBlur Trigger Count:",f.default.createElement("span",{id:"blur-count"},this.state.blurTriggerCount),f.default.createElement("br",null),f.default.createElement("br",null),"onFocus Trigger Count:",f.default.createElement("span",{id:"focus-count"},this.state.focusTriggerCount))),f.default.createElement(p.default,{id:"timeInput",name:"time-input",variant:"12-hour",onBlur:this.handleBlur,onFocus:this.handleFocus}))}}]),n}(f.default.Component);t.default=m},992:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___CwWxH","orion-fusion-theme":"Input-module__orion-fusion-theme___1ofZv","form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(2)),u=c(n(10)),l=c(n(5)),i=c(n(7)),a=c(n(992));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=l.default.bind(a.default),_={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},T={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,l=v(i);function i(){return b(this,i),l.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,o=t.disabled,l=t.isIncomplete,i=t.isInvalid,a=t.onBlur,c=t.onChange,f=t.onFocus,b=t.onInput,m=t.name,y=t.pattern,v=t.refCallback,g=t.required,O=t.type,_=t.ariaLabel,T=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),C=this.context,I=(0,u.default)(w("form-input",{"form-error":i},{"form-incomplete":l&&g&&!i},C.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=_||j["aria-label"]:_&&(e=_),j["aria-label"]=e,g&&(j["aria-required"]="true"),void 0!==T?j.value=T:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),r.default.createElement("input",s({},j,{ref:function(e){v&&v(e)},name:m,type:O,pattern:y,onBlur:a,onChange:c,onFocus:f,onInput:b,disabled:o,required:g,className:I}))}}])&&m(t.prototype,n),o&&m(t,o),i}(r.default.Component);j.propTypes=_,j.defaultProps=T,j.contextType=i.default,j.isInput=!0;var C=j;t.default=C},996:function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var a,c=[],f=!1,s=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):s=-1,c.length&&d())}function d(){if(!f){var e=i(p);f=!0;for(var t=c.length;t;){for(a=c,c=[];++s<t;)a&&a[s].run();s=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);