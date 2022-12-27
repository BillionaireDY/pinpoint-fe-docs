"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),g=o,m=s["".concat(l,".").concat(g)]||s[g]||u[g]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6},a="Merge",c={unversionedId:"guide/merge",id:"guide/merge",title:"Merge",description:"Description",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guide/merge.md",sourceDirName:"guide",slug:"/guide/merge",permalink:"/pinpoint-fe-docs/ko/docs/guide/merge",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Customize Label",permalink:"/pinpoint-fe-docs/ko/docs/guide/customize-label"},next:{title:"Introduction",permalink:"/pinpoint-fe-docs/ko/docs/scatterchart/introduction"}},l={},d=[{value:"Description",id:"description",level:2},{value:"MergedNode",id:"mergednode",level:2},{value:"MergedEdge",id:"mergededge",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"merge"},"Merge"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"\ub178\ub4dc\uc758 \uac1c\uc218\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \uadf8\ub798\ud504\ub97c \ud30c\uc545\ud558\uae30 \uc5b4\ub824\uc6cc\uc9c0\uace0 \uc774\uac83\uc744 \uadf8\ub9ac\ub294\ub370\uc5d0 \ub9ac\uc18c\uc2a4\uac00 \ub9ce\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 ServerMap \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc544\ub798\uc640 \uac19\uc740 \ud544\uc218 \uc870\uac74\uc744 \ud3ec\ud568\ud55c \uc5ec\ub7ec \uc870\uac74\uc5d0 \uc758\ud574 \ubcd1\ud569\ub85c\uc9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc885\ub2e8 \ub178\ub4dc\uc774\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uac19\uc740 type\uc758 \ub178\ub4dc\uc774\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ubd80\ubaa8\ub178\ub4dc\uac00 \uac19\ub2e4.")),(0,o.kt)("h2",{id:"mergednode"},"MergedNode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MergedNode extends Node {\n    nodes?: Node[];\n}\n")),(0,o.kt)("h2",{id:"mergededge"},"MergedEdge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MergedEdge extends Edge {\n    edges?: Edge[];\n}\n")))}u.isMDXComponent=!0}}]);