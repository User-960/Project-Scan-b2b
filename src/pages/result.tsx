import SearchResult from '@/components/screens/search-result/SearchResult'

import { NextPageAuth } from '@/interfaces/page.interface'

const ResultPage: NextPageAuth = () => {
	return <SearchResult />
}

ResultPage.isOnlyUser = true

export default ResultPage
