
let login_url = "/login";
let logOut_url = "/logout";

import util from "@util";
let _vue_instance = util.getVueInstance();

export default{
    doLogin(data){
        return _vue_instance.ajax.postFetch(login_url,data);
    },
    doLogOut(){
        return _vue_instance.ajax.postFetch(logOut_url);
    }
}