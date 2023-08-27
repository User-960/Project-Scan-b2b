import cn from 'clsx'
import localFont from 'next/font/local'
import { FC } from 'react'

import styles from './HomeCarousel.module.scss'
import CarouselSlider from './HomeCarouselSlider/HomeCarouselSlider'

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
