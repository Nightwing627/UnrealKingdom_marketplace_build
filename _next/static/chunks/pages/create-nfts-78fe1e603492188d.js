(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{4815:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-nfts",function(){return n(7523)}])},7523:function(e,t,n){"use strict";n.r(t);var r=n(8520),a=n.n(r),s=n(5893),o=n(7294),c=n(8363),i=n(7918),l=n.n(i),u=n(2003),f=n.n(u),d=n(1163),p=n(9669),h=n.n(p),m=n(5313);function x(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){x(s,r,a,o,c,"next",e)}function c(e){x(s,r,a,o,c,"throw",e)}o(void 0)}))}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}var v={host:"ipfs.infura.io",protocol:"https",port:5001,apiPath:"/api/v0",headers:{authorization:"Basic "+n(8764).Buffer.from("2DE7of6yoq13YKes8LJX0QK4W9p:e5f7ff545c3f92a1f711fb3e3154dd1f").toString("base64")}},k=(0,c.Ue)(v);t.default=function(){var e=(0,o.useState)({provider:null,web3:null}),t=e[0],n=e[1],r=(0,d.useRouter)(),c=function(e){e.on("accountsChanged",(function(e){return window.location.reload()})),e.on("chainChanged",(function(e){return window.location.reload()}))},i=(0,m.Z)().isWhitelisted;(0,o.useEffect)((function(){i?console.log("success"):window.location.href="/"}),[]),(0,o.useEffect)((function(){g(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()();case 2:(t=e.sent)?(c(t),n({provider:t,web3:new(l())(t)})):window.alert("Please install any provider wallet like MetaMask");case 4:case"end":return e.stop()}}),e)})))()}),[]);var u=(0,o.useState)(null),p=u[0],x=u[1];(0,o.useEffect)((function(){var e=g(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getAccounts();case 2:n=e.sent,x(n[0]);case 4:case"end":return e.stop()}}),e)})));t.web3&&e()}),[t.web3]);var w=(0,o.useState)(null),v=(w[0],w[1]),j=(0,o.useState)(null),N=(j[0],j[1]),y=(0,o.useState)([]),S=(y[0],y[1],(0,o.useState)("")),E=(S[0],S[1]),P=(0,o.useState)(),C=P[0],_=P[1],F=g(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.prev=1,e.next=4,k.add(n);case 4:r=e.sent,s="".concat("https://opensee.infura-ipfs.io/ipfs","/").concat(r.path),_(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),O=(0,o.useState)({price:"",name:"",description:""}),T=O[0],M=O[1],I=g(a().mark((function e(){var t,n,r,s,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=T.price,n=T.name,r=T.description,t&&n&&r&&C){e.next=3;break}return e.abrupt("return");case 3:return s=JSON.stringify({name:n,description:r,image:C}),e.prev=4,e.next=7,k.add(s);case 7:o=e.sent,c="".concat("https://opensee.infura-ipfs.io/ipfs","/").concat(o.path),E(c),W(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])}))),W=g(a().mark((function e(n){var s,o,c,i,u,f,d,m,x,g,w,b,k,j,y,S,E,P,C,_;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/abis/NFT.json");case 2:return s=e.sent,e.next=5,fetch("/abis/NFTMarketPlace.json");case 5:return o=e.sent,e.next=8,s.json();case 8:return c=e.sent,e.next=11,o.json();case 11:return i=e.sent,u=i.abi,f=c.abi,e.next=16,t.web3.eth.net.getId();case 16:if(d=e.sent,m=c.networks[d],!(x=i.networks[d])||!x){e.next=52;break}return g=m.address,w=x.address,e.next=24,new t.web3.eth.Contract(f,g);case 24:return b=e.sent,v(b),e.next=28,new t.web3.eth.Contract(u,w);case 28:if(k=e.sent,N(k),!p){e.next=49;break}return e.next=33,b.methods.createNFtToken(n).send({from:p});case 33:return j=e.sent,y=j.events.Transfer.returnValues[2],e.next=37,k.methods.gettheMarketFees().call();case 37:return S=(S=e.sent).toString(),E=l().utils.toWei(T.price,"ether"),P=T.name,C=T.description,_={name:P,description:C,nftAddress:g,tokenId:y.toString(),price:E.toString(),marketFees:S,tokenURI:n},h().post("https://f65b-95-216-95-188.eu.ngrok.io/v1/updatenftinfo",_).then((function(e){200===e.status?console.log("success to add NFT item"):console.log(e.data.msg)})).catch((function(e){console.log("error: ",e)})),e.next=45,k.methods.createItemForSale(g,y,E).send({from:p,value:S});case 45:e.sent,r.push("/"),e.next=50;break;case 49:window.alert(" Unlock Your Wallet Or Please install any provider wallet like MetaMask"),r.push("https://metamask.io/download.html");case 50:e.next=53;break;case 52:window.alert("You are at Wrong Netweok, Connect with Goerli Please");case 53:case"end":return e.stop()}}),e)})));return(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"w-1/2 flex flex-col pb-11",children:[(0,s.jsx)("input",{className:"mt-8 borderd rounded p-3 bg-gray-200",placeholder:"Enter your NFT Name",onChange:function(e){return M(b({},T,{name:e.target.value}))}}),(0,s.jsx)("input",{className:"mt-8 borderd rounded p-3 bg-gray-200",placeholder:"Enter your NFT Price in Ether",onChange:function(e){return M(b({},T,{price:e.target.value}))}}),(0,s.jsx)("textarea",{className:"mt-8 borderd rounded p-3 bg-gray-200",placeholder:"Enter your NFT Description",onChange:function(e){return M(b({},T,{description:e.target.value}))}}),(0,s.jsxs)("div",{className:"grid grid-cols-1 space-y-2 py-4",children:[(0,s.jsx)("label",{className:"text-sm font-bold text-gray-500 tracking-wide",children:"Attach the Image"}),(0,s.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,s.jsxs)("label",{className:"flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center",children:[(0,s.jsxs)("div",{className:"h-full w-full text-center flex flex-col justify-center items-center ",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-10 h-10 text-blue-400 group-hover:text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),(0,s.jsx)("div",{className:"flex flex-auto max-h-48 w-2/5 mx-auto -mt-10",children:C?(0,s.jsx)("img",{className:"has-mask object-center",src:C,alt:"freepik image"}):(0,s.jsx)("img",{className:"has-mask h-36 object-center",src:"https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg",alt:"freepik image"})}),(0,s.jsxs)("p",{className:"pointer-none text-gray-500 ",children:[(0,s.jsx)("span",{className:"text-sm",children:"Drag and drop"})," files here"," ",(0,s.jsx)("br",{})," or"," ",(0,s.jsx)("a",{id:"",className:"text-blue-600 hover:underline",children:"select a file"})," ","from your computer"]})]}),(0,s.jsx)("input",{type:"file",onChange:F})]})})]}),(0,s.jsx)("p",{className:"text-sm text-gray-300",children:(0,s.jsx)("span",{children:"File type: png,jpg,jpeg"})}),(0,s.jsx)("button",{className:"font-bold bg-yellow-500 mt-5 rounded p-4 text-white",onClick:I,children:"Mint Your NFT"})]})})}},2611:function(){}},function(e){e.O(0,[543,245,921,774,888,179],(function(){return t=4815,e(e.s=t);var t}));var t=e.O();_N_E=t}]);