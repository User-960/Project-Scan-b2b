import Search from '@/components/screens/search/Search'

import { NextPageAuth } from '@/interfaces/page.interface'

const SearchPage: NextPageAuth = () => {
	return <Search />
}

SearchPage.isOnlyUser = true

export default SearchPage
