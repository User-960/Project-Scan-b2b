import cn from 'clsx'
import localFont from 'next/font/local'
import { FC, useEffect, useState } from 'react'

import Button from '@/components/ui/button/Button'

import { useObject } from '@/components/hooks/useObject'

import styles from '../SearchResult.module.scss'
import CardDocument from '../card-document/CardDocument'

import {
	IScanDoc,
	IScanDocsResponse
} from '@/interfaces/objectsearch.interface'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

const ferryFont = localFont({
	src: '../../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const CardList: FC = () => {
	const { idsItems } = useObject()
	const [docs, setDocs] = useState<IScanDoc[] | null>(null)

	// Pagination
	const [currentPage] = useState<number>(1)
	const [docsPerPage, setDocsPerPage] = useState<number>(2)

	const lastDocIndex = currentPage * docsPerPage
	const firstDocIndex = lastDocIndex - docsPerPage
	const currentDocs = docs?.slice(firstDocIndex, lastDocIndex)

	const nextDocs = () => setDocsPerPage(prev => prev + 2)
	// ----

	useEffect(() => {
		if (idsItems) {
			const data = ObjectSearch.scanDocs(idsItems)
				.then((result: IScanDocsResponse[]) => setDocs(filterDocs(result)))
				.catch(error => console.log(error))
		}
	}, [])

	const filterDocs = (docs: IScanDocsResponse[]) => {
		let newArray: any = []
		for (let i = 0; i < docs.length; i++) {
			newArray.push(docs[i].ok)
		}
		return newArray
	}

	return (
		<section className={styles.sectionCards}>
			<h5 className={cn(ferryFont.className, styles.carouselTitleCards)}>
				Список документов
			</h5>

			<ul className={styles.listCards}>
				{currentDocs?.map(document => (
					<CardDocument key={document.id} doc={document} />
				))}
			</ul>

			<div className={styles.btnWrapper}>
				{currentDocs?.length === docs?.length ? (
					<div className={styles.btnText}>Больше нет новостей</div>
				) : (
					<Button size={'medium'} state='btnAvailable' clickHandler={nextDocs}>
						Показать больше
					</Button>
				)}
			</div>
		</section>
	)
}

export default CardList
