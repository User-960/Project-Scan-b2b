import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ISearchFields } from '@/interfaces/form.interface'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

export const useNewWorkoutPage = () => {
	const [errorState, setErrorState] = useState<string>('')

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
				console.log(data)
				reset()
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
			startDate: data.startDate,
			endDate: data.endDate,
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
