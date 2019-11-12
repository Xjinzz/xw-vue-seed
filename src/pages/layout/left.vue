
<template>
    <nav id='navbar-side' class='navbar-side'>
        <div class='showNavBar'><i class='fa fa-play'></i></div>
        <div id='navBar'>
            <ul class='sideList'>
                <li v-for="(item,idx) in menus" @click="go(item)" :key="idx">{{item.name}}</li>
            </ul> 
        </div>
    </nav>
</template>
<script>

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('menus_store');
export default {
    name:"Left",
    data(){
        return {}
    },
    computed:{
        ...mapState(["menus"])
    },
    methods:{
        ...mapActions(["getMenus"]),
        go(item){
            this.$router.push({path:item.path});
        }
    },
    mounted(){
        this.getMenus(()=>{
            this.alert.showAlert("success","获取菜单列表成功!");
        })
    }
}
</script>

<style scoped>

</style>