import Vue from 'vue';

let handlers = {
    'scroll-hide':(el, binding, context, e) => {
        //获取自定义属性上的距离
        let distance = el.getAttribute('scroll-hide-distance');
        //当scrolltop大于300时候 显示返回顶部图标
        if(document.documentElement.scrollTop >= distance) {
            //更改显示隐藏的数据
           if(!context[binding.arg]){
                context[binding.arg] = true;
           };
           return false;
        }else{
            if(context[binding.arg]){
                context[binding.arg] = false;
            };
            return false;
        }
    },
    //返回顶部
    'back-top':() => {
        document.documentElement.scrollTop = 0;
    }
}
//封装显示隐藏指令，传入一个数据，在某一个时刻去改变元素显示隐藏
Vue.directive('scroll-hide',{
    bind (el, binding, {context}) {
       window.addEventListener('scroll',handlers[binding.name].bind(this, el, binding, context));
    },
    unbind (el,binding) {
       window.removeEventListener('scroll',handlers[binding.name]);
    }
});

//封装返回顶部指令
Vue.directive('back-top',{
    inserted (el, binding) {
        let event_type = binding.arg || 'click';
        el.addEventListener(event_type,handlers[binding.name]);
    },
    unbind (el, binding) {
        let event_type = binding.arg || 'click';
        el.removeEventListener(event_type,handlers[binding.name]);
    }
});