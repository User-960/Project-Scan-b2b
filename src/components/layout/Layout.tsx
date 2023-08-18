import { FC, Fragment, ReactNode } from 'react'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'

// import Header from './header/Header'

interface ILayoutProps {
	bgImage?: any
	heading?: string
	backLink?: string
	children?: ReactNode

	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({
	bgImage = '',
	heading = '',
	backLink = '/',
	children,
	meta
}) => {
	return (
		<>
			<Meta title={meta.title} description={meta.description}>
				{/* <Header /> */}
				<main className={styles.wrapper}>
					{children && <Fragment>{children}</Fragment>}
				</main>
			</Meta>
		</>
	)
}

export default Layout
