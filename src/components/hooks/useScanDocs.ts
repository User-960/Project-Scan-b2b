import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { useObject } from './useObject'
import { IScanDocs } from '@/interfaces/search'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

export const useScanDocs = () => {
	const [errorState, setErrorState] = useState<string>('')
	const { setEmptyHistogramsData, idsItems } = useObject()

	const {
		isLoading: isLoadingDocs,
		isSuccess,
		mutateAsync
	} = useMutation(
		['scan docs'],
		({ ids }: IScanDocs) => ObjectSearch.scanDocs(ids),
		{
			onSuccess: data => {
				if (data) {
					console.log(data)
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

	if (idsItems) {
		mutateAsync({ ids: idsItems })
	}

	return useMemo(
		() => ({
			errorState,
			isSuccess,
			isLoadingDocs
		}),
		[isLoadingDocs, isSuccess]
	)
}
