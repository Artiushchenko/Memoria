import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

type Locale = (typeof siteConfig.locales)[number]

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
	const localizedPath = `/${locale}${path}`

	const canonical = new URL(localizedPath, siteConfig.url).toString()
	const ruUrl = new URL(`/ru${path}`, siteConfig.url).toString()
	const ukUrl = new URL(`/uk${path}`, siteConfig.url).toString()

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
				ru: ruUrl,
				uk: ukUrl,
				'x-default': ruUrl
			}
		},
		openGraph: {
			type: 'website',
			locale: locale === 'ru' ? 'ru_RU' : 'uk_UA',
			alternateLocale: locale === 'ru' ? ['uk_UA'] : ['ru_RU'],
			url: canonical,
			siteName: siteConfig.name,
			title: ogTitle ?? title,
			description: ogDescription ?? description,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: 'MEMORIA'
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
