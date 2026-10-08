import { Container } from '@/components/ui/container/Container'
import { Section } from '@/components/ui/section/Section'
import { getTranslations } from 'next-intl/server'
import { ServiceCard, type ServiceIcon } from './ServiceCard'

export async function Services() {
	const t = await getTranslations('Services')

	const services: {
		number: string
		title: string
		description: string
		icon: ServiceIcon
		featured?: boolean
		tag?: string
	}[] = [
		{
			number: t('transport.number'),
			title: t('transport.title'),
			description: t('transport.description'),
			icon: 'transport',
			featured: true,
			tag: t('transport.tag')
		},
		{
			number: t('documents.number'),
			title: t('documents.title'),
			description: t('documents.description'),
			icon: 'documents'
		},
		{
			number: t('cremation.number'),
			title: t('cremation.title'),
			description: t('cremation.description'),
			icon: 'cremation'
		},
		{
			number: t('urn.number'),
			title: t('urn.title'),
			description: t('urn.description'),
			icon: 'urn'
		},
		{
			number: t('funeral.number'),
			title: t('funeral.title'),
			description: t('funeral.description'),
			icon: 'funeral'
		},
		{
			number: t('support.number'),
			title: t('support.title'),
			description: t('support.description'),
			icon: 'support'
		}
	]

	return (
		<Section
			id='services'
			className='relative overflow-hidden bg-background'
		>
			{/* Very subtle decoration */}
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -right-40 top-20 size-120 rounded-full bg-primary/2.5 blur-3xl'
			/>

			<Container className='relative'>
				{/* Heading */}
				<div className='max-w-3xl'>
					<div className='flex items-center gap-3'>
						<span className='h-px w-8 bg-primary' />

						<span className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>
							{t('eyebrow')}
						</span>
					</div>

					<h2 className='mt-7 max-w-2xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-primary sm:text-5xl lg:text-6xl'>
						{t('title')}
					</h2>

					<p className='mt-6 max-w-2xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8'>
						{t('description')}
					</p>
				</div>

				{/* Services grid */}
				<div className='mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
					{services.map(service => (
						<ServiceCard
							key={service.number}
							number={service.number}
							title={service.title}
							description={service.description}
							icon={service.icon}
							featured={service.featured}
							tag={service.tag}
						/>
					))}
				</div>
			</Container>
		</Section>
	)
}
