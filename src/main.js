import Vue from 'vue'
import 'babel-polyfill'
import 'promise-polyfill'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import '../static/font-awesome-4.7.0/css/font-awesome.min.css'

import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import dateformat from './utils/W.dateformat'
import validates from './utils/W.validate'
import storage from './utils/W.storage'

import '@/icons' // icon
import '@/permission' // permission control
// import '@/utils/clickTS'
import urls from '@/api/urls'

Vue.use(ElementUI, {
  // locale
});
// 基本地址
Vue.prototype.URL = 'https://jbh.shyunhua.com';

// test
Vue.prototype.uploadURL = 'http://jbh.shyunhua.com/file/upload';
Vue.prototype.imgUrl = 'http://file.shyunhua.com/';

// 工具类
Vue.prototype.dateformat = dateformat;
Vue.prototype.validates = validates;
Vue.prototype.storage = storage;
Vue.prototype.urls = urls;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
