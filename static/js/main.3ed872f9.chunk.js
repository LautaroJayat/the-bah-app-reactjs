(this["webpackJsonpbah-app"]=this["webpackJsonpbah-app"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/face1.04e5449c.jpg"},27:function(e,t,n){e.exports=n.p+"static/media/drama.4f4c4db0.jpg"},28:function(e,t,n){e.exports=n.p+"static/media/drama2.4fc139f1.jpg"},31:function(e,t,n){e.exports=n.p+"static/media/search-24px.09d7e628.svg"},32:function(e,t,n){e.exports=n(46)},37:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(25),r=n.n(s),i=n(8),c=(n(37),n(11)),l=n(2),h=n(3),p=n(5),u=n(4),d=n(6),m=n(12),f=n(14),g=n.n(f),w=(n(23),n(26)),b=n.n(w),y=n(27),v=n.n(y),E=n(28),k=n.n(E),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={inputName:""},n.onChange=function(e){n.setState({inputName:e.target.value})},n.onSubmit=function(e){""===n.state.inputName?n.props.addName("GUEST"):(n.props.addName(n.state.inputName),n.setState({inputName:""}))},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{className:"skip",to:"/play"},"Skip"),o.a.createElement("svg",{id:"first-svg",width:"600",height:"600",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{transform:"translate(75,40) rotate(-60)"},o.a.createElement("path",{d:"M159,-183C203.1,-152.4,234,-99.6,225.2,-53.9C216.4,-8.1,168,30.4,136.7,73.5C105.3,116.5,91.1,164,56.2,193.6C21.3,223.3,-34.3,235.2,-74.4,215.7C-114.5,196.3,-139.1,145.4,-165.1,97C-191.2,48.5,-218.7,2.6,-204.4,-28.6C-190.1,-59.8,-133.9,-76.3,-92.9,-107.4C-51.9,-138.5,-25.9,-184.2,15.7,-203C57.4,-221.8,114.8,-213.5,159,-183Z",fill:"#0F4C75"}))),o.a.createElement("div",{id:"decoration-one"}),o.a.createElement(i.b,{onClick:this.onSubmit,to:"/Settings"},o.a.createElement("div",{className:"menu-container"},o.a.createElement("div",{className:"first"}),o.a.createElement("div",{className:"second"}),o.a.createElement("div",{className:"third"}))),o.a.createElement("div",{id:"first-image"},o.a.createElement("img",{src:b.a,alt:"A face with a solid expresion"})),o.a.createElement("div",{id:"second-image"},o.a.createElement("img",{src:v.a,alt:"A face with a drama expression"})),o.a.createElement("div",{id:"third-image"},o.a.createElement("img",{src:k.a,alt:"A face with a drama expression"})),o.a.createElement("div",{className:"main-title"},o.a.createElement("span",null,"Wellcome to"),o.a.createElement("h1",null,"Bah!")),o.a.createElement("input",{id:"name",onChange:this.onChange,name:"name",type:"text",autoComplete:"off",placeholder:"What's your name?"}),o.a.createElement("svg",{id:"start",width:"800",height:"800",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement(i.b,{onClick:this.onSubmit,to:"/play"},o.a.createElement("g",{transform:"translate(10,560) rotate(95)"},o.a.createElement("path",{d:"M170.1,-139.1C190.5,-109.9,156.7,-41,129.3,9.6C101.9,60.1,80.9,92.2,44.1,121.3C7.4,150.5,-45.1,176.6,-88.9,163.6C-132.7,150.6,-167.7,98.4,-186.5,36.7C-205.3,-25.1,-207.8,-96.4,-174,-128.6C-140.2,-160.8,-70.1,-153.9,2.3,-155.8C74.8,-157.6,149.6,-168.3,170.1,-139.1Z",fill:"#0F4C75"})))),o.a.createElement("svg",{id:"svg-slogan",width:"800",height:"800",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{transform:"translate(280,540) rotate(90)"},o.a.createElement("path",{d:"M170.1,-139.1C190.5,-109.9,156.7,-41,129.3,9.6C101.9,60.1,80.9,92.2,44.1,121.3C7.4,150.5,-45.1,176.6,-88.9,163.6C-132.7,150.6,-167.7,98.4,-186.5,36.7C-205.3,-25.1,-207.8,-96.4,-174,-128.6C-140.2,-160.8,-70.1,-153.9,2.3,-155.8C74.8,-157.6,149.6,-168.3,170.1,-139.1Z",fill:"#BBE1FA"}))),o.a.createElement(i.b,{onClick:this.onSubmit,to:"/play"},o.a.createElement("h2",{id:"start-button"},"Start!")),o.a.createElement("span",{id:"slogan"},"Just in time to ",o.a.createElement("strong",null,"Bah!")))}}]),t}(a.Component),j=(n(16),n(31)),x=n.n(j),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).handleLoaded=function(){setTimeout((function(){n.setState({loaded:!0})}),600)},n.flexContainer={position:"absolute",top:"12%",height:"40%",width:"100%",display:"flex",justifyContent:"center"},n.containerStyle={width:"80%",height:"100%",maxWidth:"300px",overflow:"hidden",borderRadius:"10%",filter:"drop-shadow(5px 5px 10px black)",animation:"none"},n.state={loaded:!1},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({loaded:!1})}},{key:"render",value:function(){return o.a.createElement("div",{style:this.flexContainer},o.a.createElement("div",{style:this.containerStyle},this.props.news.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:this.props.news[0].image,onLoad:this.handleLoaded,className:this.state.loaded?"playPicture":"dontPlayPicture",alt:this.props.news[0].alt}),o.a.createElement("div",{style:{zIndex:"1"},className:"loader"})):o.a.createElement("img",{src:"https://media1.giphy.com/media/YSvwImOVlXMS15KeNk/giphy.gif",className:"playPicture",alt:"Loading!"})))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).captionContainer={margin:"auto",width:"80%",height:"auto",minHeight:"120px",position:"relative",fontSize:"90%",top:"56%",display:"flex",justifyContent:"center",backgroundColor:"#0F4C75",borderRadius:"10px 30px",alignItems:"center",filter:"drop-shadow(5px 5px 10px black)"},n.captionStyle={width:"90%",height:"auto",color:"#BBE1FA",textAlign:"center",padding:"0",letterSpacing:"0.1rem",cursor:"default",animation:"captionIn 1s ease-in-out 1"},n.readyStyle={width:"90%",height:"auto",color:"#BBE1FA",textAlign:"center",padding:"0",letterSpacing:"0.1rem",cursor:"default",animation:"captionIn 1s ease-in-out 1",fontSize:"2rem"},n.update=n.props.shouldUpdate,n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e}},{key:"render",value:function(){return o.a.createElement("div",{style:this.captionContainer},o.a.createElement("p",{style:this.props.news.length>0?this.captionStyle:this.readyStyle},this.props.news.length>0?this.props.news[0].caption:"Ready to Bah?"))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).buttonsContainer={position:"absolute",bottom:"3%",width:"100%",display:"flex",justifyContent:"space-evenly",maxHeight:"200px",height:"20%"},n.careStyle={width:"40%",height:"100%",borderRadius:"20%",border:"none",backgroundColor:"#682727",color:"#BBE1FA",fontSize:"2.5rem",textAlign:"center",filter:"drop-shadow(5px 5px 10px black)",cursor:"pointer",fontWeight:"bold"},n.bahStyle={width:"40%",height:"100%",borderRadius:"20%",border:"none",backgroundColor:"#BBE1FA",color:"#1B262C",fontSize:"3rem",textAlign:"center",filter:"drop-shadow(5px 5px 10px black)",cursor:"pointer",fontWeight:"bold"},n.yesStyle={width:"60%",height:"100%",borderRadius:"10%/20%",border:"none",backgroundColor:"#BBE1FA",color:"#1B262C",fontSize:"3.5rem",textAlign:"center",filter:"drop-shadow(5px 5px 10px black)",cursor:"pointer",fontWeight:"bold"},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:this.buttonsContainer},this.props.news.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:this.props.careAbout,style:this.careStyle},"Care About"),o.a.createElement("button",{onClick:this.props.bahNews,style:this.bahStyle},"Bah!")):o.a.createElement("button",{onClick:this.props.fetchNews,style:this.yesStyle},"Yes!"))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},n.onChange=function(e){n.setState({search:e.target.value})},n.onClick=function(){n.props.searchBah(n.state.search),n.setState({search:""})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/Settings"},o.a.createElement("div",{className:"menu-container"},o.a.createElement("div",{className:"first"}),o.a.createElement("div",{className:"second"}),o.a.createElement("div",{className:"third"}))),o.a.createElement("div",{className:"searchBox"},o.a.createElement("input",{onChange:this.onChange,type:"text",placeholder:"Looking to Bah something?"}),o.a.createElement("button",{onClick:this.onClick,className:"searchButton"},o.a.createElement("img",{src:x.a,alt:"search button"}))),o.a.createElement(o.a.Fragment,{key:this.props.news.length>0?this.props.news[0].key:0},o.a.createElement(N,{shouldUpdate:this.props.shouldUpdate,counter:this.props.counter,news:this.props.news}),o.a.createElement(S,{shouldUpdate:this.props.shouldUpdate,counter:this.props.counter,news:this.props.news}),o.a.createElement(O,{bahNews:this.props.bahNews,careAbout:this.props.careAbout,fetchNews:this.props.fetchNews,news:this.props.news})))}}]),t}(a.Component),B=(n(45),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).ratio=n.props.cares/n.props.bahs,n.span=function(e){return e>.7?"It seems that you care a lot... try to relax!":e>.45&&e<.7?"So, you are very balanced... you don't like Rock and Roll?":e<.45?"You don't care about anything! Take it easy!":"Keep Bahing so we can tell you something intresting!"},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"title-background"},o.a.createElement("h1",null,"Hi ",this.props.name,"!")),o.a.createElement("div",{className:"span-background"},o.a.createElement("p",null,"This are your current stats")),o.a.createElement("div",{className:"bah-background"},o.a.createElement("h1",null,"Bahs!")," ",o.a.createElement("h1",{style:{color:"#682727"}},this.props.bahs)),o.a.createElement("div",{className:"cares-background"},o.a.createElement("h1",null,"Cares")," ",o.a.createElement("h1",null,this.props.cares)),o.a.createElement("div",{className:"span-background"},o.a.createElement("p",null,this.span(this.ratio))),o.a.createElement(i.b,{to:"/play"},o.a.createElement("p",{className:"return"},"Keep Bahing!")))}}]),t}(a.Component)),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",email:"",password:"",news:[],cares:0,bahs:0,shouldUpdate:!0},n.keywords=["bank","trump","obama","clinton","war","tv","wind","marilyn","dinosaur","diet","rock","winter","flood","evolution","china","japan","argentina","zimbawe","corea","namibia","rusia","venezuela","virus","water","macdonalds","nuclear","space","congress","madonna","monkey","nintendo","tsunami","africa"],n.keywordCount=0,n.addName=function(e){n.setState({name:e})},n.addMail=function(){},n.addPassword=function(){},n.fetchNews=function(){console.log("fetching!"),fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(n.keywords[n.keywordCount],"&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp")).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.response.docs.filter((function(e){return e.multimedia.length>0}));t=t.map((function(e){return{key:g.a.v4(),image:"https://www.nytimes.com/"+e.multimedia[0].url,caption:e.snippet.length<151?e.snippet:e.snippet.substr(0,150)+"...",alt:e.snippet}})),n.setState({news:[].concat(Object(c.a)(n.state.news),Object(c.a)(t))}),n.keywordCount++,console.log(n.state.news)})).catch((function(e){console.log(e),console.log(n.state.news)}))},n.bahNew=function(){n.state.news.length>0?n.state.news.shift():n.setState({news:[]}),console.log(n.state.news),n.state.news.length<7&&(console.log("fetching!"),fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(n.keywords[n.keywordCount],"&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp")).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.response.docs.filter((function(e){return e.multimedia.length>0}));t=t.map((function(e){return{key:g.a.v4(),image:"https://www.nytimes.com/"+e.multimedia[0].url,caption:e.snippet.length<151?e.snippet:e.snippet.substr(0,150)+"...",alt:e.snippet}})),n.setState({news:[].concat(Object(c.a)(n.state.news),Object(c.a)(t))}),n.keywordCount++,console.log(n.state.news)})).catch((function(e){console.log(e),console.log(n.state.news)}))),n.setState({bahs:n.state.bahs+1})},n.careAbout=function(){n.state.news.length>0?n.state.news.shift():n.setState({news:[]}),console.log(n.state.news),n.state.news.length<7&&fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(n.keywords[n.keywordCount],"&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp")).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.response.docs.filter((function(e){return e.multimedia.length>0}));t=t.map((function(e){return{key:g.a.v4(),image:"https://www.nytimes.com/"+e.multimedia[0].url,caption:e.snippet.length<151?e.snippet:e.snippet.substr(0,150)+"...",alt:e.snippet}})),n.setState({news:[].concat(Object(c.a)(n.state.news),Object(c.a)(t))}),n.keywordCount++,console.log(n.state.news)})).catch((function(e){console.log(e),console.log(n.state.news)})),n.setState({cares:n.state.cares+1})},n.searchBah=function(e){n.setState({shouldUpdate:!1}),n.state.news.length>0?n.state.news.shift():n.setState({news:[]}),console.log(n.state.news),fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(e,"&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp")).then((function(e){return e.json()})).then((function(e){var t=e.response.docs.filter((function(e){return e.multimedia.length>0}));0===t.length?t[0]={key:g.a.v4(),caption:"Whopps! We couldn't find any news to bah!",alt:"Whopps! We couldn't find any news to bah!",image:"https://media3.giphy.com/media/7xWFJLdYuEdkk/giphy.gif?cid=790b761166e98e05b2e60e96bff86d00fcf290e7eb4dd97d&rid=giphy.gif"}:t=t.map((function(e){return{key:g.a.v4(),image:"https://www.nytimes.com/"+e.multimedia[0].url||!1,caption:e.snippet.length<151?e.snippet:e.snippet.substr(0,150)+"..."||!1,alt:e.snippet}})),n.setState({news:[].concat(Object(c.a)(t),Object(c.a)(n.state.news))}),n.keywordCount++,console.log(n.state.news)})).then((function(e){return n.setState({counter:0,shouldUpdate:!0})})).catch((function(e){console.log(e),console.log(n.state.news)}))},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-container"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(C,Object.assign({},t,{fetchNews:e.fetchNews,addName:e.addName,name:e.state.name}))}}),o.a.createElement(m.a,{path:"/play",render:function(t){return o.a.createElement(A,Object.assign({},t,{shouldUpdate:e.shouldUpdate,searchBah:e.searchBah,count:e.state.count,counter:e.state.counter,bahNews:e.bahNew,careAbout:e.careAbout,fetchNews:e.fetchNews,news:e.state.news}))}}),o.a.createElement(m.a,{path:"/settings",render:function(t){return o.a.createElement(B,Object.assign({},t,{name:e.state.name,bahs:e.state.bahs,cares:e.state.cares}))}})))}}]),t}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(i.a,null,o.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bah-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bah-app","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.3ed872f9.chunk.js.map