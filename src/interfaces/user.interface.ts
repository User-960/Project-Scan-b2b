export interface IUser {
	id: number
	accessToken: string
	expire: string
	login: string
	password: string
}

export interface IEventFiltersInfo {
	usedCompanyCount: number
	companyLimit: number
}

export interface EventFiltersInfo {
	eventFiltersInfo: IEventFiltersInfo
}

export interface IUserResponse {
	accessToken: string
	expire: string
}

export type TypeUser = IUser | null
