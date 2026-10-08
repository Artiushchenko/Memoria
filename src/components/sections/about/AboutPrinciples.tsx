'use client'

import { ArrowUpRight, Check } from 'lucide-react'
import { motion } from 'motion/react'
import type { AboutPrinciplesProps } from './about.types'

export function AboutPrinciples({ principles, cta }: AboutPrinciplesProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 20
			}}
			whileInView={{
				opacity: 1,
				y: 0
			}}
			viewport={{
				once: true,
				amount: 0.35
			}}
			transition={{
				duration: 0.6
			}}
			className='mt-8'
		>
			<div className='grid gap-x-8 gap-y-4 sm:grid-cols-2'>
				{principles.map(principle => (
					<div
						key={principle}
						className='flex items-center gap-3 text-sm font-medium text-primary'
					>
						<div className='flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary'>
							<Check
								aria-hidden='true'
								size={13}
								strokeWidth={2}
							/>
						</div>

						<span>{principle}</span>
					</div>
				))}
			</div>

			<a
				href='#contacts'
				className='group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-bold text-white! transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary-hover'
			>
				{cta}

				<ArrowUpRight
					aria-hidden='true'
					size={16}
					strokeWidth={1.8}
					className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
				/>
			</a>
		</motion.div>
	)
}
