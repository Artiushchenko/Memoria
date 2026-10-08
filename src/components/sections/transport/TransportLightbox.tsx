'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import type { TransportImage } from './transport.types'

type TransportLightboxProps = {
	images: TransportImage[]
	activeImage: number | null
	photoLabel: string
	ofLabel: string
	closeLabel: string
	previousLabel: string
	nextLabel: string
	onClose: () => void
	onPrevious: () => void
	onNext: () => void
}

export function TransportLightbox({
	images,
	activeImage,
	photoLabel,
	ofLabel,
	closeLabel,
	previousLabel,
	nextLabel,
	onClose,
	onPrevious,
	onNext
}: TransportLightboxProps) {
	const closeButtonRef = useRef<HTMLButtonElement>(null)
	const previousFocusRef = useRef<HTMLElement | null>(null)

	const isOpen = activeImage !== null

	useEffect(() => {
		if (!isOpen) return

		const previousOverflow = document.body.style.overflow

		previousFocusRef.current =
			document.activeElement instanceof HTMLElement
				? document.activeElement
				: null

		document.body.style.overflow = 'hidden'

		closeButtonRef.current?.focus()

		return () => {
			document.body.style.overflow = previousOverflow
			previousFocusRef.current?.focus()
		}
	}, [isOpen])

	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault()
				onClose()
			}

			if (event.key === 'ArrowLeft') {
				event.preventDefault()
				onPrevious()
			}

			if (event.key === 'ArrowRight') {
				event.preventDefault()
				onNext()
			}

			if (event.key === 'Tab') {
				const dialog = document.getElementById('transport-lightbox')

				if (!dialog) return

				const buttons = Array.from(
					dialog.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
				)

				if (buttons.length === 0) return

				const first = buttons[0]
				const last = buttons[buttons.length - 1]

				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault()
					last.focus()
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault()
					first.focus()
				}
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose, onPrevious, onNext])

	const image = activeImage !== null ? images[activeImage] : undefined

	return (
		<AnimatePresence>
			{image && activeImage !== null && (
				<motion.div
					id='transport-lightbox'
					role='dialog'
					aria-modal='true'
					aria-label={`${photoLabel} ${activeImage + 1} ${ofLabel} ${images.length}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					className='fixed inset-0 z-100 flex items-center justify-center bg-[#08111d]/95 p-4 backdrop-blur-md sm:p-8'
				>
					<button
						ref={closeButtonRef}
						type='button'
						onClick={onClose}
						className='absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-primary sm:right-8 sm:top-8'
						aria-label={closeLabel}
					>
						<X
							aria-hidden='true'
							size={19}
						/>
					</button>

					<button
						type='button'
						onClick={event => {
							event.stopPropagation()
							onPrevious()
						}}
						className='absolute left-3 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-primary sm:left-8'
						aria-label={previousLabel}
					>
						<ChevronLeft
							aria-hidden='true'
							size={20}
						/>
					</button>

					<motion.div
						key={image.id}
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
							src={image.src}
							alt={image.alt}
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
							onNext()
						}}
						className='absolute right-3 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-primary sm:right-8'
						aria-label={nextLabel}
					>
						<ChevronRight
							aria-hidden='true'
							size={20}
						/>
					</button>

					<div className='pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md sm:bottom-8'>
						{photoLabel} {activeImage + 1} {ofLabel} {images.length}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
