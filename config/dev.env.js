'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://jbh.shyunhua.com"',  // 正式版
  BASE_API: '"https://test.jbh.shyunhua.com"',   // 测试版
});
