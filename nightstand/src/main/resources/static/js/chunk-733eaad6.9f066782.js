(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733eaad6"],{"1dde":function(t,e,r){var i=r("d039"),n=r("b622"),a=r("2d00"),o=n("species");t.exports=function(t){return a>=51||!i((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var i=r("23e7"),n=r("5a34"),a=r("1d80"),o=r("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(a(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},8418:function(t,e,r){"use strict";var i=r("c04e"),n=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=i(e);o in t?n.f(t,o,a(0,r)):t[o]=r}},"91ef":function(t,e,r){var i={"./MovieEdit.vue":"f535","./MoviePopular.vue":"f5a6"};function n(t){var e=a(t);return r(e)}function a(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="91ef"},a434:function(t,e,r){"use strict";var i=r("23e7"),n=r("23cb"),a=r("a691"),o=r("50c4"),s=r("7b0b"),c=r("65f0"),l=r("8418"),u=r("1dde"),d=r("ae40"),m=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var r,i,u,d,m,f,b=s(this),_=o(b.length),x=n(t,_),k=arguments.length;if(0===k?r=i=0:1===k?(r=0,i=_-x):(r=k-2,i=g(p(a(e),0),_-x)),_+r-i>h)throw TypeError(v);for(u=c(b,i),d=0;d<i;d++)m=x+d,m in b&&l(u,d,b[m]);if(u.length=i,r<i){for(d=x;d<_-i;d++)m=d+i,f=d+r,m in b?b[f]=b[m]:delete b[f];for(d=_;d>_-i+r;d--)delete b[d-1]}else if(r>i)for(d=_-i;d>x;d--)m=d+i-1,f=d+r-1,m in b?b[f]=b[m]:delete b[f];for(d=0;d<r;d++)b[d+x]=arguments[d+2];return b.length=_-i+r,u}})},caad:function(t,e,r){"use strict";var i=r("23e7"),n=r("4d64").includes,a=r("44d2"),o=r("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!s},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},f535:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{staticClass:"justify-content-center mt-4"},[r("h1",{staticStyle:{color:"white"}},[t._v("电影列表编辑")])]),r("b-row",{staticClass:"justify-content-center mt-4"},[r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",{attrs:{align:"center"}},[t._v("列表内容")])]},proxy:!0}])},[r("b-form-group",{attrs:{label:"标题","label-for":"textarea-title"}},[r("b-form-input",{attrs:{id:"textarea-title",placeholder:"请输入安利列表的标题"},model:{value:t.recommendForm.title,callback:function(e){t.$set(t.recommendForm,"title",e)},expression:"recommendForm.title"}})],1),r("b-form-group",{attrs:{label:"描述","label-for":"textarea-text"}},[r("b-form-textarea",{attrs:{id:"textarea-text",placeholder:"请输入安利列表的描述",rows:"5"},model:{value:t.recommendForm.text,callback:function(e){t.$set(t.recommendForm,"text",e)},expression:"recommendForm.text"}})],1)],1)],1),r("b-col",[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"light",align:"center"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",{attrs:{align:"center"}},[t._v("条目列表")])]},proxy:!0}])},[r("b-list-group",t._l(t.addList,(function(e,i){return r("b-list-group-item",{key:i,attrs:{button:"",variant:"dark"},on:{click:function(e){return t.deleteItem(t.addList,i)}}},[r("div",{attrs:{align:"center"}},[t._v(t._s(e.title))])])})),1),r("b-button",{staticClass:"mt-4",attrs:{variant:"warning"},on:{click:t.submitForm}},[t._v("提交")]),r("b-card-footer",[t._v("单击条目可移除")])],1)],1),r("b-col",{attrs:{md:"5"}},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"light",align:"center"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",{attrs:{align:"center"}},[t._v("添加条目")])]},proxy:!0}])},[r("b-row",{staticClass:"mt-3"},[r("b-col",[r("b-form-input",{attrs:{placeholder:"请输入需要搜索的内容"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),r("b-col",{attrs:{md:"auto"}},[r("b-button",{staticClass:"ml-2",attrs:{variant:"success"},on:{click:t.getDoubanSearch}},[t._v("搜索")])],1)],1),r("b-row",{staticClass:"mt-3"},[r("b-col",[r("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),r("b-col",{attrs:{md:"auto"}},[r("b-button",{staticClass:"ml-2",attrs:{variant:"info"},on:{click:t.addToList}},[t._v(" 添加 ")])],1)],1)],1)],1)],1)],1)},n=[],a=(r("caad"),r("a434"),r("2532"),{name:"MovieEdit",data:function(){return{selected:null,options:[{value:{},text:"请在搜索框搜索电影条目"}],addList:[],searchText:"",recommendForm:{uid:0,title:"",text:"",items:"",pubTime:""}}},methods:{addToList:function(){this.addList.includes(this.selected)||null==this.selected.id||this.addList.push(this.selected)},getDoubanSearch:function(){var t=this,e="/dmovie/j/subject_suggest?q="+encodeURI(this.searchText);this.getRequest(e).then((function(e){e&&t.parseOptions(e)}))},parseOptions:function(t){for(var e=[],r=0;r<t.length;r++)if("movie"===t[r].type){var i={value:{id:t[r].id,type:"f",title:t[r].title},text:t[r].title+" ("+t[r].year+") "+t[r].sub_title};e.push(i)}this.options=e},deleteItem:function(t,e){t.splice(e,1)},submitForm:function(){var t=this;this.addList.length>0&&this.recommendForm.title.length>0&&(this.recommendForm.items=this.addList,this.recommendForm.uid=this.$store.state.currentUser.id,this.recommendForm.pubTime=new Date,this.postRequest("/recommendlist/basic/",this.recommendForm).then((function(e){200==e.status&&t.$router.push("/movie/main")})))}}}),o=a,s=r("2877"),c=Object(s["a"])(o,i,n,!1,null,"46b14d1a",null);e["default"]=c.exports},f5a6:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{staticClass:"justify-content-center mt-4"},[r("b-col",{attrs:{md:"12"}},[r("h1",{staticClass:"mt-4",staticStyle:{color:"white"},attrs:{align:"center"}},[t._v("影单")])])],1),r("b-row",{staticClass:"justify-content-center mt-4"},[r("b-col",{attrs:{md:"auto"}},[r("b-card-group",{attrs:{columns:"",id:"recommend-lists"}},t._l(t.movieLists,(function(e,i){return r("b-card",{key:i,attrs:{"bg-variant":"dark","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",{attrs:{align:"center"}},[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[r("b-card-text",{staticClass:"mt-2"},[null!=t.userInfo[e.uid]?r("div",{attrs:{align:"center"}},[t._v(" "+t._s(t.userInfo[e.uid].name)+" "),r("b-img",{attrs:{width:"30",height:"30",alt:"头像",src:t.userInfo[e.uid].userface,rounded:"circle"}})],1):t._e(),r("p",[t._v(t._s(e.text))])]),r("b-list-group",{staticClass:"mt-2"},t._l(e.items.slice(0,10),(function(i,n){return r("b-list-group-item",{key:n,attrs:{variant:"dark",id:"movie-list-"+e.id+"-item-"+n,button:""}},[r("div",{attrs:{align:"center"}},[t._v(t._s(i.title))]),r("b-popover",{attrs:{target:"movie-list-"+e.id+"-item-"+n,triggers:"click"},on:{show:function(e){return t.getDetail(i)},hidden:t.resetPopOver},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.popoverItem.alt_title))]},proxy:!0}],null,!0)},[r("b-img",{attrs:{thumbnail:"",src:t.popImageUrl,center:""}}),r("br"),r("ul",[r("li",[t._v("评分: "+t._s(t.popoverItem.rating.average))]),t._l(t.popoverItem.attrs,(function(e,i){return r("li",{key:i},[t._v(" "+t._s(i)+": "+t._s("string"!=typeof e?e.join(","):e)+" ")])})),r("li",[t._v("简介: "+t._s(t.popoverItem.summary))])],2)],1)],1)})),1)],1)})),1),r("b-pagination",{attrs:{"total-rows":t.pagination.total,"per-page":t.pagination.perPage,"aria-controls":"recommend-lists",align:"center"},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)],1)],1)},n=[],a=(r("ac1f"),r("5319"),{name:"MoviePopular",data:function(){return{movieLists:[],popoverItem:{alt_title:"",image:"",summary:"",rating:{average:""},attrs:{}},popImageUrl:"",pagination:{prePage:5,currentPage:1,total:0},userInfo:{}}},mounted:function(){this.getMovieLists()},watch:{pagination:"getMovieList"},methods:{getMovieLists:function(){var t=this,e="/recommendlist/basic/movie/page/"+this.pagination.currentPage+"/"+this.pagination.prePage;this.getRequest(e).then((function(e){e&&(t.movieLists=e,t.userInfoUpdate(e),t.show=!1,t.$nextTick((function(){t.show=!0})))}))},userInfoUpdate:function(t){for(var e=0;e<t.length;e++)this.getUserInfo(t[e].uid);console.log(this.userInfo)},getUserInfo:function(t){var e=this,r="/user/info/"+t;this.getRequest(r).then((function(r){r&&(e.userInfo[t]=r)}))},getDetail:function(t){var e=this,r=t.id,i="/dapi/v2";switch(t.type){case"f":i=i+"/movie/"+r;break;case"b":i=i+"/book/"+r;break;case"m":i=i+"/music/"+r;break}this.getRequest(i).then((function(t){t&&(e.popoverItem=t,e.popImageUrl=e.imageUrlCut(t.image))}))},imageUrlCut:function(t){return t.replace(/https:\/\/img\d.doubanio.com/i,"/dpic")},resetPopOver:function(){this.popImageUrl="",this.popoverItem={alt_title:"",image:"",summary:"",rating:{average:""},attrs:{}}}}}),o=a,s=r("2877"),c=Object(s["a"])(o,i,n,!1,null,"48b39eda",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-733eaad6.9f066782.js.map