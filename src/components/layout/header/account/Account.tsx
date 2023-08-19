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
					<button className={styles.registration} onClick={() => push('#')}>
						Зарегистрироваться
					</button>
					|
					<button className={styles.btnLogin} onClick={() => push('#')}>
						Войти
					</button>
				</div>
			) : (
				<div className={styles.account}>
					<div className={styles.profile}>
						<div className={styles.name}>Алексей А. </div>
						<Image
							src={avatar}
							width={32}
							height={32}
							alt='Avatar of the user'
						/>
					</div>
					<button className={styles.btnLogout}>Выйти</button>
				</div>
			)}
		</>
	)
}

export default Account
