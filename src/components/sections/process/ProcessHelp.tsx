'use client'

import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { ProcessHelpContent } from './process.types'

type ProcessHelpProps = {
	help: ProcessHelpContent
}

export function ProcessHelp({ help }: ProcessHelpProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 24
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
				duration: 0.65,
				ease: [0.22, 1, 0.36, 1]
			}}
			className={cn(
				'mt-16 flex flex-col gap-6 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm',
				'sm:p-8',
				'lg:mt-20 lg:flex-row lg:items-center lg:justify-between'
			)}
		>
			<div>
				<div className='text-xs font-bold uppercase tracking-[0.18em] text-accent'>
					{help.label}
				</div>

				<p className='mt-2 max-w-2xl font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl'>
					{help.text}
				</p>
			</div>

			<a
				href='#contacts'
				className='group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#142b47] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#f5f5f3]'
			>
				{help.button}

				<ArrowRight
					aria-hidden='true'
					size={16}
					strokeWidth={1.8}
					className='transition-transform duration-300 group-hover:translate-x-1'
				/>
			</a>
		</motion.div>
	)
}
