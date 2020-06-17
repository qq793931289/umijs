import { defineConfig } from 'umi';
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export default defineConfig({
  // hash: true,
  history: {
    type: 'hash',
  },
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   // { path: '/first', component: '@/pages/first' },
  //   // { path: '/second', component: '@/pages/second' },
  //   // { path: '/third', component: '@/pages/third' },
  //   // { path: '/forth', component: '@/pages/forth' },
  //   // { path: '/fifth', component: '@/pages/fifth' },
  // ],
  base: './',
  publicPath: './',
  // history: 'hash',
  outputPath: './dist',
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/Loading',
    // loading: '@/Loading',
  },
  // chunks: ['vendors', 'umi'],

  // chainWebpack: function (config) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 1,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             chunks: 'async',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/](react|immer|moment｜moment-timezone｜echarts｜use-immer|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/;
  //             },
  //             priority: 10,
  //           },
  //           // antdesigns: {
  //           //   name: 'antdesigns',
  //           //   chunks: 'async',
  //           //   test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
  //           //   priority: -11,
  //           // },
  //           cesium: {
  //             name: 'cesium',
  //             chunks: 'async',
  //             test: /[\\/]node_modules[\\/](cesium)[\\/]/,
  //             priority: 10,
  //           },
  //           // default: {
  //           //   chunks: 'async',
  //           //   minChunks: 2,
  //           //   priority: -20,
  //           //   test: /[\\/]node_modules[\\/]/,
  //           //   reuseExistingChunk: true
  //           // }
  //         },
  //       },
  //     }
  //   });
  // },
  // esbuild: {},
  // plugins: [
  //   new webpack.DefinePlugin({
  //     // Define relative base path in cesium for loading assets
  //     CESIUM_BASE_URL: JSON.stringify('https://cesium.com/downloads/cesiumjs/releases/1.70/Build/Cesium/Source'),
  //   }),
  // ],
  // dva: {},
  // antd: {},
  // dynamicImport: {},
  // externals: {
  // 'react': 'window.React',
  // 'react-dom': 'window.ReactDOM',
  // 'cesium': 'window.Cesium',
  // },
  // scripts: [
  // 'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
  // 'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
  // 'https://www.v-city.com.cn/cesium-1.70.0/cesium/Cesium.js',
  // 'http://192.168.1.133:85/map/cesium/1.70/Cesium.js',
  // 'https://cesium.com/downloads/cesiumjs/releases/1.70.1/Build/Cesium/Cesium.js',
  // 'https://cesium.com/downloads/cesiumjs/releases/1.70.1/Build/Cesium/Source',
  // 'https://unpkg.com/react@16.13.1/umd/react.production.min.js',
  // 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js',
  // ],
  // chunks: ['vendors', 'umi'],
  // chainWebpack(config) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         // chunks: 'async',
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 2,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendors: {
  //             name: 'vendors',
  //             // chunks: 'all',
  //             chunks: 'async',
  //             test: /[\\/]node_modules[\\/](react|immer|cesium|moment｜moment-timezone｜xlsx｜echarts｜use-immer|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
  //             priority: -10,
  //           },
  //           antdesigns: {
  //             name: 'antdesigns',
  //             chunks: 'async',
  //             test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
  //             priority: -11,
  //           },
  //           // cesium: {
  //           //   name: 'cesium',
  //           //   chunks: 'all',
  //           //   test: /[\\/]node_modules[\\/]cesium[\\/]/,
  //           //   priority: -11,
  //           //   // reuseExistingChunk: true
  //           // },
  //           default: {
  //             minChunks: 1,
  //             priority: -20,
  //             reuseExistingChunk: true
  //           },
  //           // rcselect: {
  //           //   name: "rc-select",
  //           //   test: /[\\/]node_modules[\\/]rc-select/,
  //           //   chunks: "all",
  //           //   priority: 10
  //           // },
  //           // rcdrawer: {
  //           //   name: "rcdrawer",
  //           //   test: /[\\/]node_modules[\\/]rc-drawer/,
  //           //   chunks: "all",
  //           //   priority: 10
  //           // },
  //           // antd: {
  //           //   name: "antd",
  //           //   test: /[\\/]node_modules[\\/]antd[\\/]/,
  //           //   chunks: "all",
  //           //   priority: 9
  //           // },

  //           // lodash: {
  //           //   name: "lodash",
  //           //   test: /[\\/]node_modules[\\/]lodash[\\/]/,
  //           //   chunks: "all",
  //           //   priority: -2
  //           // }
  //         }
  //       }
  //     }
  //   });
  //   //过滤掉momnet的那些不使用的国际化文件
  //   // config.plugin("replace").use(require("webpack").ContextReplacementPlugin).tap(() => {
  //   //   return [/moment[/\\]locale$/, /zh-cn/];
  //   // });
  //   // return config;
  // },
  // chunks: ['cesium', 'umi'],
  // chainWebpack(config) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         // chunks: 'async',
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 2,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendors: {
  //             name: 'vendors',
  //             // chunks: 'all',
  //             chunks: 'async',
  //             test: /[\\/]node_modules[\\/](react|immer|moment｜moment-timezone｜xlsx｜echarts｜use-immer|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
  //             priority: -10,
  //           },
  //           antdesigns: {
  //             name: 'cesium',
  //             chunks: 'all',
  //             test: /[\\/]node_modules[\\/](cesium)[\\/]/,
  //             priority: -11,
  //           },
  //           // antdesigns: {
  //           //   name: 'antdesigns',
  //           //   chunks: 'async',
  //           //   test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
  //           //   priority: -11,
  //           // },
  //           // default: {
  //           //   minChunks: 1,
  //           //   priority: -20,
  //           //   reuseExistingChunk: true
  //           // },

  //           // lodash: {
  //           //   name: "lodash",
  //           //   test: /[\\/]node_modules[\\/]lodash[\\/]/,
  //           //   chunks: "all",
  //           //   priority: -2
  //           // }
  //         }
  //       }
  //     }
  //   });
  //   //过滤掉momnet的那些不使用的国际化文件
  //   config.plugin("replace").use(require("webpack").ContextReplacementPlugin).tap(() => {
  //     return [/moment[/\\]locale$/, /zh-cn/];
  //   });
  //   return config;
  // }
});
