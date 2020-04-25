<template>
  <div class="page-city">
    <normal-header
      :title="`城市选择-${curCityName}`"
      :showRight="false"
    ></normal-header>

    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div
          class="city-index-section"
          :ref="`section-${item.py}`"
          v-for="item in cityList"
          :key="item.py"
        >
          <p>{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="handleClick(city)"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click="handleIndex(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NormalHeader from "@/components/NormalHeader";
import { mapMutations, mapGetters } from "vuex";
import { getCityList } from "@/api/city";
export default {
  name: "city",

  components: {
    NormalHeader
  },
  data() {
    return {
      cities: []
    };
  },
  computed: {
    ...mapGetters("city", ["curCityName"]),
    cityList() {
      // 最终结果收集
      const result = [];
      // console.log(this.cities)
      this.cities.forEach(item => {
        // console.log(item)
        // 获取当前文字首字母
        const py = item.pinyin.substr(0, 1).toUpperCase();
        // console.log(py)
        // 判断当前py 是否已经存在 result中存在
        const index = result.findIndex(item => item.py === py);
        if (index > -1) {
          // 存在
          result[index].list.push(item);
        } else {
          result.push({
            py,
            list: [item]
          });
        }
      });
      return result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      });
    },
    indexs() {
      return this.cityList.map(item => item.py);
    }
  },
  methods: {
    ...mapMutations("city", ["SET_CURCITY"]),
    getCityList() {
      getCityList()
        .then(res => {
          const data = res.data;
          console.log(res);
          if (data.status === 0) {
            this.cities = data.data.cities;
          } else {
            alert(data.msg);
          }
        })
        .catch(err => {
          console.log(err);
          alert("网络异常，请稍后重试");
        });
    },
    handleIndex(py) {
      // ref标记时，如果是标记在V-for上。那么得到的是一个数组
      // console.log(py)
      // console.log(this.$refs[`section-${py}`][0])
      // 根据 py 获取左侧对应的元素的 DOM 对象
      const targetEl = this.$refs[`section-${py}`][0];
      // 计算这个元素距离 左侧顶部的距离
      const offsetTop = targetEl.offsetTop;
      // console.log(targetEl.offsetTop)
      // 修改左侧滚动元素的 scrollTop 属性的值
      // this.$refs.scrollLetf.scrollTop = offsetTop
      this.$refs.scrollLeft.scrollTop = offsetTop;
    },
    handleClick(city) {
      // 改变仓库
      this.SET_CURCITY(city);
      // 回到之前要去的页面
      const redirect = this.$route.query.redirect || "/";
      this.$router.replace(redirect);
    }
  },
  created() {
    this.getCityList();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.city-main {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.left {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  position: relative;
  .city-index-section {
    @include border-bottom;
    padding-left: 15px;
    p {
      @include border-bottom;
      height: 36px;
      line-height: 36px;
      font-size: 12px;
    }
    li {
      @include border-bottom;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
    }
  }
}
.right {
  display: flex;
  align-items: center;
  width: 30px;
  height: 100%;
  li {
    width: 30px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
