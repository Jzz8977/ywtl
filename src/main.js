// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { setRemInit } from '../static/rem'
// setRemInit();
import $ from 'jquery'
Vue.prototype.$ = $;
Vue.config.productionTip = false
import Cookies from 'js-cookie'
// 请求地址参数
import { request } from './utils/api'
import headerTit from './components/header/headerTit'
Vue.component('headerTit', headerTit)

import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
import axios from 'axios'
// import Cookies from 'js-cookie'
//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
        // if (store.getters.token) {
        //     store.dispatch('setToken', store.getters.token)
        //     if (to.path === '/login') {
        //         next({ path: '/' })
        //     } else {
        //         next()

        //     }
        // } else {
        //     if (to.path === '/login') {
        //         next()
        //     }
        //     next({ path: '/login' })
        // }
        next()
    })
    // ajax请求组件
    // eslint-disable-next-line one-var
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken
    // 请求拦截器
axios.interceptors.request.use(config => {
    let token = request.token;
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = token;
        console.log('interceptors config=', config)
    }
    // 发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                // this.$alert('错误请求', '提示信息');
                console.log('错误请求')
                break
            case 401:
                // this.$alert('未授权，请重新登录', '提示信息');
                console.log('未授权，请重新登录')
                break
            case 403:
                // this.$alert('拒绝访问', '提示信息');
                console.log('拒绝访问')
                break
            case 404:
                // this.$alert('请求错误,未找到该资源', '提示信息');
                console.log('请求错误,未找到该资源')
                break
            case 405:
                // this.$alert('请求方法未允许', '提示信息');
                console.log('请求方法未允许')
                break
            case 408:
                // this.$alert('请求超时', '提示信息');
                console.log('请求超时')
                break
            case 500:
                // this.$alert('服务器端出错', '提示信息');
                console.log('服务器端出错')
                break
            case 501:
                // this.$alert('网络未实现', '提示信息');
                console.log('网络未实现')
                break
            case 502:
                // this.$alert('网络错误', '提示信息');
                console.log('网络错误')
                break
            case 503:
                // this.$alert('服务不可用', '提示信息');
                console.log('服务不可用')
                break
            case 504:
                // this.$alert('网络超时', '提示信息');
                console.log('网络超时')
                break
            case 505:
                // this.$alert('http版本不支持该请求', '提示信息');
                console.log('http版本不支持该请求')
                break
            default:
                console.log(`连接错误${err.response.status}`)
        }
    } else {
        err.message = '连接到服务器失败'
            // alert('连接到服务器失败', '提示信息');
    }
    console.log(err.message)
    return Promise.resolve(err.response)
})

axios.defaults.baseURL = request.baseURL // 付振
axios.defaults.withCredentials = false;
// 设置默认请求头
axios.defaults.headers = {
    'Content-Type': 'application/json;',
    'X-Access-Token': request.token
}
axios.defaults.timeout = 10000

// get请求 = (name) => {
Vue.prototype.$get = (url, param) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            params: param,
            cancelToken: new CancelToken(c => {
                cancel = c
            })
        }).then(res => {
            resolve(res)
            if (res.data.code === -1009) {
                loginErr()
                return false
            }
        })
    })
}

// post请求
Vue.prototype.$post = (url, param, responseType) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: param,
            responseType,
            cancelToken: new CancelToken(c => {
                cancel = c
            })
        }).then(res => {
            resolve(res)
            if (res != undefined && res.data != undefined && res.data.code != undefined && res.data.code === -1009) {
                loginErr()
                return false
            }
        })
    })
}

Vue.prototype.subFont = (size) => {
    let docEl = document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100
    return size * fontSize;
}

function loginErr() {
    MessageBox.confirm('您的账号已在其它地方登录 ！', '信息提示！', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '重新登录'
        })
        .then(() => {
            Cookies.remove('bimToken')
            sessionStorage.removeItem('bimStore')
            localStorage.removeItem('bimLoginData')
            location.reload()
        })['catch']((action) => {
            Cookies.remove('bimToken')
            sessionStorage.removeItem('bimStore')
            localStorage.removeItem('bimLoginData')
            location.reload()
        })
    return false
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})