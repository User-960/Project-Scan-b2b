import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState
} from 'react'
import { createContext } from 'react'

import { TypeHistograms } from '@/interfaces/objectsearch.interface'

type TypeContext = {
	histogramsData: TypeHistograms
	setHistogramsData: Dispatch<SetStateAction<TypeHistograms>>
	emptyHistogramsData: string | null
	setEmptyHistogramsData: Dispatch<SetStateAction<string | null>>
}

export const ObjectSearchContext = createContext<TypeContext>({
	histogramsData: null,
	setHistogramsData: () => {},
	emptyHistogramsData: null,
	setEmptyHistogramsData: () => {}
})

const ObjectSearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [histogramsData, setHistogramsData] = useState<TypeHistograms>(null)
	const [emptyHistogramsData, setEmptyHistogramsData] = useState<string | null>(
		null
	)

	return (
		<ObjectSearchContext.Provider
			value={{
				histogramsData,
				setHistogramsData,
				emptyHistogramsData,
				setEmptyHistogramsData
			}}
		>
			{children}
		</ObjectSearchContext.Provider>
	)
}

export default ObjectSearchProvider
