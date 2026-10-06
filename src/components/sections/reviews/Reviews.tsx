import { Container } from '@/components/ui/container/Container'
import { Section } from '@/components/ui/section/Section'
import { getTranslations } from 'next-intl/server'
import { ReviewsCarousel } from './ReviewsCarousel'

export async function Reviews() {
	const t = await getTranslations('Reviews')

	return (
		<Section
			id='reviews'
			className='overflow-hidden bg-background'
		>
			<Container>
				{/* Heading */}
				<div className='max-w-3xl'>
					<div className='flex items-center gap-3'>
						<span className='h-px w-8 bg-primary' />

						<span className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>
							{t('eyebrow')}
						</span>
					</div>

					<h2 className='mt-7 font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-5xl lg:text-6xl'>
						{t('title')}
					</h2>

					<p className='mt-6 max-w-2xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8'>
						{t('description')}
					</p>
				</div>

				{/* Carousel */}
				<div className='mt-12 sm:mt-14 lg:mt-16'>
					<ReviewsCarousel />
				</div>
			</Container>
		</Section>
	)
}
