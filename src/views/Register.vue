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
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="yanzheng"
    type="text"
    left-icon="chat"
    
    placeholder="请输入验证码"
   
  />
  <van-button type="default">获取验证码</van-button>
  <van-field
    v-model="password"
    type="password"
   left-icon="lock"
    placeholder="请输入密码"
   
  />
</van-cell-group>
<van-button type="danger" @click="Login()">注册</van-button>
<p class="denglu" @click="jump()">已有账号，立即登陆</p>
  </div>
</template>

<script>
import * as api from '../api/getProlist.js'
export default {
  name: 'Register',
  data() {
    return {
      password:"",
      yanzheng:"",
      username:""
    };
  },
  methods: {
      onClickLeft(){
          
      },
      Login(){
        api.postRegister({userName:this.username,password:this.password,nickName:this.username,avatar:""})
        .then((data)=>{
          console.log(data.data)
          if(data.data.code=="success"){
            alert("注册成功")
            this.$router.push("/Login")
          }else{
            alert("该用户已被注册")
          }
        })
      },
      jump(){
        this.$router.push("/Login")
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
    border:0
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
.denglu{
    color:orange;
    display: inline-block;
    position: relative;
    top:110px;
    left:20px
}
</style>
