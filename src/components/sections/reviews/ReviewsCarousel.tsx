'use client'

import { reviews } from '@/data/reviews'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { motion } from 'motion/react'
import { useLocale } from 'next-intl'
import { useCallback, useEffect, useState } from 'react'

export function ReviewsCarousel() {
	const locale = useLocale() as 'ru' | 'uk'

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		containScroll: 'trimSnaps',
		skipSnaps: false
	})

	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnapCount, setScrollSnapCount] = useState(1)
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(true)

	const updateCarouselState = useCallback(() => {
		if (!emblaApi) return

		setSelectedIndex(emblaApi.selectedScrollSnap())
		setScrollSnapCount(Math.max(emblaApi.scrollSnapList().length, 1))
		setCanScrollPrev(emblaApi.canScrollPrev())
		setCanScrollNext(emblaApi.canScrollNext())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		emblaApi.on('init', updateCarouselState)
		emblaApi.on('select', updateCarouselState)
		emblaApi.on('reInit', updateCarouselState)

		return () => {
			emblaApi.off('init', updateCarouselState)
			emblaApi.off('select', updateCarouselState)
			emblaApi.off('reInit', updateCarouselState)
		}
	}, [emblaApi, updateCarouselState])

	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext()
	}, [emblaApi])

	const progress = ((selectedIndex + 1) / scrollSnapCount) * 100

	return (
		<div>
			{/* Carousel */}
			<div
				ref={emblaRef}
				className='overflow-hidden'
			>
				<div className='-ml-4 flex touch-pan-y sm:-ml-5'>
					{reviews.map((review, index) => (
						<div
							key={review.id}
							className='min-w-0 flex-[0_0_91%] pl-4 sm:flex-[0_0_68%] sm:pl-5 lg:flex-[0_0_46%] xl:flex-[0_0_41%]'
						>
							<motion.article
								initial={{
									opacity: 0,
									y: 24
								}}
								whileInView={{
									opacity: 1,
									y: 0
								}}
								whileHover={{
									y: -4
								}}
								viewport={{
									once: true,
									amount: 0.2
								}}
								transition={{
									duration: 0.55,
									delay: Math.min(index * 0.04, 0.16),
									ease: [0.22, 1, 0.36, 1]
								}}
								className='group relative flex h-full min-h-96 flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-(--shadow-soft) sm:min-h-105 sm:p-8'
							>
								{/* Decorative circles */}
								<div
									className='pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-primary/5 transition-transform duration-700 group-hover:scale-110'
									aria-hidden='true'
								/>

								<div
									className='pointer-events-none absolute -right-7 -top-11 size-40 rounded-full border border-primary/5 transition-transform duration-700 group-hover:scale-110'
									aria-hidden='true'
								/>

								{/* Background number */}
								<span
									className='pointer-events-none absolute right-6 top-3 font-serif text-[5.5rem] font-semibold leading-none tracking-[-0.06em] text-primary/3 sm:right-8 sm:text-[7rem]'
									aria-hidden='true'
								>
									{String(review.id).padStart(2, '0')}
								</span>

								{/* Header */}
								<div className='relative z-10 flex items-center justify-between'>
									<div className='flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-sm'>
										<Quote
											size={17}
											strokeWidth={1.6}
										/>
									</div>

									<div className='flex items-center gap-2'>
										<span className='size-1.5 rounded-full bg-accent' />

										<span className='text-[9px] font-bold uppercase tracking-[0.2em] text-muted'>
											{locale === 'ru' ? 'Отзыв' : 'Відгук'}
										</span>
									</div>
								</div>

								{/* Review */}
								<blockquote className='relative z-10 mt-10 font-serif text-[1.55rem] font-medium leading-[1.38] tracking-[-0.02em] text-primary sm:mt-12 sm:text-[1.75rem]'>
									{review.text[locale]}
								</blockquote>

								{/* Author */}
								<div className='relative z-10 mt-auto pt-10'>
									<div className='mb-5 h-px w-full bg-border'>
										<div className='h-px w-10 bg-accent transition-all duration-500 group-hover:w-20' />
									</div>

									<div className='flex items-end justify-between gap-5'>
										<div>
											<div className='font-serif text-xl font-semibold text-primary'>
												{review.name[locale]}
											</div>

											<div className='mt-1.5 text-xs text-muted'>
												{review.location[locale]}
											</div>
										</div>

										<span className='text-[10px] font-bold tracking-[0.18em] text-muted/60'>
											{String(review.id).padStart(2, '0')}
										</span>
									</div>
								</div>
							</motion.article>
						</div>
					))}
				</div>
			</div>

			{/* Controls */}
			<div className='mt-8 flex items-center gap-5 sm:mt-10 sm:gap-6'>
				{/* Counter */}
				<div className='flex shrink-0 items-baseline gap-1.5'>
					<span className='font-serif text-2xl font-semibold text-primary'>
						{String(selectedIndex + 1).padStart(2, '0')}
					</span>

					<span className='text-xs text-muted'>/</span>

					<span className='text-xs font-semibold text-muted'>
						{String(scrollSnapCount).padStart(2, '0')}
					</span>
				</div>

				{/* Progress */}
				<div className='relative h-px flex-1 overflow-hidden bg-primary/10'>
					<div
						className='absolute inset-y-0 left-0 bg-primary transition-[width] duration-500 ease-out'
						style={{
							width: `${progress}%`
						}}
					/>
				</div>

				{/* Navigation */}
				<div className='flex shrink-0 gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						aria-label={
							locale === 'ru' ? 'Предыдущий отзыв' : 'Попередній відгук'
						}
						className='flex size-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35 sm:size-12'
					>
						<ArrowLeft
							size={18}
							strokeWidth={1.7}
						/>
					</button>

					<button
						type='button'
						onClick={scrollNext}
						disabled={!canScrollNext}
						aria-label={
							locale === 'ru' ? 'Следующий отзыв' : 'Наступний відгук'
						}
						className='flex size-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-35 sm:size-12'
					>
						<ArrowRight
							size={18}
							strokeWidth={1.7}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
