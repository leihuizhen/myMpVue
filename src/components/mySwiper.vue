<template>
  <div>
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor">
      <swiper-item v-for="(item,index) in imgUrls" :key="index">
        <image :src="item" class="slide-image" width="100%" height="500"/>
      </swiper-item>
    </swiper>
    <!--<button @bindtap="changeIndicatorDots"> indicator-dots </button>-->
    <!--<button @bindtap="changeAutoplay"> autoplay </button>-->
    <!--<slider @bindchange="intervalChange" show-value min="500" max="2000"/> interval-->
    <!--<slider @bindchange="durationChange" show-value min="1000" max="10000"/> duration-->
  </div>

</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,  //是否显示指示灯
        autoplay: true,//是否自动轮播
        interval: 2000,
        duration: 1000,
        indicatoractivecolor:'#ffffff', //指示灯颜色
        circular:true,  //是否衔接滑动
      }
    },

    components: {
      card
    },

    methods: {
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({url})
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      },
      changeIndicatorDots: function(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        })
      },
      changeAutoplay: function(e) {
        this.setData({
          autoplay: !this.data.autoplay
        })
      },
      intervalChange: function(e) {
        this.setData({
          interval: e.detail.value
        })
      },
      durationChange: function(e) {
        this.setData({
          duration: e.detail.value
        })}
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  .slide-image {
    width: 100%;
    height: 100%;
  }

</style>
