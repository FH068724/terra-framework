(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1013:function(e,t,n){"use strict";var r=n(12),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(63)),l=o(n(19)),i=o(n(24)),u=r(n(0)),d=o(n(2)),c=n(9),f=o(n(10)),s=o(n(5)),p=o(n(7)),m=o(n(132)),b=o(n(222)),h=o(n(165)),y=o(n(1020)),_=o(n(1044)),g=o(n(1015));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=s.default.bind(g.default),I={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:c.intlShape,legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},j={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},F=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,o=e.error,a=e.help,d=e.hideRequired,s=e.isIncomplete,g=e.isInline,v=e.isInvalid,I=e.isLegendHidden,j=e.intl,F=e.legend,E=e.legendAttributes,P=e.monthAttributes,T=(e.maxWidth,e.name),q=e.onBlur,x=e.onChange,D=e.onFocus,A=e.required,C=e.showOptional,N=e.value,S=e.yearAttributes,k=(0,i.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),L=(0,u.useRef)((0,m.default)()),R=u.default.useContext(p.default),B=(0,f.default)(w("date-input-field",{"is-inline":g},R.className),k.className),M=(0,f.default)(w("legend",R.className),E.className),W="terra-date-input-field-description-help-".concat(L.current),H="terra-date-input-field-description-error-".concat(L.current),V=W;o&&v&&(V="".concat(H," ").concat(W));var J=P&&P["aria-describedby"],Z=t&&t["aria-describedby"],z=S&&S["aria-describedby"],G=J?"".concat(V," ").concat(J):V,Q=Z?"".concat(V," ").concat(Z):V,X=z?"".concat(V," ").concat(z):V,Y=u.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":I}])},u.default.createElement("div",(0,l.default)({},E,{className:M}),v&&u.default.createElement("span",{className:w("error-icon")},u.default.createElement(b.default,null)),A&&(v||!d)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(h.default,{text:e})}))),F,A&&!v&&d&&u.default.createElement("span",{className:w("required-hidden")},"*"),C&&!A&&u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:w("optional")},e)})),!v&&u.default.createElement("span",{className:w("error-icon-hidden")}))),K=_.default.getDateFormat({displayFormat:r,intl:j});return u.default.createElement("fieldset",(0,l.default)({},k,{className:B}),Y,u.default.createElement(y.default,{name:T,onChange:x,onBlur:q,onFocus:D,value:N,displayFormat:r,disabled:n,isInvalid:v,isIncomplete:s,useExternalFormatMask:!0,required:A,monthAttributes:O(O({},P),{"aria-describedby":G}),dayAttributes:O(O({},t),{"aria-describedby":Q}),yearAttributes:O(O({},S),{"aria-describedby":X})}),v&&o&&u.default.createElement("div",{id:H,className:w("error-text")},o),a?u.default.createElement("div",{id:W,className:w("help-text"),"aria-label":"".concat(j.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(K,", ").concat(a)},K," ",a):u.default.createElement("div",{id:W,className:w("help-text"),"aria-label":"".concat(j.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(K)},K))};F.propTypes=I,F.defaultProps=j;var E=(0,c.injectIntl)(F);t.default=E},1015:function(e,t,n){e.exports={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___3o9p-","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___23J9g","date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},1901:function(e,t,n){"use strict";var r=n(12),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(55)),l=r(n(0)),i=o(n(1013)),u=function(){var e=(0,l.useState)("1999-03-10"),t=(0,a.default)(e,2),n=t[0],r=t[1],o=(0,l.useState)(!1),u=(0,a.default)(o,2),d=u[0],c=u[1];return l.default.createElement("div",null,l.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:n,onChange:function(e,t){return r(t)},showOptional:!0,error:"Error message",help:"Help message",isInvalid:d}),l.default.createElement("p",null,"DateInputField Value: ".concat(n)),l.default.createElement("button",{type:"button",onClick:function(){return c((function(e){return!e}))}},"Toggle isInvalid"))};t.default=u},992:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___CwWxH","orion-fusion-theme":"Input-module__orion-fusion-theme___1ofZv","form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),a=d(n(10)),l=d(n(5)),i=d(n(7)),u=d(n(992));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=l.default.bind(u.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},I={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,l=_(i);function i(){return b(this,i),l.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,o=t.disabled,l=t.isIncomplete,i=t.isInvalid,u=t.onBlur,d=t.onChange,c=t.onFocus,b=t.onInput,h=t.name,y=t.pattern,_=t.refCallback,g=t.required,v=t.type,w=t.ariaLabel,I=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),F=this.context,E=(0,a.default)(O("form-input",{"form-error":i},{"form-incomplete":l&&g&&!i},F.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=w||j["aria-label"]:w&&(e=w),j["aria-label"]=e,g&&(j["aria-required"]="true"),void 0!==I?j.value=I:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),r.default.createElement("input",f({},j,{ref:function(e){_&&_(e)},name:h,type:v,pattern:y,onBlur:u,onChange:d,onFocus:c,onInput:b,disabled:o,required:g,className:E}))}}])&&h(t.prototype,n),o&&h(t,o),i}(r.default.Component);j.propTypes=w,j.defaultProps=I,j.contextType=i.default,j.isInput=!0;var F=j;t.default=F},996:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,d=[],c=!1,f=-1;function s(){c&&u&&(c=!1,u.length?d=u.concat(d):f=-1,d.length&&p())}function p(){if(!c){var e=i(s);c=!0;for(var t=d.length;t;){for(u=d,d=[];++f<t;)u&&u[f].run();f=-1,t=d.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new m(e,t)),1!==d.length||c||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);