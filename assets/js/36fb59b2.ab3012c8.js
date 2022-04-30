"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[9359],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(t,e,n){n(7294)},6396:function(t,e,n){n(7294),n(2389),n(9443);n(3616)},6837:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=(n(8215),n(6396),["components"]),i={id:"custom-sql",title:"Custom SQL Monitor",sidebar_label:"Custom SQL"},u=void 0,s={unversionedId:"user-guide/custom-sql",id:"user-guide/custom-sql",title:"Custom SQL Monitor",description:"The Custom SQL monitor allows the user to write a custom SQL query which evaluates to one column and define custom thresholds on which to alert. It\u2019s primary purpose is to cover long-tail use cases that the built-in metrics and monitors do not already cover.",source:"@site/docs/user-guide/custom-sql.md",sourceDirName:"user-guide",slug:"/user-guide/custom-sql",permalink:"/docs/user-guide/custom-sql",editUrl:"https://github.com/monosidev/monosi/tree/master/documentation/docs/user-guide/custom-sql.md",tags:[],version:"current",frontMatter:{id:"custom-sql",title:"Custom SQL Monitor",sidebar_label:"Custom SQL"}},c=[],m={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Custom SQL monitor allows the user to write a custom SQL query which evaluates to one column and define custom thresholds on which to alert. It\u2019s primary purpose is to cover long-tail use cases that the built-in metrics and monitors do not already cover."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Identifier"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},"Is equal in value"),(0,l.kt)("td",{parentName:"tr",align:null},"eq")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not Equals"),(0,l.kt)("td",{parentName:"tr",align:null},"Is not equal in value"),(0,l.kt)("td",{parentName:"tr",align:null},"ne")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater Than"),(0,l.kt)("td",{parentName:"tr",align:null},"Is greater than in value"),(0,l.kt)("td",{parentName:"tr",align:null},"gt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater Than or Equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Is greater than or equal in value"),(0,l.kt)("td",{parentName:"tr",align:null},"ge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less Than"),(0,l.kt)("td",{parentName:"tr",align:null},"Is greater than or equal in value"),(0,l.kt)("td",{parentName:"tr",align:null},"lt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less Than or Equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Is less than or equal in value"),(0,l.kt)("td",{parentName:"tr",align:null},"le")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Absolute Increase"),(0,l.kt)("td",{parentName:"tr",align:null},"Has increased from the beginning to end by a certain percentage"),(0,l.kt)("td",{parentName:"tr",align:null},"abs_inc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Absolute Decrease"),(0,l.kt)("td",{parentName:"tr",align:null},"Has increased from the beginning to end by a certain percentage"),(0,l.kt)("td",{parentName:"tr",align:null},"abs_dec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relative Increase"),(0,l.kt)("td",{parentName:"tr",align:null},"Has increased from one value to the next by a certain percentage"),(0,l.kt)("td",{parentName:"tr",align:null},"rel_inc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relative Decrease"),(0,l.kt)("td",{parentName:"tr",align:null},"Has decreased from one value to the next by a certain percentage"),(0,l.kt)("td",{parentName:"tr",align:null},"rel_dec")))))}p.isMDXComponent=!0}}]);