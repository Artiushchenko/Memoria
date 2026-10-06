import { routing } from '@/i18n/routing'
import { createMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import {
	getMessages,
	getTranslations,
	setRequestLocale
} from 'next-intl/server'
import { Lora, Manrope } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

const manrope = Manrope({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-manrope',
	display: 'swap'
})

const lora = Lora({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-lora',
	display: 'swap',
	weight: ['500', '600', '700']
})

type Props = {
	children: React.ReactNode
	params: Promise<{
		locale: string
	}>
}

export function generateStaticParams() {
	return routing.locales.map(locale => ({
		locale
	}))
}

export async function generateMetadata({
	params
}: Omit<Props, 'children'>): Promise<Metadata> {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const t = await getTranslations({
		locale,
		namespace: 'Metadata'
	})

	return createMetadata({
		locale,
		title: t('title'),
		description: t('description'),
		keywords: t('keywords'),
		ogTitle: t('ogTitle'),
		ogDescription: t('ogDescription')
	})
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const messages = await getMessages()

	return (
		<html
			lang={locale}
			dir='ltr'
		>
			<body className={`${manrope.variable} ${lora.variable}`}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
