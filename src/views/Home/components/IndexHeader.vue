<template>
  <header class="index-header">

        <div class="header-user">
          <div class="user-btn" @click="goBack"></div>
        </div>

      <div class="header-logo"></div>

        <div class="header-search" @click="goSearch1"></div>

    </header>
</template>

<script>
export default {
  name: 'IndexHeader',
  // 编程式导航
  methods: {
    goBack () {
      this.$router.back()
    },
    goSearch1 () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
  .index-header {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("~@/assets/icon/user-btn.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("~@/assets/logo.png") no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("~@/assets/icon/search.png") no-repeat;
      background-size: 100%;
    }
  }
</style>
