(function(){"use strict";var e={7454:function(e,t,a){var o=a(9242),n=a(3396);const r={class:"app-content"};function i(e,t){const a=(0,n.up)("TopPage"),i=(0,n.up)("AppTimer"),s=(0,n.up)("GamePage"),g=(0,n.up)("GameResult");return(0,n.wg)(),(0,n.iD)("main",r,[(0,n.wy)((0,n.Wm)(a,{onGameStart:e.gameStart},null,8,["onGameStart"]),[[o.F8,e.topPageFlag]]),(0,n.wy)((0,n.Wm)(i,{ref:"appTimer",onAppTimerToGamePage:e.appTimerToGamePage},null,8,["onAppTimerToGamePage"]),[[o.F8,e.appTimerFlag]]),(0,n.wy)((0,n.Wm)(s,{ref:"gamePage",onGamePageToGameResult:e.gamePageToGameResult},null,8,["onGamePageToGameResult"]),[[o.F8,e.gamePageFlag]]),(0,n.wy)((0,n.Wm)(g,null,null,512),[[o.F8,e.gameResultFlag]])])}var s=a.p+"img/cheers.8e59bcc0.png";const g=e=>((0,n.dD)("data-v-7929c772"),e=e(),(0,n.Cn)(),e),u={class:"top-page-content"},A=g((()=>(0,n._)("div",{class:"top-page-content-title"},[(0,n._)("img",{class:"top-page-content-title-image",alt:"MorohaLogo",src:s}),(0,n._)("div",{class:"top-page-content-sub-title"},"〜刹那の乾杯〜")],-1))),c={class:"top-page-content-button"};function m(e,t,a,o,r,i){const s=(0,n.up)("Button");return(0,n.wg)(),(0,n.iD)("main",u,[A,(0,n._)("div",c,[(0,n.Wm)(s,{onClick:t[0]||(t[0]=t=>e.$emit("gameStart")),label:"幕開けの夜",class:"p-button-secondary p-button-text p-button-lg"})])])}var l=(0,n.aZ)({name:"TopPage"}),p=a(89);const h=(0,p.Z)(l,[["render",m],["__scopeId","data-v-7929c772"]]);var d=h,b=a(7139);const f={class:"app-timer-content"},v={key:0,class:"app-timer-count"};function G(e,t){return(0,n.wg)(),(0,n.iD)("main",f,[0!==e.count?((0,n.wg)(),(0,n.iD)("div",v,(0,b.zw)(e.getCount),1)):(0,n.kq)("",!0)])}var I=(0,n.aZ)({name:"AppTimer",data(){return{count:3,setTimeInterval:0}},computed:{getCount(){return this.count}},methods:{startCount(){this.count=3,this.setTimeInterval=setInterval(this.countDown,1e3)},countDown(){1!==this.count?this.count--:(clearInterval(this.setTimeInterval),this.$emit("appTimerToGamePage"))}}});const Q=(0,p.Z)(I,[["render",G],["__scopeId","data-v-2a121378"]]);var T=Q,B="data:image/png;base64,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",R=a.p+"img/cheersComment.a1e41ddd.svg",E=a.p+"img/notMoroha.26a3f866.svg";const D=e=>((0,n.dD)("data-v-9b5cee5a"),e=e(),(0,n.Cn)(),e),w={class:"game-page-content"},C=D((()=>(0,n._)("div",{class:"game-page-volume"},[(0,n._)("img",{alt:"volumeLogo",src:B})],-1))),P={class:"game-page-button"},M={class:"speech-bubbles",alt:"volumeLogo",src:R},Z={class:"speech-bubbles",alt:"volumeLogo",src:E};function y(e,t){const a=(0,n.up)("Button");return(0,n.wg)(),(0,n.iD)("main",w,[C,(0,n._)("div",P,[(0,n.wy)((0,n.Wm)(a,{onClick:t[0]||(t[0]=t=>e.cheersButton()),label:"乾杯！",class:"p-button-secondary p-button-text p-button-lg"},null,512),[[o.F8,e.cheersButtonFlag]]),(0,n.wy)((0,n._)("img",M,null,512),[[o.F8,e.cheersSpeechbubbles]]),(0,n.wy)((0,n._)("img",Z,null,512),[[o.F8,e.notMorohaSpeechbubbles]])])])}var F=(0,n.aZ)({name:"GamePage",data(){return{cheersButtonFlag:!0,cheersSpeechbubbles:!1,notMorohaSpeechbubbles:!1,timerCount:0,notMorohaTimerCount:0,morohaAudio:new Audio(a(8178)),cheersAudio:new Audio(a(6034))}},methods:{startGame(){this.morohaAudio.play(),this.timerCount=setTimeout(this.gameOver,25e3),this.notMorohaTimerCount=setTimeout(this.notMoroha,22e3)},cheersButton(){this.cheersButtonFlag=!1,this.cheersSpeechbubbles=!0,this.notMorohaSpeechbubbles=!1,this.cheersAudio.play(),clearTimeout(this.timerCount),setTimeout(this.gameOver,2e3)},notMoroha(){this.cheersButtonFlag=!1,this.cheersSpeechbubbles=!1,this.notMorohaSpeechbubbles=!0},gameOver(){this.morohaAudio.pause(),this.morohaAudio.currentTime=0,clearTimeout(this.timerCount),clearTimeout(this.notMorohaTimerCount),this.$emit("gamePageToGameResult")}}});const k=(0,p.Z)(F,[["render",y],["__scopeId","data-v-9b5cee5a"]]);var z=k;const N=e=>((0,n.dD)("data-v-0aec6c66"),e=e(),(0,n.Cn)(),e),S={class:"game-result-content"},x=N((()=>(0,n._)("div",{class:"game-result-content-title"},[(0,n._)("div",{class:"game-result-content-sub-title"}," 評価：居酒屋だけの意気込み ")],-1))),L=[x];function X(e,t,a,o,r,i){return(0,n.wg)(),(0,n.iD)("main",S,L)}var O=(0,n.aZ)({name:"GameResult"});const H=(0,p.Z)(O,[["render",X],["__scopeId","data-v-0aec6c66"]]);var Y=H,U=(0,n.aZ)({name:"App",data(){return{AppTimerRef:{},GamePageRef:{},topPageFlag:!0,appTimerFlag:!1,gamePageFlag:!1,gameResultFlag:!1}},components:{TopPage:d,AppTimer:T,GamePage:z,GameResult:Y},methods:{gameStart(){this.topPageFlag=!1,this.appTimerFlag=!0,this.gamePageFlag=!1,this.gameResultFlag=!1,this.AppTimerRef.startCount()},appTimerToGamePage(){this.topPageFlag=!1,this.appTimerFlag=!1,this.gamePageFlag=!0,this.gameResultFlag=!1,this.GamePageRef.startGame()},gamePageToGameResult(){this.topPageFlag=!1,this.appTimerFlag=!1,this.gamePageFlag=!1,this.gameResultFlag=!0}},mounted(){this.AppTimerRef=this.$refs.appTimer,this.GamePageRef=this.$refs.gamePage}});const W=(0,p.Z)(U,[["render",i]]);var V=W,q=a(3852),J=a(2236);const j=(0,o.ri)(V);j.use(q.Z).component("Button",J.Z),j.mount("#app")},6034:function(e,t,a){e.exports=a.p+"media/cheers.3ececb5e.mp3"},8178:function(e,t,a){e.exports=a.p+"media/moroha.6174d627.mp3"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var i=1/0;for(A=0;A<e.length;A++){o=e[A][0],n=e[A][1],r=e[A][2];for(var s=!0,g=0;g<o.length;g++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[g])}))?o.splice(g--,1):(s=!1,r<i&&(i=r));if(s){e.splice(A--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var A=e.length;A>0&&e[A-1][2]>r;A--)e[A]=e[A-1];e[A]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,i=o[0],s=o[1],g=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(g)var A=g(a)}for(t&&t(o);u<i.length;u++)r=i[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(A)},o=self["webpackChunkfront"]=self["webpackChunkfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7454)}));o=a.O(o)})();
//# sourceMappingURL=app.35526b93.js.map