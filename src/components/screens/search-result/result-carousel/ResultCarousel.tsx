import { Carousel } from 'antd'
import { FC } from 'react'

import { useObject } from '@/components/hooks/useObject'

import styles from './ResultCarousel.module.scss'

interface IResultCarouselProps {
	data?: any
}

const ResultCarousel: FC<IResultCarouselProps> = ({ data }) => {
	const { histogramsData } = useObject()

	const onChange = (currentSlide: number) => {
		console.log(currentSlide)
	}

	const settings = {
		arrows: true,
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		className: 'carouselHistograms'
	}

	return (
		<>
			<ul>
				{histogramsData?.data.map((item: any) => <li>{item.histogramType}</li>)}
			</ul>

			<div className={styles.wrapperCarousel}>
				<div className={styles.carouselTable}>
					<div className={styles.carouselRow}>Период</div>
					<div className={styles.carouselRow}>Всего</div>
					<div className={styles.carouselRow}>Риски</div>
				</div>
				<Carousel afterChange={onChange} {...settings}>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
					<div className={styles.carouselItem}>
						<p className={styles.carouselDate}>10.09.2021</p>
						<p className={styles.carouselAll}>5</p>
						<p className={styles.carouselRisks}>0</p>
					</div>
				</Carousel>
			</div>
		</>
	)
}

export default ResultCarousel
