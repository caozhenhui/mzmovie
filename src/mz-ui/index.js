import BackTop from './back-top/BackTop.vue';
import Cell from './cell/Cell.vue';
import Total from './cell/Total.vue';

export default {
    install (Vue) {
        Vue.component('back-top', BackTop);
        Vue.component('cell', Cell);
        Vue.component('total', Total);
    }
}