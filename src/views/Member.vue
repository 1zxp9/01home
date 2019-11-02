<template>
  <div>
         <van-nav-bar
  title="臻选会员"
  :fixed="true"
>
    <van-icon name="arrow-left" slot="left" @click="lbtn" class="lbtn" color="black"/>
</van-nav-bar>
  </div>
</template>

<script>
export default {
  name:"Member",
    methods:{
        lbtn(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>