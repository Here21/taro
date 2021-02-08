(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var l=n(2203),r=n(2204),c=(n(0),n(2205)),b={title:"Taro.getSavedFileList(option)",sidebar_label:"getSavedFileList"},a={unversionedId:"apis/files/getSavedFileList",id:"apis/files/getSavedFileList",isDocsHomePage:!1,title:"Taro.getSavedFileList(option)",description:"\u83b7\u53d6\u672c\u5730\u5df2\u4fdd\u5b58\u7684\u6587\u4ef6\u5217\u8868",source:"@site/docs/apis/files/getSavedFileList.md",slug:"/apis/files/getSavedFileList",permalink:"/taro/docs/next/apis/files/getSavedFileList",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/files/getSavedFileList.md",version:"current",sidebar_label:"getSavedFileList",sidebar:"API",previous:{title:"Taro.openDocument(option)",permalink:"/taro/docs/next/apis/files/openDocument"},next:{title:"Taro.getSavedFileInfo(option)",permalink:"/taro/docs/next/apis/files/getSavedFileInfo"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"FileItem",id:"fileitem",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u672c\u5730\u5df2\u4fdd\u5b58\u7684\u6587\u4ef6\u5217\u8868"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"fileList"),Object(c.b)("td",null,Object(c.b)("code",null,"FileItem[]")),Object(c.b)("td",null,"\u6587\u4ef6\u6570\u7ec4")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"fileitem"},"FileItem"),Object(c.b)("p",null,"\u6587\u4ef6\u6570\u7ec4"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"createTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u6587\u4ef6\u4fdd\u5b58\u65f6\u7684\u65f6\u95f4\u6233\uff0c\u4ece1970/01/01 08:00:00 \u5230\u5f53\u524d\u65f6\u95f4\u7684\u79d2\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"filePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u672c\u5730\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u672c\u5730\u6587\u4ef6\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getSavedFileList({\n  success: function (res) {\n    console.log(res.fileList)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.getSavedFileList"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0},2203:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},2204:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return l}))},2205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var l=n(0),r=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),o=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,b=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(n),d=l,j=s["".concat(b,".").concat(d)]||s[d]||O[d]||c;return n?r.a.createElement(j,a(a({ref:t},u),{},{components:n})):r.a.createElement(j,a({ref:t},u))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,b=new Array(c);b[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,b[1]=a;for(var u=2;u<c;u++)b[u]=n[u];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);