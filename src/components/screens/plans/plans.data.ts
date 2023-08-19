export interface IPlan {
	id: number
	title: string
	description: string
	img: string
	newPrice: number
	oldPrice: number
	installment: string
	conditions: ICondition[]
}

export interface ICondition {
	id: number
	condition: string
	status: boolean
}

export const plans: IPlan[] = [
	{
		id: 1,
		title: 'Beginner',
		description: 'Для небольшого исследования',
		img: 'planBeginner',
		newPrice: 799,
		oldPrice: 1200,
		installment: 'или 150 ₽/мес. при рассрочке на 24 мес.',
		conditions: [
			{
				id: 30,
				condition: 'Безлимитная история запросов',
				status: true
			},
			{
				id: 31,
				condition: 'Безопасная сделка',
				status: true
			},
			{
				id: 32,
				condition: 'Поддержка 24/7',
				status: true
			}
		]
	},
	{
		id: 2,
		title: 'Pro',
		description: 'Для HR и фрилансеров',
		img: 'planPro',
		newPrice: 1299,
		oldPrice: 2600,
		installment: 'или 279 ₽/мес. при рассрочке на 24 мес.',
		conditions: [
			{
				id: 43,
				condition: 'Все пункты тарифа Beginner',
				status: true
			},
			{
				id: 44,
				condition: 'Экспорт истории',
				status: true
			},
			{
				id: 45,
				condition: 'Рекомендации по приоритетам',
				status: true
			}
		]
	},
	{
		id: 3,
		title: 'Business',
		description: 'Для корпоративных клиентов',
		img: 'planBusiness',
		newPrice: 2379,
		oldPrice: 3700,
		installment: '',
		conditions: [
			{
				id: 48,
				condition: 'Все пункты тарифа Pro',
				status: true
			},
			{
				id: 49,
				condition: 'Безлимитное количество запросов',
				status: true
			},
			{
				id: 50,
				condition: 'Приоритетная поддержка',
				status: true
			}
		]
	}
]
