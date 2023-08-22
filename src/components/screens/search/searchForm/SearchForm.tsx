import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import CheckboxField from '@/components/ui/field/SearchField/CheckboxField'
import DatePickerField from '@/components/ui/field/SearchField/DatePickerField'
import SearchField from '@/components/ui/field/SearchField/SearchField'
import SelectTonality from '@/components/ui/field/SearchField/SelectTonality'
import Loader from '@/components/ui/loader/Loader'

import { useObjectSearch } from '@/components/hooks/useObjectSearch'

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
	} = useObjectSearch()

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

						<SearchField
							id='limit'
							label='Количество документов в выдаче*'
							type='number'
							min={'1'}
							max={'1000'}
							placeholder='От 1 до 1000'
							error={errors?.limit?.message}
							name='limit'
							register={register}
							required={'*Заполните поле количество документов в выдаче!'}
						/>

						<div className={styles.wrapperDatePicker}>
							<div className={styles.label}>Диапазон поиска*</div>
							<div className={styles.fieldsDatePicker}>
								<DatePickerField
									control={control}
									name='startDate'
									placeholder='Дата начала'
									required={'*Укажите дату начала!'}
								/>

								<DatePickerField
									control={control}
									name='endDate'
									placeholder='Дата конца'
									required={'*Укажите дату конца!'}
								/>
							</div>
						</div>

						<div className={styles.wrapperDatePicker}>
							<CheckboxField
								id='maxFullness'
								label='Признак максимальной полноты'
								type='checkbox'
								error={errors?.maxFullness?.message}
								name='maxFullness'
								register={register}
							/>
						</div>

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
