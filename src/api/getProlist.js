import * as API from './index';
// API GET POST

export const getProlist=(params)=>{
      return API.GET('/productlist.php',params)
}
export const getDetail=(params)=>{
      return API.GET('/detail.php',params)
}
//注册
export const postRegister=(params)=>{
      return API.POST('/api/v1/auth/reg',params)
}
//登录
export const postLogin=(params)=>{
      return API.POST('/api/v1/auth/login',params)
}
//获取商品信息
export const getProducts=(params)=>{
      return API.GET('/api/v1/products',params)
}
