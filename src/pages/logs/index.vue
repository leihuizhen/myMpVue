<template>
  <div>
    <!--用户信息-->
     <div class="userTop">
       <span><img class="userPic" src="http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg" alt=""></span>
       <span class="userName">用户微信号</span>
     </div>
    <div class="line"></div>
    <div class="cell"  v-for="(item,index) in items" :key="index">
      <div class="cellItem bottom-1px">
        <div class="cellLeft">
          <img :src="item.src" alt=""> <span class="cellTitle">{{item.name}}</span>
        </div>
        <div class="cellRight">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data () {
    return {
      logs: [],
      items:[
          { name:'我的订单',src:'/static/images/icon-peisong.png'},
          { name:'我的收藏',src:'/static/images/icon-iconfontjinru-copy.png'},
          { name:'我的券包',src:'/static/images/icon-maintain.png'},
          { name:'我的抽奖',src:'/static/images/icon-project-progress.png'},
          { name:'客服电话：8888888',src:'/static/images/icon-renwu2.png'},
      ]
    }
  },
  created () {

  }
}
</script>

<style scoped>
 .userTop{
    height: 160rpx;
    display: flex;
    align-items: center;
    margin-left: 30rpx;
  }
 .userPic{
     width: 100rpx;
     height: 100rpx;
     border-radius: 50%;
     margin-right: 30rpx;
 }
 .userName{
   font-size: 36rpx;
 }
  .line{
     width: 100%;
     height: 20rpx;
     background: #f5f5f5;
  }
  .cell{
    padding-left: 20rpx;
    padding-right: 20rpx;
    height: 100rpx;
  }
  .cellItem{
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding-left: 10rpx;
    padding-right: 10rpx;
  }
 .cellLeft{
   display: flex;
   flex-direction: row;
   align-items: center;
 }
 .cellLeft  img{
    width: 50rpx;
    height:50rpx;
    margin-right: 20rpx;
  }
  .cellRight{
    position: relative;
  }
 .cellRight::after{
   content: " ";
   display: inline-block;
   height: 12rpx;
   width: 12rpx;
   border-width:4rpx 4rpx 0 0;
   border-color: #C8C8CD;
   border-style: solid;
   -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
   transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
   position: absolute;
   top: 50%;
   margin-top: -4px;
   right: 2px;
 }
  .cellTitle{
      font-size: 30rpx;
  }
</style>
