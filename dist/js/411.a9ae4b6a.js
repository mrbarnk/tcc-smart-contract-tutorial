"use strict";(self["webpackChunkpresale_workshop"]=self["webpackChunkpresale_workshop"]||[]).push([[411],{46967:function(e,t,s){s.d(t,{Ao:function(){return a},D8:function(){return T},IN:function(){return u},dC:function(){return z},jL:function(){return r},lH:function(){return X},mb:function(){return m},pV:function(){return N},vZ:function(){return c}});s(44114),s(14603),s(47566),s(98721);var n=s(69983);const o=(0,n.BX)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),r={state:o,subscribe(e){return(0,n.B1)(o,(()=>e(o)))},push(e,t){e!==o.view&&(o.view=e,t&&(o.data=t),o.history.push(e))},reset(e){o.view=e,o.history=[e]},replace(e){o.history.length>1&&(o.history[o.history.length-1]=e,o.view=e)},goBack(){if(o.history.length>1){o.history.pop();const[e]=o.history.slice(-1);o.view=e}},setData(e){o.data=e}},a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return a.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const o=encodeURIComponent(t);return`${n}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const o=encodeURIComponent(t);return`${n}wc?uri=${o}`},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(a.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=r.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},i=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),l=(0,n.BX)({enabled:i,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:l,subscribe(e){return(0,n.B1)(l.events,(()=>e((0,n.P9)(l.events[l.events.length-1]))))},initialize(){l.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){const t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){const t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){const t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},d=(0,n.BX)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),u={state:d,subscribe(e){return(0,n.B1)(d,(()=>e(d)))},setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},p=(0,n.BX)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:p,subscribe(e){return(0,n.B1)(p,(()=>e(p)))},setConfig(e){var t,s;c.initialize(),u.setChains(e.chains),u.setIsAuth(Boolean(e.enableAuthMode)),u.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),u.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),a.setModalVersionInStorage(),Object.assign(p,e)}};var h=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,v=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&v(e,s,t[s]);if(g)for(var s of g(t))I.call(t,s)&&v(e,s,t[s]);return e};const y="https://explorer-api.walletconnect.com",C="wcm",w="js-2.6.2";async function W(e,t){const s=f({sdkType:C,sdkVersion:w},t),n=new URL(e,y);return n.searchParams.append("projectId",m.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&n.searchParams.append(e,String(t))})),(await fetch(n)).json()}const L={async getDesktopListings(e){return W("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return W("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return W("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return W("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${y}/w3m/v1/getWalletImage/${e}?projectId=${m.state.projectId}&sdkType=${C}&sdkVersion=${w}`},getAssetImageUrl(e){return`${y}/w3m/v1/getAssetImage/${e}?projectId=${m.state.projectId}&sdkType=${C}&sdkVersion=${w}`}};var E=Object.defineProperty,O=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,k=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,D=(e,t)=>{for(var s in t||(t={}))A.call(t,s)&&k(e,s,t[s]);if(O)for(var s of O(t))U.call(t,s)&&k(e,s,t[s]);return e};const M=a.isMobile(),j=(0,n.BX)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),N={state:j,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=m.state;if("NONE"===e||"ALL"===t&&!e)return j.recomendedWallets;if(a.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await L.getAllListings(t),n=Object.values(s);n.sort(((t,s)=>{const n=e.indexOf(t.id),o=e.indexOf(s.id);return n-o})),j.recomendedWallets=n}else{const{chains:e,isAuth:s}=u.state,n=e?.join(","),o=a.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:a.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:o?t.join(","):void 0},{listings:i}=M?await L.getMobileListings(r):await L.getDesktopListings(r);j.recomendedWallets=Object.values(i)}return j.recomendedWallets},async getWallets(e){const t=D({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=m.state,{recomendedWallets:o}=j;if("ALL"===n)return j.wallets;o.length?t.excludedIds=o.map((e=>e.id)).join(","):a.isArray(s)&&(t.excludedIds=s.join(",")),a.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),u.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:i}=e,{listings:l,total:c}=M?await L.getMobileListings(t):await L.getDesktopListings(t),d=Object.values(l),p=i?"search":"wallets";return j[p]={listings:[...j[p].listings,...d],total:c,page:r??1},{listings:d,total:c}},getWalletImageUrl(e){return L.getWalletImageUrl(e)},getAssetImageUrl(e){return L.getAssetImageUrl(e)},resetSearch(){j.search={listings:[],total:0,page:1}}},S=(0,n.BX)({open:!1}),T={state:S,subscribe(e){return(0,n.B1)(S,(()=>e(S)))},async open(e){return new Promise((t=>{const{isUiLoaded:s,isDataLoaded:n}=u.state;if(a.removeWalletConnectDeepLink(),u.setWalletConnectUri(e?.uri),u.setChains(e?.chains),r.reset("ConnectWallet"),s&&n)S.open=!0,t();else{const e=setInterval((()=>{const s=u.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),S.open=!0,t())}),200)}}))},close(){S.open=!1}};var B=Object.defineProperty,P=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,$=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,R=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&$(e,s,t[s]);if(P)for(var s of P(t))x.call(t,s)&&$(e,s,t[s]);return e};function H(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const V=(0,n.BX)({themeMode:H()?"dark":"light"}),X={state:V,subscribe(e){return(0,n.B1)(V,(()=>e(V)))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=R({},s))}},K=(0,n.BX)({open:!1,message:"",variant:"success"}),z={state:K,subscribe(e){return(0,n.B1)(K,(()=>e(K)))},openToast(e,t){K.open=!0,K.message=e,K.variant=t},closeToast(){K.open=!1}}},86411:function(e,t,s){s.d(t,{WalletConnectModal:function(){return o}});var n=s(46967);class o{constructor(e){this.openModal=n.D8.open,this.closeModal=n.D8.close,this.subscribeModal=n.D8.subscribe,this.setTheme=n.lH.setThemeConfig,n.lH.setThemeConfig(e),n.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(191).then(s.bind(s,53191));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),n.IN.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=411.a9ae4b6a.js.map