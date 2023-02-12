<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2022-12-16 17:20:12
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-10 16:56:30
 * @Description:
-->
<template>
    <div>
      <ul class="sci-menu">
        <li class="sci-menu-item">侧边栏一</li>
        <li class="sci-menu-item">侧边栏二</li>
        <li class="sci-menu-item">侧边栏三</li>
        <li class="sci-submenu" ref="sci-submenu">
          <span class="sci-submenu-title" @click="clickFn(0)">二级菜单</span>
          <ul class="sci-menu--inline" :class="{ 'is-opened': isopen0 }">
            <li class="sci-menu-item">二级侧边栏一</li>
            <li class="sci-menu-item">二级侧边栏二</li>
            <li class="sci-menu-item">二级侧边栏三</li>
            <li class="sci-submenu">
              <span class="sci-submenu-title" @click="clickFn(1)">三级菜单</span>
              <ul class="sci-menu--inline" :class="{ 'is-opened': isopen1 }">
                <li class="sci-menu-item">三级侧边栏一</li>
                <li class="sci-menu-item">三级侧边栏二</li>
                <li class="sci-menu-item">三级侧边栏三</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SciMenu",
    components: {},
    data() {
      return {
        isopen0: false,
        isopen1: false
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {
      clickFn(type) {
        // this.isopen = !this.isopen
        this[`isopen${type}`] = !this[`isopen${type}`]
        console.log('1243')
      }
    },
  };
  </script>
  
  <style lang="less" scoped>
  .sci-menu {
    width: 200px;
    font-weight: 400;
    background-color: rgb(84, 92, 100);
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  
    .sci-submenu {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      .sci-submenu-title {
        color: rgb(255, 208, 75);
        // padding-left: 20px;
        cursor: pointer;
      }
  
      .sci-menu-item {
        cursor: pointer;
        // padding-left: 40px;
      }
    }
  
    .sci-menu--inline {
      height: 0;
      transition: all .3s;
      overflow: hidden;
  
      &.is-opened {
        // display: none;
        height: 300px;
      }
    }
  
    .sci-menu-item {
      padding: 10px 0 10px 20px;
      cursor: pointer;
  
      &:hover {
        color: rgb(255, 208, 75);
      }
    }
  }
  </style>
  