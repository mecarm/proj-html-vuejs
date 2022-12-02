import Vue from 'vue'
import App from './App.vue'

//FONTAWESOME 6

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faUserSecret as faUserSecretSolid, faPhone as faPhoneSolid } from '@fortawesome/free-solid-svg-icons'
  /*Import icone regular */
  // import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

  /* IMPORT BRAND ICON */
   import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
  /* add icons to the library */
  library.add(faUserSecretSolid,faPhoneSolid, faFacebookF, faTwitter, faPinterestP)

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
