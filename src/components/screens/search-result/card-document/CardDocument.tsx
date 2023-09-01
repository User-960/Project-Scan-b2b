import moment from 'moment'
import 'moment/locale/ru'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

import Button from '@/components/ui/button/Button'

import styles from './CardDocument.module.scss'
import { IScanDoc } from '@/interfaces/objectsearch.interface'

const parseString = require('xml2js').parseString
interface ICardDocumentProps {
	doc: IScanDoc
}

const CardDocument: FC<ICardDocumentProps> = ({ doc }) => {
	const { push } = useRouter()

	// const formatXMlText = (strXML: string): any => {
	// 	let test: any
	// 	let newText
	// 	if (strXML) {
	// 		parseString(strXML, function (err: any, result: any) {
	// 			test = result.scandoc.sentence
	// 			for (let i = 0; i < test.length; i++) {
	// 				let partStr
	// 				if (typeof test[i] !== 'string') {
	// 					partStr = test[i].entity
	// 				}
	// 			}
	// 			console.log(test)
	// 			// test ? test : (test = `${subImage}`)
	// 		})
	// 	}
	// }

	// const formatXMlText = (strXML: string): any => {
	// 	let test: any
	// 	let newText: any
	// 	if (strXML) {
	// 		parseString(strXML, function (err: any, result: any) {
	// 			test = result.scandoc.sentence
	// 			console.log(test)
	// 			// test ? test : (test = `${subImage}`)
	// 		})
	// 	}
	// 	const textArticle = document.getElementById('textArticle')
	// 	for (let i = 0; i < test.length; i++) {
	// 		// textArticle?.innerHTML(test[i])
	// 		for (let j = 0; j < test[i].length; j++) {
	// 			newText.push(test[i][j].join())
	// 		}
	// 	}
	// 	console.log(newText)
	// }

	const formatXMlImage = (strXML: string): any => {
		let test: string = ''
		const subString = '<br><img src='
		const subImage = `<br><img src="./images/img-none.svg">`
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
				{/* <p id='textArticle' className={styles.text}>
					{formatXMlText(doc.content.markup)}
				</p> */}
				{/* <br /> */}
				<p className={styles.text}>
					Принципы SkillFactory: акцент на практике, забота о студентах и
					ориентир на трудоустройство. 80% обучения — выполнение упражнений и
					реальных проектов. Каждого студента поддерживают менторы, 2
					саппорт-линии и комьюнити курса. А карьерный центр помогает составить
					резюме, подготовиться к собеседованиям и познакомиться с
					IT-рекрутерами.
				</p>
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
