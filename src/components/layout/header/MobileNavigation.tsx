'use client'

import { Container } from '@/components/ui/container/Container'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { ArrowUpRight } from 'lucide-react'
import type { NavigationItem } from './HeaderNavigation'
import { LanguageSwitcher } from './LanguageSwitcher'

type MobileNavigationProps = {
	navigation: NavigationItem[]
	menuOpen: boolean
	menuLabel: string
	ariaLabel: string
	onClose: () => void
}

export function MobileNavigation({
	navigation,
	menuOpen,
	menuLabel,
	ariaLabel,
	onClose
}: MobileNavigationProps) {
	return (
		<div
			id='mobile-navigation'
			aria-hidden={!menuOpen}
			inert={!menuOpen}
			className={cn(
				'fixed inset-0 z-40 bg-background transition-[opacity,transform,visibility] duration-500 xl:hidden',
				menuOpen
					? 'visible translate-y-0 opacity-100'
					: 'invisible -translate-y-3 opacity-0'
			)}
		>
			<Container className='flex h-full flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-24'>
				<div className='flex items-center justify-between pb-4 sm:hidden'>
					<span className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>
						{menuLabel}
					</span>

					<LanguageSwitcher mobile />
				</div>

				<nav
					aria-label={ariaLabel}
					className='flex flex-1 flex-col justify-center'
				>
					{navigation.map((item, index) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={onClose}
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
	)
}
