import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import AuthField from '@/components/ui/field/AuthField/AuthField'
import Loader from '@/components/ui/loader/Loader'

import styles from './SearchForm.module.scss'

const SearchForm: FC = () => {
	return (
		<>
			<div className={styles.wrapper}>
				{/* {isLoading ? (
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
							error={errorText}
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
				)} */}
			</div>
		</>
	)
}

export default SearchForm
