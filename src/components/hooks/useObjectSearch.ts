import { useMutation } from '@tanstack/react-query'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useObject } from './useObject'
import { ISearchFields } from '@/interfaces/form.interface'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

export const useObjectSearch = () => {
	const [errorState, setErrorState] = useState<string>('')
	const { push } = useRouter()
	const { setHistogramsData, setEmptyHistogramsData } = useObject()

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
				if (data && data.data.length !== 0) {
					reset()
					// push('/result')
					setHistogramsData(data)
				} else {
					setEmptyHistogramsData('По введенному ИНН нет данных')
				}
			},
			onError: (error: Error) => {
				if (error) {
					setErrorState(error.message)
				}
			}
		}
	)

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm<ISearchFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<ISearchFields> = async data => {
		await mutateAsync({
			inn: data.inn,
			startDate: moment(data.startDate).format(),
			endDate: moment(data.endDate).format(),
			limit: data.limit,
			tonality: data.tonality,
			onlyWithRiskFactors: data.onlyWithRiskFactors,
			onlyMainRole: data.onlyMainRole,
			maxFullness: data.maxFullness,
			inBusinessNews: data.inBusinessNews
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			control,
			errors,
			errorState,
			isSuccess,
			isLoading,
			onSubmit
		}),
		[errors, isLoading, isSuccess]
	)
}
