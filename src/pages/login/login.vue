
<template>
    <div>
        <le-form labelWidth='180' ref="loginForm">
            <le-input v-model="entity.username" lable="username"></le-input>
            <le-input v-model="entity.password" lable="password"></le-input>    
            <le-button type="submit" value="Login" @click="login"></le-button>
            <le-button type="cancel" value="Cancel" @click="close"></le-button>       
        </le-form>
    </div>
</template>

<script>
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
            login(){
                this.$refs.loginForm.validate().then(x=>{
                    this.doLogin(()=>{
                        this.alert.showAlert("success","Login Success");
                    });
                }).catch(error=>{
                    this.alert.showAlert("error",error);
                })
            }
        }
    }
</script>  

<style scoped>

</style>