(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{2203:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},2204:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,l={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return c}))},2205:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var c=n(0),l=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),i=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},O=function(e){var t=i(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),O=i(n),d=c,j=O["".concat(r,".").concat(d)]||O[d]||s[d]||b;return n?l.a.createElement(j,a(a({ref:t},u),{},{components:n})):l.a.createElement(j,a({ref:t},u))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,r=new Array(b);r[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,r[1]=a;for(var u=2;u<b;u++)r[u]=n[u];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2206:function(e,t,n){"use strict";function c(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(l&&(l+=" "),l+=t);return l}},2207:function(e,t,n){"use strict";var c=n(0),l=n(2208);t.a=function(){var e=Object(c.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2208:function(e,t,n){"use strict";var c=n(0),l=Object(c.createContext)(void 0);t.a=l},2209:function(e,t,n){"use strict";var c=n(0),l=n.n(c),b=n(2207),r=n(2206),a=n(51),o=n.n(a),u=37,i=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,O=e.defaultValue,s=e.values,d=e.groupId,j=e.className,p=Object(b.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(c.useState)(O),g=f[0],y=f[1];if(null!=d){var v=m[d];null!=v&&v!==g&&s.some((function(e){return e.value===v}))&&y(v)}var x=function(e){y(e),null!=d&&h(d,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},j)},s.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case i:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(c.cloneElement)(a.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},2210:function(e,t,n){"use strict";var c=n(2203),l=n(0),b=n.n(l);t.a=function(e){var t=e.children,n=e.hidden,l=e.className;return b.a.createElement("div",Object(c.a)({role:"tabpanel"},{hidden:n,className:l}),t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var c=n(2203),l=n(2204),b=(n(0),n(2205)),r=n(2209),a=n(2210),o={title:"RichText",sidebar_label:"RichText"},u={unversionedId:"components/base/rich-text",id:"components/base/rich-text",isDocsHomePage:!1,title:"RichText",description:"\u5bcc\u6587\u672c",source:"@site/docs/components/base/rich-text.md",slug:"/components/base/rich-text",permalink:"/taro/docs/next/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/base/rich-text.md",version:"current",sidebar_label:"RichText",sidebar:"components",previous:{title:"Progress",permalink:"/taro/docs/next/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/next/components/forms/button"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RichTextProps",id:"richtextprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]},{value:"Text",id:"text",children:[]},{value:"HTMLElement",id:"htmlelement",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b-1",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:i};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5bcc\u6587\u672c"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RichTextProps>\n")),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(r.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(b.b)(a.a,{value:"React",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n"))),Object(b.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"components-page\">\n    <rich-text :nodes=\"nodes\"></rich-text>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n  data() {\n    return {\n      nodes: [{\n        name: 'div',\n        attrs: {\n          class: 'div_class',\n          style: 'line-height: 60px; color: red;'\n        },\n        children: [{\n          type: 'text',\n          text: 'Hello World!'\n        }]\n      }]\n    }\n  },\n  onReady () {\n    console.log('onReady')\n  }\n}\n<\/script>\n")))),Object(b.b)("h2",{id:"richtextprops"},"RichTextProps"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"nodes"),Object(b.b)("td",null,Object(b.b)("code",null,"Nodes")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u8282\u70b9\u5217\u8868/ HTML String")),Object(b.b)("tr",null,Object(b.b)("td",null,"space"),Object(b.b)("td",null,Object(b.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")))),Object(b.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"RichTextProps.space"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"tspace"},"TSpace"),Object(b.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"ensp"),Object(b.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"emsp"),Object(b.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"nbsp"),Object(b.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(b.b)("h3",{id:"text"},"Text"),Object(b.b)("p",null,"\u6587\u672c\u8282\u70b9"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(b.b)("th",null,"\u8bf4\u660e"),Object(b.b)("th",null,"\u5907\u6ce8"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"type"),Object(b.b)("td",null,Object(b.b)("code",null,'"text"')),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u6587\u672c\u7c7b\u578b"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,"text"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,'""')),Object(b.b)("td",null,"\u6587\u672c\u5b57\u7b26\u4e32"),Object(b.b)("td",null,Object(b.b)("code",null,"\u652f\u6301 entities"))))),Object(b.b)("h3",{id:"htmlelement"},"HTMLElement"),Object(b.b)("p",null,"\u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a\u5143\u7d20\u8282\u70b9\n\u5168\u5c40\u652f\u6301class\u548cstyle\u5c5e\u6027\uff0c\u4e0d\u652f\u6301 id \u5c5e\u6027\u3002"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"),Object(b.b)("th",null,"\u5907\u6ce8"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"type"),Object(b.b)("td",null,Object(b.b)("code",null,'"node"')),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"HTML \u7c7b\u578b"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,"name"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u6807\u7b7e\u540d"),Object(b.b)("td",null,Object(b.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684 HTML \u8282\u70b9"))),Object(b.b)("tr",null,Object(b.b)("td",null,"attrs"),Object(b.b)("td",null,Object(b.b)("code",null,"Object")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5c5e\u6027"),Object(b.b)("td",null,Object(b.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684\u5c5e\u6027\uff0c\u9075\u5faa Pascal \u547d\u540d\u6cd5"))),Object(b.b)("tr",null,Object(b.b)("td",null,"children"),Object(b.b)("td",null,Object(b.b)("code",null,"Nodes")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5b50\u8282\u70b9\u5217\u8868"),Object(b.b)("td",null,Object(b.b)("code",null,"\u7ed3\u6784\u548c nodes \u4e00\u81f4"))))),Object(b.b)("h2",{id:"nodes"},"Nodes"),Object(b.b)("p",null,"\u8282\u70b9\u7c7b\u578b"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u73b0\u652f\u6301\u4e24\u79cd\u8282\u70b9\uff0c\u901a\u8fc7type\u6765\u533a\u5206\uff0c\u5206\u522b\u662f\u5143\u7d20\u8282\u70b9\u548c\u6587\u672c\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5728\u5bcc\u6587\u672c\u533a\u57df\u91cc\u663e\u793a\u7684HTML\u8282\u70b9 \u5143\u7d20\u8282\u70b9\uff1atype = node*")),Object(b.b)("h3",{id:"\u7c7b\u578b-1"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(Text | HTMLElement)[] | string\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"RichText"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);