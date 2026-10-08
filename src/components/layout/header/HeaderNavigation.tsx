import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'

export type NavigationItem = {
	label: string
	href: string
}

type HeaderNavigationProps = {
	navigation: NavigationItem[]
	lightHeader: boolean
	ariaLabel: string
}

export function HeaderNavigation({
	navigation,
	lightHeader,
	ariaLabel
}: HeaderNavigationProps) {
	return (
		<nav
			aria-label={ariaLabel}
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
	)
}
