import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueIziToast from 'vue-izitoast';

import '@/assets/scss/main.scss'
import 'izitoast/dist/css/iziToast.min.css';

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import Input from '@/components/UI/Input'
import Card from '@/components/UI/Card'
import Confirmbox from '@/components/UI/Confirmbox'
  ;[
    Button,
    Checkbox,
    Input,
    Card,
    Confirmbox
  ].forEach(component => {
    Vue.component(component.name, component)
  })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueIziToast, {
  position: 'topRight'
});
