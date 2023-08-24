import { Carousel } from 'antd'
import moment from 'moment'
import 'moment/locale/ru'
import { FC } from 'react'

import { useObject } from '@/components/hooks/useObject'

import styles from './ResultCarousel.module.scss'
import { TypeHistograms } from '@/interfaces/objectsearch.interface'

interface IDayHistogram {
	id: number
	date: string
	totalDocs: number
	riskFact: number
}

const ResultCarousel: FC = () => {
	const { histogramsData } = useObject()

	const onChange = (currentSlide: number) => {
		console.log(currentSlide)
	}

	const filterHistogramsData = (histogramsData: TypeHistograms) => {
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

	console.log(filterHistogramsData(histogramsData))

	const settings = {
		arrows: true,
		dots: false,
		slidesToShow: filterHistogramsData(histogramsData).length,
		slidesToScroll: 1,
		className: 'carouselHistograms'
	}

	return (
		<>
			<div className={styles.wrapperCarousel}>
				<div className={styles.carouselTable}>
					<div className={styles.carouselRow}>Период</div>
					<div className={styles.carouselRow}>Всего</div>
					<div className={styles.carouselRow}>Риски</div>
				</div>
				<Carousel afterChange={onChange} {...settings}>
					{filterHistogramsData(histogramsData).map((item: IDayHistogram) => (
						<div key={item.id} className={styles.carouselItem}>
							<p className={styles.carouselDate}>
								{moment(item.date).format('L')}
							</p>

							<p className={styles.carouselAll}>{item.totalDocs}</p>

							<p className={styles.carouselRisks}>{item.riskFact}</p>
						</div>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default ResultCarousel
