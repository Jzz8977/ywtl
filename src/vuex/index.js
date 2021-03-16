import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isIframe: true,
        url: '',
        HXurl: "",
        APP_TOKEN:'',
        appUserInfo:{},
        userRoles:{}
    },
    mutations: {
        setIsIframe(state, isIframe) {
            state.isIframe = isIframe
        },
        setUrl(state, url) {
            state.url = url
        }


    },
    actions: {
        setIsIframe({
            commit
        }, isIframe) {
            return new Promise((resolve, reject) => {
                commit('setIsIframe', isIframe)
                resolve()
            })
        },
        setUrl({
            commit
        }, url) {
            return new Promise((resolve, reject) => {
                commit('setUrl', url)
                resolve()
            })
        },

    },
    getters: {
        isIframe: (state) => state.isIframe,


    },
    modules: {

    }
})

export default store