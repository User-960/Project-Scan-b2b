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
}

export const ObjectSearchContext = createContext<TypeContext>({
	histogramsData: null,
	setHistogramsData: () => {}
})

const ObjectSearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [histogramsData, setHistogramsData] = useState<TypeHistograms>(null)

	return (
		<ObjectSearchContext.Provider value={{ histogramsData, setHistogramsData }}>
			{children}
		</ObjectSearchContext.Provider>
	)
}

export default ObjectSearchProvider
