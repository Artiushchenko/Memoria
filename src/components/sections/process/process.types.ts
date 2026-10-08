export type ProcessStepIcon =
	| 'contact'
	| 'details'
	| 'documents'
	| 'preparation'
	| 'transport'
	| 'handover'

export type ProcessStep = {
	number: string
	title: string
	description: string
	icon: ProcessStepIcon
}

export type ProcessHelpContent = {
	label: string
	text: string
	button: string
}

export type ProcessTimelineProps = {
	steps: ProcessStep[]
	help: ProcessHelpContent
}
