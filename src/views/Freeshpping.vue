<template>
  <div class="bod">
       <van-nav-bar
  title="包邮专区"
  right-text="..."
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<div>
  <img class="img1" src="../../static/img/9.jpg" alt="">
  <div class="tankuang">
    <p @click="Message()"><van-icon name="chat-o" />   消息</p>
    <p><van-icon name="paid" />   分类</p>
    <p><van-icon name="contact" />   我的</p>
    <p  @click="Index()" style="border:0"><van-icon name="home-o" />   首页</p>
  </div>
</div>
<van-tabs v-model="active" swipeable>
  <van-tab v-for="(index,i) in 3" :title="'选项 ' + index" :key="i" :name="index">
   <van-row type="flex" justify="space-between" class="list">

  <van-col span="8" class="list1"   v-for="(item,j) in list"  :key="j">
    <img :src="item.coverImg" alt="">
    <p>{{item.name}}</p>
    <p><span class="price1">￥{{item.price}}</span><span class="price2">￥{{item.price}}</span></p>
    <van-goods-action>
  <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
</van-goods-action>
  </van-col>

</van-row>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import * as api from '../api/getProlist.js'
var Tankuang=document.querySelectorAll(".tankuang")[0]
export default {
  name: 'Freeshpping',
  data() {
    return {
        active:"",
        list:[],
        index:""
    };
  },
  methods: {
      onClickLeft(){
          this.$router.push("/home")
      },
      onClickRight(){
          // Tankuang.style.display="block";
          var Tankuang=document.querySelectorAll(".tankuang")[0]
          if(Tankuang.style.display=="none"){
            Tankuang.style.display="block"
          }else{
            Tankuang.style.display="none"
          }
          
      },
      onClickButton(){
          // console.log(document.querySelectorAll(".van-tab"))
      },
      Message(){
        this.$router.push("/Message")
      },
      Index(){
        this.$router.push("/home")
      },
      
  },
  mounted() {
    api.getProducts({per:6,page:1,name:""})
    .then((data)=>{
      console.log(data.data.products)
      this.list=data.data.products
    })
  //  this.$nextTick(()=>{
  //    let vantab=document.querySelectorAll(".-vantab")
  //    console.log(document.querySelectorAll(".van-tab"))
  //    for(let i=0;i<vantab.length;i++){
  //    vantab[i].click=function(){
  //        console.log(i)
  //    }
  //  }
  //  })
  },
 updated() {
  //  console.log(this.index)
 },
};
</script>

<style scoped>
.bod{
background: #f5f4f9;
}
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
  
  position: relative;
  top:6px
}
.list1{
  background: #ffffff;
  /* text-align: center; */
  width:121px;
  height:230px;
  margin-bottom: 5px
}
.list1 img{
  width:100px;
  height:100px;
 margin-left:11px
}
.list1 p{margin:0;margin-left:6px}
.list1 p:nth-child(2){
  margin-top:5px;
font-weight: 600;
font-size:15px;
white-space:pre-wrap;
width:115px;
}
.list1 p:nth-child(3){
margin-top:5px
}
.price1{
  color:red;
  font-size:13px;
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
    border-radius: 7px;
    height:30px
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
.van-icon{
  font-size:16px;
  position: relative;
  top:4px
}
</style>
