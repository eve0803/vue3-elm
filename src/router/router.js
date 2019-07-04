import Vue from "vue";
import Router from "vue-router";
//import home from "../page/home/home";
const home  = () =>  import(/* webpackChunkName: "home" */ "../page/home/home");
const city  = () =>  import(/* webpackChunkName: "city" */ "../page/city/city");
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    //当前选择城市页
    {
       path: 'city//:cityid',
       component: city
    }
  ]
});
