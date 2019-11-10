
import Service from "../../services/login.js";

export default {
    namespaced: true,
    state:{
        entity: {
            username:"", 
            password:"", 
        }
    },
    mutations:{
        setEntity(state,data){
            if(!data){
                state.entity = {
                    username:"",
                    password:""
                }
            }else{
                state.entity = {
                    username:data.username,
                    password:data.password
                }
            }
        },
    },
    actions:{
        doLogin(context,data){
            Service.doLogin(context.state.entity,(res)=>{
                data.cb && data.cb(res);
            });
        },
        doLogOut(context,data){
            Service.doLogOut((res)=>{
                context.commit("setEntity",null);
                data.cb && data.cb(res);
            });
        }
    }
}