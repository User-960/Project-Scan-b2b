import moment from 'moment'
import 'moment/locale/ru'
import Image from 'next/image'
import Link from 'next/link'
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
	// <br><img src="https://storage.scan-interfax.ru/images/1%3A0JBlNdCB0LvQv9CL0ZgqGNC80YLQoy%2FCtdCf0JTigJ0BWw9IeeKAmtGRLF0o0IRG0JLQmOKAmQEfGlsf0LnRktC50ZQUYdCtWeKAlG9M0J%2FRldCt0IJH0Io1EtCefFDQtzljOdKQ0JnQu2co4oCeYylD0LEZ0ZrQkyVvHsK2TMKnMsKpBNCSSzjQgtC2OG5yBdCC"><br><img src="https://storage.scan-interfax.ru/images/1%3A0JBlNdCB0LvQv9CL0ZgqGNC80YLQoy%2FCtdCf0JTigJ0BWw9IeeKAmtGRLF0o0IRG0JLQmOKAmQEfGlsf0LnRktC50ZQUYdCtWeKAlG9qC9GS0YTigJokGHnQrTRuPCYV0LDCt9Cv0YXQrzvRjNCp0LnCpww1GNGETW7Qgy5FAyfihKLRjNCl0KzCmHhz0JjQlNCf0LHigJo7"><br><img src="https://storage.scan-interfax.ru/images/1%3A0JBlNdCB0LvQv9CL0ZgqGNC80YLQoy%2FCtdCf0JTigJ0BWw9IeeKAmtGRLF0o0IRG0JLQmOKAmQEfGlsf0LnRktC50ZQUYdCtWeKAlG%2FCuwXRgeKAotGVcz9i0KNz0JjRmtCD0L7Qvn0T0J3QgdGK0IJlUjVRKOKAlEDRnkZvJOKAmAfQmdGG0LXQsdGZwqtAf8K3adCK0L9lYQ%3D%3D">

	const formatXMl = (strXML: string): any => {
		let test: string = ''
		const subString = '<br><img src='
		const subImage = `<br><img src="https://dummyimage.com/480x240">`
		if (strXML) {
			parseString(strXML, function (err: any, result: any) {
				test = result.scandoc._

				test ? test : (test = `${subImage}`)
			})
		}

		return test.length < 300
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
				src={formatXMl(doc.content.markup)}
				alt='Card Image'
				width={581}
				height={158}
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
					<Button size={'small'} clickHandler={() => console.log('1')}>
						Читать в источнике
					</Button>
				</div>
				<p className={styles.words}>{doc.attributes.wordCount}</p>
			</div>
		</div>
	)
}

export default Carddoc
