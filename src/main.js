import Vue from 'vue'
import 'babel-polyfill'
import 'promise-polyfill'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'element-ui/lib/theme-chalk/base.css'









import '@/styles/index.scss' // global css
import '@/styles/animate.css' // global css
import '../static/font-awesome-4.7.0/css/font-awesome.min.css'

import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import dateformat from './utils/W.dateformat'
import validates from './utils/W.validate'
import storage from './utils/W.storage'
// import 'vue2-animate/dist/vue2-animate.min.css';
import '@/icons' // icon
import '@/permission' // permission control
// import '@/utils/clickTS'
import urls from '@/api/urls'
import { format } from 'url';
import 'element-ui/lib/theme-chalk/base.css';
Vue.use(ElementUI, {
  // locale
});
// 基本地址

//面包屑导航辅助

/** 正式版与测试版切换，需要同时修改 config/dev.env.js 文件中的地址 **/
// 正式版
// Vue.prototype.URL = 'https://jbh.shyunhua.com';
// Vue.prototype.uploadURL = 'http://jbh.shyunhua.com/file/upload';
// 测试版
Vue.prototype.URL = 'https://test.jbh.shyunhua.com';
Vue.prototype.uploadURL = 'http://test.jbh.shyunhua.com/file/upload';

Vue.prototype.imgUrl = 'http://file.shyunhua.com/';

// 工具类
Vue.prototype.dateformat = dateformat;
Vue.prototype.validates = validates;
Vue.prototype.storage = storage;
Vue.prototype.urls = urls;

Vue.config.productionTip = false;



import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
