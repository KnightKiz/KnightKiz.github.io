webpackJsonp([0],{"4JNJ":function(t,s,e){"use strict";s.a={computed:{results:function(){return this.$store.state.results},accuracy:function(){var t=0;return this.results.forEach(function(s){s.iscorrect&&t++}),t/this.results.length*100+"%"}},methods:{formatFormula:function(t){return t.formula.firstNum+" "+t.formula.type+" "+t.formula.secondNum+" = "+t.correctAnswer}},filters:{formatCorrect:function(t){return t?"√":"×"}}}},"4MfB":function(t,s){},"8c3k":function(t,s,e){"use strict";function n(t){e("B61d")}var r=e("vnLW"),i=e("dOiT"),a=e("J0+h"),u=n,c=a(r.a,i.a,u,"data-v-26048945",null);s.a=c.exports},B61d:function(t,s){},CL8M:function(t,s,e){"use strict";function n(t){e("cu9C")}var r=e("4JNJ"),i=e("roES"),a=e("J0+h"),u=n,c=a(r.a,i.a,u,"data-v-2787a073",null);s.a=c.exports},LYVl:function(t,s,e){"use strict";function n(t){e("4MfB")}var r=e("eJAV"),i=e("SHPe"),a=e("J0+h"),u=n,c=a(r.a,i.a,u,"data-v-5a70edeb",null);s.a=c.exports},M93x:function(t,s,e){"use strict";function n(t){e("dgDp")}var r=e("h8+N"),i=e("n+cd"),a=e("J0+h"),u=n,c=a(r.a,i.a,u,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("UFcW"),r=e("M93x"),i=e("YaEn"),a=e("l+I4");n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a},store:a.a,data:{eventHub:new n.a}})},SHPe:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"index"},[e("div",{staticClass:"btn"},[e("router-link",{attrs:{to:"/question"}},[t._v("开始")])],1)])},r=[],i={render:n,staticRenderFns:r};s.a=i},YaEn:function(t,s,e){"use strict";var n=e("UFcW"),r=e("u28b"),i=e("LYVl"),a=e("8c3k"),u=e("CL8M");n.a.use(r.a),s.a=new r.a({routes:[{path:"/",name:"index",component:i.a},{path:"/question",name:"question",component:a.a},{path:"/results",name:"results",component:u.a}]})},cu9C:function(t,s){},dOiT:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide-q",mode:"in-out"}},[e("div",{staticClass:"question"},[e("div",{staticClass:"question-detail"},[e("span",{staticClass:"index"},[t._v(t._s(t.currentIndex+1))]),t._v(t._s(t._f("formatFormula")(t.formula)))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"text",attrs:{type:"text"},domProps:{value:t.input},on:{input:function(s){s.target.composing||(t.input=s.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.over,expression:"!over"}],staticClass:"btn-next btn",on:{click:function(s){t.next()}}},[t._v("→")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.over,expression:"over"}],staticClass:"btn-over btn",on:{click:function(s){t.lastQue()}}},[e("router-link",{attrs:{to:"/results"}},[t._v("R")])],1),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.currentTime))])])])},r=[],i={render:n,staticRenderFns:r};s.a=i},dgDp:function(t,s){},eJAV:function(t,s,e){"use strict";s.a={created:function(){var t=this;this.$root.eventHub.$on("close",function(){t.questions=!1})},methods:{showQuestions:function(){this.questions=!0}}}},"h8+N":function(t,s,e){"use strict";s.a={name:"app"}},"l+I4":function(t,s,e){"use strict";var n=e("UFcW"),r=e("Gwb+");n.a.use(r.a);var i=new r.a.Store({state:{results:[]},mutations:{setResults:function(t,s){t.results=s}}});s.a=i},"n+cd":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],i={render:n,staticRenderFns:r};s.a=i},roES:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"results"},[e("h1",{staticClass:"title"},[t._v("\n\t\t\t结果查询\n\t")]),t._v(" "),e("ul",{staticClass:"result-list"},t._l(t.results,function(s,n){return e("li",{key:n,staticClass:"result-item"},[e("span",{staticClass:"NO"},[t._v(t._s(n+1))]),t._v(" "),e("span",{staticClass:"formula"},[t._v(t._s(t.formatFormula(s)))]),t._v(" "),e("span",{staticClass:"answer"},[t._v(t._s(s.input))]),t._v(" "),e("span",{staticClass:"iscorrect",class:{correct:s.iscorrect,notcorrect:!s.iscorrect}},[t._v(t._s(t._f("formatCorrect")(s.iscorrect)))])])})),t._v(" "),e("div",{staticClass:"btn-back"},[e("router-link",{attrs:{to:"/"}},[t._v("←")])],1),t._v(" "),e("div",{staticClass:"accuracy"},[t._v("正确率："+t._s(t.accuracy))])])},r=[],i={render:n,staticRenderFns:r};s.a=i},vnLW:function(t,s,e){"use strict";s.a={data:function(){return{currentIndex:0,formula:{},formulas:[],input:"",inputs:[],correctAnswers:[],iscorrects:[],queNum:2,currentTime:"",time:0,t:-1,over:!1}},created:function(){this.formula=this._updateFormula(),this._setTime()},mounted:function(){this.$refs.input.focus()},destroyed:function(){clearInterval(this.t)},filters:{formatFormula:function(t){return t.firstNum+" "+t.type+" "+t.secondNum+" = ?"}},methods:{_setTime:function(){var t=this,s=0,e=0,n=0,r="00",i="00",a="00";this.currentTime="00:00:00",this.t=setInterval(function(){t.time++,n++,n>59&&(e++,n=0),e>59&&(s++,e=0),a=n<10?"0"+n:""+n,i=e<10?"0"+e:""+e,r=s<10?"0"+s:""+s,t.currentTime=r+":"+i+":"+a},1e3)},_updateFormula:function(){var t=["+","-"],s={};return s.firstNum=Math.ceil(30*Math.random()),s.secondNum=Math.ceil(30*Math.random()),s.type=t[Math.floor(2*Math.random())],s},_caculate:function(){var t=this;this.formulas.forEach(function(s,e){var n=-1;"+"===s.type?(n=s.firstNum+s.secondNum,t.iscorrects.push(n===parseInt(t.inputs[e]))):(n=s.firstNum-s.secondNum,t.iscorrects.push(n===parseInt(t.inputs[e]))),t.correctAnswers.push(n)});var s=[];this.iscorrects.forEach(function(e,n){var r={};r.iscorrect=e,r.input=t.inputs[n],r.formula=t.formulas[n],r.correctAnswer=t.correctAnswers[n],s.push(r)}),this.$store.commit("setResults",s)},next:function(){this.$refs.input.focus(),this.inputs.push(this.input),this.formulas.push(this.formula),this.input="",this.currentIndex===this.queNum-2&&(this.over=!0),this.currentIndex++,this.formula=this._updateFormula()},lastQue:function(){this.inputs.push(this.input),this.formulas.push(this.formula),this.input="",this._caculate()}}}}},["NHnr"]);
//# sourceMappingURL=app.c0a862f181387a47a334.js.map