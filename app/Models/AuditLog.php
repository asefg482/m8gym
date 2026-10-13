<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AuditLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'role_key',
        'action',
        'subject_type',
        'subject_id',
        'meta',
        'ip',
    ];

    protected function casts(): array
    {
        return [
            'meta' => 'array',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Record an audit event.
     *
     * @param  array<string, mixed>|null  $meta
     */
    public static function record(string $action, ?Model $subject = null, ?array $meta = null, ?User $user = null): static
    {
        $user ??= auth()->user();

        return static::create([
            'user_id' => $user?->id,
            'role_key' => $user?->currentRoleKey(),
            'action' => $action,
            'subject_type' => $subject ? get_class($subject) : null,
            'subject_id' => $subject?->getKey(),
            'meta' => $meta,
            'ip' => request()->ip(),
        ]);
    }
}
