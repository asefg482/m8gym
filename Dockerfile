# ==============================================================================
# Multi-Stage Production Dockerfile for M8 Gym (Laravel 12 + Inertia SSR)
# FrankenPHP 8.4 Alpine + Vite Build + Composer
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Build Frontend Assets (Vite Client + SSR Bundle)
# ------------------------------------------------------------------------------
FROM docker.arvancloud.ir/library/node:22-alpine AS frontend-builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:ssr

# ------------------------------------------------------------------------------
# Stage 2: Final Production Runtime Image (FrankenPHP)
# ------------------------------------------------------------------------------
FROM docker.arvancloud.ir/dunglas/frankenphp:1-php8.4-alpine AS app

WORKDIR /var/www/html

# Install system utilities, runtime libraries, nodejs (for SSR service) and supervisor
RUN sed -i 's/https:/http:/g' /etc/apk/repositories \
    && apk add --no-cache \
    curl \
    git \
    nodejs \
    supervisor \
    unzip \
    libzip \
    icu-data-full \
    icu-libs \
    libpng \
    libjpeg-turbo \
    freetype

# Install PHP extensions using the built-in installer
RUN install-php-extensions \
    pdo_mysql \
    pdo_sqlite \
    pdo_pgsql \
    zip \
    gd \
    intl \
    bcmath \
    pcntl \
    opcache \
    redis

# Install Composer binary from official image
COPY --from=docker.arvancloud.ir/library/composer:2 /usr/bin/composer /usr/bin/composer

# Copy Caddyfile and PHP configuration
COPY docker/frankenphp/Caddyfile /etc/caddy/Caddyfile
COPY docker/php/php.ini /usr/local/etc/php/conf.d/99-custom.ini
COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Copy composer dependency manifests for layer caching
COPY composer.json composer.lock ./

# Install production PHP dependencies
RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts

# Copy the rest of the application files
COPY . .

# Copy compiled frontend client assets, SSR bundle, and node_modules from Stage 1
COPY --from=frontend-builder /app/public/build /var/www/html/public/build
COPY --from=frontend-builder /app/bootstrap/ssr /var/www/html/bootstrap/ssr
COPY --from=frontend-builder /app/node_modules /var/www/html/node_modules

# Dump optimized autoloader and discover packages
RUN composer dump-autoload --optimize --no-dev \
    && php artisan package:discover --ansi || true

# Prepare storage & cache directories and set permissions
RUN mkdir -p \
    /var/www/html/storage/framework/cache/data \
    /var/www/html/storage/framework/sessions \
    /var/www/html/storage/framework/views \
    /var/www/html/storage/logs \
    /var/www/html/storage/app/public \
    /var/www/html/bootstrap/cache \
    /var/www/html/database \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
