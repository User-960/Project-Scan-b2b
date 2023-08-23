import { IHistogramData } from './search'

export interface IHistograms {
	data: IHistogramData[]
}

export type TypeHistograms = IHistograms | null
