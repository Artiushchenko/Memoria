'use client'

import { cn } from '@/lib/cn'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { processIcons } from './process.icons'
import type { ProcessStep } from './process.types'

type ProcessTimelineMobileProps = {
	steps: ProcessStep[]
}

export function ProcessTimelineMobile({ steps }: ProcessTimelineMobileProps) {
	const mobileTimelineRef = useRef<HTMLDivElement>(null)
	const firstMobilePointRef = useRef<HTMLDivElement>(null)
	const lastMobilePointRef = useRef<HTMLDivElement>(null)

	const [mobileLine, setMobileLine] = useState({
		top: 0,
		height: 0
	})

	// Calculate the line between the first and last point centers
	useEffect(() => {
		const updateLine = () => {
			const container = mobileTimelineRef.current
			const firstPoint = firstMobilePointRef.current
			const lastPoint = lastMobilePointRef.current

			if (!container || !firstPoint || !lastPoint) {
				return
			}

			const containerRect = container.getBoundingClientRect()
			const firstRect = firstPoint.getBoundingClientRect()
			const lastRect = lastPoint.getBoundingClientRect()

			const firstCenter =
				firstRect.top - containerRect.top + firstRect.height / 2

			const lastCenter = lastRect.top - containerRect.top + lastRect.height / 2

			setMobileLine({
				top: firstCenter,
				height: Math.max(0, lastCenter - firstCenter)
			})
		}

		updateLine()

		const resizeObserver = new ResizeObserver(updateLine)

		if (mobileTimelineRef.current) {
			resizeObserver.observe(mobileTimelineRef.current)
		}

		window.addEventListener('resize', updateLine)

		return () => {
			resizeObserver.disconnect()
			window.removeEventListener('resize', updateLine)
		}
	}, [])

	// Scroll progress
	const { scrollYProgress } = useScroll({
		target: mobileTimelineRef,
		offset: ['start 75%', 'end 65%']
	})

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 25,
		mass: 0.5
	})

	const mobileScaleY = useTransform(smoothProgress, [0, 1], [0, 1])

	return (
		<div
			ref={mobileTimelineRef}
			className='relative lg:hidden'
		>
			{/* Connecting line */}
			{mobileLine.height > 0 && (
				<>
					<div
						className='pointer-events-none absolute left-6 w-px -translate-x-1/2 bg-white/10'
						style={{
							top: mobileLine.top,
							height: mobileLine.height
						}}
					/>

					<motion.div
						className='pointer-events-none absolute left-6 w-px origin-top -translate-x-1/2 bg-accent'
						style={{
							top: mobileLine.top,
							height: mobileLine.height,
							scaleY: mobileScaleY
						}}
					/>
				</>
			)}

			{/* Steps */}
			<div className='relative'>
				{steps.map((step, index) => {
					const Icon = processIcons[step.icon]

					const isFirst = index === 0
					const isLast = index === steps.length - 1

					return (
						<motion.article
							key={step.number}
							initial={{
								opacity: 0,
								x: -16
							}}
							whileInView={{
								opacity: 1,
								x: 0
							}}
							viewport={{
								once: true,
								amount: 0.35
							}}
							transition={{
								duration: 0.5,
								delay: index * 0.04,
								ease: [0.22, 1, 0.36, 1]
							}}
							className={cn(
								'relative grid grid-cols-[48px_minmax(0,1fr)] gap-5',
								!isLast && 'pb-10'
							)}
						>
							<div className='relative flex justify-center'>
								<div
									ref={
										isFirst
											? firstMobilePointRef
											: isLast
												? lastMobilePointRef
												: undefined
									}
									className='relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-primary text-white'
								>
									<Icon
										aria-hidden='true'
										size={17}
										strokeWidth={1.5}
									/>
								</div>
							</div>

							<div className='min-w-0'>
								<span className='text-[10px] font-bold tracking-[0.2em] text-accent'>
									{step.number}
								</span>

								<h3 className='mt-2 font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl'>
									{step.title}
								</h3>

								<p className='mt-3 max-w-xl text-sm leading-6 text-white/50'>
									{step.description}
								</p>
							</div>
						</motion.article>
					)
				})}
			</div>
		</div>
	)
}
