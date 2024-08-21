## Laravel Vue Authentication Application
This is a simple web application built using Laravel and Vue.js that provides basic authentication features, including login and registration. The application demonstrates form validation, error handling, and the integration of Vue.js with Laravel.

## Features
 - User registration and login
 - Backend and frontend form validation
 - Error handling for invalid credentials

## Prerequisites
Ensure you have the following installed on your machine:

 - PHP >= 7.4
 - Composer
 - Node.js & npm
 - MySQL (or any other supported database)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

	- git clone https://github.com/yourusername/ruks-laravel-vue-auth.git
	- cd ruks-laravel-vue-auth

2. Install the dependencies:

	- Install PHP dependencies:
		composer install

	- Install JavaScript dependencies:
		npm install

3. Environment Configuration:

 - Copy the .env.example file to .env:
 - cp .env.example .env
 - Set your database credentials in the .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

- Generate the application key:
	php artisan key:generate

- Run the database migrations:
	php artisan migrate

- Compile frontend assets:
	npm run dev

- Start the development server:
	php artisan serve

- Access the application:
	Open your browser and navigate to http://localhost:8000.

