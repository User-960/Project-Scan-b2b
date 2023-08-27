import { Carousel } from 'antd'
import Image from 'next/image'
import nextArrow from 'public/images/arrowLeftHistogram.png'
import { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

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
	},
	{
		img: '/images/shield.jpg',
		text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
	}
]

const SampleNextArrow = (props: any) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'red' }}
			onClick={onClick}
		/>
	)
}

const SamplePrevArrow = (props: any) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'green' }}
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
		className: 'carouselSlider',
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
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

	const contentStyle: React.CSSProperties = {
		padding: '22px 20px 30px 20px',
		maxWidth: '400px',
		minHeight: '225px',
		borderRadius: '10px',
		backgroundColor: '#fff',
		boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
		marginTop: '15px',
		marginBottom: '15px',
		marginLeft: '15px',
		marginRight: '15px'
	}

	const contentStyleText: React.CSSProperties = {
		marginTop: '12px',
		maxWidth: '313px',
		minHeight: '90px',
		color: '#000',
		fontSize: '18px',
		fontWeight: '400',
		lineHeight: 'normal',
		letterSpacing: '0.18px'
	}

	return (
		// <Carousel>
		// 	{data.map((el, idx) => (
		// 		<Card key={idx} img={el.img} text={el.text} />
		// 	))}
		// </Carousel>

		<Carousel {...settings}>
			<div>
				<div style={contentStyle}>
					<Image src={data[0].img} alt='time' width={64} height={64} />
					<p style={contentStyleText}>{data[0].text}</p>
				</div>
			</div>
			<div>
				<div style={contentStyle}>
					<Image src={data[1].img} alt='time' width={64} height={64} />
					<p style={contentStyleText}>{data[1].text}</p>
				</div>
			</div>
			<div>
				<div style={contentStyle}>
					<Image src={data[2].img} alt='time' width={64} height={64} />
					<p style={contentStyleText}>{data[2].text}</p>
				</div>
			</div>
			<div>
				<div style={contentStyle}>
					<Image src={data[3].img} alt='time' width={64} height={64} />
					<p style={contentStyleText}>{data[3].text}</p>
				</div>
			</div>
		</Carousel>
	)
}

export default CarouselSlider
