<template>
  <div class="header clearfix wow slideInDown animated">
    <div class="wrap01 clearfix">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/upload/2019-05/155901071514443700.jpg" alt="logo">
        </router-link>
      </div>

      <div class="navBtn" @click="toggleMenu">
      </div>

      <div class="contact">
        <ul class="clearfix">
          <li>
            <a href="http://60.174.248.118/" target="_blank">
              <span>企业邮箱</span>
              <img src="@/assets/images/t01.png" alt="">
            </a>
          </li>
          <li class="search-o">
            <a @click="showSearch">
              <span>信息搜索</span>
              <img src="@/assets/images/t02.png" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="nav">
        <span class="line" :style="{ left: lineLeft + 'px', width: lineWidth + 'px' }">
          <img src="@/assets/images/navline-em.jpg" alt="">
        </span>
        <span class="hdrShadow" :style="{ display: showShadow ? 'block' : 'none', opacity: 1 }"></span>
        <ul class="clearfix">
          
          <li v-for="(menu, index) in menuItems" :key="index" 
              @mouseenter="handleMenuHover(index, true)" 
              @mouseleave="handleMenuHover(index, false)">
            <router-link :to="menu.path">{{ menu.title }}</router-link>
            <dl :class="'secNav_' + index" :style="{ display: menu?.showSubmenu ? 'block' : 'none', opacity: 1 }">
              <dt v-for="(submenu, subIndex) in menu.children" :key="subIndex">
                <router-link :to="submenu.path">{{ submenu.title }}</router-link>
              </dt>
            </dl>
          </li>
        </ul>
      </div>

      <div class="form-search" :style="{ top: searchVisible ? '116px' : '-100px', opacity: searchVisible ? 1 : 0 }">
        <input type="text" v-model="searchKeyword" placeholder="请输入搜索关键词">
        <input type="submit" value="搜索" @click="handleSearch">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MainHeader',
  setup() {
    const route = useRoute()
    const isMenuVisible = ref(false)
    const searchVisible = ref(false)
    const searchKeyword = ref('')
    const activeIndex = ref('/')
    const lineLeft = ref(0)
    const lineWidth = ref(76)
    const showShadow = ref(false)

    const menuItems = ref([
      {
        title: '首页',
        path: '/',
        showSubmenu: false,
        children: []
      },
      {
        title: '公司概况',
        path: '/about',
        showSubmenu: false,
        children: [
          { title: '公司概况', path: '/about/overview' },
          { title: '组织架构', path: '/about/structure' },
          { title: '企业资质', path: '/about/qualification' },
          { title: '发展历程', path: '/about/history' },
          { title: '信息披露', path: '/about/disclosure' }
        ]
      },
      {
        title: '新闻资讯',
        path: '/news',
        showSubmenu: false,
        children: [
          { title: '公司新闻', path: '/news/company' },
          { title: '行业动态', path: '/news/industry' },
          { title: '招标公告', path: '/news/tender' },
          { title: '人行利率', path: '/news/rate' },
          { title: '业务收费目录', path: '/news/fees' },
          { title: '学习贯彻习近平新时代中国特色社会主义思想主题教育', path: '/news/education' },
          { title: '学习宣传贯彻党的二十大精神', path: '/news/spirit' },
          { title: '党建宣传', path: '/news/party' },
          { title: '深入学习贯彻党的二十届三中全会精神', path: '/news/meeting' }
        ]
      },
      {
        title: '业务领域',
        path: '/business',
        showSubmenu: false,
        children: [
          { title: '科技创新型企业设备', path: '/business/tech' },
          { title: '农业机械设备', path: '/business/agriculture' },
          { title: '优质中小企业以及基础设施', path: '/business/infrastructure' },
          { title: '交通运输', path: '/business/transport' },
          { title: '医疗器械等领域', path: '/business/medical' }
        ]
      },
      {
        title: '产品结构',
        path: '/products',
        showSubmenu: false,
        children: [
          { title: '售后回租', path: '/products/leaseback' },
          { title: '直接租赁', path: '/products/direct' },
          { title: '厂商租赁', path: '/products/vendor' },
          { title: '经营租赁', path: '/products/operating' },
          { title: '联合租赁', path: '/products/joint' },
          { title: '转租赁', path: '/products/sublease' },
          { title: '经营范围', path: '/products/scope' },
          { title: '客户案例', path: '/products/cases' }
        ]
      },
      {
        title: '政策法规',
        path: '/policy',
        showSubmenu: false,
        children: [
          { title: '法律法规', path: '/policy/laws' },
          { title: '税务法规', path: '/policy/tax' },
          { title: '会计准则', path: '/policy/accounting' },
          { title: '政策宣传', path: '/policy/promotion' },
          { title: '全民国家安全教育日宣传', path: '/policy/security' },
          { title: '征信宣传', path: '/policy/credit' }
        ]
      },
      {
        title: '招贤纳士',
        path: '/jobs',
        showSubmenu: false,
        children: [
          { title: '招贤纳士', path: '/jobs' }
        ]
      },
      {
        title: '联系我们',
        path: '/contact',
        showSubmenu: false,
        children: [
          { title: '联系我们', path: '/contact/us' },
          { title: '严正声明', path: '/contact/statement' },
          { title: '免责声明', path: '/contact/disclaimer' }
        ]
      }
    ])

    // 切换移动端菜单显示状态
    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value
    }

    // 显示搜索框
    const showSearch = () => {
      searchVisible.value = !searchVisible.value
    }

    // 处理搜索提交
    const handleSearch = () => {
      if (!searchKeyword.value) return
      // 实现搜索逻辑
      console.log('Search:', searchKeyword.value)
      searchVisible.value = false
    }

    // 处理菜单项悬停
    const handleMenuHover = (index, isHover) => {
      console.log(index, isHover)
      if (window.innerWidth <= 750) return
      // 首页不显示副菜单
      if (index === 0) {
        menuItems.value[index].showSubmenu = false
        showShadow.value = false
      } else {
        menuItems.value[index].showSubmenu = isHover
        showShadow.value = isHover
      }
      if (isHover) {
        updateNavLine(index + 1) // +1 是因为首页
      } else {
        // 当鼠标离开时，恢复原来的导航线位置
        const currentPath = route.path
        const currentIndex = menuItems.value.findIndex(item => currentPath.startsWith(item.path))
        if (currentIndex > -1) {
          updateNavLine(currentIndex + 1)
        } else if (currentPath === '/') {
          updateNavLine(0)
        }
      }
    }

    // 更新导航线位置
    const updateNavLine = async (index) => {
      await nextTick()
      const menuList = document.querySelectorAll('.nav ul li')
      let width = 0
      for (let i = 0; i < index - 1; i++) {
        width += menuList[i].offsetWidth
      }
      lineLeft.value = width
      lineWidth.value = menuList[index - 1]?.offsetWidth || 76
    }

    // 监听路由变化更新激活状态
    const updateActiveIndex = () => {
      const path = route.path
      activeIndex.value = path
      const index = menuItems.value.findIndex(item => path.startsWith(item.path))
      if (index > -1) {
        updateNavLine(index + 1) // +1 是因为首页
      } else if (path === '/') {
        updateNavLine(0)
      }
    }

    onMounted(() => {
      updateActiveIndex()
      
      if (window.innerWidth > 750) {
        const navItems = document.querySelectorAll('.nav li')
        navItems.forEach((item, index) => {
          item.addEventListener('mouseenter', () => handleMenuHover(index, true))
          item.addEventListener('mouseleave', () => handleMenuHover(index, false))
        })
      }
    })

    return {
      isMenuVisible,
      searchVisible,
      searchKeyword,
      activeIndex,
      lineLeft,
      lineWidth,
      showShadow,
      menuItems,
      toggleMenu,
      showSearch,
      handleSearch,
      handleMenuHover
    }
  }
}
</script>

<style>
/* 使用 Element Plus 的样式覆盖 */
.el-menu--horizontal {
  border-bottom: none !important;
}

.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
  height: 116px;
  line-height: 116px;
  font-size: 16px;
  padding: 0 22px;
  color: #333;
}

.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  color: #b70b16;
  border-bottom: none;
}

.el-menu--horizontal .el-menu .el-menu-item {
  height: 55px;
  line-height: 55px;
  padding: 0 10px;
  font-size: 16px;
}

.el-sub-menu__title {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    height: 46px;
    line-height: 46px;
    font-size: 14px;
    padding: 0 0 0 2.5%;
    border-bottom: 1px solid #ccc;
  }

  .el-menu--horizontal .el-menu .el-menu-item {
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    padding-left: 5%;
  }
}
</style> 