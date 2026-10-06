import { Container } from '@/components/ui/container/Container'
import { SectionHeading } from '@/components/ui/section-heading/SectionHeading'
import { Section } from '@/components/ui/section/Section'
import { transportImages } from '@/data/transport'
import { getTranslations } from 'next-intl/server'
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

				<div className='mt-14 grid border-y border-border sm:mt-16 lg:mt-20 lg:grid-cols-3'>
					{features.map((feature, index) => (
						<div
							key={feature.value}
							className={[
								'py-7 lg:px-8 lg:py-9',
								index !== 0
									? 'border-t border-border lg:border-l lg:border-t-0'
									: '',
								index === 0 ? 'lg:pl-0' : '',
								index === features.length - 1 ? 'lg:pr-0' : ''
							].join(' ')}
						>
							<span className='text-[10px] font-bold tracking-[0.2em] text-accent'>
								{feature.value}
							</span>

							<h3 className='mt-4 font-serif text-2xl font-semibold leading-tight text-primary'>
								{feature.title}
							</h3>

							<p className='mt-3 max-w-sm text-sm leading-6 text-foreground-secondary'>
								{feature.description}
							</p>
						</div>
					))}
				</div>

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
				/>
			</Container>
		</Section>
	)
}
