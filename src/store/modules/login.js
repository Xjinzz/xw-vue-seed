
import Service from "../../service/login.js";

export default {
    namespaced: true,
    state:{
        entity: {
            userid:"", 
            password:"", 
        }
    },
    mutations:{
        setEntity(state,data){
            if(!data){
                state.entity = {
                    userid:"",
                    password:""
                }
            }else{
                state.entity = {
                    userid:data.userid,
                    password:data.password
                }
            }
        },
    },
    actions:{
        doLogin(context,cb){
            Service.doLogin(context.state.entity,(res)=>{
                cb && cb(res);
            });
        },
        doLogOut(context,cb){
            Service.doLogOut((res)=>{
                context.commit("setEntity",null);
                cb && cb(res);
            });
        }
    }
}