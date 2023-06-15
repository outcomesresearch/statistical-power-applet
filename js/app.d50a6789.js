(function(){var t={4883:function(t,e,n){var r={"./Shared.css":1546,"./apple-touch-icon.png":2642,"./favicon-32x32.png":8068,"./logo.svg":7125,"./preview.jpg":7213};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=4883},5263:function(t,e,n){"use strict";var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("outcomes-research-wrapper",{attrs:{_title:"Statistical Power Applet"}},[n("outcomes-navbar"),n("div",{staticClass:"wrapper-for-outer-flexbox"},[n("div",{staticClass:"description-and-tool"},[n("div",{attrs:{id:"loader"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"graph"},[n("div",{staticClass:"minigraph"},[n("svg",{attrs:{width:"100%",height:"100%",preserveAspectRatio:"none"}})]),n("div",{staticClass:"maingraph"},[n("svg",{attrs:{width:"100%",height:"100%",preserveAspectRatio:"none"}})])]),n("div",{staticClass:"controls"},[n("div",[n("div",{staticClass:"leftControls"},[n("div",{staticClass:"inputContainer"},[n("table",[n("tr",[n("td",[t._v(" μ "),n("sub",[t._v("0")]),t._v(" = "),n("input",{ref:"mu0",attrs:{type:"text",id:"mu0",autocomplete:"off"},on:{change:function(e){return t._validate("mu0")}}})])]),n("tr",[n("td",[t._v(" μ "),n("sub",[t._v("1")]),t._v(" = "),n("input",{ref:"mu1",attrs:{type:"text",id:"mu1",autocomplete:"off"},on:{change:function(e){return t._validate("mu1")}}})])]),n("tr",[n("td",[t._v(" σ = "),n("input",{ref:"std",attrs:{type:"text",id:"std",autocomplete:"off"},on:{change:function(e){return t._validate("std")}}})])]),n("tr",[n("td",[t._v(" d = "),n("input",{ref:"delta",attrs:{type:"text",id:"delta",autocomplete:"off"},on:{change:function(e){return t._validate("delta")}}})])]),n("tr",[n("td",[t._v(" α = "),n("input",{ref:"alpha",attrs:{id:"alpha",autocomplete:"off"},on:{change:function(e){return t._validate("alpha")}}})])]),n("tr",[n("td",[t._v(" β = "),n("input",{attrs:{type:"text",id:"effectsize",disabled:""}})])]),n("tr",[n("td",[t._v(" n = "),n("input",{ref:"n",attrs:{type:"text",id:"n",autocomplete:"off"},on:{change:function(e){return t._validate("n")}}})])]),n("tr",[n("td",[t._v(" Power = "),n("input",{ref:"power",attrs:{type:"text",id:"power",autocomplete:"off"},on:{change:function(e){return t._validate("power")}}})])])]),n("div",{staticClass:"samplebutton",on:{click:t.sample}},[t._v("Sample")])])]),n("div",{staticClass:"rightControls"},[n("div",{staticClass:"shell",attrs:{id:"slider-vertical2"}},[n("div",{staticClass:"inner label"},[t._v(" P "),n("br"),t._v(" o "),n("br"),t._v(" w "),n("br"),t._v(" e "),n("br"),t._v(" r ")])]),n("div",{staticClass:"shell",attrs:{id:"slider-vertical1"}},[n("div",{staticClass:"inner label"},[t._v("n")])])])]),n("div",{staticClass:"consoleContainer"},[n("div",{staticClass:"console"})])])]),n("div",{attrs:{id:"description"}},[n("ul",[n("li",[t._v("μ0: Mean of the null population")]),n("li",[t._v("μ1: Mean of the alternative population")]),n("li",[t._v("α: Probability of a Type I error, one-tailed")]),n("li",[t._v("β: Probability of a Type II error (1 - power)")]),n("li",[t._v("σ: Pooled standard deviation")])]),n("ul",[n("li",[t._v(" n: Sample size set by user. When calculated from other parameters: "),n("div",[t._v(" \\(n = {(Z_\\alpha + Z_\\beta)^2 \\;\\cdot\\; 2\\sigma^2 \\over d^2}\\) ")])]),n("li",[t._v(" d: Normalized difference between the means: "),n("div",[t._v(" \\(d = {\\mu_1-\\mu_0\\over\\sigma}\\) ")])]),n("li",[t._v(" Power: Statistical power resulting from the other parameters: "),n("div",[t._v(" \\(Z_\\beta\\,\\rightarrow\\,\\beta\\) ")]),n("div",[t._v("\\(Power = 1\\,-\\,\\beta\\)")])])])])])]),n("outcomes-footer",{attrs:{copyright:t.copyright}})],1)},a=[];n(6699);class o{constructor(){this.subscribers={}}emit(t,e){Array.isArray(this.subscribers[t])&&this.subscribers[t].forEach((t=>{t(e)}))}on(t,e){Array.isArray(this.subscribers[t])||(this.subscribers[t]=[]),this.subscribers[t].push(e)}}var s=new o;const l={mu0:{initial:100,min:-1e4,max:1e4,precision:0},mu1:{initial:105,min:-1e4,max:1e4,precision:0},std:{initial:5,min:1,max:1e4,msg:"Standard Deviation must be greater than 1.",precision:0},delta:{min:0,max:1e4,precision:2,msg:"Normalized difference must be greater than 0."},alpha:{initial:.05,min:.001,max:.999,msg:"Type I Error must be between 0.001 and 1",precision:3},n:{initial:4,min:1,max:100,msg:"Sample size must be between 1 and 100.",precision:0,domID:"#slider-vertical1"},power:{min:.05,max:.999,msg:"Power must be between 0.05 and 0.999.",precision:3,domID:"#slider-vertical2"},effectsize:{domID:"#effectsize",precision:3}};function c(t,e){let n,r,i,{mu0:a,mu1:o,std:s,alpha:l,n:c,power:d,delta:p}=Object.assign({},E(),e);return"power"===t?(n=h(1-l/2,0,1),r=h(l/2,0,1),i=o<a?0:(o-a)/(s/Math.sqrt(c)),parseFloat(u(i-n,0,1)+u(r-i,0,1))):"n"===t?Math.pow((h(d-u(h(l/2,0,1),0,1),0,1)+h(1-l/2,0,1))*s/(o-a),2):"delta"===t?(o-a)/s:"mu1"===t?p*s+a:"effectsize"===t?1-d:void 0}function d(t,e){return u(-Math.abs(t),0,1)}function u(t,e,n){return.5*(1+f((t-e)/Math.sqrt(2*n*n)))}function p({alpha:t,mu0:e,std:n,n:r}){return h(t,e,n/Math.sqrt(r))-e}function h(t,e,n){return-1.4142135623730951*n*m(2*t)+e}function m(t){var e,n,r,i,a=0;if(t>=2)return-100;if(t<=0)return 100;for(i=t<1?t:2-t,r=Math.sqrt(-2*Math.log(i/2)),e=-.70711*((2.30753+.27061*r)/(1+r*(.99229+.04481*r))-r);a<2;a++)n=1-f(e)-i,e+=n/(1.1283791670955126*Math.exp(-e*e)-e*n);return t<1?e:-e}function f(t){var e,n,r,i,a=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],o=a.length-1,s=!1,l=0,c=0;for(t<0&&(t=-t,s=!0),e=2/(2+t),n=4*e-2;o>0;o--)r=l,l=n*l-c+a[o],c=r;return i=e*Math.exp(-t*t+.5*(a[0]+n*l)-c),s?i-1:1-i}function g(t,e,n){return Math.exp(-.5*Math.log(2*Math.PI)-Math.log(n)-Math.pow(t-e,2)/(2*n*n)).toFixed(7)}function v(t){$(t).find(".ui-slider-tick-mark").remove();for(let e=1;e<20;e++)5*e%25==0?$('<span class="ui-slider-tick-mark_large"></span>').css("bottom",5*e-2+"%").appendTo(".shell").css("height","16px"):$('<span class="ui-slider-tick-mark"></span>').css("bottom",5*e-1+"%").appendTo(".shell").css("height","8px")}function b(t){let e=E();z(""),Object.keys(e).forEach((t=>{$(`#${t}`).val(e[t].toFixed(l[t].precision))})),$("#slider-vertical1").slider("value",e.n),$("#slider-vertical2").slider("value",e.power)}function x(t){const e=Object.keys(t)[0],n=parseFloat(t[e]);function r(t){const e=Object.keys(t)[0],n=parseFloat(t[e]),{min:r,max:i,msg:a}=l[e];return!(isNaN(n)||!n||n<r||n>i)||(b(),z(a),!1)}if(z(""),!r(t))return!1;if("power"===e)return n>c("power",{n:l.n.min})&&r({n:c("n",{power:n})});if(["mu0","mu1","n","std","alpha"].includes(e))return r({power:c("power",{[e]:n})});if("delta"===e){const t=c("mu1",{delta:n}),e=c("power",{mu1:t});return r({mu1:t})&&r({power:e})}}function y(t){const{mu0:e,std:n}=E();return d3.scaleLinear().domain([e-4*n,e+4*n]).range([0,$(".maingraph").innerWidth()])(t)}function w(t){const{mu0:e,std:n}=E();return d3.scaleLinear().domain([0,$(".maingraph").innerWidth()]).range([e-4*n,e+4*n])(t)}function _(t){const{mu0:e,std:n}=E();return d3.scaleLinear().domain([0,g(e,e,n/Math.sqrt(100))]).range([0,1.16*$(".maingraph").innerHeight()])(t)}$((function(){$("#slider-vertical1").slider({orientation:"vertical",range:"min",min:l.n.min,max:l.n.max,value:l.n.initial,step:1,create:function(t,e){v(t.target)},slide:function(t,e){const n={n:e.value};return x(n)&&A(n,"change")}})})),$((function(){$("#slider-vertical2").slider({orientation:"vertical",range:"min",min:l.power.min,max:l.power.max,value:.6,step:.001,slide:function(t,e){const n={power:e.value};return x(n)&&A(n,"change")}})})),$((function(){s.on("change",b),s.on("drag",b)}));class k{constructor(t){L().append("path").attr("id","triangle").attr("d",d3.symbol().type(d3.symbolTriangle)).attr("transform",`translate(${t.x}, ${t.y})`).style("fill","grey")}}class C{constructor(t,e,n){L().append("line").attr("id",e).attr("x1",t).attr("y1",0).attr("x2",t).attr("y2",500).style("stroke",n?"#283747":"grey").style("stroke-width","2").style("stroke-dasharray","4, 4")}}class M{constructor(t){Object.assign(this,t),this.isBottom="bottom"===this.position;const e=t=>{this.id!==t&&this.removePath()&&this.addPath()};this.addPath(),s.on("change",e),s.on("drag",e)}generateCurve(){let t=E(),{std:e,n:n}=t;this.isBottom||(n=1.25);const r=t[this.center]-4*e,i=t[this.center]+4*e,a=[],o=8*e/20,s=this.isBottom?$(".maingraph").innerHeight()-20:$(".minigraph").innerHeight()+1;for(let l=r;l<i;l+=o){const r=y(l),i=_(-1*g(l,t[this.center],e/Math.sqrt(n)));a.push({x:r,y:i+s})}return a}drag(){return d3.drag().on("drag",(t=>{const e=E(),n=e[this.center]+8*d3.event.dx*e.std/$(".maingraph").innerWidth(),r={[this.center]:n};x(r)&&A(r,"drag",this.id)&&(t.x+=d3.event.dx);const i=`#${this.id}-error,#${this.id}-container`;d3.selectAll(i).attr("transform",`translate(${t.x})`)}))}addPath(){this.container=S()[this.position][this.id.includes("pink")?"front":"back"];const t=d3.line().x((t=>t.x)).y((t=>t.y)).curve(d3.curveBasis),e=this.generateCurve();this.nonErrorCurves=this.container.append("g").attr("id",`${this.id}-container`).attr("class","curveContainer"),this.isBottom&&this.container.append("g").attr("id",`clip-wrapper-${this.id}`).attr("clip-path",`url(#rect-clip-${this.clip})`).append("path").attr("id",`${this.id}-error`).attr("d",t(this.generateCurve())).attr("fill",`rgba(${this.color}, .70)`),this.nonErrorCurves.append("path").attr("d",t(e)).attr("fill",this.isBottom?`rgba(${this.color}, .60)`:"transparent").attr("stroke",`rgba(${this.color}, 1)`),this.hasText&&this.addText(e),this.draggable&&this.nonErrorCurves.data([{x:0}]).call(this.drag())}removePath(){return $(".bar,#sampleMeanLine,#triangle").remove(),$(`#clip-wrapper-${this.id},#${this.id}-container`).remove(),!0}addText(t){const e=d3.line().x((t=>t.x)).y((t=>t.y)).curve(d3.curveLinear);this.nonErrorCurves.append("path").attr("id",`${this.id}-rect`).attr("d",e(O(t,this.textPosition))),this.nonErrorCurves.append("text").style("fill",`rgb(${this.color})`).append("textPath").attr("xlink:href",`#${this.id}-rect`).attr("startOffset","50%").text(this.text)}}function O(t,e){const n=Math.round(t.length/2)-1,r=t.length-1,i={x:t[0].x,y:t[n].y-10},a={x:t[0].x,y:t[0].y+20},o={x:t[r].x,y:t[n].y-10},s={x:t[r].x,y:t[r].y+20};return"below"===e?[a,s]:[i,o]}let P,j,T;const F={};function E(){return F}function L(){return j}function S(){return P}function z(t,e="black"){$(".console").text(t).css("color",e)}function A(t,e,n){e=e||"change";const r=Object.keys(t)[0],i=t[r];return F[r]=parseFloat(i),["mu0","mu1","std","alpha","n"].includes(r)&&(F.power=c("power"),F.effectsize=c("effectsize")),["mu0","mu1","std"].includes(r)&&(F.delta=c("delta")),"power"===r&&(F.n=c("n"),F.effectsize=c("effectsize")),"delta"===r&&(F.mu1=c("mu1"),F.power=c("power")),["alpha","n"].includes(r)&&W(),["mu0","mu1","std"].includes(r)&&N(),s.emit(e,n),!0}function W(){const t=y(F.mu0-p(F));["right","left"].forEach((e=>{const n="left"===e?0:t,r="left"===e?t:Math.abs($(".maingraph").innerWidth()-t);$(`#rect-clip-${e},#dashedLine`).remove(),j.append("clipPath").attr("id",`rect-clip-${e}`).append("rect").attr("x",n).attr("y",0).attr("height",$(".maingraph").innerHeight()).attr("width",r),new C(t,"dashedLine","dark")}))}function H(){setTimeout(I,0)}function N(){$(".axis").remove();const t=Array.from(Array(9).keys()),e=t.map((t=>t*($(".maingraph").innerWidth()/8)+1)),n=t.map((t=>4===Math.abs(t-4)?"":(t-4)*F.std+F.mu0));var r=d3.scaleLinear().domain([0,$(".maingraph").innerWidth()]).range([0,$(".maingraph").innerWidth()]),i=d3.axisBottom().scale(r).tickValues(e).tickFormat(((t,e)=>n[e]));j.append("g").attr("class","axis").attr("transform","translate(0,"+($(".maingraph").innerHeight()-20)+")").call(i)}function I(){$(".maingraph svg").empty(),$(".minigraph svg").empty(),$("#loader").remove(),$(".container").css("display","grid"),Object.keys(l).forEach((t=>{const e=l[t];F[t]=e.initial?e.initial:c(t)})),b(),j=d3.select(".maingraph svg"),T=d3.select(".minigraph svg"),P={top:{back:T.append("g"),front:T.append("g")},bottom:{back:j.append("g"),front:j.append("g")}},W();const t={center:"mu0",clip:"right",color:"21, 67, 96",text:"Null Population"},e={center:"mu1",clip:"left",color:"139, 0, 0",text:"Alternative Population"};new M(Object.assign({},t,{position:"bottom",draggable:!1,id:"mainblue"})),new M(Object.assign({},t,{position:"top",draggable:!1,hasText:!0,textPosition:"below",id:"mainblue-top"})),new M(Object.assign({},e,{position:"bottom",draggable:!0,id:"mainpink"})),new M(Object.assign({},e,{position:"top",draggable:!0,hasText:!0,textPosition:"above",id:"mainpink-top"})),N()}function Z(){let{mu0:t,mu1:e,std:n,alpha:r,n:i}=F;if(e<t)return t=t.toFixed(2),e=e.toFixed(2),void z(`μ0 = ${t}\nμ1 = ${e}\n Not designed for two-tailed tests (μ1 < μ0)`,"Crimson");$(".bar,#sampleMeanLine,#triangle").remove();const a=d3.range(Math.round(i)).map(d3.randomNormal(e,n)).map((t=>y(t))),o=d3.mean(a);new C(o,"sampleMeanLine"),new k({x:o,y:$(".maingraph").innerHeight()-4}),new k({x:o,y:6});const s=d3.scaleLinear().domain([0,$(".maingraph").innerWidth()]).rangeRound([0,$(".maingraph").innerWidth()]),c=d3.histogram().domain(s.domain()).thresholds(s.ticks(90))(a),u=d3.max(c,(t=>t.length)),h=u>8?u:8,m=d3.scaleLinear().domain([0,1.5*h]).range([$(".minigraph").innerHeight(),0]);T.selectAll(".bar").data(c).enter().append("g").attr("class","bar").attr("transform",(t=>"translate("+s(t.x0)+","+m(t.length)+")")).append("rect").attr("width",s(c[0].x1)-s(c[0].x0)-1).attr("height",(t=>$(".minigraph").innerHeight()-m(t.length))).attr("rx",2).attr("rx",2).style("fill","#ffffff").style("stroke","grey");const f=w(o),g=(t-f)/(n/Math.sqrt(i)),v=d(g,1);let b=`Cohen's d = ${F.delta.toFixed(l.delta.precision)}\n`;b+=`Critical Mean Value = ${(t-p(F)).toFixed(2)}\n`,b+=`Sample Mean = ${f.toFixed(2)}\n`,b+=`p(z > ${-1*g.toFixed(2)}) = ${v.toFixed(4)}\n`,v>=r?z(""+(b+="-> Fail to Reject Ho"),"Navy"):z(""+(b+="-> Reject Ho"),"Crimson")}var q={name:"App",components:{},mounted(){H(),window.safari&&setTimeout(Z,500),addEventListener("resize",I)},data(){return{copyright:"© 2018 Washington University School of Medicine, St. Louis, Missouri"}},methods:{sample(){Z()},_validate(t){const{value:e}=this.$refs[t];x({[t]:e})&&A({[t]:e})}}},B=q,D=n(3736),R=(0,D.Z)(B,i,a,!1,null,null,null),U=R.exports,V=n(8464);r.Z.use(V.Z),r.Z.config.productionTip=!1,new r.Z({render:t=>t(U)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],i=t[d][1],a=t[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/statistical-power-applet/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(e&&e(r);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunkstatistical_power_applet"]=self["webpackChunkstatistical_power_applet"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5263)}));r=n.O(r)})();
//# sourceMappingURL=app.d50a6789.js.map