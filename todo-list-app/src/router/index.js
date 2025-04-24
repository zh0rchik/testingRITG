import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import TaskList from '../components/TaskList.vue';
import auth from '../services/auth';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/tasks',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false },
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: TaskList,
        meta: { requiresAuth: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresAuth: false },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// Глобальная навигационная защита
router.beforeEach((to, from, next) => {
    const isAuthenticated = auth.isAuthenticated();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (!requiresAuth && isAuthenticated && (to.path === '/login' || to.path === '/register')) {
        next('/tasks');
    } else {
        next();
    }
});

export default router;