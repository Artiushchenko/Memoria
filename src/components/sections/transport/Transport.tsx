import { Container } from '@/components/ui/container/Container'
import { SectionHeading } from '@/components/ui/section-heading/SectionHeading'
import { Section } from '@/components/ui/section/Section'
import { transportImages } from '@/data/transport'
import { getTranslations } from 'next-intl/server'
import { TransportFeatures } from './TransportFeatures'
import { TransportGallery } from './TransportGallery'

export async function Transport() {
	const t = await getTranslations('Transport')

	const features = [
		{
			value: t('features.specialized.value'),
			title: t('features.specialized.title'),
			description: t('features.specialized.description')
		},
		{
			value: t('features.route.value'),
			title: t('features.route.title'),
			description: t('features.route.description')
		},
		{
			value: t('features.care.value'),
			title: t('features.care.title'),
			description: t('features.care.description')
		}
	]

	const images = transportImages.map(image => ({
		...image,
		alt: t(`gallery.alt.${image.altKey}`)
	}))

	return (
		<Section
			id='transport'
			className='overflow-hidden bg-background'
		>
			<Container>
				<SectionHeading
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('description')}
				/>

				<TransportFeatures features={features} />

				<div className='mb-5 mt-14 flex items-center justify-between sm:mt-16 lg:mt-20'>
					<span className='text-xs font-bold uppercase tracking-[0.18em] text-muted'>
						{t('gallery.label')}
					</span>

					<span className='font-serif text-xl font-semibold text-primary'>
						01 - 03
					</span>
				</div>

				<TransportGallery
					images={images}
					openLabel={t('gallery.open')}
					photoLabel={t('gallery.photo')}
					ofLabel={t('gallery.of')}
					closeLabel={t('gallery.close')}
					previousLabel={t('gallery.previous')}
					nextLabel={t('gallery.next')}
				/>
			</Container>
		</Section>
	)
}
