import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Loader from '@/components/ui/loader/Loader'

import { useObject } from '@/components/hooks/useObject'
import { useObjectSearch } from '@/components/hooks/useObjectSearch'

import resultSearchImage from '../../../../public/images/resultSearchImg.svg'

import styles from './SearchResult.module.scss'
import CardList from './card-list/CardList'
import ResultCarousel from './result-carousel/ResultCarousel'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const SearchResult: FC = () => {
	const { emptyHistogramsData } = useObject()
	const { isLoading } = useObjectSearch()

	// const { isLoadingDocs } = useScanDocs()

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

			{emptyHistogramsData ? (
				<Alert type={'error'} text={emptyHistogramsData} status={'checked'} />
			) : null}

			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<CardList />
			)}
		</>
	)
}

export default SearchResult
