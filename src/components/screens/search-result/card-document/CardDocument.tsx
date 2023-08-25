import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import styles from './CardDocument.module.scss'

const CardDocument: FC = () => {
	return (
		<div className={styles.wrapperCard}>
			<div className={styles.serviceInfo}>
				<p className={styles.date}>13.09.2021</p>
				<Link className={styles.source} href={'#'}>
					Комсомольская правда KP.RU
				</Link>
			</div>
			<h6 className={styles.title}>
				Скиллфэктори - лучшая онлайн-школа для будущих айтишников
			</h6>
			<div className={styles.cardBadge}>Текущий тариф</div>
			<Image
				className={styles.cardImage}
				src={'/images/cardImage.jpg'}
				alt='Card Image'
				width={581}
				height={158}
				priority={true}
			/>
			<div className={styles.textInfo}>
				<p className={styles.text}>
					SkillFactory — школа для всех, кто хочет изменить свою карьеру и
					жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4
					континентов, самому взрослому студенту сейчас 86 лет. Выпускники
					работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru,
					Яндексе, Ozon и других топовых компаниях.
				</p>
				<br />
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
					<Button size={'small'} clickHandler={() => console.log('1')}>
						Читать в источнике
					</Button>
				</div>
				<p className={styles.words}>2 543 слова</p>
			</div>
		</div>
	)
}

export default CardDocument
