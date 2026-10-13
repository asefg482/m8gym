#!/bin/sh
set -e

echo "==> Starting M8 Gym Container Entrypoint..."

# Ensure .env file exists
if [ ! -f /var/www/html/.env ] && [ -f /var/www/html/.env.example ]; then
    echo "==> Creating .env from .env.example..."
    cp /var/www/html/.env.example /var/www/html/.env
fi

# Ensure storage and database directories exist
mkdir -p /var/www/html/storage/framework/cache/data \
         /var/www/html/storage/framework/sessions \
         /var/www/html/storage/framework/views \
         /var/www/html/storage/logs \
         /var/www/html/storage/app/public \
         /var/www/html/bootstrap/cache \
         /var/www/html/database

# SQLite support: ensure database file exists if sqlite is used
if [ "${DB_CONNECTION}" = "sqlite" ] || [ -z "${DB_CONNECTION}" ]; then
    if [ ! -f /var/www/html/database/database.sqlite ]; then
        echo "==> Creating database/database.sqlite..."
        touch /var/www/html/database/database.sqlite
    fi
fi

# Ensure correct permissions
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Generate APP_KEY if not set
if ! grep -q "^APP_KEY=.\+" /var/www/html/.env 2>/dev/null; then
    echo "==> Generating Application Key..."
    php /var/www/html/artisan key:generate --force || true
fi

# Link storage if not linked
if [ ! -L /var/www/html/public/storage ]; then
    echo "==> Creating storage symbolic link..."
    php /var/www/html/artisan storage:link || true
fi

# Wait for DB connection if remote DB is configured
if [ "${DB_CONNECTION}" = "mysql" ] || [ "${DB_CONNECTION}" = "mariadb" ] || [ "${DB_CONNECTION}" = "pgsql" ]; then
    echo "==> Waiting for database connection (${DB_HOST:-db}:${DB_PORT:-3306})..."
    max_retries=30
    retry_count=0
    until php -r "
        try {
            new PDO(
                '${DB_CONNECTION}:host=${DB_HOST:-db};port=${DB_PORT:-3306};dbname=${DB_DATABASE:-m8gym}',
                '${DB_USERNAME:-m8gym}',
                '${DB_PASSWORD:-m8gym_secret}'
            );
            exit(0);
        } catch (Exception \$e) {
            exit(1);
        }
    " > /dev/null 2>&1; do
        retry_count=$((retry_count + 1))
        if [ $retry_count -ge $max_retries ]; then
            echo "==> Database timeout reached! Proceeding anyway..."
            break
        fi
        sleep 1
    done
    echo "==> Database is available!"
fi

# Auto-run migrations if enabled
if [ "${RUN_MIGRATIONS}" = "true" ] || [ "${RUN_MIGRATIONS}" = "1" ]; then
    echo "==> Running database migrations..."
    php /var/www/html/artisan migrate --force || true
fi

# Production optimization cache
if [ "${APP_ENV}" = "production" ] && [ "${SKIP_OPTIMIZE}" != "true" ]; then
    echo "==> Optimizing configuration, routes and views cache..."
    php /var/www/html/artisan config:cache || true
    php /var/www/html/artisan route:cache || true
    php /var/www/html/artisan view:cache || true
fi

echo "==> Executing command: $@"
exec "$@"
