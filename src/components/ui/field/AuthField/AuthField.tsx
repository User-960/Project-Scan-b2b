import { FC } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from './Auth.module.scss'
import { IAuthFields } from '@/interfaces/form.interface'

interface IAuthFieldProps {
	id: string
	label: string
	placeholder: string
	type: string
	register: UseFormRegister<IAuthFields>
	name: Path<IAuthFields>
	required: Message | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
	error?: string
	value?: string
	onChange?: any
}

const AuthField: FC<IAuthFieldProps> = ({
	id,
	label,
	register,
	name,
	required,
	placeholder,
	type,
	error,
	pattern,
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
				{...register(name, { required, pattern })}
				className={styles.input}
				value={value}
				onChange={onChange}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default AuthField
