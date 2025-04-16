import Vue from 'vue'
import App from './App.vue'

import VueCompositionAPI from '@vue/composition-api';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueCompositionAPI);
Vue.use(ElementUI); // для использования элементов

new Vue({
  render: h => h(App),
}).$mount('#app')
