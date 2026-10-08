export type AboutFactIcon = 'experience' | 'availability' | 'support'

export type AboutFact = {
	value: string
	label: string
	description: string
	icon: AboutFactIcon
}

export type AboutFactsProps = {
	facts: AboutFact[]
}

export type AboutPrinciplesProps = {
	principles: string[]
	cta: string
}
