import { Clock3 } from 'lucide-react'

type ContactsSupportProps = {
	title: string
	description: string
}

export function ContactsSupport({ title, description }: ContactsSupportProps) {
	return (
		<div className='mt-10 rounded-lg border border-white/10 bg-white/4.5 p-6 backdrop-blur-sm sm:p-8'>
			<div className='flex items-start gap-4'>
				<div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary'>
					<Clock3
						aria-hidden='true'
						size={17}
						strokeWidth={1.8}
					/>
				</div>

				<div>
					<h3 className='font-serif text-xl font-semibold text-white sm:text-2xl'>
						{title}
					</h3>

					<p className='mt-3 max-w-lg text-sm leading-6 text-white/50'>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
