import { cn } from '@/lib/cn'
import type { ComponentPropsWithRef } from 'react'

type SectionProps = ComponentPropsWithRef<'section'>

export function Section({ children, className, ...props }: SectionProps) {
	return (
		<section
			{...props}
			className={cn('py-20 sm:py-24 lg:py-32', className)}
		>
			{children}
		</section>
	)
}
