'use client'

import { useCallback, useState } from 'react'
import { TransportGalleryGrid } from './TransportGalleryGrid'
import { TransportLightbox } from './TransportLightbox'
import type { TransportGalleryLabels, TransportImage } from './transport.types'

type TransportGalleryProps = TransportGalleryLabels & {
	images: TransportImage[]
	closeLabel: string
	previousLabel: string
	nextLabel: string
}

export function TransportGallery({
	images,
	openLabel,
	photoLabel,
	ofLabel,
	closeLabel,
	previousLabel,
	nextLabel
}: TransportGalleryProps) {
	const [activeImage, setActiveImage] = useState<number | null>(null)

	const close = useCallback(() => {
		setActiveImage(null)
	}, [])

	const previous = useCallback(() => {
		setActiveImage(current => {
			if (current === null || images.length === 0) return null

			return current === 0 ? images.length - 1 : current - 1
		})
	}, [images.length])

	const next = useCallback(() => {
		setActiveImage(current => {
			if (current === null || images.length === 0) return null

			return current === images.length - 1 ? 0 : current + 1
		})
	}, [images.length])

	return (
		<>
			<TransportGalleryGrid
				images={images}
				openLabel={openLabel}
				onOpen={setActiveImage}
			/>

			<TransportLightbox
				images={images}
				activeImage={activeImage}
				photoLabel={photoLabel}
				ofLabel={ofLabel}
				closeLabel={closeLabel}
				previousLabel={previousLabel}
				nextLabel={nextLabel}
				onClose={close}
				onPrevious={previous}
				onNext={next}
			/>
		</>
	)
}
