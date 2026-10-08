'use client'

import { Container } from '@/components/ui/container/Container'
import { cn } from '@/lib/cn'
import { useEffect, useState } from 'react'
import { HeaderActions } from './HeaderActions'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavigation, type NavigationItem } from './HeaderNavigation'
import { MobileNavigation } from './MobileNavigation'

type HeaderClientProps = {
	navigation: NavigationItem[]
	homeLabel: string
	navigationAriaLabel: string
	mobileNavigationAriaLabel: string
	contactLabel: string
	menuLabel: string
	openMenuLabel: string
	closeMenuLabel: string
}

export function HeaderClient({
	navigation,
	homeLabel,
	navigationAriaLabel,
	mobileNavigationAriaLabel,
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

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!menuOpen) return

		const previousOverflow = document.body.style.overflow

		document.body.style.overflow = 'hidden'

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setMenuOpen(false)
			}
		}

		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setMenuOpen(false)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			document.body.style.overflow = previousOverflow
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('resize', handleResize)
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
						<HeaderLogo
							scrolled={scrolled}
							lightHeader={lightHeader}
							homeLabel={homeLabel}
							onClick={() => setMenuOpen(false)}
						/>

						<HeaderNavigation
							navigation={navigation}
							lightHeader={lightHeader}
							ariaLabel={navigationAriaLabel}
						/>

						<HeaderActions
							lightHeader={lightHeader}
							menuOpen={menuOpen}
							contactLabel={contactLabel}
							openMenuLabel={openMenuLabel}
							closeMenuLabel={closeMenuLabel}
							onToggleMenu={() => setMenuOpen(value => !value)}
						/>
					</div>
				</Container>
			</header>

			<MobileNavigation
				navigation={navigation}
				menuOpen={menuOpen}
				menuLabel={menuLabel}
				ariaLabel={mobileNavigationAriaLabel}
				onClose={() => setMenuOpen(false)}
			/>
		</>
	)
}
