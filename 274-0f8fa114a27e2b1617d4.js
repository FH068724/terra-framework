(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1065:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(19)),i=a(t(24)),d=a(t(0)),u=a(t(221)),n=a(t(2)),r=a(t(10)),s=a(t(5)),c=a(t(7)),_=a(t(1072)),f=s.default.bind(_.default),m={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},h={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(m)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},p=function(e){var l=e.header,t=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,_=e.ariaLabel,h=e.width,p=e.closeOnOutsideClick,g=e.rootSelector,v=(0,i.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]),w=d.default.useContext(c.default);if(!s)return null;var M=["dialog-modal-wrapper",w.className];return h in m?M.push("width-".concat(m[h])):M.push("width-1120"),d.default.createElement(u.default,{ariaLabel:_,role:"dialog",classNameModal:f(M),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:p,rootSelector:g},d.default.createElement("div",(0,o.default)({},v,{className:(0,r.default)(f("dialog-modal-inner-wrapper"),v.className)}),d.default.createElement("div",{className:f("dialog-modal-container")},d.default.createElement("div",null,l),d.default.createElement("div",{className:f("dialog-modal-body")},a),d.default.createElement("div",null,t))))};p.propTypes=h,p.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var g=p;l.default=g},1072:function(e,l,t){e.exports={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___gVCR2","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___-2y-b","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3L6PG","width-320":"DialogModal-module__width-320___1SJka","width-480":"DialogModal-module__width-480___2dOBX","width-560":"DialogModal-module__width-560___3zVv8","width-640":"DialogModal-module__width-640___2PEtl","width-800":"DialogModal-module__width-800___2rG5D","width-960":"DialogModal-module__width-960___wkRF0","width-1120":"DialogModal-module__width-1120___qNLsc","width-1280":"DialogModal-module__width-1280___1bosK","width-1440":"DialogModal-module__width-1440___1bYIL","width-1600":"DialogModal-module__width-1600___2Rb_O","width-1760":"DialogModal-module__width-1760___2xeul","width-1920":"DialogModal-module__width-1920___1Vq72","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___3kstA","dialog-modal-container":"DialogModal-module__dialog-modal-container___10XP8","dialog-modal-header":"DialogModal-module__dialog-modal-header___vojqY","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2S67Y","dialog-modal-body":"DialogModal-module__dialog-modal-body___xtsrz"}},1752:function(e,l,t){e.exports={"selection-list":"DialogModalWithSelect-test-module__selection-list___3A3P5"}},1974:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(21)),i=a(t(25)),d=a(t(31)),u=a(t(28)),n=a(t(29)),r=a(t(30)),s=a(t(0)),c=a(t(46)),_=a(t(85)),f=a(t(227)),m=a(t(349)),h=a(t(5)),p=a(t(1065)),g=a(t(1752));function v(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,r.default)(e);if(l){var o=(0,r.default)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,n.default)(this,t)}}var w=h.default.bind(g.default),M=function(e){(0,u.default)(t,e);var l=v(t);function t(){var e;return(0,o.default)(this,t),(e=l.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,d.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,d.default)(e)),e}return(0,i.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(p.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(_.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(f.default,{start:"Footer Goes here"})},s.default.createElement("p",null,e),s.default.createElement(m.default,{variant:"combobox",placeholder:"Select a color",className:w("selection-list")},s.default.createElement(m.default.Option,{value:"blue",display:"Blue"}),s.default.createElement(m.default.Option,{value:"green",display:"Green"}),s.default.createElement(m.default.Option,{value:"purple",display:"Purple"}),s.default.createElement(m.default.Option,{value:"red",display:"Red"}),s.default.createElement(m.default.Option,{value:"violet",display:"Violet"})),s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);l.default=M}}]);