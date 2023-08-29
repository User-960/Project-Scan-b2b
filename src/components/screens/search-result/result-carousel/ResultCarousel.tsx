import { Carousel } from 'antd'
import moment from 'moment'
import 'moment/locale/ru'
import { FC } from 'react'

import Loader from '@/components/ui/loader/Loader'

import { useObject } from '@/components/hooks/useObject'

import styles from './ResultCarousel.module.scss'
import { bubbleSort, filterHistogramsData } from '@/algorithms/bubbleSort'

interface IDayHistogram {
	id: number
	date: string
	totalDocs: number
	riskFact: number
}

const ResultCarousel: FC = () => {
	const { histogramsData } = useObject()

	const settings = {
		arrows: true,
		dots: false,
		slidesToShow:
			bubbleSort(filterHistogramsData(histogramsData)).length > 8
				? 8
				: bubbleSort(filterHistogramsData(histogramsData)).length,
		slidesToScroll: 1,
		className: 'carouselHistograms',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<>
			<div className={styles.wrapperCarousel}>
				{!histogramsData ? (
					<div className={styles.loader}>
						<Loader loader='dots' />
					</div>
				) : (
					<>
						<p className={styles.carouselQuantity}>
							{`Найдено ${
								histogramsData ? filterHistogramsData(histogramsData).length : 0
							}
					вариантов`}
						</p>
						<div className={styles.carouselTable}>
							<div className={styles.carouselRow}>Период</div>
							<div className={styles.carouselRow}>Всего</div>
							<div className={styles.carouselRow}>Риски</div>
						</div>

						<Carousel {...settings}>
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
					</>
				)}
			</div>
		</>
	)
}

export default ResultCarousel
