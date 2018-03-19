import './main.less';
import sayHi from "./lib.js";
import Vue from 'vue';
import App from './comp/app.vue';

var obj = {
	test() {
		console.log('test');
	}
}

new Vue({
    el: '#app',
    render: (h) => h(App)
});

sayHi();
obj.test();
