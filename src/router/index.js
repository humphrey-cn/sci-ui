/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-10 10:15:05
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-10 13:36:27
 * @FilePath: /sci-ui/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Doc from '@/views/doc'
// import HhButton from '@/views/doc/button'
// import HhMenu from '@/views/doc/menu'
// import Install from '../../markdown/install.md'

import Button from '@/views/doc/button'
import Menu from '@/views/doc/menu'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'sci-home', // 首页
        component: Home
    },
    {
        path: '/doc',
        name: 'sci-doc', // 文档页面
        component: Doc,
        children: [
            { path: 'install', name: 'sci-install', component: Button },
            { path: 'quickstart', name: 'sci-quickstart', component: Button },
            { path: 'button', name: 'sci-button', component: Button },
            { path: 'border', name: 'sci-border', component: Button },
            { path: 'radio', name: 'sci-radio', component: Button },
            { path: 'input', name: 'sci-input', component: Button },
            { path: 'menu', name: 'sci-menu', component: Menu },
        ]
    },
]

export default new VueRouter({
    routes,
})
