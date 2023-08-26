import { $axios } from '@/api/api'
import {
	ISearch,
	ISearchResponse,
	ISearchResultList
} from '@/interfaces/search'

const HISTOGRAMS = '/v1/objectsearch/histograms'
const OBJECTSEARCH = '/v1/objectsearch'

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
		inBusinessNews: boolean | null
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
				excludeTechNews: true,
				excludeAnnouncements: true,
				excludeDigests: true
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

	async search(
		inn: string,
		startDate: string,
		endDate: string,
		limit: number,
		tonality: string,
		onlyWithRiskFactors: boolean,
		onlyMainRole: boolean,
		maxFullness: boolean,
		inBusinessNews: boolean | null
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
				excludeTechNews: true,
				excludeAnnouncements: true,
				excludeDigests: true
			},
			similarMode: 'duplicates',
			limit: limit,
			sortType: 'sourceInfluence',
			sortDirectionType: 'desc',
			intervalType: 'month',
			histogramTypes: ['totalDocuments', 'riskFactors']
		}

		try {
			const { data } = await $axios.post<ISearchResultList>(
				`${OBJECTSEARCH}`,
				postData
			)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}
}

export default new ObjectSearch()
