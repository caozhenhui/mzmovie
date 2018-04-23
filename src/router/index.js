import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//首页
import Home from '../components/pages/Home/Home';
//电影院
import Films from '../components/pages/Films/Films';
//404
import Notfound from '../components/pages/Notfound/Notfound';
//详情页
import Detail from '../components/pages/Detail/Detail';
//商品页
import Goods from '../components/pages/Goods/Goods';
//购物车页
import Buycar from '../components/pages/Buycar/Buycar';
//个人中心
import Mine from '../components/pages/Mine/Mine.vue';
//登录
import Login from '../components/pages/Mine/Login/Login.vue';
//我的
import User from '../components/pages/Mine/User/User.vue';
//引入store
import store from '../store';

let router = new VueRouter({
    routes:[
        { path:'',redirect:'/home' },
        { path:'/home', name:'home', component:Home },
        { path:'/films', name:'films', component:Films },
        { path:'/detail/:id', name:'detail', component:Detail, props:true},
        { path:'/goods', name:'goods',component:Goods },
        { path:'/buycar' ,name:'buycar', component:Buycar},
        { path:'/mine' ,name:'mine', component:Mine, children:[
            { path:'login', name:'login', component:Login },
            { path:'user', name:'user', component:User }
        ]},
        { path:'/404', component:Notfound },
        { path:'**', redirect:'/404' }
    ]
});

export default router;