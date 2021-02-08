(window.webpackJsonp=window.webpackJsonp||[]).push([[1796],{1861:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2203),a=t(2204),o=(t(0),t(2205)),c={title:"\u6d88\u606f\u673a\u5236"},i={unversionedId:"apis/about/events",id:"apis/about/events",isDocsHomePage:!1,title:"\u6d88\u606f\u673a\u5236",description:"Taro \u63d0\u4f9b\u4e86 Taro.Events \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b",source:"@site/docs/apis/about/events.md",slug:"/apis/about/events",permalink:"/taro/docs/next/apis/about/events",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/about/events.md",version:"current",sidebar:"API",previous:{title:"\u73af\u5883\u5224\u65ad",permalink:"/taro/docs/next/apis/about/env"},next:{title:"General",permalink:"/taro/docs/next/apis/General"}},s=[],u={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u63d0\u4f9b\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"Taro.Events")," \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Events } from '@tarojs/taro'\n\nconst events = new Events()\n\n// \u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u63a5\u53d7\u53c2\u6570\nevents.on('eventName', (arg) => {\n  // doSth\n})\n\n// \u76d1\u542c\u540c\u4e2a\u4e8b\u4ef6\uff0c\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a handler\nevents.on('eventName', handler1)\nevents.on('eventName', handler2)\nevents.on('eventName', handler3)\n\n// \u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u4f20\u53c2\nevents.trigger('eventName', arg)\n\n// \u89e6\u53d1\u4e8b\u4ef6\uff0c\u4f20\u5165\u591a\u4e2a\u53c2\u6570\nevents.trigger('eventName', arg1, arg2, ...)\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\nevents.off('eventName')\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u67d0\u4e2a handler\nevents.off('eventName', handler1)\n\n// \u53d6\u6d88\u76d1\u542c\u6240\u6709\u4e8b\u4ef6\nevents.off()\n")),Object(o.b)("p",null,"\u540c\u65f6 Taro \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u6d88\u606f\u4e2d\u5fc3 ",Object(o.b)("inlineCode",{parentName:"p"},"Taro.eventCenter")," \u4ee5\u4f9b\u4f7f\u7528\uff0c\u5b83\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"Taro.Events")," \u7684\u5b9e\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.eventCenter.on\nTaro.eventCenter.trigger\nTaro.eventCenter.off\n")))}p.isMDXComponent=!0},2203:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},2204:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},2205:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},v=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),v=r,b=l["".concat(c,".").concat(v)]||l[v]||f[v]||o;return t?a.a.createElement(b,i(i({ref:n},u),{},{components:t})):a.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);