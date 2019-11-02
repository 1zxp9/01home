<template>
  <div>
      <van-sticky>
  <van-search
  v-model="value"
  placeholder="请输入商品名称"
  show-action
  shape="round"
  @click="onSearch" 
>
  <div slot="action" @click="onClickRight"><van-icon name="chat-o"/></div>
</van-search>
</van-sticky>
    <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
  <van-swipe-item><img src="https://img.alicdn.com/tfs/TB19MkokV67gK0jSZPfXXahhFXa-520-280.jpg_q90_.webp" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://img.alicdn.com/tfs/TB1FYmMk7T2gK0jSZFkXXcIQFXa-520-280.png_q90_.webp" alt=""></van-swipe-item>
</van-swipe>
<van-grid>
  <van-grid-item icon="../../static/img/vdsa.jpg" text="领卷中心"  @click="btn()"/>
  <van-grid-item icon="../../static/img/vdfsrg.jpg" text="9.9包邮" @click="free()"/>
  <van-grid-item icon="../../static/img/reqeq.jpg" text="首家自营" @click="self()"/>
  <van-grid-item icon="../../static/img/fsegreh.jpg" text="积分兑换" @click="Exchange()"/>
</van-grid>
<div>
  <!-- <div><h4><span style="color:orange">发现</span>好货</h4><h5>发现理想生活</h5></div> -->
   <van-row type="flex" class="nav">
     <van-col span="6"  style="font-size:18px;margin-left:15px"><span style="color:orange">发现</span>好货</van-col>
     <van-col span="6" style="font-size:14px">发现理想生活</van-col>
   </van-row>
   <van-row type="flex" justify=" "  class="daisen">
     <van-col span="6" class="daisen1">
       <p class="he">创造中国高端器皿</p>
       <p class="ha">卷后价:3690元</p>
       <p>GO</p>
     </van-col>
      <van-col span="6" class="daisen2">
        <van-row type="flex" justify="space-between" class="conglin" >
           <van-col span="6" class="conglin1">
             <p class="hei">丛林卷纸</p>
             <p class="ha">满60减30</p>
             <p>GO</p>
           </van-col>
           <van-col span="6" class="conglin2">
             <p class="hei">丛林卷纸</p>
             <p class="ha">满60减30</p>
             <p>GO</p>
           </van-col>
        </van-row>
      </van-col>
   </van-row>
</div>

<div>
  <van-row type="flex" class="nav">
     <van-col span="6"  style="font-size:18px;margin-left:15px"><span style="color:orange">品质</span>国货</van-col>
     <van-col span="6" style="font-size:14px;width:200px">做中国最有品质的好产品！</van-col>
      <van-col span="8" style="text-align:right" @click="gengduo()">更多<van-icon name="arrow" /></van-col>
     
   </van-row>

<van-row  class="lian">
  <van-col span="8" class="lian1">
    <!-- <p class="hello">Le`Anna</p>
    <p class="hi">创造中国高端器皿</p> -->
  </van-col>
  <van-col span="8" class="lian2">
    <p class="hello">东方之家</p>
    <p class="hi">创造中国高端器皿</p>
  </van-col>
</van-row>
<van-row gutter="" class="dong">
  <van-col span="8" class="dong1">
    <p class="hello">东方之家</p>
    <p class="hi">创造中国高端器皿</p>
  </van-col>
  <van-col span="8" class="dong1">
   <p class="hello">东方之家</p>
    <p class="hi">创造中国高端器皿</p>
  </van-col>
  <van-col span="8" class="dong1">
    <p class="hello">东方之家</p>
    <p class="hi">创造中国高端器皿</p>
  </van-col>
</van-row>

</div>
<div>
<van-row type="flex" class="nav">
     <van-col span="6"  style="font-size:18px;margin-left:15px"><span style="color:orange">好货</span>不贵</van-col>
     <van-col span="6" style="font-size:14px;width:170px">你想要的，都在这里</van-col>
   </van-row>
<van-row type="flex" justify="space-between" class="list">
  <van-col span="12" class="list1"  v-for="(item,i) in list"  :key="i">
    <img :src="item.coverImg" alt="">
    <p class="name">{{item.name}}</p>
    <p><span class="price1">￥{{item.price}}</span><span class="price2">￥{{item.price}}</span></p>
    <p>100.0%好评</p>
  </van-col>
  
</van-row>

</div>
  </div>
</template>

<script>
import * as api from '../api/getProlist.js'
export default {
  name: 'Home',
  data() {
    return {
      list:[],
      value:"",
    };
  },
  methods: {
    btn(){
      this.$router.push("/Vouchercenter")
    },
    free(){
      this.$router.push("/Freeshpping")
    },
    self(){
      this.$router.push("/Selfsupport")
    },
    Exchange(){
      this.$router.push("/Exchange")
    },
    gengduo(){
      this.$router.push("/More")
    },
    onSearch(){

    },
    onClickRight(){
      
    }
  },
  mounted() {
    api.getProducts({per:6,page:1,name:""})
    .then((data)=>{
      console.log(data.data.products)
      this.list=data.data.products
      // for(let item in this.list){
      //   console.log(item)
      // }
    })
  },
};
</script>

<style scoped>
.lunbo img{
  width:100%
}
.van-swipe-item{
  background: red;
  
}
.van-swipe{
  height:150px
}
.nav{
  height:40px;
  line-height: 40px
}
.daisen{
  height:160px;
  border-top:1px solid #cecece
}
.daisen p{
  margin:0;
  margin-left:10px
}
.he{
  font-size:18px
}
.hei{
  font-size:16px
}
.daisen1{
  padding-top:10px;
  height:150px;
  width:220px;
  background: linear-gradient(to right, #fff0eb, #fed7c8);
  /* background-image: url("http://static.01homecdn.com/middleimg/20190313/15524596196569185.jpg?x-oss-process=image/resize,w_250"); */
  margin-left:5px;
  margin-top:5px;
  border-radius: 7px
}
.conglin{
  margin-top:5px;
  height:150px;
  flex-direction: column;
  width:140px;
  margin-left:5px
}
.conglin1{
  padding-top:10px;
  width:100%;
  height:72px;
  background:linear-gradient(to right, #dee6f7, #bdd7ef);
  border-radius: 7px
}
.conglin2{
  padding-top:10px;
  width:100%;
  height:72px;
  background:linear-gradient(to right, #dee7e6, #adcbc6);
  border-radius: 7px
}
.lian{
   font-size:8px;
  color:#ffffff;
  text-align: center;
}
.lian1{
  padding-right:15px;
  text-align:end;
  background: url("../../static/img/lianyi.jpg") no-repeat;
  background-size:241px 120px;
  width:241px;
  margin-left:5px;
  height:120px;
  border-radius: 7px;
}
.lian2{
  background: yellow;
  width:120px;
  margin-left:5px;
  height:120px;
   border-radius: 7px
}
.dong{
  margin-top:5px
}
.dong1{
  font-size:8px;
  color:#ffffff;
  text-align: center;
  background:url("https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/822391857/O1CN01y3vxRo1PaY2ffwHDC_!!0-item_pic.jpg_360x360Q90.jpg_.webp");
  background-size:118px 118px;
  width:118px;
  height:118px;
  margin-left:5px;
  border-radius: 7px
}
.hello{
  font-size:16px;
}
.hi{
  color: #f5f4f9
}
.list{
  flex-wrap: wrap;
  background: #f5f4f9
}
.list1{
  background: #ffffff;
  /* text-align: center; */
  width:185px;
  height:200px;
  margin-bottom: 5px
}
.list1 img{
  width:100px;
  height:100px;
  margin-left:45px
}
.list1 p{margin:0;margin-left:7px}
.list1 p:nth-child(2){
/* text-indent: -45px; */
font-weight: 600;
white-space: pre-wrap;
width:170px
}
.list1 p:nth-child(3){
margin-top:20px
}
.price1{
  color:orange;
  font-size:18px
}
.price2{
  text-decoration-line: line-through;
  color:#cecece
}
.list1 p:nth-child(4){
color:#cecece

}

</style>
