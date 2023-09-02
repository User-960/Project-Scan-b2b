import moment from 'moment'
import 'moment/locale/ru'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import styles from './CardDocument.module.scss'
import { formatXMlImage, formatXMlText } from '@/helpers/formatXML'
import { IScanDoc } from '@/interfaces/objectsearch.interface'

interface ICardDocumentProps {
	doc: IScanDoc
}

const CardDocument: FC<ICardDocumentProps> = ({ doc }) => {
	return (
		<div className={styles.wrapperCard}>
			<div className={styles.serviceInfo}>
				<p className={styles.date}>{moment(doc.issueDate).format('L')}</p>
				<Link className={styles.source} href={doc.url} target='_blank'>
					{doc.source.name}
				</Link>
			</div>
			<h6 className={styles.title}>{doc.title.text}</h6>
			<div className={styles.badges}>
				{doc.attributes.isTechNews && (
					<div className={styles.cardBadge}>Технические новости</div>
				)}
				{doc.attributes.isAnnouncement && (
					<div className={styles.cardBadge}>Объявление</div>
				)}
				{doc.attributes.isDigest && (
					<div className={styles.cardBadge}>Дайджест</div>
				)}
			</div>
			<div className={styles.cardImage}>
				<Image
					src={formatXMlImage(doc.content.markup)}
					alt='Card Image'
					width={540}
					height={320}
					priority={true}
					draggable={false}
				/>
			</div>

			<div className={styles.textInfo}>
				<p className={styles.text}>{formatXMlText(doc.content.markup)}</p>
			</div>
			<div className={styles.serviceBtn}>
				<div className={styles.btnWrapper}>
					<Button
						size={'small'}
						clickHandler={() => window.open(doc.url, '_blank')}
					>
						Читать в источнике
					</Button>
				</div>
				<p className={styles.words}>{doc.attributes.wordCount}</p>
			</div>
		</div>
	)
}

export default CardDocument
