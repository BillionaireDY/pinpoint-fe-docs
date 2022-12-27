"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(d,".").concat(s)]||u[s]||k[s]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},o="Events",i={unversionedId:"servermap/guide/events",id:"servermap/guide/events",title:"Events",description:"Description",source:"@site/docs/servermap/guide/events.md",sourceDirName:"servermap/guide",slug:"/servermap/guide/events",permalink:"/pinpoint-fe-docs/docs/servermap/guide/events",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edge",permalink:"/pinpoint-fe-docs/docs/servermap/guide/edge"},next:{title:"Customize Style",permalink:"/pinpoint-fe-docs/docs/servermap/guide/customize-style"}},d={},p=[{value:"Description",id:"description",level:2},{value:"<code>onClickNode</code>",id:"onclicknode",level:2},{value:"Props of Callback Parameter",id:"props-of-callback-parameter",level:3},{value:"<code>onClickEdge</code>",id:"onclickedge",level:2},{value:"Props of Callback Parameter",id:"props-of-callback-parameter-1",level:3},{value:"<code>onClickBackground</code>",id:"onclickbackground",level:2},{value:"Props of Callback Parameter",id:"props-of-callback-parameter-2",level:3}],c={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"We provide three of click event interfaces; ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickNode"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickEdge"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickBackground"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ServerMapProps {\n  data: {\n    nodes: Node[],\n    edges: Edge[],\n  };\n  baseNodeId: string;\n  customTheme?: any;\n  // highlight-start\n  onClickNode?: ClickEventHandler<MergedNode>;\n  onClickEdge?: ClickEventHandler<MergedEdge>;\n  onClickBackground?: ClickEventHandler<{}>;\n  // highlight-end\n  renderNodeLabel?: (node: MergedNode) => string | undefined;\n  renderEdgeLabel?: (edge: MergedEdge) => string | undefined;\n}\n\n// highlight-next-line\ntype ClickEventHandler<T> = (param: {\n  data?: T,\n  eventType: 'right' | 'left',\n  position: cytoscape.Position,\n}) => void;\n\n")),(0,a.kt)("h2",{id:"onclicknode"},(0,a.kt)("inlineCode",{parentName:"h2"},"onClickNode")),(0,a.kt)("p",null,"Callback to execute when clicking nodes."),(0,a.kt)("h3",{id:"props-of-callback-parameter"},"Props of Callback Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/guide/merge#mergednode"},"MergedNode")," : ",(0,a.kt)("inlineCode",{parentName:"td"},"{ nodes?: Node[] } & Node")),(0,a.kt)("td",{parentName:"tr",align:null},"Target node data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventType"),(0,a.kt)("td",{parentName:"tr",align:null},'"right" or "left"'),(0,a.kt)("td",{parentName:"tr",align:null},"Mouse click type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"cytoscape.Position :  ",(0,a.kt)("inlineCode",{parentName:"td"},"{ x: number, y: number }")),(0,a.kt)("td",{parentName:"tr",align:null},"Coordinates where the event occurred")))),(0,a.kt)("h2",{id:"onclickedge"},(0,a.kt)("inlineCode",{parentName:"h2"},"onClickEdge")),(0,a.kt)("p",null,"Callback to execute when clicking edges."),(0,a.kt)("h3",{id:"props-of-callback-parameter-1"},"Props of Callback Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/guide/merge#mergededge"},"MergedEdge")," : ",(0,a.kt)("inlineCode",{parentName:"td"},"{ nodes?: Edge[] } & Edge")),(0,a.kt)("td",{parentName:"tr",align:null},"Targe edge data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventType"),(0,a.kt)("td",{parentName:"tr",align:null},'"right" or "left"'),(0,a.kt)("td",{parentName:"tr",align:null},"Mouse click type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"cytoscape.Position :  ",(0,a.kt)("inlineCode",{parentName:"td"},"{ x: number, y: number }")),(0,a.kt)("td",{parentName:"tr",align:null},"Coordinates where the event occurred")))),(0,a.kt)("h2",{id:"onclickbackground"},(0,a.kt)("inlineCode",{parentName:"h2"},"onClickBackground")),(0,a.kt)("p",null,"Callback to execute when clicking background."),(0,a.kt)("h3",{id:"props-of-callback-parameter-2"},"Props of Callback Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventType"),(0,a.kt)("td",{parentName:"tr",align:null},'"right" or "left"'),(0,a.kt)("td",{parentName:"tr",align:null},"Mouse click type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"cytoscape.Position :  ",(0,a.kt)("inlineCode",{parentName:"td"},"{ x: number, y: number }")),(0,a.kt)("td",{parentName:"tr",align:null},"Coordinates where the event occurred")))))}k.isMDXComponent=!0}}]);