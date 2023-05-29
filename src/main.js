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
import InputMask from 'primevue/inputmask';
import ScrollTop from 'primevue/scrolltop';

import VCalendar from 'v-calendar';

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faEarthAmerica, faRecycle, faHeart, faFaceGrinWide, faPlus, faEquals, faFaceLaughBeam, faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faInstagram, faEnvelope, faEarthAmerica, faRecycle, faHeart, faFaceGrinWide, faPlus, faEquals, faFaceLaughBeam, faHeart, faLocationDot)

import 'aos/dist/aos.css'

import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

import 'v-calendar/dist/style.css';

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
.component("InputMask", InputMask)
.component("ScrollTop", ScrollTop)
.directive('tooltip', Tooltip)
.use(store).use(VCalendar, {}).use(router).use(VueKinesis).component("font-awesome-icon", FontAwesomeIcon).use(ToastService).use(PrimeVue)
.mount('#app')
