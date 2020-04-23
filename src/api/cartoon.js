// 专门处理漫画相关的请求
// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

/**
 * 获取轮播图
 * export默认暴露可以暴露多个
 */
export const getBanner = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}

/**
 * 获取首页推荐
 * export默认暴露可以暴露多个
 */
export const getIndexRecommend = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api//comic_v2/customerview',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}
