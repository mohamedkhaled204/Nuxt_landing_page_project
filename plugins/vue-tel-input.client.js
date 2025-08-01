import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueTelInput', VueTelInput)
})
