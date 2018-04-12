import Vue from 'vue'
import App from './app'
import './assets/reset.css'

// const root = document.createElement('div')
// document.body.appendChild(root)
const root = document.getElementById('root')

new Vue({
  render: (h) => h(App)
}).$mount(root)