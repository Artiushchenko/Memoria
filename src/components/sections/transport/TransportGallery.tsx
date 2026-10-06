'use client'

import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type TransportImage = {
	id: number
	src: string
	alt: string
}

type TransportGalleryProps = {
	images: TransportImage[]
	openLabel: string
	photoLabel: string
	ofLabel: string
}

export function TransportGallery({
	images,
	openLabel,
	photoLabel,
	ofLabel
}: TransportGalleryProps) {
	const [activeImage, setActiveImage] = useState<number | null>(null)

	const total = images.length

	function previous() {
		setActiveImage(current => {
			if (current === null) return null

			return current === 0 ? total - 1 : current - 1
		})
	}

	function next() {
		setActiveImage(current => {
			if (current === null) return null

			return current === total - 1 ? 0 : current + 1
		})
	}

	useEffect(() => {
		if (activeImage === null) {
			document.body.style.overflow = ''
			return
		}

		document.body.style.overflow = 'hidden'

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setActiveImage(null)
			}

			if (event.key === 'ArrowLeft') {
				previous()
			}

			if (event.key === 'ArrowRight') {
				next()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [activeImage])

	return (
		<>
			<div className='grid gap-3 lg:grid-cols-12 lg:grid-rows-2'>
				{images.map((image, index) => {
					const featured = index === 0

					return (
						<motion.button
							key={image.id}
							type='button'
							onClick={() => setActiveImage(index)}
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
							aria-label={openLabel}
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

			<AnimatePresence>
				{activeImage !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveImage(null)}
						className='fixed inset-0 z-100 flex items-center justify-center bg-[#08111d]/95 p-4 backdrop-blur-md sm:p-8'
					>
						<button
							type='button'
							onClick={() => setActiveImage(null)}
							className='absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-primary sm:right-8 sm:top-8'
							aria-label='Close'
						>
							<X size={19} />
						</button>

						<button
							type='button'
							onClick={event => {
								event.stopPropagation()
								previous()
							}}
							className='absolute left-3 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-primary sm:left-8'
						>
							<ChevronLeft size={20} />
						</button>

						<motion.div
							key={images[activeImage].id}
							initial={{
								opacity: 0,
								scale: 0.96
							}}
							animate={{
								opacity: 1,
								scale: 1
							}}
							exit={{
								opacity: 0,
								scale: 0.96
							}}
							transition={{
								duration: 0.3
							}}
							onClick={event => event.stopPropagation()}
							className='relative h-[78vh] w-full max-w-6xl'
						>
							<Image
								src={images[activeImage].src}
								alt={images[activeImage].alt}
								fill
								sizes='100vw'
								priority
								className='object-contain'
							/>
						</motion.div>

						<button
							type='button'
							onClick={event => {
								event.stopPropagation()
								next()
							}}
							className='absolute right-3 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-primary sm:right-8'
						>
							<ChevronRight size={20} />
						</button>

						<div className='absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md sm:bottom-8'>
							{photoLabel} {activeImage + 1} {ofLabel} {total}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
