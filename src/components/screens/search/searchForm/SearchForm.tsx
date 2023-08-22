import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import SearchField from '@/components/ui/field/SearchField/SearchField'
import SelectTonality from '@/components/ui/field/SearchField/SelectTonality'
import Loader from '@/components/ui/loader/Loader'

import { useNewWorkoutPage } from '@/components/hooks/useObjectSearch'

import styles from './SearchForm.module.scss'

const SearchForm: FC = () => {
	const {
		register,
		handleSubmit,
		control,
		errors,
		errorState,
		isLoading,
		isSuccess,
		onSubmit
	} = useNewWorkoutPage()

	return (
		<>
			<div className={styles.wrapper}>
				{isLoading ? (
					<div className={styles.loader}>
						<Loader />
					</div>
				) : (
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<SearchField
							id='inn'
							label='ИНН компании*'
							type='text'
							placeholder='10 цифр'
							error={errors?.inn?.message}
							name='inn'
							register={register}
							required={'*Заполните поле ИНН!'}
						/>

						<SelectTonality
							control={control}
							id='tonality'
							label='Тональность'
						/>

						<Button size='medium' state='btnAvailable'>
							Поиск
						</Button>
					</form>
				)}
			</div>
		</>
	)
}

export default SearchForm
