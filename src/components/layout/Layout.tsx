import { useRouter } from 'next/router'
import { FC, Fragment, ReactNode } from 'react'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'
import stylesFooter from './footer/Footer.module.scss'
import Header from './header/Header'

interface ILayoutProps {
	backLink?: string
	children?: ReactNode
	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({ backLink = '/', children, meta }) => {
	const { push } = useRouter()

	return (
		<>
			<Meta title={meta.title} description={meta.description}>
				<div className={styles.mainWrapper}>
					<Header />

					<main className={styles.contentWrapper}>
						{children && <Fragment>{children}</Fragment>}
					</main>

					<footer className={stylesFooter.footer}>
						<div className={stylesFooter.logo} onClick={() => push('/')}></div>

						<div className={stylesFooter.info}>
							<p>г. Москва, Цветной б-р, 40</p>
							<p>+7 495 771 21 11</p>
							<p>info@skan.ru</p>
							<p>Copyright. 2022</p>
						</div>
					</footer>
				</div>
			</Meta>
		</>
	)
}

export default Layout
