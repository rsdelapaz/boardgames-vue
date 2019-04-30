import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add([faStar, faUsers, faCalendarAlt])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
