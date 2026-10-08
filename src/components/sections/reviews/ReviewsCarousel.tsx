'use client'

import { reviews } from '@/data/reviews'
import useEmblaCarousel from 'embla-carousel-react'
import { useLocale } from 'next-intl'
import { useCallback, useEffect, useState } from 'react'
import { ReviewCard } from './ReviewCard'
import { ReviewsControls } from './ReviewsControls'

export function ReviewsCarousel() {
	const locale = useLocale() as 'ru' | 'uk'

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		containScroll: 'trimSnaps',
		skipSnaps: false
	})

	const [selectedIndex, setSelectedIndex] = useState(0)
	const [totalSnaps, setTotalSnaps] = useState(0)
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)

	useEffect(() => {
		if (!emblaApi) return

		const syncCarouselState = () => {
			setSelectedIndex(emblaApi.selectedScrollSnap())
			setTotalSnaps(emblaApi.scrollSnapList().length)
			setCanScrollPrev(emblaApi.canScrollPrev())
			setCanScrollNext(emblaApi.canScrollNext())
		}

		emblaApi.on('select', syncCarouselState)
		emblaApi.on('reInit', syncCarouselState)

		syncCarouselState()

		return () => {
			emblaApi.off('select', syncCarouselState)
			emblaApi.off('reInit', syncCarouselState)
		}
	}, [emblaApi])

	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext()
	}, [emblaApi])

	return (
		<div>
			{/* Carousel */}
			<div
				ref={emblaRef}
				className='overflow-hidden'
				aria-roledescription='carousel'
			>
				<div className='-ml-4 flex touch-pan-y sm:-ml-5'>
					{reviews.map((review, index) => (
						<div
							key={review.id}
							className='min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_68%] sm:pl-5 lg:flex-[0_0_46%] xl:flex-[0_0_41%]'
						>
							<ReviewCard
								review={review}
								index={index}
								locale={locale}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Controls */}
			<ReviewsControls
				selectedIndex={selectedIndex}
				totalReviews={reviews.length}
				totalSnaps={totalSnaps}
				canScrollPrev={canScrollPrev}
				canScrollNext={canScrollNext}
				locale={locale}
				onPrevious={scrollPrev}
				onNext={scrollNext}
			/>
		</div>
	)
}
