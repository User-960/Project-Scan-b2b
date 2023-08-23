import cn from 'clsx'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import { useObjectSearch } from '@/components/hooks/useObjectSearch'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import resultSearchImage from '../../../../public/images/resultSearchImg.svg'

import styles from './SearchResult.module.scss'
import ResultCarousel from './result-carousel/ResultCarousel'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const DynamicResultCarousel = dynamic(
	() => import('./result-carousel/ResultCarousel'),
	{
		ssr: false
	}
)

const SearchResult: FC = () => {
	// const meta: IMeta = {
	// 	title: 'Результат поиска',
	// 	description: 'Search result'
	// }

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

			<section>
				{/* <DynamicResultCarousel data={resultData} /> */}
				<ResultCarousel />
			</section>
		</>
	)
}

export default SearchResult
