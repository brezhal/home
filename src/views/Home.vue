<template>
  <div class="home">
    <!-- 顶部横幅轮播 -->
    <el-carousel height="500px" class="banner">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img :src="item.image" :alt="item.title" class="banner-img">
      </el-carousel-item>
    </el-carousel>

    <div class="container">
		<div class="aArea">
			<div class="wrap clearfix">
				<div class="aArea01 wow fadeInLeft animated" style="visibility: visible; animation-name: fadeInLeft;">
					<div class="p1"><p>公司概况</p><span>服务中小 / 服务民生 / 服务三农</span></div>
					<div class="p2">
												徽银金融租赁有限公司由徽商银行作为主发起人，经中国银行保险监督管理委员会批准设立的金融机构，于2015年4月成立的安徽省银行系金融租赁公司。......											</div>
					<div class="p3"><router-link to="/about/overview">了解更多</router-link></div>
					<div class="p4">
						<ul class="clearfix">
							<li v-for="(item, index) in statistics" :key="index">
								<div class="t1">
									<span :class="'counter' + (index + 1)">{{ item.value }}</span>
									<span>{{ item.unit }}</span>
								</div>
								<div class="t2">{{ item.label }}</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="aArea02">
					<video :src="videoUrl" :poster="videoPoster" controls width="100%" height="auto" data-video="0"></video>
				</div>
			</div>
		</div>
		
		<div class="bArea">
			<div class="wrap">
				<div class="Area-hd"><span>产品结构</span></div>
				<div class="bArea01 wow fadeInUp animated">
					<swiper
						:modules="[Navigation]"
						:slides-per-view="4"
						:space-between="0"
						:breakpoints="{
							1100: { slidesPerView: 3 },
							640: { slidesPerView: 2 },
							320: { slidesPerView: 1 }
						}"
						navigation
					>
						<swiper-slide v-for="(product, index) in products" :key="index">
							<router-link :to="product.path">
								<div class="p1">
									<img :src="product.image" :alt="product.title">
								</div>
								<div class="p2">{{ product.title }}</div>
								<div class="p3"><strong>{{ product.subtitle }}</strong></div>
							</router-link>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
		
		<div class="cArea">
			<div class="Area-hd"><span>业务领域</span></div>
			<div class="cArea01 wow fadeInUp animated">
				<swiper
					:modules="[]"
					:slides-per-view="5"
					:space-between="0"
					:breakpoints="{
						1280: { slidesPerView: 4 },
						1100: { slidesPerView: 3 },
						640: { slidesPerView: 2 },
						320: { slidesPerView: 1 }
					}"
				>
					<swiper-slide v-for="(business, index) in businesses" :key="index">
						<router-link :to="business.path">
							<div class="p1">
								<img :src="business.image" :alt="business.title">
							</div>
							<div class="p2">{{ business.title }}</div>
						</router-link>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		
		<div class="dArea">
			<div class="wrap">
				<div class="Area-hd"><span>新闻资讯</span></div>
				<div class="dArea01">
					<div class="hd">
						<ul class="clearfix">
							<li 
								v-for="(tab, index) in newsTabs" 
								:key="index"
								:class="{ on: currentTab === index }"
								@click="currentTab = index"
							>
								{{ tab }}
							</li>
						</ul>
					</div>
					<div class="bd">
						<div v-for="(newsList, index) in news" :key="index" class="clearfix" :style="{ display: currentTab === index ? 'block' : 'none' }">
							<div class="dBox01 wow fadeInLeft animated">
								<ul class="clearfix">
									<li v-for="(item, newsIndex) in newsList.featured" :key="newsIndex">
										<router-link :to="item.path">
											<div class="pic">
												<img :src="item.image" :alt="item.title">
											</div>
											<div class="txt">
												<div class="p1">{{ item.title }}</div>
												<div class="p2">{{ item.date }}</div>
												<div class="p3">{{ item.summary }}</div>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
							<div class="dBox02 wow fadeInRight animated">
								<ul>
									<li v-for="(item, newsIndex) in newsList.list" :key="newsIndex" class="clearfix">
										<router-link :to="item.path">
											<div class="date">
												<p>{{ item.day }}</p>
												<span>{{ item.month }}</span>
											</div>
											<div class="txt">
												<div class="p1">{{ item.title }}</div>
												<div class="p2">{{ item.summary }}</div>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="link">
			<div class="wrap clearfix">
				<div class="link01 wow fadeInLeft animated" style="visibility: visible; animation-name: fadeInLeft;">友情链接</div>
				<div class="link02 wow fadeInRight animated" style="visibility: visible; animation-name: fadeInRight;">
										<a href="http://www.hsbank.com.cn/" rel="nofollow" target="_blank">徽商银行股份有限公司</a>
										<a href="http://www.afecc.com/" rel="nofollow" target="_blank">安徽省华安外经建设（集团）有限公司</a>
										<a href="http://wz.crec4.com/" rel="nofollow" target="_blank">中铁四局集团物资工贸有限公司</a>
										<a href="http://www.cbirc.gov.cn/" rel="nofollow" target="_blank">中国银行保险监督管理委员会</a>
										<a href="http://www.pbc.gov.cn/" rel="nofollow" target="_blank">中国人民银行</a>
										<a href="http://www.cbirc.gov.cn/branch/anhui/view/pages/index/index.html" rel="nofollow" target="_blank">安徽银保监局</a>
									</div>
			</div>
		</div>
	</div>

    <!-- 友情链接 -->
    <div class="section links">
      <div class="wrap">
        <h2 class="section-title">友情链接</h2>
        <div class="link-list">
          <a v-for="link in friendlyLinks" 
             :key="link.id" 
             :href="link.url" 
             target="_blank" 
             class="link-item">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      activeNewsTab: 'company',
      banners: [
        {
          id: 1,
          image: require('@/assets/upload/2024-04/171437017715843200.jpg'),
          title: '横幅1'
        },
        {
          id: 2,
          image: require('@/assets/upload/2019-06/156082713095171000.jpg'),
          title: '横幅2'
        },
        {
          id: 3,
          image: require('@/assets/upload/2019-10/157196777528832900.jpg'),
          title: '横幅3'
        }
      ],
      companyStats: [
        { number: '5', desc: '业务领域' },
        { number: '30', desc: '亿元人民币注册资金' },
        { number: '120', desc: '人为我们奉献着他们青春' },
        { number: '600', desc: '目前资产规模突破600亿元' }
      ],
      products: [
        {
          id: 1,
          title: '直接租赁',
          desc: 'SALES',
          icon: require('@/assets/upload/2019-05/155901081472099600.png')
        },
        {
          id: 2,
          title: '售后回租',
          desc: 'AFTER SALE',
          icon: require('@/assets/upload/2019-06/156041050559815400.png')
        },
        {
          id: 3,
          title: '厂商租赁',
          desc: 'MANUFACTURER',
          icon: require('@/assets/upload/2019-06/156041055568616700.png')
        },
        {
          id: 4,
          title: '经营租赁',
          desc: 'MANAGEMENT',
          icon: require('@/assets/upload/2019-06/156041059051863700.png')
        }
      ],
      businesses: [
        {
          id: 1,
          title: '科技创新型企业设备',
          image: require('@/assets/upload/2019-06/156041192583722300.jpg')
        },
        {
          id: 2,
          title: '农业机械设备',
          image: require('@/assets/upload/2019-06/156041196206395700.jpg')
        },
        {
          id: 3,
          title: '交通运输',
          image: require('@/assets/upload/2019-06/156041210572534300.jpg')
        }
      ],
      featuredNews: {
        image: require('@/assets/upload/2025-03/174235362948413000.jpg'),
        title: '严琛董事长赴徽银金租公司开展工作调研',
        date: '2024-02-18'
      },
      newsList: [
        {
          id: 1,
          date: '2024-02-18',
          title: '严琛董事长赴徽银金租公司开展工作调研'
        },
        {
          id: 2,
          date: '2024-02-08',
          title: '徽银金融租赁有限公司召开2024年工作会议'
        },
        {
          id: 3,
          date: '2024-01-11',
          title: '徽银金融租赁有限公司成功发行三年期一体化车辆租赁债权'
        },
        {
          id: 4,
          date: '2024-01-23',
          title: '践行新发展理念，以"金融活水"为实体经济赋能'
        }
      ],
      friendlyLinks: [
        { id: 1, name: '徽商银行股份有限公司', url: 'http://www.hsbank.com.cn/' },
        { id: 2, name: '中国银行保险监督管理委员会', url: 'http://www.cbirc.gov.cn/' },
        { id: 3, name: '中国人民银行', url: 'http://www.pbc.gov.cn/' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
}

/* 轮播图样式 */
.banner {
  width: 100%;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
  .stats-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .section {
    padding: 40px 0;
  }

  .news-featured img {
    height: 200px;
  }
}

@media screen and (max-width: 480px) {
  .stats-list {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>