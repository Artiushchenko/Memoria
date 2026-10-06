export const contacts = {
	phones: [
		{
			label: '+49 151 463 11 093',
			value: '+4915146311093',
			country: 'DE'
		},
		{
			label: '+380 99 982 91 56',
			value: '+380999829156',
			country: 'UA'
		}
	],
	email: 'semikrasovnatelia@gmail.com',
	whatsapp: '+4915146311093',
	viber: '+4915146311093'
} as const

export const contactLinks = {
	phone: (phone: string) => `tel:${phone}`,
	email: `mailto:${contacts.email}`,
	whatsapp: `https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`,
	viber: `viber://chat?number=${encodeURIComponent(contacts.viber)}`
} as const
