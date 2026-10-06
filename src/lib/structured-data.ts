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
			? 'Перевозка умерших из Германии в Украину, помощь с документами, кремацией и организацией похорон.'
			: 'Перевезення померлих з Німеччини в Україну, допомога з документами, кремацією та організацією поховання.',
		telephone: contacts.phones.map(phone => phone.value),
		email: contacts.email,
		areaServed: [
			{
				'@type': 'Country',
				name: 'Germany'
			},
			{
				'@type': 'Country',
				name: 'Ukraine'
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
