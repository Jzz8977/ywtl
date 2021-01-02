import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/dist"

        },
        {
            path: '/dist',
            name: 'index',
            component: Index
        }
    ]
})