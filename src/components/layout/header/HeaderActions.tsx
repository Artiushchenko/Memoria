'use client'

import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

type HeaderActionsProps = {
	lightHeader: boolean
	menuOpen: boolean
	contactLabel: string
	openMenuLabel: string
	closeMenuLabel: string
	onToggleMenu: () => void
}

export function HeaderActions({
	lightHeader,
	menuOpen,
	contactLabel,
	openMenuLabel,
	closeMenuLabel,
	onToggleMenu
}: HeaderActionsProps) {
	return (
		<div className='relative z-50 flex shrink-0 items-center gap-2.5'>
			<div className='hidden sm:block'>
				<LanguageSwitcher scrolled={lightHeader} />
			</div>

			<Link
				href='/#contacts'
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
			</Link>

			<button
				type='button'
				onClick={onToggleMenu}
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
	)
}
