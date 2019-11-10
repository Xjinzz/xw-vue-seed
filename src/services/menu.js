
import Vue from "vue";
import api from "../api/menu.js";

export default {
    getMenus(cb){
        api.getMenus().then(x=>{
            cb && cb(x);
        }).catch(error=>{
            Vue.alert.showAlert("error",error.data);
        })
    }
}