# Monolith E-Commerce

## Identitas Diri
- Nama: Brian Kheng
- NIM: 13521049

## Cara Menjalankan
1. ```sh
    npm install
   ```
2. ```sh
    composer install
   ```
3. ```sh
    docker-compose build
   ```
4. ```sh
    docker-compose up
   ```
5. ```sh
    docker exec laravel-docker bash -c "php artisan migrate"
   ```
6. ```sh
    npm run dev
   ```
7. Projek dapat dijalankan pada "http://localhost:8080"

## Design Pattern
- Singleton Pattern
- Repository Pattern
- MVC Pattern

## Technology Stack
- PHP 8.2.4
- Laravel 10.0
- MySQL 8.0
- Eloquent ORM
- React 18.0
- Tailwind 3.2
- Vite 4.4.7
- Docker 20.10

## Endpoint
- GET /
- GET /login
- GET /register
- GET /history
- GET /detail/:id
- GET /order/:id
- POST /login
- POST /register
- POST /logout
- POST /history

## Bonus
- B06 - Responsive Layout
