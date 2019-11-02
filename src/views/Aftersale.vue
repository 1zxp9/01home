<template>
  <div>
      <van-nav-bar
  title="退款/退货"
  :fixed="true"
>
    <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
</van-nav-bar>


    <ADD>
      <ul v-if="flag">
        <!-- 退款售后如果有东西的话该显示的样式，暂时不知道什么样的没写了 -->
          <!-- <li class="yincang" v-for="(todo,index) in todos2" :key="index" >
            <van-checkbox v-model="checked"></van-checkbox>
            <img v-bind:src="todo.img" alt="">
            <span>{{todo.text }}</span>
            <p>{{todo.price }}</p>
            <van-stepper v-model="value" integer />
          </li> -->
        </ul>
    </ADD>
    <ylike></ylike>
  </div>
</template>

<script>
import ADD from './CartChild';
import ylike from './Youlike';
export default {
    name:'Aftersale',
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
        flag:false,
      }
    }
}
</script>

<style scoped>
    
</style>