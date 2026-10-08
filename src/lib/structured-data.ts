import { contacts } from '@/config/contacts'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/i18n/routing'

export function getOrganizationStructuredData(locale: Locale) {
	const isRussian = locale === 'ru'

	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${siteConfig.url}/#organization`,
		name: siteConfig.name,
		url: `${siteConfig.url}/${locale}`,
		description: isRussian
			? 'Международная перевозка умерших в Украину, помощь с документами, кремацией и организацией похорон.'
			: 'Міжнародне перевезення померлих в Україну, допомога з документами, кремацією та організацією поховання.',
		telephone: contacts.phones.map(phone => phone.value),
		email: contacts.email,
		areaServed: [
			{
				'@type': 'Place',
				name: siteConfig.route.from
			},
			{
				'@type': 'Country',
				name: siteConfig.route.to
			}
		],
		availableLanguage: [
			{
				'@type': 'Language',
				name: 'Russian',
				alternateName: 'ru'
			},
			{
				'@type': 'Language',
				name: 'Ukrainian',
				alternateName: 'uk'
			}
		]
	}
}
