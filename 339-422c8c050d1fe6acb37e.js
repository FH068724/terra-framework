(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),s=n(987),o=n.n(s),i=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-modal-manager",name:"terra-modal-manager",version:"6.43.0",url:t})}},1671:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(63)),s=a(n(21)),o=a(n(25)),i=a(n(31)),l=a(n(28)),c=a(n(29)),d=a(n(30)),u=a(n(0)),p=a(n(2)),m=a(n(5)),h=a(n(85)),g=a(n(1074)),b=a(n(50)),f=n(220),x=a(n(337)),y=a(n(1672));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var M=m.default.bind(y.default),C=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var a;return(0,s.default)(this,n),(a=t.call(this,e)).checkLockState=a.checkLockState.bind((0,i.default)(a)),a.state={text:void 0},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this.context;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,r=t.disclosureType,s=this.context;return u.default.createElement(b.default,{fill:!0},u.default.createElement(f.DisclosureManagerHeaderAdapter,{title:a,collapsibleMenuView:u.default.createElement(g.default,null,u.default.createElement(g.default.Item,{text:"Button 1",key:"button_1",onClick:function(){e.setState({selectedHeaderAction:"Button 1"})}}),u.default.createElement(g.default.Item,{text:"Button 2",key:"button_2",onClick:function(){e.setState({selectedHeaderAction:"Button 2"})}}))}),u.default.createElement("div",{className:M("content-wrapper")},u.default.createElement("h3",null,a),u.default.createElement("p",null,"The disclosed component can disclose content within the same modal."),u.default.createElement("p",null,"It can also render a header (like above) that implements the various DisclosureManager control functions."),u.default.createElement("button",{type:"button",onClick:function(){s.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}},"Dismiss"),u.default.createElement("button",{type:"button",onClick:function(){s.disclose({preferredType:r,size:"small",content:{key:"Nested ".concat(a),component:u.default.createElement(n,{name:"Nested ".concat(a),disclosureType:r})}})}},"Disclose Again"),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("p",null,"The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below."),u.default.createElement("input",{type:"text",onChange:function(t){e.setState({text:t.target.value})},value:this.state.text||""}),this.state.text&&this.state.text.length?u.default.createElement("p",null,"Component has unsaved changes!"):null,u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("p",null,"Selected Header Action:"," ",u.default.createElement("b",null,this.state.selectedHeaderAction))))}}]),n}(u.default.Component);C.contextType=f.DisclosureManagerContext,C.propTypes={name:p.default.string,disclosureType:p.default.string},C.defaultProps={name:"Disclosure Component"};var D=Object.keys(f.availableDisclosureHeights),j=Object.keys(f.availableDisclosureWidths),O=function(e){return e.map((function(e,t){var n=t;return u.default.createElement("option",{key:n,value:e},e)}))},T=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var a;return(0,s.default)(this,n),(a=t.call(this,e)).renderButton=a.renderButton.bind((0,i.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,i.default)(a)),a.getId=a.getId.bind((0,i.default)(a)),a.state={id:"dimensions",disclosureHeight:D[0],disclosureWidth:j[0]},a}return(0,o.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return e+this.state.id}},{key:"renderButton",value:function(e){var t=this.props.disclosureType,n=this.context;return u.default.createElement("button",{type:"button",onClick:function(){n.disclose({preferredType:t,size:e,content:{key:"Content-Disclosure-".concat(e),component:u.default.createElement(C,{name:"Disclosure Component",disclosureType:t})}})}},"Disclose (".concat(e,")"))}},{key:"renderFormButton",value:function(){var e=this,t=this.props.disclosureType,n=this.context,a="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return u.default.createElement("button",{type:"button",onClick:function(){n.disclose({preferredType:t,dimensions:{height:e.state.disclosureHeight,width:e.state.disclosureWidth},content:{key:"Content-Disclosure-Dimensions",component:u.default.createElement(C,{name:"Disclosure Component",disclosureType:t})}})}},a)}},{key:"renderForm",value:function(){return u.default.createElement("form",null,u.default.createElement("label",{htmlFor:this.getId("disclosureHeight")},"Pop Content Height"),u.default.createElement("select",{id:this.getId("disclosureHeight"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},O(D)),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("label",{htmlFor:this.getId("disclosureWidth")},"Pop Content Width"),u.default.createElement("select",{id:this.getId("disclosureWidth"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},O(j)),u.default.createElement("br",null),u.default.createElement("br",null))}},{key:"render",value:function(){return u.default.createElement(b.default,{header:u.default.createElement(h.default,{title:"ModalManager Child Component"})},u.default.createElement("div",{className:M("content-wrapper")},this.renderButton("default"),this.renderButton("tiny"),this.renderButton("small"),this.renderButton("medium"),this.renderButton("large"),this.renderButton("huge"),this.renderButton("fullscreen"),u.default.createElement("br",null),u.default.createElement("p",null,"The child components can disclose content in the modal at various sizes.")),u.default.createElement("div",{className:M("content-wrapper")},this.renderForm(),this.renderFormButton()))}}]),n}(u.default.Component);T.contextType=f.DisclosureManagerContext,T.propTypes={disclosureType:p.default.string};var w=function(e){var t=e.showDisclosureAccessory;return u.default.createElement("div",{className:M("example-wrapper")},u.default.createElement(x.default,{disclosureAccessory:t?u.default.createElement("div",{className:M("disclosure-accessory")},"Disclosure Accessory"):void 0},u.default.createElement(T,{disclosureType:"modal"})))};w.propTypes={showDisclosureAccessory:p.default.bool};var k=w;t.default=k},1672:function(e,t,n){e.exports={"example-wrapper":"example-styles-module__example-wrapper___mkqZp","content-wrapper":"example-styles-module__content-wrapper___EPc_g","disclosure-accessory":"example-styles-module__disclosure-accessory___1Ygfa"}},2163:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(19),r=n.n(a),s=n(24),o=n.n(s),i=n(0),l=n.n(i),c=n(335),d=n(1309),u=n(1671),p=n.n(u),m={};function h(e){var t=e.components,n=o()(e,["components"]);return Object(c.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable max-classes-per-file */\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\nimport ContentContainer from 'terra-content-container';\nimport {\n  availableDisclosureHeights, availableDisclosureWidths, DisclosureManagerHeaderAdapter, DisclosureManagerContext,\n} from 'terra-disclosure-manager';\n\nimport ModalManager from 'terra-modal-manager';\nimport styles from 'terra-modal-manager/lib/terra-dev-site/doc/example/example-styles.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DisclosureComponent extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.checkLockState = this.checkLockState.bind(this);\n\n    this.state = {\n      text: undefined,\n    };\n  }\n\n  componentDidMount() {\n    const disclosureManager = this.context;\n\n    if (disclosureManager && disclosureManager.registerDismissCheck) {\n      disclosureManager.registerDismissCheck(this.checkLockState);\n    }\n  }\n\n  checkLockState() {\n    if (this.state.text && this.state.text.length) {\n      return new Promise((resolve, reject) => {\n        // eslint-disable-next-line no-restricted-globals\n        if (!confirm(`${this.props.name} has unsaved changes that will be lost. Do you wish to continue?`)) { // eslint-disable-line no-alert\n          reject();\n          return;\n        }\n\n        resolve();\n      });\n    }\n\n    return Promise.resolve();\n  }\n\n  render() {\n    const { name, disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    return (\n      <ContentContainer fill>\n        <DisclosureManagerHeaderAdapter\n          title={name}\n          collapsibleMenuView={(\n            <CollapsibleMenuView>\n              <CollapsibleMenuView.Item\n                text=\"Button 1\"\n                key=\"button_1\"\n                onClick={() => {\n                  this.setState({\n                    selectedHeaderAction: 'Button 1',\n                  });\n                }}\n              />\n              <CollapsibleMenuView.Item\n                text=\"Button 2\"\n                key=\"button_2\"\n                onClick={() => {\n                  this.setState({\n                    selectedHeaderAction: 'Button 2',\n                  });\n                }}\n              />\n            </CollapsibleMenuView>\n          )}\n        />\n        <div className={cx('content-wrapper')}>\n          <h3>{name}</h3>\n          <p>The disclosed component can disclose content within the same modal.</p>\n          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>\n          <button\n            type=\"button\"\n            onClick={() => {\n              disclosureManager.dismiss()\n                .catch(() => {\n                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console\n                });\n            }}\n          >\n            Dismiss\n          </button>\n          <button\n            type=\"button\"\n            onClick={() => {\n              disclosureManager.disclose({\n                preferredType: disclosureType,\n                size: 'small',\n                content: {\n                  key: `Nested ${name}`,\n                  component: <DisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,\n                },\n              });\n            }}\n          >\n            Disclose Again\n          </button>\n          <br />\n          <br />\n          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>\n          <input\n            type=\"text\"\n            onChange={(event) => {\n              this.setState({\n                text: event.target.value,\n              });\n            }}\n            value={this.state.text || ''}\n          />\n          {this.state.text && this.state.text.length ? <p>Component has unsaved changes!</p> : null}\n          <br />\n          <br />\n          <p>\n            Selected Header Action:\n            {' '}\n            <b>{this.state.selectedHeaderAction}</b>\n          </p>\n        </div>\n      </ContentContainer>\n    );\n  }\n}\n\nDisclosureComponent.contextType = DisclosureManagerContext;\nDisclosureComponent.propTypes = {\n  name: PropTypes.string,\n  disclosureType: PropTypes.string,\n};\nDisclosureComponent.defaultProps = {\n  name: 'Disclosure Component',\n};\n\nconst HEIGHT_KEYS = Object.keys(availableDisclosureHeights);\nconst WIDTH_KEYS = Object.keys(availableDisclosureWidths);\n\nconst generateDimensionOptions = values => (\n  values.map((currentValue, index) => {\n    const keyValue = index;\n    return <option key={keyValue} value={currentValue}>{currentValue}</option>;\n  })\n);\n\nclass ContentComponent extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.renderButton = this.renderButton.bind(this);\n    this.handleSelectChange = this.handleSelectChange.bind(this);\n    this.getId = this.getId.bind(this);\n\n    this.state = { id: 'dimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };\n  }\n\n  handleSelectChange(event) {\n    this.setState({ [event.target.name]: event.target.value });\n  }\n\n  getId(name) {\n    return name + this.state.id;\n  }\n\n  renderButton(size) {\n    const { disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    return (\n      <button\n        type=\"button\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: disclosureType,\n            size,\n            content: {\n              key: `Content-Disclosure-${size}`,\n              component: <DisclosureComponent name=\"Disclosure Component\" disclosureType={disclosureType} />,\n            },\n          });\n        }}\n      >\n        {`Disclose (${size})`}\n      </button>\n    );\n  }\n\n  renderFormButton() {\n    const { disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    const name = `Disclose (${this.state.disclosureHeight}) x (${this.state.disclosureWidth})`;\n\n    return (\n      <button\n        type=\"button\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: disclosureType,\n            dimensions: { height: this.state.disclosureHeight, width: this.state.disclosureWidth },\n            content: {\n              key: 'Content-Disclosure-Dimensions',\n              component: <DisclosureComponent name=\"Disclosure Component\" disclosureType={disclosureType} />,\n            },\n          });\n        }}\n      >\n        {name}\n      </button>\n    );\n  }\n\n  renderForm() {\n    return (\n      <form>\n        <label htmlFor={this.getId('disclosureHeight')}>Pop Content Height</label>\n        <select id={this.getId('disclosureHeight')} name=\"disclosureHeight\" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>\n          {generateDimensionOptions(HEIGHT_KEYS)}\n        </select>\n        <br />\n        <br />\n        <label htmlFor={this.getId('disclosureWidth')}>Pop Content Width</label>\n        <select id={this.getId('disclosureWidth')} name=\"disclosureWidth\" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>\n          {generateDimensionOptions(WIDTH_KEYS)}\n        </select>\n        <br />\n        <br />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <ContentContainer\n        header={(\n          <ActionHeader\n            title=\"ModalManager Child Component\"\n          />\n        )}\n      >\n        <div className={cx('content-wrapper')}>\n          {this.renderButton('default')}\n          {this.renderButton('tiny')}\n          {this.renderButton('small')}\n          {this.renderButton('medium')}\n          {this.renderButton('large')}\n          {this.renderButton('huge')}\n          {this.renderButton('fullscreen')}\n          <br />\n          <p>The child components can disclose content in the modal at various sizes.</p>\n        </div>\n        <div className={cx('content-wrapper')}>\n          {this.renderForm()}\n          {this.renderFormButton()}\n        </div>\n      </ContentContainer>\n    );\n  }\n}\n\nContentComponent.contextType = DisclosureManagerContext;\nContentComponent.propTypes = {\n  disclosureType: PropTypes.string,\n};\n\nconst ModalManagerExample = ({ showDisclosureAccessory }) => (\n  <div className={cx('example-wrapper')}>\n    <ModalManager\n      disclosureAccessory={showDisclosureAccessory ? (\n        <div className={cx('disclosure-accessory')}>\n          Disclosure Accessory\n        </div>\n      ) : undefined}\n    >\n      <ContentComponent disclosureType=\"modal\" />\n    </ModalManager>\n  </div>\n);\n\nModalManagerExample.propTypes = {\n  showDisclosureAccessory: PropTypes.bool,\n};\n\nexport default ModalManagerExample;\n/* eslint-enable max-classes-per-file */\n\n")))}h.isMDXComponent=!0;var g=n(989),b=n.n(g),f={};function x(e){var t=e.components,n=o()(e,["components"]);return Object(c.mdx)("wrapper",r()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-scss"}),":local {\n  .example-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 28rem;\n  }\n\n  .content-wrapper {\n    padding: 0.7rem;\n  }\n\n  .disclosure-accessory {\n    background-color: #add8e6;\n    padding: 1rem;\n  }\n}\n\n")))}x.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(b.a,{title:t||"Modal Manager Example",description:n,example:l.a.createElement(p.a,null),exampleCssSrc:l.a.createElement(x,null),exampleSrc:l.a.createElement(h,null),isExpanded:a})},v=n(1e3),M=n.n(v),C=function(){return Object(c.mdx)(M.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=o()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=o()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))}return t.isMDXComponent=!0,t({})}},{name:"disclosureAccessory",type:function(){var e={};function t(t){var n=t.components,a=o()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=o()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The component to render within the Modal above the disclosed content."))}return t.isMDXComponent=!0,t({})}}]})},D={};function j(e){var t=e.components,n=o()(e,["components"]);return Object(c.mdx)("wrapper",r()({},D,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(d.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-modal-manager"},"Terra Modal Manager"),Object(c.mdx)("p",null,"The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal."),Object(c.mdx)("p",null,"ModalManager provides the ability to handle and navigate stacked disclosures."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-modal-manager"))))),Object(c.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(c.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"terra-disclosure-manager"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^4.16.0")))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import ModalManager, { disclosureType } from 'terra-modal-manager';\n")),Object(c.mdx)("h2",{id:"implementation-requirements"},"Implementation Requirements"),Object(c.mdx)("p",null,"The ModalManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must interface with the ModalManager's context using the ",Object(c.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," higher-order component generator provided by the ",Object(c.mdx)("inlineCode",{parentName:"p"},"terra-disclosure-manager")," package. Alternatively, ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," can be consumed directly using the ",Object(c.mdx)("inlineCode",{parentName:"p"},"useContext")," hook."),Object(c.mdx)("p",null,"The ModalManager responds to ",Object(c.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager should provide a preferred type of ",Object(c.mdx)("inlineCode",{parentName:"p"},'"modal"'),". This value is exported from the package as ",Object(c.mdx)("inlineCode",{parentName:"p"},"disclosureType"),". Please see the ",Object(c.mdx)("a",r()({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/disclosure-manager-api"}),"DisclosureManager API documentation")," for a full description of the ModalManager's capabilities."),Object(c.mdx)("h2",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),Object(c.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader and provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component can use the ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),Object(c.mdx)("p",null,"If the disclosed component does ",Object(c.mdx)("strong",{parentName:"p"},"not")," render a ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",Object(c.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself. In this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering the appropriate controls to navigate the disclosure stack.\ns"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager. In a future major release, the ModalManager will ",Object(c.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),Object(c.mdx)("h2",{id:"disclosure-accessory"},"Disclosure Accessory"),Object(c.mdx)("p",null,"The ",Object(c.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content. The provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily provide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis, and each component in the disclosure stack will be decorated with the same accessory component."),Object(c.mdx)("h2",{id:"component-features"},"Component Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(y,{title:"Example",mdxType:"ModalManagerExample"}),Object(c.mdx)(y,{showDisclosureAccessory:!0,title:"Disclosure Accessory Example",mdxType:"ModalManagerExample"}),Object(c.mdx)("h2",{id:"modal-manager-props"},"Modal Manager Props"),Object(c.mdx)(C,{mdxType:"ModalManagerPropsTable"}))}j.isMDXComponent=!0}}]);