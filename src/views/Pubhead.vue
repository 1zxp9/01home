<template>
  <div>
       <van-nav-bar
        title="臻选会员"
        :fixed="true"
        >
            <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
        </van-nav-bar>
      <!-- 公共头部导航暂时没想好怎么封装这个插槽忙完再整 -->
      <slot>
            <van-nav-bar 
            title="我的订单"
            :fixed="true">
                <van-icon name="more-o" slot="right" @click="rbtn" color="#fff" size="20px"/>
                <van-icon name="setting-o" slot="left" @click="lbtn" color="#fff" size="20px"/>
            </van-nav-bar>
      </slot>
  </div>
</template>

<script>
export default {
    name:"Pubhead",
    methods:{
        lbtn(){

        },
        rbtn(){
            
        }
    }
}
</script>

<style>

</style>