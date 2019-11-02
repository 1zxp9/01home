<template>
  <div class="box">
     <van-sticky>
      <van-search placeholder="请输入商品名称" v-model="value" class="sousuo"/>
</van-sticky>


    <div id="container">
      <van-tree-select
        height="155vw"
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
       
      >
      
        <template slot="content" >
          <div v-if="activeIndex === 0" class="flzt">
              <div>
                <h2>推荐分类</h2> 
              </div>
              <div class="classimg">
                  <div @click="tap()" v-for="(todo,index) in todos1" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <div v-if="activeIndex === 1" class="flzt">
              <div @click="tap()">
                <h2>精致家访</h2> 
              </div>
              <div class="classimg">
                  <div @click="tap()" v-for="(todo,index) in todos2" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <div v-if="activeIndex === 2" class="flzt">
              <div @click="tap()">
                <h2>家具日用</h2> 
              </div>
              <div class="classimg">
                  <div @click="tap()" v-for="(todo,index) in todos3" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <div v-if="activeIndex === 3" class="flzt">
              <div>
                <h2>家电数码</h2> 
              </div>
              <div class="classimg">
                  <div @click="tap()" v-for="(todo,index) in todos4" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <div v-if="activeIndex === 4" class="flzt">
              <div>
                <h2>箱包服饰</h2> 
              </div>
              <div class="classimg">
                  <div @click="tap()" v-for="(todo,index) in todos5" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <div v-if="activeIndex === 5" class="flzt">
              <div>
                <h2>个人洗护</h2> 
              </div>
              <div class="classimg">
                <div @click="tap()" v-for="(todo,index) in todos6" :key="index">
                    <van-image v-bind:src="todo.img"  class="flimg"/>
                    <p>{{ todo.title }}</p>
                </div>
              </div>
          </div>
          <!-- <van-image v-if="activeIndex === 6" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="activeIndex === 7" src="https://img.yzcdn.cn/vant/apple-2.jpg" /> -->
        </template>
      </van-tree-select>
    </div>

   
  </div>
</template>

<script>
export default {
    name:"Classify",
    data(){
        return{
            value:"",
            activeIndex: 0,
            items: [
                { text: "猜你喜欢" },
                { text: "精致家访" },
                { text: "家具日用" },
                { text: "家电数码" },
                { text: "箱包服饰" },
                { text: "个人洗护" },
            ],
            activeId: 1,
            activeIndex: 0,
            active: "",
            todos1:[
                { title:'旅行箱包',img:require('../assets/test.png')},
                { title:'床品套件',img:require('../assets/test.png')},
                { title:'被子枕头',img:require('../assets/test.png')},
                { title:'生活电器',img:require('../assets/test.png')},
                { title:'水杯水具',img:require('../assets/test.png')},
                { title:'穿戴配件',img:require('../assets/test.png')},
            ],
            todos2:[
                { title:'床品套件',img:require('../assets/logo.png')},
                { title:'被子枕头',img:require('../assets/logo.png')},
                { title:'毛巾拖鞋',img:require('../assets/logo.png')},
                { title:'围巾毛毯',img:require('../assets/logo.png')},
                { title:'居家服饰',img:require('../assets/logo.png')},
                { title:'靠垫窗帘',img:require('../assets/logo.png')},
            ],
            todos3:[
                { title:'储物收纳',img:require('../assets/test.png')},
                { title:'餐具厨具',img:require('../assets/test.png')},
                { title:'家居清洁',img:require('../assets/test.png')},
                { title:'水杯水具',img:require('../assets/test.png')},
                { title:'家饰软装',img:require('../assets/test.png')},
            ],
            todos4:[
                { title:'生活电器',img:require('../assets/logo.png')},
                { title:'厨房电器',img:require('../assets/logo.png')},
                { title:'智能影音',img:require('../assets/logo.png')},
                { title:'数码配件',img:require('../assets/logo.png')},
            ],
            todos5:[
                { title:'旅行箱包',img:require('../assets/test.png')},
                { title:'户外出行',img:require('../assets/test.png')},
                { title:'穿戴配件',img:require('../assets/test.png')},
                { title:'文具',img:require('../assets/test.png')},
            ],
            todos6:[
                { title:'家用纸品',img:require('../assets/logo.png')},
                { title:'面部护理',img:require('../assets/logo.png')},
                { title:'身体洗护',img:require('../assets/logo.png')},
                { title:'口腔管理',img:require('../assets/logo.png')},
                { title:'美容工具',img:require('../assets/logo.png')},
                { title:'健康卫生',img:require('../assets/logo.png')},
            ],
        }
    },
    methods:{
        tap(){
          this.$router.push("./public");
        },
    },
   /*  mounted(){
        this.$emit("toparent", {title:this.title,active:this.active});//想实现刷新默认显示的那个
    } */
}
</script>

<style scoped>
    .sousuo{
        text-indent: 40px;
        /* position: absolute;
        top:0; */
    }
    .flimg{
        width:55px;
        height:55px;
    }   
    .van-sidebar-item--select{
    color:tomato;

}
    .van-search__content{
         border-radius:34px;
        
    }
    .van-tree-select{
        margin-top:10px;
    }
    .van-field__control{
        margin-left: 50px
    }
    .van-sidebar-item--select{
        background:#f5f4f9;
    }
    .van-tree-select__content{
        background:#f5f4f9;
    }
    
    .flzt{
        margin:10px 0 0 10px;
        color:#313131;
        background: #fff;  
       overflow: hidden;
    }
    .flzt h2{
        text-indent: 10px;
    }
    .classimg{
        display: flex;
        flex-wrap: wrap; 
        text-align: center;
    }
    .classimg div{
        width:62px;
        margin-left:8px;
        font-size: 12px;
    }
    .classimg p{
        margin-left: 13px;
    }
</style>