import Vue from 'vue'
import router from './router'
import Vuetify from "vuetify";
import App from './App.vue';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';

import "vuetify/dist/vuetify.min.css";
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'


Vue.config.productionTip = false



const API_prefix = '/new';
Vue.prototype.$api_prefix = API_prefix;

const HTTP = axios.create({
  baseURL: API_prefix + `/api/`,
});

Vue.prototype.$http = HTTP;

Vue.use(Vuetify);
Vue.use(VueSweetalert2);


new Vue({
    render: h => h(App),
    router
}).$mount('#app')


