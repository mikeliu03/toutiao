require('./css/bootstrap.min.css');
require('./css/style.css');

import Vue from 'vue';
import VueRouter from 'vue-router';

import Common from './api/Common.js'
import routes from './routes'

import MenuSelect from './components/MenuSelect.vue';

Common.initStyleHack();

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes.routes // （缩写）相当于 routes: routes
})

var app = new Vue({
	router,
	components: {
		MenuSelect
	},
	/*template: '<div><v-select :value.sync="select.value" :options="select.options" ></v-select>\
	<router-view class="view"></router-view></div>',*/
	//template: '<v-select :options="options"></v-select>',
	//template: '<div class="container"><button class="btn btn-default">aa</button></div>',
	data: function(){
		return {
		};
	}
}).$mount('#app');