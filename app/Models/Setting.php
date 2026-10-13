<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
        'group',
    ];

    /**
     * Get setting value by key.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $setting = static::where('key', $key)->first();

        if (! $setting || $setting->value === null) {
            return $default;
        }

        $decoded = json_decode($setting->value, true);

        return (json_last_error() === JSON_ERROR_NONE && (is_array($decoded) || is_object($decoded)))
            ? $decoded
            : $setting->value;
    }

    /**
     * Set setting value by key.
     */
    public static function set(string $key, mixed $value, string $group = 'general'): static
    {
        $encoded = is_array($value) || is_object($value) ? json_encode($value, JSON_UNESCAPED_UNICODE) : (string) $value;

        return static::updateOrCreate(
            ['key' => $key],
            ['value' => $encoded, 'group' => $group]
        );
    }
}
