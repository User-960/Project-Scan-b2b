import localFont from 'next/font/local'
import { FC } from 'react'

import styles from './Home.module.scss'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Home: FC = () => {
	return (
		<>
			<div className={styles.title}>Home</div>
			<div className={ferryFont.className}>Page</div>
		</>
	)
}

export default Home
