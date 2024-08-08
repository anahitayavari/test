import { createWebHistory, createRouter } from 'vue-router'
import Index from "@/components/index/Index.vue";
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";


const routes = [
    {
        path : '/',
        component : Index,
        name : 'index'
    },
    {
        path : '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    }
    ]

const router = createRouter({
    history:createWebHistory() ,
    routes,
})
export default router;