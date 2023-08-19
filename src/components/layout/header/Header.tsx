import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Header.module.scss'
import Account from './account/Account'

const Header: FC = () => {
	const { push } = useRouter()

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => push('/')}></div>

			<menu className={styles.menu}>
				<a href='#'>
					<span>Главная</span>
				</a>
				<a href='#'>
					<span>Тарифы</span>
				</a>
				<a href='#'>
					<span>FAQ</span>
				</a>
			</menu>

			<Account isAuthorized={false} />
		</header>
	)
}

export default Header
