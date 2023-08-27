import { Carousel } from 'antd'
import { FC } from 'react'

import styles from '../HomeCarousel.module.scss'

import Card from './Card'

const data = [
	{
		img: '/images/time.jpg',
		text: 'Высокая и оперативная скорость обработки заявки'
	},
	{
		img: '/images/search.jpg',
		text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
	},
	{
		img: '/images/shield.jpg',
		text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
	}
]

const CarouselSlider: FC = () => {
	const settings = {
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: 'carouselHistograms',
		responsive: [
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
		<div className={styles.carouselSlider}>
			{data.map((el, idx) => (
				<Card key={idx} img={el.img} text={el.text} />
			))}
		</div>
	)
}

export default CarouselSlider
