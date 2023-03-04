import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/views/Index.vue';
import Test from '@/views/Test.vue';
import Home from '@/views/auth/Home.vue';
import Ex from '@/views/Ex.vue';

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },

    {
        path: '/test',
        name: 'Test',
        component: Test
    },

    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/example',
        name: 'Ex',
        component: Ex
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;