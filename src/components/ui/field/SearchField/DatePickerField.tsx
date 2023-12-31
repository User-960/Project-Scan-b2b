import { DatePicker } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import { FC } from 'react'
import {
	Control,
	Controller,
	Message,
	Path,
	ValidationRule
} from 'react-hook-form'

import styles from './DatePickerField.module.scss'
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
	const disabledDate: RangePickerProps['disabledDate'] = current => {
		return current && current > dayjs().endOf('day')
	}

	return (
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
						inputReadOnly={true}
						ref={ref}
						disabledDate={disabledDate}
						className={styles.datePicker}
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
	)
}

export default DatePickerField
