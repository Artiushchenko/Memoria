import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { routing } from '@/i18n/routing'

export default async function RootPage() {
	const headersList = await headers()
	const acceptLanguage = headersList.get('accept-language')?.toLowerCase() ?? ''

	const locale = acceptLanguage
		.split(',')
		.map(language => language.split(';')[0].trim().split('-')[0])
		.find(language =>
			routing.locales.includes(language as (typeof routing.locales)[number])
		)

	redirect(`/${locale ?? routing.defaultLocale}`)
}
