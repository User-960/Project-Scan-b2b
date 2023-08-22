import cn from 'clsx'
import { FC } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from './CheckboxField.module.scss'
import { ISearchFields } from '@/interfaces/form.interface'

interface ISearchFieldProps {
	id: string
	label: string
	type: string
	register: UseFormRegister<ISearchFields>
	name: Path<ISearchFields>
	required?: Message | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
	error?: string
}

const CheckboxField: FC<ISearchFieldProps> = ({
	id,
	label,
	register,
	name,
	required,
	type,
	error,
	pattern
}) => {
	return (
		<div className={styles.fieldWrapper}>
			<label htmlFor={id} className='checkbox style-b'>
				<input id={id} type={type} {...register(name, { required, pattern })} />
				<div className='checkbox__checkmark'></div>
				<div className='checkbox__body'>{label}</div>
			</label>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default CheckboxField
