(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1087:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(19)),u=r(n(24)),a=r(n(21)),d=r(n(25)),i=r(n(28)),s=r(n(29)),c=r(n(30)),f=r(n(0)),l=r(n(2)),p=n(225);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var v={src:l.default.string.isRequired,onMount:l.default.func,onLaunch:l.default.func,onAuthorize:l.default.func,options:l.default.object,eventHandlers:l.default.arrayOf(l.default.shape({key:l.default.string,handler:l.default.func}))},m=function(e){(0,i.default)(n,e);var t=h(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,d.default)(n,[{key:"componentDidMount",value:function(){this.xfcFrame=p.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,u.default)(t,["src","onMount","onLaunch","onAuthorize","options","eventHandlers"]));return f.default.createElement("div",(0,o.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),n}(f.default.Component);m.propTypes=v;var y=m;t.default=y},1132:function(e,t,n){e.exports={iframe:"Consumer-module__iframe___tp87R"}},1976:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),u=n(225),a=r(n(5)),d=r(n(1087)),i=r(n(1132)),s=a.default.bind(i.default);u.Consumer.init();var c=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}],f=function(){return o.default.createElement("div",{id:"CustomEvent"},o.default.createElement(d.default,{className:s("iframe"),src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider",eventHandlers:c}))};t.default=f}}]);