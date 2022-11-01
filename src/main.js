import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import VueRouter from 'vue-router'
import CitiesList from "@/components/CitiesList";
import Chambery from "@/components/Chambery";


Vue.use(VueRouter)


const routes = [
    {path: '/cities', component: CitiesList},
    {path: '/', component: Chambery},
]

const router = new VueRouter({
    routes,
})


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
