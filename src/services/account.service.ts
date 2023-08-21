import { $axios } from '@/api/api'
import { EventFiltersInfo } from '@/interfaces/user.interface'

const INFO = '/v1/account/info'

class AccountService {
	async getInfo() {
		return $axios.get<EventFiltersInfo>(`${INFO}`)
	}
}

export default new AccountService()
