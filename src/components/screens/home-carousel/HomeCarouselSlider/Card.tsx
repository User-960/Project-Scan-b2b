import Image from 'next/image'
import { FC } from 'react'

import styles from '../HomeCarousel.module.scss'

interface ICardProps {
	img: string
	text: string
}

const Card: FC<ICardProps> = ({ img, text }) => {
	return (
		<div className={styles.card}>
			<Image src={img} alt='time' width={64} height={64} />
			<p className={styles.cardText}>{text}</p>
		</div>
	)
}

export default Card
