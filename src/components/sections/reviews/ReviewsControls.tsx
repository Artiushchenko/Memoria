'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

type ReviewsControlsProps = {
	selectedIndex: number
	totalReviews: number
	totalSnaps: number
	canScrollPrev: boolean
	canScrollNext: boolean
	locale: 'ru' | 'uk'
	onPrevious: () => void
	onNext: () => void
}

export function ReviewsControls({
	selectedIndex,
	totalReviews,
	totalSnaps,
	canScrollPrev,
	canScrollNext,
	locale,
	onPrevious,
	onNext
}: ReviewsControlsProps) {
	const progress = totalSnaps > 0 ? ((selectedIndex + 1) / totalSnaps) * 100 : 0

	return (
		<div className='mt-8 flex items-center gap-5 sm:mt-10 sm:gap-6'>
			{/* Counter */}
			<div className='flex shrink-0 items-baseline gap-1.5'>
				<span className='font-serif text-2xl font-semibold text-primary'>
					{String(selectedIndex + 1).padStart(2, '0')}
				</span>

				<span className='text-xs text-muted'>/</span>

				<span className='text-xs font-semibold text-muted'>
					{String(totalReviews).padStart(2, '0')}
				</span>
			</div>

			{/* Progress */}
			<div
				className='relative h-px flex-1 overflow-hidden bg-primary/10'
				role='progressbar'
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={Math.round(progress)}
			>
				<div
					className='absolute inset-y-0 left-0 bg-primary transition-[width] duration-500 ease-out'
					style={{ width: `${progress}%` }}
				/>
			</div>

			{/* Navigation */}
			<div className='flex shrink-0 gap-2'>
				<button
					type='button'
					onClick={onPrevious}
					disabled={!canScrollPrev}
					aria-label={
						locale === 'ru' ? 'Предыдущий отзыв' : 'Попередній відгук'
					}
					className='flex size-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35 sm:size-12'
				>
					<ArrowLeft
						aria-hidden='true'
						size={18}
						strokeWidth={1.7}
					/>
				</button>

				<button
					type='button'
					onClick={onNext}
					disabled={!canScrollNext}
					aria-label={locale === 'ru' ? 'Следующий отзыв' : 'Наступний відгук'}
					className='flex size-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-35 sm:size-12'
				>
					<ArrowRight
						aria-hidden='true'
						size={18}
						strokeWidth={1.7}
					/>
				</button>
			</div>
		</div>
	)
}
