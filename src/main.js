import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import element_ui from 'element-ui'
import element_ui_scope from 'element-ui-scope'
Vue.use(element_ui)

Vue.use(element_ui_scope)

new Vue({
  el: '#app',
  render: h => h(App)
})
