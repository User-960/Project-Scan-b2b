export interface IMarkupData {
	scandoc: {
		_: string
		sentence: ISentence[]
	}
}

export interface ISentence {
	_: string
	entity?: IEntity[]
	speech?: ISpeech[]
}

export interface IEntity {
	_?: string
	entity?: IEntityParam[]
	$: Object
}

export interface IEntityParam {
	_?: string
	$: Object
}

export interface ISpeech {
	_: string
	$: Object
}
