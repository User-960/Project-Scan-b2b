import moment from 'moment'

import { TypeHistograms } from '@/interfaces/objectsearch.interface'

interface IDayHistogram {
	id: number
	date: string
	totalDocs: number
	riskFact: number
}

export const filterHistogramsData = (histogramsData: TypeHistograms) => {
	let allDaysHistogram: IDayHistogram[] = []
	let dates: string[] = []
	let totalDocs: number[] = []
	let riskFact: number[] = []

	if (histogramsData) {
		for (let i = 0; i < histogramsData.data.length; i++) {
			if (histogramsData.data[i].histogramType === 'totalDocuments') {
				for (let j = 0; j < histogramsData.data[i].data.length; j++) {
					dates.push(histogramsData.data[i].data[j].date)
				}
			}
		}

		for (let i = 0; i < histogramsData.data.length; i++) {
			if (histogramsData.data[i].histogramType === 'totalDocuments') {
				for (let j = 0; j < histogramsData.data[i].data.length; j++) {
					totalDocs.push(histogramsData.data[i].data[j].value)
				}
			}

			if (histogramsData.data[i].histogramType === 'riskFactors') {
				for (let j = 0; j < histogramsData.data[i].data.length; j++) {
					riskFact.push(histogramsData.data[i].data[j].value)
				}
			}
		}
	}

	let allDaysHistogramDates = []
	let allDaysHistogramTotal = []

	for (let i = 0; i < dates.length; i++) {
		allDaysHistogramDates.push({ date: dates[i] })
	}

	allDaysHistogramTotal = allDaysHistogramDates.map((item, index) => ({
		...item,
		totalDocs: totalDocs[index]
	}))

	allDaysHistogram = allDaysHistogramTotal.map((item, index) => ({
		...item,
		id: index,
		riskFact: riskFact[index]
	}))

	return allDaysHistogram
}

export const bubbleSort = (array: IDayHistogram[]) => {
	let stepsCount = array.length - 1

	let swapped

	do {
		swapped = false
		for (let i = 0; i < stepsCount; i += 1) {
			if (
				moment(array[i].date).valueOf() > moment(array[i + 1].date).valueOf()
			) {
				const temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
				swapped = true
			}
		}
		stepsCount -= 1
	} while (swapped)

	return array
}
