import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

type ContactItemProps = {
	label: string
	value: string
	href: string
	icon: LucideIcon
	external?: boolean
}

export function ContactItem({
	label,
	value,
	href,
	icon: Icon,
	external = false
}: ContactItemProps) {
	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noreferrer' : undefined}
			className='group flex min-h-28 items-center gap-5 border-b border-white/10 py-6 transition-colors duration-300 last:border-b-0 sm:gap-6'
		>
			<div className='flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-primary'>
				<Icon
					aria-hidden='true'
					size={19}
					strokeWidth={1.6}
				/>
			</div>

			<div className='min-w-0 flex-1'>
				<div className='text-[10px] font-bold uppercase tracking-[0.18em] text-white/40'>
					{label}
				</div>

				<div className='mt-2 truncate text-base font-semibold text-white sm:text-lg'>
					{value}
				</div>
			</div>

			<ArrowUpRight
				aria-hidden='true'
				size={18}
				strokeWidth={1.6}
				className='shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent'
			/>
		</a>
	)
}
