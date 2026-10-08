import { contactLinks, contacts } from '@/config/contacts'
import { ArrowRight, Phone } from 'lucide-react'

type HeroContentProps = {
	eyebrow: string
	title: string
	description: string
	consultation: string
	call: string
}

export function HeroContent({
	eyebrow,
	title,
	description,
	consultation,
	call
}: HeroContentProps) {
	return (
		<div className='relative z-10'>
			<div className='mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-md sm:mb-7'>
				<span className='size-1.5 shrink-0 rounded-full bg-accent' />

				<span className='text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs'>
					{eyebrow}
				</span>
			</div>

			<h1 className='max-w-4xl font-serif text-[3.35rem] font-semibold leading-[0.91] tracking-[-0.035em] sm:text-[4.5rem] lg:text-[5.25rem] xl:text-[5.9rem] 2xl:text-[6.25rem]'>
				{title}
			</h1>

			<p className='mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8'>
				{description}
			</p>

			<div className='mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row'>
				<a
					href='#contacts'
					className='group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#142b47]! shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#f5f5f3] hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
				>
					<span>{consultation}</span>

					<ArrowRight
						size={17}
						strokeWidth={2}
						className='transition-transform duration-300 group-hover:translate-x-1'
					/>
				</a>

				<a
					href={contactLinks.phone(contacts.phones[0].value)}
					className='group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/6 px-7 text-sm font-semibold text-white backdrop-blur-md transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
				>
					<Phone
						size={17}
						strokeWidth={1.8}
						className='transition-transform duration-300 group-hover:scale-105'
					/>

					{call}
				</a>
			</div>
		</div>
	)
}
