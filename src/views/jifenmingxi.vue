<template>
  <div class="box">
      <van-sticky>
          <van-nav-bar
  title="积分明细"
  left-arrow
  @click-left="onClickLeft"
/>
</van-sticky>
<van-panel title="签到获得积分" desc="2019-10-30  09:14:17" status="+10" class="jifen">
</van-panel>
<van-panel title="签到获得积分" desc="2019-10-30  09:14:17" status="+10" class="jifen">
</van-panel>
<van-panel title="签到获得积分" desc="2019-10-30  09:14:17" status="+10" class="jifen">
</van-panel>
  </div>
</template>

<script>
export default {
  name: 'Jifenmingxi',
  data() {
    return {
    };
  },
  methods: {
      onClickLeft(){
          this.$router.go(-1)
      }
  },
};
</script>

<style scoped>
.van-icon{
    color:black
}
.jifen {
    margin-top:5px
}
.box{
    background: #f5f4f9;
    height:667px
}
</style>
