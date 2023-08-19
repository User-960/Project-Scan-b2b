interface IMenuItem {
	title: string
	link: string
}

export const menu: IMenuItem[] = [
	{
		title: 'Главная',
		link: '/'
	},
	{
		title: 'Тарифы',
		link: '/plans'
	},
	{
		title: 'FAQ',
		link: '/faq'
	}
]
