import Vue from 'vue'
import App from './App.vue'
import Todo from './components/Todo.vue'
Vue.component('app-todo', Todo)

new Vue({
  el: '#app',
  render: h => h(App)
})
