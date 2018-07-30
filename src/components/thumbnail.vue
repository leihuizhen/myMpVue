<template>
  <div>
    <view class="weui-uploader">
      <!--<view class="weui-uploader__hd">-->
      <!--<view class="weui-uploader__title">图片列表</view>-->
      <!--</view>-->

      <view class="weui-uploader__bd">
        <view class="weui-uploader__files imageParent" id="uploaderFiles" >
          <block v-for=" (item,index) in  Images" :key="index" >
            <image @click="clickImage(item)"  :src="item"  mode="aspectFill" />
          </block>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
  export default {
    props:["imgDatas"],
    data() {
      return {
        Images:[
          "http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg",
          "http://img02.tooopen.com/images/20150507/tooopen_sy_122395947985.jpg",
          "http://img3.imgtn.bdimg.com/it/u=633577398,100638800&fm=214&gp=0.jpg",
          "http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
          "http://pic17.nipic.com/20111022/8575840_114126243000_2.jpg",
          "http://pic9.photophoto.cn/20081229/0034034829945374_b.jpg",
          "http://pic11.photophoto.cn/20090415/0020032851022998_b.jpg",
          "http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg",
        ],
        Images1:[ "http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg"]
      }
    },
    methods: {
      clickImage: function (item) {  //item  点击当前图片的src
//        let current = e.target.dataset.src;
        wx.previewImage({
          current: item,
          urls: this.Images,//内部的地址为绝对路径
          fail: function() {
            console.log('fail')
          },
          complete: function () {
            console.info("点击图片了");
          },
        })
      }
    },
    mounted() {

    },

    created() {

    }
  }
</script>
<style scoped>
  .imageParent{
    width: 100%;
    /*height: 200rpx;*/
    display: flex;
    flex-wrap:wrap;
    margin-left: 24rpx;
  }
  .imageParent image{
    width: 160rpx;
    height: 160rpx;
    margin-right: 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
</style>
