(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1754:function(e,t,n){e.exports={"content-wrapper":"BoundedMenu-test-module__content-wrapper___2xZbi"}},2011:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(21)),l=u(n(25)),d=u(n(31)),o=u(n(28)),f=u(n(29)),r=u(n(30)),c=u(n(0)),s=u(n(5)),i=u(n(338)),m=u(n(1754));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,r.default)(e);if(t){var a=(0,r.default)(this).constructor;n=Reflect.construct(u,arguments,a)}else n=u.apply(this,arguments);return(0,f.default)(this,n)}}var p=s.default.bind(m.default),y=function(e){(0,o.default)(n,e);var t=h(n);function n(e){var u;return(0,a.default)(this,n),(u=t.call(this,e)).handleButtonClick=u.handleButtonClick.bind((0,d.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,d.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,d.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,d.default)(u)),u.setParentNode=u.setParentNode.bind((0,d.default)(u)),u.getParentNode=u.getParentNode.bind((0,d.default)(u)),u.state={open:!1},u}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return c.default.createElement("div",{className:p("content-wrapper"),ref:this.setParentNode},c.default.createElement(i.default,{boundingRef:this.getParentNode,isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,classNameContent:"TestBoundedContent"},c.default.createElement(i.default.Item,{text:"Default 1",key:"1"}),c.default.createElement(i.default.Item,{text:"Default 2",key:"2",className:"TestNestedMenu",subMenuItems:[c.default.createElement(i.default.Item,{text:"Default 2.1",key:"2.1"}),c.default.createElement(i.default.Item,{text:"Default 2.2",key:"2.2"}),c.default.createElement(i.default.Item,{text:"Default 2.3",key:"2.3"})]}),c.default.createElement(i.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(i.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(i.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(i.default.ItemGroup,{isSelectable:!0,onChange:this.handleOnChange,key:"6"},c.default.createElement(i.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(i.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(i.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(i.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(i.default.Item,{text:"Default 8",key:"8"})),c.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),n}(c.default.Component);t.default=y}}]);