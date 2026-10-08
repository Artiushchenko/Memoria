type TrustItem = {
	value: string
	label: string
}

type HeroTrustProps = {
	items: TrustItem[]
}

export function HeroTrust({ items }: HeroTrustProps) {
	return (
		<div className='mt-12 grid grid-cols-3 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7 lg:mt-7 lg:max-w-2xl'>
			{items.map((item, index) => (
				<div
					key={`${item.value}-${item.label}`}
					className={
						index !== 0 ? 'border-l border-white/10 text-center' : 'text-center'
					}
				>
					<div className='font-serif text-xl font-semibold sm:text-3xl'>
						{item.value}
					</div>

					<div className='mt-1 text-[9px] leading-4 text-white/45 sm:text-xs'>
						{item.label}
					</div>
				</div>
			))}
		</div>
	)
}
