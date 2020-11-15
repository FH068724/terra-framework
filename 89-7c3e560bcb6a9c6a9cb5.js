(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1075:function(e,n,t){e.exports={placeholder:"InfiniteListDocExampleCommon-module__placeholder___3oD89","item-content":"InfiniteListDocExampleCommon-module__item-content___19iKr","main-content":"InfiniteListDocExampleCommon-module__main-content___1JBWw"}},1100:function(e,n,t){"use strict";var a=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(5)),i=a(t(1075)),m=o.default.bind(i.default),l=function(e){var n=e.children;return r.default.createElement("div",{className:m("main-content")},n)};n.default=l},1115:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),r=t.n(a),o=t(987),i=t.n(o),m=function(e){var n=e.url;return r.a.createElement(i.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.33.0",url:n})}},1303:function(e,n,t){"use strict";var a=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(5)),i=t(1039),m=a(t(1304)),l=o.default.bind(m.default),c=function(){return r.default.createElement("div",{className:l("indicator")},r.default.createElement(i.Placeholder,{title:"I'm Loading"}))};n.default=c},1304:function(e,n,t){e.exports={indicator:"MyInitialLoadingIndicator-module__indicator___dAryt"}},1305:function(e,n,t){"use strict";var a=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(5)),i=t(1039),m=a(t(1306)),l=o.default.bind(m.default),c=function(){return r.default.createElement("div",{className:l("indicator")},r.default.createElement(i.Placeholder,{title:"I'm Loading More"}))};n.default=c},1306:function(e,n,t){e.exports={indicator:"MyProgressiveLoadingIndicator-module__indicator___1f3oi"}},1652:function(e,n,t){"use strict";var a=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(342)),i=a(t(1303)),m=a(t(1100)),l=function(){return r.default.createElement(m.default,null,r.default.createElement(o.default,{dividerStyle:"standard",ariaLabel:"Initial Loading",initialLoadingIndicator:r.default.createElement(i.default,null)}))};n.default=l},1653:function(e,n,t){"use strict";var a=t(12),r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),i=a(t(342)),m=t(1039),l=r(t(5)),c=r(t(1305)),d=r(t(1100)),p=r(t(1075)),s=l.default.bind(p.default),u=function(){return o.default.createElement(d.default,null,o.default.createElement(i.default,{dividerStyle:"standard",ariaLabel:"Progressive Loading",progressiveLoadingIndicator:o.default.createElement(c.default,null)},o.default.createElement(i.Item,{key:"item-1"},o.default.createElement(m.Placeholder,{title:"Item 1",className:s("placeholder")}))))};n.default=u},1654:function(e,n,t){"use strict";var a=t(12),r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),i=a(t(342)),m=t(1039),l=r(t(5)),c=r(t(1655)),d=r(t(1100)),p=r(t(1075)),s=l.default.bind(p.default),u=function(e){return e.map((function(e){return n=e,o.default.createElement(i.Item,{key:n.key},o.default.createElement(m.Placeholder,{title:n.title,className:s("placeholder")}));var n}))},f=function(){return o.default.createElement(d.default,null,o.default.createElement(i.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Virtualized"},u(c.default)))};n.default=f},1655:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){for(var e=[],n=0;n<100;n+=1)e.push({title:"Item ".concat(n),key:"unique-".concat(n)});return e}();n.default=a},2146:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return P}));var a=t(19),r=t.n(a),o=t(24),i=t.n(o),m=t(0),l=t.n(m),c=t(335),d=t(1115),p=t(1e3),s=t.n(p),u=function(){return Object(c.mdx)(s.a,{rows:[{name:"ariaLabel",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"String that labels the list for screen readers."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"[]",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The child list items, of type InfiniteList Item, to be placed within the infinite list.\nFor further documentation of InfiniteList Item see terra-list's ListItem."))}return n.isMDXComponent=!0,n({})}},{name:"dividerStyle",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"enum"),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "standard",\n "bottom-only"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'none'",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Whether or not the list's child items should have a border color applied.\nOne of ",Object(c.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"'bottom-only'"),"."))}return n.isMDXComponent=!0,n({})}},{name:"initialLoadingIndicator",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An indicator to be displayed when no children are yet present."))}return n.isMDXComponent=!0,n({})}},{name:"isFinishedLoading",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Determines whether or not the loading indicator is visible and if callbacks are triggered."))}return n.isMDXComponent=!0,n({})}},{name:"onRequestItems",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Callback trigger when new list items are requested."))}return n.isMDXComponent=!0,n({})}},{name:"paddingStyle",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"enum"),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "standard",\n "compact"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'none'",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The padding styling to apply to the child list item content.\nOne of ",Object(c.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"'compact'"),"."))}return n.isMDXComponent=!0,n({})}},{name:"progressiveLoadingIndicator",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An indicator to be displayed at the end of the current loaded children."))}return n.isMDXComponent=!0,n({})}},{name:"progressiveLoadingMessage",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"A message to be provided to screen readers as new items are progressively loaded in"))}return n.isMDXComponent=!0,n({})}},{name:"role",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'none'",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Function callback for the ref of the List(ul)."))}return n.isMDXComponent=!0,n({})}}]})},f=t(1652),x=t.n(f),b={};function y(e){var n=e.components,t=i()(e,["components"]);return Object(c.mdx)("wrapper",r()({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport InfiniteList from 'terra-infinite-list';\n\nimport MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\n\nconst InitialLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Initial Loading\"\n      initialLoadingIndicator={<MyInitialLoadingIndicator />}\n    />\n  </MyExampleContainer>\n);\n\nexport default InitialLoadingExample;\n\n")))}y.isMDXComponent=!0;var j=t(989),O=t.n(j),v=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(O.a,{title:n||"Initial Loading Example",description:t,example:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(y,null),isExpanded:a})},g=t(1653),L=t.n(g),h={};function M(e){var n=e.components,t=i()(e,["components"]);return Object(c.mdx)("wrapper",r()({},h,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressiveLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Progressive Loading\"\n      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n    >\n      <Item key=\"item-1\">\n        <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n      </Item>\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default ProgressiveLoadingExample;\n\n")))}M.isMDXComponent=!0;var I={};function D(e){var n=e.components,t=i()(e,["components"]);return Object(c.mdx)("wrapper",r()({},I,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n\n  .item-content {\n    height: 50px;\n    width: 100%;\n  }\n\n  .main-content {\n    border: 1px solid #000;\n    height: 300px;\n    position: relative;\n    width: 100%;\n  }\n}\n\n")))}D.isMDXComponent=!0;var E=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(O.a,{title:n||"Progressive Loading Example",description:t,example:l.a.createElement(L.a,null),exampleCssSrc:l.a.createElement(D,null),exampleSrc:l.a.createElement(M,null),isExpanded:a})},C=t(1654),N=t.n(C),w={};function X(e){var n=e.components,t=i()(e,["components"]);return Object(c.mdx)("wrapper",r()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport mockData from './mock-data/virtualizedData';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createItems = data => data.map(item => createListItem(item));\n\nconst VirtualizedExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      isFinishedLoading\n      ariaLabel=\"Virtualized\"\n    >\n      {createItems(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default VirtualizedExample;\n\n")))}X.isMDXComponent=!0;var _=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(O.a,{title:n||"Virtualized Example",description:t,example:l.a.createElement(N.a,null),exampleCssSrc:l.a.createElement(D,null),exampleSrc:l.a.createElement(X,null),isExpanded:a})},T={};function P(e){var n=e.components,t=i()(e,["components"]);return Object(c.mdx)("wrapper",r()({},T,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)(d.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-infinite-list"},"Terra Infinite List"),Object(c.mdx)("p",null,"The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.\nInfiniteList is a controlled HOC built upon the ",Object(c.mdx)("inlineCode",{parentName:"p"},"terra-list")," component in order to allow for list style and selection patterns."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-infinite-list"))))),Object(c.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(c.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react-intl"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^2.8.0")))),Object(c.mdx)("h2",{id:"component-features"},"Component Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(c.mdx)("h2",{id:"list-item-selection"},"List Item Selection"),Object(c.mdx)("p",null,"Management of list selection is provided by the HOC implementing the InfiniteList. For an example of list item selection you can refer to List's documentation:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/single-select-list"}),"Single Select List")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/multi-select-list"}),"Multi Select List"))),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(v,{title:"Example Initial Loading Indicator",mdxType:"InitialLoadingExample"}),Object(c.mdx)(E,{title:"Example Progressive Loading Indicator",mdxType:"ProgressiveLoadingExample"}),Object(c.mdx)(_,{title:"Example Virtualized List",mdxType:"VirtualizedExample"}),Object(c.mdx)("h2",{id:"infinite-list-props-table"},"Infinite List Props Table"),Object(c.mdx)(u,{mdxType:"InfiniteListSrc"}))}P.isMDXComponent=!0}}]);