import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import New from '../views/New.vue'
import NotFound from '../views/NotFound.vue'
import Note from '../views/Note.vue'
import Edit from '../views/Edit.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/notes', component: Notes },
  { path: '/notes/:noteid', component: Note },
  { path: '/notes/:noteid/edit', component: Edit },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})