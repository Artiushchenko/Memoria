'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'
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

	function changeLanguage(nextLocale: Locale) {
		if (nextLocale === locale) return

		router.replace(pathname, {
			locale: nextLocale,
			scroll: false
		})
	}

	const light = scrolled || mobile

	return (
		<div
			role='group'
			aria-label='Language / Мова'
			className={cn(
				'flex items-center rounded-full p-1',
				light
					? 'border border-border bg-surface-soft'
					: 'border border-white/15 bg-white/10 backdrop-blur-md'
			)}
		>
			{routing.locales.map(language => {
				const active = locale === language

				return (
					<button
						key={language}
						type='button'
						lang={language}
						aria-label={language === 'ru' ? 'Русский' : 'Українська'}
						aria-pressed={active}
						onClick={() => changeLanguage(language)}
						className={cn(
							'rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-all duration-300',
							active
								? light
									? 'bg-primary text-white shadow-sm'
									: 'bg-white text-primary shadow-sm'
								: light
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
