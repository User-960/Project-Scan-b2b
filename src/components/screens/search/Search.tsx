import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC, useEffect } from 'react'

import Alert from '@/components/ui/alert/Alert'

import { useObject } from '@/components/hooks/useObject'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import documentsImage from '../../../../public/images/documents.svg'
import formSearchImg from '../../../../public/images/formSearchImg.svg'
import SearchResult from '../search-result/SearchResult'

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

	const { histogramsData, emptyHistogramsData, setEmptyHistogramsData } =
		useObject()

	useEffect(() => {
		const timer = setTimeout(() => {
			setEmptyHistogramsData(null)
		}, 4000)
		return () => clearTimeout(timer)
	}, [emptyHistogramsData])

	return (
		<Layout meta={meta}>
			{!histogramsData ? (
				<>
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
							draggable={false}
						/>
					</section>

					<section className={styles.sectionForm}>
						<SearchForm />
						<Image
							className={styles.sectionFormImage}
							src={formSearchImg}
							alt='Form image'
						/>
					</section>

					{emptyHistogramsData ? (
						<Alert
							type={'error'}
							text={emptyHistogramsData}
							status={'checked'}
						/>
					) : null}
				</>
			) : (
				<>
					{histogramsData ? (
						<Alert type={'success'} text={'Успешно'} status={'checked'} />
					) : null}
					<SearchResult />
				</>
			)}
		</Layout>
	)
}

export default Search
