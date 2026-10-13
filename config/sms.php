<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default SMS Driver
    |--------------------------------------------------------------------------
    |
    | Supported drivers: "ippanel", "log"
    |
    */
    'default' => env('SMS_DRIVER', 'ippanel'),

    /*
    |--------------------------------------------------------------------------
    | SMS Drivers Configuration
    |--------------------------------------------------------------------------
    */
    'drivers' => [

        'ippanel' => [
            'base_url' => env('IPPANEL_BASE_URL', 'https://edge.ippanel.com/v1'),
            'api_token' => env('IPPANEL_API_TOKEN', 'YTJmNjY3MDAtNjZhNC00Y2QyLTgxMDktYzVhZjk2YzBhOWQ5MTc1MDVhZjA0OGZhYmEzZjBkZGYwMjI3NmNlNTk4Mjg='),
            'from_number' => env('IPPANEL_FROM_NUMBER', '+983000505'),
            'otp_pattern_code' => env('IPPANEL_OTP_PATTERN_CODE', 'j8wj5i963z9iijr'),
        ],

        'log' => [
            // Driver for testing and local logging
        ],

    ],

];
