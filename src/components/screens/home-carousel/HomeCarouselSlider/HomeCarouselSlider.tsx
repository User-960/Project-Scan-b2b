import { Carousel } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import styles from '../HomeCarousel.module.scss'

const dataHomeCarousel = [
	{
		id: 1,
		img: '/images/time.jpg',
		text: 'Высокая и оперативная скорость обработки заявки'
	},
	{
		id: 2,
		img: '/images/search.jpg',
		text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
	},
	{
		id: 3,
		img: '/images/shield.jpg',
		text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
	},
	{
		id: 4,
		img: '/images/time.jpg',
		text: 'Высокая и оперативная скорость обработки заявки'
	},
	{
		id: 5,
		img: '/images/search.jpg',
		text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
	},
	{
		id: 6,
		img: '/images/shield.jpg',
		text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
	}
]

const SampleNextArrow = (props: any) => {
	const { style, onClick } = props
	return (
		<div
			className={styles.slickArrowRight}
			style={{ ...style, width: '50px', height: '50px' }}
			onClick={onClick}
		/>
	)
}

const SamplePrevArrow = (props: any) => {
	const { className, style, onClick } = props
	return (
		<div
			className={styles.slickArrowLeft}
			style={{ ...style, width: '50px', height: '50px' }}
			onClick={onClick}
		/>
	)
}

const CarouselSlider: FC = () => {
	const settings = {
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: `${styles.carouselSlider}`,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	const contentStyle: React.CSSProperties = {
		padding: '18px 18px 10px 18px',
		maxWidth: '400px',
		minHeight: '225px',
		borderRadius: '10px',
		backgroundColor: '#fff',
		boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
		marginTop: '15px',
		marginBottom: '15px',
		marginLeft: '20px',
		marginRight: '20px'
	}

	const contentStyleText: React.CSSProperties = {
		marginTop: '12px',
		maxWidth: '313px',
		minHeight: '110px',
		color: '#000',
		fontSize: '18px',
		fontWeight: '400',
		lineHeight: 'normal',
		letterSpacing: '0.18px'
	}

	return (
		<Carousel {...settings}>
			{dataHomeCarousel.map(el => (
				<>
					<div>
						<div style={contentStyle}>
							<Image src={el.img} alt='time' width={64} height={64} />
							<p style={contentStyleText}>{el.text}</p>
						</div>
					</div>
				</>
			))}
		</Carousel>
	)
}

export default CarouselSlider
