
import Vue from "vue";
let login_url = "";
let logOut_url = "";

export default{
    doLogin(data){
        return Vue.ajax.postFetch(login_url,data);
    },
    doLogOut(){
        return Vue.ajax.postFetch(logOut_url);
    }
}