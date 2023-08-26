import cn from 'clsx'
import localFont from 'next/font/local'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import { useScanDocs } from '@/components/hooks/useScanDocs'

import styles from '../SearchResult.module.scss'
import CardDocument from '../card-document/CardDocument'

const ferryFont = localFont({
	src: '../../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const CardList: FC = () => {
	// const { isLoadingDocs } = useScanDocs()

	return (
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
	)
}

export default CardList
