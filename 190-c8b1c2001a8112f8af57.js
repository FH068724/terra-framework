(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1013:function(e,t,n){"use strict";var r=n(12),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(63)),u=o(n(19)),l=o(n(24)),i=r(n(0)),d=o(n(2)),c=n(9),s=o(n(10)),f=o(n(5)),p=o(n(7)),m=o(n(132)),b=o(n(222)),h=o(n(165)),y=o(n(1020)),g=o(n(1044)),v=o(n(1015));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=f.default.bind(v.default),I={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:c.intlShape,legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},j=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,o=e.error,a=e.help,d=e.hideRequired,f=e.isIncomplete,v=e.isInline,_=e.isInvalid,I=e.isLegendHidden,F=e.intl,j=e.legend,E=e.legendAttributes,C=e.monthAttributes,T=(e.maxWidth,e.name),P=e.onBlur,x=e.onChange,D=e.onFocus,q=e.required,A=e.showOptional,k=e.value,N=e.yearAttributes,R=(0,l.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),S=(0,i.useRef)((0,m.default)()),B=i.default.useContext(p.default),L=(0,s.default)(w("date-input-field",{"is-inline":v},B.className),R.className),M=(0,s.default)(w("legend",B.className),E.className),W="terra-date-input-field-description-help-".concat(S.current),H="terra-date-input-field-description-error-".concat(S.current),V=W;o&&_&&(V="".concat(H," ").concat(W));var J=C&&C["aria-describedby"],Z=t&&t["aria-describedby"],z=N&&N["aria-describedby"],G=J?"".concat(V," ").concat(J):V,Q=Z?"".concat(V," ").concat(Z):V,X=z?"".concat(V," ").concat(z):V,Y=i.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":I}])},i.default.createElement("div",(0,u.default)({},E,{className:M}),_&&i.default.createElement("span",{className:w("error-icon")},i.default.createElement(b.default,null)),q&&(_||!d)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),i.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return i.default.createElement(h.default,{text:e})}))),j,q&&!_&&d&&i.default.createElement("span",{className:w("required-hidden")},"*"),A&&!q&&i.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return i.default.createElement("span",{className:w("optional")},e)})),!_&&i.default.createElement("span",{className:w("error-icon-hidden")}))),K=g.default.getDateFormat({displayFormat:r,intl:F});return i.default.createElement("fieldset",(0,u.default)({},R,{className:L}),Y,i.default.createElement(y.default,{name:T,onChange:x,onBlur:P,onFocus:D,value:k,displayFormat:r,disabled:n,isInvalid:_,isIncomplete:f,useExternalFormatMask:!0,required:q,monthAttributes:O(O({},C),{"aria-describedby":G}),dayAttributes:O(O({},t),{"aria-describedby":Q}),yearAttributes:O(O({},N),{"aria-describedby":X})}),_&&o&&i.default.createElement("div",{id:H,className:w("error-text")},o),a?i.default.createElement("div",{id:W,className:w("help-text"),"aria-label":"".concat(F.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(K,", ").concat(a)},K," ",a):i.default.createElement("div",{id:W,className:w("help-text"),"aria-label":"".concat(F.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(K)},K))};j.propTypes=I,j.defaultProps=F;var E=(0,c.injectIntl)(j);t.default=E},1015:function(e,t,n){e.exports={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___3o9p-","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___23J9g","date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},1886:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(21)),a=r(n(25)),u=r(n(31)),l=r(n(28)),i=r(n(29)),d=r(n(30)),c=r(n(0)),s=r(n(1013));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var p=function(e){(0,l.default)(n,e);var t=f(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).state={blurTriggerCount:0,focusTriggerCount:0,value:""},r.handleBlur=r.handleBlur.bind((0,u.default)(r)),r.handleFocus=r.handleFocus.bind((0,u.default)(r)),r.blurCount=0,r.focusCount=0,r}return(0,a.default)(n,[{key:"handleBlur",value:function(){this.blurCount+=1,this.setState({blurTriggerCount:this.blurCount})}},{key:"handleFocus",value:function(){this.focusCount+=1,this.setState({focusTriggerCount:this.focusCount})}},{key:"handleOnChangeFocus",value:function(e,t){this.setState({value:t})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"date-input-value"},c.default.createElement("h3",null,"onBlur Trigger Count:",c.default.createElement("span",{id:"blur-count"},this.state.blurTriggerCount),c.default.createElement("br",null),c.default.createElement("br",null),"onFocus Trigger Count:",c.default.createElement("span",{id:"focus-count"},this.state.focusTriggerCount))),c.default.createElement(s.default,{legend:"Legend text",name:"date-input",value:this.state.value,onChange:this.handleOnChange,onBlur:this.handleBlur,onFocus:this.handleFocus,error:"Error message",help:"Help message"}))}}]),n}(c.default.Component);t.default=p},992:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___CwWxH","orion-fusion-theme":"Input-module__orion-fusion-theme___1ofZv","form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),a=d(n(10)),u=d(n(5)),l=d(n(7)),i=d(n(992));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=u.default.bind(i.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},I={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,o,u=g(l);function l(){return b(this,l),u.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,o=t.disabled,u=t.isIncomplete,l=t.isInvalid,i=t.onBlur,d=t.onChange,c=t.onFocus,b=t.onInput,h=t.name,y=t.pattern,g=t.refCallback,v=t.required,_=t.type,w=t.ariaLabel,I=t.value,F=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),j=this.context,E=(0,a.default)(O("form-input",{"form-error":l},{"form-incomplete":u&&v&&!l},j.className),F.className);return F&&Object.prototype.hasOwnProperty.call(F,"aria-label")?e=w||F["aria-label"]:w&&(e=w),F["aria-label"]=e,v&&(F["aria-required"]="true"),void 0!==I?F.value=I:void 0!==n&&(F.defaultValue=n),F.placeholder&&(F.placeholder=null),r.default.createElement("input",s({},F,{ref:function(e){g&&g(e)},name:h,type:_,pattern:y,onBlur:i,onChange:d,onFocus:c,onInput:b,disabled:o,required:v,className:E}))}}])&&h(t.prototype,n),o&&h(t,o),l}(r.default.Component);F.propTypes=w,F.defaultProps=I,F.contextType=l.default,F.isInput=!0;var j=F;t.default=j},996:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var i,d=[],c=!1,s=-1;function f(){c&&i&&(c=!1,i.length?d=i.concat(d):s=-1,d.length&&p())}function p(){if(!c){var e=l(f);c=!0;for(var t=d.length;t;){for(i=d,d=[];++s<t;)i&&i[s].run();s=-1,t=d.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new m(e,t)),1!==d.length||c||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);