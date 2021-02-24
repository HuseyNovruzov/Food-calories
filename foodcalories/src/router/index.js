import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import LoginRegister from '@/pages/LoginRegister'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/account/:type',
            name: 'LoginRegister',
            props: true,
            component: LoginRegister
        }
    ],
    mode:'history'
})