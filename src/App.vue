<script>
//  import  formatTimes from './utils/index'
export default {
  created () {

    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync');
//    console.log(formatTimes.formatTime(new Date()));
//    console.log(formatTimes.formatNumber(1000))
//    get 请求正确
    console.log(this.$net.get('http://10.238.100.75:3000/123',""));
//    post  请求
    console.log(this.$net.post('http://10.238.100.75:3000/234',{'name':'1','gender':'2'}))
//    wx.request({
//      url: 'http://10.238.100.75:3000/234',
//      method: "post",
//      data:{'name':'1','gender':'2'},
//      header: {
//        'content-type': 'application/x-www-form-urlencoded'
//      },
//      success: (res) => {
//         console.log(res);
//
//      }
//    })

  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
