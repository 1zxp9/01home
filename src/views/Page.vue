<template>
  <div class="cartbj">
    <van-nav-bar  :fixed="true">
      <van-icon name="arrow-left" slot="left" @click="lbtn" />
    </van-nav-bar>
    <van-swipe  indicator-color="#ff5300" class="kzimg">
      <van-swipe-item>
        <img src="../assets/test.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/test.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
    </van-swipe>
      <h3>{{price}}</h3>
      <h2>{{title}}</h2>
    <div class="ptitle">
      <van-icon name="checked" color="#17ca74" size="16px" />
      <span class="slcdspan">首家自营</span>
      <van-icon name="checked" color="#17ca74" size="16px" />
      <span class="slcdspan">正品保证</span>
      <van-icon name="checked" color="#17ca74" size="16px" />
      <span class="slcdspan">实付满69即享包邮</span>
      <van-icon name="ellipsis" @click="alertMenu" class="slcd" />
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '20%' }" />
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="朕知道了"
        @select="onSelect"
        @cancel="onCancel"
      />
    </div>
    <!-- 用户评价 -->
    <ul class="lists">
      <li @click="litap()">
        <i>用户评价(11)</i>  <span class="lispan">100%</span>好评 <van-icon name="arrow" color="#000" size="14px" />
      </li>
      <li>
        匿名
    <!-- 五角星 -->
      <van-rate v-model="value" color="#ff5300"/>
    <!-- 五角星 -->
    <p>2018-04-18 15:29:13</p> 
    <p>正品</p>
      </li>
      <li>
        匿名
    <!-- 五角星 -->
      <van-rate v-model="value" color="#ff5300"/>
    <!-- 五角星 -->
    <p>2018-04-18 15:29:13</p> 
    <span>正品</span>
      </li>
    </ul>

    <!-- 商品介绍 购买咨询 -->
<van-tabs v-model="activeName">
    <van-tab title="商品介绍" name="a">
      <div class="list">
        <ol>
            <li v-for="(todo,index) in todos" :key="index" @click="tap()">
                <img v-bind:src="todo.img" alt="" class="pageimg"/>
            </li> 
        </ol>
      </div>
  </van-tab>
  <van-tab title="购买咨询" name="b">
      <div class="list">
       <a href="" class="shzx"> <van-icon name="service" color="#245ed5"/>售后咨询</a>
       <h4>商品都是正品吗？</h4>
       <p>商品都是正品吗?
首家商城出售的商品均由品牌官方认证授权或品牌官方授权商家销
售，100%官方正品，请放心购买</p>
<h4>是否可以提供发票</h4>
<p>
首家商城暂时只提供电子发票，你可以在下单时勾选申请,并在确
认收货后通过订单详情页查看下载
</p>
<h4>价格说明</h4>
<p>
●首家价:首家价为商品的销售价，是您最终决定是否购买商品的
依据。
</p>
<p>
●国内参考价:商品展示的国内参考价格为参考价，该价格可能是
品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价
(如厂商指导价、建议零售价等)或该商品在首家平台上曾经展
示过的销售价;由于地区、时间的差异性和市场行情波动，品牌
专柜标价、商品吊牌价等可能会与您购物时展示的不-致，该价
格仅供您参考。
</p>
<p>
●折扣价:如无特殊说明，折扣指销售商在原价、或划线价(如品
牌专柜标价，商品吊牌价、厂商指导价、厂商建议零售价)等某
- -价格基础上计算出的优惠比例或优惠金额:如有疑问，您可在
购买前联系销售商进行咨询。异常问题:商品促销信息以商品详情
页”促销”栏中的信息为准:商品的具体售价以订单结算页价格为
准;如您发现活动商品售价或促销信息有异常，建议购买前先联
系销售商咨询。
</p>
<h4>
物流售后
</h4>
<p>
●发货时间:
 一般情况，1~2个工作日内发货,大型活动期间按照活
动通知调整发货时间
</p>
<p>
●配送时间:默认合作快递配送，偏远地区优先使用邮政小包。江
浙沪配送，1~4日内到货。偏远地区(例:新疆、青海、西藏
等)一般在3~10日内送达。
</p>
<p>
●售后服务:
1.工作时间: 9:00-21:00
2.服务热线: 400-681-0101
3.售后服务邮箱: service@01 home.com
</p>
      </div>
  </van-tab>
</van-tabs>
    <!-- 底部 -->
   <div>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :hide-stock="sku.hide_stock"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      >
<!-- 自定义 sku-header-price -->
  <template slot="sku-header-price" slot-scope="props">
    <div class="van-sku__goods-price">
      <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
    </div>
  </template>

  <!-- 自定义 sku actions -->
  <template slot="sku-actions" slot-scope="props">
    <div class="van-sku-actions">
      <van-button
        square
        size="large"
        type="warning"
        @click="onPointClicked"
      >
        确定
      </van-button>
      <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
      <!-- <van-button
        square
        size="large"
        type="danger"
        @click="props.skuEventBus.$emit('sku:buy')"
      >
        确定
      </van-button> -->
    </div>
  </template>
      </van-sku>
      <!-- <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb.url">
          <img :src="thumb.src" />
        </van-swipe-item>
      </van-swipe>
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">领军者旗舰店</span>
            <van-tag class="goods-tag" type="danger">旗舰店</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link @click="sorry" />
      </van-cell-group>

      修改
       -->
      

       <van-goods-action>
        <van-goods-action-icon icon="chat-o" to="./evaluate">客服</van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" to="./cart">我的购物车</van-goods-action-icon>
        <van-goods-action-button type="warning" @click="show = true">加购物车</van-goods-action-button>
        <van-goods-action-button type="danger" @click="show=true">立即购买</van-goods-action-button>
      </van-goods-action>
    </div>
<!-- 底部 -->

  </div>
</template>

<script>
  import * as api from '../api/getProlist.js'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
export default {
  name:"Page",
   components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      value: 5,
      show: false,
      price: "￥79",
      title: "迪士尼 米奇卡通3~6岁儿童幼儿园双肩背包",
      actions: [
        { name: "首家自营", subname: "该商品由首家网负责销售发货" },
        { name: "选项" },
        { name: "选项", subname: "描述信息" }
      ],
      activeName: 'a',
      todos:[
        { img:require('../assets/page1.jpg')},
        { img:require('../assets/page333.jpg')},
        { img:require('../assets/page6.jpg')},
        { img:require('../assets/page666.jpg')},
        { img:require('../assets/page555.jpg')},
      ],
      // 商品规格的
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: []
      },
      id: this.$route.params.id,
      show: false,
      sku: {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215",
                name: "手机",
                imgUrl:
                  "http://demo.dtcms.net/upload/201504/20/thumb_201504200046594439.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ], // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要 price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id 
            stock_num: 10 // 当前 sku 组合对应的库存
          }
        ],
        price: "129.00", // 默认价格（单位元）
        stock_num:100, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku:false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      }
    };
  },
  methods: {
    alertMenu() {
      this.show = true;
    },
    lbtn() {
      this.$router.go(-1);
    },
    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false;
      this.$toast(item.name);
    },
    onCancel() {
      this.show = false;
      // this.$toast('cancel');
    },
    litap(){
      this.$router.push("./evaluate");
    },
    // 商品规格的
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },
    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    getLunbotu() {
      /* console.log(this.id);
      this.$http.getList("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goods.thumb = result.body.message;
        }
      });
 */    },
    sorry(){

    },
    onPointClicked(){
       
    }
   
  },
  // 商品规格的
  created() {
    this.getLunbotu();
  },
};
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
  i{
    font-style: normal;
  }
 .cartbj{
    /* margin-top:45px; */
    overflow: hidden;
    background: #f5f4f9;
    
  }
.kzimg {
  display: block;
  width: 100%;
  height: 350px;
  background: #fff;
  
}
.van-swipe-item img {
  margin-left: 15px;
  width: 330px;
  height: 300px;
}
h3 {
  color: #ff5300;
  font-size: 20px;
   background: #fff;
}
h2{
  background: #fff;
  padding-bottom: 10px;
}
.slcdspan {
  font-size: 14px;
}
.slcd {
  margin-left:20px;
}
.ptitle{
  height: 30px;
  line-height: 30px;
  margin:10px 0;
  background: #fff;
  padding:0 10px;
}
/* 用户评价 */
.lists{
  padding:0 10px;
  background: #fff;
}
.lispan{
  font-size: 14px;
  color:#ff5300;
  margin-left:185px;
}
/* 售后咨询 */
.shzx{
  display: block;
  width: 355px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border:1px solid #999;
  color:#999;
}
.pageimg{
  width: 360px;
  height: 500px;
}
</style>