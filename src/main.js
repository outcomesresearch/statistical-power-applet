import Vue from 'vue'
import App from './App.vue'
import OutcomesResearchWrapper from 'shared-code'

Vue.use(OutcomesResearchWrapper)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
