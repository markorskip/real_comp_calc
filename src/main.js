import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import app from '../src/App.vue';
import RealCompensationCalculator from "@/components/realCompensation/RealCompensationCalculator";

Vue.use(require('vue-script2'))
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Vue.use(VueAnalytics, {
//   // [Required] The name of your app as specified in Google Analytics.
//   appName: 'Greener Pastures',
//   // [Required] The version of your app.
//   appVersion: '1.0',
//   // [Required] Your Google Analytics tracking ID.
//   trackingId: 'UA-37301669-3',
//   // If you're using vue-router, pass the router instance here.
// });

new Vue({
  components: {
    'real-comp-calc': RealCompensationCalculator
  },
  render: (h) => h(app)
}).$mount('#app');
