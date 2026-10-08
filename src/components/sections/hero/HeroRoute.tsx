import Image from 'next/image'

export function HeroRoute() {
	return (
		<div
			className='relative hidden min-h-120 lg:block xl:min-h-130'
			aria-hidden='true'
		>
			{/* Europe map */}
			<div
				className='absolute left-[54%] top-[51%] w-[165%] -translate-x-1/2 -translate-y-1/2 xl:w-[172%]'
				style={{
					maskImage:
						'radial-gradient(ellipse 47% 52% at 52% 50%, black 48%, rgba(0,0,0,.88) 63%, rgba(0,0,0,.35) 80%, transparent 100%)',
					WebkitMaskImage:
						'radial-gradient(ellipse 47% 52% at 52% 50%, black 48%, rgba(0,0,0,.88) 63%, rgba(0,0,0,.35) 80%, transparent 100%)'
				}}
			>
				<Image
					src='/images/hero/europe-map.svg'
					alt=''
					width={10495}
					height={7945}
					draggable={false}
					priority
					className='h-auto w-full select-none opacity-[0.105] brightness-0 invert'
				/>
			</div>

			{/* Europe → Ukraine route */}
			<div className='absolute inset-0 z-10'>
				<svg
					viewBox='0 0 600 500'
					className='size-full overflow-visible'
					fill='none'
				>
					<defs>
						<filter
							id='heroRouteGlow'
							x='-50%'
							y='-50%'
							width='200%'
							height='200%'
						>
							<feGaussianBlur stdDeviation='4' />
						</filter>
					</defs>

					{/* Route glow */}
					<path
						d='M275 378C340 318 435 310 525 352'
						stroke='rgba(255,255,255,0.065)'
						strokeWidth='7'
						strokeLinecap='round'
						filter='url(#heroRouteGlow)'
					/>

					{/* Route */}
					<path
						d='M275 378C340 318 435 310 525 352'
						stroke='rgba(255,255,255,0.34)'
						strokeWidth='1.4'
						strokeDasharray='6 9'
						strokeLinecap='round'
					/>

					{/* EU halo */}
					<circle
						cx='275'
						cy='378'
						r='14'
						fill='rgba(255,255,255,0.055)'
					/>

					{/* EU point */}
					<circle
						cx='275'
						cy='378'
						r='5'
						fill='#142b47'
						stroke='rgba(255,255,255,0.95)'
						strokeWidth='2.5'
					/>

					{/* UA halo */}
					<circle
						cx='525'
						cy='352'
						r='18'
						fill='rgba(185,154,98,0.11)'
					/>

					{/* UA point */}
					<circle
						cx='525'
						cy='352'
						r='5'
						fill='#142b47'
						stroke='#b99a62'
						strokeWidth='2.5'
					/>
				</svg>

				{/* EU label */}
				<div className='absolute left-[45.8%] top-[75.6%] -translate-x-[calc(100%+14px)] -translate-y-1/2'>
					<div className='flex h-7 min-w-10 items-center justify-center rounded-full border border-white/8 bg-primary/70 px-2.5 backdrop-blur-md'>
						<span className='text-[8px] font-bold tracking-[0.16em] text-white/60'>
							EU
						</span>
					</div>
				</div>

				{/* UA label */}
				<div className='absolute left-[87.5%] top-[70.4%] translate-x-4 -translate-y-1/2'>
					<div className='flex h-7 min-w-10 items-center justify-center rounded-full border border-accent/15 bg-primary/70 px-2.5 backdrop-blur-md'>
						<span className='text-[8px] font-bold tracking-[0.16em] text-accent/80'>
							UA
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
