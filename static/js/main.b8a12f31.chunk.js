(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=190},214:function(e,n,t){"use strict";t.r(n);var a=t(28),s=t.n(a),r=t(87),i=t.n(r),o=t(29),c=t.n(o),u=t(88),d=t(89),l=t(90),g=t(94),p=t(91),f=t(95),v=t(10),b=t(92),w=t.n(b),E=t(93),O=t.n(E),h=function(e){function n(){var e;return Object(d.a)(this,n),(e=Object(g.a)(this,Object(p.a)(n).call(this))).registerEventListener=e.registerEventListener.bind(Object(v.a)(Object(v.a)(e))),e.initLedger=e.initLedger.bind(Object(v.a)(Object(v.a)(e))),e.sendMessageToExtension=e.sendMessageToExtension.bind(Object(v.a)(Object(v.a)(e))),e.registerEventListener(),e}return Object(f.a)(n,e),Object(l.a)(n,[{key:"registerEventListener",value:function(){var e=this;window.addEventListener("message",function(n){if(n&&n.data&&"ledger-iframe"===n.data.target){console.log(n);var t=n.data.action,a=(n.data.params,t+"-reply");switch(t){case"ledger-init":e.initLedger(a);break;default:e.sendMessageToExtension({action:a,success:!1,payload:null})}}},!1)}},{key:"initLedger",value:function(){var e=Object(u.a)(c.a.mark(function e(n){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.create();case 3:t=e.sent,this.iota=new O.a(t),this.sendMessageToExtension({action:n,success:!0,payload:null}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.sendMessageToExtension({action:n,success:!1,payload:e.t0.message});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(n){return e.apply(this,arguments)}}()},{key:"sendMessageToExtension",value:function(e){window.parent.postMessage(e,"*")}},{key:"render",value:function(){return null}}]),n}(s.a.Component);i.a.render(s.a.createElement(h,null),document.getElementById("root"))},96:function(e,n,t){e.exports=t(214)}},[[96,2,1]]]);
//# sourceMappingURL=main.b8a12f31.chunk.js.map