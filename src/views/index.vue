<template>
  <div>

    <!-- <van-sticky>
  <van-search
  v-model="value"
  placeholder="请输入商品名称"
  show-action
  shape="round"
  @click="onSearch" 
>
  <div slot="action" @click="onClickRight"><van-icon name="chat-o"/></div>
</van-search>
</van-sticky> -->
   

<div id="container">

        <router-view @toparent="getval"></router-view>
    </div>




<van-tabbar
  v-model="active"
  active-color="orange"
  inactive-color="#000"
>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/Classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/Cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/My">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
        value:"",
        active:""
    };
  },
  methods: {
      getval(){

      },
      onClickRight(){
        this.$router.push("/Message")
      },
      onSearch(){
          this.$router.push("/Search")
      }
  },
};
</script>

<style scoped>
/* .van-search--show-action{
  position: fixed;
  top:0;
  z-index: 1;
  width:100%
} */
.van-icon-chat-o{
    font-size:22px;
    position: relative;
    top:4px
}
#container{
    margin-top: 0px;
    margin-bottom: 50px;
  }
</style>
