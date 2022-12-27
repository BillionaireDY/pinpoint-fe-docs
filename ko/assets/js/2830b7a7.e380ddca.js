"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1345],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:5},i="Customize Label",d={unversionedId:"guide/customize-label",id:"guide/customize-label",title:"Customize Label",description:"Description",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guide/customize-label.md",sourceDirName:"guide",slug:"/guide/customize-label",permalink:"/pinpoint-fe-docs/ko/docs/guide/customize-label",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customize Style",permalink:"/pinpoint-fe-docs/ko/docs/guide/customize-style"},next:{title:"Merge",permalink:"/pinpoint-fe-docs/ko/docs/guide/merge"}},l={},p=[{value:"Description",id:"description",level:2},{value:"<code>renderNodeLabel</code>",id:"rendernodelabel",level:2},{value:"<code>renderEdgeLabel</code>",id:"renderedgelabel",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize-label"},"Customize Label"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Node\uc640 Edge\uc758 \ub77c\ubca8\uc744 \ucee4\uc2a4\ud140 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"rendernodelabel"},(0,o.kt)("inlineCode",{parentName:"h2"},"renderNodeLabel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Customize Node label"',title:'"Customize',Node:!0,'label"':!0},"import React from 'react';\nimport { ServerMap, MergedNode } from '@pinpoint-fe/server-map';\n\nexport default function MyServerMapPage() {\n  const renderNodeLabel = (node: MergedNode) => {\n    if (node.nodes?.length > 0) {\n      return 'This Node is Merged!'\n    } \n  }\n\n  return (\n    <ServerMap \n      data={data} \n      baseNodeId={'MY-APP'}\n      renderNodeLabel={renderNodeLabel}\n    />\n  );\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"renderNodeLabel"),"\uc774 \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uc2e4\ud589\uac12\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\uba74 node\uc758 label\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"node.label"),"\uc744 \uadf8\ub300\ub85c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"renderedgelabel"},(0,o.kt)("inlineCode",{parentName:"h2"},"renderEdgeLabel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Customize edge label"',title:'"Customize',edge:!0,'label"':!0},"import React from 'react';\nimport { ServerMap, MergedEdge } from '@pinpoint-fe/server-map';\n\nexport default function MyServerMapPage() {\n  const renderEdgeLabel = (edge: MergedEdge) => {\n    if (edge.edges?.length > 0) {\n      return 'This Edge is Merged!';\n    } \n    return 'This Edge is not merged';\n  }\n\n  return (\n    <ServerMap \n      data={data} \n      baseNodeId={'MY-APP'}\n      renderEdgeLabel={renderEdgeLabel}\n    />\n  );\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"renderEdgeLabel"),"\uc774 \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uc2e4\ud589\uac12\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\uba74 edge\uc758 label\uc740 \ube48 \ubb38\uc790\uc5f4 \uc785\ub2c8\ub2e4.")))}s.isMDXComponent=!0}}]);