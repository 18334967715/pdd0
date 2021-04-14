import Vue from 'vue'
import App from './App'
import store from './store'

// 引入路由器
import router from './router/index'

import LyTab from 'ly-tab'
Vue.use(LyTab);
// 配置字体图标
import "@/common/css/style.css";

// 配置mint-ui
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
// 配置图片的懒加载
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.jpg'
Vue.use(VueLazyLoad, {
  loading
});


new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
});
