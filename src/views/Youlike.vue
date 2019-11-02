<template>
  <div class="ylike">
    <!-- 猜你喜欢 -->
    <slot>
      <van-divider
        :style="{ color:'#999', borderColor: '#999', padding: '0 16px',background:'#f5f4f9' }"
      >猜你喜欢</van-divider>
      <div class="listpublic">
        <ol>
          <li v-for="(todo,index) in todos" :key="index" @click="tap()">
            <img v-bind:src="todo.img" alt />
            <h3>{{todo.text }}</h3>
            <span>{{ todo.price }}</span>
            <i>{{todo.price2}}</i>
            <p>100%好评</p>
          </li>
        </ol>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ylike",
  data() {
    return {
      // 猜你喜欢
      todos: [
        {
          text: "寻茶问花双层玻璃水杯",
          price: "￥119.00",
          price2: "189",
          img: require("../assets/test.png")
        },
        {
          text: "加厚双层玻璃水杯镜仓缘",
          price: "￥129.00",
          price2: "229",
          img: require("../assets/test.png")
        },
        {
          text: "寻茶问花双层玻璃水杯",
          price: "￥119.00",
          price2: "189",
          img: require("../assets/test.png")
        },
        {
          text: "加厚双层玻璃水杯镜仓缘",
          price: "￥129.00",
          price2: "229",
          img: require("../assets/test.png")
        },
        {
          text: "寻茶问花双层玻璃水杯",
          price: "￥119.00",
          price2: "189",
          img: require("../assets/test.png")
        },
        {
          text: "加厚双层玻璃水杯镜仓缘",
          price: "￥129.00",
          price2: "229",
          img: require("../assets/test.png")
        }
      ]
    };
  },
  methods: {
    tap() {
      this.$router.push("./page");
    }
  }
};
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
/* 猜你喜欢部分 */
.listpublic {
  background: #f5f4f9;
  overflow: hidden;
}
.listpublic li {
  width: 175px;
  height: 256px;
  background: #fff;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
}
.listpublic li:nth-child(odd) {
  margin-left: 0;
}
.listpublic li img {
  width: 90px;
  height: 112px;
  margin-top: 15px;
}
.listpublic li span {
  color: #ff5300;
  font-weight: bold;
  font-size: 16px;
}
.listpublic li p {
  color: #a8a8a8;
}
.listpublic li h3 {
  color: #2c2c2c;
}
.listpublic li i {
  color: #999;
  font-style: normal;
  text-decoration: line-through;
}
/* 猜你喜欢结束 */
</style>