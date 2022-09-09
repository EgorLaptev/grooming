import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import NewApplication from "./pages/NewApplication.js";
import Admin from "./pages/Admin.js";

const routes = [
    { path: '', component: Home },
    { path: '/profile', component: Profile },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/new-application', component: NewApplication },
    { path: '/groom', component: Admin },
]

window.router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = Vue.createApp({
    template:
    `
        <page-header></page-header> 
        <router-view></router-view> 
    `,
    components: {
        'page-header': Header
    }
})

app.use(router)

app.mount('#app');