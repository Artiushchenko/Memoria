import { Container } from '@/components/ui/container/Container'
import { getTranslations } from 'next-intl/server'
import { ContactsList } from './ContactsList'
import { ContactsSupport } from './ContactsSupport'

export async function Contacts() {
	const t = await getTranslations('Contacts')

	return (
		<section
			id='contacts'
			className='relative overflow-hidden bg-primary pb-32 pt-20 sm:pb-36 sm:pt-24 lg:py-32'
		>
			{/* Background decoration */}
			<div className='pointer-events-none absolute inset-0'>
				<div
					className='absolute inset-0 opacity-[0.025]'
					style={{
						backgroundImage: `
              linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)
            `,
						backgroundSize: '64px 64px'
					}}
				/>

				<div className='absolute -right-64 -top-64 size-155 rounded-full border border-white/5' />
				<div className='absolute -right-28 -top-28 size-90 rounded-full border border-white/5' />

				<div className='absolute -bottom-40 left-[35%] size-100 rounded-full bg-accent/2.5 blur-3xl' />
			</div>

			<Container className='relative z-10'>
				<div className='grid min-w-0 grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 xl:gap-28'>
					{/* Left */}
					<div className='lg:sticky lg:top-28 lg:self-start'>
						<div className='flex items-center gap-3'>
							<span className='h-px w-8 bg-accent' />

							<span className='text-xs font-bold uppercase tracking-[0.2em] text-white/45'>
								{t('eyebrow')}
							</span>
						</div>

						<h2 className='mt-7 max-w-2xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl'>
							{t('title')}
						</h2>

						<p className='mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8'>
							{t('description')}
						</p>

						<div className='mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5'>
							<span className='relative flex size-2'>
								<span className='absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40' />
								<span className='relative inline-flex size-2 rounded-full bg-accent' />
							</span>

							<span className='text-xs font-bold uppercase tracking-[0.15em] text-white/70'>
								{t('availability')}
							</span>
						</div>
					</div>

					{/* Right */}
					<div className='min-w-0'>
						<ContactsList
							labels={{
								phone: t('phone'),
								germany: t('germany'),
								ukraine: t('ukraine'),
								whatsapp: t('whatsapp'),
								viber: t('viber'),
								email: t('email')
							}}
						/>

						<ContactsSupport
							title={t('response')}
							description={t('responseDescription')}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
