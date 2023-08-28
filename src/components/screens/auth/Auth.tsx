import cn from 'clsx'
import localFont from 'next/font/local'
import Image from 'next/image'
import { FC, useEffect } from 'react'

import Alert from '@/components/ui/alert/Alert'

import { useAuth } from '@/components/hooks/useAuth'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Auth.module.scss'
import Form from './form/Form'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Auth: FC = () => {
	const meta: IMeta = {
		title: 'Вход',
		description: 'Enter to account'
	}

	const { wrongLogin, setWrongLogin } = useAuth()

	useEffect(() => {
		const timer = setTimeout(() => {
			setWrongLogin(null)
		}, 4000)
		return () => clearTimeout(timer)
	}, [wrongLogin])

	return (
		<Layout meta={meta}>
			<div className={styles.authWrapper}>
				<section className={styles.sectionTitle}>
					<h2 className={cn(ferryFont.className, styles.title)}>
						Для оформления подписки на тариф, необходимо авторизоваться.
					</h2>

					<Image
						src={'/images/characters.svg'}
						width={321}
						height={342}
						alt='Enter image'
						draggable={false}
					/>
				</section>

				{wrongLogin ? (
					<Alert type={'error'} text={wrongLogin} status={'checked'} />
				) : null}

				<Form />
			</div>
		</Layout>
	)
}

export default Auth
