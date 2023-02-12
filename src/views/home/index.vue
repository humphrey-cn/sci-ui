<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-10 10:17:43
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-10 11:24:13
 * @FilePath: /sci-ui/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="sci-home">
        <h1 class="sci-title">SCI-UI</h1>
        <p>一款基于 VUE 2.X 的前端 UI 库</p>
        <div class="sci-link">
            <button class="sci-button" @click="goGithub">Github</button>
            <button class="sci-button primary" @click="goDoc">快速使用</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sci-home',
    methods: {
        goGithub() {
            window.open('https://github.com/humphrey-cn/sci-ui')
        },
        goDoc() {
            this.$router.push('/doc')
        }
    }
}
</script>

<style lang="less" scoped>
.sci-home {
    text-align: center;
    padding: 50px;

    h1 {
        font-size: 100px;
    }

    p {
        margin-top: 20px;
        font-size: 24px;
    }
    .sci-link {
        margin-top: 40px;
        button {
            margin: 0 20px;
        }
    }
}
</style>