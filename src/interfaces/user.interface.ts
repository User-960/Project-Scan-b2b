export interface IUser {
	id: number
	accessToken: string
	expire: string
	login: string
	password: string
}

export interface IUserResponse {
	accessToken: string
	expire: string
}

export type TypeUser = IUser | null
