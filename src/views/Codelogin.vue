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
   
    placeholder="请输入用户名/手机号"
    @click-right-icon="$toast('question')"
  />

  
  <van-field
    v-model="text"
    type="text"
    left-icon="chat"
    
    placeholder="请输入验证码"
   
  />
  <van-button type="default" class="yangzheng">获取验证码</van-button>
</van-cell-group>
<van-button type="danger">登录</van-button>
<van-button color="orange" plain>密码登陆</van-button>
<a href="" class="denglu">还没有账号，快速注册</a>
<a href="" class="forget">忘记密码？</a>
  </div>
</template>

<script>
export default {
  name: 'Codelogin',
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
    left:160px;
}
.yangzheng{
    position: absolute;
    z-index: 1;
    right:17px;
    top:43px;
    border:0
}
.van-button--plain{
    position: relative;
    top:120px;
    left:15px;
    width:346px;
    border-radius: 42px;
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
    display:inline-block;
    position: relative;
    top:132px;
    left:20px
}
.forget{
    display: inline-block;
    position: relative;
    top:132px;
    left:180px
}
</style>
