import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { createContext } from 'react'

import { ISearchFields } from '@/interfaces/form.interface'
import { TypeHistograms } from '@/interfaces/objectsearch.interface'
import { ISearchResultItemsResponse } from '@/interfaces/search'

type TypeContext = {
	formData: ISearchFields | null
	setFormData: Dispatch<SetStateAction<ISearchFields | null>>
	histogramsData: TypeHistograms
	setHistogramsData: Dispatch<SetStateAction<TypeHistograms>>
	emptyHistogramsData: string | null
	setEmptyHistogramsData: Dispatch<SetStateAction<string | null>>
	idsItems: string[] | null
	setIdsItems: Dispatch<SetStateAction<string[] | null>>
}

export const ObjectSearchContext = createContext<TypeContext>({
	formData: null,
	setFormData: () => {},
	histogramsData: null,
	setHistogramsData: () => {},
	emptyHistogramsData: null,
	setEmptyHistogramsData: () => {},
	idsItems: null,
	setIdsItems: () => {}
})

const ObjectSearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [formData, setFormData] = useState<ISearchFields | null>(null)
	const [histogramsData, setHistogramsData] = useState<TypeHistograms>(null)
	const [emptyHistogramsData, setEmptyHistogramsData] = useState<string | null>(
		null
	)
	const [idsItems, setIdsItems] = useState<string[] | null>(null)

	console.log(formData)
	console.log(histogramsData)
	console.log(idsItems)

	return (
		<ObjectSearchContext.Provider
			value={{
				formData,
				setFormData,
				histogramsData,
				setHistogramsData,
				emptyHistogramsData,
				setEmptyHistogramsData,
				idsItems,
				setIdsItems
			}}
		>
			{children}
		</ObjectSearchContext.Provider>
	)
}

export default ObjectSearchProvider
