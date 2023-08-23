import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import resultSearchImage from '../../../../public/images/resultSearchImg.svg'

import styles from './SearchResult.module.scss'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const SearchResult: FC = () => {
	const meta: IMeta = {
		title: 'Результат поиска',
		description: 'Search result'
	}

	return (
		<Layout meta={meta}>
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
		</Layout>
	)
}

export default SearchResult
