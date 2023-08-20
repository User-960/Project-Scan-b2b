import cn from 'clsx'
import localFont from 'next/font/local'
import { FC } from 'react'

import styles from './Carousel.module.scss'
import CarouselSlider from './CarouselSlider/CarouselSlider'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Carousel: FC = () => {
	return (
		<section className={styles.sectionCarousel}>
			<h2 className={cn(ferryFont.className, styles.title)}>
				Почему именно мы
			</h2>

			<CarouselSlider />
		</section>
	)
}

export default Carousel
