export interface IAuthFields {
	login: string
	password: string
}

export interface ISearchFields {
	inn: string
	startDate: string
	endDate: string
	limit: number
	tonality: string
	onlyWithRiskFactors: boolean
	onlyMainRole: boolean
	maxFullness: boolean
	inBusinessNews: boolean | null
}

export interface ITonalityOption {
	id: number
	value: string
	label: string
}
