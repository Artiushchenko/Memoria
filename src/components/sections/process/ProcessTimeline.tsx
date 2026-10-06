'use client'

import { cn } from '@/lib/cn'
import {
	ArrowRight,
	ClipboardCheck,
	FileCheck2,
	HeartHandshake,
	MessageCircle,
	Route,
	ShieldCheck
} from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type StepIcon =
	| 'contact'
	| 'details'
	| 'documents'
	| 'preparation'
	| 'transport'
	| 'handover'

type Step = {
	number: string
	title: string
	description: string
	icon: StepIcon
}

type ProcessTimelineProps = {
	steps: Step[]
	help: {
		label: string
		text: string
		button: string
	}
}

const icons = {
	contact: MessageCircle,
	details: ClipboardCheck,
	documents: FileCheck2,
	preparation: ShieldCheck,
	transport: Route,
	handover: HeartHandshake
}

export function ProcessTimeline({ steps, help }: ProcessTimelineProps) {
	const mobileTimelineRef = useRef<HTMLDivElement>(null)
	const firstMobilePointRef = useRef<HTMLDivElement>(null)
	const lastMobilePointRef = useRef<HTMLDivElement>(null)

	const [mobileLine, setMobileLine] = useState({
		top: 0,
		height: 0
	})

	/*
	 * Вычисляем реальные центры первого и последнего
	 * кружка относительно mobile timeline.
	 */
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

	/*
	 * Mobile scroll progress.
	 */
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
		<div>
			{/* ========================================
			    DESKTOP
			======================================== */}

			<div className='hidden lg:block'>
				{/*
					Отдельная строка только для точек.

					Здесь нет карточек/текста, поэтому линия
					может быть математически точно расположена
					между центрами 01 и 06.
				*/}
				<div className='relative grid grid-cols-6'>
					{/* Base line */}
					<div className='pointer-events-none absolute left-[calc(100%/12)] right-[calc(100%/12)] top-7 h-px bg-white/10' />

					{/* Gold line */}
					<div className='pointer-events-none absolute left-[calc(100%/12)] right-[calc(100%/12)] top-7 h-px bg-accent' />

					{steps.map(step => {
						const Icon = icons[step.icon]

						return (
							<div
								key={`point-${step.number}`}
								className='relative z-10 flex justify-center'
							>
								<div className='flex size-14 items-center justify-center rounded-full border border-white/10 bg-primary text-white transition-[background-color,border-color] duration-300 hover:border-accent/50 hover:bg-[#193552]'>
									<Icon
										size={19}
										strokeWidth={1.5}
									/>
								</div>
							</div>
						)
					})}
				</div>

				{/*
					Отдельная строка для контента.
					Она использует точно те же 6 колонок.
				*/}
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

			{/* ========================================
			    MOBILE / TABLET
			======================================== */}

			<div
				ref={mobileTimelineRef}
				className='relative lg:hidden'
			>
				{/*
					Серая линия.
					top и height рассчитаны по реальным
					центрам первого и последнего кружка.
				*/}
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

				<div className='relative'>
					{steps.map((step, index) => {
						const Icon = icons[step.icon]
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

			{/* ========================================
			    HELP CTA
			======================================== */}

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
						size={16}
						strokeWidth={1.8}
						className='transition-transform duration-300 group-hover:translate-x-1'
					/>
				</a>
			</motion.div>
		</div>
	)
}
