<template>
  <div id="NavMenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <!-- 
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">师生交流</el-menu-item>
      <el-menu-item index="3">求职招聘</el-menu-item>
      <el-submenu index="4">
        <template slot="title">学术动态</template>
        <el-menu-item index="4-1">免费尖端期刊新刊论文</el-menu-item>
        <el-menu-item index="4-2">中医药最新研究成果</el-menu-item>
      </el-submenu> 
      <el-menu-item index="5">资源推荐</el-menu-item>
      -->

      <template v-for="item in navMenuData">
        <el-menu-item :index="item.index" v-if="!item.child">{{item.name}}</el-menu-item>

        <el-submenu :index="item.index" v-if="item.child">

            
          <template slot="title">{{item.name}}</template>
          <template v-for="item2 in item.child">
            <el-menu-item :index="item2.index">{{item2.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "forum",     
      navMenuData: [
        { index: "homepage", name: "首页" },
        { index: "chat", name: "师生交流" },
        { index: "job", name: "求职招聘"},
        {
          index: "trends",
          name: "学术动态",
          child: [{ index: "eassy", name: "免费尖端期刊新刊论文" },{ index: "achievement", name: "中医药最新研究成果" }]
        },
       { index: "resource", name: "资源推荐"},
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){         
      console.log(this.activeIndex)        
      console.log(this.$route.path)      
      this.activeIndex = this.$route.path.substring(1,this.$route.path.length);     

  }
};
</script>

<style scoped>
</style>
