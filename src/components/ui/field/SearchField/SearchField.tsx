import { FC, useState } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from './SearchField.module.scss'
import { ISearchFields } from '@/interfaces/form.interface'

interface ISearchFieldProps {
	id: string
	label: string
	placeholder: string
	type: string
	min?: string
	max?: string
	register: UseFormRegister<ISearchFields>
	name: Path<ISearchFields>
	required: Message | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
	error?: string
	maxLengthRule?: any
	minLength?: any
	value?: string
	onChange?: any
}

const SearchField: FC<ISearchFieldProps> = ({
	id,
	label,
	register,
	name,
	required,
	placeholder,
	type,
	error,
	pattern,
	min,
	max,
	maxLengthRule,
	minLength,
	value,
	onChange
}) => {
	return (
		<div className={styles.fieldWrapper}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input
				id={id}
				placeholder={placeholder}
				type={type}
				min={min}
				max={max}
				{...register(name, {
					required,
					pattern
				})}
				value={value}
				className={styles.input}
				onChange={onChange}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default SearchField
