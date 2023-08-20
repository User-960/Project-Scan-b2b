import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Enter.module.scss'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Enter: FC = () => {
	const meta: IMeta = {
		title: 'Вход',
		description: 'Enter to account'
	}

	return (
		<Layout meta={meta}>
			<div className={styles.enter}>
				<section className={styles.sectionTitle}>
					<h2 className={cn(ferryFont.className, styles.title)}>
						Для оформления подписки на тариф, необходимо авторизоваться.
					</h2>

					<Image
						src={'/images/characters.svg'}
						width={321}
						height={342}
						alt='Enter image'
					/>
				</section>
			</div>
		</Layout>
	)
}

export default Enter
