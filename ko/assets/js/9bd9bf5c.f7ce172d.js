"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4},i="Customize Style",a={unversionedId:"guide/customize-style",id:"guide/customize-style",title:"Customize Style",description:"Description",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guide/customize-style.md",sourceDirName:"guide",slug:"/guide/customize-style",permalink:"/pinpoint-fe-docs/ko/docs/guide/customize-style",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/pinpoint-fe-docs/ko/docs/guide/events"},next:{title:"Customize Label",permalink:"/pinpoint-fe-docs/ko/docs/guide/customize-label"}},c={},l=[{value:"Description",id:"description",level:2},{value:"<code>Css.Node</code>",id:"cssnode",level:2},{value:"<code>Css.Edge</code>",id:"cssedge",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize-style"},"Customize Style"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Node\uc640 Edge\uc758 \uc2a4\ud0c0\uc77c\uc744 \ucee4\uc2a4\ud140 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Custom Theme Type"',title:'"Custom',Theme:!0,'Type"':!0},"type ServerMapTheme = {\n  transactionStatus?: {\n    default?: {\n      stroke?: string,\n      strokeWidth?: number,\n    }, \n    good?: {\n      stroke?: string,\n      strokeWidth?: number,\n    },\n    slow?: {\n      stroke?: string,\n      strokeWidth?: number,\n    },\n    bad?: {\n      stroke?: string,\n      strokeWidth?: number,\n    },\n  },\n  node?: {\n    default?: Css.Node,\n    highlight?: Css.Node,\n    main?: Css.Node,\n  },\n  edge?: {\n    default?: Css.Edge,\n    highlight?: Css.Edge,\n    loop?: Css.Edge,\n  }\n} \n")),(0,o.kt)("h2",{id:"cssnode"},(0,o.kt)("inlineCode",{parentName:"h2"},"Css.Node")),(0,o.kt)("p",null,"\ubcf4\ub2e4 \ub354 \uad6c\uccb4\uc801\uc778 \uc2a4\ud0c0\uc77c\ub9c1 \ud56d\ubaa9\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://js.cytoscape.org/#style/node-body"},"cytoscape \ubb38\uc11c"),"\uc5d0\uc11c \ucc38\uace0\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"cssedge"},(0,o.kt)("inlineCode",{parentName:"h2"},"Css.Edge")),(0,o.kt)("p",null,"\ubcf4\ub2e4 \ub354 \uad6c\uccb4\uc801\uc778 \uc2a4\ud0c0\uc77c\ub9c1 \ud56d\ubaa9\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://js.cytoscape.org/#style/node-body"},"cytoscape \ubb38\uc11c"),"\uc5d0\uc11c \ucc38\uace0\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);