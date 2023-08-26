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

export interface ISearchResultItemsResponse {
	items: ISearchResultItem[]
	mappings?: ISearchResultMapping[]
}

export interface ISearchResultItem {
	encodedId: string
	influence: number
	similarCount: number
}

export interface ISearchResultMapping {
	inn: number
	entityIds: number[]
}

export interface ISearchDocs {
	ids: string[]
}

export interface ISearchDocsResponse {
	ok: IScanDoc[]
	fail: ISearchDocsFail
}

export interface ISearchDocsFail {
	errorCode: any
	errorMessage: string
}

export interface IScanDoc {
	schemaVersion: string
	id: string
	version: number
	issueDate: string
	url: string
	author: IScanDocAuthor
	source: IScanDocSource
	dedupClusterId: string
	title: IScanDocTitle
	content: IScanDocContent
	entities?: any
	attributes: IScanDocAttributes
	language: string | 'Russian' | 'other' | 'unknown'
}

export interface IScanDocTitle {
	text: string
	markup: string
}

export interface IScanDocAuthor {
	name: string
}

export interface IScanDocContent {
	markup: string
}

export interface IScanDocSource {
	id: number
	name: string
	categoryId: number
	levelId: number
	groupId: number
}

export interface IScanDocAttributes {
	isTechNews: boolean
	isAnnouncement: boolean
	isDigest: boolean
	wordCount: number
	influence?: number
	coverage?: any
}
