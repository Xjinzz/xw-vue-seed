
import Vue from "vue";
import Vuex from 'vuex';

import login_store from "./modules/login.js";
import menus_store from "./modules/menu.js";

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules:{
        login_store:login_store,
        menus_store:menus_store
    }
})