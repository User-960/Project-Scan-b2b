import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Header.module.scss'
import Account from './account/Account'
import Burger from './burger/Burger'
import { menu } from './menu.data'

const Header: FC = () => {
	const { push } = useRouter()

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => push('/')}></div>

			<div className={styles.mobileMenu}>
				<Burger />
			</div>

			<div className={styles.desktopMenu}>
				<nav className={styles.menu}>
					<ul className={styles.listMenu}>
						{menu.map((item, index) => (
							<li key={`_menu_${index}`}>
								<Link href={`${item.link}`}>{item.title}</Link>
							</li>
						))}
					</ul>
				</nav>

				<Account isAuthorized={false} />
			</div>
		</header>
	)
}

export default Header
