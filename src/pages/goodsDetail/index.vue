<template>
   <div>
     <view class="weui-uploader">
       <view class="weui-uploader__bd">
         <view class="weui-uploader__files detailImgParent " id="uploaderFiles" >
           <block>
             <image @click="clickImage(Images[0])" class="detailImg"  :src="Images[0]"  mode="aspectFill" />
           </block>
         </view>
       </view>
     </view>
     <!--缩略图-->
     <!--<thumbnailBig :imgDatas="imgData"></thumbnailBig>-->
     <!--下拉框-->
     <!--<picker @change="bindPickerChange" :value="index" :range="array">-->
       <!--<view class="picker">-->
         <!--当前选择：{{array[index]}}-->
       <!--</view>-->
     <!--</picker>-->
     <!--单选框-->
     <!--<radio-group class="radio-group" @change="radioChange">-->
       <!--<label class="radio" v-for="(item, index) in items" :key="item.name">-->
         <!--<radio :value="item.name" :checked="item.checked"/> {{item.value}}-->
       <!--</label>-->
     <!--</radio-group>-->
     <div>
       <div class="navbar">
         <block v-for="(item,index) in tabs" :key="index">
           <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
             <div class="navbar_title">{{item.name}}</div>
           </div>
         </block>
         <div class="navbar_slider" :class="navbarSliderClass"></div>
       </div>
       <div>
         <div :hidden="activeIndex != 0">选项一的内容</div>
         <div :hidden="activeIndex != 1">选项二的内容</div>
         <div :hidden="activeIndex != 2">选项三的内容</div>
       </div>
     </div>
   </div>
</template>
<script>
    import thumbnailBig from '@/components/thumbnail'
    export default {
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
              imgData:{
                  width:'100%'
              },
              index: 0,
              array: ['A', 'B', 'C'],
              items: [
                {name: 'USA', value: '美国'},
                {name: 'CHN', value: '中国', checked: 'true'},
                {name: 'BRA', value: '巴西'},
                {name: 'JPN', value: '日本'},
                {name: 'ENG', value: '英国'},
                {name: 'TUR', value: '法国'}
              ],
              tabs: [
                {
                  name: "选项卡1",
                  type: "1",
                  checked: true
                },
                {
                  name: "选项卡2",
                  type: "2",
                  checked: true
                },
                {
                  name: "选项卡3",
                  type: "3",
                  checked: true
                }
              ],
              activeIndex: 0,
            }
        },
      computed: {
        navbarSliderClass() {
          if (this.activeIndex == 0) {
            return "navbar_slider_0";
          }
          if (this.activeIndex == 1) {
            return "navbar_slider_1";
          }
          if (this.activeIndex == 2) {
            return "navbar_slider_2";
          }
        },
      },
        methods: {
          bindPickerChange (e) {
//            console.log(e.target.value)
            this.index=e.target.value
          },
          radioChange (e) {
            console.log('radio发生change事件，携带value值为：', e.target.value)
          },
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
          },
          tabClick(e) {
            this.activeIndex = e.currentTarget.id;
          }
        },
        mounted() {

        },

        created() {

        },
      components: {
        thumbnailBig
      },
    }
</script>
<style scoped>
.detailImgParent{
  width: 100%;
  height: 400rpx;
}
.detailImg{
    width: 100%;
    height: 100%;
  }
.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
}

.swiper-item {
  height: 100%;
  text-align: center;
}

.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 500;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #298de5;
  border-bottom: 1rpx solid #ccc;
}

.navbar_item {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 13px 0;
  text-align: center;
  font-size: 0;
}

.navbar_item .navbar_item_on {
  color: white;
}

.navbar_title {
  color: white;
  font-weight: 500;
  display: inline-block;
  font-size: 15px;
  max-width: 8em;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  bottom: 0;
  width: 6em;
  height: 3px;
  background-color: white;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 29rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}

.navbar_slider_2 {
  left: 29rpx;
  transform: translateX(500rpx);
}
.controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 8888;
  top: 80;
  height: 50px;
  width: 100%;
  background-color: #298de5;
}
</style>
