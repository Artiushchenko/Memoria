import {
	ClipboardCheck,
	FileCheck2,
	HeartHandshake,
	MessageCircle,
	Route,
	ShieldCheck
} from 'lucide-react'
import type { ProcessStepIcon } from './process.types'

export const processIcons = {
	contact: MessageCircle,
	details: ClipboardCheck,
	documents: FileCheck2,
	preparation: ShieldCheck,
	transport: Route,
	handover: HeartHandshake
} satisfies Record<ProcessStepIcon, typeof MessageCircle>
