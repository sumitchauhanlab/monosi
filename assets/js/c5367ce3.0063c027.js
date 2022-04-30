"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[674],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={tags:["releases"],posted_on_:new Date("2022-04-01T00:00:00.000Z"),slug:"v010-release",title:"v0.1.0 Release",author:"Kevin Unkrich",author_title:"Co-founder",author_image_url:"https://avatars.githubusercontent.com/u/15347345?v=4",release_version:"V0.1.0"},s=void 0,u={permalink:"/changelog/v010-release",editUrl:"https://github.com/monosidev/monosi/tree/master/documentation/changelog/2022-04-01-v010-release.md",source:"@site/changelog/2022-04-01-v010-release.md",title:"v0.1.0 Release",description:"Monosi v0.1.0 Release",date:"2022-04-01T00:00:00.000Z",formattedDate:"April 1, 2022",tags:[{label:"releases",permalink:"/changelog/tags/releases"}],readingTime:1.155,truncated:!0,authors:[{name:"Kevin Unkrich",title:"Co-founder",imageURL:"https://avatars.githubusercontent.com/u/15347345?v=4"}],prevItem:{title:"v0.1.1 Release",permalink:"/changelog/v011-release"}},c={authorsImageUrls:[void 0]},p=[{value:"Web Application &amp; UI",id:"web-application--ui",children:[],level:3},{value:"Automatic Scheduler",id:"automatic-scheduler",children:[],level:2},{value:"Profiler",id:"profiler",children:[{value:"Deployment",id:"deployment",children:[],level:3}],level:2},{value:"Integration Support",id:"integration-support",children:[{value:"Documentation",id:"documentation",children:[],level:3},{value:"Testing &amp; Bug fixes",id:"testing--bug-fixes",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Monosi v0.1.0 Release"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Monosi's v0.1.0 release brings a new UI, ease of use & deployment, and much more."),(0,a.kt)("h3",{id:"web-application--ui"},"Web Application & UI"),(0,a.kt)("p",null,"In order to use the Monosi application, a web frontend and server are provided to add data sources, receive alerts, and view data quality analysis of the monitors that are running."),(0,a.kt)("img",{alt:"Monosi Release",class:"case-study-header",src:"/img/example.gif"}),(0,a.kt)("h2",{id:"automatic-scheduler"},"Automatic Scheduler"),(0,a.kt)("p",null,"Built-in scheduling is provided out of the box with Monosi so that you can set it and forget it - until you receive an alert - or choose to view regularly up-to-date data at any time."),(0,a.kt)("h2",{id:"profiler"},"Profiler"),(0,a.kt)("p",null,"Built-in profiling allows for the automatic creation of data monitors and quality checks when a data source is added."),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Deploying has been simplified with Docker and Docker Compose. All the necessary dependencies for Monosi to run are managed through Docker Compose, making it easy to start with just 3 commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/monosidev/monosi.git\ncd monosi\nmake compose\n")),(0,a.kt)("h2",{id:"integration-support"},"Integration Support"),(0,a.kt)("p",null,"Support for Snowflake, PostgreSQL, and Redshift has been added. "),(0,a.kt)("p",null,"You can also receive alerts via webhooks and Slack."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Documentation has been added to the project and is available at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.monosi.dev"},"https://docs.monosi.dev")),(0,a.kt)("h3",{id:"testing--bug-fixes"},"Testing & Bug fixes"),(0,a.kt)("p",null,"More tests have been added to ensure the reliability of the code. Furthermore, bug fixes and code changes have been made to make Monosi increasingly more stable."))}m.isMDXComponent=!0}}]);