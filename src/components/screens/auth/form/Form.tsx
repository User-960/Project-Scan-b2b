import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'

import Button from '@/components/ui/button/Button'
import AuthField from '@/components/ui/field/AuthField/AuthField'
import Loader from '@/components/ui/loader/Loader'
import { GlobalSvgSelector } from '@/components/ui/svg-selector/GlobalSvgSelector'
import { SocialSvgSelector } from '@/components/ui/svg-selector/SocialSvgSelector'

import { useAuth } from '@/components/hooks/useAuth'
import { useAuthPage } from '@/components/hooks/useAuthPage'

import styles from './Form.module.scss'

const Form: FC = () => {
	const [authType, setAuthType] = useState<'login' | 'register'>('login')

	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

	const { wrongLogin } = useAuth()

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.lockImg}>
					<GlobalSvgSelector id='lockFrom' />
				</div>

				<div className={styles.wrapperButtons}>
					<button
						className={cn(styles.btnType, {
							[styles.btnLogin]: authType === 'login'
						})}
						onClick={() => setAuthType('login')}
					>
						Войти
					</button>
					<button
						className={cn(styles.btnType, {
							[styles.btnRegister]: authType === 'register'
						})}
						onClick={() => setAuthType('register')}
					>
						Зарегистрироваться
					</button>
				</div>

				{isLoading ? (
					<div className={styles.loader}>
						<Loader />
					</div>
				) : (
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<AuthField
							id='login'
							label='Логин или номер телефона:'
							type='text'
							placeholder=''
							error={errors?.login?.message}
							name='login'
							register={register}
							required={'*Заполните поле логина!'}
						/>

						<AuthField
							id='password'
							label='Пароль:'
							type='password'
							placeholder=''
							error={wrongLogin ? wrongLogin : undefined}
							name='password'
							register={register}
							required={'*Заполните поле пароля!'}
							// pattern={
							// 	/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
							// }
						/>

						<Button
							size='medium'
							state='btnAvailable'
							clickHandler={() => setType(authType)}
						>
							{authType === 'login' ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</form>
				)}

				<Link className={styles.changePassword} href={'/change'}>
					Восстановить пароль
				</Link>

				<div className={styles.social}>
					<div className={styles.socialText}>Войти через:</div>
					<ul className={styles.socialList}>
						<li className={styles.socialItem}>
							<Link href='#'>
								<SocialSvgSelector id='google' />
							</Link>
						</li>
						<li className={styles.socialItem}>
							<Link href='#'>
								<SocialSvgSelector id='facebook' />
							</Link>
						</li>
						<li className={styles.socialItem}>
							<Link href='#'>
								<SocialSvgSelector id='yandex' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Form
