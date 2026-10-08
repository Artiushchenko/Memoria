import { getTranslations } from 'next-intl/server'
import { HeaderClient } from './HeaderClient'

export async function Header() {
	const t = await getTranslations('Navigation')

	const navigation = [
		{
			label: t('home'),
			href: '/'
		},
		{
			label: t('services'),
			href: '/#services'
		},
		{
			label: t('process'),
			href: '/#process'
		},
		{
			label: t('transport'),
			href: '/#transport'
		},
		{
			label: t('about'),
			href: '/#about'
		},
		{
			label: t('reviews'),
			href: '/#reviews'
		},
		{
			label: t('contacts'),
			href: '/#contacts'
		}
	]

	return (
		<HeaderClient
			navigation={navigation}
			homeLabel={t('home')}
			contactLabel={t('contact')}
			menuLabel={t('menu')}
			openMenuLabel={t('openMenu')}
			closeMenuLabel={t('closeMenu')}
			navigationAriaLabel={t('mainNavigationAriaLabel')}
			mobileNavigationAriaLabel={t('mobileNavigationAriaLabel')}
		/>
	)
}
