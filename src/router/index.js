import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from "@/views/Register"
import Login from "../views/Login"
import Message from "../views/Message"
import Search from "../views/Search.vue"
import Codelogin from "../views/Codelogin"
import Forgetpassword from "../views/Forgetpassword"
import Index from  "../views/index"
import Home from "../views/home"
import Classify from "../views/Classify"
import Cart from "../views/Cart"
import My from "../views/My"
import Vouchercenter from "../views/Vouchercenter"
import Freeshpping from "../views/Freeshpping"
import Selfsupport from "../views/Selfsupport"
import Exchange from "../views/Exchange"
import More from "../views/More"
import Jifenmingxi from "../views/Jifenmingxi"
import Aftersale from "../views/Aftersale"
import Evaluate from "../views/Evaluate"
import Gift from "../views/Gift"
import Member from "../views/Member"
import Myorder from "../views/Myorder"
import Page from "../views/Page"
import Pubhead from "../views/Pubhead"
import Public from "../views/Public"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/Register",
      name:"Register",
      component:Register
    },
    {
      path:"/Login",
      name:"Login",
      component:Login
    },
    {
      path:"/Message",
      name:"Message",
      component:Message
    },
    {
      path:"/Search",
      name:"Search",
      component:Search
    },
    {
      path:"/Codelogin",
      name:"Codelogin",
      component:Codelogin
    },
    {
      path:"/Forgetpassword",
      name:"Forgetpassword",
      component:Forgetpassword
    },
    {
      path:"/index",
      name:"Index",
      component:Index,
      children:[
        {
          path:"/home",
          name:"Home",
          component:Home,
          meta:{
            title:"首页"
          }
        },
        {
          path:"/Classify",
          name:"Classify",
          component:Classify,
          mate:{
            title:"分类"
          }
        },
        {
          path:"/Cart",
          name:"Cart",
          component:Cart,
          mate:{
            title:"购物车"
          }
        },
        {
          path:"/My",
          name:"My",
          component:My,
          mate:{
            title:"我的"
          }
        }
      ]
    },
    {
      path:"/Vouchercenter",
      name:"Vouchercenter",
      component:Vouchercenter,
    },
    {
      path:"/Freeshpping",
      name:"Freeshpping",
      component:Freeshpping,
    },
    {
      path:"/Selfsupport",
      name:"Selfsupport",
      component:Selfsupport,
    },
    {
      path:"/Exchange",
      name:"Exchange",
      component:Exchange,
    },
    {
      path:"/More",
      name:"More",
      component:More
    },
    {
      path:"/Jifenmingxi",
      name:"Jifenmingxi",
      component:Jifenmingxi
    },
    {
      path:"/Aftersale",
      name:"Aftersale",
      component:Aftersale
    },
    {
      path:"/Evaluate",
      name:"Evaluate",
      component:Evaluate
    },
    {
      path:"/Gift",
      name:"Gift",
      component:Gift
    },
    {
      path:"/Member",
      name:"Member",
      component:Member
    },
    {
      path:"/Myorder",
      name:"Myorder",
      component:Myorder
    },
    {
      path:"/Page",
      name:"Page",
      component:Page
    },
    {
      path:"/Pubhead",
      name:"Pubhead",
      component:Pubhead
    },
    {
      path:"/Public",
      name:"Public",
      component:Public
    },
  ]
})
