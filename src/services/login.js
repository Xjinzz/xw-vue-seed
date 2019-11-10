import Vue from "vue";
import api from "../api/login.js";

export default {
    doLogin(data,cb){
        api.doLogin(data).then(x=>{
            cb && cb(x);
        }).catch(error=>{
            Vue.alert.showAlert("error",error.data);
        })
    },
    doLogOut(cb){
        api.doLogOut().then(x=>{
            cb && cb(x);
        }).catch(error=>{
            Vue.alert.showAlert("error",error.data);
        })
    }
}

