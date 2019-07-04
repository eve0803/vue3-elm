import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import api from './api' // 导入api接口
import './config/rem'


Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
