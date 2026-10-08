'use client'

import { Expand } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import type { TransportImage } from './transport.types'

type TransportGalleryGridProps = {
	images: TransportImage[]
	openLabel: string
	onOpen: (index: number) => void
}

export function TransportGalleryGrid({
	images,
	openLabel,
	onOpen
}: TransportGalleryGridProps) {
	return (
		<div className='grid gap-3 lg:grid-cols-12 lg:grid-rows-2'>
			{images.map((image, index) => {
				const featured = index === 0

				return (
					<motion.button
						key={image.id}
						type='button'
						onClick={() => onOpen(index)}
						initial={{
							opacity: 0,
							y: 30
						}}
						whileInView={{
							opacity: 1,
							y: 0
						}}
						viewport={{
							once: true,
							amount: 0.2
						}}
						transition={{
							duration: 0.65,
							delay: index * 0.08,
							ease: [0.22, 1, 0.36, 1]
						}}
						className={
							featured
								? 'group relative min-h-120 overflow-hidden rounded-lg lg:col-span-8 lg:row-span-2 lg:min-h-170'
								: 'group relative min-h-80 overflow-hidden rounded-lg lg:col-span-4 lg:min-h-0'
						}
						aria-label={`${openLabel}: ${image.alt}`}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							sizes={
								featured
									? '(max-width: 1024px) 100vw, 66vw'
									: '(max-width: 1024px) 100vw, 33vw'
							}
							className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]'
							draggable={false}
						/>

						<div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />

						<div className='absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-primary'>
							<Expand
								aria-hidden='true'
								size={17}
								strokeWidth={1.7}
							/>
						</div>

						<span className='absolute bottom-6 left-6 text-xs font-bold tracking-[0.15em] text-white/75'>
							{String(index + 1).padStart(2, '0')}
						</span>
					</motion.button>
				)
			})}
		</div>
	)
}
