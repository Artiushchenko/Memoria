import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { contactLinks, contacts } from '@/config/contacts'
import { siteConfig } from '@/config/site'
import { Link } from '@/i18n/navigation'

export async function Footer() {
	const t = await getTranslations('Footer')

	const navigation = [
		{
			label: t('home'),
			href: '/'
		},
		{
			label: t('services'),
			href: '/#services'
		},
		{
			label: t('process'),
			href: '/#process'
		},
		{
			label: t('transport'),
			href: '/#transport'
		},
		{
			label: t('about'),
			href: '/#about'
		},
		{
			label: t('reviews'),
			href: '/#reviews'
		}
	] as const

	return (
		<footer className='bg-[#0d1d30] pb-24 text-white lg:pb-0'>
			<Container>
				{/* Main footer */}
				<div className='grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.7fr_1fr] lg:gap-16 lg:py-20'>
					{/* Brand */}
					<div>
						<Link
							href='/'
							className='inline-block'
						>
							<Image
								src='/logo/memoria-logo-light.png'
								alt='MEMORIA'
								width={1600}
								height={460}
								sizes='240px'
								className='h-auto w-52.5 object-contain object-left sm:w-57.5'
								draggable={false}
							/>
						</Link>

						<p className='mt-6 max-w-md font-serif text-xl leading-7 text-white/80 sm:text-2xl sm:leading-8'>
							{t('tagline')}
						</p>

						<p className='mt-4 max-w-md text-sm leading-6 text-white/75'>
							{t('description')}
						</p>
					</div>

					{/* Navigation */}
					<div>
						<div className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/75'>
							{t('navigation')}
						</div>

						<nav
							className='mt-6 flex flex-col items-start gap-4'
							aria-label={t('navigation')}
						>
							{navigation.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className='group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white'
								>
									{item.label}

									<ArrowUpRight
										aria-hidden='true'
										size={12}
										className='opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100'
									/>
								</Link>
							))}
						</nav>
					</div>

					{/* Contacts */}
					<div>
						<div className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/75'>
							{t('contacts')}
						</div>

						<div className='mt-6'>
							{contacts.phones.map(phone => (
								<a
									key={phone.value}
									href={contactLinks.phone(phone.value)}
									className='group flex items-center gap-3 border-b border-white/[0.07] py-4 first:pt-0'
								>
									<Phone
										aria-hidden='true'
										size={15}
										strokeWidth={1.6}
										className='shrink-0 text-accent'
									/>

									<span className='text-sm text-white/60 transition-colors group-hover:text-white'>
										{phone.label}
									</span>
								</a>
							))}

							<a
								href={contactLinks.email}
								className='group flex items-center gap-3 py-4'
							>
								<Mail
									aria-hidden='true'
									size={15}
									strokeWidth={1.6}
									className='shrink-0 text-accent'
								/>

								<span className='min-w-0 truncate text-sm text-white/60 transition-colors group-hover:text-white'>
									{contacts.email}
								</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className='flex justify-center py-6 text-center text-[11px] text-white/75'>
					<p>
						© {new Date().getFullYear()} {siteConfig.name}. {t('copyright')}
					</p>
				</div>
			</Container>
		</footer>
	)
}
