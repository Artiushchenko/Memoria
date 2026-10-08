'use client'

import { motion } from 'motion/react'
import { processIcons } from './process.icons'
import type { ProcessStep } from './process.types'

type ProcessTimelineDesktopProps = {
	steps: ProcessStep[]
}

export function ProcessTimelineDesktop({ steps }: ProcessTimelineDesktopProps) {
	return (
		<div className='hidden lg:block'>
			{/* Points and connecting line */}
			<div className='relative grid grid-cols-6'>
				{/* Base line */}
				<div className='pointer-events-none absolute left-[calc(100%/12)] right-[calc(100%/12)] top-7 h-px bg-white/10' />

				{/* Gold line */}
				<div className='pointer-events-none absolute left-[calc(100%/12)] right-[calc(100%/12)] top-7 h-px bg-accent' />

				{steps.map(step => {
					const Icon = processIcons[step.icon]

					return (
						<div
							key={`point-${step.number}`}
							className='relative z-10 flex justify-center'
						>
							<div className='flex size-14 items-center justify-center rounded-full border border-white/10 bg-primary text-white transition-[background-color,border-color] duration-300 hover:border-accent/50 hover:bg-[#193552]'>
								<Icon
									aria-hidden='true'
									size={19}
									strokeWidth={1.5}
								/>
							</div>
						</div>
					)
				})}
			</div>

			{/* Step content */}
			<div className='mt-8 grid grid-cols-6'>
				{steps.map((step, index) => (
					<motion.article
						key={step.number}
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
							amount: 0.3
						}}
						transition={{
							duration: 0.55,
							delay: index * 0.06,
							ease: [0.22, 1, 0.36, 1]
						}}
						className='px-3 text-center xl:px-4'
					>
						<span className='text-[10px] font-bold tracking-[0.2em] text-accent'>
							{step.number}
						</span>

						<h3 className='mt-4 font-serif text-[1.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white xl:text-[1.55rem]'>
							{step.title}
						</h3>

						<p className='mx-auto mt-4 max-w-48 text-[12px] leading-5.5 text-white/45 xl:text-[13px] xl:leading-6'>
							{step.description}
						</p>
					</motion.article>
				))}
			</div>
		</div>
	)
}
