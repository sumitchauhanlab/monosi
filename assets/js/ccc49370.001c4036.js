"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[6103],{9499:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),m="iconEdit_2_ui",o=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},1575:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),m=a(5002),o="tableOfContents_35-E",c=["className"];var s=function(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(m.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(3616),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,s=e.linkClassName,d=void 0===s?"table-of-contents__link":s,u=e.linkActiveClassName,p=void 0===u?void 0:u,v=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,l.Z)(e,m),h=(0,i.LU)(),E=null!=v?v:h.tableOfContents.minHeadingLevel,b=null!=g?g:h.tableOfContents.maxHeadingLevel,x=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:b}),N=(0,r.useMemo)((function(){if(d&&p)return{linkClassName:d,linkActiveClassName:p,minHeadingLevel:E,maxHeadingLevel:b}}),[d,p,E,b]);return(0,i.Si)(N),r.createElement(o,(0,n.Z)({toc:x,className:c,linkClassName:d},f))}},857:function(e,t,a){var n=a(7294),l=a(3905),r=a(5999),i=a(9960),m=a(7243),o=a(1217),c=a(3616);t.Z=function(e){var t,a,s=(t=(0,c.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),d=e.children,u=e.frontMatter,p=e.metadata,v=e.truncated,g=e.isBlogPostPage,f=void 0!==g&&g,h=p.date,E=p.formattedDate,b=p.permalink,x=p.tags,N=p.readingTime,Z=u.author,_=u.title,k=u.author_url||u.authorURL,y=u.author_image_url||u.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:_,description:p.description,keywords:x.map((function(e){return e.label})).join(", ")}),n.createElement("article",{className:f?void 0:"mb-8 max-w-screen-lg lg:mb-0"},(a=f?"h1":"h2",n.createElement("header",{className:"my-12 flex flex-col "+(f?"items-center justify-center":"")},n.createElement(a,{className:"mb-4 text-3xl font-semibold leading-relaxed  "+(f?"max-w-lg text-center":"")},f?_:n.createElement(i.Z,{className:"text-[color:var(--color)]",to:b},_)),n.createElement("div",{className:"mb-4 flex items-center space-x-2 py-2"},y&&n.createElement(i.Z,{href:k},n.createElement("img",{className:"h-10 w-10 rounded-full shadow-md",src:y,alt:Z})),Z&&n.createElement("p",{className:"py-1 font-medium"},k?n.createElement(i.Z,{href:k},Z):n.createElement("span",null,Z))),n.createElement("time",{dateTime:h,className:"mb-4 block text-sm"},E,N&&n.createElement(n.Fragment,null," \xb7 ",s(N))),(x.length>0||v)&&x.length>0&&n.createElement("span",{className:"mb-5 flex flex-wrap"},x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(i.Z,{key:a,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-0.5 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80",to:a},t)}))))),n.createElement("article",{className:"md:prose-md prose mx-auto sm:prose lg:prose-lg"},n.createElement(l.Zo,{components:m.Z},d))))}},5375:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(5303),r=a(857),i=a(5999),m=a(9960);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=(a(3003),a(1575)),s=a(9499),d=a(3616);var u=function(e){var t=e.content,a=t.frontMatter,m=t.metadata,u=m.title,p=m.description,v=m.nextItem,g=m.prevItem,f=m.editUrl,h=a.hide_table_of_contents;return n.createElement("div",{id:"tailwind"},n.createElement(l.Z,{title:u,description:p,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"mx-auto my-14 max-w-screen-lg p-6 md:pl-10"},n.createElement("div",{className:"flex space-x-20"},n.createElement("main",{className:""},n.createElement(r.Z,{frontMatter:a,metadata:m,isBlogPostPage:!0},n.createElement(t,null)),n.createElement("div",{className:"mt-8"},f&&n.createElement("a",{className:"mt-20 flex items-center space-x-5",href:f,target:"_blank",rel:"noreferrer noopener"},n.createElement(s.Z,null),n.createElement("div",null,n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Have a suggestion? Spotted an inaccuracy? Help us fix it!")))),(v||g)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement(o,{nextItem:v,prevItem:g}))),!h&&t.toc&&t.toc.length>1&&n.createElement(c.Z,{toc:t.toc})))))}},3003:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){var t=e.sidebar,a=e.row,r=[];return 0===t.items.length||0===r.length?null:n.createElement("div",null,n.createElement("div",{className:a&&"col col--4"},n.createElement("h3",{className:"mb-2 text-xl font-semibold"},"Tags"),n.createElement("ul",null,n.createElement("span",{className:"mb-5 flex flex-wrap"},r.map((function(e){var t=e.title,a=e.url;return n.createElement(l.Z,{key:a,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-0.5 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80",to:a},t)}))))))}},7243:function(e,t,a){var n=a(7462),l=a(7294),r=a(9960),i=a(9055),m=a(9649),o=a(7488),c={code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(i.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(r.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:l.createElement("div",{className:"md:text-md w-80 text-sm sm:w-full sm:max-w-lg md:max-w-5xl"},l.createElement(i.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e)))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(o.Z,(0,n.Z)({},e,{summary:a}),r)},h1:(0,m.Z)("h1"),h2:(0,m.Z)("h2"),h3:(0,m.Z)("h3"),h4:(0,m.Z)("h4"),h5:(0,m.Z)("h5"),h6:(0,m.Z)("h6"),preview:function(e){var t=e.page,a=t.frontMatter,n=t.metadata,r=e.children,i=l.useState(!1),m=i[0],o=i[1];return l.createElement("span",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},style:{position:"relative",display:"inline-block"}},l.createElement("a",{href:n.permalink},r,l.createElement(s,null)),m&&l.createElement("div",{style:{position:"absolute",zIndex:1,width:"max-content",maxWidth:"350px",display:"flex",flexDirection:"column",borderRadius:"8px",backgroundColor:"#f2f2f2",color:"#020202",padding:"8px"}},l.createElement("div",{style:{fontSize:"1rem",fontWeight:"bold",textAlign:"center"}},a.title),l.createElement("div",{style:{backgroundColor:"#f2f2f2",padding:10,fontSize:"0.8rem"}},l.createElement("span",{style:{}},n.description),l.createElement("span",{style:{marginTop:"1rem",display:"block",fontSize:"0.75rem"}},l.createElement("a",{style:{color:"blue"},href:n.permalink},"see full article >>")))))}};function s(){return l.createElement("span",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center"}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"0.75rem",width:"0.75rem",viewBox:"0 0 20 20",fill:"currentColor"},l.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})))}t.Z=c}}]);