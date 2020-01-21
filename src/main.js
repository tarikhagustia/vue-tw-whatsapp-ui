import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEllipsisV, faCommentDots, faSpinner, faSearch, faPaperclip, faGrin, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/styles/index.css'

library.add(faUserSecret, faEllipsisV, faCommentDots, faSpinner, faSearch, faPaperclip, faGrin, faMicrophone, faPaperPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
