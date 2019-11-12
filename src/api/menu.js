

import util from "@util";
let _vue_instance = util.getVueInstance();

let menus_url = "";

export default{
    getMenus(){
        let menus = [
            {name:"菜单1",path:"/layout/m1"},
            {name:"菜单2",path:"/layout/m2"},
            {name:"菜单3",path:"/layout/m3"}
        ];
        return new Promise((resolve,reject)=>{
            resolve(menus);
        });
        // return _vue_instance.ajax.getFetch(menus_url);
    }
}