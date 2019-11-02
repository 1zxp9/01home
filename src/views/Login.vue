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
    v-model="password"
    type="password"
   left-icon="lock"
    placeholder="请输入密码"
   
  />
</van-cell-group>
<van-button type="danger" @click="Login()">登录</van-button>
<van-button color="orange" @click="btn()" plain>验证码登录</van-button>
<p href="" class="denglu" @click="jump()">还没有账号，快速注册</p>
<p href="" class="forget">忘记密码？</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import * as api from '../api/getProlist.js'
export default {
  name: 'Login',
  data() {
    return {
      password:"",
      username:""
    };
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
      onClickLeft(){
          
      },
      jump(){
        this.$router.push("/Register")
      },
      Login(){
         api.postLogin({userName:this.username,password:this.password})
        .then((data)=>{
          console.log(data)
          if(data.data.code=="success"){
            alert("登录成功")
            this.$router.push("/home")
            this.$store.commit('login',data.data.token)
            this.$store.commit('login1',this.username)
             console.log(this.$store.state.token)
             console.log(this.$store.state.username)
          }else{
            alert("用户名或密码错误")
          }
        })

// ,product_category:"5d844e76fe04943d5e540179"


        
      },
      btn(){
        this.$router.push("/Register")
      }
  },
  mounted() {
      api.getProducts({per:6,page:3,name:"衣服"})
    .then((data)=>{
      console.log(data.data.data)
    })
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
