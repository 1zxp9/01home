<template>
  <div>
      <van-icon name="arrow-left" @click="back()" />
      <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">取消</div>
</van-search>
<van-divider />
<div>
    <h2>热门搜索</h2>
    <div class="remen">
        <a href="">收纳</a>
        <a href="">迪士尼</a>
        <a href="">迪士尼</a>
        <a href="">迪士尼</a>
        <a href="">迪士尼</a>
         <a href="">收纳</a>
        <a href="">收纳</a>
        <a href="">收纳</a>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
        value:""
    };
  },
  methods: {
      onSearch(){

      },
      back(){
        this.$router.go(-1)
      }
  },
};
</script>

<style scoped>
.van-icon-arrow-left{
    position: absolute;
    top:20px;
    left:16px
}
.van-search--show-action{
   
   padding-left:50px
}
.van-divider{
    position: relative;
    top:0px;
    margin:0
}
h2{
    padding-left:15px;
    margin:0;
    margin-top:10px;
    font-size:14px
}
.remen a{
    display: inline-block;
    border-radius: 10px;
    background: #cecece;
    width:40px;
    height:25px;
    text-align: center;
    line-height: 25px;
    padding:0  10px;
   margin-left:10px;
   margin-top:20px
}
</style>
