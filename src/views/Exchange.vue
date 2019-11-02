<template>
  <div>
       <van-sticky>
          <van-nav-bar
  title="积分兑换"
  right-text="积分规则"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</van-sticky>
<div class="qiandao">
    <p class="huanying">欢迎回来!{{username}}</p>
    <p>
        <van-icon name="../../static/img/qian.jpg"  class="qiandai"/>
        <span class="qianshu">70</span>
        <span class="mingxi"  @click="chakan()">查看明细></span>
    </p>
   <van-button type="default" class="anniu">已签到</van-button>
    <van-progress
  :show-pivot="false"	
  :percentage="10"
  class="jindutiao"
/>
<p  class="tianshu">2天    连续签到10天，可额外获得100积分  <span class="shitian">10天</span> </p>
</div>
<van-row type="flex" justify="space-between" class="listt">
  <van-col span="12" class="listt1" v-for="(item,i) in list"  :key="i">
    <img :src="item.coverImg"  alt="">
    <p>{{item.name}}</p>
    <p><span class="price1">￥{{item.price}}</span></p>
    <van-button type="default" class="jifen">积分可抵扣5.00</van-button>
  </van-col>
  
</van-row>

  </div>
</template>

<script>
import * as api from '../api/getProlist.js'
import {mapState} from 'vuex'
export default {
  name: 'Exchange',
  data() {
    return {
      list:[]
    };
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {
    onClickLeft(){
      this.$router.push("/home")
    },
    onClickRight(){
      this.$router.push("")
    },
    chakan(){
      this.$router.push("/jifenmingxi")
    }
  },
  mounted() {
      api.getProducts({per:6,page:8,name:""})
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
.van-icon{
    color:black
}
.van-nav-bar__text{
    color:black
}
.qiandao{
background:url("../../static/img/zise.jpg") no-repeat;
height:170px;
width:100%;
padding-top:20px;
position: relative;
}
p{
    color:#fff;
    padding-left:20px;
}
.huanying{
    font-size:14px
}
.qiandai{
    font-size:13px
}
.qianshu{
    font-size:20px
}
.anniu{
    height:35px;
    line-height: 35px;
    border-radius: 35px;
    color:orange;
    position: absolute;
    top:45px;
    right:20px;
}
.jindutiao{
    position: relative;
    top:30px
}
.tianshu{
    /* white-space: pre; */
    position: relative;
    top:30px;
    padding: 0
}
.shitian{
    margin-left:128px
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
font-size:14px;
height:42px;
width:160px;
display:-webkit-box;
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
color:black;
margin-top:30px
}
.price1{
  color:orange;
  font-size:16px;
}
.listt1 p:nth-child(3){
text-indent: -20px
}
.jifen{
    height:20px;
    line-height: 20px;
    width:110px;
    border:1px solid #666666;
    border-radius: 20px;
    position: relative;
    top:-90px;
    left:35px;
    font-size:11px
}
</style>
