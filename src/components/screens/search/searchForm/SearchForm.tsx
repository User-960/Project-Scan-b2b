import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import CheckboxField from '@/components/ui/field/SearchField/CheckboxField'
import DatePickerField from '@/components/ui/field/SearchField/DatePickerField'
import SearchField from '@/components/ui/field/SearchField/SearchField'
import SelectTonality from '@/components/ui/field/SearchField/SelectTonality'
import Loader from '@/components/ui/loader/Loader'

import { useObjectSearch } from '@/components/hooks/useSearchHistograms'

import styles from './SearchForm.module.scss'

// const dataCheckbox = [
// 	{
// 		id: 'maxFullness',
// 		label: 'Признак максимальной полноты',
// 		name: 'maxFullness'
// 	},
// 	{
// 		id: 'inBusinessNews',
// 		label: 'Упоминания в бизнес-контексте',
// 		name: 'inBusinessNews'
// 	},
// 	{
// 		id: 'onlyMainRole',
// 		label: 'Главная роль в публикации',
// 		name: 'onlyMainRole'
// 	},
// 	{
// 		id: 'onlyWithRiskFactors',
// 		label: 'Публикации только с риск-факторами',
// 		name: 'onlyWithRiskFactors'
// 	},
// 	{
// 		id: 'maxFullness',
// 		label: 'Включать технические новости рынков',
// 		name: 'maxFullness'
// 	},
// 	{
// 		id: 'maxFullness',
// 		label: 'Включать анонсы и календари',
// 		name: 'maxFullness'
// 	},
// 	{
// 		id: 'maxFullness',
// 		label: 'Включать сводки новостей',
// 		name: 'maxFullness'
// 	}
// ]

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
						<div className={styles.fields}>
							<SearchField
								id='inn'
								label='ИНН компании*'
								type='text'
								placeholder='10 цифр'
								error={errors?.inn?.message}
								name='inn'
								register={register}
								required={'*Заполните поле ИНН!'}
								pattern={/^(([0-9]{12})|([0-9]{10}))?$/}
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
						</div>

						<div className={styles.checkboxes}>
							<ul className={styles.wrapperDatePicker}>
								<CheckboxField
									id='maxFullness'
									label='Признак максимальной полноты'
									error={errors?.maxFullness?.message}
									name='maxFullness'
									register={register}
								/>
								<CheckboxField
									id='inBusinessNews'
									label='Главная роль в публикации'
									error={errors?.inBusinessNews?.message}
									name='inBusinessNews'
									register={register}
								/>
								<CheckboxField
									id='onlyMainRole'
									label='Признак максимальной полноты'
									error={errors?.onlyMainRole?.message}
									name='onlyMainRole'
									register={register}
								/>
								<CheckboxField
									id='onlyWithRiskFactors'
									label='Публикации только с риск-факторами'
									error={errors?.onlyWithRiskFactors?.message}
									name='onlyWithRiskFactors'
									register={register}
								/>
								{/* <CheckboxField
									id='test1'
									label='Включать технические новости рынков'
									error={errors?.maxFullness?.message}
									name='maxFullness'
									register={register}
								/>
								<CheckboxField
									id='test2'
									label='Включать анонсы и календари'
									error={errors?.maxFullness?.message}
									name='maxFullness'
									register={register}
								/>
								<CheckboxField
									id='test3'
									label='Включать сводки новостей'
									error={errors?.maxFullness?.message}
									name='maxFullness'
									register={register}
								/> */}
							</ul>

							<div className={styles.btnWrapper}>
								<Button size='medium' state='btnAvailable'>
									Поиск
								</Button>
								<div className={styles.warningText}>
									* Обязательные к заполнению поля
								</div>
							</div>
						</div>
					</form>
				)}
			</div>
		</>
	)
}

export default SearchForm
