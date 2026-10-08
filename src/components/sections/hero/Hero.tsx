import { Container } from '@/components/ui/container/Container'
import { getTranslations } from 'next-intl/server'
import { HeroContent } from './HeroContent'
import { HeroRoute } from './HeroRoute'
import { HeroTrust } from './HeroTrust'

export async function Hero() {
	const t = await getTranslations('Hero')

	const trustItems = [
		{
			value: t('trust.experienceValue'),
			label: t('trust.experienceLabel')
		},
		{
			value: t('trust.availabilityValue'),
			label: t('trust.availabilityLabel')
		},
		{
			value: t('trust.supportValue'),
			label: t('trust.supportLabel')
		}
	]

	return (
		<section className='relative isolate flex min-h-svh overflow-hidden bg-primary text-white'>
			{/* Background */}
			<div
				className='pointer-events-none absolute inset-0'
				aria-hidden='true'
			>
				<div className='absolute right-[-12%] top-[-25%] size-162.5 rounded-full bg-white/[0.035] blur-3xl' />

				<div className='absolute bottom-[-35%] left-[15%] size-175 rounded-full bg-accent/8 blur-3xl' />

				<div
					className='absolute inset-0 opacity-[0.035]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
						backgroundSize: '72px 72px'
					}}
				/>

				<div className='absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/15 to-transparent' />
			</div>

			<Container className='relative z-10 flex'>
				<div className='flex w-full flex-col pb-10 pt-[calc(var(--header-height)+3.5rem)] sm:pb-12 sm:pt-[calc(var(--header-height)+4rem)] lg:pb-8 lg:pt-[calc(var(--header-height)+2.75rem)]'>
					<div className='grid flex-1 items-center gap-14 lg:grid-cols-[1.08fr_.92fr] xl:gap-20'>
						<HeroContent
							eyebrow={t('eyebrow')}
							title={t('title')}
							description={t('description')}
							consultation={t('consultation')}
							call={t('call')}
						/>

						<HeroRoute />
					</div>

					<HeroTrust items={trustItems} />
				</div>
			</Container>
		</section>
	)
}
