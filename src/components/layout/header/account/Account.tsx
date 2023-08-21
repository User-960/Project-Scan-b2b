import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/components/hooks/useAuth'

import avatar from '../../../../../public/images/profile.png'
import styles from '../Header.module.scss'

import Statistics from './Statistics'

interface IAccount {
	isAuthorized: boolean
}

const Account: FC<IAccount> = ({ isAuthorized = false }) => {
	const { push } = useRouter()
	const { isAuth } = useAuth()

	return (
		<>
			{!isAuth ? (
				<div className={styles.enter}>
					<button className={styles.registration} onClick={() => push('/auth')}>
						Зарегистрироваться
					</button>
					|
					<button className={styles.btnLogin} onClick={() => push('/auth')}>
						Войти
					</button>
				</div>
			) : (
				<div className={styles.account}>
					<Statistics />

					<div className={styles.profile}>
						<div className={styles.profileInfo}>
							<div className={styles.name}>Алексей А. </div>
							<Image
								src={avatar}
								width={32}
								height={32}
								alt='Avatar of the user'
							/>
						</div>
						<button
							className={styles.btnLogout}
							onClick={() => push('/logout')}
						>
							Выйти
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Account
