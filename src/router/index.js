import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'login',
        component:() => import('@pages/login/login.vue')
    },
    {
        path: '/layout',
        name: 'layout',
        component:() => import('@pages/layout/layout.vue'),
        children:[
            {
                path: '/layout',
                name: 'test',
                component:() => import('@pages/test.vue')
            }
        ]
    },

];

const _router = new Router({
    routes: routers
});

export default _router;
