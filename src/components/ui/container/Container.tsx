import { cn } from '@/lib/cn'
import type { ComponentPropsWithRef } from 'react'

type ContainerProps = ComponentPropsWithRef<'div'>

export function Container({ children, className, ...props }: ContainerProps) {
	return (
		<div
			{...props}
			className={cn(
				'mx-auto w-full max-w-(--container) px-5 sm:px-6 lg:px-8',
				className
			)}
		>
			{children}
		</div>
	)
}
