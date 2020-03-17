import Vue from "vue";
import VueRouter from "vue-router";

import List from './components/List.vue';
import Add from './components/Add.vue';

import FourOFour from './components/404.vue';

Vue.use(VueRouter);

let routes = [
	{
		path: '/',
		name: 'root',
		component: List,
	},
	{
		path: '/create',
		name: 'Create',
		component: Add,
	},
	{
		path: '*',
		name: 'FourOFour',
		component: FourOFour
	},
]

let router = new VueRouter({
	base: '/new/',
	mode: 'history',
	routes
})

export default router;
