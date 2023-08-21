import { $axios } from '@/api/api'
import { ISearch, ISearchResponse } from '@/interfaces/search'

const HISTOGRAMS = '/v1/objectsearch/histograms'

const testRes: ISearchResponse = {
	data: [
		{
			data: [
				{
					date: '2020-11-01T03:00:00+03:00',
					value: 8
				},
				{
					date: '2020-06-01T03:00:00+03:00',
					value: 6
				}
			],
			histogramType: 'totalDocuments'
		},
		{
			data: [
				{
					date: '2020-11-01T03:00:00+03:00',
					value: 0
				},
				{
					date: '2020-06-01T03:00:00+03:00',
					value: 1
				}
			],
			histogramType: 'riskFactors'
		}
	]
}

class ObjectSearch {
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
				startDate: '2019-01-01T00:00:00+03:00',
				endDate: '2022-08-31T23:59:59+03:00'
			},
			searchContext: {
				targetSearchEntitiesContext: {
					targetSearchEntities: [
						{
							type: 'company',
							sparkId: null,
							entityId: null,
							inn: inn,
							maxFullness: true,
							inBusinessNews: null
						}
					],
					onlyMainRole: true,
					tonality: 'any',
					onlyWithRiskFactors: false
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
			limit: 1000,
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
}

export default new ObjectSearch()
