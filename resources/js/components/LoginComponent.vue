<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Ruks Login</div>
                    <div class="card-body">
                        <form @submit.prevent="submitLogin">
                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email:</label>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" v-model="email" />
                                    <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password:</label>
                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="password" />
                                    <span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
                                </div>
                            </div>
                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>                
                            </div>            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';  // Import axios here

export default {
    data() {
        return {
            email: '',
            password: '',
            errors: {},
        };
    },
    methods: {
        async submitLogin() {
            try {
                const response = await axios.post('/login', {
                    email: this.email,
                    password: this.password,
                });
                console.log('Login successful:', response.data);
                window.location.href = '/home';
            } catch (error) {
                console.log('Error during login:', error.response);
                console.dir(error);
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors;
                } else {
                    // Handle other errors
                    console.error('Unexpected error:', error);
                }
            }
        },
    },
};
</script>
