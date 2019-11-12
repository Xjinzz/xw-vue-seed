
<template>
    <nav class='navbar'>
        <div class='nav-header left'>
            
        </div>
        <div class='nav-navLinks right'>
            <ul>
                <li class='userInfo'>
                    <a class='user'>
                        <i class='fa fa-user-circle'>
                            {{uname}}
                        </i>
                        <span></span>
                    </a>
                    <div class='login-info'>
                        <a @click="logOut">LogOut</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import util from "@util";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('login_store');
export default {
    name:"Top",
    data(){
        return {
            uname:""
        };
    },
    methods:{
        ...mapActions(["doLogOut"]),
        logOut(){
            this.doLogOut(()=>{
                this.alert.showAlert("success","登出成功");
                this.$router.push({path:"/login"});
            })
        }
    },
    mounted(){
        this.uname = util.cookie.getCookie("uname");
    }
}
</script>

<style scoped>

</style>