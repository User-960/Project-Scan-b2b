import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/components/hooks/useAuth'

import styles from './Header.module.scss'
import Account from './account/Account'
import Statistics from './account/Statistics'
import Burger from './burger/Burger'
import { menu } from './menu.data'

const Header: FC = () => {
	const { push } = useRouter()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => push('/')}></div>

			<div className={styles.mobileMenu}>
				{isAuth && <Statistics />}
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
