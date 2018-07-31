import Vue from "vue";
import App from "./App";

import net from './utils/net';//导入封装好的net
Vue.prototype.$net=net;//微信小程序网络请求的配置
//引入公共样式
import  '../static/css/common.css'
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/olders/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '仿美团',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "selectedColor": "#EC5428",
      "list": [{
        "pagePath": "pages/index/main",
        "text": "首页",
        "iconPath": "./static/images/homeNot.png",
        "selectedIconPath": "./static/images/homeYes.png"
      },
        {
          "pagePath": "pages/olders/main",
          "text": "订单",
          "iconPath": "./static/images/houseNot.png",
          "selectedIconPath": "./static/images/houseYes.png"
        },
        {
          "pagePath": "pages/logs/main",
          "text": "我的",
          "iconPath": "./static/images/mineNot.png",
          "selectedIconPath": "./static/images/mineYes.png"
        }

      ]
    }
  }
}
