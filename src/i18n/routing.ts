import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['ru', 'uk'],
	defaultLocale: 'ru',
	localePrefix: 'always',
	localeDetection: true
})

export type Locale = (typeof routing.locales)[number]
