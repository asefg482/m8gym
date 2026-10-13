.PHONY: help build up down restart logs ps bash artisan migrate seed test fresh

help: ## راهنمای دستورات پرکاربرد داکر
	@echo "دستورات راه‌اندازی و مدیریت داکر باشگاه M8 Gym:"
	@echo "  make up          - اجرای کانتینرها در پس‌زمینه"
	@echo "  make down        - متوقف‌سازی کانتینرها"
	@echo "  make build       - ساخت مجدد ایمیج‌های داکر"
	@echo "  make restart     - راه‌اندازی مجدد سرویس‌ها"
	@echo "  make logs        - مشاهده لاگ‌های زنده"
	@echo "  make bash        - ورود به خط فرمان کانتینر اصلی اپلیکیشن"
	@echo "  make artisan     - اجرای دستورات آرتیسان لاراول"
	@echo "  make migrate     - اجرای مایگریشن‌های دیتابیس"
	@echo "  make seed        - اجرای سیدرهای پیش‌فرض دیتابیس"
	@echo "  make fresh       - پاکسازی و بازسازی کامل دیتابیس همراه با سید"
	@echo "  make test        - اجرای تست‌های خودکار پروژه در داکر"

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

logs:
	docker compose logs -f

ps:
	docker compose ps

bash:
	docker compose exec app sh

artisan:
	docker compose exec app php artisan $(filter-out $@,$(MAKECMDGOALS))

migrate:
	docker compose exec app php artisan migrate --force

seed:
	docker compose exec app php artisan db:seed --force

fresh:
	docker compose exec app php artisan migrate:fresh --seed --force

test:
	docker compose exec app php artisan test --compact
