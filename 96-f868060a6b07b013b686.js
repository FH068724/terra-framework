(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1095:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(1012),a=function(e){return[{key:"menu",title:"Menu",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:["item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8"]},{key:"item-1",title:"Item 1",content:e,contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-1.1"]},{key:"item-2",title:"Item 2",isSelected:!1,isSelectable:!1,childKeys:["item-2.1","item-2.2"],id:"test-item-2"},{key:"item-3",title:"item-3",contentLocation:i.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4",title:"Item 4",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-4.1","item-4.2","item-4.3"]},{key:"item-1.1",title:"Item 1.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:[]},{key:"item-2.1",title:"Item 2.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-2.2",title:"Item 2.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.1",title:"Item 4.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.2",title:"Item 4.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.3",title:"Item 4.3",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-5",title:"Item 5",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-5.1","item-5.2"]},{key:"item-5.1",title:"Item 5.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-5.2",title:"Item 5.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-6",title:"Item 6",contentLocation:i.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-7",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!0,isSelectable:!1,childKeys:[],id:"test-item-7"},{key:"item-8",title:"Read Only Item",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isReadOnly:!0,isSelected:!1,isSelectable:!1,childKeys:[],id:"test-item-8"}]};t.default=a},1096:function(e,t,n){e.exports=n.p+"5ac56bd6333aa005424656ce9be56939.svg"},1281:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i),o=n(987),l=n.n(o),r=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-utility",name:"terra-application-utility",version:"2.39.0",url:t})}},1527:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(21)),o=i(n(25)),l=i(n(31)),r=i(n(28)),c=i(n(29)),s=i(n(30)),m=i(n(0)),d=i(n(224)),p=i(n(1095)),u=i(n(1096)),y=n(1012),f=i(n(5)),b=i(n(1528));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,c.default)(this,n)}}var O=f.default.bind(b.default),x=function(e){(0,r.default)(n,e);var t=h(n);function n(e){var i;return(0,a.default)(this,n),(i=t.call(this,e)).onDiscloseUtility=i.onDiscloseUtility.bind((0,l.default)(i)),i.state={discloseCount:0},i}return(0,o.default)(n,[{key:"onDiscloseUtility",value:function(){this.setState((function(e){return{discloseCount:e.discloseCount+1}}))}},{key:"render",value:function(){var e=m.default.createElement(d.default,{alt:"Fallback Avatar",src:u.default});return m.default.createElement("div",{className:O("container")},m.default.createElement("div",{className:O("content-wrapper")},m.default.createElement(y.ApplicationHeaderUtility,{menuItems:(0,p.default)(e),onChange:function(){},onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"User Name",accessory:e,variant:y.UtilityUtils.VARIANTS.HEADER})),m.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount)))}}]),n}(m.default.Component);t.default=x},1528:function(e,t,n){e.exports={container:"ApplicationHeaderUtilityExample-module__container___1b1oG","content-wrapper":"ApplicationHeaderUtilityExample-module__content-wrapper___tvuio"}},1529:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(21)),o=i(n(25)),l=i(n(31)),r=i(n(28)),c=i(n(29)),s=i(n(30)),m=i(n(0)),d=i(n(224)),p=i(n(1095)),u=i(n(1096)),y=n(1012),f=i(n(5)),b=i(n(1530));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,c.default)(this,n)}}var O=f.default.bind(b.default),x=function(e){(0,r.default)(n,e);var t=h(n);function n(e){var i;return(0,a.default)(this,n),(i=t.call(this,e)).onDiscloseUtility=i.onDiscloseUtility.bind((0,l.default)(i)),i.handleOnChange=i.handleOnChange.bind((0,l.default)(i)),i.state={discloseCount:0,selectedKey:null},i}return(0,o.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t})}},{key:"onDiscloseUtility",value:function(){this.setState((function(e){return{discloseCount:e.discloseCount+1}}))}},{key:"render",value:function(){var e=m.default.createElement(d.default,{alt:"Fallback Avatar",src:u.default});return m.default.createElement("div",null,m.default.createElement("div",{className:O("content-wrapper")},m.default.createElement(y.ApplicationMenuUtility,{menuItems:(0,p.default)(e),onChange:this.handleOnChange,onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"User Name",accessory:e,variant:y.UtilityUtils.VARIANTS.MENU})),m.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey,".")),m.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount,".")))}}]),n}(m.default.Component);t.default=x},1530:function(e,t,n){e.exports={"content-wrapper":"ApplicationMenuUtilityExample-module__content-wrapper___1-SmC"}},1531:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(21)),o=i(n(25)),l=i(n(31)),r=i(n(28)),c=i(n(29)),s=i(n(30)),m=i(n(0)),d=i(n(224)),p=i(n(1095)),u=i(n(1096)),y=n(1012),f=i(n(1339)),b=i(n(5)),h=i(n(1532));function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,c.default)(this,n)}}var x=b.default.bind(h.default),v=function(e){(0,r.default)(n,e);var t=O(n);function n(e){var i;return(0,a.default)(this,n),(i=t.call(this,e)).handleOnChange=i.handleOnChange.bind((0,l.default)(i)),i.handleOnRequestClose=i.handleOnRequestClose.bind((0,l.default)(i)),i.state={selectedKey:null,requestCloseCount:0},i}return(0,o.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t.key})}},{key:"handleOnRequestClose",value:function(){this.setState((function(e){return{requestCloseCount:e.requestCloseCount+1}}))}},{key:"render",value:function(){var e=m.default.createElement(d.default,{alt:"Fallback Avatar",src:u.default,className:x("avatar")});return m.default.createElement("div",null,m.default.createElement("div",{className:x("content-wrapper")},m.default.createElement(f.default,{initialSelectedKey:"menu",isHeightBounded:!0,menuItems:(0,p.default)(e),onChange:this.handleOnChange,onRequestClose:this.handleOnRequestClose,variant:y.UtilityUtils.VARIANTS.MENU})),m.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey)),m.default.createElement("div",null,"Request close count: ".concat(this.state.requestCloseCount)))}}]),n}(m.default.Component);t.default=v},1532:function(e,t,n){e.exports={avatar:"MenuUtilityMenuExample-module__avatar___3Efdp","content-wrapper":"MenuUtilityMenuExample-module__content-wrapper___Vmy_4"}},2141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(19),a=n.n(i),o=n(24),l=n.n(o),r=n(0),c=n.n(r),s=n(335),m=n(1281),d=n(1e3),p=n.n(d),u=function(){return Object(s.mdx)(p.a,{rows:[{name:"menuItems",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"arrayOf"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "Utils.itemShape"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The array containing the menu items to be rendered within the menu."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The function to trigger when a menu item is selected.\nReturns ",Object(s.mdx)("inlineCode",{parentName:"p"},"(event, { key: String, metaData: Object})")))}return t.isMDXComponent=!0,t({})}},{name:"onDisclose",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The function that discloses the menu."))}return t.isMDXComponent=!0,t({})}},{name:"initialSelectedKey",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The key of the top level menu page."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The text to be displayed."))}return t.isMDXComponent=!0,t({})}},{name:"accessory",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The accessory element to be displayed next to the title."))}return t.isMDXComponent=!0,t({})}},{name:"menuRole",type:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'navigation'",description:function(){var e={};function t(t){var n=t.components,i=l()(t,["components"]);return Object(s.mdx)("wrapper",a()({},e,i,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The role attribute to set on the menu."))}return t.isMDXComponent=!0,t({})}}]})},y=n(1527),f=n.n(y),b={};function h(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationHeaderUtility, UtilityUtils } from 'terra-application-utility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationHeaderUtilityExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationHeaderUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.state = {\n      discloseCount: 0,\n    };\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'User Name';\n\n    return (\n      <div className={cx('container')}>\n        <div className={cx('content-wrapper')}>\n          <ApplicationHeaderUtility\n            menuItems={MockConfig(accessory)}\n            onChange={() => {}}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.HEADER}\n          />\n        </div>\n        <div>{`Disclose count: ${this.state.discloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationHeaderUtilityExample;\n\n")))}h.isMDXComponent=!0;var O=n(989),x=n.n(O),v={};function j(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-scss"}),":local {\n  .container {\n    padding-left: 4px;\n  }\n\n  .content-wrapper {\n    background-color: #0079be;\n    height: 60px;\n    position: relative;\n    width: 150px;\n  }\n}\n\n")))}j.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,i=e.isExpanded;return c.a.createElement(x.a,{title:t||"Application Header Utility Example",description:n,example:c.a.createElement(f.a,null),exampleCssSrc:c.a.createElement(j,null),exampleSrc:c.a.createElement(h,null),isExpanded:i})},C=n(1529),N=n.n(C),U={};function S(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},U,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationMenuUtility, UtilityUtils } from 'terra-application-utility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationMenuUtilityExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationMenuUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.state = {\n      discloseCount: 0,\n      selectedKey: null,\n    };\n  }\n\n  handleOnChange(event, key) {\n    this.setState({ selectedKey: key });\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'User Name';\n\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <ApplicationMenuUtility\n            menuItems={MockConfig(accessory)}\n            onChange={this.handleOnChange}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}.`}</div>\n        <div>{`Disclose count: ${this.state.discloseCount}.`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationMenuUtilityExample;\n\n")))}S.isMDXComponent=!0;var D={};function M(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},D,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-scss"}),":local {\n  .content-wrapper {\n    height: 60px;\n    padding-left: 4px;\n    width: 300px;\n  }\n}\n\n")))}M.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,i=e.isExpanded;return c.a.createElement(x.a,{title:t||"Application Menu Utility Example",description:n,example:c.a.createElement(N.a,null),exampleCssSrc:c.a.createElement(M,null),exampleSrc:c.a.createElement(S,null),isExpanded:i})},w=n(1531),k=n.n(w),A={};function E(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},A,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { UtilityUtils } from 'terra-application-utility';\nimport UtilityMenu from 'terra-application-utility/lib/utility/_UtilityMenu';\nimport classNames from 'classnames/bind';\nimport styles from './MenuUtilityMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass MenuUtilityMenuExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);\n    this.state = {\n      selectedKey: null,\n      requestCloseCount: 0,\n    };\n  }\n\n  handleOnChange(event, object) {\n    this.setState({ selectedKey: object.key });\n  }\n\n  handleOnRequestClose() {\n    this.setState(prevState => ({ requestCloseCount: prevState.requestCloseCount + 1 }));\n  }\n\n  render() {\n    const customComponent = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} className={cx('avatar')} />;\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <UtilityMenu\n            initialSelectedKey=\"menu\"\n            isHeightBounded\n            menuItems={MockConfig(customComponent)}\n            onChange={this.handleOnChange}\n            onRequestClose={this.handleOnRequestClose}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>\n        <div>{`Request close count: ${this.state.requestCloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default MenuUtilityMenuExample;\n\n")))}E.isMDXComponent=!0;var I={};function L(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},I,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-scss"}),":local {\n  .avatar {\n    height: 1.857rem;\n    width: 1.857rem;\n  }\n  \n  .content-wrapper {\n    height: 300px;\n    width: 300px;\n  }\n}\n\n")))}L.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,i=e.isExpanded;return c.a.createElement(x.a,{title:t||"Menu Utility Menu Example",description:n,example:c.a.createElement(k.a,null),exampleCssSrc:c.a.createElement(L,null),exampleSrc:c.a.createElement(E,null),isExpanded:i})},X={};function K(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},X,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(m.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"terra-application-utility"},"Terra Application Utility"),Object(s.mdx)("p",null,"The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding ",Object(s.mdx)("inlineCode",{parentName:"p"},"terra-application-header-layout")," and ",Object(s.mdx)("inlineCode",{parentName:"p"},"terra-application-menu-layout")," components."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",a()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-utility"))))),Object(s.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(s.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(s.mdx)("table",null,Object(s.mdx)("thead",{parentName:"table"},Object(s.mdx)("tr",{parentName:"thead"},Object(s.mdx)("th",a()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(s.mdx)("th",a()({parentName:"tr"},{align:null}),"Version"))),Object(s.mdx)("tbody",{parentName:"table"},Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"react"),Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"react-dom"),Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"react-intl"),Object(s.mdx)("td",a()({parentName:"tr"},{align:null}),"^2.8.0")))),Object(s.mdx)("h2",{id:"menu-items"},"Menu Items"),Object(s.mdx)("p",null,"The menu items are generated from an array of menu item objects, which can contain up to eight attributes: ",Object(s.mdx)("inlineCode",{parentName:"p"},"childKeys"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"content"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"contentLocation"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"isSelected"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"isSelectable"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"key"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"metaData"),", and ",Object(s.mdx)("inlineCode",{parentName:"p"},"title"),"."),Object(s.mdx)("ol",null,Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"childKeys")," is an optional array of ",Object(s.mdx)("inlineCode",{parentName:"li"},"keys")," (strings). Enables a nested page to be rendered when this menu item is selected. For each menu item within the nested page, store it's ",Object(s.mdx)("inlineCode",{parentName:"li"},"key")," within this ",Object(s.mdx)("inlineCode",{parentName:"li"},"childKeys")," array."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"content")," is an optional object. Enables custom components to be rendered as ",Object(s.mdx)("em",{parentName:"li"},"body")," items. Avoid using ",Object(s.mdx)("inlineCode",{parentName:"li"},"content")," as a footer item - it will always render as a button."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"contentLocation")," is an optional string, one of ",Object(s.mdx)("inlineCode",{parentName:"li"},"UtilityUtils.LOCATIONS.BODY")," or ",Object(s.mdx)("inlineCode",{parentName:"li"},"UtilityUtils.LOCATIONS.FOOTER"),". Indicates if an item will render within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to ",Object(s.mdx)("em",{parentName:"li"},"body")," if ",Object(s.mdx)("inlineCode",{parentName:"li"},"contentLocation")," is not provided."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"isReadOnly")," is an optional boolean. It removes interactivity and interactive styling from an item, and prevents menu closure when clicked directly."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"isSelected")," is an optional boolean. Enables a HOC to manage the selected states of each item."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"isSelectable")," is an optional boolean. Indicates if an item is selectable. A checkmark will toggle on item selection."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"key")," is ",Object(s.mdx)("strong",{parentName:"li"},"required"),". Must be a unique value to differentiate itself from other items. ",Object(s.mdx)("inlineCode",{parentName:"li"},"key")," is returned, along with ",Object(s.mdx)("inlineCode",{parentName:"li"},"metaData"),", within the onChange."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"metaData")," is an optional object. Use this to store other data for this menu item, such as its parent ",Object(s.mdx)("inlineCode",{parentName:"li"},"key")," or another function. ",Object(s.mdx)("inlineCode",{parentName:"li"},"metaData")," is returned, along with ",Object(s.mdx)("inlineCode",{parentName:"li"},"key"),", within the onChange."),Object(s.mdx)("li",{parentName:"ol"},Object(s.mdx)("strong",{parentName:"li"},"title")," is an optional string. Sets the text to render for this item. If this menu item contains ",Object(s.mdx)("inlineCode",{parentName:"li"},"childrenKeys"),", ",Object(s.mdx)("inlineCode",{parentName:"li"},"title")," will be used as the header text for the nested page.")),Object(s.mdx)("p",null,"Displayed below is the explicit structure of a menu item:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"PropTypes.shape({\n  /**\n   * Array containing the keys of each child item of this item.\n   */\n  childKeys: PropTypes.arrayOf(PropTypes.string),\n  /**\n   * The component associated with this item.\n   */\n  content: PropTypes.object,\n  /**\n   * The location to place the item. One of UtilityUtils.LOCATIONS.BODY, UtilityUtils.LOCATIONS.FOOTER.\n   */\n  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),\n  /**\n   * Whether the item is read-only.\n   */\n  isReadOnly: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selected.\n   */\n  isSelected: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selectable.\n   */\n  isSelectable: PropTypes.bool,\n  /**\n   * The unique key associated with this item.\n   */\n  key: PropTypes.string.isRequired,\n  /**\n   * Optional meta data to be returned along with the item key within the onChange.\n   */\n  metaData: PropTypes.object,\n  /**\n   * The text associated with this item.\n   */\n  title: PropTypes.string,\n});\n")),Object(s.mdx)("p",null,"For reference, checkout the ",Object(s.mdx)("a",a()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-application-utility/src/terra-dev-site/doc/common/MockConfig.js"}),"sample menu item config")," used for the bottom ",Object(s.mdx)("inlineCode",{parentName:"p"},"Utility Menu")," example."),Object(s.mdx)("h2",{id:"component-features"},"Component Features"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support"),Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://babeljs.io/docs/usage/polyfill"}),"babel-pollyfill")," is needed needed to support usage of the Map object in IE."))),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",a()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(g,{title:"Header: Utility",mdxType:"ApplicationHeaderUtilityExample"}),Object(s.mdx)(T,{title:"Menu: Utility",mdxType:"ApplicationMenuUtilityExample"}),Object(s.mdx)(R,{title:"Utility Menu",mdxType:"MenuUtilityMenuExample"}),Object(s.mdx)("h2",{id:"application-utility-props"},"Application Utility Props"),Object(s.mdx)(u,{mdxType:"ApplicationHeaderUtilityPropsTable"}))}K.isMDXComponent=!0}}]);