import { FC, Fragment, useState } from 'react'

import Button from '@/components/ui/button/Button'
import CheckboxField from '@/components/ui/field/SearchField/CheckboxField'
import DatePickerField from '@/components/ui/field/SearchField/DatePickerField'
import SearchField from '@/components/ui/field/SearchField/SearchField'
import SelectTonality from '@/components/ui/field/SearchField/SelectTonality'
import Loader from '@/components/ui/loader/Loader'

import { useSearchHistograms } from '@/components/hooks/useSearchHistograms'

import styles from './SearchForm.module.scss'

const SearchForm: FC = () => {
	const { register, handleSubmit, control, errors, isLoading, onSubmit } =
		useSearchHistograms()

	const [inn, setInn] = useState<string>('')

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInn(e.currentTarget.value)
	}

	return (
		<>
			<div className={styles.wrapper}>
				{isLoading ? (
					<div className={styles.loader}>
						<Loader loader='spinner' />
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
								value={inn}
								onChange={onChange}
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
								<CheckboxField
									id='excludeTechNews'
									label='Включать технические новости рынков'
									error={errors?.excludeTechNews?.message}
									name='excludeTechNews'
									register={register}
								/>
								<CheckboxField
									id='excludeAnnouncements'
									label='Включать анонсы и календари'
									error={errors?.excludeAnnouncements?.message}
									name='excludeAnnouncements'
									register={register}
								/>
								<CheckboxField
									id='excludeDigests'
									label='Включать сводки новостей'
									error={errors?.excludeDigests?.message}
									name='excludeDigests'
									register={register}
								/>
							</ul>

							<div className={styles.btnWrapper}>
								<Button
									ariaLabel='Search'
									size='medium'
									state={
										inn.length === 10 || inn.length === 12
											? 'btnAvailable'
											: 'btnBlock'
									}
								>
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
