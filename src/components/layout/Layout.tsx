import { FC, Fragment, ReactNode } from 'react'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

interface ILayoutProps {
	backLink?: string
	children?: ReactNode
	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({ backLink = '/', children, meta }) => {
	return (
		<>
			<Meta title={meta.title} description={meta.description}>
				<div className={styles.mainWrapper}>
					<Header />
					<main className={styles.contentWrapper}>
						{children && <Fragment>{children}</Fragment>}
					</main>
					<Footer />
				</div>
			</Meta>
		</>
	)
}

export default Layout
