'use client'

import {
	ArrowUpRight,
	Check,
	Clock3,
	HeartHandshake,
	ShieldCheck
} from 'lucide-react'
import { motion } from 'motion/react'

type Fact = {
	value: string
	label: string
	description: string
	icon: 'experience' | 'availability' | 'support'
}

type AboutFactsProps = {
	facts: Fact[]
	principles: string[]
	cta: string
}

const icons = {
	experience: HeartHandshake,
	availability: Clock3,
	support: ShieldCheck
}

export function AboutFacts({ facts, principles, cta }: AboutFactsProps) {
	return (
		<div>
			{/* Facts */}
			<div className='border-t border-border'>
				{facts.map((fact, index) => {
					const Icon = icons[fact.icon]

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
									size={19}
									strokeWidth={1.5}
								/>
							</div>
						</motion.div>
					)
				})}
			</div>

			{/* Principles */}
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
						size={16}
						strokeWidth={1.8}
						className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
					/>
				</a>
			</motion.div>
		</div>
	)
}
