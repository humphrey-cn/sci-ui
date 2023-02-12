import SciMenu from './src/menu';

/* istanbul ignore next */
SciMenu.install = function (Vue) {
    Vue.component(SciMenu.name, SciMenu);
};

export default SciMenu;
