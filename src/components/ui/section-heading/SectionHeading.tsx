import { cn } from '@/lib/cn'

type SectionHeadingProps = {
	eyebrow?: string
	title: string
	description?: string
	className?: string
	light?: boolean
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
	light = false
}: SectionHeadingProps) {
	return (
		<div className={cn('max-w-3xl', className)}>
			{/* Eyebrow */}
			{eyebrow && (
				<div className='flex items-center gap-3'>
					<span
						className={cn(
							'h-px w-8 shrink-0',
							light ? 'bg-accent' : 'bg-primary'
						)}
					/>

					<span
						className={cn(
							'text-[10px] font-bold uppercase tracking-[0.2em]',
							light ? 'text-white/45' : 'text-muted'
						)}
					>
						{eyebrow}
					</span>
				</div>
			)}

			{/* Title */}
			<h2
				className={cn(
					'mt-7 max-w-3xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl',
					light ? 'text-white' : 'text-primary'
				)}
			>
				{title}
			</h2>

			{/* Description */}
			{description && (
				<p
					className={cn(
						'mt-5 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7',
						light ? 'text-white/50' : 'text-foreground-secondary'
					)}
				>
					{description}
				</p>
			)}
		</div>
	)
}
