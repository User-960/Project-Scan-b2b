import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/components/hooks/useAuth'

import avatar from '../../../../../public/images/profile.png'
import styles from '../Header.module.scss'

import Statistics from './Statistics'
import { ENUSER } from '@/config/app.constants'

interface IAccount {
	isAuthorized: boolean
}

const DynamicStatistics = dynamic(() => import('./Statistics'), {
	ssr: false
})

const Account: FC<IAccount> = ({ isAuthorized = false }) => {
	const { push } = useRouter()
	const { isAuth, setIsAuth } = useAuth()

	const logoutHandler = () => {
		Cookies.remove(ENUSER.TOKEN)
		setIsAuth(false)
		push('/auth')
	}

	return (
		<>
			{!isAuth ? (
				<div className={styles.enter}>
					<button className={styles.registration} onClick={() => push('/auth')} aria-label='Registration'>
						Зарегистрироваться
					</button>
					|
					<button className={styles.btnLogin} onClick={() => push('/auth')} aria-label='Login'>
						Войти
					</button>
				</div>
			) : (
				<div className={styles.account}>
					<DynamicStatistics />

					<div className={styles.profile}>
						<div className={styles.profileInfo}>
							<div className={styles.name}>Алексей А. </div>
							<Image
								src={avatar}
								width={32}
								height={32}
								alt='Avatar of the user'
								draggable={false}
							/>
						</div>
						<button className={styles.btnLogout} onClick={logoutHandler}>
							Выйти
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Account
