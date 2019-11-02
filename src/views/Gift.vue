<template>
  <div>
       <van-nav-bar
      title="趣味随心选"
      :fixed="true"
    >
      <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
      <van-icon name="share" slot="right" @click="rbtn" class="rbtn" color="black"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name:"Gift",
    methods:{
        lbtn(){
            this.$router.go(-1)
            },
        rbtn(){
            this.$router.push("./index")
        },
    }
}
</script>

<style>

</style>