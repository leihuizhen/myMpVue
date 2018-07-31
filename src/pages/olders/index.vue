<template>
  <div>
    <div class="olderCell" v-for="(item,index) in olders" :key="index" >
      <div class="olderCellLeft">
        <span class="olderImg">
          <img class="olderCellImg" :src="item.img" alt="">
        </span>
        <span>
          <p class="olderTitle">{{item.title}}</p>
          <p class="olderCon">数量:{{item.number}}</p>
          <p class="olderCon">总价:¥{{item.price}}</p>
        </span>
      </div>
      <div class="evaluate">{{item.type}}</div>
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
      olders:[
          {
            img:'http://file06.16sucai.com/2016/0628/dc1926d92d297e9215af41292973dfc0.jpg',
            title:'迪信通手机贴膜',
            type:'已评价',
            number:'2',
            price:'12.32'
          },
        {
          img:'http://img17.3lian.com/d/file/201702/25/223aae32600128c5e1f39372e26f707e.jpg',
          title:'肯德基香辣鸡腿堡',
          type:'待评价',
          number:'18',
          price:'122.82'
        },
        {
          img:'http://www.xmxdfpr.com/uploads/allimg/160203/1_160203090608_1.jpg',
          title:'4人午餐晚餐自助',
          type:'已退款',
          number:'5',
          price:'522.82'
        },
        {
          img:'http://file06.16sucai.com/2016/0628/dc1926d92d297e9215af41292973dfc0.jpg',
          title:'迪信通手机贴膜',
          type:'已评价',
          number:'2',
          price:'12.32'
        },
        {
          img:'http://img17.3lian.com/d/file/201702/25/223aae32600128c5e1f39372e26f707e.jpg',
          title:'肯德基香辣鸡腿堡',
          type:'待评价',
          number:'18',
          price:'122.82'
        },
        {
          img:'http://www.xmxdfpr.com/uploads/allimg/160203/1_160203090608_1.jpg',
          title:'4人午餐晚餐自助',
          type:'已退款',
          number:'5',
          price:'522.82'
        },
          ]
    }
  },

  created () {

  }
}
</script>

<style scoped>
.olderCell{
  display: flex;
  justify-content: space-between;
  margin: 0 30rpx;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1px solid #f5f5f5;
}
.olderCellLeft{
 display: flex;
}
.olderImg{
  margin-right: 30rpx;

}
.olderCellImg{
    width: 100rpx;
    height: 100rpx;
    vertical-align: middle;
    border-radius: 10rpx;
  }
  .evaluate{
    font-size: 28rpx;
    color: #79CCC9;
  }
  .olderTitle{
    font-size: 36rpx;
  }
  .olderCon{
    font-size: 28rpx;
    color: #A1A4A4;
  }
</style>
