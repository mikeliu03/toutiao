import Home from './pages/Home.vue'
import Video from './pages/Video.vue'
import Notfound from './pages/404.vue'

export default{
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/video', name: 'video', component: Video },
		{ path: '*', redirect: '/' }
	]
}