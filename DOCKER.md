# 🐳 راهنمای داکر پروژه باشگاه M8 Gym (FrankenPHP + Traefik + SSR)

پروژه پلتفرم مدیریت باشگاه **M8 Gym** با وب‌سرور مدرن و یکپارچه **FrankenPHP (Caddy + PHP 8.4)**، رندرینگ سمت سرور **Inertia SSR**، ابزار مدیریت پایگاه‌داده **phpMyAdmin**، صف پس‌زمینه (Queue Worker)، زمان‌بند (Scheduler) و پشتیبانی کامل از **Traefik Reverse Proxy** با الگوبرداری از پروژه استاندارد `sharita-refactor` داکرایز شده است.

---

## 🏗 ۱. ساختار سرویس‌ها و مسیریابی Traefik

در این ساختار، **هیچ پورتی مستقیماً روی سرور باز نمی‌شود (No Exposed Ports)** و تمامی ترافیک ورودی به‌صورت امن از طریق شبکه مشترک `traefik` و با گواهی SSL توسط Reverse Proxy هدایت می‌شود:

| سرویس | توضیح و دامنه | شبکه و پورت داخلی |
|---|---|---|
| **`app`** | سرور اصلی FrankenPHP (Caddy + PHP 8.4)<br>دامنه: `m8gym.com` و `www.m8gym.com` | `traefik` + `m8gym-network`<br>پورت داخلی: 80 |
| **`phpmyadmin`** | مدیریت گرافیکی دیتابیس MySQL/MariaDB<br>دامنه: `db.m8gym.com` | `traefik` + `m8gym-network`<br>پورت داخلی: 80 |
| **`db`** | پایگاه داده MariaDB LTS با داده‌های پایدار در پوشه `./data` | فقط `m8gym-network` (کاملاً خصوصی) |
| **`redis`** | کش و صف حافظه‌ای پرسرعت (In-Memory) | فقط `m8gym-network` (کاملاً خصوصی) |
| **`queue`** | ورکر پس‌زمینه صف‌های کاری (ارسال پیامک OTP، اعلان‌ها، پردازش‌ها) | فقط `m8gym-network` |
| **`scheduler`** | زمان‌بندی خودکار وظایف (کرون جاب‌های لاراول مانند انقضای اشتراک‌ها) | فقط `m8gym-network` |
| **`ssr`** | سرور رندرینگ اینرشیا (Node.js SSR Daemon) | فقط `m8gym-network`<br>پورت داخلی: 13714 |

---

## 🚦 ۲. برچسب‌ها و تنظیمات Traefik (Labels)

کانتینرهای وب مستقیماً برچسب‌های ترافیک را دارا هستند:

### ۱. برنامه اصلی (`m8gym.com`):
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.docker.network=traefik"
  - "traefik.http.routers.m8gym.rule=Host(`m8gym.com`) || Host(`www.m8gym.com`)"
  - "traefik.http.routers.m8gym.entrypoints=web,websecure"
  - "traefik.http.routers.m8gym.tls=true"
  - "traefik.http.services.m8gym.loadbalancer.server.port=80"
```

### ۲. پنل دیتابیس phpMyAdmin (`db.m8gym.com`):
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.docker.network=traefik"
  - "traefik.http.routers.db-m8gym.rule=Host(`db.m8gym.com`)"
  - "traefik.http.routers.db-m8gym.entrypoints=web,websecure"
  - "traefik.http.routers.db-m8gym.tls=true"
  - "traefik.http.services.db-m8gym.loadbalancer.server.port=80"
```

> **نکته امنیتی:** در لاراول تنظیم `$middleware->trustProxies(at: '*');` در `bootstrap/app.php` فعال است تا هدرهای HTTPS و آی‌پی واقعی کاربران (`X-Forwarded-For` و `X-Forwarded-Proto`) به درستی از ترافیک دریافت شوند و لینک‌ها و متدهای امنیتی روی `https://` بدون مشکل کار کنند.

---

## ⚡️ ۳. نحوه عملکرد Inertia SSR در FrankenPHP

1. در مرحله ساخت ایمیج چندمرحله‌ای (Stage 1 در `Dockerfile`)، دارایی‌های فرانت‌اند کلاینت (`public/build`) و باندل رندر سمت سرور (`bootstrap/ssr/ssr.js`) توسط دستور `npm run build:ssr` کامپایل می‌شوند.
2. کانتینر اختصاصی `ssr` فایل `bootstrap/ssr/ssr.js` را روی پورت ۱۳۷۱۴ در شبکه داخلی اجرا می‌کند.
3. با هر درخواست کاربر به `m8gym.com`، وب‌سرور FrankenPHP درخواست را به لاراول تحویل می‌دهد؛ لاراول محتوای صفحات اینرشیا را از `http://ssr:13714` دریافت کرده و خروجی کامل HTML از پیش رندر شده (SSR) را برای سئوی حداکثری و سرعت بالا به کاربر تحویل می‌دهد.

---

## 💾 ۴. حجم‌ها و داده‌های پایدار (Persistence)

* **`./data`**: کلیه جداول و رکوردهای MariaDB روی دیسک در مسیر محلی `./data` نگهداری می‌شوند. این پوشه در `.gitignore` و `.dockerignore` قرار دارد تا از تغییرات گیت جدا باشد.
* **`./storage`**: کلیه فایل‌های آپلودی، گالری‌ها، اسناد و لاگ‌ها مستقیماً در پوشه محلی `./storage` ذخیره می‌شوند.
* **پشتیبانی از SQLite**: اسکریپت `entrypoint.sh` به صورت هوشمند طوری پیکربندی شده که در صورت انتخاب `DB_CONNECTION=sqlite`، فایل دیتابیس را در `database/database.sqlite` با مجوزهای صحیح ایجاد می‌کند.

---

## 🇮🇷 ۵. میرورهای اختصاصی ایران (Iranian Docker Mirrors)

برای عبور بدون محدودیت از تحریم‌ها و تضمین حداکثر سرعت بیلد در سرورهای داخل کشور، تمامی ایمیج‌ها با میرور رسمی ابر آروان (`docker.arvancloud.ir`) پیکربندی شده‌اند:
* `docker.arvancloud.ir/library/node:22-alpine`
* `docker.arvancloud.ir/dunglas/frankenphp:1-php8.4-alpine`
* `docker.arvancloud.ir/library/composer:2`
* `docker.arvancloud.ir/library/mariadb:lts`
* `docker.arvancloud.ir/library/redis:7-alpine`
* `docker.arvancloud.ir/library/phpmyadmin:latest`

---

## 🛠 ۶. دستورات مدیریت با Makefile

برای مدیریت آسان کانتینرها، فایل `Makefile` تعبیه شده است:

| دستور | عملکرد |
|---|---|
| `make build` | ساخت مجدد ایمیج‌های داکر |
| `make up` | اجرای کلیه کانتینرها در پس‌زمینه |
| `make down` | متوقف‌سازی و خروج کانتینرها |
| `make restart` | راه‌اندازی مجدد سرویس‌ها |
| `make logs` | مشاهده لاگ‌های زنده کانتینرها |
| `make bash` | ورود به شل کانتینر اصلی `app` |
| `make artisan c="..."` | اجرای دستورات آرتیسان لاراول |
| `make migrate` | اجرای مایگریشن‌های دیتابیس |
| `make seed` | اجرای سیدرهای پایگاه داده |
| `make fresh` | پاکسازی و ساخت مجدد دیتابیس به همراه سید کامل |
| `make test` | اجرای تست‌های خودکار پی‌اچ‌پی‌یونیت در داکر |
