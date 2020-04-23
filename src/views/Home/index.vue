<template>
  <div class="page-home">
     <index-header></index-header>
    <div class="index-main">
      <!-- 首页头部end -->
      <swiper class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
        <swiper-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" />
        </swiper-item>
      </swiper>
     <index-nav></index-nav>
     <index-recommend v-for="item in recommendList" :key="item.soecialid" :info="item"></index-recommend>

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner, getIndexRecommend } from '@/api/cartoon'
import IndexNav from './components/IndexNav'
import IndexRecommend from './components/IndexRecommend'
import IndexHeader from './components/IndexHeader'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem,
    IndexNav,
    IndexRecommend,
    IndexHeader
  },

  data () {
    return {
      bannerList: [],
      recommendList: []
    }
  },

  methods: {
    onChange (index) {
      console.log('hello', index)
    },

    getBanner () {
      getBanner()
        .then(res => {
          if (res.code === 200) {
            this.bannerList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    getIndexRecommend () {
      getIndexRecommend()
        .then(res => {
          console.log(res)

          if (res.code === 200) {
            this.recommendList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },

  created () {
    this.getBanner()
    this.getIndexRecommend()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .my-swiper img {
    width: 100%;
  }

}
</style>
