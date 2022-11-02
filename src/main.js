import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import VueRouter from 'vue-router'
import CitiesList from "@/components/CitiesList";
import Chambery from "@/components/Chambery";
import api from "@/components/api";


Vue.use(VueRouter)


const routes = [
    {path: '/cities', component: CitiesList},
    {path: '/', redirect:'/home'},
    {path: '/home', component: Chambery},
    {path: '/api', component: api},

]

const router = new VueRouter({
    routes,
})


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
