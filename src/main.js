import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './styles/_test.scss' //IT is important load it right after vutify. OtherWise my class will be loaded the last and redefine css of vue component. And it will look like: https://live.staticflickr.com/65535/51058453067_2aa6ee91f7_b.jpg
import router from './router'
import store from './store'
import VueCountdownTimer from 'vuejs-countdown-timer';
import './styles/styles.scss'

Vue.config.productionTip = false
Vue.use(VueCountdownTimer);

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
