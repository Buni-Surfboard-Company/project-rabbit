import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import VueKinesis from "vue-kinesis";
import AOS from 'aos';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import Menubar from 'primevue/menubar'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tooltip from 'primevue/tooltip';
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'
import ToastService from 'primevue/toastservice';
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Toast from 'primevue/toast'
import Image from 'primevue/image'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faEarthAmerica, faRecycle, faHeart, faFaceGrinWide, faPlus, faEquals, faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faInstagram, faEnvelope, faEarthAmerica, faRecycle, faHeart, faFaceGrinWide, faPlus, faEquals, faFaceLaughBeam)


import 'aos/dist/aos.css'

import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

console.log(process.env.VUE_APP_MAP_KEY)

AOS.init()
createApp(App)
.component('Menubar', Menubar)
.component('Card', Card)
.component('Button', Button)
.component('InputText', InputText)
.component('Textarea', Textarea)
.component('FileUpload', FileUpload)
.component('ProgressBar', ProgressBar)
.component('ProgressSpinner', ProgressSpinner)
.component('Toast', Toast)
.component('Image', Image)
.directive('tooltip', Tooltip)
.use(store).use(router).use(VueKinesis).component("font-awesome-icon", FontAwesomeIcon).use(ToastService).use(PrimeVue)
.mount('#app')
