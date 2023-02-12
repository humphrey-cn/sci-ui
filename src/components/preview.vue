<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-10 16:59:02
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-10 17:23:36
 * @FilePath: /sci-ui/src/components/Preview.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="preview">
        <div class="pre-header">
            <button class="sci-button" @click="codeVisibleFn">{{ codeVisible? '显示' : '隐藏'}}代码</button>
        </div>
        <div class="pre-main">
            <component :is="component" />
        </div>
        <div class="pre-code" v-if="!codeVisible">
            <!-- 代码显示 -->
            {{ htm }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        component: null,
    },
    data() {
        return {
            codeVisible: false,
            html: null,
            htm: `<template>
                    <sci-menu></sci-menu>
                    <sci-menu></sci-menu>
                    <sci-menu></sci-menu>
                    <sci-menu></sci-menu>
                </template>`
        }
    },
    mounted() {

    },
    methods: {
        codeVisibleFn() {
            this.codeVisible = !this.codeVisible
        }
    }
}
</script>

<style lang="less" scoped>
.preview {
    border: 1px solid #ebebeb;

    // padding: 20px;
    .pre-header {
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        border-bottom: 1px solid #ebebeb;
    }

    .pre-main {
        padding: 20px 40px;
        border-bottom: 1px solid #ebebeb;
    }

    .pre-code {
        padding: 20px 40px;
        background-color: #fafafa;
    }

    &:hover {
        box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);

    }
}
</style>