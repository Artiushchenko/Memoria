import { siteConfig } from '@/config/site'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type NotFoundViewProps = {
	title: string
	description: string
	backHome: string
	homeHref: string
}

export function NotFoundView({
	title,
	description,
	backHome,
	homeHref
}: NotFoundViewProps) {
	return (
		<main className='relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#142b47] px-5 py-20 text-white'>
			{/* Background decoration */}
			<div
				className='pointer-events-none absolute inset-0 opacity-30'
				aria-hidden='true'
			>
				<div className='absolute -left-40 -top-40 size-125 rounded-full border border-white/10' />
				<div className='absolute -left-20 -top-20 size-80 rounded-full border border-white/10' />

				<div className='absolute -bottom-52 -right-52 size-150 rounded-full border border-white/10' />
				<div className='absolute -bottom-28 -right-28 size-100 rounded-full border border-white/10' />
			</div>

			<div className='relative z-10 mx-auto w-full max-w-2xl text-center'>
				{/* Brand */}
				<div className='mb-10 flex items-center justify-center gap-3'>
					<span className='h-px w-8 bg-[#b99a62]' />

					<span className='text-[10px] font-bold uppercase tracking-[0.28em] text-white/50'>
						{siteConfig.name}
					</span>

					<span className='h-px w-8 bg-[#b99a62]' />
				</div>

				{/* Error code */}
				<div
					className='font-serif text-[7rem] font-semibold leading-[0.8] tracking-[-0.06em] text-white/10 sm:text-[10rem]'
					aria-hidden='true'
				>
					404
				</div>

				{/* Content */}
				<div className='mt-8 sm:mt-10'>
					<h1 className='font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl'>
						{title}
					</h1>

					<p className='mx-auto mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base'>
						{description}
					</p>

					<Link
						href={homeHref}
						className='mx-auto mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#142b47]! transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90'
					>
						<ArrowLeft
							size={16}
							strokeWidth={1.8}
						/>
						{backHome}
					</Link>
				</div>
			</div>
		</main>
	)
}
