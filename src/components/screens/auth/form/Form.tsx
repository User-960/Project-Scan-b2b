import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import AuthField from '@/components/ui/field/AuthField/AuthField'

// import Loader from '@/components/ui/loader/Loader';
import { useAuthPage } from '@/components/hooks/useAuthPage'

import styles from './Form.module.scss'

const Form: FC = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

	return (
		<>
			<div className='wrapper-inner-page'>
				{/* {isLoading && <Loader />} */}
				{isLoading && <div>Loading...</div>}

				<form onSubmit={handleSubmit(onSubmit)}>
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
						error={errors?.password?.message}
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
						clickHandler={() => setType('login')}
					>
						Войти
					</Button>
				</form>
			</div>
		</>
	)
}

export default Form
