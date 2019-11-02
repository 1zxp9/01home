<template>
  <div>
      <van-nav-bar
  title="我的订单"
  :fixed="true"
>
    <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
</van-nav-bar>

<van-tabs v-model="activeName" class="tabdd">
  <van-tab title="全部" name="a">
     <ADD>
      
    </ADD>
  </van-tab>
  <van-tab title="待支付" name="b">
     <ADD>
      
    </ADD>
  </van-tab>
  <van-tab title="待发货" name="c">
     <ADD>
      
    </ADD>
  </van-tab>
  <van-tab title="待收货" name="d">
    <ADD>

    </ADD>
  </van-tab>
  <van-tab title="待评价" name="e">
    <ADD>
        <!-- 有东西就展示，没有就展示默认的什么都没有 -->
    </ADD>
  </van-tab>
</van-tabs>
 
    <ylike></ylike>
  </div>
</template>

<script>
import ADD from './CartChild';
import ylike from './Youlike';
export default {
  name:"Myorder",
     components:{
        ADD,
        ylike
      },
    methods:{
        lbtn(){
            this.$router.go(-1);
        },
    },
    data(){
      return {
         activeName: 'a',
      }
    }
}
</script>

<style scoped>
.van-tab__pane{
   margin-top: -45px;
}
  .tabdd{
    margin-top:45px;
  }
</style>