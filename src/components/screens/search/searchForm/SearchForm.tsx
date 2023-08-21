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
							label='ИНН компании*'
							type='text'
							placeholder='10 цифр'
							error={errors?.login?.message}
							name='login'
							register={register}
							required={'*Заполните поле ИНН!'}
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
