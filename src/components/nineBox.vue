<template>

    <div class="box-wrap" >
      <div class="box" v-for="(item,index) in PageItems" :key="index">
        <!--<a :href="item.route">-->
        <a>
          <p> <img :src="item.icon" alt="" class="img"></p>
          <p class="iconText">{{item.text}}</p>
        </a>
      </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
              PageItems :
                [
                  {
                    text: '美食',
                    icon: '../../static/images/icon-guzhang.png',
//                    route: '../../pages/logs/main',
                  },
                  {
                    text: '电影猫眼',
                    icon: '../../static/images/icon-huikushenqing.png',
//                    route: '../../pages/logs/main',
                  },
                  {
                    text: '住宿酒店',
                    icon: '../../static/images/icon-iconfontjinru-copy.png',
//                    route: '../c3/c3',
                  },
                  {
                    text: '休闲娱乐',
                    icon: '../../static/images/icon-linshixinxi.png',
//                    route: '../c4/c4',
                  },
                  {
                    text: '外卖',
                    icon: '../../static/images/icon-maintain.png',
//                    route: '../c5/c5',
                  },
                  {
                    text: 'KTV',
                    icon: '../../static/images/icon-peisong.png',
//                    route: '../c6/c6',
                  },
                  {
                    text: '丽人',
                    icon: '../../static/images/icon-project-progress.png',
//                    route: '../c7/c7',
                  },
                  {
                    text: '景点门票',
                    icon: '../../static/images/icon-renwu2.png',
//                    route: '../c8/c8',
                  },
                  {
                    text: '火车票',
                    icon: '../../static/images/icon-rixunxinxi.png',
//                    route: '../c9/c9',
                  },
                  {
                    text: '民宿/公寓',
                    icon: '../../static/images/icon-shebeixinxi-copy.png',
//                    route: '../c9/c9',
                  }
                ]
            }
        },
        methods: {
        },
        mounted() {

        },

        created() {

        }
    }
</script>
<style scoped>
  .box-wrap {
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin: 30rpx  10rpx;
  }

  .box-wrap>div {
    width: 17%;
    /*padding-bottom: 31%;*/
    margin: 1.5%;
    margin-bottom: 2%;
    border-radius: 10%;
    float: left;
    /*background-color: orange;*/
    height: 120rpx;
  }
  .img{
    width: 80rpx;
    height:80rpx;
  }
  .iconText{
    font-size: 28rpx;
    color: #A1A4A4;
  }
</style>
