import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'

import { menu } from '../menu.data'

import styles from './Burger.module.scss'

interface IMenuProps {
	isShow: boolean
}

const Menu: FC<IMenuProps> = ({ isShow }) => {
	const { push } = useRouter()

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
					<li>
						<button
							className={styles.registration}
							onClick={() => push('/registration')}
						>
							Зарегистрироваться
						</button>
					</li>
					<li>
						<button className={styles.btnLogin} onClick={() => push('/login')}>
							Войти
						</button>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Menu
