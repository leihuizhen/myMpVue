<template>
   <div>
     <ul>
       <li class="listItem" v-for="(item,index) in items"  :key="index" @click="goGoodsDetail">
         <div class="itemchild bottom-1px">
           <div class="imgBox"><img :src="item.img" alt=""></div>
           <div style="width: 480rpx">
             <p class="itemF">
               <span class="itemTitle">合肥万达主题乐园</span>
               <span class="itemAddress">步行街</span>
             </p>
             <p class="itemS">4.2 | 14091人评论</p>
             <p class="itemS">门票、套餐、线路游 等优惠</p>
             <p class="itemF"> <span class="itemMoney">¥98</span><span class="itemAddress">已售66981</span> </p>
           </div>
         </div>
       </li>
     </ul>

   </div>


</template>
<script>
  export default {
    data() {
      return {
          img:'https://goss.veer.com/creative/vcg/veer/800water/veer-141022408.jpg',
          items:[
              {
              img:'https://goss.veer.com/creative/vcg/veer/800water/veer-141022408.jpg',
              itemTitle:'合肥万达主题乐园',
              itemAddress:'步行街',
              evaluate:'4.2 | 14091人评论',
              discount:'门票、套餐、线路游 等优惠',
              price:'98',
              sold:'66981'
          },
          {
            img:'https://goss.veer.com/creative/vcg/veer/800water/veer-141022401.jpg',
            itemTitle:'合肥万达主题乐园',
            itemAddress:'商业街',
            evaluate:'4.2 | 14091人评论',
            discount:'门票、套餐、线路游 等优惠',
            price:'48',
            sold:'66121'
          },

        {
          img:'https://goss.veer.com/creative/vcg/veer/800water/veer-141022408.jpg',
          itemTitle:'合肥万达主题乐园',
          itemAddress:'步行街',
          evaluate:'4.2 | 14091人评论',
          discount:'门票、套餐、线路游 等优惠',
          price:'98',
          sold:'66981'
        },
        {
          img:'https://goss.veer.com/creative/vcg/veer/800water/veer-141022401.jpg',
          itemTitle:'合肥万达主题乐园',
          itemAddress:'商业街',
          evaluate:'4.2 | 14091人评论',
          discount:'门票、套餐、线路游 等优惠',
          price:'48',
          sold:'66121'
        }
          ]
      }
    },
    methods: {
      goGoodsDetail() {
        const url = '../goodsDetail/main'
        wx.navigateTo({url})
      }
    },
    mounted() {

    },

    created() {

    }
  }
</script>
<style scoped>
  .listItem{
    padding:0 20rpx ;

  }
  .itemchild{
    padding:20rpx 0;
    display: flex;
  }
.imgBox{
  width: 200rpx;
  height: 200rpx;
  border-radius: 10rpx;
  margin-right: 20rpx;
}
.imgBox img{
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}
  .itemTitle{
    width: 300rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #333333;
    font-size: 36rpx;
  }
  .itemF{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5rpx;
  }
  .itemAddress{
    font-size: 24rpx;
    color: #A1A4A4;
  }
  .itemS{
    font-size: 24rpx;
    color: #A1A4A4;
    margin-bottom: 5rpx;
  }
  .itemMoney{
    color: red;
    font-size: 36rpx;
  }
</style>
