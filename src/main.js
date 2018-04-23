import Vue from 'vue';
import App from './App';

import './modules/rem';
//animate.css
import 'animate.css';
//处理axios,让组件使用$http
import axios from 'axios' ;
Vue.prototype.$http = axios;
//引入全局css文件
import './stylesheets/index.scss';
//引入时间过滤器
import './modules/filter';
//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//引入按钮
import {  Button, Tabbar  } from 'mint-ui';
Vue.component('mz-button',Button);
Vue.component('mz-tab-bar',Tabbar);

//引入路由
import router from './router';
//引入自定义组件
import MZUI from './mz-ui';
import './mz-ui/style/main.scss';
Vue.use(MZUI)
//引入自定义指令
import './modules/directive.js';
//无线滚动
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
//数据交互动画
import { Toast } from 'mint-ui';
//引入store
import store from './store'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
