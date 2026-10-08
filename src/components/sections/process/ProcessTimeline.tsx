import { ProcessHelp } from './ProcessHelp'
import { ProcessTimelineDesktop } from './ProcessTimelineDesktop'
import { ProcessTimelineMobile } from './ProcessTimelineMobile'
import type { ProcessTimelineProps } from './process.types'

export function ProcessTimeline({ steps, help }: ProcessTimelineProps) {
	return (
		<div>
			<ProcessTimelineDesktop steps={steps} />

			<ProcessTimelineMobile steps={steps} />

			<ProcessHelp help={help} />
		</div>
	)
}
