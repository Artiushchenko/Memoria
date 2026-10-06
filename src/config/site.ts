export const siteConfig = {
	name: 'MEMORIA',
	fullName: 'MEMORIA',
	url: 'https://example.com',
	route: {
		from: 'Germany',
		to: 'Ukraine'
	},
	experience: '25+',
	availability: '24/7',
	locales: ['ru', 'uk'] as const,
	defaultLocale: 'ru' as const,
	ogImage: '/images/og/og-main.png'
} as const
