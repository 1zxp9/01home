<template>
  <div>
    <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn"/>
      <van-search placeholder="请输入商品名称" v-model="value" class="sousuo"/>

<!-- tab标签页 -->
<van-tabs v-model="activeName">
  <van-tab title="综合" name="a">
      <div class="list">
        <ol>
            <li v-for="(todo,index) in todos" :key="index" @click="tap()">
                <img v-bind:src="todo.img" alt=""/>
                <h3>{{ todo.text }}</h3>
                <p>{{ todo.price }} </p>
                <span>100%好评</span>
            </li> 
        </ol>
      </div>
  </van-tab>
  <van-tab title="销量" name="b">
      <div class="list">
        <ol>
            <li v-for="(todo,index) in todos2" :key="index" @click="tap()">
                <img v-bind:src="todo.img" alt=""/>
                <h3>{{ todo.text }}</h3>
                <p>{{ todo.price }} </p>
                <span>100%好评</span>
            </li> 
        </ol>
      </div>
  </van-tab>
  <van-tab title="价格" name="c">
      <div class="list">
        <ol>
            <li v-for="(todo,index) in todos" :key="index" @click="tap()">
                <img v-bind:src="todo.img" alt="" />
                <h3>{{ todo.text }}</h3>
                <p>{{ todo.price }} </p>
                <span>100%好评</span>
            </li> 
        </ol>
      </div>
  </van-tab>
  <van-tab title="自营" name="d">
    <div class="list">
        <ol>
            <li v-for="(todo,index) in todos2" :key="index" @click="tap()">
                <img v-bind:src="todo.img" alt=""/>
                <h3>{{ todo.text }}</h3>
                <p>{{ todo.price }} </p>
                <span>100%好评</span>
            </li> 
        </ol>
      </div>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>

export default {
    name:"Public",
    data(){
        return{
            value:"",
            activeName: 'a',
            todos:[
                { text: '迪士尼米奇卡通3~ 6岁儿童幼儿园双肩背包',price:"￥79.00",img:require('../assets/test.png')},
                { text: '迪士尼米奇卡通3~ 6岁儿童幼儿园双肩背包',price:"￥79.00",img:require('../assets/test.png')},
            ],
            todos2:[
                { text: '迪士尼米奇卡通3~ 6岁儿童幼儿园双肩背包',price:"￥79.00",img:require('../assets/logo.png')},
                { text: '迪士尼米奇卡通3~ 6岁儿童幼儿园双肩背包',price:"￥79.00",img:require('../assets/logo.png')},
            ]
        }
    },
    methods:{
        lbtn(){
            this.$router.go(-1);
        },
        tap(){
          this.$router.push("./page");
        },
    }
}
</script>

<style scoped>
    .sousuo{
        width: 300px;
        margin-left: 20px;
        text-indent: 40px;
    }
    .van-icon-arrow-left{
        position: absolute;
        top:0;
    }
    .van-search__content{
        border-radius: 34px;

    }
    .lbtn{
         position: absolute;
        top:20px;
        font-size: 20px;
    }
    /* 标签页 */
    /* .van-tabs .van-tab--active{
        color:#ff5a00;
    }
    .van-tabs .van-tabs__line{
        background-color:#ff5a00;
    } */
    /* 下边商品列表、 */
     .list{
    background: #f5f4f9;
    height:85vh;
  }
  .list li{
    width: 175px;
    height:256px;
    background: #fff;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
  }
  .list li:nth-child(1){
      margin-left: 0;
  }
  .list li img{
    width:90px;
    height:112px;
   margin-top:15px;
  }
  .list li p{
      color:#ff5300;
      font-weight: bold;
      font-size:16px;
  }
  .list li span{
      color:#a8a8a8;
  }
</style>