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
              ]
            }
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
</style>
