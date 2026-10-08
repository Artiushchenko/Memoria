import { Clock3, HeartHandshake, ShieldCheck } from 'lucide-react'

import type { AboutFactIcon } from './about.types'

export const aboutIcons = {
	experience: HeartHandshake,
	availability: Clock3,
	support: ShieldCheck
} satisfies Record<AboutFactIcon, typeof HeartHandshake>
