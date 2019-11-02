<template>
  <div>
          <van-nav-bar
  title="首家自营"
  right-text="..."
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div><img class="img1" src="../../static/img/shoujiaziyin.jpg" alt=""></div>
<div>
  <!-- <img class="img1" src="../../static/img/9.jpg" alt=""> -->
  <div class="tankuang">
    <p @click="Message()"><van-icon name="chat-o" />   消息</p>
    <p><van-icon name="paid" />   分类</p>
    <p><van-icon name="contact" />   我的</p>
    <p  @click="Index()" style="border:0"><van-icon name="home-o" />   首页</p>
  </div>
</div>

<div style="background:#f5f4f9">
    <van-nav-bar
  title="人气推荐"
  style="background:#f5f4f9"
/>
<van-row type="flex" justify="space-around">
   <van-col span="12" class="list1"   v-for="(item,j) in list"  :key="j">
    <img :src="item.coverImg" alt="">
    <p>{{item.name}}</p>
    <p><span class="price1">￥{{item.price}}</span><span class="price2">￥{{item.price}}</span></p>
    <van-goods-action>
  <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
</van-goods-action>
  </van-col>
</van-row>
   <van-nav-bar
  title="自营好货"
  class="ziyin"
  style=""
/>

<van-row type="flex" justify="space-between" class="listt">
  <van-col span="12" class="listt1"  v-for="(item,j) in list1"  :key="j">
    <img :src="item.coverImg" alt="">
    <p>{{item.name}}</p>
    <p><span class="price1">￥{{item.price}}</span></p>
    
  </van-col>
  
</van-row>
</div>
  </div>
</template>

<script>
import * as api from '../api/getProlist.js'
export default {
  name: 'Selfsupport',
  data() {
    return {
      list:[],
      list1:[],
    };
  },
  methods: {
      onClickButton(){

      },
      onClickLeft(){
          this.$router.push("/home")
      },
      onClickRight(){
          var Tankuang=document.querySelectorAll(".tankuang")[0]
          if(Tankuang.style.display=="none"){
            Tankuang.style.display="block"
          }else{
            Tankuang.style.display="none"
          }
      },
       Message(){
        this.$router.push("/Message")
      },
      Index(){
        this.$router.push("/home")
      }
  },
  mounted() {
     api.getProducts({per:3,page:1,name:""})
    .then((data)=>{
      console.log(data.data.products)
      this.list=data.data.products
    })
    api.getProducts({per:6,page:4,name:""})
    .then((data)=>{
      console.log(data.data.products)
      this.list1=data.data.products
    })
  },
};
</script>

<style scoped>
.van-icon{
    color:black
}
.van-nav-bar__text{
    color:black
}
.img1{
    width:100%;

}
.list{
  flex-wrap: wrap;
  background: #f5f4f9
}
.list1{
  background: #ffffff;
  /* text-align: center; */
  width:120px;
  height:230px;
  margin-bottom: 5px
}
.list1 img{
  width:100px;
  height:100px;
 margin-left:13px
}
.list1 p{margin:0}
.list1 p:nth-child(2){
padding-left:5px;
font-weight: 600;
font-size:14px;
height:42px;
width:112px;
display:-webkit-box;
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;

}
.list1 p:nth-child(3){

}
.price1{
  color:orange;
  font-size:18px;
}
.price2{
  text-decoration-line: line-through;
  color:#cecece;
 
}
.van-goods-action{
    position: static;
   margin-top:5px
}
.van-goods-action-button--first{
    border-radius: 7px
}
.ziyin{
background:#f5f4f9;
background:url("../../static/img/dian.jpg") 10px 0px ;
background-size: 6px 2px;
}

.listt{
  flex-wrap: wrap;
  background: #f5f4f9
}
.listt1{
  background: #ffffff;
 
  width:185px;
  height:200px;
  margin-bottom: 5px
}
.listt1 img{
  width:100px;
  height:100px;
  margin-left:45px
}
.listt1 p{margin:0}
.listt1 p:nth-child(2){
padding-left:5px;
font-weight: 600;
font-size:16px;
height:42px;
width:160px;
display:-webkit-box;
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;

}
.tankuang{
  display:none;
  position: absolute;
  z-index: 2;
  right:4px;
  top:49px;
  background: #ffffff;
  width:125px;
  height:188px;
  border-radius:7px;
  padding-left:15px
}
.tankuang1{
   display: none;
}
.tankuang2{
  display:block;
}
.tankuang p{
  margin:0;
  height:46px;
  line-height: 46px;
  border-bottom: 1px solid #cecece;
  white-space: pre-wrap
}
</style>
