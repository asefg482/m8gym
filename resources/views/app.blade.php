<!DOCTYPE html>
<html lang="fa" dir="rtl" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#09090b">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <!-- Primary Meta Tags -->
    <title inertia>{{ config('app.name', 'M8 Gym') }} - مجموعه ورزشی و تندرستی ساری</title>
    <meta name="description" content="باشگاه بدنسازی و فیت‌نس M8 ساری | سالن مجهز ۲۵۰۰ متری، مربیان رسمی، بوفه سلامت، ماساژ و آرایشگاه">

    <!-- Persian Font: Vazirmatn (Local) -->
    <link rel="stylesheet" href="/fonts/vazirmatn/font-face.css">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fa_IR">
    <meta property="og:site_name" content="M8 Fit Club">
    <meta property="og:title" content="باشگاه ورزشی و تندرستی M8 - ساری">
    <meta property="og:description" content="بزرگترین و مجهزترین مجموعه ورزشی و تناسب اندام شمال کشور">
    <meta property="og:image" content="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80">

    <!-- Schema.org JSON-LD for LocalBusiness / SportsActivityLocation -->
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "SportsActivityLocation",
      "name": "M8 Gym (Fit Club ساری)",
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
      "telephone": "+98-11-33221100",
      "address": {
        "@@type": "PostalAddress",
        "streetAddress": "خیابان قارن",
        "addressLocality": "ساری",
        "addressRegion": "مازندران",
        "addressCountry": "IR"
      },
      "openingHoursSpecification": [
        {
          "@@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "06:00",
          "closes": "23:30"
        },
        {
          "@@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "20:00"
        }
      ]
    }
    </script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-lime-400 selection:text-black min-h-screen">
    @inertia
</body>
</html>
