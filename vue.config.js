// 项目中的配置文件
module.exports = {
  devServer: {
    proxy: {
      // key:value
      // key - 前缀
      // value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          // 如果前缀是以/migu开头的 就把他变成空字符串
          '^/api': ''
        }
      },
      '/maizuo': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maizuo': ''
        }
      },
      '/migu': {
        target: 'http://movie.miguvideo.com',
        changeOrigin: true,
        pathRewrite: {
          // 如果前缀是以/migu开头的 就把他变成空字符串
          '^/migu': ''
        }
      }
    }
  }
}
