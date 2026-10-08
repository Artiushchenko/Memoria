'use client'

import { motion } from 'motion/react'
import { aboutIcons } from './about.icons'
import type { AboutFactsProps } from './about.types'

export function AboutFacts({ facts }: AboutFactsProps) {
	return (
		<div className='border-t border-border'>
			{facts.map((fact, index) => {
				const Icon = aboutIcons[fact.icon]

				return (
					<motion.div
						key={fact.label}
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
							duration: 0.55,
							delay: index * 0.07,
							ease: [0.22, 1, 0.36, 1]
						}}
						className='group grid gap-5 border-b border-border py-7 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-8 lg:py-8'
					>
						<div>
							<div className='font-serif text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl'>
								{fact.value}
							</div>

							<div className='mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted'>
								{fact.label}
							</div>
						</div>

						<p className='max-w-md text-sm leading-6 text-foreground-secondary'>
							{fact.description}
						</p>

						<div className='hidden size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-soft text-primary transition-[background-color,border-color,color] duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex'>
							<Icon
								aria-hidden='true'
								size={19}
								strokeWidth={1.5}
							/>
						</div>
					</motion.div>
				)
			})}
		</div>
	)
}
