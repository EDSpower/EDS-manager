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
        path: '/index',
        component: index
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router