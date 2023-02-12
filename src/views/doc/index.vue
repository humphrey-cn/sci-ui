<template>
  <div class="sci-doc sci-flex">
    <aside class="sci-aside">
      <ul v-for="(nav, index) in navs" :key="index">
        <h2 class="sci-title" v-if="nav.title">{{ nav.title }}</h2>
        <ul v-for="(li, idx) in nav.children" :key="idx">
          <span v-if="li.type">{{ li.type }}</span>
          <li v-for="item in li.list" :key="item.name" class="sci-hover" :class="item.name == activeName && 'sci-active'" @click="golink(item)">
            {{ item.text }}
          </li>
        </ul>
      </ul>
    </aside>
    <main class="sci-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { navs } from './data.json'
export default {
  name: 'doc',
  data() {
    return {
      navs,
      activeName: ''
    }
  },
  watch: {
    '$route.name': {
      immediate: true,
      handler(nv) {
        this.activeName = nv
      }
    }
  },
  methods: {
    golink(item) {
      if (this.$route.name == item.name) return
      this.$router.push(`/doc/${item.path}`)
    },
  },
}
</script>

<style lang="less" scoped>
.sci-doc {
  padding: 40px 0;

  .sci-aside {
    width: 200px;
    min-height: calc(100vh - 160px);

    ul {

      span {
        display: block;
        padding-top: 20px;
      }

      li {
        color: @sci-color-title;
        padding-top: 10px;
      }
    }
  }

  .sci-main {
    height: 100px;
    flex: 1;
    padding-left: 50px;
  }
}
</style>
