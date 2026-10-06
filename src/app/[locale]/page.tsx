import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { MobileContactBar } from '@/components/layout/mobile-contact-bar/MobileContactBar'
import { StructuredData } from '@/components/seo/StructuredData'

import { About } from '@/components/sections/about/About'
import { Contacts } from '@/components/sections/contacts/Contacts'
import { Hero } from '@/components/sections/hero/Hero'
import { Process } from '@/components/sections/process/Process'
import { Reviews } from '@/components/sections/reviews/Reviews'
import { Services } from '@/components/sections/services/Services'
import { Transport } from '@/components/sections/transport/Transport'

import { routing } from '@/i18n/routing'
import { getOrganizationStructuredData } from '@/lib/structured-data'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export default async function HomePage({ params }: Props) {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const structuredData = getOrganizationStructuredData(locale)

	return (
		<>
			<StructuredData data={structuredData} />

			<Header />

			<main>
				<Hero />
				<Services />
				<Process />
				<Transport />
				<About />
				<Reviews />
				<Contacts />
			</main>

			<Footer />
			<MobileContactBar />
		</>
	)
}
