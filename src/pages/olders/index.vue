<template>
  <div>
    <div class="olderCell">
      <div class="olderCellLeft">
        <span>
          <img class="olderCellImg" src="/static/images/icon-linshixinxi.png" alt="">
        </span>
        <span>2222</span>
      </div>
      <div>待评价</div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data () {
    return {
      logs: []
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

}
.olderCellImg{
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
  }
</style>
