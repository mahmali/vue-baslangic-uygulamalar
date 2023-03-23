import Beginning from './components/beginning.vue'
import Singin from './components/Singin.vue'
import Worksheet from './components/Worksheet.vue'
import List from './components/Portfolyo/List.vue'

export const routes = [
  { path: '', component: Beginning },
  { path: '/singin', component: Singin },
  { path: '/worksheet', component: Worksheet },
  { path: '/list', component: List }
]
