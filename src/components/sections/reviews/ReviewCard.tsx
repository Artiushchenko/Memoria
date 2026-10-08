'use client'

import { reviews } from '@/data/reviews'
import { Quote } from 'lucide-react'
import { motion } from 'motion/react'

type Review = (typeof reviews)[number]

type ReviewCardProps = {
	review: Review
	index: number
	locale: 'ru' | 'uk'
}

export function ReviewCard({ review, index, locale }: ReviewCardProps) {
	return (
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
						aria-hidden='true'
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
					<div className='h-px w-10 bg-accent transition-[width] duration-500 ease-out group-hover:w-full' />
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
	)
}
