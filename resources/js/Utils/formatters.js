/**
 * Convert English digits to Persian digits.
 */
export function toPersianDigits(input) {
    if (input === null || input === undefined) return '';
    const str = String(input);
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/[0-9]/g, (w) => persianDigits[+w]);
}

/**
 * Format currency amount to Tomans with thousands separator.
 */
export function formatPrice(amount, unit = 'تومان') {
    if (amount === null || amount === undefined) return '۰ ' + unit;
    const formatted = new Intl.NumberFormat('fa-IR').format(amount);
    return `${formatted} ${unit}`;
}

export const formatTomans = formatPrice;

/**
 * Format Gregorian date to Jalali date string.
 */
export function formatJalaliDate(dateInput, options = {}) {
    if (!dateInput) return '-';
    try {
        const date = new Date(dateInput);
        if (isNaN(date.getTime())) return '-';
        const defaultOptions = {
            calendar: 'persian',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            ...options,
        };
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', defaultOptions).format(date);
    } catch (e) {
        return String(dateInput);
    }
}

/**
 * Format date with time.
 */
export function formatJalaliDateTime(dateInput) {
    return formatJalaliDate(dateInput, {
        hour: '2-digit',
        minute: '2-digit',
    });
}
