(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729dfc3c"],{9694:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t.information?n("scroll",{ref:"raceScroll",staticClass:"scroll",attrs:{"scroll-x":"","probe-type":3,click:"",pullUpLoad:""},on:{pullingUp:t.pullingUp}},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"fs13"},t._l(t.information,(function(i,e){return n("li",{key:i._id,style:t.currentNavIndex===e?{"border-color":"#d59b40",color:"#d59b40"}:{},on:{click:function(i){return t.navClick(e)}}},[t._v(t._s(i.name))])})),0)]),n("swiper",{ref:"raceSwiper",attrs:{options:{autoHeight:!0}},on:{"slide-change":t.slideChange}},t._l(t.information,(function(i){return n("swiper-slide",{key:i._id},[n("div",{staticClass:"race_content"},[n("p",[n("span",{staticClass:"race_title"},[t._v(t._s(i.desc))]),n("span",{staticClass:"race_type fs12"},[t._v("官方举办")])]),n("img",{attrs:{src:i.img}}),n("p",{staticClass:"news"},[t._v("赛事资讯")]),n("ul",{staticClass:"information_list"},t._l(i.information_list,(function(i){return n("li",{key:i._id},[n("a",{attrs:{href:i.url}},[n("span",{staticClass:"i_title t-ellipsis fs14 fc-3"},[t._v(t._s(i.title))]),n("span",{staticClass:"i_time r"},[t._v(t._s(i.date))])])])})),0),n("h3",{staticClass:"load-more t-center fs13"},[t._v(t._s(t.isSeeMore?"已显示全部内容":t.isLoding?"加载中...":"上拉加载更多"))])])])})),1)],1)]):t._e()],1)},s=[],r=n("2909"),a=(n("96cf"),n("1da1")),o=n("1bab");function l(t){return Object(o["a"])({url:"/race/information",params:t})}var c=n("d917"),h=n("5d17"),u={name:"Race",components:{Card:c["a"],Scroll:h["a"]},computed:{scroll:function(){return this.$refs.raceScroll.scroll}},data:function(){return{information:null,currentNavIndex:0,pageNum:1,isSeeMore:!1,isLoding:!1}},methods:{getInformation:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:if(i=t.sent,i){t.next=5;break}return t.abrupt("return");case 5:this.information=i.data;case 6:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),navClick:function(t){this.$refs.raceSwiper.swiper.slideTo(t),this.currentNavIndex=t,this.information[this.currentNavIndex].information_list.length>50?(this.pageNum=5,this.isSeeMore=!1):this.information[this.currentNavIndex].information_list.length<=50&&this.information[this.currentNavIndex].information_list.length>40?(this.pageNum=4,this.isSeeMore=!1,this.scroll.finishPullUp()):this.information[this.currentNavIndex].information_list.length<=30&&this.information[this.currentNavIndex].information_list.length>20?(this.pageNum=3,this.isSeeMore=!1,this.scroll.finishPullUp()):this.information[this.currentNavIndex].information_list.length<=20&&this.information[this.currentNavIndex].information_list.length>10?(this.pageNum=2,this.isSeeMore=!1,this.scroll.finishPullUp()):(this.pageNum=1,this.isSeeMore=!1,this.scroll.finishPullUp())},slideChange:function(){this.currentNavIndex=this.$refs.raceSwiper.swiper.realIndex,this.information[this.currentNavIndex].information_list.length>50?(this.pageNum=5,this.isSeeMore=!1):this.information[this.currentNavIndex].information_list.length<=50&&this.information[this.currentNavIndex].information_list.length>40?(this.pageNum=4,this.isSeeMore=!1,this.scroll.finishPullUp()):this.information[this.currentNavIndex].information_list.length<=30&&this.information[this.currentNavIndex].information_list.length>20?(this.pageNum=3,this.isSeeMore=!1,this.scroll.finishPullUp()):this.information[this.currentNavIndex].information_list.length<=20&&this.information[this.currentNavIndex].information_list.length>10?(this.pageNum=2,this.isSeeMore=!1,this.scroll.finishPullUp()):(this.pageNum=1,this.isSeeMore=!1,this.scroll.finishPullUp())},pullingUp:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.scroll.refresh(),this.isLoding=!0,t.next=4,l({id:this.information[this.currentNavIndex]._id,pageNum:this.pageNum});case 4:if(n=t.sent,this.isLoding=!1,n){t.next=8;break}return t.abrupt("return",this.scroll.finishPullUp());case 8:if(0!==n.data.length){t.next=10;break}return t.abrupt("return",this.isSeeMore=!0);case 10:(i=this.information[this.currentNavIndex].information_list).push.apply(i,Object(r["a"])(n.data)),this.scroll.refresh(),this.scroll.finishPullUp(),this.pageNum++;case 14:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},created:function(){this.getInformation()}},f=u,p=(n("af82"),n("2877")),m=Object(p["a"])(f,e,s,!1,null,"0a188f6a",null);i["default"]=m.exports},af82:function(t,i,n){"use strict";var e=n("decb"),s=n.n(e);s.a},decb:function(t,i,n){}}]);
//# sourceMappingURL=chunk-729dfc3c.3f5d091f.js.map