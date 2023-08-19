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
				<Header />
				<main className={styles.wrapper}>
					{children && <Fragment>{children}</Fragment>}
				</main>
				<Footer />
			</Meta>
		</>
	)
}

export default Layout
