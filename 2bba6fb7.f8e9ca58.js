(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{2203:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},2204:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return l}))},2205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var l=n(0),r=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=l,j=u["".concat(b,".").concat(s)]||u[s]||O[s]||c;return n?r.a.createElement(j,a(a({ref:t},i),{},{components:n})):r.a.createElement(j,a({ref:t},i))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,b=new Array(c);b[0]=s;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,b[1]=a;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},459:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var l=n(2203),r=n(2204),c=(n(0),n(2205)),b={title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},a={unversionedId:"apis/network/download/downloadFile",id:"version-2.x/apis/network/download/downloadFile",isDocsHomePage:!1,title:"Taro.downloadFile(option)",description:"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\uff0c\u5355\u6b21\u4e0b\u8f7d\u5141\u8bb8\u7684\u6700\u5927\u6587\u4ef6\u4e3a 50MB\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/network/download/downloadFile.md",slug:"/apis/network/download/downloadFile",permalink:"/taro/docs/2.x/apis/network/download/downloadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/download/downloadFile.md",version:"2.x",sidebar_label:"downloadFile",sidebar:"version-2.x/API",previous:{title:"Taro.addInterceptor(callback)",permalink:"/taro/docs/2.x/apis/network/request/addInterceptor"},next:{title:"DownloadTask",permalink:"/taro/docs/2.x/apis/network/download/DownloadTask"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FileSuccessCallbackResult",id:"filesuccesscallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\uff0c\u5355\u6b21\u4e0b\u8f7d\u5141\u8bb8\u7684\u6700\u5927\u6587\u4ef6\u4e3a 50MB\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"}),"\u76f8\u5173\u8bf4\u660e"),"\u3002"),Object(c.b)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u5728\u670d\u52a1\u7aef\u54cd\u5e94\u7684 header \u4e2d\u6307\u5b9a\u5408\u7406\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Content-Type")," \u5b57\u6bb5\uff0c\u4ee5\u4fdd\u8bc1\u5ba2\u6237\u7aef\u6b63\u786e\u5904\u7406\u6587\u4ef6\u7c7b\u578b\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => DownloadTask\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"url"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u4e0b\u8f7d\u8d44\u6e90\u7684 url")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"filePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u6587\u4ef6\u4e0b\u8f7d\u540e\u5b58\u50a8\u7684\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"header"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42\u7684 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: FileSuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"filesuccesscallbackresult"},"FileSuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"filePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u7528\u6237\u6587\u4ef6\u8def\u5f84\u3002\u4f20\u5165 filePath \u65f6\u4f1a\u8fd4\u56de\uff0c\u8ddf\u4f20\u5165\u7684 filePath \u4e00\u81f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"statusCode"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3002\u6ca1\u4f20\u5165 filePath \u6307\u5b9a\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\u65f6\u4f1a\u8fd4\u56de\uff0c\u4e0b\u8f7d\u540e\u7684\u6587\u4ef6\u4f1a\u5b58\u50a8\u5230\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.downloadFile({\n  url: 'https://example.com/audio/123', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u8d44\u6e90\n  success: function (res) {\n    // \u53ea\u8981\u670d\u52a1\u5668\u6709\u54cd\u5e94\u6570\u636e\uff0c\u5c31\u4f1a\u628a\u54cd\u5e94\u5185\u5bb9\u5199\u5165\u6587\u4ef6\u5e76\u8fdb\u5165 success \u56de\u8c03\uff0c\u4e1a\u52a1\u9700\u8981\u81ea\u884c\u5224\u65ad\u662f\u5426\u4e0b\u8f7d\u5230\u4e86\u60f3\u8981\u7684\u5185\u5bb9\n    if (res.statusCode === 200) {\n      Taro.playVoice({\n        filePath: res.tempFilePath\n      })\n    }\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.downloadFile"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);