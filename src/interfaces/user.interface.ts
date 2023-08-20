export interface IUser {
	id: number
	token: string
	expire: string
	tel: string
	password: string
}

export interface IUserResponse {
	token: string
	expire: string
}

export type TypeUser = IUser | null
