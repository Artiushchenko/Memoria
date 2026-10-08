import { contactLinks, contacts } from '@/config/contacts'
import { Mail, MessageCircle, Smartphone } from 'lucide-react'
import { ContactItem } from './ContactItem'

type ContactsListProps = {
	labels: {
		phone: string
		germany: string
		ukraine: string
		whatsapp: string
		viber: string
		email: string
	}
}

export function ContactsList({ labels }: ContactsListProps) {
	return (
		<div className='border-t border-white/10'>
			<ContactItem
				label={`${labels.phone} · ${labels.germany}`}
				value={contacts.phones[0].label}
				href={contactLinks.phone(contacts.phones[0].value)}
				icon={Smartphone}
			/>

			<ContactItem
				label={`${labels.phone} · ${labels.ukraine}`}
				value={contacts.phones[1].label}
				href={contactLinks.phone(contacts.phones[1].value)}
				icon={Smartphone}
			/>

			<ContactItem
				label={labels.whatsapp}
				value={contacts.whatsapp.label}
				href={contactLinks.whatsapp}
				icon={MessageCircle}
				external
			/>

			<ContactItem
				label={labels.viber}
				value={contacts.viber.label}
				href={contactLinks.viber}
				icon={MessageCircle}
			/>

			<ContactItem
				label={labels.email}
				value={contacts.email}
				href={contactLinks.email}
				icon={Mail}
			/>
		</div>
	)
}
