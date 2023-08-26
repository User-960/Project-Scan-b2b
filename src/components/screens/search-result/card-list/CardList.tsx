import { FC } from 'react'

import { useScanDocs } from '@/components/hooks/useScanDocs'

import styles from '../SearchResult.module.scss'
import CardDocument from '../card-document/CardDocument'

const CardList: FC = () => {
	// const { isLoadingDocs } = useScanDocs()

	return (
		<ul className={styles.listCards}>
			<CardDocument />
			<CardDocument />
		</ul>
	)
}

export default CardList
