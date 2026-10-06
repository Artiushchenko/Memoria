import { Container } from '@/components/ui/container/Container'
import { SectionHeading } from '@/components/ui/section-heading/SectionHeading'
import { Section } from '@/components/ui/section/Section'
import { getTranslations } from 'next-intl/server'
import { ProcessTimeline } from './ProcessTimeline'

export async function Process() {
	const t = await getTranslations('Process')

	const steps = [
		{
			number: t('steps.contact.number'),
			title: t('steps.contact.title'),
			description: t('steps.contact.description'),
			icon: 'contact' as const
		},
		{
			number: t('steps.details.number'),
			title: t('steps.details.title'),
			description: t('steps.details.description'),
			icon: 'details' as const
		},
		{
			number: t('steps.documents.number'),
			title: t('steps.documents.title'),
			description: t('steps.documents.description'),
			icon: 'documents' as const
		},
		{
			number: t('steps.preparation.number'),
			title: t('steps.preparation.title'),
			description: t('steps.preparation.description'),
			icon: 'preparation' as const
		},
		{
			number: t('steps.transport.number'),
			title: t('steps.transport.title'),
			description: t('steps.transport.description'),
			icon: 'transport' as const
		},
		{
			number: t('steps.handover.number'),
			title: t('steps.handover.title'),
			description: t('steps.handover.description'),
			icon: 'handover' as const
		}
	]

	return (
		<Section
			id='process'
			className='relative overflow-hidden bg-primary'
		>
			{/* Background decoration */}
			<div
				className='pointer-events-none absolute inset-0'
				aria-hidden='true'
			>
				<div className='absolute -right-40 top-20 size-125 rounded-full border border-white/2.5' />

				<div className='absolute -right-16 top-44 size-75 rounded-full border border-white/[0.035]' />

				<div
					className='absolute inset-0 opacity-[0.018]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
						backgroundSize: '80px 80px'
					}}
				/>
			</div>

			<Container className='relative z-10'>
				<SectionHeading
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('description')}
					light
				/>

				<div className='mt-14 sm:mt-16 lg:mt-20'>
					<ProcessTimeline
						steps={steps}
						help={{
							label: t('help.label'),
							text: t('help.text'),
							button: t('help.button')
						}}
					/>
				</div>
			</Container>
		</Section>
	)
}
