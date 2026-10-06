import { Container } from '@/components/ui/container/Container'
import { contacts } from '@/config/contacts'
import { ArrowRight, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

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
						{/* Content */}
						<div className='relative z-10'>
							<div className='mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-md sm:mb-7'>
								<span className='size-1.5 shrink-0 rounded-full bg-accent' />

								<span className='text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs'>
									{t('eyebrow')}
								</span>
							</div>

							<h1 className='max-w-4xl font-serif text-[3.35rem] font-semibold leading-[0.91] tracking-[-0.035em] sm:text-[4.5rem] lg:text-[5.25rem] xl:text-[5.9rem] 2xl:text-[6.25rem]'>
								{t('title')}
							</h1>

							<p className='mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8'>
								{t('description')}
							</p>

							<div className='mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row'>
								<a
									href='#contacts'
									className='group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#142b47]! shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#f5f5f3] hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
								>
									<span>{t('consultation')}</span>

									<ArrowRight
										size={17}
										strokeWidth={2}
										className='transition-transform duration-300 group-hover:translate-x-1'
									/>
								</a>

								<a
									href={`tel:${contacts.phones[0].value}`}
									className='group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/6 px-7 text-sm font-semibold text-white backdrop-blur-md transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
								>
									<Phone
										size={17}
										strokeWidth={1.8}
										className='transition-transform duration-300 group-hover:scale-105'
									/>

									{t('call')}
								</a>
							</div>
						</div>

						{/* Route visual */}
						<div
							className='relative hidden min-h-120 lg:block xl:min-h-130'
							aria-hidden='true'
						>
							{/* Soft ambient glow */}
							<div className='absolute left-1/2 top-1/2 size-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/1.5 blur-2xl' />

							{/* Decorative circles */}
							<div className='absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6.5' />

							<div className='absolute left-1/2 top-1/2 size-78 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/7.5' />

							<div className='absolute left-1/2 top-1/2 size-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2.5' />

							{/* Route itself */}
							<div className='absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2'>
								<svg
									viewBox='0 0 600 300'
									className='h-auto w-full overflow-visible'
									fill='none'
								>
									{/* Route */}
									<path
										d='M105 185C205 100 375 95 495 145'
										stroke='rgba(255,255,255,0.20)'
										strokeWidth='1.5'
										strokeDasharray='6 9'
										strokeLinecap='round'
									/>

									{/* Germany halo */}
									<circle
										cx='105'
										cy='185'
										r='15'
										fill='rgba(255,255,255,0.06)'
									/>

									{/* Germany point */}
									<circle
										cx='105'
										cy='185'
										r='6'
										fill='#142b47'
										stroke='white'
										strokeWidth='3'
									/>

									{/* Ukraine halo */}
									<circle
										cx='495'
										cy='145'
										r='15'
										fill='rgba(185,154,98,0.10)'
									/>

									{/* Ukraine point */}
									<circle
										cx='495'
										cy='145'
										r='6'
										fill='#142b47'
										stroke='#b99a62'
										strokeWidth='3'
									/>
								</svg>

								{/* Germany flag */}
								<div className='absolute left-[17.5%] top-[66%] -translate-x-1/2'>
									<div className='flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-2 backdrop-blur-sm'>
										<span className='text-lg leading-none'>🇩🇪</span>
									</div>
								</div>

								{/* Ukraine flag */}
								<div className='absolute left-[82.5%] top-[52.5%] -translate-x-1/2'>
									<div className='flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-2 backdrop-blur-sm'>
										<span className='text-lg leading-none'>🇺🇦</span>
									</div>
								</div>
							</div>

							{/* Small brand detail */}
							<div className='absolute bottom-[15%] left-1/2 -translate-x-1/2'>
								<div className='flex items-center gap-3'>
									<div className='h-px w-8 bg-white/10' />

									<span className='text-[9px] font-bold uppercase tracking-[0.25em] text-white/25'>
										MEMORIA
									</span>

									<div className='h-px w-8 bg-white/10' />
								</div>
							</div>
						</div>
					</div>

					{/* Trust */}
					<div className='mt-12 grid grid-cols-3 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7 lg:mt-7 lg:max-w-2xl'>
						{trustItems.map((item, index) => (
							<div
								key={`${item.value}-${item.label}`}
								className={
									index !== 0 ? 'border-l border-white/10 pl-4 sm:pl-8' : ''
								}
							>
								<div className='font-serif text-xl font-semibold sm:text-3xl'>
									{item.value}
								</div>

								<div className='mt-1 pr-2 text-[9px] leading-4 text-white/45 sm:text-xs'>
									{item.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
