// 专门处理漫画相关的请求
// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'
// 引入APIheader
import { format } from '@/utils/apiHeader'
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
    url: '/api/comic_v2/customerview',
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
/**
 * 获取分类类型
 * export默认暴露可以暴露多个
 */
export const getTypes = () => {
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
      adgroupid: 125
    }
  })
}

/**
 * 获取分类数据
 * @param {String} subject 分类Id
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}

/**
 * 获取排行榜数据
 * @param {String} subject 分类Id
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
/**
 * 获取vip数据
 * @param {String} subject 分类Id
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getVIPList = (pageno = 1, pagesize = 15, special = 892) => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      pageno,
      pagesize,
      special
    })
  })
}
/**
 * 获取热门搜索
 */
export const getHotSearch = () => {
  return request({
    url: '/api/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8',
    method: 'GET'
  })
}
/**
 * 输入框搜索关键字
 *
 * @param {String} name 当前页码
 */
export const searchIndex = (name) => {
  return request({
    url: '/api/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&type=2',
    method: 'GET',
    params: {
      name
    }
  })
}

/**
 * 搜索结果页面的请求
 */
export const getSerachResult = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&type=2&pageno=1&pagesize=100',
    method: 'GET',
    params: {
      name
    }
  })
}
