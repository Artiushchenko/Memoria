import { siteConfig } from '@/config/site'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return siteConfig.locales.map(locale => ({
		url: `${siteConfig.url}/${locale}`,
		changeFrequency: 'monthly',
		priority: 1,
		alternates: {
			languages: {
				ru: `${siteConfig.url}/ru`,
				uk: `${siteConfig.url}/uk`,
				'x-default': `${siteConfig.url}/ru`
			}
		}
	}))
}
