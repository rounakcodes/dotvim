self.AMP_CONFIG={"allow-doc-opt-in":["amp-date-picker","amp-next-page","ampdoc-shell","disable-amp-story-desktop","inabox-rov","url-replacement-v2","linker-meta-opt-in"],"allow-url-opt-in":["pump-early-frame","twitter-default-placeholder","twitter-default-placeholder-pulse","twitter-default-placeholder-fade"],"canary":0,"expAdsenseA4A":0.01,"a4aProfilingRate":0.01,"ad-type-custom":1,"amp-access-iframe":1,"amp-apester-media":1,"amp-ima-video":1,"amp-playbuzz":1,"amp-story-navigation-performance":1,"chunked-amp":1,"amp-auto-ads":1,"amp-auto-ads-adsense-holdout":0.1,"amp-auto-ads-adsense-responsive":0.01,"version-locking":1,"as-use-attr-for-format":0.01,"a4aFastFetchDoubleclickLaunched":0,"a4aFastFetchAdSenseLaunched":0,"pump-early-frame":1,"amp-live-list-sorting":1,"amp-sidebar toolbar":1,"amp-consent":1,"amp-img-native-srcset":1,"amp-story-v1":1,"amp-carousel-scroll-snap":0.1,"expAdsenseUnconditionedCanonical":0.01,"expAdsenseCanonical":0.01,"faster-bind-scan":1,"font-display-swap":1,"amp-date-picker":1,"linker-meta-opt-in":1,"url-replacement-v2":1,"user-error-reporting":1,"no-initial-intersection":1,"no-sync-xhr-in-ads":1,"doubleclickSraExp":0,"doubleclickSraReportExcludedBlock":0.1,"inabox-rov":1,"v":"011809142227020","type":"production"};/*AMP_CONFIG*/(function(){var h;function n(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=n(c[1],c[1]),e=c[2]?n(c[2],c[2]):"";b[d]=e}return b};var r="";
function v(a){var b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=!!(self.AMP_CONFIG||{}).test||!1,e=p(c.location.originalHash||c.location.hash),f=p(c.location.search);r||(r=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011809142227020");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:d,log:e.log,version:"1809142227020",rtvVersion:r}}return c};function ba(){var a=ca;self.reportError=a}function w(a,b,c){this.win=a;this.W=b;this.w=this.win.console&&this.win.console.log&&"0"!=v().log?this.W({localDev:!1,development:v(void 0).development,filter:v(void 0).filter,minified:!0,lite:v(void 0).lite,test:!1,log:v(void 0).log,version:v(void 0).version,rtvVersion:v(void 0).rtvVersion}):0;this.G=c||""}
function x(a,b,c){if(0!=a.w){var d=a.win.console.log;"ERROR"==b?d=a.win.console.error||d:"INFO"==b?d=a.win.console.info||d:"WARN"==b&&(d=a.win.console.warn||d);d.apply(a.win.console,c)}}h=w.prototype;h.isEnabled=function(){return 0!=this.w};h.fine=function(a,b){4<=this.w&&x(this,"FINE",Array.prototype.slice.call(arguments,1))};h.info=function(a,b){3<=this.w&&x(this,"INFO",Array.prototype.slice.call(arguments,1))};h.warn=function(a,b){2<=this.w&&x(this,"WARN",Array.prototype.slice.call(arguments,1))};
h.N=function(a,b){if(1<=this.w)x(this,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=z.apply(null,Array.prototype.slice.call(arguments,1));A(this,c);return c}};h.error=function(a,b){var c=this.N.apply(this,arguments);c&&(c.name=a||c.name,self.reportError(c))};h.expectedError=function(a,b){var c=this.N.apply(this,arguments);c&&(c.expected=!0,self.reportError(c))};h.createError=function(a){var b=z.apply(null,arguments);A(this,b);return b};
h.createExpectedError=function(a){var b=z.apply(null,arguments);A(this,b);b.expected=!0;return b};
h.assert=function(a,b,c){var d;if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),g=f,k=[];""!=f&&k.push(f);for(f=2;f<arguments.length;f++){var l=arguments[f];l&&l.tagName&&(d=l);var t=e.shift();k.push(l);var m=t.trim();""!=m&&k.push(m);m=l;g+=(m&&1==m.nodeType?m.tagName.toLowerCase()+(m.id?"#"+m.id:""):m)+t}f=Error(g);f.fromAssert=!0;f.associatedElement=d;f.messageArray=k;A(this,f);self.reportError(f);throw f;}return a};
h.assertElement=function(a,b){this.assert(a&&1==a.nodeType,(b||"Element expected")+": %s",a);return a};h.assertString=function(a,b){this.assert("string"==typeof a,(b||"String expected")+": %s",a);return a};h.assertNumber=function(a,b){this.assert("number"==typeof a,(b||"Number expected")+": %s",a);return a};h.assertBoolean=function(a,b){this.assert(!!a===a,(b||"Boolean expected")+": %s",a);return a};
h.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function A(a,b){b=B(b);a.G?b.message?-1==b.message.indexOf(a.G)&&(b.message+=a.G):b.message=a.G:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}
function B(a){var b=a.message,c=String(Math.random());a.message=c;if(a.message===c)return a.message=b,a;var b=Error(a.message),d;for(d in a)b[d]=a[d];b.stack=a.stack;return b}function z(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=B(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.log=self.log||{user:null,dev:null,userForEmbed:null};var C=self.log,D=null;function E(){C.user||(C.user=da());return C.user}
function da(){var a="\u200b\u200b\u200b";if(!D)throw Error("failed to call initLogConstructor");return new D(self,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:2},a)}function F(){if(C.dev)return C.dev;if(!D)throw Error("failed to call initLogConstructor");return C.dev=new D(self,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0})};function G(a){return a||{}};function H(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var I=self.AMP_CONFIG||{},J={thirdParty:I.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:I.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof I.thirdPartyFrameRegex?new RegExp(I.thirdPartyFrameRegex):I.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:I.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof I.cdnProxyRegex?new RegExp(I.cdnProxyRegex):I.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:I.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:I.localDev||!1};function K(a){this.R=a;this.J=this.M=0;this.A=Object.create(null)}K.prototype.has=function(a){return!!this.A[a]};K.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.J,b.payload};K.prototype.put=function(a,b){this.has(a)||this.M++;this.A[a]={payload:b,access:this.J};if(!(this.M<=this.R)){F().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.J+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.M--)}};G({c:!0,v:!0,a:!0,ad:!0});var L,M;function N(a){a=a.__AMP_TOP||a;return ea(a,"ampdoc")}function fa(a){a=ga(a);a=ga(a);a=a.isSingleDoc()?a.win:a;return ea(a,"viewer")}function ga(a){return a.nodeType?N((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function ea(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(){var a=ka();return function(b){return setTimeout(b,a())}}function ka(){var a=0;return function(){var b=Math.pow(1.5,a++),c;c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1E3*b}};var O,la="Webkit webkit Moz moz ms O o".split(" ");function ma(a,b,c){if(H(b,"--"))return b;O||(O=Object.create(null));var d=O[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<la.length;f++){var g=la[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(O[b]=d)}return d}function na(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(ma(a,c),b[c].toString(),"important")}
function oa(a,b,c){var d;(b=ma(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function P(a,b){for(var c in b)oa(a,c,b[c])}function pa(a,b){for(var c=0;c<b.length;c++)oa(a,b[c],null)};var qa=!1;function ra(a){qa||(qa=!0,P(a.body,{opacity:1,visibility:"visible",animation:"none"}))};var Q=self.AMPErrors||[];self.AMPErrors=Q;function R(a){R=ja();return R(a)}function sa(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var S;
function ca(a,b){try{var c;if(a)if(void 0!==a.message)a=B(a),c=!0;else{var d=a;a=Error(sa(d));a.origError=d}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;var e=b||a.associatedElement;e&&e.classList&&(e.classList.add("i-amphtml-error"),v().development&&(e.classList.add("i-amphtml-element-error"),e.setAttribute("error-message",a.message)));if(self.console){var f=console.error||console.log;a.messageArray?f.apply(console,a.messageArray):e?f.call(console,a.message,e):f.call(console,
a.message)}e&&e.S&&e.S("amp:error",a.message);ta.call(void 0,void 0,void 0,void 0,void 0,a)}catch(g){setTimeout(function(){throw g;})}return a}function ta(a,b,c,d,e){this&&this.document&&ra(this.document);if(!v().development){var f=!1;try{f=ua()}catch(k){}if(!(f&&.01<Math.random())){var g=va(a,b,c,d,e,f);g&&(wa(this,g),R(function(){var a=new XMLHttpRequest;a.open("POST",J.errorReporting,!0);a.send(JSON.stringify(g))}))}}}
function wa(a,b){var c=N(a);if(c.isSingleDoc()){var d=c.getAmpDoc(),e=d.getRootNode().documentElement,f=e.hasAttribute("report-errors-to-viewer");if(f){var g=fa(d);g.hasCapability("errorReporter")?g.isTrustedViewer().then(function(a){if(!a)return!1;g.sendMessage("error",G({m:b.m,a:b.a,s:b.s,el:b.el,v:b.v,jse:b.jse}));return!0}):Promise.resolve(!1)}else Promise.resolve(!1)}else Promise.resolve(!1)}
function va(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var k=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var l=!(self&&self.window),t=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||l)if(k=!0,.001<t)return;var m=0<=a.indexOf("\u200b\u200b\u200b");if(!(m&&.1<t)){g=Object.create(null);g.v=v().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("\u200b\u200b\u200b","");g.a=m?"1":"0";g.ex=k?"1":"0";g.dw=l?"1":"0";var y="1p";self.context&&
self.context.location?(g["3p"]="1",y="3p"):v().runtime&&(y=v().runtime);g.rt=y;f=self;g.ca=f.AMP_CONFIG&&f.AMP_CONFIG.canary?"1":"0";f=self;g.bt=f.AMP_CONFIG&&f.AMP_CONFIG.type?f.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var q=self.AMP.viewer.getResolvedViewerUrl(),u=self.AMP.viewer.maybeGetMessagingOrigin();
q&&(g.rvu=q);u&&(g.mso=u)}S||(S=xa());g.jse=S;var ha=[];f=self.__AMP__EXPERIMENT_TOGGLES||null;for(var ia in f)ha.push(ia+"="+(f[ia]?"1":"0"));g.exps=ha.join(",");e?(g.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(g.args=JSON.stringify(e.args)),m||e.ignoreStack||!e.stack||(g.s=e.stack),e.message+=" _reported_"):(g.f=b||"",g.l=c||"",g.c=d||"");g.r=self.document.referrer;g.ae=Q.join(",");g.fr=self.location.originalHash||self.location.hash;b=a;c=Q;25<=c.length&&c.splice(0,c.length-
25+1);c.push(b);return g}}}
function ua(){for(var a=self.document.querySelectorAll("script[src]"),b=0;b<a.length;b++){var c=a[b].src.toLowerCase();if("string"==typeof c){L||(L=self.document.createElement("a"),M=self.UrlCache||(self.UrlCache=new K(100)));var d=M,e=L;if(d&&d.has(c))c=d.get(c);else{e.href=c;e.protocol||(e.href=e.href);var f={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==f.pathname[0]&&(f.pathname="/"+
f.pathname);if("http:"==f.protocol&&80==f.port||"https:"==f.protocol&&443==f.port)f.port="",f.host=f.hostname;f.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=f.protocol&&f.host?f.protocol+"//"+f.host:f.href;e=f;d&&d.put(c,e);c=e}}if(!J.cdnProxyRegex.test(c.origin))return!0}return!1}
function xa(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(e){var c=e.stack;if(H(c,"t@"))return"Safari";if(-1<c.indexOf(".prototype.t@"))return"Firefox";var d=c.split("\n").pop();if(/\bat .* \(/i.test(d))return"IE";if(H(c,"Error: message"))return"Chrome"}return"unknown"};function T(a,b,c){a.requestAnimationFrame(function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)})}function ya(a){var b=200;setTimeout(a,b)};function U(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function V(a){return U(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function za(a,b,c){var d=150,e=c.width/2-b.width/2-b.left+"px",f=c.height/2-b.height/2-b.top+"px",g=b.top+"px",k=c.width-(b.left+b.width)+"px",l=b.left+"px",t=c.height-(b.top+b.height)+"px",m=b.height+"px",y=b.width+"px",q;q=e;var u=f;"number"==typeof q&&(q+="px");void 0===u?q="translate("+q+")":("number"==typeof u&&(u+="px"),q="translate("+q+", "+u+")");P(a,{position:"fixed",top:g,right:k,left:l,bottom:t,height:m,width:y,transition:"transform "+d+"ms ease",transform:q,margin:0})};function Aa(a,b,c){T(a,{measure:function(c){c.viewportSize={width:a.innerWidth,height:a.innerHeight};c.rect=V(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,f=U(0,0,e.width,e.height);za(b,d.rect,d.viewportSize);na(b);ya(function(){T(a,{mutate:function(){pa(b,["pointer-events"]);P(b,{position:"fixed","z-index":1E3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,f)}})})}},{})}
function Ba(a,b,c,d){T(a,{mutate:function(){pa(b,"position z-index left right top bottom width height margin border".split(" "));c();T(a,{measure:function(){d(V(b.getBoundingClientRect()))}})}})};function W(a){this.o=a;this.H=this.K=!1;this.B=null;Ca(this)}function Ca(a){a.o.addEventListener("resize",function(){return a.onWindowResize()})}W.prototype.onWindowResize=function(){this.K&&(this.H=!0)};W.prototype.expandFrame=function(a,b){var c=this;Aa(this.o,a,function(a,e){c.K=!0;c.H=!1;c.B=a;b(e)})};W.prototype.collapseFrame=function(a,b){var c=this;Ba(this.o,a,function(){c.K=!1;c.H||b(c.B)},function(a){c.B=a;c.H&&b(c.B)})};function Da(){this.h=null}h=Da.prototype;h.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};h.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};h.removeAll=function(){this.h&&(this.h.length=0)};h.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.h?this.h.length:0};function Ea(a,b){var c=100;function d(d){g=null;f=a.setTimeout(e,c);b.apply(null,d)}function e(){f=0;g&&d(g)}var f=0,g=null;return function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];f?g=b:d(b)}};function X(a){this.o=a;this.F=null;var b=this.o;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.X=a;this.I=null}
X.prototype.observe=function(a,b){var c=this;if(!this.F){this.F=new Da;var d=Ea(this.o,function(){c.I=c.getViewportRect();c.F.fire()});this.I=this.getViewportRect();this.o.addEventListener("scroll",d,!0);this.o.addEventListener("resize",d,!0)}b({viewportRect:this.I,targetRect:V(a.getBoundingClientRect())});return this.F.add(function(){b({viewportRect:c.I,targetRect:V(a.getBoundingClientRect())})})};
X.prototype.getViewportRect=function(){var a=this.X,b=this.o,c=a.scrollLeft||b.pageXOffset,d=a.scrollTop||b.pageYOffset;return U(Math.round(c),Math.round(d),b.innerWidth,b.innerHeight)};function Y(a,b,c){var d;c=void 0===c?{}:c;d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)};function Z(){this.L={}}Z.prototype.listen=function(a,b){this.L[a]=b};Z.prototype.fire=function(a,b,c){return a in this.L?this.L[a].apply(b,c):!1};function Fa(a,b){this.C=b;this.j=Object.create(null);this.P=new X(a);this.D=new Z;this.O=new W(a);this.D.listen("send-positions",this.V);this.D.listen("full-overlay-frame",this.U);this.D.listen("cancel-full-overlay-frame",this.T)}h=Fa.prototype;
h.processMessage=function(a){var b;var c=a.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{b=JSON.parse(c.substr(d))}catch(t){F().error("MESSAGING","Failed to parse message: "+c,t),b=null}}else b=null;if(!b||!b.sentinel)return!1;a:if(c=b.sentinel,this.j[c])c=this.j[c].measurableFrame;else{if(d=this.getMeasureableFrame(a.source))for(var e=d.contentWindow,f=0;f<this.C.length;f++)for(var g=this.C[f],k=0,l=e;10>k;k++,l=l.parent){if(g.contentWindow==l){this.j[c]=
{iframe:g,measurableFrame:d};c=d;break a}if(l==window.top)break}c=null}return c?this.D.fire(b.type,this,[c,b,a.source,a.origin])?!0:(F().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1):(F().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1)};
h.V=function(a,b,c,d){var e=this.P.getViewportRect(),f=V(a.getBoundingClientRect());Ga(b,c,d,G({viewportRect:e,targetRect:f}));this.j[b.sentinel].observeUnregisterFn=this.j[b.sentinel].observeUnregisterFn||this.P.observe(a,function(a){return Ga(b,c,d,a)});return!0};function Ga(a,b,c,d){b.postMessage(Y("position",a.sentinel,d),c)}h.U=function(a,b,c,d){this.O.expandFrame(a,function(a){c.postMessage(Y("full-overlay-frame-response",b.sentinel,G({success:!0,boxRect:a})),d)});return!0};
h.T=function(a,b,c,d){this.O.collapseFrame(a,function(a){c.postMessage(Y("cancel-full-overlay-frame-response",b.sentinel,G({success:!0,boxRect:a})),d)});return!0};h.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!Ha(d);c++,b=d,d=d.parent);if(b)for(var c=b.parent.document.querySelectorAll("iframe"),d=0,e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e;return a.frameElement};
h.unregisterIframe=function(a){var b=this.C.indexOf(a);-1!=b&&this.C.splice(b,1);for(var c in this.j)this.j[c].iframe==a&&(this.j[c].observeUnregisterFn&&this.j[c].observeUnregisterFn(),delete this.j[c])};function Ha(a){try{var b=!!a.location.href&&a.test;return!0}catch(c){return!1}};new function(a){if(a.ampInaboxInitialized)F().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;D=w;F();E();ba();a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(F().info("inabox-host","Invalid ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new Fa(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?F().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):a.AMP.inaboxUnregisterIframe=
b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(a){try{b.processMessage(a)}catch(f){F().error("inabox-host","Error processing inabox message",a,f)}};c&&(Array.isArray(c)?c.forEach(function(a){var b=!(!a.source||!a.source.postMessage);b||E().error("inabox-host","Missing message.source. message.data="+JSON.stringify(a.data));b&&d(a)}):F().info("inabox-host","Invalid ampInaboxPendingMessages",c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};a.addEventListener("message",
d.bind(b))}}(self);})();
//# sourceMappingURL=amp4ads-host-v0.js.map
