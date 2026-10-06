'use client'

import { Container } from '@/components/ui/container/Container'
import { siteConfig } from '@/config/site'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

type NavigationItem = {
	label: string
	href: string
}

type HeaderClientProps = {
	navigation: NavigationItem[]
	contactLabel: string
	menuLabel: string
	openMenuLabel: string
	closeMenuLabel: string
}

export function HeaderClient({
	navigation,
	contactLabel,
	menuLabel,
	openMenuLabel,
	closeMenuLabel
}: HeaderClientProps) {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 30)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll, {
			passive: true
		})

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : ''

		return () => {
			document.body.style.overflow = ''
		}
	}, [menuOpen])

	const lightHeader = scrolled || menuOpen

	return (
		<>
			<header
				className={cn(
					'fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500',
					lightHeader
						? 'border-b border-border/70 bg-white/95 shadow-[0_8px_40px_rgba(16,29,47,0.06)] backdrop-blur-xl'
						: 'border-b border-transparent bg-transparent'
				)}
			>
				<Container>
					<div
						className={cn(
							'flex items-center justify-between transition-[height] duration-500',
							scrolled ? 'h-16' : 'h-(--header-height)'
						)}
					>
						{/* Logo */}
						<Link
							href='/'
							aria-label={`${siteConfig.name} - главная`}
							onClick={() => setMenuOpen(false)}
							className='relative z-50 flex shrink-0 items-center'
						>
							<div
								className={cn(
									'relative transition-[width,height] duration-500',
									scrolled ? 'h-11 w-43.75 sm:w-48.75' : 'h-13 w-48.75 sm:w-55'
								)}
							>
								{/* Logo for dark Hero */}
								<Image
									src='/logo/memoria-logo-light.png'
									alt='MEMORIA'
									fill
									priority
									sizes='(max-width: 640px) 195px, 220px'
									draggable={false}
									className={cn(
										'select-none object-contain object-left transition-opacity duration-300',
										lightHeader
											? 'pointer-events-none opacity-0'
											: 'opacity-100'
									)}
								/>

								{/* Logo for white Header */}
								<Image
									src='/logo/memoria-logo-dark.png'
									alt=''
									fill
									priority
									sizes='(max-width: 640px) 195px, 220px'
									aria-hidden='true'
									draggable={false}
									className={cn(
										'select-none object-contain object-left transition-opacity duration-300',
										lightHeader
											? 'opacity-100'
											: 'pointer-events-none opacity-0'
									)}
								/>
							</div>
						</Link>

						{/* Desktop navigation */}
						<nav
							aria-label='Main navigation'
							className='hidden items-center gap-5 xl:flex 2xl:gap-7'
						>
							{navigation.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-300',
										'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-[width] after:duration-300 hover:after:w-full',
										lightHeader
											? 'text-[#445164] after:bg-primary hover:text-[#142b47]'
											: 'text-white/75! after:bg-accent hover:text-white!'
									)}
								>
									{item.label}
								</Link>
							))}
						</nav>

						{/* Right side */}
						<div className='relative z-50 flex shrink-0 items-center gap-2.5'>
							<div className='hidden sm:block'>
								<LanguageSwitcher scrolled={lightHeader} />
							</div>

							<a
								href='#contacts'
								className={cn(
									'hidden h-10 items-center gap-2 rounded-full px-5 text-xs font-bold transition-all duration-300 lg:flex xl:hidden',
									lightHeader
										? 'bg-primary text-white! hover:bg-primary-hover'
										: 'bg-white text-[#142b47]! hover:bg-white/90'
								)}
							>
								{contactLabel}

								<ArrowUpRight
									size={14}
									strokeWidth={1.8}
								/>
							</a>

							<button
								type='button'
								onClick={() => setMenuOpen(value => !value)}
								aria-label={menuOpen ? closeMenuLabel : openMenuLabel}
								aria-expanded={menuOpen}
								aria-controls='mobile-navigation'
								className={cn(
									'flex size-11 items-center justify-center rounded-full border transition-all duration-300 xl:hidden',
									lightHeader
										? 'border-border bg-surface text-primary hover:bg-surface-soft'
										: 'border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/15'
								)}
							>
								{menuOpen ? (
									<X
										size={19}
										strokeWidth={1.8}
									/>
								) : (
									<Menu
										size={19}
										strokeWidth={1.8}
									/>
								)}
							</button>
						</div>
					</div>
				</Container>
			</header>

			{/* Mobile / tablet menu */}
			<div
				id='mobile-navigation'
				className={cn(
					'fixed inset-0 z-40 bg-background transition-[opacity,transform,visibility] duration-500 xl:hidden',
					menuOpen
						? 'visible translate-y-0 opacity-100'
						: 'invisible -translate-y-3 opacity-0'
				)}
			>
				<Container className='flex h-full flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-24'>
					{/* Mobile menu top */}
					<div className='flex items-center justify-between pb-4 sm:hidden'>
						<span className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>
							{menuLabel}
						</span>

						<LanguageSwitcher mobile />
					</div>

					{/* Navigation */}
					<nav
						aria-label='Mobile navigation'
						className='flex flex-1 flex-col justify-center'
					>
						{navigation.map((item, index) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMenuOpen(false)}
								className='group flex items-center justify-between border-b border-border py-4 last:border-b-0 sm:py-5'
							>
								<div className='flex min-w-0 items-center gap-5'>
									<span className='w-5 shrink-0 text-[10px] font-bold text-muted'>
										{String(index + 1).padStart(2, '0')}
									</span>

									<span className='font-serif text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-primary sm:text-3xl'>
										{item.label}
									</span>
								</div>

								<ArrowUpRight
									size={18}
									strokeWidth={1.5}
									className='ml-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
								/>
							</Link>
						))}
					</nav>
				</Container>
			</div>
		</>
	)
}
