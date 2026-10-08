'use client'

import { cn } from '@/lib/cn'
import {
	FileText,
	Flame,
	HandHeart,
	Landmark,
	Route,
	ShieldCheck
} from 'lucide-react'
import { motion } from 'motion/react'

export type ServiceIcon =
	| 'transport'
	| 'documents'
	| 'cremation'
	| 'urn'
	| 'funeral'
	| 'support'

type ServiceCardProps = {
	number: string
	title: string
	description: string
	icon: ServiceIcon
	featured?: boolean
	tag?: string
}

const icons = {
	transport: Route,
	documents: FileText,
	cremation: Flame,
	urn: Landmark,
	funeral: HandHeart,
	support: ShieldCheck
}

export function ServiceCard({
	number,
	title,
	description,
	icon,
	featured = false,
	tag
}: ServiceCardProps) {
	const Icon = icons[icon]

	return (
		<motion.article
			initial='rest'
			animate='rest'
			whileHover='hover'
			variants={{
				rest: {
					y: 0
				},
				hover: {
					y: -3
				}
			}}
			transition={{
				duration: 0.3,
				ease: [0.22, 1, 0.36, 1]
			}}
			className={cn(
				'group relative flex min-h-72 flex-col overflow-hidden rounded-2xl border p-6 sm:min-h-76 sm:p-7 lg:p-8',
				featured
					? 'border-primary bg-primary text-white'
					: 'border-border bg-surface text-primary shadow-(--shadow-soft)'
			)}
		>
			{/* Featured decoration */}
			{featured && (
				<div
					aria-hidden='true'
					className='pointer-events-none absolute inset-0'
				>
					<div className='absolute -right-24 -top-24 size-64 rounded-full border border-white/6' />

					<div className='absolute -right-8 -top-8 size-40 rounded-full border border-white/8' />

					<motion.div
						variants={{
							rest: {
								scale: 1,
								opacity: 0.04
							},
							hover: {
								scale: 1.15,
								opacity: 0.08
							}
						}}
						transition={{
							duration: 0.6,
							ease: [0.22, 1, 0.36, 1]
						}}
						className='absolute -right-16 -top-16 size-56 rounded-full bg-white blur-3xl'
					/>
				</div>
			)}

			{/* Top */}
			<div className='relative z-10 flex items-start justify-between gap-5'>
				<span
					className={cn(
						'pt-1 text-[10px] font-bold tracking-[0.2em]',
						featured ? 'text-white/40' : 'text-muted'
					)}
				>
					{number}
				</span>

				<div
					className={cn(
						'flex size-11 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 group-hover:scale-105',
						featured
							? 'border-white/10 bg-white/6 text-white'
							: 'border-border bg-surface-soft text-primary'
					)}
				>
					<Icon
						aria-hidden='true'
						size={18}
						strokeWidth={1.5}
					/>
				</div>
			</div>

			{/* Content */}
			<div className='relative z-10 mt-auto pt-8'>
				{tag && (
					<span className='mb-4 inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/60'>
						{tag}
					</span>
				)}

				<h3
					className={cn(
						'max-w-sm font-serif text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[1.75rem]',
						featured ? 'text-white' : 'text-primary'
					)}
				>
					{title}
				</h3>

				<p
					className={cn(
						'mt-3.5 max-w-md text-sm leading-6',
						featured ? 'text-white/55' : 'text-foreground-secondary'
					)}
				>
					{description}
				</p>
			</div>

			{/* Hover accent */}
			{!featured && (
				<motion.div
					aria-hidden='true'
					variants={{
						rest: {
							scaleX: 0
						},
						hover: {
							scaleX: 1
						}
					}}
					transition={{
						duration: 0.4,
						ease: [0.22, 1, 0.36, 1]
					}}
					className='absolute inset-x-0 bottom-0 h-0.75 origin-left bg-accent'
				/>
			)}
		</motion.article>
	)
}
