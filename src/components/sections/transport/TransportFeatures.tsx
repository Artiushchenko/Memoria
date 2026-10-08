import { cn } from '@/lib/cn'

export type TransportFeature = {
	value: string
	title: string
	description: string
}

type TransportFeaturesProps = {
	features: TransportFeature[]
}

export function TransportFeatures({ features }: TransportFeaturesProps) {
	return (
		<div className='mt-14 grid border-y border-border sm:mt-16 lg:mt-20 lg:grid-cols-3'>
			{features.map((feature, index) => (
				<div
					key={feature.value}
					className={cn(
						'py-7 lg:px-8 lg:py-9',
						index !== 0 && 'border-t border-border lg:border-l lg:border-t-0',
						index === 0 && 'lg:pl-0',
						index === features.length - 1 && 'lg:pr-0'
					)}
				>
					<span className='text-[10px] font-bold tracking-[0.2em] text-[#866b3e]'>
						{feature.value}
					</span>

					<h3 className='mt-4 font-serif text-2xl font-semibold leading-tight text-primary'>
						{feature.title}
					</h3>

					<p className='mt-3 max-w-sm text-sm leading-6 text-foreground-secondary'>
						{feature.description}
					</p>
				</div>
			))}
		</div>
	)
}
