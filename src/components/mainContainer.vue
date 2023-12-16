<template>
  <div class="home">
    <el-container   style="top: 0px">
      <el-header class="header">基于生成式AI的青少年个性化学习平台标注系统</el-header>
      <el-container>
        <el-aside width="300px">
          <!-- 使用插槽 -->
          <slot name="asideContent">Aside</slot>
        </el-aside>
        <el-main>
          <!-- 使用插槽 -->
          <slot name="mainContent">Main</slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script setup>

</script>

<style scoped lang="less">
.home {
  .header{
    background-color: #409EFF;
    color: #d9ecff;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
  }
  .el-container {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    .el-aside {
      color: #333;
      background-color: #d9ecff;
    }
    .el-main {
      background-color: #ecf5ff; 
      padding: 30px 50px;
    }
  }
}
</style>
  
  