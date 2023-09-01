import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import mainImage from '../../../../public/images/main.png'
import sectionImage from '../../../../public/images/sectionImage.svg'
import stylesSlider from '../home-carousel/HomeCarousel.module.scss'
import HomeCarouselSlider from '../home-carousel/HomeCarouselSlider/HomeCarouselSlider'
import Plans from '../plans/Plans'

import styles from './Home.module.scss'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Главная',
		description: 'Check business correctly'
	}

	const { push } = useRouter()

	return (
		<Layout meta={meta}>
			<div className={styles.home}>
				<section className={styles.sectionMain}>
					<div className={styles.info}>
						<h1 className={cn(ferryFont.className, styles.title)}>
							сервис по поиску публикаций о компании <br />
							по его ИНН
						</h1>
						<h4 className={styles.description}>
							Комплексный анализ публикаций, получение данных в формате PDF на
							электронную почту.
						</h4>
						<div className={styles.btnWrapper}>
							<Button
								size={'medium'}
								state='btnAvailable'
								clickHandler={() => push('/search')}
							>
								Запросить данные
							</Button>
						</div>
					</div>
					<Image
						className={styles.mainImage}
						src={mainImage}
						alt='Main image'
						draggable={false}
					/>
				</section>

				<section className={styles.sectionCarousel}>
					<h2 className={cn(ferryFont.className, stylesSlider.titleCarousel)}>
						Почему именно мы
					</h2>

					<HomeCarouselSlider />
				</section>

				<section className={styles.sectionImage}>
					<Image src={sectionImage} alt='Section image' draggable={false} />
				</section>

				<Plans />
			</div>
		</Layout>
	)
}

export default Home
