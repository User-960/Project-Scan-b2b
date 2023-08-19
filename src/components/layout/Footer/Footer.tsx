import { useRouter } from 'next/router'
import { FC } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	const { push } = useRouter()

	return (
		<footer className={styles.footer}>
			<div className={styles.logo} onClick={() => push('/')}></div>

			<div className={styles.info}>
				<p>г. Москва, Цветной б-р, 40</p>
				<p>+7 495 771 21 11</p>
				<p>info@skan.ru</p>
				<p>Copyright. 2022</p>
			</div>
		</footer>
	)
}

export default Footer
