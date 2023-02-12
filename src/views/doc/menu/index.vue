<template>
    <div class="sci-menu">
        <h1 class="sci-title">Menu 导航菜单</h1>
        <p>为网站提供导航功能的菜单</p>
        <div class="sci-box">
            <h2>侧栏</h2>
            <p>垂直菜单，可内嵌子菜单</p>
            <Preview :component="MenuView" />
        </div>
    </div>
</template>

<script>
import Preview from '@/components/preview.vue';
import MenuView from './menu.preview.vue'
export default {
    name: 'doc-menu',
    data() {
        return {
            MenuView,
        }
    },
    components: { Preview }
}
</script>

<style lang="less" scoped>

</style>