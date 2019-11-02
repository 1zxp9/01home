<template>
  <div class="cartbj">
    <van-nav-bar
      title="购物车"
      :fixed="true"
      :right-text="bianji"
      @click-right="onClickRight"
    >
      <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
    </van-nav-bar>
      <ADD>
        <!-- <p>有购物车信息时显示我</p> -->
       
        <ul v-if="flag">
          <li  v-for="(todo,index) in todos2" :key="index" class="cartpage">
          <van-swipe-cell> 
             <van-card
            :price="todo.price"
            :desc="todo.name"  
            :title="todo.text"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="footer">
              <van-stepper v-model="value" integer />
            </div>
          </van-card>


            <template slot="right" class="huadong">
              <van-button square type="primary" text="移入收藏"
              :style="{width:'50px',height:'200px',background:'#07c160',padding:0,}"
              />
              <van-button square type="danger" text="删除" 
              :style="{width:'50px',height:'160px',background:'#EE0A24',padding:0, }"
              />
            </template>
          </van-swipe-cell>
          </li>
        </ul>
      </ADD>
      
      <ylike></ylike>
    <!-- 结算 -->
    <div class="jiesuan">
        <van-submit-bar
  :price="price"
  :label="label"
  :button-text="jssc"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">全选</van-checkbox>
  <!-- <span slot="tip">
    你的收货地址不支持同城送, <span>修改地址</span>
  </span> -->
</van-submit-bar>
    </div>
    

    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
  </div>
</template>

<script>
import ADD from './CartChild';
import ylike from './Youlike';
export default {
    name:'Cart',
    components:{
        ADD,
        ylike
      },
    data(){
      return{
        todos2:[
          { text: '物理灭蚊灯(LED灯)驱蚊灯',price:"129.00",img:require('../assets/test.png'),name:"晶莹白"},
          { text: '物理灭蚊灯(LED灯)驱蚊灯',price:"129.00",img:require('../assets/test.png'),name:"晶莹白"},
        ],
        value:0,
        checked: true,
        bianji:"编辑",
        price:12900,
        jssc:"去结算",
        label:"",
         flag:true,
        // 下拉刷新
        count: 0,
        isLoading: false,
        data:["haha"],
      }
    },
    methods:{
      btn(){
        this.$router.push("/Index");
      },
       tap(){
          this.$router.push("./page");
        },
        onClickRight(){
          if(this.bianji=="编辑"){
            this.bianji="完成";
          }else{
            this.bianji="编辑";
          }
          if(this.jssc=="去结算"){
            this.jssc="删除";
            this.label="移入收藏夹";
            this.price=0;
          }else{
            this.jssc="去结算";
            this.price=12900;
            this.label="合计"
          }
      },
      onSubmit(){

      },
      lbtn(){
        this.$router.go(-1);
      },
      // 下拉刷新
       onRefresh(){
          setTimeout(()=>{
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
      },
      // 滑动单元格
       onClose(clickPosition, instance) {
          switch (clickPosition) {
            case 'left':
            case 'cell':
            case 'outside':
              instance.close();
              break;
            case 'right':
              Dialog.confirm({
                message: '确定删除吗？'
              }).then(() => {
                instance.close();
              });
              break;
          }
      }
    }
    
}
</script>

<style scoped>
/* .cartpage .van-swipe-cell{
  top:300px;
} */
.cartpage .van-swipe-cell:nth-child(1){
  top: -45px;
}
  .cartbj{
    margin-top:45px;
    overflow: hidden;
  }
 .van-card__content{
   display: flex;
   flex-direction: column;
   justify-content: space-around;

 }
  .van-stepper{
    margin-left:230px;
    margin-bottom:15px;
  }
  .huadong{
    width: 300px;
  }
  
  .btn{
    display: block;
    width:76px;
    height: 30px;
    color:#ff5a00;
    border:2px solid #ff5a00;
    border-radius:30px;
    background: transparent;
  }
  .van-submit-bar{
    bottom: 50px;
  }
</style>