// 拆分出来的 城市相关的 仓库子模块
// import { getCityList } from '@/api/city'

const city = window.sessionStorage.getItem('city')

const state = {
  // 当前选择的城市 { cityId: 1111, name: 北京 }
  curCity: city ? JSON.parse(city) : null
  // cities: []
}
const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}
const mutations = {
  SET_CURCITY (state, payload) {
    // 修改掉仓库中的 curCity 数据
    state.curCity = payload
    // 做一下本地的存储
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}
export default {
  namespaced: true,
  state,

  getters,

  mutations
}
