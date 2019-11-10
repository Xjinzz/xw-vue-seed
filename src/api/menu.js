
let menus_url = "";

export default{
    getMenus(context){
        return context.ajax.getFetch(menus_url);
    }
}