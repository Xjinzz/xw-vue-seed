
import Service from "../../service/menu.js";

export default {
    namespaced: true,
    state:{
        menus:[]
    },
    mutations:{
        setMenus(state,data){
            if(data && data instanceof Array){
                state.menus = data;
            }
        },
    },
    actions:{
        getMenus(context,cb){
            if(context.state.menus.length >0){
                return;
            }
            Service.getMenus((res)=>{
                context.commit("setMenus",res);
                cb && cb(res);
            });
        }
        
    }
}