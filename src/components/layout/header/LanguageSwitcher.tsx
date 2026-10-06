'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { useLocale } from 'next-intl'

type LanguageSwitcherProps = {
	scrolled?: boolean
	mobile?: boolean
}

export function LanguageSwitcher({
	scrolled = false,
	mobile = false
}: LanguageSwitcherProps) {
	const locale = useLocale()
	const pathname = usePathname()
	const router = useRouter()

	function changeLanguage(nextLocale: 'ru' | 'uk') {
		if (nextLocale === locale) return

		router.replace(pathname, {
			locale: nextLocale,
			scroll: false
		})
	}

	return (
		<div
			className={cn(
				'flex items-center rounded-full p-1',
				mobile
					? 'border border-border bg-surface-soft'
					: scrolled
						? 'border border-border bg-surface-soft'
						: 'border border-white/15 bg-white/10 backdrop-blur-md'
			)}
		>
			{(['ru', 'uk'] as const).map(language => {
				const active = locale === language

				return (
					<button
						key={language}
						type='button'
						onClick={() => changeLanguage(language)}
						className={cn(
							'rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-all duration-300',
							active
								? scrolled || mobile
									? 'bg-primary text-white shadow-sm'
									: 'bg-white text-primary shadow-sm'
								: scrolled || mobile
									? 'text-muted hover:text-primary'
									: 'text-white/55 hover:text-white'
						)}
					>
						{language}
					</button>
				)
			})}
		</div>
	)
}
