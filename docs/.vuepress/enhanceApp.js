/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// import Hello from '../../components/Hello'
import Bar from './components/Foo/Bar'


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  // Vue.component('Hello', Hello)
  Vue.component('Bar', Bar)
  // Vue.component(Hello, Bar,)
}
