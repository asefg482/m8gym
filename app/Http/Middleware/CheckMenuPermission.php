<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckMenuPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, ?string $menuKey = null): Response
    {
        $user = $request->user();

        if (! $user) {
            if ($request->expectsJson()) {
                return response()->json(['message' => 'ابتدا وارد حساب کاربری خود شوید.'], 401);
            }

            return redirect()->route('auth.login');
        }

        // If no explicit menu key passed, derive from route name
        $menuKey ??= $request->route()?->getName();

        if (! $menuKey) {
            return $next($request);
        }

        if (! $user->canAccessMenu($menuKey)) {
            if ($request->expectsJson()) {
                return response()->json(['message' => 'شما دسترسی لازم به این بخش را ندارید.'], 403);
            }

            abort(403, 'شما مجوز دسترسی به این صفحه یا عملیات را ندارید.');
        }

        return $next($request);
    }
}
