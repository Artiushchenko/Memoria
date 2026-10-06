import { Container } from '@/components/ui/container/Container'
import { contactLinks, contacts } from '@/config/contacts'
import { Clock3, Mail, MessageCircle, Smartphone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { ContactItem } from './ContactItem'

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
				<div className='grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28'>
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
					<div>
						<div className='border-t border-white/10'>
							<ContactItem
								label={`${t('phone')} · ${t('germany')}`}
								value={contacts.phones[0].label}
								href={contactLinks.phone(contacts.phones[0].value)}
								icon={Smartphone}
							/>

							<ContactItem
								label={`${t('phone')} · ${t('ukraine')}`}
								value={contacts.phones[1].label}
								href={contactLinks.phone(contacts.phones[1].value)}
								icon={Smartphone}
							/>

							<ContactItem
								label={t('whatsapp')}
								value={contacts.phones[0].label}
								href={contactLinks.whatsapp}
								icon={MessageCircle}
								external
							/>

							<ContactItem
								label={t('viber')}
								value={contacts.phones[0].label}
								href={contactLinks.viber}
								icon={MessageCircle}
							/>

							<ContactItem
								label={t('email')}
								value={contacts.email}
								href={contactLinks.email}
								icon={Mail}
							/>
						</div>

						{/* Support note */}
						<div className='mt-10 rounded-lg border border-white/10 bg-white/4.5 p-6 backdrop-blur-sm sm:p-8'>
							<div className='flex items-start gap-4'>
								<div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary'>
									<Clock3
										size={17}
										strokeWidth={1.8}
									/>
								</div>

								<div>
									<h3 className='font-serif text-xl font-semibold text-white sm:text-2xl'>
										{t('response')}
									</h3>

									<p className='mt-3 max-w-lg text-sm leading-6 text-white/50'>
										{t('responseDescription')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
