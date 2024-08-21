import axios from 'axios';
import Vue from 'vue';
import LoginComponent from './components/LoginComponent.vue';

//axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// Set CSRF token as a common header for all Axios requests
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// axios.get('/sanctum/csrf-cookie').then(response => {
//     console.log('Axios is working:', response);
// }).catch(error => {
//     console.error('Axios test error:', error);
// });

const app = new Vue({
    el: '#app',
    components: {
        'login-component': LoginComponent,
    },
});
