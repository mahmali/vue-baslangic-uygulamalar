import Beginning from './components/beginning.vue'
import Singin from './components/Singin.vue'
import Worksheet from './components/Worksheet.vue'

export const routes = [
  { path: '', component: Beginning },
  { path: '/singin', component: Singin },
  { path: '/worksheet', component: Worksheet }
]
