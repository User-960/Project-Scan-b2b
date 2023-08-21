import { useQuery } from '@tanstack/react-query'

import {
	EventFiltersInfo,
	IEventFiltersInfo
} from '@/interfaces/user.interface'
import AccountService from '@/services/account.service'

export const useAccount = () => {
	return useQuery(['get info'], (data: any) => AccountService.getInfo(), {
		select: ({ data }): IEventFiltersInfo => data.eventFiltersInfo
	})
}
