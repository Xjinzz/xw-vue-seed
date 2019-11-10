import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'login',
        component:() => import('../pages/login/login.vue')
    },
    {
        path: '/',
        name: 'layout',
        component:() => import('../pages/layout/layout.vue'),
        children:[
            {
                path: '/test',
                name: 'test',
                component:() => import('../pages/test.vue')
            }
        ]
    },

];

const _router = new Router({
    routes: routers
});

export default _router;
