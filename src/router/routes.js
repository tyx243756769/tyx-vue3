/* Layout */
import Layout from '@/layout/index.vue'

const routes = [
	{
		path: '/',
		component: Layout,
		children: [{
				path: '',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
			},
		]
	},
]

export default routes