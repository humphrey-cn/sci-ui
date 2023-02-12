// import Button from "./button/index.js";
import Menu from "./menu/index.js";
// import MenuItem from "./menu-item/index.js";
// import Submenu from "./submenu/index.js";
// import MenuItemGroup from "./menu-item-group/index.js";

// const components = [Button, Menu, MenuItem, Submenu, MenuItemGroup,];
const components = [Menu];

// 定义 install 方法，接手Vue作为参数传入
const install = function (Vue) {
    // 首先需要判断是否安装
    if (install.installed) return;
    install.installed = true;
    // 遍历注册所有组件
    components.map((component) => {
        if (typeof component === "undefined" || !component.name) return;
        Vue.component(component.name, component);
    });

    // 检测是否是vue环境 
    if (typeof window !== "undefined" && window.Vue) {
        install(window.Vue);
    }
};

export default {
    version: "0.0.1",
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    ...components,
};