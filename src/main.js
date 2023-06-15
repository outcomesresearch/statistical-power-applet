import Vue from 'vue'
import App from './App.vue'
import OutcomesResearchWrapper from 'shared-code'
import VueAnalytics from 'vue-analytics'

Vue.use(OutcomesResearchWrapper)
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'G-TS2GB4BDVD',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
