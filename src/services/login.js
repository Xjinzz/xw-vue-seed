import api from "../api/login.js";
import util from "@util";

let _vue_instance = util.getVueInstance();

export default {
    doLogin(data,cb){
        api.doLogin(data).then(x=>{
            cb && cb(x);
        }).catch(error=>{
            _vue_instance.alert.showAlert("error",error.data);
        })
    },
    doLogOut(cb){
        api.doLogOut().then(x=>{
            cb && cb(x);
        }).catch(error=>{
            _vue_instance.alert.showAlert("error",error.data);
        })
    }
}

