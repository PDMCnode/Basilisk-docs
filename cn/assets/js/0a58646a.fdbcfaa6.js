(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[265],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,h=c(t,["components","mdxType","originalType","parentName"]),d=u(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||l[p]||i;return a?n.createElement(f,o(o({ref:e},h),{},{components:a})):n.createElement(f,o({ref:e},h))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},4996:function(t,e,a){"use strict";a.d(e,{C:function(){return i},Z:function(){return o}});var n=a(2263),r=a(3919);function i(){var t=(0,n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(c)return e+a;var h=a.startsWith(e)?a:e+a.replace(/^\//,"");return u?t+h:h}(i,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},1577:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(4996),c={id:"parachain_auctions",title:"Parachain Auctions"},s={unversionedId:"parachain_auctions",id:"parachain_auctions",isDocsHomePage:!1,title:"Parachain Auctions",description:"Parachain auctions provide a mechanism to distribute the available parachain slots in Kusama to the most appropriate candidates. This article introduces parachain auctions by exploring two questions: Why do we have parachain auctions, and how do they work?",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/parachain_auctions.md",sourceDirName:".",slug:"/parachain_auctions",permalink:"/cn/parachain_auctions",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/parachain_auctions.md",version:"current",frontMatter:{id:"parachain_auctions",title:"Parachain Auctions"},sidebar:"sidebar",previous:{title:"Parachains",permalink:"/cn/parachains"},next:{title:"Crowdloans",permalink:"/cn/crowdloans"}},u=[{value:"Why?",id:"why",children:[]},{value:"How do Parachain Auctions work?",id:"how",children:[]}],h={toc:u};function l(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Parachain auctions provide a mechanism to distribute the available ",(0,i.kt)("a",{parentName:"p",href:"/parachains"},"parachain")," slots in Kusama to the most appropriate candidates. This article introduces parachain auctions by exploring two questions: Why do we have parachain auctions, and how do they work?"),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"Kusama and Polkadot are only able to support a limited number of parachains which are connected to their relay chain at the same time. The long-term goal for Polkadot is 100 parachains, while Kusama is kicking off the party with 5 parachains in the first round and another 5 to follow shortly thereafter."),(0,i.kt)("p",null,"Against this background, parachain auctions were introduced as a market-efficient instrument for dealing with the scarcity by distributing the available slots to the most appropriate parachain candidates."),(0,i.kt)("h2",{id:"how"},"How do Parachain Auctions work?"),(0,i.kt)("p",null,"Parachain slots are offered on an one-by-one basis in separate auctions which have the duration of 1 week. During this timeframe, candidate projects can bid on a parachain slot of their desired duration. The available slots are divided into lease periods of 6 weeks. The maximum duration of a parachain slot is 48 weeks (8 * 6 weeks). Below, you can see the auctions schedule for the first 5 Kusama slots."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,o.Z)("/parachain-auctions/ksm-schedule.jpg")})),(0,i.kt)("p",null,"The winner of the auction is the parachain candidate that has offered the ",(0,i.kt)("strong",{parentName:"p"},"highest amount of KSM to be locked up")," for the duration of the parachain slot at the closing moment of the auction. However, this might not be very straight-forward because Kusama uses the so-called ",(0,i.kt)("strong",{parentName:"p"},"candle auction mechanism")," in which the closing moment of the auction is ",(0,i.kt)("strong",{parentName:"p"},"initially unknown"),"."),(0,i.kt)("p",null,"As illustrated by the image below, the candle auctions consist of a starting period (1 day 21 hours) and an ending period (5 days). Candidates are able to bring out their bids at any moment, however the official auction closing moment is determined at the very end by picking a random moment somewhere within the ending period of 5 days. The candidate with the highest bid at that specific moment is the winner of the parachain slot."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,o.Z)("/parachain-auctions/auction-mechanism.jpg")})),(0,i.kt)("p",null,"The rationale behind this auction mechanism is to prevent auction sniping while promoting a more accurate price discovery. For crowdloan backers, it has an important implication: Support the ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"Basilisk crowdloan")," by locking your KSM early rather than late. This way, you make sure that your contribution is counted towards the winning bid of Basilisk."))}l.isMDXComponent=!0}}]);