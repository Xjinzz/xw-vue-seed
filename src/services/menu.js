
import api from "../api/menu.js";
import util from "@util";
let _vue_instance = util.getVueInstance();
export default {
    getMenus(cb){
        api.getMenus().then(x=>{
            cb && cb(x);
        }).catch(error=>{
            _vue_instance.alert.showAlert("error",error.data);
        })
    }
}