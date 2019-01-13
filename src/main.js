import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.scss'
import VueAxios from './lib/vue-axios'
import router from './lib/router.js'
Vue.config.productionTip = false
    //使用中间件
Vue.use(ElementUI);
Vue.use(VueAxios)
    //导入自定义组件

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')