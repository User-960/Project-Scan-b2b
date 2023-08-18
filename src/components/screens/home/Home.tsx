import localFont from 'next/font/local'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Главная',
		description: 'Check business correctly'
	}

	return (
		<Layout meta={meta}>
			<div className={styles.title}>Home</div>
			<div className={ferryFont.className}>Page</div>
		</Layout>
	)
}

export default Home
