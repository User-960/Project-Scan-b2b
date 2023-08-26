import { useMutation } from '@tanstack/react-query'
import moment from 'moment'
import { useMemo, useState } from 'react'

import { useObject } from './useObject'
import { ISearchFields } from '@/interfaces/form.interface'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

export const useObjectSearch = () => {
	const [errorState, setErrorState] = useState<string>('')
	const { formData, setFormData, setEmptyHistogramsData, setResultItems } =
		useObject()

	const { isLoading, isSuccess, mutateAsync } = useMutation(
		['search object'],
		({
			inn,
			startDate,
			endDate,
			limit,
			tonality,
			onlyWithRiskFactors,
			onlyMainRole,
			maxFullness,
			inBusinessNews
		}: ISearchFields) =>
			ObjectSearch.search(
				inn,
				startDate,
				endDate,
				limit,
				tonality,
				onlyWithRiskFactors,
				onlyMainRole,
				maxFullness,
				inBusinessNews
			),
		{
			onSuccess: data => {
				if (data) {
					setResultItems(data)
				} else {
					setEmptyHistogramsData('Документы не найдены')
				}
			},
			onError: (error: Error) => {
				if (error) {
					setErrorState(error.message)
				}
			}
		}
	)

	if (formData) {
		mutateAsync({
			inn: formData.inn,
			startDate: moment(formData.startDate).format(),
			endDate: moment(formData.endDate).format(),
			limit: formData.limit,
			tonality: formData.tonality,
			onlyWithRiskFactors: formData.onlyWithRiskFactors,
			onlyMainRole: formData.onlyMainRole,
			maxFullness: formData.maxFullness,
			inBusinessNews: formData.inBusinessNews
		})
		setFormData(null)
	}

	return useMemo(
		() => ({
			errorState,
			isSuccess,
			isLoading
		}),
		[isLoading, isSuccess]
	)
}
