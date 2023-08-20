import Cookies from 'js-cookie'

import { $axios } from '@/api/api'
import { ENUSER } from '@/config/app.constants'
import { IUserResponse } from '@/interfaces/user.interface'

class AuthService {
	async main(login: string, password: string, type: string) {
		try {
			const { data } = await $axios.post<IUserResponse>(`/v1/account/${type}`, {
				login,
				password
			})

			if (data.accessToken) Cookies.set(ENUSER.TOKEN, data.accessToken)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}
}

export default new AuthService()
