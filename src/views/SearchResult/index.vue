<template>
  <div class="page-search-result">
    <normal-header :title="keyword" :showRight="false"></normal-header>

    <div class="search-result-main">
       <cartoon-list :list="cartoonList" ></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { getSerachResult } from '@/api/cartoon'
export default {
  name: 'SearchResult',

  components: {
    NormalHeader,
    CartoonList
  },

  data () {
    return {
      keyword: this.$route.query.keyword,
      list: []
    }
  },
  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.id,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: item.lastpartname
        }
      })
    }
  },
  methods: {
    getSerachResult (name) {
      getSerachResult(name).then(res => {
        // info是获取的数据，hotwordslist是数据info里的数据
        this.list = res.info
        // console.log(res.info)// 查看是否获取数据
      })
    }
  },
  created () {
    this.getSerachResult(this.keyword)
  }

}
</script>

<style lang="scss" scoped>
.page-search-result {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-result-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
