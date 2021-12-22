(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{180:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(3),r=i(7),a=(i(0),i(309)),s=i(311),o=(i(314),i(315),i(310),{id:"index-redisinsightv2",title:"RedisInsight Developer Hub for Redis Interactive Tutorials",sidebar_label:"Overview",slug:"/explore/redisinsightv2"}),c={unversionedId:"explore/redisinsightv2/index-redisinsightv2",id:"explore/redisinsightv2/index-redisinsightv2",isDocsHomePage:!1,title:"RedisInsight Developer Hub for Redis Interactive Tutorials",description:"<RedisCard",source:"@site/docs/explore/redisinsightv2/index-redisinsightv2.mdx",slug:"/explore/redisinsightv2",permalink:"/explore/redisinsightv2",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/index-redisinsightv2.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Explore Your Data",permalink:"/explore"},next:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsightv2/getting-started"}},l=[],d={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)(s.a,{title:"New to RedisInsight",imgPath:"redisinsight.png",description:"Getting started with RedisInsight v2.0",preview:"redisinsight.png",page:"/explore/redisinsightv2/getting-started",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(s.a,{title:"RedisInsight Browser Visualization Tutorial",imgPath:"redisinsight.png",description:"Visualize Redis database keys using the RedisInsight Browser Tool",preview:"redisinsight.png",page:"/explore/redisinsightv2/browser",mdxType:"RedisCard"}))))}u.isMDXComponent=!0},311:function(e,t,i){"use strict";var n=i(0),r=i.n(n),a=i(309),s=i(316);i(310),i(59);t.a=function(e){var t=r.a.useState(!1),i=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!i)}})))),i&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(a.a,{components:s.a},e.children)))}},312:function(e,t,i){"use strict";var n=i(0),r=i(313);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},313:function(e,t,i){"use strict";var n=i(0),r=Object(n.createContext)(void 0);t.a=r},314:function(e,t,i){"use strict";var n=i(0),r=i.n(n),a=i(312),s=i(317),o=i(60),c=i.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,i=e.block,o=e.defaultValue,u=e.values,v=e.groupId,p=e.className,m=Object(a.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,b=Object(n.useState)(o),f=b[0],x=b[1],w=n.Children.toArray(e.children);if(null!=v){var O=h[v];null!=O&&O!==f&&u.some((function(e){return e.value===O}))&&x(O)}var E=function(e){x(e),null!=v&&g(v,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":i},p)},u.map((function(e){var t=e.value,i=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case d:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},i)}))),t?Object(n.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},315:function(e,t,i){"use strict";var n=i(3),r=i(0),a=i.n(r);t.a=function(e){var t=e.children,i=e.hidden,r=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:i,className:r}),t)}}}]);