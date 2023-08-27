import moment from 'moment'
import 'moment/locale/ru'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

import Button from '@/components/ui/button/Button'

import mainImage from '../../../.././../public/images/main.png'

import styles from './CardDocument.module.scss'
import { IScanDoc } from '@/interfaces/search'

const parseString = require('xml2js').parseString
interface ICarddocProps {
	doc: IScanDoc
}

const Carddoc: FC<ICarddocProps> = ({ doc }) => {
	const { push } = useRouter()

	const formatXMlImage = (strXML: string): any => {
		let test: string = ''
		const subString = '<br><img src='
		const subImage = `<br><img src="https://dummyimage.com/480x240">`
		if (strXML) {
			parseString(strXML, function (err: any, result: any) {
				test = result.scandoc._

				test ? test : (test = `${subImage}`)
			})
		}

		return test.length < 360
			? test.split(subString).join().split('>').join().slice(2, -2)
			: (test = `${subImage}`)
					.split(subString)
					.join()
					.split('>')
					.join()
					.slice(2, -2)
	}

	return (
		<div className={styles.wrapperCard}>
			<div className={styles.serviceInfo}>
				<p className={styles.date}>{moment(doc.issueDate).format('L')}</p>
				<Link className={styles.source} href={doc.url}>
					{doc.source.name}
				</Link>
			</div>
			<h6 className={styles.title}>{doc.title.text}</h6>
			<div className={styles.cardBadge}>Технические новости</div>
			<Image
				className={styles.cardImage}
				src={formatXMlImage(doc.content.markup)}
				alt='Card Image'
				width={550}
				height={290}
				priority={true}
			/>
			<div className={styles.textInfo}>
				{/* <p className={styles.text}>
					{parserStr.parseFromString(
						doc.content.markup,
						'application/xml'
					)}
				</p> */}
			</div>
			<div className={styles.serviceBtn}>
				<div className={styles.btnWrapper}>
					<Button size={'small'} clickHandler={() => push(doc.url)}>
						Читать в источнике
					</Button>
				</div>
				<p className={styles.words}>{doc.attributes.wordCount}</p>
			</div>
		</div>
	)
}

export default Carddoc
