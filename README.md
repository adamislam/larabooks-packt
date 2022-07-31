<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://www.packt.com/wp-content/uploads/2022/03/packt-logo.png" width="400"></a></p>

# Larabooks - Packt


Larabooks - Packt is a web application built on technologies such as :
- [Laravel Sail](https://laravel.com/docs/9.x/sail)
- [Vue JS](https://vuejs.org/) and
- [Inertia JS](https://inertiajs.com/) 

## Prerequisite

1) Docker
2) PHP 8
3) Composer
4) Ports used 90 (Laravel), 5173 (Vite), 3333 (MariaDB)
5) Env file

```env
# .env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:VGYYT+DFvgqZ22G4i62sPXFqXaSf3N2s8uTlIYsShY0=
APP_DEBUG=true
APP_URL=http://larabooks.test

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=mariadb
DB_PORT=3306
DB_DATABASE=larabooks
DB_USERNAME=sail
DB_PASSWORD=password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=memcached

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

SCOUT_DRIVER=meilisearch
MEILISEARCH_HOST=http://meilisearch:7700

# Docker
APP_PORT=90
VITE_PORT=5173
FORWARD_DB_PORT=3333
WWWGROUP=1000
WWWUSER=1000

```

## Installation instruction

1) Clone the repository
2) Go to cloned directory and run `composer install`
3) Check if necessary ports are free mentioned in the prerequisites and create `.env` file with given contents
4) Run commands one after another
   - `sail up -d`
   - `sail artisan config:cache`
   - `sail artisan migrate`
   - `sail npm install && npm run dev`
  
5) After that go to [http://localhost:90](http://localhost:90/)
