import { siteConfig } from '@/config/site'
import type { Locale } from '@/i18n/routing'
import type { Metadata } from 'next'

type CreateMetadataParams = {
	locale: Locale
	title: string
	description: string
	keywords?: string
	ogTitle?: string
	ogDescription?: string
	path?: string
}

export function createMetadata({
	locale,
	title,
	description,
	keywords,
	ogTitle,
	ogDescription,
	path = ''
}: CreateMetadataParams): Metadata {
	const getLocalizedUrl = (locale: Locale) =>
		new URL(`/${locale}${path}`, siteConfig.url).toString()

	const canonical = getLocalizedUrl(locale)
	const defaultUrl = getLocalizedUrl(siteConfig.defaultLocale)

	const languages = Object.fromEntries(
		siteConfig.locales.map(locale => [locale, getLocalizedUrl(locale)])
	)

	return {
		metadataBase: new URL(siteConfig.url),
		title,
		description,
		keywords: keywords
			?.split(',')
			.map(keyword => keyword.trim())
			.filter(Boolean),
		alternates: {
			canonical,
			languages: {
				...languages,
				'x-default': defaultUrl
			}
		},
		openGraph: {
			type: 'website',
			locale: locale === 'ru' ? 'ru_RU' : 'uk_UA',
			alternateLocale: siteConfig.locales
				.filter(item => item !== locale)
				.map(item => (item === 'ru' ? 'ru_RU' : 'uk_UA')),
			url: canonical,
			siteName: siteConfig.name,
			title: ogTitle ?? title,
			description: ogDescription ?? description,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: ogTitle ?? title,
			description: ogDescription ?? description,
			images: [siteConfig.ogImage]
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-image-preview': 'large',
				'max-snippet': -1,
				'max-video-preview': -1
			}
		}
	}
}
