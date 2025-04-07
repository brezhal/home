<template>
  <div class="about">
    <el-container>
      <el-header>
        <h1>关于我们</h1>
      </el-header>
      <el-main>
        <el-card class="about-card">
          <h2>我们的使命</h2>
          <p>这是一个使用 Vue 3 构建的响应式网站示例。我们致力于提供最好的用户体验。</p>
          
          <h2>技术栈</h2>
          <el-row :gutter="20">
            <el-col :span="8" v-for="tech in technologies" :key="tech.name">
              <el-card shadow="hover" class="tech-card">
                <h3>{{ tech.name }}</h3>
                <p>{{ tech.description }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-footer>
        <p>© 2024 我的网站</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      technologies: [
        {
          name: 'Vue 3',
          description: '渐进式 JavaScript 框架'
        },
        {
          name: 'Element Plus',
          description: '基于 Vue 3 的组件库'
        },
        {
          name: 'Vue Router',
          description: 'Vue.js 的官方路由'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.el-header {
  background-color: #409EFF;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-main {
  padding: 20px;
}

.el-footer {
  background-color: #f5f7fa;
  color: #606266;
  text-align: center;
  line-height: 60px;
}

.about-card {
  max-width: 1200px;
  margin: 0 auto;
}

.tech-card {
  margin-bottom: 20px;
  height: 150px;
}

h2 {
  color: #409EFF;
  margin-bottom: 20px;
}

h3 {
  color: #606266;
}
</style> 