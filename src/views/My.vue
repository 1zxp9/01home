<template>
  <div>
    <header>
      
      <van-nav-bar  >
        <van-icon name="more-o" slot="right" @click="rbtn" color="#fff" size="20px"/>
        <van-icon name="setting-o" slot="left" @click="lbtn" color="#fff" size="20px"/>
      </van-nav-bar>
    </header>
  <!-- 头像 -->
  <div>
    <img src="../assets/test.png" alt="" class="headx">
  </div>
<!-- 头像下边这块 -->
    <div class="jfye">
      <h5>{{phone}}</h5>
      <div class="yhq">
        <h4>
          <span>{{jifen}}</span>
          <span>{{yue}}</span>
          <span>{{yhj}}</span>
        </h4>
        <p>
          <span>我的积分</span>
          <span>账户余额</span>
          <span>优惠券</span>
        </p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="mydd">
      <div :style="{ overflow:'hidden'}">
        <span
        :style="{ color:'#333',fontSize:'16px',marginLeft:'10px'}"
        >我的订单</span>
        <span
        :style="{marginLeft:'170px'}"     @click="ckdd"   
        >查看所有订单</span><van-icon name="arrow" color="#cdcdcd" size="18px" @click="ckdd" />
      </div>
    
      <div class="dingdan" :style="{ overflow:'hidden' }">
        <p @click="dzf">
          <van-icon class="iconfont iconcomn" class-prefix='icon' name='daizhifu'/>
          <br> <span>待支付</span> 
        </p>
        <p @click="dzf">
          <van-icon class="iconfont iconcomn" class-prefix='icon' name='icon-test'/>
          <br> <span>待发货</span>
        </p>
        <p @click="dzf">
        <van-icon class="iconfont iconcomn" class-prefix='icon' name='daishouhuo'/>
          <br> <span>待收货</span>
        </p>
        <p @click="dzf">
        <van-icon class="iconfont iconcomn" class-prefix='icon' name='lvzhou_renzhengfangshi_duanxinrenzheng'/>
          <br> <span>待评价</span>
        </p>
        <p @click="tksh">
        <van-icon class="iconfont iconcomn" class-prefix='icon' name='tuikuanshouhou'/>
          <br> <span>退款/售后</span>
        </p>
      </div>
    </div>
<!-- 我的收藏 -->
<div class="myschy">
    <div class="mysc">
      <span>我的收藏</span>
        <van-icon name="star" size="26px" color="#ff432e" /> 
        <i class="shugang"></i>
      <span>我的足迹</span>
      <van-icon name="../../static/img/xiezi.jpg" size="30px" />
    </div>
    <!-- 礼品兑换 臻选会员 -->
    <div class="zxhy">
      <p @click="lpdh">
        <van-icon name="gift" size="36px" color="#ff816d" />
        <br> <span>礼品兑换</span> 
      </p>
      <p @click="zxhy">
        <van-icon name="vip-card" size="36px" color="#ffa400" />
        <br> <span>臻选会员</span> 
      </p>
      <p @click="dzf">
        <van-icon name="service" size="36px" color="#673dbc" />
        <br> <span>联系客服</span> 
      </p>
    </div>
</div>


  <!-- 猜你喜欢 -->
  <ylike></ylike>

  </div>
</template>

<script>
import ylike from './Youlike';
export default {
  name:"My",
  components:{
        ylike
      },
  data(){
    return {
      phone:"18866668888",
      jifen:"60",
      yue:"0.00",
      yhj:"0",
    }
  },
  methods:{
    lbtn(){
      this.$router.push("./index")
    },
    rbtn(){
      this.$router.push("./index")
    },
    tap(){
          this.$router.push("./page");
    },
    dzf(){
      this.$router.push("./myorder")
    },
    tksh(){
      this.$router.push("./aftersale")
    },
    ckdd(){
      this.$router.push("./myorder")
    },
    lpdh(){
      this.$router.push("./gift")
    },
    zxhy(){
      this.$router.push("./member")
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
  .headx{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top:30px;
    left:130px;
    z-index: 22;
    border:10px solid #fff;
   
  }
  .van-nav-bar{
    height:46px;
    position: absolute;
  }
  .van-nav-bar__right{
    left:333px;
  }
  header{
    background:-webkit-linear-gradient(left, #ff6b00, #ff2253);
    height:150px;
  }
  .jfye{
    width: 339px;
    height:157px;
    border-radius:20px;
    background: #fff;
    margin:-90px auto;
    color:#999;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .jfye h5{
    font-size:16px;
    text-align: center;
    margin:0 auto;
    margin-top:70px;
  }
  .yhq{
    width: 291px;
    height: 54px;
    margin: 0 auto;
    margin-top:20px;
  }
  .yhq h4,.yhq p{
    width: 291px;
    height: 54px;
    display: flex;
    justify-content: space-around;
  }
  .yhq h4{
    height:20px;
    color:#333;
  }
  .yhq p{
    height:20px;
    color:#666;
  }
/* 我的订单 */
.mydd{
  background: #fff;
  overflow: hidden;
  padding:10px;
  margin-bottom: 10px;
}
.iconcomn{
  background:-webkit-linear-gradient(top, #ff6b00, #ff2253);
              -webkit-background-clip:text;
		          -webkit-text-fill-color:transparent;
    /*渐变色*/ 
  font-size:30px;
  display:inline-block;
  margin-top:30px;
}
  .dingdan{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  
  .dingdan p span{
    color:#666;
    line-height: 30px;
  }
  /* 我的收藏 */
  .myschy{
    background: #fff;
    overflow: hidden;
    padding:20px;
    color:#333;
  }
  .mysc{
     display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom:40px;
  }
  .shugang{
    font-style:normal;
    display:inline-block;
    height:40px;
    border-right: 1px solid #ccc;
  }
  /* 臻选会员 */
  .zxhy{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
</style>