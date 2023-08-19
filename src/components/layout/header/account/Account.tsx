import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import avatar from '../../../../../public/images/profile.png'
import styles from '../Header.module.scss'

interface IAccount {
	isAuthorized: boolean
}

const Account: FC<IAccount> = ({ isAuthorized = false }) => {
	const { push } = useRouter()

	return (
		<>
			{isAuthorized ? (
				<div className={styles.enter}>
					<button
						className={styles.registration}
						onClick={() => push('/registration')}
					>
						Зарегистрироваться
					</button>
					|
					<button className={styles.btnLogin} onClick={() => push('/login')}>
						Войти
					</button>
				</div>
			) : (
				<div className={styles.account}>
					<div className={styles.info}>
						<div className={styles.used}>
							Использовано компаний <span>34</span>
						</div>
						<div className={styles.limit}>
							Лимит по компаниям <span>100</span>
						</div>
					</div>

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
