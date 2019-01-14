import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        component: login
    },
    {
        path: '/login',
        redirect: '/'
    },
    {
        path: '/index',
        component: index
    }
]
const router = new VueRouter({
        mode: 'history',
        routes,

    })
    //导航守卫
router.beforeEach((to, from, next) => {
    console.log(to.path);

    if (to.path == '/' || to.path == '/login') {
        next()
    } else {
        let token = window.sessionStorage.getItem('token')
        if (!token) {
            Vue.prototype.$message.error('请先登录');
            next('/')
        } else {
            next()
        }
    }
})

export default router