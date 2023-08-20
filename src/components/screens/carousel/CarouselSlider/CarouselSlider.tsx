import { FC } from 'react'

// import Slider from '@ant-design/react-slick'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
import styles from '../Carousel.module.scss'

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
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
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
