import { DatePicker, DatePickerProps } from 'antd'
import dayjs from 'dayjs'
import { FC, useState } from 'react'
import {
	Control,
	Controller,
	Message,
	Path,
	ValidationRule
} from 'react-hook-form'

import styles from './SearchField.module.scss'
import { ISearchFields } from '@/interfaces/form.interface'

interface IDatePickerFieldProps {
	control: Control<ISearchFields, any>
	name: Path<ISearchFields>
	placeholder: string
	required: Message | ValidationRule<boolean>
}

const DatePickerField: FC<IDatePickerFieldProps> = ({
	control,
	name,
	placeholder,
	required
}) => {
	return (
		<div>
			<Controller
				name={name === 'startDate' ? 'startDate' : 'endDate'}
				control={control}
				rules={{
					required: required
				}}
				render={({
					field: { value, onChange, onBlur, ref },
					fieldState: { error }
				}) => (
					<div className={styles.fieldWrapper}>
						<DatePicker
							ref={ref}
							placeholder={placeholder}
							status={error ? 'error' : undefined}
							onBlur={onBlur}
							value={value ? dayjs(value) : null}
							onChange={date => {
								onChange(date ? date.valueOf() : null)
							}}
						/>
						{error && <div className='error'>{error.message}</div>}
					</div>
				)}
			/>
		</div>
	)
}

export default DatePickerField
