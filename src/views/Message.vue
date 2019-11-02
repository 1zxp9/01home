<template>
  <div>
      <van-nav-bar
  title="消息中心"
  left-arrow
  @click-left="onClickLeft"
 
/>
<van-cell-group>
  <van-icon name="../../static/img/通知.jpg" />
  <van-cell title="通知信息" label="描述信息" />
   <van-icon name="../../static/img/dsad.jpg" />
  <van-cell title="通知信息" label="描述信息" />
   <van-icon name="../../static/img/vdfa.jpg" />
  <van-cell title="通知信息" label="描述信息" />
</van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Message',
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
.van-nav-bar .van-icon{
    color:#cecece
}
.van-icon__image{
    font-size:40px;
    position: absolute;
    top:15px;
    left:15px;
    z-index: 2;
}
.van-cell{
    /* position: relative; */
}
.van-cell__title{
    padding-left:60px;
}
</style>
