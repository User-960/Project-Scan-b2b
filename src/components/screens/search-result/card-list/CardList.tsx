import cn from 'clsx'
import localFont from 'next/font/local'
import { FC, useEffect, useState } from 'react'

import Button from '@/components/ui/button/Button'

import { useObject } from '@/components/hooks/useObject'
import { useScanDocs } from '@/components/hooks/useScanDocs'

import styles from '../SearchResult.module.scss'
import CardDocument from '../card-document/CardDocument'

import { IScanDoc, IScanDocsResponse } from '@/interfaces/search'
import ObjectSearch from '@/services/objectsearch/objectsearch.service'

const ferryFont = localFont({
	src: '../../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const CardList: FC = () => {
	// const { isLoading } = useScanDocs()
	const { idsItems } = useObject()
	const [docs, setDocs] = useState<IScanDoc[] | null>(null)

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

	console.log(docs)

	return (
		<section className={styles.sectionCards}>
			<h5 className={cn(ferryFont.className, styles.carouselTitleCards)}>
				Список документов
			</h5>

			{!docs ? (
				<div>Loading...</div>
			) : (
				<ul className={styles.listCards}>
					{docs.map(document => (
						<>
							<p>{document.language}</p>
							<CardDocument />
						</>
					))}
				</ul>
			)}

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
	)
}

export default CardList
