(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1008:function(t,o,e){t.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},1016:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(0)),s=n(e(5)),l=n(e(164)),r=n(e(1008)),h=s.default.bind(r.default),u=function(t){return a.default.createElement(l.default.Content,t,a.default.createElement("div",{className:h("hookshot-content-wrapper")},"Hookshot"))};o.default=u},1017:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(19)),s=n(e(24)),l=n(e(21)),r=n(e(25)),h=n(e(31)),u=n(e(28)),d=n(e(29)),i=n(e(30)),c=n(e(0)),m=n(e(5)),p=n(e(2)),f=n(e(164)),_=n(e(1016)),k=n(e(1008));function g(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,i.default)(t);if(o){var a=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)}}var v=m.default.bind(k.default),C={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},w=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},b=function(t){(0,u.default)(e,t);var o=g(e);function e(t){var n;return(0,l.default)(this,e),(n=o.call(this,t)).triggerHookshot=n.triggerHookshot.bind((0,h.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,h.default)(n)),n.state={open:t.isOpen},n}return(0,r.default)(e,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,o=t.hookshotContentProps,e=t.id,n=(t.isOpen,t.contentAttachment),l=t.targetAttachment,r=t.attachmentMargin,h=t.includeSvgs,u=t.type,d=(0,s.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),i=c.default.createElement("div",null,c.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),c.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),c.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return c.default.createElement("div",{id:"".concat(e,"-bounds"),className:v(["wrapper","hookshot-wrapper-".concat(u)])},c.default.createElement(f.default,(0,a.default)({id:e,contentAttachment:w(n),targetAttachment:w(l),attachmentMargin:r,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(e))},boundingRef:function(){return document.getElementById("".concat(e,"-bounds"))}},d),c.default.createElement(_.default,{id:"".concat(e,"-content"),onEsc:o.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:o.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:o.closeOnResize?this.handleRequestClose:void 0})),c.default.createElement("button",{type:"button",id:"trigger-".concat(e),className:v(["content","hookshot-".concat(u)]),onClick:this.triggerHookshot},"Trigger Hookshot"),h&&i)}}]),e}(c.default.Component);b.propTypes=C,b.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var E=b;o.default=E},1998:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(0)),s=n(e(1017)),l=function(){return a.default.createElement(s.default,{id:"Enabled",isOpen:!0,type:"primary",isEnabled:!0})},r=function(){return a.default.createElement(s.default,{id:"NotEnabled",isOpen:!0,type:"primary",isEnabled:!1})},h=function(){return a.default.createElement("div",{id:"EnabledBehaviors-bounds"},a.default.createElement("p",null,"Content Positioning is enabled. Content is visible."),a.default.createElement(l,null),a.default.createElement("p",null,"Content Positioning is not enabled. Content is not visible."),a.default.createElement(r,null))};o.default=h}}]);