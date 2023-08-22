import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { Props } from 'react-select'

import styles from './SearchField.module.scss'
import { ISearchFields, ITonalityOption } from '@/interfaces/form.interface'

interface ISelectTonalityProps extends Props<any> {
	control: Control<ISearchFields, any>
	id: string
	label: string
}

const SelectTonality: FC<ISelectTonalityProps> = ({ control, id, label }) => {
	const options: ITonalityOption[] = [
		{
			id: 1,
			value: 'any',
			label: 'Любая'
		},
		{
			id: 2,
			value: 'negative',
			label: 'Негативная'
		},
		{
			id: 3,
			value: 'positive',
			label: 'Позитивная'
		}
	]

	const getValue = (value: string) =>
		value ? options.find(option => option.value === value) : ''

	return (
		<Controller
			name='tonality'
			control={control}
			defaultValue={options[0].value}
			rules={{ required: 'Exercise is required!' }}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<div className={styles.fieldWrapper}>
					<label htmlFor={id} className={styles.label}>
						{label}
					</label>
					<ReactSelect
						classNamePrefix='select2-selection'
						value={getValue(value)}
						options={options}
						onChange={newValue => onChange((newValue as ITonalityOption).value)}
					/>
					{error && <div className='error'>{error.message}</div>}
				</div>
			)}
		/>
	)
}

export default SelectTonality
