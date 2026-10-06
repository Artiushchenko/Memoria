import { contactLinks, contacts } from '@/config/contacts'
import { MessageCircle, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export async function MobileContactBar() {
	const t = await getTranslations('Contacts.mobile')

	return (
		<div className='fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-white/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(16,29,47,0.08)] backdrop-blur-xl lg:hidden'>
			<div className='mx-auto grid max-w-lg grid-cols-3 gap-1.5'>
				<a
					href={contactLinks.phone(contacts.phones[0].value)}
					aria-label={t('call')}
					className='flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-2 text-white! transition-colors active:bg-primary-hover'
				>
					<Phone
						size={16}
						strokeWidth={1.8}
					/>

					<span className='text-[10px] font-bold'>{t('call')}</span>
				</a>

				<a
					href={contactLinks.whatsapp}
					target='_blank'
					rel='noreferrer'
					aria-label={t('whatsapp')}
					className='flex h-12 items-center justify-center gap-2 rounded-xl bg-surface-soft px-2 text-primary transition-colors active:bg-border'
				>
					<MessageCircle
						size={16}
						strokeWidth={1.8}
					/>

					<span className='text-[10px] font-bold'>{t('whatsapp')}</span>
				</a>

				<a
					href={contactLinks.viber}
					aria-label={t('viber')}
					className='flex h-12 items-center justify-center gap-2 rounded-xl bg-surface-soft px-2 text-primary transition-colors active:bg-border'
				>
					<MessageCircle
						size={16}
						strokeWidth={1.8}
					/>

					<span className='text-[10px] font-bold'>{t('viber')}</span>
				</a>
			</div>
		</div>
	)
}
