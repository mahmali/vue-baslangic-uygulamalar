import helloWorld from './components/HelloWorld.vue'
import singin from './components/Singin.vue'

export const routes = [
  { path: '', component: helloWorld },
  { path: '/singin', component: singin }
]
