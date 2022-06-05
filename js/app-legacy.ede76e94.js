(function(){var t={4883:function(t,e,n){var r={"./apple-touch-icon.png":2642,"./favicon-32x32.png":8068};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=4883},488:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("outcomes-research-wrapper",{attrs:{_title:"Statistical Power Applet"}},[n("div",{attrs:{id:"loader"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"graph"},[n("div",{staticClass:"minigraph"},[n("svg",{attrs:{width:"100%",height:"100%",preserveAspectRatio:"none"}})]),n("div",{staticClass:"maingraph"},[n("svg",{attrs:{width:"100%",height:"100%",preserveAspectRatio:"none"}})])]),n("div",{staticClass:"controls"},[n("div",{staticStyle:{height:"70%"}},[n("div",{staticClass:"leftControls"},[n("div",{staticClass:"inputContainer"},[n("table",[n("tr",[n("td",[t._v(" μ "),n("sub",[t._v("0")]),t._v(" = "),n("input",{ref:"mu0",attrs:{type:"text",id:"mu0",autocomplete:"off"},on:{change:function(e){return t._validate("mu0")}}})])]),n("tr",[n("td",[t._v(" μ "),n("sub",[t._v("1")]),t._v(" = "),n("input",{ref:"mu1",attrs:{type:"text",id:"mu1",autocomplete:"off"},on:{change:function(e){return t._validate("mu1")}}})])]),n("tr",[n("td",[t._v(" σ = "),n("input",{ref:"std",attrs:{type:"text",id:"std",autocomplete:"off"},on:{change:function(e){return t._validate("std")}}})])]),n("tr",[n("td",[t._v(" d = "),n("input",{ref:"delta",attrs:{type:"text",id:"delta",autocomplete:"off"},on:{change:function(e){return t._validate("delta")}}})])]),n("tr",[n("td",[t._v(" α = "),n("input",{ref:"alpha",attrs:{id:"alpha",autocomplete:"off"},on:{change:function(e){return t._validate("alpha")}}})])]),n("tr",[n("td",[t._v(" β = "),n("input",{attrs:{type:"text",id:"effectsize",disabled:""}})])]),n("tr",[n("td",[t._v(" n = "),n("input",{ref:"n",attrs:{type:"text",id:"n",autocomplete:"off"},on:{change:function(e){return t._validate("n")}}})])]),n("tr",[n("td",[t._v(" Power = "),n("input",{ref:"power",attrs:{type:"text",id:"power",autocomplete:"off"},on:{change:function(e){return t._validate("power")}}})])])]),n("div",{staticClass:"samplebutton",on:{click:t.sample}},[t._v("Sample")])])]),n("div",{staticClass:"rightControls"},[n("div",{staticClass:"shell",attrs:{id:"slider-vertical2"}},[n("div",{staticClass:"inner label"},[t._v(" P "),n("br"),t._v(" o "),n("br"),t._v(" w "),n("br"),t._v(" e "),n("br"),t._v(" r ")])]),n("div",{staticClass:"shell",attrs:{id:"slider-vertical1"}},[n("div",{staticClass:"inner label"},[t._v("n")])])])]),n("div",{staticClass:"consoleContainer"},[n("div",{staticClass:"console"})])])])])},i=[],o=n(3796),s=(n(7941),n(6699),n(1539),n(1038),n(8783),n(3948),n(1249),n(4747),n(6977),n(2222),n(6133)),c=n(2751),u=function(){function t(){(0,s.Z)(this,t),this.subscribers={}}return(0,c.Z)(t,[{key:"emit",value:function(t,e){Array.isArray(this.subscribers[t])&&this.subscribers[t].forEach((function(t){t(e)}))}},{key:"on",value:function(t,e){Array.isArray(this.subscribers[t])||(this.subscribers[t]=[]),this.subscribers[t].push(e)}}]),t}(),l=new u,d={mu0:{initial:100,min:-1e4,max:1e4,precision:0},mu1:{initial:105,min:-1e4,max:1e4,precision:0},std:{initial:5,min:1,max:1e4,msg:"Standard Deviation must be greater than 1.",precision:0},delta:{min:0,max:1e4,precision:2,msg:"Normalized difference must be greater than 0."},alpha:{initial:.05,min:.001,max:.999,msg:"Type I Error must be between 0.001 and 1",precision:3},n:{initial:4,min:1,max:100,msg:"Sample size must be between 1 and 100.",precision:0,domID:"#slider-vertical1"},power:{min:.05,max:.999,msg:"Power must be between 0.05 and 0.999.",precision:3,domID:"#slider-vertical2"},effectsize:{domID:"#effectsize",precision:3}};function p(t,e){var n,r,a,i=Object.assign({},L(),e),o=i.mu0,s=i.mu1,c=i.std,u=i.alpha,l=i.n,d=i.power,p=i.delta;return"power"===t?(n=v(1-u/2,0,1),r=v(u/2,0,1),a=s<o?0:(s-o)/(c/Math.sqrt(l)),parseFloat(f(a-n,0,1)+f(r-a,0,1))):"n"===t?Math.pow((v(d-f(v(u/2,0,1),0,1),0,1)+v(1-u/2,0,1))*c/(s-o),2):"delta"===t?(s-o)/c:"mu1"===t?p*c+o:"effectsize"===t?1-d:void 0}function h(t,e){return f(-Math.abs(t),0,1)}function f(t,e,n){return.5*(1+b((t-e)/Math.sqrt(2*n*n)))}function m(t){var e=t.alpha,n=t.mu0,r=t.std,a=t.n;return v(e,n,r/Math.sqrt(a))-n}function v(t,e,n){return-1.4142135623730951*n*g(2*t)+e}function g(t){var e,n,r,a,i=0;if(t>=2)return-100;if(t<=0)return 100;for(a=t<1?t:2-t,r=Math.sqrt(-2*Math.log(a/2)),e=-.70711*((2.30753+.27061*r)/(1+r*(.99229+.04481*r))-r);i<2;i++)n=1-b(e)-a,e+=n/(1.1283791670955126*Math.exp(-e*e)-e*n);return t<1?e:-e}function b(t){var e,n,r,a,i=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],o=i.length-1,s=!1,c=0,u=0;for(t<0&&(t=-t,s=!0),e=2/(2+t),n=4*e-2;o>0;o--)r=c,c=n*c-u+i[o],u=r;return a=e*Math.exp(-t*t+.5*(i[0]+n*c)-u),s?a-1:1-a}function x(t,e,n){return Math.exp(-.5*Math.log(2*Math.PI)-Math.log(n)-Math.pow(t-e,2)/(2*n*n)).toFixed(7)}n(9826);function y(t){$(t).find(".ui-slider-tick-mark").remove();for(var e=1;e<20;e++)5*e%25==0?$('<span class="ui-slider-tick-mark_large"></span>').css("bottom",5*e-2+"%").appendTo(".shell").css("height","16px"):$('<span class="ui-slider-tick-mark"></span>').css("bottom",5*e-1+"%").appendTo(".shell").css("height","8px")}function w(t){var e=L();q(""),Object.keys(e).forEach((function(t){$("#".concat(t)).val(e[t].toFixed(d[t].precision))})),$("#slider-vertical1").slider("value",e.n),$("#slider-vertical2").slider("value",e.power)}function k(t){var e=Object.keys(t)[0],n=parseFloat(t[e]);function r(t){var e=Object.keys(t)[0],n=parseFloat(t[e]),r=d[e],a=r.min,i=r.max,o=r.msg;return!(isNaN(n)||!n||n<a||n>i)||(w(),q(o),!1)}if(q(""),!r(t))return!1;if("power"===e)return n>p("power",{n:d.n.min})&&r({n:p("n",{power:n})});if(["mu0","mu1","n","std","alpha"].includes(e))return r({power:p("power",(0,o.Z)({},e,n))});if("delta"===e){var a=p("mu1",{delta:n}),i=p("power",{mu1:a});return r({mu1:a})&&r({power:i})}}$((function(){$("#slider-vertical1").slider({orientation:"vertical",range:"min",min:d.n.min,max:d.n.max,value:d.n.initial,step:1,create:function(t,e){y(t.target)},slide:function(t,e){var n={n:e.value};return k(n)&&B(n,"change")}})})),$((function(){$("#slider-vertical2").slider({orientation:"vertical",range:"min",min:d.power.min,max:d.power.max,value:.6,step:.001,slide:function(t,e){var n={power:e.value};return k(n)&&B(n,"change")}})})),$((function(){l.on("change",w),l.on("drag",w)}));n(2023);var _=d3.scaleLinear();function C(t){var e=L(),n=e.mu0,r=e.std;return _.domain([n-4*r,n+4*r]).range([0,$(".maingraph").innerWidth()])(t)}function M(t){var e=L(),n=e.mu0,r=e.std;return _.domain([0,$(".maingraph").innerWidth()]).range([n-4*r,n+4*r])(t)}function O(t){var e=L(),n=e.mu0,r=e.std;return _.domain([0,x(n,n,r/Math.sqrt(100))]).range([0,1.16*$(".maingraph").innerHeight()])(t)}var j=(0,c.Z)((function t(e){(0,s.Z)(this,t),N().append("path").attr("id","triangle").attr("d",d3.symbol().type(d3.symbolTriangle)).attr("transform","translate(".concat(e.x,", ").concat(e.y,")")).style("fill","grey")})),P=(0,c.Z)((function t(e,n,r){(0,s.Z)(this,t),N().append("line").attr("id",n).attr("x1",e).attr("y1",0).attr("x2",e).attr("y2",500).style("stroke",r?"#283747":"grey").style("stroke-width","2").style("stroke-dasharray","4, 4")})),F=function(){function t(e){var n=this;(0,s.Z)(this,t),Object.assign(this,e),this.isBottom="bottom"===this.position;var r=function(t){n.id!==t&&n.removePath()&&n.addPath()};this.addPath(),l.on("change",r),l.on("drag",r)}return(0,c.Z)(t,[{key:"generateCurve",value:function(){var t=L(),e=t.std,n=t.n;this.isBottom||(n=1.25);for(var r=t[this.center]-4*e,a=t[this.center]+4*e,i=[],o=8*e/20,s=this.isBottom?$(".maingraph").innerHeight()-20:$(".minigraph").innerHeight()+1,c=r;c<a;c+=o){var u=C(c),l=O(-1*x(c,t[this.center],e/Math.sqrt(n)));i.push({x:u,y:l+s})}return i}},{key:"drag",value:function(){var t=this;return d3.drag().on("drag",(function(e){var n=L(),r=n[t.center]+8*d3.event.dx*n.std/$(".maingraph").innerWidth(),a=(0,o.Z)({},t.center,r);k(a)&&B(a,"drag",t.id)&&(e.x+=d3.event.dx);var i="#".concat(t.id,"-error,#").concat(t.id,"-container");d3.selectAll(i).attr("transform","translate(".concat(e.x,")"))}))}},{key:"addPath",value:function(){this.container=W()[this.position][this.id.includes("pink")?"front":"back"];var t=d3.line().x((function(t){return t.x})).y((function(t){return t.y})).curve(d3.curveBasis),e=this.generateCurve();this.nonErrorCurves=this.container.append("g").attr("id","".concat(this.id,"-container")).attr("class","curveContainer"),this.isBottom&&this.container.append("g").attr("id","clip-wrapper-".concat(this.id)).attr("clip-path","url(#rect-clip-".concat(this.clip,")")).append("path").attr("id","".concat(this.id,"-error")).attr("d",t(this.generateCurve())).attr("fill","rgba(".concat(this.color,", .70)")),this.nonErrorCurves.append("path").attr("d",t(e)).attr("fill",this.isBottom?"rgba(".concat(this.color,", .60)"):"transparent").attr("stroke","rgba(".concat(this.color,", 1)")),this.hasText&&this.addText(e),this.draggable&&this.nonErrorCurves.data([{x:0}]).call(this.drag())}},{key:"removePath",value:function(){return $(".bar,#sampleMeanLine,#triangle").remove(),$("#clip-wrapper-".concat(this.id,",#").concat(this.id,"-container")).remove(),!0}},{key:"addText",value:function(t){var e=d3.line().x((function(t){return t.x})).y((function(t){return t.y})).curve(d3.curveLinear);this.nonErrorCurves.append("path").attr("id","".concat(this.id,"-rect")).attr("d",e(Z(t,this.textPosition))),this.nonErrorCurves.append("text").style("fill","rgb(".concat(this.color,")")).append("textPath").attr("xlink:href","#".concat(this.id,"-rect")).attr("startOffset","50%").text(this.text)}}]),t}();function Z(t,e){var n=Math.round(t.length/2)-1,r=t.length-1,a={x:t[0].x,y:t[n].y-10},i={x:t[0].x,y:t[0].y+20},o={x:t[r].x,y:t[n].y-10},s={x:t[r].x,y:t[r].y+20};return"below"===e?[i,s]:[a,o]}var E,T,A,z=d3.scaleLinear(),H={};function L(){return H}function N(){return T}function W(){return E}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black";$(".console").text(t).css("color",e)}function B(t,e,n){e=e||"change";var r=Object.keys(t)[0],a=t[r];return H[r]=parseFloat(a),["mu0","mu1","std","alpha","n"].includes(r)&&(H.power=p("power"),H.effectsize=p("effectsize")),["mu0","mu1","std"].includes(r)&&(H.delta=p("delta")),"power"===r&&(H.n=p("n"),H.effectsize=p("effectsize")),"delta"===r&&(H.mu1=p("mu1"),H.power=p("power")),["alpha","n"].includes(r)&&D(),["mu0","mu1","std"].includes(r)&&I(),l.emit(e,n),!0}function D(){var t=C(H.mu0-m(H));["right","left"].forEach((function(e){var n="left"===e?0:t,r="left"===e?t:Math.abs($(".maingraph").innerWidth()-t);$("#rect-clip-".concat(e,",#dashedLine")).remove(),T.append("clipPath").attr("id","rect-clip-".concat(e)).append("rect").attr("x",n).attr("y",0).attr("height",$(".maingraph").innerHeight()).attr("width",r),new P(t,"dashedLine","dark")}))}function S(){setTimeout(R,0)}function I(){$(".axis").remove();var t=Array.from(Array(9).keys()),e=t.map((function(t){return t*($(".maingraph").innerWidth()/8)+1})),n=t.map((function(t){return 4===Math.abs(t-4)?"":(t-4)*H.std+H.mu0})),r=z.domain([0,$(".maingraph").innerWidth()]).range([0,$(".maingraph").innerWidth()]),a=d3.axisBottom().scale(r).tickValues(e).tickFormat((function(t,e){return n[e]}));T.append("g").attr("class","axis").attr("transform","translate(0,"+($(".maingraph").innerHeight()-20)+")").call(a)}function R(){$("#loader").remove(),$(".container").css("display","grid"),$("#description").css("display","block"),Object.keys(d).forEach((function(t){var e=d[t];H[t]=e.initial?e.initial:p(t)})),w(),T=d3.select(".maingraph svg"),A=d3.select(".minigraph svg"),E={top:{back:A.append("g"),front:A.append("g")},bottom:{back:T.append("g"),front:T.append("g")}},D();var t={center:"mu0",clip:"right",color:"21, 67, 96",text:"Null Population"},e={center:"mu1",clip:"left",color:"139, 0, 0",text:"Alternative Population"};new F(Object.assign({},t,{position:"bottom",draggable:!1,id:"mainblue"})),new F(Object.assign({},t,{position:"top",draggable:!1,hasText:!0,textPosition:"below",id:"mainblue-top"})),new F(Object.assign({},e,{position:"bottom",draggable:!0,id:"mainpink"})),new F(Object.assign({},e,{position:"top",draggable:!0,hasText:!0,textPosition:"above",id:"mainpink-top"})),I()}function U(){var t=H.mu0,e=H.mu1,n=H.std,r=H.alpha,a=H.n;if(e<t)return t=t.toFixed(2),e=e.toFixed(2),void q("μ0 = ".concat(t,"\nμ1 = ").concat(e,"\n Not designed for two-tailed tests (μ1 < μ0)"),"Crimson");$(".bar,#sampleMeanLine,#triangle").remove();var i=d3.range(Math.round(a)).map(d3.randomNormal(e,n)).map((function(t){return C(t)})),o=d3.mean(i);new P(o,"sampleMeanLine"),new j({x:o,y:$(".maingraph").innerHeight()-4}),new j({x:o,y:6});var s=z.domain([0,$(".maingraph").innerWidth()]).rangeRound([0,$(".maingraph").innerWidth()]),c=d3.histogram().domain(s.domain()).thresholds(s.ticks(90))(i),u=d3.max(c,(function(t){return t.length})),l=u>8?u:8,p=z.domain([0,1.5*l]).range([$(".minigraph").innerHeight(),0]);A.selectAll(".bar").data(c).enter().append("g").attr("class","bar").attr("transform",(function(t){return"translate("+s(t.x0)+","+p(t.length)+")"})).append("rect").attr("width",s(c[0].x1)-s(c[0].x0)-1).attr("height",(function(t){return $(".minigraph").innerHeight()-p(t.length)})).attr("rx",2).attr("rx",2).style("fill","#ffffff").style("stroke","grey");var f=M(o),v=(t-f)/(n/Math.sqrt(a)),g=h(v,1),b="Cohen's d = ".concat(H.delta.toFixed(d.delta.precision),"\n");b+="Critical Mean Value = ".concat((t-m(H)).toFixed(2),"\n"),b+="Sample Mean = ".concat(f.toFixed(2),"\n"),b+="p(z > ".concat(-1*v.toFixed(2),") = ").concat(g.toFixed(4),"\n"),g>=r?q("".concat(b+="-> Fail to Reject Ho"),"Navy"):q("".concat(b+="-> Reject Ho"),"Crimson")}var V={name:"App",components:{},mounted:function(){S()},methods:{sample:function(){U()},_validate:function(t){var e=this.$refs[t].value;k((0,o.Z)({},t,e))&&B((0,o.Z)({},t,e))}}},G=V,J=n(1001),K=(0,J.Z)(G,a,i,!1,null,null,null),Q=K.exports,X=n(3657);r.Z.use(X.Z),r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(Q)}}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],c=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(e&&e(r);u<o.length;u++)i=o[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkstatistical_power_applet"]=self["webpackChunkstatistical_power_applet"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(488)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ede76e94.js.map