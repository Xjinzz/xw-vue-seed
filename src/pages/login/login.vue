
<template>
    <div>
        <le-form labelWidth='180' ref="loginForm">
            <le-input v-model="entity.userid" label="账号" on required msg="账号必填" lable="userid"></le-input>
            <le-input v-model="entity.password" label="密码" on required vType="password" lable="password"></le-input>    
            <le-button type="submit" value="Login" @click="login"></le-button>
            <le-button type="cancel" value="Cancel" @click="cancel"></le-button>       
        </le-form>
    </div>
</template>

<script>
import util from "@util";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('login_store');
    export default {
        name:"Login",
        data(){
            return {}
        },
        computed:{
            ...mapState(["entity"])
        },
        methods:{
            ...mapActions(["doLogin"]),
            cancel(){},
            login(){
                this.$refs.loginForm.validate().then(x=>{
                    this.doLogin((data)=>{
                        this.alert.showAlert("success","Login Success");
                        util.cookie.setCookie("uname",data.data.uname);
                        this.$router.push({path:"/layout"});
                    })
                }).catch(error=>{
                    debugger
                    this.alert.showAlert("error",error);
                })
            }
        }
    }
</script>  

<style scoped>

</style>