import { $axios } from '@/api/api'
import {
	IScanDocsResponse,
	ISearch,
	ISearchResponse,
	ISearchResultItemsResponse
} from '@/interfaces/objectsearch.interface'

const HISTOGRAMS = '/v1/objectsearch/histograms'
const OBJECTSEARCH = '/v1/objectsearch'
const DOCUMENTS = '/v1/documents'

class ObjectSearch {
	async searchHistograms(
		inn: string,
		startDate: string,
		endDate: string,
		limit: number,
		tonality: string,
		onlyWithRiskFactors: boolean,
		onlyMainRole: boolean,
		maxFullness: boolean,
		inBusinessNews: boolean | null,
		excludeTechNews: boolean,
		excludeAnnouncements: boolean,
		excludeDigests: boolean
	) {
		const postData: ISearch = {
			issueDateInterval: {
				startDate: startDate,
				endDate: endDate
			},
			searchContext: {
				targetSearchEntitiesContext: {
					targetSearchEntities: [
						{
							type: 'company',
							sparkId: null,
							entityId: null,
							inn: inn,
							maxFullness: maxFullness,
							inBusinessNews: inBusinessNews
						}
					],
					onlyMainRole: onlyMainRole,
					tonality: tonality,
					onlyWithRiskFactors: onlyWithRiskFactors
				}
			},
			searchArea: {
				includedSources: [],
				excludedSources: [],
				includedSourceGroups: [],
				excludedSourceGroups: []
			},
			attributeFilters: {
				excludeTechNews: !excludeTechNews,
				excludeAnnouncements: !excludeAnnouncements,
				excludeDigests: !excludeDigests
			},
			similarMode: 'duplicates',
			limit: limit,
			sortType: 'sourceInfluence',
			sortDirectionType: 'desc',
			intervalType: 'month',
			histogramTypes: ['totalDocuments', 'riskFactors']
		}

		try {
			const { data } = await $axios.post<ISearchResponse>(
				`${HISTOGRAMS}`,
				postData
			)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}

	async searchDocs(
		inn: string,
		startDate: string,
		endDate: string,
		limit: number,
		tonality: string,
		onlyWithRiskFactors: boolean,
		onlyMainRole: boolean,
		maxFullness: boolean,
		inBusinessNews: boolean | null,
		excludeTechNews: boolean,
		excludeAnnouncements: boolean,
		excludeDigests: boolean
	) {
		const postData: ISearch = {
			issueDateInterval: {
				startDate: startDate,
				endDate: endDate
			},
			searchContext: {
				targetSearchEntitiesContext: {
					targetSearchEntities: [
						{
							type: 'company',
							sparkId: null,
							entityId: null,
							inn: inn,
							maxFullness: maxFullness,
							inBusinessNews: inBusinessNews
						}
					],
					onlyMainRole: onlyMainRole,
					tonality: tonality,
					onlyWithRiskFactors: onlyWithRiskFactors
				}
			},
			searchArea: {
				includedSources: [],
				excludedSources: [],
				includedSourceGroups: [],
				excludedSourceGroups: []
			},
			attributeFilters: {
				excludeTechNews: !excludeTechNews,
				excludeAnnouncements: !excludeAnnouncements,
				excludeDigests: !excludeDigests
			},
			similarMode: 'duplicates',
			limit: limit,
			sortType: 'sourceInfluence',
			sortDirectionType: 'desc',
			intervalType: 'month',
			histogramTypes: ['totalDocuments', 'riskFactors']
		}

		try {
			const { data } = await $axios.post<ISearchResultItemsResponse>(
				`${OBJECTSEARCH}`,
				postData
			)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}

	async scanDocs(ids: string[]) {
		const postData = {
			ids: ids
		}

		try {
			const { data } = await $axios.post<IScanDocsResponse[]>(
				`${DOCUMENTS}`,
				postData
			)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}
}

export default new ObjectSearch()
