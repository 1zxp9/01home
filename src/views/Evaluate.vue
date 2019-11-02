<template>
  <div>
      <van-nav-bar  title="用户评价页" :fixed="true">
      <van-icon name="arrow-left" slot="left" @click="lbtn" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name:"Evaluate",
    methods:{
        lbtn(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>