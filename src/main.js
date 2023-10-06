import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Layout from './views/Layout.vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './components/services/firebaseConfig'
import Card from './components/content/Card.vue'
import Wrapper from './components/content/Wrapper.vue'
import DropdownMenu from './components/core/DropdownMenu.vue'
import Tabs from './components/content/Tabs.vue'
import Select from './components/core/Select.vue'
import RadioButton from './components/core/RadioButton.vue'
import InputFeild from './components/core/InputFeild.vue'
import Button from './components/core/Button.vue'
import Spinner from './components/core/Spinner.vue'
import Textarea from './components/core/Textarea.vue'
import Checkbox from './components/core/Checkbox.vue'
import UploadFile from './components/core/UploadFile.vue'
import Date from './components/core/Date.vue'
import Loading from './views/Loading.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.component('Layout', Layout)
app.component('Card', Card)
app.component('Wrapper', Wrapper)
app.component('DropdownMenu', DropdownMenu)
app.component('Tabs', Tabs)
app.component('Select', Select)
app.component('RadioButton', RadioButton)
app.component('InputFeild', InputFeild)
app.component('Button', Button)
app.component('Spinner', Spinner)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('UploadFile', UploadFile)
app.component('Date', Date)
app.component('Loading', Loading)







