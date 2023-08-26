import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import { useObject } from '@/components/hooks/useObject'
import { useObjectSearch } from '@/components/hooks/useObjectSearch'

import resultSearchImage from '../../../../public/images/resultSearchImg.svg'

import styles from './SearchResult.module.scss'
import CardDocument from './card-document/CardDocument'
import ResultCarousel from './result-carousel/ResultCarousel'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const SearchResult: FC = () => {
	const { isLoading } = useObjectSearch()

	return (
		<>
			<section className={styles.sectionResultSearch}>
				<div className={styles.info}>
					<h1 className={cn(ferryFont.className, styles.title)}>
						Ищем. Скоро будут результаты
					</h1>
					<h4 className={styles.description}>
						Поиск может занять некоторое время, просим сохранять терпение.
					</h4>
				</div>

				<Image
					className={styles.sectionImage}
					src={resultSearchImage}
					alt='Main image'
				/>
			</section>

			<section className={styles.sectionCarousel}>
				<h5 className={cn(ferryFont.className, styles.carouselTitle)}>
					Общая сводка
				</h5>
				<ResultCarousel />
			</section>

			<section className={styles.sectionCards}>
				<h5 className={cn(ferryFont.className, styles.carouselTitleCards)}>
					Список документов
				</h5>

				<ul className={styles.listCards}>
					<CardDocument />
					<CardDocument />
				</ul>
				<div className={styles.btnWrapper}>
					<Button
						size={'medium'}
						state='btnAvailable'
						clickHandler={() => console.log('1')}
					>
						Запросить данные
					</Button>
				</div>
			</section>
		</>
	)
}

export default SearchResult
