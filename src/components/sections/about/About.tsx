import { Container } from '@/components/ui/container/Container'
import { Section } from '@/components/ui/section/Section'
import { getTranslations } from 'next-intl/server'
import type { AboutFact } from './about.types'
import { AboutFacts } from './AboutFacts'
import { AboutPrinciples } from './AboutPrinciples'

export async function About() {
	const t = await getTranslations('About')

	const facts: AboutFact[] = [
		{
			value: t('facts.experience.value'),
			label: t('facts.experience.label'),
			description: t('facts.experience.description'),
			icon: 'experience'
		},
		{
			value: t('facts.availability.value'),
			label: t('facts.availability.label'),
			description: t('facts.availability.description'),
			icon: 'availability'
		},
		{
			value: t('facts.support.value'),
			label: t('facts.support.label'),
			description: t('facts.support.description'),
			icon: 'support'
		}
	]

	const principles = [
		t('principles.respect'),
		t('principles.clarity'),
		t('principles.support'),
		t('principles.responsibility')
	]

	return (
		<Section
			id='about'
			className='relative overflow-hidden bg-surface-soft'
		>
			{/* Decorative background */}
			<div
				className='pointer-events-none absolute inset-0'
				aria-hidden='true'
			>
				<div className='absolute -left-52 top-20 size-115 rounded-full border border-primary/3.5' />
				<div className='absolute -left-24 top-48 size-65 rounded-full border border-primary/4.5' />
			</div>

			<Container className='relative z-10'>
				<div className='grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28'>
					{/* Left */}
					<div className='lg:sticky lg:top-28 lg:self-start'>
						<div className='flex items-center gap-3'>
							<span className='h-px w-8 bg-primary' />

							<span className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>
								{t('eyebrow')}
							</span>
						</div>

						<h2 className='mt-7 max-w-xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-5xl lg:text-[3.6rem]'>
							{t('title')}
						</h2>

						<p className='mt-7 max-w-xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8'>
							{t('description')}
						</p>

						<div className='mt-10 max-w-xl border-l border-accent pl-6'>
							<p className='font-serif text-xl font-medium leading-8 text-primary sm:text-2xl sm:leading-9'>
								{t('statement')}
							</p>
						</div>
					</div>

					{/* Right */}
					<div className='lg:pt-16 xl:pt-20'>
						<AboutFacts facts={facts} />

						<AboutPrinciples
							principles={principles}
							cta={t('cta')}
						/>
					</div>
				</div>
			</Container>
		</Section>
	)
}
