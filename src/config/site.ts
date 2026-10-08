import { routing } from '@/i18n/routing'

export const siteConfig = {
	name: 'MEMORIA',
	fullName: 'MEMORIA',
	url: 'https://memoria-eta-eight.vercel.app',
	route: {
		from: 'Europe',
		to: 'Ukraine'
	},
	experience: '25+',
	availability: '24/7',
	locales: routing.locales,
	defaultLocale: routing.defaultLocale,
	ogImage: '/images/og/og-main.png'
} as const
