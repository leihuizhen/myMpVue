<template>
  <div>
    <!--轮播图-->
    <mySwiper></mySwiper>
    <!--九宫格-->
    <nineBox></nineBox>
    <div class="line"></div>
    <div class="bottom-1px youLove">- 猜你喜欢 -</div>
    <!--列表-->
     <mylist></mylist>
  </div>
</template>

<script>
  import mySwiper from '@/components/mySwiper'
  import nineBox from '@/components/nineBox'
  import mylist from '@/components/mylist'
  export default {
    data () {
      return {}
    },

    components: {
      mySwiper,
       nineBox,
      mylist
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
    },
    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128 rpx;
    height: 128 rpx;
    margin: 20 rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .line{
    width: 100%;
    height: 20rpx;
    background: #f5f5f5;
  }
  .youLove{
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 30rpx;
    color: #A1A4A4;
  }
</style>
