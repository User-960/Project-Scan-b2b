import cn from 'clsx'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'

import { useAuth } from '@/components/hooks/useAuth'

import { menu } from '../menu.data'

import styles from './Burger.module.scss'
import { ENUSER } from '@/config/app.constants'

interface IMenuProps {
	isShow: boolean
}

const Menu: FC<IMenuProps> = ({ isShow }) => {
	const { push } = useRouter()
	const { isAuth, setIsAuth } = useAuth()

	const logoutHandler = () => {
		Cookies.remove(ENUSER.TOKEN)
		setIsAuth(false)
		push('/auth')
	}

	return (
		<>
			<nav className={cn(styles.menu, { [styles.show]: isShow })}>
				<div className={styles.logo}></div>
				<ul className={styles.listMenu}>
					{menu.map((item, index) => (
						<li key={`_menu_${index}`}>
							<Link href={`${item.link}`}>{item.title}</Link>
						</li>
					))}
					{!isAuth ? (
						<>
							<li>
								<button
									className={styles.registration}
									onClick={() => push('/auth')}
									aria-label='Registration'
								>
									Зарегистрироваться
								</button>
							</li>
							<li>
								<button
									className={styles.btnLogin}
									onClick={() => push('/auth')}
									aria-label='Login'
								>
									Войти
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<button
									className={styles.btnLogin}
									onClick={logoutHandler}
									aria-label='Exit'
								>
									Выйти
								</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</>
	)
}

export default Menu
