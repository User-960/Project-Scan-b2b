import { useContext } from 'react'

import { ObjectSearchContext } from '../providers/ObjectSearchProvider'

export const useObject = () => useContext(ObjectSearchContext)
