export interface ISearch {
	issueDateInterval: IDateInterval
	searchContext: ISearchContext
	attributeFilters: IAttributeFilters
	searchArea: any
	similarMode: string
	limit: number
	sortType: string
	sortDirectionType: string
	intervalType: string
	histogramTypes: string[]
}

export interface ISearchResponse {
	data: IHistogramData[]
}

export interface IHistogramData {
	data: IIntervalPoint[]
	histogramType: string
}

export interface IIntervalPoint {
	date: string
	value: number
}

export interface IDateInterval {
	startDate: string
	endDate: string
}

export interface IAttributeFilters {
	excludeTechNews: boolean | null
	excludeAnnouncements: boolean | null
	excludeDigests: boolean | null
}

export interface ITargetSearchEntity {
	type: string
	inBusinessNews: boolean | null
	sparkId: number | null
	entityId: number | null
	inn: string
	maxFullness: boolean
}

export interface ISearchContext {
	targetSearchEntitiesContext: {
		targetSearchEntities: ITargetSearchEntity[]
		onlyMainRole: boolean
		onlyWithRiskFactors: boolean
		tonality: string
		riskFactors?: any
		themes?: any
	}
	themesFilter?: any
	locationsFilter?: any
	searchEntitiesFilter?: any
}
