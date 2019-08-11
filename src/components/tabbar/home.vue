<template>
    <div class=''>
      <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
    <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>
 <ul class="mui-table-view mui-grid-view mui-grid-9">
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-home"></span>
	  <div class="mui-media-body">新闻资讯</div></a></li>
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-email"></span>
	  <div class="mui-media-body">图片分享</div></a></li>
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-chatbubble"></span>
	  <div class="mui-media-body">商品购买</div></a></li>
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-location"></span>
	  <div class="mui-media-body">留言反馈</div></a></li>
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-search"></span>
	  <div class="mui-media-body">视频专区</div></a></li>
	 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	  <span class="mui-icon mui-icon-phone"></span>
	  <div class="mui-media-body">联系我们</div></a></li>
</ul>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      lunbotuList: [] // 保存轮播图的数组
    }
  },
  created () {
    this.getlunbotu ();
  },
  methods: {
    getlunbotu () {
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
        console.log(result)
        this.lunbotuList = result.data.message
      })
    }
  }
}
</script>
<style scoped>
 .mint-swipe{
   height: 200px
 }
 .mint-swipe-item img{
    width: 100%;
    height: 100%;
 }
 .mui-grid-view.mui-grid-9 {
   background-color: #fff;
   border: none;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border: 0;
 }
</style>
