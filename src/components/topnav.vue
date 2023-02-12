<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-10 10:20:34
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-10 11:31:26
 * @FilePath: /sci-ui/src/components/topnav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="sci-topnav sci-flex-c">
        <div class="sci-logo" @click="goHome">SCI</div>
        <ul class="sci-flex">
            <li class="sci-hover" @click="goDoc">文档</li>
            <li class="sci-hover">更新日志</li>
            <li class="sci-hover">版本</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sci-topnav',
    methods: {
        goHome() {
            if (this.$route.path === '/home') return
            this.$router.replace('/')
        },
        goDoc() {
            if (this.$route.path === '/doc') return
            this.$router.push('/doc')
        },
    }
}
</script>

<style lang="less" scoped>
.sci-topnav {
    border-bottom: 1px solid @sci-border-color;
    height: 80px;
    justify-content: space-between;

    .sci-logo {
        font-size: 40px;
        color: @sci-color-title-theme;
        cursor: pointer;
    }

    ul {
        gap: 30px;
        color: @sci-color-theme;
    }
}
</style>