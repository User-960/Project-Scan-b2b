import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import documentsImage from '../../../../public/images/documents.svg'

import styles from './Search.module.scss'
import SearchForm from './searchForm/SearchForm'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Search: FC = () => {
	const meta: IMeta = {
		title: 'Поиск по ИНН',
		description: 'Find company'
	}

	return (
		<Layout meta={meta}>
			<section className={styles.sectionSearch}>
				<div className={styles.info}>
					<h1 className={cn(ferryFont.className, styles.title)}>
						Найдите необходимые данные в пару кликов.
					</h1>
					<h4 className={styles.description}>
						Задайте параметры поиска. Чем больше заполните, тем точнее поиск
					</h4>
				</div>

				<Image
					className={styles.sectionImage}
					src={documentsImage}
					alt='Main image'
				/>
			</section>

			<section>
				<SearchForm />
			</section>
		</Layout>
	)
}

export default Search
