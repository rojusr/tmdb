(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"03a7":function(e,t,a){},"08b0":function(e,t,a){"use strict";var i=a("ad80"),n=a.n(i);n.a},"1b85":function(e,t,a){},"1f68":function(e,t,a){},"1fea":function(e,t,a){"use strict";var i=a("ccfa"),n=a.n(i);n.a},"20f4":function(e){e.exports=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]')},"30ef":function(e,t,a){"use strict";var i=a("1b85"),n=a.n(i);n.a},3718:function(e,t,a){"use strict";var i=a("03a7"),n=a.n(i);n.a},4421:function(e,t,a){"use strict";var i=a("bfbd"),n=a.n(i);n.a},"4acb":function(e,t,a){},"55e5":function(e,t,a){"use strict";var i=a("64e2"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("551c"),a("8a81");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Sidebar",{attrs:{"ss-container":""}}),a("div",{staticClass:"main"},[a("router-view",{key:e.$route.path})],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"logo"},[e._v("TMDB")]),a("Filters")],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("div",{staticClass:"category"},[e._v("Release Date")]),a("div",{staticClass:"date"},[a("vue-slider",e._b({on:{"drag-end":e.dragend},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}},"vue-slider",e.options,!1)),a("div",{staticClass:"dateValues"},[a("span",[e._v(e._s(e.range[0]))]),a("span",{staticStyle:{float:"right"}},[e._v(e._s(e.range[1]))])])],1),a("div",{staticClass:"category"},[e._v("Genres")]),a("div",{staticClass:"genre_reset",class:{selected:e.allGenres},on:{click:function(t){return e.reset()}}},[a("span",{staticClass:"reset"},[e._v("All")])]),e._l(e.genres,(function(t,i){return a("FilterItem",{key:i,ref:"item",refInFor:!0,attrs:{allGenres:e.allGenres,genre:t},on:{click:function(t){return e.toggleActive()}}})}))],2)])},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"genre",class:{selected:e.isActive},on:{click:function(t){return e.toggleActive()}}},[a("span",[e._v(e._s(e.genre.name))])])},d=[],p={name:"FilterItem",props:{genre:Object,allGenres:Boolean},data:function(){return{isActive:!1}},methods:{toggleActive:function(){this.$parent.allGenres=!1,this.isActive=!this.isActive,this.$parent.toggle(this.genre.id)}},watch:{allGenres:function(e,t){e&&(this.isActive=!1)}}},h=p,f=(a("30ef"),a("2877")),v=Object(f["a"])(h,u,d,!1,null,"19ad905e",null),g=v.exports,m=a("4971"),_=a.n(m),b=(a("8445"),a("20f4")),y={name:"Filters",data:function(){return{allGenres:!0,genres:b,selection:[],range:[1970,2020],options:{dotSize:14,width:"auto",height:4,contained:!0,min:1970,max:2020,interval:1,clickable:!1,tooltip:"none",minRange:1}}},computed:{},methods:{reset:function(){this.allGenres=!0,this.selection.length=0,this.select()},dragend:function(){},toggle:function(e){var t=this.selection,a=t.indexOf(e);a>=0?t.splice(a,1):t.push(e),this.select()},select:function(){this.selection.length>0?(this.allGenres=!1,this.$router.push({name:"explore genres",params:{type:this.$route.params.type,genres:"genre="+this.selection}})):(this.allGenres=!0,this.$router.push({name:"explore",params:{type:this.$route.params.type}}))}},components:{FilterItem:g,VueSlider:_.a}},w=y,k=(a("3718"),Object(f["a"])(w,l,c,!1,null,"ebabe7ac",null)),j=k.exports,C={name:"Sidebar",components:{Filters:j}},O=C,x=(a("55e5"),Object(f["a"])(O,r,o,!1,null,"8152a500",null)),S=x.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("span",{staticClass:"current"},[e._v("\n    "+e._s(e.page)+"\n  ")]),a("span",{staticClass:"total"},[e._v("\n    /"+e._s(e.pages)+"\n  ")]),a("div",{staticClass:"list"},[a("span",{staticClass:"next",class:{disabled:e.page<=1},on:{click:function(t){return e.next(-1)}}},[e._v("PREV")]),a("i",{staticClass:"icofont-thin-double-left",on:{click:function(t){return e.count("start")}}}),a("i",{staticClass:"icofont-thin-left",on:{click:function(t){return e.count(-10)}}}),a("ul",e._l(10,(function(t){return a("li",{key:t,class:{active:t+e.counter===e.page,disabled:t+e.counter>e.pages||t+e.counter<1},on:{click:function(a){return e.select(t)}}},[t+e.counter<10?a("span",{staticClass:"hidden"},[e._v("1")]):e._e(),a("span",[e._v(e._s(t+e.counter))]),t+e.counter<100?a("span",{staticClass:"hidden"},[e._v("9")]):e._e()])})),0),a("i",{staticClass:"icofont-thin-right",on:{click:function(t){return e.count(10)}}}),a("i",{staticClass:"icofont-thin-double-right",on:{click:function(t){return e.count("end")}}}),a("span",{staticClass:"next",class:{disabled:e.page>=e.pages},on:{click:function(t){return e.next(1)}}},[e._v("NEXT")])])])},P=[],L=(a("c5f6"),{name:"Pagination",props:{pages:Number,page:Number},methods:{select:function(e){this.$parent.pageSelect(e+this.counter)},next:function(e){var t=this.page+e-5;this.$parent.pageSelect(this.page+e),t<0&&(t=0),t>this.pages-10&&(t=this.pages-10),this.counter=t},count:function(e){var t;t="start"==e?this.counter=0:"end"==e?this.pages-10:"page"==e?this.page-1:this.counter+e,t<0&&(t=0),t>this.pages-10&&(t=this.pages-10),this.counter=t}},computed:{},data:function(){return{counter:0}}}),A=L,T=(a("6062"),Object(f["a"])(A,M,P,!1,null,"4937fa43",null)),F=T.exports,D={name:"app",methods:{dispatch:function(){this.$store.dispatch("updateFilters",{id:this.$route.params.id,type:this.$route.params.type,with_genres:this.$route.params.genres})}},watch:{$route:function(){this.dispatch()}},created:function(){this.dispatch()},components:{Sidebar:S,Pagination:F}},I=D,G=(a("f64b"),Object(f["a"])(I,n,s,!1,null,"2c8c184c",null)),$=G.exports,J=a("2f62"),W=(a("7514"),a("ac6a"),a("cadf"),a("456d"),a("6b54"),a("28a5"),a("ffc1"),a("bc3a")),K=a.n(W),R=function(){return K.a.create({baseURL:"http://api.themoviedb.org/3/"})},E="?api_key=ec892e3f8fed299ca217c0916e814d39";function B(e){for(var t=[],a=0,i=Object.entries(e);a<i.length;a++){var n=i[a];if("sort_direction"!=n[0]&&""!=n[1]&&"undefined"!==typeof n[1]&&"type"!=n[0]&&"id"!=n[0]){"sort_by"==n[0]&&(n[1]+="."),"append"==n[0]&&(n[0]="append_to_response"),"release_date_gte"==n[0]&&(n[1]+="-01-01"),"release_date_lte"==n[0]&&(n[1]+="-11-31");var s=n[0]+"="+n[1];t.push(s)}}var r="&"+t.join("&")+e.sort_direction;return r}var H={find:function(e){var t=e.type+"/"+e.id+E+"&append_to_response=credits,videos";return R().get(t)},discover:function(e){var t="discover/"+e.type+E+B(e);return R().get(t)}},Q={updateFilters:function(e,t){var a=e.commit,i=[];t.with_genres&&(i=t.with_genres.split("=")[1].split(","),t.with_genres=i.filter((function(e){return 0===e||e})).toString()),a("updateFilters",t)},find:function(e){var t=e.commit,a=e.state,i=!0;if(0===Object.keys(a.object).length)i=!1;else for(var n in a.filters)if(a.object_filters[n]!=a.filters[n]){i=!1;break}i||(a.isLoading=!0,H.find(a.filters).then((function(e){a.isLoading=!1,t("setObject",e.data)})))},discover:function(e){var t=e.commit,a=e.state,i=!0;if(0===Object.keys(a.list).length)i=!1;else for(var n in a.filters){var s=a.list_filters[n],r=a.filters[n];if(s!==r){i=!1;break}}i||(a.isLoading=!0,H.discover(a.filters).then((function(e){a.isLoading=!1,t("setList",e.data.results)})))},getMovies:function(){},getShows:function(){}},U={updateFilters:function(e,t){for(var a in t){var i=t[a];"movies"==i&&(i="movie"),"people"==i&&(i="person"),e.filters[a]=i}},setObject:function(e,t){for(var a in e.object=t,e.filters)e.object_filters[a]=e.filters[a]},setList:function(e,t){for(var a in e.list=t,e.filters)e.list_filters[a]=e.filters[a]}},V=a("94d5"),z=a.n(V),N=a("d27b");i["default"].use(J["a"]);var X=new J["a"].Store({state:{list:N,list_filters:{},object:{},object_filters:{},pages:"",genres:b,isLoading:!0,filters:{type:"movie",id:"",with_genres:[],append:["credits","videos"],release_date_gte:"",release_date_lte:"",page:1,sort_by:"popularity",sort_direction:"desc"}},getters:z.a,mutations:U,actions:Q}),q=(a("8e6e"),a("bd86")),Y=a("8c4f"),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"List"},e._l(e.list,(function(t,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return e.click(t)}}},[a("Item",{attrs:{object:t}})],1)})),0)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outer_wrap"},[a("div",{staticClass:"inner_wrap"},[a("div",{staticClass:"imgBox"},[e.object.poster_path?a("subImage",{attrs:{src:e.src}}):e._e(),e.object.poster_path?e._e():a("div",{staticClass:"empty",style:{backgroundColor:e.colors[Math.floor(Math.random()*e.colors.length)]}},[a("span",[e._v(e._s(e.object.title)+e._s(e.object.name))])])],1)])])},ae=[],ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],attrs:{src:e.src},on:{load:e.onLoaded}})])},ne=[],se={name:"subImage",data:function(){return{loaded:!1,isMounted:!1}},props:{src:String},methods:{onLoaded:function(){this.loaded=!0}}},re=se,oe=(a("fb28"),a("4421"),Object(f["a"])(re,ie,ne,!1,null,"151ab422",null)),le=oe.exports,ce={name:"Item",props:{object:Object},data:function(){return{colors:["#4f7696","#315b7d","#1d4769","#223f57"],loaded:!1}},mounted:function(){},methods:{onLoaded:function(){this.loaded=!0}},computed:{src:function(){return"https://image.tmdb.org/t/p/w342"+this.object.poster_path}},watch:{movie:function(){}},components:{subImage:le}},ue=ce,de=(a("08b0"),Object(f["a"])(ue,te,ae,!1,null,"f7831f36",null)),pe=de.exports,he={name:"List",computed:{list:function(){return this.$store.state.list}},props:{type:String,genres:String,filter:String},methods:{click:function(e){this.$router.push({name:"info",params:{type:this.type,id:e.id}})}},created:function(){this.$store.dispatch("discover")},components:{Item:pe}},fe=he,ve=(a("1fea"),Object(f["a"])(fe,Z,ee,!1,null,null,null)),ge=ve.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info"},["movies"!=e.type||this.$store.state.isLoading?e._e():a("Movie"),"tv"!=e.type||this.$store.state.isLoading?e._e():a("Show")],1)},_e=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"background"},[a("div",{staticClass:"imgBox"},[a("subImage",{attrs:{src:e.backdrop}})],1),a("div",{staticClass:"gradient"})]),a("div",{staticClass:"section intro"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.movie.poster_path,expression:"movie.poster_path"}],staticClass:"column movie_poster"},[a("div",{staticClass:"poster"},[a("div",{staticClass:"imgBox"},[a("subImage",{attrs:{src:e.poster}})],1)])]),a("div",{staticClass:"column movie_info"},[a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"movie_title"},[a("h1",[e._v("\n                  "+e._s(e.movie.title)+"\n                  "),a("sup",[e._v("("+e._s(e.movie.release_date.split("-")[0])+")")])])]),a("div",{staticClass:"close link",on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Close "),a("i",{staticClass:"icofont-close-line"})])]),a("h2",{directives:[{name:"show",rawName:"v-show",value:e.movie.tagline,expression:"movie.tagline"}],staticClass:"movie_tagline"},[e._v(e._s(e.movie.tagline))])]),a("div",{staticClass:"genres"},e._l(e.movie.genres,(function(t,i){return a("span",[a("span",{staticClass:"link"},[e._v(e._s(t.name))]),e._v(e._s(i+1<e.movie.genres.length?" / ":""))])})),0),a("div",{staticClass:"info"},[a("span",{staticClass:"rating"},[a("span",{staticClass:"star"},e._l(5,(function(t){return a("i",{key:t,staticClass:"icofont-star",class:{starFilled:e.rating>=t}})})),0),e._v("\n              "+e._s(.5*e.movie.vote_average)),a("span",{staticStyle:{opacity:"0.6"}},[e._v(" / 5")])]),a("span",{staticClass:"label"},[e._v("Director:")]),a("span",{staticClass:"link"},[e._v(e._s(e.director))])]),e.movie.credits.cast.length?a("div",{staticClass:"cast"},[a("div",{staticClass:"thumbs"},e._l(e.movie.credits.cast.slice(0,5),(function(t){return a("div",{staticClass:"thumb"},[a("div",{staticClass:"thumb-inner"},[a("div",{staticClass:"imgBox"},[t.profile_path?e._e():a("div",{staticClass:"empty"},[a("i",{staticClass:"icofont-user-alt-4"})]),a("subImage",{attrs:{src:"https://image.tmdb.org/t/p/w154/"+t.profile_path}})],1),a("span",{staticClass:"link"},[e._v(e._s(t.name))])])])})),0)]):e._e()])])])]),a("div",{staticClass:"section details"},[a("div",{staticClass:"container"},[e.movie.overview?a("div",{staticClass:"overview"},[a("h3",[e._v("Overview")]),a("p",[e._v(e._s(e.movie.overview))])]):e._e(),a("div",{staticClass:"credit"},[e.movie.credits.cast.length?a("div",[a("span",{staticClass:"label"},[e._v("Full cast:")]),e._l(e.movie.credits.cast.slice(0,e.num),(function(t,i){return a("span",{},[a("span",{staticClass:"link"},[e._v(e._s(t.name))]),e._v(e._s(i+1<e.movie.credits.cast.slice(0,e.num).length?" / ":""))])})),e.movie.credits.cast.length-e.num>0?a("span",{staticClass:"link more",on:{click:function(t){e.num=e.movie.credits.cast.length}}},[e._v("[ +"+e._s(e.movie.credits.cast.length-e.num)+" more ]")]):e._e(),e.num>12?a("span",{staticClass:"link more",on:{click:function(t){e.num=12}}},[e._v("[ less ]")]):e._e()],2):e._e(),e.movie.production_companies.length?a("div",[a("span",{staticClass:"label"},[e._v("Production:")]),e._l(e.movie.production_companies.slice(0,3),(function(t,i){return a("span",[a("span",{staticClass:"link"},[e._v(e._s(t.name))]),e._v(e._s(i+1<3?" / ":""))])}))],2):e._e()])])])])},ye=[],we=(a("ac4d"),a("7f7f"),{name:"Movie",data:function(){return{num:12}},props:{},computed:{movie:function(){return this.$store.state.object},poster:function(){return"https://image.tmdb.org/t/p/w342/"+this.movie.poster_path},backdrop:function(){return"https://image.tmdb.org/t/p/original/"+this.movie.backdrop_path},director:function(){var e=this.movie.credits.crew.filter((function(e){return"Director"==e.job}))[0];return e.name},genres:function(){var e,t=[],a=!0,i=!1,n=void 0;try{for(var s,r=this.movie.genres[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)e=s.value,t.push(e.name)}catch(o){i=!0,n=o}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return t.join(" | ")},rating:function(){return Math.round(.5*this.movie.vote_average)}},components:{subImage:le}}),ke=we,je=(a("f9a0"),Object(f["a"])(ke,be,ye,!1,null,"41f2ef28",null)),Ce=je.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"show"},[a("h1",[e._v(e._s(e.show.name))])])},xe=[],Se={name:"Movie",data:function(){return{}},props:{},computed:{show:function(){return this.$store.state.object}},created:function(){}},Me=Se,Pe=Object(f["a"])(Me,Oe,xe,!1,null,null,null),Le=Pe.exports,Ae={name:"Info",data:function(){return{}},props:{type:String},computed:{},created:function(){this.$store.dispatch("find")},components:{Movie:Ce,Show:Le}},Te=Ae,Fe=Object(f["a"])(Te,me,_e,!1,null,null,null),De=Fe.exports;function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(a,!0).forEach((function(t){Object(q["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}i["default"].use(Y["a"]);var $e=new Y["a"]({routes:[{path:"/:type(movies|tv)",name:"explore",props:!0,component:ge},{path:"/:type(movies|tv)/:genres(genre=\\d+[,\\d+]*)",name:"explore genres",props:!0,component:ge},{path:"/:type(movies|tv|people)/:id(\\d+)",name:"info",component:De,props:function(e){var t=Ge({},e.params);return t.id=+t.id,t}},{path:"*",props:!0,redirect:"/movies"}],mode:"history"});a("1f68"),a("4acb"),a("fc07"),i["default"].config.productionTip=!1,new i["default"]({store:X,router:$e,render:function(e){return e($)}}).$mount("#app")},6062:function(e,t,a){"use strict";var i=a("a5b7"),n=a.n(i);n.a},"64e2":function(e,t,a){},"6a88":function(e,t,a){},"94d5":function(e,t){},"9d87":function(e,t,a){},a5b7:function(e,t,a){},ad80:function(e,t,a){},bfbd:function(e,t,a){},ccfa:function(e,t,a){},cf19:function(e,t,a){},d27b:function(e){e.exports=JSON.parse('[{"popularity":625.548,"vote_count":1349,"video":false,"poster_path":"/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg","id":475557,"adult":false,"backdrop_path":"/pLO4qJdQxhAMPaFJu7q8bgme6R3.jpg","original_language":"en","original_title":"Joker","genre_ids":[80,18,53],"title":"Joker","vote_average":8.7,"overview":"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.","release_date":"2019-10-04"},{"popularity":105.318,"vote_count":613,"video":false,"poster_path":"/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg","id":429203,"adult":false,"backdrop_path":"/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg","original_language":"en","original_title":"The Old Man & the Gun","genre_ids":[35,80,18],"title":"The Old Man & the Gun","vote_average":6.3,"overview":"The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.","release_date":"2018-09-28"},{"popularity":189.551,"vote_count":4278,"video":false,"poster_path":"/lcq8dVxeeOqHvvgcte707K0KVx5.jpg","id":429617,"adult":false,"backdrop_path":"/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg","original_language":"en","original_title":"Spider-Man: Far from Home","genre_ids":[28,12,878],"title":"Spider-Man: Far from Home","vote_average":7.6,"overview":"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.","release_date":"2019-07-02"},{"popularity":227.539,"vote_count":1369,"video":false,"poster_path":"/zfE0R94v1E8cuKAerbskfD3VfUt.jpg","id":474350,"adult":false,"backdrop_path":"/8moTOzunF7p40oR5XhlDvJckOSW.jpg","original_language":"en","original_title":"It Chapter Two","genre_ids":[27],"title":"It Chapter Two","vote_average":7,"overview":"27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.","release_date":"2019-09-06"},{"popularity":147.383,"id":582083,"video":false,"vote_count":0,"vote_average":0,"title":"Kamen Rider Build NEW WORLD: Kamen Rider Grease","release_date":"2019-11-27","original_language":"ja","original_title":"仮面ライダービルドNEW WORLD　仮面ライダーグリス","genre_ids":[28,878,12],"backdrop_path":"/pGVMdzRF0vUosEu51fxMZsLZTqb.jpg","adult":false,"overview":"Deputy Officer of the United Nations Alliance, Simon Marcus, who aims to conquer the world with the terrorist organization Downfall along with the mad scientist Keiji Uraga, attack the Kamen Riders with overwhelming strength. It is only on Kamen Rider Grease that the enemy\'s abilities did not work. In order to defeat this new enemy and rescue Misora, Kazumi Sawatari must create a new item ... but it is told that it requires the  life of his friends, the Three Crows. The ultimate decision must be made.","poster_path":"/zm7VhkQgBP9PCqq4R9l3SQmhEIq.jpg"},{"popularity":113.377,"vote_count":140,"video":false,"poster_path":"/klkFYDZOetegK8floj6IjvbzzQ2.jpg","id":513045,"adult":false,"backdrop_path":"/xgfn98c2UzvFWP6MXDzytearmQ3.jpg","original_language":"en","original_title":"Stuber","genre_ids":[28,35,80,53],"title":"Stuber","vote_average":6.5,"overview":"After crashing his car, a cop who\'s recovering from eye surgery recruits an Uber driver to help him catch a heroin dealer. The mismatched pair soon find themselves in for a wild day of stakeouts and shootouts as they encounter the city\'s seedy side.","release_date":"2019-07-12"},{"popularity":134.044,"vote_count":375,"video":false,"poster_path":"/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg","id":522938,"adult":false,"backdrop_path":"/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg","original_language":"en","original_title":"Rambo: Last Blood","genre_ids":[28,53],"title":"Rambo: Last Blood","vote_average":6.1,"overview":"When John Rambo\'s niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn\'t return home as expected, John learns she\'s crossed into Mexico and sets out to get her back and make them pay.","release_date":"2019-09-20"},{"popularity":124.278,"vote_count":2513,"video":false,"poster_path":"/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg","id":301528,"adult":false,"backdrop_path":"/m67smI1IIMmYzCl9axvKNULVKLr.jpg","original_language":"en","original_title":"Toy Story 4","genre_ids":[12,16,35,14,10751],"title":"Toy Story 4","vote_average":7.6,"overview":"Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called \\"Forky\\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.","release_date":"2019-06-21"},{"popularity":123.295,"vote_count":1421,"video":false,"poster_path":"/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","id":384018,"adult":false,"backdrop_path":"/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"title":"Fast & Furious Presents: Hobbs & Shaw","vote_average":6.5,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson\'s US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham\'s Deckard Shaw.","release_date":"2019-08-02"},{"popularity":116.829,"vote_count":2820,"video":false,"poster_path":"/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg","id":458156,"adult":false,"backdrop_path":"/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg","original_language":"en","original_title":"John Wick: Chapter 3 - Parabellum","genre_ids":[28,80,53],"title":"John Wick: Chapter 3 - Parabellum","vote_average":7.1,"overview":"Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.","release_date":"2019-05-17"},{"popularity":118.391,"vote_count":3631,"video":false,"poster_path":"/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg","id":420817,"adult":false,"backdrop_path":"/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg","original_language":"en","original_title":"Aladdin","genre_ids":[12,35,14,10749,10751],"title":"Aladdin","vote_average":7.1,"overview":"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.","release_date":"2019-05-24"},{"popularity":122.158,"vote_count":85,"video":false,"poster_path":"/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg","id":453405,"adult":false,"backdrop_path":"/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg","original_language":"en","original_title":"Gemini Man","genre_ids":[28,878,53],"title":"Gemini Man","vote_average":6.2,"overview":"Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.","release_date":"2019-10-11"},{"popularity":121.658,"vote_count":8183,"video":false,"poster_path":"/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg","id":920,"adult":false,"backdrop_path":"/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg","original_language":"en","original_title":"Cars","genre_ids":[12,16,35,10751],"title":"Cars","vote_average":6.7,"overview":"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town\'s offbeat characters.","release_date":"2006-06-09"},{"popularity":78.333,"vote_count":2158,"video":false,"poster_path":"/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg","id":466272,"adult":false,"backdrop_path":"/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg","original_language":"en","original_title":"Once Upon a Time... in Hollywood","genre_ids":[35,18],"title":"Once Upon a Time... in Hollywood","vote_average":7.6,"overview":"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood\'s Golden Age in 1969 Los Angeles.","release_date":"2019-07-26"},{"popularity":75.32,"vote_count":252,"video":false,"poster_path":"/y9IcwcD95wCPR3IGbzlZ00f64Sj.jpg","id":540901,"adult":false,"backdrop_path":"/5GynP6w2OQWSbKnCLHrBIriF4Cw.jpg","original_language":"en","original_title":"Hustlers","genre_ids":[35,80,18],"title":"Hustlers","vote_average":6.2,"overview":"A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.","release_date":"2019-09-13"},{"popularity":71.194,"vote_count":699,"video":false,"poster_path":"/fpe0eG2TBLJLQiqlhhvaWIfixXz.jpg","id":419704,"adult":false,"backdrop_path":"/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg","original_language":"en","original_title":"Ad Astra","genre_ids":[12,18,878],"title":"Ad Astra","vote_average":6.2,"overview":"An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.","release_date":"2019-09-20"},{"popularity":86.47,"vote_count":2075,"video":false,"poster_path":"/cCTJPelKGLhALq3r51A9uMonxKj.jpg","id":320288,"adult":false,"backdrop_path":"/ojVQv3qO5dL9kA7pk9KxpMi0ANO.jpg","original_language":"en","original_title":"Dark Phoenix","genre_ids":[28,12,878],"title":"Dark Phoenix","vote_average":6.1,"overview":"The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she\'s hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey\'s new abilities to rule the galaxy.","release_date":"2019-06-07"},{"popularity":66.463,"vote_count":10958,"video":false,"poster_path":"/5vHssUeVe25bMrof1HyaPyWgaP.jpg","id":245891,"adult":false,"backdrop_path":"/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg","original_language":"en","original_title":"John Wick","genre_ids":[28,53],"title":"John Wick","vote_average":7.2,"overview":"Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.","release_date":"2014-10-24"},{"popularity":72.996,"vote_count":2729,"video":false,"poster_path":"/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","id":420818,"adult":false,"backdrop_path":"/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg","original_language":"en","original_title":"The Lion King","genre_ids":[28,12,16,18,10751],"title":"The Lion King","vote_average":7.1,"overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-19"},{"popularity":80.437,"vote_count":1409,"video":false,"poster_path":"/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg","id":479455,"adult":false,"backdrop_path":"/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg","original_language":"en","original_title":"Men in Black: International","genre_ids":[28,12,35,878],"title":"Men in Black: International","vote_average":5.9,"overview":"The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.","release_date":"2019-06-14"}]')},f64b:function(e,t,a){"use strict";var i=a("9d87"),n=a.n(i);n.a},f9a0:function(e,t,a){"use strict";var i=a("6a88"),n=a.n(i);n.a},fb28:function(e,t,a){"use strict";var i=a("cf19"),n=a.n(i);n.a},fc07:function(e,t,a){}});
//# sourceMappingURL=app.89950fd9.js.map