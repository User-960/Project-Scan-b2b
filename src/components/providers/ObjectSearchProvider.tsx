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
	resultItems: ISearchResultItemsResponse | null
	setResultItems: Dispatch<SetStateAction<ISearchResultItemsResponse | null>>
}

export const ObjectSearchContext = createContext<TypeContext>({
	formData: null,
	setFormData: () => {},
	histogramsData: null,
	setHistogramsData: () => {},
	emptyHistogramsData: null,
	setEmptyHistogramsData: () => {},
	resultItems: null,
	setResultItems: () => {}
})

const ObjectSearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [formData, setFormData] = useState<ISearchFields | null>(null)
	const [histogramsData, setHistogramsData] = useState<TypeHistograms>(null)
	const [emptyHistogramsData, setEmptyHistogramsData] = useState<string | null>(
		null
	)
	const [resultItems, setResultItems] =
		useState<ISearchResultItemsResponse | null>(null)

	return (
		<ObjectSearchContext.Provider
			value={{
				formData,
				setFormData,
				histogramsData,
				setHistogramsData,
				emptyHistogramsData,
				setEmptyHistogramsData,
				resultItems,
				setResultItems
			}}
		>
			{children}
		</ObjectSearchContext.Provider>
	)
}

export default ObjectSearchProvider
