import { NotFoundView } from '@/components/layout/not-found/NotFoundView'
import { routing } from '@/i18n/routing'
import { Lora, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-manrope',
	display: 'swap'
})

const lora = Lora({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-lora',
	display: 'swap',
	weight: ['500', '600', '700']
})

export default function GlobalNotFound() {
	return (
		<html lang={routing.defaultLocale}>
			<body className={`${manrope.variable} ${lora.variable}`}>
				<NotFoundView
					title='Страница не найдена'
					description='Возможно, страница была перемещена, удалена или адрес был указан неверно.'
					backHome='Вернуться на главную'
					homeHref={`/${routing.defaultLocale}`}
				/>
			</body>
		</html>
	)
}
