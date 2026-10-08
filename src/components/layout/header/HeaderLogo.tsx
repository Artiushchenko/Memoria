import { siteConfig } from '@/config/site'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import Image from 'next/image'

type HeaderLogoProps = {
	scrolled: boolean
	lightHeader: boolean
	onClick: () => void
	homeLabel: string
}

export function HeaderLogo({
	scrolled,
	lightHeader,
	onClick,
	homeLabel
}: HeaderLogoProps) {
	return (
		<Link
			href='/'
			aria-label={`${siteConfig.name} — ${homeLabel}`}
			onClick={onClick}
			className='relative z-50 flex shrink-0 items-center'
		>
			<div
				className={cn(
					'relative transition-[width,height] duration-500',
					scrolled ? 'h-11 w-43.75 sm:w-48.75' : 'h-13 w-48.75 sm:w-55'
				)}
			>
				<Image
					src='/logo/memoria-logo-light.png'
					alt=''
					fill
					priority
					sizes='(max-width: 640px) 195px, 220px'
					draggable={false}
					className={cn(
						'select-none object-contain object-left transition-opacity duration-300',
						lightHeader ? 'pointer-events-none opacity-0' : 'opacity-100'
					)}
				/>

				<Image
					src='/logo/memoria-logo-dark.png'
					alt=''
					fill
					priority
					sizes='(max-width: 640px) 195px, 220px'
					aria-hidden='true'
					draggable={false}
					className={cn(
						'select-none object-contain object-left transition-opacity duration-300',
						lightHeader ? 'opacity-100' : 'pointer-events-none opacity-0'
					)}
				/>
			</div>
		</Link>
	)
}
