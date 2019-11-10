
import Service from "../../services/menu.js";

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
        getMenus(context,data){
            Service.getMenus((res)=>{
                context.commit("setMenus",res.data);
                data.cb && data.cb(res);
            });
        }
        
    }
}