import { Carousel } from 'antd'
import moment from 'moment'
import 'moment/locale/ru'
import { FC } from 'react'

import { useObject } from '@/components/hooks/useObject'

import {
	bubbleSort,
	filterHistogramsData
} from '@/components/algorithms/bubbleSort'

import styles from './ResultCarousel.module.scss'

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

	console.log(bubbleSort(filterHistogramsData(histogramsData)))

	const settings = {
		arrows: true,
		dots: false,
		slidesToShow: bubbleSort(filterHistogramsData(histogramsData)).length,
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
					{bubbleSort(filterHistogramsData(histogramsData)).map(
						(item: IDayHistogram) => (
							<div key={item.id} className={styles.carouselItem}>
								<p className={styles.carouselDate}>
									{moment(item.date).format('L')}
								</p>

								<p className={styles.carouselAll}>{item.totalDocs}</p>

								<p className={styles.carouselRisks}>{item.riskFact}</p>
							</div>
						)
					)}
				</Carousel>
			</div>
		</>
	)
}

export default ResultCarousel
