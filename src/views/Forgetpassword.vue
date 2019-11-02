<template>
  <div>
      <van-nav-bar
 
  left-arrow
  
  @click-left="onClickLeft"
 
/>
<van-image
  width="68"
  height="68"
  src="../../static/img/home.jpg"
/>
<van-cell-group>
  <van-field
    v-model="username"
    
    clearable
    left-icon="graphic"
   
    placeholder="请输入用户名/手机号码"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="text"
    type="text"
    left-icon="chat"
    
    placeholder="请输入短信验证码"
   
  />
  <van-button type="default">获取验证码</van-button>
  <van-field
    v-model="password"
    type="password"
   left-icon="lock"
    placeholder="请输入新密码"
   
  />
</van-cell-group>
<van-button type="danger">确认重置</van-button>

  </div>
</template>

<script>
export default {
  name: 'Forgetpassword',
  data() {
    return {
      password:"",
      text:"",
      username:""
    };
  },
  methods: {
      onClickLeft(){
          
      }
  },
};
</script>

<style scoped>
.van-nav-bar .van-icon{
    color:#cecece
}
.van-image{
    position: relative;
    top:18px;
    left:174px;
}
.van-button--default{
    position: absolute;
    z-index: 1;
    right:17px;
    top:43px;
    border:0;
    color:blue
}
.van-cell-group{
    position: relative;
    top:61px;
    padding-right: 30px;
    padding-left:10px;
    box-sizing: border-box
}
.van-button--danger{
    position: relative;
    top:100px;
    left:15px;
    width:346px;
    border-radius: 42px;
}

</style>
