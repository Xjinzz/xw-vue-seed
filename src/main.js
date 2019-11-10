import Vue from 'vue';
import App from './App.vue';
import router from './routers/index.js';

import AjaxService from "./core/tool/fetch-install.js";
import * as LeComponents from "@CoreUILib/le-components.min.js";

Vue.use(AjaxService);
Vue.use(LeComponents);

router.afterEach(function(to, from, next){
  
});

export default new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
