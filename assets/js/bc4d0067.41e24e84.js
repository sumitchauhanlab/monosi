"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[7689],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},2757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(8215),n(6396),["components"]),c={id:"slack",title:"Slack Integration",sidebar_label:"Slack"},l=void 0,s={unversionedId:"integrations/slack",id:"integrations/slack",title:"Slack Integration",description:"Monosi integrates directly with Slack to be alert you in real-time of anomalies. It does so through the Incoming Webhooks feature of Slack.",source:"@site/docs/integrations/slack.md",sourceDirName:"integrations",slug:"/integrations/slack",permalink:"/docs/integrations/slack",editUrl:"https://github.com/monosidev/monosi/tree/master/documentation/docs/integrations/slack.md",tags:[],version:"current",frontMatter:{id:"slack",title:"Slack Integration",sidebar_label:"Slack"},sidebar:"sidebarUserGuide",previous:{title:"BigQuery",permalink:"/docs/integrations/bigquery"},next:{title:"Webhooks",permalink:"/docs/integrations/webhooks"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Monosi integrates directly with Slack to be alert you in real-time of anomalies. It does so through the Incoming Webhooks feature of Slack."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the steps over at Slack for creating an Incoming Webhook. Note that you may need permissions for your workspace in Slack to be able to create a webhook."),(0,i.kt)("li",{parentName:"ol"},"Add the webhook as a Slack integration in Monosi")),(0,i.kt)("p",null,"Navigate to the Integrations page in Monosi, click the \u201cCreate Integration\u201d button."),(0,i.kt)("img",{src:"/img/integrations/overview.png",alt:"Integrations home"}),(0,i.kt)("p",null,"Provide a name for this integration as well as the incoming webhook URL and hit submit."),(0,i.kt)("img",{src:"/img/integrations/create.png",alt:"Create integration"}),(0,i.kt)("p",null,"Once saved, anomalies will be sent to this Slack integration moving forward until deleted."))}m.isMDXComponent=!0}}]);