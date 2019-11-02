<template>
  <div class="bod">
      <van-sticky>
         <van-nav-bar
  title="品牌国货"
  right-text="..."
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</van-sticky>
<div class="box">
    <img src="../../static/img/lianyi.jpg" alt="" class="lianyi">
    <img src="../../static/img/pingpai.jpg" alt="" class="tubiao">  
    <h4 class="hh4">恋邑</h4>
    <p class="p1">当爱情的思念寄托于手中的针线,让心爱的啥玩意</p>  
    <van-button type="default" class="biankuang">进入品牌</van-button>
    <van-row type="flex" justify="space-around" class="list">
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健机读卡角度看撒打算时空大</p>
    <p><span class="price1">￥119</span></p> 
  </van-col>
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健康的</p>
    <p><span class="price1">￥119</span></p>
  </van-col>
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健康的</p>
    <p><span class="price1">￥119</span></p>
  </van-col>
</van-row>
</div>
<div class="box">
    <img src="../../static/img/lianyi.jpg" alt="" class="lianyi">
    <img src="../../static/img/pingpai.jpg" alt="" class="tubiao">  
    <h4 class="hh4">恋邑</h4>
    <p class="p1">当爱情的思念寄托于手中的针线,让心爱的啥玩意</p>  
    <van-button type="default" class="biankuang">进入品牌</van-button>
    <van-row type="flex" justify="space-around" class="list">
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健机读卡角度看撒打算时空大</p>
    <p><span class="price1">￥119</span></p> 
  </van-col>
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健康的</p>
    <p><span class="price1">￥119</span></p>
  </van-col>
   <van-col span="12" class="list1">
    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
    <p>对萨科肌肤健康的</p>
    <p><span class="price1">￥119</span></p>
  </van-col>
</van-row>
</div>
  </div>
</template>

<script>
export default {
  name: 'More',
  data() {
    return {
    };
  },
  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
      onClickRight(){
        
      }
  },
};
</script>

<style scoped>
.bod{
    background: #f5f4f9
}
.van-icon{
    color:black
}
.van-nav-bar__text{
    color:black
}
.box{
    position: relative;
    background: #ffffff;
    width:350px;
    margin-left:13px;
    border-radius: 7px;
    margin-top:20px;
    height:315px
}

.lianyi{
    width:350px
}
.tubiao{
    width:50px;
    position: absolute;
    top:135px;
    left:15px
}
.hh4,.p1{
  margin:0
}
.hh4{
    text-indent: 70px;
    margin-top:10px
}
.p1{
    text-indent: 70px;
    width:270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:10px
}
.biankuang{
    height: 30px;
    line-height: 30px;
    width:80px;
    font-size:12px;
    border-radius: 30px;
    position: absolute;
    right:15px;
    bottom:145px
}
.list{
   position: relative;
   top:20px;
   text-align: center
}
.list1{
  background: #ffffff;
  /* text-align: center; */
  width:120px;
  height:120px;
  margin-bottom: 5px
}
.list1 img{
  width:60px;
  height:60px;
 margin-left:13px
}
.list1 p{margin:0}
.list1 p:nth-child(2){
padding-left:5px;
font-weight: 600;
font-size:12px;
height:20px;
width:112px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
position: relative;
top:5px
}
.price1{
  color:#ff5a00;
  font-size:16px;
}
</style>
