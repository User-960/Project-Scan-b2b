import { ISearchResultItemsResponse } from '@/interfaces/objectsearch.interface'

export const docsSortData = (data: ISearchResultItemsResponse) => {
	let ids: string[] = []
	for (let i = 0; i < data.items.length; i++) {
		ids.push(data.items[i].encodedId)
	}
	return ids
}
