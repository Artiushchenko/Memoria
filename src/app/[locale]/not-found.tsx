import { NotFoundView } from '@/components/layout/not-found/NotFoundView'
import { getLocale, getTranslations } from 'next-intl/server'

export default async function NotFound() {
	const locale = await getLocale()
	const t = await getTranslations('NotFound')

	return (
		<NotFoundView
			title={t('title')}
			description={t('description')}
			backHome={t('backHome')}
			homeHref={`/${locale}`}
		/>
	)
}
